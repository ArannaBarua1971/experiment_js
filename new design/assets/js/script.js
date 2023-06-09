window.onload = function () {
  setTimeout(() => {
    const banner_title = document.getElementById("banner_title");
    const banner_description = document.getElementById("banner_description");
    const boxAnimate = document.getElementById("boxAnimate");
    boxAnimate.style.width = "420px";
    setTimeout(function () {
      banner_title.style.marginLeft = "0px";
      boxAnimate.style.width = "20px";
    }, 400);
    banner_description.style.marginBottom = "0px";
    banner_description.style.opacity = "1";
  }, 100);
};

const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", function (event) {
  gsap.to(cursor, {
    x: event.clientX,
    y: event.clientY,
    duration: 0.3,
    ease: Expo,
  });
});
document.addEventListener("click", function () {
  gsap.to(cursor, {
    scale: 2,
  });
  setTimeout(() => {
    gsap.to(cursor, {
      scale: 1,
    });
  }, 300);
});

// * click event
const navs = document.querySelectorAll(".navigation ul li");
const sections = document.querySelectorAll("#main section");

navs.forEach((nav) => {
  nav.addEventListener("click", function (e) {
    navs.forEach((nav) => {
      nav.classList.remove("click");
    });
    e.target.classList.add("click");

    let id = e.target.id;
    sections.forEach((section) => {
      section.classList.add("newPage");
      if (section.id == id) {
        section.classList.remove("newPage");
      }
    });
  });
});


// slider

const allSlider=document.querySelectorAll('.slider_items .slider');
const allContent=document.querySelectorAll('.content h1');
let i=2;
console.log(i);
setInterval(function(){
    if(i==allSlider.length+1){
        i=1;
    }
    const slider=document.querySelector(`.slider_items .slider:nth-child(${i})`);
    const content=document.querySelector(`.content h1:nth-child(${i})`);
    allSlider.forEach(element => {
        element.classList.remove('active')
    });
    allContent.forEach(element => {
        element.classList.remove('content_active')
    });
    slider.classList.add('active')
    content.classList.add('content_active')
    i++;
},3000);
