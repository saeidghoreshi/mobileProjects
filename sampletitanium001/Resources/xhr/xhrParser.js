var win=Ti.UI.currentWindow;

//Craete table View
var data=[];
var tableView=Ti.UI.createTableView({data:data});

var xhr=Ti.Network.createHTTPClient(
	{
		onload:renderXML,
		onerror:onError
	});
function onError()
{
	alert("well something happened");
}
function renderXML()
{
	
	var tours=this.responseXML.documentElement;
	var tour=tours.getElementsByTagName("tour");
	
	for(var i=0;i<tour.length;i++)
	{
		var item=tour.item(i);
		var title=item.getElementsByTagName("tourTitle").item(0).text;
		var row=Ti.UI.createTableViewRow(
		{
			title:title,
			className:"tableRow"
		});
		data.push(row);
	}
	tableView.setData(data);
	
}

xhr.open("GET","http://services.explorecalifornia.org/rest/tours.php");
xhr.send();

win.add(tableView);




