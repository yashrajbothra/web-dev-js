const para = document.querySelector('button');

para.addEventListener('click', updateName);

function updateName() {
  let name = prompt('Enter Name of Student');
  para.textContent = 'Roll No. 1: ' + name;
}