function getStyle(obj,name){
	return (obj.currentStyle||getComputedStyle(obj,false))[name];
}

function move(obj,json,options){
	//start, target, count
	options=options||{};
	options.type=options.type||'ease-out';
	options.duration=options.duration||600;
	var start={};
	var dis={};
	for(var name in json){
		start[name]=parseInt(getStyle(obj,name));
		if(isNaN(start[name])){
			switch(name){
				case 'width':
					start[name]=obj.offsetWidth;
					break;
				case 'height':
					start[name]=obj.offsetHeight;
					break;
				case 'opacity':
					start[name]=1;
					break;
				case 'left':
					start[name]=obj.offsetLeft;
					break;
				case 'top':
					start[name]=obj.offsetTop;
					break;
			}
		}
		dis[name]=json[name]-start[name];
	};
	var count=Math.floor(options.duration/30);
	var n=0;
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		n++;
		for(var name in json){
			var cur=0;
			switch(options.type){
				case 'linear':
					var cur=start[name]+dis[name]*n/count;
				break;
				case 'ease-in':
					var a=n/count
					cur=start[name]+dis[name]*Math.pow(a,3);
				break;			
				case 'ease-out':
					var a=1-n/count
					cur=start[name]+dis[name]*(1-Math.pow(a,3));
				break;
			}
			if(name=='opacity'){
				obj.style.opacity=cur;
				obj.style.alpha='opacity('+cur*100+')';
			}else{
				obj.style[name]=cur+'px';
			}
			
		}
		if(n==count){
			clearInterval(obj.timer);
			options.end&&options.end(json);
		}
	},30);
}