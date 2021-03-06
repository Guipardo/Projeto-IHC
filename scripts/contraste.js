function mudaIcone(id,arquivo,formato)
{
  caminho = "imagens/icones/";
  link = caminho + arquivo + "." + formato;
  if(document.getElementById(id) !== null)
  {
    document.getElementById(id).setAttribute("src",link);
  }
}

function mudaSom(classe,arquivo,formato)
{
  caminho = "imagens/icones/";
  var lista = document.getElementsByClassName(classe);
  for (var i = 0; i < lista.length; i++) {
    link = caminho + arquivo + "." + formato;
    lista[i].style.backgroundImage = 'url(' + link + ')';
  }
}

function mudaTema(link,nome_arquivo)
{
    var estilo = document.getElementById(link);
    var caminho = "estilos/temas/";
    var arquivo = caminho + nome_arquivo + ".css";
    estilo.setAttribute("href",arquivo);
    sessionStorage.setItem('estilo', nome_arquivo);
}

function iconesBranco()
{
  mudaIcone("iconeLampada","LAMPADA_BRANCO","png");
  mudaIcone("iconeCorpo","CORPO_BRANCO","png");
  mudaIcone("iconeJogo","JOGO_BRANCO","png");
  mudaIcone("iconeVideo","VIDEO_BRANCO","png");
  mudaIcone("iconeLeitura","LEITURA_BRANCO","png");
  mudaIcone("iconeLapis","LAPIS_BRANCO","png");
  mudaSom("botao__audio","SOM_BRANCO","png");
}

function iconesPreto()
{
  mudaIcone("iconeLampada","LAMPADA_PRETO","png");
  mudaIcone("iconeCorpo","CORPO_PRETO","png");
  mudaIcone("iconeJogo","JOGO_PRETO","png");
  mudaIcone("iconeVideo","VIDEO_PRETO","png");
  mudaIcone("iconeLeitura","LEITURA_PRETO","png");
  mudaIcone("iconeLapis","LAPIS_PRETO","png");
  mudaSom("botao__audio","SOM_PRETO","png");
}

function iconesAmarelo()
{
  mudaIcone("iconeLampada","LAMPADA_AMARELO","png");
  mudaIcone("iconeCorpo","CORPO_AMARELO","png");
  mudaIcone("iconeJogo","JOGO_AMARELO","png");
  mudaIcone("iconeVideo","VIDEO_AMARELO","png");
  mudaIcone("iconeLeitura","LEITURA_AMARELO","png");
  mudaIcone("iconeLapis","LAPIS_AMARELO","png");
  mudaSom("botao__audio","SOM_AMARELO","png");
}

function iconesAzul()
{
  mudaIcone("iconeLampada","LAMPADA_AZUL","png");
  mudaIcone("iconeCorpo","CORPO_AZUL","png");
  mudaIcone("iconeJogo","JOGO_AZUL","png");
  mudaIcone("iconeVideo","VIDEO_AZUL","png");
  mudaIcone("iconeLeitura","LEITURA_AZUL","png");
  mudaIcone("iconeLapis","LAPIS_AZUL","png");
  mudaSom("botao__audio","SOM_AZUL","png");
}

function temaAzul()
{
  mudaTema("temas","temaAzul");
  iconesAzul();
}

function temaAmarelo()
{
  mudaTema("temas","temaAmarelo");
  iconesAmarelo();
}

function temaPreto()
{
  mudaTema("temas","temaPreto");
  iconesPreto();
}

function temaBranco()
{
  mudaTema("temas","temaBranco");
  iconesBranco();
}

function carregarTema()
{
  var tema = sessionStorage.getItem('estilo');
  switch (tema) {
    case "temaBranco":
      temaBranco();
      break;
    case "temaPreto":
      temaPreto();
      break;
    case "temaAmarelo":
      temaAmarelo();
      break;
    case "temaAzul":
      temaAzul();
      break;
    default:
      temaBranco();
      break;
  }
}

carregarTema();
