



// function some(words){
//     let arr = []
//     words.split(' ').forEach(el => {
//         if(el.length>5){
//             arr.push(el.split('').reverse().join(''))
//         } else{
//             arr.push(el)
//         }
//     });
//     return arr.join(' ')
// }
//     let res = some('Hey hello  Javascript')
//     document.getElementById('words').innerHTML = res

function f(str){
    return str.split(' ').reduce((prev,cur) =>{
       if(cur.length >=5){ 
           return `${prev} ${cur.split('').reverse().join('')}`
       }
        return `${prev} ${cur}`
    },'')
}
console.log(f('Hey hello  Javascript'))
