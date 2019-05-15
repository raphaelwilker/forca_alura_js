const createSprite = function(selector) {

    let $el = $(selector);

    let frames = [
        'frame1', 'frame2', 'frame3', 'frame4', 'frame5',
        'frame6', 'frame7', 'frame8', 'frame9'
    ];

    let current = 0;

    const last = frames.length -1; 

    $el.addClass(frames[current]);  

    const moveFrame = function(from, to) {

        $el.removeClass(from)
            .addClass(to);
    }

    const hasNext = function(){
        return current + 1 <= last;
    }

    const nextFrame = function() {
        
        if(hasNext()){
            moveFrame(frames[current], frames[++current]);
        }
        
    }

    const isFinish = function(){
        return current == last;
    }

    const reset = function (){

        moveFrame(frames[current], frames[0]);
        current = 0;

    }

    return {
        nextFrame: nextFrame,
        isFinish: isFinish,
        reset: reset
    };
}