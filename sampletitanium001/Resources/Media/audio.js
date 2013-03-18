var win=Ti.UI.currentWindow;

var btnLocal=Ti.UI.createButton(
	{
		title:"Play/Pause",
		width:100,
		height:30,
		bottom:60
	});
var btnRemote=Ti.UI.createButton(
	{
		title:"Play/Pause Remotely",
		width:100,
		height:30,
		bottom:30
	});

win.add(btnLocal);
win.add(btnRemote);



//Note : 
//can't play local audio and streams remote audio files
var music=Ti.Media.createAudioPlayer();
btnRemote.addEventListener("click",function(e)
{
	music.url="http://www.explorecalifornia.org/audio.mp3";
	
	music.start();
	
});

btnLocal.addEventListener("click",function(e)
{
	var audio=Ti.Media.createSound(
		{
			url:"/Media/test.mp3"
		});
		
	audio.play();
});





