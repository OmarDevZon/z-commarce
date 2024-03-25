import { Link } from "react-router-dom";
import Image from "../../components/Image";
import { CardTopAnimated } from "../../utils/Card";
import { Flex } from "../../utils/Flex";
import { SecondaryBtn } from "../../utils/SecondaryBtn";
import { SvgIcon } from "../../utils/SvgIcon";
import { SaenSelect } from "../from/SaenSelect";

export const categoric = [
  {
    title: "Shipped From",
    options: ["title1", "title2", "title3", "title4", "title5"],
  },
  {
    title: "By Category",
    options: ["title1", "title2", "title3", "title4", "title5"],
  },
  {
    title: "Service & Promotion",
    options: ["title1", "title2", "title3", "title4", "title5"],
  },
  {
    title: "Brand",
    options: ["title1", "title2", "title3", "title4", "title5"],
  },
  {
    title: "Payment Option",
    options: ["title1", "title2", "title3", "title4", "title5"],
  },
  {
    title: "Conditions",
    options: ["New", "Old"],
  },
];

const gender = [
  { value: "mail", label: "mail" },
  { value: "female", label: "female" },
  { value: "other", label: "other" },
];

const products = [
  {
    image:
      "https://down-my.img.susercontent.com/file/cdef7600e563f78d6868de8f48800b91_tn",

    title: "title is awesome",
    spasticity: ["code", "Sea sipping"],
    regularPrice: 200,
    discount: 23,
    sellPrice: 200,
  },
  {
    image:
      "https://down-my.img.susercontent.com/file/cdef7600e563f78d6868de8f48800b91_tn",

    title: "title is awesome",
    spasticity: ["code", "Sea sipping"],
    regularPrice: 200,
    discount: 23,
    sellPrice: 200,
  },
  {
    image:
      "https://down-my.img.susercontent.com/file/cdef7600e563f78d6868de8f48800b91_tn",

    title: "title is awesome",
    spasticity: ["code", "Sea sipping"],
    regularPrice: 200,
    discount: 23,
    sellPrice: 200,
  },
  {
    image:
      "https://down-my.img.susercontent.com/file/cdef7600e563f78d6868de8f48800b91_tn",

    title: "title is awesome",
    spasticity: ["code", "Sea sipping"],
    regularPrice: 200,
    sellPrice: 200,
  },
  {
    image:
      "https://down-my.img.susercontent.com/file/cdef7600e563f78d6868de8f48800b91_tn",

    title: "title is awesome",
    spasticity: ["code", "Sea sipping"],
    regularPrice: 200,
    sellPrice: 200,
  },
  {
    image:
      "https://down-my.img.susercontent.com/file/cdef7600e563f78d6868de8f48800b91_tn",

    title: "title is awesome",
    spasticity: ["code", "Sea sipping"],
    regularPrice: 200,
    sellPrice: 200,
  },
  {
    image:
      "https://down-my.img.susercontent.com/file/cdef7600e563f78d6868de8f48800b91_tn",

    title: "title is awesome",
    spasticity: ["code", "Sea sipping"],
    regularPrice: 200,
    discount: 23,
    sellPrice: 200,
  },
  {
    image:
      "https://down-my.img.susercontent.com/file/cdef7600e563f78d6868de8f48800b91_tn",

    title: "title is awesome",
    spasticity: ["code", "Sea sipping"],
    regularPrice: 200,
    discount: 23,
    sellPrice: 200,
  },
  {
    image:
      "https://down-my.img.susercontent.com/file/cdef7600e563f78d6868de8f48800b91_tn",

    title: "title is awesome",
    spasticity: ["code", "Sea sipping"],
    regularPrice: 200,
    discount: 23,
    sellPrice: 200,
  },
  {
    image:
      "https://down-my.img.susercontent.com/file/cdef7600e563f78d6868de8f48800b91_tn",

    title: "title is awesome",
    spasticity: ["code", "Sea sipping"],
    regularPrice: 200,
    sellPrice: 200,
  },
  {
    image:
      "https://down-my.img.susercontent.com/file/cdef7600e563f78d6868de8f48800b91_tn",

    title: "title is awesome",
    spasticity: ["code", "Sea sipping"],
    regularPrice: 200,
    sellPrice: 200,
  },
  {
    image:
      "https://down-my.img.susercontent.com/file/cdef7600e563f78d6868de8f48800b91_tn",

    title: "title is awesome",
    spasticity: ["code", "Sea sipping"],
    regularPrice: 200,
    sellPrice: 200,
  },
  {
    image:
      "https://down-my.img.susercontent.com/file/cdef7600e563f78d6868de8f48800b91_tn",

    title: "title is awesome",
    spasticity: ["code", "Sea sipping"],
    regularPrice: 200,
    discount: 23,
    sellPrice: 200,
  },
  {
    image:
      "https://down-my.img.susercontent.com/file/cdef7600e563f78d6868de8f48800b91_tn",

    title: "title is awesome",
    spasticity: ["code", "Sea sipping"],
    regularPrice: 200,
    discount: 23,
    sellPrice: 200,
  },
  {
    image:
      "https://down-my.img.susercontent.com/file/cdef7600e563f78d6868de8f48800b91_tn",

    title: "title is awesome",
    spasticity: ["code", "Sea sipping"],
    regularPrice: 200,
    discount: 23,
    sellPrice: 200,
  },
  {
    image:
      "https://down-my.img.susercontent.com/file/cdef7600e563f78d6868de8f48800b91_tn",

    title: "title is awesome",
    spasticity: ["code", "Sea sipping"],
    regularPrice: 200,
    sellPrice: 200,
  },
  {
    image:
      "https://down-my.img.susercontent.com/file/cdef7600e563f78d6868de8f48800b91_tn",

    title: "title is awesome",
    spasticity: ["code", "Sea sipping"],
    regularPrice: 200,
    sellPrice: 200,
  },
  {
    image:
      "https://down-my.img.susercontent.com/file/cdef7600e563f78d6868de8f48800b91_tn",

    title: "title is awesome",
    spasticity: ["code", "Sea sipping"],
    regularPrice: 200,
    sellPrice: 200,
  },
  {
    image:
      "https://down-my.img.susercontent.com/file/cdef7600e563f78d6868de8f48800b91_tn",

    title: "title is awesome",
    spasticity: ["code", "Sea sipping"],
    regularPrice: 200,
    discount: 23,
    sellPrice: 200,
  },
  {
    image:
      "https://down-my.img.susercontent.com/file/cdef7600e563f78d6868de8f48800b91_tn",

    title: "title is awesome",
    spasticity: ["code", "Sea sipping"],
    regularPrice: 200,
    discount: 23,
    sellPrice: 200,
  },
  {
    image:
      "https://down-my.img.susercontent.com/file/cdef7600e563f78d6868de8f48800b91_tn",

    title: "title is awesome",
    spasticity: ["code", "Sea sipping"],
    regularPrice: 200,
    discount: 23,
    sellPrice: 200,
  },
  {
    image:
      "https://down-my.img.susercontent.com/file/cdef7600e563f78d6868de8f48800b91_tn",

    title: "title is awesome",
    spasticity: ["code", "Sea sipping"],
    regularPrice: 200,
    sellPrice: 200,
  },
  {
    image:
      "https://down-my.img.susercontent.com/file/cdef7600e563f78d6868de8f48800b91_tn",

    title: "title is awesome",
    spasticity: ["code", "Sea sipping"],
    regularPrice: 200,
    sellPrice: 200,
  },
  {
    image:
      "https://down-my.img.susercontent.com/file/cdef7600e563f78d6868de8f48800b91_tn",

    title: "title is awesome",
    spasticity: ["code", "Sea sipping"],
    regularPrice: 200,
    sellPrice: 200,
  },
  {
    image:
      "https://down-my.img.susercontent.com/file/cdef7600e563f78d6868de8f48800b91_tn",

    title: "title is awesome",
    spasticity: ["code", "Sea sipping"],
    regularPrice: 200,
    discount: 23,
    sellPrice: 200,
  },
  {
    image:
      "https://down-my.img.susercontent.com/file/cdef7600e563f78d6868de8f48800b91_tn",

    title: "title is awesome",
    spasticity: ["code", "Sea sipping"],
    regularPrice: 200,
    discount: 23,
    sellPrice: 200,
  },
  {
    image:
      "https://down-my.img.susercontent.com/file/cdef7600e563f78d6868de8f48800b91_tn",

    title: "title is awesome",
    spasticity: ["code", "Sea sipping"],
    regularPrice: 200,
    discount: 23,
    sellPrice: 200,
  },
  {
    image:
      "https://down-my.img.susercontent.com/file/cdef7600e563f78d6868de8f48800b91_tn",

    title: "title is awesome",
    spasticity: ["code", "Sea sipping"],
    regularPrice: 200,
    sellPrice: 200,
  },
  {
    image:
      "https://down-my.img.susercontent.com/file/cdef7600e563f78d6868de8f48800b91_tn",

    title: "title is awesome",
    spasticity: ["code", "Sea sipping"],
    regularPrice: 200,
    sellPrice: 200,
  },
  {
    image:
      "https://down-my.img.susercontent.com/file/cdef7600e563f78d6868de8f48800b91_tn",

    title: "title is awesome",
    spasticity: ["code", "Sea sipping"],
    regularPrice: 200,
    sellPrice: 200,
  },
  {
    image:
      "https://down-my.img.susercontent.com/file/cdef7600e563f78d6868de8f48800b91_tn",

    title: "title is awesome",
    spasticity: ["code", "Sea sipping"],
    regularPrice: 200,
    discount: 23,
    sellPrice: 200,
  },
  {
    image:
      "https://down-my.img.susercontent.com/file/cdef7600e563f78d6868de8f48800b91_tn",

    title: "title is awesome",
    spasticity: ["code", "Sea sipping"],
    regularPrice: 200,
    discount: 23,
    sellPrice: 200,
  },
  {
    image:
      "https://down-my.img.susercontent.com/file/cdef7600e563f78d6868de8f48800b91_tn",

    title: "title is awesome",
    spasticity: ["code", "Sea sipping"],
    regularPrice: 200,
    discount: 23,
    sellPrice: 200,
  },
  {
    image:
      "https://down-my.img.susercontent.com/file/cdef7600e563f78d6868de8f48800b91_tn",

    title: "title is awesome",
    spasticity: ["code", "Sea sipping"],
    regularPrice: 200,
    sellPrice: 200,
  },
  {
    image:
      "https://down-my.img.susercontent.com/file/cdef7600e563f78d6868de8f48800b91_tn",

    title: "title is awesome",
    spasticity: ["code", "Sea sipping"],
    regularPrice: 200,
    sellPrice: 200,
  },
  {
    image:
      "https://down-my.img.susercontent.com/file/cdef7600e563f78d6868de8f48800b91_tn",

    title: "title is awesome",
    spasticity: ["code", "Sea sipping"],
    regularPrice: 200,
    sellPrice: 200,
  },
];

