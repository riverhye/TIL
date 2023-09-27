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
Object.is메서드
클래스
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

//예제 7-4
var x = 5,
result;
//변수는 하나의 값만 가지는데 왜 두 개의 값이지..?
console.log(x); // 5가 나온다. 그럼 result는 뭐지?
console.log(result); //undefined;

result = x++; //선할당 후증가
console.log(result, x); // 5,6 (즉 result엔 콘솔보다 +1인 6이 담긴다.)

result = ++x; //선증가 후할당
console.log(result,x); // 7,7

result = x--; //선할당 후감소
console.log(result, x); // 7,6

result = --x;
console.log(result, x); //5,5

// ex 7-6
var x = '1';
console.log(+x); //1

var x = true;
console.log(-x); // -1 부호를 반전한 값 반환. 피연산자 변경X

var x = false;
console.log(+x); //0

console.log(-'hi'); //NaN

// ex 7-8
'2'+4; //24
2+4; //6
1+false; //0
true-1; //0
1+null; //0
+undefined; //NaN

var str = 'Dear '
str += 'K'
console.log(str);

Object.is(-0, +0); //false
Object.is(NaN, NaN); //true

{
    var foo = 10;
}

//제어문
var x = 1;
if(x<5) {
    x++;
}

//함수 선언문
function sum(a,b) {
    return a+b;
}

var num = 2;
var kind;
if (num > 0) {
    kind='plus'
} else {
    kind='minus';
}
console.log(kind); 

//블록문이 한 줄이면 중괄호 생략 가능
if (num > 0) kind = 'plus';
else if (num < 0) kind = 'minus';
else kind=0;
console.log(kind);

//삼항 조건 연산자로
var kind = num ? ( num > 0 ? 'plus' : 'minus' ) : 'zero';
console.log(kind);

//for문은 매우 중요하다.
for(var i=0; i<2; i++) {
    console.log(i);
}

//i = iteration(반복)의 줄임말

//두 개의 주사위를 던졌을 때 합이 6이 되는 모든 경우의 수
for(var i=1; i<=6; i++) {
    for(var j=1; j<=6; j++) {
        if((i+j) == 6) { //괄호는 없어도 된다.
            console.log(`[${i}, ${j}]`);
        }
    }
}

foo: {
    console.log(1);
    break foo;
}

outer: for(var i=0; i<3; i++) {
	for (var j=0; j<3; j++) {
    if(i+j===3) break outer;
      console.log(`${i},${j}`);
    }
}

//문자열에서 특정 문자 개수 세기
var string='Nice to meet you!';
var search='e';
var count=0;

for(var i=0; i<=string.length; i++) {
    if(string[i] == search) {
        count++;
    }
}

for(var i=0; i<=string.length; i++) {
    if(string[i] !== search) continue;
    count++;
}
console.log(count);

var a = 10;
var str = a.toString();
console.log(typeof str, str);
console.log(typeof a, a); 

var a = 10;
var str = a+'';
console.log(typeof str, str);
console.log(typeof a, a); 

1-'1'; //0
1*'9'; //9

//+단항 연산자는 문자열과 숫자를 문자열로 반환.
1+'1'; //11

//NaN
1/'one'
+[2,3];
+(function(){});
+undefined;

//0
+'';
+[];
+null;
+false;


//1
+true;

if(!false) console.log(false+' is falsy value');

Boolean('hello');
'cat' && 'dog';

