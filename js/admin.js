
import { Shows } from './show-list.js';

const tableBodyHTML = document.getElementById('table-body');
const addShowForm = document.getElementById('addShowForm')
const cardsShow = document.getElementById('cardsShow')

let editable;

let savedShows = JSON.parse(localStorage.getItem('shows-key'))

// if(savedShows === null)
if (!savedShows) {
    savedShows = Shows
}

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
    let newShow = {
        name: formEl.name.value,
        dataPlace: formEl.dataPlace.value,
        price: formEl.price.valueAsNumber,
        image: formEl.image.value,
        stock: formEl.stock.checked
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
    localStorage.setItem('shows-key', JSON.stringify(Shows))
    renderShows();
}

function editShow(idx) {
    const showToEdit = savedShows[idx]
    
    const formEl = addShowForm.elements

    formEl.name.value = showToEdit.name;
    formEl.dataPlace.value = showToEdit.dataPlace;
    formEl.price.valueAsNumber = showToEdit.price;
    formEl.image.value = showToEdit.image;

    formEl.stock.checked = showToEdit.stock;

    editable = idx
    
}


