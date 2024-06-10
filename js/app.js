/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const navList = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * Helper function to check if a section is in the viewport
 * @param {HTMLElement} section
 * @returns {Boolean} true if section is in the viewport
 */
function isInViewport(section) {
  const rect = section.getBoundingClientRect();
  return rect.top >= 0 && rect.top < window.innerHeight;
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
/**
 * Function to build the navigation menu
 */
function buildNav() {
  sections.forEach((section) => {
    const navItem = document.createElement("li");
    const navLink = document.createElement("a");
    navLink.classList.add("menu__link");
    navLink.href = `#${section.id}`;
    navLink.textContent = section.dataset.nav;
    navItem.appendChild(navLink);
    navList.appendChild(navItem);
  });
}

// Add class 'active' to section when near top of viewport
/**
 * Function to set the active class on the section in the viewport
 */
function setActiveSection() {
  sections.forEach((section) => {
    if (isInViewport(section)) {
      section.classList.add("your-active-class");
    } else {
      section.classList.remove("your-active-class");
    }
  });
}

// Scroll to anchor ID using scrollTO event
/**
 * Function to smoothly scroll to the section
 * @param {Event} event
 */
function scrollToSection(event) {
  event.preventDefault();
  const targetID = event.target.getAttribute("href").substring(1);
  const targetSection = document.getElementById(targetID);
  targetSection.scrollIntoView({ behavior: "smooth" });
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
document.addEventListener("DOMContentLoaded", buildNav);

// Scroll to section on link click
navList.addEventListener("click", scrollToSection);

// Set sections as active
document.addEventListener("scroll", setActiveSection);
