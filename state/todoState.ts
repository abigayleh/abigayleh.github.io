import { atom, atomFamily } from "recoil";
import { TodoContent } from "../types";

export const todoContentState = atom<TodoContent[]>({
  key: "todoContents",
  default: [],
});

export const todoState = atomFamily<TodoContent, string>({
  key: "todoIndividual",
  default: {
    id: '',
    title: '',
    description: '',
    isCompleted: false,
    dueDate: undefined,
    isPriority: false,
  },
});
