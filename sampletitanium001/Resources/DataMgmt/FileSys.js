var win=Ti.UI.currentWindow;


var button=Ti.UI.createButton(
	{
		width:100,
		height:50,
		title:"Press Me"
	});
win.add(button);
button.addEventListener("click",function()
{
	//Note
	//IOS only allows data reading and writnf in application Data Directory
	//Temporary data can be stored in temp Directory
	
	
	//when the app is deleted file system related will be deleted
	var dataFile=Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,"tegstFile.txt");
	if(!dataFile.exists())
	{
		dataFile.createFile();
		dataFile.write("this is a sample data entered in File");
		alert("file is beenn created");
	}
	else
	{
		var fileContent=dataFile.read();
		var newContent=fileContent + " " + "Changed";
		dataFile.write(newContent);
		alert("File Upadated");
		
	}
	
});


