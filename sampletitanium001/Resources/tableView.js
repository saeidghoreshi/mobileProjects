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


var tableView=Ti.UI.createTableView(
	{
		data:DS
	});
	
//win.add(tableView);



//View 2 ------------------------------------
var data=
[
	{img:"images/bg/bg1.jpg" , title:"Title 1" , amount:100},
	{img:"images/bg/bg2.jpg" , title:"Title 2" , amount:200},
	{img:"images/bg/bg3.jpg" , title:"Title 3" , amount:300},
	{img:"images/bg/bg1.jpg" , title:"Title 4" , amount:400},
	{img:"images/bg/bg2.jpg" , title:"Title 5" , amount:500}
]

//Building Customized DS
var rowData=[];
for(var i=0;i<data.length;i++)
{
	var img=Ti.UI.createImageView(
		{
			image:data[i].img,
			height:180,
			width:320
		});
	var bgBar=Ti.UI.createView(
		{
			height:36,
			width:"100%",
			bottom:0,
			left:0,
			backgroundColor:"#000",
			opacity:0.6
		});
	var title=Ti.UI.createLabel(
		{
			text:data[i].title,
			height:36,
			width:"75%",
			bottom:0,
			right:0,
			color:"#FFFFFF",
			textAlign:"left"
		});
	var amount=Ti.UI.createLabel(
		{
			text:'$'+data[i].amount,
			height:36,
			width:"25%",
			bottom:0,
			right:0,
			color:"#FFFFFF",
			textAlign:"right"
		});
		var row=Ti.UI.createTableViewRow(
			{
				height:"auto",
				
			});
		row.add(img);
		row.add(bgBar);
		row.add(title);
		row.add(amount);
		
		rowData.push(row);
}

var tableView2=Ti.UI.createTableView(
	{
		data:rowData
	});
win.add(tableView2);

tableView2.addEventListener("click",function(e)
{
	//access to each view row
	alert(e.source);
});


//Table View 3

var DS2=
[
	{ title:"TitleX1" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:true , hasChild:true , hasDetail: true , customData:"this is  the custom data"},
	{ title:"TitleX2" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:true , hasChild:true , hasDetail: true , js :"external.js" ,header:"A-Z" , footer : "Z-A" },
	{ title:"TitleX3" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:true , hasChild:true , hasDetail: true },
	{ title:"TitleX4" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:true , hasChild:true , hasDetail: true},
	{ title:"TitleX5" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:false, hasChild:false , hasDetail: true},
	{ title:"TitleX6" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:false , hasChild:true , hasDetail: false},
	{ title:"TitleX7" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:true , hasChild:false , hasDetail: false},
	{ title:"TitleX8" , leftImage:"images/KS_nav_ui.png" , className:"tableRow" , hasCheck:true , hasChild:true , hasDetail: false}
];


var tableView3=Ti.UI.createTableView(
	{
		data:DS2
	});
win.add(tableView3);
tableView3.addEventListener("click",function(e)
{
	if(e.source.hasDetail)
	{
		//load New Window
		if(e.source.js)
		{
			var w=Ti.UI.createWindow(
				{
					title:e.source.title,
					backgroundColor:'#f2f2f2',
					dataToPass:e.source.dataToPass,
					url:e.source.js
				});
		}
		else
		{
			var w=Ti.UI.createWindow(
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
//tableView3.appendRow(row);
//OR
//tableView3.insertRowAfter(2,row);
