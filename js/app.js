window.onload = (function () {
	$(".Loader").delay(4000).fadeOut("slow");
});

//Ready Function that Waits for When the Page is Ready
$(document).ready(function () {

	//Calls the Animate Section Function
	AnimatesSection();
	WindowOnLoad();
	ChangeSlide();
	Submit();

});

function EmailValid( email ) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	//Returns the Result of the Test
	return re.test( email );
}

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
		
		$("nav a").removeClass("Active");
		$(this).addClass("Active");
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

	if (Start > SlideAmt - 1) {
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

function Submit() {

	$("#submit").click(function (e) {

		var submit = false;
		var Name = $("#name").val();
		var Email = $("#email").val();
		var Message = $("#message").val();

		if (Name === "" | Email === "" | Message === "") {

			submit = false;
			swal({
				title: 'Error',
				text: 'Please fill out all the inputs. Thank you.',
				timer: 5000,
				showConfirmButton: false
			});
			e.preventDefault();
			
		} else if (EmailValid(Email) === false) {
			
			e.preventDefault();

			submit = false;
			swal({
				title: 'Error',
				text: 'Please enter a valid email. Thank you.',
				timer: 5000,
				showConfirmButton: false
			});

		} else {

			submit = true;
			swal({
				title: 'Message Recieved',
				text: 'Thank you for contacting me',
				timer: 5000,
				showConfirmButton: false
			});
		}
	});
}
