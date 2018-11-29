class FantasyName {
    constructor() {
        this.vowels = "aeiou";
        this.consonants = "bcdfghjklmnpqrstvwxyz";
        this.new_name = [];
    }

    gen_name(len) {
        for (let i = 0; i < len + 1; i++) {
            if (i === 0) {
                this.new_name.push[this.consonants[Math.floor(Math.random() * this.consonants.length)]];
            }
            else if (i % 2 === 0 || i % 5 === 0) {
                this.new_name.push(
                    this.vowels[Math.floor(Math.random() * this.vowels.length)]
                );
            } else {
                this.new_name.push(
                    this.consonants[
                        Math.floor(Math.random() * this.consonants.length)
                    ]
                );
            }
        }
        return this.new_name.join("");
    }

    print() {
        console.log(this.new_name.join(""));
    }
}

exports.printMsg = function() {
    console.log("Thanks for using Fantasy Name Generator");
};
