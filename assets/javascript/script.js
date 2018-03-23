$('document').ready(function() {

	var animalsArray = [];

	$('[name="searchText"]').on("click", function() {

		$('[name="searchText"]').val('');

	})

	function getGifs() {
		var animal = $(this).attr("data-name");
		var queryURL = "https://api.giphy.com/v1/gifs/trending?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10"

		.ajax({
			url: queryURL,
			method: "GET"
		}).then(function(response) {

			var animalGifs = response.data;

			for (let a = 0; 0 < response.length; a++) {

				var gifDiv = $("<img>");
				gifDiv.attr("src", animalGifs[i].images.fixed_height_still.url);

				$("#gifGallery").prepend(gifDiv);
			}
		})
	}

	$("#animalSearch").on("click", function(event) {

		event.preventDefault();

		var animailInput = $("#userInput").val().trim();

		animalsArray.push(animailInput);

		console.log(animalsArray)
		
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

	// addButton();



});



//when submit button is pressed, add button with the submitted value. (movie app activity)

//when added button is pressed, display 10 gifs of the value of button

//when gif is pressed, begin playing, when pressed again, stop.

