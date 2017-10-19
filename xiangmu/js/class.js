window.onload=function(){
	let mask=document.querySelectorAll('.mask');
	let centerli=document.querySelectorAll('.centerli');
	let p=document.querySelectorAll('.pp');
	
	for(let i=0;i<centerli.length;i++){
		centerli[i].onmouseover=function(){
			for(let j=0;j<mask.length;j++){
				mask[j].style.borderTop='30px solid rgba(255, 255, 255, 0.6)';
				mask[j].style.borderLeft='30px solid rgba(255, 255, 255, 0)';
				p[j].style.display='none';
			}
			mask[i].style.borderTop='215px solid rgba(255, 255, 255, 0.2)';
			mask[i].style.borderLeft='350px solid rgba(255, 255, 255, 0.2)';
			p[i].style.display='block';
		}
		centerli[i].onmouseout=function(){
			mask[i].style.borderTop='30px solid rgba(255, 255, 255, 0.6)';
			mask[i].style.borderLeft='30px solid rgba(255, 255, 255, 0)';
			p[i].style.display='none';
		}

	}
}