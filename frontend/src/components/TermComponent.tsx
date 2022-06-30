import { useState } from "react";
import CourseComponent from "./CourseComponent";
import { Course } from "../types";

function TermComponent(props: {
    term: number;
    courses: Course[];
    setCourses: Function;
}) {
    function addSlot() {
        if (props.courses.length < 5) {
            return (
                <div className="w-44 h-12 rounded-md outline-dashed outline-1 bg-transparent flex items-center justify-center">
                    {`Add a course (+)`}
                </div>
            );
        } else return [];
    }

    function emptySlots() {
        let emptySlots = [];
        let numEmptySlots = 4 - props.courses.length;
        for (let i = 0; i < numEmptySlots; i++) {
            emptySlots.push(
                <div className="w-44 h-12 rounded-md outline-dashed outline-1 bg-transparent flex items-center justify-center"></div>
            );
        }
        return emptySlots;
    }

    return (
        <div>
            <div className="w-44 h-6 outline outline-1 bg-slate-300 flex items-center justify-center">
                {`Term ${props.term + 1}`}
            </div>
            {props.courses.map((course, index) => {
                return (
                    <CourseComponent
                        key={`course-${course.code}`}
                        order={index}
                        course={course}
                        setCourse={() => {}}
                    ></CourseComponent>
                );
            })}
            {addSlot()}
            {emptySlots()}
        </div>
    );
}
export default TermComponent;
