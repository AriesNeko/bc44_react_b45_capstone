import React from "react";
import {
  VideoCameraFilled,
  FacebookFilled,
  YoutubeFilled,
  InstagramFilled,
  GithubFilled,
  GitlabFilled,
  UsergroupAddOutlined,
  IdcardFilled,
  PhoneOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-item">
        <h1
          className="footer-title"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          <VideoCameraFilled /> CAPSMOVIE
        </h1>

        <div className="text-red-600 text-3xl py-3">
          <span className="pr-4 pl-3">
            <FacebookFilled />
          </span>
          <span className="pr-4">
            <YoutubeFilled />
          </span>
          <span className="pr-4">
            <InstagramFilled />
          </span>
          <span className="pr-4">
            <GithubFilled />
          </span>
          <span>
            <GitlabFilled />
          </span>
        </div>
      </div>
      <div className="footer-item">
        <h1 className="footer-title">WEB SERVICES</h1>
        <p
          className="footer-list"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Trang Chủ
        </p>
        <p
          className="footer-list"
          onClick={() => {
            window.location.href = "/list-movie-page";
          }}
        >
          Trang Phim
        </p>
        <p
          className="footer-list"
          onClick={() => {
            window.location.href = "/detail";
          }}
        >
          Trang Thông Tin Phim
        </p>
        <p
          className="footer-list"
          onClick={() => {
            window.location.href = "/rap-phim";
          }}
        >
          Trang Rạp Phim
        </p>
        <p
          className="footer-list"
          onClick={() => {
            window.location.href = "/dat-ve";
          }}
        >
          Trang Đặt Vé Phim
        </p>
        <p
          className="footer-list"
          onClick={() => {
            window.location.href = "/thong-tin-nguoi-dung";
          }}
        >
          Trang Thông Tin Người Dùng
        </p>
      </div>
      <div className="footer-item">
        <h1 className="footer-title">ABOUT US</h1>
        <p>HTML / CSS</p>
        <p>BootStrap CSS</p>
        <p>React JS</p>
        <p>TailWind CSS</p>
        <p>AntDesign</p>
      </div>
      <div className="footer-item">
        <h1 className="footer-title">
          CONTACT US <UsergroupAddOutlined />
        </h1>
        <p className="pb-2">
          <IdcardFilled className="text-2xl" />
        </p>
        <p className="pb-2">
          <IdcardFilled className="text-2xl" /> vannam129001@gmail.com
        </p>
        <p className="pb-2">
          <PhoneOutlined className="text-2xl" /> 0938120771
        </p>
        <p>
          <GlobalOutlined className="text-2xl" /> CyperSoft, Ho Chi Minh, Viet
          Nam
        </p>
      </div>
    </div>
  );
}

export default Footer;
