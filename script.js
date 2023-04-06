function toggleMenu() {
    const menuIcon = document.querySelector('.menuIcon');
    const navBar = document.getElementById('navBar');
    menuIcon.classList.toggle('active');
    navBar.classList.toggle('active');
}

//videos
const slideShow = document.getElementById('slideShow');
const slides = slideShow.getElementsByTagName('video'); // selecciona etiquetas =  ByTagName
var index=0;
function nextSlide(){
    slides[index].classList.remove('active')//remueve la clase active del index
    index = (index+1) % slides.length;
    slides[index].classList.add("active");
    //console.log(index+"next");
}
function prevSlide(){
    slides[index].classList.remove('active')//remueve la clase active del index
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add("active");
    //console.log(index+"volver");
}


//textos
const slideShowText = document.getElementById('slideShowText');
const slidesText = slideShowText.getElementsByTagName('div');
var i = 0;
function nextSlideText(){
    slidesText[i].classList.remove('active') //remevemos las clases active
    i = (i+1) % slidesText.length;
    slidesText[i].classList.add('active')
}
function prevSlideText(){
    slidesText[i].classList.remove('active') //remevemos las clases active
    i = (i-1+slidesText.length) % slidesText.length;
    slidesText[i].classList.add('active')
}