// Declaring Variables

// Components
const navBar = document.querySelector('.navbar');
const searchForm = document.querySelector('.search-form');
const loginForm = document.querySelector('.login-form');
const contactInfoSidebar = document.querySelector('.contact-info');

// Buttons
const menuBtn = document.querySelector('#menu-btn');
const searchBtn = document.querySelector('#search-btn');
const loginBtn = document.querySelector('#login-btn'); 
const infoBtn = document.querySelector('#info-btn'); 
const closeContactInfoBtn = document.querySelector('#close-contact-info');


menuBtn.addEventListener('click', ()=>{
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
    contactInfoSidebar.classList.remove('active');
    navBar.classList.toggle('active');
})

searchBtn.addEventListener('click', ()=>{
    loginForm.classList.remove('active');
    contactInfoSidebar.classList.remove('active');
    navBar.classList.remove('active');
    searchForm.classList.toggle('active');
})

loginBtn.addEventListener('click', ()=>{
    searchForm.classList.remove('active');
    contactInfoSidebar.classList.remove('active');
    navBar.classList.remove('active');
    loginForm.classList.toggle('active');
})

infoBtn.addEventListener('click', ()=>{
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
    navBar.classList.remove('active');
    contactInfoSidebar.classList.toggle('active');
}
)
closeContactInfoBtn.addEventListener('click', ()=>{
    contactInfoSidebar.classList.remove('active');
})

window.onscroll = ()=>{
    navBar.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
}

var swiper = new Swiper(".home-slider",{
    loop: true,
    grabCursor:true,
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
});

var swiper = new Swiper(".reviews-slider",{
    loop: true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints:{
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
        }
});

var swiper = new Swiper(".blogs-slider",{
    loop: true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints:{
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
        }
});

var swiper = new Swiper(".brands-slider",{
    loop: true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints:{
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 5,
            },
        }
});

lightGallery(document.querySelector('.projects-container')); 


document.addEventListener('touchstart', onscroll, {passive: true});