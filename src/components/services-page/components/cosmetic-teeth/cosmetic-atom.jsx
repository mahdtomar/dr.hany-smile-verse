import cosmetic_dentistry from "./assets/imgs/cosmetic-dentistry.jpeg"
import { atom } from "recoil";
const cosmeticinfo = atom({
  key: "cosmeticinfo",
  default: [
    {
      id: 0,
      class:"card-one d-flex sm:flex-column",
      src:cosmetic_dentistry,
      question: "What is cosmetic dentistry?",
      answer:
        "Cosmetic dentistry focuses on improving the appearance and aesthetics of your smile. Common cosmetic dental procedures include teeth whitening, dental bonding and veneers.",
    },
    {
      id: 1,
      class:"card-two d-flex flex-column",
      src:cosmetic_dentistry,
      src_two:cosmetic_dentistry,
      question:
        "What’s the difference between cosmetic dentistry and general dentistry?",
      answer:
        "A general dentist is a primary dental care provider. They offer preventative care, like teeth cleanings, and restorative dentistry treatments, such as dental fillings, crowns and bridges. Most dental treatments restore appearance as well as health and function. However, a cosmetic dentist focuses on beautifying your smile. They offer treatments aimed at improving the appearance of your teeth and gums.",
    },
    {
      id: 2,
      class:"card-three",
      src:cosmetic_dentistry,
      question: "Who benefits from cosmetic dentistry?",
      answer:
        "Cosmetic dentistry might be an option if you have: Chipped or cracked teeth. Small gaps or spaces between your teeth.Tooth discoloration and staining.Misshapen teeth. Misaligned teeth.",
    },
  ],
});
export default cosmeticinfo;
