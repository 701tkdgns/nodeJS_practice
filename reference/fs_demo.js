const fs = require('fs');
const path = require('path');


// create folder
// path.join으로 폴더 주소 호출하여 test폴더 생성, 
// 두번째 위치 : 매개변수,
// 세번째 위치 : 콜백함수
// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
//     if (err) throw err;
//     console.log('Folder created...');
// });


// Create and write to file
// 두번째 위치 : 적고 싶은 내용 적기
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), "Hello World", (err) => {
//     if (err) throw err;
//     console.log('File written to...');

//     // File append 내용추가 메소드
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), "I love Node.js", (err) => {
//         if (err) throw err;
//         console.log('File written to...');
//     });

// });


// Read File
// 두번째 위치 : 표준규격 적기 : utf8 > 두 번째 칸에 내용없이 실행하면 실제 데이터 제공하지 않음
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });


// Rename File : 파일명 변경
// 첫번째 매개변수 위치에 있는 주소에 있는 파일을 두번째 매개변수에 적은 이름으로 변경
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloWorld.txt'), (err) => {
    if (err) throw err;
    console.log("file renamed...");
});
