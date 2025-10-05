const tooglees = document.querySelectorAll('.toogle');
const alapsz = document.querySelectorAll('.alap');
const alap1 = document.querySelectorAll('.alap1');
tooglees.forEach(toogle => {
    toogle.addEventListener('click', () => {
        toogle.classList.toggle('active');
        if (toogle.classList.contains('active')) {
            
            alapsz.forEach(alap => {
                
                alap.classList.add('none');
                
            
            });
            
        }
        else {
            alapsz.forEach(alap => {
                
                alap.classList.remove('none');
                
            
            });
                    
                
        }
        
        
        
    }
    );
});

