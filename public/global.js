 (function () {
    Modernizr.load([
    {
        test: Modernizr.input.required,
        nope: ['http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js', 'js/validate.js'],
        complete: function () {
            if (!Modernizr.input.required) {
            $('#form').validate();
            }
        } // complete
    }]);
})();

(function(){

    var cardReader = {
          "visa": /^4/,
          "mastercard": /^5[1-5]/,
          "amex": /^3[47]/,
          "discover":/^6/
      };

  function getCreditCardType() {

      var accountNumber = document.getElementById("card_number").value;

      function setCardStatus(cardString, checkedStatus) {
          document.getElementById(cardString).checked = checkedStatus;
      }

      for(var card in cardReader){
          setCardStatus(card, false);
          if(cardReader[card].test(accountNumber)){
            setCardStatus(card, true);
          }
      }
  }

  document.getElementById("card_number").addEventListener('keyup',getCreditCardType);

})(); // end anonymous function and call it