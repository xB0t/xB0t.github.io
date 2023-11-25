import './App.css'

import { useEffect, useState } from "react";

const App = () => {
  const [title] = useState("xB0t Portfolio");

  let page = "Home";

  useEffect(() => {
    document.title = title+" | "+page;
  }, []);

  return (
    <div>
      <h1>Hi, I am Yash</h1>
    </div>
  );
};

export default App;

