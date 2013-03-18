var win=Ti.UI.currentWindow;

var labelResult=Ti.UI.createLabel(
	{
		width:"auto",
		height:40,
		top:0
	});
win.add(labelResult);




win.orientationModes=
[
	Ti.UI.PORTRAIT,
	Ti.UI.UPSIDE_PORTRAIT,
	Ti.UI.LANDSCAPE_LEFT,
	Ti.UI.LANDSCAPE_RIGHT
];

Ti.Gesture.addEventListener("orientationchange",function(e)
{
	if(e.orientation===1)labelResult.text=("Portrait" + e.orientation);
	if(e.orientation===2)labelResult.text=("Upside portrait " + e.orientation);
	if(e.orientation===3)labelResult.text=("Landscape left " + e.orientation);
	if(e.orientation===4)labelResult.text=("Landscape right" + e.orientation);
});


setTimeout(function()
{
	Ti.UI.orientation=Ti.UI.UPSIDE_PORTRAIT
},2000);


//Shake Event
Ti.Gesture.addEventListener("shake",function(e)
{
	alert("shaked");
});

//Acceleramater [Need to build in device]
Ti.Accelerometer.addEventListener("update",function(e)
{
	alert("X : "+e.x + " Y : "+e.y+ " Z: "+e.z);
});

//Swip
win.addEventListener("swipe",function(e)
{
	alert("swipped to : "+e.direction);
});
//Tapping
win.addEventListener("twofingertap",function(e)
{
	alert("You TApped : ");
});

