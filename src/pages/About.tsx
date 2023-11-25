import { Link } from 'react-router-dom';
import Title from "../components/title";

const About = () => {

  return (
    <div>
      <Title title="About" />
      <h1>About Page</h1>
      <Link to= '/'> Home</Link>
    </div>
  );
};

export default About;