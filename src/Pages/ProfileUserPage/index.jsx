import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CYPERMOVIE_URL, TOKEN_CYPERSOFT } from "../../Constant";
import moment from "moment/moment";

function ProfileUserPage() {
  const { userInfo } = useSelector((state) => {
    return state.userSlice;
  });
  console.log(userInfo);
  const [account, setAccount] = useState({});
  const [listDatVe, setListDatVe] = useState([]);
  useEffect(() => {
    axios
      .create({
        baseURL: CYPERMOVIE_URL,
        headers: {
          TokenCybersoft: TOKEN_CYPERSOFT,
          Authorization: `Bearer ${userInfo.accessToken}`,
        },
      })
      .post("/api/QuanLyNguoiDung/ThongTinTaiKhoan")
      .then((res) => {
        console.log(res);
        setAccount(res.data.content);
        setListDatVe(res.data.content.thongTinDatVe);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container flex py-20">
      <div className="w-2/5">
        <img
          src="https://i.pravatar.cc/"
          width={400}
          className="mx-auto"
          alt=""
        />
      </div>
      <div className="w-3/5">
        <h1 className="text-3xl border-b-2 border-black pb-3 text-red-500 mb-3 font-bold">
          THÔNG TIN NGƯỜI DÙNG:
        </h1>
        <p className="text-2xl">
          Họ Tên: <strong>{account.hoTen}</strong>
        </p>
        <p className="text-2xl">Tài khoản: {account.taiKhoan}</p>
        <p className="text-2xl">Email: {account.email}</p>
        <p className="text-2xl">SĐT: {account.soDT}</p>
        <div className="border-2 border-black mt-3">
          <h1 className="text-3xl border-b-2 border-black text-center text-red-500 py-2 font-bold">
            LỊCH SỬ ĐẶT VÉ:
          </h1>
          <div className="h-[500px] overflow-y-scroll">
            {listDatVe.map((item, index) => {
              return (
                <div key={item.maVe} className="px-6 py-4">
                  <h1>Lần Đặt Thứ {index + 1}:</h1>
                  <p>
                    Tên Rạp:{" "}
                    <strong>{item.danhSachGhe[0].tenHeThongRap}</strong>
                  </p>
                  <p>Tên Phim: {item.tenPhim}.</p>
                  <p>
                    Ngày Đặt:{" "}
                    {moment(item.ngayDat).format("DD/MM/YYYY - hh:mm")}
                  </p>
                  <p>Thời Lượng Phim: {item.thoiLuongPhim} phút.</p>
                  <p>
                    Số Ghế:{" "}
                    {item.danhSachGhe.map((item, index) => {
                      return <span key={index}>{item.tenGhe} </span>;
                    })}
                  </p>
                  <p>Rạp: {item.danhSachGhe[0].tenRap}.</p>
                  <p>Giá Vé: {item.giaVe} đồng.</p>
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileUserPage;
