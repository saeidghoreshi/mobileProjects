var win=Ti.UI.currentWindow;

var annotation1=Ti.Map.createAnnotation(
	{
		latitude:33.270,
		longitude:-115.705,
		title:"Form Here",
		subtitle:"SubTitle",
		animate:true,
		customProperty:"Blah Blah",
		//image:"img"
		leftButton:"KS_nav_views.png",		
		leftButtonText:"Save"
	});
var mapView=Ti.Map.createView(
	{
		top:0,
		left:0,
		height:"100%",
		width:"100%",
		mapType:Ti.Map.STANDARD_TYPE,
		region:
		{
			latitude:33.270,
			longitude:-115.705,
			latitudeDelta:1,
			longitudeDelta:1
		},
		animate:true,
		regionFit:true,
		userLocation:true,
		annotations:[annotation1]
	});
	
	mapView.selectAnnotation(annotation1);
	mapView.addEventListener("click",function(e)
	{
		if(e.clicksource==="leftButton")
		{
			alert(e.annotation.leftButtonText);	
		}
		else
		{
			alert(e.annotation.customProperty);	
		}
		
	});
	
win.add(mapView);


/*
 * viewMap.addAnnotation();
 * viewMap.setLocation({latitude,longitude});
 * mapView.hasAnnotation
 * mapViw.removeAllAnnotations()
 */
