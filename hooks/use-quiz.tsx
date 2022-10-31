import { useContext } from "react";
import { Store } from "../store/store";

export const useQuiz = () => {
  const store = useContext(Store);

  return { ...store };
};
