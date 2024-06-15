// On start app show counter from local storage or 0
$(document).ready(() => {
    const counter = localStorage.getItem('counter');
    const ctwo = localStorage.getItem('ctwo');
    const cthree = localStorage.getItem('cthree');
    const cfive = localStorage.getItem('cfive');
    counter ? $('#app h1').text(counter) : $('#app h1').text(0);
    if(ctwo==='true') {
        $('button#ctwo').toggleClass('close');
        $('button#ctwo').attr('disabled', true);
    }
    if(cthree==='true') {
        $('button#cthree').toggleClass('close');
        $('button#cthree').attr('disabled', true);
    }
    if(cfive==='true') {
        $('button#cfive').toggleClass('close');
        $('button#cfive').attr('disabled', true);
    }
})

// On click add 1 to counter
$('#btn-add').on('click', () => {
    $('#app h1').text(parseInt($('#app h1').text()) + parseInt(localStorage.getItem('click') || 1));
    localStorage.setItem('counter', $('#app h1').text())
})

$('button#market').on('click', () => {
    $('.market').toggleClass('open');
});

$('button#ctwo').on('click', () => {
    if(localStorage.getItem('counter') >= 400) {
        localStorage.setItem('counter', parseInt(localStorage.getItem('counter')) - 400);
        $('#app h1').text(localStorage.getItem('counter'));
        localStorage.getItem('click') < 2 ? localStorage.setItem('click', 2) : localStorage.getItem('click');
        localStorage.setItem('ctwo', 'true');
        $('button#ctwo').toggleClass('close');
        $('button#ctwo').attr('disabled', true);
    }
});

$('button#cthree').on('click', () => {
    if(localStorage.getItem('counter') >= 5000) {
        localStorage.setItem('counter', parseInt(localStorage.getItem('counter')) - 5000);
        $('#app h1').text(localStorage.getItem('counter'));
        localStorage.getItem('click') < 3 ? localStorage.setItem('click', 3) : localStorage.getItem('click');
        localStorage.setItem('cthree', 'true');
        $('button#cthree').toggleClass('close');
        $('button#cthree').attr('disabled', true);
    }
}); 

$('button#cfive').on('click', () => {
    if(localStorage.getItem('counter') >= 14000) {
        localStorage.setItem('counter', parseInt(localStorage.getItem('counter')) - 14000);
        $('#app h1').text(localStorage.getItem('counter'));
        localStorage.getItem('click') < 5 ? localStorage.setItem('click', 5) : localStorage.getItem('click');
        localStorage.setItem('cfive', 'true');
        $('button#cfive').toggleClass('close');
        $('button#cfive').attr('disabled', true);
    }   
});