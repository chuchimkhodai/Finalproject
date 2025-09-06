document.addEventListener('DOMContentLoaded', function() {
    // Enhanced dropdown functionality
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.classList.add('active');
        });
        
        item.addEventListener('mouseleave', function() {
            this.classList.remove('active');
        });
    });
    
    // Pre-order button animation enhancement
    const preOrderBtn = document.querySelector('.pre-order');
    
    preOrderBtn.addEventListener('mousemove', function(e) {
        const x = e.pageX - this.offsetLeft;
        const y = e.pageY - this.offsetTop;
        
        this.style.setProperty('--x', x + 'px');
        this.style.setProperty('--y', y + 'px');
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.pre-order-container')) {
            document.querySelector('.platform-dropdown').style.opacity = '0';
            document.querySelector('.platform-dropdown').style.visibility = 'hidden';
        }
    });
});