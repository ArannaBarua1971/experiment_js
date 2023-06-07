
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
},2000);