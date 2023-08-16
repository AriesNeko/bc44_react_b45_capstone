import React, { useEffect, useState } from "react";
import { https } from "../../Services/config";
import { Button, Tabs } from "antd";
import moment from "moment";
const onChange = (key) => {
  console.log(key);
};

export default function TabsMovie() {
  const [heThongRap, setHeThongRap] = useState([]);
  useEffect(() => {
    https
      .get("api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP09")
      .then((res) => {
        console.log(res);
        setHeThongRap(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(heThongRap);

  let renderDsPhim = (danhSachPhim) => {
    return danhSachPhim.slice(0, 10).map((phim) => {
      return (
        <div className="flex border py-3 pl-6" key={phim.maPhim}>
          <div className="w-[30%] flex">
            <img
              src={phim.hinhAnh}
              width={100}
              height={100}
              className="object-cover ml-4 flex-shrink-0"
              alt=""
            />
          </div>
          <div className="w-3/5">
            <h3 className="text-lg font-bold pb-2">
              {phim.tenPhim} {phim.hot ? " ~ Phim Hot" : ""}
            </h3>
            <div className="grid grid-cols-2 gap-5">
              {phim.lstLichChieuTheoPhim.slice(0, 6).map((lichChieu) => {
                // moment js
                return (
                  <div key={lichChieu.maLichChieu}>
                    <Button type="primary" danger>
                      {moment(lichChieu.ngayChieuGioChieu).format(
                        "DD/MM/YYYY ~ hh:mm"
                      )}
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    });
  };
  let renderHeThongRap = () => {
    return heThongRap.map((heThong, index) => {
      console.log(heThong);
      return {
        key: index,
        label: <img width={80} height={80} src={heThong.logo} alt="" />,
        children: (
          <Tabs
            tabPosition="left"
            defaultActiveKey="1"
            className="h-[660px]"
            items={heThong.lstCumRap.map((cumRap) => {
              if (cumRap.maCumRap.includes("glx-nguyen-du")) {
                let maCumRap = cumRap.maCumRap;
                maCumRap.slice(14);
                cumRap.maCumRap = { ...cumRap.maCumRap, maCumRap };
              }
              return {
                key: cumRap.maCumRap,
                label: (
                  <div style={{ width: 400, height: 80 }} className="p-0">
                    <div className="text-left whitespace-normal h-64">
                      <h2 className="text-green-500 font-bold text-xl">
                        {cumRap.tenCumRap}
                      </h2>
                      <p className="truncate">{cumRap.diaChi}</p>
                    </div>
                  </div>
                ),
                children: (
                  <div className="h-[660px] overflow-y-scroll">
                    {renderDsPhim(cumRap.danhSachPhim)}
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
    <div className="container py-10">
      <h1 className="text-center text-red-500 pb-5 font-bold text-4xl">
        CÁC RẠP CHIẾU PHIM:
      </h1>
      <Tabs
        className="border-solid border h-[660px]"
        tabPosition="left"
        defaultActiveKey="1"
        items={renderHeThongRap()}
        onChange={onChange}
      />
    </div>
  );
}
