//alert("JavaScript works!");

//by Matthew Darke
//SDI 1305
// project3

//Variables

var json2 = {      
	"Players": [ //Array, Not, FOR IN LOOP!! in this case we need a regular foorloop
	      {    //objects{} inside of arrays[] 
	            "number": "11",
	            "name": "Allison",
			    "age": 6,
			    "pieEatingRecord": 20,
			    "HotdogRecord": 30,
			    "PizzaRecord": 40,
			    "place": "1st"
			    	//no commas @end            
	     },
	     {
	            "number": "21",
	            "name": "Nick",
		 	    "age": 4,
		 	    "pieEatingRecord": 15,
		 	    "HotdogRecord": 25,
		 	    "PizzaRecord": 35,
		 	    "place": "2nd"	
		 },
		 {	
	            "number": "57",
	            "name": "Jessica",
		        "age": 31,
		        "pieEatingRecord": 10,
		   	    "HotdogRecord": 20,
		   	    "PizzaRecord": 30,
		   	    "place": "3rd"	
		 }//no comma @ end of curlybrace }
	]
};
	
var carnivalName = "Fall County Carnival";
var KidsName = "Allison";
var FoodLastYear = [30, 40, 50];
var StartStory = KidsName + "wants to go to the " + carnivalName + ". Last year she won three eating contests! ";
var going = true
var SheWins = true
var AsksDad = true
var DadgivesIn = true
// method procedure conditional 
function eatingcontest(going) {
     if (going === true) { 
	     console.log(" This year " + KidsName + " is going to give it another go at the " + carnivalName + " eating contest to try to beat her last years records.\n but she needs to ask Dad for her allowance to buy a ticket for each entry. ")
     } else { 
         console.log (" Darn, theres always next year for " + KidsName + " to try to beat her record. ")
       return going;
	 }
};	     
//nested conditionals;
function getsmoney() {
if (AsksDad === true) {
	console.log(KidsName + " asks her Dad, ");
	if (DadgivesIn === true) {
	   console.log(" And Gives him a big hug! ");
    } else { 
       console.log(KidsName + " pouts ");
    };
} else {     
	console.log(" too bad, she will have to wait till next year ");
	return asksDad;
	}
};

//number arg and math
var buyTickets = function(givenAllowance) {
	var PricePerTicket = 18,
	    wholeTickets;
	if (givenAllowance < PricePerTicket) {
	    console.log(" Dad did not give her enough to buy all three tickets!");
	    return 0;
  } else {
	    wholeTickets = Math.floor(givenAllowance / PricePerTicket);
        return wholeTickets;   
  }
};
var gotTickets = buyTickets(55);  //use console.log below at end main code
console.log(" Dad gave her enough to buy all " + gotTickets + " Tickets! ");

// string function// may need help with return?
function HerGoal() {
	var Champion = "Last years Champion";
	 var beatEachRecord =  "By five more each contest"; 
	    console.log( " being " + Champion + ", it's certant that " + KidsName + " is determined to beat her records " + beatEachRecord + ". Thats a streach!! ");
 return Champion, beatEachRecord;
 
 }; 
//
function countdown(){
	var Soc = 10;
		while (Soc > 0) {
			console.log(Soc + "seconds left on the clock");
			Soc--;
			};
			console.log("seconds on the clock.");
			console.log("Stop Eating!!");
	return Soc;
	}
// use below for for lloop// ?? Can this be a nested loop// did i just use an acssessor method?
var handleData = function (json) { //this is my accessor
	for (var i = 0; i < json.Players.length; i++) {
		var Player = json.Players[ i ]; // what ever else keys to get info from contestants
		console.log( "number:" + Player.number +  " ,name: " + Player.name + " ,age: " + Player.age + " ,pieEatingRecord: " + Player.pieEatingRecord); 
	return handleData; // 
	
	};
};
//Mutator accsessor
var EatingContests = {
		
		"name": "records",
		"pieEatingRecord": 20,
	    "HotdogRecord": 30,
		"PizzaRecord": 40, 
		"isChamp": true,
		"records": function() { // Method accessor 
			
			var totalate = this.pieEatingRecord;
			return totalate;			
	    },
		"setpieEatingRecord": function(newpieEatingRecord){  //mutator
			
			this.pieEatingRecord = newpieEatingRecord		
			
			}     
		    
		    
		    
		};
//nested loop  eating contest

var playerNames = [ "Allison", "Nick", "Jessica" ],
    PiesPerPlayer = [25, 20, 15];
var startOneplayer = function() {
var playerName = playerNames[playerNumber],
	    PiesThisPlayer = PiesPerPlayer[playerNumber];
    console.log(playerName + "starts the eating contest to try to shoot for a goal of " + PiesThisPlayer);
    for (var Pies = 0; Pies < PiesThisPlayer; Pies += 5){
	    var PiesRemain = PiesThisPlayer - Pies;
	    console.log(Pies + " devoured Hotdogs ", + PiesRemain + "to go!" );
	    
    }
console.log(playerName + "finishes")
	
};    
for (var playerNumber = 0; playerNumber < playerNames.length; playerNumber++){
	startOneplayer();
}










//}HotdogThisPlayer = HotdogPerPlayer[playerNumber],
  //  PizzaThisPlayer = PizzaPerPlayer[playerNumber];


//HotdogPerPlayer =[30, 25, 20],
 //   PizzaPerPlayer = [40, 35, 30];
		
//console.log(" totalate is " + EatingContests.records());
//EatingContests.setpieEatingRecord(25);	
//console.log(KidsName + " Has anew pie Eating Record with " + EatingContests.records());


//handleData(json2);












