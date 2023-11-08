let buffer = ""
let action = ""

let calculatorButtons = document.querySelectorAll(`*[id^="btn"]`)
let clickInput = document.querySelector(".number-style")
console.log(calculatorButtons)

function buttonClick(event){

    let target=event.currentTarget
    let string = clickInput.innerHTML
    console.log(target)
    if(target.getAttribute("id") =="btn-num"){
    console.log(target.innerHTML)
    string=string+target.innerHTML
    clickInput.innerHTML=string
    firstNumber= clickInput.innerHTML

}
else{

    console.log(target.getAttribute("id").slice(4))
    if(target.getAttribute("id").slice(4)=="backspace"){
     clickInput.innerHTML=clickInput.innerHTML.slice(0,-1)
    }
    if(target.getAttribute("id").slice(4)=="clean"){
        clickInput.innerHTML=""
       }
       if(target.getAttribute("id").slice(4)=="percent"){
        clickInput.innerHTML=clickInput.innerHTML/100
       }
       if(target.getAttribute("id").slice(4)=="minus"){
        if(buffer==""){
            buffer= clickInput.innerHTML
            clickInput.innerHTML=""
            action="minus"
        }
     

       }
       if(target.getAttribute("id").slice(4)=="equel"){
        if(action=="minus"){
            let secondNumber=clickInput.innerHTML
            clickInput.innerHTML=buffer-secondNumber
        }
       }
}
}
for(let i =0; i<calculatorButtons.length;i++){
    calculatorButtons[i].onclick=buttonClick
}
