
"use strict";

/* ==================================================
   MySpace 发布配置
   每次发布新版本，记得修改 VERSION 和 RELEASE_DATE
   ================================================== */

const VERSION = "2.0.0";
const RELEASE_DATE = "2026-10-27";

// 获取页面元素
const themeBtn = document.getElementById("themeBtn");
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const emptyState = document.getElementById("emptyState");

// 显示版本号、发布日期与当前年份
document.getElementById("version").textContent = `v${VERSION}`;
document.getElementById("releaseDate").textContent = RELEASE_DATE;
document.getElementById("year").textContent = new Date().getFullYear();

// 初始化主题
// 只在当前页面中切换，不保存到本地存储
themeBtn.addEventListener("click", () => {
    const isLight = document.body.classList.toggle("light-theme");

    themeBtn.textContent = isLight ? "☾" : "☀";
    themeBtn.setAttribute(
        "aria-label",
        isLight ? "切换深色主题" : "切换浅色主题"
    );
});

// 项目分类筛选
filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedCategory = button.dataset.filter;
        let visibleCount = 0;

        // 更新筛选按钮状态
        filterButtons.forEach((item) => {
            const isActive = item === button;

            item.classList.toggle("active", isActive);
            item.setAttribute("aria-pressed", String(isActive));
        });

        // 根据项目分类决定是否显示
        projectCards.forEach((card) => {
            const matches =
                selectedCategory === "all" ||
                card.dataset.category === selectedCategory;

            card.hidden = !matches;

            if (matches) {
                visibleCount++;
            }
        });

        // 没有匹配项目时显示提示
        emptyState.hidden = visibleCount > 0;
    });
});

// 根据滚动位置高亮导航链接
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section[id]");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        (entries) => {
            // 优先处理当前进入视口的区域
            const visibleEntries = entries
                .filter((entry) => entry.isIntersecting)
                .sort(
                    (a, b) =>
                        b.intersectionRatio - a.intersectionRatio
                );

            if (visibleEntries.length === 0) return;

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

// 控制台输出版本信息，方便排查发布问题
console.info(
    `[MySpace] Version ${VERSION} | Release date: ${RELEASE_DATE}`
);
