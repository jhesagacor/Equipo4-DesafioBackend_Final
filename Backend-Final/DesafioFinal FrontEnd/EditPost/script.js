const URL_FIREBASE = 'http://localhost:3000/posts/'
const search = window.location.search  
const url = new URLSearchParams(search) 
const ID_POST = url.get('id')        

const buttonX= document.querySelector('#closeButton')
const buttonPublish = document.querySelector('#publishButton')
const inputTitle = document.querySelector('#cajaTxt__titulo')
const inputTeamName = document.querySelector('#teamName')
const inputCoverImage = document.querySelector('#coverImg')
const inputPostContent = document.querySelector('#postContTxt')
const inputTags= document.querySelector('#tagTxt')
const inputTimeRead= document.querySelector('#timeRead')
let post;

const getInfoById = async() => {
    const url = URL_FIREBASE + ID_POST;
    const info = await fetch(url)
    const parsed = await info.json()
    post = parsed.data;
    console.log(parsed)
    inputTitle.value = post.title
    inputTeamName.value = post.teamName
    inputPostContent.value = post.contenido
    inputCoverImage.value = post.image
    inputTags.value = post.tags
    inputTimeRead.value = post.timeRead
}
getInfoById()


const updatePost = async() => {  
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');  
    const post_ = {
        title: inputTitle.value,
        contenido: inputPostContent.value,
        teamName: inputTeamName.value,
        image: inputCoverImage.value,
        tags: inputTags.value.split(','),
        datePost: Date.now(),
        timeRead: inputTimeRead.value
    }


    const url = URL_FIREBASE + ID_POST;
    const response = await fetch(url, {
        method: 'PATCH',
        headers: {
            'authToken': token,//'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjUyZWI1MzRkMGZlYzA0YTA0NzIwYjE5IiwiaWF0IjoxNjk3NjUzMDY3LCJleHAiOjE2OTc3Mzk0Njd9.FJ3h5nllDzb0kSfXRbtmO19gLHoGtZ9ngxV4zCPz3rI',
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(post_)
    })
    if(response.status === 201){
        alert("Post actualizado correctamente")
        window.location.href = '/Post/indexPs.html?id=' + ID_POST
    }
}

buttonPublish.addEventListener('click', () => {
    updatePost()
});