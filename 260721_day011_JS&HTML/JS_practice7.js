

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