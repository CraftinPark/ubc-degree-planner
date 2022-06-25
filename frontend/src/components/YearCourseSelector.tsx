import { useState } from "react";
import { Course } from "../utils/Course";

interface YearCourseSelectorProps {
  yearCourses: Course[];
  addYearCourse: Function;
  availableCourses: Course[];
}

export default function YearCourseSelector(props: YearCourseSelectorProps) {
  const [selectedCourseCode, setSelectedCourseCode] = useState<string>("");

  const availableCoursesElements = () => {
    let options = [];
    options.push(<option value={undefined}>select an option</option>);
    props.availableCourses.forEach((course, i) =>
      options.push(
        <option value={course.code} key={i}>
          {course.code}
        </option>
      )
    );
    return options;
  };

  const addSelectedCourseToYear = () => {
    let selectedCourse = props.availableCourses.find(
      (course) => (course.code = selectedCourseCode)
    );
    console.log(selectedCourseCode);
    if (selectedCourse !== undefined) props.addYearCourse({ ...selectedCourse });
  };

  return (
    <>
      <select
        defaultValue={"CPSC 110"}
        onChange={(event) => setSelectedCourseCode(event.target.value)}
      >
        {availableCoursesElements()}
      </select>
      <button onClick={addSelectedCourseToYear}>Add</button>
    </>
  );
}
