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
      this.mid = Match.ceil((this.high - this.low)/2);
      return this.mid;
    }

    lower() {
      this.high = this.mid;
    }

    greater() {
      this.low = this.mid;
    }
}

module.exports = GuessingGame;
