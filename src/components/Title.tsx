import { useEffect } from "react";

const Title = ({ title }:any) => {
  useEffect(() => {
    document.title = "xB0t Portfolio |" + " " + title;
  }, [title]);

  return null;
};

export default Title;
