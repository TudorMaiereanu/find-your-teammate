webpackJsonp([0],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheProvider", function() { return CacheProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassNames", function() { return ClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withEmotionCache", function() { return withEmotionCache; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_inheritsLoose__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_inheritsLoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_inheritsLoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__emotion_cache__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__emotion_utils__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__emotion_serialize__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__emotion_sheet__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__emotion_css__ = __webpack_require__(156);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return __WEBPACK_IMPORTED_MODULE_6__emotion_css__["a"]; });









var EmotionCacheContext = Object(__WEBPACK_IMPORTED_MODULE_1_react__["createContext"])( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? Object(__WEBPACK_IMPORTED_MODULE_2__emotion_cache__["a" /* default */])() : null);
var ThemeContext = Object(__WEBPACK_IMPORTED_MODULE_1_react__["createContext"])({});
var CacheProvider = EmotionCacheContext.Provider;

var withEmotionCache = function withEmotionCache(func) {
  var render = function render(props, ref) {
    return Object(__WEBPACK_IMPORTED_MODULE_1_react__["createElement"])(EmotionCacheContext.Consumer, null, function (cache) {
      return func(props, cache, ref);
    });
  }; // $FlowFixMe


  return Object(__WEBPACK_IMPORTED_MODULE_1_react__["forwardRef"])(render);
};

// thus we only need to replace what is a valid character for JS, but not for CSS

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var hasOwnProperty = Object.prototype.hasOwnProperty;

var render = function render(cache, props, theme, ref) {
  var cssProp = theme === null ? props.css : props.css(theme); // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var type = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = Object(__WEBPACK_IMPORTED_MODULE_3__emotion_utils__["a" /* getRegisteredStyles */])(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = Object(__WEBPACK_IMPORTED_MODULE_4__emotion_serialize__["a" /* serializeStyles */])(registeredStyles);

  if (false) {
    var labelFromStack = props[labelPropName];

    if (labelFromStack) {
      serialized = serializeStyles([serialized, 'label:' + labelFromStack + ';']);
    }
  }

  var rules = Object(__WEBPACK_IMPORTED_MODULE_3__emotion_utils__["b" /* insertStyles */])(cache, serialized, typeof type === 'string');
  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ("production" === 'production' || key !== labelPropName)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  var ele = Object(__WEBPACK_IMPORTED_MODULE_1_react__["createElement"])(type, newProps);

  return ele;
};

var Emotion =
/* #__PURE__ */
withEmotionCache(function (props, cache, ref) {
  // use Context.read for the theme when it's stable
  if (typeof props.css === 'function') {
    return Object(__WEBPACK_IMPORTED_MODULE_1_react__["createElement"])(ThemeContext.Consumer, null, function (theme) {
      return render(cache, props, theme, ref);
    });
  }

  return render(cache, props, null, ref);
});

if (false) {
  Emotion.displayName = 'EmotionCssPropInternal';
} // $FlowFixMe


var jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !hasOwnProperty.call(props, 'css')) {
    // $FlowFixMe
    return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"].apply(undefined, args);
  }

  if (false) {
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/css' like this: css`" + props.css + "`");
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type;

  if (false) {
    var error = new Error();

    if (error.stack) {
      // chrome
      var match = error.stack.match(/at (?:Object\.|)jsx.*\n\s+at ([A-Z][A-Za-z$]+) /);

      if (!match) {
        // safari and firefox
        match = error.stack.match(/.*\n([A-Z][A-Za-z$]+)@/);
      }

      if (match) {
        newProps[labelPropName] = sanitizeIdentifier(match[1]);
      }
    }
  }

  createElementArgArray[1] = newProps;

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"].apply(null, createElementArgArray);
};

var warnedAboutCssPropForGlobal = false;
var Global =
/* #__PURE__ */
withEmotionCache(function (props, cache) {
  if (false) {
    console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
    warnedAboutCssPropForGlobal = true;
  }

  var styles = props.styles;

  if (typeof styles === 'function') {
    return Object(__WEBPACK_IMPORTED_MODULE_1_react__["createElement"])(ThemeContext.Consumer, null, function (theme) {
      var serialized = Object(__WEBPACK_IMPORTED_MODULE_4__emotion_serialize__["a" /* serializeStyles */])([styles(theme)]);
      return Object(__WEBPACK_IMPORTED_MODULE_1_react__["createElement"])(InnerGlobal, {
        serialized: serialized,
        cache: cache
      });
    });
  }

  var serialized = Object(__WEBPACK_IMPORTED_MODULE_4__emotion_serialize__["a" /* serializeStyles */])([styles]);
  return Object(__WEBPACK_IMPORTED_MODULE_1_react__["createElement"])(InnerGlobal, {
    serialized: serialized,
    cache: cache
  });
});

// maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag
var InnerGlobal =
/*#__PURE__*/
function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_inheritsLoose___default()(InnerGlobal, _React$Component);

  function InnerGlobal(props, context, updater) {
    return _React$Component.call(this, props, context, updater) || this;
  }

  var _proto = InnerGlobal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.sheet = new __WEBPACK_IMPORTED_MODULE_5__emotion_sheet__["a" /* StyleSheet */]({
      key: this.props.cache.key + "-global",
      nonce: this.props.cache.sheet.nonce,
      container: this.props.cache.sheet.container
    }); // $FlowFixMe

    var node = document.querySelector("style[data-emotion-" + this.props.cache.key + "=\"" + this.props.serialized.name + "\"]");

    if (node !== null) {
      this.sheet.tags.push(node);
    }

    if (this.props.cache.sheet.tags.length) {
      this.sheet.before = this.props.cache.sheet.tags[0];
    }

    this.insertStyles();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.serialized.name !== this.props.serialized.name) {
      this.insertStyles();
    }
  };

  _proto.insertStyles = function insertStyles$1() {
    if (this.props.serialized.next !== undefined) {
      // insert keyframes
      Object(__WEBPACK_IMPORTED_MODULE_3__emotion_utils__["b" /* insertStyles */])(this.props.cache, this.props.serialized.next, true);
    }

    if (this.sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = this.sheet.tags[this.sheet.tags.length - 1].nextElementSibling;
      this.sheet.before = element;
      this.sheet.flush();
    }

    this.props.cache.insert("", this.props.serialized, this.sheet, false);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.sheet.flush();
  };

  _proto.render = function render() {

    return null;
  };

  return InnerGlobal;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var keyframes = function keyframes() {
  var insertable = __WEBPACK_IMPORTED_MODULE_6__emotion_css__["a" /* default */].apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = Object(__WEBPACK_IMPORTED_MODULE_3__emotion_utils__["a" /* getRegisteredStyles */])(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var ClassNames = withEmotionCache(function (props, context) {
  return Object(__WEBPACK_IMPORTED_MODULE_1_react__["createElement"])(ThemeContext.Consumer, null, function (theme) {
    var hasRendered = false;

    var css = function css() {
      if (hasRendered && "production" !== 'production') {
        throw new Error('css can only be used during render');
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var serialized = Object(__WEBPACK_IMPORTED_MODULE_4__emotion_serialize__["a" /* serializeStyles */])(args, context.registered);

      {
        Object(__WEBPACK_IMPORTED_MODULE_3__emotion_utils__["b" /* insertStyles */])(context, serialized, false);
      }

      return context.key + "-" + serialized.name;
    };

    var cx = function cx() {
      if (hasRendered && "production" !== 'production') {
        throw new Error('cx can only be used during render');
      }

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return merge(context.registered, css, classnames(args));
    };

    var content = {
      css: css,
      cx: cx,
      theme: theme
    };
    var ele = props.children(content);
    hasRendered = true;

    return ele;
  });
});




/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _Footer = __webpack_require__(397);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page = function (_React$Component) {
    _inherits(Page, _React$Component);

    function Page(props) {
        _classCallCheck(this, Page);

        var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));

        _this.state = {
            title: ''
        };
        return _this;
    }

    _createClass(Page, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({
                title: document.title
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'section',
                null,
                this.props.children,
                _react2.default.createElement(_Footer2.default, null)
            );
        }
    }]);

    return Page;
}(_react2.default.Component);

exports.default = Page;

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StyleSheet; });
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  return tag;
}

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(options) {
    this.isSpeedy = options.speedy === undefined ? "production" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      var _tag = createStyleElement(this);

      var before;

      if (this.tags.length === 0) {
        before = this.before;
      } else {
        before = this.tags[this.tags.length - 1].nextSibling;
      }

      this.container.insertBefore(_tag, before);
      this.tags.push(_tag);
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is a really hot path
        // we check the second character first because having "i"
        // as the second character will happen less often than
        // having "@" as the first character
        var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64; // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools

        sheet.insertRule(rule, // we need to insert @import rules before anything else
        // otherwise there will be an error
        // technically this means that the @import rules will
        // _usually_(not always since there could be multiple style tags)
        // be the first ones in prod and generally later in dev
        // this shouldn't really matter in the real world though
        // @import is generally only used for font faces from google fonts and etc.
        // so while this could be technically correct then it would be slower and larger
        // for a tiny bit of correctness that won't matter in the real world
        isImportRule ? 0 : sheet.cssRules.length);
      } catch (e) {
        if (false) {
          console.warn("There was a problem inserting the following rule: \"" + rule + "\"", e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();




/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return serializeStyles; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emotion_hash__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__emotion_unitless__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__emotion_memoize__ = __webpack_require__(406);




var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = Object(__WEBPACK_IMPORTED_MODULE_2__emotion_memoize__["a" /* default */])(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (__WEBPACK_IMPORTED_MODULE_1__emotion_unitless__["a" /* default */][key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (false) {
  var contentValuePattern = /(attr|calc|counters?|url)\(/;
  var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    var processed = oldProcessStyleValue(key, value);

    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }

    return processed;
  };
}

var shouldWarnAboutInterpolatingClassNameFromCss = true;

function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if (false) {
      throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
    }

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if (false) {
            styles += interpolation.map;
          }

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
        } else if (false) {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        break;
      }

    case 'string':
      if (false) {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
          return "${" + fakeVarName + "}";
        });

        if (matched.length) {
          console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
        }
      }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];

  if (false) {
    console.error('Interpolating a className from css`` is not recommended and will cause problems with composition.\n' + 'Interpolating a className from css`` will be completely unsupported in a future major version of Emotion');
    shouldWarnAboutInterpolatingClassNameFromCss = false;
  }

  return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i], false);
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value, false);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if (false) {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
var sourceMapPattern;

if (false) {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//;
} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings, false);
  } else {
    if (false) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);

    if (stringMode) {
      if (false) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles += strings[i];
    }
  }

  var sourceMap;

  if (false) {
    styles = styles.replace(sourceMapPattern, function (match) {
      sourceMap = match;
      return '';
    });
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = Object(__WEBPACK_IMPORTED_MODULE_0__emotion_hash__["a" /* default */])(styles) + identifierName;

  if (false) {
    // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
    return {
      name: name,
      styles: styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};




/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emotion_serialize__ = __webpack_require__(155);


function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Object(__WEBPACK_IMPORTED_MODULE_0__emotion_serialize__["a" /* serializeStyles */])(args);
}

/* harmony default export */ __webpack_exports__["a"] = (css);


/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(408));
__export(__webpack_require__(409));
__export(__webpack_require__(410));


