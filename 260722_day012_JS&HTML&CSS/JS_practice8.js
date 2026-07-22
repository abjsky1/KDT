/*

    1. 기획서/요구사항 따른 프로토타입
    2. 메모리 설계
        1) 저장해야 할 것들을 모두 찾아보기 , 이미지/카테고리명/상품명/가격/등록일
        2) 속성들 간의 종속관계 파악 , 테이블 나누기
        3) 쪼개진 테이블 간 연관 만들기 - *관계형데이터베이스*
            3-1) 테이블당 식별자(PREMARY KEY = PK) 1개 이상 권장
            3-2) 상하관계 파악해서 식별자(코드) 하위요소에 저장한다. (FK : 참조키/외래키) , *교집합*
        4) JS(JSON) 로 표현 , 표 = 배열 / 객체 = 행 / 열 = 속성
    3. 기능 설계 : CRUD , RESTAPI
        등록(CREATE) : 게시물쓰기 , 회원가입 , 수강신청 등
            실행조건 : 등록버튼 클릭했을 때 , 함수명: productAdd , 매개변수 : x , 반환값 : x

        조회(READ)   : 게시물전체조회 , 마이페이지 등
            실행조건 : JS 열릴 때/최신화(등록/수정/삭제) , 함수명: productPrint , 매개변수 : x , 반환값 : x

        수정(UPDATE) : 게시물수정 , 내정보수정 , 수강신청정정 등
            실행조건 : 수정버튼 클릭했을 때 , 함수명: productUpdate , 매개변수 : 수정할제품코드(누구를/대상) , 반환값 : x

        삭제(DELETE) : 게시물삭제 , 회원탈퇴 등
            실행조건 : 삭제버튼 클릭했을 때 , 함수명: productDelete , 매개변수 : 삭제할제품코드(누구를/대상) , 반환값 : x


*/

let categoryList = [ { 'ccode' : 1 , 'cname' : '음료' } , { 'ccode' : 2 , 'cname' : '과자'} ]
let productList = [
    { 'pcode' : 1 , 'pname' : '콜라' , 'pprice' : 1000 , 'pimg' : 'https://placehold.co/100x100' , 'pdate' : '2000-01-11' , 'ccode' : 1 } ,
    { 'pcode' : 2 , 'pname' : '사이다' , 'pprice' : 2000 , 'pimg' : 'https://placehold.co/100x100' , 'pdate' : '2000-02-22' , 'ccode' : 1 }
]

// [1] 전체조회 함수
productPrint()
function productPrint(){
    // 1. 어디에
    let tbody = document.querySelector('#main table tbody')
    // 2. 무엇을
    let html = ''

    for(i=0 ; i<=productList.length-1 ; i++){
        let product = productList[i]
        // ++ 현재 i번째 제품의 카테고리번호에 해당하는 카테고리명 찾기
        let cname = ''
        for(let j=0 ; j<=categoryList.length-1 ; j++){
            if(categoryList[j].ccode == product.ccode){
                cname = categoryList[j].cname
                break
            }
        }

        html += `<tr>
                    <td> <img src="${product.pimg}"/> </td>
                    <td> ${cname} </td> 
                    <td> ${product.pname} </td> 
                    <td> ${product.pprice} </td> 
                    <td> ${product.pdate} </td> 
                    <td>
                        <button class="deleteBtn" onclick="productDelete(${product.pcode})">삭제</button>
                        <button class="updateBtn" onclick="productUpdate(${product.pcode})">수정</button>
                    </td>
                </tr>`

    }

    // 3. 출력
    tbody.innerHTML = html

}

// [2] 삭제 함수
function productDelete(pcode){
    // 1. 삭제할 pcode 의 제품객체를 배열에서 찾는다
    for(i=0;i<=productList.length-1; i++){
        if(productList[i].pcode == pcode){
            // 2. 배열에서 요소 삭제 .splice(인덱스번호 , 개수)
            productList.splice(i,1)
            alert('삭제 성공')
            // 3. 조회구역 최신화
            productPrint()
            // 주의 : return function{} 탈출  vs  break for{} 탈출
            return
        }
    }
}

