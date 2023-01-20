// 코드상의 줄바꿈: 줄바꿈을 원하는 줄 끝에 \을 붙여준다.
// 구현상의 줄바꿈: \n 적어준다.
var name = '김성언입니다';
var letter = '안녕하세요 저는 ' + name + '\n\n~~~~~~~~~~~ 제 이름은 ' + name +'.';
console.log(letter);

// 이 과정 좀 불편해 -> template literal
// 숫자를 표현하는 literal var a = 1;
// 문자를 표현하는 literal var b = '1';

// 물결 자판 아래에 있는 ₩ ₩로 가능 변수는 ${}로 감싸준다 
// ${1+2} 하면 3으로 대체된다.
var letter = `안녕하세요 저는 ${name} 

~~~~~~~~~~~ 제 이름은  ${name} .`;

console.log(letter);