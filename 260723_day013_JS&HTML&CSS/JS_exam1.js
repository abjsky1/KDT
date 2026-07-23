

// 백앤드 면접 질문 : 
//    자바 구동원리를 아는가, 
//    파이썬 구동원리를 아는가, 
//    컴파일 돌아가는 구동원리, 
//    브라우저도 엔진이 있기 때문에 어떻게 돌아가는지,
// 프론트앤드 - 포트폴리오

/*
    - 브라우저(크롬/엣지/사파리)에 의존하여 HTML 렌더링
    - HTML 안에 JS/CSS 도 포함하여 같이 렌더링 된다
    - 브라우저의 F5(새로고침) 하면 재요청(렌더링) 하므로 JS가 초기화 된다.

    1] JS 변수들은 브라우저에서 F5(새로고침) 초기화 된다.
    2] HTML 안에 포함된 JS/CSS 파일들은 F12(개발자도구) [Sources]/[Console] 코드 확인
        -> 하나의 html 에 여러개 JS/CSS 파일 가능하다
    3] 서로 다른 .js 파일에서 동일한 HTML에 포함되면 코드 공유 가능
        -> test.js 에서 선언된 코드가 exam1.js 에서 호출(사용) 가능
*/
console.log(x)

/*

브라우저에 저장 기능 , 개발자도구[F12]  =>  [Application]

    웹 스토리지
        [1] 세션스토리지 : 세션 저장소
            - 모든 브라우저가 종료되면 자동 삭제
            - 서로 다른 브라우저/탭 자료 공유 안 됨

        [2] 로컬스토리지 : 로컬 저장소
            - 모든 브라우저가 종료돼도 저장 유지
            - 서로 다른 브라우저/탭 자료 공유 됨 (단, 동일한 도메인 경우)
              예) 자동 로그인 / 로그인 유지 

        * 노출에 대해 위험성이 있는 경우 암호화를 통해 자료 인코딩한다

*/
//  [1] 웹 스토리지 객체 호출
    console.log( localStorage )
    console.log( sessionStorage )

//  [2] 웹 스토리지 객체 내 자료 추가  .setItem( '속성명' , '속성값')  =  .setItem( 'key' , 'value')
    sessionStorage.setItem( 'name' , '김길리')
//  =>  개발자도구[F12]  =>  [Application]  =>  [왼쪽메뉴]  =>  세션스토리지  =>  도메인(주소)
    localStorage.setItem( 'age' , 25 )

//  [3] 웹 스토리지 객체 내 자료 호출  .getItem( 'key' )
    let name불러오기 = sessionStorage.getItem( 'name' )
    console.log(name불러오기)

    let age불러오기 = localStorage.getItem( 'age' )
    console.log(age불러오기)

//  [4] 웹 스토리지 객체 내 자료 삭제  .removeItem( 'key' )  .clear()
    sessionStorage.removeItem( 'name' ) // 특정한 key/value 삭제
    localStorage.clear()                // 모든 key 삭제

//  [*] 웹 스토리지도 문자열만 지원 *타입변환 필요*
//  [5] JSON(자바스크립트객체)

//  JSON.stringify( 객체 ) : 객체 타입  =>  문자 타입 변환
    sessionStorage.setItem( '회원객체' , { 'name' : '김길리' , 'age' : 25 } )  // object 해석 불가
    
    sessionStorage.setItem( '회원객체' , JSON.stringify( { 'name' : '김길리' , 'age' : 25 } ) )

//  JSON.parse( 문자열 ) : 문자 타입  =>  객체 타입 변환
    let 잘못된회원객체불러오기 = sessionStorage.getItem( '회원객체' )
    console.log( 잘못된회원객체불러오기 )   // 문자열로 불러옴

    let 회원객체불러오기 = JSON.parse( sessionStorage.getItem( '회원객체' ) )
    console.log( 회원객체불러오기 )   // 객체형태로 불러옴

//  JS 는 브라우저가 F5(새로고침) 메모리가 초기화 된다
//  그래서 백엔드 필요함 or 브라우저스토리지 사용














