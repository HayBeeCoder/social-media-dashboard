const toggle = document.querySelector(".toggle");
function select(item) {
    return document.querySelector(item);
}
toggle.addEventListener("change" , toggleTheme)
function toggleTheme(e) {
    if (toggle.checked) {
        document.body.className = 'dragon';
        select('.mode').textContent = "Dark Mode"
    } else {
        document.body.className = 'unicorn';
        select('.mode').textContent = "Light Mode"
    }
}