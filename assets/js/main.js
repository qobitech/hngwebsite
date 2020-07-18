var logoimg1=`${window.location.href.substring(0,window.location.href.indexOf('/',window.location.href.indexOf('/')+2))}/assets/images/logo/image 2.png`;
var logoimg2=`${window.location.href.substring(0,window.location.href.indexOf('/',window.location.href.indexOf('/')+2))}/assets/images/logo/image 2white.png`;
var main_container=document.getElementsByClassName('main_con');var expand=document.getElementsByClassName('expand_link');
var activity_content=document.getElementsByClassName('activity_txt_content');var date_content=document.getElementsByClassName('date_content');
var navbtn=document.getElementsByClassName('nav_btn');
var join_us_btn=document.getElementsByClassName('outside_btn_nav_qobi');
var tp=document.getElementsByClassName('inside_btn_nav_qobi');
var nav=document.getElementsByClassName('main_nav_mb');
var hamburger_icon=document.getElementsByClassName('hamburger_icon');
var close_icon=document.getElementsByClassName('close_icon');
var header=document.getElementsByClassName('header_nav')
var headerbg=document.getElementsByClassName('header_sub');
var header_a=document.getElementsByClassName('header_a');
var dot=document.getElementsByClassName('white_logo');
var lastscrollup=0;
for(let i=0;i<expand.length;i++){expand[i].addEventListener('click',()=>{if(activity_content[i].classList.contains('hide_element')){activity_content[i].classList.remove('hide_element');expand[i].innerHTML=`Hide Activity`;activity_content[i].scrollIntoView({behavior:'smooth'});}else{activity_content[i].classList.add('hide_element');expand[i].innerHTML=`View Activity`;date_content[i].scrollIntoView({behavior:'smooth'});}})}
var img=document.getElementsByClassName('img_content');
for(let i=0;i<nav.length;i++){
    if(window.innerWidth<780){
        navbtn[i].addEventListener('click',()=>{setTimeout(()=>{
            if(nav[i].clientHeight>300){
                join_us_btn[i].style.transition=".4s ease-out";
                join_us_btn[i].style.opacity=0;
                tp[i].style.transition=".4s ease-out";
                tp[i].style.opacity=1;
                close_icon[i].classList.remove('hide');
                hamburger_icon[i].classList.add('hide');
            }

            if(nav[i].clientHeight<300){
                join_us_btn[i].style.transition=".4s ease-in";
                join_us_btn[i].style.opacity=1;
                tp[i].style.transition=".4s ease-in";
                tp[i].style.opacity=0;
                close_icon[i].classList.add('hide');
                hamburger_icon[i].classList.remove('hide');
            }},500)})
    }else{
        join_us_btn[i].style.transition=".4s ease-in";
        join_us_btn[i].style.opacity=1;
    }}
    window.addEventListener('scroll',()=>{var st=window.pageYOffset||document.documentElement.scrollTop;for(let i=0;i<header.length;i++){if(st>lastscrollup){header[i].style.transition=`.4s ease-in-out`;header[i].classList.remove('menuDown');(st>90)&&header[i].classList.add('menuUp');main_container[i].style.transition=`.4s ease-in-out`;}else{header[i].style.transition=`.4s ease-in-out`;header[i].classList.remove('menuUp');header[i].classList.add('menuDown');main_container[i].style.transition=`.4s ease-in-out`;}
    headerbg[i].style.transition=`.4s ease-in-out`;headerbg[i].style.backgroundColor=st<=0?`var(--bright-color)`:`var(--link-color)`;dot[i].src=st<=0?logoimg1:logoimg2;}
    for(let j=0;j<header_a.length;j++){if(st<=0){header_a[j].classList.remove('maincolor');header_a[j].classList.add('linkcolor');}else{header_a[j].classList.remove('linkcolor');header_a[j].classList.add('maincolor');}}
    lastscrollup=st<=0?0:st;})