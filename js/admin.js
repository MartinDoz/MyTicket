const Shows = [
    {
        name: 'DUKI',
        dataPlace: '10/12/2022 - ESTADIO VELEZ SARFIELD',
        price: 10000,
        image: 'https://i.ibb.co/ZNbgC23/Duki-recital.jpg',
        stock: true
    },
    {
        name: 'DADDY YANKEE',
        dataPlace: '17/12/2022 - MOVISTAR ARENA',
        price: 22000,
        image: 'https://i.ibb.co/wNwddGy/Daddy-Yankee-Recital.jpg',
        stock: true
    },
    {
        name: 'HARRY STYLES',
        dataPlace: '29/12/2022 - MOVISTAR ARENA',
        price: 28000,
        image: 'https://i.ibb.co/xzRx7FM/Harry-Styles-Recital.jpg',
        stock: false
    }
];



const tableBodyHTML = document.getElementById('table-body');
const addShowForm = document.getElementById('addShowForm')
const cardsShow = document.getElementById('cardsShow')

let editable;
console.log(JSON.parse(localStorage.getItem('shows-key')))
let savedShows = JSON.parse(localStorage.getItem('shows-key')) || Shows

// // if(savedShows === null)
// if (!savedShows) {
    //     savedShows = Shows
    // }
    console.log(savedShows)

function renderShows() {
    console.log("loco")
    tableBodyHTML.innerHTML = '';
    savedShows.forEach((elem, index) => {
        tableBodyHTML.innerHTML += `<tr>
                                        <td>
                                            <img class="table-img" src=${elem.image} />
                                            </td>
                                            <td>${elem.name}</td>
                                            <td>${elem.dataPlace}</td>
                                            <td>$ ${elem.price}</td>
                                            <td class="">${elem.stock ? `<i class="fa-solid fa-check"></i>` : `<i class="fa-solid fa-xmark"></i>`}  </td>
                                            <td>
                                            <button class="btn btn-danger p-1 me-2" onclick="deleteShow(${index})">
                                            <i class="fa-solid fa-trash-can"></i>
                                            </button>
                                            <button class="btn btn-success p-1" onclick="editShow(${index})"><i
                                            class="fa-solid fa-pencil"></i> </button>
                                            </td>
                                            </tr>`

    });
}

renderShows();


addShowForm.addEventListener('submit', (evt) => {

    if (!addShowForm.checkValidity()) {
        return
    }
    evt.preventDefault();
    console.dir(evt.target.elements);
    const formEl = evt.target.elements;
    console.log(formEl);
    console.dir(document.getElementById('date').value)
    let newShow = {
        name: formEl.name.value,
        dataPlace: formEl.dataPlace.value,
        price: formEl.price.valueAsNumber,
        image: formEl.image.value,
        stock: formEl.stock.checked,
        eventDate: formEl.eventDate.value
    }

    if(editable >= 0) {
        savedShows[editable] = newShow;
    } else {
        savedShows.push(newShow)
    }

    editable = undefined; 

    localStorage.setItem('shows-key', JSON.stringify(savedShows))

    renderShows()
 
    addShowForm.reset()
})

function deleteShow(idx) {
    savedShows.splice(idx,1);
    localStorage.setItem('shows-key', JSON.stringify(savedShows))
    renderShows();
}

function editShow(idx) {
    const showToEdit = savedShows[idx]
    
    const formEl = addShowForm.elements

    formEl.name.value = showToEdit.name;
    formEl.dataPlace.value = showToEdit.dataPlace;
    formEl.price.valueAsNumber = showToEdit.price;
    formEl.image.value = showToEdit.image;
    formEl.eventDate.value = showToEdit.eventDate;
    formEl.stock.checked = showToEdit.stock;

    editable = idx
    
}

function setMinDate() {
    const dateHTML = document.getElementById('date');
    const currentDate = new Date();
    const day = currentDate.getDate() + 1;
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    dateHTML.setAttribute('min', `${year}-${month}-${day}`)
}

setMinDate();