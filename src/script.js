import enterView from 'enter-view';
import textBalancer from 'text-balancer';
// import inView from 'in-view';

import config from '../config.yml';


// CUSTOM last minute shit

const typoBox = document.querySelector('.video-step:nth-child(5) p');
typoBox.textContent = typoBox.textContent.replace('handes', 'handles');

/* Custom page stuff */

const pageIndex = parseInt(document.getElementById('story-page').getAttribute('data-page-index'));

// Set refer text for parts 1 and 2
if (pageIndex < 3) {
  const refer = document.getElementById('refer');
  const referLink = config[
    [null, 'PART2', 'PART3'][pageIndex] + '_LINK'
  ]
  refer.innerHTML = `
  <p class="g-body paragraph">
    <a href="${referLink}">Continue reading Part ${[null, 'II', 'III'][pageIndex]}.</a>
  </p>
  `;
}

// Highlight nav link

document.getElementById('nav-link-' + pageIndex).classList.add('nav-link-highlighted');

// nav-section-name

const navSectionName = document.getElementById('nav-section-name');
const navSectionNameText = pageIndex === 1 ? 'Introduction' : `Part ${pageIndex}: ${['Coming Forward', 'The EOAA', 'Beyond the System'][pageIndex - 1]}`;
navSectionName.textContent = navSectionNameText;

// TODO for navSectionName: Change to Part 1 when we scroll there

/* Video brightness stuff */

const video = document.getElementById('video-cover');
const navbar = document.getElementById('navbar'); // Fade in navbar at scroll trigger

if (pageIndex === 1) {
  enterView({
    selector: '.video-step:nth-child(2)',
    offset: 0.3,
    enter: () => {
      navbar.classList.add('show-nav');
      video.classList.add('bright');
    },
    exit: () => {
      navbar.classList.remove('show-nav');
      video.classList.remove('bright');
    },
  });


  enterView({
    selector: '.video-step:nth-child(7)',
    offset: 0.3,
    enter: () => {
      video.classList.remove('bright');
    },
    exit: () => {
      video.classList.add('bright');
    },
  });

  // Assume that page 1 is the only one with a change in section name
  enterView({
    selector: '.sectionhed',
    offset: 1,
    enter: () => {
      navSectionName.style.opacity = 0;
      setTimeout(() => {
        navSectionName.textContent = `Part ${pageIndex}: ${['Coming Forward', 'The EOAA', 'Beyond the System'][pageIndex - 1]}`;
        navSectionName.style.opacity = 1;
      }, 250);    
    },
    exit: () => {
      navSectionName.style.opacity = 0;
      setTimeout(() => {
        navSectionName.textContent = navSectionNameText;
        navSectionName.style.opacity = 1;
      }, 250);
    },
  });
} else {
  navbar.classList.add('show-nav');
}

enterView({
  selector: '.headline',
  offset: 1,
  enter: () => {
    navbar.classList.remove('only-logo');
    navSectionName.classList.add('show-section-name');
  },
  exit: () => {
    navbar.classList.add('only-logo');
    navSectionName.classList.remove('show-section-name');
  },
});

/* Mobile navbar hamburger trigger */

export function hamburgerTrigger() {
  navbar.classList.toggle('show-nav-links');
}

/* Text balance headline and deck */

textBalancer.balanceText('.headline, .deck, .video-step p, .pullquote');
