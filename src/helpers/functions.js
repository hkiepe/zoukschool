// firebase imports
import { db } from "../helpers/firebase-config";
import { getDocs, collection } from "firebase/firestore";

// Fetch course data
const courseCollectionRef = collection(db, "courses");

export const fetchCourseData = async () => {
  try {
    const data = await getDocs(courseCollectionRef);
    const courseData = data.docs.map((course) => {
      return { ...course.data(), id: course.id };
    });
    return courseData;
  } catch (error) {
    console.log("Hello");
    throw new Error("There was a problem fetching the movies from database");
  }
};
