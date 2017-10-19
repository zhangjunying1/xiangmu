/*window.onload = function(){
	let banners=$('.banner')[0];
	let imguls=document.querySelector('.banner .img');
	console.log(imguls)
	let imglis=$('.imgli',imguls);
	let bnts=$('.bnts')[0];
	let bntlis=$('.bntsli',bnts);
	
	//自动改变banner图片
	let t=setInterval(move, 3000);
	let imgW=parseInt(getComputedStyle(imguls,null).width);
	let now=0;
	let next=0;
	function move(){
		next++;
		if(next==imglis.length){
	 		next=0;
	 	}
	 	bntlis[now].style.background='#fff';
		bntlis[next].style.background='#ffdd57';
	 	imglis[next].style.left=`${imgW}px`;
	 	animate(imglis[now],{left:`-${imgW}px`});
	 	animate(imglis[next],{left:0});
	 	now=next;
	}

	//点击小圆改变banner图片
	for(let i=0;i<bntlis.length;i++){
		bntlis[i].onclick=function(){
			console.log(bntlis[i])
			if(now==i){
				return;
			}	
			imglis[i].style.left=`${imgW}px`;
	 		animate(imglis[now],{left:-imgW});
	 		animate(imglis[i],{left:0});
	 		bntlis[now].style.background='#ffdd57';
			bntlis[i].style.background='#fff';
			now=next=i;
		}				
	}

	//鼠标进入banner，图片停止滚动
	banners.onmouseover=function(){
		clearInterval(t);
	}
	banners.onmouseout=function(){
		t=setInterval(move,3000);
	}

	//鼠标移入banner下面的小图片图片缩小
	let imgs=$('.imgs')[0];
	let img1s=$('.img1',imgs);
	let im=document.querySelectorAll('.img1>img');
	let mask=document.querySelectorAll('.img1>.mask');
	for(let i=0;i<img1s.length;i++){
		img1s[i].onmouseover=function(){
			im[i].style.transform='scale(0.8)';
			mask[i].style.transform='scale(0.8)';
			mask[i].style.display='block';
			// mask[i].style.translate='all 1s ease';
		}
		img1s[i].onmouseout=function(){
			im[i].style.transform='scale(1)';
			mask[i].style.display='none';
		}
	}
}*/
$(function(){
	let imglis=$('.banner>.img>.imgli');
	let banners=$('.banner');
	let imgw=imglis.width();
	let bntlis=$('.bnts>.bntsli');
	let bnts=$('.bnts');
	let t=setInterval(move,2000);
	let now=next=0;
	function move(){
		next++;
		if(next==imglis.length){
	 		next=0;
	 	}
	 	$(imglis[next]).css({left:imgw});
	 	$(bntlis[now]).css({background:'#fff'});
	 	$(bntlis[next]).css({background:'#ffdd57'});
	 	$(imglis[now]).animate({left:-imgw});
	 	$(imglis[next]).animate({left:0});
	 	now=next;
	}

	// //点击小圆改变banner图片
	// bnts.on('click','.bntlis',function(e){
	// 	let ele=$(e.target);
	// 	let i=ele.index();
	// 	if(now==i){
	// 		return;
	// 	}	
	// 	$(imglis[i]).css({left:imgw});
	//  	$(bntlis[now]).css({background:'#fff'});
	//  	$(bntlis[i]).css({background:'#ffdd57'});
	//  	$(imglis[now]).animate({left:-imgw});
	//  	$(imglis[i]).animate({left:0});
	// 	now=next=i;
	// })			


	//鼠标进入banner，图片停止滚动
	banners.on('mouseover',function(){
		clearInterval(t);
	})
	banners.on('mouseout',function(){
		t=setInterval(move,2000);
	})

	//鼠标移入banner下面的小图片图片缩小
	let imgs=$('.imgs');
	let img1s=$('.img1',imgs);
	let im=$('.img1>img');
	let mask=$('.img1>.mask');
	imgs.on('mouseover','img1s',function(e){
		let ele=$(e.target);
		ele.animate({transform:'scale(0.8)'});
	})
	imgs.on('mouseout','img1s',function(e){
		let ele=$(e.target);
		ele.animate({transform:'scale(1)'});
	})
	

})