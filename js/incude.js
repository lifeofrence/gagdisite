// Function to fetch and include HTML content
function includeHTML() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
        });

    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });
}

// Call the function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', includeHTML);
