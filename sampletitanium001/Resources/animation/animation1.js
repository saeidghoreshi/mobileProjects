var win=Ti.UI.currentWindow;


var sampleImage=Ti.UI.createImageView(
	{
		image:"/images/bg/bg1.jpg",
		width:100,
		height:100,
		top:20
	});
var cmdBtn=Ti.UI.createButton(
	{
		title:"Press me",
		height:30,
		width:100,
		bottom:50
	});
	
win.add(sampleImage);
win.add(cmdBtn);


cmdBtn.addEventListener("click",function(e)
{
		//Build rotation
		var t=Ti.UI.create2DMatrix();
		t=t.rotate(20);
		t=t.scale(1.5);
		
		//Build Rotatin End
		
		var animation1=Ti.UI.createAnimation(
		{
			top:30,
			duration:1000,
			transform:t
		});
		//Ti.API.info("The data object contains: " + JSON.stringify(data));
		//Ti.API.log("The data object contains: " + JSON.stringify(data));
		
		sampleImage.animate(animation1);
		animation1.addEventListener("complete",function(e)
		{
			win.backgroundColor="Yellow";
			var animate2=Ti.UI.createAnimation(
				{
					top:120,
					duration:1000
				});
			sampleImage.animate(animate2);
		});
});
