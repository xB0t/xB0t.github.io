import { useNavigate } from "react-router-dom";

const Button = ({ name, btnDivStyling, btnStyling, navigateTo }: any) => {
  const navigate = useNavigate();
  return (
    <>
      <div className={btnDivStyling}>
        <button
          type="button"
          className={btnStyling}
          onClick={() => navigate(`${navigateTo}`)}
        >
          {name}
        </button>
      </div>
    </>
  );
};

export default Button;
