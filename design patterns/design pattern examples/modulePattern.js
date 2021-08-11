var testModule = (function () {
    /*counter variable is actually fully shielded
    from our global scope so it acts just like
    a private variable would*/
    var counter = 0;

    return {

      incrementCounter: function () {
          console.log(counter)
        return counter++;
      },

      resetCounter: function () {
        console.log( "counter value prior to reset: " + counter );
        counter = 0;
      }

    };

  })();

  // Usage:

  // Increment our counter
  testModule.incrementCounter();

  // Check the counter value and reset
  // Outputs: counter value prior to reset: 1
  testModule.resetCounter();










// shopping basket implemented using this pattern
  var basketModule = (function () {

  // privates

  var basket = [];

  function doSomethingPrivate() {
    //...
  }

  function doSomethingElsePrivate() {
    //...
  }

  // Return an object exposed to the public
  return {

    // Add items to our basket
    addItem: function( values ) {
      basket.push(values);
    },

    // Get the count of items in the basket
    getItemCount: function () {
      return basket.length;
    },

    getBasketItems: function() {
        return basket;
    },

    // Public alias to a private function
    doSomething: doSomethingPrivate,

    // Get the total value of items in the basket
    getTotal: function () {

      var q = this.getItemCount(),
          p = 0;

      while (q--) {
        p += basket[q].price;
      }

      return p;
    }
  };
})();




// basketModule returns an object with a public API we can use
basketModule.addItem({
  item: "bread",
  price: 0.5
});

basketModule.addItem({
  item: "butter",
  price: 0.3
});

// Outputs: 2
console.log( basketModule.getItemCount() );

// Outputs: 0.8
console.log( basketModule.getTotal() );

//bread, butter
console.log( basketModule.getBasketItems() )

// However, the following will not work:

// Outputs: undefined
// This is because the basket itself is not exposed as a part of our
// public API
// console.log( basketModule.basket );

// This also won't work as it only exists within the scope of our
// basketModule closure, but not in the returned public object
// console.log( basket );
