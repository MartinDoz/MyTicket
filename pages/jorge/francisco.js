import {mensajesFrancisco} from './mensajesFrancisco.js';

const tableBodyHTML= document.getElementById('table-body');
const addmensajes= document.querySelector('#addmensajes');

function renderMensajes(){ 
    tableBodyHTML.innerHTML= '';
    mensajesFrancisco.forEach(elem =>{
    
    tableBodyHTML.innerHTML +=`<tr>
                                    <td>${elem.name}</td>
                                    <td>${elem.email}</td>
                                    <td>${elem.mensaje}</td>
                               </tr>`
    });

}
 
renderMensajes();

    addmensajes.addEventListener('submit', (evt)=> {
        evt.preventDefault();
        const formElements =evt.target.elements;
        let newmensaje={
            name:formElements.name.value,
            email:formElements.email.value,
            mensaje:formElements.mensaje.value
        };

        mensajesFrancisco.push(newmensaje);
        renderMensajes();
    });
