const express = require('express');
const app = express();

let views = 0;

// 조회수 API
app.get('/api/views', (req, res) => {
    views++;
    res.json({ views });
});

// 기본 루트 경로
app.get('/', (req, res) => {
    res.send('<h1>Render에서 실행 중!</h1><p>현재 조회수: ' + views + '</p>');
});

// 서버 실행
const PORT = process.env.PORT || 3000; // Render는 PORT 환경 변수를 사용
app.listen(PORT, () => {
    console.log(`서버가 실행 중입니다: http://localhost:${PORT}`);
});
