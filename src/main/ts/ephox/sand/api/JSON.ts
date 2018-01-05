import Global from '../util/Global';

/*
 * IE8 and above per
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
 */
var json = function () {
  return Global.getOrDie('JSON');
};

var parse = function (obj) {
  return json().parse(obj);
};

var stringify = function (obj, replacer, space) {
  return json().stringify(obj, replacer, space);
};

export default <any> {
  parse: parse,
  stringify: stringify
};