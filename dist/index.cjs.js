'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var isCssEllipsisApplied = function isCssEllipsisApplied(elem) {
  return elem.scrollHeight > elem.clientHeight;
};

var Tag = "span";

var TruncatedElement = function TruncatedElement(_ref) {
  var children = _ref.children,
      lines = _ref.lines,
      getRef = _ref.getRef,
      isExpanded = _ref.isExpanded;
  var getStyles = React.useMemo(function () {
    if (isExpanded) {
      return {
        display: "block"
      };
    } else {
      return {
        overflow: "hidden",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: parseInt(lines),
        textOverflow: 'ellipsis'
      };
    }
  }, [lines, isExpanded]);

  var getChildrenElement = function getChildrenElement() {
    if (children.type) return children;
    return /*#__PURE__*/React__default.createElement(Tag, null, children);
  };

  var getClonedChildren = function getClonedChildren() {
    var childrenElement = getChildrenElement();
    var clonedElement = React.cloneElement(childrenElement, {
      style: _objectSpread2({}, childrenElement.props.style, {}, getStyles),
      ref: getRef
    });
    return clonedElement;
  };

  return getClonedChildren();
};

var defaultShowMoreElement = function defaultShowMoreElement(_ref) {
  var toggle = _ref.toggle;
  return /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    onClick: toggle
  }, "More");
};

var defaultShowLessElement = function defaultShowLessElement(_ref2) {
  var toggle = _ref2.toggle;
  return /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    onClick: toggle
  }, "Less");
};

var Clamp = function Clamp(_ref3) {
  var children = _ref3.children,
      _ref3$lines = _ref3.lines,
      lines = _ref3$lines === void 0 ? 2 : _ref3$lines,
      _ref3$maxLines = _ref3.maxLines,
      maxLines = _ref3$maxLines === void 0 ? 8 : _ref3$maxLines,
      _ref3$withTooltip = _ref3.withTooltip,
      withTooltip = _ref3$withTooltip === void 0 ? true : _ref3$withTooltip,
      _ref3$withToggle = _ref3.withToggle,
      withToggle = _ref3$withToggle === void 0 ? false : _ref3$withToggle,
      _ref3$showMoreElement = _ref3.showMoreElement,
      showMoreElement = _ref3$showMoreElement === void 0 ? defaultShowMoreElement : _ref3$showMoreElement,
      _ref3$showLessElement = _ref3.showLessElement,
      showLessElement = _ref3$showLessElement === void 0 ? defaultShowLessElement : _ref3$showLessElement,
      _ref3$onShowMore = _ref3.onShowMore,
      onShowMore = _ref3$onShowMore === void 0 ? function () {} : _ref3$onShowMore;

  var _useState = React.useState(lines),
      _useState2 = _slicedToArray(_useState, 2),
      sLines = _useState2[0],
      setLines = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isExpanded = _useState4[0],
      setIsExpanded = _useState4[1];

  var _useState5 = React.useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      showMore = _useState6[0],
      setShowMore = _useState6[1];

  var handleToggleShowMore = function handleToggleShowMore(show) {
    var newLines = show ? maxLines : lines;
    setShowMore(function (showMore) {
      return !showMore;
    });
    setIsExpanded(function (isExpanded) {
      return !isExpanded;
    });
    setLines(newLines);
    onShowMore(show);
  };

  var handleConfigElement = function handleConfigElement(elem) {
    if (!elem) return;

    if (isCssEllipsisApplied(elem)) {
      if (withTooltip) {
        var title = elem.textContent;
        elem.setAttribute('title', title);
      }

      if (withToggle && !showMore && !isExpanded) {
        setShowMore(true);
      }
    } else {
      elem.removeAttribute('title');
      setShowMore(false);
    }
  };

  React.useEffect(function () {
    if (lines) {
      setLines(lines);
    }
  }, [lines]);
  return /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement(TruncatedElement, {
    lines: sLines,
    isExpanded: isExpanded,
    getRef: handleConfigElement
  }, children), showMore && !isExpanded && showMoreElement({
    toggle: function toggle() {
      return handleToggleShowMore(true);
    }
  }), isExpanded && showLessElement({
    toggle: function toggle() {
      return handleToggleShowMore(false);
    }
  }));
};

module.exports = Clamp;
