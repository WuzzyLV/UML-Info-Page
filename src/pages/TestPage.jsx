import { Button } from "@material-tailwind/react";
import React from "react";
import { useTestStore } from "../stores/testStore";

export const TestPage = () => {
  const { open } = useTestStore();

  return open ? (
    questions.map((question) => <Question key={question.id} {...question} />)
  ) : (
    <HeroSection />
  );
};

const HeroSection = () => {
  const { setOpen } = useTestStore();
  return (
    <section className="h-full w-full flex items-center">
      <div className="absolute top-0 -z-10 w-full right-0 h-full bg-gradient-to-b from-accent1 to-white opacity-10 blur-xl"></div>
      <div className=" z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl text-gray-900 text font-extrabold mx-auto md:text-5xl">
            UML diagrammu tests
          </h2>
          <p className="max-w-2xl mx-auto text-gray-800">
            Veids kā paradīt jūsu zināšanas par klases un aktivitāšu UML
            diagrammām.
          </p>

          <Button size="sm" onClick={() => setOpen(true)}>
            <div className="flex flex-row justify-center items-center gap-1">
              Sākt pildīt testu
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
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
  return (
    <section className="h-screen w-full flex items-center">
      <div className="absolute top-0 -z-10 w-full right-0 h-full bg-gradient-to-b from-accent1 to-white opacity-10 blur-xl"></div>
      <div className=" z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl text-gray-900 text font-extrabold mx-auto md:text-5xl">
            {question.title}
          </h2>
          <p className="max-w-2xl mx-auto text-gray-800"></p>

          {/* <Button size="sm" onClick={() => setOpen(true)}>
            <div className="flex flex-row justify-center items-center gap-1">
              Sākt pildīt testu
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
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
          </Button> */}
        </div>
      </div>
    </section>
  );
};

const questions = [
  {
    id: 1,
    title: "1. Kas ir klases diagramma?",
  },
];
