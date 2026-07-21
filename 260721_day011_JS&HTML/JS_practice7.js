function 연락처등록(){
    let 이름마크업 = document.querySelector('#name')
    let 연락처마크업 = document.querySelector('#number')
    let 메모마크업 = document.querySelector('#memo')

    let 이름 = 이름마크업.value
    let 연락처 = 연락처마크업.value
    let 메모 = 메모마크업.value

    let 목록추가 = document.querySelector('#list').innerHTML
    목록추가 += `<tr><td>${이름}</td><td>${전화번호}</td><td>${메모}</td></tr>`
}