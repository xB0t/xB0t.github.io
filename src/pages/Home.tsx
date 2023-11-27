
import { useNavigate } from 'react-router-dom';
import Title from '../components/Title';
import ReactLogo from '../assets/react.svg';


const Home = () => {

  const navigate = useNavigate();

  return (
    <>
      <Title title="Home Page" />

      <div className="container">
        <div className="image-text-container">
          <img className="image rounded-full w-40 h-40" src={ReactLogo} alt="Your Image" />
          <div className="text">
            <h1 className="text-6xl font-bold main_heading">Hi, I am Yash.</h1>
            <h2 className="tag_line"> I am Cloud Engineer, Backend Web Developer.</h2>
          </div>
        </div>
      </div>

      <button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2" onClick={() => navigate('/projects')}>Projects</button>
    

    </>

  )
}

export default Home;