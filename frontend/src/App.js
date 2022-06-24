import { Button, InputGroup } from "@blueprintjs/core";

function App() {

  // make a data request and fill variable 'courses'

  let firstYearCourses = "";
  let secondYearCourses = "";
  let thirdYearCourses = "";
  let fourthYearCourses = "";

  return (
    <div className="App">
      <h1>ubc-degree-planner</h1>
      First Year Courses:{" "}
      <InputGroup
        className="first-year-courses"
        onChange={(e) => {
          firstYearCourses = e.target.value;
        }}
      ></InputGroup>
      Second Year Courses:{" "}
      <InputGroup
        className="first-year-courses"
        onChange={(e) => {
          secondYearCourses = e.target.value;
        }}
      ></InputGroup>
      Third Year Courses:{" "}
      <InputGroup
        className="first-year-courses"
        onChange={(e) => {
          thirdYearCourses = e.target.value;
        }}
      ></InputGroup>
      Fourth Year Courses:{" "}
      <InputGroup
        className="first-year-courses"
        onChange={(e) => {
          fourthYearCourses = e.target.value;
        }}
      ></InputGroup>
      <Button
        onClick={() => {
          console.log(firstYearCourses);
          console.log(secondYearCourses);
          console.log(thirdYearCourses);
          console.log(fourthYearCourses);
        }}
      >
        print courses
      </Button>
    </div>
  );
}

export default App;