// [3] 수정 함수
function productUpdate(pcode){
    // 1. 수정할 pcode 의 제품객체를 배열에서 찾는다.
    for(i=0;i<=productList.length-1;i++){
        if(productList[i].pcode == pcode){
            let newPname = prompt('수정할 제품명 입력')
            let newPprice = prompt('수정할 가격 입력')
            // 2. 배열에서 특정한 요소값 수정
            productList[i].pname = newPname
            productList[i].pprice = newPprice
            alert('수정 성공')
            // 3. 조회구역 최신화
            productPrint()
            // 주의 : return function{} 탈출  vs  break for{} 탈출
            return
        }
    }
}


// [4] 등록 함수
let finalPcode = productList.length  // 현재 마지막으로 사용한 제품코드
function productAdd(){
    // 1. 입력 받은 값 가져오기
    let category = document.querySelector('.category').value
    let name = document.querySelector('.name').value
    let price = document.querySelector('.price').value
    let image = document.querySelector('.image').files[0]   // 첨부파일은 .files[0] 속성에서 첨부파일의 첫번째

        // 꼼꼼히 ! , 유효성 판단(검사) 데이터길이 , 중복 , 숫자 등
        if(category == 'disabled'){
            alert('카테고리를 선택하세요')
            return  // ** 코드의 흐름 중 return 만나면 아래코드는 생략하고 강제 함수 종료
        }


    // 2. 입력 받은 값들을 객체화 , 중간검사 : console.log() 이용한 변수 잘 들어왔는지 체크

        // pcode : 제품식별코드로 사용자가 지정하지 않고 *자동 번호 부여* , 마지막 사용된 제품코드에 + 1
        // pdate : 현재 시스템 날짜/시간 함수 , new Date()
            // 현재 연도 : new Date().getFullyear()
            // console.log( new Date().getFullYear() ) // 현재 연
            // console.log( new Date().getMonth() )    // 현재 월 (0:1월 ~ 11:12월)
            // console.log( new Date().getDate() )     // 현재 일
    
    let pdate = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`
    
    let object =  { ccode   : category , 
                    pname   : name , 
                    pprice  : price , 
                    // 만약에 첨부파일 선택이 없으면 (undefined)
                    pimg    : image == undefined ? 'https://placehold.co/100x100' : URL.createObjectURL(image),  // URL.createObjectURL( 객체 ) - 객체 (가상)주소 생성
                    pcode   : finalPcode+1 , 
                    pdate   : pdate         }

    console.log(object)

    // 3. 배열 저장
    productList.push(object)

    // 4. 성공
    alert(`등록 성공`)

    // 5. 조회구역 최신화
    productPrint()


}


















// function productAdd(){
//     let 카테고리명 = document.querySelector('.category').value
//     let 상품명 = document.querySelector('.name').value
//     let 가격 = document.querySelector('.price').value
//     let 이미지 = document.querySelector('.image').files[0]
//     let 등록일 = '0000-00-00'
// 
//     document.querySelector('#main > table > tbody').innerHTML += `<tr><td> <img src=${이미지}/> </td><td> ${카테고리명} </td> <td> ${상품명} </td> <td> ${가격} </td> <td> ${등록일} </td> <td><button class="deleteBtn">삭제</button><button class="updateBtn">수정</button></td></tr>`
// }




/*
<tr>
    <td> <img src="https://placehold.co/100x100"/> </td>
    <td> 음료 </td> <td> 코카콜라 </td> <td> 1,000 </td> <td> 2026-01-26 </td> 
    <td> 
        <button class="deleteBtn">삭제</button> 
        <button class="updateBtn">수정</button> 
    </td>
</tr>


<select class="category">
    <option value="disabled"> 카테고리 선택하세요. </option>
    <option value="1" > 음료 </option>
    <option value="2" > 과자 </option>
</select>
<input class="name" placeholder="제품명" />
<input class="price" placeholder="제품가격" />
<input class="image" type="file" />
<button onclick="productAdd()"> 등록 </button>
*/