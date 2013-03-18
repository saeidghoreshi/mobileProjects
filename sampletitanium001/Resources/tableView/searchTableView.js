var win=Ti.UI.currentWindow;
var tab=Ti.UI.currentTab;


var DS=
[
	{ title:"AitleX1" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:true , hasChild:true , hasDetail: true 	},
	{ title:"AitleX2" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:true , hasChild:true , hasDetail: true  	},
	{ title:"AitleX3" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:true , hasChild:true , hasDetail: true 	},
	{ title:"CitleX4" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:true , hasChild:true , hasDetail: true	},
	{ title:"CitleX5" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:false, hasChild:false , hasDetail: true	},
	{ title:"KitleX6" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:false , hasChild:true , hasDetail: false	},
	{ title:"KitleX7" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:true , hasChild:false , hasDetail: false	},
	{ title:"ZitleX8" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:true , hasChild:true , hasDetail: false	}
];



//Add Header to tableView by adding Customized View
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




//Create Search Bar

var searchBar=Ti.UI.createSearchBar(
	{
		showCancel:true,
		hintText:"Search through Database"
	}); 
var tableViewSearch=Ti.UI.createTableView(
	{
		data:DS,
		search:searchBar,
		filterAttribute:"searchFilter",
		headerView:header
	});

win.add(tableViewSearch);

tableViewSearch.addEventListener("scrollEnd",function(e)
{
	var newRowObject={ title:"FUCK U" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:true , hasChild:true , hasDetail: false}
	
	if(e.contentOffset.y>50)
	{
		tableViewSearch.insertRowAfter(2,newRowObject);
		tableViewSearch.selectRow(3);
		
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









	