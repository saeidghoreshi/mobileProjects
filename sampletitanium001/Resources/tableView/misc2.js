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



function Switch(parent)
{
		var platform=Ti.Platform.osname;
		if(platform==="android")
		{
					
			var sw=Ti.UI.createSwitch(
			{
				top:100,
				value:true,
				style:Ti.UI.Android.SWITCH_STYLE_CHECKBOX
			});
		}
		else
		{
			var sw=Ti.UI.createSwitch(
			{
				top:100,
				value:true,
				titleOn:"YUP",
				titleOff:"NOPE"
			});
		}
		sw.addEventListener("change",function(e)
		{
			alert(e.value);
		});
		parent.add(sw);
	
}

function createTextField(parent)
{
	var lButton=Ti.UI.createButton(
		{
			width:50,
			title:"clear",
			height:20
		});
	var rButton=Ti.UI.createButton(
		{
			width:50,
			title:"Submit",
			height:20
		});
	var textField=Ti.UI.createTextField(
		{
			width:200,
			height:35,
			top:150,
			borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			hintText:"this is an option to rnter yout input",
			keyboardType:Ti.UI.KEYBOARD_PHONE_PAD,
			
			leftButton:lButton,
			rightButton:rButton
			
		});
	var textArea=Ti.UI.createTextArea(
		{
			width:200,
			height:55,
			top:200,
			borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			hintText:"this is an option to rnter yout input",
			value:"Default Value",
			suppressReturn:false,
			borderWidth:1,
			borderColor:"#CCC",
			borderRadius:12
		});
		parent.addEventListener("click",function(e)
		{
			textField.blur();
			textArea.blur();
		});
		textArea.addEventListener("blur",function(e)
		{
			if(e.value=="")
				e.source.value="DEFAULT";
			
		});
		
		parent.add(textField);
		parent.add(textArea);
}




Switch(win);
createTextField(win);





	