let colorHidden = document.getElementsByClassName('color_hidden');
let sizeHidden = document.getElementsByClassName('size_hidden');
let printHidden = document.getElementsByClassName('print_hidden');

function noneHidden() {
    for (let i = 0; i < colorHidden.length; i++) {
        colorHidden[i].style.display = 'none';
    }
    
    for (let i = 0; i < sizeHidden.length; i++) {
        sizeHidden[i].style.display = 'none';
    }
    
    for (let i = 0; i < printHidden.length; i++) {
        printHidden[i].style.display = 'none';
    }
}

noneHidden();

function toggleFilters(hidden, button) {
    let flag = true;
    document.getElementById(button).addEventListener('click', function(e) {
        e.preventDefault();
        if (flag) {
            for (let i = 0; i < hidden.length; i++) {
                hidden[i].style.display = 'block';
                e.target.innerText = 'Скрыть';
                flag = false;
            }
        }
        else {
            for (let i = 0; i < hidden.length; i++) {
                hidden[i].style.display = 'none';
                e.target.innerText = 'Посмотреть все';
                flag = true;
            }
        }
    });
}

toggleFilters(colorHidden, 'color');
toggleFilters(sizeHidden, 'size');
toggleFilters(printHidden, 'print');