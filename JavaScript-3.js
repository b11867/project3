//alert("JavaScript works!");
var barleyBundle= {
        name: "Barley Bundle",
        stock: "100",
        harvested: true,
        }
    //end object
var hotAir = 160;
var hotWater = 100;
var dryTime = "36 hours";
var steepTime = "1 hour";
var hops = true
var spices = true
var yeast = ["ale yeast", "lager yeast"];
var gather = barleyBundle.stock
var grain = barleyBundle.name;

//function
var maltPrep = function (barleyBundle, gather){
    var malt;
    if (barleyBundle > gather) {
        malt = true
        ("There is enough" + grain + "to make malt.");
    } else {
        malt = false
        ("There is not enough " + grain + " to make malt.");
    } return malt
}
//end function
var gather = maltPrep();
