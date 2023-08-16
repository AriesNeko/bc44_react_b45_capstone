import { Col, Row } from "antd";
import React from "react";
import { Card } from "antd";
const { Meta } = Card;
function News() {
  return (
    <div className="container pb-5">
      <h1 className="title pt-5 pb-5">CAPS NEWS</h1>
      <Row>
        <Col span={8} className="pb-5">
          <a
            href="https://www.nextflicks.tv/vi/review/black-summer-netflix/"
            target="blank"
            className="cursor-pointer"
            style={{ textDecoration: "none" }}
          >
            <Card
              className="m-auto border border-solid"
              hoverable
              style={{
                width: 350,
                height: 560,
              }}
              cover={
                <div className="h-[400px]">
                  <img
                    alt="example"
                    className="h-full w-full"
                    src="https://reviewchodzui.com/wp-content/uploads/2021/06/thumbblacksummer.jpg"
                  />
                </div>
              }
            >
              <Meta
                title="Mùa hè đen"
                description={
                  <p>
                    Nếu bạn yêu thích 'The Walking Dead' của HBO, thì bạn sẽ
                    thích 'Black Summer' từ Netflix. Bộ truyện lấy những yếu tố
                    tốt nhất của thể loại Zombie và xoay quanh một câu chuyện
                    sinh tồn hấp dẫn trong bối cảnh hậu khải huyền.
                  </p>
                }
              />
            </Card>
          </a>
        </Col>
        <Col span={8}>
          <a
            href="https://laodong.vn/giai-tri/lisa-blackpink-xuat-hien-cung-ban-trai-tin-don-frederic-arnault-1228765.ldo"
            target="blank"
            className="cursor-pointer"
            style={{ textDecoration: "none" }}
          >
            <Card
              className="m-auto border border-solid"
              hoverable
              style={{
                width: 350,
                height: 560,
              }}
              cover={
                <div className="h-[400px]">
                  <img
                    alt="example"
                    className="h-full w-full"
                    src="https://media-cdn-v2.laodong.vn/storage/newsportal/2023/8/14/1228765/Lisa---Frederic-Arna.JPEG"
                  />
                </div>
              }
            >
              <Meta
                title="Lisa (Blackpink) xuất hiện cùng bạn trai tin đồn Frédéric Arnault"
                description={
                  <p>
                    Tối 14.8, mạng xã hội xôn xao với hình ảnh nữ thần tượng
                    Lisa (thành viên nhóm Blackpink) và “bạn trai tin đồn”
                    Frédéric Arnault được bắt gặp cùng xuất hiện ở phòng chờ
                    thượng hạng Private Suites dành cho giới siêu giàu
                  </p>
                }
              />
            </Card>
          </a>
        </Col>
        <Col span={8}>
          <a
            href="https://thanhnien.vn/jason-statham-tay-khong-doi-dau-ca-map-bao-chua-trong-meg-2-185230509143711371.htm#"
            target="blank"
            className="cursor-pointer"
            style={{ textDecoration: "none" }}
          >
            <Card
              className="m-auto border border-solid"
              hoverable
              style={{
                width: 350,
                height: 560,
              }}
              cover={
                <div className="h-[400px]">
                  <img
                    alt="example"
                    className="h-full w-full"
                    src="https://images2.thanhnien.vn/thumb_w/640/528068263637045248/2023/5/9/vnvietnammeg2instavertmain1638x2048intl-1683617407262723388676.jpg"
                  />
                </div>
              }
            >
              <Meta
                title="Jason Statham tay không đối đầu cá mập bạo chúa trong 'Meg 2'"
                description={
                  <p>
                    Tựa phim cá mập ăn khách của Hollywood - The Meg sẽ trở lại
                    với phần phim tiếp theo mang tên Meg 2...
                  </p>
                }
              />
            </Card>
          </a>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <a
            href="https://tuoitre.vn/park-seo-joon-lo-dien-trong-phim-marvel-hai-huoc-hay-qua-xau-20230412090503453.htm"
            target="blank"
            className="cursor-pointer"
            style={{ textDecoration: "none" }}
          >
            <Card
              className="m-auto border border-solid"
              hoverable
              style={{
                width: 350,
                height: 560,
              }}
              cover={
                <div className="h-[400px]">
                  <img
                    alt="example"
                    className="h-full w-full"
                    src="https://cdn.tuoitre.vn/thumb_w/730/471584752817336320/2023/4/12/park-seo-jooon-1681264165234794010948.jpg"
                  />
                </div>
              }
            >
              <Meta
                title="Park Seo Joon lộ diện trong phim Marvel: Hài hước hay quá xấu?"
                description={
                  <p>
                    Chỉ xuất hiện 1 giây, hình ảnh đầu tiên của Park Seo Joon
                    trong trailer 'The Marvels' gây chú ý. Dân mạng cho rằng tạo
                    hình của anh hài hước, gây cười.
                  </p>
                }
              />
            </Card>
          </a>
        </Col>
        <Col span={8}>
          <a
            href="https://vtv.vn/van-hoa-giai-tri/avatar-the-way-of-water-da-tro-thanh-phim-co-doanh-thu-cao-thu-4-moi-thoi-dai-20230131210353034.htm"
            target="blank"
            className="cursor-pointer"
            style={{ textDecoration: "none" }}
          >
            <Card
              className="m-auto border border-solid"
              hoverable
              style={{
                width: 350,
                height: 560,
              }}
              cover={
                <div className="h-[400px]">
                  <img
                    alt="example"
                    className="h-full w-full"
                    src="https://baoninhbinh.org.vn/DATA/ARTICLES/2023/1/31/avatar-phan-2-lot-top-4-phim-co-doanh-thu-cao-nhat-moi-thoi-3c06a.jpeg"
                  />
                </div>
              }
            >
              <Meta
                title="Avatar: The Way of Water đã trở thành phim có doanh thu cao thứ 4 mọi thời đại"
                description={
                  <p>
                    VTV.vn - Bộ phim dự kiến sẽ còn xếp hạng cao hơn nữa trên
                    bảng xếp hạng doanh thu mọi thời đại này.
                  </p>
                }
              />
            </Card>
          </a>
        </Col>
        <Col span={8}>
          <a
            href="https://baocantho.com.vn/-transformers-7-dan-robot-moi-khoi-dau-moi-a160855.html"
            target="blank"
            className="cursor-pointer"
            style={{ textDecoration: "none" }}
          >
            <Card
              className="m-auto border border-solid"
              hoverable
              style={{
                width: 350,
                height: 560,
              }}
              cover={
                <div className="h-[400px]">
                  <img
                    alt="example"
                    className="h-full w-full"
                    src="https://baocantho.com.vn/image/fckeditor/upload/2023/20230615/images/T13-a1.jpg"
                  />
                </div>
              }
            >
              <Meta
                title="Transformers 7 - Dàn robot mới, khởi đầu mới"
                description={
                  <p>
                    “Transformers: Rise Of The Beasts” (Transformers: Quái thú
                    trỗi dậy) là phần 7 của loạt phim về robot biến hình nổi
                    tiếng...
                  </p>
                }
              />
            </Card>
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default News;
