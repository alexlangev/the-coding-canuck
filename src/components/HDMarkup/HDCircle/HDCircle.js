"use-client";
import { RoughNotation } from "react-rough-notation";
import styles from "./HDCircle.module.css";

export default function HDCircle({ children }) {
    return (
        <RoughNotation
            type={"circle"}
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
