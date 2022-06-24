// const Person = require('./person');

// const person1 = new Person('Park sanghoon', 30);

// person1.greeting();


/*--------------------------------------------------------------------------*/


// const Logger = require('./logger');

// const logger = new Logger();
// logger.on('message', data => console.log('Called Listener', data));


// // 리스터가 호출될때마다 메시지 내용이 바뀌는 것 확인
// logger.log('Hello World');
// logger.log('Hi');
// logger.log('Hello');


// npm express 프레임워크를 이용하면 쉽게 콜백함수를 만들 수 있는 것 알아두기
// app.get('/about', ) 양식

/*--------------------------------------------------------------------------*/

// // express 없이 콜백 함수 구현

// const http = require('http');
// const path = require('path');
// const fs = require('fs');

// //req : request
// // 만약 end 내용을 고칠려고 하면, 고치고 난 다음에 서버를 다시 실행해야만
// // 수정했던 부분이 적용이 된다.

// // 하지만, nodemon을 깔고, json 패키지에서 scripts를 수정했다면
// // nodemon이 실시간으로 변동내역에 대해 감시하므로 수정하면 즉시 적용할 수 있다.

// // 대부분의 경우 html을 실행하는 형식으로 구현한다.
// // 그렇기 때문에 결과(res)에 end에 내용을 적는 형식 아닌 html을 로드하는 방식을 익히는게 중요하다    
// const server = http.createServer((req, res) => {
//     // console.log(req.url);

//     if(req.url === '/'){
//         fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content)=>{
//             if(err) throw err;
//             res.writeHead(200, {'Content-Type': 'text/html'});
//             res.end(content);
//         });
//     }

//     if(req.url === '/about'){
//         fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content)=>{
//             if(err) throw err;
//             res.writeHead(200, {'Content-Type': 'text/html'});
//             res.end(content);
//         });
//     }

//     // Rest API의 경우 DB를 쓰는 것이 일반적
//     if(req.url === '/api/users'){
//         const users = [
//             {
//                 name : 'Bob Smith',
//                 age:40,
//             },
//             {
//                 name : 'Jhon doe',
//                 age: 30
//             }
//         ];
//         res.writeHead(200, {'Content-Type': 'text/html'});
        
//         // 위에 usrers 를 json 객체로 변환
//         res.end(JSON.stringify(users));
//     }
// });

// // 포트번호의 경우 모든 컴퓨터가 같은 포트 번호를 쓸 수 있는 것이 아니기 때문에, 환경변수에 넣어서 이용한다
// const PORT = process.env.PORT || 3000;

// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


/*--------------------------------------------------------------------------*/

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // Build file path : 동적 경로 생성
    let filePath = path.join(__dirname, 'public', req.url === '/'? 'index.html': req.url);

    // console.log(file.path);
    // res.end();

    
    // Exetnsion of file
    let extname = path.extname(filePath);

    // Initial content type
    let contentType = 'text/html';

    // Check ext and set content type
    switch(extname){
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // Read File
    // (err, content) 부분은 콜백 부분
    fs.readFile(filePath, (err, content) => {
        if(err) {
            if(err.code == 'ENOENT'){
                // Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html', (err, content) => {
                    res.writeHead(200, {'Content-Type':'text/html'});
                    res.end(content, 'utf8');
                }))
            } else{
                // Some server err: 500
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`)
            }
        } else{
            //Success
            res.writeHead(200, {'Content-Type':contentType});
            res.end(content,'utf8')
        }
    });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// .gitignore은 깃허브에 올리고 싶지 않은 내용들을 적어두면 레포지토리에 올라가지 않음