import { Button } from "@material-tailwind/react";
import { useTestStore } from "../stores/testStore";
import { useEffect, useState } from "react";
import Confetti from "../components/Confetti";

export const TestPage = () => {
  const { open, questionNumber, submitted } = useTestStore();

  return open ? (
    submitted ? (
      <SubmissionResult />
    ) : (
      <Question question={questions[questionNumber]} />
    )
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
function getGradientColor(value) {
  // Ensure the value is clamped between 0 and 100
  const clampedValue = Math.min(100, Math.max(0, value));

  // Calculate the hue (0 for red to 120 for green)
  const hue = (clampedValue * 120) / 100;

  // Return the color in a format that can be used with Tailwind's inline style
  return `hsl(${hue}, 100%, 50%)`;
}
const SubmissionResult = () => {
  const { setOpen } = useTestStore();
  const { points, deleteAnswers } = useTestStore();

  const summary = (points) => {
    if (points < 3) {
      return "Jūsu zināšanas par UML diagrammām ir ļoti vājas. 😭😿 Iesakām izlasīt materiālus vēlreiz un pēc tam atkārtoti pildīt testu.";
    }
    if (points < 5) {
      return "Jūsu zināšanas par UML diagrammām ir vidējas. 🙌 Iesakām izlasīt materiālus vēlreiz un pēc tam atkārtoti pildīt testu.";
    }
    if (points > 7) {
      return "Jūsu zināšanas par UML diagrammām ir labas. 👏💋 Iesakām izlasīt materiālus vēlreiz un pēc tam atkārtoti pildīt testu.";
    }
  };

  return (
    <section className="h-screen -mb-64 mt-48 overflow-x-hidden">
      <Confetti />]
      <div className="absolute top-0 -z-10 w-full right-0  bg-gradient-to-b from-accent1 to-white opacity-10 blur-xl"></div>
      <div className=" z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl text-gray-900 text font-extrabold mx-auto md:text-5xl">
            Testa rezultāts
          </h2>
          <h3 className={` text font-extrabold mx-auto md:text-3xl`}>
            Tavs rezultāts:{" "}
            <span
              style={{
                color: getGradientColor((points / questions.length) * 100),
              }}
              className=" bg-gray-300 px-2 rounded-lg border-gray-500 border"
            >
              {Math.round((points / questions.length) * 100)}%
            </span>
          </h3>

          <p className="max-w-2xl mx-auto text-gray-800">{summary(points)}</p>
          <Button
            size="sm"
            onClick={() => {
              setOpen(true);
              deleteAnswers();
            }}
          >
            <div className="flex flex-row justify-center items-center gap-1">
              Pildīt testu atkārtoti
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

const shuffleArray = (array) => {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Question = (question) => {
  const { questionNumber, setQuestionNumber, setAnswers, answers, submit } =
    useTestStore();

  const { question: questionData } = question;

  const [shuffledOptions, setShuffledOptions] = useState([]);

  useEffect(() => {
    if (questions.length > 0) {
      setShuffledOptions(shuffleArray(questionData.options));
    }
  }, [questionNumber, questionData]);

  return (
    <section className="h-screen -mt-20 w-full flex items-center">
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
            {shuffledOptions.map((option) => (
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
                    pickedAnswer: option.id,
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
          {answers.length === questions.length && (
            <Button size="sm" onClick={submit} fullWidth>
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
    title: "Kāds ir UML klases diagrammas galvenais mērķis?",
    type: "quiz",
    options: [
      { id: 1, title: "Attēlot klases un to attiecības sistēmā" },
      { id: 2, title: "Attēlot fizisku sistēmu struktūru" },
      { id: 3, title: "Attēlot datu plūsmas sistēmā" },
      {
        id: 4,
        title: "Attēlot visus iespējamos programmatūras kļūdu scenārijus",
      },
    ],
  },
  {
    id: 3,
    title:
      "Kādu veida diagrammu izmantotu lai paradītu iekšējā koda struktūru un tā relāciju?",
    type: "quiz",
    options: [
      { id: 1, title: "Klašu diagrammu" },
      { id: 2, title: "Aktivitāšu diagrammu" },
      { id: 3, title: "Izvietošanas diagrammu" },
      { id: 4, title: "Komponenšu diagrammu" },
    ],
  },
  {
    id: 4,
    title: "Klašu diagrammās ko nozīmē simbols + pie atribūta?",
    type: "quiz",
    options: [
      { id: 1, title: "Kad atribūts ir publisks" },
      { id: 2, title: "Kad atribūts ir privāts" },
      { id: 3, title: "Kad atribūts ir pievienots" },
      { id: 4, title: "Kad atribūts ir aizsargāts ⚔" },
    ],
  },
  {
    id: 5,
    title: "Klašu diagrammās ko nozīmē simbols # pie atribūta?",
    type: "quiz",
    options: [
      { id: 1, title: "Kad atribūts ir aizsargāts ⚔" },
      { id: 2, title: "Kad atribūts ir privāts" },
      { id: 3, title: "Kad atribūts ir pievienots" },
      { id: 4, title: "Kad atribūts ir publisks" },
    ],
  },
  {
    id: 6,
    title: "Kas ir UML aktivitāšu diagramma?",
    type: "quiz",
    options: [
      {
        id: 1,
        title:
          "Diagramma, kas attēlo sistēmas laika gaitā notiekošos procesus.",
      },
      {
        id: 2,
        title: "Diagramma, kas attēlo sistēmas klases un to attiecības.",
      },
      { id: 3, title: "Diagramma, kas attēlo sistēmas datu plūsmu." },
      {
        id: 4,
        title: "Diagramma, kas attēlo sistēmas komponentu arhitektūru.",
      },
    ],
  },
  {
    id: 7,
    title: "Kā tiek attēlota aktivitātes diagrammā lēmuma vieta?",
    type: "quiz",
    options: [
      {
        id: 1,
        title: "Ar rombu",
      },
      {
        id: 2,
        title: "Ar taisnstūri",
      },
      { id: 3, title: "Ar apli" },
      {
        id: 4,
        title: "Ar trīsstūri",
      },
    ],
  },
  {
    id: 8,
    title: 'Kādas ir "paralēlas aktivitātes" UML aktivitāšu diagrammā?',
    type: "quiz",
    options: [
      {
        id: 1,
        title:
          "Aktivitātes, kas tiek izpildītas vienlaikus, izmantojot dakšas mezglu un savienošanas mezgls",
      },
      {
        id: 2,
        title: "Aktivitātes, kas tiek izpildītas viena pēc otras",
      },
      {
        id: 3,
        title: "Aktivitātes, kas ir savstarpēji saistītas ar datu plūsmu",
      },
      {
        id: 4,
        title: "Aktivitātes, kas atspoguļo sistēmas datus",
      },
    ],
  },
];
