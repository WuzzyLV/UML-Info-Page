import { Button } from "@material-tailwind/react";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <Types />
      <FreqUsed />
    </>
  );
};

const Types = () => {
  const features = [
    {
      icon: <i className="fa-regular fa-folder-tree"></i>,
      title: "Strukturālas diagrammas",
      desc: "Lai vieglāk paradītu <b>statiskās puses no sistēmas</b>, objektus, attiecības un arī pašu arhitektūru, paredzētas lai abstraktāk varētu izsprast sistēmas un attiecības starp sistēmām.",
    },
    {
      icon: <i className="fa-solid fa-person"></i>,
      title: "Uzvedības diagrammas",
      desc: "Šīs diagrammas parāda <b>dinamiskās puses no sistēmām</b>, kā lietas mainās ar laiku vai ar lietotāju interakciju. Šīs diagrammas palīdz izsprast kā programmatūra stradās lietošanas laikā.",
    },
  ];
  return (
    <section className="py-14 pb-48" id="types">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="max-w-xl space-y-3">
          <h3 className="text-accent1 font-semibold">Veidi</h3>
          <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Visas UML diegrammas sadalās 2 veidos!
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-x-12 divide-y [&>.feature-1]:pl-0 sm:grid-cols-1 sm:gap-y-8 sm:divide-y-0 lg:divide-x lg:grid-cols-2 lg:gap-x-0">
            {features.map((item, idx) => (
              <li
                key={idx}
                className={`feature-${idx + 1} space-y-3 py-8 lg:px-12 sm:py-0`}
              >
                <div className="w-12 h-12 text-2xl border bg-accent2 bg-opacity-50 text-accent1 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="text-lg text-gray-800 font-semibold">
                  {item.title}
                </h4>
                <p dangerouslySetInnerHTML={{ __html: item.desc }} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const FreqUsed = () => {
  const features = [
    {
      icon: <i className="fa-regular fa-diagram-project"></i>,
      title: "Klašu diagrammas",
      desc: "Attēlo sistēmas klasēs, to atribūtos, metodēs un attiecībās. Ir būtiskas programēšanā gan datubāžu darbos.",
    },
    {
      icon: <i className="fa-regular fa-user"></i>,
      title: "Lietošanas gadijumu diagrammas",
      desc: "Vizuālas reprezentācijas, kas attēlo sistēmas funkcionalitāti no lietotāju perspektīvas. Palīdz izprast pašu lietošanas plūsmu.",
    },
  ];

  return (
    <section className="py-14 pb-24" id="">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2  px-4 text-gray-600 gap-16 justify-between md:px-8 lg:flex">
        <div>
          <div className="max-w-xl space-y-3">
            <h3 className="text-accent1 font-semibold">Populārakie</h3>
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Reti izmanto visus, bet šie ir vispopulārākie!
            </p>
            <p>
              Ir visādu veidu diagrammas jebkurai situācijai, bet tas nenozīmē
              kad visas bieži lieto!
            </p>
          </div>
          <div className="mt-12 max-w-lg lg:max-w-none">
            <ul className="space-y-8">
              {features.map((item, idx) => (
                <li key={idx} className="flex gap-x-4">
                  <div className="flex-none w-12 h-12 text-xl bg-accent2 bg-opacity-50 text-accent1 rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg text-gray-800 font-semibold">
                      {item.title}
                    </h4>
                    <p className="mt-3">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 lg:mt-0 sm:flex hidden justify-center">
          <img src="/classEx.svg" className="object-contain" />
        </div>
      </div>
    </section>
  );
};

const HeroSection = () => {
  return (
    <section className="h-screen w-full flex items-center">
      <div className="absolute top-0 -z-10 w-full right-0 h-full bg-gradient-to-b from-accent1 to-white opacity-10 blur-xl"></div>
      <div className=" z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <span className="font-semibold text-accent1">
            Terorizē kopš 1994-1995
          </span>
          <h2 className="text-4xl text-gray-900 text font-extrabold mx-auto md:text-5xl">
            UML Diagrammas
          </h2>
          <p className="max-w-2xl mx-auto text-gray-800">
            Veids kā paradīt programmatūras arhitektūru un implimentāciju.
          </p>

          <Button
            size="sm"
            onClick={() => {
              window.location.href = "#types";
            }}
          >
            <div className="flex flex-row justify-center items-center gap-1">
              Turpināt
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
