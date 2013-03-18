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
		id:"MyID",
		height:44,
		width:200,
		//backgroundImage:"",
		//backgroundSelectedImage:"",
		title:L("Touchend Test"),
		bottom:80
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
	self.add(imageView1);
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
	
	
	
	
	return self;
};




module.exports = ApplicationWindow;




