// js/navigation.js

/**
 * 当用户滚动页面时，高亮对应的导航链接。
 */
export function initNavigation() {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("main section[id]");

    // 浏览器不支持 IntersectionObserver 时，直接跳过
    if (!("IntersectionObserver" in window)) {
        console.warn("[MySpace] 当前浏览器不支持 IntersectionObserver");
        return;
    }

    if (navLinks.length === 0 || sections.length === 0) {
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            const visibleEntries = entries
                .filter((entry) => entry.isIntersecting)
                .sort(
                    (a, b) =>
                        b.intersectionRatio - a.intersectionRatio
                );

            if (visibleEntries.length === 0) {
                return;
            }

            const currentId = visibleEntries[0].target.id;

            navLinks.forEach((link) => {
                const isActive =
                    link.getAttribute("href") === `#${currentId}`;

                link.classList.toggle("active", isActive);
            });
        },
        {
            rootMargin: "-15% 0px -60% 0px",
            threshold: [0, 0.1, 0.25, 0.5]
        }
    );

    sections.forEach((section) => observer.observe(section));
}