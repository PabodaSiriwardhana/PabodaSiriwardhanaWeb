document.addEventListener("DOMContentLoaded", function () {
  const loaderContainer = document.getElementById("loaderContainer");

  loaderContainer.classList.remove("hidden");

  setTimeout(() => {
    loaderContainer.classList.add("hidden");
  }, 2000);
});

document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector("#navbarNav");

  navbarToggler.addEventListener("click", function () {
    navbarCollapse.classList.toggle("show");
  });

  // Hide menu when clicking outside (only in mobile view)
  document.addEventListener("click", function (event) {
    if (!navbarToggler.contains(event.target) && !navbarCollapse.contains(event.target)) {
      navbarCollapse.classList.remove("show");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  function updateActiveLink() {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
        currentSection = section.getAttribute("id");
      }
    });

    const documentHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    const scrollPosition = window.scrollY + viewportHeight;

    if (scrollPosition >= documentHeight-20) {
      currentSection = "contact"; 
    }

    navLinks.forEach((link) => {
      link.classList.remove("active");
    });

    if (currentSection) {
      const activeLink = document.querySelector(`.navbar-nav .nav-link[href="#${currentSection}"]`);
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  }

  window.addEventListener("scroll", updateActiveLink);

  updateActiveLink();
});

document.addEventListener("DOMContentLoaded", function () {
  function toggleCustomScrollbarVisibility() {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth;
    const customScrollbar = document.querySelector(".custom-scrollbar");

    if (screenWidth <= 768) {
      customScrollbar.style.display = "none";
    } else {
      customScrollbar.style.display = "block";
    }
  }

  toggleCustomScrollbarVisibility();

  window.addEventListener('resize', function() {
    toggleCustomScrollbarVisibility();
  });
});


document.addEventListener("DOMContentLoaded", function () {
  scrollbarThumb = document.querySelector(".custom-scrollbar-thumb");
  let isDragging = false;
  let startY, startScrollY;

  function updateScrollbarThumb() {
    navbarHeight = document.querySelector(".navbar").offsetHeight;
    footerHeight = document.querySelector(".footer").offsetHeight;

    var height = document.documentElement.scrollHeight;
    var maxScrollY = document.documentElement.scrollHeight - window.innerHeight;

    thumbHeight = Math.max(50, (window.innerHeight / document.documentElement.scrollHeight) * window.innerHeight);
    scrollbarThumb.style.height = `${thumbHeight}px`;

    scrollableHeight = window.innerHeight - navbarHeight - footerHeight - thumbHeight;

    scrollPercentage = (window.scrollY / maxScrollY) * 100;

    maxThumbTop = window.innerHeight - footerHeight - navbarHeight - thumbHeight;
    var thumbTop = (scrollableHeight * scrollPercentage) / 100;
    scrollbarThumb.style.top = `${Math.min(thumbTop, maxThumbTop) + navbarHeight}px`;
  }

  scrollbarThumb.addEventListener("mousedown", (event) => {
    isDragging = true;
    startY = event.clientY;
    startScrollY = window.scrollY;
    document.body.style.userSelect = "none";
  });

  document.addEventListener("mousemove", (event) => {
    if (!isDragging) return;

    const deltaY = event.clientY - startY;
    const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;
    const scrollableHeight = window.innerHeight - navbarHeight - footerHeight - scrollbarThumb.offsetHeight;

    const scrollAmount = (deltaY / scrollableHeight) * maxScrollY;
    window.scrollTo({ top: startScrollY + scrollAmount, behavior: "instant" });

    updateScrollbarThumb();
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    document.body.style.userSelect = "";
  });

  document.addEventListener("scroll", updateScrollbarThumb);

  updateScrollbarThumb();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

function adjustHeadingSize() {
  headings = document.querySelectorAll('.responsive-heading');
  words = document.querySelectorAll('.word-next');

  let screenWidth = window.innerWidth;

  if (screenWidth > 1200) {
    headings.forEach(h => h.style.fontSize = "4rem");
  } else if (screenWidth > 992) {
    headings.forEach(h => h.style.fontSize = "3.5rem");
  } else if (screenWidth > 768) {
    headings.forEach(h => h.style.fontSize = "3rem");
  } else {
    headings.forEach(h => h.style.fontSize = "2.5rem");
  }
}

adjustHeadingSize();

window.addEventListener("resize", adjustHeadingSize);

function adjustViewport() {
  document.getElementById("particles-js").style.width = (window.innerWidth) + "px";
  document.getElementById("particles-js").style.height = window.innerHeight + "px";
}

window.addEventListener("resize", adjustViewport);
window.addEventListener("load", adjustViewport);

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 1000
      }
    },
    "color": {
      "value": ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]
    },

    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#fff"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.6,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 120,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": false
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("load", handleScroll);
});

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top < window.innerHeight * 0.75 &&
    rect.bottom >= 0
  );
}

function handleScroll() {
  var skillItems = document.querySelectorAll(".skill-item");
  skillItems.forEach((item) => {
    if (isElementInViewport(item)) {
      item.classList.add("visible");
    }
  });

  var container = document.getElementById("education-list");
  var items = document.querySelectorAll(".timeline-item");

  if (isElementInViewport(container)) {
    container.classList.add("visible");
  }

  items.forEach((item) => {
    if (isElementInViewport(item)) {
      item.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);

document.getElementById("year").textContent = new Date().getFullYear();