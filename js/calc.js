function calc() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    let inputConter = document.querySelectorAll('.counter-block-input');


    // проверка должна проверять, если введёт любой символ, который не в диапазоне [0-9] - не позволяет ввести. Почему у меня не работает? 

    persons.addEventListener('change', function () {
        personSum = +this.value;
        if (restDays.value !== '' && persons.value !== '') {
            total = (daysSum + personSum) * 4000;
        } else {
            total = 0;
        }


        if (restDays.value == '' && restDays.value == 0) {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    restDays.addEventListener('change', function () {
        daysSum = +this.value;
        if (restDays.value !== '' && persons.value !== '') {
            total = (daysSum + personSum) * 4000;
        } else {
            total = 0;
        }

        if (persons.value == '' || persons.value == 0) {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    place.addEventListener('change', function () {
        if (restDays.value == '' || persons.value == 0 || persons.value == '' || restDays.value == 0) {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });
    for (let i = 0; i < inputConter.length; i++) {
        inputConter[i].addEventListener('input', function (event) {
            if (/\d/.test(event.target.value)) {
                console.log('ok');
            } else {
                event.target.value = '';
            }
            if (event.target.value == 0 || event.target.value == '') {
                total = 0;
                totalValue.textContent = 0;
            }
        });
    }

}

module.exports = calc;