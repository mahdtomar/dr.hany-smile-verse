import Footer from "../Footer";
import Navbar from "../Navbar";
import CosmeticGallery from "./components/cosmetic-teeth/CosmeticGallery";
import HeaderCosmetic from "./components/cosmetic-teeth/HeaderCosmetic";

function CosmeticTeeth() {
  return (
    <>
      <Navbar />
      <HeaderCosmetic />
      <CosmeticGallery />
      <Footer />
    </>
  );
}
export default CosmeticTeeth;
