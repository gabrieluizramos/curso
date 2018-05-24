function carregaAluno(){
	var hashRA = ( window.location.hash ).replace( '#' , '' );
	ra = localStorage.key(Number( hashRA ));
	aluno = localStorage[ localStorage.key(ra) ];
	document.querySelector( '[data-nome]' ).innerHTML = localStorage[ localStorage.key(aluno) ];
	document.querySelector( '[data-ra]' ).innerHTML = ra;
}

window.onload = carregaAluno;