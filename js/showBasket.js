let products = document.getElementsByClassName('products')[0];

let keys = Object.keys(localStorage);
for(let key of keys) {
    if(key != 'len') {
        products.innerHTML += `<p>${localStorage.getItem(key)}</p>`
    }
}