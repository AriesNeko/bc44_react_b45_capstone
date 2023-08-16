import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import { https } from "../../Services/config";
import ReactPlayer from "react-player/youtube";
function CarouselComponet() {
  const [movieArr, setMovieArr] = useState([]);
  useEffect(() => {
    https
      .get("/api/QuanLyPhim/LayDanhSachPhim/?maNhom=GP05")
      .then((res) => {
        console.log(res.data.content);
        setMovieArr(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Carousel autoplay className="pb-3">
      {movieArr.slice(0, 6).map((item, index) => {
        console.log(item);
        return (
          <div key={index}>
            <ReactPlayer url={item.trailer} width="100%" height={650} />
          </div>
        );
      })}
    </Carousel>
  );
}

export default CarouselComponet;