/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(105);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(391);

var _App2 = _interopRequireDefault(_App);

var _webfontloader = __webpack_require__(414);

var _webfontloader2 = _interopRequireDefault(_webfontloader);

__webpack_require__(415);

__webpack_require__(416);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_webfontloader2.default.load({
    google: {
        families: ['Roboto:300,400,500,700', 'Material Icons']
    }
});

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('app'));

/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(51);

var _StartPageView = __webpack_require__(392);

var _AboutPageView = __webpack_require__(412);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            title: 'Find your teammate',
            routes: [{ component: _AboutPageView.AboutPageView, path: '/about' }, { component: _StartPageView.StartPageView, path: '/', exact: true }]
        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            document.title = this.state.title;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactRouterDom.HashRouter,
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Switch,
                        null,
                        this.state.routes.map(function (route, i) {
                            return _react2.default.createElement(_reactRouterDom.Route, _extends({ key: i }, route));
                        })
                    )
                )
            );
        }
    }]);

    return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StartPageView = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _StartPage = __webpack_require__(393);

var _StartPage2 = _interopRequireDefault(_StartPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StartPageView = exports.StartPageView = function (_React$Component) {
    _inherits(StartPageView, _React$Component);

    function StartPageView(props) {
        _classCallCheck(this, StartPageView);

        var _this = _possibleConstructorReturn(this, (StartPageView.__proto__ || Object.getPrototypeOf(StartPageView)).call(this, props));

        _this.state = {
            loading: false,
            data: []
        };
        return _this;
    }

    _createClass(StartPageView, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.setState({
                loading: true
            });

            // MovieService.getMovies().then((data) => {
            //     this.setState({
            //         data: [...data],
            //         loading: false
            //     });
            // }).catch((e) => {
            //     console.error(e);
            // });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_StartPage2.default, null);
        }
    }]);

    return StartPageView;
}(_react2.default.Component);

/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _templateObject = _taggedTemplateLiteral(['\n  display: block;\n  margin: 0 auto;\n'], ['\n  display: block;\n  margin: 0 auto;\n']);

var _reactRouterDom = __webpack_require__(51);

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactMultiSelectComponent = __webpack_require__(394);

var _reactMultiSelectComponent2 = _interopRequireDefault(_reactMultiSelectComponent);

var _Page = __webpack_require__(153);

var _Page2 = _interopRequireDefault(_Page);

var _qualities = __webpack_require__(398);

var _qualities2 = _interopRequireDefault(_qualities);

var _core = __webpack_require__(103);

var _GridLoader = __webpack_require__(407);

var _GridLoader2 = _interopRequireDefault(_GridLoader);

var _HashLoader = __webpack_require__(411);

var _HashLoader2 = _interopRequireDefault(_HashLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var override = (0, _core.css)(_templateObject);

var globalSelectedList = void 0;

var SearchBox = function SearchBox() {
    var options = Object.keys(_qualities2.default).map(function (item) {
        return {
            "label": item,
            "value": item
        };
    });

    var _useState = (0, _react.useState)([]),
        _useState2 = _slicedToArray(_useState, 2),
        selected = _useState2[0],
        setSelected = _useState2[1];

    globalSelectedList = selected;

    selected.sort(function (a, b) {
        if (a.label.toLowerCase() < b.label.toLowerCase()) return -1;
        if (a.label.toLowerCase() > b.label.toLowerCase()) return 1;
        return 0;
    });

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { className: 'row justify-content-center border', style: { maxHeight: "400px", overflowY: "auto" } },
            selected.map(function (item) {
                return _react2.default.createElement(
                    'a',
                    { href: '#' },
                    _react2.default.createElement(
                        'div',
                        { 'class': 'card m-4', style: { width: "170px", height: "100px" } },
                        _react2.default.createElement(
                            'h3',
                            { 'class': 'm-auto' },
                            item.label
                        )
                    )
                );
            })
        ),
        _react2.default.createElement(
            'div',
            { className: 'mt-3' },
            _react2.default.createElement(_reactMultiSelectComponent2.default, {
                options: options,
                value: selected,
                onChange: setSelected,
                labelledBy: "Select",
                overrideStrings: {
                    "selectSomeItems": "Search character trait",
                    "allItemsAreSelected": "All character traits selected.",
                    "selectAll": "I want all of them.",
                    "search": "Enter character trait"
                }
            })
        )
    );
};

var Delayed = function (_React$Component) {
    _inherits(Delayed, _React$Component);

    function Delayed(props) {
        _classCallCheck(this, Delayed);

        var _this = _possibleConstructorReturn(this, (Delayed.__proto__ || Object.getPrototypeOf(Delayed)).call(this, props));

        _this.state = { hidden: true };
        return _this;
    }

    _createClass(Delayed, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            setTimeout(function () {
                _this2.setState({ hidden: false });
            }, this.props.waitBeforeShow);
        }
    }, {
        key: 'render',
        value: function render() {
            return this.state.hidden ? '' : this.props.children;
        }
    }]);

    return Delayed;
}(_react2.default.Component);

var StartPage = function (_React$Component2) {
    _inherits(StartPage, _React$Component2);

    function StartPage(props) {
        _classCallCheck(this, StartPage);

        var _this3 = _possibleConstructorReturn(this, (StartPage.__proto__ || Object.getPrototypeOf(StartPage)).call(this, props));

        _this3.state = {
            node: null,
            isMatch: false,
            startLoadingQualities: false,
            startLoadingTeammate: false
        };

        _this3.onFindMatchClick = _this3.onFindMatchClick.bind(_this3);
        _this3.onRestartClick = _this3.onRestartClick.bind(_this3);
        _this3.loadQualities = _this3.loadQualities.bind(_this3);
        _this3.loadTeammate = _this3.loadTeammate.bind(_this3);
        return _this3;
    }

    _createClass(StartPage, [{
        key: 'onFindMatchClick',
        value: function onFindMatchClick() {
            this.setState({
                isMatch: !this.state.isMatch
            });
            this.loadQualities();
        }
    }, {
        key: 'loadQualities',
        value: function loadQualities() {
            var _this4 = this;

            this.setState({
                startLoadingQualities: true
            });
            setTimeout(function () {
                _this4.setState({ startLoadingQualities: false });
                _this4.loadTeammate();
            }, 2000);
        }
    }, {
        key: 'loadTeammate',
        value: function loadTeammate() {
            var _this5 = this;

            this.setState({
                startLoadingTeammate: true
            });
            setTimeout(function () {
                return _this5.setState({ startLoadingTeammate: false });
            }, 2000);
        }
    }, {
        key: 'onRestartClick',
        value: function onRestartClick() {
            this.setState({
                isMatch: !this.state.isMatch
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _Page2.default,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'w-100 p-3 mb-5', style: { position: "absolute", minHeight: "100%" } },
                    this.state.isMatch === false ? _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'p',
                            { className: 'h1 text-center', style: { color: "#0C3A3C", paddingTop: "100px", paddingBottom: "40px" } },
                            'Get Your Business Developer '
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'h2 text-center', style: { color: "#335D57", paddingTop: "0px", paddingBottom: "50px" } },
                            'Select qualities of your ideal teammate. '
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'container' },
                            _react2.default.createElement(SearchBox, null),
                            _react2.default.createElement(
                                'div',
                                { className: 'text-center mt-5' },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        type: 'submit',
                                        className: 'btn btn-primary',
                                        style: { borderRadius: "20px" },
                                        onClick: this.onFindMatchClick
                                    },
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'h4 p-2 my-auto' },
                                        'FIND MATCH'
                                    )
                                )
                            )
                        )
                    ) : _react2.default.createElement(
                        'div',
                        null,
                        this.state.startLoadingQualities ? _react2.default.createElement(
                            'div',
                            { className: 'text-center', style: { paddingTop: "100px" } },
                            _react2.default.createElement(
                                'p',
                                { className: 'h2 mb-5' },
                                'Matching character traits...'
                            ),
                            _react2.default.createElement(_GridLoader2.default, {
                                css: override,
                                size: 40,
                                color: "#123abc",
                                loading: true
                            })
                        ) : null,
                        this.state.startLoadingTeammate ? _react2.default.createElement(
                            'div',
                            { className: 'text-center', style: { paddingTop: "100px" } },
                            _react2.default.createElement(
                                'p',
                                { className: 'h2 mb-5' },
                                'Searching ideal teammate...'
                            ),
                            _react2.default.createElement(_HashLoader2.default, {
                                css: override,
                                size: 80,
                                color: "#123abc",
                                loading: true
                            })
                        ) : null,
                        _react2.default.createElement(
                            Delayed,
                            { waitBeforeShow: 4000 },
                            _react2.default.createElement(
                                'p',
                                { className: 'h2 text-center', style: { fontStyle: "italic", color: "#0C3A3C", paddingTop: "100px", paddingBottom: "20px" } },
                                'It\'s a Match!'
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'h1 text-center', style: { color: "#335D57", paddingBottom: "20px" } },
                                'Leon Schulz '
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'text-center', style: { paddingBottom: "50px" } },
                                _react2.default.createElement('img', {
                                    className: 'text-center',
                                    src: 'https://media-exp1.licdn.com/dms/image/C4D03AQGnBKoKlYTDnA/profile-displayphoto-shrink_800_800/0?e=1600300800&v=beta&t=LGqy545XrQcX1fV2Q-AAmfpu4dXkdWS_31B0VoZEyM8',
                                    style: { width: "300px", borderRadius: "150px" }
                                }),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'text-black', style: { fontWeight: "bold", fontSize: 18, paddingTop: "30px", paddingBottom: "10px" } },
                                    'EXPERIENCE'
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'text-black', style: { color: "black", fontSize: 18 } },
                                    'Evaluating investment opportunities for a deep tech VC has trained me in analyzing markets. ',
                                    _react2.default.createElement('br', null),
                                    ' ',
                                    _react2.default.createElement('br', null),
                                    ' Building B2B ventures for Europe\'s leading, independent company builder has taught me to understand customer needs. ',
                                    _react2.default.createElement('br', null),
                                    _react2.default.createElement('br', null),
                                    ' Managing fundraising for a social project at Engineers Without Borders has schooled me in controlling finances. ',
                                    _react2.default.createElement('br', null),
                                    _react2.default.createElement('br', null),
                                    ' With my programming skills (Python, Java, Matlab, R) I will support the Tech Developer. ',
                                    _react2.default.createElement('br', null),
                                    _react2.default.createElement('br', null),
                                    ' With my hands-on experience in Design Thinking I will support the Problem Expert.'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'container border bg-white p-3 mt-5', style: { width: "500px" } },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col', style: { maxHeight: "300px", overflowY: "scroll" } },
                                        globalSelectedList.map(function (item) {
                                            return _react2.default.createElement(
                                                'div',
                                                { className: 'row justify-content-center' },
                                                _react2.default.createElement(
                                                    'p',
                                                    { className: 'h5 text-left py-2', style: { width: "400px" } },
                                                    _qualities2.default[item.label]
                                                ),
                                                _react2.default.createElement('i', { 'class': 'fas fa-check my-auto', style: { color: "green" } })
                                            );
                                        })
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        'button',
                                        {
                                            type: 'submit',
                                            className: 'btn btn-primary mt-5',
                                            style: { borderRadius: "20px" },
                                            onClick: function onClick() {
                                                location.href = 'https://www.linkedin.com/in/leon-schulz/';
                                            }
                                        },
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'h4 p-2 my-auto' },
                                            'EXPLORE LINKEDIN'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        'button',
                                        {
                                            className: 'btn btn-primary mt-3 bg-dark border-0',
                                            style: { borderRadius: "20px" },
                                            onClick: this.onRestartClick
                                        },
                                        'Search again ',
                                        _react2.default.createElement('i', { 'class': 'fas fa-redo-alt' })
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return StartPage;
}(_react2.default.Component);

