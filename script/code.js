const btnDisplay = document.querySelector('#display')
let numbers = [10,20,1,1,59,23,45,90,69,33,8]
document.querySelector('#nums').value = numbers;

btnDisplay.addEventListener('click', ()=>{
    let sum = eval(numbers.join('+')); 
    document.querySelector('#output').innerHTML = `${sum}`;
})