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

const projects = [
  {
    projectId: 'projectOne',
    name: 'Tonic',
    description: 'Lorem Ipsum is simply dummy text of the printing and '
    + 'typesetting industry. Lorem Ipsum has been the industry\'s '
    + 'standard dummy text ever since the 1500s, when an unknown printer '
    + 'took a galley of type and scrambled it to make a type specimen book. '
    + 'It has survived not only five centuries, but also the leap into electronic '
    + 'typesetting, remaining essent',
    featuredImage: 'images/desk-back4.png',
    technologies: ['html', 'css', 'javascript'],
    liveLink: 'https://sly-cloud.github.io/portfolio-project/',
    sourceLink: 'https://github.com/Sly-Cloud/portfolio-project',
  },

  {
    projectId: 'projectTwo',
    name: 'Multi-Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and '
    + 'typesetting industry. Lorem Ipsum has been the industry\'s '
    + 'standard dummy text ever since the 1500s, when an unknown printer '
    + 'took a galley of type and scrambled it to make a type specimen book. '
    + 'It has survived not only five centuries, but also the leap into electronic '
    + 'typesetting, remaining essent',
    featuredImage: 'images/desk-back3.png',
    technologies: ['html', 'css', 'javascript'],
    liveLink: 'https://sly-cloud.github.io/portfolio-project/',
    sourceLink: 'https://github.com/Sly-Cloud/portfolio-project',
  },

  {
    projectId: 'projectThree',
    name: 'Tonic',
    description: 'Lorem Ipsum is simply dummy text of the printing and '
    + 'typesetting industry. Lorem Ipsum has been the industry\'s '
    + 'standard dummy text ever since the 1500s, when an unknown printer '
    + 'took a galley of type and scrambled it to make a type specimen book. '
    + 'It has survived not only five centuries, but also the leap into electronic '
    + 'typesetting, remaining essent',
    featuredImage: 'images/desk-back2.png',
    technologies: ['html', 'css', 'javascript'],
    liveLink: 'https://sly-cloud.github.io/portfolio-project/',
    sourceLink: 'https://github.com/Sly-Cloud/portfolio-project',
  },

  {
    projectId: 'projectFour',
    name: 'Multi-Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and '
    + 'typesetting industry. Lorem Ipsum has been the industry\'s '
    + 'standard dummy text ever since the 1500s, when an unknown printer '
    + 'took a galley of type and scrambled it to make a type specimen book. '
    + 'It has survived not only five centuries, but also the leap into electronic '
    + 'typesetting, remaining essent',
    featuredImage: 'images/desk-back1.png',
    technologies: ['html', 'css', 'javascript'],
    liveLink: 'https://sly-cloud.github.io/portfolio-project/',
    sourceLink: 'https://github.com/Sly-Cloud/portfolio-project',
  },
];

function createProject(project, position) {
  let left = '';
  let right = '';
  if (position % 2 === 0) {
    left = 'order-1';
    right = 'order-2';
  } else {
    left = 'order-2';
    right = 'order-1';
  }
  const techItem = `
<li>
  <section class="post-section">
    <div class="post-container">
        <div class="left ${left}">
            <img class="image sm"  src="${project.featuredImage}" alt="portfolio" />
        </div>
        <div class="right ${right}">
          <h4 class="title">${project.name}</h4>
          <ul class="skills">
            ${skillList}
          </ul>
          <p class="text">
            ${project.description}
          </p>
          <ul class="tags" id="tags">
            ${project.technologies.map((tech) => `<li class="tag">${tech}</li>`).join('')}
          </ul>
          <button class="btn-project" id="${project.projectId}">See Project</button>
        </div>
    </div>
  </section>
</li>
`;
  return techItem;
}

for (let i = 0; i < projects.length; i += 1) {
  const project = createProject(projects[i], i);
  projectList.innerHTML += project;
}

const body = document.querySelector('body');
const closepopup = document.querySelector('#closePopup');
const popupTitle = document.querySelector('#popup-title');
const popupText = document.querySelector('#popup-text');
const popupImage = document.querySelector('#popup-image');
const image = document.createElement('img');
const popupTags = document.querySelector('#popup-tags');
const popupSkills = document.querySelector('#popup-skills');
const liveLink = document.querySelector('#live-link');
const sourceLink = document.querySelector('#source-link');

function toggleModal(project = null) {
  if (body.style.overflow === '') {
    body.style.overflow = 'hidden';
    popupSkills.innerHTML = skillList;
    popupTitle.textContent = project.name;
    popupText.textContent = project.description;
    image.setAttribute('src', project.featuredImage);
    image.setAttribute('alt', project.projectId);
    image.setAttribute('class', 'image');
    image.setAttribute('id', 'image');
    popupImage.appendChild(image);
    for (let i = 0; i < project.technologies.length; i += 1) {
      const tag = document.createElement('li');
      tag.setAttribute('class', 'tag');
      tag.textContent = project.technologies[i];
      popupTags.appendChild(tag);
    }
    liveLink.href = project.liveLink;
    sourceLink.href = project.sourceLink;
  } else {
    body.style.overflow = '';
    popupSkills.innerHTML = '';
    popupTitle.textContent = '';
    popupText.textContent = '';
    image.parentNode.removeChild(image);
    while (popupTags.firstChild) {
      popupTags.removeChild(popupTags.firstChild);
    }
    liveLink.href = '#';
    sourceLink.href = '#';
  }
  mainTag.classList.toggle('open-modal');
}

for (let i = 0; i < projects.length; i += 1) {
  const project = document.querySelector(`#${projects[i].projectId}`);
  project.addEventListener('click', () => {
    toggleModal(projects[i]);
  });
}

closepopup.addEventListener('click', () => {
  toggleModal();
});

const form = document.querySelector('#contacts');
const error = document.querySelector('#error');
const fullName = document.querySelector('#username');
const email = document.querySelector('#useremail');
const message = document.querySelector('#message');

const inputKey = 'CONTACT';
const inputDetails = localStorage.getItem(inputKey);

if (inputDetails) {
  const contact = JSON.parse(inputDetails);
  fullName.value = contact.fullName;
  email.value = contact.email;
  message.value = contact.message;
}

form.addEventListener('submit', (event) => {
  if (email.value.trim() !== email.value.trim().toLowerCase()) {
    error.style.opacity = 1;
    error.textContent = 'Please, all email characters should be lowercase';
    event.preventDefault();
  } else if (fullName.value.trim() !== fullName.value.trim().toLowerCase()) {
    error.style.opacity = 1;
    error.textContent = 'Please, add only lower character case in your name';
    event.preventDefault();
  } else if (message.value.trim() !== message.value.trim().toLowerCase()) {
    error.style.opacity = 1;
    error.textContent = 'Please, only lower character case are allowed in messages';
    event.preventDefault();
  } else {
    const contactObj = {
      fullName: fullName.value,
      email: email.value,
      message: message.value,
    };
    localStorage.setItem(inputKey, JSON.stringify(contactObj));
    error.style.opacity = 0;
  }
});
