var bodyParser = require('body-parser');
var validatorConfig = require('./libraries/validator');
var validator = require('express-validator');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(validator(validatorConfig));

req.checkBody('username', 'required').isAlpha();
req.checkBody('username', 'max_length|5').isAlpha();


-----------------------------

module.exports = {
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      // formParam += '[' + namespace.shift() + ']';
    }

    var form_validation = msg.split('|');
    var validation_name = form_validation[0]; 

    var msg = validation[validation_name];
    msg = msg.replace("{field}", formParam);

    if(form_validation[1]){
	    msg = msg.replace("{param}", form_validation[1]);
    }

    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
};



var validation = {};
validation.required				= '{field} field is required.';
validation.isset				= '{field} field must have a value.';
validation.valid_email			= '{field} field must contain a valid email address.';
validation.valid_emails			= '{field} field must contain all valid email addresses.';
validation.valid_url			= '{field} field must contain a valid URL.';
validation.valid_ip				= '{field} field must contain a valid IP.';
validation.min_length			= '{field} field must be at least {param} characters in length.';
validation.max_length			= '{field} field cannot exceed {param} characters in length.';
validation.exact_length			= '{field} field must be exactly {param} characters in length.';
validation.alpha				= '{field} field may only contain alphabetical characters.';
validation.alpha_numeric		= '{field} field may only contain alpha-numeric characters.';
validation.alpha_numeric_spaces	= '{field} field may only contain alpha-numeric characters and spaces.';
validation.alpha_dash			= '{field} field may only contain alpha-numeric characters, underscores, and dashes.';
validation.numeric				= '{field} field must contain only numbers.';
validation.is_numeric			= '{field} field must contain only numeric characters.';
validation.integer				= '{field} field must contain an integer.';
validation.regex_match			= '{field} field is not in the correct format.';
validation.matches				= '{field} field does not match the {param} field.';
validation.differs				= '{field} field must differ from the {param} field.';
validation.is_unique 			= '{field} field must contain a unique value.';
validation.is_natural			= '{field} field must only contain digits.';
validation.is_natural_no_zero	= '{field} field must only contain digits and must be greater than zero.';
validation.decimal				= '{field} field must contain a decimal number.';
validation.less_than			= '{field} field must contain a number less than {param}.';
validation.less_than_equal_to	= '{field} field must contain a number less than or equal to {param}.';
validation.greater_than			= '{field} field must contain a number greater than {param}.';
validation.greater_than_equal_to= '{field} field must contain a number greater than or equal to {param}.';
validation.error_message_not_set= 'Unable to access an error message corresponding to your field name {field}.';
validation.in_list				= '{field} field must be one of: {param}.';
