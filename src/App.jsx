import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import Sidebar from "./components/SideBar";
import { Footer } from "./components/Footer";
import { ClassHome } from "./pages/ClassHome";
import { ClassNotation } from "./pages/ClassSyntax";
import { ClassRelation } from "./pages/ClassRelation";
import { ActivityHome } from "./pages/ActivityHome";
import { ActivitySwimlane } from "./pages/ActivitySwimlane";
import { ActivityNotations } from "./pages/ActivityNotations";
import { ClassExample } from "./pages/ClassExample";
import { TestPage } from "./pages/TestPage";
import { ActivityExample } from "./pages/ActivityExample";
import ScrollToTop from "./components/ScrollToTop";
// pages.js
export const pages = [
  { id: 1, title: "Ievads", path: "/", content: <Home /> },
  {
    id: 2,
    title: "Kapēc un kā",
    path: "/class-diagram",
    content: <ClassHome />,
  },
  {
    id: 3,
    title: "Kā tos zimē",
    path: "/class-diagram/syntax",
    content: <ClassNotation />,
  },
  {
    id: 4,
    title: "Relācija",
    path: "/class-diagram/relation",
    content: <ClassRelation />,
  },
  {
    id: 9,
    title: "Klašu piemēri",
    path: "/class-diagram/examples",
    content: <ClassExample />,
  },
  {
    id: 5,
    title: "Kapēc un kā",
    path: "/activity-diagram",
    content: <ActivityHome />,
  },
  {
    id: 6,
    title: "Notācijas",
    path: "/activity-diagram/notations",
    content: <ActivityNotations />,
  },
  {
    id: 7,
    title: "Peldjosla",
    path: "/activity-diagram/swimlane",
    content: <ActivitySwimlane />,
  },
  {
    id: 8,
    title: " Aktivitāšu piemēri",
    path: "/activity-diagram/examples",
    content: <ActivityExample />,
  },
  {
    id: 10,
    title: "Tests",
    path: "/test",
    content: <TestPage />,
  },
];

function App() {
  return (
    <main className="flex flex-row bg-[#fafafb3d]  ">
      <Router>
        <ScrollToTop />
        <Sidebar />
        <div className="w-full">
          <Routes>
            {pages.map((page) => (
              <Route key={page.id} path={page.path} element={page.content} />
            ))}
          </Routes>
          <Footer />
        </div>
      </Router>
    </main>
  );
}

export default App;
