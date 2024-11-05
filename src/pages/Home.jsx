import { Button } from "@material-tailwind/react";
import React from "react";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <Types />
      <FreqUsed />

      {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

      <div>
        <div className="sm:hidden">
          <label htmlFor="Tab" className="sr-only">
            Tab
          </label>

          <select id="Tab" className="w-full rounded-md border-gray-200">
            <option>Settings</option>
            <option>Messages</option>
            <option>Archive</option>
            <option select>Notifications</option>
          </select>
        </div>

        <div className="hidden sm:block">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex gap-6" aria-label="Tabs">
              <a
                href="#"
                className="inline-flex shrink-0 items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Settings
              </a>

              <a
                href="#"
                className="inline-flex shrink-0 items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
                  />
                </svg>
                Messages
              </a>

              <a
                href="#"
                className="inline-flex shrink-0 items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                  />
                </svg>
                Archive
              </a>

              <a
                href="#"
                className="inline-flex shrink-0 items-center gap-2 border-b-2 border-sky-500 px-1 pb-4 text-sm font-medium text-sky-600"
                aria-current="page"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                  />
                </svg>
                Notifications
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

const Types = () => {
  const features = [
    {
      icon: <i class="fa-regular fa-folder-tree"></i>,
      title: "Strukturālas diagrammas",
      desc: "Lai vieglāk paradītu <b>statiskās puses no sistēmas</b>, objektus, attiecības un arī pašu arhitektūru, paredzētas lai abstraktāk varētu izsprast sistēmas un attiecības starp sistēmām.",
    },
    {
      icon: <i class="fa-solid fa-person"></i>,
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
                <div className="w-12 h-12 text-2xl border text-accent1 rounded-full flex items-center justify-center">
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
      icon: <i class="fa-regular fa-diagram-project"></i>,
      title: "Klašu diagrammas",
      desc: "Attēlo sistēmas klasēs, to atribūtos, metodēs un attiecībās. Ir būtiskas programēšanā gan datubāžu darbos.",
    },
    {
      icon: <i class="fa-regular fa-user"></i>,
      title: "Lietošanas gadijumu diagrammas",
      desc: "Vizuālas reprezentācijas, kas attēlo sistēmas funkcionalitāti no lietotāju perspektīvas. Palīdz izprast pašu lietošanas plūsmu.",
    },
  ];

  return (
    <section className="py-14 pb-24" id="">
      <div className="max-w-screen-xl mx-auto grid grid-cols-2 px-4 text-gray-600 gap-16 justify-between md:px-8 lg:flex">
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
                  <div className="flex-none w-12 h-12 text-xl bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center">
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
        <div className="mt-12 lg:mt-0 flex justify-center">
          <img src="/classEx.svg" className="object-contain" />
        </div>
      </div>
    </section>
  );
};

const HeroSection = () => {
  return (
    <section className="h-screen w-full flex items-center">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
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
