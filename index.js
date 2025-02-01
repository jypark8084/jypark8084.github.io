const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
require('dotenv').config();  // 환경 변수 로드

app.use(cors({
    origin: 'https://jypark8084.github.io',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

// MySQL 연결 설정 (CloudType 환경 변수 사용)
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect(err => {
    if (err) {
        console.error('MySQL 연결 오류:', err);
    } else {
        console.log('MySQL 연결 성공!');
    }
});

// API 라우트 설정 (조회수 증가 & 조회)
app.post('/api/views', (req, res) => {
    const { pageId } = req.body;
    if (!pageId) {
        return res.status(400).json({ error: 'pageId가 필요합니다.' });
    }

    const query = `
        INSERT INTO page_views (page_id, views)
        VALUES (?, 1) ON DUPLICATE KEY UPDATE views = views + 1
    `;

    db.query(query, [pageId], (err, result) => {
        if (err) {
            console.error('조회수 증가 오류:', err);
            return res.status(500).json({ error: '조회수 업데이트 실패' });
        }

        db.query('SELECT views FROM page_views WHERE page_id = ?', [pageId], (err, rows) => {
            if (err) {
                console.error('조회수 조회 오류:', err);
                return res.status(500).json({ error: '조회수 불러오기 실패' });
            }
            res.json({ pageId, views: rows[0].views });
        });
    });
});

app.listen(3000, () => {
    console.log('서버 실행 중');
});
