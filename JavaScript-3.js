////alert("JavaScript works!");
var hotAir = 160;
var hotWater = 100;
var currentAir= 80;
var steepTime = 60;


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
            while (steepTime > -1) {
            countDown = steepTime--;
                if (steepTime === -1) {
                wort = "Wort";
                }
            } return wort;
        },
    fermentTime: 5
    
};

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
            while (steepTime > -1) {
            countDown = steepTime--;
                if (steepTime === -1) {
                wort = "Wort";
                }
            } return wort;
        },
    fermentTime: 3
    
};
var beerKey = "type";
var yeastKey = "ingredients";
var maltKey = "malt";
var mashKey = "mash";
var fermentKey = "fermentTime";
console.log(lagerBeer[beerKey]);
console.log(lagerBeer[maltKey]);
console.log(lagerBeer[mashKey]);
console.log(aleBeer[beerKey]);
console.log(aleBeer[yeastKey]);
console.log(aleBeer[fermentKey]);
console.log(lagerBeer[fermentKey]);
console.log(lagerBeer[yeastKey]);