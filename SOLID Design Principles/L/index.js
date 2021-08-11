// Liskov Substitution Principle

/*
Does not follow Liskov Substitution Principle
*/
// class Rectangle {
//     constructor(width, height) {
//         this.width = width
//         this.height = height
//     }

//     setWidth(width) {
//         this.width = width
//     }

//     setHeight(height) {
//         this.height = height
//     }

//     area() {
//         return this.width * this.height
//     }
// }


// class Square extends Rectangle {
//     setWidth(width) {
//         this.width = width
//         this.height = width
//     }

//     setHeight(height) {
//         this.height = height
//         this.width = height
//     }
// }


// function increaseRectangleWidth(rectangle) {
//     rectangle.setWidth(rectangle.width + 1)
// }

// const rect1 = new Rectangle(10, 2);
// const sqr1 = new Square(5, 5);

// increaseRectangleWidth(rect1)
// increaseRectangleWidth(sqr1)

// console.log(rect1.area())
// console.log(sqr1.area())










/*
Does follow Liskov Substitution Principle
*/
// class Shape {
//     area() {
//         // code here
//     }
// }


// class Rectangle extends Shape {
//     constructor(width, height) {
//         this.width = width
//         this.height = height
//     }

//     setWidth(width) {
//         this.width = width
//     }

//     setHeight(height) {
//         this.height = height
//     }

//     area() {
//         return this.width * this.height
//     }
// }


// class Square extends Shape {
//     setWidth(width) {
//         this.width = width
//         this.height = width
//     }

//     setHeight(height) {
//         this.height = height
//         this.width = height
//     }
// }


// function increaseShapeWidth(rectangle) {
//     rectangle.setWidth(rectangle.width + 1)
// }

// const rect1 = new Rectangle(10, 2);
// const sqr1 = new Square(5, 5);

// increaseShapeWidth(rect1)
// increaseShapeWidth(sqr1)

// console.log(rect1.area())
// console.log(sqr1.area())




















/*
Example #2
*/
// class Bird {
//     fly() {
//         console.log("I can fly")
//     }
// }


// class Duck extends Bird {
//     quack() {
//         console.log("I can quack")
//     }
// }

// class Penguin extends Bird {
//     fly() {
//         throw new Error("cant fly")
//     }

//     swin() {
//         console.log("I can swim")
//     }
// }

// function makeBirdFly(bird) {
//     bird.fly()
// }
// // follows L rule
// const duck = new Duck()
// // doesnt follow L rule
// const penguin = new Penguin()

// makeBirdFly(duck)
// makeBirdFly(penguin)










class flyingBird {
    fly() {
        console.log("I can fly")
    }
}

class swimingBird {
    swin() {
        console.log("I can swim")
    }
}


class Duck extends flyingBird {
    quack() {
        console.log("I can quack")
    }
}

class Penguin extends swimingBird {
    swim() {
        console.log("I can swim")
    }
}

function makeflyingBirdFly(bird) {
    bird.fly()
}

function makeswimmingBirdSwim(bird) {
    bird.swim()
}

// follows L rule
const duck = new Duck()
// follows L rule
const penguin = new Penguin()

makeflyingBirdFly(duck)
makeswimmingBirdSwim(penguin)

/*
NOTE:
A duck can swim & fly,
cant inherit from 2 diffrent classes,
only 1 class

- would need to create a thrid class flyingSwimingBird,
wont wokr well when you have a lot of diffrent variation.

composition: adding in functionality instead of inheritiing functionality
- this is the solution to complex inheritence trees
*/