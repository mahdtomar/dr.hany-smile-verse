import Footer from "../Footer";
import Navbar from "../Navbar";
import ServiceHeader from "./ServiceHeader";
import ServicesSideBar from "./ServicesSideBar";
import "./sass/oralhygiene.css";
// import headerimage from "../../images/Oral-Hygiene.jpg";
import Callus from "./Callus";
import HeaderOral from "./components/oral-hygiene/components/HeaderOral";
import ServicesOral from "./components/oral-hygiene/components/ServicesOral";
import CommonIssuesOral from "./components/oral-hygiene/components/CommonIssuesOral";

// topics
// what makes up special
// daily oral care routine
// common dental issues
// children's oral health
// dental products review

function OralHygiene() {
  return (
    <>
      <Navbar />
      <div className="container oralhygiene " style={{ display: "block" }}>
        <main>
          <ServiceHeader servicename={"Oral Hygiene"} />
          <ServicesSideBar />

        <HeaderOral/>
<ServicesOral/>
     <CommonIssuesOral/>
        </main>
      </div>
      <Callus />
      <Footer />
    </>
  );
}
export default OralHygiene;
