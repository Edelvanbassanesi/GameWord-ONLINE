document.querySelector('button').addEventListener('click', function(){
    window.location.href = "/GAMEWORD/index.html";
})
document.getElementById("mail").value = "";
document.getElementById("password").value = "";
function entrar(){
    var mail = document.getElementById("mail").value;
    var password = document.getElementById("password").value;
    if (mail === "" || password === "") {
        alert("Por favor, preencha todos os campos.");
    }
    else {
        alert("Login realizado com sucesso!");
        window.location.href = "/GAMEWORD/index.html";
    }
};
document.getElementById("indisponivel").innerHTML = "alert('Funcionalidade indisponível no momento.');";
