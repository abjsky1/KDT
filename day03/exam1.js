console.log("JS 실행")

// 한줄 주석 //
/* 여러줄 주석 */

// [1] 숫자 타입, number
// 1. 정수
console.log(10)
console.log(typeof 10) // typeof 자료, 해당 자료의 타입명 확인

// 2. 실수 : 컴퓨터는 0과 1만 사용하는 것, 어떻게 처리할까?
//           --> 부동소수점
console.log(3.14)
console.log(typeof 3.14)

// [2] 문자열타입
// 1. '작은따옴표' , "큰따옴표" , `백태그 or 백틱`
console.log('안녕')
console.log("안녕")
console.log(`안녕`)

// 2. 문자열 연결
console.log(`안녕`, `하세요`)    // , 기준으로 띄어써짐
console.log(`안녕` + `하세요`)   // + 기준으로 붙여써짐
console.log(`안녕 ${3}`)        // 문자열 템플릿 : 문자열 안에 코드 포함 가능 
console.log(`안녕` + 3)         // 문자열 + 숫자 => 문자열

let a = 10
console.log(`안녕` + a)         // 문자열 + (변수)숫자 => 문자열
console.log(`안녕 ${a}`)        // 문자열 템플릿은 '백틱으로 감싼 자료 안에 ${} 이용하여 코드 포함

// 3. 이스케이프(제어) 문자, \ 백슬래시
console.log(`\\안녕`)           // '\' 출력
console.log(`\n안녕`)           // '\n' 줄바꿈
console.log(`\`안녕`)           // 문자열 감싼 기호와 그 자체 기호 구분
console.log(`\t안녕`)           // '\t' 들여쓰기

// [3] 불리언(논리) 타입 , 논리연산자
console.log(true)               // 참 = 1
console.log(false)              // 거짓 = 0
console.log(10>3)               // 논리연산자의 반환값

// [4] undefined, null          // 컴퓨터는 0 , ' ' , null , undefined 모두 다르게 취급 
let 과일상자                    // 변수선언 : let 변수명
console.log(과일상자)           // undefined
let 채소상자 = null             // 변수선언 o , 초기화 o
console.log(채소상자)           // null

// [5] 배열 , 순서대로 나열
// [] 대관호 안에 ,(쉼표)를 이용하여 여러개 자료들을 *하나의 자료* 표현
// 인덱스(색인) : [] 해당 배열 안에 젖아된 자료들의 순서 번호 *0부터 시작*
let 계절 = [`봄`, `여름`, `가을`, `겨울`,[`봄여름`,`가을겨울`]]
console.log(계절)
console.log(계절[0])
console.log(계절[1])
console.log(계절[2])
console.log(계절[3])
console.log(계절[4])
// 배열은 중첩 가능
let 학기 = [[`1학년 1학기`, `1학년 2학기`],[`2학년 1학기`, `2학년 2학기`]]
console.log(학기)
console.log(학기[0])
console.log(학기[0][0])
console.log(학기[0][1])
console.log(학기[1])
console.log(학기[1][0])
console.log(학기[1][1])

console.log(계절[4][1])
//
let 요소값1 = 계절[1]
let 요소값2 = 요소값1[1]
console.log(요소값2)

// 2. 배열수정 , 변수명 = 새로운 배열
// * 변수(자료저장소) , 배열(자료)
let 배열변수 = [`김길리`, `홍길동`]
console.log(배열변수)
// 변수는 하나의 자료를 저장하기 때문에
// 새로운 대입이 들어오면 기존 대입은 사라짐
배열변수 = [`람보르길리` , '홍홍홍']
console.log(배열변수)

// 3. 배열 요소 추가
배열변수.push(`길리슈트`)       // 마지막 자료 뒤에 새로운 자료 추가
console.log(배열변수)

// 4. 배열 요소 삭제
배열변수.splice(0,1)        // 0번 인덱스(자리)에 자료(요소) 1개가 삭제됨
console.log(배열변수)

// 5. 배열 요소 찾기 ->  
// .indexOf( 찾을 값 )
// 만약 찾을 값이 존재하면 찾은 인덱스 반환, 없으면 -1 반환
let 찾은인덱스 = 배열변수.indexOf(`홍홍홍`)
console.log(찾은인덱스)             // 0번 인덱스에 찾을 `홍홍홍`이 존재한다
// .includes( 찾을 값 )
// 만약 찾을 값이 존재하면 true , 없으면 false 반환
let 존재여부 = 배열변수.includes(`길리슈트`)
console.log(존재여부) 

// [6] 타입 변환
// 3 (숫자타입) 과 `3` (문자타입) 은 다르다
// JS 만으로 개발하지 않음
// 실무 : JS, JAVA, PYTHON, DB, API 등 외부언어/자료 혼합
// 서로 다른 언어/자료들간의 통산 HTTP 통신한다.
// JSON, XML, CSV 타입 (문자열)
// 1. 자동 타입 변환
console.log(3 + 3.14)           // 정수 + 실수 => 실수
console.log('문자' + 40)        // 문자 + 숫자 => 문자
console.log(3 + true)           // 정수 + 논리 => 숫자  ,  true 는 연산할 때 1로 취급

// 2. 직접 타입 변환
console.log(Number(`10`))       // 문자열 `10` 을 숫자형 10 으로 변환
console.log(Number(`10A`))      // NaN , 10A 는 숫자형으로 변환 불가능 

console.log(parseInt(`10`))         // 문자열 `10` 을 정수형 10 으로 변환
console.log(parseFloat(`3.14`))     // 문자열 `3.14` 를 실수형 3.14 로 변환

console.log(String(10))         // 숫자형 10 을 문자형 `10` 으로 변환
console.log(10 + ``)            // 숫자형 10 을 문자형 `10` 으로 변환

// JAVA , PYTHON , API (외부자료) 들을 통신한 경우
// JSON.parse(통신결과물)
