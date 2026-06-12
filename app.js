const botonTema = document.querySelector('.btn-tema');

botonTema.addEventListener('click', () => {
    document.body.classList.toggle('tema-claro');
});

let frase = 'Mi nombre es'; 
let name = 'Juliana';
let surname = 'Silva';

console.log(frase + name + surname);