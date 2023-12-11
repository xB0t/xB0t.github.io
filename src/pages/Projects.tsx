import Title from "../components/Title";
import Button from "../components/Button";

const About = () => {
  return (
    <>
      <Title title="Projects" />
      <h1>Projects Page</h1>
      <Button
        name="Home"
        btnDivStyling="grid place-items-center"
        btnStyling="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
        navigateTo="/"
      />
    </>
  );
};

export default About;
