function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('join-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Welcome to the Crimson Knights!');
});

