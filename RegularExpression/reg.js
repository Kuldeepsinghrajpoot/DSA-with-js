
	/*var a= document.getElementById('value').innerHTML;*/
	var a="kuldeep singh rajpoot &";
	//var b= /[0-9][ecm]/ig;
	var b=/e/i;
	
	// var c = b.test(a);
	var c = a.match(b);
	/*used for digit value searching for attribute is /\d\*/
console.log(c)
