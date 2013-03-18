var win=Ti.UI.currentWindow;
var tab=Ti.UI.currentTab;



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
win.add(header);


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



//Top55
function Switch(parent)
{
		var platform=Ti.Platform.osname;
		if(platform==="android")
		{
					
			var sw=Ti.UI.createSwitch(
			{
				top:55,
				value:true,
				style:Ti.UI.Android.SWITCH_STYLE_CHECKBOX
			});
		}
		else
		{
			var sw=Ti.UI.createSwitch(
			{
				top:55,
				value:true,
				titleOn:"YUP",
				titleOff:"NOPE"
			});
		}
		sw.addEventListener("change",function(e)
		{
			alert(e.value);
		});
		parent.add(sw);
	
}
//Top 70
function Picker(parent)
{
		var picker=Ti.UI.createPicker(
		{
				top:70,
				selectionIndicator:true
		});
		
		var data=[];
		data[0]=Ti.UI.createPickerRow({title:"test1",value:0});
		data[1]=Ti.UI.createPickerRow({title:"test1",value:1});
		data[2]=Ti.UI.createPickerRow({title:"test1",value:2});
		data[3]=Ti.UI.createPickerRow({title:"test1",value:3});
		
		picker.add(data);
		picker.addEventListener("change",function(e)
		{
			alert(e.row.title+' '+e.row.value);
		});
		parent.add(picker);
	
}
//TOP 100
function multiPickerDS()
{
	var ds={};
	ds.column1=
	[
		{title:"data1",val:0},
		{title:"data2",val:1},
		{title:"data3",val:2},
		{title:"data4",val:3}
	];
	ds.column2=
	[
		{title:"data1",val:0},
		{title:"data2",val:1},
		{title:"data3",val:2},
		{title:"data4",val:3}
	];
	return ds;
}
//Top 150
function multiPicker(parent)
{
		var ds=multiPickerDS();
		var column1=Ti.UI.createPickerColumn({width:200});
		//bind Data Source1
		for(var i=0;i<ds.column1.length;i++)
			column1.addRow(Ti.UI.createPickerRow(ds.column1[i]));
		
		var column2=Ti.UI.createPickerColumn();
		//bind Data Source2
		for(var i=0;i<ds.column2.length;i++)
			column2.addRow(Ti.UI.createPickerRow(ds.column2[i]));
		
		var picker=Ti.UI.createPicker(
		{
				top:150,
				selectionIndicator:true,
				useSpinner:true,
				type:Ti.UI.PICKER_TYPE_PLAIN,
				columns:[column1,column2]
		});
		
		picker.addEventListener("change",function(e)
		{
			if(e.columnIndex==0)
			{
				if(e.row.val==0)
					alert('what i wanted , selected');
			}
			else
				alert("column 1 : "+ e.selectedValue[0] + " \ncolumn2  : "+e.selectedValue[1]);
			
		});
		parent.add(picker);
	
}
//Top 200
function createDatePicker(parent)
{
	var minDate=new Date();
	minDate.setFullYear(2011);
	minDate.setMonth(01);
	minDate.setDate(10);
	
	var maxDate=new Date();
	maxDate.setFullYear(2013);
	maxDate.setMonth(01);
	maxDate.setDate(10);
	
	var setDate=new Date();
	setDate.setFullYear(2012);
	setDate.setMonth(01);
	setDate.setDate(10);
		
	var datePicker=Ti.UI.createPicker(
		{
			top:200,
			selectionIndicator:true,
			type:Ti.UI.PICKER_TYPE_DATE,
			minDate:minDate,
			maxDate:maxDate,
			value:setDate
		}); 
		//Note:
		//Also other TYPE options can be used by above settings
	parent.add(datePicker);
}

function createTextField(parent)
{
	var lButton=Ti.UI.createButton(
		{
			width:50,
			title:"clear",
			height:20
		});
	var rButton=Ti.UI.createButton(
		{
			width:50,
			title:"Submit",
			height:20
		});
	var textField=Ti.UI.createTextField(
		{
			width:200,
			height:35,
			top:250,
			borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			hintText:"this is an option to rnter yout input",
			keyboardType:Ti.UI.KEYBOARD_PHONE_PAD,
			
			leftButton:lButton,
			rightButton:rButton
			
		});
	var textArea=Ti.UI.createTextArea(
		{
			width:200,
			height:55,
			top:300,
			borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			hintText:"this is an option to rnter yout input",
			value:"Default Value",
			suppressReturn:false,
			borderWidth:1,
			borderColor:"#CCC",
			borderRadius:12
			
			
		});
		parent.addEventListener("click",function(e)
		{
			textField.blur();
			textArea.blur();
		});
		textArea.addEventListener("blur",function(e)
		{
			if(e.value=="")
				e.source.value="DEFAULT";
			
		});
		
		parent.add(textField);
		parent.add(textArea);
}




Switch(win);
Picker(win);
multiPicker(win);
createDatePicker(win);
createTextField(win);





	