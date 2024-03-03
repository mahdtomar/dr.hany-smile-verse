import { useRecoilState } from "recoil";
import cosmetic from "./cosmetic-data";

function CosmeticGallery() {
  const [data] = useRecoilState(cosmetic);
  return (
    <div className="cosmeticgall-parent">
      <h2>Cosmetic Dentistry | Real Patients Before & After Images</h2>
      <div className="cosmetic-gallery">
        {data.map((e) => (
          <div key={e.id}>
            <img
              key={e.id}
              src={e.src}
              alt={e.alt}
              style={{ height: "254px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default CosmeticGallery;
