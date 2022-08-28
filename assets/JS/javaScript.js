
function changeMode(){
    changeClasses();
}

function changeClasses(){
  body.classList.toggle(lightMode);
}


const button = document.getElementById('btn');
const body = document.getElementsByTagName('body');
const lightMode = 'light-mode';
button.addEventListener('click', changeMode);

