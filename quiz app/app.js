let quiz=[
    {
        question: "Which program code doesn’t need preprocessing before being run?",
        a:"Text",
        b:"Script",
        c:"Both Text and Script",
        d:"Comment",
        ans:"ans2"
    },
    {
        question:"What is the significance of scripting?",
        a:"Convenient",
        b:"Dynamic",
        c:"Reachable",
        d:"Modular",
        ans:"ans2"
    },
    {
        question:"What is the purpose of XMLHttpRequest?",
        a:"Multiple loading",
        b:"Load content by loading new document",
        c:"Load content without loading new document",
        d:"Repetitive loading",
        ans:"ans3"
    },
    {
        question:"Which API makes the user’s current location available to browser-based application?",
        a:"Java API",
        b:"SDL API",
        c:"Object API",
        d:"Geolocation API",
        ans:"ans4"
    },
]

const que=document.querySelector('#question');
const op1=document.querySelector('#op1');
const op2=document.querySelector('#op2');
const op3=document.querySelector('#op3');
const op4=document.querySelector('#op4');
const submit=document.querySelector('#submit');
const allOption=document.getElementsByName('option');
const showPoint=document.querySelector('#pointShow');
let audio = new Audio("mixkit-arcade-retro-changing-tab-206.wav");
let winaudio = new Audio("2PBE8A4-huge-win.mp3");

let questionNo=0;
let point=0;

const countPoint=()=>{
    allOption.forEach((option)=>{
        if(option.checked){
            if(option.id===quiz[questionNo].ans){
                point++;
            }
        }
    })
    allOption.forEach((option)=>{
        option.checked=false;
    })
}

const loadquestion=()=>{
    que.innerHTML=`Q${questionNo+1}. ${quiz[questionNo].question}`;
    op1.innerHTML=quiz[questionNo].a;
    op2.innerHTML=quiz[questionNo].b;
    op3.innerHTML=quiz[questionNo].c;
    op4.innerHTML=quiz[questionNo].d;
}
loadquestion();
submit.addEventListener('click',()=>{
    audio.play();
    countPoint();
    questionNo++;
    if(questionNo<quiz.length){
        loadquestion();
    }
    else{
        showPoint.classList.remove('d-none');
        if(point==quiz.length){
            setTimeout(()=>{
                winaudio.play();
            },1700)
            showPoint.children[1].innerHTML=`${point}/${quiz.length} Congratulations!! all question answer correct`;
        }
        else{
            showPoint.children[1].innerHTML=`${point}/${quiz.length}`;
        }
        submit.classList.add('d-none')
    }
})