var win=Ti.UI.currentWindow;

var btn=Ti.UI.createButton(
	{
		title:"Capture it",
		width:100,
		height:20,
		bottom:0
	});
win.add(btn);
btn.addEventListener("click",function(e)
{
	var img=win.toImage();
	var file=Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,"capture.png");
	if(file.exists())
	{
		file.deleteFile();
	}
	
	//this method below is not supported by android
	file.createFile();
	file.write(img);
	var fileContent=file.read();
	emailDialog.addAttachment(fileContent);
	emailDialog.open();
});

//Capturing the screen
var image1=Ti.UI.createImageView(
	{
		image:"/images/bg/bg1.jpg",
		width:300,
		height:100,
		top:0
	});
var image2=Ti.UI.createImageView(
	{
		image:"/images/bg/bg1.jpg",
		width:300,
		height:100,
		top:100
	});
win.add(image1);
win.add(image2);

//Email Action
var emailDialog=Ti.UI.createEmailDialog(
{
		barColor:"#FFCC00",
		html:true,
		toRecipients:["Ryan.goreshi@yahoo.com"],
		subject:"this is a test",
		messageBody:"Message Body Added"
});
emailDialog.addEventListener("complete",function(e)
{
	var file=Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,"capture.png");
	file.deleteFile();
	
	if(e.result==emailDialog.SENT)
		alert("Email Sent");
	else
		alert("Problem sending Email");
});