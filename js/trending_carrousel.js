const api_key = 'Z7d1DhsIu3QW4YKuxVFs289b8ZiwX0Sp';
var offset = 0;

async function getTrendingGifs(offset) {
    let url = `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&offset=${offset}&limit=3`;
    let response = await fetch(url);
    let result = await response.json();
    createThreeGifCards(result);
    return result;
};

function createThreeGifCards (result) {
    let card1 = createGifCard(result.data[0]);
    let card2 = createGifCard(result.data[1]);
    let card3 = createGifCard(result.data[2]);

    let contenedor = document.getElementById('main-gifs-container');
    contenedor.replaceChild(card1, contenedor.children[0]);
    contenedor.replaceChild(card2, contenedor.children[1]);
    contenedor.replaceChild(card3, contenedor.children[2]);
};


function createGifCard(gif) {
    let div = document.createElement('div');
    div.innerHTML = `
    <div class="modal-container" style="background-image: url(${gif.images.original.url}); width: auto; background-repeat: no-repeat;">
    <div class="modal-img">
      <img src="./assets/favorite-icon.svg" alt="">
      <img src="./assets/download-icon.svg" alt="">
      <img src="./assets/max-icon.svg" alt="">
    </div>
    <div class="modal-text">
        <p class="modal-content">User</p>
        <h3 class="modal-content">Title</h3>
    </div>
</div>
    `;
    return div;
};

getTrendingGifs();

let sliderRight = document.getElementById('right');
let sliderLeft = document.getElementById('left'); 

sliderRight.addEventListener('click', () => {
    offset = offset + 3;
    getTrendingGifs(offset);
});

sliderLeft.addEventListener('click', () => {
    offset = offset - 3;
    getTrendingGifs(offset);
});
