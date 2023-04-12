document.querySelector('input[type=tel]');

window.onload = function (e) {
    var inputs, index;
    inputs = document.querySelectorAll('input[type=button]');
    

    for (index = 0; index < inputs.length; ++index) {
        inputs[index].addEventListener('click', function (evt) {
            Digitar(evt.target.value);
        });
    }
}

function Digitar(d) {
    if (d !== 'Limpar')
        document.querySelector('input[type=tel]').value += d;
    else
        document.querySelector('input[type=tel]').value = '';
}

function _click(){ 
    document.getELementById('limpar').remove();
 }