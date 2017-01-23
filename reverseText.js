function reverseText() {
	var text = "defines"
	var reversedText = '';
	var lastLetter = (text.length) - 1; 
	for (i=lastLetter; i>=0 ; i--) {
		console.log(i);
		var temp = text[i];
		console.log(temp);
		reversedText = reversedText + temp;
	} 
	document.querySelector('p').innerHTML = `${reversedText}`;

}

document.addEventListener('DOMContentLoaded', function(){
	reverseText(); 
})