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

// [7] 연산자
// 1. 산술연산자 : + , - , * , / , %
// 컴퓨터는 백분율을 모른다
// 2. 연결연산자 : +
// 3. 비교연산자 : > , < , >= , <= , == , != , ===(값/타입)강력비교 , !==(값/타입)강력비교
// 4. 논리연산자 : && , || , !
// 5. 대입연산자 : =
//  * 복합대입연산자 : += , -= , *= , /= , %=   오른쪽항의 값을 왼쪽항에 연산후 대입
// 6. 증강연산자 : ++1 , --1
//  * ++변수명 : 선위증가 , 변수명++ : 후위증가 , --변수명 : 선위감소 , 변수명-- : 후위감소
// 7. 삼항연산자 : 조건 ? 참 : 거짓    ,    true 와 false 다른 값으로 표현하고 싶을 때
//  * 중첩 가능 =>  조건A ? 참A : 조건B ? 참B : 조건C ? 참C : 거짓
//  * 점수 >= 90 ? `합격` : `불합격`



// [지문1] prompt 함수로 국어 , 영어 , 수학 점수를 각 입력받아서 (각 변수에 저장하고) 총점 과 평균을 계산하여 console탭에 출력하시오.
// 1. 입력받기 
// 2. 변수에 저장
// 3. 변수 연산
// 4. 결과 출력

/*
let 국어점수 = parseInt(prompt(`국어 점수 입력`))
let 영어점수 = parseInt(prompt(`영어 점수 입력`))
let 수학점수 = parseInt(prompt(`수학 점수 입력`))
//  * prompt 함수는 숫자를 입력해도 문자형으로 반환함

let 총점 = 국어점수 + 영어점수 + 수학점수
let 평균 = 총점 / 3

console.log(총점)
console.log(평균)
console.log(`총점 : ${총점} 평균 : ${평균}`)
*/

// [지문2] prompt 함수로 반지름를 입력받아서 원넓이[반지름*반지름*3.14] 계산하여 console탭에 출력하시오.

/*
let 반지름 = parseInt(prompt(`반지름(cm) 입력`))
let 원넓이 = 반지름 * 반지름 * 3.14
console.log(`반지름 : ${반지름}cm \n원넓이 : ${원넓이}cm²`)
*/

// [지문3] prompt 함수로 두 실수를 입력받아서 앞 실수의 값이 뒤실수의 값의 비율% 계산하여 console탭에 출력하시오.

/*
let 실수1 = parseFloat(prompt(`첫번째 실수 값을 입력해주세요`))
let 실수2 = parseFloat(prompt(`두번째 실수 값을 입력해주세요`))
let 비율 = (실수1 / 실수2) * 100
console.log(`${실수1}의 값이 ${실수2} 의 값의 비율은 ${비율}% 입니다`)
*/

// [지문4] prompt 함수로 정수를 입력받아 입력받은 값이 홀수이면 true / 짝수이면 false 로 console탭에 출력하시오.

/*
let 정수1 = parseInt(prompt(`정수 값을 입력`))
let 홀짝 = 정수1 % 2
let 판단 = 홀짝 == 1 ? `홀수` : `짝수`
console.log(`입력한 정수 ${정수1} 는 ${판단} 입니다`)
*/

// [지문5] prompt 함수로 정수를 입력받아 입력받은 값이 7의 배수이면 true / 아니면 false 로 console탭에 출력하시오.

/*
let 정수2 = parseInt(prompt(`정수 값을 입력`))
let 결과1 = 정수2 % 7 == 0
console.log(`입력한 정수 ${정수2}는 7의 배수에 대한 결과로 ${결과1} 가 나왔습니다`)
*/

// [지문6] prompt 함수로 아이디 와 비밀번호를 입력받아서 (입력받은)아이디가 'admin' 이고 (입력받은)비밀번호가 1234 와 일치하면 true / 아니면 false 출력하시오.

/*
let 아이디 = prompt(`아이디 입력`)
let 비밀번호 = prompt(`비밀번호 입력`)
let 결과2 = 아이디 == `admin` && 비밀번호 == '1234'
console.log(`결과 : ${결과2}`)
*/

// [지문7] prompt 함수로 정수를 입력받아 입력받은 값이 홀수 이거나 7배수 이면 true / 아니면 false 로 console탭에 출력하시오.

/*
let 정수3 = parseInt(prompt(`정수 값을 입력`))
let 결과3 = 정수3 % 2 == 1 || 정수3 % 7 == 0
console.log(`결과 : ${결과3}`)
*/

// [지문8] 1차점수 와 2차점수 prompt함수로 각 입력받아서 총점이 150점이상이면 '합격' 아니면 '불합격' HTML의 <h3> 에 출력하시오.

/*
let 일차점수 = parseInt(prompt(`1차 점수 입력`))
let 이차점수 = parseInt(prompt(`2차 점수 입력`))
let 점수합 = 일차점수 + 이차점수
let 결과4 = 점수합 >= 150 ? `합격` : `불합격`
console.log(`결과 : ${결과4}`)
// document(HTML문서).querySelector(선택자요청).innerHTML(해당마크업사이)
document.querySelector(`h3`).innerHTML = `결과 : ${결과4}`
*/

// [지문9] 두 사람의 이름을 prompt함수로 각 입력받아서 만일 이름이 '유재석' 이면 뒤에 (방장) 이라고 이름 뒤에 붙이고 아니면 생략한다.  HTML의 <ol> 에 결과를 출력하시오.

/*
let 이름1 = prompt(`이름 입력`)
let 이름2 = prompt(`다른 이름 입력`)
let 방장1 = 이름1 == `유재석` ? 이름1 + `(방장)` : 이름1
let 방장2 = 이름2 == `유재석` ? 이름2 + `(방장)` : 이름2

document.querySelector(`ol`).innerHTML = `<li> ${방장1} </li> <li> ${방장2} </li>`
*/


// 증감연산자
let age = 30
console.log(`let age = 30`)
console.log(`console.log(age)`, age)

console.log(`console.log(age++)`, age++)  // 후위증가
console.log(`console.log(age)`, age)
console.log(`console.log(age)`, age)
console.log(`console.log(++age)`, ++age)  // 선위증가
console.log(`console.log(age)`, age)
console.log(`console.log(age)`, age)


age = 30
console.log(`age = 30`)
console.log(`console.log(age)`, age)

console.log(`console.log(--age)`, --age)  // 선위감소
console.log(`console.log(age)`, age)
console.log(`console.log(age)`, age)
console.log(`console.log(age--)`, age--)  // 후위감소
console.log(`console.log(age)`, age)
console.log(`console.log(age)`, age)


/* 변수에 1 증가 코드

age++               // 증감연산자

age = age + 1       // 산술연산자

age += 1            // 복합대입연산자 , += 대입하기 전에 오른쪽 항을 왼쪽에 연산 후 대입

*/