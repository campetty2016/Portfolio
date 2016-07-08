//Ready Function that Waits for When the Page is Ready
$(document).ready(function () {

	//Calls the Animate Section Function
	AnimatesSection();
});

//Animate Section Function that Animates the Page to Scroll Once a Link is Clicked
function AnimatesSection() {

	//Assigns a Click Handler to the Links within the Navigation
	$("nav a").click(function (e) {

		//Declares the Variable ViewID By Assigning the ID of the Link Clicked and Appending the Word View at the End
		var SectionID = this.id + "Section";

		//Animates All of HTML and Body to Animate and Scroll to the Corresponding Link IDs Clicked
		$("html, body").animate({

			//Allows the Page to Automatically Scroll to a LinkID Once Clicked Through Appending a # to the ViewID
			scrollTop: $("#" + SectionID).offset().top

		}, 2000);
	});

	$("nav a").click(function (e) {
		$("nav a").removeClass("Active");
		$(this).addClass("Active");
		return false;
	});

}
