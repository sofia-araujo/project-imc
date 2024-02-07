function imc(){
    let peso = document.querySelector("#peso").value
    let altura = document.querySelector("#altura").value
    if(peso === "" || altura === ""){
        alert("Preencha todos os campos")
        reload()
    }else if(peso === isNaN(peso) || peso < 3){
        alert("Digite um peso valido")
        reload()
    }else if(altura === isNaN(altura) || altura < 1){
        alert("Digite uma altura válida")
        reload()
    }else{
    let calculo = Number(peso) / (Number(altura) ** 2)
    imcResultado = calculo.toFixed(2)

        if(imcResultado < 16.9){
            resultadoPeso.innerHTML = "Muito abaixo do peso"
            resultadoPeso.style.color = "red"
        }else if(imcResultado >= 17 && imcResultado <= 18.4){
            resultadoPeso.innerHTML = "abaixo do peso"
            resultadoPeso.style.color = "orange"
        }else if(imcResultado >= 18.5 && imcResultado <= 24.9){
            resultadoPeso.innerHTML = "Peso normal"
            resultadoPeso.style.color = "green"
        }else if(imcResultado >= 25 && imcResultado <= 29.9){
            resultadoPeso.innerHTML = "Acima do peso"
            resultadoPeso.style.color = "yellow"
        }else if(imcResultado >= 30 && imcResultado <= 34.9){
            resultadoPeso.innerHTML = "Obesidade grau I"
            resultadoPeso.style.color = "orange"
        }else if(imcResultado >= 35 && imcResultado <= 40){
            resultadoPeso.innerHTML = "Obesidade grau II"
            resultadoPeso.style.color = "red"
        }else{
            resultadoPeso.innerHTML = "Obesidade grau III"
            resultadoPeso.style.color = "black"
        }
        return imcResultado
    }
}

let resultadoImc = document.querySelector("#resultado-imc")
let resultadoPeso = document.querySelector("#resultado-peso")
let botao = document.querySelector("#botao")
    botao.addEventListener("click", function(){
        resultadoImc.innerHTML = imc()
    })