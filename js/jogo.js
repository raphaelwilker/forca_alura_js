const criaJogo = function(sprite) {

    let _sprite = sprite;
    let etapa = 1;
    let secretword = ''
    let lacunas = [];
    let hit = 0;

    const setPalavraSecreta = function (palavra) { 
        if(!palavra.trim()) throw Error('Palavra inválida');
        secretword =  palavra.toUpperCase();
        createLacuna();
    };
    const createLacuna = function(){
        lacunas = Array(secretword.length).fill('');
    }

    const getLacunas = function () {
        etapa = 2;
        return lacunas;
    };

    const getEtapa = function () {
        return etapa;    
    };

    const processTry = function(letter){
        if(!letter.trim()) throw Error('Chute inválido');
        if(!_sprite.isFinish()){
            let expRe = new RegExp(letter.toUpperCase().trim(),'g')
            if(secretword.match(expRe)){
                while(match = expRe.exec(secretword)){
                    lacunas[match.index] = letter;
                    hit++;
                }
            }else{
                _sprite.nextFrame();
            }
        }
        
    }

    const winOrLose = function(){

        return win() || lose();

    }

    const win = function(){

        return hit == lacunas.length;

    }

    const lose = function(){

        return _sprite.isFinish();

    }

    const restart = function(){

        _sprite.reset();
        etapa = 1;
        secretword = ''
        hit = 0;

    }

    return {

        setPalavraSecreta: setPalavraSecreta, 
        getLacunas: getLacunas,
        getEtapa: getEtapa,
        processTry: processTry,
        winOrLose: winOrLose,
        lose:lose,
        win:win,
        restart:restart
        
    };
};