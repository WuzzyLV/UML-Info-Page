import { Typography } from "@material-tailwind/react";
import notationExample from "../assets/classNotation.svg";
import visibilityExample from "../assets/classVisibility.svg";
import ImageWithComments from "../components/ImageWithComments";

export const ClassNotation = () => {
  return (
    <>
      <HeroSection />
      <VisibilitySection />
    </>
  );
};

const HeroSection = () => {
  return (
    <section className="h-screen border-b border-b-gray-400 flex items-center">
      <div className="max-w-screen-xl mx-auto px-4  gap-x-12 justify-between md:flex md:px-8">
        <div className="max-w-xl flex flex-col justify-center">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Notācija
          </h3>
          <p className="mt-3 text-gray-600">
            Šīs ir nepieciešamās lietas, kas jāzina, lai saprastu kā viņas zimē.
          </p>
        </div>
        <div className="flex-none mt-4 md:mt-0">
          <ImageWithComments
            src={notationExample}
            alt="Annotated Image"
            comments={[
              {
                top: 75,
                left: 8,
                text: "Atribūti tiek balstīti uz mainīgajiem kodā.",
              },
              {
                top: 93,
                left: 82,
                text: "Operācijas ir balstītas uz metodēm kodā",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

const VisibilitySection = () => {
  return (
    <section className="h-screen flex items-center -mb-8">
      <div className="max-w-screen-xl mx-auto px-4  gap-x-12 justify-between md:flex md:px-8">
        <div className="flex-none mt-4 md:mt-0">
          <ImageWithComments
            src={visibilityExample}
            alt="Annotated Image"
            comments={[]}
          />
        </div>
        <div className="max-w-xl flex flex-col justify-center">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Redzamība
          </h3>
          <p className="mt-3 text-gray-600">
            Simboli +, - un # pirms atribūta un operācijas nosaukuma klasē
            apzīmē redzamību.
          </p>
        </div>
      </div>
    </section>
  );
};
