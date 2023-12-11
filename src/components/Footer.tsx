const Footer = () => {
  return (
    <>
      <div className="grid place-items-center">
        <footer className="fixed center-0 bottom-0 pb-10">
          {/* <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"> */}
          <span className="max-sm:text-white max-sm:pl-4 text-white sm:text-center dark:text-gray-400 text-xl">
            © 2023{" "}
            <a href="https://github.com/xb0t" className="hover:underline">
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
