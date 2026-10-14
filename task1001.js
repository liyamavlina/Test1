let form=document.querySelector("form")
let span=document.querySelector("span")
form.addEventListener("submit", function(event){
    // запретить обновлять страницу
     event.preventDefault()
    //  достать все инпуты
    let inputs=document.querySelectorAll("input")
    // положить их в переменные
    let [A, B, C, M, K, submit] = inputs 
    // массив данных про коробку, + делает число, value-значение инпута
    let box = [+A.value, +B.value, +C.value]
    let door = [ +M.value, +K.value]
    box.sort((a, b) => b - a)
    door.sort((a, b) => b - a)
    console.log(box, door)
    if(box[0]<=door[0] & box[1]<=door[1]){
        span.innerHTML="Пройдёт"
    } else{
        span.innerHTML="Не пройдёт"
    }       
})
