const localStorage = window.localStorage;
const favoritesList = document.getElementById('favoritos')
const nameHolder= document.getElementById('nameHolder')
const img = document.getElementById('img')
let favorites =[]
let user

function loadFavoritosOwO(){
    let savedFavorites = localStorage.getItem('favorites')
    let currentUser = localStorage.getItem('currentUser')
    if(savedFavorites!=null){
        favorites = JSON.parse(savedFavorites)
    }

    if(currentUser!=null){
        user = JSON.parse(currentUser)
        nameHolder.innerHTML=user.name
        img.src=user.img
    }else{
        nameHolder.innerHTML='Zharick'
        img.src='assets/image13.png'
    }
    displayFavorites()
   
}

function displayFavorites() {
    let opciones

    favoritesList.innerHTML = ''
    favorites.forEach((peli) => {
        opciones = `
        <div class="pain">
            <img id=${peli.id} src=${peli.fotoTarjeta} class="serie1"/>
        </div>
        `

        favoritesList.innerHTML += opciones
    })
}

window.addEventListener('load', loadFavoritosOwO)
