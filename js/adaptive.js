document.getElementsByClassName('adaptive__basket')[0].onclick = function() {
    window.location.href = './basket.html'
} 

if(document.getElementById('show__side')) {
    document.getElementById('show__side').addEventListener('click', function() {
        document.querySelector('.sidebar').classList.toggle('sidebar-toggle')
    })
}   

document.getElementById('menu__btn').addEventListener('click', function() {
    document.querySelector('.adaptive__header').classList.toggle('header-toggle')
})
