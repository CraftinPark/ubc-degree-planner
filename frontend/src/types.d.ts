export type Plan = {
    years: Year[];
}

export type Year = {
    terms: Term[];
}

export type Term = {
    courses: Course[];
}

export type Course = {
    code: string;
    name: string;
    desc: string;
    cred: number;
    preq: number;
    prereqMet: boolean;
}