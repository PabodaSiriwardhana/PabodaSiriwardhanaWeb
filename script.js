// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area":1000
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

document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("load", handleScroll);
});


// Function to check if an element is in the viewport
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
      rect.top < window.innerHeight * 0.75 && 
      rect.bottom >= 0
  );
}

// Function to add 'visible' class when scrolled into view
function handleScroll() {
  // Check for skills section items
  var skillItems = document.querySelectorAll(".skill-item");
  skillItems.forEach((item) => {
    if (isElementInViewport(item)) {
      item.classList.add("visible");
    }
  });

  // Check for education section items
  
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

// Add scroll event listener
window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);



