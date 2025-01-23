const btnele = document.querySelectorAll("Button")
const inputele = document.getElementById("txt")

for (let i=0; i<btnele.length; i++){
btnele[i].addEventListener('click', ()=>{
   const btnval =  btnele[i].textContent
   if(btnval==="C"){
    clearresult()
   }else if(btnval==="="){
    calculate()
   }else{
    appendvalue(btnval)
   }
})

function clearresult(){
    inputele.value = ""
}
function calculate(){
    inputele.value = eval(inputele.value)
}
function appendvalue(btnval){
    inputele.value += btnval
}
}