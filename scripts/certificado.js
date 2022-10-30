// variables
const btnClose = document.getElementById('btn-close');
const btnNext = document.getElementById('btn-next');
const btnPrev = document.getElementById('btn-prev');
const imgs = document.querySelectorAll('.cerficados__img');
const lightBox = document.querySelector('.container__imgs--actives');
const imgActive = document.getElementById('img-active');
let indexImg = 0;

const openLightBox = (e)=>{
    imgActive.src = e.target.src;
    lightBox.style.display = 'flex';
    indexImg = Array.from(imgs).indexOf(e.target);
}

imgs.forEach((img)=>{
    img.addEventListener('click', openLightBox);
});

// close lightbox
btnClose.addEventListener('click', ()=>{
    lightBox.style.display = 'none';
});

// next image
const nextImagen = ()=>{
    if(indexImg == imgs.length -1){
        indexImg = -1;
    }
    imgActive.src = imgs[indexImg+ 1].src;
    indexImg++;
};

btnNext.addEventListener('click', nextImagen);

// perv imgage
const prevImagen = ()=>{
    if(indexImg == 0){
        indexImg = imgs.length;
    }
    imgActive.src = imgs[indexImg - 1].src;
    indexImg--;
};

btnPrev.addEventListener('click', prevImagen);