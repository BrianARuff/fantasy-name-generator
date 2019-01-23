# fantasy-name package

# How to use this package.

1. import module

```const FantasyName = require('fantasy-name/fantasy-name');```
or
``` import FantasyName from 'fantasy-name/fantasy-name');```
        

2. instantiate instance of FantasyName class

```const fantasyName = new FantasyName();```

3. Invoke getName method to generate a name. If you don't provide a length the input will default to either 3, 4 or 5 characters in length, and if you don't provide a value of type `number` then it will also default to 3, 4, or 5 in length.

```console.log(fantasyName.getName(5)) // returns name```


Thanks for checking out my app.
