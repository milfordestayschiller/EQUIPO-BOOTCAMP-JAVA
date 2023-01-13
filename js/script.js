let contenedor = document.getElementById('contenedor')
const semana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];

const dia = new Date();
let dias = semana[dia.getDay()]

const diaNum = new Date()
let diasNum = diaNum.getDay()

const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]

const month = new Date()
let months = meses[month.getMonth()]

const hora = new Date()
let horaAhora = hora.toLocaleTimeString('es-CL')


const annio = new Date();
let annios = annio.getFullYear()
contenedor.innerHTML = 'El dia es ' + dias + '  ' +diasNum + " del mes de " +months+ " año " +annios + ' y la hora es ' +horaAhora

////////////////////////NOTAS/////////////////////////////

let notas = document.getElementById('nota')
notas.addEventListener('click', function () {
    let ingreseNota =  parseInt(prompt('Hola estimado, por favor ingrese una nota'))

    if(ingreseNota >=0 && ingreseNota <= 3) {
        alert('Su nota es deficiente')
    }
    else if(ingreseNota >=3 && ingreseNota <= 5) {
        alert('La nota es insuficiente')
    }
    else if(ingreseNota >=5 && ingreseNota <= 6) {
        alert('La nota es suficiente')
    }

    else if(ingreseNota >=6 && ingreseNota <= 7) {
        alert('La nota es bien')
    }
    else if(ingreseNota >=7 && ingreseNota <= 9) {
        alert('La nota es notable')
    }
    else if(ingreseNota >=9 && ingreseNota <= 10) {
        alert('La nota es sobresaliente')
    }
})
///PLUGIN JQUERY/////
$(document).ready(function() {

    $("a.single_image").fancybox(
        {
            'transitionIn'	:	'elastic',
            'transitionOut'	:	'elastic',
            'speedIn'		:	600, 
            'speedOut'		:	200, 
            'overlayShow'	:	false,
            'max-width': 500
        });
		
});



