import React from "react";
import { useSelector, useDispatch } from "react-redux";

export const CourseList = () => {
  const courses = useSelector((state) => state.data, []);
  const dispatch = useDispatch();

  function handleAddCourse() {
    dispatch({ type: "ADD_COURSE", title: "GraphQL" });
  }

  return (
    <ul>
      {courses.map((course) => (
        <li key={course}>{course}</li>
      ))}
      <button type="button" onClick={handleAddCourse}>
        Add Course
      </button>
    </ul>
  );
};
