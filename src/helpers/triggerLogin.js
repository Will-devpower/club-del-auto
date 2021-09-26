let yPos = 1;
window.addEventListener('scroll', function() {
    yPos = window.scrollY;
});

export const triggerLoginPopup = ({ target }) => { 
    
    const popup = document.querySelector('.popup-container');
    const body = document.querySelector('body');

    popup.style.top = yPos+'px';
    popup.style.display = 'block';
    body.style.overflow = 'hidden';
} 