export const NewArrivalsAll: React.FC = () => {
  return (
    <section className="container mx-auto pt-20" id="NewArrivalsAll">
      <div className="flex ">
        {/* product categoric */}
        <div className="w-[400px] pr-4 block">
          <div>
            <h4 className="uppercase font-bold text-xl ">SEARCH FILTER</h4>
          </div>

          {categoric.map((search, i) => (
            <div key={i}>
              <h4
                className={`fond-semibold font-semibold text-[16px]  mt-4  border-[#dfdfdf] ${
                  i === 0 ? "border-none" : "border-t"
                }`}
              >
                {search.title}
              </h4>
              {search.options.map((option, ii) => (
                <div key={ii} className="mt-1">
                  <input id={search.title + ii} type="checkbox" />
                  <label
                    htmlFor={search.title + ii}
                    className="ml-2 font-semibold !text-black"
                  >
                    {option}
                  </label>
                </div>
              ))}
              <div></div>
            </div>
          ))}

          <div>
            <h4 className="text-sm fond-semibold mt-2">Rating</h4>
            <div></div>
          </div>
        </div>
        {/* products section */}
        <div>
          {/* Sort by */}
          <div className="flex items-center bg-[#ededed] p-2 justify-between w-full">
            <div className=" flex items-center gap-3">
              <p className="pr-2">Sort by</p>
              <SecondaryBtn>Popular</SecondaryBtn>
              <SecondaryBtn>Latest</SecondaryBtn>
              <SecondaryBtn>Top Sales</SecondaryBtn>
              {/* <SaenSelect label="Gender" name="gender" options={gender} /> */}
            </div>
            <div className="">1/3</div>
          </div>

          {/* product list */}
          <div className="grid grid-cols-5 justify-between items-center gap-2 bg-1 mt-2">
            {products.map((product, i) => (
              <div key={i} className="bg-white">
                <CardTopAnimated className=" relative !p-0">
                  <div>
                    <Link to="/single-product">
                      <div className="p-1">
                        <Image imgSrc={product.image} />
                        {product.discount && (
                          <p className="absolute top-1 -left-0 text-[#ee4d2d] px-2 bg-orange-200">
                            -{product.discount}%
                          </p>
                        )}
                      </div>
                    </Link>
                    <div className="bg-white p-2">
                      <p>{product.title}</p>
                      {product?.spasticity && (
                        <div className="mt-1 flex items-center gap-1">
                          {product.spasticity.map((spasticitice, ii) => (
                            <p
                              key={ii}
                              className="border px-1 py-[2px] border-[#ee4d2d] text-[#ee4d2d] text-sm"
                            >
                              {spasticitice}
                            </p>
                          ))}
                        </div>
                      )}

                      <Flex className="!items-end">
                        <div>
                          <del className="text-sm ">
                            {" "}
                            <span>&#x9F3;</span>
                            {product.regularPrice}
                          </del>
                          <p className="text-xl font-bold text-[#ee4d2d]">
                            {" "}
                            <span>&#x9F3;</span>
                            {product.sellPrice}
                          </p>
                        </div>
                        <div className="text-sm font-normal bg-[#d0011b] rounded-full">
                          <SvgIcon
                            className="cursor-pointer text-white  flex justify-center !w-10 !h-10 p-2"
                            path="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                          ></SvgIcon>
                        </div>
                      </Flex>
                      <p></p>
                    </div>
                  </div>
                </CardTopAnimated>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
