/*
    웹스토리지 : 브라우저 저장소 *문자열 타입*

        1. 세션스토리지 : sessionStorage
        2. 로컬스토리지 : localStorage

        .setItem( 'key' , value )   : 스토리지에 자료 저장
        .getItem( 'key' )           : 스토리지에 자료 호출
        .remove( 'key' )            : 스토리지에 자료 삭제

        3. JSON(자바스크립트객체) 형변환

            JSON    =>   String : JSON.stingify( 객체 )
            String  =>   JSON   : JSON.parse( 문자열 )
        


    쿼리스트링 : HTTP 웹주소(경로 / URL)에 매개변수

        1. 목적 : 페이지 이동간에 자료 전달
        
            URL ? 매개변수명 = 값 & 매개변수명 = 값
            new URLSearchParams( location.search ).get( '매개변수명' ) : URL 에 존재하는 매개변수값 호출
        
    
    페이지전환

        1. HTML : <a href="URL"> 링크1 </a>
            - <a href="URL?PK=${}"> 링크1 </a>

        2. JS   : location.href = "URL"


    인터벌 : 특정한 주기(시간)에 따른 함수 반복 실행

        1. 사용처 : 타이머(시계, 인증시간 등) , CSS( 이미지슬라이드 ) 등

            setInterval( 함수명 , 밀리초 )  :  밀리초(1/1000) 마다 지정한 함수가 실행
            clearInterval( 인터벌객체 )     :  인터벌 종료 / 삭제

        


*/