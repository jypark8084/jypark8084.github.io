import { db } from './firebase-init.js';
import { ref, get } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const cloudFunctionURL = "https://asia-northeast1-testlogin-8f196.cloudfunctions.net/incrementPageView";

// 조회수 증가 함수 호출
function incrementPageView(pageId) {
    fetch(`${cloudFunctionURL}?pageId=${pageId}`)
        .then(response => {
            if (response.status === 200) {
                console.log("조회수 증가 성공");
            } else if (response.status === 429) {
                console.log("조회수 증가 제한: 너무 짧은 간격");
            } else {
                console.error("조회수 증가 오류");
            }
        })
        .catch(error => {
            console.error("조회수 함수 호출 오류:", error);
        });
}

// 조회수 가져오기
function getPageView(pageId, callback) {
    const pageRef = ref(db, `pageViews/${pageId}`);
    get(pageRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
                callback(snapshot.val()); // 조회수 반환
            } else {
                callback(0); // 조회수 초기값
            }
        })
        .catch((error) => {
            console.error("조회수 가져오기 오류:", error);
            callback(0);
        });
}

// DOMContentLoaded 시 조회수 처리
document.addEventListener("DOMContentLoaded", () => {
    const pageId = "arkCommandPage"; // 현재 페이지 ID
    const viewCounter = document.getElementById("viewCounter");

    // 조회수 증가
    incrementPageView(pageId);

    // 조회수 가져와서 업데이트
    getPageView(pageId, (count) => {
        if (viewCounter) {
            viewCounter.textContent = `조회수: ${count}`;
        }
    });
});
