let a1
a1 = prompt("이름을 적어주세요.")
console.log(a1)

let a2
a2 = prompt("오늘 한 운동 종류를 적어주세요.")
console.log(a2)

let a3
a3 = prompt("운동 시간(분)을 적어주세요.")
console.log(a3)

let a4
a4 = a3 * 7
console.log(a4)

console.log("[운동 기록]", "\n", 
            "이름", "\n ", a1, "\n", "\n", 
            "운동종류", "\n ", a2, "\n", "\n", 
            "운동시간", "\n ", a3, "\n", "\n",
            "칼로리", "\n ", a4)


console.log("[운동 기록]", 
            "\n이름", "\n", a1, "\n",
            "\n운동종류", "\n", a2, "\n",
            "\n운동시간", "\n", a3, "\n",
            "\n칼로리", "\n", a4)


console.log("[운동 기록]")
console.log("이름")
console.log("", a1)
console.log("")
console.log("운동종류")
console.log("", a2)
console.log("")
console.log("운동시간")
console.log("", a3)
console.log("")
console.log("칼로리")
console.log("", a4)