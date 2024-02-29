import { atom } from "recoil";
const questions = atom({
  key: "questions",
  default: [
    {
      id: 0,
      title_question: "What are we introduce?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure suscipit asperiores nam architecto consectetur rerum, esse, nulla itaque dolore possimus ex tenetur ullam vel dolor quia molestias! Ad, officiis corrupti?",
    },
    {
      id: 1,
      title_question: "What are we introduce?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure suscipit asperiores nam architecto consectetur rerum, esse, nulla itaque dolore possimus ex tenetur ullam vel dolor quia molestias! Ad, officiis corrupti?",
    },
    {
      id: 2,
      title_question: "What are we introduce?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure suscipit asperiores nam architecto consectetur rerum, esse, nulla itaque dolore possimus ex tenetur ullam vel dolor quia molestias! Ad, officiis corrupti?",
    },
  ],
});
export default questions;
