// express 프레임워크 객체 생성
const express = require('express');

// express의 새 인스턴스 할당
const app = express();

// path 사용
const path = require('path');


// app.get('/', function (req, res) {
//     res.send('hello NodeJs');
// })

// 해당 포트로 서버를 시작하고 들어오는 요청 수신
app.listen(process.env.PORT || 7000, () => console.log('Server running...'));

// 정적 파일 사용
app.use('/static',
    express.static(path.resolve(__dirname, 'public', 'static')));


//어떤 요청이 들어오든 다 index.html을 전송한다
app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
// })

// app.get('/detail', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
// })

// app.get('/detail:id', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
// })