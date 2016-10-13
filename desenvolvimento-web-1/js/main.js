// checa "radios" (divs) no click 
var radiosClicker = document.querySelectorAll( '[data-radio] , [data-box]' );
for (var i = 0; i < radiosClicker.length ; i++) {
	radiosClicker[ i ].addEventListener( 'click' , function(){
		var boxes = document.querySelectorAll( '[data-box]' );
		var sexo = this.getAttribute( 'data-value' );
		for( var j = 0 ; j < boxes.length ; j++ ){
			boxes[j].dataset.active = false;
		}
		document.querySelector( '[data-box][data-value="'+ sexo +'"]' ).dataset.active = true; 
	});
}

// click do botao
document.querySelector( '[data-button]' ).addEventListener( 'click' , function( e ){
	e.preventDefault();
	salvaAluno();
});

document.querySelector( '[data-delete]' ).addEventListener( 'click' , function( e ){
	e.preventDefault();
	deletarAlunos();
});

function bindSingles(){
	var excluir = document.querySelectorAll( '[data-single]' );
	var qtd = excluir.length;

	for ( var i = 0 ; i < qtd ; i++ ){
		excluir[i].addEventListener( 'click' , function( e ){
			e.preventDefault();
			var ra = this.getAttribute( 'data-single' );
			deletarUnicoAluno( ra );
		});
	}
}

function salvaAluno(){
	var nome = formAlunos.nome.value;
	var idade = formAlunos.idade.value;
	var ra = formAlunos.ra.value;
	var curso = formAlunos.curso.value;
	var ciclo = formAlunos.ciclo.value;
	var sexo = document.querySelector( '[data-box][data-active="true"]' ).getAttribute( 'data-value' );

	var novoAluno = {
		nome : nome ,
		idade : idade ,
		ra : ra ,
		curso : curso ,
		ciclo : ciclo , 
		sexo : sexo
	}

	novoAluno = JSON.stringify( novoAluno );
	sessionStorage.setItem( ra , novoAluno  );

	carregaAlunos();
}

function deletarAlunos(){
	sessionStorage.clear();

	carregaAlunos();
}

function carregaAlunos(){

	var lista = document.querySelector( '[data-table]' );

	if ( sessionStorage.length ){
		var totalAlunos = sessionStorage;
		var listaAlunos = "";

		for ( var aluno in totalAlunos ){
			var dadosAlunos = JSON.parse( totalAlunos[aluno] );
			listaAlunos += '<tr>' + 
			'<td class="td">' + dadosAlunos.ra + '</td>'+
			'<td class="td">' + dadosAlunos.nome +'</td>'+
			'<td class="td"><button class="btn" data-single="' + dadosAlunos.ra + '">X</button></td>' +
			'</tr>';
		}

		lista.innerHTML = listaAlunos;
	}
	else{
		lista.innerHTML = "";

	}
	if ( document.querySelectorAll( '[data-single]' ).length ){
		bindSingles();
	}
}

function deletarUnicoAluno( ra ){
	sessionStorage.removeItem( ra );

	carregaAlunos();
}

carregaAlunos();