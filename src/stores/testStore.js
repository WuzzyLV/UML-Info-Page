import { create } from "zustand";

export const useTestStore = create((set, get) => ({
  open: false,
  questionNumber: 0,
  answers: [],
  setOpen: (open) => set({ open }),
  setQuestionNumber: (questionNumber) => set({ questionNumber }),
  setAnswers: (newAnswer) =>
    set((state) => {
      const existingAnswerIndex = state.answers.findIndex(
        (answer) => answer.questionId === newAnswer.questionId
      );

      if (existingAnswerIndex !== -1) {
        const updatedAnswers = [...state.answers];
        updatedAnswers[existingAnswerIndex] = newAnswer;
        return { answers: updatedAnswers };
      } else {
        return { answers: [...state.answers, newAnswer] };
      }
    }),
}));
