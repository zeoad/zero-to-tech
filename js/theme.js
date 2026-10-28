// js/theme.js

/**
 * 初始化深色 / 浅色主题切换功能。
 * 只修改当前页面，不保存主题选择。
 */
export function initTheme() {
    const themeBtn = document.getElementById("themeBtn");

    // 如果按钮不存在，就不执行，避免报错
    if (!themeBtn) {
        console.warn("[MySpace] 未找到主题切换按钮");
        return;
    }

    themeBtn.addEventListener("click", () => {
        const isLight = document.body.classList.toggle("light-theme");

        // 根据当前主题更新按钮图标和辅助说明
        themeBtn.textContent = isLight ? "☾" : "☀";

        themeBtn.setAttribute(
            "aria-label",
            isLight ? "切换深色主题" : "切换浅色主题"
        );
    });
}