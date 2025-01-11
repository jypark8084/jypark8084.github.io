const express = require('express');
const app = express();

let pageViews = {}; // 메모리에 조회수 저장

app.use(express.json());

// 조회수 증가 API
app.post('/api/views', (req, res) => {
    const { pageId } = req.body;

    if (!pageId) {
        return res.status(400).send({ error: 'pageId가 필요합니다.' });
    }

    // 조회수 증가
    pageViews[pageId] = (pageViews[pageId] || 0) + 1;
    res.send({ pageId, views: pageViews[pageId] });
});

// 조회수 확인 API
app.get('/api/views/:pageId', (req, res) => {
    const { pageId } = req.params;
    const views = pageViews[pageId] || 0;
    res.send({ pageId, views });
});

// 서버 실행
const PORT = process.env.PORT || 8080; // 클라우드 타입은 기본적으로 8080 포트를 사용
app.listen(PORT, () => {
    console.log(`서버 실행 중: http://localhost:${PORT}`);
});
