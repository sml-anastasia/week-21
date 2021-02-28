saveBtn.onclick = function (event) {
    event.preventDefault();
    fetch("https://httpbin.org/post", {
        method: 'POST',
        body: new FormData(catForm)
    })
    .then(response => response.json())
    .then(catInfo => {
        console.log(catInfo);
    })
    .catch(error => console.log(error));
}