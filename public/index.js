import express from 'express';
const app = express();
const port = 5003;
app.use("/", express.static("public"));
app.listen(port, console.log("http://localhost:" + port));

const username = document.getElementById("username");
const password = document.getElementById("password");

const login = async => {
    const user = { username: username.value, password: password.value };
};
    const respuesta = await fetch("http://localhost:5002/login", {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(user),
        });
    const data = await respuesta.json();
    if (data.isLogin) {
        sessionStorage.setItem("id", data.user.id);
        sessionStorage.setItem("name", data.user.name);
        window.location = "/pages/home.html?";
    } else {
        alert("credenciales incorrectas");
    }

const btnLogin = document.getElementById("btnLogin");