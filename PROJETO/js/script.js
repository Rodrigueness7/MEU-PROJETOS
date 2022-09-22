//Simples validação de formulário e dados.
const inputName = document.getElementById('name'); //Seta na variável inputName a <tag html> com o ID igual à "name".
const inputEmail = document.getElementById('email'); //Seta na variável inputEmail a <tag html> com o ID igual à "email".
const validar = document.getElementById('validar'); //Seta na variável validar a <tag html> com o ID igual à "validar".
validar.addEventListener("click", (event) => { //Ao clicar na variável validar que é referente ao ID "validar", ele iria correr as setenças a baixo.
        if(inputName.value.length < 26) { //Se o campo nome for menor que 26 caracters, ele muda a borda do campo para vermelho.
            inputName.style.cssText = "border: 1px solid red"
        } else { //Se for maior, ele muda a borda do campo para verde.
            inputName.style.cssText = "border: 1px solid green"
        }
        if(inputEmail.value.length < 10) {
            inputEmail.style.cssText = "border: 1px solid red"
        } else {
            inputEmail.style.cssText = "border: 1px solid green"
        }
    }
)
