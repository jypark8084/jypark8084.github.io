import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';
import { getFirestore, doc, setDoc } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';

// Firebase 구성
const firebaseConfig = {
    apiKey: "AIzaSyAG77bT0YaKUX33IrSjV3cc4N3nKdC_dY4",
    authDomain: "testlogin-8f196.firebaseapp.com",
    projectId: "testlogin-8f196",
    storageBucket: "testlogin-8f196.appspot.com",
    messagingSenderId: "844746942507",
    appId: "1:844746942507:web:2d15058ffd6f692243626e",
    measurementId: "G-20WL1R0QYG"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");

    // 회원가입 함수
    async function signUp(event) {
        event.preventDefault();  // 폼의 기본 제출 동작을 막음

        const emailElement = document.getElementById("signupEmail");
        const passwordElement = document.getElementById("signupPassword");
        const usernameElement = document.getElementById("signupUsername");

        const email = emailElement.value;
        const password = passwordElement.value;
        const username = usernameElement.value;

        try {
            // Firebase Authentication으로 이메일과 비밀번호로 회원가입
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // 이메일 인증 메일 전송
            await sendEmailVerification(user);
            alert("회원가입이 완료되었습니다. 이메일을 확인해주세요.");

            // Firestore에 사용자 정보 저장
            await setDoc(doc(db, "users", user.uid), {
                username: username,
                email: email
            });
            console.log("Firestore에 사용자 정보가 저장되었습니다.");

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert("이미 사용 중인 이메일입니다. 다른 이메일을 사용해주세요.");
            } else {
                console.error("회원가입 중 오류:", error.message);
                document.getElementById('loginMessage').innerText = error.message; // 사용자에게 오류 메시지 표시
            }
        }
    }

    // 회원가입 버튼 이벤트 리스너 추가
    registerForm.addEventListener("submit", signUp);
});
