document.addEventListener('wheel',function(e){
    if(e.deltaY>0){
        document.querySelector('.circle img').classList.add('animate1')
        document.querySelector('.circle img').style.transform='scale(29)'
    }
    if(e.deltaY<0){
        document.querySelector('.circle img').classList.add('animate2')
        document.querySelector('.circle img').style.transform='scale(1)'
    }
})