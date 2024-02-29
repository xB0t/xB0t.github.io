import { useNavigate } from "react-router-dom";

const Button = ({ name, btnDivStyling, btnStyling, navigateTo }: any) => {
  const navigate = useNavigate();

  const externalUrl = (url: string) =>
    url.startsWith("http://") || url.startsWith("https://");

  const navigateUrl = (url: string) => {
    externalUrl(url) ? window.open(url, "_blank") : navigate(url);
  };

  return (
    <>
      <div className={btnDivStyling}>
        <button
          type="button"
          className={btnStyling}
          onClick={() => navigateUrl(`${navigateTo}`)}
        >
          {name}
        </button>
      </div>
    </>
  );
};

export default Button;
