import Banner from "../components/ui/home/Banner";
import { Categories } from "../components/ui/home/Categories";
import { Sales } from "../components/ui/home/Sales";

export const Home = () => {
  return (
    <>
      <Categories />
      <Banner />
      <Sales />
    </>
  );
};
