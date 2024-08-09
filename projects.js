document.getElementById('see-more-btn').addEventListener('click', function() {
    // Show all projects, including the hidden ones
    document.querySelector('.more-projects').style.display = 'block';

    // Scroll to the top of the projects section (optional)
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });

    // Optionally, hide the "See More" button after clicking
    this.style.display = 'none';
});
