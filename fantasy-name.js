class FantasyName {
    // initialize startup value holder via a constructor, since strings are serializable and have O(1) access when the index
    // is known, so making a string to be accessed like an array made sense here since I didn't need the memory bloat of an
    // an array since I am only accessing values by index and not manipulating data here.
    constructor() {
        this.vowels = "aeiou";
        this.consonants = "bcdfghjklmnpqrstvwxyz";
	// I decided to use an array here over string concatenation since arrays are more flexible (for future changes), and 
	// Array.join() seems to be a bit faster (from what I've read) than string concatenation when the client's browser is
	// one of the newest versions of Chrome using V8.
        this.new_name = [];
    }

    getName(len) {
	// reset the name so if you reset the name it doesn't just push on to the old name
        this.new_name = [];
	    
	// error handling for user input
        if (!len || typeof len !== 'number') {
            len = [3, 4, 5, 6][Math.floor(Math.random() * 4)];
        }
	
	// I do a for loop here since we need to create a word of a certain length, and I can do this in O(n) time.
        for (let i = 0; i < len + 1; i++) {
	    // The program's name were more sensible if the first letter was a consonant.
            if (i === 0) {
                this.new_name.push[
                    this.consonants[
                        Math.floor(Math.random() * this.consonants.length)
                    ]
                ];
	    // the secret sauce is assigning vowels where the index is perfectly divisible by 2 or 5, similar to the fizzbuzz
	    // challenge, only it checks for 3, 5 and 15.
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
