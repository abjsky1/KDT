

function 삭제함수(){

    let 배열 = localStorage.getItem('배열')

    if( 배열 == null ){ 배열 = [] }
    else{ 배열 = JSON.parse(배열)}

    for( i=0 ; i<=배열.length-1 ; i++){

        if(new URLSearchParams(location.search).get('PK') == 배열[i].PK){

            let PW = prompt('비밀번호를 입력하세요')

            if(PW == 배열[i].비밀번호){

                배열.splice( i , 1 )

                break

            }
            else{

                alert('비밀번호가 틀렸습니다.')

                return
            }
        }
    }

    localStorage.setItem( '배열' , JSON.stringify(배열)) // 

    alert('게시물 삭제 완료')

    // location.href = ''

    location.href = '게시물목록.html'
}



게시물조회함수()

function 게시물조회함수(){

    let 게시물제목 = ''
    let 게시물내용 = ''

    let 배열 = localStorage.getItem('배열')

    if( 배열 == null ){ 배열 = [] }
    else{ 배열 = JSON.parse(배열)}

    for( i = 0 ; i <= 배열.length-1 ; i++){
        
        if(배열[i].PK == new URLSearchParams(location.search).get('PK')){

        
        게시물제목 += `${배열[i].제목}`

        게시물내용 += `${배열[i].내용}`
        }    
    }
        
    document.querySelector('#게시물제목').innerHTML = 게시물제목 

    document.querySelector('#게시물내용').innerHTML = 게시물내용


}



function 게시물작성창이동(){
    location.href = '게시물작성.html'
}

function 목록으로돌아가기(){
    location.href = '게시물목록.html'
}