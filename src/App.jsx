import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Home } from "./pages/Home";

function App() {
  return (
    <main>
      <h1 className="text-red-500">Ur mother is my hoether</h1>
      <Navigation />
      <Router>
        <Routes>
          <Route path="/" component={<Home />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
