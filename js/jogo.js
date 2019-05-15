const criaJogo = function(sprite) {

    let _sprite = sprite;
    let etapa = 1;
    let secretword = ''
    let lacunas = [];

    const setPalavraSecreta = function (palavra) { 
        secretword =  palavra.toUpperCase();
        createLacuna();
    };
    const createLacuna = function(){
        lacunas = Array(secretword.length).fill('');
    }

    const getLacunas = function () {
        etapa = 2;
        //preenche o array vazio
        return lacunas;
    };

    const getEtapa = function () {
        return etapa;    
    };

    const processTry = function(letter){
        
        let expRe = new RegExp(letter.toUpperCase(),'g')
        if(secretword.match(expRe)){
            while(match = expRe.exec(secretword)){
                lacunas[match.index] = letter;
            }
        }else{
            _sprite.nextFrame();
        }
        
    }

    return {

        setPalavraSecreta: setPalavraSecreta, 
        getLacunas: getLacunas,
        getEtapa: getEtapa,
        processTry: processTry
        
    };
};