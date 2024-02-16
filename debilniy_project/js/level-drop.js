function toggleDropdown() {
    var dropdown = document.querySelector('.dropdown-content');
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}
window.onclick = function(event) {
    var dropdown = document.querySelector('.dropdown-content');
    if (!event.target.matches('.dropdown-content') && !event.target.matches('button')) {
        dropdown.style.display = 'none';
    }
}