const arr = [1,2,3];
arr.forEach(console.log);


//예제 4-5
console.log(score); //undefined
var score;


//예제 4-10
console.log(score2); //undefined

score2=80; // 재할당
var score2; //제일 먼저 실행

console.log(score2); //80


//예제 6
console.log(1 === 1.0); //모든 숫자는 실수로 처리

//NaN 대소문자 주의
// var x = nan;

/* ES6추가
변수 : let, const
타입 - 문자열 : 백틱, 템플릿 리터럴
    템플릿 리터럴은 백틱으로 감싸서 표현하니까 둘이 같이 탄생한 게 자연스럽다.
*/

var template = `<ul>
	<li><a href="#">Home</a></li>
</ul>`
console.log(template);

var first = 'Yun-hye';
var last = 'Park'

console.log('My name is ' + first + ' ' + last + '.');
console.log(`My name is ${first} ${last}.`);

//동적 타입 언어
var val;

val = 1;
console.log(typeof val);

val = 'this is a string';
console.log(typeof val);

val = [];
console.log(typeof val);

val = function () {};
console.log(typeof val);