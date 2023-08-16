import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { https } from "../../Services/config";
import { useNavigate } from "react-router-dom";

function ListMovie() {
  const [movieArr, setMovieArr] = useState([]);
  const navigate = useNavigate();
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
      <h1 className="title pt-4 pb-4">LIST MOVIES</h1>
      <div className="container">
        <div className="row">
          {movieArr.slice(0, 6).map((item, index) => {
            return (
              <div
                className="col-6 p-3 list-item overflow-hidden cursor-pointer"
                style={{ borderRadius: "10px" }}
                key={index}
              >
                <div style={{}}>
                  <img
                    src={item.hinhAnh}
                    className="shadow w-full object-cover rounded-lg"
                    alt=""
                  />
                </div>

                <div className="overlay">
                  <div className="overlay-text">
                    <div className="m-auto">
                      <Button
                        type="primary"
                        danger
                        block
                        onClick={() => {
                          navigate(`/detail/${item.maPhim}`);
                        }}
                      >
                        XEM CHI TIẾT
                      </Button>
                      <Button
                        type="primary"
                        className="mt-2"
                        danger
                        block
                        onClick={() => {
                          navigate(`/detail/${item.maPhim}`);
                        }}
                      >
                        ĐẶT VÉ
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ListMovie;
