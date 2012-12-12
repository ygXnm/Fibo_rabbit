var month = 0;
var number_of_pairs = 1;
var before_number_of_pairs = 0;


while(month < 24){
	number_of_pairs = number_of_pairs + before_number_of_pairs;
	month = month + 1;

	console.log("month: " + month);
	console.log("pairs: " + number_of_pairs);
	console.log("before: " + before_number_of_pairs);

}

//[user:tomoco] change the line 6
//time - 2012.04.03.tue