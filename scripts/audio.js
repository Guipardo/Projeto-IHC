//  ============================================================================ MENUS PRINCIPAIS
function audioLeitura()
{
  document.getElementById("audioLeitura").play();
}

function audioJogo()
{
    document.getElementById("audioJogo").play();
}

function audioLampada()
{
    document.getElementById("audioLampada").play();
}

function audioCorpo()
{
    document.getElementById("audioCorpo").play();
}

function audioVideo()
{
    document.getElementById("audioVideo").play();
}

function audioDesenho()
{
    document.getElementById("audioDesenho").play();
}


// ============================================================================ LEITURA DO CORPO HUMANO
function audioCerebro()
{
    var audio = document.getElementById("audioCerebro");
    audio.currentTime = 0;
    audio.play();
}

function audioCincoSentidos()
{
    var audio = document.getElementById("audioCincoSentidos");
    audio.currentTime = 0.1;
    audio.play();
}

function audioCoracao()
{
    var audio = document.getElementById("audioCoracao");
    audio.currentTime = 0.1;
    audio.play();
}

function audioEsqueleto()
{
    var audio = document.getElementById("audioEsqueleto");
    audio.currentTime = 0.1;
    audio.play();
}

function audioMusculo()
{
    var audio = document.getElementById("audioMusculo");
    audio.currentTime = 0.1;
    audio.play();
}

function audioPulmao()
{
   var audio = document.getElementById("audioPulmao");
   audio.currentTime = 0.1;
   audio.play();
}

function audioSistemaDigestorio()
{
    var audio = document.getElementById("audioSistemaDigestorio");
    audio.currentTime = 0.1;
    audio.play();
}

function audioSistemaNervoso()
{
    var audio = document.getElementById("audioSistemaNervoso");
    audio.currentTime = 0.1;
    audio.play();
}

function audioSistemaUrinario()
{
    var audio = document.getElementById("audioSistemaUrinario");
    audio.currentTime = 0.1;
    audio.play();
}

function pararAudio(id)
{
    var audio = document.getElementById(id);
    audio.pause();
    audio.currentTime = 0;
}


// =============================================================================  QUIZ

function audiopergunta1()
{
    var audio = document.getElementById("perg1");
    audio.play();
}

function audiopergunta2()
{
    var audio = document.getElementById("perg2");
    audio.play();
}

function audiopergunta3()
{
    var audio = document.getElementById("perg3");
    audio.play();
}

function audiopergunta4()
{
    var audio = document.getElementById("perg4");
    audio.play();
}

function audionariz()
{
    var audio = document.getElementById("nariz");
    audio.play();
}

function audiobraco()
{
    var audio = document.getElementById("braco");
    audio.play();
}

function audioperna2()
{
    var audio = document.getElementById("perna");
    audio.play();
}

function audiomao()
{
    var audio = document.getElementById("mao");
    audio.play();
}


function audiocabeca()
{
    var audio = document.getElementById("cabeca");
    audio.play();
}

function audiocerebro2()
{
    var audio = document.getElementById("cerebro");
    audio.play();
}

function audiocoracao2()
{
    var audio = document.getElementById("coracao");
    audio.play();
}

function audiointestino()
{
    var audio = document.getElementById("intestino");
    audio.play();
}

function audioestomago()
{
    var audio = document.getElementById("estomago");
    audio.play();
}

function audioboca()
{
    var audio = document.getElementById("boca");
    audio.play();
}
