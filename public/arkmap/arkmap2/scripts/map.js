import { db } from './firebase-init.js';
import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';

const writeButton = document.querySelector(".write-button");
const writePopup = document.getElementById("writePopup");
const closePopup = document.getElementById("closePopup");
const writeForm = document.getElementById("writeForm");
const marker = document.getElementById("marker");
const mapPreview = document.getElementById("mapPreview");

let markerPosition = { x: 50, y: 50 }; // 초기 위치

// 작성 버튼 클릭
writeButton.addEventListener("click", () => {
    writePopup.classList.remove("hidden");
});

// 팝업 닫기 버튼
closePopup.addEventListener("click", () => {
    writePopup.classList.add("hidden");
});

// 마커 드래그 앤 드롭
marker.addEventListener("dragend", (e) => {
    const rect = mapPreview.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    markerPosition = { x, y };
    marker.style.left = `${x}%`;
    marker.style.top = `${y}%`;
});

// 작성 폼 제출
writeForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const message = document.getElementById("message").value;

    try {
        await addDoc(collection(db, "wishes"), {
            username,
            message,
            x: markerPosition.x,
            y: markerPosition.y
        });
        alert("작성 완료!");
        writePopup.classList.add("hidden");
    } catch (error) {
        console.error("데이터 저장 실패:", error);
    }
});
