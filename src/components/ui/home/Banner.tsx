/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Image from "../../image";
import bannerImgOne from "../../../assets/image/banner/bannerImgOne.webp";
import bannerImgTwo from "../../../assets/image/banner/bannerImgTwo.webp";
import bannerImgThree from "../../../assets/image/banner/bannerImgThree.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import {
//   bannerImgOne,
//   bannerImgTwo,
//   bannerImgThree,
// } from "../../assets/images";
// import Image from "../designLayouts/Image";

const Banner = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev: any, next: any) => {
      setDocActive(next);
    },
    appendDots: (dots: any) => (
      <div
        style={{
          width: "10%",
          position: "absolute",
          top: "50%",
          left: "7%",
          transform: "translateY(-50%)",
        }}
      >
        <ul
          style={{ margin: "0px" }}
          className="flex flex-col justify-center gap-5 relative"
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                padding: "8px 0",
                cursor: "pointer",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "3px white solid",
                padding: "8px 0",
                cursor: "pointer",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots: any) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "2%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }} className="relative">
                {" "}
                {dots}{" "}
              </ul>
            </div>
          ),
          customPaging: (i: number) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "25px",
                      color: "#262626",
                      borderRight: "3px #262626 solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
                  : {
                      width: "25px",
                      color: "transparent",
                      borderRight: "3px white solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };
  return (
    <div className="w-full bg-white">
      <Slider {...settings}>
        <Link to="/offer">
          <div>
            <Image imgSrc={bannerImgOne} />
          </div>
        </Link>
        <Link to="/offer">
          <div>
            <Image imgSrc={bannerImgTwo} />
          </div>
        </Link>
        <Link to="/offer">
          <div>
            <Image imgSrc={bannerImgThree} />
          </div>
        </Link>
      </Slider>
    </div>
  );
};

export default Banner;
