// import React from "react";
import Lottie from "lottie-react";
import bg_Animation from "./bg_Animate.json";
import { https } from "../../Services/config";
import { localStorageServices } from "../../Services/localStorageServices";
import { Button, Form, Input, message } from "antd";
import { setLogin } from "../../redux/userStateSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
function LogInPage() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
    //login
    https
      .post("/api/QuanLyNguoiDung/DangNhap", values)
      .then((res) => {
        console.log(res);
        message.success("Đăng nhập thành công!!!");
        dispatch(setLogin(res.data.content));
        localStorageServices.setUser("USER_LOGIN", res.data.content);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        message.error("Đăng nhập thất bại!!!");
      });
  };
  return (
    <div className="h-screen flex items-center">
      <div className="w-2/5 h-[500px] pl-10">
        <Lottie
          animationData={bg_Animation}
          className="ml-8"
          loop={true}
          width="100%"
          height="100%"
        />
      </div>
      <div className="w-3/5">
        <div className="container p-10">
          <div className="flex bg-red-500 py-3 mb-5 rounded">
            <div className="w-1/2">
              <h1
                className="log text-center"
                onClick={() => {
                  navigate("/dang-nhap");
                }}
              >
                ĐĂNG NHẬP
              </h1>
            </div>
            <div className="w-1/2">
              <h1
                className="log text-center"
                onClick={() => {
                  navigate("/dang-ky");
                }}
              >
                ĐĂNG KÝ
              </h1>
            </div>
          </div>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Tài Khoản"
              name="taiKhoan"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
              initialValue={"nguyenvannam"}
            >
              <Input placeholder="nguyenvannam" />
            </Form.Item>
            <Form.Item
              label="Mật Khẩu"
              name="matKhau"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              initialValue={"123456"}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" danger block htmlType="submit">
                ĐĂNG NHẬP
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
