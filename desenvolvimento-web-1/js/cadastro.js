function validaCampo(valor, tipo) {

	switch (tipo) {
		case 'string':
			valor = valor.trim();
			break;

		case 'number':
			valor = validaCampo(valor, 'string');
			valor = Number(valor);
			break;
	}

	return valor;
}

formCadastro.onsubmit = function cadastrar(e) {
	e.preventDefault();
	var ra = this.ra.value;
	var nome = this.nome.value;
	if (validaCampo(ra, 'number') && validaCampo(nome, 'string')) {
		if (!localStorage[ra]) {
			localStorage[ra] = nome;
			alert('Aluno cadastrado com Sucesso');
		}
		else {
			alert('R.A. já cadastrado');
		}
	}
	else {
		alert('Preencha nome e R.A. corretamente');
	}
}