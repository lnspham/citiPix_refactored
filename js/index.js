$(document).ready(function(){

	//Prevent form submission
	event.preventDefault();

	//Define the variables
	var city = ["NYC", "SF", "LA", "ATX", "SYD"];

	for (i = 0; i < city.length; i++) { //Easy way to loop things. Way to keep doing things over and over again
	    //User make the selection provided by the <option>.  Iteration on the drop-down menu
	    $('select').append("<option>" + city[i]  + "</option>");  
	};


	//Capture user actions. Anonymous function
	$('select').change(function(){
	 	var optionSelect = $('select').val();//get user selection

	 	//if condition for the background images
		if (optionSelect == "NYC"){

			$('body').attr('class', "nyc");

		}else if (optionSelect == "SF") {

			$('body').attr('class', "sf");

		}else if (optionSelect == "LA"){

			$('body').attr('class', "la");

		}else if (optionSelect == "ATX"){

			$('body').attr('class', "austin");

		}else{

			$('body').attr('class', "sydney");

		}

	});


});


//array.forEach(function(elements, index){}0;

//if condition for the background images
// if (citySelected == "NYC"){

		// 	$('body').attr('class');

		//  }else if (citySelected  == "SF"){

		//  	$('body').addClass('sf');

		//  }else if (citySelected  == "LA"){

		//  	$('body').addClass('la');
		
		//  }else if (citySelected  == "ATX"){

		//  	$('body').addClass('austin');

		//  }else if (citySelected  == "SYD"){

		//  	$('body').addClass('sydney');

		//  }else{

		//  	$('body').addClass('citipix-skyline');
	//  }



