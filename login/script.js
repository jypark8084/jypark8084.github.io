// Firebase 초기화
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';
import { getFirestore, collection, addDoc, getDocs, query, where } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';

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

// 회원가입 함수
async function register() {
    const email = document.getElementById('useremail').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        // Firebase Authentication으로 이메일과 비밀번호로 사용자 생성
        await createUserWithEmailAndPassword(auth, email, password);
        
        // Firestore에 사용자 정보 저장
        await addDoc(collection(db, "users"), {
            email: email,
            username: username
        });

        alert("회원가입이 완료되었습니다.");
        window.location.href = "login.html"; // 로그인 페이지로 이동
    } catch (error) {
        console.error("Error:", error);
        alert("회원가입에 실패했습니다.");
    }
}

// 로그인 함수
async function login() {
    const identifier = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        let userEmail = identifier;

        // Firestore에서 아이디로 조회하여 이메일 가져오기
        const q = query(collection(db, "users"), where("username", "==", identifier));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
                userEmail = doc.data().email;
            });
        }

        // Firebase Authentication으로 이메일과 비밀번호로 로그인
        await signInWithEmailAndPassword(auth, userEmail, password);
        
        // 로그인 성공 시 페이지 이동
        window.location.href = "index(1).html"; 
    } catch (error) {
        document.getElementById('loginMessage').innerText = "아이디 또는 비밀번호가 올바르지 않습니다.";
        console.error("Error:", error.message);
    }
}
