window.onload = function(){
	setTimeout(function(){
		document.querySelector("img").classList.add("active");
	},1000);
	setTimeout(function(){
		document.querySelector(".text").classList.toggle("down");
	},2000);
	setTimeout(function(){
		var audio = new Audio("./music.mp3");
		audio.volume = 0.2;
		audio.play();
	},3000);
	setTimeout(function(){
		document.querySelector(".control").classList.toggle("show");
	},4000);
}
document.querySelector("#true").addEventListener("click",e=>{
	alert("祝你生日快乐!🎉");
});