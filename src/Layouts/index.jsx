import React, { useState } from "react";
import {
  UserOutlined,
  HomeOutlined,
  ReadOutlined,
  LogoutOutlined,
  FormOutlined,
  UnorderedListOutlined,
  LoginOutlined,
  SwapOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Switch } from "antd";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { localStorageServices } from "../Services/localStorageServices";
import { setLogin } from "../redux/userStateSlice";
const { Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
function LayoutGlobal({ contentPage }) {
  const [theme, setTheme] = useState("white");
  const changeTheme = (value) => {
    setTheme(value ? "white" : "rgb(175, 173, 173)");
  };
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => {
    return state.userSlice;
  });
  let dispatch = useDispatch();
  let handleLogOut = () => {
    localStorageServices.removeUser();
    dispatch(setLogin(null));
    // window.location.reload();
    navigate("/");
  };
  console.log(userInfo);
  const createArrChildren = () => {
    if (userInfo !== null) {
      return [
        getItem(`${userInfo.hoTen}`, "3"),
        getItem(
          <p
            onClick={() => {
              navigate("/thong-tin-nguoi-dung");
            }}
          >
            Thông Tin
          </p>,
          "/thong-tin-nguoi-dung",
          <FormOutlined />
        ),
        getItem(
          <p onClick={handleLogOut}>Đăng Xuất</p>,
          "/dang-xuat",
          <LogoutOutlined />
        ),
      ];
    }
    return [
      getItem(
        <p
          onClick={() => {
            navigate("/dang-nhap");
          }}
        >
          Đăng Nhập
        </p>,
        "/dang-nhap",
        <LoginOutlined />
      ),
      getItem(
        <p
          onClick={() => {
            navigate("/dang-ky");
          }}
        >
          Đăng Ký
        </p>,
        "/dang-ky",
        <LogoutOutlined />
      ),
    ];
  };
  const items = [
    getItem(
      <h1
        className="logo"
        style={{ paddingTop: "7px" }}
        onClick={() => {
          navigate("/");
        }}
      >
        CAPSMOVIE
      </h1>,
      "/",
      <HomeOutlined
        onClick={() => {
          navigate("/");
        }}
      />
    ),
    getItem(
      <p
        onClick={() => {
          navigate("/list-movie-page");
        }}
      >
        Phim
      </p>,
      "/list-movie-page",
      <UnorderedListOutlined
        onClick={() => {
          navigate("/list-movie-page");
        }}
      />
    ),
    getItem(
      <p
        onClick={() => {
          navigate("/rap-phim");
        }}
      >
        Rạp Phim
      </p>,
      "/rap-phim",
      <ReadOutlined
        onClick={() => {
          navigate("/rap-phim");
        }}
      />
    ),
    getItem(<p>Khách Hàng</p>, "sub1", <UserOutlined />, createArrChildren()),
    getItem(
      <Switch
        checked={theme === "white"}
        onChange={changeTheme}
        checkedChildren="Light"
        unCheckedChildren="Gray"
      />,
      "switch",
      <SwapOutlined />
    ),
  ];

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout style={{ backgroundColor: theme }}>
        <Header />
        {contentPage}
        <Footer />
      </Layout>
    </Layout>
  );
}
export default LayoutGlobal;
