$(document).ready(function(){

  jQuery.validator.setDefaults({
    onkeyup: false
  });

  function getCreditCardType() {

    var accountNumber = document.getElementById("card_number").value;

    console.log(accountNumber);

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


jQuery.validator.addMethod("password", function( value, element ) {
    var result = this.optional(element) || value.length >= 6 && /\d/.test(value) && /[a-z]/i.test(value);
    if (!result) {
      element.value = "";
      var validator = this;
      setTimeout(function() {
        validator.blockFocusCleanup = true;
        element.focus();
        validator.blockFocusCleanup = false;
      }, 1);
    }
    return result;
  }, "Your password must be at least 6 characters long and contain at least one number and one character.");

	$('#form').validate({
		rules: {
			card_number: {
				required: true,
        creditcard: true
			},
			security_code: {
				required: true,
        digits: true,
        minlength: 3,
        maxlength: 4
			},
			portfolio_title: {
				required: true,
			},
			portfolio_address: {
				required: true,
				minlength: 2
			},
			name: {
				required: true,
			},
			email: {
				required: true,
				email: true
			},
			password: {
        required: true,
        password: true
			},
      month: {
        required: true
      },
      year: {
        required: true
      }
		},
    messages: {
      portfolio_title: "Enter your portfolio title",
      portfolio_address: "Enter your portfolio address",
      name: "Enter your name",
      email: "Enter proper email",
      password: "Enter your password",
      security_code: "Enter your security code",
      card_number: "Enter your card number",
      month: "Enter month",
      year: "Enter year"
    }
	});
});