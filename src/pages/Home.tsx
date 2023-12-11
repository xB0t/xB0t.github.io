import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import CheemsPic from "../assets/cheems.png";
import Footer from "../components/Footer";
import Tools from "../components/Tools";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Title title="Home Page" />
      <div className="pb-10">
        <div className="container mx-auto">
          <div className="pb-8">
            <img
              className="image rounded-full w-40 h-40 mx-auto"
              src={CheemsPic}
              alt="Your Image"
            />
          </div>
          <div className="pb-8">
            <h1 className="grid place-items-center text-4xl pb-4 text-white max-sm:text-3xl">
              Hi, I am Yash.
            </h1>
            <h2 className="grid place-items-center text-xl pb-4 text-white max-sm:text-lg">
              {" "}
              I am Cloud Engineer, Backend Web Developer.
            </h2>
          </div>
        </div>

        <div className="grid place-items-center">
          <button
            type="button"
            className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
            onClick={() => navigate("/projects")}
          >
            Projects
          </button>
        </div>
      </div>

      <Tools />
      <Footer />
    </>
  );
};

export default Home;
