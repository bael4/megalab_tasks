
function descendingNumbers(num){
   let str = String(num)
   let arr = str.split('')
   return arr.sort((a,b)=>{
   return b-a
    })
}

let promt = prompt('Введите число')
let res = descendingNumbers(promt)
console.log(res);
document.getElementById('number').innerHTML = res