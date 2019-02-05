const $input_pesquisa = document.querySelector('.input-pesquisa');
const $botao_pesquisar = document.querySelector('.botao-pesquisa');
const $thumb = document.querySelector("#thumb");

function livrosIniciais(){
    buscarLivros('harry Potter');
    buscarLivros('maze runner');
    buscarLivros('douglas adams');
}

function plotPesquisa(response){
    limpaLivros();
    plotLivro(response);

}

function plotLivro(response) {
    try {
        for (let i = 0; i < response.items.length; i++) {
            try {
                let item = response.items[i];
                const livro = criarLivro(item.volumeInfo.imageLinks.thumbnail, item.volumeInfo.title, item.volumeInfo.description) ;
                $thumb.appendChild(livro);
            } catch (error) {
                console.log(error);
            }
        }
    } catch (error) {
        console.log(error);
    }

}

function limpaLivros(){
    $thumb.innerHTML = '';
}

function criarLivro(livro_img, titulo, descricao) {
    const $box_livro = document.createElement("div");

    const $img_livro = document.createElement('img');
    const $img_livro_info = document.createElement('img');

    const $info_livro = document.createElement('article');

    const $wrap_descricao = document.createElement('div');

    const $titulo_livro = document.createElement('h1');

    const $descricao_livro = document.createElement('p');

    $box_livro.classList.add('box-livro');

    $img_livro.classList.add('thumb-livro-img');
    $img_livro_info.classList.add('thumb-livro-img-info');

    $titulo_livro.classList.add('titulo-livro');

    $descricao_livro.classList.add('descricao-livro');

    $wrap_descricao.classList.add('wrap-descricao');

    $info_livro.classList.add('info-livro')

    

    $img_livro.src = livro_img;
    $img_livro_info.src = livro_img;
    $titulo_livro.textContent = titulo;
    $descricao_livro.textContent = descricao;
    // img_livro.alt = 'capa do livro';

    $box_livro.appendChild($img_livro);

    $info_livro.appendChild($img_livro_info);

    $wrap_descricao.appendChild($titulo_livro);
    $wrap_descricao.appendChild($descricao_livro);
    $info_livro.appendChild($wrap_descricao);


    $box_livro.appendChild($info_livro);

    // console.log($box_livro);
    return $box_livro;


}

function buscarLivros(livro) {
    const link_pesquisa = "https://www.googleapis.com/books/v1/volumes?q=" + livro
    fetch(link_pesquisa)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            // console.log(JSON.stringify(myJson));
            plotLivro(myJson);
        });

}

$botao_pesquisar.addEventListener('click', () => {
    limpaLivros();
    buscarLivros($input_pesquisa.value);
});

$input_pesquisa.addEventListener('keypress', function (event) {
    if ($input_pesquisa.value == '') {

    } else {
        if (event.keyCode === 13) {
            $botao_pesquisar.click();
        }
    }
})
