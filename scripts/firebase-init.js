// firebase-init.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';

const firebaseConfig = {
    apiKey: "AIzaSyAG77bT0YaKUX33IrSjV3cc4N3nKdC_dY4",
    authDomain: "testlogin-8f196.firebaseapp.com",
    projectId: "testlogin-8f196",
    storageBucket: "testlogin-8f196.firebasestorage.app",
    messagingSenderId: "844746942507",
    appId: "1:844746942507:web:2d15058ffd6f692243626e",
    measurementId: "G-20WL1R0QYG"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);