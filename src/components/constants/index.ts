// =================== NavBarList Start here ====================

export type TNavBarList = {
  _id?: number;
  title: string;
  link: string;
}[];
export type TNavItem = {
  _id?: number;
  title: string;
  link: string;
};

export const navBarList: TNavBarList = [
  {
    _id: 1001,
    title: "Home",
    link: "/home",
  },
  {
    _id: 1002,
    title: "Shop",
    link: "/shop",
  },
  {
    _id: 1002,
    title: "Omar",
    link: "/omar",
  },
  {
    _id: 1002,
    title: "Shop",
    link: "/shop",
  },
  {
    _id: 1003,
    title: "About",
    link: "/about",
  },
  {
    _id: 1004,
    title: "Contact",
    link: "contact",
  },
  {
    _id: 1005,
    title: "Journal",
    link: "/journal",
  },
];
// =================== NavBarList End here ======================
