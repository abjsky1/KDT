function 등록함수(){
    
    const A = document.querySelector('#a').value
    const B = document.querySelector('#b').value
    const C = document.querySelector('#c').value
    
    const object = { '제목' : A , '내용' : B , '비밀번호' : C }

    let List = localStorage.getItem('List')

    if(List == null){ List = [] }
    else{List = JSON.parse(List)}

    object.PK = List.length == 0 ? 1 : List[List.length-1].PK +1

    List.push(object)

    localStorage.setItem('List' , JSON.stringify(List))

    alert('게시물 작성 성공')

    location.href = 'list.html'

}


조회함수()

function 조회함수(){

    let List = localStorage.getItem('List')
   
    if(List==null){List = []}
    else{List = JSON.parse(List)}

    let html = ''

    for(i=0;i<=List.length-1;i++){
        
        html += `<tr>
                    <td>${List[i].PK}</td>
                    <td>${List[i].제목}</td>
                </tr>`
    }

    document.querySelector('#tbody').innerHTML = html

}
console.log('1', new URLSearchParams(location.search))
console.log('2', new URLSearchParams(location.search).get('PK'))
console.log()
console.log()



function 삭제함수(){

    const url = new URLSearchParams(location.search)

    const selectPK = url.get('PK')

    let List = localStorage.getItem('List')

    if(List==null){List = []}
    else{ List = JSON.parse(localStorage.getItem(List))}

    for(i=0;i<=List.length-1;i++){
        if(List[i].PK == 1){}
    }
    

}










