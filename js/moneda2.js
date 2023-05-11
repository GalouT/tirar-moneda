let imagen = document.getElementById("image")
let opcion1 = document.getElementById("opcion1")
let opcion2 = document.getElementById("opcion2")
let boton = document.getElementById("btn")
let texto = document.getElementById("txt")


let caraOcruz
let resetearDatos = function(){
    opcion1 = "",
    opcion2="",
    texto.innerHTML = ""
}

boton.addEventListener("click",e =>{
    if(opcion1.value == "" || opcion2 == ""){
        texto.innerHTML = "Escribí 2 opciones"
        
        setTimeout(() => {
            texto.innerHTML = ""
        }, 2000);
        return
    }

    imagen.src = "./imagenes/lanzarmoneda.gif"
    let random = Math.round(Math.random()*2)

    setTimeout(() => {
        if(random === 1){
            boton.disabled = true
            texto.innerHTML = opcion1.value
            imagen.src = "./imagenes/cara.jpg"
            setTimeout(() => {
                imagen.src = "./imagenes/confusion-chalk-icon-making-decisions-indecision-a-lot-of-questions-indecisive-person-perplexity-emotional-stress-symptom-isolated-chalkboard-illustration-vector.webp"
                texto.innerHTML = ""
                opcion1.value = ""
                opcion2.value = ""
            }, 3000);
        
        }else{
            boton.disabled = true
            texto.innerHTML = opcion2.value
            imagen.src = "./imagenes/seca.jpg"
        }
        setTimeout(() => {
            imagen.src = "./imagenes/confusion-chalk-icon-making-decisions-indecision-a-lot-of-questions-indecisive-person-perplexity-emotional-stress-symptom-isolated-chalkboard-illustration-vector.webp"
            texto.innerHTML = ""
            opcion2.value = ""
            opcion1.value = ""
            boton.disabled = false
            
        }, 3000);

    }, 2000);

    
})
