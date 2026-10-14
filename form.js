let form = document.querySelector ("form")
form.addEventListener("submit", async function(event){ 
    // запретить обновлять страницу
    event.preventDefault()
    alert("Данные отправлены")
    // получить данные из формы и напечатать 
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
} )