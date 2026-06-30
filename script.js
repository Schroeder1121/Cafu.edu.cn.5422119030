// ===========================
// 外交学院统一身份认证平台
// script.js
// ===========================

// 固定账号密码（演示用途）
const CORRECT_USERNAME = "202630291";
const CORRECT_PASSWORD = "1123581321cafu";

// 获取元素
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const errorMessage = document.getElementById("error-message");
const loadingScreen = document.getElementById("loading-screen");

// 登录函数
function login(){

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // 清空错误信息
    errorMessage.textContent = "";

    // 判空
    if(username === "" || password === ""){

        errorMessage.textContent = "请输入学号和密码";
        return;

    }

    // 验证账号密码
    if(username === CORRECT_USERNAME && password === CORRECT_PASSWORD){

        // 防止重复点击
        loginBtn.disabled = true;
        loginBtn.textContent = "验证中...";

        // 显示加载页面
        loadingScreen.style.display = "flex";

        // 模拟服务器验证延迟
        setTimeout(() => {

            // 跳转到内部页面
            window.location.href = "notice.html";

        }, 1500);

    }else{

        errorMessage.textContent = "学号或密码错误，请重新输入";

        // 清空密码框
        passwordInput.value = "";

        // 聚焦密码框
        passwordInput.focus();
    }
}

// 点击按钮登录
loginBtn.addEventListener("click", login);

// 按 Enter 键登录
document.addEventListener("keydown", function(event){

    if(event.key === "Enter"){
        login();
    }

});

// 页面加载后自动聚焦学号框
window.addEventListener("load", function(){
    usernameInput.focus();
});