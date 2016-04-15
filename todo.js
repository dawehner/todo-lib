var Todo = {
  init(text, priority, project, contexts, completed) {
    this.text = text;
    this.priority = priority || '';
    this.project = project || '';
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
      create = function(text, priority, project, contexts, completed) {
        var newTodo = Object.create(Todo);
        newTodo.init(text, priority, project, contexts, completed);
        return newTodo;
      };

  that.create = create;
  return that;
}

var todo = TodoFactory();

module.exports = todo;
