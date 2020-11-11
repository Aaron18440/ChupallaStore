$(function()
{
	//alert('hola mundo en pandemia');
	let numeros = '1234567890';
	let letras  = 'qwertyuiopasdfghjklñzxcvbnm' +
				'QWERTYUIOPASDFGHJKLÑZXCVBNM' +
				'ÁÉÍÓÚáéíóú ';

	$('.username').keypress(function(e)
	{
		let correo='@-.,'+'qwertyuiopasdfghjklñzxcvbnm'+'QWERTYUIOPASDFGHJKLÑZXCVBNM'+'1234567890';
		let caracter = String.fromCharCode(e.which);
		if(correo.indexOf(caracter) < 0)
		{
			return false;
		}
	})

	$('.txtRut').keypress(function(e)
	{
		let rut='1234567890-';
		let caracter = String.fromCharCode(e.which);
		if(rut.indexOf(caracter) < 0)
		{
			return false;
		}
	})

	$('.txtNombre').keypress(function(e)
	{
		let caracter = String.fromCharCode(e.which);
		if(letras.indexOf(caracter) < 0)
		{
			return false;
		}
	})

	$('.txtTelefono').keypress(function(e)
	{
		let caracter = String.fromCharCode(e.which);
		if(numeros.indexOf(caracter) < 0)
		{
			return false;
		}
	})

	$('.btnEnviar').click(function()
		{
			//Email
			let texto = "";
			texto = $('.username').val();
			if (texto == '') 
				{
					alert('Debe especificar el Email');
					$('.username').focus();
					return;
				};
			if ($('.txtRut').val() == '') 
				{
					alert('Debe especificar el Rut');
					return;
				};
			if ($('.txtNombre').val() == '') 
				{
					alert('Debe especificar el Nombre');
					return;
				};
			if ($('.txtFechaNac').val() == '') 
				{
					alert('Debe especificar la fecha de nacimiento');
					return;
				};
			if ($('.txtTelefono').val() == '') 
				{
					alert('Debe especificar El telefono');
					return;
				};
			if ($('.cmbRegion').val() == '--Seleccione una region--'||$('.cmbRegion').val() == '') 
				{
					alert('Debe especificar la Region');
					return;
				};
			if ($('.cmbCiudad').val() == '--Seleccione una region--'||$('.cmbCiudad').val() == '') 
				{
					alert('Debe especificar la Ciudad');
					return;
				};
			if ($('.cmbEducacion').val() == '--Seleccione una region--'||$('.cmbEducacion').val() == '') 
				{
					alert('Debe especificar el Nivel Educacional');
					return;
				};
			if ($('.password').val() == '') 
				{
					alert('Debe especificar la Clave');
					return;
				};
			alert('Datos envidos con exito.')
		});
})