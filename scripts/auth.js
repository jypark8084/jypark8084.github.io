// auth.js
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';

// Firebase 인증 객체
const auth = getAuth();

// 로그인 링크 요소 가져오기
const loginLink = document.getElementById("loginLink");

// 로그인 상태 변화 감지
onAuthStateChanged(auth, (user) => {
    if (user) {
        // 로그인된 경우
        const username = user.displayName || user.email.split('@')[0];
        loginLink.textContent = username; // 로그인된 사용자 이름 표시
        loginLink.href = "#"; // 로그인 후 클릭 시 다른 페이지로 이동하지 않도록 설정
    } else {
        // 로그아웃된 경우
        loginLink.textContent = "로그인";
        loginLink.href = "/login/login/login.html";
    }
});
