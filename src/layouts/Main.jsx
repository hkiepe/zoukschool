// rrd imports
import { Outlet } from "react-router-dom";

// components
import Header from "../components/headers/light";
import Footer from "../components/footers/FiveColumnWithInputForm";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

// helper functions
import { fetchCourseData } from "../helpers/functions";

export async function mainLoader() {
  try {
    const courseData = await fetchCourseData();
    return { courseData };
  } catch (error) {
    throw new Error("There was a problem fetching the course data");
  }
}

const Main = () => {
  return (
    <AnimationRevealPage>
      <Header />
      <Outlet />
      <Footer />
    </AnimationRevealPage>
  );
};

export default Main;
