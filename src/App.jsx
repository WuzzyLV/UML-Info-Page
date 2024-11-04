import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Home } from "./pages/Home";
import Sidebar from "./components/SideBar";

function App() {
  return (
    <main className="flex flex-row">
      <Sidebar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
