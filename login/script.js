function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 간단한 로그인 인증 (예시)
    if (username === "admin" && password === "1234") {
        window.location.href = "index(1).html"; // 로그인 후 이동할 페이지
    } else {
        document.getElementById('loginMessage').innerText = "아이디 또는 비밀번호가 올바르지 않습니다.";
    }
}