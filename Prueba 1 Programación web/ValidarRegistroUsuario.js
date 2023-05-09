$(function()
{
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/
    $('.btnAceptar').click(function(){
        
        
        if(!$('.txtRut').val())
        {
            alert('Falta el rut');
            $('.txtRut').focus();
        }
        if(!$('.txtDv').val())
        {
            alert('Falta el Dv');
            $('.txtDv').focus();
        }
        if(! esValidoElRut($('.txtRut').val(),$('.txtDv').val()))
        {
            alert('El rut no es válido');
            $('.txtRut').focus();
        }
        if(!$.trim($('.txtNombre').val()))
        {
            alert('Falta el Nombre');
            $('.txtNombre').focus();
        }
        if(!$.trim($('.txtApellido').val()))
        {
            alert('Falta el Apellido');
            $('.txtApellido').focus();
        }
        if(!emailRegex.test($('.txtEmail').val()))
        { 
            alert('El formato del correo no es correcto');
            $('.txtEmail').focus();
        }
        if(!$('.txtTelefono').val())
        {
            alert('Falta el Teléfono');
            $('.txtTelefono').focus();
        }
        if(!$('.txtUsuario').val())
        {
            alert('Falta el Usuario');
            $('.txtUsuario').focus();
        }
        if(!$('.txtContraseña').val())
        {
            alert('Falta la contraseña');
            $('.txtContraseña').focus();
        }
        if(!$('.txtconfirmarContraseña').val())
        {
            alert('Falta la confirmar la contraseña');
            $('.txtconfirmarContraseña').focus();
        }

        if(txtContraseña == txtconfirmarContraseña){
            alert("Las contraseñas no son iguales");
            return false;
        }
    });
    $('.btnLimpiar').click(function(){
        $('.txtRut,.txtDv,.txtNombre,.txtApellido,.txtEmail,.txtTelefono,.txtUsuario,.txtContraseña,.txtconfirmarContraseña').val('');
        $('.txtRut').focus();
    });

    
    let numeros = '12334567890';
    $('.txtRut').keypress(function(e){
        
        let caracter = String.fromCharCode(e.which);
        if(numeros.indexOf(caracter)<0) 
            return false; 
    });
    let dv = numeros + 'Kk';
    $('.txtDv').keypress(function(e){
        
        let caracter = String.fromCharCode(e.which);
        if(dv.indexOf(caracter)<0) 
            return false; 
    });
    let letras = 'qwertyuiopñlkjhgfdsazxcvbnmQWERTYUIOPÑLKJGFDSAZXCVBNMÁÉÍÓÚáéíóú ';
    $('.txtNombre').keypress(function(e){
        let caracter = String.fromCharCode(e.which);
        if(letras.indexOf(caracter)<0) 
            return false; 
    });
    let tel = numeros + '+';
    $('.txtTelefono').keypress(function(e){
        let caracter = String.fromCharCode(e.which);
        if(tel.indexOf(caracter)<0) 
            return false; 
    });
    let usuario = letras + numeros + '_-.';
    $('.txtUsuario').keypress(function(e){
        let caracter = String.fromCharCode(e.which);
        if(usuario.indexOf(caracter)<0) 
            return false; 
    });
    function esValidoElRut(Rut,Digito)
    {
        Digito = Digito.toUpperCase();
		var longitud        = Rut.length;
		var factor          = 2;
		var sumaProducto    = 0;
		var con             = 0;
		var caracter     	= 0;
 
		for( con=longitud-1; con>=0; con--)
		{
			caracter = Rut.charAt(con);
			sumaProducto += (factor * caracter);
			if (++factor > 7)
				factor=2;		
		}
 
        var digitoAuxiliar	= 11-(sumaProducto % 11);   
        var caracteres		= "-123456789K0";
        var digitoCaracter= caracteres.charAt(digitoAuxiliar);
        return digitoCaracter == Digito ? 1 : 0;            
    } 
})
