let pads = document.querySelectorAll('.pad');
const activatePad = (pad)=> {
    {
        pad.addEventListener('click', () => {
            pad.classList.toggle('active');
            pad.style.animation = 'animation 0.3s alternate ease-in-out 2';
        })
        pad.addEventListener('animationend',()=>pad.style.animation='');
    }
}
pads.forEach(activatePad);

const zwrocX = (x)=>('ala ma kota');


function ala(callback){
    return callback;
}

console.log(ala(zwrocX(1)));
