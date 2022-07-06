const evento = document.getElementById("botonAlerta")


evento.addEventListener("click", () => {  alert("click en el boton")});

$(() => {

    $(botonAlertaJquery).click(() => {
        alert("click en el boton con jquery")
    }) 

})
