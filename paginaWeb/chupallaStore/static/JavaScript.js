$(function()
{ 
	//alert('hola mundo en pandemia');
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
			if ($('.txtNombre').val() == '') 
				{
					alert('Debe especificar el Nombre');
					return;
				};
			if ($('.password').val() == '') 
				{
					alert('Debe especificar la Clave');
					return;
				};
		});
})