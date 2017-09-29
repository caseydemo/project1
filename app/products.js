// var Chocolate = document.getElementById('chocolate');
// var Vanilla = document.getElementById('vanilla');
// var Strawberry = document.getElementById('strawberry');
// var saltedCaramel = document.getElementById('salted-caramel');
// var pumpkinSpice = document.getElementById('pumpkin-spice');
// var Cup = document.getElementById('cup');
// var Cone = document.getElementById('cone');
// var hotFudge = document.getElementById('hot-fudge');
// var Marshmellows = document.getElementById('marshmellows');
// var rainbowSprinkles = document.getElementById('rainbow-sprinkles');

// var regularFlavorNames = document.getElementById('regular-flavor-names');
// var regularFlavorDescription = document.getElementById('regular-flavor-description');
var buttons = document.getElementsByClassName('button');
var visualSpacer = "-----";
var total = 0;

var products = {
  
  "Regular Flavors": [

    {
      "name": "Chocolate",
      "description": "Loved by kids of all ages!",
      "price": "2.00"
    },

    {
      "name": "Vanilla",
      "description": "Elegant and understated",
      "price": "2.00"
    },

    {
      "name": "Strawberry",
      "description": "A taste of summer...anytime!",
      "price": "2.00"
    }

  ],

  "Seasonal Flavors": [

    {
      "name": "Salted Caramel",
      "description": "Sweet and salty",
      "price": "3.00"
    },

    {
      "name": "Pumpkin Spice",
      "description": "Delightful any time of year, but especially now",
      "price": "3.00"
    }

  ],

  "Serving Options": [

    {
      "name": "Waffle Cone",
      "description": "Made fresh by hand in our store each day",
      "price": "1.25"
    },

    {
      "name": "Cup",
      "description": "Plenty of room for toppings",
      "price": "0.00"
    }

  ],

  "Toppings": [

    {
      "name": "Hot Fudge",
      "description": "Rich and chocolatey and just sweet enough",
      "price": "1.00"
    },

    {
      "name": "Marshmallows",
      "description": "Hand-made the old-fashioned way",
      "price": "1.50"
    },

    {
      "name": "Rainbow Sprinkles",
      "description": "Like a million tiny little smiles",
      "price": "0.75"
    }

  ]

};


// Regular Flavors

document.onreadystatechange = function() {

  // WHEN DOCUMENT IS LOADED AND INTERACTIVE - START YO STUFF
  if (document.readyState === "interactive") {
    
    // BUILD MENU 
    buildMenuRegular();
    buildMenuSeasonal();
    buildMenuToppings();
    buildMenuServingOptions();

    // ADD EVENT LISTENERS TO ALL BUTTONS
    for (i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", ButtonStuff);
    }
    
  };



//
// this function will handle button functionality
//
function ButtonStuff() {
  var buttonLabel = this.innerHTML;


  if (this.classList.contains('chocolate')) {
    
    document.getElementById("display").innerHTML +=
        "Chocolate";
    document.getElementById("total").innerHTML +=
        "$2.00"; 
        }

  else if(this.classList.contains('vanilla')){
    document.getElementById("display").innerHTML +=
        "Vanilla";
    document.getElementById("total").innerHTML +=
        "$2.00"; 
        }
  else if(this.classList.contains('strawberry')){
    document.getElementById("display").innerHTML +=
        "Strawberry";
    document.getElementById("total").innerHTML +=
        "$2.00"; 
        }

  else if(this.classList.contains('salted-caramel')){
    document.getElementById("display").innerHTML +=
        "Salted Caramel";
    document.getElementById("total").innerHTML +=
        "$3.00"; 
        }

   else if(this.classList.contains('pumpkin-spice')){
    document.getElementById("display").innerHTML +=
        "Pumpkin Spice";
    document.getElementById("total").innerHTML +=
        "$3.00"; 
        }

    else if(this.classList.contains('waffle-cone')){
    document.getElementById("display").innerHTML +=
        "Waffle Cone";
    document.getElementById("total").innerHTML +=
        "$1.25"; 
        }
    else if(this.classList.contains('hot-fudge')){
    document.getElementById("display").innerHTML +=
        "Hot Fudge";
    document.getElementById("total").innerHTML +=
        "$1.00"; 
        }
    else if(this.classList.contains('marshmellows')){
    document.getElementById("display").innerHTML +=
        "Marshmellows";
    document.getElementById("total").innerHTML +=
        "$1.50"; 
        }
    else if(this.classList.contains('rainbow-sprinkles')){
    document.getElementById("display").innerHTML +=
        "Rainbow Sprinkles";
    document.getElementById("total").innerHTML +=
        "$0.75"; 
        }
}


function calculate(){
  // this function will retrive whatevers in the class "total"  and display the total to the customer
  document.getElementById("total")
}


function buildMenuRegular(){

for(var i=0; i<3; i++){

 document.getElementById("regular-flavor").innerHTML += 
 (products['Regular Flavors'][i]['name']) + 
 " " + (products['Regular Flavors'][i]['description']) + 
 " $" + (products['Regular Flavors'][i]['price']);
  
  if((i+1)<3){
      document.getElementById("regular-flavor").innerHTML += visualSpacer;
      } 
   }
  }



function buildMenuSeasonal(){

for(var i=0; i<2; i++){

 document.getElementById("seasonal-flavor").innerHTML += 
 (products['Seasonal Flavors'][i]['name']) + 
 " " + (products['Seasonal Flavors'][i]['description']) + 
 " $" + (products['Seasonal Flavors'][i]['price']);
  if((i+1)<2){
    document.getElementById("seasonal-flavor").innerHTML += visualSpacer;
    } 
   }
  }


function buildMenuToppings(){

for(var i=0; i<3; i++){

 document.getElementById("toppings").innerHTML += 
 (products['Toppings'][i]['name']) + 
 " " + (products['Toppings'][i]['description']) + 
 " $" + (products['Toppings'][i]['price']);
      if((i+1)<3){
      document.getElementById("toppings").innerHTML += visualSpacer;
      } 
   }
  }


function buildMenuServingOptions(){

for(var i=0; i<2; i++){

 document.getElementById("serving-options").innerHTML += 
 (products['Serving Options'][i]['name']) + 
 " " + (products['Serving Options'][i]['description']) + 
 " $" + (products['Serving Options'][i]['price']);
  if((i+1)<2){
      document.getElementById("serving-options").innerHTML += visualSpacer;
      } 
   }
  }
}





