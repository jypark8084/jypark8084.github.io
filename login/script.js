import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';
import { getFirestore, doc, setDoc, getDoc } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';

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

            // 이메일 인증이 완료되었는지 확인하는 리스너 추가
            auth.onAuthStateChanged(async (user) => {
                if (user && user.emailVerified) {
                    // 이메일 인증이 완료된 경우에만 Firestore에 사용자 이름 저장
                    await setDoc(doc(db, "users", user.uid), {
                        username: username,
                        email: email
                    });
                    console.log("Firestore에 사용자 정보가 저장되었습니다.");
                }
            });
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert("이미 사용 중인 이메일입니다. 다른 이메일을 사용해주세요.");
            } else {
                console.error("회원가입 중 오류:", error.message);
            }
        }
    }

    // 회원가입 버튼 이벤트 리스너 추가
    registerForm.addEventListener("submit", signUp);


    // 폼 제출 시 signUp 함수 호출
    document.getElementById("registerForm").addEventListener("submit", signUp);
















    // 로그인 함수
    async function login() {
        const usernameElement = document.getElementById("username");
        const passwordElement = document.getElementById("password");
        const loginMessageElement = document.getElementById("loginMessage");

        if (!usernameElement || !passwordElement || !loginMessageElement) {
            console.error("필수 요소가 없습니다.");
            return;
        }

        const identifier = usernameElement.value.trim();
        const password = passwordElement.value.trim();

        try {
            let emailToLogin;

            // Firestore에서 사용자 정보 가져오기
            const userDoc = await getDoc(doc(db, "users", identifier));
            if (userDoc.exists()) {
                // 아이디로 이메일 찾기
                emailToLogin = userDoc.data().email;
            } else {
                // 이메일 직접 사용
                emailToLogin = identifier;
            }

            // Firebase Authentication으로 로그인 시도
            await signInWithEmailAndPassword(auth, emailToLogin, password);
            alert("로그인 성공!");
            window.location.href = "../index.html";
        } catch (error) {
            loginMessageElement.innerText = "아이디 또는 비밀번호가 올바르지 않습니다.";
            console.error("로그인 오류:", error.message);
        }
    }

    // 로그인 폼 이벤트 리스너 추가
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault(); // 기본 폼 제출 동작 방지
            login();
        });
    }

    // 전역 범위에 함수 할당
    window.signUp = signUp;
    window.login = login;
});