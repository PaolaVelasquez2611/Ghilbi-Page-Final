const localStorage = window.localStorage
const nameUser = document.getElementById('name')
const username = document.getElementById('username')
const age = document.getElementById('age')
const bio = document.getElementById('bio')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConf = document.getElementById('passwordConf')
const img = document.getElementById('img')
const imgURL = document.getElementById('imgUrl')
const nameHolder =document.getElementById('nameHolder')
const saveProfile = document.getElementById('savemf')
let user

class User{
    constructor(img,name,userName,age,bio, Email, password){
        this.img=img
        this.name=name
        this.userName=userName
        this.age=age
        this.bio=bio
        this.Email=Email
        this.password=password 
    }
}

function load(){
    loadCurrentUser()
    nameHolder.innerHTML=user.name
    imgURL.placeholder=user.img
    nameUser.placeholder= user.name
    username.placeholder= user.userName
    age.placeholder= user.age
    bio.placeholder= user.bio
    email.placeholder= user.Email
    img.src=user.img
    saveProfile.addEventListener('click',saveChanges)
}

function loadCurrentUser(){
    let currentUser = localStorage.getItem('currentUser')
    if(currentUser!=null){
        user = JSON.parse(currentUser)
    }else{
        user= new User('assets/image13.png','Zharick','Zha','19','https://www.youtube.com/watch?v=xvFZjo5PgG0','test@gmail.com','123')
    }
    displayUser()
}

function displayUser() {
    if(user!=null){
        console.log(user)
    }
}

function saveChanges(){
  
    if(imgURL.value!=''){
        user.img=imgURL.value
    }
    if(nameUser.value!=''){
        user.name=nameUser.value
    }
    if(username.value!=''){
        user.username=username.value
    }
    if(imgURL.value!=''){
        user.img=imgURL.value
    }
    if(age.value!=''){
        user.img=imgURL.value
    }
    if(bio.value!=''){
        user.bio=bio.value
    }
    
    if(password.value!='' && passwordConf.value!='' && user.password==password.value ){
        alert('la contraseña se a cambiado con exito')
    }else if(password.value!='' && user.password!=password.value){
        alert('la contraseña no es correcta')
    }
    let json = JSON.stringify(user);
    localStorage.setItem('currentUser', json);
    alert('Se han aplicado los cambios')
    load()
}

img.onerror =function() {
    alert('la foto ' + this.src+ 'no es valida, porfavor cambiela');
    img.src='assets/image13.png'
  };

window.addEventListener('load', load)