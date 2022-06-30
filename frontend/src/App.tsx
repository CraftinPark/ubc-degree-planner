import React, { useState } from "react";
import "./App.css";
import PlanComponent from "./components/PlanComponent";
import { Plan } from "./types";

function App() {
    const [plan, setPlan] = useState<Plan>({
        years: [
            {
                terms: [
                    {
                        courses: [
                            {
                                code: "CPSC 110",
                                name: "Computation, Programs, and Programming",
                                desc: "Fundamental program and computation structures. Introductory programming skills. Computation as a tool for information processing, simulation and modelling, and interacting with the world. [3-3-0]",
                                cred: 4,
                                preq: 0,
                                prereqMet: true,
                            },
                            {
                                code: "CPSC 121",
                                name: "Models of Computation",
                                desc: "Physical and mathematical structures of computation. Boolean algebra and combinations logic circuits; proof techniques; functions and sequential circuits; sets and relations; finite state machines; sequential instruction execution. [3-2-1]",
                                cred: 4,
                                preq: 0,
                                prereqMet: true,
                            },
                        ],
                    },
                    {
                        courses: [
                            {
                                code: "MATH 100",
                                name: "Differential Calculus with Applications",
                                desc: "Derivatives of elementary functions. Applications and modelling: graphing, optimization. Consult the Faculty of Science Credit Exclusion List: www.calendar.ubc.ca/vancouver/index.cfm?tree=12,215,410,414. [3-0-0]",
                                cred: 3,
                                preq: 0,
                                prereqMet: true,
                            },
                            {
                                code: "MATH 101",
                                name: "Integral Calculus with Applications",
                                desc: "The definite integral, integration techniques, applications, modelling, infinite series. Please consult the Faculty of Science Credit Exclusion List: www.calendar.ubc.ca/vancouver/index.cfm?tree=12,215,410,414. [3-0-0]",
                                cred: 3,
                                preq: 0,
                                prereqMet: true,
                            },
                        ],
                    },
                    { courses: [] },
                ],
            },
            {
                terms: [{ courses: [] }, { courses: [] }, { courses: [] }],
            },
            {
                terms: [{ courses: [] }, { courses: [] }, { courses: [] }],
            },
            {
                terms: [{ courses: [] }, { courses: [] }, { courses: [] }],
            },
        ],
    });
    return (
        <div className="App flex flex-row">
            <div className="basis-2/12 bg-slate-800 text-slate-100 h-screen">
                sidebar
            </div>
            <div className="basis-7/12 h-screen">
                <PlanComponent
                    years={plan.years}
                    setYears={() => {}}
                ></PlanComponent>
            </div>
            <div className="basis-3/12 bg-slate-200 h-screen">requirements</div>
        </div>
    );
}

export default App;
