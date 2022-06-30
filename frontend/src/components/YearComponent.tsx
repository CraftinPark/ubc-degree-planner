import { useState } from "react";
import TermComponent from "./TermComponent";
import { Term } from "../types";

function YearComponent(props: {
    year: number;
    terms: Term[];
    setTerms: Function;
}) {
    return (
        <div>
            <div className={`w-44 h-12 outline outline-1 bg-slate-500`}>
                {`Year ${props.year + 1}`}
            </div>
            {props.terms.map((term, index) => {
                return (
                    <TermComponent
                        key={`term-${index}`}
                        term={index}
                        courses={term.courses}
                        setCourses={() => {}}
                    ></TermComponent>
                );
            })}
        </div>
    );
}
export default YearComponent;
