const maxOnPage = 9;

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

async function getProducts() {
    const response = await fetch('../js/products.json');

    const prodArr = await response.json();
    
    //add on page
    let onPageNow = 0;
    if (prodArr.length > maxOnPage) {
        for (let i = 0; i < maxOnPage; i++) {
            addCard(prodArr[i]);
            onPageNow++;
        }
    }

    else {
        for (let i = 0; i < prodArr.length; i++) {
            addCard(prodArr[i]);
            onPageNow++;
        }
    }

    //show more
    let test = document.getElementsByClassName('more__btn')[0];
    test.addEventListener('click', function(e) {
        if (prodArr.length - onPageNow > 3) {
            let start = onPageNow;
            for (let i = start; i < start+3; i++) {
                addCard(prodArr[i]);
                onPageNow++;
            }
        }
        else {
            let start = onPageNow;
            for (let i = start; i < prodArr.length; i++) {
                addCard(prodArr[i]);
                onPageNow++;
                e.target.disabled = true;
            }
        }
        console.log(onPageNow);
        console.log(prodArr.length);
    });

    

}

getProducts();