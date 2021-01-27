function Calculate1 (event) {

	var alphabet = 
	["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	var woord = document.getElementById("name1").value;
	woord = woord.toLowerCase();
	var x = woord.length;
	var Sum1 = 0;

	for ( i = 0; i < x; i++) {
		function Check (abc) {
			return abc === woord.charAt(i);
		};

		var number1 = (alphabet.findIndex(Check)) + 1;

		Sum1 = Sum1 + number1;
	};

	document.getElementById("content1").innerHTML = "<h2>" +  Sum1 +  "</h2>";
};

function Calculate26 (event) {

	var alphabet = 
	["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	var woord = document.getElementById("name26").value;
	woord = woord.toLowerCase();
	var x = woord.length;
	var Sum26 = 0;

	for ( i = 0; i < x; i++) {
		function Check (abc) {
			return abc === woord.charAt(i);
		};

		var number26 = 26 - (alphabet.findIndex(Check));

		Sum26 = Sum26 + number26;
	};

	document.getElementById("content26").innerHTML = "<h2>" +  Sum26 +  "</h2>";
};
