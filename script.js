const toggles = document.querySelectorAll('.toogle');
const allCards = document.querySelectorAll('.feature-card');

const kepek = ['img/kep1.jpg','img/flow.jpg', 'img/sziv.jpg'];
let gali = 0;



function updateGalleryImage() {
    const img = document.querySelector('.feature-card.gal .galeria');
    if (!img) return;
    img.src = kepek[gali];
}

function showNext() {
    if (kepek.length === 0) return;
    gali = (gali + 1) % kepek.length;
    updateGalleryImage();
}

function showPrev() {
    if (kepek.length === 0) return;
    gali = (gali - 1 + kepek.length) % kepek.length;
    updateGalleryImage();
}

document.addEventListener('DOMContentLoaded', () => {
    const vissza = document.querySelector('.feature-card.gal .elzo');
    const tova = document.querySelector('.feature-card.gal .kov');
    if (vissza) vissza.addEventListener('click', (e) => { e.stopPropagation(); showPrev(); });
    if (tova) tova.addEventListener('click', (e) => { e.stopPropagation(); showNext(); });
    updateGalleryImage();
});












toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const isActive = toggle.classList.toggle('active');
 
        if (isActive) {
            allCards.forEach(card => {
                if (card !== toggle) {
                    card.classList.add('hidden');
                }
            });
            
            toggle.classList.remove('hidden');
        } else {
            
            allCards.forEach(card => card.classList.remove('hidden'));
        }
    });
});



