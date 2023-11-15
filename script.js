let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset1 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
let charset2 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
let charset3 = '0123456789';
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    let pass = '';

    if(document.getElementById('ambs').checked) {
        for(let i = 0, n = charset1.length; i < sliderElement.value; ++i){
            pass += charset1.charAt(Math.floor(Math.random() * n));
            containerPassword.classList.remove("hide");
            password.innerHTML = pass;
            novaSenha = pass;
        }
    } else if (document.getElementById('lts').checked) {
        for(let i = 0, n = charset2.length; i < sliderElement.value; ++i){
            pass += charset2.charAt(Math.floor(Math.random() * n));
            containerPassword.classList.remove("hide");
            password.innerHTML = pass;
            novaSenha = pass;
        }
    } else {
        for(let i = 0, n = charset3.length; i < sliderElement.value; ++i){
            pass += charset3.charAt(Math.floor(Math.random() * n));
            containerPassword.classList.remove("hide");
            password.innerHTML = pass;
            novaSenha = pass;
        }
    };
}

function copyPassword(){
    navigator.clipboard.writeText(novaSenha);
    alert("Senha copiada com sucesso!");
}
