document.getElementById('frontend-button').addEventListener('click', function() {
    showSection('frontend-content');
});

document.getElementById('backend-button').addEventListener('click', function() {
    showSection('backend-content');
});

document.getElementById('tools-button').addEventListener('click', function() {
    showSection('tools-content');
});

document.getElementById('soft-skills-button').addEventListener('click', function() {
    showSection('soft-skills-content');
});

function showSection(sectionId) {
    var sections = document.querySelectorAll('.content');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}