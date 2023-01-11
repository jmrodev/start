//console.log(document)
const parrafo = document.querySelector('#parrafo');
parrafo.classList.add('h3-danger', 'my-2');


const lista = document.getElementById('lista');


//  inicio
/* Esto se puede hacer para un elemento :

const li = document.createElement('li');
li.textContent = 'listado li';
lista.appendChild(li);
 */

const arrayElement = ['primero', 'segundo', 'tercero'];


// lo siguiente produce reflow alentando y cargando el proceso de la pagina


//  textContent

/*  arrayElement.forEach(item => {
   //console.log(item);

 const li = document.createElement('li');
   li.textContent = item;
   lista.appendChild(li); 
})
   */



//  innerHtml

/* 
arrayElement.forEach(item => {
    lista.innerHTML += `<li>${item}<li>`;
})
 */


//  Solucion al reflow


//  Fragment

/* 
const fragment = document.createDocumentFragment();
o 
const fragment = new DocumentFragment(); */


//  con appenChild

/* const fragment = new DocumentFragment();

arrayElement.forEach(item => {
    
    const li = document.createElement('li');
    li.textContent = item;
    fragment.appendChild(li);

})

lista.appendChild(fragment); */


//  O con insertBefore :

const fragment = new DocumentFragment();

arrayElement.forEach(item => {

    const li = document.createElement('li');
    li.textContent = item;
    const chilNode = fragment.firstChild;
    fragment.insertBefore(li,chilNode);
})

lista.appendChild(fragment);
  

