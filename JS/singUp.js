const localStorage = window.localStorage;
const submitUser = document.getElementById('userName')
const submitEmail = document.getElementById('email')
const submitPassword = document.getElementById('password')
const submitPasswordConf = document.getElementById('passwordConfirm')
const submit=document.getElementById('submit')
let users =[]

class User{
    constructor(img,name,userName,age,bio, Email, password, favorites){
        this.img=img
        this.name=name
        this.userName=userName
        this.age=age
        this.bio=bio
        this.Email=Email
        this.password=password
        this.favorites=favorites
    }

    addFavorites(favorites) {
        this.favorites=favorites
    }

}

function loadRegister(){
    submit.addEventListener('click',runForm)
    loadUSers()
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
        console.log(users)
        users.forEach((user) => {
            console.log(user)
        })
    }
}

function runForm(){
    let password = submitPassword.value
    let passwordConf=submitPasswordConf.value
    let user=submitUser.value
    let email=submitEmail.value
    if(searchUser(user)){
        alert('El usuario ya existe')
    }else if(password =="" || passwordConf==""){
        alert('contraseña no valida')
    }else if(password!=passwordConf){
        alert('las contraseñas no son iguales')
    }else{
        alert('Se creo el user '+user)
        let newUser = new User(null,user,user,null,null,email,password,null)
        users.push(newUser);
        saveUsers()
        document.location.href = 'Login.html';
    }
}

function searchUser(username){
    let found =false;
    users.forEach((user)=>{
        if(user.userName ==username && !found){
            found=true;
        }
    })
    return found;
}

function saveUsers(){
    let json = JSON.stringify(users);
    localStorage.setItem('users', json);
}

window.addEventListener('load',loadRegister)