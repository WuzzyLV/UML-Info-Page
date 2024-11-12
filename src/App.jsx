import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import Sidebar from "./components/SideBar";
import { Footer } from "./components/Footer";
import { ClassHome } from "./pages/ClassHome";
import { ClassNotation } from "./pages/ClassNotation";
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
    content: <div>Relation</div>,
  },
  {
    id: 5,
    title: "Activity Diagram Introduction",
    path: "/activity-diagram-introduction",
    content: <div>Activity</div>,
  },
];

function App() {
  return (
    <main className="flex flex-row bg-[#fafafb3d]  ">
      <Router>
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
