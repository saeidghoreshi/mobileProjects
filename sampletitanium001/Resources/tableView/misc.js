var win=Ti.UI.currentWindow;
var tab=Ti.UI.currentTab;



var header=Ti.UI.createView(
	{
		left:0,
		top:0,
		height:50,
		width:"auto"
	});
var headerButton=Ti.UI.createButton(
	{
		title:"Press Me",
		height:40,
		width:100,
		left:25,
		bottom:0
	});
var optionDialogButton=Ti.UI.createButton(
	{
		title:"Option Dialog",
		height:40,
		width:100,
		left:150,
		bottom:0,
		
		url:"http://google.com",
		phoneNumber:"7789300655"
	});

header.add(headerButton);
header.add(optionDialogButton);
win.add(header);


optionDialogButton.addEventListener("click",function(e)
{			
	//create Option Dialog
			var optionDialog=Ti.UI.createOptionDialog(
			{
				title:"My Title",
				options:["Yellow","Surprise me" , "No Thanks"],
				cancel:2
			});
			optionDialog.show();
			optionDialog.addEventListener("click",function(e)
			{
				if(e.index<2)
				{
					//other buttons except for cancel
				}
				else
				{
					//cancels
				}
			});
});

headerButton.addEventListener("click",function(e)
{
			//indicator
					var indicator=Ti.UI.createActivityIndicator(
					{
							width:"auto",
							height:"auto",
							message:"Loading ...",
							color:"red",
							style:Ti.UI.iPhone.ActivityIndicatorStyle.DARK
					});
					win.add(indicator);
					indicator.show();
					
					setTimeout(function()
					{
						indicator.hide();
						Ti.Platform.openURL(e.source.phoneNumber);	// Not in simulator
						//Ti.Platform.openURL(e.source.url);
					},2000);		
});







	