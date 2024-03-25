import { useState } from "react";
import Meta from "../components/ui/any/Meta";
import { BreadCrumb } from "../components/ui/any/BreadCrumb";
import ReactImageZoom from "react-image-zoom";
import { Stars } from "../utils/Stars";
import Image from "../components/Image";
import { motion } from "framer-motion";
import { SvgIcon } from "../utils/SvgIcon";
import { OutLateButton } from "../utils/Button";
import { CardTopAnimated } from "../utils/Card";
import { Flex } from "../utils/Flex";
import { Popup } from "../utils/Popup";
import { Link } from "react-router-dom";

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

export const SingleProduct = () => {
  const user = {
    profile:
      "https://down-my.img.susercontent.com/file/my-11134233-7r992-lmppvnvh1siee9_tn",
    rating: "1.2",
    product: 270,
    responseRate: 80,
    responseTime: "this hours",
    joined: "20,12,2001",
    follower: "20.2",
  };

  interface CounterProps {
    initialValue?: number;
  }

  const props = {
    width: 0,
    height: 0,
    zoomWidth: 0,
    img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
  };

  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  // const copyToClipboard = (text) => {
  //   console.log("text", text);
  //   var textField = document.createElement("textarea");
  //   textField.innerText = text;
  //   document.body.appendChild(textField);
  //   textField.select();
  //   document.execCommand("copy");
  //   textField.remove();
  // };
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />

      {/* product section  */}
      <section className="container mx-auto bg1 p-4">
        <div className="flex gap-4">
          <div className="w-1/2">
            <div className="main-product-image">
              <div>{/* <ReactImageZoom {...props} /> */}</div>
            </div>
            <div className="flex gap-2">
              <div>
                <img
                  src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* product content  */}
          <div className="w-1/2">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="text-[20px] font-semibold">
                  {" "}
                  Kids Headphones Bulk 10 Pack Multi Colored For Students
                </h3>
              </div>
              <div className="border-bottom py-3">
                <div className="flex items-center gap-2 justify-start">
                  <div className="flex text-[16px] text-red-500 items-center">
                    <span className="underline mr-1">5.0</span>
                    <Stars
                      count={5}
                      value={5}
                      position="horizontal"
                      activeColor="text-red-500"
                      color="text-red-500"
                    />
                  </div>
                  <div className="border-r border-red-500 h-[14px]" />
                  <p className=""> 2 Reviews </p>
                </div>

                <div className="p-4 bg2 mt-2">
                  <p className="text-red-500 text-3xl font-bold"> RM180.00 </p>
                  <div className="flex items-center mt-1">
                    <div className="mr-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        view-box="0 0 32 32"
                        width="32"
                        height="32"
                      >
                        <path
                          fill="#d0011b"
                          d="M28.65,16.92V4.73S19,4.46,15.94,0C12.45,4.41,3.23,4.73,3.23,4.73V16.92S3,27.22,15.94,32C28.9,27.22,28.65,16.92,28.65,16.92Z"
                        />
                        <path
                          fill="#fff"
                          d="M25.56,13.67,15.26,24a.68.68,0,0,1-1,0L8.33,18a.68.68,0,0,1,0-1l1.55-1.55a.68.68,0,0,1,1,0l3.44,3.43a.68.68,0,0,0,1,0L23,11.15a.68.68,0,0,1,1,0l1.55,1.54A.69.69,0,0,1,25.56,13.67Z"
                        />
                        <path
                          fill="#fff"
                          d="M25.56,13.67,15.26,24a.68.68,0,0,1-1,0L8.33,18a.68.68,0,0,1,0-1l1.55-1.55a.68.68,0,0,1,1,0l3.44,3.43a.68.68,0,0,0,1,0L23,11.15a.68.68,0,0,1,1,0l1.55,1.54A.69.69,0,0,1,25.56,13.67Z"
                        />
                      </svg>
                    </div>
                    <div className="flex items-center">
                      <div className="font-semibold">
                        <div className="text-red-500 ">
                          100% Authentic Guarantee
                        </div>
                        <div className="">Up to 8X Money Back Guarantee</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center mt-2">
                    <div className="mr-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        view-box="0 0 32 32"
                        fill="#d0011b"
                      >
                        <path
                          d="M16.0008 27.799C22.7441 27.799 28.2107 22.3325 28.2107 15.5891C28.2107 8.84579 22.7441 3.37924 16.0008 3.37924C9.25744 3.37924 3.79089 8.84579 3.79089 15.5891C3.79089 22.3325 9.25744 27.799 16.0008 27.799Z"
                          fill="white"
                        />
                        <path d="M16.0008 28.1783C9.05948 28.1783 3.41168 22.5305 3.41168 15.5891C3.41168 8.6478 9.05948 3 16.0008 3C22.9421 3 28.5899 8.6478 28.5899 15.5891C28.5899 22.5305 22.9421 28.1783 16.0008 28.1783ZM16.0008 3.64205C9.41355 3.64205 4.05373 9.00187 4.05373 15.5891C4.05373 22.1764 9.41355 27.5362 16.0008 27.5362C22.5881 27.5362 27.9479 22.1764 27.9479 15.5891C27.9479 9.00187 22.5881 3.64205 16.0008 3.64205Z" />
                        <path d="M16.0008 23.2213C11.7929 23.2213 8.36865 19.797 8.36865 15.5891C8.36865 11.3812 11.7929 7.95697 16.0008 7.95697C20.2087 7.95697 23.633 11.3812 23.633 15.5891C23.633 19.7986 20.2087 23.2213 16.0008 23.2213ZM16.0008 8.54394C12.1155 8.54394 8.95562 11.7038 8.95562 15.5891C8.95562 19.4745 12.1155 22.6343 16.0008 22.6343C19.8861 22.6343 23.046 19.4745 23.046 15.5891C23.046 11.7038 19.8861 8.54394 16.0008 8.54394Z" />
                        <path d="M30.2486 20.0268H1.75306C1.02919 20.0268 0.4375 19.4351 0.4375 18.7112V13.7275C0.4375 13.0036 1.02919 12.4119 1.75306 12.4119H30.247C30.9709 12.4119 31.5626 13.0036 31.5626 13.7275V18.7112C31.5641 19.4351 30.9709 20.0268 30.2486 20.0268Z" />
                        <path
                          d="M30.2485 12.412C30.9724 12.412 31.5641 13.0036 31.5641 13.7275V18.7112C31.5641 19.4351 30.9724 20.0268 30.2485 20.0268H1.75304C1.02916 20.0268 0.437472 19.4351 0.437472 18.7112V13.7275C0.437472 13.0036 1.02916 12.412 1.75304 12.412H30.2485ZM30.2485 11.9745H1.75304C0.786821 11.9745 0 12.7613 0 13.7275V18.7112C0 19.6775 0.786821 20.4643 1.75304 20.4643H30.247C31.2132 20.4643 32 19.6775 32 18.7112V13.7275C32.0016 12.7597 31.2147 11.9745 30.2485 11.9745Z"
                          fill="white"
                        />
                        <path
                          d="M3.43525 15.9322L4.53366 15.9306L4.53523 17.5153C4.53523 17.9197 4.43766 18.2297 4.24096 18.4469C4.04425 18.664 3.75313 18.7726 3.36759 18.7726C2.98205 18.7726 2.69092 18.6656 2.49264 18.4484C2.29436 18.2328 2.19522 17.9228 2.19522 17.5184L2.19208 14.9219C2.19208 14.5175 2.28964 14.2075 2.48635 13.9903C2.68305 13.7731 2.97418 13.6646 3.35972 13.6646C3.74526 13.6646 4.03639 13.7716 4.23466 13.9887C4.43294 14.2043 4.53208 14.5159 4.53208 14.9188V15.4034L3.78932 15.405V14.87C3.78932 14.689 3.75156 14.5615 3.67759 14.4892C3.60363 14.4152 3.50449 14.379 3.38175 14.379C3.25743 14.379 3.15987 14.4168 3.08591 14.4907C3.01194 14.5647 2.97575 14.6922 2.97575 14.8731L2.9789 17.5703C2.9789 17.7513 3.01667 17.8772 3.09063 17.948C3.16459 18.0188 3.26373 18.055 3.38647 18.055C3.51079 18.055 3.60836 18.0188 3.68232 17.948C3.75628 17.8772 3.79247 17.7497 3.79247 17.5703L3.79404 16.645H3.43683L3.43525 15.9322ZM5.78785 13.7165L5.79257 17.5688C5.79257 17.7497 5.83034 17.8756 5.9043 17.9464C5.97826 18.0173 6.0774 18.0535 6.20014 18.0535C6.32446 18.0535 6.42203 18.0173 6.49599 17.9464C6.56995 17.8756 6.60614 17.7497 6.60614 17.5688L6.60142 13.7165L7.34418 13.7149L7.3489 17.5184C7.3489 17.9228 7.25133 18.2328 7.05463 18.45C6.85792 18.6672 6.5668 18.7758 6.18126 18.7758C5.79572 18.7758 5.50459 18.6687 5.30631 18.4516C5.10804 18.236 5.0089 17.9244 5.0089 17.5216L5.00417 13.7181L5.78785 13.7165ZM10.4254 18.7049L9.63383 18.7065L9.49692 17.8001L8.53385 17.8017L8.40009 18.7081L7.67936 18.7097L8.47248 13.7133L9.62124 13.7118L10.4254 18.7049ZM8.63142 17.1234L9.38834 17.1219L9.00752 14.5962L8.63142 17.1234ZM12.4302 18.7034C12.4207 18.6703 12.4113 18.6388 12.4019 18.6105C12.3924 18.5822 12.3846 18.546 12.3767 18.5035C12.3688 18.461 12.3641 18.4059 12.3625 18.3399C12.3594 18.2738 12.3594 18.1904 12.3594 18.0896L12.3562 17.3044C12.3562 17.0715 12.3153 16.9078 12.2351 16.8118C12.1532 16.7174 12.0226 16.6702 11.8416 16.6702H11.571L11.5741 18.7034L10.7889 18.7049L10.7826 13.7102L11.9675 13.7086C12.3767 13.7086 12.6725 13.803 12.8566 13.9935C13.0392 14.1839 13.132 14.4718 13.132 14.8558V15.2476C13.132 15.7607 12.9621 16.099 12.619 16.2611C12.8189 16.3413 12.9558 16.4735 13.0297 16.6561C13.1037 16.8386 13.1415 17.0621 13.1415 17.3233L13.143 18.0944C13.143 18.2187 13.1478 18.3257 13.1572 18.4185C13.1667 18.5114 13.1903 18.6058 13.2296 18.7002L12.4302 18.7034ZM11.5678 14.4231L11.5694 15.9574H11.8763C12.0242 15.9574 12.1391 15.9196 12.2225 15.8425C12.3059 15.767 12.3468 15.6285 12.3468 15.4286V14.9361C12.3468 14.7551 12.3137 14.6245 12.2492 14.5442C12.1847 14.464 12.084 14.4231 11.9455 14.4231H11.5678ZM16.1975 18.6971L15.4059 18.6986L15.269 17.7922L14.306 17.7938L14.1722 18.7002L13.4515 18.7018L14.2446 13.7055L15.3934 13.7039L16.1975 18.6971ZM14.4035 17.1156L15.1605 17.114L14.7796 14.5883L14.4035 17.1156ZM17.255 15.0793L17.2597 18.6971L16.5531 18.6986L16.5468 13.7039L17.5319 13.7023L18.3424 16.6907L18.3376 13.7008L19.0363 13.6992L19.0426 18.6939L18.2369 18.6955L17.255 15.0793ZM19.3731 13.6992L21.7996 13.696L21.8012 14.4089L20.9814 14.4105L20.9876 18.6908L20.2024 18.6924L20.1961 14.412L19.3762 14.4136L19.3731 13.6992ZM22.9279 15.7984L24.0059 15.7968L24.0075 16.5097L22.9295 16.5113L22.9311 17.9732L24.286 17.9716L24.2876 18.6845L22.1474 18.6876L22.1411 13.6929L24.2813 13.6897L24.2829 14.4026L22.9264 14.4042L22.9279 15.7984ZM25.5544 15.7953L26.6323 15.7937L26.6339 16.5066L25.5559 16.5081L25.5575 17.97L26.914 17.9685L26.9156 18.6813L24.7754 18.6845L24.7691 13.6897L26.9093 13.6866L26.9108 14.3995L25.5559 14.401L25.5544 15.7953ZM27.3924 13.6882L28.634 13.6866C29.029 13.6866 29.3232 13.7905 29.5152 13.9998C29.7088 14.209 29.8048 14.5159 29.8048 14.9203L29.8079 17.446C29.8079 17.8505 29.7119 18.1573 29.5199 18.3666C29.3279 18.5759 29.0337 18.6813 28.6387 18.6813L27.3971 18.6829L27.3924 13.6882ZM28.1776 14.401L28.1823 17.9685H28.6245C28.7488 17.9685 28.8464 17.9323 28.9172 17.8615C28.988 17.7907 29.0242 17.6632 29.0242 17.4838L29.0211 14.8873C29.0211 14.7063 28.9849 14.5804 28.9141 14.5096C28.8433 14.4388 28.7457 14.4026 28.6214 14.4026L28.1776 14.401Z"
                          fill="white"
                        />
                        <path d="M24.873 11.3434C25.0737 11.3434 25.2365 11.1807 25.2365 10.9799C25.2365 10.7792 25.0737 10.6164 24.873 10.6164C24.6722 10.6164 24.5095 10.7792 24.5095 10.9799C24.5095 11.1807 24.6722 11.3434 24.873 11.3434Z" />
                        <path d="M7.12859 11.3434C7.32935 11.3434 7.4921 11.1807 7.4921 10.9799C7.4921 10.7792 7.32935 10.6164 7.12859 10.6164C6.92782 10.6164 6.76508 10.7792 6.76508 10.9799C6.76508 11.1807 6.92782 11.3434 7.12859 11.3434Z" />
                        <path d="M22.972 22.9853C23.1727 22.9853 23.3355 22.8225 23.3355 22.6218C23.3355 22.421 23.1727 22.2582 22.972 22.2582C22.7712 22.2582 22.6085 22.421 22.6085 22.6218C22.6085 22.8225 22.7712 22.9853 22.972 22.9853Z" />
                        <path d="M9.02953 22.9852C9.23029 22.9852 9.39304 22.8225 9.39304 22.6217C9.39304 22.421 9.23029 22.2582 9.02953 22.2582C8.82876 22.2582 8.66602 22.421 8.66602 22.6217C8.66602 22.8225 8.82876 22.9852 9.02953 22.9852Z" />
                        <path d="M9.467 10.2403L7.47949 8.28902L7.95316 7.80591L9.52208 9.3465L10.2774 8.57699L10.696 8.98771L9.467 10.2403Z" />
                        <path d="M12.6474 6.24013C12.7528 6.43369 12.8157 6.62882 12.8362 6.82553C12.8566 7.02223 12.8378 7.20949 12.7827 7.38889C12.726 7.56828 12.6332 7.73194 12.5026 7.88301C12.3735 8.03408 12.213 8.16155 12.021 8.26541C11.8306 8.36927 11.6355 8.43536 11.4404 8.46054C11.2437 8.48729 11.0548 8.4747 10.8754 8.42592C10.6945 8.37714 10.5277 8.29059 10.3734 8.16627C10.2192 8.04195 10.0902 7.88459 9.98475 7.69103C9.87774 7.4959 9.8148 7.30076 9.79591 7.10563C9.77703 6.91208 9.79591 6.72639 9.85571 6.55171C9.91394 6.37704 10.0084 6.21495 10.1374 6.06703C10.268 5.91911 10.4269 5.79322 10.6189 5.68778C10.8093 5.58392 11.0045 5.51783 11.1996 5.48793C11.3963 5.45803 11.5836 5.46747 11.7614 5.51311C11.9392 5.55874 12.106 5.64215 12.2587 5.76332C12.4113 5.88606 12.5403 6.04343 12.6474 6.24013ZM12.0147 6.58318C11.9565 6.47775 11.8857 6.38805 11.8007 6.31409C11.7158 6.24013 11.6245 6.1882 11.5285 6.15515C11.4309 6.12211 11.3302 6.11109 11.2232 6.12053C11.1162 6.12998 11.0108 6.16302 10.9069 6.2181C10.803 6.27475 10.7196 6.34556 10.6551 6.42897C10.5906 6.51394 10.545 6.60522 10.5182 6.70435C10.4915 6.80349 10.4867 6.90893 10.5041 7.01908C10.5214 7.12924 10.5576 7.23782 10.6158 7.34325C10.6756 7.45341 10.7495 7.54625 10.8345 7.62021C10.9195 7.69418 11.0108 7.74925 11.1083 7.7823C11.2059 7.81535 11.3066 7.82793 11.4136 7.82007C11.519 7.8122 11.6245 7.77915 11.7283 7.7225C11.8322 7.66585 11.9156 7.59504 11.9801 7.51163C12.0446 7.42666 12.0903 7.33538 12.1155 7.23467C12.1406 7.13396 12.1469 7.02695 12.1296 6.91522C12.1139 6.80507 12.0745 6.69491 12.0147 6.58318Z" />
                        <path d="M16.5673 7.11036L15.9048 7.16072L15.2108 5.32428L15.1982 5.32585L14.7938 7.24727L14.1266 7.2992L13.1257 4.58152L13.848 4.52644L14.4287 6.34085L14.4397 6.33928L14.7922 4.45406L15.4909 4.40055L16.1314 6.21024L16.144 6.20867L16.4493 4.32659L17.148 4.27309L16.5673 7.11036Z" />
                        <path d="M17.5319 7.27086L18.325 4.6004L20.1206 5.13386L19.9585 5.67677L18.7861 5.32899L18.6366 5.83413L19.746 6.16302L19.5918 6.67918L18.484 6.35028L18.3187 6.90421L19.5588 7.27244L19.3951 7.82321L17.5319 7.27086Z" />
                        <path d="M22.0876 7.04584C22.0782 6.95299 22.0451 6.86329 21.99 6.77674C21.935 6.69019 21.8704 6.6241 21.7965 6.57847C21.7587 6.55486 21.7178 6.5344 21.6753 6.51552C21.6328 6.49821 21.5888 6.48877 21.5463 6.48719C21.5038 6.48719 21.4613 6.49506 21.422 6.5108C21.3826 6.52811 21.348 6.55958 21.3181 6.60522C21.2929 6.64456 21.2803 6.6839 21.2803 6.72009C21.2803 6.75786 21.2898 6.79563 21.3102 6.83654C21.3291 6.87746 21.3559 6.91837 21.3905 6.96401C21.4235 7.00807 21.4629 7.05685 21.5085 7.11036C21.5714 7.18747 21.636 7.26929 21.7021 7.35584C21.7682 7.44239 21.8201 7.53524 21.8578 7.63281C21.8956 7.73037 21.9129 7.83423 21.9098 7.94281C21.9066 8.05139 21.8689 8.16312 21.7949 8.28115C21.7099 8.41648 21.6108 8.51876 21.4991 8.58486C21.3873 8.65252 21.2677 8.69187 21.1434 8.70288C21.0191 8.7139 20.8916 8.70131 20.7642 8.66354C20.6367 8.62577 20.514 8.5707 20.3991 8.49831C20.2307 8.3913 20.0859 8.25911 19.9648 8.10175C19.8436 7.94439 19.7665 7.77758 19.7303 7.60291L20.3424 7.45813C20.355 7.56514 20.3944 7.67215 20.4589 7.77915C20.5234 7.88616 20.6021 7.96956 20.6949 8.02779C20.7374 8.05454 20.7815 8.075 20.8271 8.09231C20.8727 8.10805 20.9168 8.11591 20.9593 8.11434C21.0018 8.11277 21.0427 8.10175 21.0805 8.07972C21.1198 8.05769 21.1529 8.02307 21.1828 7.97743C21.2111 7.93337 21.2237 7.88774 21.2205 7.84367C21.2174 7.79804 21.2048 7.75083 21.1796 7.6989C21.1544 7.64697 21.1182 7.59189 21.071 7.53209C21.0238 7.47229 20.9687 7.4062 20.9058 7.33224C20.846 7.25985 20.7893 7.18432 20.739 7.10564C20.6871 7.02695 20.6509 6.94355 20.6273 6.85543C20.6037 6.7673 20.5974 6.67603 20.61 6.58004C20.6225 6.48405 20.6619 6.38333 20.7295 6.27633C20.8114 6.14571 20.9089 6.04972 21.0207 5.98992C21.1324 5.93013 21.2504 5.89708 21.3747 5.89236C21.4991 5.88764 21.6249 5.90495 21.7508 5.94586C21.8767 5.98678 21.9948 6.04185 22.1065 6.11109C22.2402 6.1945 22.3598 6.30465 22.4684 6.44156C22.577 6.57847 22.6525 6.72639 22.6966 6.8869L22.0876 7.04584Z" />
                        <path d="M24.02 8.61947L22.3976 10.1207L21.9412 9.62661L23.5652 8.12535L23.0302 7.54783L23.4519 7.15756L24.9768 8.80674L24.555 9.197L24.02 8.61947Z" />
                        <path d="M12.6363 24.2646C12.5671 24.3968 12.4837 24.4959 12.3877 24.5605C12.2901 24.625 12.1863 24.6643 12.0745 24.6753C11.9612 24.6879 11.8448 24.6769 11.722 24.6454C11.5993 24.614 11.4797 24.5668 11.3617 24.5054L11.0894 24.3622L10.641 25.2182L10.0933 24.9303L11.2846 22.6611L12.117 23.0986C12.2413 23.1631 12.3499 23.237 12.4459 23.3173C12.5403 23.3991 12.6143 23.4872 12.6662 23.5832C12.7182 23.6792 12.7433 23.7847 12.7433 23.898C12.7386 24.0113 12.704 24.134 12.6363 24.2646ZM12.0871 23.9798C12.1155 23.9263 12.1265 23.8775 12.1233 23.8319C12.1202 23.7862 12.1044 23.7453 12.0793 23.706C12.0525 23.6682 12.0179 23.6336 11.9754 23.6021C11.9329 23.5706 11.8873 23.5439 11.8385 23.5171L11.5977 23.3912L11.3176 23.9263L11.5489 24.0475C11.6009 24.0742 11.6512 24.0962 11.7032 24.112C11.7551 24.1277 11.8054 24.1356 11.8542 24.134C11.903 24.1324 11.9471 24.1198 11.9864 24.0947C12.0242 24.0711 12.0588 24.0333 12.0871 23.9798Z" />
                        <path d="M14.0117 26.4331L13.6907 25.319L13.4845 25.2733L13.2627 26.2663L12.6725 26.1341L13.2312 23.6336L14.1848 23.846C14.3044 23.8728 14.4193 23.9121 14.5279 23.9625C14.6365 24.0128 14.7293 24.0774 14.8064 24.156C14.8835 24.2347 14.9386 24.3291 14.9716 24.4377C15.0047 24.5463 15.0047 24.6722 14.9716 24.817C14.9339 24.9869 14.8568 25.1191 14.7387 25.2135C14.6207 25.3079 14.4759 25.363 14.3013 25.3756L14.7151 26.592L14.0117 26.4331ZM14.3752 24.6926C14.3878 24.6344 14.3862 24.5841 14.3705 24.5416C14.3548 24.4991 14.328 24.4645 14.2934 24.4361C14.2588 24.4078 14.2179 24.3842 14.1707 24.3669C14.1234 24.3496 14.0778 24.3354 14.0322 24.3244L13.7096 24.252L13.579 24.8343L13.8669 24.8988C13.9173 24.9098 13.9692 24.9177 14.0227 24.9208C14.0762 24.924 14.1266 24.9208 14.1738 24.9082C14.221 24.8972 14.2635 24.8736 14.2981 24.8406C14.3359 24.8044 14.3611 24.7556 14.3752 24.6926Z" />
                        <path d="M15.4595 26.5952L15.5161 24.0333L16.1393 24.0475L16.0826 26.6093L15.4595 26.5952Z" />
                        <path d="M18.8554 26.2175C18.7059 26.3229 18.5249 26.3953 18.3109 26.4362C18.1158 26.4724 17.9301 26.474 17.7539 26.441C17.5776 26.4079 17.4171 26.3434 17.2739 26.249C17.1307 26.1546 17.0095 26.0318 16.9104 25.8808C16.8112 25.7297 16.742 25.5566 16.7058 25.3599C16.668 25.1585 16.668 24.9696 16.7074 24.7918C16.7467 24.6155 16.8175 24.4582 16.9182 24.3197C17.019 24.1812 17.148 24.0663 17.3022 23.9735C17.4564 23.8807 17.6295 23.8161 17.8215 23.7799C17.9993 23.7469 18.1803 23.7453 18.3644 23.7752C18.5485 23.8051 18.7043 23.8712 18.8349 23.9719L18.4998 24.4613C18.4274 24.3937 18.3424 24.3496 18.2433 24.3291C18.1441 24.3087 18.045 24.3071 17.9474 24.326C17.8404 24.3465 17.746 24.3842 17.6642 24.4393C17.5823 24.4959 17.5162 24.5636 17.4659 24.6439C17.4155 24.7241 17.3809 24.8154 17.362 24.9161C17.3431 25.0168 17.3447 25.1223 17.3667 25.234C17.3888 25.3473 17.4265 25.4496 17.4785 25.5377C17.532 25.6258 17.5965 25.6982 17.672 25.7533C17.7476 25.8099 17.8325 25.8477 17.927 25.8697C18.0214 25.8918 18.1221 25.8918 18.2259 25.8729C18.3471 25.8509 18.4478 25.8068 18.5297 25.7423C18.6115 25.6778 18.6713 25.6022 18.7122 25.5172L19.211 25.8367C19.1245 25.9846 19.0065 26.1121 18.8554 26.2175Z" />
                        <path d="M20.0261 25.8792L18.9136 23.5706L20.4652 22.8216L20.6918 23.2905L19.6784 23.7799L19.8892 24.2174L20.8476 23.7548L21.0632 24.2017L20.1048 24.6643L20.3361 25.1427L21.4094 24.625L21.6391 25.1002L20.0261 25.8792Z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-red-500">
                        Lowest Price Guaranteed
                      </div>

                      <p className="">
                        Found a cheaper option? Claim for FREE Coins!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex mt-6">
                  <p className="w-[120px]">Return</p>
                  <p>Free returns</p>
                </div>
                <div className="flex mt-6">
                  <p className="w-[120px]">Protection</p>
                  <p>Damage Protection</p>
                </div>
                <div className="flex mt-6">
                  <p className="w-[120px]">Shipping</p>
                  <div className="flex gap-2 ">
                    <Image
                      className="h-6 w-6"
                      imgSrc="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/094f639ce7dff28ced5b.png"
                    ></Image>
                    <div>
                      <p>Free shipping</p>
                      <p className="text-[#dbdcdb]">
                        Free shipping for orders over RM15.00
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex mt-6 items-center">
                  <p className="w-[120px]">Quantity</p>

                  <form>
                    <div>
                      <button
                        type="button"
                        onClick={handleDecrement}
                        className="w-10 outline-none p-[4.5px] border"
                      >
                        -
                      </button>

                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={count}
                        readOnly
                        className="w-20 h-4 outline-none rounded-0 p-4"
                      />
                      <button
                        onClick={handleIncrement}
                        type="button"
                        className="w-10 outline-none p-[4.5px] border"
                      >
                        +
                      </button>
                    </div>
                  </form>
                  <p className="text-[#fff24] ml-2">18 pieces available</p>
                </div>

                <div className="flex mt-6 items-center">
                  <p className="w-[120px]">Size</p>

                  <div className="flex items-center gap-2">
                    <button className="border px-4">S</button>
                    <button className="border px-4">M</button>
                    <button className="border px-4">X</button>
                    <button className="border px-4">Xl</button>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-10">
                <div className="flex items-center justify-center bg-gray-100">
                  <OutLateButton
                    position="right"
                    title="Add To Card"
                    action={openPopup}
                  >
                    <SvgIcon path="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></SvgIcon>
                  </OutLateButton>
                  <Popup isOpen={isOpen} onClose={closePopup}>
                    <div className="p-8">
                     
                      <div className="flex items-center justify-center">
                        <span className="block">
                          <SvgIcon
                            className="!w-24 !h-24 !text-blue-500 m-10 bg-blue-100  rounded-full p-4"
                            path="m4.5 12.75 6 6 9-13.5"
                          ></SvgIcon>
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <button
                          onClick={closePopup}
                          className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                          Close
                        </button>
                        <Link to={"/buyer/my-order"} className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                          Go to Card
                        </Link>
                      </div>
                    </div>
                  </Popup>
                </div>

                <OutLateButton
                  className="text-white hover:text-black bg-red-600 hover:bg-red-500 w-[200px]"
                  title="Buy Now"
                ></OutLateButton>
              </div>

              <div className="border-t border-red-100 mt-4"></div>
              <p className="text-[#dbdcdb]">
                Free shipping for orders over RM15.00
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* seller information */}

      <section
        id="seller-section"
        className="container mx-auto mt-6 bg-white p-6"
      >
        <div className="flex items-center gap-10">
          <div className="flex gap-4 items-center w-1/4">
            <a className="" href="#">
              <div className="">
                <div className="">
                  {user.profile ? (
                    <Image
                      alt=""
                      className="h-[100px] w-[100px] rounded-full"
                      imgSrc={user.profile}
                    />
                  ) : (
                    <Image
                      alt=""
                      className="h-[100px] w-[100px] "
                      imgSrc="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/1e1b08f78a2608ccffa9.svg"
                    />
                  )}
                </div>
              </div>
            </a>
            <div>
              <div>Ryra_closet</div>
              <div>
                <div>Active 7 hours ago</div>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <OutLateButton
                  title="Chat Now"
                  className="!text-sm !gap-1 !px-2 !py-1"
                >
                  <SvgIcon
                    className="!w-4"
                    path="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  ></SvgIcon>
                </OutLateButton>
                <OutLateButton
                  title="View Shop"
                  className="!text-sm !gap-1 !px-2 !py-1"
                >
                  <SvgIcon
                    className="!w-4"
                    path="m20 1.9c-.2-.5-.8-1-1.4-1h-8.4c-.6.1-1.2.5-1.4 1l-1.4 4.3c0 .8.3 1.6.9 2.1v4.8c0 .6.5 1 1.1 1h10.2c.6 0 1.1-.5 1.1-1v-4.6c.6-.4.9-1.2.9-2.3zm-11.4 3.4 1-3c .1-.2.4-.4.6-.4h8.3c.3 0 .5.2.6.4l1 3zm .6 3.5h.4c.7 0 1.4-.3 1.8-.8.4.5.9.8 1.5.8.7 0 1.3-.5 1.5-.8.2.3.8.8 1.5.8.6 0 1.1-.3 1.5-.8.4.5 1.1.8 1.7.8h.4v3.9c0 .1 0 .2-.1.3s-.2.1-.3.1h-9.5c-.1 0-.2 0-.3-.1s-.1-.2-.1-.3zm8.8-1.7h-1v .1s0 .3-.2.6c-.2.1-.5.2-.9.2-.3 0-.6-.1-.8-.3-.2-.3-.2-.6-.2-.6v-.1h-1v .1s0 .3-.2.5c-.2.3-.5.4-.8.4-1 0-1-.8-1-.8h-1c0 .8-.7.8-1.3.8s-1.1-1-1.2-1.7h12.1c0 .2-.1.9-.5 1.4-.2.2-.5.3-.8.3-1.2 0-1.2-.8-1.2-.9z"
                  ></SvgIcon>
                </OutLateButton>
              </div>
            </div>
          </div>
          <div className="flex justify-between w-3/4">
            <div className="flex flex-col justify-between gap-4">
              <div className="flex">
                <p className="w-[150px]">Ratings</p>
                <span className="">9.2k</span>
              </div>
              <div className="flex">
                <p className="w-[150px]">Response rate</p>
                <span className="Cs6w3G">80%</span>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-4">
              <div className="flex">
                <p className="w-[150px]">Joined</p>
                <span className="Cs6w3G">5 years ago</span>
              </div>

              {/* <a className="block" href="#"> */}
              <div className="flex">
                <p className="w-[150px]">Products</p>
                <span className="">270</span>
              </div>

              {/* </a> */}
            </div>
            <div className="flex flex-col justify-between gap-4 ">
              <div className="flex">
                <p className="w-[150px]">Response time</p>
                <span className="Cs6w3G">within hours</span>
              </div>

              <div className="flex">
                <p className="w-[150px]">Followers</p>
                <span className="Cs6w3G">20.2k</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* product details  */}
      <section className="container mx-auto mt-6 bg-white p-6">
        <h3 className="bg-gray-100 p-2 text-[20px] font-semibold">
          Product Specifications
        </h3>

        <div>
          <div className="flex mt-6">
            <p className="w-[120px]">Category</p>
            <p className="text-blue-500">free/returns</p>
          </div>
          <div className="flex mt-6">
            <p className="w-[120px]">Stock</p>
            <p>12.2k</p>
          </div>

          <div className="flex mt-6">
            <p className="w-[120px]">Ships From</p>
            <p>Mainland China</p>
          </div>
        </div>

        <h3 className="bg-gray-100 p-2 text-[20px] font-semibold mt-4">
          Product Description
        </h3>
        <p className="mt-4">
          The handbag is made of high-quality nylon material, which is
          dust-proof, tear-proof, wear-resistant, sturdy and durable. The
          folding chair tote fits most camping folding chairs or other outdoor
          gear. The travel tote bag is suitable for outdoor, camping, travel,
          backyard, hiking, picnic, barbecue, fishing, backpacking,
          mountaineering, beach, backyard, etc. The large camping chair
          replacement bag is designed with straps, which is convenient to carry
          and use outdoors and traveling. Features a wide bag opening and
          drawstring closure for easy chair storage.
        </p>
      </section>

      {/* product rating */}
      <section className="container mx-auto mt-6 bg-white p-6">
        <h3 className="bg-gray-100 p-2 text-[20px] font-semibold">
          Product Ratings
        </h3>

        <div>
          <div className="flex items-center gap-6 bg-[#fffbf8] p-6 mt-4 border border-orange-200">
            <div className="">
              <div className="font-semibold text-orange-500">
                <span className="text-3xl">4.1</span>
                <span className="">out of 5</span>
              </div>

              <div className="w-[100%]">
                <Stars
                  activeColor="text-orange-600"
                  color="text-orange-500"
                  count={5}
                  value={4.1}
                  position="horizontal"
                ></Stars>
              </div>
            </div>
            <div className=" mt-4">
              <div className="flex justify-between gap-4">
                <OutLateButton
                  title="All"
                  className="!px-2 !py-1 !text-black !border-gray-200 !focus:border-red-500 !bg-white w-[100px] !text-sm"
                ></OutLateButton>
                <OutLateButton
                  title="All"
                  className="!px-2 !py-1 !text-black !border-gray-200 !focus:border-red-500 !bg-white w-[100px] !text-sm"
                ></OutLateButton>
                <OutLateButton
                  title="5 star (606)"
                  className="!px-2 !py-1 !text-black !border-gray-200 !focus:border-red-500 !bg-white w-[100px] !text-sm"
                ></OutLateButton>

                <OutLateButton
                  title="4 star (53)"
                  className="!px-2 !py-1 !text-black !border-gray-200 !focus:border-red-500 !bg-white w-[100px] !text-sm"
                ></OutLateButton>
                <OutLateButton
                  title="3 star (53)"
                  className="!px-2 !py-1 !text-black !border-gray-200 !focus:border-red-500 !bg-white w-[100px] !text-sm"
                ></OutLateButton>
                <OutLateButton
                  title="2 star (37)"
                  className="!px-2 !py-1 !text-black !border-gray-200 !focus:border-red-500 !bg-white w-[100px] !text-sm"
                ></OutLateButton>
                <OutLateButton
                  title="1 star (132)"
                  className="!px-2 !py-1 !text-black !border-gray-200 !focus:border-red-500 !bg-white w-[100px] !text-sm"
                ></OutLateButton>
              </div>
              <div className="flex mt-2 gap-4">
                <OutLateButton
                  title="with comments (144)"
                  className="!px-2 !py-1 !text-black !border-gray-200 !focus:border-red-500 !bg-white w-[200px] !text-sm"
                ></OutLateButton>

                <OutLateButton
                  title="With Media (56)"
                  className="!px-2 !py-1 !text-black !border-gray-200 !focus:border-red-500 !bg-white w-[200px] !text-sm"
                ></OutLateButton>
              </div>
            </div>
          </div>
        </div>

        <div className="  mt-4">
          <div className="flex gap-2 mt-4">
            {/* Avatar */}
            <div className="w-14 h-14 ">
              {/* Avatar image */}
              <Image
                className="!rounded-full"
                imgSrc="https://down-my.img.susercontent.com/file/ac25f85470ed49473570bc86d990d4e7_tn"
              />
            </div>

            {/* Main content */}
            <div className="">
              <div className="">n*****n</div>
              <div className="">
                {/* Rating stars */}
                <div className="w-[100%]">
                  <Stars
                    activeColor="text-orange-600"
                    color="text-orange-500"
                    count={5}
                    value={4.1}
                    position="horizontal"
                  ></Stars>
                </div>
                {/* Assuming this is for the rating stars */}
              </div>
              <p className="">2024-01-26 16:39 | Variation: L</p>
              <p className="mt-2">
                Blh laa nk letak krusi healing tu, gnti utk sarung yg dh
                terkoyak tpi bhgian dlm still kena guna sarung asal sbb xmuat
                kaki krusi
              </p>

              <div className="ml-4 p-2 bg-gray-100">
                <div className="">Seller's response:</div>
                <div className="">
                  Hello! Thank you very much for your love and recognition of
                  us. Your satisfaction is our greatest reward. We will work
                  harder and look forward to your next visit.
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            {/* Avatar */}
            <div className="w-14 h-14 ">
              {/* Avatar image */}
              <Image
                className="!rounded-full"
                imgSrc="https://down-my.img.susercontent.com/file/ac25f85470ed49473570bc86d990d4e7_tn"
              />
            </div>

            {/* Main content */}
            <div className="">
              <div className="">n*****n</div>
              <div className="">
                {/* Rating stars */}
                <div className="w-[100%]">
                  <Stars
                    activeColor="text-orange-600"
                    color="text-orange-500"
                    count={5}
                    value={4.1}
                    position="horizontal"
                  ></Stars>
                </div>
                {/* Assuming this is for the rating stars */}
              </div>
              <p className="">2024-01-26 16:39 | Variation: L</p>
              <p className="mt-2">
                Blh laa nk letak krusi healing tu, gnti utk sarung yg dh
                terkoyak tpi bhgian dlm still kena guna sarung asal sbb xmuat
                kaki krusi
              </p>

              <div className="ml-4 p-2 bg-gray-100">
                <div className="">Seller's response:</div>
                <div className="">
                  Hello! Thank you very much for your love and recognition of
                  us. Your satisfaction is our greatest reward. We will work
                  harder and look forward to your next visit.
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            {/* Avatar */}
            <div className="w-14 h-14 ">
              {/* Avatar image */}
              <Image
                className="!rounded-full"
                imgSrc="https://down-my.img.susercontent.com/file/ac25f85470ed49473570bc86d990d4e7_tn"
              />
            </div>

            {/* Main content */}
            <div className="">
              <div className="">n*****n</div>
              <div className="">
                {/* Rating stars */}
                <div className="w-[100%]">
                  <Stars
                    activeColor="text-orange-600"
                    color="text-orange-500"
                    count={5}
                    value={4.1}
                    position="horizontal"
                  ></Stars>
                </div>
                {/* Assuming this is for the rating stars */}
              </div>
              <p className="">2024-01-26 16:39 | Variation: L</p>
              <p className="mt-2">
                Blh laa nk letak krusi healing tu, gnti utk sarung yg dh
                terkoyak tpi bhgian dlm still kena guna sarung asal sbb xmuat
                kaki krusi
              </p>

              <div className="ml-4 p-2 bg-gray-100">
                <div className="">Seller's response:</div>
                <div className="">
                  Hello! Thank you very much for your love and recognition of
                  us. Your satisfaction is our greatest reward. We will work
                  harder and look forward to your next visit.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* from this shop */}

      <section id="new_arrivals" className="container mx-auto mb-10">
        {/* product header */}
        <div className="flex justify-between items-center">
          <p className="text-red-500 p-2  font-bold uppercase">Top Products</p>
          <OutLateButton
            position="left"
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
              <SvgIcon
                className="!h-4 !w-4"
                path="m8.25 4.5 7.5 7.5-7.5 7.5"
              ></SvgIcon>
            </motion.div>
          </OutLateButton>
        </div>
        {/* product card */}
        <div className="grid grid-cols-5 justify-between items-center gap-6 bg-1">
          {products.map((product, i) => (
            <div key={i} className="bg-[#e2e7eb]">
              <CardTopAnimated className=" relative">
                <div>
                  <div className="">
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
    </>
  );
};
