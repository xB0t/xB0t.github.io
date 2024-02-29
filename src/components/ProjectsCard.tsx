import Button from "./Button";

const ProjectsCard = ({
  imageUrl,
  projectTitle,
  projectDate,
  projectDescription,
  tags,
  projectGitHubUrl,
  projectUrl,
}: any) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg font-sans">
      <img
        src={imageUrl}
        alt="Project"
        className="mb-2 rounded-lg"
        width="300"
        height="300"
      />
      <h2
        className="text-lg font-bold mb-1"
        style={{
          color: "rgb(177, 178, 179)",
          fontFamily: "Roboto, sans-serif",
        }}
      >
        {projectTitle}
      </h2>
      <p className="text-xs mb-1">{projectDate}</p>
      <div className="flex flex-wrap mb-2">
        {tags.map((tag: any) => (
          <span className="bg-zinc-900 text-purple-400 px-1 py-0.5 rounded-full text-xs mr-1">
            {tag}
          </span>
        ))}
      </div>
      <p
        className="text-xs"
        style={{
          color: "rgba(177, 178, 179, 0.6)",
          fontFamily: "Roboto, sans-serif",
        }}
      >
        {projectDescription}
      </p>

      <div className="flex justify-between mt-10">
        <Button
          name="GitHub"
          btnDivStyling="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          btnStyling="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
          navigateTo={projectGitHubUrl}
        />

        <Button
          name="Visit Project"
          btnDivStyling="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
          btnStyling="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
          navigateTo={projectUrl}
        />
      </div>
    </div>
  );
};

export default ProjectsCard;
