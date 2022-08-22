let smallItems = document.getElementsByClassName('small__item');
let mainItem = document.getElementsByClassName('main__item')[0];

for (let i = 0; i < smallItems.length; i++) {
    smallItems[i].addEventListener('click', function () {
        mainItem.src = this.src;
        this.style.opacity = 0.5;
        for(let j = 0; j < smallItems.length; j++) {
            if (j != i) {
                smallItems[j].style.opacity = 1;
            }
        }
    })
}