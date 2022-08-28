import {addToBascket} from './addToBasket.js';

const maxOnPage = 9;
document.getElementsByClassName('basket__button')[0].onclick = function() {
    window.location.href = './basket.html'
} 

function addCard(product) {
    document.getElementsByClassName('cards')[0].innerHTML += 
    `<div class="card__wrapper">
        <a class="card__link" href="../views/product.html">
            <div class="card">
                <div class="card__img">
                    <img src="${product.img}" alt="tshirt">
                </div>
                <div class="card__info">
                    <div class="name__product">${product.name}</div>
                    <div class="size__info">
                        <div>Размер:</div>
                        <div class="size__value">${product.size}</div>
                    </div>
                    <div class="price__info">
                        <div>Цена:</div>
                        <div class="price__value">${product.price} $</div>
                    </div>
                </div>
            </div>
        </a>
        <button class="add__basket" value="${product.id}" >В корзину</button>
    </div>`;
}

function fillPage(arr, mainArr) {
    //add on page
    let onPageNow = 0;
    if (arr.length > maxOnPage) {
        for (let i = 0; i < maxOnPage; i++) {
            addCard(arr[i]);
            onPageNow++;
        }
    }

    else {
        for (let i = 0; i < arr.length; i++) {
            addCard(arr[i]);
            onPageNow++;
        }
    }

    //show more
    let moreBtn = document.getElementsByClassName('more__btn')[0];

    if (onPageNow < maxOnPage) {
        moreBtn.disabled = true;
    }
    else {
        moreBtn.disabled = false;
    }
    
    moreBtn.onclick = function(e) {
        e.preventDefault();
        if (arr.length - onPageNow > 3) {
            let start = onPageNow;
            for (let i = start; i < start+3; i++) {
                addCard(arr[i]);
                onPageNow++;
            }
        }
        else {
            let start = onPageNow;
            for (let i = start; i < arr.length; i++) {
                addCard(arr[i]);
                onPageNow++;
                e.target.disabled = true;
            }
        }
        addToBascket(mainArr, true); 
    };
}

async function getProducts() {
    const response = await fetch('../js/products.json');

    const prodArr = await response.json();

    fillPage(prodArr, prodArr);

    //filter
    let check = document.getElementsByTagName('input');

    for (let i = 0; i < check.length; i++) {
        check[i].addEventListener('click', function() {
            
            document.getElementsByClassName('cards')[0].innerHTML = '';
            const genderChecked = document.querySelectorAll('input[name=gender]:checked');
            const typeChecked = document.querySelectorAll('input[name=type]:checked');
            const colorChecked = document.querySelectorAll('input[name=color]:checked');
            const sizeChecked = document.querySelectorAll('input[name=size]:checked');
            const printChecked = document.querySelectorAll('input[name=print]:checked');
            
            let genderArr = Array.from(genderChecked).map(checkbox => checkbox.value);
            let typeArr = Array.from(typeChecked).map(checkbox => checkbox.value);
            let colorArr = Array.from(colorChecked).map(checkbox => checkbox.value);
            let sizeArr = Array.from(sizeChecked).map(checkbox => checkbox.value);
            let printArr = Array.from(printChecked).map(checkbox => checkbox.value);

            if(genderArr.length < 1) {
                genderArr = ['man', 'woman', 'two'];
            }
            if(typeArr.length < 1) {
                typeArr = ['with', 'without'];
            }
            if(sizeArr.length < 1) {
                sizeArr = ['40-60', '40-42', '42-44', '44-46', '46-48', '48-50', '50-52'];
            }
            if (colorArr.length < 1) {
                colorArr = ['red', 'green', 'white', 'black', 'fiolet', 'blue', 'gray'];
            }
            if (printArr.length < 1) {
                printArr = ['animals', 'country', 'feminine', 'cars', 'fiolet', 'superhero', 'films', 'none'];
            }

            let resultArr = [];
           
            for (let i = 0; i < prodArr.length; i++) {
                if (colorArr.includes(prodArr[i].color) && 
                    sizeArr.includes(prodArr[i].size) &&
                    genderArr.includes(prodArr[i].gender) &&
                    typeArr.includes(prodArr[i].type) &&
                    printArr.includes(prodArr[i].print)) {

                    resultArr.push(prodArr[i]);
                }
            }
            fillPage(resultArr, prodArr);
            addToBascket(prodArr, true);
        });
    }
    addToBascket(prodArr, true);
}
    
getProducts();