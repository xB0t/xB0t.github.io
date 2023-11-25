
import { Link } from 'react-router-dom';
import Title from "../components/title";



const Home = ()=> {

  return (
    <>
    <Title title="Home Page" />

        <h1>Hi, I am Yash</h1>

        <Link to= '/about'> About</Link>
    </>

  )
}

export default Home;