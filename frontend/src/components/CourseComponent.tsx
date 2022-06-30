import { useState } from "react";
import { Course } from "../types";

function CourseComponent(props: {
    order: number;
    course: Course;
    setCourse: Function;
}) {
    function backgroundColor() {
        if (props.course.prereqMet) return "bg-lime-300";
        else return "bg-yellow-200";
    }

    return (
        <div
            className={`w-44 h-12 rounded-md outline outline-1 ${backgroundColor()} flex items-center justify-center`}
        >
            {props.course.code}
        </div>
    );
}

export default CourseComponent;
