$(document).ready(function(){

	$('#form').validate({
		rules: {
			card_number: {
				required: true
			},
			security_code: {
				required: true
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