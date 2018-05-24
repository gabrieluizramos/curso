function carregaCadastro() {
	var qtdAlunos = localStorage.length;
	var listaAlunos = "";
	var tabela = document.querySelector('[data-tabela]');

	if (qtdAlunos) {
		

		for (var i = 0; i < qtdAlunos; i++) {
			var novoAluno = '<tr><td>' + localStorage.key(i) + '</td><td>' + localStorage.getItem(localStorage.key(i)) + '</td><td><a href="detalhes.html#' + i + '"> ver mais </a><td><a data-delete="' + i + '">excluir</span></td>';
			listaAlunos += novoAluno;
		}
	}

	tabela.innerHTML = listaAlunos;
	
	bindAlunos();
}

function bindAlunos() {
	var deleteAlunos = document.querySelectorAll('[data-delete]');
	var total = deleteAlunos.length;

	for (var i = 0; i < total; i++) {
		deleteAlunos[i].onclick = deletaAluno;
	}
}

function deletaAluno(e) {
	var ra = e.target.dataset.delete;

	if (confirm("Deseja realmente excluir esse aluno?")) {
		localStorage.removeItem(localStorage.key(ra));
	}
	carregaCadastro();
}

document.querySelector('[data-clear]').onclick = function () {
	localStorage.clear();
	carregaCadastro();
}

window.onload = carregaCadastro;
