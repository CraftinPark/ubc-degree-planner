import { useState } from "react";
import YearComponent from "./YearComponent";
import { Plan, Year } from "../types";

function PlanComponent(props: { years: Year[]; setYears: Function }) {
    return (
        <div className="flex justify-center">
            {props.years.map((year, index) => {
                return (
                    <YearComponent
                        key={`year-${index}`}
                        year={index}
                        terms={year.terms}
                        setTerms={() => {}}
                    ></YearComponent>
                );
            })}
        </div>
    );
}

export default PlanComponent;
