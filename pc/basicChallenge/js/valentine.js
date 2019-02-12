function startTime(){
	var today = new Date();
	var y = today.getFullYear();
	var m = today.getMonth();
	var d = today.getDay();
	var hrs = today.getHours();
	var min = today.getMinutes();
	var sec = today.getSeconds();
	// add "0" when digits are less than 10
	m = checkTime(m);
	d = checkTime(d);
	hrs = checkTime(hrs);
	min = checkTime(min);
	sec = checkTime(sec);

	// document.getElementById('clock').innerHTML=y+":"+m+":"+d + " " + hrs + ":"+ min +":"+ sec ;
	// t=setTimeout(function(){startTime()},500);

}

function checkTime(i){
	if(i <10){
		i =  "0" + i
	}
	return i
}

function timeInterval(){
	var beginTime = new Date(2017,1,14) //month starts with 0(Jan),1(Feb)
	var now = new Date()
	var timeDiff = now.getTime() - beginTime.getTime()
	document.getElementById('clock').innerHTML = timestampToNormal(timeDiff)
	t=setTimeout(function(){timeInterval()},500);
}

function timestampToNormal(milliSeconds){
	var d = Math.floor(milliSeconds / (24*3600*1000)) ,
	left1 = milliSeconds % (24*3600*1000) ,
	hrs = Math.floor(left1 / (3600*1000)) ,
	left2 = left1 % (3600*1000) ,
	min = Math.floor(left2 / (60*1000)) ,
	left3 = left2 % (60*1000),
	sec = Math.floor(left3 / 1000);
	hrs = checkTime(hrs);
	min = checkTime(min);
	sec = checkTime(sec);
	result = d +"days"+" " +hrs + ":" + min +":" + sec
	// console.log(result);
	return result
	
}