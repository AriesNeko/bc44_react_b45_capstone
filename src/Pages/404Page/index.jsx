import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="">
      <h1 className="text-6xl text-center text-red-500 font-bold shadow py-10">
        404 Page Not Found
      </h1>
      <div className="gif h-[400px] py-10">
        <img src="https://i.postimg.cc/2yrFyxKv/giphy.gif" alt="gif_ing" />
      </div>
      <div className="text-center">
        <Button
          type="primary"
          danger
          onClick={() => {
            navigate("/");
          }}
        >
          Quay Lại Trang Chủ
        </Button>
      </div>
    </div>
  );
}

export default NotFoundPage;
