"use-client";
import { RoughNotation } from "react-rough-notation";
import styles from "./HDSquare.module.css";

export default function HDSquare({ children }) {
    return (
        <RoughNotation
            type={"box"}
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
