const express = require('express');
const app = express();

let pageViews = {}; // 메모리에 조회수 저장

app.use(express.json());

// 루트 경로에서 조회수 증가
app.get('/', (req, res) => {
    const pageId = 'home'; // 특정 페이지 ID를 할당
    pageViews[pageId] = (pageViews[pageId] || 0) + 1;

    res.send(`서버가 정상적으로 실행 중입니다! 홈 페이지 조회수: ${pageViews[pageId]}`);
});

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`서버 실행 중: http://localhost:${PORT}`);
});


