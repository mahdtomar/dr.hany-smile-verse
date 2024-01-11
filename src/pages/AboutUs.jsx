import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/About-us/Header";
import Achievement from "../components/About-us/Achievement";
// importing images and icons
import ToothInHeart from "../icons/teeth in a heart.jpeg";
import hostpital from "../icons/hospital.jpeg";
import doctor from "../icons/dentist.jpeg";
import FeatureTile from "../components/FeatureTile";
import Testmonial from "../components/About-us/Testmonial";
const AboutUs = () => {
  return (
    <div className="about-us-comp">
      <Navbar />
      <Header />
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
      <div className="our-vision">
        <FeatureTile
          description={
            "To provide outstanding dental care with a commitment of honesty, integrity & quality..."
          }
          title={"Our Misson"}
        />
        <FeatureTile
          description={
            "To be widely recognized as one of world's leading & most preferred dental care service..."
          }
          title={"Our Vision"}
        />
        <FeatureTile
          description={
            "We play an active role in our community to make it abetter place to live and work..."
          }
          title={"PHILOSOPHY"}
        />
      </div>
      <div className="testmonials">
        <Testmonial
          msg={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam nulla alias doloribus sunt molestias eveniet sint, voluptate nostrum perferendis doloremque, non explicabo omnis obcaecati ratione rem quae dolore at. Numquam!"
          }
          person={"Omar Mahdy"}
        />
        <Testmonial
          msg={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam nulla alias doloribus sunt molestias eveniet sint, voluptate nostrum perferendis doloremque, non explicabo omnis obcaecati ratione rem quae dolore at. Numquam!"
          }
          person={"Omar Mahdy"}
        />
        <Testmonial
          msg={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam nulla alias doloribus sunt molestias eveniet sint, voluptate nostrum perferendis doloremque, non explicabo omnis obcaecati ratione rem quae dolore at. Numquam!"
          }
          person={"Omar Mahdy"}
        />
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
