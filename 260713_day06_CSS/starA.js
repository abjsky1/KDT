// let result = ``
// 
// for(a=1 ; a<9 ; a++){
//     for(i=a; i<9; i++){
//         result += ` `
//     }
//     for(j=1; j<=a; j++){
//         result += `* `
//     }
//     result += `\n`
// }
// 
// for(a=9 ; a>=1 ; a--){
//     for(i=a; i<9; i++){
//         result += ` `
//     }
//     for(j=1; j<=a; j++){
//         result += `* `
//     }
//     result += `\n`
// }
// 
// 
// console.log(result)








let 전체결과 = ``

for(let i = 1 ; i <= 10 ; i++){
    let 출력 = ``
    for(let j = 1 ; j <= 10 - i; j++){
        출력 += ` `
    }
    for(let j = 1 ; j <= i; j++){
        출력 += `* `
    }
    전체결과 += `${출력} \n`
}

for(let i = 9 ; i >= 1 ; i--){
    let 출력 = ``
    for(let j = 1 ; j <= 10 - i; j++){
        출력 += ` `
    }
    for(let j = 1 ; j <= i; j++){
        출력 += `* `
    }
    전체결과 += `${출력} \n`
}

console.log(전체결과)
