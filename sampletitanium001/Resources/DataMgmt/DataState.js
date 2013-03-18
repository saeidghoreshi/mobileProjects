var win=Ti.UI.currentWindow;


var button=Ti.UI.createButton(
	{
		title:"First Run",
		height:100,
		width:100,
		left:25,
		bottom:0
	});

var label=Ti.UI.createLabel(
	{
		height:100,
		width:100,
		left:25,
		bottom:150
	});

win.add(button);
win.add(label);



button.addEventListener("click",function(e)
{
	//Note
	//if close the app from mutitask bar  > still holds the data but if remove the app then data will be remoed
	if(!Ti.App.Properties.hasProperty("firstRun"))
	{
		Ti.App.Properties.setBool("firstRun",1);
		Ti.App.Properties.setString("appMessage","Hello there");
		label.text="Yes, Is running for the first tiem";
	}
	else
	{
		label.text=Ti.App.Properties.getString("appMessage") + " : i've been run before'";
	}
});
