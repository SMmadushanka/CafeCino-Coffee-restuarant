let navbar = document.querySelector('.navbar');

let menuBtn = document.querySelector('#menu-btn');
menuBtn.onclick = () => {
    navbar.classList.toggle('active');
    cartItem.classList.remove('active');
    searchBox.classList.remove('active');

}

let cartItem = document.querySelector('.cart-items-container');

let cartBtn = document.querySelector('#cart-btn');
cartBtn.onclick = () => {
    cartItem.classList.toggle('active');
    searchBox.classList.remove('active');
    navbar.classList.remove('active');

}

let searchBox = document.querySelector('.search-form');

let searchBtn = document.querySelector('#search-btn');
searchBtn.onclick = () => {
    searchBox.classList.toggle('active');
    cartItem.classList.remove('active');
    navbar.classList.remove('active');

}

window.onscroll = () => {
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    searchBox.classList.remove('active');

}