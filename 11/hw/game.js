let gameAreaEl = document.querySelector('.gameArea');
let gameObj = document.querySelector('.obj');
let posX = 0;
let posY = 0;
console.log(gameAreaEl.clientHeight);

document.addEventListener('keydown', function(event){
    console.log(event.key);
    switch (event.key) {
        case 'ArrowUp':
            posY = Math.max(0,posY-10);
            break;
        case 'ArrowDown':
            posY = Math.min(gameAreaEl.clientHeight-gameObj.clientHeight,posY+10);
            break;
        case 'ArrowLeft':
            posX = Math.max(0,posX-10);
            break;
        case 'ArrowRight':
            posX = Math.min(gameAreaEl.clientWidth-gameObj.clientWidth,posX+10);
            break;            
        default:
            break;
    }
    gameObj.style.top = `${posY}px`;
    gameObj.style.left = `${posX}px`;
});