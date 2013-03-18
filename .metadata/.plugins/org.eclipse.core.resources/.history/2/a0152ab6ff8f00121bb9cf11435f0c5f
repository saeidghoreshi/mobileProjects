var win=Ti.UI.currentWindow;

var sendBtn=Ti.UI.createButton(
	{
		width:100,
		height:30,
		title:"Open Email"	
	});
	
win.add(sendBtn);

var emailDialog=Ti.UI.createEmailDialog(
			{
				barColor:"#FFCC00",
				html:true,
				toRecipients:["Ryan.goreshi@yahoo.com"],
				subject:"this is a test",
				messageBody:"Message Body Added"
			});
			
sendBtn.addEventListener("click",function(e)
{
	var dataFile=Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,"images/bg/bg1.jpg");
	emailDialog.addAttachment(dataFile);
	emailDialog.open();
});
emailDialog.addEventListener("complete",function(e)
{
	if(e.result==emailDialog.SENT)
		alert("Email Sent");
	else
		alert("Problem sending Email");
});

