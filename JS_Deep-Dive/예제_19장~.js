const person = {
    name: 'Kate',
    address: 'Seoul'
};

//for in
/*  객체의 프로토타입 체인 상 존재하는 모든 프로토타입 프로퍼티 중에서
프로퍼티 어트리뷰트 [[Enumerable]] 값이 true인 프로퍼티만 순회하며 열거 */

for ( const key in person) {
    console.log(key + ': ' + person[key]);
}
/*  객체의 프로퍼티 개수만큼 순회 : name, address -> 2번 순회
    for in문에서 선언한 변수에 프로퍼티 키 할당 : 변수 key에 name, address 할당
    코드 블록 실행
    */

// for in문은 순회 대상 객체(person) 자신의 프로퍼티 + 상속받은 프로토타입의 프로퍼티 열거하므로
// Object.prototype.hasOwnProperty 메서드를 사용해 자신의 프로퍼티인지 확인하는 처리 필요
// 배열에는 일반 for문, for OfflineAudioCompletionEvent, Array.prototype.forEach 메서드 사용 권장!
// = > Object.key/values/entries 메서드 사용 권장


//non-strict mode
function foo() {
    x = 10;
}
foo();

console.log(x); //10

//strict mode
(function (a) {
    'use strict';
    a=2;
    console.log(arguments);
}(1));