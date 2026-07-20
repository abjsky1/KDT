/*
함수(function) : 미리 정의된 수(코드) , 상자 안에 들어오는 수(코드), 함(상자) 수(숫자/코드) 
    - 목적 : 1. 재사용  2. 매개변수  에 따른 서로 다른 결과물
    * 매개변수(parameter) : 함수를 호출하는 인자와 함수를 실행하는 변수를 연결
    * 변수 : 하나의 값(자료) 저장
    * 인자값 : 함수에 전달하는 값
    - 종류 : 1. 미리 만들어진 함수(라이브러리)  2. 내가 만든 함수(정의함수)
*/



// [1] 사용법
// 1. 미리 만들어진 함수 : 라이브러리 , 각 프로그래밍 회사에서 제공
console.log(`함수1`)
// document.querySelector('body').innerHTML = '함수2'

// 2. 내가 만든 함수 : 정의함수 , 개발자(내가) 함수 직접 정의
//   * 함수도 자료타입
//
// * 함수 정의
// 1) function  2) 함수명  3) ( 매개변수1 , 매개변수2 )  4) { 실행코드; }
//  function func1( 매개변수1 ){ 실행코드; }
//
// * 함수 호출
// 5) 호출할 함수명  6) ( 인자값 )
//  func1( 인자값 );
//
// 입자값이 매개변수1 에 저장된다.

function func0( 매개변수1 ){ console.log( 매개변수1 ) }

func0( 3 ) // 3



// [2] 예시 1
// 믹서기 함수는 과일을 매개변수로 받아서 과일주스로 반환함
let 사과 = '사과'
let 포도 = '포도'

function 믹서기함수( 과일 ){
    return 과일 + `주스` // 함수가 종료되면서 반환하는 값
}
let 컵1 = 믹서기함수(사과) // 믹서기 함수에 사과를 인자값으로 전달하여 사과주스 반환, 컵1 에 저장
let 컵2 = 믹서기함수(포도) // 믹서기 함수에 포도를 인자값으로 전달하여 포도주스 반환, 컵2 에 저장

console.log( 컵1 , 컵2 )



// [3] 예시 2
// 수학공식함수는 x 와 y 매개변수로 받아서
function 수학공식함수(x , y){
    a = x + y
    return a
}
let 결과1 = 수학공식함수( 3 , 5 )   // 3 + 5 = 8
let 결과2 = 수학공식함수( 3 , -2 )  // 3 + (-2) = 1

console.log( 결과1 , 결과2 )



// [4]
// 1. 매개변수 X , 반환값 X
function func1( ){
    console.log(`func1 exe`)
    y = 3 + 2
}
func1( )

// 2. 매개변수 O , 반환값 X
// ex) console.log( )
function func2( x ){
    console.log(`func2 exe`)
    y = x + 2
}
func2( 10 )

// 3. 매개변수 O , 반환값 O
// ex) prompt( )
function func3( x ){
    console.log(`func3 exe`)
    y = x + 2
    return y
}
let result3 = func3( 10 ) // 10 + 2 = 12

// 4. 매개변수 X , 반환값 O
// ex) 추후에 다양한 함수들이 사용되는데 내가 만든 함수가 아니므로 무엇을 반환하는지 [ 공문서 / AI / 구글 / Ctrl + 함수 클릭 ] 확인할 것
function func4(  ){
    console.log(`func4 exe`)
    y = 3 + 2
    return y
}
let result4 = func4( ) // 5



// [5] 
// 1. 지역변수 : if / for / function  문법 { } 에서 선언( let / const )된 변수 
let 전역변수 = `대한민국`  // 1) 해당 변수는 어떠한 { } 에 포함되는 선언이 아니므로 모든 곳에서 호출 가능
if(true){ 

    let 지역변수1 = `서울시`  // 2) 해당 변수는 if{ } 에서 선언된 변수이므로 그 안에서만 사용 가능

    console.log( 전역변수 )
    console.log( 지역변수1 )
//  console.log( 지역변수2 )  ==>  error 
//  console.log( 지역변수3 )  ==>  error

    for( i = 1 ; i <= 1 ;  i++ ){
        let 지역변수2 = `영등포구`  // 3) 해당 변수는 for{ } 에서 선언된 변수이므로 그 안에서만 사용 가능

        console.log( 전역변수 )
        console.log( 지역변수1 )
        console.log( 지역변수2 )
//      console.log( 지역변수3 )  ==>  error
    }

    if( true ){
        let 지역변수3 = `용산구`  // 4) 해당 변수는 if{ } 에서 선언된 변수이므로 그 안에서만 사용 가능
        console.log( 전역변수 )
        console.log( 지역변수1 )
//      console.log( 지역변수2 )  ==>  error
        console.log( 지역변수3 )
    }

} 

console.log( 전역변수 )                 /*
console.log( 지역변수1 )  ==>  error
console.log( 지역변수2 )  ==>  error 
console.log( 지역변수3 )  ==>  error    */


// 2. 지역변수 : if , for 와 다르게 function 은 return 반환 키워드 이용한 지역변수의 값 이동
function func5( ){
    let 지역변수4 = `수원시`;
    return 지역변수4;
}
let 전역변수2 = func5( );

console.log(전역변수2)


// 3. HTML 에서 함수 호출 방법
function func6( ){ console.log(`func6 exe`)}
// 3-1 : JS 에서 함수 호출 방법 : 함수명( 매개변수 )
// 3-2 : HTML 에서 함수 호출 방법 : <마크업 onClick = "JS함수명()" />