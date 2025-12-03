const overlay = document.getElementById('overlay');
const modal = document.getElementById('message-modal');

function openMessageModal() {
    overlay.style.display = 'block';
    modal.style.display = 'block';
    modal.setAttribute('aria-hidden', 'false');
    document.getElementById('message') ? .focus();
}

function closeMessageModal() {
    overlay.style.display = 'none';
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
}

function sendMessage() {
    const t = document.getElementById('message');
    const txt = t ? .value.trim();
    if (!txt) { alert('Please enter a message.'); return; }
    console.log('Message sent:', txt);
    alert('Message sent — an advisor will contact you shortly.');
    if (t) t.value = '';
    closeMessageModal();
}

function openRegisterPage() {
    // update to your actual registration route
    window.location.href = 'register.html';
}
window.addEventListener('keydown', e => { if (e.key === 'Escape') closeMessageModal(); });

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation on scroll
window.addEventListener('scroll', () => {
    const features = document.querySelectorAll('.feature-card');
    features.forEach(feature => {
        const featureTop = feature.getBoundingClientRect().top;
        if (featureTop < window.innerHeight - 100) {
            feature.style.opacity = '1';
            feature.style.transform = 'translateY(0)';
        }
    });
});

{
    const navToggle = document.querySelector('.nav-toggle');
    const navMobile = document.getElementById('nav-mobile');

    function toggleNav() {
        if (!navToggle || !navMobile) return;
        const isOpen = navMobile.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
        navMobile.setAttribute('aria-hidden', String(!isOpen));
    }

    // close if clicking outside or pressing Escape
    function closeNav() {
        if (!navMobile || !navToggle) return;
        navMobile.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navMobile.setAttribute('aria-hidden', 'true');
    }

    navToggle ? .addEventListener('click', (e) => { e.stopPropagation();
        toggleNav(); });
    window.addEventListener('click', (e) => {
        if (!navMobile) return;
        if (navMobile.classList.contains('open') && !navMobile.contains(e.target) && !navToggle.contains(e.target)) {
            closeNav();
        }
    });
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeNav();
    });
}