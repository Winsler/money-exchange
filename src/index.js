// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change

    if (currency <= 0) return {};
    if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};

    var coins = {
    	50: "H",
    	25: "Q",
    	10: "D",
    	5: "N",
    	1: "P",
    },
    nominals = [],
    change = {};

    for (key in coins) {
        nominals.push(key);
    }
    nominals.sort((a, b) => b - a);


 	for (let i = 0; i <= nominals.length; i++) {
 		if (currency <= 0) {
            break;
        }
 		const trunc = Math.trunc(currency / nominals[i]);
 		if (trunc) {
 			change[coins[nominals[i]]] = trunc;
 			currency -= trunc * nominals[i];
 		};
 	};

 	return change; 

};