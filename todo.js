var Todo = {
  init(text, priority, projects, contexts, completed) {
    this.text = text;
    this.priority = priority || '';
    this.projects = projects || '';
    this.contexts = contexts || [];
    this.completed = !!completed;
    this.completionDate = completed;
  },
  setCompleted() {
    this.completed = true;
  },
  addContext(context) {
    this.contexts.push(context);
  }
}

/**
 * Factory function to help create our objects
 */
var TodoFactory = function() {
  var that = {},
      /**
       * Init & Constructor function for our objects
       * @param  {[type]} text      [description]
       * @param  {[type]} priority  [description]
       * @param  {[type]} project   [description]
       * @param  {[type]} contexts  [description]
       * @param  {[type]} completed [description]
       * @return {[type]}           [description]
       */
      create = function(text, priority, projects, contexts, completed) {
        var newTodo = Object.create(Todo);
        newTodo.init(text, priority, projects, contexts, completed);
        return newTodo;
      };

  that.create = create;
  return that;
}

var todo = TodoFactory();

module.exports = todo;
