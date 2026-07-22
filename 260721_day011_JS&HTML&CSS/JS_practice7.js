/* 
    1. 프로토타입 : 만들고자 하는 화면 스케치 = 피그마
    2. 메모리설계 : 날짜, 항목, 금액   ,   배열 = 표  /  객체 = 행  /  속성 = 열
    3. 기능설계 : 등록, 출력
        1. 등록함수 : 등록 버튼 클릭하면 3개의 입력받은 값들을 가져와서 가계부목록(배열)에 객체로 저장
        2. 출력함수 : 페이지가 열리면/등록 성공하면 현재 가계부목록(배열)에 저장된 객체들을 테이블에 출력
    4. 
*/

document.querySelector('h1').style = 'text-align: center'


function 가계부작성(){
    let 날짜마크업 = document.querySelector('#date')
    let 항목마크업 = document.querySelector('#item')
    let 금액마크업 = document.querySelector('#money')

    let 날짜 = 날짜마크업.value
    let 항목 = 항목마크업.value
    let 금액 = 금액마크업.value

    document.querySelector('#list').innerHTML += `<tr><td>${날짜}</td><td>${항목}</td><td>${금액}</td></tr>`
}



// 풀이

let 가계부목록 = [ {날짜 : '2020-01-01' , 항목 : '교통비' , 금액 : 9000} , {날짜 : '2020-02-03' , 항목 : '점심식사' , 금액 : 12000}]

출력함수() // JS 실행되면 아무조건없이 함수 1번 실행


function 등록함수(){

    let 날짜 = document.querySelector('#date').value
    let 항목 = document.querySelector('#item').value
    let 금액 = document.querySelector('#money').value

    
    let 객체 = { 날짜 , 항목 , 금액 }   // 객체 생성시 속성명과 속성값의 변수명이 같으면 생략 가능

    가계부목록.push(객체)
    alert('등록성공')

    console.log(가계부목록)

    // 입력받은 값들 초기화
    document.querySelector('#date').value = ''
    document.querySelector('#item').value = ''
    document.querySelector('#money').value = ''
}


function 출력함수(){
    // 백엔드 통신
    // 1. 어디에
    let 테이블 = document.querySelector('table > tbody')
    // 2. 무엇을 - 배열내 모든 자료(객체)들을 HTML(문자) 형식으로
    let html = ""
        for(i=0 ; i<=가계부목록.length-1 ; i++){
            let 가계부 = 가계부목록[i]
            // 주의 : html   =  대입  (기존자료 사라짐)
            // 주의 : html  +=  누적  (기존자료 뒤에 연결)
            html += `<tr>
                        <td>${ 가계부.날짜 }</td>
                        <td>${ 가계부.항목 }</td>
                        <td>${ 가계부.금액.toLocaleString() }원</td>
                    </tr>`
        }
    // 3. 출력
    테이블.innerHTML = html

}

