import { Typography } from "@material-tailwind/react";

export const ClassHome = () => {
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
              className="h-64 w-full rounded-lg object-cover object-center"
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
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            The fastest way to launch a product
          </h3>
          <p className="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            congue, nisl eget molestie varius, enim ex faucibus purus.
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
