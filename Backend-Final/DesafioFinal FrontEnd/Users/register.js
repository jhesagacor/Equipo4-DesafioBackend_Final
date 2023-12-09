const URL_API  = 'http://localhost:3000/users/';

const PROFILE_NAME = document.querySelector('#profile_image');
const NAME = document.querySelector('#name');
const USER_NAME = document.querySelector('#user_name');
const EMAIL = document.querySelector('#email');
const PASSWORD = document.querySelector('#password');
const CONFIRM_PASSWORD = document.querySelector('#confirm_password');
const REGISTER_BUTTON = document.querySelector('#register-user');

REGISTER_BUTTON.addEventListener('click', () => {
    register();
});

const register = async () => {
    const user = {
        profile_image: PROFILE_NAME.value,
        name: NAME.value,
        user_name: USER_NAME.value,
        email: EMAIL.value,
        password: PASSWORD.value
    }
    const response = await fetch(URL_API, {
        method: 'POST',
        headers: {'Content-type': 'application/json;charset=UTF-8'},
        body: JSON.stringify(user)
        
    });

    if(response.status === 201){
        alert("Usuario registrado exitosamente");
        window.location.href = "login.html";
    }
    else{
        alert("Se presento un error");
    }
};