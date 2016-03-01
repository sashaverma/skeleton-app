var base = require('./controllers/base_controller');
module.exports.initialize = function(app) {  
  app.get('/api/tasks', base.tasks);
  app.post('/api/mongo', base.create_task);
};
