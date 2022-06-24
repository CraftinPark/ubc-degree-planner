import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
const fs = require("fs");

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

const MOCK_LIST = __dirname + "/../mock-list.txt";
import { Course, PlannedCourse } from "./src/Course";

let file = fs.readFileSync(MOCK_LIST, "utf-8");
let courses = [];
let course;
for (let line of file.toString().split("\n")) {
    let parts = line.split(":");
    if (parts.length == 1) continue;
    let attribute = parts[0].trim();
    let value = parts[1].trim();
    if (attribute === "code") {
        course = new Course(value);
        courses.push(course);
    } else {
        course.setAttribute(attribute, value);
    }
}

import DegreePlanner from "./src/degreePlanner";

let degreePlanner = new DegreePlanner();

let myEnrolledCourses = [
    new PlannedCourse(courses[0], 1),
    new PlannedCourse(courses[1], 2),
];

// myEnrolledCourses should be valid. Return array
degreePlanner.checkPrerequisitesMet(myEnrolledCourses);
