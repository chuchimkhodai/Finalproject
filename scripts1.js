document.addEventListener('DOMContentLoaded', function () {
    // Populate date of birth dropdowns
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
    const monthSelect = document.getElementById('month');
    months.forEach((month, index) => {
        const option = document.createElement('option');
        option.value = index + 1;
        option.textContent = month;
        monthSelect.appendChild(option);
    });

    // Days
    const daySelect = document.getElementById('day');
    for (let i = 1; i <= 31; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        daySelect.appendChild(option);
    }

    // Years
    const yearSelect = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= currentYear - 100; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        yearSelect.appendChild(option);
    }

    // Navigation between forms
    document.getElementById('basicInfoNextBtn').addEventListener('click', function () {
        document.getElementById('basicInfo').classList.remove('active');
        document.getElementById('accountDetails').classList.add('active');
    });

    document.getElementById('backToBasicInfo').addEventListener('click', function () {
        document.getElementById('accountDetails').classList.remove('active');
        document.getElementById('basicInfo').classList.add('active');
    });

    document.getElementById('switchToSignIn').addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('basicInfo').classList.remove('active');
        document.getElementById('signIn').classList.add('active');
    });

    document.getElementById('switchToCreate').addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('signIn').classList.remove('active');
        document.getElementById('basicInfo').classList.add('active');
    });

    // Button loading effects
    const buttons = ['basicInfoNextBtn', 'createAccountBtn', 'signInNextBtn'];
    buttons.forEach(btnId => {
        const btn = document.getElementById(btnId);
        if (btn) {
            btn.addEventListener('click', function () {
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> PROCESSING';
                this.disabled = true;

                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.disabled = false;
                }, 1500);
            });
        }
    });
});