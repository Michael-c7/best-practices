// S - Single Responsibility Principle
import logMessage from "./logger.js";

/*
Not following the Single responsiablity principle because,
   1.tracks your calories
   2.Logs them
It should only be doing a single thing
*/
// class CalorieTracker {
//     constructor(maxCalories) {
//         this.maxCalories = maxCalories;
//         this.currentCalories = 0;
//     }

//     trackCalories(calorieCount) {
//         this.currentCalories += calorieCount;
//         if(this.currentCalories > this.maxCalories) {
//             this.logCalorieSurplus()
//         }
//     }

//     logCalorieSurplus() {
//         console.log("Max calories exceeded")
//     }
// }

// const calorieTracker = new CalorieTracker(2000)
// calorieTracker.trackCalories(500)
// calorieTracker.trackCalories(1000)
// calorieTracker.trackCalories(700)










/*
Follows Single Responsibility principle
becuase it has a single reason to change,
1. how you track your calories
*/
class CalorieTracker {
    constructor(maxCalories) {
        this.maxCalories = maxCalories;
        this.currentCalories = 0;
    }

    trackCalories(calorieCount) {
        this.currentCalories += calorieCount;
        if(this.currentCalories > this.maxCalories) {
            logMessage("Max calories exceeded!!!")
        }
    }
}



const calorieTracker = new CalorieTracker(2000)
calorieTracker.trackCalories(500)
calorieTracker.trackCalories(1000)
calorieTracker.trackCalories(700)