let img = document.querySelector('img')
let h1 = document.querySelector('h1')
let click = 0
img.addEventListener('click', function(){
    click += 1
    h1.innerHTML = click
})