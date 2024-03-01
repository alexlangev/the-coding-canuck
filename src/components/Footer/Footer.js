"use client";
import React from "react";
import styles from "./Footer.module.css";
import MainLogo from "../HWMainLogo";
import PostIt from "../PostIt";

function Footer() {
    let dataColorTheme = null;
    if (typeof document !== "undefined") {
        const root = document.documentElement;
        dataColorTheme = root.getAttribute("data-color-theme");
    }

    return (
        <div className={styles.wrapper}>
            <MainLogo />
            <PostIt>
                <h3 className={styles.header}>Where to find me:</h3>

                <ul className={styles.linkList}>
                    <li>
                        <a
                            href={"https://www.linkedin.com/in/alexlangev/"}
                            internal={false}
                        >
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a
                            href={"https://github.com/alexlangev"}
                            internal={false}
                        >
                            Github
                        </a>
                    </li>
                    <li>
                        <a
                            href={"https://twitter.com/TheCodingCanuck"}
                            internal={false}
                        >
                            Twitter
                        </a>
                    </li>
                </ul>
            </PostIt>
        </div>
    );
}

export default Footer;
