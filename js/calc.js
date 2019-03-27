function calc() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personSum = 0,
        daysSum = 0,
        total = 0;
    let cof;

    totalValue.innerHTML = 0;

    let inputConter = document.querySelectorAll('.counter-block-input');


    persons.addEventListener('change', function () {
        personSum = +this.value;
        changeTotal(restDays);
    });

    restDays.addEventListener('change', function () {
        daysSum = +this.value;
        changeTotal(persons);
    });



    place.addEventListener('change', function () {
        cof = this.options[this.selectedIndex].value;
        console.log(total);
        console.log(cof);
        if (restDays.value == '' || persons.value == 0 || persons.value == '' || restDays.value == 0) {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            console.log(a);
            // console.log('a',a, ' *cof', cof);
            totalValue.innerHTML = a * cof;
        }
    });

    for (let i = 0; i < inputConter.length; i++) {
        inputConter[i].addEventListener('input', function (event) {
            if (/\d/.test(event.target.value)) {

            } else {
                event.target.value = '';
            }
            if (event.target.value == '0' || event.target.value == '') {
                total = 0;
                totalValue.textContent = 0;
            }
        });
    }

    function changeTotal(input) {
        cof = place.options[place.selectedIndex].value;
        if (restDays.value !== '' && persons.value !== '') {
            total = (daysSum + personSum) * 4000;
        } else {
            total = 0;
        }
        if (input.value == '' && input.value == 0) {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total * cof;
        }
    }

}

    module.exports = calc;