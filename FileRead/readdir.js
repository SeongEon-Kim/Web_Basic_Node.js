var testFolder = '../Data';
var fs = require('fs');

fs.readdir(testFolder, function(error, filelist){
    // 특정 폴더 파일의 목로을 list로 출력
    console.log(filelist);
})