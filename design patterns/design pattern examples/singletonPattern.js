class FancyLogger {
  constructor() {
    if(FancyLogger.instance == null) {
      this.logs = []
      FancyLogger.instance = this
    }
    /* return the single instance from the
    constructor instead of a bunch of diffrent instancees*/
    return FancyLogger.instance
  }

  log(message) {
    this.logs.push(message)
    console.log(`FANCY:  ${message}`)
  }

  printLogCount() {
    console.log(`${this.logs.length} Logs`)
  }
}

const logger = new FancyLogger();
// prevent the object from being changed in any wau
Object.freeze(logger)


// firstUse
function logFirstImplimentation() {
  logger.printLogCount()
  logger.log("First File")
  logger.printLogCount()
}





// secondUse
function logSecondImplimentation() {
  /* calling from the one instance,
  this is why 1 logs is in the console twice
  its beeing calling in the firstUse & secondUse*/
  logger.printLogCount()
  logger.log("second File")
  logger.printLogCount()
}





// run
logFirstImplimentation()
logSecondImplimentation()