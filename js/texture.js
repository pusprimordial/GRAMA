// Módulo de Renderização de Texturas
const TextureRenderer = {
    // Método para carregar texturas
    loadTextures: function(texturePaths, callback) {
        const textures = {};
        let loadedCount = 0;

        texturePaths.forEach(function(path) {
            const image = new Image();
            image.onload = function() {
                textures[path] = image;
                loadedCount++;
                if (loadedCount === texturePaths.length) {
                    callback(textures);
                }
            };
            image.src = path;
        });
    },

    // Método para renderizar uma textura
    renderTexture: function(context, texture, x, y, width, height) {
        context.drawImage(texture, x, y, width, height);
    }
};

// Exemplo de uso
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('game-canvas');
    const context = canvas.getContext('2d');

    // Carrega as texturas
    TextureRenderer.loadTextures(['texture1.png', 'texture2.png'], function(textures) {
        // Após carregar as texturas, você pode renderizá-las
        TextureRenderer.renderTexture(context, textures['texture1.png'], 0, 0, 64, 64);
    });
});
