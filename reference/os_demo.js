const os = require('os');

// Platform : 운영체제 종류
console.log(os.platform());

// CPU Architect
console.log(os.arch());

//CPU Core Info : 내장된 CPU의 모든 코어 정보들 출력
console.log(os.cpus());

// Free memory
console.log(os.freemem());

// Total memory
console.log(os.totalmem());

// Home dir
console.log(os.homedir());

// Uptime
console.log(os.uptime());