import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Chair from "./Chair";
import { useDispatch, useSelector } from "react-redux";
import { datVeMID, layDanhSachPhongVeMID } from "../../redux/quanLyDatVe";
import style from "./Content.module.css";
import Note from "./Note";
import { Button } from "antd";
function BookingPage() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(layDanhSachPhongVeMID(id));
  }, []);
  const { danhSachGheDangChon, danhSachPhongVe } = useSelector(
    (state) => state.QuanLyDatVeSlice
  );
  const { userInfo } = useSelector((state) => {
    return state.userSlice;
  });
  const { thongTinPhim } = danhSachPhongVe;
  const handleDatVe = () => {
    if (userInfo !== null) {
      const data = { maLichChieu: id, danhSachVe: danhSachGheDangChon };
      dispatch(datVeMID(data));
      alert("Chúc mừng bạn đã đặt vé thành công!!! Cảm ơn và hẹn gặp lại!!!");
    } else {
      alert("Bạn chưa đăng nhập!!! Mời bạn đăng nhập để đặt vé!!!");
      setTimeout(() => {
        navigate("/dang-nhap");
      }, 2000);
    }
  };
  const renderGia = () => {
    let gia = 0;
    danhSachGheDangChon.forEach((ghe) => {
      gia += +ghe.giaVe;
    });
    console.log(gia);
    // return gia;
    return new Intl.NumberFormat(navigator.language).format(gia);
  };
  const renderGhe = () => {
    let dsGheDangChon = "";
    danhSachGheDangChon.forEach((ghe) => {
      dsGheDangChon += `${ghe.tenGhe}, `;
    });
    return dsGheDangChon;
  };
  return (
    <div className="flex">
      <div className="w-3/5">
        <div>
          <div className={`${style.screen} py-8`}>
            <div className="flex justify-center items-center">
              <p className="text-center text-3xl font-bold">SCREEN</p>
            </div>
          </div>
        </div>
        <Chair />
        <Note />
      </div>
      <div className="w-2/5 py-8 px-3">
        <div className="border px-3">
          <img
            src={thongTinPhim?.hinhAnh}
            width="100%"
            height={300}
            className="mx-auto py-3"
            alt=""
          />
          <h1 className="text-2xl text-center font-bold py-3">
            TÊN PHIM: <strong>{thongTinPhim?.tenPhim}</strong>
          </h1>
          <hr />
          <p className="py-3 text-green-500">
            Tên Rạp:{" "}
            <span className="text-black">{thongTinPhim?.tenCumRap}</span>
          </p>
          <hr />
          <p className="py-3 text-green-500">
            Địa Chỉ: <span className="text-black">{thongTinPhim?.diaChi}</span>
          </p>
          <hr />
          <p className="py-3 text-green-500">
            Rạp: <span className="text-black">{thongTinPhim?.tenRap}</span>
          </p>
          <hr />
          <p className="py-3 text-green-500">
            Ngày Chiếu Giờ Chiếu:{" "}
            <span className="text-black">
              {thongTinPhim?.ngayChieu} ~ {thongTinPhim?.gioChieu}
            </span>
          </p>
          <hr />
          <p className="py-3 text-green-500">
            Ghế Đã chọn: <span className="text-black">{renderGhe()}</span>
          </p>
          <hr />
          <p className="text-xl font-bold text-green-500 py-3">
            Tổng Tiền: <span>{renderGia()}đ</span>
          </p>
          <hr />
          <Button
            className="my-3 text-xl"
            type="primary"
            danger
            block
            onClick={handleDatVe}
          >
            Đặt Vé
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BookingPage;
