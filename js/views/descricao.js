const $livros = document.querySelector(".wrap-livro");
const $corpo_pagina = document.querySelector('.vitrine');

$livros.addEventListener("click", function (event) {
    try{
        const livro = event.target.parentNode.querySelector('.info-livro');
        tiraLivrosVisiveis();
        livro.classList.add('aparece-livro');
        livro.scrollIntoView();
    }catch(error){

    }
 

})

function tiraLivrosVisiveis() {

    const livros = document.querySelectorAll('.aparece-livro');
    livros.forEach((item) => {
        item.classList.remove('aparece-livro');

    })

}


// $corpo_pagina.addEventListener('click', tiraLivrosVisiveis());