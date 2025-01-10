const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.incrementPageView = functions.https.onRequest((req, res) => {
    const pageId = req.query.pageId;
    const userIp = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

    const db = admin.database();
    const pageRef = db.ref(`pageViews/${pageId}`);
    const userRef = db.ref(`userViews/${pageId}/${userIp}`);

    userRef.once("value", (snapshot) => {
        const lastVisit = snapshot.val();
        const now = Date.now();
        const limitTime = 60 * 1000; // 1분 제한

        if (!lastVisit || now - lastVisit > limitTime) {
            userRef.set(now); // 마지막 방문 시간 업데이트
            pageRef.transaction((currentCount) => {
                return (currentCount || 0) + 1; // 조회수 증가
            });
            res.status(200).send("조회수 증가");
        } else {
            res.status(429).send("조회수 증가 제한");
        }
    }).catch((error) => {
        console.error("조회수 업데이트 오류:", error);
        res.status(500).send("조회수 업데이트 오류");
    });
});
