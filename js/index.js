var canvas;
var ctx;

function init() {

    canvas = document.getElementById("mainCanvas");

    var player = {
        y: 20,
        x: 20,
        rectWidth: 40,
        rectHeight: 40,
        speed: 5
    };

    ctx = canvas.getContext("2d");
    ctx.fillStyle = "gray";
    

    drawPlayer(player);

    //evento de tecla pressionada
    window.addEventListener("keydown", function(event) {
        //verifica qual tecla foi pressionada
        switch (event.key) {
            case "w":
                player.y -= player.speed;
                break;
            case "s":
                player.y += player.speed;
                break;
            case "a":
                player.x -= player.speed;
                break;
            case "d":
                player.x += player.speed;
                break;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawPlayer(player);
    });

}

function drawPlayer(player) {
    ctx.fillRect(player.x, player.y, player.rectWidth, player.rectHeight);
}

init();



