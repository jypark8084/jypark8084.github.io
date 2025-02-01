const express = require('express');
const cors = require('cors');
const fs = require('fs'); // 파일 시스템 모듈 추가
const path = require('path');
const app = express();

const DATA_FILE = path.join(__dirname, 'data.json'); // 데이터 저장 파일

app.use(cors({
    origin: 'https://jypark8084.github.io',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

// 조회수 로드 함수
const loadPageViews = () => {
    try {
        if (fs.existsSync(DATA_FILE)) {
            const data = fs.readFileSync(DATA_FILE, 'utf8');
            return JSON.parse(data);
        }
    } catch (err) {
        console.error('파일 읽기 오류:', err);
    }
    return {}; // 파일이 없거나 오류 발생 시 초기값 반환
};

// 조회수 저장 함수
const savePageViews = (data) => {
    try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
    } catch (err) {
        console.error('파일 저장 오류:', err);
    }
};

let pageViews = loadPageViews(); // 서버 시작 시 기존 데이터 로드

app.get('/', (req, res) => {
    const pageId = 'home';
    pageViews[pageId] = (pageViews[pageId] || 0) + 1;
    savePageViews(pageViews); // 변경된 조회수 저장

    res.send(`서버 실행 중! 홈 페이지 조회수: ${pageViews[pageId]}`);
});

app.post('/api/views', (req, res) => {
    const { pageId } = req.body;
    if (!pageId) {
        return res.status(400).json({ error: 'pageId가 필요합니다.' });
    }

    pageViews[pageId] = (pageViews[pageId] || 0) + 1;
    savePageViews(pageViews); // 변경된 조회수 저장

    res.json({ pageId, views: pageViews[pageId] });
});

app.get('/api/views/:pageId', (req, res) => {
    const { pageId } = req.params;
    const views = pageViews[pageId] || 0;
    res.json({ pageId, views });
});

app.listen(3000, () => {
    console.log('서버 실행 중: http://localhost:3000');
});
