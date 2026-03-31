const clickMeBtn = document.getElementById('clickme');
const sectionOne = document.querySelector('.section1');
const sectionTwo = document.querySelector('.section2');

clickMeBtn.addEventListener('click', () => {
    sectionOne.textContent = 'Hey you clicked!';
    sectionTwo.textContent = 'Nice!';
});