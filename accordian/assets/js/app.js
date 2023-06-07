const clicker=document.querySelectorAll('.clicker');

clicker.forEach((ele)=>{
    ele.addEventListener('click',function(){
        ele.parentNode.children[1].classList.toggle('toggle')
    })
})