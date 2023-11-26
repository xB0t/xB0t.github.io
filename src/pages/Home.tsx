
import { Link } from 'react-router-dom';
import Title from '../components/Title';
import ReactLogo from '../assets/react.svg';


const Home = () => {

  return (
    <>
      <Title title="Home Page" />

      <img className="rounded-full w-40 h-40" src={ReactLogo} alt="image description" />
      
      <h1 className="text-6xl font-bold intro">Hi, I am Yash</h1>

      <h2> I am Cloud Engineer, Backend Web Developer.</h2>


      <br />
      <br />
      <br />

      <Link to='/about'> About</Link>
    </>

  )
}

export default Home;