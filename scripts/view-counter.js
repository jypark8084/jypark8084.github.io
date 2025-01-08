import db from './firebase-init.js';

function getPageView(pageId, callback) {
    fetch(`https://YOUR_REGION-YOUR_PROJECT_ID.cloudfunctions.net/incrementPageView?pageId=${pageId}`)
        .then(response => {
            if (response.status === 200) {
                console.log("조회수 증가 성공");
            } else if (response.status === 429) {
                console.log("조회수 증가 제한: 너무 짧은 간격");
            } else {
                console.error("조회수 증가 오류");
            }
            // 조회수 가져오기
            const pageRef = ref(db, `pageViews/${pageId}`);
            get(pageRef).then((snapshot) => {
                if (snapshot.exists()) {
                    callback(snapshot.val());
                } else {
                    callback(0);
                }
            }).catch((error) => {
                console.error("조회수 가져오기 오류:", error);
                callback(0);
            });
        })
        .catch(error => {
            console.error("조회수 함수 호출 오류:", error);
        });
}

document.addEventListener("DOMContentLoaded", () => {
    const pageId = "arkCommandPage"; // 현재 페이지 ID
    const viewCounter = document.getElementById("viewCounter");

    getPageView(pageId, (count) => {
        if (viewCounter) {
            viewCounter.textContent = `조회수: ${count}`;
        }
    });
});
