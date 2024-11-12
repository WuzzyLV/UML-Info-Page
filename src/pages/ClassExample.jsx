import linardsExample from "../assets/linardsClass.svg";

export const ClassExample = () => {
  return (
    <>
      <HeroSection />
    </>
  );
};

const HeroSection = () => {
  return (
    <section className="min-h-screen mb-8 lg:-mb-56  mt-40">
      <div className=" max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Mūsu UML klases piemēri
          </h3>
        </div>
        <div className="mt-12">
          <img
            src={linardsExample}
            alt="KlasesLinards"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};
