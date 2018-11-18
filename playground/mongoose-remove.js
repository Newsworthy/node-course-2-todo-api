const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5bf1541029f17500f89a542c'}).then((todo) => {

});

Todo.findByIdAndRemove('5bf1541029f17500f89a542c').then((todo) => {
  console.log(todo);
});
