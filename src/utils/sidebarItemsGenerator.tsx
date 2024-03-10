/* eslint-disable @typescript-eslint/no-explicit-any */
import { TSidebarItem, TUserPath } from "../types/sidebarType";

// this is  a sidebar generator component
export const sidebarItemsGenerator = (items: TUserPath[], role: any) => {
  const sidebarItems = items.reduce((acc: TSidebarItem[], item) => {
    if (item.path && item.name) {
      acc.push({
        name: item.name,
        icon: item.icon,
        link: `${item.path}`,
      });
    }
    // make sub items
    if (item.children) {
      acc.push({
        name: item.name,
        icon: item.icon,
        subMenu: item.children.map((child) => ({
          subName: child.name,
          subIcon: child.icon,
          subLink: `${child.path}`,
        })),
      });
    }

    return acc;
  }, []);

  return sidebarItems;
};
