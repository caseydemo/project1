
var buttons = document.getElementsByClassName('button');
var visualSpacer = ")--------(";
var total = 0;
var comma = true;

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
          "1 scoop of Chocolate,";
      // document.getElementById("total").innerHTML +=
      //     "$2.00"; 
      total += 2;
      

          }

    else if(this.classList.contains('vanilla')){
      document.getElementById("display").innerHTML +=
          "1 scoop of Vanilla, ";
      // document.getElementById("total").innerHTML +=
      //     "$2.00"; 
      total += 2;
     
          }
    else if(this.classList.contains('strawberry')){
      document.getElementById("display").innerHTML +=
          "1 scoop of Strawberry, ";
      // document.getElementById("total").innerHTML +=
      //     "$2.00"; 
      total += 2;
      

          }

    else if(this.classList.contains('salted-caramel')){
      document.getElementById("display").innerHTML +=
          "1 scoop of Salted Caramel, ";
      // document.getElementById("total").innerHTML +=
      //     "$3.00";
      total += 3; 
      

          }

     else if(this.classList.contains('pumpkin-spice')){
      document.getElementById("display").innerHTML +=
          "1 scoop of Pumpkin Spice, ";
      // document.getElementById("total").innerHTML +=
      //     "$3.00"; 
      total += 3;
      

          }

      else if(this.classList.contains('waffle-cone')){
      document.getElementById("display").innerHTML +=
          "in a Waffle Cone";
      // document.getElementById("total").innerHTML +=
      //     "$1.25";
      total += 1.25; 
      

          }
      else if(this.classList.contains('hot-fudge')){
      document.getElementById("display").innerHTML +=
          "topped with Hot Fudge, ";
      // document.getElementById("total").innerHTML +=
      //     "$1.00";
      total += 1; 
      

          }
      else if(this.classList.contains('marshmellows')){
      document.getElementById("display").innerHTML +=
          "add some Marshmellows, ";
      // document.getElementById("total").innerHTML +=
      //     "$1.50";
      total += 1.5; 
      

          }
      else if(this.classList.contains('rainbow-sprinkles')){
      document.getElementById("display").innerHTML +=
          "add some Rainbow Sprinkles, ";
      // document.getElementById("total").innerHTML +=
      //     "$0.75";
      total += 0.75; 
      

          }

      else if(this.classList.contains('checkout')){
        calculate();
      }
      else if(this.classList.contains('clear-all')){
        clearAll();
      }
    
}


function calculate(){
  // this function will retrive whatevers in the class "total"  and display the total to the customer
  
  // document.getElementById("total").innerHTML("$"+total);
  alert("$"+total + " is your total. " + "Thank you!");
  clearAll();
}

function clearAll(){
  document.getElementById("display").innerHTML = '';
  document.getElementById("total").innerHTML = '';

}


function buildMenuRegular(){
// this function prints out the three regular flavors with their corresponding description and price
// there are three regular flavors (chocolate, vanilla and strawberry)
for(var i=0; i<3; i++){

 document.getElementById("regular-flavor").innerHTML += 
 (products['Regular Flavors'][i]['name']) + 
 " " + (products['Regular Flavors'][i]['description']) + 
 " $" + (products['Regular Flavors'][i]['price']);
  
  // help with readability 
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



