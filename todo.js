function Todo(text, priority, project, contexts, completed) {
  this.text = text;
  this.priority = priority || '';
  this.project = project || '';
  this.contexts = contexts || [];
  this.completed = !!completed;
  this.completionDate = completed;
}

Todo.prototype.setCompleted = function() {
  this.completed = true;
  return this;
}

Todo.prototype.addContext = function(context) {
  this.contexts.push(context);
}

module.exports = Todo;
