//Defines the Current Slide
var currentSlide = 0;

//All of the Slides of the Slider
var slides = $(".Slide");

//Sets Timing Interval
setInterval(Slider, 5000);

//Slider Function
function Slider() {

	//Animates the Current Slide
	$(slides[currentSlide]).velocity({
		opacity: 0
	}, {
		duration: 1000
	});

	//Moves to the Next Slide
	currentSlide++;

	//Resets the Slider
	if (currentSlide >= slides.length) {

		//Sets the Current Slide to the Beginning
		currentSlide = 0;
	}

	//Animates the Next Slide Into the Slider
	$(slides[currentSlide]).velocity({
		opacity: 1
	}, {
		duration: 1000
	});
}
