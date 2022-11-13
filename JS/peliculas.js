
const contenedorReco = document.getElementById('contenedorReco')
const contenedorTrend = document.getElementById('contenedorTrend')
const idBanner = document.getElementById('idBanner')
const title = document.getElementById('title')
const descrip = document.getElementById('descrip')
const original = document.getElementById('original')
const year = document.getElementById('year')
const time = document.getElementById('time')
const tags = document.getElementById('tags')
const director = document.getElementById('director')
const age = document.getElementById('age')
const play = document.getElementById('butts')
const saveFav = document.getElementById('buttx')
const favoritesList = document.getElementById('favoritos')
const menu = document.getElementById('menu')
let selectedMovie
const localStorage = window.localStorage;
const url = 'https://ghibliapi.herokuapp.com/films'


class Peliplu {
    constructor(fotoBanner, fotoTarjeta, fotoRating, title, description, id, japanTitle, releaseYear, duration, tags, direct, pg, trailer) {
        this.fotoBanner = fotoBanner
        this.fotoTarjeta = fotoTarjeta
        this.fotoRating = fotoRating
        this.title = title
        this.description = description
        this.id = id
        this.japanTitle = japanTitle
        this.releaseYear = releaseYear
        this.duration = duration
        this.tags = tags
        this.direct = direct
        this.pg = pg
        this.trailer = trailer
    }

}
//test


async function getMovies(url){//aca se creaun una funcion asincronica, osea que es una funcion que se ejecuta en segundo plano
    let response = await fetch(url) //esto es para obtener respuesta del api, fetch es por asi decirlo pedir la descarga de la información de la Api
    let data = await response.json(); //await como lo dice su nombre, nos esta pidiendo que esperemos a que nos manden respues/que se realice el proceso de pedir la información de la api. Await es esperar a que un proceso termine para asi empezar otro
    console.log(data); 
    let i =0; 
    
    data.forEach((movie)=>{
        let newMovie
        console.log(i%2==0)
        if(i%2==0){
            newMovie= new Peliplu(movie.movie_banner,movie.image,'assets/cutestar.png',movie.title,movie.description,movie.id,movie.original_title,movie.release_date,movie.running_time,movie.rt_score,movie.director,'pg 13',movie.url)  
            recommended.push(newMovie)
        }else{
            newMovie= new Peliplu(movie.movie_banner,movie.image,'assets/cutestar.png',movie.title,movie.description,movie.id,movie.original_title,movie.release_date,movie.running_time,movie.rt_score,movie.director,'pg 13',movie.url)  
            trending.push(newMovie)
        }
        i++
    })
    
}

async function getAllMovies(){
    await getMovies(url); 
}

let recommended = []
let trending = []
let favorites = []


async function loadPageUwU() {
    await getAllMovies();
    selectedMovie = recommended[0]
    idBanner.src = selectedMovie.fotoBanner
    title.innerHTML = selectedMovie.title
    descrip.innerHTML = selectedMovie.description
    original.innerHTML = selectedMovie.japanTitle
    year.innerHTML = selectedMovie.releaseYear
    time.innerHTML = selectedMovie.duration
    tags.innerHTML = selectedMovie.tags
    director.innerHTML = selectedMovie.direct
    age.innerHTML = selectedMovie.pg
    saveFav.addEventListener('click', saveToFavorite)
    loadFavoritos()
    play.addEventListener('click', playTrailer)
    let opciones
    recommended.forEach((peli) => {
        opciones = `
        <div class="pain">
            <img id=${peli.id} src=${peli.fotoTarjeta} class="serie1" onClick="yes(this)"/>
            <img id=${peli.id} src=${peli.fotoRating} class="rating"/>
        </div>
        `

        contenedorReco.innerHTML += opciones;

    })
    trending.forEach((peli) => {
        opciones = `
        <div class="pain">
            <img id=${peli.id} src=${peli.fotoTarjeta} class="serie1" onClick="yes(this)"/>
            <img id=${peli.id} src=${peli.fotoRating} class="rating"/>
        </div>
        `

        contenedorTrend.innerHTML += opciones;

    })

}

function loadFavoritos() {
    let savedFavorites = localStorage.getItem('favorites')
    if (savedFavorites != null) {
        favorites = JSON.parse(savedFavorites)
        console.log(favorites)
        displayFavorites()
    }
}

function playTrailer() {
    window.open(selectedMovie.trailer);
}

function saveToFavorite() {
    let found = false
    for (let i = 0; i < favorites.length && !found; i++) {
        if (favorites[i].id == selectedMovie.id) {
            found = true
            favorites.splice(i,1)
            let json = JSON.stringify(favorites);
            localStorage.setItem('favorites', json);
        }
    }
    if (found) {
        alert('The movie is already in your favorites')
        
    } else {
        alert('The movie is now added to your favorites')
        favorites.push(selectedMovie)
        let json = JSON.stringify(favorites);
        localStorage.setItem('favorites', json);
    }
    displayFavorites()
}

function displayFavorites() {
    let opciones
    favoritesList.innerHTML = ''
    favorites.forEach((peli) => {
        opciones = `
        <div class="pain">
            <img id=${peli.id} src=${peli.fotoTarjeta} class="serie1" onClick="yes(this)"/>
        </div>
        `

        favoritesList.innerHTML += opciones
    })
}

function yes(peliSelected) {
    id = peliSelected.id
    for (let index = 0; index < recommended.length; index++) {
        if (id == recommended[index].id) {
            selectedMovie = recommended[index]
            idBanner.src = recommended[index].fotoBanner
            title.innerHTML = recommended[index].title
            descrip.innerHTML = recommended[index].description
            original.innerHTML = recommended[index].japanTitle
            year.innerHTML = recommended[index].releaseYear
            time.innerHTML = recommended[index].duration
            tags.innerHTML = recommended[index].tags
            director.innerHTML = recommended[index].direct
            age.innerHTML = recommended[index].pg


        }
    }
    for (let index = 0; index < trending.length; index++) {
        if (id == trending[index].id) {
            selectedMovie = trending[index]
            idBanner.src = trending[index].fotoBanner
            title.innerHTML = trending[index].title
            descrip.innerHTML = trending[index].description
            original.innerHTML = trending[index].japanTitle
            year.innerHTML = trending[index].releaseYear
            time.innerHTML = trending[index].duration
            tags.innerHTML = trending[index].tags
            director.innerHTML = trending[index].direct
            age.innerHTML = trending[index].pg
        }

    }

}

window.addEventListener('load', loadPageUwU)
