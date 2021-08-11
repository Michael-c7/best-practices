// the prototype pattern

var myCar = {
    name: "Ford Escort",

    drive: function () {
      console.log( "Weeee. I'm driving!" );
    },

    panic: function () {
      console.log( "Wait. How do you stop this thing?" );
    }
  };

  // Use Object.create to instantiate a new car
  var yourCar = Object.create( myCar );

  // Now we can see that one is a prototype of the other
  console.log( yourCar.name );






/*Differential inheritance where objects
are able to directly inherit from other objects.*/
// var vehicle = {
//     getModel: function () {
//       console.log( "The model of this vehicle is.." + this.model );
//     }
//   };

//   var car = Object.create(vehicle, {
//     "id": {
//       value: MY_GLOBAL.nextId(),
//       // writable:false, configurable:false by default
//       enumerable: true
//     },

//     "model": {
//       value: "Ford",
//       enumerable: true
//     }
//   });










 /*If we wish to implement the prototype pattern without
 directly using Object.create, we can simulate the pattern
 as per the above example as follows*/

/*Note: This alternative does not allow the user to define
read-only properties in the same manner
(as the vehiclePrototype may be altered if not careful).*/
 var vehiclePrototype = {
    init: function ( carModel ) {
      this.model = carModel;
    },

    getModel: function () {
      console.log( "The model of this vehicle is.." + this.model);
    }
  };


  function vehicle( model ) {
    function F() {};
    F.prototype = vehiclePrototype;

    var f = new F();

    f.init( model );
    return f;
  }

  var car = vehicle( "Ford Escort" );
  car.getModel();



/*A final alternative implementation of the
Prototype pattern could be the following:*/

/*One could reference this method from the vehicle function.
Note, however that vehicle here is emulating a constructor,
since the prototype pattern does not include any notion
of initialization beyond linking an object to a prototype.*/
var beget = (function () {
    function F() {}

    return function ( proto ) {
        F.prototype = proto;
        return new F();
    };
})();
