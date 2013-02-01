(function(){

    var cardReader = {
          "visa": /^4/,
          "mastercard": /^5[1-5]/,
          "amex": /^3[47]/,
          "discover":/^6./
      }

  function getCreditCardType() {

      var accountNumber = document.getElementById("card_number").value;

      function setCardStatus(cardString, checkedStatus) {
          document.getElementById(cardString).checked = checkedStatus;
      }

      for(var card in cardReader){
          setCardStatus(card, false);
          if(cardReader[card].test(accountNumber)){
            setCardStatus(card, true)
          };
      }

  }

  document.getElementById("card_number").addEventListener('keyup',getCreditCardType);

})(); // end anonymous function and call it


// for each cardType in cardObject,
//   get element with cardType as ID and setAttribute unchecked <- a method with 2 arguments: cardtype and check/uncheck


// var cards = {

//     x: value1,
//     y: {key1: a,
//          key2: b
//        }
//     z: function(){}

// };

// cards.x <- value1
// cards.y <- {key1: a, key2: b}
// cards.y.key1 <- a
// cards.y.key2 <- b
// cards.z <- "function"
// cards.z() <- runs that function

// array = [a,b,c,d]
// object = {0:a, 1:b, 2:c, 3:d}

// array[0]
// object[0]

// console.log(for i in array return i) <- a,b,c,d
// console.log(for i in object return i) <- whatever the fuck order, but always all of them

// cardReader.[key].test(accountNum) <- tells you whether


// for each cardType in cardObject
//   get cardRegEx and test against accountNumber
//   if cardRegEx is a hit,
//     get element with cardtype as ID and setAttribute checked