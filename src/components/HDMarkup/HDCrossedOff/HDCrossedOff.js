"use-client";
import { RoughNotation } from "react-rough-notation";
import styles from "./HDCrossedOff.module.css";

export default function HDCrossedOff({ children }) {
    return (
        <RoughNotation
            type={"crossed-off"}
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
