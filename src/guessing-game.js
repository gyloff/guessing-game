class GuessingGame {
    constructor() {
      this.low;
      this.high;
      this.mid;
    }

    setRange(min, max) {
        this.low = min;
        this.high = max;
    }

    guess() {
     
      return Match.ceil((this.high - this.low)/2);;
    }

    lower() {
      this.high = this.mid;
    }

    greater() {
      this.low = this.mid;
    }
}

module.exports = GuessingGame;
