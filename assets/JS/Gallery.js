let scrollContainer = document.querySelector('.gallery ');
let backBtn =document.getElementById('btnBack');
let nextBtn =document.getElementById('btnNext');

scrollContainer.addEventListener('wheel',(evt => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";

}));

nextBtn.addEventListener('click',()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft +=900;
});
nextBtn.addEventListener('click',()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft +=-900;
});

document.getElementById('pic1').addEventListener('mouseover',function (){
    document.getElementById('picDis1').style.display='block';
    document.getElementById('picDis1').style.color='white';
});
document.getElementById('pic1').addEventListener('mouseout',function (){
    document.getElementById('picDis1').style.display='none';
});
document.getElementById('pic2').addEventListener('mouseover',function (){
    document.getElementById('picDis2').style.display='block';
    document.getElementById('picDis2').style.color='white';
});
document.getElementById('pic2').addEventListener('mouseout',function (){
    document.getElementById('picDis2').style.display='none';
});
document.getElementById('pic3').addEventListener('mouseover',function (){
    document.getElementById('picDis3').style.display='block';
    document.getElementById('picDis3').style.color='white';
});
document.getElementById('pic3').addEventListener('mouseout',function (){
    document.getElementById('picDis3').style.display='none';
});
document.getElementById('pic4').addEventListener('mouseover',function (){
    document.getElementById('picDis4').style.display='block';
    document.getElementById('picDis4').style.color='white';
});
document.getElementById('pic4').addEventListener('mouseout',function (){
    document.getElementById('picDis4').style.display='none';
});
document.getElementById('pic5').addEventListener('mouseover',function (){
    document.getElementById('picDis5').style.display='block';
    document.getElementById('picDis5').style.color='white';
});
document.getElementById('pic5').addEventListener('mouseout',function (){
    document.getElementById('picDis5').style.display='none';
});
document.getElementById('pic6').addEventListener('mouseover',function (){
    document.getElementById('picDis6').style.display='block';
    document.getElementById('picDis6').style.color='white';
});
document.getElementById('pic6').addEventListener('mouseout',function (){
    document.getElementById('picDis6').style.display='none';
});
document.getElementById('pic7').addEventListener('mouseover',function (){
    document.getElementById('picDis7').style.display='block';
    document.getElementById('picDis7').style.color='white';
});
document.getElementById('pic7').addEventListener('mouseout',function (){
    document.getElementById('picDis7').style.display='none';
});
document.getElementById('pic8').addEventListener('mouseover',function (){
    document.getElementById('picDis8').style.display='block';
    document.getElementById('picDis8').style.color='white';
});
document.getElementById('pic8').addEventListener('mouseout',function (){
    document.getElementById('picDis8').style.display='none';
});
document.getElementById('pic9').addEventListener('mouseover',function (){
    document.getElementById('picDis9').style.display='block';
    document.getElementById('picDis9').style.color='white';
});
document.getElementById('pic9').addEventListener('mouseout',function (){
    document.getElementById('picDis9').style.display='none';
});