let yPos = 1;
window.addEventListener('scroll', function() {
    yPos = window.scrollY;
});

export const triggerFormPopup = ({ target }) => { 
    
    const popup = document.querySelector('.form-container');
    const body = document.querySelector('body');

    popup.style.top = '0px';
    popup.style.display = 'block';
    body.style.overflow = 'hidden';
} 