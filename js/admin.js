
import { Shows } from './show-list.js';

const tableBodyHTML = document.getElementById('table-body');
const addShowForm = document.getElementById('addShowForm')
const cardsShow = document.getElementById('cardsShow')

let savedShows = JSON.parse(localStorage.getItem('shows-key'))

// if(savedShows === null)
if(!savedShows) {
    savedShows = Shows
}

function renderShows() {
    console.log("loco")
    tableBodyHTML.innerHTML = '';
    savedShows.forEach(elem => {
        tableBodyHTML.innerHTML += `<tr>
                                        <td>
                                            <img class="table-img" src=${elem.image} />
                                            </td>
                                            <td>${elem.name}</td>
                                            <td>${elem.dataPlace}</td>
                                            <td>$ ${elem.price}</td>
                                            <td>${elem.stock}</td>
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

    savedShows.push(newShow)

    localStorage.setItem('shows-key', JSON.stringify(savedShows))

    renderShows()
    
    addShowForm.reset()
})
