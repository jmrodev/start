const lista = document.querySelector('#lista');
const arrayList = ['item1','item2','item3'];
const template= document.querySelector('#template-li').content;
const fragment = document.createDocumentFragment();

arrayList.forEach(item => {
    template.querySelector('.list span').textContent = item
    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
})
lista.appendChild(fragment); 
