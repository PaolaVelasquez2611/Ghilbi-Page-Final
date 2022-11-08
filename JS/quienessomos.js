const tarjetas = document.getElementById ('slide-container')


let zharick ={

    img: `<img src="./assets/zhar.png"`,
    name: "Zharick Mazuera",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

}

let nayo ={

    img: `<img src="./assets/nayo.png"`,
    name: "Nayibe Gonzales",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
}

let pao ={

    img: `<img src="./assets/pao.png"`,
    name: "Paola Velasquez",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
}

let creadores = [zharick, nayo, pao]

for(let i = 0; i < creadores.length; i++){
    tarjetas.innerHTML += infoCreadores(creadores[i])

}

function infoCreadores(creador){

    let html = ` <div id="card">
                     <div id="image-content">


                        <div id="card-image">

                            ${creador.img}

                        </div>
                    </div>

                    <div id="card-content">
                        <h2 class="name">${creador.name}</h2>
                        <p class="description">${creador.description}</p>
                        <button class="button">View More</button>
                    </div>
                    
                </div>`
                return(html)

}



