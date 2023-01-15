// console.log("hello world! ")
// // npm Node package mannage (js로 구현된 굉장한 모듈을 검색해서 쓰기~)

//figlet 실습
// var figlet = require('figlet');

// figlet('Hello World!!', function(err, data) {
//     if (err) {
//         console.log('Something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.log(data)
// });

//express
const express = require('express')
const app = express()
const port = 3000

// app.get(http메소드)('/'(라우팅), ()=>{}(콜백함수))
// cf) 콜백 함수 : 다른 코드의 인수로서 넘겨주는 실행가능한 코드 setTimeout(()=>{console.log("1초지남")}}, 1000)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// port 번호가 들어간다. 항상 listen 중!
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// 예제 브라우저를 이용한 GET방식
// GET /dog => {'sound':"멍멍"} json 데이터 보내기
// GET /cat => {'sound':"야옹"}
app.get('/dog', (req, res) => {
    // res.json({'sound': "멍멍"}) 과 같음
    res.send({'sound': "멍멍"})
  })
app.get('/cat', (req, res) => {
res.send({'sound':"야옹"})
})

// 파라미터 값으로 라우팅 할 수 없을까?
// GET 방식으로 정보를 전달하는 방법 2가지 (params, query)
// 1. params
app.get('/user/:id', (req, res) => {
    const q = req.params  // params에 :id가 들어간다
    console.log(q.id)
    res.send({'userid':q.id})
})
// 2. query 링크에 ?를 쓰고 전달해줌

// 나라 수도 API 만들기 capital에 따라서 다르게
// GET /FindCaptal/:country
app.get('/FindCaptal/:country', (req, res) =>{
    const p = req.params
    console.log(p) // { capital: 'cat' }
    console.log(p.name) // cat
    
    // 한 줄로 표현 가능
    const {name} = req.params 
    console.log(name)

    res.send({'animalname':p.name})
})