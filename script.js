const updateText = () => {
    const userText = document.getElementById('user-text');
    const memeText = document.getElementById('meme-text');

    memeText.innerHTML = userText.value;
}

const updateImage = () => {
    const img = document.getElementById('meme-image');
    const file = document.querySelector('input[type=file]').files[0];

    img.src = window.URL.createObjectURL(file)
}