import { useRecoilState } from "recoil";
import cosmeticinfo from "./cosmetic-atom";

function CosmeticInfo() {
  const [cosmentinfo] = useRecoilState(cosmeticinfo);
  return (
    <div className="d-flex flex-wrap container gap-5">
      {cosmentinfo.map((e) => (
        <div className={e.class} key={e.id}>
          <div>
          <img className="img-fluid" src={e.src} alt="" />
          {e.src_two ?<img src={e.src_two} alt=""/>:""}
          </div>
          <div>
          <h1 key={e.id}>{e.question}</h1>
          <p key={e.id}>{e.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default CosmeticInfo;
