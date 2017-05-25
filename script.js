$(document).ready(function(){
	var counter = 0;
	var arrayTile = [];

	//add tile
	var addTile = function() {
		var tileX = "" + 
		"<div class='tile tileX' style='background-color:red'>" + "x" + "</div>";
		var tileO = "" +
		"<div class='tile tileO' style='background-color:blue'>" + "o" + "</div>";;
		console.log($(event.target).children().length);
		if ($(event.target).children().length == 0) {
			if (counter%2==0) {
				console.log("x moves" + " " + counter);
				$(event.target).append(tileX);
				$('.playerTurn').text("It is O's turn");
			} else {
				console.log("o moves" + " " + counter);
				$(event.target).append(tileO);
				$('.playerTurn').text("It is X's turn");
			}
			counter+=1;
		} else {
			alert("invalid move")
		}
		checkWin();
	};

	//check win
	var checkWin = function() {
		//if check win true print yay who won
		//else moves still possible
		//else draw
		for (var i = 0; i<3; i++) {
			for (var j = 0; j<3; j++) {
				var numCheck = j+i*3;
				console.log(numCheck);
				console.log($("td").find("[data-num='" + numCheck + "']").firstChild);
			}
		}
	}

	//listen to tiles
	$('.tic-tac').on('click', 'td', function(){
		if ($(event.target).hasClass('td') == true) {
			addTile();
		} else {
			alert("invalid");
		}
	});

	//listen to reset
	$('#reset').on('click', function(){
		console.log("remove working");
		$('.tile').remove();
	});

});