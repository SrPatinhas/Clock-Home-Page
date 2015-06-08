	$( document ).ready(function() {
				
				$(window).keydown(function(event){
					if(event.keyCode == 13) {
						event.preventDefault();
						return false;
					}
				});
				$("#search > input").keyup(function(event){
					if(event.keyCode == 13){
						$("#search > a").click();
					}
				});		
				
				$('#search > input').val('');
				var searchQuery = '';
				
				$( "#search > input" ).focus(function() {
					$('#search > input').val('');
				});
				
				
				
				
				var $idPesquisa = 'searchGoogle';
				// --- --- ativar item do menu de acordo com ancora corrente --- ---
				$("#icons > a").click(function(e) {
					$("#icons > a").removeClass( "active" );
					$(this).addClass( "active" );
					$idPesquisa = $(this).attr('id');
				});	
				// --- --- ------------------------------------------------- --- ---	
				
				$( "#search > a" ).click(function() {
					searchQuery = $('#search > input').val();
					if ((searchQuery.replace(/ /g,''))=='') {
						return false;
					};
					searchQuery = searchQuery.replace(/\s/g,"%20");
					switch ($idPesquisa) {
						case 'searchGoogle':
										console.log(searchQuery);
										location.href='http://www.google.pt/search?q='+searchQuery;
							break;
						case 'searchImages':
										console.log(searchQuery);
										location.href='http://www.google.pt/search?q='+searchQuery+'&biw=1366&bih=677&source=lnms&tbm=isch&sa=X&ei=FmjuVKe-FsbyUMC8hKAB&ved=0CAcQ_AUoAQ';
							break;
						case 'searchYoutube':
										console.log(searchQuery);
										location.href='https://www.youtube.com/results?search_query='+searchQuery;
							break;
						case 'searchSoundcloud':
										console.log(searchQuery);
										location.href='https://soundcloud.com/search?q='+searchQuery;
							break;
						default: 
							alert('tipo de pesquisa nao definido');
					}
				
				});
				/*
				$( "#icons > a#searchImages" ).click(function() {
					searchQuery = $('#search > input').val();
					searchQuery = searchQuery.replace(/\s/g,"%20");
					console.log(searchQuery);
					location.href='http://www.google.pt/search?q='+searchQuery+'&biw=1366&bih=677&source=lnms&tbm=isch&sa=X&ei=FmjuVKe-FsbyUMC8hKAB&ved=0CAcQ_AUoAQ';
				
				});
				*/
		
	});
