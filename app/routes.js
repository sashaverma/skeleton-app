var base = require('./controllers/base_controller');
module.exports.initialize = function(app) {  
  app.get('/api/hello', base.hello_world);
  app.get('/api/mongo', base.mongo_rest);
};
