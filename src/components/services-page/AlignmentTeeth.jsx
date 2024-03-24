import React from "react";
import "./sass/AlignmentTeeth.css";
import ServiceHeader from "./ServiceHeader";
import ServicesDisplay from "./ServicesDisplay";
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
const sections = AlignmentTeethControllerData.sections
const section1 = sections.filter((section) => { return section.id === 1 })[0]
const section2 = sections.filter((section) => { return section.id === 2 })[0]
const section3 = sections.filter((section) => { return section.id === 3 })[0]
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
              <div className="container flex-2">
                <article>
                  <span>{section1.subTitle}</span>
                  <h1>{section1.title}</h1>
                  <p>
                    {section1.description[0]}
                  </p>
                  <p>
                    {section1.description[1]}
                  </p>
                </article>
                <img src={section1.img} alt="" />
              </div>
            </section>
            <section className="service-display">
              <div className="container flex-2">
                <div className="img">
                  <img src={section2.img} alt="" />
                </div>
                <div className="services">
                  {section2.features.map(({ icon, title, description }) => {
                    return <ServicesDisplay
                      img={icon}
                      title={title}
                      description={description}
                    />
                  })}
                </div>
              </div>
            </section>
            <section className="further-details">
              <div className="container">
                <div className="forms">
                  <span>{section3.title}</span>
                  <div className="files">
                    {section3.files.map((file) => {
                      return <div className="file">
                        <a href={file.file} download={"file.pdf"}>
                          <span>{file.title}</span>
                          <img src={file.icon} alt="" />
                        </a>
                      </div>
                    })}
                  </div>
                </div>
                <div className="insurance-details">
                  <span>{section3.insurance.title}</span>
                  <p>
                    {section3.insurance.description}
                  </p>
                </div>
                <div className="payment-method">
                  <span>{section3.paymentOptions.title}</span>
                  <p>
                    {section3.paymentOptions.description}
                  </p>
                </div>
              </div>
            </section>
            <section className="why-us">
              <span className="title">Why Opt for This Service</span>
              <p>
                Offering a comprehensive overview of systems and elaborating on
                the genuine teachings of the notable truth-seeker, the skilled
                creator of human well-being. Rejection, aversion, or avoidance
                of pleasure doesn't stem from pleasure itself but rather from
                the adverse consequences faced by those who lack a rational
                approach to pursuing it.
              </p>
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
