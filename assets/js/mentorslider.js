
var nav_left=document.getElementById('partner_nav_left');
var nav_right=document.getElementById('partner_nav_right');
var partner_gallery=document.getElementById('partners_div');
nav_right.addEventListener('click',()=>{partner_gallery.scrollBy({left:300,behavior:'smooth'})})
nav_left.addEventListener('click',()=>{partner_gallery.scrollBy({left:-300,behavior:'smooth'})})
function autoSlider(){
    if(window.innerWidth<1200){
        partner_gallery.scrollBy({left:-(img.length*300),behavior:'smooth'})
        if(partner_gallery.scrollLeft<(img.length*300)){
            partner_gallery.scrollBy({left:300,behavior:'smooth'})
        }
    }
    setTimeout(()=>{autoSlider();},4000)
}

autoSlider();
