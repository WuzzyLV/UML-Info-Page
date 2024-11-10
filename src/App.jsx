import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import Sidebar from "./components/SideBar";
import { Footer } from "./components/Footer";

// pages.js
export const pages = [
  { id: 1, title: "Start", path: "/", content: <Home /> },
  {
    id: 2,
    title: "Kapēc un kā",
    path: "/class-diagram",
    content: <div>Class</div>,
  },
  {
    id: 3,
    title: "Sintakse",
    path: "/class-diagram/syntax",
    content: <div>Syntax</div>,
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
    <main className="flex flex-row">
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
