import { atom } from "recoil";
import imageOne from "./assets/imgs/imgOne.png";
import imageTwo from "./assets/imgs/imageTwo.jpeg";
import imageThree from "./assets/imgs/imageThree.jpeg";
const cosmetic = atom({
  key: "cosmetic",
  default: [
    {
      id: 0,
      src: imageOne,
      alt: "image one",
    },
    {
      id: 1,
      src: imageTwo,
      alt: "image two",
    },
    {
      id: 2,
      src: imageThree,
      alt: "image Three",
    },
    {
      id: 4,
      src: imageOne,
      alt: "image one",
    },
    {
      id: 5,
      src: imageTwo,
      alt: "image two",
    },
    {
      id: 6,
      src: imageThree,
      alt: "image Three",
    },
    {
      id: 7,
      src: imageOne,
      alt: "image one",
    },
    {
      id: 8,
      src: imageTwo,
      alt: "image two",
    },
    {
      id: 9,
      src: imageThree,
      alt: "image Three",
    },
  ],
});

export default cosmetic;
