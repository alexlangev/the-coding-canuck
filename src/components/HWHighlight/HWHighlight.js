"use-client";
import { RoughNotation } from "react-rough-notation";

// Add some type of InViewport effect?

function HWHighlight({ children }) {
    return (
        <RoughNotation
            type="highlight"
            color="yellow"
            show={true}
            iterations={1}
            animationDuration={150}
            padding={5}
        >
            {children}
        </RoughNotation>
    );
}

export default HWHighlight;
