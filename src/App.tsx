import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>

      <Footer />
    </>
  );
};

export default App;
