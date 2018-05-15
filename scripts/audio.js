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


// ============================================================================ LEITURA DO CORPO HUMANO
function audioClick()
{
    var audio = document.getElementById("audioClick");
    audio.currentTime = 0;
    audio.play();
}

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
