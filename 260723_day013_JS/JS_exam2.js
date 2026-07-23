/*
    QueryString : URL 웹 주소 상에 매개변수 사용
        - 페이지 이동 간에 매개변수 값 전달  ** 주로 자료 식별자 or CSS 식별자 **
        - URL ? 매개변수명=값 & 매개변수=값
        - new URLSearchParams(location.href) : 현재 주소상 위치 반환

*/
//  [1] JS 에서 URL 정보 객체 호출
    new URLSearchParams(location.href)
    console.log(new URLSearchParams(location.href))

    // http://127.0.0.1:5500/260723_day013_JS&HTML&CSS/JS_exam2.html?name=김길리
    let url = new URLSearchParams(location.search)
    console.log(url)
    let name1 = url.get('name')
    console.log(name1)

//  [2] 페이지 이동하는 방법
//      1) <a href="URL?매개변수=값">링크0</a>    
        let pcode = url.get('pcode')
        let page = url.get('page')
        console.log(pcode, page)

//      2) location.href = "URL?매개변수=값"
        function 링크함수(){
            location.href = "JS_exam2.html?name=람보르길리"
        }


/*
    인터벌 : 특정한 주기에 따라 코드를 반복 실행    
        - 사용법 :
            인터벌객체 = setInterval( 함수명 , 주기 )
                -> 함수명에 ( ) 소괄호 넣지 말기
                -> 밀리초(1/1000) : 1000 => 1초
            ClearInterval( 인터벌객체)    
*/
    let value = 0
    function 증가함수(){
        value += 1
        document.querySelector('#box1').innerHTML = value

    }
    setInterval( 증가함수 , 1000 )

    function 시계함수(){
        // 현재 날짜/시간 가져오기
        let today = new Date() 
        // 시 분 초 가져오기
        let hour = today.getHours() < 10 ? "0"+today.getHours() : today.getHours()
        let minute = today.getMinutes() < 10 ? "0"+today.getMinutes() : today.getMinutes()
        let second = today.getSeconds() < 10 ? "0"+today.getSeconds() : today.getSeconds()
        // 시 분 초 조합
        let time = `${hour} : ${minute} : ${second}`
        
        document.querySelector('#box2').innerHTML = time

    }
    setInterval( 시계함수 , 1000 )



    let time = 0
    let timeInter = 0

    function 타이머시작(){
        timeInter = setInterval(타이머함수 , 1000)
    }

    function 타이머함수(){
        time++
        document.querySelector('#box3').innerHTML = time
    }

    function 타이머종료(){
        clearInterval( timeInter )
    }








