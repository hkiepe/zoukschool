// fb imports
import { collection, addDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase-config";

const data = [
  {
    courseHeaderImage: "zouk-balao-course.webp",
    courseLevel: "Intermediate",
    courseLongDescription:
      "Our Balão Apagado Course is the perfect entry for you to learn the technique behind circular headmovements in Zouk! Dive in deep into the balão apagado movement and learn how to use your headmovements in the basic balão apagado but also variations of it! This course includes solo and partner work.",
    coursePrice: 99.99,
    courseRating: 4.9,
    courseReviews: 87,
    courseShortDescription:
      "Perfect entry for you to learn the technique behind circular headmovements in Zouk!",
    courseTitle: "Balão Apagado Course",
    courseTrailer: "https://www.youtube.com/watch?v=BQIWBkk6rbc",
    courseUrl: "beginners-bootcamp",
    courseVideos: [
      {
        videoName: "Course preview",
        videoUrl: "https://www.youtube.com/watch?v=BQIWBkk6rbc",
      },
      {
        videoName: "video 2",
        videoUrl: "https://www.youtube.com/watch?v=BQIWBkk6rbc",
      },
    ],
  },
  {
    courseHeaderImage: "zouk-toalha-course.webp",
    courseLevel: "Advanced",
    courseLongDescription:
      "Toalha is a complex but super fun move! In this course we explain the technique using solo and partner work. We also show you different variations of this move and how to master the Toalha!",
    coursePrice: 99.99,
    courseRating: 4.9,
    courseReviews: 87,
    courseShortDescription:
      "In this course we explain the Toalha technique using solo and partner work",
    courseTitle: "Toalha Course",
    courseTrailer: "https://www.youtube.com/embed/b4_31aaeQ5g",
    courseUrl: "beginners-bootcamp",
    courseVideos: [
      {
        videoName: "Course preview",
        videoUrl:
          "https://www.youtube.com/watch?v=CwCqkhhReko&list=PLtg3wEXTYx6pDBoVcgGk2CIRA05dJytoW&index=4",
      },
      {
        videoName: "video 2",
        videoUrl:
          "https://www.youtube.com/watch?v=CwCqkhhReko&list=PLtg3wEXTYx6pDBoVcgGk2CIRA05dJytoW&index=4",
      },
    ],
  },

  {
    courseHeaderImage: "zouk-beginner-course.webp",
    courseLevel: "Basic",
    courseLongDescription:
      "You want to learn Brazilian Zouk from the comfort of your home?  No worries! We cover all the foundation movements that you need in this course with solo and couple excercises!ntaries",
    coursePrice: 99.99,
    courseRating: 4.9,
    courseReviews: 87,
    courseShortDescription: "Test short description",
    courseTitle: "Beginners Bootcamp",
    courseTrailer: "https://www.youtube.com/embed/b4_31aaeQ5g",
    courseUrl: "beginners-bootcamp",
    courseVideos: [
      {
        videoName: "video 1",
        videoUrl: "https://www.youtube.com/embed/wnnho9vPLbY",
      },
      {
        videoName: "video 2",
        videoUrl: "https://www.youtube.com/embed/wnnho9vPLbY",
      },
    ],
  },
];

export const seedDatabase = async () => {
  data.forEach(async (course) => {
    try {
      await setDoc(doc(collection(db, "courses")), course);
    } catch (error) {
      throw new Error("Seeding - there was a problem creating the course.");
    }
  });
};
