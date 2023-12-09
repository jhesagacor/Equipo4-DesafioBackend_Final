const setToken = (token) => {
    document.cookie = "token="+token+"; path=/";
};

const getToken = () => {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim(); 
        const cookieParts = cookie.split('=');    
    if (cookieParts[0] === 'token') {
      return cookieParts[1];
    }
  }
  return null;
}

const deleteToken = () => {
  let fechaExpiracion = new Date(0);  
  document.cookie = "token=; expires=" + fechaExpiracion.toUTCString();
}