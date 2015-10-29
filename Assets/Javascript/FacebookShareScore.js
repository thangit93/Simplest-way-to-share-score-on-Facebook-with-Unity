﻿#pragma strict

// Your app’s unique identifier.
var AppID:String = "1399925576886522";

// The link attached to this post.
var Link:String = "https://play.google.com/store/apps/developer?id=Gamestoodio";

// The URL of a picture attached to this post. The picture must be at least 200px by 200px.
var Picture:String = "http://imageshack.us/scaled/landing/843/gh4o.png";

// The name of the link attachment.
var Name:String = "My New Score";

// The caption of the link (appears beneath the link name).
var Caption:String = "I just got +99 score friends! Can you beat it?";

// The description of the link (appears beneath the link caption).
var Description:String = "Enjoy fun, free games! Challenge yourself or share with friends. Fun and easy-to-use game.";

function OnGUI () {
	var x = (Screen.width/2)-50;
	var y = (Screen.height/2)-25;
	
	if(GUI.Button(Rect( x, y, 100, 50), "Share Score")) {
		ShareScoreOnFB(); 
	}
}

function ShareScoreOnFB() {
	Application.OpenURL("https://www.facebook.com/dialog/feed?"+ "app_id="+AppID+ "&link="+
						Link+ "&picture="+Picture+ "&name="+ReplaceSpace(Name)+ "&caption="+
						ReplaceSpace(Caption)+ "&description="+ReplaceSpace(Description)+
						"&redirect_uri=https://facebook.com/");
}

function ReplaceSpace (val:String) {
	return val.Replace(" ", '%20');
}