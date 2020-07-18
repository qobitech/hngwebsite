var question = document.getElementsByClassName('title');
var closes = document.getElementsByClassName('closed');
var opened = document.getElementsByClassName('opened');
var answer = document.getElementsByClassName('answer');

for(let i=0; i < question.length; i++){
    question[i].addEventListener('click',()=>{
        
        if(answer[i].classList.contains('hideandreduce')){
            closeOthers();
            opened[i].classList.remove('hide');
            closes[i].classList.add('hide');
            answer[i].classList.remove('hideandreduce');
            answer[i].classList.add('reveal');
            (window.innerWidth < 1200) && answer[i].scrollIntoView({behavior:'smooth'});
        }
        else{
            closes[i].classList.remove('hide');
            opened[i].classList.add('hide');
            answer[i].classList.add('hideandreduce');
            answer[i].classList.remove('reveal');
            
            (window.innerWidth < 1200) && question[i].scrollIntoView({behavior:'smooth'});
        }

    })
}
function closeOthers(){
    for(let i=0;i<answer.length;i++){
        closes[i].classList.remove('hide');
        opened[i].classList.add('hide');
        answer[i].classList.add('hideandreduce');
        answer[i].classList.remove('reveal');    
    }
}


// change tabs
var faqbtn = document.getElementsByClassName('faqbtn');
var tabcontent = document.getElementsByClassName('tab_content');


for(let j=0;j<faqbtn.length;j++){
    faqbtn[j].addEventListener('click',()=>{
        closeOtherTabs();
        tabcontent[j].classList.remove('hide');
        faqbtn[j].classList.add('selected');
    })
}

function closeOtherTabs(){
    for(let i=0;i<tabcontent.length;i++){
        tabcontent[i].classList.add('hide');
        faqbtn[i].classList.remove('selected');
    }
}