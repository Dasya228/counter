const buttonClear = document.querySelector('#clear')
const buttonDelete = document.querySelector('#delete')
const res1 = document.querySelector('#res1')
const res2 = document.querySelector('#res2')
const plusBtn = document.querySelector('#plus')
const multBtn = document.querySelector('#mult')
const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const btn4 = document.querySelector('#btn4')
const btn5 = document.querySelector('#btn5')
const alert = document.querySelector('#alert')
const btnClose = document.querySelector('#btn-close')



plusBtn.addEventListener('click', ()=>{
    if(res2.innerText<100){
        res2.innerText = Number(res2.innerText)+1
    }else{
        alert.style.display='block'
    }
})

buttonDelete.addEventListener('click',()=>{

    if(res1.innerText==='0'){
        res2.innerText=Number(res2.innerText)-1
    }else{
        res2.innerText=Number(res2.innerText)-res1.innerText
    }


})

btn1.addEventListener('click',()=>{

    res1.innerText=1
})
btn2.addEventListener('click',()=>{

    res1.innerText=2
})
btn3.addEventListener('click',()=>{

    res1.innerText=3
})
btn4.addEventListener('click',()=>{

    res1.innerText=4
})
btn5.addEventListener('click',()=>{

    res1.innerText=5
})
multBtn.addEventListener('click',()=>{
    if(res2.innerText<=100){
        res2.innerText=Number(res1.innerText)*res2.innerText

    }else{
      alert.style.display='block'
    }
})
buttonClear.addEventListener('click',()=>{
    res2.innerText=0
    res1.innerText=0
})

btnClose.addEventListener('click',()=>{
    alert.style.display='none'
})