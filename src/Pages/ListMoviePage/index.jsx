import React, { useEffect, useState } from "react";
import { Button, Col, Row, Typography } from "antd";
import { https } from "../../Services/config";
import moment from "moment";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;
const { Paragraph } = Typography;

function ListMovie() {
  const navigate = useNavigate();
  const [movieArr, setMovieArr] = useState([]);
  useEffect(() => {
    https
      .get("/api/QuanLyPhim/LayDanhSachPhim/?maNhom=GP09")
      .then((res) => {
        console.log(res);
        setMovieArr(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1 className="title p-4">LIST MOVIES</h1>
      <div className="container">
        <Row span={24} gutter={[32, 32]}>
          {movieArr.map((item) => {
            return (
              <Col span={12} className="justify-center">
                <Card
                  className="m-auto border border-solid h-full"
                  key={item.maPhim}
                  hoverable
                  style={{}}
                  cover={
                    <div style={{}}>
                      <img
                        alt="example"
                        className="object-coverw-full"
                        src={item.hinhAnh}
                      />
                    </div>
                  }
                >
                  <Meta
                    title={item.tenPhim}
                    description={
                      <div>
                        <Paragraph
                          ellipsis={{
                            rows: 3,
                          }}
                        >
                          {item.moTa}
                        </Paragraph>
                        <p>Điểm Đánh Giá: {item.danhGia}</p>
                        <p>
                          Ngày Khởi Chiếu:{" "}
                          {moment(item.ngayChieuGioChieu).format("DD/MM/YYYY")}
                        </p>
                      </div>
                    }
                  />
                  <Button
                    type="primary"
                    block
                    danger
                    className="mt-3"
                    onClick={() => {
                      navigate(`/detail/${item.maPhim}`);
                    }}
                  >
                    XEM CHI TIẾT
                  </Button>
                  <Button
                    type="primary"
                    block
                    danger
                    className="mt-2"
                    onClick={() => {
                      navigate(`/detail/${item.maPhim}`);
                    }}
                  >
                    ĐẶT VÉ
                  </Button>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default ListMovie;
