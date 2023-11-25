import { Link } from 'react-router-dom';
import Title from "../components/Title";

const About = () => {

  return (
    <div>
      <Title title="About" />
      <h1>About Page</h1>
      <Link to='/'> Home</Link>
    </div>
  );
};

export default About;