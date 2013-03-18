var win=Ti.UI.currentWindow;
var tab=Ti.UI.currentTab;



var DS=
[
	{ title:"AitleX1" , header:"Ask me" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:true , hasChild:true , hasDetail: true 	},
	{ title:"AitleX2" 					, leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:true , hasChild:true , hasDetail: true  	},
	{ title:"AitleX3" , header:"CAll Me" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:true , hasChild:true , hasDetail: true 	},
	{ title:"CitleX4" 					, leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:true , hasChild:true , hasDetail: true		},
	{ title:"CitleX5" 					, leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:false, hasChild:false , hasDetail: true	},
	{ title:"KitleX6" , header:"Contect", leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:false , hasChild:true , hasDetail: false	},
	{ title:"KitleX7" 					, leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:true , hasChild:false , hasDetail: false	},
	{ title:"ZitleX8" 					, leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:true , hasChild:true , hasDetail: false	}
];


var tableViewGroup=Ti.UI.createTableView(
	{
		data:DS,
		style:Ti.UI.iPhone.TableViewStyle.GROUPED
	});

win.add(tableViewGroup);
