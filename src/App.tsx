import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import { useEffect, useState } from "react";
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  const [title] = useState("xB0t Portfolio");

  let page = "Home";

  useEffect(() => {
    document.title = title+" | "+page;
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

