function getProductById(arr, id) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === Number(id)) {
            return arr[i];
        }
    }
}

export function addToBascket(arr, productFlag) {
    //add to basket
    let basketBtns;

    if (productFlag == 1) {
        basketBtns = document.getElementsByClassName('add__basket');
    }
    else if(productFlag == 0) {
        basketBtns = [document.getElementById('basket_main')];
    }
    else {
        basketBtns = document.getElementsByClassName('popular__basket');
    }

    if (localStorage.getItem('len') == null) {
        localStorage.setItem('len', 0);
    }
    
    document.getElementById('count').innerText = localStorage.getItem('len');

    for (let i = 0; i < basketBtns.length; i++) {
        basketBtns[i].onclick = function() {
            let flag = false;
            let keys = Object.keys(localStorage);
            for(let key of keys) {
                if (getProductById(arr, this.value).id == JSON.parse(localStorage.getItem(key)).id) {
                    getProductById(arr, this.value).count = JSON.parse(localStorage.getItem(key)).count + 1
                    localStorage.setItem(key, JSON.stringify(getProductById(arr, this.value)));
                    flag = true
                    let len = Number(localStorage.getItem('len')) + 1
                    localStorage.setItem('len', len)
                    document.getElementById('count').innerText = len;
                }
                
            }
            if (!flag) {
                getProductById(arr, this.value).count = 1;
                localStorage.setItem(localStorage.length+1, JSON.stringify(getProductById(arr, this.value)));
                let len = Number(localStorage.getItem('len')) + 1
                localStorage.setItem('len', len);
                document.getElementById('count').innerText = len;
            }
            
        }
    }
}