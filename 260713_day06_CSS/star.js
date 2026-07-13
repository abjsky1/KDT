// let star1 = ``
//  
// let star2 = ``
// 
// for(let a = 1 ; a <= 3 ; a++){
//     for(let b=1 ; b <= 3 ; b++){
//         star1 = star1 + `*`
//         console.log(star1)
//     }    
// }
// 
// for(let c=1 ; c <= 10 ; c++){
// 
// 
//     for(let d=1 ; d<=10-c+1 ; d++){
//         star2 += `*`
//     }
//     star2 += `\n`
// 
//     
// }
// console.log(star2)
// 


// let a = ``
// let n = 10;
// let b = []
// let c = []
// 
// for (let i = 1; i <= n; i++) {
//     let line = "";
// 
//     for (let j = 0; j < n - i; j++) {
//         line += " ";
//     }
// 
//     for (let j = 0; j < i; j++) {
//         line += "*";
//     }
// 
//     console.log(line);
//     b.push(line)
// }
// console.log(b)
// 
// 
// 
// for (let i = n - 1; i >= 1; i--) {
//     let line = "";
// 
//     for (let j = 0; j < n - i; j++) {
//         line += " ";
//     }
// 
//     for (let j = 0; j < i; j++) {
//         line += "*";
//     }
// 
//     console.log(line);
//     c.push(line)
// }
// console.log(c)
// 
// for(let i = 0 ; i <= 2*n-1 ; i++){
//     a += b[i]
//     a += `\n`
//     console.log(a)
// }
// 
// 
// 
// document.querySelector(`p`).innerHTML = a








// mmmmmmmmmmmmmmmmmmmmmmmmm

let n = 10;
for (let i = 1; i <= n; i++) {
    let line = "";

    for (let j = 0; j < n - i; j++) {
        line += " ";
    }

    for (let j = 0; j < i; j++) {
        line += "☆";
    }

    console.log(line);
    document.querySelector("p").innerHTML += line + '<br />'
}




for (let i = n - 1; i >= 1; i--) {
    let line = "";

    for (let j = 0; j < n - i; j++) {
        line += " ";
    }

    for (let j = 0; j < i; j++) {
        line += "☆";
    }

    console.log(line);
    document.querySelector("p").innerHTML += line + '<br />'
}
















// let b = ``
// 
// for(let a = 1 ; a <= 5 ; a++){
//     for(let i=5 ; i >= 1 ; i--){
//         b = b + `*`
//         console.log(b)
//     }    
// }

//    for(let c=1 ; c <=10 ; c++){
//    star += `*`
//    }