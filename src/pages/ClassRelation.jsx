import associationExample from "../assets/classRelationships/assoc.png";
import inheritanceExample from "../assets/classRelationships/inher.svg";
import aggregationExample from "../assets/classRelationships/aggreg.svg";
import dependencyExample from "../assets/classRelationships/dependency.svg";
import realizationExample from "../assets/classRelationships/realiz.svg";

export const ClassRelation = () => {
  return (
    <>
      <HeroSection />
    </>
  );
};

const HeroSection = () => {
  const relations = [
    {
      img: associationExample,
      name: "Asociācija",
      desc: "Asociācija attēlo vienkāršu savienojumu starp divām vai vairākām klasēm. Tā parāda, ka klases sadarbojas vai ir savstarpēji saistītas.",
    },
    {
      img: inheritanceExample,
      name: "Mantošana",
      desc: "Mantošana, norāda, ka viena klase manto citas klases īpašības un uzvedību.",
    },
    {
      img: aggregationExample,
      name: "Agregācija",
      desc: "Agregācija ir vājas saites attiecība, kur viena klase sastāv no citām klasēm, bet klases var eksistēt neatkarīgi.",
    },
    {
      img: dependencyExample,
      name: "Atkarība",
      desc: "Atkarība norāda, ka viena klase izmanto citu klasi, piemēram, kā metodes parametru vai mainīgo. Tā ir īslaicīga un nenoteikta saite starp klasēm.",
    },
    {
      img: realizationExample,
      name: "Realizācija",
      desc: "Realizācija ir attiecības veids, kas parāda, ka viena klase īsteno kādu interfeisu vai abstrakto klasi.",
    },
  ];

  return (
    <section className="min-h-screen mt-40">
      <div className=" max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Relācija starp klasēm
          </h3>
          <p className="text-gray-600 mt-3">
            Tās palīdz attēlot un saprast objektorientētās programmatūras
            struktūru un darbību. Šīs relācijas nosaka, kā vairākas klases ir
            saistītas viena ar otru.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
            {relations.map((item, idx) => (
              <li key={idx} className="flex gap-4 items-center">
                <div className="flex-none w-24 h-24">
                  <img
                    src={item.img}
                    className="w-full h-full rounded-full object-contain"
                    alt=""
                  />
                </div>
                <div>
                  <h4 className="text-gray-700 font-semibold sm:text-lg">
                    {item.name}
                  </h4>
                  <p className="text-gray-600 ">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
