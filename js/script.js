window.addEventListener('DOMContentLoaded', function() {

    'use srrict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

        function hideTabContent(a) {
            for (let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }

        hideTabContent(1);

        function showTabContent(b) {
            if (tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
        }

        info.addEventListener('click', function(event) {
            let target = event.target;
            if (target && target.classList.contains('info-header-tab')) {
                for (let i = 0; i < tab.length; i++) {
                    if (target == tab[i]) {
                        hideTabContent(0);
                        showTabContent(i);
                        break;
                    }
                }
            }
        });

        //timer

        let deadline = '2018-10-21';

        function getTimeRemaining(endTime) {
            let t = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));

            return {
                'total' : t,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
            };
        }

        function setClock(id, endTime) {
            let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

            function updateClock() {
                let t = getTimeRemaining(endTime);
                if (hours < 10) {
                    hours.textContent = '0' + t.hours;
                } else {
                    hours.textContent = t.hours;
                }

                if (minutes < 10) {
                    minutes.textContent = '0' + t.minutes;
                } else {
                    minutes.textContent = t.minutes;
                }
                
                if (seconds < 10) {
                    seconds.textContent = '0' + t.seconds;
                } else {
                    seconds.textContent = t.seconds;
                }
                
                

               
                if (t.total <= 0 ) {
                    clearInterval(timeInterval);
                    hours.textContent = '00';
                    minutes.textContent = '00';
                    seconds.textContent = '00';
                }
                
            }
        }

        setClock('timer', deadline);
});


//modal

let more = document.querySelector('.more'),
    descrBtn = document.querySelectorAll('.description-btn'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

function showMoreInfo() {
    for (let i = 0; i < descrBtn.length; i++) {
        descrBtn[i].classList.add('more-splah');
    }
}

showMoreInfo();

for (let i = 0; i < descrBtn.length; i++) {
    descrBtn[i].addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

}

more.addEventListener('click', function () {
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
});

close.addEventListener('click', function () {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
});

//Form

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

