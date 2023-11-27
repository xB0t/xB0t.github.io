import { Link } from 'react-router-dom';
import Title from "../components/Title";

const About = () => {

  return (
    <div>
      <Title title="Projects" />
      <h1>Projects Page</h1>
      <Link to='/'> Home</Link>
    </div>
  );
};

export default About;