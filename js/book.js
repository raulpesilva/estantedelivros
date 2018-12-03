function handleResponse(response) {
    for (var i = 0; i < response.items.length; i++) {
        var item = response.items[i];
        // in production code, item.text should have the HTML entities escaped.
        var livro = document.getElementById("thumb").innerHTML += "<img class=\"thumb-livro\" src=" + item.volumeInfo.imageLinks.thumbnail + ">";
        // console.log(livro);
    }
}

function plotPesquisa(response) {
    try{
    for (var i = 0; i < response.items.length; i++) {
        try{
        var item = response.items[i];
        // in production code, item.text should have the HTML entities escaped.
        var livro = document.getElementById("thumb").innerHTML += "<img class=\"thumb-livro\" src=" + item.volumeInfo.imageLinks.thumbnail + ">";

        console.log(livro);
        }catch(error){
            // console.log(error);
        }
    }
}catch(error){
    // console.log(error);
}

}

// jquery script
$("#caixa-pesquisa").keyup(function (event) {
    if ($("#caixa-pesquisa").val() === "") {

    } else {
        if (event.keyCode === 13) {
            $("#botao-pesquisa").click();
        }
    }
});

$("#botao-pesquisa").click(function () {
    event.preventDefault();
    if ($("#caixa-pesquisa").val() === "") {

    } else {
        document.getElementById("thumb").innerHTML = "";
        var inputLivro = $(".texto-pesquisa").val();
        // console.log(inputLivro);
        var linkPesquisa = "https://www.googleapis.com/books/v1/volumes?q=" + inputLivro;
        $.ajax({
            url: linkPesquisa,
            type: "get",
            dataType: "json",
            success: function (response) {
                plotPesquisa(response);
            },
            error: function (erro) {
                console.log(erro);
            }
        });
    }
});
