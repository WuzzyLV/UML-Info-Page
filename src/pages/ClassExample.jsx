import linardsExample from "../assets/examples/linardsClass.svg";
import reinisExample from "../assets/examples/CCExampleClass.svg";
import ImageZoom from "react-image-zooom";

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
        <div className="max-w-xl mb-16">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Sociālā tīkla diagramma
          </h3>
          <p className="text-gray-600 mt-3">
            Vienkārša socialā tīkla klases diagramma. Autors: Linards
          </p>
        </div>
        <div className="w-full flex justify-center">
          <ImageZoom
            src={linardsExample}
            className="shadow rounded-lg "
            alt="Example 1"
            zoom="140"
          />
        </div>
      </div>
      <div className=" max-w-screen-xl mx-auto px-4 pt-32 md:px-8 pb-96">
        <div className="max-w-xl mb-16">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Vairāku spēlētāju gājienu spēle pārlūkprogrammā
          </h3>
          <p className="text-gray-600 mt-3">
            Pārlukprogrammas spēle kur ir vienkārša spēletāja kustināšana un
            statistika. Autors: Reinis
          </p>
        </div>
        <div className="w-full flex justify-center">
          <ImageZoom
            src={reinisExample}
            alt="Example 2"
            className="shadow rounded-lg "
            zoom="140"
          />
        </div>
      </div>
    </section>
  );
};
