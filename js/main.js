(function(){
  function getCreditCardType() {

    var accountNumber = document.getElementById("card_number").value;

    if (/^5[1-5]/.test(accountNumber)) {
      document.getElementById("mastercard").setAttribute("checked");
    }

    else if (/^4/.test(accountNumber)) {
      document.getElementById("visa").setAttribute("checked");
    }

    else if (/^3[47]/.test(accountNumber)) {

      document.getElementById("amex").setAttribute("checked");
    }

     else if (/^6/.test(accountNumber)) {

      document.getElementById("discover").setAttribute("checked");
    }
  }

  document.getElementById("card_number").addEventListener('keyup',getCreditCardType);

  Modernizr.load([
    {
      test: Modernizr.input.required,
      nope: ['http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js', 'js/validate.js'],
      complete: function () {

       $.validator.setDefaults({
          // onkeyup: false
        });

  	   $('#form').validate();
      } // complete
  }]); //.load
})(); // end anonymous function and call it