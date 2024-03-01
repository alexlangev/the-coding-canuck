"use client";
import { RoughNotation } from "react-rough-notation";
import styles from "./HDBrackets.module.css";
import { useHover } from "@/utils/hooks/useHover";
import { useTheme } from "@/utils/hooks/useTheme";
import { useEffect, useState } from "react";

export default function HDBrackets({ children, onHover = false }) {
    const { isHovered, onMouseEnter, onMouseLeave, onFocus, onBlur } =
        useHover();
    const [underlinedColor, setUnderlinedColor] = useState("white");
    const show = onHover ? isHovered : true;
    const theme = useTheme();

    useEffect(() => {
        setUnderlinedColor(theme === "light" ? "black" : "white");
    }, [theme]);

    return (
        <RoughNotation
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onFocus={onFocus}
            onBlur={onBlur}
            className={styles.wrapper}
            type={"bracket"}
            brackets={["left", "right"]}
            color={underlinedColor}
            show={show}
            strokeWidth={3}
            iterations={1}
            animationDuration={375}
            animate={true}
        >
            {children}
        </RoughNotation>
    );
}
