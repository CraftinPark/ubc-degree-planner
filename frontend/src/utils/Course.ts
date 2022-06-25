export class Course {
    public code: string;
    public name: string;
    public desc: string;
    public cred: number;
    public preq: any;
    public creq: any;
    public excl: any;
    public eqvl: any;
    public crdf: Boolean;

    constructor(code: string) {
        this.code = code;
        this.name = "";
        this.desc = "";
        this.cred = 0;
        this.preq = [];
        this.creq = [];
        this.excl = [];
        this.eqvl = [];
        this.crdf = true;
    }

    public setAttribute(attribute: string, value: string) {
        switch (attribute) {
            case "name":
                this.name = value;
                break;
            case "desc":
                this.desc = value;
                break;
            case "cred":
                this.cred = parseInt(value);
                break;
            case "preq":
                if (value) this.preq = JSON.parse(value);
                break;
            case "creq":
                this.creq = value;
                break;
            case "excl":
                this.excl = value;
                break;
            case "eqvl":
                this.eqvl = value;
                break;
            case "crdf":
                this.crdf = value == "true";
                break;
        }
    }
}

export class PlannedCourse {
    public course: Course;
    public term: number;
    public prerequisitiesMet: boolean;

    constructor(course: Course, term: number) {
        this.course = course;
        this.term = term;
        this.prerequisitiesMet = false;
    }
}
