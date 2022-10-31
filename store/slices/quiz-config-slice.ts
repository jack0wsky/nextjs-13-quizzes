import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Difficulty } from "../../types";

interface IInitialState {
  category: string;
  difficulty: Difficulty | null;
}

const initialState: IInitialState = {
  category: "",
  difficulty: null,
};

const quizConfigSlice = createSlice({
  name: "quizConfig",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setDifficulty: (state, { payload }: PayloadAction<Difficulty>) => {
      state.difficulty = payload;
    },
  },
});

export const { setCategory, setDifficulty } = quizConfigSlice.actions;

export default quizConfigSlice.reducer;
