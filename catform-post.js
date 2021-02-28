saveBtn.onclick = function (event) {
    event.preventDefault();
    let breedList = document.getElementById('breed');
    let catInfo = {
        catName: document.getElementById('catName').value,
        name: document.getElementById('name').value,
        tel: document.getElementById('contacts').value,
        breed: breedList.options[breedList.selectedIndex].innerText,
        sex: document.querySelector('.sex:checked').value,
        feed: checkedFeed(),
        comment: document.getElementById('comment').value
    }
    
    fetch("https://httpbin.org/post", {
        method: 'POST',
        body: JSON.stringify(catInfo),
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    })
    .then(response => response.json())
    .then(catInfo => {
        console.log(catInfo);
    })
    .catch(error => console.log(error));
}

function checkedFeed() {
    let feeds = document.querySelectorAll('.feed:checked');
    let feedChecked = [];
    for (let f of feeds) {
        feedChecked.push(f.value);
    }
    let feed = feedChecked.join(', ');
    return feed;
}