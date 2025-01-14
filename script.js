function openMessageModal() {
    document.getElementById('message-modal').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeMessageModal() {
    document.getElementById('message-modal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function sendMessage() {
    const message = document.getElementById('message').value;
    if (message.trim()) {
        alert('Thank you for your message. One of our advisors will contact you shortly.');
        document.getElementById('message').value = '';
        closeMessageModal();
    } else {
        alert('Please enter a message before sending.');
    }
}

function openRegisterPage() {
    alert('Thank you for your interest in opening an account. Our account registration page will be available soon.');
    // You can replace this with actual registration functionality
    // window.location.href = '/register.html';
}

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

