
var Car = function() {
  this.manufactured_date = Date.now();
};

var myDreamCar = function () {
    this.manufacturer = "Bavarian Motor Works (BMW)";
};

myDreamCar.prototype = new Car();
var builtCar1 = new Car();

var myFavModel = function () {
    this.model = "X5";
    this.horsepower = "480";
    this.seats = "6";
    this.type = "SUV"
}
myFavModel.prototype = new myDreamCar();
var builtCar2 = new myFavModel ();

var bmw1 = new myFavModel();
bmw1.plate_number = "GOZAGS";

var bmw2 = new myFavModel();
bmw2.plate_number = "4 SHO DO";

var bmw3 = new myFavModel ();
bmw3.plate_number = "REALLY"


 
var AnotherModel = function () {
  this.model = "i8"
}

AnotherModel.prototype = new myDreamCar ();
 var bmw4 = new AnotherModel ();
 bmw4.plate_number = "HIGH LO"
console.log(bmw1, bmw2, bmw3, bmw4);

