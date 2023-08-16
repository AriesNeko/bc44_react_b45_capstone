import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { https } from "../../Services/config";
import Progress from "antd/es/progress/progress";
import ReactPlayer from "react-player/youtube";
import { Col, Row, Button, Modal, Tabs } from "antd";
import moment from "moment";
// import { useSelector } from "react-redux";
const onChange = (key) => {
  console.log(key);
};

function DetailMovie() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  // const { userInfo } = useSelector((state) => {
  //   return state.userSlice;
  // });
  let { id } = useParams();
  console.log(id);
  const [movie, setMovie] = useState({});
  const [heThongRap, setHeThongRap] = useState();
  useEffect(() => {
    console.log(id);
    https
      .get(`api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
      .then((res) => {
        console.log(res.data.content);
        setMovie(res.data.content);
        if (res.data.content.heThongRapChieu.length !== 0) {
          setHeThongRap(res.data.content.heThongRapChieu);
        } else {
          setHeThongRap(null);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  let renderDsPhim = (lichChieuPhim) => {
    return lichChieuPhim.map((phim) => {
      console.log(phim);
      return (
        <div className="py-4 pl-10" key={phim.maLichChieu}>
          <Button
            type="primary"
            danger
            onClick={() => {
              navigate(`/dat-ve/${phim.maLichChieu}`);
            }}
          >
            {moment(phim.ngayChieuGioChieu).format("DD/MM/YYYY ~ hh:mm")}
          </Button>
        </div>
      );
    });
  };
  let renderHeThongRap = () => {
    return heThongRap?.map((heThong, index) => {
      console.log(heThong);
      return {
        key: index,
        label: <img width={50} height={50} src={heThong.logo} alt="" />,
        children: (
          <Tabs
            tabPosition="left"
            style={{ height: 400 }}
            defaultActiveKey="1"
            items={heThong.cumRapChieu.map((cumRap, index) => {
              return {
                key: index,
                label: (
                  <div className="w-[400px] h-20">
                    <div className="text-left whitespace-normal h-40">
                      <h2 className="text-green-500 font-bold text-xl">
                        {cumRap.tenCumRap}
                      </h2>
                      <p className="truncate">{cumRap.diaChi}</p>
                    </div>
                  </div>
                ),
                children: (
                  <div className="overflow-hidden">
                    {renderDsPhim(cumRap.lichChieuPhim)}
                  </div>
                ),
              };
            })}
          />
        ),
      };
    });
  };
  return (
    <div className="container pt-5 pb-5">
      <h1 className="page-detail-title">NỘI DUNG PHIM:</h1>
      <Row gutter={[20, 20]}>
        <Col span={8}>
          <img
            src={movie.hinhAnh}
            width="100%"
            className="object-cover rounded-lg mt-3"
            alt=""
          />
        </Col>
        <Col span={16}>
          <div>
            <h1 className="pt-2 pb-3 text-2xl font-bold">
              Tên Phim: {movie.tenPhim}
            </h1>
            <hr />
            <p className="pt-3">
              Loại Phim:{" "}
              {movie.dangChieu ? "Phim Đang Chiếu" : "Phim Sắp Chiếu"}
            </p>
            <p>{movie.hot ? "Phim Hot" : ""}</p>
            <p>
              Ngày Khởi Chiếu:{" "}
              {moment(movie.ngayKhoiChieu).format("DD/MM/YYYY - hh:mm")}
            </p>
            <p>Mô Tả: {movie.moTa}</p>
            <p>
              Điểm Đánh Giá:{" "}
              <Progress strokeLinecap="round" percent={movie.danhGia * 10} />
            </p>
            <Button type="primary" danger block onClick={() => setOpen(true)}>
              XEM TRAILER
            </Button>
            <Modal
              title={movie.tenPhim}
              centered
              open={open}
              onCancel={() => setOpen(false)}
              width={1000}
            >
              <ReactPlayer url={movie.trailer} width="100%" height={400} />
            </Modal>
          </div>
        </Col>
      </Row>
      <div className="pt-4">
        <h1 className="text-4xl font-bold py-3 border-b-2 border-b-black mb-5">
          LỊCH CHIẾU PHIM:
        </h1>
        {heThongRap === null ? (
          <p>Chưa Có Lịch Chiếu Phim Này Mời Bạn Quay Lại Chọn Phim Khác.</p>
        ) : (
          <Tabs
            className="w-[800px] border mx-auto"
            style={{ height: 400 }}
            tabPosition="left"
            defaultActiveKey="1"
            items={renderHeThongRap()}
            onChange={onChange}
          />
        )}
      </div>
    </div>
  );
}

export default DetailMovie;
