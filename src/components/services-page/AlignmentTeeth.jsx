import React from "react";
import "./sass/AlignmentTeeth.css";
import ServiceHeader from "./ServiceHeader";
// import ServicesDisplay from "./ServicesDisplay";
import AppointmentBtn from "../AppointmentBtn";
// images & pdf
// import pdf1 from "../../files/file.pdf";
// import headingImage from "../../images/complementary-consultant.jpg";
// import downloadIcon from "../../icons/ArrowLineDown.svg";
// import serviceDisplay from "../../images/alignmentTeethImage.jpg";
// import syring from "../../icons/Syringe.svg";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ServicesSideBar from "./ServicesSideBar";
import Callus from "./Callus";
import { AlignmentTeethControllerData } from '../../Data'
import HeaderAlignment from "./components/alignment-teeth/components/HeaderAlignment";
import DisplayAlignment from "./components/alignment-teeth/components/DisplayAlignment";
import FurtherAlignment from "./components/alignment-teeth/components/FurtherAlignment";
import WhyUsAlignment from "./components/alignment-teeth/components/WhyUsAlignment";
const sections = AlignmentTeethControllerData.sections
// const section1 = sections.filter((section) => { return section.id === 1 })[0]
// const section2 = sections.filter((section) => { return section.id === 2 })[0]
// const section3 = sections.filter((section) => { return section.id === 3 })[0]
const AlignmentTeeth = () => {
  return (
    <>
      <Navbar />
      <div className="AlignmentTeeth-comp">
        {/* <div className="container"> */}
        <div className="container">
          <main>
            <ServiceHeader servicename={"Alignment Teeth"} />
            <ServicesSideBar />
            <section className="header">
              
              <HeaderAlignment/>
            </section>
            <section className="service-display">
             <DisplayAlignment/>
              
            </section>
            <section className="further-details">
           <FurtherAlignment/>
            </section>
            <section className="why-us">
              <WhyUsAlignment/>
              <AppointmentBtn />
            </section>
          </main>
        </div>
      </div>
      <Callus />
      <Footer />
    </>
  );
};

export default AlignmentTeeth;
