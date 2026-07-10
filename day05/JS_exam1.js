// 반복문 : for 문
// for( 초기값; 조건식; 증감식 ){}

// 안녕하세요 3번 출력
console.log(`안녕하세요`)
console.log(`안녕하세요`)
console.log(`안녕하세요`)
// or
// 어디부터(초기값) 어디까지(조건식) 증감하면서 무엇을(실행문) 반복
for( let 반복수 = 1 ; 반복수 <= 3 ; 반복수++ ){console.log(`안녕하세요`)}


// 1~5 까지 출력
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
// or 
// 어디부터(초기값 = 1) 어디까지(조건식 = 1씩 증가 == ++) 증감하면서 무엇을(실행문 = 반복처리할코드 = console.log(``)) 반복
for( let 수 = 1 ; 수 <= 5 ; 수++ ){ console.log( 수 ) }


// 1 부터 5 까지 총합계
let 합 = 0
for( let 숫 = 1 ; 숫 <= 5 ; 숫++ ){ 합 = 합 + 숫 ; console.log(합)}

// 교수님 진행방식
let 총합계 = 1
for( let 자 = 2 ; 자 <= 5 ; 자++ ){ 총합계 = 총합계 + 자}
console.log(총합계)



// 구구단 2단
let a = 2
for( let q = 1 ; q <= 9 ; q++){console.log(`${a} * ${q} = ${a*q}`)}

// 구구단 (for문의 중첩)
// 단 먼저 
console.log(`------------구구단 시작------------`)
for( let w = 2 ; w <= 9 ; w++){for( let q = 1 ; q <= 9 ; q++){console.log(`${w} * ${q} = ${w*q}`)}}



// 3개의 문자열 입력받아 배열에 저장

let 배열 = []
// let 입력 = prompt()
// 배열.push(입력)

for( let 반복수 = 1 ; 반복수 <= 3 ; 반복수++ ){let 입력 = prompt(); 배열.push(입력); console.log(배열)}




















