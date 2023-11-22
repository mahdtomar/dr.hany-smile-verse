import React from "react";
import "./sass/homepage.css";
import Navbar from "../components/Navbar";
import image1 from "../images/wecare-dental_dentist-looks-into-mouth-.jpg";
import image2 from "../images/smily patient.jpg";
import whyusImg from "../images/dentist-kl.jpg";
import Card from "../components/Card";
import FeatureTile from "../components/FeatureTile";
import syring from "../icons/Syringe.svg";
import Header from "../components/Header";
import Footer from "../components/Footer";
const HomePage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="combined-squares">
        <div className="flex-2">
          <div>
            <img src={image1} alt="" />
          </div>
          <article>
            <h2>Comfort & Technology</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
              possimus sapiente repudiandae corrupti ullam odio beatae
              dignissimos quo. Pariatur quos eius sint est quis facere earum
              necessitatibus cumque repellendus iusto.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              debitis iure sapiente error consequatur. Sequi culpa quibusdam
              ipsum nemo expedita quasi ad ipsam maiores. Dolor possimus odio
              ratione tempora tempore.
            </p>
          </article>
        </div>
        <div className="flex-2">
          <div>
            <img src={image2} alt="" />
          </div>
          <article>
            <h2>Enjoy the Confidence of a Brilliant Smile</h2>
            <p>
              It can be difficult to feel good about yourself if you can’t feel
              good about your smile. Dental issues can hurt your self-esteem,
              damage your confidence, and have an overall negative impact on
              your everyday life.
            </p>
            <p>
              At Sapphire Smiles, we offer the kind of superior individualized
              care that can not only transform your smile but change your life
              as well. Instead of feeling shame when you flash your teeth in
              public, you can smile with a sense of pride and newfound
              confidence. The first step is a virtual consultation.
            </p>
          </article>
        </div>
      </div>
      <div className="cards">
        <div className="container flex-2">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <section className="why-us">
        <div className="container">
          <div className="flex-2">
            <article>
              <p>why us?</p>
              <FeatureTile
                title="this is title"
                description="this is a tile feature description this is a tile feature description this is a tile feature description "
                img={syring}
              />
              <FeatureTile
                title="this is title"
                description="this is a tile feature description this is a tile feature description this is a tile feature description "
                img={syring}
              />
              <FeatureTile
                title="this is title"
                description="this is a tile feature description this is a tile feature description this is a tile feature description "
                img={syring}
              />
              <FeatureTile
                title="this is title"
                description="this is a tile feature description this is a tile feature description this is a tile feature description "
                img={syring}
              />
            </article>
            <div className="image">
              <img src={whyusImg} alt="" />
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default HomePage;
