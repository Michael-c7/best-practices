// O - Open/Closed Principle


/*
Does not follow Open/Closed Principle
*/
// function printQuiz(questions) {
//     questions.forEach(question => {
//         console.log(question.description)
//         switch (question.type) {
//             case "boolean":
//                 console.log("1. true")
//                 console.log("2. false")
//                 break
//             case "multipleChoice":
//                 question.options.forEach((option, index) => {
//                     console.log(`${index + 1}. ${option}`)
//                 })
//                 break
//             case "text":
//                 console.log("Answer:________________")
//                 break

//             case "range":
//                 console.log("Min: _____")
//                 console.log("Max: _____")
//                 break
//         }
//         console.log("")
//     })
// }

// const questions = [
//     {
//         type:"boolean",
//         description: "this example is useful."
//     },
//     {
//         type:"multipleChoice",
//         description: "whats your favorite language?",
//         options:["CSS", "JS", "HTML", "Python"]
//     },
//     {
//         type:"text",
//         description: "describe your favorite JS feature."
//     },

//     {
//         type:"range",
//         description: "what is the speed limit in your city?"
//     },
// ]

// printQuiz(questions)










/*
Does follow Open/Closed Principle
*/

class BooleanQuestion {
    constructor(description) {
        this.description = description
    }

    printQuestionChoices() {
        console.log("1. true")
        console.log("2. false")
    }
}

class MultipleChoiceQuestions {
    constructor(description, options) {
        this.description = description;
        this.options = options;
    }

    printQuestionChoices() {
        this.options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`)
        })
    }
}


class TextQuestion {
    constructor(description) {
        this.description = description
    }

    printQuestionChoices() {
        console.log("Answer: ____________")
    }
}

class RangeQuestion {
    constructor(description) {
        this.description = description
    }

    printQuestionChoices() {
        console.log("Min: _____")
        console.log("Max: _____")
    }
}


function printQuiz(questions) {
    questions.forEach(question => {
        console.log(question.description)
        question.printQuestionChoices()
        console.log("")
    })
}


const questions = [
    new BooleanQuestion("this example is useful."),
    new MultipleChoiceQuestions(
        "whats your favorite language?",
        ["CSS", "JS", "HTML", "Python"]
    ),
    new TextQuestion("describe your favorite JS feature."),
    new RangeQuestion("what is the speed limit in your city?")
]

printQuiz(questions)