
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

let spirited = new Peliplu('assets/spiritB.jpg', 'assets/spiritT.jpeg', 'assets/cutestar.png', 'SPIRITED AWAY', 'During her familys move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.', 'spirit', 'Sen to Chihiro no kamikakushi', '2001', '2h 5m', 'ANIMATION - ADVENTURE - FAMILY', 'Directed by Hayao Miyazaki', 'Rated PG', 'https://www.youtube.com/watch?v=ByXuk9QqQkk')
let ponyo = new Peliplu('assets/ponyoB.jpg', 'assets/ponyoT.webp', 'assets/cutestar.png', 'PONYO', 'A five-year-old boy develops a relationship with Ponyo, a young goldfish princess who longs to become a human after falling in love with him.', 'ponyo', 'Gake no ue no Ponyo', '2008', '1h 41m', 'ADVENTURE - COMEDY', 'Directed by Hayao Miyazaki', 'Rated G', 'https://www.youtube.com/watch?v=CsR3KVgBzSM')
let totoro = new Peliplu('assets/totoroB.jpg', 'assets/totoroT.jpg', 'assets/cutestar.png', 'MY NEIGHBOR TOTORO', 'When two girls move to the country to be near their ailing mother, they have adventures with the wondrous forest spirits who live nearby.', 'my', 'Tonari no Totoro', '1988', '1h 26m', 'COMEDY - FAMILY', 'Directed by Hayao Miyazaki', 'Rated G', 'https://www.youtube.com/watch?v=BjeBG8Xrci8')
let kikid = new Peliplu('assets/kikiB.jpg', 'assets/kikiT.webp', 'assets/cutestar4.png', 'KIKI DELIVERY SERVICE', 'A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.', 'kikis', 'Majo no takkyûbin', '1989', '1h 43m', 'ADVENTURE - FANTASY', 'Directed by Hayao Miyazaki', 'Rated G', 'https://www.youtube.com/watch?v=4bG17OYs-GA')
let mononoke = new Peliplu('assets/mononokeB.jpg', 'assets/mononokeT.png', 'assets/cutestar.png', 'PRINCESS MONONOKE', 'On a journey to find the cure for a Tatarigamis curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony. In this quest he also meets San, the Mononoke Hime.', 'princess', 'Mononoke-hime', '1997', '2h 14m', 'ACTION - ADVENTURE', 'Directed by Hayao Miyazaki', 'PG 13', 'https://www.youtube.com/watch?v=4OiMOHRDs14')
let whisperHeart = new Peliplu('assets/whisperB.png', 'assets/whisperT.webp', 'assets/cutestar4.png', 'WHISPER OF THE HEART', 'A love story between a girl who loves reading books, and a boy who has previously checked out all of the library books she chooses.', 'whis', 'Mimi wo sumaseba', '1995', '1h 51m', 'DRAMA - FAMILY', 'Directed by Yoshifumi Kondô', 'Rated G', 'https://www.youtube.com/watch?v=0pVkiod6V0U')
let fireflies = new Peliplu('assets/firefliesB.webp', 'assets/firefliesT.jpg', 'assets/cutestar3.png', 'GRAVE OF FIREFLIES', 'A young boy and his little sister struggle to survive in Japan during World War II.', 'grave', 'Hotaru no haka', '1988', '1h 29m', 'DRAMA - WAR', 'Directed by Isao Takahata', 'PG 13', 'https://www.youtube.com/watch?v=4vPeTSRd580')
let castleInTheSky = new Peliplu('assets/skyB.jpg', 'assets/skyT.jpg', 'assets/cutestar4.png', 'CASTLE IN THE SKY', 'A young boy and a girl with a magic crystal must race against pirates and foreign agents in a search for a legendary floating castle.', 'castle', 'Tenkû no shiro Rapyuta', '1986', '2h 5m', 'ADVENTURE - FANTASY', 'Directed by Hayao Miyazaki', 'Rated PG', 'https://www.youtube.com/watch?v=8ykEy-yPBFc')
let nausicaM = new Peliplu('assets/nausicaB.jpg', 'assets/nausicaT.jpg', 'assets/cutestar4.png', 'NAUSICAA', 'Warrior and pacifist Princess Nausicaä desperately struggles to prevent two warring nations from destroying themselves and their dying planet.', 'naus', 'Kaze no tani no Naushika', '1984', '1h 57m', 'ADVENTURE - SCI-FI', 'Directed by Hayao Miyazaki', 'Rated G', 'https://www.youtube.com/watch?v=6zhLBe319KE')
let souvenirsMarnie = new Peliplu('assets/marnieB.jpg', 'assets/marnieT.jpg', 'assets/cutestar3.png', 'WHEN MARNIE WAS THERE', 'Due to 12 y.o. Annas asthma, she is sent to stay with relatives of her guardian in the Japanese countryside. She likes to be alone, sketching. She befriends Marnie. Who is the mysterious, blonde Marnie.', 'marnie', 'Omoide no Marnie', '2014', '1h 43m', 'DRAMA - FAMILY', 'Directed by Hiromasa Yonebayashi', 'Rated PG', 'https://www.youtube.com/watch?v=jjmrxqcQdYg')
let poppyHill = new Peliplu('assets/poppyB1.jpg', 'assets/poppyT.webp', 'assets/cutestar4.png', 'FROM UP ON POPPY HILL', 'A group of Yokohama teens look to save their schools clubhouse from the wrecking ball in preparations for the 1964 Tokyo Olympics.', 'hill', 'Kokuriko-zaka kara', '2011', '1h 31m', 'COMEDY - DRAMA', 'Directed by Gorô Miyazaki', 'Rated PG', 'https://www.youtube.com/watch?v=9nzpk_Br6yo')
let porcoR = new Peliplu('assets/porcoB.webp', 'assets/porcoT.webp', 'assets/cutestar3.png', 'PORCO ROSSO', 'n 1930s Italy, a veteran World War I pilot is cursed to look like an anthropomorphic pig.', 'rosso', 'Kurenai no buta', '1992', '1h 34m', 'ADVENTURE - COMEDY', 'Directed by Hayao Miyazaki', 'Rated PG', 'https://www.youtube.com/watch?v=awEC-aLDzjs')
let pompoko = new Peliplu('assets/pompokoB.webp', 'assets/pompokoT.jpg', 'assets/cutestar3.png', 'POMPOKO', 'A community of magical shape-shifting raccoon dogs struggle to prevent their forest home from being destroyed by urban development.', 'poko', 'Heisei tanuki gassen ponpoko', '1994', '1h 59m', 'COMEDY - FANTASY', 'Directed by Isao Takahata', 'Rated PG', 'https://www.youtube.com/watch?v=HhyanivaogE')
let oceanWaves = new Peliplu('assets/wavesB.webp', 'assets/wavesT.jpg', 'assets/cutestar3.png', 'OCEAN WAVES', 'As a young man returns home after his first year away at college he recalls his senior year of high school and the iron-willed, big city girl that turned his world upside down.', 'ow', 'Umi ga kikoeru', '1993', '1h 16m', 'ROMANCE', 'Directed by Tomomi Mochizuki', 'Rated PG-13', 'https://www.youtube.com/watch?v=tfkHiHjrqa8')
let howlsM = new Peliplu('carru4.jpg', 'assets/howlT.webp', 'assets/cutestar.png', 'HOWLS MOVING CASTLE', 'When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.', 'howls', 'Hauru no ugoku shiro', '2004', '1h 59m', 'FANTASY - ROMANCE', 'Directed by Hayao Miyazaki', 'Rated PG', 'https://www.youtube.com/watch?v=iwROgK94zcM')
let talesEarthSea = new Peliplu('assets/talesB.jpg', 'assets/talesT.jpg', 'assets/cutestar3.png', 'TALES FROM EARTHSEA', 'n a mythical land, a man and a young boy investigate a series of unusual occurrences.', 'tales', 'Gedo senki', '2006', '1h 55m', 'FANTASY - ADVENTURE', 'Directed by Gorô Miyazaki', 'Rated PG-13', 'https://www.youtube.com/watch?v=8hxYx3Jq3kI')



let recommended = []
let trending = []
let favorites = []


function loadPageUwU() {
    //menu.style.display='none'
    recommended.push(spirited, ponyo, kikid, mononoke, whisperHeart, fireflies, pompoko, howlsM)
    trending.push(totoro, castleInTheSky, nausicaM, souvenirsMarnie, poppyHill, porcoR, oceanWaves, talesEarthSea)
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
