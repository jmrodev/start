"use strict";
let form = document.querySelector('#form');


form.addEventListener('submit', getData);

function getData(event) {
    event.preventDefault();
    let formData = new FormData(form);

    let nombre = formData.get("name");
    let edad = formData.get("date");

    let user = {
        nombre: nombre,
        edad: edad
    }
    console.log(`${user.nombre} ${user.edad}` );
}

user.forEach(item => {
    template.querySelector('.list span').textContent = item
    const clone = template.cloneNode(true);
    fragment.appendChild(clone)
})
lista.appendChild(fragment); 