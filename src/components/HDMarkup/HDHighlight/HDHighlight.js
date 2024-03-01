"use-client";
import { RoughNotation } from "react-rough-notation";
import styles from "./HDHighlight.module.css";

export default function HDHighlight({ children }) {
    return (
        <RoughNotation
            type={"highlight"}
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
