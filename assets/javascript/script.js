$('document').ready(function() {

	var animalsArray = [];

	$('[name="searchText"]').on("click", function() {

		$('[name="searchText"]').val('');

	})

	function getGifs() {
		var animal = $(this).attr("data-name");
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10"

		$.ajax({
			url: queryURL,
			method: "GET"
		}).then(function(response) {

			$("#gifGallery").empty();

			var animalGifs = response.data;

			for (let a = 0; 0 < animalGifs.length; a++) {

				var gifDiv = $("<div>")

				var p = $("<p>").text("Rating " + animalGifs[a].rating.toUpperCase());

				var gif = $("<img>");

				gif.addClass("createdGif");

				gif.attr("src", animalGifs[a].images.fixed_height_still.url);

				gif.attr("stillImg", animalGifs[a].images.fixed_height_still.url);

				gif.attr("data-class", "still")

				gif.attr("animateImg", animalGifs[a].images.fixed_height.url);

				gifDiv.append(p);
				gifDiv.append(gif);

				$("#gifGallery").append(gifDiv);
			}
		})
	}

	$("#animalSearch").on("click", function(event) {

		event.preventDefault();

		var animailInput = $("#userInput").val().trim();

		animalsArray.push(animailInput);
		
		addButton();

		$("#userInput").val('Search')
	});

	function addButton() {

		$("#addedButtons").empty();

		for (let i = 0; i < animalsArray.length; i++) {
			var x = $("<button>");
			x.addClass("animalButton");
			x.attr("data-name", animalsArray[i]);
			x.text(animalsArray[i]);

			$("#addedButtons").append(x);
		}

	}



	$(document).on("click", ".animalButton", getGifs);

	$(document).on("click", ".createdGif", function() {

		var gifClass = $(this).attr("data-class");

		if (gifClass === "still") {

			$(this).attr("src", $(this).attr("animateImg"));
			$(this).attr("data-class", "animate");

		} else {

			$(this).attr("src", $(this).attr("stillImg"));
			$(this).attr("data-class", "still")
		}
	})


});



//when submit button is pressed, add button with the submitted value. (movie app activity)

//when added button is pressed, display 10 gifs of the value of button

//when gif is pressed, begin playing, when pressed again, stop.

