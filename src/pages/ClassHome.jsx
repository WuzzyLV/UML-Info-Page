import { Typography } from "@material-tailwind/react";

export const ClassHome = () => {
  return (
    <>
      <HeroSection />
      <WhatShows />
      <BenefitsSection />
    </>
  );
};

const HeroSection = () => {
  return (
    <section className="h-screen flex items-center">
      <div className="max-w-screen-xl mx-auto px-4  gap-x-12 justify-between md:flex md:px-8">
        <div className="max-w-xl flex flex-col justify-center">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Klašu diagramma
          </h3>
          <p className="mt-3 text-gray-600">
            Ir ļoti svarīgas programmatūras izstrādes procesā, jo tās sniedz
            vizuālu priekšstatu par sistēmas struktūru un piespiež domāt par
            sistēmu dziļākā limēnī.
          </p>
        </div>
        <div className="flex-none mt-4 md:mt-0">
          <figure>
            <img
              className=" p-2 bg-white shadow h-64 w-full rounded-lg object-cover object-center"
              src="/classEx.svg"
              alt="Uml example"
            />
            <Typography
              as="caption"
              variant="small"
              className="mt-2 text-center font-normal"
            >
              Mazs klašu diagrammas piemērs
            </Typography>
          </figure>
        </div>
      </div>
    </section>
  );
};

const BenefitsSection = () => {
  const features = [
    {
      icon: <i class="fa-solid fa-eye"></i>,
      title: "Sistēmas struktūras vizualizācija",
      desc: "Palīdz attēlot sistēmas loģisko struktūru, Tas palīdz izstrādātājiem, arhitektiem un citiem iesaistītajiem saprast sistēmas uzbūvi un loģiku.",
    },
    {
      icon: <i class="fa-regular fa-gauge"></i>,
      title: "Komunikācijas uzlabošana",
      desc: "Ir kopīga valoda starp dažādiem komandas locekļiem, kas palīdz izprast un izskaidrot sistēmas darbību daudz ātrāk.",
    },
    {
      icon: <i class="fa-solid fa-hand-fist"></i>,
      title: "Piespiež dziļāk izsprast problēmu",
      desc: "Lai izveidotu šo diagrammu ir nepieciešams padziļināti analizēt problēmu un tās prasības, šis solis daudzos projektos pietrūkst.",
    },
  ];

  return (
    <section className="py-14 pb-32">
      <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Klašu diagrammas priekšrocības
          </h3>
          <p className="mt-3">
            Ir daudz labumi kā arī sliktas lietas, bet šie ur mūsuprāt
            svarīgakie plusi šim diagrammas veidam.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li key={idx} className="space-y-3">
                <div className="w-12 h-12 text-xl mx-auto bg-[#FAD9D5] bg-opacity-50 text-accent1 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="text-lg text-gray-800 font-semibold">
                  {item.title}
                </h4>
                <p>{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const WhatShows = () => {
  const faqsList = [
    {
      q: "Pašas klases",
    },
    {
      q: "Klašu atribūtus, jeb mainīgos.",
    },
    {
      q: "Klašu metodes",
    },
    {
      q: "Relācijas ar citām klasēm un to veidus",
    },
  ];

  return (
    <section className="py-14 pb-28">
      <div className="max-w-screen-xl mx-auto px-4 gap-12 md:flex md:px-8">
        <div className="flex-1">
          <div className="max-w-lg">
            <h3 className="font-semibold text-accent1">Ko tās apzimē?</h3>
            <p className="mt-3 text-gray-800 text-2xl font-bold sm:text-4xl">
              Klašu diagrammas apzimē tieši šīs lietas:
            </p>
          </div>
        </div>
        <div className="flex-1 mt-12 md:mt-0">
          <ol className=" divide-y ">
            {faqsList.map((item, idx) => (
              <li className="py-2" key={idx}>
                <summary className="flex items-center justify-start font-semibold text-gray-800">
                  <span className="text-gray-700 mr-2 font-medium">
                    {idx + 1}.
                  </span>{" "}
                  {item.q}
                </summary>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
