import { useEffect, useState } from "react";
import { Course } from "./utils/Course";
import TermCourseSelector from "./components/TermCourseSelector";
import "./App.css";

function App() {
    const [availableCourses, setAvailableCourses] = useState([]);
    const [termSelectedCourses, setTermSelectedCourses] = useState<Course[][]>([[], [], [], []]);
    const [prerequisiteMessage, setPrerequisiteMessage] = useState("");

    useEffect(() => {
        async function fetchCourses() {
            let availableCoursesData = await fetch("/courses");
            let availableCourses = await availableCoursesData.json();
            setAvailableCourses(availableCourses);
        }
        fetchCourses();
    }, []);

    useEffect(() => {
        async function fetchPrerequisiteCheck() {
            let updatedCoursesData = await fetch("/checkPrerequisites");
            let updatedCourses = await updatedCoursesData.json();
            setTermSelectedCourses(updatedCourses);
        }
        fetchPrerequisiteCheck();
    }, [termSelectedCourses]);

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
            <div className="course" key={`${term}-${course.code}`}>
                {course.code}
            </div>
        ));
    };

    const prerequisiteChecker = () => {
        return (
            <div>
                <p>{prerequisiteMessage}</p>
            </div>
        );
    };
    return (
        <div className="App">
            <h1>ubc-degree-planner</h1>
            {renderTerms()}
            {prerequisiteChecker()}
        </div>
    );
}

export default App;
