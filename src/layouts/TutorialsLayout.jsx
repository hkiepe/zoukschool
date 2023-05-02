// rrd imports
import { Outlet } from "react-router-dom";

// components
import Header from "../components/headers/light";
import Footer from "../components/footers/FiveColumnWithInputForm";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

const TutorialsLayout = () => {
  return <Outlet />;
};

export default TutorialsLayout;
