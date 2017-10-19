let d1=document.querySelector('.d1');
let d2=document.querySelector('.d2');
let newleft=document.querySelector('.newleft');

newleft.onmouseenter=function(){
	d1.style.transform='skewX(0deg)';
	d1.style.transform='rotate(0deg)';
	d2.style.transform='skewX(0deg)';
	d2.style.transform='rotate(0deg)';
}
newleft.onmouseleave=function(){
	d1.style.transform='skewX(2deg)';
	d1.style.transform='rotate(-2deg)';
	d2.style.transform='skewX(5deg)';
	d2.style.transform='rotate(-5deg)';
}