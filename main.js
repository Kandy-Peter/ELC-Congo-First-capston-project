const body = document.querySelector('body');
const navMenu = document.querySelector('.toggle');
const featureSection = document.querySelector('.teachers-cards');

// --------------------MOBILE-MENU--------------------------

navMenu.addEventListener('click', () => {
  body.classList.toggle('open-menu');
});

const menuLink = document.querySelectorAll('.menu-link');

menuLink.forEach((e) => e.addEventListener('click', () => {
  body.classList.remove('open-menu');
}));

// --------------------Features-------------------

const features = [
  {
    id: 1,
    photo: './images/teacher1.jpg',
    name: 'Marc Mutombo',
    role: 'Admin Director and Founder',
    topic: 'After obtaining his master degree at Oxford(2005), he came back home and invested in our education.',
  },
  {
    id: 2,
    photo: './images/teacher2.jpg',
    name: 'John Kamuntu',
    role: 'Sotware Engineer and teacher of DBMS and algorithm',
    topic: 'After obtaining his master degree at Oxford(2005), he came back home and invested in our education.',
  },
  {
    id: 3,
    photo: './images/teacher3.jpg',
    name: 'Amellia Sifa',
    role: 'H.O.D of social science and professor with master degree',
    topic: 'After obtaining his master degree at Oxford(2005), he came back home and invested in our education.',
  },
  {
    id: 4,
    photo: './images/teacher4.jpg',
    name: 'Kandy Buhendwa',
    role: 'Co-founder of ELC-Congo and head manager',
    topic: 'After obtaining his master degree at Oxford(2005), he came back home and invested in our education.',
  },
  {
    id: 5,
    photo: './images/teacher5.jpg',
    name: 'Astrid Mugisha',
    role: 'Secretary and legal laws professor',
    topic: 'After obtaining his master degree at Oxford(2005), he came back home and invested in our education.',
  },
  {
    id: 6,
    photo: './images/teacher6.jpg',
    name: 'Claudia Nsimire',
    role: 'Student and first ELC-Congo ambassador',
    topic: 'After obtaining his master degree at Oxford(2005), he came back home and invested in our education.',
  },
];

for (let n = 0; n < features.length; n += 1) {
  const feature = features[n];

  featureSection.innerHTML += `
    <div class="clm3-container" id="clm3-${feature.id}">
      <div class="teach-img">
        <img src="${feature.photo}" alt="teacher_pic" class="teacher_pic">
      </div>
      <div class="teach-details">
        <h3>${feature.name}</h3>
        <h4>${feature.role}</h4>
        <p>${feature.topic}</p>
      </div>
    </div>
  `;
}

const button = document.querySelector('.see_more');
const teachers = document.querySelectorAll('.clm3-container');
let state = true;

button.addEventListener('click', (e) => {
  e.preventDefault();
  if (state) {
    Array.from(teachers).forEach((teacher) => {
      teacher.classList.add('see-more');
      button.innerHTML = 'See less <i class="far fa-arrow-alt-circle-up"></i>';
    });
    state = false;
  } else {
    state = false;
    Array.from(teachers).forEach((teacher) => {
      teacher.classList.remove('see-more');
      button.innerHTML = 'See more <i class="far fa-arrow-alt-circle-down"></i>';
    });
    state = true;
  }
});