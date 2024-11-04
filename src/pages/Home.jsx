import { Button } from "@material-tailwind/react";
import React from "react";

export const Home = () => {
  return (
    <>
      <section className="h-screen flex items-center">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
          <div className="space-y-5 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl text font-extrabold mx-auto md:text-5xl">
              Build and scale up your startup with the best tools
            </h2>
            <p className="max-w-2xl mx-auto text-gray-800">
              Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
              doloremque laudantium, totam rem aperiam, eaque ipsa quae.
            </p>

            <Button size="sm">
              <div className="flex flex-row justify-center items-center gap-1">
                Get started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </Button>
          </div>
        </div>
      </section>
      <section>Ur mother beatiful waoman</section>
    </>
  );
};
