document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('themeBtn');
    const modeText = document.getElementById('modeText');
    
    // 1. Initial Logic: Check LocalStorage
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        updateUI(true);
    }

    // 2. Toggle Logic
    btn.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        
        if (isDark) {
            // Switch to Light
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            updateUI(false);
        } else {
            // Switch to Dark
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            updateUI(true);
        }
    });

    // 3. UI Helper function
    function updateUI(isDark) {
        btn.innerText = isDark ? "Switch to Light Mode" : "Switch to Dark Mode";
        modeText.innerText = isDark ? "Dark" : "Light";
    }
});
