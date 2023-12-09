const URL_FIREBASE = 'http://localhost:3000/posts/' 

const buttonX= document.querySelector('#closeButton')
const buttonPublish = document.querySelector('#publishButton')
const inputTitle = document.querySelector('#cajaTxt__titulo')
const inputTeamName = document.querySelector('#teamName')
const inputCoverImage = document.querySelector('#coverImg')
const inputPostContent = document.querySelector('#postContTxt')
const inputTags= document.querySelector('#tagTxt')
const inputTimeRead= document.querySelector('#timeRead')


const createPost = async() => {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
    const post = {
        title: inputTitle.value,
        contenido: inputPostContent.value,
        teamName: inputTeamName.value,
        image: inputCoverImage.value,
        tags: inputTags.value.split(','),
        datePost: Date.now(),
        timeRead: inputTimeRead.value
    }
    const url = URL_FIREBASE;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'authToken': token,//'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjUyZWI1MzRkMGZlYzA0YTA0NzIwYjE5IiwiaWF0IjoxNjk3NjUzMDY3LCJleHAiOjE2OTc3Mzk0Njd9.FJ3h5nllDzb0kSfXRbtmO19gLHoGtZ9ngxV4zCPz3rI',
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(post)
    })
    if(response.status === 201){
        alert("Post creado correctamente");
        window.location.href = '../index.html';
        
    }
}

buttonPublish.addEventListener('click', () => {
    createPost()
});

