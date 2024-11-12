import { Typography } from "@material-tailwind/react";
import notationExample from "../assets/classNotation.svg";
import visibilityExample from "../assets/classVisibility.svg";
import ImageWithComments from "../components/ImageWithComments";

export const ClassRelation = () => {
  return (
    <>
      <HeroSection />
    </>
  );
};

const HeroSection = () => {
  const team = [
    {
      avatar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Martiana dialan",
      title: "Product designer",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
    },
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Micheal colorand",
      title: "Software engineer",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Brown Luis",
      title: "Full stack engineer",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/63.jpg",
      name: "Lysa sandiago",
      title: "Head of designers",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
    },
  ];

  return (
    <section className="h-screen -mb-48 mt-8">
      <div className=" max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Meet our team
          </h3>
          <p className="text-gray-600 mt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum has been the industry's standard dummy.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
            {team.map((item, idx) => (
              <li key={idx} className="flex gap-4 items-center">
                <div className="flex-none w-24 h-24">
                  <img
                    src={item.avatar}
                    className="w-full h-full rounded-full"
                    alt=""
                  />
                </div>
                <div>
                  <h4 className="text-gray-700 font-semibold sm:text-lg">
                    {item.name}
                  </h4>
                  <p className="text-indigo-600">{item.title}</p>
                </div>
              </li>
            ))}
          </ul>
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
