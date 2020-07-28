document.querySelector("#goto").addEventListener("click",e=>{
	if( document.querySelector("#name").value == "王若茜" && 
		document.querySelector("#password").value == "123" ){
		let timer = setInterval(function(){
			document.querySelector("#name").style.opacity --;
			document.querySelector("#password").style.opacity --;
			document.querySelector("#goto").style.opacity --;
		},10);
		setTimeout(function(){
			clearInterval(timer);
			document.querySelector(".form").removeChild( document.querySelector("#name") );
			document.querySelector(".form").removeChild( document.querySelector("#password") );
			document.querySelector(".form").removeChild( document.querySelector("#goto") );
		},1000);
		setTimeout(function(){
			window.open("./main.html",_target="_self");
		},1000);
	}
});