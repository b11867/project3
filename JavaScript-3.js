////alert("JavaScript works!");
//global variables
var hotAir = 160;
var hotWater = 100;
var currentAir= 80;
var steepTime = 60;
var beerKey = "type";
var yeastKey = "ingredients";
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
var getLagerYeast = (lagerIngredients)[2];
var getAleYeast = (aleIngredients)[2];

//main code
console.log(getAleYeast);
console.log(getLagerYeast);
console.log(lagerBeer[beerKey]);
console.log(lagerBeer[maltKey]);
console.log(lagerBeer[mashKey]);
console.log(aleBeer[beerKey]);
console.log(aleBeer[yeastKey]);
console.log(aleBeer[fermentKey]);
console.log(lagerBeer[fermentKey]);
console.log(lagerBeer[yeastKey]);
console.log(aleBeer[mashKey]);
console.log (lagerBeer.mash(steepTime));
console.log(lagerBeer.malt(currentAir, hotAir));
console.log(aleBeer.mash(steepTime));
console.log(aleBeer.malt(currentAir, hotAir));
