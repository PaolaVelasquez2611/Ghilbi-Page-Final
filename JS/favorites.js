const localStorage = window.localStorage;
const favoritesList = document.getElementById('favoritos')
const nameHolder= document.getElementById('nameHolder')
const img = document.getElementById('img')
let favorites =[]
let user

function loadFavoritosOwO(){
    console.log ('load')
   // let savedFavorites = localStorage.getItem('favorites')//
    let currentUser = localStorage.getItem('currentUser')
    console.log (currentUser)
    if(currentUser!=null){
        currentUser = JSON.parse(currentUser)
        console.log (currentUser.favorites)
        favorites = currentUser.favorites
    }

    if(currentUser!=null){
        user = currentUser
        nameHolder.innerHTML=user.name
        img.src=user.img
    }else{
        nameHolder.innerHTML='No User Login'
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
