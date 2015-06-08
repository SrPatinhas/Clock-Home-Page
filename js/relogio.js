	$( document ).ready(function() {
	
		var $voltaS = 0;
		
		d = new Date();
		var dia = d.getDay();
		var diaMes = d.getDate();
		var mes = d.getMonth();
		var ano = d.getFullYear();
		
		setInterval(function () {
			d = new Date();
			
			/*
			console.clear()
			console.log(d.getDay()+" - "+d.getDate()+" - "+d.getMonth()+" - "+d.getFullYear()+" - "+d.getHours()+" - "+d.getMinutes()+" - "+d.getSeconds());
			*/
			var $hora = d.getHours();
			var $minuto =  d.getMinutes();
			var $segundo = d.getSeconds();
			
			$("#pointerS").css({
				'transition' : 'all 1s linear',
				'transform' : 'rotate('+(	(($segundo+1)*6)	+	($voltaS*360)	)+'deg)'
			});
			$("#pointerM").css({
				'-webkit-transform' : 'rotate('+($minuto*6)+'deg)',
				'-moz-transform' : 'rotate('+($minuto*6)+'deg)',
				'-ms-transform' : 'rotate('+($minuto*6)+'deg)',
				'-o-transform' : 'rotate('+($minuto*6)+'deg)',
				'transform' : 'rotate('+($minuto*6)+'deg)'
			});
			$("#pointerH").css({
				'-webkit-transform' : 'rotate('+($hora*30)+'deg)',
				'-moz-transform' : 'rotate('+($hora*30)+'deg)',  
				'-ms-transform' : 'rotate('+($hora*30)+'deg)',  
				'-o-transform' : 'rotate('+($hora*30)+'deg)',  
				'transform' : 'rotate('+($hora*30)+'deg)'
			});
			
			var $dispH =  $hora;
			if ($dispH < 10)
				$dispH = '0'+$dispH;
				
			var $dispM =  $minuto;
			if ($dispM < 10)
				$dispM = '0'+$dispM;
				
			var $dispS =  $segundo;
			if ($dispS < 10)
				$dispS = '0'+$dispS;
				
			$("#time").html($dispH+":"+$dispM+":"+$dispS);
			
			if ($segundo == 59)	{
				$voltaS++;
				console.log($voltaS+' - Volta');
			};
				
		}, 1000);
	});
