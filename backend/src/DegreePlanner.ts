import { Course, PlannedCourse } from "./Course";

export default class DegreePlanner {
    constructor() {}

    checkPrerequisitesMet(plannedCourses: PlannedCourse[]): void {
        for (let plannedCourse of plannedCourses) {
            if (this.isPrerequisiteMet(plannedCourse, plannedCourses)) {
                plannedCourse.prerequisitiesMet = true;
            }
        }
    }

    isPrerequisiteMet(
        course: PlannedCourse,
        plannedCourses: PlannedCourse[]
    ): boolean {
        let beforeCourses = this.getCoursesBeforeTerm(
            course.term,
            plannedCourses
        );
        return this.isConditionMet(course.course.preq, beforeCourses);
    }

    isConditionMet(
        preq: string[] | string,
        coursesBefore: PlannedCourse[]
    ): boolean {
        let fulfilled = false;
        if (typeof preq === "string") {
            console.log("courses before:");
            console.log(coursesBefore);
            if (
                coursesBefore.filter(
                    (e: PlannedCourse) =>
                        e.course.code === preq &&
                        this.isPrerequisiteMet(e, coursesBefore)
                ).length !== 0
            ) {
                fulfilled = true;
            }
        } else if (preq.length === 0) {
            fulfilled = true;
        } else if (preq[0] === "or") {
            fulfilled = preq
                .slice(1)
                .some((condition: any) =>
                    this.isConditionMet(condition, coursesBefore)
                );
        } else if (preq[0] === "and") {
            fulfilled = preq
                .slice(1)
                .every((condition: any) =>
                    this.isConditionMet(condition, coursesBefore)
                );
        }
        return fulfilled;
    }

    getCoursesBeforeTerm(
        term: number,
        plannedCourses: PlannedCourse[]
    ): PlannedCourse[] {
        let coursesBefore = [];
        for (let plannedCourse of plannedCourses) {
            if (plannedCourse.term < term) coursesBefore.push(plannedCourse);
        }
        return coursesBefore;
    }
}
