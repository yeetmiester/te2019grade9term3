$(document).ready(function(){
	$("#button1").click(getPokemon1);
	$("#button2").click(getPokemon2);

	let pokemon = {
		name:'',
		attack:0,
		sprites:'',
	}

	function getPokemon1(){
		let id = Math.floor(Math.random()*800);
		$.get(`https://pokeapi.co/api/v2/pokemon/${id}/`,function(response) {
			console.log(response);
			console.log(response);
			$('#first').empty();
			$('#first').append(`<h1>${response.name}</h1>`);
		});
	};

	function getPokemon2(){
		let id = Math.floor(Math.random()*800);
		$.get(`https://pokeapi.co/api/v2/pokemon/${id}/`,function(response) {
			console.log(response);
			console.log(response);
			$('#second').empty();
			$('#second').append(`<h1>${response.name}</h1>`);
		});
	};

	//$("battle").click(fightPokemon);

	//function fightPokemon(){
		//if 
	//}
});