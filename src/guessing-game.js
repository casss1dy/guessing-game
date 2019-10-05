class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.range = {
            min,
            max
        };
    }

    guess() {
        return this.candidat = Math.ceil((this.range.min + this.range.max)/2);
    }

    lower() {
        this.range.max = this.candidat;
    }

    greater() {
        this.range.min = this.candidat;
    }
}

module.exports = GuessingGame;
