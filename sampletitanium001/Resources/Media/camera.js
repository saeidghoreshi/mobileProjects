var win=Ti.UI.currentWindow;

var btn1=Ti.UI.createButton(
	{
		title:"Launch it",
		width:100,
		height:20,
		top:50,
		zIndex:2
	});
win.add(btn1);
btn1.addEventListener("click",function(e)
{
	Ti.Media.showCamera(
		{
			success:function(e)
			{
				if(e.mediaType===Ti.Media.MEDIA_TYPE_PHOTO)
				{
					var imageView=Ti.UI.createImageView(
						{
							image:e.media,
							width:300,
							height:100,
							top:100,
							zIndex:1
						});
					win.add(imageView);
				}
				else if(e.mediaType===Ti.Media.MEDIA_TYPE_VIDEO)
				{
					var w=Ti.UI.createWindow(
						{
							title:"New Video",
							backgroundColor:"black",
						});
						
					//Play it on the video player
					var videoPlayer=Ti.Media.createVideoPlayer(
						{
							media:e.media
						});
					w.add(videoPlayer);
					videoPlayer.addEventListener("complete",function(e)
					{
						w.remove(videoPlayer);
						videoPlayer=null; //make it ready for GC
						w.close();
					});
					
					//Email the taken video			
					emailDialog.addAttachment(e.media);
					emailDialog.open();
					
				}
			},
			error:function(e)
			{
				alert(e.code);
				alert(Ti.Media.NO_CAMERA);
				
			},
			cancel:function(e)
			{
				alert("Cancelled");
			},
			allowEditing:true,
			saveToPhotoGallery:true,
			mediaTypes:[Ti.Media.MEDIA_TYPE_PHOTO,Ti.Media.MEDIA_TYPE_VIDEO],
			videoQuality:Ti.Media.QUALITY_HIGH
		});
});



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
