

function 게시물등록함수(){

    let 제목 = document.querySelector('#aa').value
    let 내용 = document.querySelector('#bb').value
    let 비밀번호 = document.querySelector('#cc').value


    if(제목 == ''){
        alert('제목을 입력하세요')
        return
    }
    if(내용.length == 0){
        alert('내용을 입력하세요')
        return
    }
    if(비밀번호.length < 4){
        alert('비밀번호가 짧습니다. 4글자 이상으로 설정하세요')
        document.querySelector('#cc').value = ''
        document.querySelector('#cc').placeholder = '4글자 이상으로 입력하세요'
        return
    }

    let 객체 = {제목 , 내용 , 비밀번호}

    let 배열 = localStorage.getItem('배열')

    if( 배열 == null ){ 배열 = [] }
    else{ 배열 = JSON.parse(배열)}

    let PK = 배열.length == 0 ? 1 : 배열[배열.length-1].PK + 1

    객체.PK = PK

    배열.push(객체)

    localStorage.setItem( '배열' , JSON.stringify(배열)) // 

    alert('게시물 작성 성공')

    location.href = `게시물목록.html`

    목록조회함수()

}



function 목록으로돌아가기(){
    location.href = '게시물목록.html'
}


