function store(){

    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(name.value.length == 0){
        alert('Porfavor agrega tu email');

    }else if(pw.value.length == 0){
        alert('Porfavor agrega tu contraseña');

    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Porfavor agrega algo en email y contraseña');

    }else if(pw.value.length > 8){
        alert('Max de 8');

    }else if(!pw.value.match(numbers)){
        alert('Porfavor agrega 1 numero');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('Porfavor agrega una mayuscula');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('Porfavor agrega una minuscula');

    }else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        alert('Tu cuenta ha sido creada :)');
    }
}

//checking
function check(){
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    var userRemember = document.getElementById("rememberMe");

    if(userName.value == storedName && userPw.value == storedPw){
        window.location.href = "index-admin.html"; alert('Login exitoso :D'); 
    }else{
        alert('Error en login');
    }
}
var user = {
    email: email,
    username: username,
    password: password,
};

localStorage.setItem(userName, JSON.stringify(user));

var username = document.getElementById("username").value; 

// cuando te queres loggear

var userFromLocalStorage = JSON.parse(localStorage.getItem(username));

if(!userFromLocalStorage){
    console.log('Usuario no existe');
}

var password = document.getElementById("password").value;

if (userFromLocalStorage.password !== password){
    console.log('Contraseña erronea');
}