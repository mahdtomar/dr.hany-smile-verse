import Footer from "../Footer";
import Navbar from "../Navbar";
import ServiceHeader from "./ServiceHeader";
import ServicesSideBar from "./ServicesSideBar";
import CosmeticGallery from "./components/cosmetic-teeth/CosmeticGallery";
import HeaderCosmetic from "./components/cosmetic-teeth/HeaderCosmetic";
import './sass/CosmeticTeeth.css'
function CosmeticTeeth() {
  return (
    <>
      <Navbar />
      <div className="flex-2 container cosmetic-teeth">
        <ServicesSideBar />
        <main>
          <ServiceHeader servicename={"Cosmetic Teeth"} />
          <HeaderCosmetic />
          <CosmeticGallery />
        </main>
      </div>
      <Footer />
    </>
  );
}
export default CosmeticTeeth;
