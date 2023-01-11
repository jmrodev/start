const lista = document.querySelector('#lista');

/*
Para hacer 

<li class="list">
        <b>Nombre: </b> <span class = "text-danger">descripcion...</span>
</li>

se construye normalmente:

const arrayList = ['item1','item2','item3',];

const fragment = document.createDocumentFragment();

arrayList.forEach(item => {
    const li = document.createElement('li');
    li.classList.add('list');
    const b = document.createElement('b');
    b.textContent = 'Nombre: ';
    li.appendChild(b);
    const span =document.createElement('span');
    span.classList.add('tex-danger');
    span.textContent = 'item';
    li.appendChild(b);
    li.appendChild(span);
    fragment.appendChild(li);
})
lista.appendChild(fragment);

pero se puede hacer con template string e innerHtml con menor rendimiento 
y no es de uso comun ni recomendable:
*/
const arrayList = ['item1','item2','item3',];
let fragment = '';

arrayList.forEach(item => {
    fragment += `
    <li class="list">
        <b>Nombre: </b> <span class = "text-danger">${item}</span>
    </li>
    `
})
lista.innerHTML= fragment