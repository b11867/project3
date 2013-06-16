//alert("JavaScript works!");
var barleyBundle = {
        name: "Barley Bundle",
        stock: "100",
        harvested: true,
        };
    //end object
var hotAir = 160;
var hotWater = 100;
var currentAir= 80;
var dryTime = "36 hours";
var steepTime = "1 hour";
var hops = true
var spices = true
var yeast = ["ale yeast", "lager yeast"];
var barleyStock = barleyBundle.stock;
var grain = barleyBundle.name;

//function
var maltPrep = function (barleyStock) {
    var malt;
    if (barleyStock > 50) {
        ("There is enough" + grain + "to make malt.")
        malt = true
    } else {
        ("There is not enough " + grain + " to make malt.")
        malt = false
    }; return malt
}
//end function

//new function start
var dry = function (c,h) {
    var dryBarley;
    var warmUp;
    while (c < h) {
       warmUp = c++;
        dryBarley = ("The air temperature is " + warmUp + " degrees");
    }  return dryBarley;
}

var gather = maltPrep(barleyStock);
console.log (gather);
var drying = dry(currentAir,hotAir);
console.log (drying);

