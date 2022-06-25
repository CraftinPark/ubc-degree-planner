import { useEffect, useState } from "react";
import { Course } from "./utils/Course";
import YearCourseSelector from "./components/YearCourseSelector";

function App() {
  const [availableCourses, setAvailableCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState<{
    firstYear: Course[];
    secondYear: Course[];
    thirdYear: Course[];
    fourthYear: Course[];
  }>({
    firstYear: [],
    secondYear: [],
    thirdYear: [],
    fourthYear: [],
  });

  useEffect(() => {
    async function fetchCourses() {
      let availableCoursesData = await fetch("/courses");
      let availableCourses = await availableCoursesData.json();
      setAvailableCourses(availableCourses);
    }
    fetchCourses();
  }, []);

  useEffect(() => {
    console.log(selectedCourses);
  }, [selectedCourses]);

  const addCourseToFirstYear = (course: Course) => {
    setSelectedCourses((prev) => ({ ...prev, firstYear: [...prev.firstYear, course] }));
  };

  const addCourseToSecondYear = (course: Course) => {
    setSelectedCourses((prev) => ({ ...prev, secondYear: [...prev.secondYear, course] }));
  };

  const addCourseToThirdYear = (course: Course) => {
    setSelectedCourses((prev) => ({ ...prev, thirdYear: [...prev.thirdYear, course] }));
  };

  const addCourseToFourthYear = (course: Course) => {
    setSelectedCourses((prev) => ({ ...prev, fourthYear: [...prev.fourthYear, course] }));
  };

  return (
    <div className="App">
      <h1>ubc-degree-planner</h1>
      {selectedCourses.firstYear.map((course) => (
        <div>{course.code}</div>
      ))}
      <YearCourseSelector
        yearCourses={selectedCourses.firstYear}
        addYearCourse={addCourseToFirstYear}
        availableCourses={availableCourses}
      />
      {selectedCourses.secondYear.map((course) => (
        <div>{course.code}</div>
      ))}
      <YearCourseSelector
        yearCourses={selectedCourses.secondYear}
        addYearCourse={addCourseToSecondYear}
        availableCourses={availableCourses}
      />
      {selectedCourses.thirdYear.map((course) => (
        <div>{course.code}</div>
      ))}
      <YearCourseSelector
        yearCourses={selectedCourses.thirdYear}
        addYearCourse={addCourseToThirdYear}
        availableCourses={availableCourses}
      />
      {selectedCourses.fourthYear.map((course) => (
        <div>{course.code}</div>
      ))}
      <YearCourseSelector
        yearCourses={selectedCourses.fourthYear}
        addYearCourse={addCourseToFourthYear}
        availableCourses={availableCourses}
      />
    </div>
  );
}

export default App;
