
 var json = {
	 "Players": {
		 "1121": {
			 "name": "Allison",
			  "age": 6,
			  "pieEatingRecord": 20,
			  "HotdogRecord": 30,
			  "PizzaRecord": 40,
			  "place": "1st"
		},
		"0721": {
		 	"name": "Nick",
		 	"age": 4,
		 	"pieEatingRecord": 15,
		 	 "HotdogRecord": 25,
		 	  "PizzaRecord": 35,
		 	  "place": "2nd"		 
	    }, 
	    "0507": {
		   "name": "Jessica",
		   "age": 31,
		   "pieEatingRecord": 10,
		   	"HotdogRecord": 20,
		   	 "PizzaRecord": 30,
		   	 "place": "3rd"
		   	   
		   	   
		  	 }
	 }
 };

//below is [key]// for (var key in jason.contestants)// that accesses the info on all contestants//
//FOR IN LOOP
for (var key in json.contestants) {// this is for in loop
	var contestant = json.contestants[1121];
	contestant.age 
	 //spacific details about contestants//	
//contestants.name// gives "name" key ect. ect.//


// below allows you to spacifically choose order of data//
var json2 = {      
	"Players": [ //Array, Not FOR IN LOOP!! in this case we need a regular foorloop
	      {    //objects{} inside of arrays[] 
	            "Number": "1121",
	            "name": "Allison",
			    "age": 6,
			    "pieEatingRecord": 20,
			    "HotdogRecord": 30,
			    "PizzaRecord": 40,
			    "place": "1st",
			    "Goal": "add 5 to all records"	//no commas @end            
	     },
	     {
	            "Number": "0721",
	            "name": "Nick",
		 	    "age": 4,
		 	    "pieEatingRecord": 15,
		 	    "HotdogRecord": 25,
		 	    "PizzaRecord": 35,
		 	    "place": "2nd"	
		 },
		 {	
	            "Number": "0507",
	            "name": "Jessica",
		        "age": 31,
		        "pieEatingRecord": 10,
		   	    "HotdogRecord": 20,
		   	    "PizzaRecord": 30,
		   	    "place": "3rd"	
		 }//no comma @ end of curlybrace }
	]
}
	
};	