var win=Ti.UI.currentWindow;



var label=Ti.UI.createLabel(
	{
		text:win.dataToPass,
		width:"auto",
		height:"auto",
		textAlign:"center"
	});

win.add(label);
