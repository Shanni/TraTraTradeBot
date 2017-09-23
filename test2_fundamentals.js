var credentials = require('./credentials.js');
var Robinhood = require('robinhood')(credentials, function(){
    Robinhood.fundamentals("SBPH", function(error, response, body){
        if(error){
            console.error(error);
        }else{
            console.log(body);
            //{                               // Example for SBPH
            //    average_volume: string,     // "14381.0215"
            //    description: string,        // "Spring Bank Pharmaceuticals, Inc. [...]"
            //    dividend_yield: string,     // "0.0000"
            //    high: string,               // "12.5300"
            //    high_52_weeks: string,      // "13.2500"
            //    instrument: string,         // "https://api.robinhood.com/instruments/42e07e3a-ca7a-4abc-8c23-de49cb657c62/"
            //    low: string,                // "11.8000"
            //    low_52_weeks: string,       // "7.6160"
            //    market_cap: string,         // "94799500.0000"
            //    open: string,               // "12.5300"
            //    pe_ratio: string,           // null (price/earnings ratio)
            //    volume: string              // "4119.0000"
            //}
        }
    })
});