# fantasy-name-generator

# How to use this package.

1. import module

```const FantasyName = require('fantasy-name/fantasy-name');```
        

2. instantiate instance of FantasyName class

```const fantasyName = new FantasyName();```

3. Invoke getName method to generate a name. Note that the length of the name is optional. It will default to somwhere between 3 and 6 but you can explicity enter a length as well.

```console.log(fantasy_name.getName(5)) // returns name```