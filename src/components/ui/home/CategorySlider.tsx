/* eslint-disable @typescript-eslint/no-explicit-any */
import Slider from "react-slick";
import Image from "../../Image";
import Card from "../../../utils/Card";

export const CategorySlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 10,

    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  type TCategory = {
    title: string;
    image: string;
  }[];

  const categories: TCategory = [
    {
      title: "This is aaa",
      image:
        "https://down-my.img.susercontent.com/file/f2cc889405538978bd8c7b4c2103671f",
    },
    {
      title: "this is",
      image:
        "https://down-my.img.susercontent.com/file/f2cc889405538978bd8c7b4c2103671f",
    },
    {
      title: "this is",
      image:
        "https://down-my.img.susercontent.com/file/f2cc889405538978bd8c7b4c2103671f",
    },
    {
      title: "this is",
      image:
        "https://down-my.img.susercontent.com/file/f2cc889405538978bd8c7b4c2103671f",
    },
    {
      title: "this is",
      image:
        "https://down-my.img.susercontent.com/file/f2cc889405538978bd8c7b4c2103671f",
    },
    {
      title: "this is",
      image:
        "https://down-my.img.susercontent.com/file/f2cc889405538978bd8c7b4c2103671f",
    },
    {
      title: "this is",
      image:
        "https://down-my.img.susercontent.com/file/f2cc889405538978bd8c7b4c2103671f",
    },
    {
      title: "this is",
      image:
        "https://down-my.img.susercontent.com/file/f2cc889405538978bd8c7b4c2103671f",
    },
    {
      title: "this is",
      image:
        "https://down-my.img.susercontent.com/file/f2cc889405538978bd8c7b4c2103671f",
    },
    {
      title: "this is",
      image:
        "https://down-my.img.susercontent.com/file/f2cc889405538978bd8c7b4c2103671f",
    },
    {
      title: "this is",
      image:
        "https://down-my.img.susercontent.com/file/f2cc889405538978bd8c7b4c2103671f",
    },
    {
      title: "this is",
      image:
        "https://down-my.img.susercontent.com/file/f2cc889405538978bd8c7b4c2103671f",
    },
    {
      title: "this is",
      image:
        "https://down-my.img.susercontent.com/file/f2cc889405538978bd8c7b4c2103671f",
    },
    {
      title: "this is",
      image:
        "https://down-my.img.susercontent.com/file/f2cc889405538978bd8c7b4c2103671f",
    },
    {
      title: "this is",
      image:
        "https://down-my.img.susercontent.com/file/f2cc889405538978bd8c7b4c2103671f",
    },
    {
      title: "this is",
      image:
        "https://down-my.img.susercontent.com/file/f2cc889405538978bd8c7b4c2103671f",
    },
    {
      title: "this is",
      image:
        "https://down-my.img.susercontent.com/file/f2cc889405538978bd8c7b4c2103671f",
    },
    {
      title: "this is",
      image:
        "https://down-my.img.susercontent.com/file/f2cc889405538978bd8c7b4c2103671f",
    },
    {
      title: "this is",
      image:
        "https://down-my.img.susercontent.com/file/f2cc889405538978bd8c7b4c2103671f",
    },
    {
      title: "this is",
      image:
        "https://down-my.img.susercontent.com/file/f2cc889405538978bd8c7b4c2103671f",
    },
    {
      title: "this is",
      image:
        "https://down-my.img.susercontent.com/file/f2cc889405538978bd8c7b4c2103671f",
    },
    {
      title: "this is",
      image:
        "https://down-my.img.susercontent.com/file/f2cc889405538978bd8c7b4c2103671f",
    },
    {
      title: "this is",
      image:
        "https://down-my.img.susercontent.com/file/f2cc889405538978bd8c7b4c2103671f",
    },
    {
      title: "this is",
      image:
        "https://down-my.img.susercontent.com/file/f2cc889405538978bd8c7b4c2103671f",
    },
    {
      title: "this is",
      image:
        "https://down-my.img.susercontent.com/file/f2cc889405538978bd8c7b4c2103671f",
    },
  ];

  return (
    <section id="category" className="mt-10 container mx-auto">
      <Image imgSrc="https://down-my.img.susercontent.com/file/3d3d24a6c77aed24e7d167a531551679"></Image>
      <p className="text-red-500 p-2  font-bold">CATEGORIES</p>
      <Slider {...settings}>
        {categories.map((item, i) => (
          <div key={i} className="flex overflow-hidden">
            <div className="border border-1">
              <>
                <Image imgSrc={item.image} />
                <p className="text-center">{item.title}</p>
              </>
            </div>
            <div className="border border-1">
              <>
                <Image imgSrc={item.image} />
                <p className="text-center">{item.title}</p>
              </>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};
