function ApplicationWindow(title) {
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'white',
		exitOnClose:true
	});
	
	var button = Ti.UI.createButton({
		height:44,
		width:200,
		title:L('openWindow'),
		top:20
	});
	self.add(button);
	
	button.addEventListener('click', function() {
		//containingTab attribute must be set by parent tab group on
		//the window for this work
		self.containingTab.open(Ti.UI.createWindow({
			title: L('newWindow'),
			backgroundColor: 'white'
		}));
	});
	
	//touch end button -- Ryan
	var button2 = Ti.UI.createButton({
		height:44,
		width:200,
		backgroundImage:"",
		backgroundSelectedImage:"",
		title:L("Touchend Test"),
		top:80
	});
	self.add(button2);
	
	button2.addEventListener('touchend', function(e) {
		alert(e.source.id);
	});
	
	
	//Create View --Ryan
	var view1=Ti.UI.createView({
		
		height:20,
		width:20,
		top:0,
		left:0,
		backgroundColor:'yellow'

	});
	self.add(view1);
	
	//Creae Label --Ryan
	var label1=Ti.UI.createLabel({
			text:"New Label",
			width:100,
			height:20,
			top:0,
			left:20,
			textAlign:"center",
			color:"black",
			backgroundColor:"#f2f2f2",
			font:{fintSize:10,fontStyle:"bold"}
		}
	);
	self.add(label1);
	
	//Create imageView  --Ryan
	var imageView1= Ti.UI.createImageView({
		width:30,
		height:30,
		image:"../../images/KS_nav_ui.png",
		bottom:10,
		zIndex:1
		
	});
	imageView1.addEventListener("click",function imageEvent(e)
	{
		var obj=e.source;
		label1.text=obj.image;
		alert(obj.image);
		
		obj.removeEventListener("click",function(e){});
		
	});
	//TO DFETECT WHICH OBJECT IS GETTING TOUCHED
	self.addEventListener('touchmove', function(e) {
		//CAN ALSO RESTRICT THE AREA BY CHECKING THE E.Y E.X
		label1.text="x : "+e.x + " y: "+e.y;//e.source.id;
	});
	
	//self.add(imageView1);
	//Switch(self);
	//Picker(self);
	//multiPicker(self);
	//createDatePicker(self);
	//createTextField(self);
	
	return self;
};
function Switch(parent)
{
		var platform=Ti.Platform.osname;
		if(platform==="android")
		{
					
			var sw=Ti.UI.createSwitch(
			{
				top:120,
				value:true,
				style:Ti.UI.Android.SWITCH_STYLE_CHECKBOX
			});
		}
		else
		{
			var sw=Ti.UI.createSwitch(
			{
				top:120,
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
function Picker(parent)
{
		var picker=Ti.UI.createPicker(
		{
				bottom:0,
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
				bottom:0,
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
			bottom:120,
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
			bottom:160,
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




module.exports = ApplicationWindow;




