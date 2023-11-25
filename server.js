const express = require('express')
const app = express()

app.use('/img', express.static("img"))
app.use('/css', express.static("css"))

app.listen(8080, () => {
    console.log('http://localhost:8080 에서 서버 실행중')
})

app.get('/', (요청, 응답) => {
    응답.sendFile(__dirname + '/index.html')
}) 