function searchGif(giphy) {
    giphy = document.getElementById('giphySearch').value;
    fetch("https://api.giphy.com/v1/gifs/search?api_key=ssCdjHoF9IkPIuo0ANcld5kooQnfiaw6&q=" + giphy + "&limit=5")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let gifImg = '';
            for (i = 0; i < data.data.length; i++) {
                let gifSrc = data.data[i].images.preview_gif.url;
                gifImg += `<img class="gif-img" src="${gifSrc}">`;
            }
            document.getElementById('giphyResult').innerHTML = gifImg;
        })
}