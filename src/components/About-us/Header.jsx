import React from "react";
import staffImage from "../../images/staff.jpeg";
import "./scss/header.css";
const Header = () => {
  return (
    <div className="about-us-header">
      <div className="container">
        <figure className="flex-2">
          <img src={staffImage} alt="" />
          <figcaption>
            <span className="title">about us</span>
            <h1>Misson And Story About Smile Verse.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur corrupti praesentium accusantium aut fugiat quaerat
              tempora saepe ratione pariatur quidem.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
              nisi ipsum explicabo iste possimus ullam sunt quisquam nemo autem
              amet impedit, distinctio officiis dolore nihil obcaecati numquam
              voluptatem adipisci alias ratione ab. Iure provident impedit vel
              fugit ipsa obcaecati. Hic magnam ut omnis temporibus
              necessitatibus officia tenetur inventore non accusantium!
            </p>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Header;
