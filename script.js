
"use strict";

// 获取页面元素
const themeBtn = document.getElementById("themeBtn");
const helloBtn = document.getElementById("helloBtn");
const helloMessage = document.getElementById("helloMessage");
const yearElement = document.getElementById("year");

// 自动显示当前年份
yearElement.textContent = new Date().getFullYear();

// 切换浅色和深色主题
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    themeBtn.textContent = isDark
        ? "☀️ 切换浅色"
        : "🌙 切换主题";
});

// 点击按钮显示问候语
helloBtn.addEventListener("click", () => {
    helloMessage.textContent = "你好！继续加油，你的代码正在一点点进步 🚀";
});
