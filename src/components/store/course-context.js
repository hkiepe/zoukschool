// React imports
import React from "react";

const CourseContext = React.createContext({
  courses: [],
});

export const ContextProvider = (props) => {
  return (
    <CourseContext.Provider
      value={{
        courses: [],
      }}
    >
      {props.children}
    </CourseContext.Provider>
  );
};

export default CourseContext;
