import { useState } from "react";
import { Course } from "../utils/Course";

interface TermCourseSelectorProps {
  termCourses: Course[];
  addTermCourse: Function;
  availableCourses: Course[];
}

export default function TermCourseSelector(props: TermCourseSelectorProps) {
  const [selectedCourseCode, setSelectedCourseCode] = useState<string>("");

  const availableCoursesElements = () => {
    let options = [];
    options.push(
      <option value={undefined} key={"unselected"}>
        select an option
      </option>
    );
    props.availableCourses.forEach((c, i) =>
      options.push(
        <option value={c.code} key={i}>
          {c.code}
        </option>
      )
    );
    return options;
  };

  const addSelectedCourseToYear = () => {
    let selectedCourse = props.availableCourses.find((c) => c.code === selectedCourseCode);
    if (selectedCourse !== undefined) props.addTermCourse({ ...selectedCourse });
  };

  return (
    <>
      <select onChange={(e) => setSelectedCourseCode(e.target.value)}>
        {availableCoursesElements()}
      </select>
      <button onClick={addSelectedCourseToYear}>Add</button>
    </>
  );
}
