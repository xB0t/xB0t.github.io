const Footer = () => {
  let date = new Date().getFullYear();

  return (
    <>
      <div className="grid place-items-center max-sm:pb-6">
        <footer className="block center-0 bottom-0 pt-28 max-sm:pt-2">
          {/* <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"> */}
          <span className="max-sm:text-white max-sm:pl-4 text-white sm:text-center dark:text-gray-400 text-xl">
            © {date}{" "}
            <a
              target="_blank"
              href="https://github.com/xb0t"
              className="hover:underline"
            >
              xB0t
            </a>
            . All Rights Reserved.
          </span>
          {/* </div> */}
        </footer>
      </div>
    </>
  );
};

export default Footer;
