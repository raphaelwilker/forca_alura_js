const criaController = function (jogo) {

    const _jogo = jogo;
    const $entrada = $('#entrada');
    const $lacunas = $('.lacunas');

    const exibeLacunas = function () {
        $lacunas.html("");
        for(let i in _jogo.getLacunas()){
            $lacunas.append(`<li class="lacuna">${_jogo.getLacunas()[i]}</li>`);
        }
    };

    const mudaPlaceHolder = function (texto) {
        $entrada.attr('placeholder',texto)
    };

    const guardaPalavraSecreta = function () {
        _jogo.setPalavraSecreta($entrada.val().trim());
        $entrada.val('');
        exibeLacunas();
        mudaPlaceHolder ('chute');
    };

    const readTry = function() {
        
        _jogo.processTry($entrada.val().trim().substr(0,1));
        $entrada.val('');
        exibeLacunas();

        if(_jogo.winOrLose()){
            setTimeout(function(){
                if(_jogo.win()){
                    alert('You win!');
                }else if(_jogo.lose()){
                    alert('You lose!');
                }
                restart();
            },200);
        }
    };

    const restart = function () {

        $lacunas.empty();
        mudaPlaceHolder('Palavra secreta');
        _jogo.restart();
    };

    const inicia = function () {

        $entrada.keypress(function (event) {
            if (event.which == 13) {
                switch (_jogo.getEtapa()) {
                    case 1:
                        guardaPalavraSecreta();
                        break;
                    case 2:
                        readTry();
                        break;
                }
            }
        });
    }
    return { 
        inicia: inicia 
    };
};