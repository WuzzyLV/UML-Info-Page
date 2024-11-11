// Footer.js
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { pages } from "../App";

export const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [pageName, setPageName] = useState("");

  useEffect(() => {
    const currentPage = pages.find((page) => page.path === location.pathname);
    setPageName(currentPage?.title);
  }, [location.pathname]);

  // Find the current page based on the URL path
  const currentPageIndex = pages.findIndex(
    (page) => page.path === location.pathname
  );
  const prevPage = pages[currentPageIndex - 1];
  const nextPage = pages[currentPageIndex + 1];

  return (
    <footer className="w-full mb-12">
      <div className="flex justify-center">
        <nav
          className="-mb-px flex border border-gray-400 rounded-lg shadow-md flex items-center"
          aria-label="Tabs"
        >
          {/* Previous Button */}
          <button
            onClick={() => prevPage && navigate(prevPage.path)}
            disabled={!prevPage}
            className={`inline-flex shrink-0 items-center gap-2 border-transparent  px-4 border-r border-r-gray-400 border-opacity-75 py-1 my-1 text-md font-medium ${
              prevPage
                ? "text-gray-700 hover:border-gray-300 hover:text-gray-800"
                : "text-gray-300 cursor-not-allowed"
            }`}
          >
            <i className="fa-solid fa-arrow-left"></i> Atpakaļ
          </button>
          <div className="px-2 text-gray-700">{pageName}</div>

          {/* Next Button */}
          <button
            onClick={() => nextPage && navigate(nextPage.path)}
            disabled={!nextPage}
            className={`inline-flex shrink-0 items-center gap-2 border-transparent  px-4 border-l border-l-gray-400 border-opacity-75 py-1 my-1 text-md font-medium ${
              nextPage
                ? "text-gray-700 hover:border-gray-300 hover:text-gray-800"
                : "text-gray-300 cursor-not-allowed"
            }`}
          >
            Uz priekšu <i className="fa-solid fa-arrow-right"></i>
          </button>
        </nav>
      </div>
    </footer>
  );
};
