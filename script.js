const hamburgerTag = document.querySelector('#hamburger');
const closeTag = document.querySelector('#close');
const contactTag = document.querySelector('#contact');
const aboutTag = document.querySelector('#about');
const portfolioTag = document.querySelector('#portfolio');
const mainTag = document.querySelector('main');
const projectList = document.querySelector('#projects');
const skillList = `
<li class="proficiency">CANOPY</li>
<li class="dot"></li>
<li class="role">Back End Dev</li>
<li class="dot"></li>
<li class="year">2015</li>
`;

hamburgerTag.addEventListener('click', () => {
  mainTag.classList.add('active');
});

closeTag.addEventListener('click', () => {
  mainTag.classList.remove('active');
});

portfolioTag.addEventListener('click', () => {
  mainTag.classList.toggle('active');
});

aboutTag.addEventListener('click', () => {
  mainTag.classList.toggle('active');
});

contactTag.addEventListener('click', () => {
  mainTag.classList.toggle('active');
});

