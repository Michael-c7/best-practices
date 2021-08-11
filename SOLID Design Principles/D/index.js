// Dependency Inversion Principle

/*Did not have to change any store code
1.just need to create a new paymenet processer
2. wrap the api you want to use
3. pass it into the store(you wanna use)
*/
class Store {
    constructor(paymentProcessor) {
        this.paymentProcessor = paymentProcessor
    }

    purchaseBike(quantity) {
        this.paymentProcessor.pay(200 * quantity)
    }

    purchaseHelmet(quantity) {
        this.paymentProcessor.pay(15 * quantity)
    }
}


class StripePaymentProcessor {
    constructor(user) {
        this.stripe = new Stripe(user)
    }

    pay(amountInDollars) {
        this.stripe.makePayment(amountInDollars * 100)
    }
}

class PaypalPaymentProcessor {
    constructor(user) {
        this.user = user
        this.paypal = new Paypal()
    }

    pay(amountInDollars) {
        this.paypal.makePayment(this.user, amountInDollars)
    }
}


class Stripe {
    constructor(user) {
        this.user = user
    }

    makePayment(amountInCents) {
        console.log(`${this.user} made a payment of $${amountInCents / 100} w/ stripe`)
    }
}

class Paypal {
    makePayment(user, amountInDollars) {
        console.log(`${user} made a payment of $${amountInDollars} w/ paypal`)
    }
}


const store = new Store(new StripePaymentProcessor("john"))
store.purchaseBike(2)
store.purchaseHelmet(2)

console.log("")

const store1 = new Store(new PaypalPaymentProcessor("steve"))
store1.purchaseBike(2)
store1.purchaseHelmet(2)
