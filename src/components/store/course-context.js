// React imports
import React, { Context } from "react";

const CourseContext = React.createContext({
  courses: [],
});

export const ContextProvider = (props) => {
  return (
    <Context.Provider
      value={{
        courses: [],
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default CourseContext;
