document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    // sticky navbar on scroll script
    var navbar = document.querySelector(".navbar");
    if (window.scrollY > 20) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }

    // scroll-up button show/hide script
    var scrollUpBtn = document.querySelector(".scroll-up-btn");
    if (window.scrollY > 500) {
      scrollUpBtn.classList.add("show");
    } else {
      scrollUpBtn.classList.remove("show");
    }
  });

  // slide-up script
  var scrollUpBtn = document.querySelector(".scroll-up-btn");
  scrollUpBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // removing smooth scroll on slide-up button click
    document.documentElement.style.scrollBehavior = "auto";
  });

  var menuLinks = document.querySelectorAll(".navbar .menu li a");
  menuLinks.forEach(function (link) {
    // Smooth scroll on Menu Items click
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var targetId = this.getAttribute("href");
      var target = document.querySelector(targetId);
      target.scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Toggle Navbar
  var menuBtn = document.querySelector(".menu-btn");
  menuBtn.addEventListener("click", function () {
    var menu = document.querySelector(".navbar .menu");
    menu.classList.toggle("active");
    var menuIcon = document.querySelector(".menu-btn i");
    menuIcon.classList.toggle("active");
  });

  // Typing Text Animation
  var typed1 = new Typed(".typing", {
    strings: [
      "Mern stack Developer",
      "Content Creator",
      "Front End Developer",
      "Backend Developer",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed2 = new Typed(".typing-2", {
    strings: [
      "Mern stack Developer",
      "Content Creator",
      "Front End Developer",
      "Backend Developer",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // Owl Carousel
  var owlCarousel = document.querySelector(".carousel");
  if (owlCarousel) {
    new OwlCarousel({
      items: 3,
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        600: {
          items: 2,
          nav: false,
        },
        1000: {
          items: 3,
          nav: false,
        },
      },
    });
  }
});

// particles
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});
