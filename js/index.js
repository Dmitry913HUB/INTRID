'use strict'

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#menu").cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
}

//выподающие меню
let bufer = "";
let buferVisib = "";
function dropDown(drop, visib) {
  //задаем видимость элементу
  if(bufer && bufer !== drop){
    // document.getElementById(bufer).classList.toggle('.show__none');
    document.getElementById(bufer).classList.remove(buferVisib); 
  }
  document.getElementById(drop).classList.toggle(visib);
  bufer = drop;
  buferVisib = visib;    
}

//поиск нужного района
function filterSearch(sr, dr) {
  let input = document.getElementById(sr);
  let filter = input.value.toUpperCase();
  let div = document.getElementById(dr);
  let a = div.getElementsByTagName("a");
  
  for (let i = 0; i < a.length; i++) {
      if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
          a[i].style.display = "";
      } else {
          a[i].style.display = "none";
      }
  }
}

//слайдер
let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("item");
    let fillBar = document.getElementById("fill__bar");
        
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }   
    slides[slideIndex - 1].style.display = "block"; 

    fillBar.style.width = `${slideIndex / slides.length * 100}%`;
}