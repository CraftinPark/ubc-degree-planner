export default class Course {
    private code: string;
    private name: string;
    private desc: string;
    private cred: number;
    private preq: any;
    private creq: any;
    private excl: any;
    private eqvl: any;
    private crdf: Boolean;

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
                this.preq = value;
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
