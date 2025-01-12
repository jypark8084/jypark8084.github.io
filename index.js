const express = require('express');
const cors = require('cors'); // CORS 패키지 추가
const path = require('path'); // 파일 경로 처리
const app = express();


// 특정 도메인만 허용
app.use(cors({
    origin: 'https://jypark8084.github.io', // 허용할 클라이언트 도메인
    methods: ['GET', 'POST'],              // 허용할 HTTP 메서드
    allowedHeaders: ['Content-Type'],      // 허용할 헤더
}));


// JSON 요청 처리
app.use(express.json());

// 조회수 저장 객체
let pageViews = {};

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

// favicon.ico 처리
app.get('/favicon.ico', (req, res) => {
    res.sendFile(path.join(__dirname, 'favicon.ico'));
});

// 서버 실행
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`서버 실행 중: http://localhost:${PORT}`);
});
