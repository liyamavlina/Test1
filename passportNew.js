let button = document.querySelector('input');
let surname = document.getElementById('surname');

button.addEventListener('click', function () {
    if (surname.innerHTML === 'МАВЛИНА') {
        surname.innerHTML = 'MAVLINA';
        document.getElementById('name').innerHTML = 'LIYA';
        document.getElementById('patronymic').innerHTML = 'NAILEVNA';
        document.getElementById('gender').innerHTML = 'FEMALE';
        document.getElementById('birth').innerHTML = '08.12.2006';
        document.getElementById('city').innerHTML = 'NABEREZHNYE CHELNY';
        document.getElementById('mvd').innerHTML = 'MVD for the Republic of Tatarstan';
    } else {
        surname.innerHTML = 'МАВЛИНА';
        document.getElementById('name').innerHTML = 'ЛИЯ';
        document.getElementById('patronymic').innerHTML = 'НАИЛЕВНА';
        document.getElementById('gender').innerHTML = 'ЖЕН.';
        document.getElementById('birth').innerHTML = '08.12.2006';
        document.getElementById('city').innerHTML = 'Г.НАБЕРЕЖНЫЕ ЧЕЛНЫ';
        document.getElementById('mvd').innerHTML = 'МВД по республике Татарстан';
    }
});