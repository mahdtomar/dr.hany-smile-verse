import React from "react";
import "./sass/AlignmentTeeth.css";
import ServiceHeader from "./ServiceHeader";
import ServicesDisplay from "./ServicesDisplay";
import { Link } from "react-router-dom";
import AppointmentBtn from "../AppointmentBtn";
// images & pdf
import pdf1 from "../../files/file.pdf";
import headingImage from "../../images/complementary-consultant.jpg";
import downloadIcon from "../../icons/ArrowLineDown.svg";
import serviceDisplay from "../../images/dentalia-demo-consultation-3-1.jpg";
import syring from "../../icons/Syringe.svg";
const AlignmentTeeth = () => {
  return (
    <div className="AlignmentTeeth-comp">
      <div className="container">
        <div className="sidebar">
          <ul>
            <li>
              <Link className="active">Service 1</Link>
            </li>
            <li>
              <Link>Service 2</Link>
            </li>
            <li>
              <Link>Service 3</Link>
            </li>
            <li>
              <Link>Service 4</Link>
            </li>
          </ul>
          <div className="callus">
            <p className="title">If You Need Any Help Contact With Us</p>
            <span>+91 111 3216 745</span>
          </div>
        </div>
        <main>
          <ServiceHeader servicename={"Alignment Teeth"} />
          <section className="header">
            <div className="container flex-2">
              <article>
                <span>WELCOME GIFT FOR NEW PATIENTS</span>
                <h1>Free Smile Verse Consultation</h1>
                <p>
                  At our clinic, we understand the importance of your smile.
                  That's why we're offering a complimentary initial oral health
                  consultation.
                </p>
                <p>
                  Our dental experts will create a personalized plan for
                  restoring your teeth, utilizing a digital CT scan and a
                  thorough dental examination. Once you're entirely content with
                  the proposed solutions, we'll commence with the treatment. Let
                  us help you achieve the smile of your dreams at Smile Verse!
                </p>
              </article>
              <img src={headingImage} alt="" />
            </div>
          </section>
          <section className="service-display">
            <div className="container flex-2">
              <div className="img">
                <img src={serviceDisplay} alt="" />
              </div>
              <div className="services">
                <ServicesDisplay
                  img={syring}
                  title={"this is title"}
                  description={"this is a brief description"}
                />
                <ServicesDisplay
                  img={syring}
                  title={"this is title"}
                  description={"this is a brief description"}
                />
                <ServicesDisplay
                  img={syring}
                  title={"this is title"}
                  description={"this is a brief description"}
                />
                <ServicesDisplay
                  img={syring}
                  title={"this is title"}
                  description={"this is a brief description"}
                />
              </div>
            </div>
          </section>
          <section className="further-details">
            <div className="container">
              <div className="forms">
                <span>patients Forms</span>
                <div className="files">
                  <div className="file">
                    <a href={pdf1} download={"file.pdf"}>
                      <span>patient welcome form</span>
                      <img src={downloadIcon} alt="" />
                    </a>
                  </div>
                  <div className="file">
                    <a href={pdf1} download={"file.pdf"}>
                      <span>Office Policy</span>
                      <img src={downloadIcon} alt="" />
                    </a>
                  </div>

                  <div className="file">
                    <a href={pdf1} download={"file.pdf"}>
                      <span>HIPPA Notice Form</span>
                      <img src={downloadIcon} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="insurance-details">
                <span>INSURANCE</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum ducimus enim harum tempore, odio vitae accusantium
                  adipisci molestias dicta asperiores, corporis iste quod totam
                  expedita laboriosam explicabo. Rerum, enim voluptate.
                </p>
              </div>
              <div className="payment-method">
                <span>PAYMENT OPTIONS</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  delectus sit laudantium consequatur et ipsa voluptates eos
                  magni tempora sint, molestias soluta repudiandae nemo qui enim
                  necessitatibus in doloribus porro.
                </p>
              </div>
            </div>
          </section>
          <section className="why-us">
            <span className="title">Why Opt for This Service</span>
            <p>
              Offering a comprehensive overview of systems and elaborating on
              the genuine teachings of the notable truth-seeker, the skilled
              creator of human well-being. Rejection, aversion, or avoidance of
              pleasure doesn't stem from pleasure itself but rather from the
              adverse consequences faced by those who lack a rational approach
              to pursuing it.
            </p>
            <AppointmentBtn />
          </section>
        </main>
      </div>
    </div>
  );
};

export default AlignmentTeeth;
