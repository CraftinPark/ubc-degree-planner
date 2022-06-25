import { useEffect, useState } from "react";
import { Course } from "./utils/Course";
import TermCourseSelector from "./components/TermCourseSelector";

function App() {
  const [availableCourses, setAvailableCourses] = useState([]);
  const [termSelectedCourses, setTermSelectedCourses] = useState<Course[][]>([[], [], [], []]);

  useEffect(() => {
    async function fetchCourses() {
      let availableCoursesData = await fetch("/courses");
      let availableCourses = await availableCoursesData.json();
      setAvailableCourses(availableCourses);
    }
    fetchCourses();
  }, []);

  const renderTerms = () => {
    return termSelectedCourses.map((termCourses, term) => {
      return (
        <div key={term}>
          <h5>Term {term + 1}</h5>
          {renderTermCourses(term)}
          <TermCourseSelector
            termCourses={termCourses}
            addTermCourse={(course: Course) => {
              setTermSelectedCourses((prev) => {
                let termSelectedCourses = [...prev];
                termSelectedCourses[term] = [...prev[term], course];
                return termSelectedCourses;
              });
            }}
            availableCourses={availableCourses}
          />
        </div>
      );
    });
  };

  const renderTermCourses = (term: number) => {
    return termSelectedCourses[term].map((course) => (
      <div key={`${term}-${course.code}`}>{course.code}</div>
    ));
  };

  return (
    <div className="App">
      <h1>ubc-degree-planner</h1>
      {renderTerms()}
    </div>
  );
}

export default App;