// // Chocolate
// document.getElementById("chocolate").innerHTML += (products['Regular Flavors'][0]['name']) + " ";
// document.getElementById("chocolate").innerHTML += (products['Regular Flavors'][0]['description']) + " $";
// document.getElementById("chocolate").innerHTML +=  products['Regular Flavors'][0]['price'];




// // Vanilla
// document.getElementById("vanilla").innerHTML += (products['Regular Flavors'][1]['name']) + " ";
// document.getElementById("vanilla").innerHTML += (products['Regular Flavors'][1]['description']) + " $";
// document.getElementById("vanilla").innerHTML +=  products['Regular Flavors'][1]['price'];


// // Strawberry
// document.getElementById("strawberry").innerHTML += (products['Regular Flavors'][2]['name']) + " ";
// document.getElementById("strawberry").innerHTML += (products['Regular Flavors'][2]['description']) + " $";
// document.getElementById("strawberry").innerHTML +=  products['Regular Flavors'][2]['price'];


// // Seasonal Flavors

// // Salted Caramel
// document.getElementById("salted-caramel").innerHTML += (products['Seasonal Flavors'][0]['name']) + " ";
// document.getElementById("salted-caramel").innerHTML += (products['Seasonal Flavors'][0]['description']) + " $";
// document.getElementById("salted-caramel").innerHTML +=  products['Seasonal Flavors'][0]['price'];

// // Pumpkin Spice
// document.getElementById("pumpkin-spice").innerHTML += (products['Seasonal Flavors'][1]['name']) + " ";
// document.getElementById("pumpkin-spice").innerHTML += (products['Seasonal Flavors'][1]['description']) + " $";
// document.getElementById("pumpkin-spice").innerHTML +=  products['Seasonal Flavors'][1]['price'];


// // Serving Options

// // Cup
// document.getElementById("cup").innerHTML += (products['Serving Options'][0]['name']) + " ";
// document.getElementById("cup").innerHTML += (products['Serving Options'][0]['description']) + " $";
// document.getElementById("cup").innerHTML +=  products['Serving Options'][0]['price'];

// // Cone
// document.getElementById("cone").innerHTML += (products['Serving Options'][1]['name']) + " ";
// document.getElementById("cone").innerHTML += (products['Serving Options'][1]['description']) + " $";
// document.getElementById("cone").innerHTML +=  products['Serving Options'][1]['price'];



// // Toppings

// // Hot Fudge
// document.getElementById("hot-fudge").innerHTML += (products['Toppings'][0]['name']) + " ";
// document.getElementById("hot-fudge").innerHTML += (products['Toppings'][0]['description']) + " $";
// document.getElementById("hot-fudge").innerHTML +=  products['Toppings'][0]['price'];

// // Marshmellows
// document.getElementById("marshmellows").innerHTML += (products['Toppings'][1]['name']) + " ";
// document.getElementById("marshmellows").innerHTML += (products['Toppings'][1]['description']) + " $";
// document.getElementById("marshmellows").innerHTML +=  products['Toppings'][1]['price'];

// // Rainbow Sprinkles
// document.getElementById("rainbow-sprinkles").innerHTML += (products['Toppings'][2]['name']) + " ";
// document.getElementById("rainbow-sprinkles").innerHTML += (products['Toppings'][2]['description']) + " $";
// document.getElementById("rainbow-sprinkles").innerHTML +=  products['Toppings'][2]['price'];




