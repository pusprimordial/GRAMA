//import controls from "./move.js";
var canvas;
var ctx;
var player;
var gameState = "menu";
var playerDirection = "right";


function init() {

    canvas = document.getElementById("mainCanvas");

    player = {
        y: 200,
        x: 200,
        playerWidth: 24,
        playerHeight: 24,
        speed: 8
    };

    ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";

    playerSprite = new Image();
    playerSprite.src = "../assets/textures.png";

    playerSprite.onload= function() {
        //inicia o loop do jogo
        gameLoop();
    }

    //display menu
    canvas.addEventListener("click", function(event) {
        if(gameState === "menu" ) {
            //verifica se o clique ocorreu dentro da area do botao iniciar
            if (event.offsetX >= 150 && event.offsetX <= 250 && event.offsetY >= 200 && event.offsetY <= 240) {
                gameState = "playing";
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                drawPlayer(player);
            }
        }
    });

    //evento de tecla pressionada (moveCHaracter)
    //controls(player, playerDirection, canvas, ctx, drawPlayer);
    //evento de tecla pressionada (moveCHaracter)
    window.addEventListener("keydown", function(event) {
        //verifica qual tecla foi pressionada
        switch (event.key) {
            case "w":
                if(player.y - player.speed >= 0) {
                    player.y -= player.speed;
                }
                break;
            case "s":
                if(player.y + player.speed + player.playerHeight <=  canvas.height){
                    player.y += player.speed;
                }
                break;
            case "a":
                if(player.x - player.speed >= 0) {
                    player.x -= player.speed;
                    playerDirection = "right";
                }
                break;
            case "d":
                if(player.x + player.speed + player.playerWidth <= canvas.width){
                    player.x += player.speed;
                    playerDirection = "left";
                }
                break;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawPlayer(player);
    });
    

}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

function draw() {
    //ctx.clearRect(0, 0, canvas.width, canvas.height);

    //desenha o jogador apenas se o jogo estuver no estado playing
    if(gameState === "playing") {

            // Desenha o sprite do jogador na posição atual
    // Especifica a posição e o tamanho do sprite dentro da imagem de origem
    var spriteX = 339; // Ajuste isso de acordo com a posição do sprite do jogador na imagem de origem
    var spriteY = 105; // Ajuste isso de acordo com a posição do sprite do jogador na imagem de origem
    var spriteWidth = 12;
    var spriteHeight = 12;

    // Ajusta a posição do sprite baseado na direção do jogador
    if (playerDirection === "left") {
        spriteX += spriteWidth; // Move o sprite para o próximo sprite na imagem de origem
    }

    // Desenha o sprite do jogador
    ctx.drawImage(playerSprite, spriteX, spriteY, spriteWidth, spriteHeight, player.x, player.y, player.playerWidth, player.playerHeight);

    } else {
        drawMenu();
    }
}

function update() {
    //update game logic
}



if (gameState === "menu") {
    drawMenu();
    
} 
//drawMenu();


function drawMenu() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //desenha o fundo do menu
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //desenha o titulo do menu
    ctx.fillStyle = "green";
    ctx.font = "30px Arial";
    ctx.fillText("Grama", 150, 100);

    //desenha o botao
    ctx.fillStyle = "green";
    ctx.fillRect(140, 200, 120, 40);
    ctx.fillStyle = "#000000";
    ctx.font = "20px Arial";
    ctx.fillText("Iniciar Jogo", 150, 228);
}

function drawPlayer(player) {
    ctx.fillRect(player.x, player.y, player.playerWidth, player.playerHeight);
}

init();



