let buffer = ""
let action = ""
let body = document.querySelector("body")
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
        buffer=""
       }
       if(target.getAttribute("id").slice(4)=="percent"){
        clickInput.innerHTML=clickInput.innerHTML/100
       }
       if(target.getAttribute("id").slice(4)=="dot"){
        if(clickInput.innerHTML!=""&& clickInput.innerHTML[clickInput.innerHTML.length-1]!="."){
        clickInput.innerHTML=clickInput.innerHTML+"."
        }
        else{
            clickInput=clickInput
        }
       }
       if(target.getAttribute("id").slice(4)=="minus"){
        if(buffer==""){
            buffer= clickInput.innerHTML
            clickInput.innerHTML=""
            action="minus"
        }
        else{
            clickInput.innerHTML=""
            action="minus"
        }
        }
        if(target.getAttribute("id").slice(4)=="division"){
            if(buffer==""){
                buffer= clickInput.innerHTML
                clickInput.innerHTML=""
                action="division"
            }
            else{
                clickInput.innerHTML=""
                action="division"
            }
            }
            if(target.getAttribute("id").slice(4)=="mult"){
                if(buffer==""){
                    buffer= clickInput.innerHTML
                    clickInput.innerHTML=""
                    action="mult"
                }
                else{
                    clickInput.innerHTML=""
                    action="mult"
                }
            }
            if(target.getAttribute("id").slice(4)=="plus"){
                if(buffer==""){
                    buffer= clickInput.innerHTML
                    clickInput.innerHTML=""
                    action="plus"
                }
                else{
                    clickInput.innerHTML=""
                    action="plus"
                }
                }
       if(target.getAttribute("id").slice(4)=="equel"){
        if(action=="minus"){
            let secondNumber=clickInput.innerHTML
            clickInput.innerHTML=buffer-secondNumber
            buffer = clickInput.innerHTML
        }
        if(action=="division"){
            let secondNumber=clickInput.innerHTML
            clickInput.innerHTML=buffer/secondNumber
            buffer = clickInput.innerHTML
        }
        if(action=="mult"){
            let secondNumber=clickInput.innerHTML
            clickInput.innerHTML=Number(buffer)*Number(secondNumber)
            buffer = clickInput.innerHTML
        }
        if(action=="plus"){
            let secondNumber=clickInput.innerHTML
            clickInput.innerHTML=Number(buffer) + Number(secondNumber)
            buffer = clickInput.innerHTML
        }
       }
}
}
for(let i =0; i<calculatorButtons.length;i++){
    calculatorButtons[i].onclick=buttonClick
}
let startTouch=0
let finalTouch = 0
body.addEventListener('touchstart', (event) => {
    console.log('Вы приложили палец к элементу')
    console.log(event.touches[0])
    startTouch= event.touches[0].clientX

  })
  body.addEventListener('touchmove', (event) => {
    console.log('По мне ведут пальцем')
  })
  body.addEventListener('touchend', (event) => {
    console.log('Прикосновение закончено')
    console.log(event.changedTouches[0])
    finalTouch=event.changedTouches[0].clientX

    swap()
    

  })
  let fileNames=["/icons.html","/index.html","/icons(2).html"]
  if(localStorage.getItem("path")==null){
    localStorage.setItem("path",fileNames.indexOf(window.location.pathnaname))
  }
  function swap(){
   let n = localStorage.getItem("path")
    if(finalTouch>startTouch){
        if(n!=0){
            n=n-1
            localStorage.setItem("path",n)
            window.location.href=fileNames[n]
        }
    }
   

  }