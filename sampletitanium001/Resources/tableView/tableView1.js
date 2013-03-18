var win=Ti.UI.currentWindow;
var tab=Ti.UI.currentTab;

//View 2 ------------------------------------
var data=
[
	{img:"../images/bg/bg1.jpg" , title:"Title 1" , amount:100},
	{img:"../images/bg/bg2.jpg" , title:"Title 2" , amount:200},
	{img:"../images/bg/bg3.jpg" , title:"Title 3" , amount:300},
	{img:"../images/bg/bg1.jpg" , title:"Title 4" , amount:400},
	{img:"../images/bg/bg2.jpg" , title:"Title 5" , amount:500}
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
		
	var row=Ti.UI.createTableViewRow({height:"auto"});
		
		row.add(img);
		row.add(bgBar);
		row.add(title);
		row.add(amount);
		
		rowData.push(row);
}

var tableView2=Ti.UI.createTableView({data:rowData});

win.add(tableView2);

tableView2.addEventListener("click",function(e)
{
	//access to each view row
	alert(e.source);
});


