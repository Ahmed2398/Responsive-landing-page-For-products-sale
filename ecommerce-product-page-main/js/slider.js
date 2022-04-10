// // Open Modal 

// function openModal(){
//     document.getElementById("myModal").style.display="block";
// }

// // Close Modal 
// function closeModal() {
//     document.getElementById("myModal").style.display="none";
// }

// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("demo");
//   var captionText = document.getElementById("caption");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   captionText.innerHTML = dots[slideIndex-1].alt;
// }


const btns = document.querySelectorAll('.btn');
const sliderContainer = document.querySelector('.slider-container');
const slider = document.querySelector('.slider');
const slide = [...document.querySelectorAll('.slide')];
let currentIndex = 0; 

function moveSlider(dir){
  // const width = sliderContainer.clientWidth;
  dir === 'next' ? currentIndex++ : currentIndex --;
  slider.style.transform = `translateX(-${100 * currentIndex}%)`;
  switch (currentIndex){
    case 0: 
      document.querySelector('#prev').classList.add('hidden');
      break;
    case slide.length - 1:
      document.querySelector('#next').classList.add('hidden');
      break;
    default: 
      btns.forEach(b => b.classList.remove('hidden'));
    break;
  }
}

function handleBtnClick(e){
  e.currentTarget.id === "next" ? moveSlider('next') : moveSlider('prev');
}

btns.forEach(b => {
  b.addEventListener('click', handleBtnClick)
})