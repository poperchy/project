

var element = document.getElementById('phone-mask');
if(element){
    var maskOptions = {
        mask: '+{375}(00)000-00-00',
    };
    var mask = IMask(element, maskOptions);
}
