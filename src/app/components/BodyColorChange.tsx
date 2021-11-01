import { BackPrimary, BackSecondary } from "../../styles/createGlobalStyles";
import { useAppSelector } from "../Reduxhooks";
import { DarkMode } from "./ReduxSlices/CookiesSlice";

const BodyColorChange = () => {
  const darkMode = useAppSelector(DarkMode);
  return (
    <style>{`body {  background-color: ${
      darkMode.toString() === "true" ? BackSecondary : BackPrimary
    } ; }`}</style>
  );
};

export default BodyColorChange;
