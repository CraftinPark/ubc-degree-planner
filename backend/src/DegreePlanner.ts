import { PlannedCourse } from "./Course";

export default class DegreePlanner {
    constructor() {}

    public checkPrerequisitesMet(plannedCourses: PlannedCourse[]): void {
        for (let plannedCourse of plannedCourses)
            if (this.isPrerequisiteMet(plannedCourse, plannedCourses))
                plannedCourse.prerequisitiesMet = true;
    }

    private isPrerequisiteMet(course: PlannedCourse, plannedCourses: PlannedCourse[]): boolean {
        let beforeCourses = this.getPrevCourses(course.term, plannedCourses);
        return this.isConditionMet(course.course.preq, beforeCourses);
    }

    private getPrevCourses(term: number, plannedCourses: PlannedCourse[]): PlannedCourse[] {
        let prevCourses = [];
        for (let plannedCourse of plannedCourses)
            if (plannedCourse.term < term) prevCourses.push(plannedCourse);
        return prevCourses;
    }

    private isConditionMet(preq: string[] | string, prevCourses: PlannedCourse[]): boolean {
        let fulfilled = false;
        if (typeof preq === "string") {
            if (this.isCourseFulfilled(preq, prevCourses)) fulfilled = true;
        } else {
            let remainingParams = preq.slice(1);
            if (preq.length === 0) fulfilled = true;
            else if (preq[0] === "or")
                fulfilled = this.oneCourseMetCondition(remainingParams, prevCourses);
            else if (preq[0] === "and")
                fulfilled = this.allCoursesMetCondition(remainingParams, prevCourses);
        }
        return fulfilled;
    }

    private isCourseFulfilled(code: string, prevCourses: PlannedCourse[]): boolean {
        return (
            prevCourses.filter(
                (prevCourse: PlannedCourse) =>
                    prevCourse.course.code === code &&
                    this.isPrerequisiteMet(prevCourse, prevCourses)
            ).length !== 0
        );
    }

    private oneCourseMetCondition(params: string[], prevCourses: PlannedCourse[]): boolean {
        return params.some((cond: string[] | string) => this.isConditionMet(cond, prevCourses));
    }

    private allCoursesMetCondition(params: string[], prevCourses: PlannedCourse[]): boolean {
        return params.every((cond: string[] | string) => this.isConditionMet(cond, prevCourses));
    }
}
