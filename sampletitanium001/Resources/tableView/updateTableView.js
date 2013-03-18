var win=Ti.UI.currentWindow;
var tab=Ti.UI.currentTab;


var DS2=
[
	{ title:"TitleX1" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:true , hasChild:true , hasDetail: true },
	{ title:"TitleX2" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:true , hasChild:true , hasDetail: true  },
	{ title:"TitleX3" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:true , hasChild:true , hasDetail: true },
	{ title:"TitleX4" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:true , hasChild:true , hasDetail: true},
	{ title:"TitleX5" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:false, hasChild:false , hasDetail: true},
	{ title:"TitleX6" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:false , hasChild:true , hasDetail: false},
	{ title:"TitleX7" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:true , hasChild:false , hasDetail: false},
	{ title:"TitleX8" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:true , hasChild:true , hasDetail: false}
];


var tableViewUpdate=Ti.UI.createTableView({data:DS2});
win.add(tableViewUpdate);

tableViewUpdate.addEventListener("click",function(e)
{
	var row=Ti.UI.createTableViewRow({title:"Row Updated",height:"auto"});
	
	tableViewUpdate.updateRow(e.index,row);
	//OR all Rows sertData
	/*var rowData=
	[
		{title:"All rows Updated" , className:"newRow"},
		{title:"All rows Updated" , className:"newRow"},
	];
	tableViewUpdate.setData(rowData);
	*/
});


