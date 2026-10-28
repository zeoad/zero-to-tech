// js/projects.js

/**
 * 初始化项目分类筛选。
 * 支持：全部项目、前端开发、人工智能。
 */
export function initProjects() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");
    const emptyState = document.getElementById("emptyState");

    if (filterButtons.length === 0 || projectCards.length === 0) {
        console.warn("[MySpace] 项目筛选所需的元素不存在");
        return;
    }

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const selectedCategory = button.dataset.filter;
            let visibleCount = 0;

            // 更新按钮的激活状态
            filterButtons.forEach((item) => {
                const isActive = item === button;

                item.classList.toggle("active", isActive);
                item.setAttribute("aria-pressed", String(isActive));
            });

            // 根据分类显示项目卡片
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
            if (emptyState) {
                emptyState.hidden = visibleCount > 0;
            }
        });
    });
}