exports.default = (0, _reactRouterDom.withRouter)(StartPage);

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return Dropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectItem", function() { return SelectItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPanel", function() { return SelectPanel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_goober__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rooks_use_outside_click__ = __webpack_require__(396);




/**
 * Filters React Select options and sorts by similarity to a search filter.
 * Handles partial matches, eg. searching for "Waberg High" will find "Raoul
 * Wallenberg Traditional High School". Case insensitive. Ignores
 * non-alphanumeric characters.
 *
 * @param  options  An unfiltered list of Options.
 * @param? filter  A string to compare against Option labels.
 * @param? substitutions  Strings with multiple spellings or variations that we
 *           expect to match, eg. accented characters or abbreviated words.
 *
 * @return A filtered and sorted array of Options.
 */
function filterOptions(options, filter, substitutions) {
  // If the filter is blank, return the full list of Options.
  if (!filter) {
    return options;
  }

  var cleanFilter = cleanUpText(filter, substitutions);
  return options // Filter out undefined or null Options.
  .filter(function (_ref) {
    var label = _ref.label,
        value = _ref.value;
    return label != null && value != null;
  }) // Create a {score, Option} pair for each Option based on its label's
  // similarity to the filter text.
  .map(function (option) {
    return {
      option: option,
      score: typeaheadSimilarity(cleanUpText(option.label, substitutions), cleanFilter)
    };
  }) // Only include matches of the entire substring, with a slight
  // affordance for transposition or extra characters.
  .filter(function (pair) {
    return pair.score >= cleanFilter.length - 2;
  }) // Sort 'em by order of their score.
  .sort(function (a, b) {
    return b.score - a.score;
  }) // …and grab the original Options back from their pairs.
  .map(function (pair) {
    return pair.option;
  });
}
/**
 * Scores the similarity between two strings by returning the length of the
 * longest common subsequence. Intended for comparing strings of different
 * lengths; eg. when matching a typeahead search input with a school name.

 * Meant for use in an instant search box where results are being fetched
 * as a user is typing.
 *
 * @param  a  The longer string (though, we flip them if it's shorter).
 * @param  b  The shorter string, eg. a typeahead search input.
 *
 * @return The length of the longest common subsequence. Higher scores indicate
 *           closer matches.
 */

function typeaheadSimilarity(a, b) {
  var aLength = a.length;
  var bLength = b.length;
  var table = [];

  if (!aLength || !bLength) {
    return 0;
  } // Ensure `a` isn't shorter than `b`.


  if (aLength < bLength) {
    var _ref2 = [b, a];
    a = _ref2[0];
    b = _ref2[1];
  } // Early exit if `a` includes `b`; these will be scored higher than any
  // other options with the same `b` (filter string), with a preference for
  // shorter `a` strings (option labels).


  if (a.indexOf(b) !== -1) {
    return bLength + 1 / aLength;
  } // Initialize the table axes:
  //
  //    0 0 0 0 ... bLength
  //    0
  //    0
  //
  //   ...
  //
  // aLength
  //


  for (var x = 0; x <= aLength; ++x) {
    table[x] = [0];
  }

  for (var y = 0; y <= bLength; ++y) {
    table[0][y] = 0;
  } // Populate the rest of the table with a dynamic programming algorithm.


  for (var _x = 1; _x <= aLength; ++_x) {
    for (var _y = 1; _y <= bLength; ++_y) {
      table[_x][_y] = a[_x - 1] === b[_y - 1] ? 1 + table[_x - 1][_y - 1] : Math.max(table[_x][_y - 1], table[_x - 1][_y]);
    }
  }

  return table[aLength][bLength];
}
/**
 * Apply string substitutions, remove non-alphanumeric characters, and convert
 * all letters to uppercase.
 *
 * eg. 'Scoil Bhríde Primary School' may become 'SCOILBHRIDEPRIMARYSCHOOL'.
 *
 * @param  input  An unsanitized input string.
 * @param  substitutions  Strings with multiple spellings or variations that we
 *          expect to match, for example accented characters or abbreviated
 *          words.
 *
 * @return The sanitized text.
 */

function cleanUpText(input, substitutions) {
  if (!input) {
    return "";
  } // Uppercase and remove all non-alphanumeric, non-accented characters.
  // Also remove underscores.


  input = input.toUpperCase().replace(/((?=[^\u00E0-\u00FC])\W)|_/g, "");

  if (!substitutions) {
    return input;
  }

  var safeSubstitutions = substitutions; // For Flow.
  // Replace all strings in `safeSubstitutions` with their standardized
  // counterparts.

  return Object.keys(safeSubstitutions).reduce(function (output, substitution) {
    var unsubbed = new RegExp(substitution, "g");
    return output.replace(unsubbed, safeSubstitutions[substitution]);
  }, input);
}

var strings = {
  selectSomeItems: "Select...",
  allItemsAreSelected: "All items are selected.",
  selectAll: "Select All",
  search: "Search"
};

function getString(key, overrideStrings) {
  if (overrideStrings && overrideStrings[key]) {
    return overrideStrings[key];
  }

  return strings[key];
}

var DefaultRenderer = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0_goober__["a" /* css */])({
  "& input,& span": {
    verticalAlign: "middle",
    margin: 0
  },
  span: {
    display: "inline-block",
    paddingLeft: "5px"
  },
  "&.disabled": {
    opacity: 0.5
  }
});

var DefaultItemRenderer = function DefaultItemRenderer(_ref) {
  var checked = _ref.checked,
      option = _ref.option,
      onClick = _ref.onClick,
      disabled = _ref.disabled;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: DefaultRenderer + " item-renderer " + (disabled && "disabled")
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
    type: "checkbox",
    onChange: onClick,
    checked: checked,
    tabIndex: -1,
    disabled: disabled
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", null, option.label));
};

/**
 * This component represents an individual item in the multi-select drop-down
 */
var ItemContainer = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0_goober__["a" /* css */])({
  boxSizing: "border-box",
  cursor: "pointer",
  display: "block",
  padding: "var(--rmsc-spacing)",
  outline: "0",
  "&:hover,&:focus": {
    background: "var(--rmsc-hover)"
  },
  "&.selected": {
    background: "var(--rmsc-selected)"
  }
});

