import { createSlice } from "@reduxjs/toolkit";
// import { quanLyDatVeApi } from "./../../Api/QuanLyDatVeApi";
// import { STATE_CODE } from "../../Api/BaseApi";
import { https } from "../Services/config";

const initialState = {
  danhSachPhongVe: {},
  danhSachGheDangChon: [],
  danhSachGheNguoiKhacChon: [{ maGhe: 69962 }, { maGhe: 69963 }],
  thanhToan: "0",
  isDatVe: false,
};

const QuanLyDatVeSlice = createSlice({
  name: "QuanLyDatVeSlice",
  initialState,
  reducers: {
    layDanhSachPhongVeREDU: (state, { type, payload }) => {
      state.danhSachPhongVe = payload;
    },
    gheDangChonREDU: (state, { type, payload }) => {
      const ghe = payload;
      // nếu ghế đã được đặt thì return
      if (ghe.daDat) return;
      const index = state.danhSachGheDangChon.findIndex(
        (itemSelect) => itemSelect.maGhe === ghe.maGhe
      );
      if (index !== -1) {
        state.danhSachGheDangChon = state.danhSachGheDangChon.filter(
          (item) => item.maGhe !== payload.maGhe
        );
      }
      if (index === -1) {
        state.danhSachGheDangChon.push(ghe);
      }
    },
    resetThanhToanREDU: (state) => {
      state.danhSachGheDangChon = [];
    },
    selectedThanhToanREDU: (state, { payload }) => {
      state.thanhToan = payload;
    },
    setDatVeREDU: (state, { type, payload }) => {
      state.isDatVe = payload;
    },
  },
});

export const {
  resetThanhToanREDU,
  selectedThanhToanREDU,
  layDanhSachPhongVeREDU,
  gheDangChonREDU,
  setDatVeREDU,
} = QuanLyDatVeSlice.actions;

export default QuanLyDatVeSlice.reducer;

// -------------------action thunk ------------------

// layDanhSachPhongVeMID
export const layDanhSachPhongVeMID = (id) => {
  return async (dispatch) => {
    try {
      const { data, status } = await https.get(
        `api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`
      );
      console.log("layDanhSachPhongVeMID", { data, status });

      dispatch(layDanhSachPhongVeREDU(data.content));
    } catch (error) {
      console.log(error);
    }
  };
};

// datVeMID
export const datVeMID = (requestData) => {
  return async (dispatch) => {
    try {
      console.log(requestData);
      const { data, status } = await https.post(
        `api/QuanLyDatVe/DatVe`,
        requestData
      );
      console.log("datVeMID", { data, status });

      dispatch(resetThanhToanREDU());
      await dispatch(layDanhSachPhongVeMID(requestData.maLichChieu));
    } catch (error) {
      console.log(error);
    }
  };
};
