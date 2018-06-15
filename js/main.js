// var clientHeight = $( window ).height();
// $('html').css('height', clientHeight);
  // As vh is not always supported on all browsers

// ** Start of 'getYear' function that calculates the current year and updates the contents of the span with id 'year', with the calculated year

var getYear = function () {
	// Create new date object
	var date = new Date();
	// Get current year from the Date object using inbuilt methods
	var year = date.getFullYear();
	// Grab relevant DOM objects using jQuery and class name (since relevant span appears twice) and update
	$(".year").text(year);
}
// Call function
getYear();
// ** End 'getYear' function that calculates the current year and updates the contents of the span with id 'year', with the calculated year