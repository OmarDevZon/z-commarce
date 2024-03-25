import { OutLateButton } from "../../../utils/Button";
import { CardTopAnimated } from "../../../utils/Card";
import { Flex } from "../../../utils/Flex";
import { motion } from "framer-motion";
import { SvgIcon } from "../../../utils/SvgIcon";
import Image from "../../Image";

/*
1. 3 add spasticity for a product 
2. 1 add spasticity for for only 14 creators

*/
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

export const JustForYou: React.FC = () => {
  return (
    <section id="new_arrivals" className="container mx-auto mb-10">
      <div className="flex justify-between items-center">
        <p className="text-red-500 p-2  font-bold uppercase">Just For You</p>
        <OutLateButton position="left"
            title={"See All"}
            className="!text-red-500 !text-sm !border-0 !bg-gray-50"
          >
            <motion.div
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 2, opacity: 1 }}
              whileHover={{ paddingRight: "10px" }}
              className="flex "
            >
              <SvgIcon className="!h-4 !w-4" path="m8.25 4.5 7.5 7.5-7.5 7.5"></SvgIcon>
            </motion.div>
          </OutLateButton>
      </div>

      <div className="flex justify-between items-center gap-6 bg-1">
        {products.map((product, i) => (
          <div key={i} className="">
            <CardTopAnimated className=" relative">
              <div>
                <div className="bg-[#e2e7eb]">
                  <Image imgSrc={product.image} />
                  {product.discount && (
                    <p className="absolute top-1 -left-0 text-[#ee4d2d] px-2 bg-orange-200">
                      -{product.discount}%
                    </p>
                  )}
                </div>
                <div>
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
    </section>
  );
};
