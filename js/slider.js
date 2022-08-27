//slider
let slider = document.getElementsByClassName('slider')[0];
let sliderLine = document.getElementsByClassName('slider__line')[0];
let position = 0;

function waitChange() {
    sliderLine.style.transition = 'none';
    sliderLine.style.left = -position + 'px';
    document.getElementById('next').disabled = false;
    document.getElementById('prev').disabled = false;
}

document.getElementById('next').addEventListener('click', function() {
    let flag = false;
    
    sliderLine.style.transition = 'all ease 1s';
    position += 990;
    if (position > slider.offsetWidth * 4) {
        flag = true;
        sliderLine.style.left = -position + 'px';
        position = 0;
        document.getElementById('next').disabled = true;
        document.getElementById('prev').disabled = true;
        setTimeout(waitChange, 600);
        
        
    }
    if (!flag) {
        sliderLine.style.left = -position + 'px';
    }
    
});

document.getElementById('prev').addEventListener('click', function() {
    let flag = false;
    document.getElementById('next').disabled = false;
    sliderLine.style.transition = 'all ease 1s';
    position -= 990;
    if (position < 0) {
        flag = true;
        sliderLine.style.left = -position + 'px';
        position = slider.offsetWidth * 4;
        document.getElementById('next').disabled = true;
        document.getElementById('prev').disabled = true;
        setTimeout(waitChange, 600);
    }
    if (!flag) {
        sliderLine.style.left = -position + 'px';
    }
    
});