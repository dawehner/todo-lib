var Todo = require('./todo');

TodoParser = {
  parse(string) {
    var regex_priority = /^\(([A-Z])\)/;
    var regex_completed = /^x\s([0-9]{4}-[0-9]{1,2}-[0-9]{1,2})\s+/i;
    var regex_date = '';
    var regex_context = /@([a-zA-Z]+)/ig;
    var regex_project = '';

    var priority = regex_priority.exec(string);
    if (priority !== null) {
      priority = priority[1];
      string = string.replace(regex_priority, '');
    }
    var completed = regex_completed.exec(string);
    if (completed !== null) {
      completed = completed[1];
      string = string.replace(regex_completed, '');
    }
    var match = regex_context.exec(string);
    var contexts = []
    while (match != null) {
      contexts.push(match[1]);
      match = regex_context.exec(string);
    }
    string = string.replace(regex_context, '');

    string = this.trimWhitespace(string);
    return Todo.create(string, priority, '', contexts, completed);
  },
  trimWhitespace(string) {
    return string.trim();
  }
}

module.exports = TodoParser;
