const toggle = document.querySelector(".toggle");
toggle.addEventListener("change" , toggleTheme)
function toggleTheme(e) {
    if (toggle.checked) {
        document.body.className = 'dragon';
    } else {
        document.body.className = 'unicorn';
    }
}