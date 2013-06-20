////alert("JavaScript works!");
//global variables
var hotAir = 160;
var hotWater = 100;
var currentAir= 80;
var steepTime = 60;
var beerKey = "type";
var ingKey = "ingredients";
var maltKey = "malt";
var mashKey = "mash";
var fermentKey = "fermentTime";
var barleyStockKey = "inStock";
var barleyAmountKey = "amount";
//object 1
var lagerBeer = {
    type:"lager",
    ingredients:["barley", "water", "lager yeast", "hops"],
    malt:function (currentAir,hotAir) {
            var warmUp;
            while (currentAir <= hotAir) {
            warmUp = currentAir++;
            }  return warmUp;
    },
    mash: function (steepTime) {
            var wort;
            var countDown;
            while (steepTime >= 0) {
            countDown = steepTime--;
                if (steepTime === 0) {
                wort = "Wort";
                }
            } return wort;
    },
    fermentTime: 5,
    allReady: function (){
        console.log ("The lager is done, lets drink!");
    }
}
//end object

//object 2
var aleBeer = {

    type:"ale",
    ingredients:["barley", "water", "ale yeast", "hops"],
    malt:function (currentAir,hotAir) {
        var warmUp;
        while (currentAir <= hotAir) {
        warmUp = currentAir++;
        };
        return warmUp;
    },
    mash: function (steepTime) {
        var wort;
        var countDown;
        while (steepTime >= 0) {
        countDown = steepTime--;
            if (steepTime != countDown) {
            wort = "Wort";
            }
        }
        return wort;
    },
    fermentTime: 3,
    boil: function(hotWater){
        var startBoil;
        for (i = 0; i < hotWater; i++) {
            if (i === hotWater[i]) {
            startBoil = true;
            }
        }
       return startBoil;
    },
    allReady: function (){
    console.log ("The ale is done, lets drink!");
    }
} ;  
//end object

//begin object
var barleyBundle = {
    inStock: true,
    amount: 500
};
//end object

var lagerIngredients = lagerBeer.ingredients;
var aleIngredients = aleBeer.ingredients;
var aleIngredientsAmount = aleIngredients.length;
var lagerIngredientsAmount = lagerIngredients.length
var getLagerYeast = (lagerIngredients)[2];
var getAleYeast = (aleIngredients)[2];
var findAleYeast = function (aleIngredientsAmount) {
    var yeastType;
    for (i = 0; i != aleIngredientsAmount; i++) {
            if (i === 2) {
            yeastType = aleIngredients[i];
            }
        }; return yeastType;
    }
var findLagerYeast = function (lagerIngredientsAmount) {
    var yeastType;
    for (i = 0; i != lagerIngredientsAmount; i++) {
            if (i === 2) {
            yeastType = lagerIngredients[i];
            }
        }; return yeastType;
    }        
var aleYeastType = findAleYeast(aleIngredientsAmount);
var lagerYeastType = findLagerYeast(lagerIngredientsAmount);



//main code
//Accessors

//console.log (lagerYeastType);
//console.log (aleYeastType);
//console.log(aleIngredients);
//console.log(aleIngredientsAmount);
//console.log(lagerIngredientsAmount);
//console.log(getAleYeast);
//console.log(getLagerYeast);
//console.log(lagerBeer[beerKey]);
//console.log(lagerBeer[maltKey]);
//console.log(lagerBeer[mashKey]);
//console.log(aleBeer[beerKey]);
//console.log(aleBeer[ingKey]);
//console.log(aleBeer[fermentKey]);
//console.log(lagerBeer[fermentKey]);
//console.log(lagerBeer[ingKey]);
//console.log(aleBeer[mashKey]);
//console.log (lagerBeer.mash(steepTime));
//console.log(lagerBeer.malt(currentAir, hotAir));
//console.log(aleBeer.mash(steepTime));
//console.log(aleBeer.malt(currentAir, hotAir));
//lagerBeer["allReady"]();
//aleBeer["allReady"]();


console.log("There are 2 main beer types, " + lagerBeer[beerKey] + " and " + aleBeer[beerKey]+ ".");
console.log("There are " + lagerIngredientsAmount + " main ingredients," + lagerIngredients +".");
console.log("for both lagers and ale barley is heated to " + lagerBeer.malt(currentAir, hotAir) + " degrees.");
console.log("This is called malting, and the next step is to steep the malt in water above " + hotWater + " degrees for " + steepTime + " minutes.");
console.log("Once the malt is ready it is drained and the liquid drained is called " + lagerBeer.mash(steepTime));
console.log("The " + lagerBeer.mash(steepTime) + " is boiled for an hour.");
console.log("At this point the wort is cooled and fermented. For " + lagerBeer[beerKey] + " beers, the fermentation time is " + lagerBeer[fermentKey] + " weeks and " + getLagerYeast + " is added.");
console.log("For " + aleBeer[beerKey] + " the fermentation time is " + aleBeer[fermentKey] + " weeks and " + getAleYeast + " is added.");
console.log("At this point " );
lagerBeer["allReady"]();
console.log(" or ");
aleBeer["allReady"]();