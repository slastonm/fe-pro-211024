document.addEventListener('DOMContentLoaded', function(){
    let mouseEl = document.querySelector('.mouse');
    // mouseEl.addEventListener('mousedown', function(e){
    //     console.log(e);
    //     this.innerHTML = `Event type: ${e.type} X: ${e.pageX} Y:${e.pageY}`;
    //     this.style.backgroundColor ='gray';
    // });
    // mouseEl.addEventListener('mouseup', function(e){
    //     console.log(e);
    //     this.innerHTML = `Event type: ${e.type} X: ${e.pageX} Y:${e.pageY}`;
    //     this.style.backgroundColor ='green';
    // });

    // mouseEl.onclick = function(e){
    //     this.innerHTML = `Event type: ${e.type} X: ${e.pageX} Y:${e.pageY}`;
    //     this.style.backgroundColor ='orange';
    // }
    mouseEl.addEventListener('dblclick', function(e){
        this.innerHTML = `Event type: ${e.type} X: ${e.pageX} Y:${e.pageY}`;
        this.style.backgroundColor ='purple';
        this.style.color ='white';
    })
});