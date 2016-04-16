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
      assert.equal(null, todo.completionDate);
      assert.deepEqual([], todo.contexts);
    });
    it('parse string with completed', function() {
      var todo = TodoParser.parse('x 2016-20-10 hello');
      assert.isOk(todo);
      assert.equal('hello', todo.text);
      assert.equal('', todo.priority);
      assert.isOk(todo.completed);
      assert.equal('2016-20-10', todo.completionDate);
      assert.deepEqual([], todo.contexts);
    });
    it('string with one context', function() {
      var todo = TodoParser.parse('hello @example');
      assert.isOk(todo);
      assert.equal('hello', todo.text);
      assert.equal('', todo.priority);
      assert.isNotOk(todo.completed);
      assert.equal(null, todo.completionDate);
      assert.deepEqual(['example'], todo.contexts);
    });
    it('string with multiple contexts', function() {
      var todo = TodoParser.parse('hello @example @muh');
      assert.isOk(todo);
      assert.equal('hello', todo.text);
      assert.equal('', todo.priority);
      assert.isNotOk(todo.completed);
      assert.equal(null, todo.completionDate);
      assert.deepEqual(['example', 'muh'], todo.contexts);
    });
    it('string with one project', function() {
      var todo = TodoParser.parse('hello +project1');
      assert.isOk(todo);
      assert.equal('hello', todo.text);
      assert.equal('', todo.priority);
      assert.isNotOk(todo.completed);
      assert.equal(null, todo.completionDate);
      assert.deepEqual([], todo.contexts);
      assert.deepEqual(['project1'], todo.projects);
    });
    it('string with multiple projects', function() {
      var todo = TodoParser.parse('hello +project1 +project2');
      assert.isOk(todo);
      assert.equal('hello', todo.text);
      assert.equal('', todo.priority);
      assert.isNotOk(todo.completed);
      assert.equal(null, todo.completionDate);
      assert.deepEqual([], todo.contexts);
      assert.deepEqual(['project1', 'project2'], todo.projects);
    });
  });
});
