import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import Sidebar from "./components/SideBar";

function App() {
  return (
    <main className="flex flex-row">
      <Sidebar />
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </main>
  );
}

export default App;
