var win=Ti.UI.currentWindow;


var btn=Ti.UI.createButton(
	{
		title:"Select From Photo Gallery",
		width:150,
		height:20,
		top:100,
		zIndex:2
	});
win.add(btn);
btn.addEventListener("click",function(e)
{
	Ti.Media.openPhotoGallery(
		{
			success:function(e)
			{
				var imageView=Ti.UI.createImageView(
					{
						image:e.media,
						width:150,
						height:200,
						top:12,
						zIndex:1
					});
				win.add(imageView);
			},
			error:function(e)
			{
				alert(e.code);
			},
			cancel:function(e)
			{
				alert(e.code + 'Cancelled');
			},
			allowEditing:true,
			mediaType:[Ti.Media.MEDIA_TYPE_PHOTO]
		});
});

