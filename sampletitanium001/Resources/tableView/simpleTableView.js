var win=Ti.UI.currentWindow;
var tab=Ti.UI.currentTab;


var DS=
[
	{ title:"Title1" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:true , hasChild:true , hasDetail: true},
	{ title:"Title2" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:true , hasChild:true , hasDetail: true},
	{ title:"Title3" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:true , hasChild:true , hasDetail: true},
	{ title:"Title4" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:true , hasChild:true , hasDetail: true},
	{ title:"Title5" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:true , hasChild:true , hasDetail: true},
	{ title:"Title6" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:true , hasChild:true , hasDetail: true},
	{ title:"Title7" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:true , hasChild:true , hasDetail: true},
	{ title:"Title8" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:true , hasChild:true , hasDetail: true}
];


var tableView=Ti.UI.createTableView({data:DS});
win.add(tableView);


tableView.addEventListener("scrollEnd",function(e)
{
	var newRowObject={ title:"FUCK U" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:true , hasChild:true , hasDetail: false}
	
	if(e.contentOffset.y>0)
	{
		
		tableView.insertRowAfter(2,newRowObject);
		tableView.selectRow(3);
		
		//add Feedaback
		Ti.Media.vibrate();
		var dialog=Ti.UI.createAlertDialog(
			{
				title:"My Title",
				message:"this a sample Box showing up",
				buttonNames:["Yellow","Surprise me"]
			});
		dialog.show();
		dialog.addEventListener("click",function(e)
		{	
			if(e.index===0)
			{
				//Do something
			}
		});
	}
});

