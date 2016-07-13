//Ready Function that Waits for When the Page is Ready
$(document).ready(function () {

	//Calls the Animate Section Function
	AnimatesSection();
	WindowOnLoad();
	ChangeSlide();

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

function WindowOnLoad() {

	window.onhashchange = function (e) {

		if (window.location.hash === "Web1") {

			$(".Slide(not:target)").addClass("hide");

		} else if (window.location.hash === "Web2") {

			$(".Slide(not:target)").addClass("hide");

		} else if (window.location.hash === "Web3") {

			$(".Slide(not:target)").addClass("hide");

		} else if (window.location.hash === "Web4") {

			$(".Slide(not:target)").addClass("hide");

		}
	};
}

var Start = 0;
var Slides = $(".SlideItem");
var SlideAmt = Slides.length;

function InitSlider() {

	var Slide = $(".SlideItem").eq(Start);
	Slides.hide();
	Slide.css("display", "block");

}

var AutoSlide = setInterval(function () {

	Start += 1;

	if (Start >= SlideAmt - 1) {
		Start = 0;

	}

	InitSlider();

}, 5000);

function ChangeSlide() {

	$("#prev").click(function () {
		clearInterval(AutoSlide);
		Start -= 1;

		if (Start < 0) {
			Start = SlideAmt - 1;
		}
		InitSlider();
	});

	$("#next").click(function () {
		clearInterval(AutoSlide);
		Start += 1;
		if (Start > SlideAmt - 1) {
			Start = 0;
		}
		InitSlider();
	});

}
