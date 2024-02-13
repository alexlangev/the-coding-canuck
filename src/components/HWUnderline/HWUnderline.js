import React from "react";
import { RoughNotation } from "react-rough-notation";

function HWUnderline({ children }) {
    return (
        <RoughNotation
            iterations={1}
            color="black"
            animate={true}
            show={true}
            strokeWidth={3}
            padding={1}
            type="underline"
        >
            {children}
        </RoughNotation>
    );
}

export default HWUnderline;
