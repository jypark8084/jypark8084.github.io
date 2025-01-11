const express = require('express');
const app = express();

// 조회수 저장 객체
let pageViews = {};

// JSON 요청 처리
app.use(express.json());

// 루트 경로에서 조회수 증가
app.get('/', (req, res) => {
    const pageId = 'home';
    pageViews[pageId] = (pageViews[pageId] || 0) + 1;

    res.send(`서버 실행 중! 홈 페이지 조회수: ${pageViews[pageId]}`);
});

// 조회수 증가 API
app.post('/api/views', (req, res) => {
    const { pageId } = req.body;

    if (!pageId) {
        return res.status(400).json({ error: 'pageId가 필요합니다.' });
    }

    pageViews[pageId] = (pageViews[pageId] || 0) + 1;
    res.json({ pageId, views: pageViews[pageId] });
});

// 조회수 확인 API
app.get('/api/views/:pageId', (req, res) => {
    const { pageId } = req.params;
    const views = pageViews[pageId] || 0;
    res.json({ pageId, views });
});

// 서버 실행
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`서버 실행 중: http://localhost:${PORT}`);
});
