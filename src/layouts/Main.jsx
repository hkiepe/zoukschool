// rrd imports
import { Outlet, useLoaderData } from "react-router-dom";

// components
import Header from "../components/headers/light";
import Footer from "../components/footers/FiveColumnWithInputForm";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

// context
import CourseContext from "../components/store/course-context";

import { fetchCourseData } from "../helpers/functions";

export function mainLoader() {
  try {
    const courseData = fetchCourseData();
    return courseData;
  } catch (error) {
    throw new Error("There was a problem fetching the course data");
  }
}

const Main = () => {
  const courses = useLoaderData();

  return (
    <CourseContext.Provider value={{ courses: courses }}>
      <AnimationRevealPage>
        <Header />
        <Outlet />
        <Footer />
      </AnimationRevealPage>
    </CourseContext.Provider>
  );
};

export default Main;
