import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./styles/main.scss";
import Banner from "./components/Banner/Banner";
import CategorySelection from "./components/CategorySelection/CategorySelection";
import RelatedProducts from "./components/RelatedProducts/RelatedProducts";
import Modal from "./components/Modal/Modal";

const App: React.FC = () => {
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

export default App;
