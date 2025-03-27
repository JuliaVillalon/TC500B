//console.log("Hola desde javascript !!!");
//alert("hola");
//confirm("Quieres borrar todo?");
//prompt("dime tu nombre");

const username = document.getElementById("username");
const password = document.getElementById("password");

const login = () => {
    // console.log(username.value, password.value);
    if(username.value === "juls" && password.value === "123") {
        sessionStorage.setItem("name", "Juls");
        window.location = "/pages/home.html";
    }
    else {
        alert("Credenciales incorrectas");
    }
};

const btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click", login);

password.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        login();
    }
});