var SelectItem = function SelectItem(_ref) {
  var _ref$itemRenderer = _ref.itemRenderer,
      ItemRenderer = _ref$itemRenderer === void 0 ? DefaultItemRenderer : _ref$itemRenderer,
      option = _ref.option,
      checked = _ref.checked,
      focused = _ref.focused,
      disabled = _ref.disabled,
      onSelectionChanged = _ref.onSelectionChanged,
      onClick = _ref.onClick;
  var itemRef = Object(__WEBPACK_IMPORTED_MODULE_1_react__["useRef"])();
  Object(__WEBPACK_IMPORTED_MODULE_1_react__["useEffect"])(function () {
    updateFocus(); // eslint-disable-next-line
  }, [focused]);

  var toggleChecked = function toggleChecked() {
    onSelectionChanged(!checked);
  };

  var handleClick = function handleClick(e) {
    toggleChecked();
    onClick(e);
  };

  var updateFocus = function updateFocus() {
    if (focused && !disabled && itemRef) {
      itemRef.current.focus();
    }
  };

  var handleKeyDown = function handleKeyDown(e) {
    switch (e.which) {
      case 13: // Enter

      case 32:
        // Space
        toggleChecked();
        break;

      default:
        return;
    }

    e.preventDefault();
  };

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
    className: ItemContainer + " select-item " + (checked && "selected"),
    role: "option",
    "aria-selected": checked,
    tabIndex: -1,
    ref: itemRef,
    onKeyDown: handleKeyDown
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ItemRenderer, {
    option: option,
    checked: checked,
    onClick: handleClick,
    disabled: disabled
  }));
};

/**
 * This component represents an unadorned list of SelectItem (s).
 */
var SelectListUl = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0_goober__["a" /* css */])({
  margin: 0,
  paddingLeft: 0,
  li: {
    listStyle: "none",
    margin: 0
  }
});

var SelectList = function SelectList(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      disabled = _ref.disabled,
      ItemRenderer = _ref.ItemRenderer,
      options = _ref.options,
      focusIndex = _ref.focusIndex,
      _onClick = _ref.onClick;

  var handleSelectionChanged = function handleSelectionChanged(option, checked) {
    if (disabled) {
      return;
    }

    onChange(checked ? [].concat(value, [option]) : value.filter(function (o) {
      return o.value !== option.value;
    }));
  };

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
    className: SelectListUl
  }, options.map(function (o, i) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
      key: o.hasOwnProperty("key") ? o.key : i
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(SelectItem, {
      focused: focusIndex === i,
      option: o,
      onSelectionChanged: function onSelectionChanged(c) {
        return handleSelectionChanged(o, c);
      },
      checked: value.find(function (s) {
        return s.value === o.value;
      }) ? true : false,
      onClick: function onClick(e) {
        return _onClick(e, i);
      },
      itemRenderer: ItemRenderer,
      disabled: o.disabled || disabled
    }));
  }));
};

/**
 * This component represents the entire panel which gets dropped down when the
 * user selects the component.  It encapsulates the search filter, the
 * Select-all item, and the list of options.
 */
var FocusType;

(function (FocusType) {
  FocusType[FocusType["SEARCH"] = -1] = "SEARCH";
  FocusType[FocusType["NONE"] = 0] = "NONE";
})(FocusType || (FocusType = {}));

var SelectSearchContainer = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0_goober__["a" /* css */])({
  width: "100%",
  borderBottom: "1px solid var(--rmsc-border)",
  input: {
    height: "var(--rmsc-height)",
    padding: "0 var(--rmsc-spacing)",
    width: "100%",
    outline: "none",
    border: "0"
  }
});
var SelectPanel = function SelectPanel(props) {
  var onChange = props.onChange,
      options = props.options,
      value = props.value,
      customFilterOptions = props.filterOptions,
      selectAllLabel = props.selectAllLabel,
      ItemRenderer = props.ItemRenderer,
      disabled = props.disabled,
      disableSearch = props.disableSearch,
      focusSearchOnOpen = props.focusSearchOnOpen,
      hasSelectAll = props.hasSelectAll,
      overrideStrings = props.overrideStrings;

  var _useState = Object(__WEBPACK_IMPORTED_MODULE_1_react__["useState"])(""),
      searchText = _useState[0],
      setSearchText = _useState[1];

  var _useState2 = Object(__WEBPACK_IMPORTED_MODULE_1_react__["useState"])(focusSearchOnOpen ? FocusType.SEARCH : FocusType.NONE),
      focusIndex = _useState2[0],
      setFocusIndex = _useState2[1];

  var _useState3 = Object(__WEBPACK_IMPORTED_MODULE_1_react__["useState"])(),
      selectAllLength = _useState3[0],
      setSelectAllLength = _useState3[1];

  var selectAllOption = {
    label: selectAllLabel || getString("selectAll", overrideStrings),
    value: ""
  };
  Object(__WEBPACK_IMPORTED_MODULE_1_react__["useEffect"])(function () {
    setSelectAllLength(selectAllValues(true).length); // eslint-disable-next-line
  }, [options]);

  var selectAllValues = function selectAllValues(checked) {
    var selectedValues = value.map(function (o) {
      return o.value;
    });
    return options.filter(function (_ref) {
      var disabled = _ref.disabled,
          value = _ref.value;

      if (checked) {
        return !disabled || selectedValues.includes(value);
      }

      return disabled && selectedValues.includes(value);
    });
  };

  var selectAllChanged = function selectAllChanged(checked) {
    var newOptions = selectAllValues(checked);
    onChange(newOptions);
  };

  var handleSearchChange = function handleSearchChange(e) {
    setSearchText(e.target.value);
    setFocusIndex(FocusType.SEARCH);
  };

  var handleItemClicked = function handleItemClicked(index) {
    return setFocusIndex(index);
  };

  var handleKeyDown = function handleKeyDown(e) {
    switch (e.which) {
      case 38:
        // Up Arrow
        if (e.altKey) {
          return;
        }

        updateFocus(-1);
        break;

      case 40:
        // Down Arrow
        if (e.altKey) {
          return;
        }

        updateFocus(1);
        break;

      default:
        return;
    }

    e.stopPropagation();
    e.preventDefault();
  };

  var handleSearchFocus = function handleSearchFocus() {
    setFocusIndex(FocusType.SEARCH);
  };

  var filteredOptions = function filteredOptions() {
    return customFilterOptions ? customFilterOptions(options, searchText) : filterOptions(options, searchText);
  };

  var updateFocus = function updateFocus(offset) {
    var newFocus = focusIndex + offset;
    newFocus = Math.max(0, newFocus);
    newFocus = Math.min(newFocus, options.length);
    setFocusIndex(newFocus);
  };

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "select-panel",
    role: "listbox",
    onKeyDown: handleKeyDown
  }, !disableSearch && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: SelectSearchContainer
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
    autoFocus: focusSearchOnOpen,
    placeholder: getString("search", overrideStrings),
    type: "search",
    "aria-describedby": getString("search", overrideStrings),
    onChange: handleSearchChange,
    onFocus: handleSearchFocus
  })), hasSelectAll && !searchText && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(SelectItem, {
    focused: focusIndex === 0,
    checked: selectAllLength === value.length,
    option: selectAllOption,
    onSelectionChanged: selectAllChanged,
    onClick: function onClick() {
      return handleItemClicked(0);
    },
    itemRenderer: ItemRenderer,
    disabled: disabled
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(SelectList, Object.assign({}, props, {
    options: filteredOptions(),
    focusIndex: focusIndex - 1,
    onClick: function onClick(_e, index) {
      return handleItemClicked(index + 1);
    },
    ItemRenderer: ItemRenderer,
    disabled: disabled
  })));
};

function Arrow(_ref) {
  var _ref$expanded = _ref.expanded,
      expanded = _ref$expanded === void 0 ? false : _ref$expanded;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
    className: "dropdown-heading-dropdown-arrow gray",
    style: {
      paddingTop: "4px"
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    viewBox: "0 0 24 24"
  }, expanded ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("polyline", {
    points: "18 15 12 9 6 15"
  }) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M6 9L12 15 18 9"
  })));
}

var Spinner = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0_goober__["a" /* css */])({
  animation: "rotate 2s linear infinite",
  "& .path": {
    stroke: "var(--rmsc-border)",
    strokeWidth: "4px",
    strokeLinecap: "round",
    animation: "dash 1.5s ease-in-out infinite"
  },
  "@keyframes rotate": {
    "100%": {
      transform: "rotate(360deg)"
    }
  },
  "@keyframes dash": {
    "0%": {
      strokeDasharray: "1, 150",
      strokeDashoffset: "0"
    },
    "50%": {
      strokeDasharray: "90, 150",
      strokeDashoffset: "-35"
    },
    "100%": {
      strokeDasharray: "90, 150",
      strokeDashoffset: "-124"
    }
  }
});

function Loading(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 26 : _ref$size;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    style: {
      cursor: "pointer",
      display: "table-cell",
      verticalAlign: "middle",
      width: size,
      marginRight: "0.2rem"
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("svg", {
    width: size,
    height: size,
    className: Spinner,
    viewBox: "0 0 50 50",
    style: {
      display: "inline-block",
      verticalAlign: "middle"
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("circle", {
    cx: "25",
    cy: "25",
    r: "20",
    fill: "none",
    className: "path"
  })));
}

/**
 * A generic dropdown component.  It takes the children of the component
 * and hosts it in the component.  When the component is selected, it
 * drops-down the contentComponent and applies the contentProps.
 */
var PanelContainer = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0_goober__["a" /* css */])({
  position: "absolute",
  zIndex: 1,
  top: "100%",
  width: "100%",
  paddingTop: "8px",
  ".panel-content": {
    maxHeight: "300px",
    overflowY: "auto",
    borderRadius: "var(--rmsc-border-radius)",
    backgroundColor: "var(--rmsc-background)",
    boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)"
  }
});
var DropdownContainer = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0_goober__["a" /* css */])({
  position: "relative",
  outline: "none",
  backgroundColor: "var(--rmsc-background)",
  border: "1px solid var(--rmsc-border)",
  borderRadius: "var(--rmsc-border-radius)",
  "&:focus-within": {
    boxShadow: "var(--rmsc-primary) 0px 0px 0px 1px",
    borderColor: "var(--rmsc-primary)"
  }
});
var DropdownHeading = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0_goober__["a" /* css */])({
  position: "relative",
  padding: "0 var(--rmsc-spacing)",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  overflow: "hidden",
  width: "100%",
  height: "var(--rmsc-height)",
  cursor: "default",
  outline: "none",
  ".dropdown-heading-value": {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    flex: "1"
  }
});

