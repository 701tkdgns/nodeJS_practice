const url = require('url');
const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain) 포트번호 까지 출력
console.log(myUrl.host);

//Hostname : 포트를 제외한 순수 도메인만
console.log(myUrl.hostname);

//Pathname : URL주소에서 파일의 경로 출력
console.log(myUrl.pathname);

//Serialized query : html 주소 뒤에 있는 쿼리 내용 추출 
console.log(myUrl.search);

// Params object
console.log(myUrl.searchParams);

// Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop through params : 객체로 출력하는 것이 아닌, key, value에 접근하여 출력
myUrl.searchParams.forEach((value, name)=> console.log(`${name}: ${value}`));

