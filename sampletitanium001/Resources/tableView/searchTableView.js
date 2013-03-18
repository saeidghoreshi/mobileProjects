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


var rowData=[];
for(var i=0;i<DS.length;i++)
{
	var row=Ti.UI.createTableViewRow(
			{
				title:DS[i].title,
				laftImage:DS[i].leftImage,
				className:DS[i].className,
				hasChild:true,
				searchFilter:DS[i].title			
			});
	rowData.push(row);
}
var searchBar=Ti.UI.createSearchBar(
	{
		showCancel:true,
		hintText:"Search through Database"
	}); 
var tableViewSearch=Ti.UI.createTableView(
	{
		data:rowData,
		search:searchBar,
		filterAttribute:"searchFilter"
	});

win.add(tableViewSearch);









	