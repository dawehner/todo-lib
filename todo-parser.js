var Todo = require('./todo');

TodoParser = {
  parse(string) {
    var regex_priority = /^\(([A-Z])\)/;
    var regex_completed = /^x\s([0-9]{4}-[0-9]{1,2}-[0-9]{1,2})\s+/i;
    var regex_date = '';
    var regex_context = '';
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

    string = this.trimWhitespace(string);
    return Todo.create(string, priority, '', '', completed);
  },
  trimWhitespace(string) {
    return string.trim();
  }
}

module.exports = TodoParser;
