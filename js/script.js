require('nodelist-foreach-polyfill');
require('formdata-polyfill');




window.addEventListener('DOMContentLoaded', function() {

    let form = require('./form');
    let slider = require('./slider');
    let modal = require('./modal');
    let timer = require('./timer');
    let calc = require('./calc');
    let tabs = require('./tabs');
    
    form();
    slider();
    modal();
    timer();
    calc();
    tabs();
    
});