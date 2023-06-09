const mouse=document.getElementById('circle')
const frames=document.querySelectorAll('.frame')
const lerp =(x,y,a) => x*(1-a)+y*a;
window.addEventListener('mousemove',(e)=>{
    if(e.clientX==document.documentElement.clientWidth && e.clientY==document.documentElement.clientHeight){
        mouse.style.display='none'
    }
    gsap.to(mouse,{
        x:e.clientX,
        y:e.clientY,
        duration:.3,
        ease:Expo
    })
})

frames.forEach(function(frame){
    frame.addEventListener('mousemove',(e)=>{

        const frameDim=frame.getBoundingClientRect();
        let startpoint =frameDim.x;
        let endpoint =frameDim.x+frameDim.width;
        let pointer=gsap.utils.mapRange(startpoint,endpoint,0,1,e.clientX);
        gsap.to(frame,{
            x:lerp(-50 ,50,pointer),
            ease:Expo
        })
    
        gsap.to(mouse,{
            scale:2 ,
            duration:.2
        })
        gsap.to(frame,{
            color:'white',
            duration:0.3
        })
    })
    frame.addEventListener('mouseleave',()=>{
        gsap.to(mouse,{
            scale:1,
            duration:.2
        })
        gsap.to(frame,{
            color:'black',
        })
        gsap.to(frame,{
            x:0,
            ease:Expo
        })
    
    })
})
