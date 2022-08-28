import {addToBascket} from './addToBasket.js';

if (localStorage.getItem('len') == null) {
    localStorage.setItem('len', 0);
}
document.getElementById('count').innerText = localStorage.getItem('len');
document.getElementsByClassName('basket__button')[0].onclick = function() {
    window.location.href = './basket.html'
} 

async function getProducts() {
    const response = await fetch('../js/products.json');

    const prodArr = await response.json();

    addToBascket(prodArr, 0);
    addToBascket(prodArr, 2);
}

getProducts();