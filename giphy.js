function searchGif(giphy) {
    giphy = document.getElementById('giphySearch').value;
    fetch("https://api.giphy.com/v1/gifs/search?api_key=ssCdjHoF9IkPIuo0ANcld5kooQnfiaw6&q=" + giphy + "&limit=5")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('giphyResult').src = data.data[0].url;
    })
}

//gif => document.getElementById('giphyResult').innerHTML = gif.data)
/*
Сделайте форму поиска по GIF-кам к открытому AP
Используйте GET-запрос с параметрами в строке адреса. Страница должна выводить не более 5 картинок одновременно.

*/