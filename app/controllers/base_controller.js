var async = require('async');
var _ = require("underscore");
var request = require('request');


exports.tasks = function(req, resp) {
    var data = { 
        tasks: [
            { title: "Task 1", description: "task #1", completed: true, created: new Date(), _id: 0},
            { title: "Task 2", description: "This is task 2", completed: false, created: new Date(), _id: 1},
        ]
    };
    resp.json( data );
};

exports.create_task = function(req, resp){
    var data = req.body;
    
    console.log(data);
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