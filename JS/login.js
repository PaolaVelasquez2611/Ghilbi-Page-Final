const localStorage =window.localStorage
const submit = document.getElementById('submit')
const submitUser = document.getElementById('user')
const password = document.getElementById('password')
let users= []
function loadLogin(){
    loadUSers()
    submit.addEventListener('click',logIn)
}

function logIn(){
    let found =false
    users.forEach((user)=>{
        if(user.userName == submitUser.value){
            if(user.password == password.value){
                alert('Bienvenido '+submitUser.value)
            }else{
                alert('contraseña incorrecta')
            }
            found=true
        }
    })
    if(!found){
        alert('el usuario no existe')
    }
}

function loadUSers(){
    let savedUsers = localStorage.getItem('users')
    if(savedUsers!=null){
        users = JSON.parse(savedUsers)
    }
    displayUser()
}

function displayUser() {
    if(users!=null){
        users.forEach((user) => {
            console.log(user)
        })
    }
}

window.addEventListener('load',loadLogin)