var Dropdown = function Dropdown(_ref) {
  var children = _ref.children,
      ContentComponent = _ref.contentComponent,
      contentProps = _ref.contentProps,
      isLoading = _ref.isLoading,
      disabled = _ref.disabled,
      shouldToggleOnHover = _ref.shouldToggleOnHover,
      labelledBy = _ref.labelledBy,
      onMenuToggle = _ref.onMenuToggle,
      ArrowRenderer = _ref.ArrowRenderer;

  var _useState = Object(__WEBPACK_IMPORTED_MODULE_1_react__["useState"])(false),
      expanded = _useState[0],
      setExpanded = _useState[1];

  var _useState2 = Object(__WEBPACK_IMPORTED_MODULE_1_react__["useState"])(false),
      hasFocus = _useState2[0],
      setHasFocus = _useState2[1];

  var FinalArrow = ArrowRenderer || Arrow;
  var wrapper = Object(__WEBPACK_IMPORTED_MODULE_1_react__["useRef"])();
  Object(__WEBPACK_IMPORTED_MODULE_2__rooks_use_outside_click__["a" /* default */])(wrapper, function () {
    return setExpanded(false);
  });
  /* eslint-disable react-hooks/exhaustive-deps */

  Object(__WEBPACK_IMPORTED_MODULE_1_react__["useEffect"])(function () {
    onMenuToggle && onMenuToggle(expanded);
  }, [expanded]);

  var handleKeyDown = function handleKeyDown(e) {
    switch (e.which) {
      case 27: // Escape

      case 38:
        // Up Arrow
        setExpanded(false);
        break;

      case 13: // Enter Key

      case 40:
        // Down Arrow
        setExpanded(true);
        break;

      default:
        return;
    }

    e.preventDefault();
  };

  var handleHover = function handleHover(iexpanded) {
    shouldToggleOnHover && setExpanded(iexpanded);
  };

  var handleFocus = function handleFocus(e) {
    e.target === wrapper && !hasFocus && setHasFocus(true);
  };

  var handleBlur = function handleBlur() {
    return hasFocus && setHasFocus(false);
  };

  var handleMouseEnter = function handleMouseEnter() {
    return handleHover(true);
  };

  var handleMouseLeave = function handleMouseLeave() {
    return handleHover(false);
  };

  var toggleExpanded = function toggleExpanded() {
    return setExpanded(isLoading || disabled ? false : !expanded);
  };

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    tabIndex: 0,
    className: DropdownContainer + " dropdown-container",
    "aria-labelledby": labelledBy,
    "aria-expanded": expanded,
    "aria-readonly": "true",
    "aria-disabled": disabled,
    ref: wrapper,
    onKeyDown: handleKeyDown,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: DropdownHeading + " dropdown-heading",
    onClick: toggleExpanded
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "dropdown-heading-value"
  }, children), isLoading && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Loading, null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(FinalArrow, {
    expanded: expanded
  })), expanded && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: PanelContainer + " dropdown-content"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "panel-content"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ContentComponent, Object.assign({}, contentProps)))));
};

var DropdownHeader = function DropdownHeader(_ref) {
  var value = _ref.value,
      options = _ref.options,
      valueRenderer = _ref.valueRenderer,
      overrideStrings = _ref.overrideStrings;
  var noneSelected = value.length === 0;
  var allSelected = value.length === options.length;
  var customText = valueRenderer && valueRenderer(value, options);

  var getSelectedText = function getSelectedText() {
    return value.map(function (s) {
      return s.label;
    }).join(", ");
  };

  if (noneSelected) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      className: "gray"
    }, customText || getString("selectSomeItems", overrideStrings));
  }

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", null, customText ? customText : allSelected ? getString("allItemsAreSelected", overrideStrings) : getSelectedText());
};

var MultiSelectBox = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0_goober__["a" /* css */])({
  "--rmscPrimary": "#4285f4",
  "--rmscHover": "#f1f3f5",
  "--rmscSelected": "#e2e6ea",
  "--rmscBorder": "#ccc",
  "--rmscGray": "#aaa",
  "--rmscBackground": "#fff",
  "--rmscSpacing": "10px",
  "--rmscBorderRadius": "4px",
  "--rmscHeight": "38px",
  "*": {
    boxSizing: "border-box",
    transition: "all 0.2s ease"
  },
  ".gray": {
    color: "var(--rmsc-gray)"
  }
});

var MultiSelect = function MultiSelect(_ref) {
  var _ref$focusSearchOnOpe = _ref.focusSearchOnOpen,
      focusSearchOnOpen = _ref$focusSearchOnOpe === void 0 ? true : _ref$focusSearchOnOpe,
      _ref$hasSelectAll = _ref.hasSelectAll,
      hasSelectAll = _ref$hasSelectAll === void 0 ? true : _ref$hasSelectAll,
      _ref$shouldToggleOnHo = _ref.shouldToggleOnHover,
      shouldToggleOnHover = _ref$shouldToggleOnHo === void 0 ? false : _ref$shouldToggleOnHo,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? "multi-select" : _ref$className,
      options = _ref.options,
      value = _ref.value,
      valueRenderer = _ref.valueRenderer,
      overrideStrings = _ref.overrideStrings,
      onChange = _ref.onChange,
      disabled = _ref.disabled,
      ItemRenderer = _ref.ItemRenderer,
      ArrowRenderer = _ref.ArrowRenderer,
      selectAllLabel = _ref.selectAllLabel,
      isLoading = _ref.isLoading,
      disableSearch = _ref.disableSearch,
      filterOptions = _ref.filterOptions,
      labelledBy = _ref.labelledBy,
      onMenuToggle = _ref.onMenuToggle;
  var nvalue = value || [];
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: MultiSelectBox + " " + className
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Dropdown, {
    isLoading: isLoading,
    contentComponent: SelectPanel,
    shouldToggleOnHover: shouldToggleOnHover,
    contentProps: {
      ItemRenderer: ItemRenderer,
      options: options,
      value: nvalue,
      hasSelectAll: hasSelectAll,
      selectAllLabel: selectAllLabel,
      onChange: onChange,
      disabled: disabled,
      disableSearch: disableSearch,
      focusSearchOnOpen: focusSearchOnOpen,
      filterOptions: filterOptions,
      overrideStrings: overrideStrings
    },
    disabled: disabled,
    labelledBy: labelledBy,
    onMenuToggle: onMenuToggle,
    ArrowRenderer: ArrowRenderer
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(DropdownHeader, {
    value: nvalue,
    options: options,
    valueRenderer: valueRenderer,
    overrideStrings: overrideStrings
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MultiSelect);

//# sourceMappingURL=react-multi-select-component.esm.js.map


/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styled */
/* unused harmony export setPragma */
/* unused harmony export extractCss */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return s; });
/* unused harmony export glob */
var r={data:""},t=function(t){try{var e=t?t.querySelector("#_goober"):self._goober;return e||((e=(t||document.head).appendChild(document.createElement("style"))).innerHTML=" ",e.id="_goober"),e.firstChild}catch(r){}return r},e=function(r){var e=t(r),n=e.data;return e.data="",n},n=/(?:([a-z0-9-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(})/gi,a=/\/\*.*?\*\/|\s{2,}|\n/gm,o=function(r,t,e){var n="",a="",c="";for(var i in r){var u=r[i];if("object"==typeof u){var s=t+" "+i;/&/g.test(i)&&(s=i.replace(/&/g,t)),"@"==i[0]&&(s=t,"f"==i[1]&&(s=i)),/@k/.test(i)?a+=i+"{"+o(u,"","")+"}":a+=o(u,s,s==t?i:e||"")}else/^@i/.test(i)?c=i+" "+u+";":n+=i.replace(/[A-Z]/g,"-$&").toLowerCase()+":"+u+";"}if(n.charCodeAt(0)){var f=t+"{"+n+"}";return e?a+e+"{"+f+"}":c+f+a}return c+a},c={},i=function(r,t,e,i){var u=JSON.stringify(r),s=c[u]||(c[u]=".go"+u.split("").reduce(function(r,t){return 101*r+t.charCodeAt(0)>>>0},11));return function(r,t,e){t.data.indexOf(r)<0&&(t.data=e?r+t.data:t.data+r)}(c[s]||(c[s]=o(r[0]?function(r){for(var t,e=[{}];t=n.exec(r.replace(a,""));)t[4]&&e.shift(),t[3]?e.unshift(e[0][t[3]]=e[0][t[3]]||{}):t[4]||(e[0][t[1]]=t[2]);return e[0]}(r):r,e?"":s)),t,i),s.slice(1)},u=function(r,t,e){return r.reduce(function(r,n,a){var o=t[a];if(o&&o.call){var c=o(e),i=c&&c.props&&c.props.className||/^go/.test(c)&&c;o=i?"."+i:c&&c.props?"":c}return r+n+(null==o?"":o)},"")};function s(r){var e=this||{},n=r.call?r(e.p):r;return i(n.map?u(n,[].slice.call(arguments,1),e.p):n,t(e.target),e.g,e.o)}var f,l=s.bind({g:1}),d=function(r){return f=r};function p(r){var t=this||{};return function(){var e=arguments;return function(n){var a=t.p=Object.assign({},n),o=a.className;return t.o=/\s*go[0-9]+/g.test(o),a.className=s.apply(t,e)+(o?" "+o:""),f(r,a)}}}


/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


/**
 *  useOutsideClick hook
 *
 * Checks if a click happened outside a Ref. Handy for dropdowns, modals and popups etc.
 *
 * @param ref Ref whose outside click needs to be listened to
 * @param handler Callback to fire on outside click
 * @param when A boolean which which activates the hook only when it is true. Useful for conditionally enable the outside click
 */
function useOutsideClick(ref, handler, when = true) {
    const savedHandler = Object(__WEBPACK_IMPORTED_MODULE_0_react__["useRef"])(handler);
    const memoizedCallback = Object(__WEBPACK_IMPORTED_MODULE_0_react__["useCallback"])((e) => {
        if (ref && ref.current && !ref.current.contains(e.target)) {
            savedHandler.current(e);
        }
    }, []);
    Object(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(() => {
        savedHandler.current = handler;
    });
    Object(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(() => {
        if (when) {
            document.addEventListener("click", memoizedCallback);
            document.addEventListener("ontouchstart", memoizedCallback);
            return () => {
                document.removeEventListener("click", memoizedCallback);
                document.removeEventListener("ontouchstart", memoizedCallback);
            };
        }
    }, [ref, handler, when]);
}

/* harmony default export */ __webpack_exports__["a"] = (useOutsideClick);
//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(51);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlainFooter = function (_React$Component) {
    _inherits(PlainFooter, _React$Component);

    function PlainFooter(props) {
        _classCallCheck(this, PlainFooter);

        return _possibleConstructorReturn(this, (PlainFooter.__proto__ || Object.getPrototypeOf(PlainFooter)).call(this, props));
    }

    _createClass(PlainFooter, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { 'class': 'footer text-center w-100 bg-dark', style: { bottom: 0, position: "fixed" } },
                _react2.default.createElement(
                    'span',
                    { 'class': 'text-white', style: { margin: 10 } },
                    ' \xA9 ',
                    new Date().getFullYear(),
                    ' Find your teammate All rights reserved'
                ),
                _react2.default.createElement(
                    'a',
                    { href: '#about' },
                    _react2.default.createElement(
                        'span',
                        { className: 'text-white', style: { margin: 10 } },
                        'About'
                    )
                )
            );
        }
    }]);

    return PlainFooter;
}(_react2.default.Component);

