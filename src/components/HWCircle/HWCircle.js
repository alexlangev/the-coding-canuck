"use-client";
import { RoughNotation } from "react-rough-notation";
import React from "react";

function HWCircle({ children }) {
    return (
        <RoughNotation
            type="circle"
            iterations={1}
            color="black"
            animate={true}
            show={true}
            strokeWidth={3}
            padding={5}
        >
            {children}
        </RoughNotation>
    );
}

export default HWCircle;
