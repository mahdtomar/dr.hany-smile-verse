import "./cosmetic.css";
import cosmetic_image from "./assets/imgs/cosmitic.jpeg";
function HeaderCosmetic() {
  return (
    <div className="container-faq">
      <div className="d-flex justify-between cosmetic-parent">
        <div className="cosmetichead-content">
          <h1>Cosmetic Teeth</h1>
          <p>
            Cosmetic dentistry aims to create a more balanced, symmetrical and
            aesthetically pleasing smile. Common cosmetic dental services
            include teeth whitening, dental bonding, veneers, and tooth and gum
            contouring.
          </p>
        </div>
        <img
          src={cosmetic_image}
          alt="cosmetic"
          style={{ width: "50%", maxWidth: "100%", borderRadius: "13px" }}
        />
      </div>
    </div>
  );
}
export default HeaderCosmetic;
