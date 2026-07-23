let signArrange = []

let PK = 1

function signup(){

    let ID = document.querySelector('.signId').value

    let PW = document.querySelector('.signPw').value

//  유효성 검사 : 아이디 중복 검사 

    for(i=0 ; i<=signArrange.length-1 ; i++){
        if(ID == signArrange[i].ID){
            alert('중복된 아이디입니다.')
            return
        }
    }


    let signObject = { 'PK' : PK , 'ID' : ID , 'PW' : PW }

    signArrange.push(signObject)

    localStorage.setItem('회원정보' , JSON.stringify( signArrange ))

    alert('회원가입에 성공했습니다.')

    PK += 1
}



function login(){
    for( i=0 ; i<=signArrange.length-1 ; i++){
        if(signArrange[i].ID == document.querySelector('.loginId').value){
            for( a=0 ; a<=signArrange.length-1 ; a++){
                if(signArrange[a].PW == document.querySelector('.loginPw').value){
                    alert(`${document.querySelector('.loginId').value}님 로그인 성공입니다.`)
                    return
                }
            }
            alert('비밀번호가 틀렸습니다.')
            return
        }

    }
    alert('존재하지 않는 아이디입니다.')

}



//  교수님 풀이


function signup1(){

    let ID = document.querySelector('.signId').value

    let PW = document.querySelector('.signPw').value

    let memberList = JSON.parse( localStorage.getItem('membersList'))
    console.log(memberList)
    
    if(memberList == null){
        // 최초등록시 배열 구성
        memberList = []
    }

    let PK1 = memberList.length == 0 ? 1 : memberList[memberList.length-1].PK + 1

    let signObject = { 'PK' : PK1 , 'ID' : ID , 'PW' : PW }

    memberList.push(signObject)

    localStorage.setItem('memberList' , JSON.stringify( memberList ))

    alert('회원가입에 성공했습니다.')

}


function login1(){

    let ID = document.querySelector('.loginId').value

    let PW = document.querySelector('.loginPw').value

    let memberList = JSON.parse(localStorage.getItem( 'memberList' ))
    if( memberList != null ){
        for( i=0 ; i<=memberList.length-1 ; i++ ){
            if(memberList[i].ID == ID && memberList[i].PW == PW ){
                alert('로그인 성공')
                return
            }
        }
    }
    alert('동일한 회원정보가 없습니다.')
}


// * 코드가 변경될 때 라이브서버는 