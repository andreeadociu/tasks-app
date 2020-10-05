import uuid from "uuid/v4";

export const TASKS = [
  {
    id: uuid(),
    title: "First Task",
    content:
      "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
    status: "uncompleted",
  },
  {
    id: uuid(),
    title: "2nd Task",
    content:
      "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
    status: "uncompleted",
  },
];