exports.default = (0, _reactRouterDom.withRouter)(PlainFooter);

/***/ }),

/***/ 398:
/***/ (function(module, exports) {

module.exports = {"Adventurous":"I take risks.","Ambitious":"I am driven to succeed.","Approachable":"I work well with others.","Articulate":"I can express myself well in front of groups.","Autonomous":"I use initiative.","Calm":"I stay levelheaded in a crisis.","Charismatic":"I can be a leader when need be.","Cheerful":"I develop a positive work environment.","Clever":"I can juggle multiple tasks.","Competitive":"I thrive under pressure.","Confident":"I am not afraid to ask questions.","Cooperative":"I get along well in a team setting.","Courteous":"I care about workplace atmosphere.","Creative":"I think outside the box.","Curiosity":"I am eager to learn.","Determined":"I am self-motivated.","Devoted":"I am committed to the company’s success.","Diligent":"I always work my hardest.","Easygoing":"I easily adapt to new situations.","Educated":"I possess formal training.","Efficient":"I have very quick turnover time.","Eloquent":"I have strong communication skills.","Energetic":"I am able to work long and hard hours.","Enthusiastic":"I put my all into every project.","Flexible":"I am able to adapt my priorities.","Focused":"I am goal-oriented.","Friendly":"I am easy to work with.","Honest":"I value integrity.","Imaginative":"I am inventive in my work process.","Independent":"I need little direction.","Inexperienced":"I am a blank pallet.","Inquisitive":"I am excellent at gathering information.","Insightful":"I can read between the lines.","Intuitive":"I can sense when there is a problem.","Meticulous":"I pay attention to the small details.","Neurotic":"I am a perfectionist.","Open-minded":"I take constructive criticism well.","Opinionated":"I am comfortable voicing opinions.","Organized":"I am a meticulous planner.","Patient":"I am not easily ruffled.","Perceptive":"I can read people effortlessly.","Persuasive":"I am a natural salesperson.","Procedural":"I work best with structure.","Punctual":"I have great time management skills.","Quiet":"I am a great listener.","Relaxed":"I do not stress easily.","Resourceful":"I use every tool at hand.","Responsible":"I always finish a task on time.","Talkative":"I am comfortable initiating a dialogue.","Technological":"I am industrially savvy."}

/***/ }),

/***/ 399:
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emotion_sheet__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__emotion_stylis__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__emotion_weak_memoize__ = __webpack_require__(402);




// https://github.com/thysultan/stylis.js/tree/master/plugins/rule-sheet
// inlined to avoid umd wrapper and peerDep warnings/installing stylis
// since we use stylis after closure compiler
var delimiter = '/*|*/';
var needle = delimiter + '}';

function toSheet(block) {
  if (block) {
    Sheet.current.insert(block + '}');
  }
}

var Sheet = {
  current: null
};
var ruleSheet = function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
  switch (context) {
    // property
    case 1:
      {
        switch (content.charCodeAt(0)) {
          case 64:
            {
              // @import
              Sheet.current.insert(content + ';');
              return '';
            }
          // charcode for l

          case 108:
            {
              // charcode for b
              // this ignores label
              if (content.charCodeAt(2) === 98) {
                return '';
              }
            }
        }

        break;
      }
    // selector

    case 2:
      {
        if (ns === 0) return content + delimiter;
        break;
      }
    // at-rule

    case 3:
      {
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            {
              Sheet.current.insert(selectors[0] + content);
              return '';
            }

          default:
            {
              return content + (at === 0 ? delimiter : '');
            }
        }
      }

    case -2:
      {
        content.split(needle).forEach(toSheet);
      }
  }
};

var createCache = function createCache(options) {
  if (options === undefined) options = {};
  var key = options.key || 'css';
  var stylisOptions;

  if (options.prefix !== undefined) {
    stylisOptions = {
      prefix: options.prefix
    };
  }

  var stylis = new __WEBPACK_IMPORTED_MODULE_1__emotion_stylis__["a" /* default */](stylisOptions);

  if (false) {
    // $FlowFixMe
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var inserted = {}; // $FlowFixMe

  var container;

  {
    container = options.container || document.head;
    var nodes = document.querySelectorAll("style[data-emotion-" + key + "]");
    Array.prototype.forEach.call(nodes, function (node) {
      var attrib = node.getAttribute("data-emotion-" + key); // $FlowFixMe

      attrib.split(' ').forEach(function (id) {
        inserted[id] = true;
      });

      if (node.parentNode !== container) {
        container.appendChild(node);
      }
    });
  }

  var _insert;

  {
    stylis.use(options.stylisPlugins)(ruleSheet);

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      Sheet.current = sheet;

      if (false) {
        var map = serialized.map;
        Sheet.current = {
          insert: function insert(rule) {
            sheet.insert(rule + map);
          }
        };
      }

      stylis(selector, serialized.styles);

      if (shouldCache) {
        cache.inserted[name] = true;
      }
    };
  }

  if (false) {
    // https://esbench.com/bench/5bf7371a4cd7e6009ef61d0a
    var commentStart = /\/\*/g;
    var commentEnd = /\*\//g;
    stylis.use(function (context, content) {
      switch (context) {
        case -1:
          {
            while (commentStart.test(content)) {
              commentEnd.lastIndex = commentStart.lastIndex;

              if (commentEnd.test(content)) {
                commentStart.lastIndex = commentEnd.lastIndex;
                continue;
              }

              throw new Error('Your styles have an unterminated comment ("/*" without corresponding "*/").');
            }

            commentStart.lastIndex = 0;
            break;
          }
      }
    });
    stylis.use(function (context, content, selectors) {
      switch (context) {
        case -1:
          {
            var flag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';
            var unsafePseudoClasses = content.match(/(:first|:nth|:nth-last)-child/g);

            if (unsafePseudoClasses && cache.compat !== true) {
              unsafePseudoClasses.forEach(function (unsafePseudoClass) {
                var ignoreRegExp = new RegExp(unsafePseudoClass + ".*\\/\\* " + flag + " \\*\\/");
                var ignore = ignoreRegExp.test(content);

                if (unsafePseudoClass && !ignore) {
                  console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
                }
              });
            }

            break;
          }
      }
    });
  }

  var cache = {
    key: key,
    sheet: new __WEBPACK_IMPORTED_MODULE_0__emotion_sheet__["a" /* StyleSheet */]({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  return cache;
};

/* harmony default export */ __webpack_exports__["a"] = (createCache);


/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["a"] = (stylis_min);


/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

/* unused harmony default export */ var _unused_webpack_default_export = (weakMemoize);


/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getRegisteredStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return insertStyles; });
var isBrowser = "object" !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className]);
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      var maybeStyles = cache.insert("." + className, current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};




/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

/* harmony default export */ __webpack_exports__["a"] = (murmur2);


/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["a"] = (unitlessKeys);


/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["a"] = (memoize);


