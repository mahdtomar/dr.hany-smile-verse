import { useRecoilState } from "recoil";
import cosmeticinfo from "./cosmetic-atom";

function CosmeticInfo() {
  const [cosmentinfo] = useRecoilState(cosmeticinfo);
  return (
    <div>
      {cosmentinfo.map((e) => (
        <div key={e.id}>
          <h1 key={e.id}>{e.question}</h1>
          <p key={e.id}>{e.answer}</p>
        </div>
      ))}
    </div>
  );
}
export default CosmeticInfo;
