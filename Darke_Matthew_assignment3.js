//alert("JavaScript works!");

//by Matthew Darke
//SDI 1305
// project3

//Variables
var carnivalName = "Fall County Carnival";
var KidsName = "Allison";
var FoodLastYear = [20, 40, 50];
var StartStory = " Allison wants to go to the " + carnivalName + ". Last year she won three eating contests! ";
var askAllowance = true
var SheWins = true
// Procedure 
function eatingcontest(askAllowance) {
     if (askAllowance === true) { 
	     console.log(" This year " + KidsName + " is going to give it another go at the " + carnivalName + " to try to beat her last years records .\n but she needs to ask Dad for her allowance to buy a ticket for each entry. ")
     } else { 
         console.log (" Darn, theres always next year for " + KidsName + " to try to beat her record. ") 
	     }
};	     

//number arg and math
var buyTickets = function(givenAllowance) {
	var PricePerTicket = 18,
	    wholeTickets;
	if (givenAllowance < PricePerTicket) {
	    console.log("Thats not enough to buy all three tickets!");
	    return 0;
  } else {
	    wholeTickets = Math.floor(givenAllowance / PricePerTicket);
    } 
    return wholeTickets;
};
var gotTickets = buyTickets(54);
console.log("Thanks for giving me enough to buy" + gotTickets + "Tickets");














