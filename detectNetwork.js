// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  var first6 = parseInt(cardNumber.slice(0, 6))
  var first3 = parseInt(cardNumber.slice(0, 3))
  var first4 = parseInt(cardNumber.slice(0, 4))
  var first4str = parseInt(cardNumber.slice(0, 4))

  if(cardNumber.length === 14 && (cardNumber.slice(0, 2) === `38`||cardNumber.slice(0, 2) === `39`)){
    return `Diner\'s Club`
  }
  else if (cardNumber.length === 15 && (cardNumber.slice(0, 2) === `34`||cardNumber.slice(0, 2) === `37`)){
    return `American Express`
  }
  else if(cardNumber.length === 16  && (
            cardNumber.slice(0, 2) === `51`
          ||cardNumber.slice(0, 2) === `52` 
          ||cardNumber.slice(0, 2) === `53`
          ||cardNumber.slice(0, 2) === `54`
          ||cardNumber.slice(0, 2) === `55`
        )){
    return `MasterCard`
  }
  else if (
      (first4 === 4903 
      || first4 === 4905 
      || first4 === 4911 
      || first4 === 4936 
      || first6 === 564182 
      || first6 === 633110 
      || first4 === 6333 
      || first4 === 6759) 
      &&
      (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19)) {
      return `Switch`;
  }

  else if(cardNumber[0] === `4`){
    return `Visa`
  }

  else if(cardNumber.slice(0, 2) === `50` ||cardNumber.slice(0, 2) === `63` ){
    return `Maestro`
  }

  else if(cardNumber.slice(0, 2) === `60` ||cardNumber.slice(0, 2) === `64` ||cardNumber.slice(0, 2) === `65` ){
    return `Discover`
  }

  else if(
    ((first6 >= 622126 && first6 <= 622925) 
      || (first3 >= 624 && first3 <= 626)
      || (first4 >= 6282 && first4 <= 6288))
      &&
      (cardNumber.length >= 16 && cardNumber.length <= 19)){
        return `China UnionPay`
  }
}


  
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long

  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Visa always has a prefix of 4 and a length of 13, 16, or 19.
  
  // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  
  // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  
  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.

  // China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  
  // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.


