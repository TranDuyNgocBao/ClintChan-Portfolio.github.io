function toggleMobileMenu(){
    document.getElementById("menu").classList.toggle("active");
}

function showHideButton(cardNo, icons) {
    const card = document.getElementById(cardNo);
    const iconContainer = document.getElementById(icons);
    const showIcon = iconContainer.firstElementChild;
    const hideIcon = iconContainer.lastElementChild;

    // Toggle the card visibility
    if (card.style.display === "none" || card.style.display === "") {
        card.style.display = "block";
        showIcon.style.display = "none";
        hideIcon.style.display = "block";
    } else {
        card.style.display = "none";
        showIcon.style.display = "block";
        hideIcon.style.display = "none";
    }
}

function setupDarkmodeButton() {
    const themeSwitch = document.getElementById('theme-switch');
    
    const toggleDarkmode = () => {
        const isDarkmode = document.body.classList.toggle('darkmode');
        localStorage.setItem('darkmode', isDarkmode ? 'active' : null);
    }

    // Apply initial state
    if (localStorage.getItem('darkmode') === 'active') {
        document.body.classList.add('darkmode');
    }

    themeSwitch.addEventListener("click", toggleDarkmode);
}

document.addEventListener('DOMContentLoaded', setupDarkmodeButton);