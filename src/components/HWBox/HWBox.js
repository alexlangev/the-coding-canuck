import React from "react";
import { RoughNotation } from "react-rough-notation";

function HWBox({ children }) {
    return (
        <RoughNotation
            iterations={1}
            color="black"
            animate={true}
            show={true}
            strokeWidth={3}
            padding={5}
            type="box"
        >
            {children}
        </RoughNotation>
    );
}

export default HWBox;
