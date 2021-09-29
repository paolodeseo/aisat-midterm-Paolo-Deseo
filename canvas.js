let canvas = document.getElementById('canvas')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

const bg = new Background('sprites/background/bg1.png', canvas.width*3, canvas.height);
// const bg = new Background1('sprites/background/bg2.png', canvas.width*3, canvas.height);
// const bg = new Background('sprites/background/bg3.png', canvas.width, canvas.height);
// const bg = new Background('sprites/background/bg4.png', canvas.width, canvas.height);
const player = new Player(0, canvas.height*0.40)

    function animate() {
        context.clearRect(0, 0, canvas.width, canvas.height);

        bg.update();
        bg.draw();
        
            if (player.fly()){
                player.update('fly');
                player.draw('fly');
                } 

            else {
            player.update('idle');
            player.draw('idle');
                } 

        requestAnimationFrame(animate);
            }
            animate()

            document.addEventListener('keydown', key_down_listener)
            document.addEventListener('keyup', key_up_listener)

            function key_down_listener(event) {
                console.log('[hold]')
                player.move("keydown", event.key);
            }

            function key_up_listener(event) {
                console.log('[release]')
                player.move("keyup", event.key)
            }

