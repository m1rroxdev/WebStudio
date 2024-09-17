let imgScreenImages = document.querySelectorAll('.imgScreen-img');
let imgScreenPopup = document.getElementById('imgScreenPopup');
let imgScreenPopup_div = document.querySelector('.imgScreenPopup-image')
let closeButton = document.getElementById('close-button');

imgScreenImages.forEach(image => {
    image.addEventListener('click', function (){
        imgScreenPopup_div.style.backgroundImage = window.getComputedStyle(image).backgroundImage;
        imgScreenPopup.style.display = 'flex';
    })
})

closeButton.addEventListener('click', function () {
    imgScreenPopup.style.display = 'none';
})