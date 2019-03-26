function form() {
let message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так!'
};

let form = document.querySelector('.main-form'),
secondForm = document.querySelector('#form'),
    input = document.getElementsByTagName('input'),
    statusMessage = document.createElement('div');

    console.log(input);

    statusMessage.classList.add('status');

    //проверка на ввод только цифр в строку с телефоном 

let inputFormNumber = document.querySelectorAll('input[name="phone"]');
    

for (let i = 0; i < inputFormNumber.length; i++) {
    inputFormNumber[i].addEventListener('input', function(event) {
        if (/\D/.test(event.target.value)) {
            event.target.value = '';
        }
    });
}
    

function sendForm(elem) {
    elem.addEventListener('submit', function (event) {
        event.preventDefault();
        elem.appendChild(statusMessage);
        let formData = new FormData(elem);

        function postData(data) {

            return new Promise(function (resolve, reject) {
                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader('Conttent-Type', 'application/json; charset=utf-8');

                request.onreadystatechange = function () {
                    if (request.readyState < 4) {
                        resolve();
                    } else if (request.readyState === 4 && request.status == 200) {
                        resolve();
                    } else {
                        reject();
                    }
                }
                request.send(data);
            });


        }
        postData(formData)
            .then(() => statusMessage.innerHTML = message.loading)
            .then(() => statusMessage.innerHTML = message.success)
            .catch(() => statusMessage.innerHTML = message.failure)
            .then(clearInput);
    });


    function clearInput() {
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    }
}



sendForm(form);
sendForm(secondForm);
}

module.exports = form;