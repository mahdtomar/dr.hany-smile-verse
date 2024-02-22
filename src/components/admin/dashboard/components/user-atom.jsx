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
      id: 0,
      src: woman_user,
      alt: "woman user",
      name: "Samar Mahmout",
      description: "Hello, How mush does it cost",
    },
    {
      id: 0,
      src: man_user,
      alt: "man user",
      name: "Ahmed Mohamed",
      description: "Hello, How mush does it cost",
    },
    {
      id: 0,
      src: woman_user,
      alt: "woman user",
      name: "Samar Mahmout",
      description: "Hello, How mush does it cost",
    },
    {
      id: 0,
      src: man_user,
      alt: "man user",
      name: "Ahmed Mohamed",
      description: "Hello, How mush does it cost",
    },
    {
      id: 0,
      src: woman_user,
      alt: "woman user",
      name: "Samar Mahmout",
      description: "Hello, How mush does it cost",
    },
  ], // default value (aka initial value)
});
export default textState;
