function tocaSom(idElementoAudio) {

   const elemento =  document.querySelector(idElementoAudio);

   if(elemento != null && elemento.localName == 'audio' ) {
    elemento.play();
   }
    else{
    console.log('Elemento nao Econtrado')
    }
}




const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador ++ ){
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;


    tecla.onclick = function (){
        tocaSom(idAudio);
    }

    tecla.onkeydowm = function() {
        if(evento.code === "Enter" || evento.code === "Space") {
        tecla.classList.add('ativa') 
        }
    }

    tecla.onkeyup = function() {
        tecla.classList.add('ativa')      
    }
}
