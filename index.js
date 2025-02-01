const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();

app.use(cors({
    origin: 'https://jypark8084.github.io',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

// MySQL 연결
const db = mysql.createConnection({
    host: 'localhost',  // 가상 머신 Ubuntu에서 실행 중이므로 localhost 사용
    user: 'root',       // MySQL 사용자 이름
    password: '비밀번호입력', // 설정한 MySQL 비밀번호 입력
    database: 'page_counter'
});

db.connect(err => {
    if (err) {
        console.error('MySQL 연결 오류:', err);
    } else {
        console.log('MySQL 연결 성공!');
    }
});

// 조회수 증가 API
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

// 조회수 가져오기 API
app.get('/api/views/:pageId', (req, res) => {
    const { pageId } = req.params;

    db.query('SELECT views FROM page_views WHERE page_id = ?', [pageId], (err, rows) => {
        if (err) {
            console.error('조회수 조회 오류:', err);
            return res.status(500).json({ error: '조회수 불러오기 실패' });
        }
        res.json({ pageId, views: rows.length > 0 ? rows[0].views : 0 });
    });
});

app.listen(3000, () => {
    console.log('서버 실행 중: http://localhost:3000');
});
