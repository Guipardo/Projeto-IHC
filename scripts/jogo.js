var imagemSelecionada = false;
var textoSelecionado = false;
var imgValue;
var txtValue;
var partesDoCorpo = [];

function pressionarPlay(event){
	if(event.keyCode == 13){
		comecarJogo();
	}
}

function pressionarImagem(imagem, event){
	if(event.keyCode == 13){
		selecionarImagem(imagem);
	}
}

function pressionarTexto(texto, event){
	if(event.keyCode == 13){
		selecionarTexto(texto);
	}
}

function comecarJogo(){
	function mudarTela(){
        document.getElementById('telaJogo').style.display = "block";
		document.getElementById('telaInicial').style.display = "none";
		document.getElementById('telaFinal').style.display = "none";
    }
    var somInicio = new Audio();
	somInicio.src = "audios/msc/play.mp3";
	somInicio.play();
    setTimeout(mudarTela, 500);
}

function selecionarImagem(imagem){
	console.log(imagem);
	var parFormado = false;
	for(var i = 0; i < partesDoCorpo.length; i++){
		console.log(partesDoCorpo[i]);
		if(partesDoCorpo[i] == imagem.getAttribute('value')){
			parFormado = true;
       }
   	}
   	console.log(parFormado);
    if(!parFormado){
		if(!imagemSelecionada){
			imagemSelecionada = true;
			imagem.style.border = "3px solid #B8860B";
			imgValue = imagem;
			if(imagemSelecionada && textoSelecionado){
				compararImagemETexto(imgValue, txtValue);
			}
		} else {
			imagemSelecionada = false;
			imagem.style.border = "3px solid transparent";
		}
	}

}

function selecionarTexto (texto) {
	console.log(texto);
	var parFormado = false;
	for(var i = 0; i < partesDoCorpo.length; i++){
		if(partesDoCorpo[i] == texto.getAttribute('value')){
			parFormado = true;
       }
   	}
    if(!parFormado){
		if(!textoSelecionado){
			textoSelecionado = true;
			texto.style.border = "3px solid #B8860B";
			txtValue = texto;
			if(imagemSelecionada && textoSelecionado){
				compararImagemETexto(imgValue, txtValue);
			}
		} else {
			textoSelecionado = false;
			texto.style.border = "3px solid transparent";
		}
	}
}

function compararImagemETexto(imagem, texto){
	console.log(partesDoCorpo.length);
	var somErro = new Audio();
	var somAcerto = new Audio();
	var somComemoracao = new Audio();
	somErro.src = "audios/msc/erro.mp3";
	somAcerto.src = "audios/msc/acerto.mp3";
	somComemoracao.src = "audios/msc/comemoracao.mp3";

	if(imagem.getAttribute('value') == texto.getAttribute('value')){
		imagemSelecionada = false;
		textoSelecionado = false;
		imagem.style.border = "3px solid green";
		texto.style.border = "3px solid green";
		partesDoCorpo.push(imagem.getAttribute('value'));
		if(partesDoCorpo.length == 5){
			document.getElementById('telaJogo').style.display = "none";
			document.getElementById('telaInicial').style.display = "none";
			document.getElementById('telaFinal').style.display = "block";
			var imagens = document.getElementsByClassName('imagem');
				for (var i = 0; i < imagens.length; i++) {
				  imagens[i].style.border = '3px solid transparent';
			}
			var paragrafos = document.getElementsByTagName('p');
				for (var j = 0; j < paragrafos.length; j++) {
				  paragrafos[j].style.border = '3px solid transparent';
			}
			partesDoCorpo = [];
			somComemoracao.play();
		} else {
			somAcerto.play();
		}
	} else {
		somErro.play();
		imagemSelecionada = false;
		textoSelecionado = false;
		imagem.style.border = "3px solid red";
		texto.style.border = "3px solid red";
	}
}
