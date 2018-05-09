let burger=document.querySelector(".burger"),
    menu=document.querySelector(".float-in-menu"),
    hero=document.querySelector(".hero section"),
    menuTabs=document.querySelectorAll(".menu li"),
    carousel=document.querySelector('.carousel-container'),
    width=100,
    wp=document.querySelector('#wp'),
    programming=document.querySelector('#programming'),
    html=document.querySelector('#html'),
    progress=document.querySelector('.progress'),
    bounding=progress.getBoundingClientRect(),
    carouselSpin;
    video=document.querySelector('video');

    document.addEventListener("DOMContentLoaded", function() {//lazy load video for all browsers
        var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));
      
        if ("IntersectionObserver" in window) {
          var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(video) {
              if (video.isIntersecting) {
                for (var source in video.target.children) {
                  var videoSource = video.target.children[source];
                  if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                    videoSource.src = videoSource.dataset.src;
                  }
                }
      
                video.target.load();
                video.target.classList.remove("lazy");
                lazyVideoObserver.unobserve(video.target);
              }
            });
          });
      
          lazyVideos.forEach(function(lazyVideo) {
            lazyVideoObserver.observe(lazyVideo);
          });
        }
      });

function toggleMenu(){//toggle menu on small devices
    if(menu.classList.contains("menu-visible")){
        menu.classList.remove("menu-visible");
        burger.innerHTML="<i class='fas fa-bars'></i>";
        hero.style.left="0";
    }else{
        menu.classList.add("menu-visible");
        burger.innerHTML="<i class='fas fa-times'></i>";
        hero.style.left="100vw";
    }
}

burger.addEventListener("click", toggleMenu);

for(let i=0;i<menuTabs.length;i++){//change menu tab's font weight on click
    menuTabs[i].addEventListener('click', function(){
        for(let i=0;i<menuTabs.length;i++){//reset all menu tabs to normal
            menuTabs[i].style.fontWeight='300';
        }
        menuTabs[i].style.fontWeight='800';//add font weight to clicked menu tab
    })
}

setInterval(function(){//spin carousel every 8s
    if(width<300){
        carousel.style.right = width+'vw';
        width+=100;
    }else{
        width=100;
        carousel.style.right=0;
    }
}, 8000);

//initialize percentage counters
let numWp=0,
    numProgramming=0,
    numHtml=0;

//count percentage to specified number
function counterWp(){
    wp.textContent=numWp+' %';
    if(numWp<75){
        numWp+=1;
    }
}

function counterProgramming(){
    programming.textContent=numProgramming+' %';
    if(numProgramming<63){
        numProgramming+=1;
    }
}

function counterHtml(){
    html.textContent=numHtml+' %';
    if(numHtml<90){
        numHtml+=1;
    }
}

// check if elements are in view

window.addEventListener('scroll', function(){
    function isInViewport(element) {//define helper function to check if element is in view
        var rect = element.getBoundingClientRect();
        var html = document.documentElement;
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || html.clientHeight) &&
          rect.right <= (window.innerWidth || html.clientWidth)
        );
      }

      if(isInViewport(progress)){
            setInterval(function(){//count percentage if in view
                counterWp();
                counterHtml();
                counterProgramming();
            }, 150);
      };
})

// Lazy loading images
