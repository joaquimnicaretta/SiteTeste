console.log ("meu js rodou");

const inptNome = document.getElementById("inptNome")
const inptSenha = document.getElementById("inptSenha")
const btnEnviar = document.getElementById("btnEnviar")
const inptValor1 = document.getElementById("inptValor1")
const inptValor2 = document.getElementById("inptValor2")
const btnComparar = document.getElementById("btnComparar")
//funcao tradicional
function cliquei(){
    if(validate(inptNome.value) && validate(inptSenha.value)){
        console.log("certo")
        lblResultado.innerHTML = "DEU CERTO!";
    }
    
    else{
        
        console.log("erro")
        lblResultado.innerHTML = "ERRO";
    }    
}

function validate(valor){

    if(valor == ""){
        console.log("Input vazio! - ERRO")
        return false
    }
    return true
}

function compare(){
    console.log("comparando")
    if(inptValor1.value > inptValor2.value){
        inptValor1.classList.add("maior")
        return
    }
    inptValor2.classList.add("maior")
}



btnEnviar.onclick = cliquei
btnComparar.onclick = compare
