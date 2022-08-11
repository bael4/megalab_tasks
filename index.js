
let tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];

function createTree(data) {
    const ol = document.createElement('ol');
    for(let i = 0; i<tasks.length; i++){
     const li = document.createElement('li');
     li.className = 'li'
     li.textContent += tasks[i];
     ol.appendChild(li);
    }
  
    return ol;
  }
  
  
  document.querySelector('.content').append(createTree(tasks));