'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];

console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);

 
var firstDay=0;
var lastDay=0;
var finalPrice=0;
var commission=0; 
var insuranceCommission=0;
var assistanceCommission=0;
var drivyCommission=0;
var day;


function time(dateUser){
   var date = dateUser;
   var jour = date.substring(8,10);
   return jour;
}

//Exercice2
function Decreasing(i){
	if (day>1 && day<4){
			cars[i].pricePerDay=cars[i].pricePerDay - cars[i].pricePerDay*0.1;
			alert(rentals[i].driver.firstName+" you have had a decreases of 10%");
	} 
	else if (day>4 && day<10){
		cars[i].pricePerDay=cars[i].pricePerDay - cars[i].pricePerDay*0.3;
		alert(rentals[i].driver.firstName+" you have had a decreases of  30%");
	}
	else if (day>10){
		cars[i].pricePerDay=cars[i].pricePerDay*0.5;
		alert(rentals[i].driver.firstName+" you have had a decreases of  50%");
	}
}

// bool = true  if there is a modifcation on the km
function Price(i,bool){
	
		var priceDays=0;
		var priceDistance=0;
		
		priceDays= day*cars[i].pricePerDay;
		if (!bool){
		priceDistance= rentals[i].distance*cars[i].pricePerKm;
		}
		else if (bool){
		priceDistance= rentalModifications[i].distance*cars[i].pricePerKm;
		}
		finalPrice = priceDays+priceDistance;
		
}

//Exercice3
function Commission(i){
	


	commission=finalPrice*0.3;	
	insuranceCommission=commission/2;
	assistanceCommission=day;
	drivyCommission= commission-(insuranceCommission+assistanceCommission);
	
	rentals[i].commission.insurance= insuranceCommission;
	rentals[i].commission.assistance=assistanceCommission;
	rentals[i].commission.drivy=drivyCommission;
	
	//console.log(rentals[i].driver.firstName+"'s"+" insuranceCommission"+ "=" + insuranceCommission );
	//console.log(rentals[i].driver.firstName+"'s"+" assistanceCommission"+"=" +assistanceCommission);
	//console.log(rentals[i].driver.firstName+"'s"+" drivyCommission"+"=" +drivyCommission);
}

//Exercice4
function Deductible(i){
	if(rentals[i].options.deductibleReduction){
			finalPrice=finalPrice+(day*4);
			rentals[i].price=finalPrice;
	}
}

//Exercice5
function Payment(i){

	for (var j=0, l=actors[0].payment.length; j<l;j++){

		switch(j){
			case 0 : 
			actors[i].payment[j].amount=finalPrice;
			break;
		
			case 1 : 
			actors[i].payment[j].amount=finalPrice-commission;
			break;
		
			case 2 : 
			actors[i].payment[j].amount=insuranceCommission;
			break;
		
			case 3 : 
			actors[i].payment[j].amount=assistanceCommission;
			break;
		
			case 4 : 
			actors[i].payment[j].amount=drivyCommission;
			break;
		}	
	
	}
}

//Exercice6
	
function Modifications(){
	  
var oldFinalPrice= finalPrice;
var oldCommission= commission; 
var oldInsuranceCommission=insuranceCommission;
var oldAssistanceCommission=assistanceCommission;
var oldDrivyCommission=drivyCommission; 
var delta;
	  
	for (var k=0;k<rentalModifications.length;k++){
	  
		if (k==0){
			lastDay=time(rentalModifications[k].returnDate);
			firstDay=time(rentals[0].pickupDate);
			day=Math.abs(parseInt((firstDay-lastDay)))+1;
			Decreasing(0);
	  
			Price(0,true);
	  
			delta = oldFinalPrice-finalPrice;
			if (delta<0){
				finalPrice=finalPrice+delta; 
		  
			}
			else if (delta>0){
				finalPrice=finalPrice-delta; 
			}
			Deductible(0);
			Commission(0);
			Payment(0);
		}
		else{
			firstDay=time(rentalModifications[k].pickupDate);
			lastDay=time(rentals[2].returnDate);
			day=Math.abs(parseInt((firstDay-lastDay)))+1;
			Decreasing(2);
	  
			Price(2,false);
	  
			delta = oldFinalPrice-finalPrice;
			if (delta<0){
				finalPrice=finalPrice+delta; 
		  
			}
			else if (delta>0){
				finalPrice=finalPrice-delta; 
			}
			Deductible(2);
			Commission(2);
			Payment(2);
		}
	}
}


function myfunction(){
	
			
	for (var i=0, c=rentals.length; i<c;i++){
    
		firstDay=time(rentals[i].pickupDate);
		lastDay=time(rentals[i].returnDate);
		day=Math.abs(parseInt((firstDay-lastDay)))+1;
	
	// we are looking for if there are reductions
		Decreasing(i);	
	 // we calculate the price with the reductions 	
		Price(i,false);
	// if there are, we somme assurance's price  on final price 
		Deductible(i);
	//we calculate money for assurance, assistance and  assistanceCommission	
		Commission(i);
       
	   console.log(finalPrice);
	// we pay everybody 
		Payment(i);
	}

}

myfunction();

//Exercice6
//Modifications();


	

