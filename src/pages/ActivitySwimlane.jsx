import swimlaneBig from "../assets/swimlaneBig.svg";

export const ActivitySwimlane = () => {
  return (
    <>
      <HeroSection />
    </>
  );
};

const HeroSection = () => {
  return (
    <section className="h-screen -mb-64  mt-48">
      <div className="max-w-screen-xl mx-auto px-4  gap-x-12 justify-between md:flex md:px-8">
        <div className="max-w-xl flex flex-col justify-center">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Peldjosla (Swimlane)
          </h3>
          <p className="mt-3 text-gray-600">
            Aktivitāšu diagrammas organizēšanas metode, kas palīdz sadalīt un
            strukturēt procesus pēc dažādiem lomu vai atbildības laukumiem. Šī
            struktūra nodrošina, ka katra darbība diagrammā tiek ievietota
            noteiktā &#34;joslā&#34;, kas attiecas uz konkrētu lomu
          </p>
        </div>
        <img src={swimlaneBig} alt="Swimlane" className="h-80" />
      </div>
    </section>
  );
};
