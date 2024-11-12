import { Button } from "@material-tailwind/react";
import { useTestStore } from "../stores/testStore";
import { useEffect, useState } from "react";

export const TestPage = () => {
  const { open, questionNumber } = useTestStore();

  return open ? (
    <Question question={questions[questionNumber]} />
  ) : (
    <HeroSection />
  );
};

const HeroSection = () => {
  const { setOpen } = useTestStore();
  return (
    <section className="h-screen -mb-64  mt-48">
      <div className="absolute top-0 -z-10 w-full right-0  bg-gradient-to-b from-accent1 to-white opacity-10 blur-xl"></div>
      <div className=" z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl text-gray-900 text font-extrabold mx-auto md:text-5xl">
            UML diagrammu tests
          </h2>

          <p className="max-w-2xl mx-auto text-gray-800">
            Veids kā pārbaudīt Jūsu zināšanas par klases un aktivitāšu UML
            diagrammām.
          </p>
          <Button size="sm" onClick={() => setOpen(true)}>
            <div className="flex flex-row justify-center items-center gap-1">
              Sākt pildīt testu
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};

const Question = (question) => {
  const { questionNumber, setQuestionNumber, setAnswers, answers } =
    useTestStore();

  const { question: questionData } = question;

  return (
    <section className="h-full -mt-20 w-full flex items-center">
      <div className="absolute top-0 -z-10 w-full right-0 h-full bg-gradient-to-b from-accent1 to-white opacity-10 blur-xl"></div>
      <div className=" z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl text-gray-900 text font-extrabold mx-auto md:text-5xl">
            {questionNumber + 1}. {questionData.title}
          </h2>
          <p className="max-w-2xl mx-auto text-gray-800"></p>
        </div>

        {questionData.type === "quiz" ? (
          <div className="flex flex-col gap-4 mt-8">
            {questionData.options.map((option) => (
              <Button
                key={option.id}
                color="gray"
                size="lg"
                disabled={answers.some(
                  (answer) =>
                    answer.questionId === questionData.id &&
                    answer.pickedOption === option.id
                )}
                onClick={() => {
                  setAnswers({
                    questionId: questionData.id,
                    pickedOption: option.id,
                  });
                  if (questionNumber + 1 === questions.length) {
                    return;
                  }
                  setQuestionNumber(questionNumber + 1);
                }}
                className="px-2.5 py-2.5 text-accent1 duration-150 bg-accent2 rounded-lg hover:bg-red-100"
              >
                {option.title}
              </Button>
            ))}
          </div>
        ) : null}

        <div className="mt-20 flex flex-row justify-center">
          {questionNumber + 1 === questions.length && (
            <Button size="sm" onClick={() => {}} fullWidth>
              Pabeigt testu!
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

const questions = [
  {
    id: 1,
    title: "Ko nozīmē UML?",
    type: "quiz",
    options: [
      { id: 1, title: "Unified Modeling Language" },
      { id: 2, title: "Unified Model Language" },
      { id: 3, title: "Unified Model Layer" },
      { id: 4, title: "Unified Model Layout" },
    ],
  },
  {
    id: 2,
    title: "Ko nozīmē UML?",
    type: "quiz",
    options: [
      { id: 1, title: "Unified Modeling Language" },
      { id: 2, title: "Unified Model Language" },
      { id: 3, title: "Unified Model Layer" },
      { id: 4, title: "Unified Model Layout" },
    ],
  },
];
