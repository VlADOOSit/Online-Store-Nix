let products = document.getElementsByClassName('products')[0];

let keys = Object.keys(localStorage);
for(let key of keys) {
    if(key != 'len') {
        products.innerHTML += 
        `
        <div class="product__wrapper">
            <div class="product__item">
                <div class="product__img">
                    <img src="${JSON.parse(localStorage.getItem(key)).img}" alt="">
                </div>
                <div class="product__info">
                    <div class="product__name">${JSON.parse(localStorage.getItem(key)).name}</div>
                    <div class="product__price">${JSON.parse(localStorage.getItem(key)).price} $</div>
                    <div class="product__count">${JSON.parse(localStorage.getItem(key)).count}</div>
                </div>
            </div>
            <button class="delete_btn" value="${JSON.parse(localStorage.getItem(key)).id}">delete</button>
        </div>
        `
    }
}

let del = document.getElementsByClassName('delete_btn');

for (let i = 0; i < del.length; i++) {
    del[i].addEventListener('click', function() {
        keys = Object.keys(localStorage);
        for(let key of keys) {
            if(JSON.parse(localStorage.getItem(key)).id == this.value) {
                let len = Number(localStorage.getItem('len')) - JSON.parse(localStorage.getItem(key)).count;
                localStorage.removeItem(key);
                this.previousElementSibling.parentElement.remove();
                localStorage.setItem('len', len)
            }
        }
    })
    
}