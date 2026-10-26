
/* 获取页面中的元素 */
const message = document.getElementById("message");
const changeBtn = document.getElementById("changeBtn");

/* 记录当前点击次数 */
let count = 0;

/* 给按钮绑定点击事件 */
changeBtn.addEventListener("click", function () {
    count++;

    message.textContent = `你已经点击了 ${count} 次！`;

    if (count >= 5) {
        message.textContent = "你已经点击了 5 次，做得不错！";
    }
});
