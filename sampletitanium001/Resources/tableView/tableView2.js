var win=Ti.UI.currentWindow;
var tab=Ti.UI.currentTab;



var DS2=
[
	{ title:"TitleX1" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:false , hasChild:false , hasDetail: true},
	{ title:"TitleX2" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:false , hasChild:true , hasDetail: true 
		, js :"external.js" , args:"this is  the custom data" , header:"A-Z" , footer : "Z-A" },
		
	{ title:"TitleX3" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:true , hasChild:true , hasDetail: true },
	{ title:"TitleX4" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:true , hasChild:true , hasDetail: true},
	{ title:"TitleX5" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:false, hasChild:false , hasDetail: true},
	{ title:"TitleX6" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:false , hasChild:true , hasDetail: false},
	{ title:"TitleX7" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:true , hasChild:false , hasDetail: false},
	{ title:"TitleX8" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:true , hasChild:false , hasDetail: false}
];


var tableView3=Ti.UI.createTableView({data:DS2});
win.add(tableView3);

tableView3.addEventListener("click",function(e)
{
	if(e.source.hasDetail)
	{
		var w;
		//load New Window
		if(e.source.js)
		{
			w=Ti.UI.createWindow(
				{
					title:e.source.title,
					backgroundColor:'#f2f2f2',
					dataToPass:e.source.args,
					url:e.source.js
				});
		}
		else
		{
			w=Ti.UI.createWindow(
				{
					title:e.source.title,
					backgroundColor:"#f3f3f3"
				});
			var l=Ti.UI.createLabel(
				{
					text:"Newly opened window from : "+e.source.title,
					width:"auto",
					height:"auto",
					textAlign:"center"
				});
			w.add(l);
		}
		
		//load new window W in Current TAB
		tab.open(w,{animated:true});
	}
	else
	{	
		//No Window to Load
	}
});


var row=Ti.UI.createTableViewRow({title:"AUTO ROW",height:"auto"});
tableView3.appendRow(row);
//OR
tableView3.insertRowAfter(2,row);
