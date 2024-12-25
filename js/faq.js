document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000, 
        once: true,  
    });
});



const faqAsk1 = document.getElementById('faqAsk1');
const closeFaq = document.getElementById('boton-faq-1');
const faqAsk2 = document.getElementById('faqAsk2');
const closeFaq2 = document.getElementById('boton-faq-2');
const faqAsk3 = document.getElementById('faqAsk3');
const closeFaq3 = document.getElementById('boton-faq-3');
const faqAsk4 = document.getElementById('faqAsk4');
const closeFaq4 = document.getElementById('boton-faq-4');
const faqAsk5 = document.getElementById('faqAsk5');
const closeFaq5 = document.getElementById('boton-faq-5');

closeFaq.addEventListener('click', () => {
    faqAsk1.classList.toggle('active');
});
closeFaq2.addEventListener('click', () => {
    faqAsk2.classList.toggle('active');
});
closeFaq3.addEventListener('click', () => {
    faqAsk3.classList.toggle('active');
});
closeFaq4.addEventListener('click', () => {
    faqAsk4.classList.toggle('active');
});
closeFaq5.addEventListener('click', () => {
    faqAsk5.classList.toggle('active');
});