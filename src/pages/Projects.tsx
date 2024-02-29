import Title from "../components/Title";
import Button from "../components/Button";
// import Card from "../components/Card";
import ProjectCard from "../components/ProjectsCard";

const About = () => {
  const materials: any = [
    {
      id: 1,
      name: "Django Project",
      desc: "Weather App",
      img: "https://bmqnj9hooaek.compat.objectstorage.ap-mumbai-1.oraclecloud.com/yash/media/chapaklali.png",
      tags: ["personal", "django", "python"],
      date: "12-02-2023",
      github_url: "https://github.com/xb0t",
      project_url: "https://xb0t.pw",
    },
    {
      id: 2,
      name: "Notes Project",
      desc: "Notes App",
      img: "https://bmqnj9hooaek.compat.objectstorage.ap-mumbai-1.oraclecloud.com/yash/media/chapaklali.png",
      tags: ["open source", "django", "python"],
      date: "12-02-2023",
      github_url: "https://github.com/xb0t",
      project_url: "https://xb0t.pw",
    },
  ];

  return (
    <>
      <Title title="Projects" />
      <Button
        name="Home"
        btnDivStyling="grid place-items-center"
        btnStyling="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
        navigateTo="/"
      />

      <div className="flex flex-row">
        {materials.map((material: any) => (
          <ProjectCard
            key={material.id}
            projectTitle={material.name}
            projectDescription={material.desc}
            imageUrl={material.img}
            tags={material.tags}
            projectDate={material.date}
            projectGitHubUrl={material.github_url}
            projectUrl={material.project_url}
          />
        ))}
      </div>
    </>
  );
};

export default About;
