//########################################################################################
//simple web shell template, javascript, 02.10.2021
//########################################################################################
//strict mode
"use strict";
//########################################################################################
var mobileWidth   = 800;		//integer, css value in px: below switch to dropdown menu
var mobileNavi    = false;		//boolean, dropdown status: false = hidden, true = shown)
//########################################################################################
//show/hide mobile navigation dropdown menue, rotate hamburger icon
function showHideNav() {
	if (mobileNavi === false) {
		mobileNavi = true;
		document.getElementById("navi").style.marginTop = "12px";
		document.getElementById("mobile").style.transform = "rotate(90deg)";
	} else {
		mobileNavi = false;
		document.getElementById("navi").style.marginTop = "-500px";
		document.getElementById("mobile").style.transform = "rotate(0deg)";
	}
}

//########################################################################################
//reset navigation menue when resizing screen (or switch orientation)
function resetNav() {
	if (window.innerWidth > mobileWidth) {
		document.getElementById("navi").style.marginTop = "0px";
		mobileNavi = false;
	} else {
		document.getElementById("navi").style.marginTop = "-500px";
		document.getElementById("mobile").style.transform = "rotate(180deg)";
	}
}

//########################################################################################
//init event listener
window.addEventListener("resize", resetNav); //trigger reset navigation
document.addEventListener("DOMContentLoaded", function(event) {
	//handle mobile navigation and logo home function
	document.getElementById("mobile").addEventListener("click", showHideNav);
	document.getElementById("home").addEventListener("click", function(e) {document.location.href="index.htm";});
});


