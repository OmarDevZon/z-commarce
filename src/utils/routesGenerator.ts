import { TRoute, TUserPath } from "../types/sidebarType";

// make routes generator available
export const routeGenerator = (items: TUserPath[]) => {
  const routes = items.reduce((acc: TRoute[], item) => {
    // main paths generator
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }
    // sub paths generator
    if (item.children) {
      item.children.forEach((child) => {
        acc.push({
          path: child.path!,
          element: child.element,
        });
      });
    }

    return acc;
  }, []);

  return routes;
};
