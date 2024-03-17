import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/About-us/Header";
import Achievement from "../components/About-us/Achievement";
import "./sass/aboutus.css";
// importing images and icons
import ToothInHeart from "../icons/tooth-svgrepo-com.svg";
import hostpital from "../icons/hospitalOutline.svg";
import doctor from "../icons/doctor-svgrepo-com.svg";
import FeatureTile from "../components/FeatureTile";
import Testmonial from "../components/About-us/Testmonial";
import FeedbackForm from "../components/faq/FeedbackForm";
import guyAvatar from '../images/users avatar male.jpg'
import girlAvatar from '../images/user avatar girl.jpg'
import oldmanAvatar from '../images/user avatar old man.jpg'
const AboutUs = () => {
  return (
    <div className="about-us-comp">
      <Navbar />
      <Header />
      <div className="container">
        <div className="flex-2 achievments">
          <Achievement
            img={ToothInHeart}
            title={"Projects"}
            count={"3202"}
            description={
              "this is a description. this is a description. this is a description. "
            }
          />
          <Achievement
            img={doctor}
            title={"Dentists"}
            count={"17"}
            description={
              "this is a description. this is a description. this is a description. "
            }
          />
          <Achievement
            img={hostpital}
            title={"Hospitals"}
            count={"6"}
            description={
              "this is a description. this is a description. this is a description. "
            }
          />
        </div>
      </div>
      <div className="our-vision">
        <div className="container flex-2">
          <FeatureTile
            description={
              "To provide outstanding dental care with a commitment of honesty, integrity & quality"
            }
            title={"Our Misson"}
          />
          <FeatureTile
            description={
              "To be widely recognized as one of world's leading & most preferred dental care service"
            }
            title={"Our Vision"}
          />
          <FeatureTile
            description={
              "We play an active role in our community to make it abetter place to live and work"
            }
            title={"PHILOSOPHY"}
          />
        </div>
      </div>
      <div className="testmonials">
        <h2>what our patients are saying</h2>
        <div className="container flex-2">
          <Testmonial
            img={guyAvatar}
            msg={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam nulla alias doloribus sunt molestias eveniet sint"
            }
            person={"Omar Mahdy"}
          />
          <Testmonial
            img={oldmanAvatar}
            msg={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam nulla alias doloribus sunt molestias eveniet sint"
            }
            person={"Omar Mahdy"}
          />
          <Testmonial
            img={girlAvatar}
            msg={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam nulla alias doloribus sunt molestias eveniet sint"
            }
            person={"Omar Mahdy"}
          />
        </div>
      </div>
      <FeedbackForm />
      <Footer />
    </div>
  );
};

export default AboutUs;
