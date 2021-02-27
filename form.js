btn.onclick = function (event) {
    event.preventDefault();
    let user = {
        userName: document.getElementById('name').value,
        userLastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        password: document.getElementById('pass').value,
        password2: document.getElementById('pass2').value,
        sex: document.querySelector('.sex:checked').value,
        birth: document.getElementById('birth').value
    }
    fetch("https://httpbin.org/post", {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/jsonn;charset=utf-8'
        },
    })
    .then(response => response.json())
    .then(user => {
        console.log(user);
    })
    .catch(error => console.log(error));
}

/*

Написать POST-запрос, который будет срабатывать при нажатии на кнопку "Отправить" из нашей уже готовой формы регистрации (задание 2 недели 18). Реализовать через JSON. 

*/