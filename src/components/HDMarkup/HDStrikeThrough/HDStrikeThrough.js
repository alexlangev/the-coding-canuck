"use-client";
import { RoughNotation } from "react-rough-notation";
import styles from "./HDStringThrough.module.css";

export default function HDStringThrough({ children }) {
    return (
        <RoughNotation
            type={"strike-through"}
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
