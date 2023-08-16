import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LayoutGlobal from "./Layouts";
import HomePage from "./Pages/HomePage";
import DetailPage from "./Pages/Details";
import NotFoundPage from "./Pages/404Page";
import ListMoviePage from "./Pages/ListMoviePage";
import RapPhim from "./Pages/RapPhim";
import BookingPage from "./Pages/BookingPage";
import ProfileUserPage from "./Pages/ProfileUserPage";
import LogInPage from "./Pages/LogIn-LogOut/LogInPage";
import RegisterPage from "./Pages/LogIn-LogOut/RegisterPage";
import Spinner from "./Components/Spinner";
function App() {
  return (
    <div>
      <Spinner />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<LayoutGlobal contentPage={<HomePage />} />}
          />
          <Route
            path="/list-movie-page"
            element={<LayoutGlobal contentPage={<ListMoviePage />} />}
          />
          <Route
            path="/detail/:id"
            element={<LayoutGlobal contentPage={<DetailPage />} />}
          />
          <Route
            path="/rap-phim"
            element={<LayoutGlobal contentPage={<RapPhim />} />}
          />
          <Route
            path="/dat-ve/:id"
            element={<LayoutGlobal contentPage={<BookingPage />} />}
          />
          <Route
            path="/dang-nhap"
            element={<LayoutGlobal contentPage={<LogInPage />} />}
          />
          <Route
            path="/dang-ky"
            element={<LayoutGlobal contentPage={<RegisterPage />} />}
          />
          <Route
            path="/thong-tin-nguoi-dung"
            element={<LayoutGlobal contentPage={<ProfileUserPage />} />}
          />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to={"/404"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
