var assert = require('chai').assert;
var TodoParser = require('../todo-parser');

describe('todo-parser', function() {
  describe('just-text', function() {
    it('parse simple string', function() {
      var todo = TodoParser.parse('hello');
      assert.isOk(todo);
      assert.equal('hello', todo.text);
      assert.equal('', todo.priority);
      assert.isNotOk(todo.completed);
    });
    it('parse string with priority', function() {
      var todo = TodoParser.parse('(A) hello');
      assert.isOk(todo);
      assert.equal('hello', todo.text);
      assert.equal('A', todo.priority);
      assert.isNotOk(todo.completed);
    });
    it('parse string with completed', function() {
      var todo = TodoParser.parse('x 2016-20-10 hello');
      assert.isOk(todo);
      assert.equal('hello', todo.text);
      assert.equal('', todo.priority);
      assert.isOk(todo.completed);
      assert.equal('2016-20-10', todo.completionDate);
    });
  });
});
