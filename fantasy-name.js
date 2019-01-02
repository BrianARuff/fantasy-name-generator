class FantasyName {
    // initialize startup value holder via a constructor, since strings are serializable and have O(1) access when the index
    // is known, so making a string to be accessed like an array made sense here.
    constructor() {
        this.vowels = "aeiou";
        this.consonants = "bcdfghjklmnpqrstvwxyz";
	// I decided to use an array here over string concatenation since arrays are more flexible (for future changes), and 
	// Array.join() seems to be a bit faster (from what I've read) than string concatenation when the client's browser is
	// one of the newest versions of Chrome using V8.
        this.new_name = [];
    }
    

    clearName() {
        this.new_name = [];
    }

    getName(len) {
        this.clearName();
        if (typeof len !== 'number') {
			throw new Error("Input must be a number")
        }
        if (!len) {
            len = [3, 4, 5, 6][Math.floor(Math.random() * 4)];
        }
        for (let i = 0; i < len + 1; i++) {
            if (i === 0) {
                this.new_name.push[
                    this.consonants[
                        Math.floor(Math.random() * this.consonants.length)
                    ]
                ];
            } else if (i % 2 === 0 || i % 5 === 0) {
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
}

module.exports = FantasyName;
