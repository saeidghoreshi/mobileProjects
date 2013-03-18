var win=Ti.UI.currentWindow;

var loadRemoteBtn=Ti.UI.createButton(
	{
		width:100,
		height:40,
		bottom:0,
		left:0,
		title:"load remotly"
	});
	
var loadLocalBtn=Ti.UI.createButton(
	{
		width:100,
		height:40,
		bottom:0,
		left:120,
		title:"load remotly"
	});
	
var webView=Ti.UI.createWebView({top:0,left:0});
	
//Event Listeners
loadLocalBtn.addEventListener("click",function(e)
	{
		webView.url="../html/index.html";
	});
loadRemoteBtn.addEventListener("click",function(e)
	{
		webView.url="http://www.google.com";
	});
webView.addEventListener("load",function(e)
	{
		
		/*
		 you can create new buttom on Ti side
		 and call loaded view js function  like    webView.evalJS("firedFormWebView('msg')"))
		 can be a security problem  be carefull
		*/
		
		//call the funcyion on loaded webpage
		webView.evalJS("firedFormWebView('msg')");
		
		if(webView.canGoBack())
		{
			//show or hide some buttons
		}
		if(webView.canGoForward()){}
	});
	
	
//make the loaded web page have access to Ti
Ti.App.addEventListener("fromWeb",function(e)
	{
		alert(e.value);
	});
	


win.add(webView);	
win.add(loadLocalBtn);
win.add(loadRemoteBtn);



