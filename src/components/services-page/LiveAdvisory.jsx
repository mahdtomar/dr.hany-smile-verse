import Footer from "../Footer";
import Navbar from "../Navbar";
import ServiceHeader from "./ServiceHeader";
import BookLive from "./components/live-advisory/components/BookLive";
import EndLive from "./components/live-advisory/components/EndLive";
// import HeaderLive from "./components/live-advisory/components/HeaderLive";

function LiveAdvisory() {
  return (
    <>
      <Navbar />
      <div className=" container mt-3">
        <ServiceHeader servicename={"Live advisory"} />
      </div>
      {/* <HeaderLive /> */}
      <BookLive />
      <EndLive />
      <Footer />
    </>
  );
}
export default LiveAdvisory;
