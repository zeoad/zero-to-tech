// js/release.js

import { VERSION, RELEASE_DATE } from "./config.js";

/**
 * 将版本号、发布日期和当前年份显示到网页上。
 */
export function initRelease() {
    const versionElement = document.getElementById("version");
    const releaseDateElement = document.getElementById("releaseDate");
    const yearElement = document.getElementById("year");

    if (versionElement) {
        versionElement.textContent = `v${VERSION}`;
    }

    if (releaseDateElement) {
        releaseDateElement.textContent = RELEASE_DATE;
    }

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    console.info(
        `[MySpace] Version ${VERSION} | Release date: ${RELEASE_DATE}`
    );
}