/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var React = __importStar(__webpack_require__(5));
var core_1 = __webpack_require__(103);
var helpers_1 = __webpack_require__(157);
var grid = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {transform: scale(1)}\n  50% {transform: scale(0.5); opacity: 0.7}\n  100% {transform: scale(1);opacity: 1}\n"], ["\n  0% {transform: scale(1)}\n  50% {transform: scale(0.5); opacity: 0.7}\n  100% {transform: scale(1);opacity: 1}\n"])));
var random = function (top) { return Math.random() * top; };
var Loader = /** @class */ (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.style = function (rand) {
            var _a = _this.props, color = _a.color, size = _a.size, margin = _a.margin;
            return core_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      display: inline-block;\n      background-color: ", ";\n      width: ", ";\n      height: ", ";\n      margin: ", ";\n      border-radius: 100%;\n      animation-fill-mode: \"both\";\n      animation: ", " ", "s ", "s infinite ease;\n    "], ["\n      display: inline-block;\n      background-color: ", ";\n      width: ", ";\n      height: ", ";\n      margin: ", ";\n      border-radius: 100%;\n      animation-fill-mode: \"both\";\n      animation: ", " ", "s ", "s infinite ease;\n    "])), color, helpers_1.cssValue(size), helpers_1.cssValue(size), helpers_1.cssValue(margin), grid, rand / 100 + 0.6, rand / 100 - 0.2);
        };
        _this.wrapper = function () {
            var _a = _this.props, size = _a.size, margin = _a.margin;
            var sizeWithUnit = helpers_1.parseLengthAndUnit(size);
            var marginWithUnit = helpers_1.parseLengthAndUnit(margin);
            var width = "" + (parseFloat(sizeWithUnit.value.toString()) * 3 +
                parseFloat(marginWithUnit.value.toString()) * 6) + sizeWithUnit.unit;
            return core_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      width: ", ";\n      font-size: 0;\n    "], ["\n      width: ", ";\n      font-size: 0;\n    "])), width);
        };
        return _this;
    }
    Loader.prototype.render = function () {
        var _a = this.props, loading = _a.loading, css = _a.css;
        return loading ? (core_1.jsx("div", { css: [this.wrapper(), css] },
            core_1.jsx("div", { css: this.style(random(100)) }),
            core_1.jsx("div", { css: this.style(random(100)) }),
            core_1.jsx("div", { css: this.style(random(100)) }),
            core_1.jsx("div", { css: this.style(random(100)) }),
            core_1.jsx("div", { css: this.style(random(100)) }),
            core_1.jsx("div", { css: this.style(random(100)) }),
            core_1.jsx("div", { css: this.style(random(100)) }),
            core_1.jsx("div", { css: this.style(random(100)) }),
            core_1.jsx("div", { css: this.style(random(100)) }))) : null;
    };
    Loader.defaultProps = helpers_1.sizeMarginDefaults(15);
    return Loader;
}(React.PureComponent));
exports.default = Loader;
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var commonValues = {
    loading: true,
    color: "#000000",
    css: ""
};
function sizeDefaults(sizeValue) {
    return Object.assign({}, commonValues, { size: sizeValue });
}
exports.sizeDefaults = sizeDefaults;
function sizeMarginDefaults(sizeValue) {
    return Object.assign({}, sizeDefaults(sizeValue), {
        margin: 2
    });
}
exports.sizeMarginDefaults = sizeMarginDefaults;
function heightWidthDefaults(height, width) {
    return Object.assign({}, commonValues, {
        height: height,
        width: width
    });
}
exports.heightWidthDefaults = heightWidthDefaults;
function heightWidthRadiusDefaults(height, width, radius) {
    if (radius === void 0) { radius = 2; }
    return Object.assign({}, heightWidthDefaults(height, width), {
        radius: radius,
        margin: 2
    });
}
exports.heightWidthRadiusDefaults = heightWidthRadiusDefaults;


/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BasicColors;
(function (BasicColors) {
    BasicColors["maroon"] = "#800000";
    BasicColors["red"] = "#FF0000";
    BasicColors["orange"] = "#FFA500";
    BasicColors["yellow"] = "#FFFF00";
    BasicColors["olive"] = "#808000";
    BasicColors["green"] = "#008000";
    BasicColors["purple"] = "#800080";
    BasicColors["fuchsia"] = "#FF00FF";
    BasicColors["lime"] = "#00FF00";
    BasicColors["teal"] = "#008080";
    BasicColors["aqua"] = "#00FFFF";
    BasicColors["blue"] = "#0000FF";
    BasicColors["navy"] = "#000080";
    BasicColors["black"] = "#000000";
    BasicColors["gray"] = "#808080";
    BasicColors["silver"] = "#C0C0C0";
    BasicColors["white"] = "#FFFFFF";
})(BasicColors || (BasicColors = {}));
exports.calculateRgba = function (color, opacity) {
    if (Object.keys(BasicColors).includes(color)) {
        color = BasicColors[color];
    }
    if (color[0] === "#") {
        color = color.slice(1);
    }
    if (color.length === 3) {
        var res_1 = "";
        color.split("").forEach(function (c) {
            res_1 += c;
            res_1 += c;
        });
        color = res_1;
    }
    var rgbValues = color
        .match(/.{2}/g)
        .map(function (hex) { return parseInt(hex, 16); })
        .join(", ");
    return "rgba(" + rgbValues + ", " + opacity + ")";
};


/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cssUnit = {
    cm: true,
    mm: true,
    in: true,
    px: true,
    pt: true,
    pc: true,
    em: true,
    ex: true,
    ch: true,
    rem: true,
    vw: true,
    vh: true,
    vmin: true,
    vmax: true,
    "%": true
};
/**
 * If size is a number, append px to the value as default unit.
 * If size is a string, validate against list of valid units.
 * If unit is valid, return size as is.
 * If unit is invalid, console warn issue, replace with px as the unit.
 *
 * @param {(number | string)} size
 * @return {LengthObject} LengthObject
 */
function parseLengthAndUnit(size) {
    if (typeof size === "number") {
        return {
            value: size,
            unit: "px"
        };
    }
    var value;
    var valueString = size.match(/^[0-9.]*/).toString();
    if (valueString.includes(".")) {
        value = parseFloat(valueString);
    }
    else {
        value = parseInt(valueString, 10);
    }
    var unit = size.match(/[^0-9]*$/).toString();
    if (cssUnit[unit]) {
        return {
            value: value,
            unit: unit
        };
    }
    console.warn("React Spinners: " + size + " is not a valid css value. Defaulting to " + value + "px.");
    return {
        value: value,
        unit: "px"
    };
}
exports.parseLengthAndUnit = parseLengthAndUnit;
/**
 * Take value as an input and return valid css value
 *
 * @param {(number | string)} value
 * @return {string} valid css value
 */
function cssValue(value) {
    var lengthWithunit = parseLengthAndUnit(value);
    return "" + lengthWithunit.value + lengthWithunit.unit;
}
exports.cssValue = cssValue;


/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var React = __importStar(__webpack_require__(5));
var core_1 = __webpack_require__(103);
var index_1 = __webpack_require__(157);
var Loader = /** @class */ (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.thickness = function () {
            var size = _this.props.size;
            var value = index_1.parseLengthAndUnit(size).value;
            return value / 5;
        };
        _this.lat = function () {
            var size = _this.props.size;
            var value = index_1.parseLengthAndUnit(size).value;
            return (value - _this.thickness()) / 2;
        };
        _this.offset = function () { return _this.lat() - _this.thickness(); };
        _this.color = function () {
            var color = _this.props.color;
            return index_1.calculateRgba(color, 0.75);
        };
        _this.before = function () {
            var size = _this.props.size;
            var color = _this.color();
            var lat = _this.lat();
            var thickness = _this.thickness();
            var offset = _this.offset();
            return core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      0% {width: ", "px;box-shadow: ", "px ", "px ", ", ", "px ", "px ", "}\n      35% {width: ", ";box-shadow: 0 ", "px ", ", 0 ", "px ", "}\n      70% {width: ", "px;box-shadow: ", "px ", "px ", ", ", "px ", "px ", "}\n      100% {box-shadow: ", "px ", "px ", ", ", "px ", "px ", "}\n    "], ["\n      0% {width: ", "px;box-shadow: ", "px ", "px ", ", ", "px ", "px ", "}\n      35% {width: ", ";box-shadow: 0 ", "px ", ", 0 ", "px ", "}\n      70% {width: ", "px;box-shadow: ", "px ", "px ", ", ", "px ", "px ", "}\n      100% {box-shadow: ", "px ", "px ", ", ", "px ", "px ", "}\n    "])), thickness, lat, -offset, color, -lat, offset, color, index_1.cssValue(size), -offset, color, offset, color, thickness, -lat, -offset, color, lat, offset, color, lat, -offset, color, -lat, offset, color);
        };
        _this.after = function () {
            var size = _this.props.size;
            var color = _this.color();
            var lat = _this.lat();
            var thickness = _this.thickness();
            var offset = _this.offset();
            return core_1.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      0% {height: ", "px;box-shadow: ", "px ", "px ", ", ", "px ", "px ", "}\n      35% {height: ", ";box-shadow: ", "px 0 ", ", ", "px 0 ", "}\n      70% {height: ", "px;box-shadow: ", "px ", "px ", ", ", "px ", "px ", "}\n      100% {box-shadow: ", "px ", "px ", ", ", "px ", "px ", "}\n    "], ["\n      0% {height: ", "px;box-shadow: ", "px ", "px ", ", ", "px ", "px ", "}\n      35% {height: ", ";box-shadow: ", "px 0 ", ", ", "px 0 ", "}\n      70% {height: ", "px;box-shadow: ", "px ", "px ", ", ", "px ", "px ", "}\n      100% {box-shadow: ", "px ", "px ", ", ", "px ", "px ", "}\n    "])), thickness, offset, lat, color, -offset, -lat, color, index_1.cssValue(size), offset, color, -offset, color, thickness, offset, -lat, color, -offset, lat, color, offset, lat, color, -offset, -lat, color);
        };
        _this.style = function (i) {
            var size = _this.props.size;
            var _a = index_1.parseLengthAndUnit(size), value = _a.value, unit = _a.unit;
            return core_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      position: absolute;\n      content: \"\";\n      top: 50%;\n      left: 50%;\n      display: block;\n      width: ", ";\n      height: ", ";\n      border-radius: ", ";\n      transform: translate(-50%, -50%);\n      animation-fill-mode: none;\n      animation: ", " 2s infinite;\n    "], ["\n      position: absolute;\n      content: \"\";\n      top: 50%;\n      left: 50%;\n      display: block;\n      width: ", ";\n      height: ", ";\n      border-radius: ", ";\n      transform: translate(-50%, -50%);\n      animation-fill-mode: none;\n      animation: ", " 2s infinite;\n    "])), "" + value / 5 + unit, "" + value / 5 + unit, "" + value / 10 + unit, i === 1 ? _this.before() : _this.after());
        };
        _this.wrapper = function () {
            var size = _this.props.size;
            return core_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      position: relative;\n      width: ", ";\n      height: ", ";\n      transform: rotate(165deg);\n    "], ["\n      position: relative;\n      width: ", ";\n      height: ", ";\n      transform: rotate(165deg);\n    "])), index_1.cssValue(size), index_1.cssValue(size));
        };
        return _this;
    }
    Loader.prototype.render = function () {
        var _a = this.props, loading = _a.loading, css = _a.css;
        return loading ? (core_1.jsx("div", { css: [this.wrapper(), css] },
            core_1.jsx("div", { css: this.style(1) }),
            core_1.jsx("div", { css: this.style(2) }))) : null;
    };
    Loader.defaultProps = index_1.sizeDefaults(50);
    return Loader;
}(React.PureComponent));
exports.default = Loader;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AboutPageView = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _AboutPage = __webpack_require__(413);

