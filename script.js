const botones = document.querySelectorAll(".boton");
numeroElegido = ""
botones.forEach(boton => {
    boton.addEventListener('click',()=>{
        botones.forEach(btn =>{
            btn.classList.remove("seleccionado")
        })
        boton.classList.add("seleccionado")
        numeroElegido = boton.innerText
    })
});
console.log(numeroElegido)
const eleccion = document.querySelector(".eleccion")
const elegido = document.querySelector(".elegido")
const numero = document.querySelector("span")

const enviar = document.querySelector("button").addEventListener('click',() => {
    eleccion.classList.add("hidden")
    elegido.classList.remove("hidden")
    numero.innerText = numeroElegido
})