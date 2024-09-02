// Select necessary elements for navigation toggle and other interactions
const nav = document.querySelector(".nav");
const navMenu = document.querySelector(".nav-items");
const btnToggleNav = document.querySelector(".menu-btn");
const workEls = document.querySelectorAll(".work-box");
const workImgs = document.querySelectorAll(".work-img");
const mainEl = document.querySelector("main");
const yearEl = document.querySelector(".footer-text span");

// Function to toggle navigation menu visibility
const toggleNav = () => {
  nav.classList.toggle("hidden");

  // Prevent screen from scrolling when menu is opened
  document.body.classList.toggle("lock-screen");

  // Update menu button text based on the visibility state
  if (nav.classList.contains("hidden")) {
    btnToggleNav.textContent = "menu";
  } else {
    // Ensure button text changes after the transition ends
    setTimeout(() => {
      btnToggleNav.textContent = "close";
    }, 475); // This delay should match the CSS transition duration
  }
};

// Attach event listener to toggle navigation menu on button click
btnToggleNav.addEventListener("click", toggleNav);

// Close navigation menu when a link is clicked
navMenu.addEventListener("click", (e) => {
  if (e.target.localName === "a") {
    toggleNav();
  }
});

// Close navigation menu when the Escape key is pressed
document.body.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !nav.classList.contains("hidden")) {
    toggleNav();
  }
});
// Add initial transformation class to all work images for animation
workImgs.forEach((workImg) => workImg.classList.add("transform"));

let observer = new IntersectionObserver(
  (entries) => {
    const [entry] = entries;
    const [textbox, picture] = Array.from(entry.target.children);
    if (entry.isIntersecting) {
      picture.classList.remove("transform");
      Array.from(textbox.children).forEach(
        (el) => (el.style.animationPlayState = "running")
      );
    }
  },
  { threshold: 0.3 }
);

workEls.forEach((workEl) => {
  observer.observe(workEl);
});

// Select the theme switch input and retrieve the stored theme preference
const switchThemeEl = document.querySelector('input[type="checkbox"]');
const storedTheme = localStorage.getItem("theme");

// Apply the stored theme or set a default
switchThemeEl.checked = storedTheme === "dark" || storedTheme === null;

// Add event listener to switch theme on user interaction
switchThemeEl.addEventListener("click", () => {
  const isChecked = switchThemeEl.checked;

  if (!isChecked) {
    // Set theme to light
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    localStorage.setItem("theme", "light");
  } else {
    // Set theme to dark
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    localStorage.setItem("theme", "dark");
  }
});
// Select the last focusable element within the navigation
const lastFocusedEl = document.querySelector('a[data-focused="last-focused"]');

// Trap the tab key within the navigation menu when it is open
document.body.addEventListener("keydown", (e) => {
  if (e.key === "Tab" && document.activeElement === lastFocusedEl) {
    e.preventDefault();
    btnToggleNav.focus(); // Return focus to the toggle button
  }
});
// Select all logo group wrappers for the rotation effect
const logosWrappers = document.querySelectorAll(".logo-group");

// Helper function to introduce a delay (simulates async sleep)
const sleep = (duration) => new Promise((resolve) => setTimeout(resolve, duration));

// Apply rotation animation to each logo group with a staggered start
logosWrappers.forEach(async (logoWrapper, i) => {
  const logos = Array.from(logoWrapper.children);
  await sleep(1400 * i); // Stagger animation start for each group

  // Set interval for rotating logos every 5.6 seconds
  setInterval(() => {
    let temp = logos[0];
    logos[0] = logos[1];
    logos[1] = logos[2];
    logos[2] = temp;
    logos[0].classList.add("hide", "to-top");
    logos[1].classList.remove("hide", "to-top", "to-bottom");
    logos[2].classList.add("hide", "to-bottom");
  }, 5600);
});
// Update the year in the footer dynamically
yearEl.textContent = new Date().getFullYear();


//Add porfolio items
const addProject = (projectData) => {
  const workBox = document.getElementById("work-boxes");

  // Create the new project HTML structure
  const newProjectHTML = `
    <div class="work-box">
      <div class="work-textbox">
        <h3 class="h3">${projectData.title}</h3>
        <p class="work-text">${projectData.description}</p>
        <ol class="work-technologies">
          ${projectData.technologies.map((tech) => `<li>${tech}</li>`).join('')}
        </ol>
        <div class="work-links">
          <a href="${projectData.projectUrl}" target="_blank" rel="noopener" class="link">Explore this project</a>
          <a href="${projectData.sourceCodeUrl}" target="_blank" rel="noopener" title="Source code">
            <img src="assets/images/social-links/github.svg" alt="GitHub" loading="lazy" />
          </a>
        </div>
      </div>
      <picture class="work-img">
        <img loading="lazy" src="${projectData.imageUrl}" alt="${projectData.imageAlt}" />
      </picture>
    </div>
  `;

  // Insert the new project into the work-boxes container
  workBox.innerHTML += newProjectHTML;
};

const reinitializeObservers = () => {
const workEls = document.querySelectorAll(".work-box");

workEls.forEach((workEl) => {
  observer.observe(workEl);
});
};

// Call this function after adding new projects
export const addProjectAndReinitialize = (projectData) => {
  addProject(projectData);
  reinitializeObservers();
};