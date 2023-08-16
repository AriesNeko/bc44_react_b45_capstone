import React, { useState } from "react";
import { Button, Form, Input, message } from "antd";
import Lottie from "lottie-react";
import bg_Animation from "./bg_Animate.json";
import { https } from "../../Services/config";
import { useNavigate } from "react-router-dom";
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
function RegisterPage() {
  let navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("dữ liệu gửi đi: ", values);
    https
      .post("/api/QuanLyNguoiDung/DangKy", values)
      .then((res) => {
        console.log(res);
        if (res.status !== 200) throw new Error(`status: ${res}`);
        message.success("Đăng ký thành công!!!");
        setTimeout(() => {
          navigate("/dang-nhap");
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        message.error("Đăng ký thất bại!!!");
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
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
              residence: ["zhejiang", "hangzhou", "xihu"],
              prefix: "86",
            }}
            style={{
              maxWidth: 600,
            }}
            scrollToFirstError
          >
            <Form.Item
              name="hoTen"
              label="Họ Tên"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tên của bạn!!!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="soDt"
              label="Số điện thoại"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập số điện thoại của bạn!!!",
                },
              ]}
            >
              <Input type="number" />
            </Form.Item>

            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "Bạn nhập không đúng định dạng email!!!",
                },
                {
                  required: true,
                  message: "Vui lòng nhập email của bạn!!!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="matKhau"
              label="Mật Khẩu"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mật khẩu của bạn!!!",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={["matKhau"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập lại mật khẩu của bạn!!!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("matKhau") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "Mật khẩu bạn mới nhập không có giống với mất khẩu của bạn!!!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="taiKhoan"
              label="Tài Khoản"
              tooltip="Bạn muốn được gọi là gì?"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tên tài khoản!!!",
                },
                {
                  type: "string",
                  pattern: /^\S+$/,
                  message: "Tên tài khoản không được có khoảng cách!!!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" danger block htmlType="submit">
                Đăng Ký
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
