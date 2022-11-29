const validarEmail = (correo) =>{
    let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let valido = expReg.test(correo);
    if(valido == false){
        let errorcorreo = document.getElementById('correo');
        errorcorreo.classList.add('errorBorde');
        
        let mensajeError = document.getElementById('mensaje');
        mensajeError.classList.remove('correoError');

        let imagenError = document.getElementById('imgError');
        imagenError.classList.remove('imgError')
    } else{
        let errorcorreo = document.getElementById('correo');
        errorcorreo.classList.remove('errorBorde');
        
        let mensajeError = document.getElementById('mensaje');
        mensajeError.classList.add('correoError');

        let imagenError = document.getElementById('imgError');
        imagenError.classList.add('imgError')
    }
}