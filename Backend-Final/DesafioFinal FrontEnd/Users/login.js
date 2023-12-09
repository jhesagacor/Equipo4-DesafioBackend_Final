const URL_API  = 'http://localhost:3000/users/login';

const EMAIL = document.querySelector('#email');
const PASSWORD = document.querySelector('#password');
const LOGIN_BUTTON = document.querySelector('#login');

LOGIN_BUTTON.addEventListener('click', () => {
    login();
});

const login = async () => {
    const user = {
        email: EMAIL.value,
        password: PASSWORD.value
    }
    const response = await fetch(URL_API, {
        method: 'POST',
        headers: {'Content-type': 'application/json;charset=UTF-8'},
        body: JSON.stringify(user)
        
    });

    const parsed = await response.json()
    //document.cookie = "token="+parsed.data+"; path=/";
    setToken(parsed.data)
    if(response.status === 200){
        //console.log(response);
        alert("Usuario identificado correctamente");
        window.location.href = '../index.html';
    }
    else{
        alert("Se presento un error");
    }
};