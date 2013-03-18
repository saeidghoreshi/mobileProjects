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


