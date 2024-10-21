// JavaScript for FAQ toggling
document.querySelectorAll('.faqbox').forEach(faqBox => {
    faqBox.addEventListener('click', () => {
        const svg = faqBox.querySelector('svg');
        const isOpen = faqBox.classList.toggle('active');
        svg.style.transform = isOpen ? 'rotate(45deg)' : 'rotate(0deg)';
        
        // Add functionality to expand/collapse answer content if available
    });
});
