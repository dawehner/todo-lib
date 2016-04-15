var Todo = require('./todo');

TodoParser = {}
TodoParser.parse = function (string) {
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

  string = TodoParser.trimWhitespace(string);

  return new Todo(string, priority, '', '', completed);
};

TodoParser.trimWhitespace = function (string) {
  return string.trim();
}

module.exports = TodoParser;
