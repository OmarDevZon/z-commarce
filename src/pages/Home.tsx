import { CategorySlider } from "../components/ui/home/CategorySlider";
import Banner from "../components/ui/home/Banner";
import { Sales } from "../components/ui/home/Sales";
import { NewArrivals } from "../components/ui/home/NewArrivals";
import { JustForYou } from "../components/ui/home/JustForYou";
import { TopProduct } from "../components/ui/home/TopProduct";
import { PhoneCategory } from "../components/ui/home/PhoneCategory";

export const Home = () => {
  return (
    <>
      <Banner />
      <CategorySlider />
      <Sales />
      <NewArrivals/>
      <PhoneCategory/>
      <JustForYou/>
      <TopProduct/>
    </>
  );
};
