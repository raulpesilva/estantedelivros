function handleResponse(response) {
    for (var i = 0; i < response.items.length; i++) {
        var item = response.items[i];
        // in production code, item.text should have the HTML entities escaped.
        var livro = document.getElementById("thumb").innerHTML += "<img class=\"thumb-livro\" src=" + item.volumeInfo.imageLinks.thumbnail + ">";
        console.log(livro)
    }
}