// sign up form

let errors = [];
        function checkValidity(input) {
            let validity = input.validity;
            if (validity.valueMissing) {
                errors.push(`Поле ${input.placeholder} не заполнено`);
            }

            if (input.id == 'pass') {
                let password = document.getElementById("pass"); //переменная для пароля
                let password2 = document.getElementById("pass2"); //переменная для повтора пароля
                if (password2.value != password.value) {
                    errors.push('Ваши пароли не совпадают');
                }
                //функция проверки соответствия паролей и вывода сообщения
            }

            if (validity.patternMismatch) {
                errors.push('Неверный формат заполнения');
            }
        }

        function checkAll() {
            errors = [];
            let inputs = document.querySelectorAll('input');
            for (let input of inputs) {
                checkValidity(input);
            }
            let errorDiv = document.querySelector('#error');
            errorDiv.innerHTML = errors.join('. <br>');
        }