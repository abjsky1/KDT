

게시물수정창조회함수()

function 게시물수정창조회함수(){

    let 배열 = localStorage.getItem('배열')

    if(배열 == null){배열 = []}
    else{배열 = JSON.parse(배열)}

    for(i=0 ; i<=배열.length-1 ; i++){

        if(배열[i].PK == new URLSearchParams(location.search).get('PK')){

            document.querySelector('#제목수정').value = 배열[i].제목

            document.querySelector('#내용수정').value = 배열[i].내용

        }
    }
}







function 수정완료(){

    let 제목수정 = document.querySelector('#제목수정').value
    let 내용수정 = document.querySelector('#내용수정').value


    if(제목수정 == ''){
        alert('제목을 입력하세요')
        return
    }
    if(내용수정.length == 0){
        alert('내용을 입력하세요')
        return
    }

    let 배열 = localStorage.getItem('배열')

    if(배열 == null){배열 = []}
    else{배열 = JSON.parse(배열)}

    for(i=0 ; i<=배열.length-1 ; i++){

        if(배열[i].PK == new URLSearchParams(location.search).get('PK')){

            배열[i].제목 = document.querySelector('#제목수정').value

            배열[i].내용 = document.querySelector('#내용수정').value

            localStorage.setItem( '배열' , JSON.stringify(배열))

            alert('게시물 수정 완료')

            location.href = `게시물.html?PK=${배열[i].PK}`

        }

    }

}





function 수정취소(){

    let 배열 = localStorage.getItem('배열')

    if(배열 == null){배열 = []}
    else{배열 = JSON.parse(배열)}

    for(i=0 ; i<=배열.length-1 ; i++){

        if(배열[i].PK == new URLSearchParams(location.search).get('PK')){

            location.href = `게시물.html?PK=${배열[i].PK}`

        }

    }

}