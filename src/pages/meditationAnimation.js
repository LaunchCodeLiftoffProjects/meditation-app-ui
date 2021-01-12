function bubbleAnime() {
    //calculating random color of dream
    let color = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
    //let color = '#000';
    //calculating random X position
    let x = Math.floor(Math.random() * window.innerWidth);
    //let x = Math.floor(Math.random() *100)
    //calculating random Y position
    let y = Math.floor(Math.random() * window.innerHeight);
    //let y = Math.floor(Math.random() *100)
    //creating the dream and hide
    let bubble = document.createElement('span');
    bubble.className = 'bubble';
    bubble.style.top = y + 'px';
    bubble.style.left = x + 'px';
    bubble.style.backgroundColor = color;
    //remove element when animation is complete
    bubble.addEventListener("animationstart", function(e) {
        window.setTimeout(startBubble, 10000);
    }, false);
  
    bubble.addEventListener("animationend", function(e) {
        document.body.removeChild(this);
    }, false);

    document.body.appendChild(bubble);
}

function startBubble(){
    window.requestAnimationFrame(bubbleAnime);
  }

export default startBubble;