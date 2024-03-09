import Footer from "../Footer";
import Navbar from "../Navbar";
import Callus from "./Callus";
import ServiceHeader from "./ServiceHeader";
import ServicesSideBar from "./ServicesSideBar";
import CosmeticGallery from "./components/cosmetic-teeth/CosmeticGallery";
import CosmeticInfo from "./components/cosmetic-teeth/CosmeticInfo";
import HeaderCosmetic from "./components/cosmetic-teeth/HeaderCosmetic";
import "./sass/CosmeticTeeth.css";
function CosmeticTeeth() {
  return (
    <>
      <Navbar />
      {/* <div className="flex-2 container cosmetic-teeth"> */}
      <div className="flex-2 container mt-3">
        <main>
          <ServiceHeader servicename={"Cosmetic Teeth"} />
          <ServicesSideBar />
          <HeaderCosmetic />
          <CosmeticInfo />

          <CosmeticGallery />
        </main>
      </div>
      <Callus />
      <Footer />
    </>
  );
}
export default CosmeticTeeth;
