//TAB GROUP need to be in different files 

function ApplicationTabGroup(Window) {
	//create module instance
	var self = Ti.UI.createTabGroup();
	
	//create app tabs
	var win1 = new Window(L('home')),
		win2 = new Window(L('settings'));
	
	var tab1 = Ti.UI.createTab({
		title: L('home'),
		icon: '/images/KS_nav_ui.png',
		window: win1
	});
	win1.containingTab = tab1;
	
	var tab2 = Ti.UI.createTab({
		title: L('settings'),
		icon: '/images/KS_nav_views.png',
		window: win2
	});
	win2.containingTab = tab2;
	
	self.addTab(tab1);
	self.addTab(tab2);
	
	//create third tab -- Ryan
	var win3=Ti.UI.createWindow(
		{
			title:"WIN#3",
			backgroundColor:"#f2f2f2",
			url:"special.js"
		});
	var tab3=Ti.UI.createTab(
		{
			icon:"tours-tab.png",
			title:"specials",
			window:win3
		});
	self.addTab(tab3);
	
	
	//MAP TAB --Ryan
	//create third tab -- Ryan
	var win4=Ti.UI.createWindow(
		{
			title:"WIN#MAP",
			backgroundColor:"#FFF",
			url:"map.js"
		});
	var tab4=Ti.UI.createTab(
		{
		
			title:"Map",
			window:win4
		});
	self.addTab(tab4);
	
	//XHR TAB --Ryan
	//create Forth tab -- Ryan
	var win5=Ti.UI.createWindow(
		{
			title:"WIN#XHR",
			backgroundColor:"#FFF",
			url:"xhr.js"
		});
	var tab5=Ti.UI.createTab(
		{
		
			title:"XHR",
			window:win5
		});
	self.addTab(tab5);
	
	//XHRParser TAB --Ryan
	//create Fifdth tab -- Ryan
	var win6=Ti.UI.createWindow(
		{
			title:"WIN#XHR Parser",
			backgroundColor:"#FFF",
			url:"xhrParser.js"
		});
	var tab6=Ti.UI.createTab(
		{
		
			title:"XHR Parser",
			window:win6
		});
	self.addTab(tab6);
	
	//Table View  TAB --Ryan
	//create 6th tab -- Ryan
	var win7=Ti.UI.createWindow(
		{
			title:"WIN#table View",
			backgroundColor:"#FFF",
			url:"tableView.js"
		});
	var tab7=Ti.UI.createTab(
		{
			title:"Table View",
			window:win7
		});
	self.addTab(tab7);
	
	//Table View Update TAB --Ryan
	//create 8th tab -- Ryan
	var win8=Ti.UI.createWindow(
		{
			title:"WIN#table View Update Row",
			backgroundColor:"#FFF",
			url:"updateTableView.js"
		});
	var tab8=Ti.UI.createTab(
		{
			title:"Update Table View",
			window:win8
		});
	self.addTab(tab8);
	
	//Table View Delete TAB --Ryan
	//create 9th tab -- Ryan
	var win9=Ti.UI.createWindow(
		{
			title:"WIN#table View Delete Row",
			backgroundColor:"#FFF",
			url:"deleteTableView.js"
		});
	var tab9=Ti.UI.createTab(
		{
			title:"Delete  Table View",
			window:win9
		});
	self.addTab(tab9);
	
	//Animation --Ryan
	//create 10th tab -- Ryan
	var win10=Ti.UI.createWindow(
		{
			title:"WIN#animation",
			backgroundColor:"#FFF",
			url:"animate.js"
		});
	var tab10=Ti.UI.createTab(
		{
			title:"Animate Me",
			window:win10
		});
	self.addTab(tab10);
	
	//Data Management --Ryan
	//create 11th tab
	var win11=Ti.UI.createWindow(
		{
			title:"WIN#ation",
			backgroundColor:"#FFF",
			url:"DataMgmt/DataState.js"
		});
	var tab11=Ti.UI.createTab(
		{
			title:"data Management",
			window:win11
		});
	self.addTab(tab11);
	
	//Data Management [File System] --Ryan
	//create 12th tab
	var win12=Ti.UI.createWindow(
		{
			title:"WIN# File System",
			backgroundColor:"#FFF",
			url:"DataMgmt/FileSys.js"
		});
	var tab12=Ti.UI.createTab(
		{
			title:"File System",
			window:win12
		});
	self.addTab(tab12);
	
	//Data Management [Emailing] --Ryan
	//create 13th tab
	var win13=Ti.UI.createWindow(
		{
			title:"WIN# Email",
			backgroundColor:"#FFF",
			url:"DataMgmt/email.js"
		});
	var tab13=Ti.UI.createTab(
		{
			title:"Email",
			window:win13
		});
	self.addTab(tab13);

	//MEdia [Camera] --Ryan
	var win14=Ti.UI.createWindow(
		{
			title:"WIN# Camera",
			backgroundColor:"#FFF",
			url:"Media/camera.js"
		});
	var tab14=Ti.UI.createTab(
		{
			title:"Camera",
			window:win14
		});
	self.addTab(tab14);
	
	//MEdia [Capture Screen] --Ryan
	var win15=Ti.UI.createWindow(
		{
			title:"WIN# Capture Screen",
			backgroundColor:"#FFF",
			url:"Media/captureScreen.js"
		});
	var tab15=Ti.UI.createTab(
		{
			title:"Capture Screen",
			window:win15
		});
	self.addTab(tab15);
	
	//Media [Audio] --Ryan
	var win16=Ti.UI.createWindow(
		{
			title:"WIN# Audio",
			backgroundColor:"#FFF",
			url:"Media/audio.js"
		});
	var tab16=Ti.UI.createTab(
		{
			title:"Audio",
			window:win16
		});
	self.addTab(tab16);
	
	//Orientation --Ryan
	var win17=Ti.UI.createWindow(
		{
			title:"WIN# Orientation",
			backgroundColor:"#FFF",
			url:"Gesture/orientation.js"
		});
	var tab17=Ti.UI.createTab(
		{
			title:"Orientation",
			window:win17
		});
	self.addTab(tab17);
	
	

	return self;
};

module.exports = ApplicationTabGroup;



