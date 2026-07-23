

목록조회함수()

function 목록조회함수(){

    let html = ''

    let 배열 = localStorage.getItem('배열')

    if( 배열 == null ){ 배열 = [] }
    else{ 배열 = JSON.parse(배열) }

    for( i = 0 ; i <= 배열.length-1 ; i++ ){
        
        html += `<tr>
                    <td>${배열[i].PK}</td>
                    <td><a href="게시물.html?PK=${배열[i].PK}">${배열[i].제목}</a></td>
                <td>`
    }
        
    document.querySelector('#게시물목록조회').innerHTML = html    

}


function 게시물작성창이동(){
    location.href = '게시물작성.html'
}



