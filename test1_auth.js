var credentials = require("./credentials.js");

var Robinhood = require('robinhood')(credentials, function(){
    console.log(Robinhood.auth_token());
        //      <authenticated alphanumeric token>
});