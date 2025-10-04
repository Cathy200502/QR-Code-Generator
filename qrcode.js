function GenerateQRCode(){
	const text=document.getElementById("link").value;
	//clears tthe prev qr
	document.getElementById("qrimage").innerHTML = "";
	//trimm blank spaces
	if(text.trim()==="")
	{
		alert("Enter a text");
		return;
	}
	new QRCode(document.getElementById("qrimage"),{text:text,width:200,height:200})
}