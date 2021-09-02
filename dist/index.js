function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var styles = {"default":"_3UK6o","primary":"_3ljpl","dashed":"_27xYC","text":"_5bXm4","link":"_71S8l"};

var _excluded = ["type", "children"];
var Button = function Button(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'default' : _ref$type,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("button", {
    className: styles["default"] + " " + styles[type],
    onClick: props.onClick
  }, children);
};

exports.Button = Button;
//# sourceMappingURL=index.js.map
