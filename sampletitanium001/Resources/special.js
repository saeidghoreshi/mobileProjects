
var win=Ti.UI.currentWindow;


//Just for IOS and canbe used in the config Section also
win.navBarHidden=true;
win.tabBarHidden=false;


var label=Ti.UI.createLabel(
	{
		text:"Special Window",
		width:"100",
		height:50,
		textAlign:"center"
	});
win.add(label);

//win.barColor="#fefefe";



