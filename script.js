const toggles = document.querySelectorAll('.toogle');
const allCards = document.querySelectorAll('.feature-card');


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


