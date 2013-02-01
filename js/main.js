(function(){

    var cardReader = {
          "visa": /^4/,
          "mastercard": /^5[1-5]/,
          "amex": /^3[47]/,
          "discover":/^6/
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