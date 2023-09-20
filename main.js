'use strict';


const face = document.querySelector('.js-face');

function handleClick(){
    face.innerHTML = ';)';
}

function handleMouseover(){
     face.classList.add('mouseover');
}
function handleMouseout(){
    face.classList.add('mouseout');
    face.innerHTML = ':)';
}


face.addEventListener('click', handleClick);
face.addEventListener('mouseover', handleMouseover);
face.addEventListener('mouseout', handleMouseout);
