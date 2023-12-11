const Tools = () => {
  // let img_link =
  //   "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-shadow-tal-revivo.png";

  let links = [
    "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-shadow-tal-revivo.png",
    "https://img.icons8.com/color/48/jenkins.png",
    "https://img.icons8.com/color/48/javascript--v1.png",
    "https://img.icons8.com/color/48/typescript.png",
    "https://img.icons8.com/color/48/visual-studio-code-2019.png",
    "https://img.icons8.com/fluency/48/tailwind_css.png",
    "https://img.icons8.com/color/96/git.png",
  ];

  return (
    <>
      <h1 className="grid place-items-center text-4xl pb-4 text-white">
        {" "}
        Tools I use:
      </h1>

      <div className="w-96 flex flex-wrap place-items-center">
        {/* <img
          width="48"
          height="48"
          src="https://img.icons8.com/external-tal-revivo-light-tal-revivo/48/external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-light-tal-revivo.png"
          alt="external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-light-tal-revivo"
        /> */}
        {links.map((link, index) => (
          <img
            key={index}
            width="48"
            height="48"
            // src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-shadow-tal-revivo.png"
            src={link}
            alt="external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-shadow-tal-revivo"
          />
        ))}
      </div>
    </>
  );
};

export default Tools;
