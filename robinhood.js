var Robinhood = require('robinhood')(credentials, function(){
 
    //Robinhood is connected and you may begin sending commands to the api.
 
    Robinhood.quote_data('GOOG', function(error, response, body) {
        if (error) {
            console.error(error);
            process.exit(1);
        }
        console.log(body);
    });
 
});