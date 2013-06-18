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
                if (steepTime != countDown) {
                wort = "Wort";
                }
            } return wort;
        },
    fermentTime: 5
    
};
//end object

//object 2
var aleBeer = {

    type:"ale",
    ingredients:["barley", "water", "ale yeast", "hops"],
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
                if (steepTime != countDown) {
                wort = "Wort";
                }
            } return wort;
        },
    fermentTime: 3
    
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
            yeastType = aleIngredients[2];
            }
        }; return yeastType;
    }
var findLagerYeast = function (lagerIngredientsAmount) {
    var yeastType;
    for (i = 0; i != lagerIngredientsAmount; i++) {
            if (i === 2) {
            yeastType = lagerIngredients[2];
            }
        }; return yeastType;
    }        
var aleYeastType = findAleYeast(aleIngredientsAmount);
var lagerYeastType = findLagerYeast(lagerIngredientsAmount);

//main code
//Accessors
console.log (lagerYeastType);
console.log (aleYeastType);
console.log(aleIngredients);
console.log(aleIngredientsAmount);
console.log(lagerIngredientsAmount);
console.log(getAleYeast);
console.log(getLagerYeast);
console.log(lagerBeer[beerKey]);
console.log(lagerBeer[maltKey]);
console.log(lagerBeer[mashKey]);
console.log(aleBeer[beerKey]);
console.log(aleBeer[ingKey]);
console.log(aleBeer[fermentKey]);
console.log(lagerBeer[fermentKey]);
console.log(lagerBeer[ingKey]);
console.log(aleBeer[mashKey]);
console.log (lagerBeer.mash(steepTime));
console.log(lagerBeer.malt(currentAir, hotAir));
console.log(aleBeer.mash(steepTime));
console.log(aleBeer.malt(currentAir, hotAir));
