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
	 	var switchBg =$('body').attr('class');//add a class to the <body> tag

	 	//if condition for the background images
		if (optionSelect == "NYC"){

			$('body').attr('class', switchBg);

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



