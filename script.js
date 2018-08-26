var about = document.getElementById('about');
var aboutButton = document.getElementById('about-button');
var skills = document.getElementById('skills');
var skillsButton = document.getElementById('skills-button');
var interests = document.getElementById('interests');
var interestsButton = document.getElementById('interests-button');
var projects = document.getElementById('projects');
var projectsButton = document.getElementById('projects-button');

function scrollTo(element) {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop
  });
}

aboutButton.addEventListener('click', function(event) {
  scrollTo(about);
});

skillsButton.addEventListener('click', function(event) {
  scrollTo(skills);
});

interestsButton.addEventListener('click', function(event) {
  scrollTo(interests);
});

projectsButton.addEventListener('click', function(event) {
  scrollTo(projects);
});