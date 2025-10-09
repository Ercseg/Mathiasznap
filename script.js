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

    document.querySelectorAll('.feature-card.toogle').forEach(card => {
        const interactiveSelector = 'input, select, textarea, button, label, form';
        card.querySelectorAll(interactiveSelector).forEach(el => {
            el.addEventListener('click', e => e.stopPropagation());
            el.addEventListener('mousedown', e => e.stopPropagation());
            el.addEventListener('focusin', e => e.stopPropagation());
            
            el.addEventListener('pointerdown', e => e.stopPropagation());
        });
    });
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

           
            toggle.querySelectorAll('form').forEach(form => {
                try { form.reset(); } catch (e) {  }
                
                const ered = toggle.querySelector('#eredmeny');
                if (ered && toggle.contains(ered)) ered.innerHTML = '';
                const kepkielt = toggle.querySelector('#kepki');
                if (kepkielt && toggle.contains(kepkielt)) kepkielt.innerHTML = '';
            });
        } else {
            
            allCards.forEach(card => card.classList.remove('hidden'));
        }
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.mathiasz-logo');
    if (logo) {
        logo.addEventListener('click', function() {
            window.location.href = 'bobo.html';
        });
    }
});


function kiszamol() {
   
    const quizForm = document.getElementById('quizform_id');
    let kitesz = document.getElementById('eredmeny');
    let kepki = document.getElementById('kepki');
    data = []
    const formData = new FormData(quizForm);
    let pontszam = 0;
    let szam = 0;

    for (const [key, value] of formData) {
        
        data[key] = value
        szam = parseFloat(value);
        if (!isNaN(szam)) 
        {
            pontszam += szam;
        }
        if (key == "kereslet" && value == "lyukaskereslet")
        {
            pontszam += 1;
        }
            
        if (key == "kinalat" && value == "kínálat")
        {
            pontszam += 1;
        }

        if (key == "lyukaskozponti" && value == "lyukasközponti")
        {
            pontszam += 1;
        }

        if (key == "onkormanyzati" && value == "önkormányzati")
        {
            pontszam += 1;
        }

        if (key == "lyukastermek" && value == "lyukastermék")
        {
            pontszam += 1;
        }

        if (key == "ar" && value == "ár")
        {
            pontszam += 1;
        }

        if (key == "hely" && value == "hely")
        {
            pontszam += 1;
        }

         if (key == "promocio" && value == "promóció")
        {
            pontszam += 1;
        }


    }

    
    kepki.innerHTML ='<img src="img/vege.jpg" alt="" class="vegekep"></img>'
    kitesz.innerHTML = `<p>Az elért pontszámod:  ${pontszam}  pont</p>`;

    
    console.log(data);
   
}
