
var win=Ti.UI.currentWindow;
//Just for IOS
win.navBarHidden=true;
win.tabBarHidden=true;


var label=Ti.UI.createLabel(
	{
		text:"test",
		width:"100",
		height:50,
		textAlign:"center"
	});
win.add(label);
win.barColor="red";



