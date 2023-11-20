import React from "react";
import Navbar from "../components/Navbar";
import WorkingHours from "../components/WorkingHours";
import MainNav from "../components/MainNav";
import image1 from "../images/wecare-dental_dentist-looks-into-mouth-.jpg";
import image2 from "../images/preventive-1.jpg";
import whyusImg from "../images/dentist-kl.jpg";
import Card from "../components/Card";
import FeatureTile from "../components/FeatureTile";
import syring from "../icons/Syringe.svg";
const HomePage = () => {
  return (
    <>
      <Navbar />
      <WorkingHours />
      <MainNav />
      <div className="header">
        <div className="container">
          <h1>Smile Verse</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
            impedit nulla non nostrum sit! Nulla recusandae quos, minima, autem
            fugiat alias, molestiae animi eaque repudiandae sed quaerat
            praesentium a delectus!
          </p>
          <button>Schedule Now</button>
        </div>
      </div>
      <div className="combined-squares">
        <div className="flex-2">
          <div>
            <img src={image1} alt="" />
          </div>
          <article>
            <h2>heading text</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
              possimus sapiente repudiandae corrupti ullam odio beatae
              dignissimos quo. Pariatur quos eius sint est quis facere earum
              necessitatibus cumque repellendus iusto.
            </p>
          </article>
        </div>
        <div className="flex-2">
          <div>
            <img src={image2} alt="" />
          </div>
          <article>
            <h2>heading text</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              autem. Debitis deserunt dignissimos itaque, doloremque facere, rem
              molestiae libero quidem minus earum eum ex consectetur quod
              tempore omnis suscipit voluptatibus.
            </p>
          </article>
        </div>
      </div>
      <div className="cards">
        <div className="container">
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
    </>
  );
};

export default HomePage;
