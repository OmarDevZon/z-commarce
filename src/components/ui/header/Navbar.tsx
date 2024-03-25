/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { HiMenuAlt2, HiOutlineMenuAlt4 } from "react-icons/hi";
import { motion } from "framer-motion";
import logoLight from "../../../assets/image/logoLight.png";
import orebilogo from "../../../assets/image/logo/logo.png";
import Image from "../../Image";
import { TNavItem, navBarList } from "../../constants";
import { SubNavbar } from "./SubNavbar";
import { Avatar } from "antd";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { DarkMode } from "../../DarkMode";

const Header = ({ subHeader }: { subHeader: boolean }) => {
  const [showMenu, setShowMenu] = useState(true);
  const [sideNav, setSideNav] = useState(false);
  const [brand, setBrand] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [show, setShow] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const ref: any = useRef();
  const refCard: any = useRef();
  const showRef: any = useRef();
  const location = useLocation();
  
  useEffect(() => {
    let ResponsiveMenu = () => {
      if (window.innerWidth < 667) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    };
    ResponsiveMenu();
    window.addEventListener("resize", ResponsiveMenu);
  }, []);

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (refCard.current.contains(e.target)) {
        setShowCard(true);
      } else {
        setShowCard(false);
      }
    });
  }, [setShowCard, refCard]);

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (ref.current.contains(e.target)) {
        setShowUser(true);
      } else {
        setShowUser(false);
      }
    });
  }, [showUser, ref]);

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (showRef.current.contains(e.target)) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, [show, showRef]);
  // const userRef: any = useRef();

  const [searchQuery, setSearchQuery] = useState("");
  // const [filteredProducts, setFilteredProducts] = useState([]);
  // const [showSearchBar, setShowSearchBar] = useState(false);

  const handleSearch = (e: any) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <div className="w-full h-20 bg_primary sticky top-0 z-50 border-b-[1px] ">
        <nav className="h-full px-4 max-w-container mx-auto relative">
          <div className="flex items-center justify-between h-full">
            <div className="flex gap-4 items-center">
              <Link to="/">
                <div>
                  <Image
                    className="w-20 object-cover"
                    imgSrc={orebilogo}
                    alt="orebilogo"
                  />
                </div>
              </Link>

              <div
                onClick={() => setShow(!show)}
                ref={showRef}
                className="flex h-14 cursor-pointer items-center gap-2 "
              >
                <HiOutlineMenuAlt4 className="w-5 h-5" />
                <p className="text-[14px] font-normal ">Shop by Category</p>

                {show && (
                  <motion.ul
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-20 z-50 w-auto text-[#767676] bg-black h-auto p-4 pb-6 "
                  >
                    <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                      Accessories
                    </li>
                    <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                      Furniture
                    </li>
                    <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                      Electronics
                    </li>
                    <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                      Clothes
                    </li>
                    <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400  hover:border-b-white hover:text-white duration-300 cursor-pointer">
                      Bags
                    </li>
                    <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400  hover:border-b-white hover:text-white duration-300 cursor-pointer">
                      Home appliances
                    </li>
                  </motion.ul>
                )}
              </div>
            </div>

            <div>
              {/* desktop menu  */}
              {/* {showMenu && (
                <motion.ul
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center w-auto z-50 p-0 gap-2"
                >
                  <>
                    {navBarList.map(({ _id, title, link }: TNavItem) => (
                      <NavLink
                        key={_id}
                        className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                        to={link}
                        // state={{ data: location.pathname.split("/")[1] }}
                      >
                        <li>{title}</li>
                      </NavLink>
                    ))}
                  </>
                </motion.ul>
              )} */}

              <div className="relative w-full lg:w-[600px] h-[50px] text-base  flex items-center gap-2 justify-between bg1 pr-2">
                <input
                  className="flex-1 h-full  outline-none placeholder:text-[#C4C4C4] border-y-0 border-s-0 rounded-none placeholder:text-[14px] px-4"
                  type="text"
                  onChange={handleSearch}
                  value={searchQuery}
                  placeholder="Search your products here"
                />
                <div className="p-[10px] px-6 text-white cursor-pointer bg_primary">
                  <FaSearch className="w-4 h-4 " />
                </div>
                {searchQuery && (
                  <div
                    className={`w-full mx-auto h-96 bg-white top-16 absolute left-0 z-50 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer`}
                  >
                    {/* {searchQuery &&
                    filteredProducts.map((item) => (
                      <div
                        onClick={() =>
                          navigate(
                            `/product/${item.productName
                              .toLowerCase()
                              .split(" ")
                              .join("")}`,
                            {
                              state: {
                                item: item,
                              },
                            }
                          ) &
                          setShowSearchBar(true) &
                          setSearchQuery("")
                        }
                        key={item._id}
                        className="max-w-[600px] h-28 bg-gray-100 mb-3 flex items-center gap-3"
                      >
                        <img className="w-24" src={item.img} alt="productImg" />
                        <div className="flex flex-col gap-1">
                          <p className="font-semibold text-lg">
                            {item.productName}
                          </p>
                          <p className="text-xs">{item.des}</p>
                          <p className="text-sm">
                            Price:{" "}
                            <span className="text-primeColor font-semibold">
                              ${item.price}
                            </span>
                          </p>
                        </div>
                      </div>
                    ))} */}
                  </div>
                )}
              </div>

              {/* menu icon  */}
              <HiMenuAlt2
                onClick={() => setSideNav(!sideNav)}
                className="inline-block md:hidden cursor-pointer w-8 h-6 absolute top-6 right-4"
              />
              {sideNav && (
                <div className="fixed top-0 left-0 w-full h-screen bg-black text-gray-200 z-50">
                  <motion.div
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-[80%] h-full relative"
                  >
                    <div className="w-full h-full bg-primeColor p-6">
                      <Image
                        className="w-28 mb-6"
                        imgSrc={logoLight}
                        alt="logoLight"
                      />
                      <ul className="text-gray-200 flex flex-col gap-2">
                        {navBarList.map((item: TNavItem) => (
                          <li
                            className="font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                            key={item._id}
                          >
                            <NavLink
                              to={item.link}
                              state={{ data: location.pathname.split("/")[1] }}
                              onClick={() => setSideNav(false)}
                            >
                              {item.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                      {/* <div className="mt-4">
                        <h1
                          onClick={() => setCategory(!category)}
                          className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
                        >
                          Shop by Category{" "}
                          <span className="text-lg">
                            {category ? "-" : "+"}
                          </span>
                        </h1>
                        {category && (
                          <motion.ul
                            initial={{ y: 15, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4 }}
                            className="text-sm flex flex-col gap-1"
                          >
                            <li className="headerSedenavLi">New Arrivals</li>
                            <li className="headerSedenavLi">Gudgets</li>
                            <li className="headerSedenavLi">Accessories</li>
                            <li className="headerSedenavLi">Electronics</li>
                            <li className="headerSedenavLi">Others</li>
                          </motion.ul>
                        )}
                      </div> */}
                      <div className="mt-4">
                        <h1
                          onClick={() => setBrand(!brand)}
                          className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
                        >
                          Shop by Brand
                          <span className="text-lg">{brand ? "-" : "+"}</span>
                        </h1>
                        {brand && (
                          <motion.ul
                            initial={{ y: 15, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4 }}
                            className="text-sm flex flex-col gap-1"
                          >
                            <li className="headerSedenavLi">New Arrivals</li>
                            <li className="headerSedenavLi">Gudgets</li>
                            <li className="headerSedenavLi">Accessories</li>
                            <li className="headerSedenavLi">Electronics</li>
                            <li className="headerSedenavLi">Others</li>
                          </motion.ul>
                        )}
                      </div>
                    </div>
                    <span
                      onClick={() => setSideNav(false)}
                      className="w-8 h-8 border-[1px] border-gray-300 absolute top-2 -right-10 text-gray-300 text-2xl flex justify-center items-center cursor-pointer hover:border-red-500 hover:text-red-500 duration-300"
                    >
                      <MdClose />
                    </span>
                  </motion.div>
                </div>
              )}
            </div>
            <div className="flex gap-0">
              <div className="flex gap-4 mt-2 lg:mt-0 items-center pr-4 cursor-pointer relative">
                <div
                  onClick={() => setShowCard(!showCard)}
                  className="flex"
                  ref={refCard}
                >
                  <div className="relative">
                    <FaShoppingCart className="text-white w-6 h-6" />
                    <span className="absolute font-titleFont top-3 -right-2 text-xs w-4 p-1 h-4 flex items-center justify-center rounded-full bg-white text_primary">
                      {/* {products.length > 0 ? products.length : 0} */}
                      10
                    </span>
                  </div>
                </div>
                {showCard && (
                  <motion.ul
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-14 right-0 z-50 bg-black w-44 text-[#767676] h-auto p-4 pb-6"
                  >
                    <Link to="/signin">
                      <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                        Login
                      </li>
                    </Link>
                    <Link onClick={() => setShowUser(false)} to="/signup">
                      <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                        Sign Up
                      </li>
                    </Link>
                    <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                      Profile
                    </li>
                    <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400  hover:border-b-white hover:text-white duration-300 cursor-pointer">
                      Others
                    </li>
                    <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400  hover:border-b-white hover:text-white duration-300 cursor-pointer">
                      <DarkMode></DarkMode>
                    </li>
                  </motion.ul>
                )}
              </div>
              <div className="flex gap-4 mt-2 lg:mt-0 items-center pr-6 cursor-pointer relative">
                <div
                  onClick={() => setShowUser(!showUser)}
                  className="flex"
                  ref={ref}
                >
                  <Avatar
                    size={40}
                    src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-1/358557027_1315097246054302_588325831363490884_n.jpg?stp=c0.0.40.40a_cp0_dst-jpg_p40x40&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=5d1fWYqf--YAX9nwEz2&_nc_ht=scontent.fdac14-1.fna&oh=00_AfDFw2awBlPPcvYjy4xVDXJa_Nw5S3ShGDS5iLBrukhT9A&oe=65EDDF71"
                    alt="My Avatar"
                  />
                </div>
                {showUser && (
                  <motion.ul
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-14 right-0 z-50 bg-black w-44 text-[#767676] h-auto p-4 pb-6"
                  >
                    <Link to="/signin">
                      <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                        Login
                      </li>
                    </Link>
                    <Link onClick={() => setShowUser(false)} to="/signup">
                      <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                        Sign Up
                      </li>
                    </Link>
                    <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                      Profile
                    </li>
                    <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400  hover:border-b-white hover:text-white duration-300 cursor-pointer">
                      Others
                    </li>
                    <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400  hover:border-b-white hover:text-white duration-300 cursor-pointer">
                      <DarkMode></DarkMode>
                    </li>
                  </motion.ul>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>

      {subHeader && <SubNavbar />}
    </>
  );
};

export default Header;
