
function validateForm(){
	// console.log(e);
	var x, text
	x = document.getElementById("pwd").value;
	hash = md5(x.toLowerCase())

	if ( hash == "9eb0c9605dc81a68731f61b3e0838937"){
		 text = "Happy Valentine's Day! The next one is valentine"
	}else{
		text = "Wrong Answer.Please try again!"
	}
	document.getElementById("feedback").innerHTML = text;

}