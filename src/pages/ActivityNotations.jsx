import activity from "../assets/activityNotations/activity.svg";
import action from "../assets/activityNotations/action.svg";
import controlFlow from "../assets/activityNotations/controlFlow.svg";
import swimlane from "../assets/activityNotations/swimlane.svg";
import initialNode from "../assets/activityNotations/initialNode.svg";
import finalNode from "../assets/activityNotations/finalNode.svg";
import forkNode from "../assets/activityNotations/forkNode.svg";
import joinNode from "../assets/activityNotations/joinNode.svg";
import mergeNode from "../assets/activityNotations/mergeNode.svg";
import decisionNode from "../assets/activityNotations/decisionNode.svg";

export const ActivityNotations = () => {
  return (
    <>
      <HeroSection />
    </>
  );
};

const HeroSection = () => {
  const relations = [
    {
      img: activity,
      name: "Aktivitāte",
      desc: "Tiek izmantots, lai attēlotu darbību kopumu",
    },
    {
      img: action,
      name: "Darbība",
      desc: " Darbība, kas jāveic.",
    },
    {
      img: controlFlow,
      name: "Kontroles plūsma",
      desc: " Parāda izpildes secību.",
    },
    {
      img: initialNode,
      name: "Sākotnējais mezgls",
      desc: "Attēlo darbību vai darbību kopuma sākumu.",
    },
    {
      img: finalNode,
      name: "Galas mezgls",
      desc: "Aptur visas kontroles plūsmas darbību.",
    },
    {
      img: decisionNode,
      name: "Lēmuma mezgls",
      desc: "Attēlo testa nosacījumu, lai nodrošinātu, ka vadības plūsma iet tikai pa vienu ceļu.",
    },
    {
      img: mergeNode,
      name: "Apvienošanas mezgls",
      desc: "Apvieno dažādus lēmumu pieņemšanas ceļus, kas tika izveidoti, izmantojot lēmumu pieņemšanas mezglu.",
    },
    {
      img: forkNode,
      name: "Dakšas mezgls",
      desc: "Sadala uzvedību paralēlu vai vienlaicīgu aktivitāšu plūsmās.",
    },
    {
      img: joinNode,
      name: "Savienošanās mezgls",
      desc: "Savieno paralēlu vai vienlaicīgu darbību plūsmu kopumu.",
    },
    {
      img: swimlane,
      name: "Peldjosla",
      desc: "Veids, kā grupēt darbības, ko veic viens un tas pats dalībnieks, vai grupēt darbības vienā pavedienā.",
    },
  ];

  return (
    <section className="min-h-screen mb-8   mt-40">
      <div className=" max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Aktivitāšu diagrammas notācijas
          </h3>
          <p className="text-gray-600 mt-3">
            Aktivitāšu diagrammas notācija sastāv no dažādiem simboliem, kas
            palīdz precīzi un skaidri attēlot procesa darbības, secību un lēmumu
            pieņemšanas punktus.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
            {relations.map((item, idx) => (
              <li key={idx} className="flex gap-4 items-center">
                <div className="flex-none w-24 h-24">
                  <img
                    src={item.img}
                    className="w-full h-full  object-contain"
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
