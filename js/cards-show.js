const Shows = [
    {
        name: 'DUKI',
        place: '10/12/2022 - ESTADIO VELEZ SARFIELD',
        price: 10000,
        image: 'https://i.ibb.co/ZNbgC23/Duki-recital.jpg',
        stock: true
    },
    {
        name: 'DADDY YANKEE',
        place: '17/12/2022 - MOVISTAR ARENA',
        price: 22000,
        image: 'https://i.ibb.co/wNwddGy/Daddy-Yankee-Recital.jpg',
        stock: true
    },
    {
        name: 'HARRY STYLES',
        place: '29/12/2022 - MOVISTAR ARENA',
        price: 28000,
        image: 'https://i.ibb.co/xzRx7FM/Harry-Styles-Recital.jpg',
        stock: false
    }
];


const cardsShow = document.getElementById('cardsShow')

let savedShows = JSON.parse(localStorage.getItem('shows-key'))


if(!savedShows) {
    savedShows = Shows
}

function renderCardShows() {
    savedShows.forEach(elem => {
        cardsShow.innerHTML += `    <div class="col-12 col-sm-6 col-md-4 mt-4 mb-4 d-flex justify-content-center">
        <a href="#" target="_blank">
            <div class="profile-card-2"><img src=${elem.image} class="img-cards">
                <div class="profile-name">${elem.name}</div>
                <div class="profile-username">${elem.place}</div>
                <div class="profile-icons"><a href="https://www.facebook.com/" target="_blank" ><i class="fa fa-facebook"></i></a><a href="https://twitter.com/home" target="_blank"><i class="fa fa-twitter"></i></a><a href="https://www.instagram.com/" target="_blank"><i class="fa fa-instagram"></i></a></div>
            </div>
        </a>
    </div>`
    })
}

renderCardShows();
