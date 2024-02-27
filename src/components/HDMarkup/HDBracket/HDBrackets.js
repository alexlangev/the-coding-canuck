"use-client";
import { RoughNotation } from "react-rough-notation";
import styles from "./HDBrackets.module.css";

export default function HDBrackets({ children }) {
    return (
        <RoughNotation
            type={"bracket"}
            brackets={["left", "right"]}
            color="red"
            show={"true"}
            strokeWidth={3}
            iterations={1}
            animate={true}
        >
            {children}
        </RoughNotation>
    );
}
