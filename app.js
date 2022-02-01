
const disply1 = document.querySelector(".disply-1")
const disply2 = document.querySelector(".disply-2")


let cal_arry =[]
let btn =(val)=>{
    cal_arry.push(val)
    disply1.innerHTML = cal_arry.join("")
}


let allclr =()=>{
    cal_arry=[]
disply1.innerHTML=""
disply2.innerHTML=0
}

let clr =()=>{
    cal_arry.pop()
disply1.innerHTML = cal_arry.join("")
}



let finalresult=()=>{

    let calData = cal_arry.join("")
    disply2.innerHTML = eval(calData)

}