import Footer from "../Footer";
import Navbar from "../Navbar";
import Callus from "./Callus";
import ServiceHeader from "./ServiceHeader";
import ServicesSideBar from "./ServicesSideBar";
import BookLive from "./components/live-advisory/components/BookLive";
import EndLive from "./components/live-advisory/components/EndLive";
import HeaderLive from "./components/live-advisory/components/HeaderLive";

function LiveAdvisory() {
  return (
    <>
      <Navbar />
      <div className=" container mt-3">
        <ServiceHeader servicename={"Live advisory"} />
        <ServicesSideBar />
      </div>
      <HeaderLive />
      <BookLive />
      <EndLive />
      <Callus />
      <Footer />
    </>
  );
}
export default LiveAdvisory;
