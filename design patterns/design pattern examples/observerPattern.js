// the observer pattern
function Subject() {
    // array of observer functions
    this.observers = []
}


Subject.prototype = {
    /*subscribe function adds a observer function
    function to the array of observers*/
    // argument fn: an observer function
    subscribe:function(fn) {
        this.observers.push(fn);
    },
    /*unsubsribe function takes a
    observer function out of the observer list*/
    // argument fnToRemove: an observer function you want removed
    unsubscribe:function(fnToRemove) {
        this.observers = this.observers.filter(fn => {
            if(fn != fnToRemove)
                return fn;
        })
    },

    /*fire function will notify the observers(that are subscribed to the subject)
    that the subject has changed state*/
    fire:function() {
        // loop through all the observer function and call them
        this.observers.forEach(fn => [
            fn.call()
        ])
    }
}





const subject = new Subject();

function Observer1() {
    console.log("Observer 1 Firing")
}

function Observer2() {
    console.log("Observer 2 Firing")
}

// test
subject.subscribe(Observer1);
subject.fire()

console.log("-----------------")

subject.subscribe(Observer2);
subject.fire()

console.log("-----------------")

subject.unsubscribe(Observer1);
subject.fire()