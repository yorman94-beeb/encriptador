const ingreseTexto = document.querySelector("#ingreseTexto");
const botonEncriptar = document.querySelector("#botonEncriptar");
const botonDesencriptar =document.querySelector("#botonDesencriptar");
const mensajeFinal = document.querySelector("#mensajeFinal");
const botonCopiar = document.querySelector("#botonCopiar");
const muñeco = document.querySelector("#muñeco");
const rightInfo = document.querySelector("#rightInfo");
const right = document.querySelector("#right")


let reemplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],

]


const replace = (nuevovalor) =>{
    mensajeFinal.innerHTML= nuevovalor;

    muñeco.classList.add("oculto");

    ingreseTexto.value="";
    rightInfo.style.display="none";
    botonCopiar.style.display= "block";
    right.classList.add("ajustar");
    mensajeFinal.classList.remove("organizar");
}

const reset =() =>{
    mensajeFinal.innerHTML="";

    muñeco.classList.remove("oculto");

    rightInfo.style.display="block";
    botonCopiar.style.display= "none";
    right.classList.remove("ajustar");
    mensajeFinal.classList.add("organizar");
    ingreseTexto.focus();
}

botonEncriptar.addEventListener("click", () => {
    const texto = ingreseTexto.value.toLocaleLowerCase();
    if(texto!= ""){

    function encriptar(newText){
        for(let i = 0; i< reemplazar.length; i++)
            {
            if (newText.includes(reemplazar[i][0])){
                newText = newText.replaceAll(reemplazar[i][0], reemplazar[i][1]);
            };
        };
        return newText;
    };
 } 
 else{
        alert("ingrese texto a encriptar")
        reset();
    }
    
    replace(encriptar(texto));
    
 
});

botonDesencriptar.addEventListener("click", ()=>{
    const texto = ingreseTexto.value.toLocaleLowerCase();
    if(texto !=""){
    function desencriptar(newText){
        for(let i =0; i< reemplazar.length; i++)
        {
            if(newText.includes(reemplazar[i][1])){
                newText = newText.replaceAll(reemplazar[i][1],reemplazar[i][0]);
            };

        }
        return newText;
    }

}else{
    alert("ingrese texto a desencriptar");
    reset();
}
 replace(desencriptar(texto));

})

botonCopiar.addEventListener("click",() =>{
    let texto = mensajeFinal;
    navigator.clipboard.writeText(texto.value);
    alert("texto copiado");
    reset();
    
}
)

