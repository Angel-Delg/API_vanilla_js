const API_URL = 'https://jsonplaceholder.typicode.com'
const xhr = new XMLHttpRequest()

const onRequestHandler = () => {
    if(xhr.readyState === 4 && xhr.status === 200){
        const data = JSON.parse(xhr.response)
        const HTMLResponse = document.getElementById('App')

        const template = data.map( user => `<li>👤${user.name}  📞${user.phone}</li>`)
        HTMLResponse.innerHTML = `<ol>${template}</ol>`
    }
}
xhr.addEventListener('load', onRequestHandler)
xhr.open('GET',`${API_URL}/users`)
xhr.send()


// Como hacer una peticion usando fetch
const tpl = document.createElement('ol')
const HTMLApp = document.querySelector('#App_fetch').appendChild(tpl)

fetch(`${API_URL}/users`)
    .then(response => response.json())
    .then(user => {
        const itemsList = user.map( user => `<li>👤${user.name}  📞${user.phone}</li>`)
        HTMLApp.innerHTML = `${itemsList}`
    })
    .catch(error => {
        console.log(error)
    })

// Usando axios 

const createList = document.createElement('ol')
const templateApp = document.getElementById('App_axios').appendChild(createList)

axios
.get(`${API_URL}/users`)
.then( response => response.data )
.then( user => {
    const users = user.map( user => `<li>👤${user.name}   📞${user.phone}</li>`)
    templateApp.innerHTML = `${users}`
})
