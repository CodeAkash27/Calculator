let input=document.querySelector("input");

function add(element){
    input.value += element
}

function clearval(){
    input.value =""
}

function deleteval(){
    input.value = input.value.slice(0,input.value.length-1)
}

function equal(){
    input.value = eval(input.value)
}