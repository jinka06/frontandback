const clickMeBtn = document.getElementById('clickme');
const docTitle = document.getElementById('title');

clickMeBtn.addEventListener('click', () => {
    docTitle.textContent = 'Hello, world was clicked!';
});