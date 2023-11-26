import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound';

const App = () => {


  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

