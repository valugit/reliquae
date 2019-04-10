	
// LOADER AND NAV ANIMATION
var loaderStart = document.querySelector('#loaderStart');
var start = document.querySelector("#start");

var loaderBlock = document.querySelector('#loaderBlock');
var logo = document.querySelector('#logo');

var dot = document.querySelector('#dot')
var eliquae = document.querySelector('#eliquae');
var interrogation = document.querySelector('#interrogation');

var bg = document.querySelector("#background");
var pop_up = document.querySelector("#pop_up");

var answer = document.querySelector("#ans");
var validate = document.querySelector("#validate");

//Don't start keyframes
loaderBlock.style.display = "none";
bg.style.display = "none";

start.addEventListener("click", () => {

	bg.style.display = "block";

	loaderBlock.style.display = "block";

	loaderStart.style.marginTop = "-2000px"
	
	// Dot
	setTimeout(function(){ 
	
		dot.style.opacity = 1;
	
	}, 2000);
	
	// eliquae
	setTimeout(function() {
	
		interrogation.style.left = "0%";
		eliquae.style.opacity = 1;
		eliquae.style.right = "3%";
		
	}, 3500)

	// Resize Header
	setTimeout(function(){
	
		loaderBlock.style.height = "80px";
		logo.style.width = "100px";
		logo.style.margin = "22px auto";

	}, 4500)

	
	
	// Pop-up
	setTimeout(function () {
	
		pop_up.style.display = "block";
		bg.style.transition = "2.5s";


    var text = document.querySelector(".text");

    var textCont = text.textContent;
    text.style.display = "none";

		setTimeout(function(){
			var wrapper = document.querySelector("#wrapper");

			for (var i = 0; i < textCont.length; i++) {

				(function(i) {

					setTimeout(function() {
						// Created textNode to append
						var texts = document.createTextNode(textCont[i])
						var span = document.createElement('span');
						
						span.appendChild(texts);
						wrapper.appendChild(span);
					}, 100 * i);

				}(i));
			}

		},500)
	},6000)
})

validate.addEventListener("click", () => {

	if(answer.value.toLowerCase() == "arc de triomphe" || answer.value.toLowerCase() == "l'arc de triomphe") {

		pop_up.style.transition = "0.25s";
		bg.style.filter = "blur(0)";

		setTimeout(() => {
			window.scrollTo({
			  	top: document.body.clientHeight,
			  	behavior: 'smooth'
			});
		},800)
	}
})

document.querySelector('#pass').addEventListener('click', () => {

	window.scrollTo({
	  	top: document.body.clientHeight,
	  	behavior: 'smooth'
	});

});

	 




 	
