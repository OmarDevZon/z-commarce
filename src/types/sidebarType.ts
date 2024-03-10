/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";

export type TRoute = {
  path: string;
  element: ReactNode;
};

export type TSubMenu = {
  subName: string;
  subLink: string;
  subIcon?: any;
};

export type TSidebarItem = {
  name: string;
  link?: string;
  icon?: any;
  children?: TSidebarItem[];
  subMenu?: TSubMenu[];
};

export type TUserPath = {
  name: string;
  path?: string;
  icon?: any;
  element?: ReactNode;
  children?: TUserPath[];
};
