function scrollToLeft() {
  const scrollBox = document.getElementById('blogScroll');
  scrollBox.scrollBy({ left: -200, behavior: 'smooth' });
}

function scrollToRight() {
  const scrollBox = document.getElementById('blogScroll');
  scrollBox.scrollBy({ left: 200, behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", () => {
  const clickableItems = document.querySelectorAll('.drop_menu li, .dropdown li');

  clickableItems.forEach(li => {
    li.addEventListener('click', (e) => {
      // Prevent triggering twice if <a> is clicked directly
      if (e.target.tagName.toLowerCase() !== 'a') {
        const link = li.querySelector('a');
        if (link && link.href) {
          window.location.href = link.href;
        }
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const blogsLinks = document.querySelectorAll(".nav-link.blogs");
  
  blogsLinks.forEach(link => {
    const dropdown = link.nextElementSibling;

    link.addEventListener("click", (e) => {
      e.preventDefault();

      const isVisible = dropdown.classList.contains("show");

      // Hide all other dropdowns (optional for mobile/desktop dual nav)
      document.querySelectorAll(".dropdown").forEach(d => d.classList.remove("show"));
      document.querySelectorAll(".nav-link.blogs").forEach(l => l.innerHTML = "Blogs ▾");

      if (!isVisible) {
        dropdown.classList.add("show");
        link.innerHTML = "Blogs ▴"; // arrow up
      } else {
        dropdown.classList.remove("show");
        link.innerHTML = "Blogs ▾"; // arrow down
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const blogLink = document.querySelector(".nav-link.blogs");
  const dropdown = blogLink.nextElementSibling;

  blogLink.parentElement.addEventListener("mouseenter", () => {
    dropdown.classList.add("show");
    blogLink.innerHTML = "Blogs ▴";
  });

  blogLink.parentElement.addEventListener("mouseleave", () => {
    dropdown.classList.remove("show");
    blogLink.innerHTML = "Blogs ▾";
  });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const contentFooter = document.querySelector(".content_footer");

    menuToggle.addEventListener("change", function () {
        if (this.checked) {
            contentFooter.style.display = "block";
        } else {
            contentFooter.style.display = "none";
        }
    });

    // Optional: close menu when clicking the overlay
    contentFooter.addEventListener("click", function () {
        menuToggle.checked = false;
        contentFooter.style.display = "none";
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');

    menuToggle.addEventListener('change', () => {
        if (menuToggle.checked) {
            document.body.classList.add('noscroll');
        } else {
            document.body.classList.remove('noscroll');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
  const scrollContainer = document.querySelector('.scroll_container');

  if (scrollContainer) {
    scrollContainer.addEventListener('wheel', (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        scrollContainer.scrollBy({
          left: e.deltaY,
          behavior: 'smooth'
        });
      }
    });
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById("myAudio");
  audio.volume = 0.2;
});


const audio = document.getElementById("myAudio");
const playPauseBtn = document.getElementById("playPauseBtn");
const volumeControl = document.getElementById("volumeControl");

playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = "Music off";
  } else {
    audio.pause();
    playPauseBtn.textContent = "Music on";
  }
});

volumeControl.addEventListener("input", () => {
  audio.volume = volumeControl.value;
});

