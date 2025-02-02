import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';


// Firebase 설정
const firebaseConfig = {
    apiKey: "AIzaSyA5_BgEbK2ux2Rv3VMcDyKbP0mlvKRpFwE",
    authDomain: "jyparkwinter.firebaseapp.com",
    projectId: "jyparkwinter",
    storageBucket: "jyparkwinter.firebasestorage.app",
    messagingSenderId: "129060399086",
    appId: "1:129060399086:web:5b0709599000db0ba590ff",
    measurementId: "G-60W3MPY0BG"
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);

// Firestore 초기화
const db = getFirestore(app);

// Default 및 Firestore 내보내기
export default app; // Firebase 앱 기본 내보내기
export { db };      // Firestore 내보내기