//change img product
let smallItems = document.getElementsByClassName('small__item');
let mainItem = document.getElementsByClassName('main__item')[0];

smallItems[0].style.opacity = 0.5;
smallItems[0].style.backgroundColor = '#000';

for (let i = 0; i < smallItems.length; i++) {
    smallItems[i].addEventListener('click', function () {
        mainItem.src = this.src;
        this.style.opacity = 0.5;
        this.style.backgroundColor = '#000';
        for(let j = 0; j < smallItems.length; j++) {
            if (j != i) {
                smallItems[j].style.opacity = 1;
                smallItems[j].style.backgroundColor = '#E9E9E9';
            }
        }
    })
}


//for slider
let smalBlock = document.getElementsByClassName('small-block__item');


for (let i = 0; i < smalBlock.length; i++) {
    smalBlock[i].addEventListener('click', function () {
        let style = this.currentStyle || window.getComputedStyle(this, false);
        let bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");

        this.parentElement.previousElementSibling.firstElementChild.style.backgroundImage = `url("${bi}")`
        this.style.opacity = 0.5;
        this.style.backgroundColor = '#000';
        for(let j = 0; j < smalBlock.length; j++) {
            if (j != i) {
                smalBlock[j].style.opacity = 1;
                smalBlock[j].style.backgroundColor = '#E9E9E9';
            }
        }
    })
}

//for check Color
let colors = document.querySelectorAll('input[name="color"]');
console.log(colors)
for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListener('click', function() {
        console.log('asdasd')
        document.getElementsByClassName('color__value')[0].innerText = document.querySelector('input[name="color"]:checked').value;
    });
}

