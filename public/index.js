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

// Exo 1 

function time(dateUser){
	
   var date = dateUser;
   var jour = date.substring(8,10);
   return jour;
}


function myfunction(){

	var firstDay;
	var lastDay;	
	var day;
	var priceDays=0;
	var priceDistance=0;
	var finalPrice=0;
	var commission; 
	var insuranceCommission;
	var assistanceCommission;
	var drivyCommission;
	
		
	// pricePerDayP306 = cars[0].pricePerDay;
	// pricePerDaySport =cars[1].pricePerDay; 
	// pricePerDayBoxster=cars[2].pricePerDay; 
	// pricePerKmP306=cars[0].pricePerKm;
	// pricePerKmSport=cars[1].pricePerKm;
	// pricePerKmBoxster=cars[2].pricePerKm;
	
		
	for (var i=0, c=rentals.length; i<c;i++){
    
	firstDay=time(rentals[i].pickupDate);
	lastDay=time(rentals[i].returnDate);
	day=Math.abs(parseInt((firstDay-lastDay)))+1;
	
	//Exercice2
	
	if (day>1 && day<4) {
		cars[i].pricePerDay=cars[i].pricePerDay - cars[i].pricePerDay*0.1;
		alert(rentals[i].driver.firstName+" you have had a decreases of 10%");
	}else if (day>4 && day<10) {
		cars[i].pricePerDay=cars[i].pricePerDay - cars[i].pricePerDay*0.3;
		alert(rentals[i].driver.firstName+" you have had a decreases of  30%");
	}
	else if (day>10) {
		cars[i].pricePerDay=cars[i].pricePerDay*0.5;
		alert(rentals[i].driver.firstName+" you have had a decreases of  50%");
	}
		
	
	priceDays= day*cars[i].pricePerDay;
	priceDistance= rentals[i].distance*cars[i].pricePerKm;
	finalPrice = priceDays+priceDistance;
	
	
	//Exercice4
	if(rentals[i].options.deductibleReduction){
		finalPrice=finalPrice+(day*4);
		rentals[i].price=finalPrice;
	}
	
	//Exercice3
	commission=finalPrice*0.3;
	
	insuranceCommission=commission/2;
	assistanceCommission=day;
	drivyCommission= commission-(insuranceCommission+assistanceCommission);
	
	//console.log(rentals[i].driver.firstName+"'s"+" insuranceCommission"+ "=" + insuranceCommission );
	//console.log(rentals[i].driver.firstName+"'s"+" assistanceCommission"+"=" +assistanceCommission);
	//console.log(rentals[i].driver.firstName+"'s"+" drivyCommission"+"=" +drivyCommission);
	
	rentals[i].commission.insurance= insuranceCommission;
	rentals[i].commission.assistance=assistanceCommission;
	rentals[i].commission.drivy=drivyCommission;
	

	console.log(finalPrice);
	
	//Exercice5
	
	
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
	
	
}

myfunction();


	

