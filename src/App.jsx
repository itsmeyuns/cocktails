import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CocktailDetails from "./components/CocktailDetails";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Error from "./components/pages/Error";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/cocktails" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cocktail/:id" element={<CocktailDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
