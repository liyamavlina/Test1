let form = document.querySelector ("form")
form.addEventListener("submit", async function(event){
    event.preventDefault()
    alert("Данные отправлены")
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
} )