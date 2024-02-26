import { atom } from "recoil";
import man_user from "../assets/icons/man_user_logo.svg";
import woman_user from "../assets/icons/women_user_logo.svg";

const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: [
    {
      id: 0,
      src: man_user,
      alt: "man user",
      name: "Ahmed Mohamed",
      description: "Hello, How mush does it cost",
    },
    {
      id: 1,
      src: woman_user,
      alt: "woman user",
      name: "Samar Mahmoud",
      description: "Hello, How mush does it cost",
    },
    {
      id: 2,
      src: man_user,
      alt: "man user",
      name: "Ahmed Mohamed",
      description: "Hello, How mush does it cost",
    },
    {
      id: 3,
      src: woman_user,
      alt: "woman user",
      name: "Samar Mahmoud",
      description: "Hello, How mush does it cost",
    },
    {
      id: 4,
      src: man_user,
      alt: "man user",
      name: "Ahmed Mohamed",
      description: "Hello, How mush does it cost",
    },
    {
      id: 5,
      src: woman_user,
      alt: "woman user",
      name: "Samar Mahmoud",
      description: "Hello, How mush does it cost",
    },
  ], // default value (aka initial value)
});
export default textState;