var _AboutPage2 = _interopRequireDefault(_AboutPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AboutPageView = exports.AboutPageView = function (_React$Component) {
    _inherits(AboutPageView, _React$Component);

    function AboutPageView(props) {
        _classCallCheck(this, AboutPageView);

        var _this = _possibleConstructorReturn(this, (AboutPageView.__proto__ || Object.getPrototypeOf(AboutPageView)).call(this, props));

        _this.state = {
            loading: false,
            data: []
        };
        return _this;
    }

    _createClass(AboutPageView, [{
        key: "componentWillMount",
        value: function componentWillMount() {}
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(_AboutPage2.default, null);
        }
    }]);

    return AboutPageView;
}(_react2.default.Component);

/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouterDom = __webpack_require__(51);

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _Page = __webpack_require__(153);

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LandingPage = function (_React$Component) {
    _inherits(LandingPage, _React$Component);

    function LandingPage(props) {
        _classCallCheck(this, LandingPage);

        var _this = _possibleConstructorReturn(this, (LandingPage.__proto__ || Object.getPrototypeOf(LandingPage)).call(this, props));

        _this.handleSearch = _this.handleSearch.bind(_this);
        return _this;
    }

    _createClass(LandingPage, [{
        key: 'handleSearch',
        value: function handleSearch(event) {
            event.preventDefault();

            this.props.handleSearch();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _Page2.default,
                null,
                _react2.default.createElement(
                    'div',
                    { 'class': 'w-100 p-3 ml-5' },
                    _react2.default.createElement('div', { className: 'p-xl-3', style: { width: "90%", alignItems: "center", margin: "auto" } })
                )
            );
        }
    }]);

    return LandingPage;
}(_react2.default.Component);

exports.default = (0, _reactRouterDom.withRouter)(LandingPage);

/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.o=b||a;this.c=this.o.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function ea(a){return a.o.location.hostname||a.a.location.hostname}function z(a,b,c){function d(){m&&e&&f&&(m(g),m=null)}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,m=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);u(a,"head",b)}
function A(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function B(){this.a=0;this.c=null}function C(a){a.a++;return function(){a.a--;D(a)}}function E(a,b){a.c=b;D(a)}function D(a){0==a.a&&a.c&&(a.c(),a.c=null)};function F(a){this.a=a||"-"}F.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function G(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return H(a)+" "+(a.f+"00")+" 300px "+I(a.c)}function I(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function J(a){return a.a+a.f}function H(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.o.document.documentElement;this.h=b;this.a=new F("-");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);K(a,"loading")}function L(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d)}K(a,"inactive")}function K(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,J(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function M(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f)}function N(a){u(a.c,"body",a.a)}function O(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+I(a.c)+";"+("font-style:"+H(a)+";font-weight:"+(a.f+"00")+";")};function P(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}P.prototype.start=function(){var a=this.c.o.document,b=this,c=q(),d=new Promise(function(d,e){function f(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(f,25)},function(){e()})}f()}),e=null,f=new Promise(function(a,d){e=setTimeout(d,b.f)});Promise.race([f,d]).then(function(){e&&(clearTimeout(e),e=null);b.g(b.a)},function(){b.j(b.a)})};function Q(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.m=this.j=this.h=this.g=null;this.g=new M(this.c,this.s);this.h=new M(this.c,this.s);this.j=new M(this.c,this.s);this.m=new M(this.c,this.s);a=new G(this.a.c+",serif",J(this.a));a=O(a);this.g.a.style.cssText=a;a=new G(this.a.c+",sans-serif",J(this.a));a=O(a);this.h.a.style.cssText=a;a=new G("serif",J(this.a));a=O(a);this.j.a.style.cssText=a;a=new G("sans-serif",J(this.a));a=
O(a);this.m.a.style.cssText=a;N(this.g);N(this.h);N(this.j);N(this.m)}var R={D:"serif",C:"sans-serif"},S=null;function T(){if(null===S){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);S=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return S}Q.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.m.a.offsetWidth;this.A=q();U(this)};
function la(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.f[R[d]]&&c===a.f[R[d]])return!0;return!1}function U(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=T()&&la(a,b,c));d?q()-a.A>=a.w?T()&&la(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):ma(a):V(a,a.v)}function ma(a){setTimeout(p(function(){U(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.m.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.m=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,J(a).toString(),"active")],[b.a.c("wf",a.c,J(a).toString(),"loading"),b.a.c("wf",a.c,J(a).toString(),"inactive")]);K(b,"fontactive",a);this.m=!0;na(this)};
W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,J(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,J(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,J(a).toString(),"inactive"));w(b.f,d,e)}K(b,"fontinactive",a);na(this)};function na(a){0==--a.f&&a.j&&(a.m?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),K(a,"active")):L(a.a))};function oa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}oa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;pa(this,new ha(this.c,a),a)};
function qa(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,m=d||null||{};if(0===c.length&&f)L(b.a);else{b.f+=c.length;f&&(b.j=f);var h,l=[];for(h=0;h<c.length;h++){var k=c[h],n=m[k.c],r=b.a,x=k;r.g&&w(r.f,[r.a.c("wf",x.c,J(x).toString(),"loading")]);K(r,"fontloading",x);r=null;if(null===X)if(window.FontFace){var x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),xa=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);
X=x?42<parseInt(x[1],10):xa?!1:!0}else X=!1;X?r=new P(p(b.g,b),p(b.h,b),b.c,k,b.s,n):r=new Q(p(b.g,b),p(b.h,b),b.c,k,b.s,a,n);l.push(r)}for(h=0;h<l.length;h++)l[h].start()}},0)}function pa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){qa(a,f,b,d,c)})};function ra(a,b){this.c=a;this.a=b}
ra.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var l=0;l<c.length;l++){var k=c[l].fontfamily;void 0!=c[l].fontStyle&&void 0!=c[l].fontWeight?(h=c[l].fontStyle+c[l].fontWeight,e.push(new G(k,h))):e.push(new G(k))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.o;A(this.c,(c.a.api||"https://fast.fonts.net/jsapi")+"/"+d+".js"+(e?"?v="+e:""),function(e){e?a([]):(f["__MonotypeConfiguration__"+
d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+d}else a([])};function sa(a,b){this.c=a;this.a=b}sa.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new B;b=0;for(c=d.length;b<c;b++)z(this.c,d[b],C(g));var m=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),l=0;l<h.length;l+=1)m.push(new G(d[0],h[l]));else m.push(new G(d[0]));E(g,function(){a(m,f)})};function ta(a,b){a?this.c=a:this.c=ua;this.a=[];this.f=[];this.g=b||""}var ua="https://fonts.googleapis.com/css";function va(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f))}}
function wa(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b};function ya(a){this.f=a;this.a=[];this.c={}}
var za={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Aa={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ba={i:"i",italic:"i",n:"n",normal:"n"},
Ca=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Da(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var m=d[1];g=[];if(m)for(var m=m.split(","),h=m.length,l=0;l<h;l++){var k;k=m[l];if(k.match(/^[\w-]+$/)){var n=Ca.exec(k.toLowerCase());if(null==n)k="";else{k=n[2];k=null==k||""==k?"n":Ba[k];n=n[1];if(null==n||""==n)n="4";else var r=Aa[n],n=r?r:isNaN(n)?"4":n.substr(0,1);k=[k,n].join("")}}else k="";k&&g.push(k)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
g,0<d.length&&(d=za[d[0]])&&(a.c[e]=d))}a.c[e]||(d=za[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new G(e,f[d]))}};function Ea(a,b){this.c=a;this.a=b}var Fa={Arimo:!0,Cousine:!0,Tinos:!0};Ea.prototype.load=function(a){var b=new B,c=this.c,d=new ta(this.a.api,this.a.text),e=this.a.families;va(d,e);var f=new ya(e);Da(f);z(c,wa(d),C(b));E(b,function(){a(f.a,f.c,Fa)})};function Ga(a,b){this.c=a;this.a=b}Ga.prototype.load=function(a){var b=this.a.id,c=this.c.o;b?A(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],m=b[f+1],h=0;h<m.length;h++)e.push(new G(g,m[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(l){}a(e)}},2E3):a([])};function Ha(a,b){this.c=a;this.f=b;this.a=[]}Ha.prototype.load=function(a){var b=this.f.id,c=this.c.o,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,m=c.fonts.length;g<m;++g){var h=c.fonts[g];d.a.push(new G(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},A(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var Y=new oa(window);Y.a.c.custom=function(a,b){return new sa(b,a)};Y.a.c.fontdeck=function(a,b){return new Ha(b,a)};Y.a.c.monotype=function(a,b){return new ra(b,a)};Y.a.c.typekit=function(a,b){return new Ga(b,a)};Y.a.c.google=function(a,b){return new Ea(b,a)};var Z={load:p(Y.load,Y)}; true?!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return Z}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"undefined"!==typeof module&&module.exports?module.exports=Z:(window.WebFont=Z,window.WebFontConfig&&Y.load(window.WebFontConfig));}());


/***/ }),

/***/ 415:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 416:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[390]);