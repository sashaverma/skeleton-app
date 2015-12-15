var async = require('async');
var _ = require("underscore");
var request = require('request');

var mongoApiStr = 'https://api.mongolab.com/api/1/databases/frontend-interviews/collections?apiKey=226QZJj-kLrsBrjMLua28OUUoMFcrKhW';

exports.hello_world = function(req, resp) {
  resp.json( {str: "hello world"} );
};

exports.mongo_rest = function(req, resp){
    request(mongoApiStr, function(error, response, body){
        if(error){
            console.log("Error: "+ error);
        }
        console.log(body);
        resp.json(body);
    });
};
/*
function request_to_mongo(method_type, request, body){

    url: mongoApiStr, //URL to hit
    method: method_type,
    headers: {
        'Content-Type': 'MyContentType',
        'Custom-Header': 'Custom Value'
    },
    body: body //Set the body as a string
}, function(error, response, body){
    if(error) {
        console.log(error);
    } else {
        console.log(response.statusCode, body);
    }
}
}*/