var referrer = window.document.referrer;
var a;
console.log('referrer', referrer);
console.log('window', window.history);
if(referrer) {
	a = window.document.getElementById("navigation_link");
	a.textContent= "Return to Previous Page";
	a.setAttribute('href', referrer);
}