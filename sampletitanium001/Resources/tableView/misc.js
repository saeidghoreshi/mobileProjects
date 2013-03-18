var win=Ti.UI.currentWindow;
var tab=Ti.UI.currentTab;


function Picker(parent)
{
		var picker=Ti.UI.createPicker(
		{
				top:0,
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
			top:300,
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




Picker(win);
multiPicker(win);
createDatePicker(win);






	