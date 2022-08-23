let smallItems = document.getElementsByClassName('small__item');
let mainItem = document.getElementsByClassName('main__item')[0];

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

let slider = document.getElementsByClassName('slider')[0];
let sliderLine = document.getElementsByClassName('slider__line')[0];
let position = 0;

document.getElementById('next').addEventListener('click', function() {
    sliderLine.style.transition = 'all ease 1s';
    position += 990;
    if (position > slider.offsetWidth * 2) {
        sliderLine.style.transition = 'none';
        position = 0;
    }
    sliderLine.style.left = -position + 'px';
});

document.getElementById('prev').addEventListener('click', function() {
    sliderLine.style.transition = 'all ease 1s';
    position -= 990;
    if (position < 0) {
        sliderLine.style.transition = 'none';
        position = slider.offsetWidth * 2;
    }
    sliderLine.style.left = -position + 'px';
});