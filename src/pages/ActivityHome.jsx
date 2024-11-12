import { Typography } from "@material-tailwind/react";

export const ActivityHome = () => {
  return (
    <>
      <HeroSection />
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
            Aktivitāšu diagramma
          </h3>
          <p className="mt-3 text-gray-600">
            Ir svarīga, jo tā palīdz vizualizēt procesu vai darbplūsmu un
            skaidri parāda dažādu darbību un to secību sistēmā.
          </p>
        </div>
        <div className="flex-none mt-4 md:mt-0">
          <figure>
            <img
              className=" p-2 bg-white shadow h-90 w-full rounded-lg object-cover object-center"
              src="/activityEx.svg"
              alt="Uml example"
            />
            <Typography
              as="caption"
              variant="small"
              className="mt-2 text-center font-normal"
            >
              Mazs aktivitāšu diagrammas piemērs
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
      icon: <i className="fa-solid fa-eye"></i>,
      title: "Procesu vizualizācija",
      desc: "Aktivitāšu diagrammas ļauj vizualizēt procesus vai darbplūsmas grafiskā formā, kas palīdz izprast procesu plūsmu un katras darbības secību.",
    },
    {
      icon: <i className="fa-regular fa-gauge"></i>,
      title: "Sistēmas loģikas modelēšana",
      desc: "Aktivitāšu diagrammas palīdz modelēt sistēmas loģiku, parādot, kā lietotājs vai sistēma reaģē uz dažādiem stāvokļiem.",
    },
    {
      icon: <i className="fa-solid fa-hand-fist"></i>,
      title: "Sarežģītu darbplūsmu vienkāršošana",
      desc: "Sarežģīti procesi un darbplūsmas tiek sadalītas vienkāršākās aktivitātēs un secīgās darbībās.",
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Aktivitāšu diagrammas priekšrocības
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
