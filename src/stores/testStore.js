import { create } from "zustand";

export const useTestStore = create((set, get) => ({
  open: false,
  questionNumber: 0,
  answers: [],
  submitted: false,
  points: 0,
  setOpen: (open) => set({ open }),
  deleteAnswers: () =>
    set({ answers: [], submitted: false, points: 0, questionNumber: 0 }),
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

  submit: async () => {
    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(get().answers),
    });
    if (response.ok) {
      const data = await response.json();
      set({ answers: [], submitted: true, points: data.points });
    }
  },
}));
