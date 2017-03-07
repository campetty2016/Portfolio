//Ready Function that Waits for When the Page is Ready
$(document).ready(function () {

	//Calls the Animate Section Function
	AnimatesSection();
	ChangeSlide();
	Submit();

});

var Slides = $(".SlideItem");
var FirstSlide = Slides.first();

window.onload = (function () {

	$("body").css("overflow", "auto");
	$(".Loader").delay(2000).fadeOut("slow");
	$("#HomeSection").delay(4000).fadeIn(3000);
	FirstSlide.siblings().hide();
	FirstSlide.fadeIn(1000);
});

function EmailValid(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	//Returns the Result of the Test
	return re.test(email);
}

//Animate Section Function that Animates the Page to Scroll Once a Link is Clicked
function AnimatesSection() {

	//Assigns a Click Handler to the Links within the Navigation
	$("nav a").click(function (e) {

		e.preventDefault();

		$("nav a").removeClass("Active");
		$(this).addClass("Active");

		//Declares the Variable ViewID By Assigning the ID of the Link Clicked and Appending the Word View at the End
		var SectionID = this.hash + "Section";
		var HeaderHeight = $("header").height();

		//Animates All of HTML and Body to Animate and Scroll to the Corresponding Link IDs Clicked
		$("html, body").animate({

			//Allows the Page to Automatically Scroll to a LinkID Once Clicked Through Appending a # to the ViewID
			scrollTop: $(this.hash + "Section").offset().top

		}, 1000);

		if ($(window).scrollTop() > 60 && $(window).width() < 900) {
			$("header").css("transform", "translateY(-50px)");
			//alert($(window).height());
		} else {
			$("header").css("transform", "translateY(0px)");
		}
	});

	$(window).scroll(function (e) {

		var Scroll = $(this).scrollTop();

		if (Scroll > 60 && $(window).width() < 900) {
			$("header").css("transform", "translateY(-50px)");
			//alert($(window).height() < 600);

		} else {
			$("header").css("transform", "translateY(0px)");
		}
	});
}

var Start = 0;
var SlideAmt = Slides.length;

function InitSlider() {

	var Slide = $(".SlideItem").eq(Start);
	Slides.hide();
	Slide.fadeIn(1000);
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
