let burger = document.querySelector('.burger'),
  menu = document.querySelector('.float-in-menu'),
  hero = document.querySelector('.hero section'),
  menuTabs = document.querySelectorAll('.menu li'),
  carousel = document.querySelector('.carousel-container'),
  width = 100,
  wp = document.querySelector('#wp'),
  programming = document.querySelector('#programming'),
  html = document.querySelector('#html'),
  progress = document.querySelector('.progress'),
  bounding = progress.getBoundingClientRect(),
  carouselSpin;
(video = document.querySelector('video')),
  (learn = document.querySelector('.hero section button')),
  (up = document.querySelector('.up')),
  //menu buttons
  (home = document.querySelector('#home')),
  (about = document.querySelector('#about')),
  (services = document.querySelector('#services')),
  (portfolio = document.querySelector('#portfolio')),
  (blog = document.querySelector('#blog')),
  (contact = document.querySelector('#contact')),
  //page sections
  (aboutDiv = document.querySelector('#about-div')),
  (heroContainer = document.querySelector('.hero')),
  (servicesDiv = document.querySelector('.product')),
  (shortStoryDiv = document.querySelector('.short-story')),
  (panelsDiv = document.querySelector('.panels')),
  (iconsDiv = document.querySelector('.icons-background')),
  (videoDiv = document.querySelector('.video')),
  (productDiv = document.querySelector('.product')),
  (feedbackDiv = document.querySelector('.product')),
  (meetDiv = document.querySelector('.meet')),
  (carouselDiv = document.querySelector('.carousel'));

learn.addEventListener('click', function() {
  alert("Hey, it's just a sample website!");
});

//display up button
window.addEventListener('scroll', function() {
  if (window.pageYOffset > heroContainer.clientHeight) {
    up.classList.add('slide');
  } else {
    up.classList.remove('slide');
  }
});

//scroll back to top
up.addEventListener('click', function() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
  up.classList.add('hide');
  setTimeout(function() {
    up.classList.remove('hide');
  }, 500);
});

//scroll to menu elements
about.addEventListener('click', function(e) {
  e.stopPropagation();
  e.preventDefault();
  window.scroll({
    top: heroContainer.clientHeight,
    left: 0,
    behavior: 'smooth',
  });
});

services.addEventListener('click', function(e) {
  e.stopPropagation();
  e.preventDefault();
  window.scroll({
    top:
      heroContainer.clientHeight +
      shortStoryDiv.clientHeight +
      iconsDiv.clientHeight +
      videoDiv.clientHeight +
      panelsDiv.clientHeight +
      2,
    left: 0,
    behavior: 'smooth',
  });
});

portfolio.addEventListener('click', function(e) {
  e.stopPropagation();
  e.preventDefault();
  window.scroll({
    top:
      heroContainer.clientHeight +
      shortStoryDiv.clientHeight +
      iconsDiv.clientHeight +
      videoDiv.clientHeight +
      panelsDiv.clientHeight +
      2 +
      shortStoryDiv.clientHeight,
    left: 0,
    behavior: 'smooth',
  });
});

blog.addEventListener('click', function(e) {
  e.stopPropagation();
  e.preventDefault();
  window.scroll({
    top:
      heroContainer.clientHeight +
      iconsDiv.clientHeight +
      videoDiv.clientHeight +
      panelsDiv.clientHeight +
      2 +
      4 * shortStoryDiv.clientHeight +
      productDiv.clientHeight +
      feedbackDiv.clientHeight,
    left: 0,
    behavior: 'smooth',
  });
});

contact.addEventListener('click', function(e) {
  e.stopPropagation();
  e.preventDefault();
  window.scroll({
    top:
      heroContainer.clientHeight +
      iconsDiv.clientHeight +
      videoDiv.clientHeight +
      panelsDiv.clientHeight +
      2 +
      7 * shortStoryDiv.clientHeight +
      productDiv.clientHeight +
      feedbackDiv.clientHeight +
      carouselDiv.clientHeight +
      meetDiv.clientHeight,
    left: 0,
    behavior: 'smooth',
  });
});

//lazy load video for all browsers
document.addEventListener('DOMContentLoaded', function() {
  var lazyVideos = [].slice.call(document.querySelectorAll('video.lazy'));

  if ('IntersectionObserver' in window) {
    var lazyVideoObserver = new IntersectionObserver(function(
      entries,
      observer
    ) {
      entries.forEach(function(video) {
        if (video.isIntersecting) {
          for (var source in video.target.children) {
            var videoSource = video.target.children[source];
            if (
              typeof videoSource.tagName === 'string' &&
              videoSource.tagName === 'SOURCE'
            ) {
              videoSource.src = videoSource.dataset.src;
            }
          }

          video.target.load();
          video.target.classList.remove('lazy');
          lazyVideoObserver.unobserve(video.target);
        }
      });
    });

    lazyVideos.forEach(function(lazyVideo) {
      lazyVideoObserver.observe(lazyVideo);
    });
  }
});

//toggle menu icon on small devices with jQuery
let hidden = true;
$('.burger').on('click touchstart', function() {
  if (hidden == true) {
    $('.float-in-menu').css('right', '0');
    $('.burger').html("<i class='fas fa-times'></i>");
    $('.hero section').css('left', '100vw');
    hidden = false;
  } else {
    $('.float-in-menu').css('right', '100vw');
    $('.burger').html("<i class='fas fa-bars'></i>");
    $('.hero section').css('left', '');
    hidden = true;
  }
});

//change menu tab's font weight on click
for (let i = 0; i < menuTabs.length; i++) {
  menuTabs[i].addEventListener('click', function() {
    for (let i = 0; i < menuTabs.length; i++) {
      //reset all menu tabs to normal
      menuTabs[i].style.fontWeight = '300';
    }
    menuTabs[i].style.fontWeight = '800'; //add font weight to clicked menu tab
  });
}

//spin carousel every 8s
setInterval(function() {
  if (width < 300) {
    carousel.style.right = width + 'vw';
    width += 100;
  } else {
    width = 100;
    carousel.style.right = 0;
  }
}, 8000);

//initialize percentage counters
let numWp = 0,
  numProgramming = 0,
  numHtml = 0;

//count percentage to specified number
function counterWp() {
  wp.textContent = numWp + ' %';
  if (numWp < 75) {
    numWp += 1;
  }
}

//count percent for programming skill
function counterProgramming() {
  programming.textContent = numProgramming + ' %';
  if (numProgramming < 63) {
    numProgramming += 1;
  }
}

//count percentage for html skill
function counterHtml() {
  html.textContent = numHtml + ' %';
  if (numHtml < 90) {
    numHtml += 1;
  }
}

// check if elements are in view
window.addEventListener('scroll', function() {
  //define helper function to check if element is in view
  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    var html = document.documentElement;
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || html.clientHeight) &&
      rect.right <= (window.innerWidth || html.clientWidth)
    );
  }

  //count percentage if in view
  if (isInViewport(progress)) {
    setInterval(function() {
      counterWp();
      counterHtml();
      counterProgramming();
    }, 150);
  }
});
