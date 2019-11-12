import enterView from 'enter-view';
import textBalancer from 'text-balancer';

import config from '../config.yml';
import doc from '../data/doc.json';

/* Custom page stuff */

const pageIndex = parseInt(document.body.getAttribute('data-page-index'));

// Set refer text

if (pageIndex < 2) {
  const refer = document.getElementById('refer');
  const referText = doc['refer' + pageIndex].split(',');
  const referLink = config[
    ['PART1', 'PART2'][pageIndex] + '_LINK'
  ]
  refer.innerHTML = `
  <p class="g-body paragraph">
    <a href="${referLink}">${referText[0]},</a>
    ${referText[1]}
  </p>
  `;
}

// Highlight nav link

document.getElementById('nav-link-' + pageIndex).classList.add('nav-link-highlighted');

// Fade in navbar at scroll trigger

const navbar = document.getElementById('navbar');
enterView({
  selector: pageIndex === 0 ? '.video-step:nth-child(2)' : '.headline',
  offset: 0.93,
  enter: () => {
    navbar.classList.remove('only-logo');
  },
  exit: () => {    
    navbar.classList.remove('show-nav-links');
    navbar.classList.add('only-logo');
  },
});

// nav-section-name

const navSectionName = document.getElementById('nav-section-name');
navSectionName.textContent = pageIndex === 0 ? 'Introduction' : `Part ${pageIndex}: ${doc['sectionhed' + pageIndex]}`;

enterView({
  selector: '#section-header',
  offset: 1,
  enter: () => navSectionName.classList.add('show'),
  exit: () => navSectionName.classList.remove('show'),
});

/* Mobile navbar hamburger trigger */

export function hamburgerTrigger() {
  navbar.classList.toggle('show-nav-links');
}

// Text balance headline and deck

textBalancer.balanceText('.headline, .deck, .video-step p, .pullquote');

/* SVG icon stuff

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.29 12.3"><defs><style>.cls-1{fill:none;stroke:#999;stroke-miterlimit:10;}</style></defs><title>icon-close</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><line class="cls-1" x1="0.39" y1="0.32" x2="9.9" y2="11.99"/><line class="cls-1" x1="0.39" y1="11.99" x2="9.9" y2="0.32"/></g></g></svg>`;
const svg64 = window.btoa(svg);
console.log(`url('data:image/svg+xml;base64,${svg64}')`);

*/
