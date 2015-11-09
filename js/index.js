$(document).ready(function(){

//Prevent form submission
event.preventDefault();

//Define the variables
var city = ["NYC", "SF", "LA", "ATX", "SYD"];

for (i = 0; i < city.length; i++) { //Easy way to loop things. Way to keep doing things over and over again
    //User make the selection provided by the <option>.  Iteration on the drop-down menu
    $('select').append("<option>" + city[i]  + "</option>");  
};


//Capture user actions
$('select').change(function(){
 	var optionSelect = $('select').val();//get user selection
 	var citySelected = optionSelect.toLowerCase();//change to lower case

 	//if condition for the background images
 	//addbg =$('this').attr('class')
 	//check the light switch examples.

 	if (citySelected == "NYC"){

			$('body').addClass('nyc');

		 }else if (citySelected  == "SF"){

		 	$('body').addClass('sf');

		 }else if (citySelected  == "LA"){

		 	$('body').addClass('la');
		
		 }else if (citySelected  == "ATX"){

		 	$('body').addClass('austin');

		 }else if (citySelected  == "SYD"){

		 	$('body').addClass('sydney');

		 }else{

		 	$('body').addClass('citipix-skyline');
		 }
});


});


//array.forEach(function(elements, index){}0;
