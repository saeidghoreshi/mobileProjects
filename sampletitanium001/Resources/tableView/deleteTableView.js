var win=Ti.UI.currentWindow;
var tab=Ti.UI.currentTab;


var DS=
[
	{ title:"AitleX1" , header:"Ask me" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:true , hasChild:true , hasDetail: true 	},
	{ title:"AitleX2" 					, leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:true , hasChild:true , hasDetail: true  	},
	{ title:"AitleX3" , header:"Ssk me" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:true , hasChild:true , hasDetail: true 	},
	{ title:"CitleX4" 					, leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:true , hasChild:true , hasDetail: true		},
	{ title:"CitleX5" 					, leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:false, hasChild:false , hasDetail: true	},
	{ title:"KitleX6" , header:"Bsk me" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:false , hasChild:true , hasDetail: false	},
	{ title:"KitleX7" 					, leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:true , hasChild:false , hasDetail: false	},
	{ title:"ZitleX8" 					, leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:true , hasChild:true , hasDetail: false	}
];


var tableViewDelete=Ti.UI.createTableView(
	{
		data:DS,
		editable:true,
		allowsSelectionDuringEditing:true
	});
//win.add(tableViewDelete);


tableViewDelete.addEventListener("click",function(e)
{
	
	//Moving option just supported in IOS
	if(!tableViewDelete.moving)
	{
		tableViewDelete.moving=true;
		return;	
	}
	else if(tableViewDelete.moving)
	{
		tableViewDelete.moving=false;
		return;
	}
	
	if(!tableViewDelete.editing)
	{
		tableViewDelete.editing=true;	
	}
	else
	{
		tableViewDelete.editing=false;
	}
	//android only code below
	//tableViewDelete.deleteRow(e.index);
});


//Listeneres
tableViewDelete.addEventListener("delete",function(e)
{
	tableViewDelete.editing=false;
});
tableViewDelete.addEventListener("move",function(e)
{
	//after move done DS need to be updated
	tableViewDelete.moving=false;
});









	