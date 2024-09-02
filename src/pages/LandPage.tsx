import Header from "../components/Header/Header";
import Banner from "../features/LandPage/Banner/Banner";
import Footer from "../components/Footer/Footer";
import CategorySelection from "../features/LandPage/CategorySelection/CategorySelection";
import RelatedProducts from "../features/LandPage/RelatedProducts/RelatedProducts";

const LandPage: React.FC = () => {
  return (
    <>
      <Header />
      <Banner />
      <CategorySelection />
      <RelatedProducts />
      <Footer />
    </>
  );
};

export default LandPage;
