import './App.css'

// function App() {

//   return (
//     <>
//     <h1>Hi, I am Yash</h1>
//     </>
//   )
// }

// export default App





// App.js
// Kindacode.com

// import { useEffect, useState } from "react";

// const App = () => {
//   const [title, setTitle] = useState("Portfolio");

//   useEffect(() => {
//     // This will run when the page first loads and whenever the title changes
//     document.title = title;
//   }, [title]);

//   const changeTitle = (event) => {
//     setTitle(event.target.value);
//   };


//   let title2 = "Home Page"


//   return (
//     <div>
//       <input
//         type="text"
//         onChange={changeTitle}
//         value={title}
//       />

    
//     </div>
//   );
// };

// export default App;



import { useEffect, useState } from "react";

const App = () => {
  // Set the default title to "Portfolio"
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

