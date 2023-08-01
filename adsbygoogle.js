'use strict';
(function (argSpeed) {
  /**
   * @param {!Array} object
   * @return {?}
   */
  function sync(object) {
    /** @type {number} */
    var i = 0;
    return function () {
      return i < object.length ? {
        done: false,
        value: object[i++]
      } : {
        done: true
      };
    };
  }
  /**
   * @param {!Array} children
   * @return {?}
   */
  function dom(children) {
    /** @type {!Array} */
    children = ["object" == typeof globalThis && globalThis, children, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    /** @type {number} */
    var i = 0;
    for (; i < children.length; ++i) {
      var window = children[i];
      if (window && window.Math == Math) {
        return window;
      }
    }
    throw Error("Cannot find global object");
  }
  /**
   * @param {string} object
   * @param {string} name
   * @param {number} value
   * @return {?}
   */
  function define(object, name, value) {
    if (!value || null != object) {
      value = props[name];
      if (null == value) {
        return object[name];
      }
      value = object[value];
      return void 0 !== value ? value : object[name];
    }
  }
  /**
   * @param {string} value
   * @param {!Function} a
   * @param {?} v
   * @return {undefined}
   */
  function test(value, a, v) {
    if (a) {
      a: {
        /** @type {!Array<string>} */
        var p = value.split(".");
        /** @type {boolean} */
        value = 1 === p.length;
        /** @type {string} */
        var name = p[0];
        var obj;
        if (!value && name in global) {
          obj = global;
        } else {
          obj = root;
        }
        /** @type {number} */
        name = 0;
        for (; name < p.length - 1; name++) {
          /** @type {string} */
          var prop = p[name];
          if (!(prop in obj)) {
            break a;
          }
          obj = obj[prop];
        }
        /** @type {string} */
        p = p[p.length - 1];
        v = copyValues && "es6" === v ? obj[p] : null;
        a = a(v);
        if (null != a) {
          if (value) {
            defineProperty(global, p, {
              configurable: true,
              writable: true,
              value: a
            });
          } else {
            if (a !== v) {
              if (void 0 === props[p]) {
                /** @type {number} */
                value = 1E9 * Math.random() >>> 0;
                props[p] = copyValues ? root.Symbol(p) : "$jscp$" + value + "$" + p;
              }
              defineProperty(obj, props[p], {
                configurable: true,
                writable: true,
                value: a
              });
            }
          }
        }
      }
    }
  }
  /**
   * @param {string} next
   * @return {?}
   */
  function operation(next) {
    next = {
      next: next
    };
    /**
     * @return {?}
     */
    next[define(global.Symbol, "iterator")] = function () {
      return this;
    };
    return next;
  }
  /**
   * @param {!Object} req
   * @return {?}
   */
  function io(req) {
    return req.raw = req;
  }
  /**
   * @param {!Array} name
   * @return {?}
   */
  function $(name) {
    var TAGS_ADDED = "undefined" != typeof global.Symbol && define(global.Symbol, "iterator") && name[define(global.Symbol, "iterator")];
    if (TAGS_ADDED) {
      return TAGS_ADDED.call(name);
    }
    if ("number" == typeof name.length) {
      return {
        next: sync(name)
      };
    }
    throw Error(String(name) + " is not an iterable or ArrayLike");
  }
  /**
   * @param {!Object} items
   * @return {?}
   */
  function toArray(items) {
    if (!(items instanceof Array)) {
      items = $(items);
      var _s;
      /** @type {!Array} */
      var _arr = [];
      for (; !(_s = items.next()).done;) {
        _arr.push(_s.value);
      }
      /** @type {!Array} */
      items = _arr;
    }
    return items;
  }
  /**
   * @param {!Object} value
   * @param {string} object
   * @return {?}
   */
  function isFunction(value, object) {
    return Object.prototype.hasOwnProperty.call(value, object);
  }
  /**
   * @param {!Function} obj
   * @param {!Function} target
   * @return {undefined}
   */
  function __extends(obj, target) {
    obj.prototype = __create(target.prototype);
    /** @type {!Function} */
    obj.prototype.constructor = obj;
    if (oldGetContextMenuItems) {
      oldGetContextMenuItems(obj, target);
    } else {
      var key;
      for (key in target) {
        if ("prototype" != key) {
          if (Object.defineProperties) {
            /** @type {(ObjectPropertyDescriptor<!Function>|undefined)} */
            var actualDescriptor = Object.getOwnPropertyDescriptor(target, key);
            if (actualDescriptor) {
              Object.defineProperty(obj, key, actualDescriptor);
            }
          } else {
            obj[key] = target[key];
          }
        }
      }
    }
    obj.kc = target.prototype;
  }
  /**
   * @return {undefined}
   */
  function colorRgbToHsl() {
    /** @type {boolean} */
    this.l = false;
    /** @type {null} */
    this.h = null;
    this.A = void 0;
    /** @type {number} */
    this.g = 1;
    /** @type {number} */
    this.u = 0;
    /** @type {null} */
    this.j = null;
  }
  /**
   * @param {!Object} word
   * @return {undefined}
   */
  function toHex(word) {
    if (word.l) {
      throw new TypeError("Generator is already running");
    }
    /** @type {boolean} */
    word.l = true;
  }
  /**
   * @param {!Object} result
   * @param {!Error} x
   * @return {undefined}
   */
  function shadeColor(result, x) {
    result.j = {
      exception: x,
      rb: true
    };
    result.g = result.u;
  }
  /**
   * @param {!Object} object
   * @param {!Object} keys
   * @param {number} data
   * @return {?}
   */
  function string(object, keys, data) {
    /** @type {number} */
    object.g = data;
    return {
      value: keys
    };
  }
  /**
   * @param {number} state
   * @return {undefined}
   */
  function MaintainRGB(state) {
    this.g = new colorRgbToHsl;
    /** @type {number} */
    this.h = state;
  }
  /**
   * @param {!Object} data
   * @param {!Array} value
   * @return {?}
   */
  function send(data, value) {
    toHex(data.g);
    var cond = data.g.h;
    if (cond) {
      return cleanup(data, "return" in cond ? cond["return"] : function (command_module_id) {
        return {
          value: command_module_id,
          done: true
        };
      }, value, data.g.return);
    }
    data.g.return(value);
    return copy(data);
  }
  /**
   * @param {!Object} data
   * @param {!Function} conn
   * @param {?} obj
   * @param {!Function} t
   * @return {?}
   */
  function cleanup(data, conn, obj, t) {
    try {
      var item = conn.call(data.g.h, obj);
      if (!(item instanceof Object)) {
        throw new TypeError("Iterator result " + item + " is not an object");
      }
      if (!item.done) {
        return data.g.l = false, item;
      }
      var limit = item.value;
    } catch (interval) {
      return data.g.h = null, shadeColor(data.g, interval), copy(data);
    }
    /** @type {null} */
    data.g.h = null;
    t.call(data.g, limit);
    return copy(data);
  }
  /**
   * @param {!Object} color
   * @return {?}
   */
  function copy(color) {
    for (; color.g.g;) {
      try {
        var self = color.h(color.g);
        if (self) {
          return color.g.l = false, {
            value: self.value,
            done: false
          };
        }
      } catch (interval) {
        color.g.A = void 0;
        shadeColor(color.g, interval);
      }
    }
    /** @type {boolean} */
    color.g.l = false;
    if (color.g.j) {
      self = color.g.j;
      /** @type {null} */
      color.g.j = null;
      if (self.rb) {
        throw self.exception;
      }
      return {
        value: self.return,
        done: true
      };
    }
    return {
      value: void 0,
      done: true
    };
  }
  /**
   * @param {!Object} data
   * @return {undefined}
   */
  function AppEventHandlerIterator(data) {
    /**
     * @param {?} value
     * @return {?}
     */
    this.next = function (value) {
      toHex(data.g);
      if (data.g.h) {
        value = cleanup(data, data.g.h.next, value, data.g.m);
      } else {
        data.g.m(value);
        value = copy(data);
      }
      return value;
    };
    /**
     * @param {!Error} value
     * @return {?}
     */
    this.throw = function (value) {
      toHex(data.g);
      if (data.g.h) {
        value = cleanup(data, data.g.h["throw"], value, data.g.m);
      } else {
        shadeColor(data.g, value);
        value = copy(data);
      }
      return value;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    this.return = function (value) {
      return send(data, value);
    };
    /**
     * @return {?}
     */
    this[define(global.Symbol, "iterator")] = function () {
      return this;
    };
  }
  /**
   * @param {!Object} options
   * @return {?}
   */
  function findFile(options) {
    /**
     * @param {?} data
     * @return {?}
     */
    function check(data) {
      return options.next(data);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function show(value) {
      return options.throw(value);
    }
    return new global.Promise(function ($, oldEventMap) {
      /**
       * @param {!Object} ui
       * @return {undefined}
       */
      function callback(ui) {
        if (ui.done) {
          $(ui.value);
        } else {
          global.Promise.resolve(ui.value).then(check, show).then(callback, oldEventMap);
        }
      }
      callback(options.next());
    });
  }
  /**
   * @param {!Function} opt_msg
   * @return {?}
   */
  function promise(opt_msg) {
    return findFile(new AppEventHandlerIterator(new MaintainRGB(opt_msg)));
  }
  /**
   * @return {?}
   */
  function htmlWebPackPluginAssets() {
    /** @type {number} */
    var start = Number(this);
    /** @type {!Array} */
    var array = [];
    /** @type {number} */
    var i = start;
    for (; i < arguments.length; i++) {
      array[i - start] = arguments[i];
    }
    return array;
  }
  /**
   * @param {string} count
   * @param {!Object} str
   * @param {string} name
   * @return {?}
   */
  function context(count, str, name) {
    if (null == count) {
      throw new TypeError("The 'this' value for String.prototype." + name + " must not be null or undefined");
    }
    if (str instanceof RegExp) {
      throw new TypeError("First argument to String.prototype." + name + " must not be a regular expression");
    }
    return count + "";
  }
  /**
   * @param {string} node
   * @param {!Function} $
   * @return {?}
   */
  function assembleTree(node, $) {
    if (node instanceof String) {
      /** @type {string} */
      node = node + "";
    }
    /** @type {number} */
    var ii = 0;
    /** @type {boolean} */
    var has_comma = false;
    var snode = {
      next: function () {
        if (!has_comma && ii < node.length) {
          /** @type {number} */
          var i = ii++;
          return {
            value: $(i, node[i]),
            done: false
          };
        }
        /** @type {boolean} */
        has_comma = true;
        return {
          done: true,
          value: void 0
        };
      }
    };
    /**
     * @return {?}
     */
    snode[define(global.Symbol, "iterator")] = function () {
      return snode;
    };
    return snode;
  }
  /**
   * @param {string} a
   * @return {?}
   */
  function rowSort(a) {
    /** @type {!Array<string>} */
    a = a.split(".");
    var p = win;
    /** @type {number} */
    var i = 0;
    for (; i < a.length; i++) {
      if (p = p[a[i]], null == p) {
        return null;
      }
    }
    return p;
  }
  /**
   * @param {string} val
   * @return {?}
   */
  function condition(val) {
    /** @type {string} */
    var object = typeof val;
    return "object" != object ? object : val ? Array.isArray(val) ? "array" : object : "null";
  }
  /**
   * @param {string} val
   * @return {?}
   */
  function scroll(val) {
    var type = condition(val);
    return "array" == type || "object" == type && "number" == typeof val.length;
  }
  /**
   * @param {?} value
   * @return {?}
   */
  function _isObject(value) {
    /** @type {string} */
    var type = typeof value;
    return "object" == type && null != value || "function" == type;
  }
  /**
   * @param {!Object} args
   * @return {?}
   */
  function fn(args) {
    return Object.prototype.hasOwnProperty.call(args, opt) && args[opt] || (args[opt] = ++Na$jscomp$0);
  }
  /**
   * @param {!Function} data
   * @param {?} key
   * @param {?} callback
   * @return {?}
   */
  function wxmlToFirebase(data, key, callback) {
    return data.call.apply(data.bind, arguments);
  }
  /**
   * @param {!Function} _
   * @param {!Function} callback
   * @param {?} options
   * @return {?}
   */
  function createMethod(_, callback, options) {
    if (!_) {
      throw Error();
    }
    if (2 < arguments.length) {
      /** @type {!Array<?>} */
      var cmd_args = Array.prototype.slice.call(arguments, 2);
      return function () {
        /** @type {!Array<?>} */
        var props = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(props, cmd_args);
        return _.apply(callback, props);
      };
    }
    return function () {
      return _.apply(callback, arguments);
    };
  }
  /**
   * @param {?} data
   * @param {?} options
   * @param {?} model
   * @return {?}
   */
  function one(data, options, model) {
    /** @type {function(!Function, ?, ?): ?} */
    one = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? wxmlToFirebase : createMethod;
    return one.apply(null, arguments);
  }
  /**
   * @param {!Function} event
   * @param {string} playlist
   * @return {?}
   */
  function proxy(event, playlist) {
    /** @type {!Array<?>} */
    var inheritedOptions = Array.prototype.slice.call(arguments, 1);
    return function () {
      /** @type {!Array<?>} */
      var item = inheritedOptions.slice();
      item.push.apply(item, arguments);
      return event.apply(this, item);
    };
  }
  /**
   * @param {string} fields
   * @param {!Array} node
   * @return {undefined}
   */
  function use(fields, node) {
    /** @type {!Array<string>} */
    fields = fields.split(".");
    var obj = win;
    if (!(fields[0] in obj || "undefined" == typeof obj.execScript)) {
      obj.execScript("var " + fields[0]);
    }
    var key;
    for (; fields.length && (key = fields.shift());) {
      if (fields.length || void 0 === node) {
        if (obj[key] && obj[key] !== Object.prototype[key]) {
          obj = obj[key];
        } else {
          obj = obj[key] = {};
        }
      } else {
        /** @type {!Array} */
        obj[key] = node;
      }
    }
  }
  /**
   * @param {string} script
   * @return {?}
   */
  function createScript(script) {
    return script;
  }
  /**
   * @param {string} selector
   * @return {?}
   */
  function exists(selector) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(selector)[1];
  }
  /**
   * @param {string} name
   * @param {!Object} base
   * @return {?}
   */
  function generate(name, base) {
    /** @type {number} */
    var center = 0;
    name = exists(String(name)).split(".");
    base = exists(String(base)).split(".");
    /** @type {number} */
    var numlabels = Math.max(name.length, base.length);
    /** @type {number} */
    var i = 0;
    for (; 0 == center && i < numlabels; i++) {
      var value = name[i] || "";
      var url = base[i] || "";
      do {
        /** @type {!Array} */
        value = /(\d*)(\D*)(.*)/.exec(value) || ["", "", "", ""];
        /** @type {!Array} */
        url = /(\d*)(\D*)(.*)/.exec(url) || ["", "", "", ""];
        if (0 == value[0].length && 0 == url[0].length) {
          break;
        }
        center = dispatchEvent(0 == value[1].length ? 0 : parseInt(value[1], 10), 0 == url[1].length ? 0 : parseInt(url[1], 10)) || dispatchEvent(0 == value[2].length, 0 == url[2].length) || dispatchEvent(value[2], url[2]);
        value = value[3];
        url = url[3];
      } while (0 == center);
    }
    return center;
  }
  /**
   * @param {number} progressOld
   * @param {number} progressNew
   * @return {?}
   */
  function dispatchEvent(progressOld, progressNew) {
    return progressOld < progressNew ? -1 : progressOld > progressNew ? 1 : 0;
  }
  /**
   * @return {?}
   */
  function userAgent() {
    var n = win.navigator;
    return n && (n = n.userAgent) ? n : "";
  }
  /**
   * @param {string} key
   * @return {?}
   */
  function onChange(key) {
    return isPopupCustom ? $scope ? $scope.brands.some(function (current) {
      return (current = current.brand) && -1 != current.indexOf(key);
    }) : false : false;
  }
  /**
   * @param {string} str
   * @return {?}
   */
  function toLowerCase(str) {
    return -1 != userAgent().indexOf(str);
  }
  /**
   * @return {?}
   */
  function inArray() {
    return isPopupCustom ? !!$scope && 0 < $scope.brands.length : false;
  }
  /**
   * @return {?}
   */
  function isIE() {
    return inArray() ? false : toLowerCase("Trident") || toLowerCase("MSIE");
  }
  /**
   * @return {?}
   */
  function unbind() {
    return inArray() ? onChange("Microsoft Edge") : toLowerCase("Edg/");
  }
  /**
   * @return {undefined}
   */
  function getBrowserInfo() {
    if (!(!toLowerCase("Safari") || _detectBrowserVersion() || (inArray() ? 0 : toLowerCase("Coast")) || (inArray() ? 0 : toLowerCase("Opera")) || (inArray() ? 0 : toLowerCase("Edge")) || unbind())) {
      if (inArray()) {
        onChange("Opera");
      }
    }
  }
  /**
   * @return {?}
   */
  function _detectBrowserVersion() {
    return inArray() ? onChange("Chromium") : (toLowerCase("Chrome") || toLowerCase("CriOS")) && !(inArray() ? 0 : toLowerCase("Edge")) || toLowerCase("Silk");
  }
  /**
   * @param {!Array} constructor
   * @return {?}
   */
  function mixin(constructor) {
    var args = {};
    constructor.forEach(function (regex) {
      args[regex[0]] = regex[1];
    });
    return function (callback) {
      return args[define(callback, "find").call(callback, function (callbackId) {
        return callbackId in args;
      })] || "";
    };
  }
  /**
   * @return {?}
   */
  function parse() {
    var t = userAgent();
    if (isIE()) {
      /** @type {(Array<string>|null)} */
      var target = /rv: *([\d\.]*)/.exec(t);
      if (target && target[1]) {
        /** @type {string} */
        t = target[1];
      } else {
        /** @type {string} */
        target = "";
        /** @type {(Array<string>|null)} */
        var r = /MSIE +([\d\.]+)/.exec(t);
        if (r && r[1]) {
          if (t = /Trident\/(\d.\d)/.exec(t), "7.0" == r[1]) {
            if (t && t[1]) {
              switch (t[1]) {
                case "4.0":
                  /** @type {string} */
                  target = "8.0";
                  break;
                case "5.0":
                  /** @type {string} */
                  target = "9.0";
                  break;
                case "6.0":
                  /** @type {string} */
                  target = "10.0";
                  break;
                case "7.0":
                  /** @type {string} */
                  target = "11.0";
              }
            } else {
              /** @type {string} */
              target = "7.0";
            }
          } else {
            /** @type {string} */
            target = r[1];
          }
        }
        /** @type {string} */
        t = target;
      }
      return t;
    }
    /** @type {!RegExp} */
    r = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
    /** @type {!Array} */
    target = [];
    var testVar;
    for (; testVar = r.exec(t);) {
      target.push([testVar[1], testVar[2], testVar[3] || void 0]);
    }
    t = mixin(target);
    return (inArray() ? 0 : toLowerCase("Opera")) ? t(["Version", "Opera"]) : (inArray() ? 0 : toLowerCase("Edge")) ? t(["Edge"]) : unbind() ? t(["Edg"]) : toLowerCase("Silk") ? t(["Silk"]) : _detectBrowserVersion() ? t(["Chrome", "CriOS", "HeadlessChrome"]) : (t = target[2]) && t[1] || "";
  }
  /**
   * @param {!Array} array
   * @param {number} value
   * @return {?}
   */
  function params(array, value) {
    if ("string" === typeof array) {
      return "string" !== typeof value || 1 != value.length ? -1 : array.indexOf(value, 0);
    }
    /** @type {number} */
    var i = 0;
    for (; i < array.length; i++) {
      if (i in array && array[i] === value) {
        return i;
      }
    }
    return -1;
  }
  /**
   * @param {!Object} value
   * @param {!Function} callback
   * @return {undefined}
   */
  function each(value, callback) {
    var valueLength = value.length;
    var result = "string" === typeof value ? value.split("") : value;
    /** @type {number} */
    var i = 0;
    for (; i < valueLength; i++) {
      if (i in result) {
        callback.call(void 0, result[i], i, value);
      }
    }
  }
  /**
   * @param {string} f
   * @param {!Function} path
   * @return {?}
   */
  function slice(f, path) {
    /** @type {number} */
    var V = f.length;
    /** @type {!Array} */
    var self = [];
    /** @type {number} */
    var length = 0;
    /** @type {(Array<string>|string)} */
    var r = "string" === typeof f ? f.split("") : f;
    /** @type {number} */
    var i = 0;
    for (; i < V; i++) {
      if (i in r) {
        var name = r[i];
        if (path.call(void 0, name, i, f)) {
          self[length++] = name;
        }
      }
    }
    return self;
  }
  /**
   * @param {string} a
   * @param {!Function} func
   * @return {?}
   */
  function when(a, func) {
    /** @type {number} */
    var len = a.length;
    /** @type {!Array} */
    var ret = Array(len);
    /** @type {(Array<string>|string)} */
    var src = "string" === typeof a ? a.split("") : a;
    /** @type {number} */
    var i = 0;
    for (; i < len; i++) {
      if (i in src) {
        ret[i] = func.call(void 0, src[i], i, a);
      }
    }
    return ret;
  }
  /**
   * @param {!Object} value
   * @param {!Function} callback
   * @return {?}
   */
  function pipe(value, callback) {
    var valueLength = value.length;
    var t = "string" === typeof value ? value.split("") : value;
    /** @type {number} */
    var i = 0;
    for (; i < valueLength; i++) {
      if (i in t && callback.call(void 0, t[i], i, value)) {
        return true;
      }
    }
    return false;
  }
  /**
   * @param {string} n
   * @param {number} p
   * @return {?}
   */
  function is(n, p) {
    a: {
      /** @type {number} */
      var argl = n.length;
      /** @type {(Array<string>|string)} */
      var array = "string" === typeof n ? n.split("") : n;
      /** @type {number} */
      var i = 0;
      for (; i < argl; i++) {
        if (i in array && p.call(void 0, array[i], i, n)) {
          /** @type {number} */
          p = i;
          break a;
        }
      }
      /** @type {number} */
      p = -1;
    }
    return 0 > p ? null : "string" === typeof n ? n.charAt(p) : n[p];
  }
  /**
   * @param {string} a
   * @param {number} f
   * @return {?}
   */
  function apply(a, f) {
    a: {
      /** @type {(Array<string>|string)} */
      var arr2 = "string" === typeof a ? a.split("") : a;
      /** @type {number} */
      var i = a.length - 1;
      for (; 0 <= i; i--) {
        if (i in arr2 && f.call(void 0, arr2[i], i, a)) {
          /** @type {number} */
          f = i;
          break a;
        }
      }
      /** @type {number} */
      f = -1;
    }
    return 0 > f ? null : "string" === typeof a ? a.charAt(f) : a[f];
  }
  /**
   * @param {!Array} data
   * @param {number} value
   * @return {?}
   */
  function search(data, value) {
    return 0 <= params(data, value);
  }
  /**
   * @param {!Array} array
   * @return {?}
   */
  function clean(array) {
    /** @type {number} */
    var length = array.length;
    if (0 < length) {
      /** @type {!Array} */
      var result = Array(length);
      /** @type {number} */
      var i = 0;
      for (; i < length; i++) {
        result[i] = array[i];
      }
      return result;
    }
    return [];
  }
  /**
   * @param {string} parent
   * @return {?}
   */
  function div(parent) {
    div[" "](parent);
    return parent;
  }
  /**
   * @param {string} key
   * @return {?}
   */
  function createError(key) {
    /** @type {!Array} */
    var result = [];
    _create(key, function (length) {
      result.push(length);
    });
    return result;
  }
  /**
   * @param {string} value
   * @param {!Function} factory
   * @return {undefined}
   */
  function _create(value, factory) {
    /**
     * @param {number} offset
     * @return {?}
     */
    function split(offset) {
      for (; iValue < value.length;) {
        /** @type {string} */
        var state = value.charAt(iValue++);
        var processorState = processor[state];
        if (null != processorState) {
          return processorState;
        }
        if (!/^[\s\xa0]*$/.test(state)) {
          throw Error("Unknown base64 encoding at char: " + state);
        }
      }
      return offset;
    }
    getAttribute();
    /** @type {number} */
    var iValue = 0;
    for (; ;) {
      var nzero = split(-1);
      var b = split(0);
      var functionText = split(64);
      var sensors = split(64);
      if (64 === sensors && -1 === nzero) {
        break;
      }
      factory(nzero << 2 | b >> 4);
      if (64 != functionText) {
        factory(b << 4 & 240 | functionText >> 2);
        if (64 != sensors) {
          factory(functionText << 6 & 192 | sensors);
        }
      }
    }
  }
  /**
   * @return {undefined}
   */
  function getAttribute() {
    if (!processor) {
      processor = {};
      /** @type {!Array<string>} */
      var absParts = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
      /** @type {!Array} */
      var sessionOperatorStrings = ["+/=", "+/", "-_=", "-_.", "-_"];
      /** @type {number} */
      var i = 0;
      for (; 5 > i; i++) {
        /** @type {!Array<?>} */
        var temp = absParts.concat(sessionOperatorStrings[i].split(""));
        /** @type {!Array<?>} */
        nums[i] = temp;
        /** @type {number} */
        var index = 0;
        for (; index < temp.length; index++) {
          var key = temp[index];
          if (void 0 === processor[key]) {
            /** @type {number} */
            processor[key] = index;
          }
        }
      }
    }
  }
  /**
   * @param {!Object} value
   * @return {?}
   */
  function toSliceArrayFn(value) {
    return Array.prototype.slice.call(value);
  }
  /**
   * @param {?} b
   * @return {undefined}
   */
  function observe(b) {
    var numberB = NumberFn(b);
    if (1 !== (numberB & 1)) {
      if (Object.isFrozen(b)) {
        b = toSliceArrayFn(b);
      }
      assertEquals(b, numberB | 1);
    }
  }
  /**
   * @param {!Object} b
   * @param {number} s
   * @return {?}
   */
  function h(b, s) {
    if (Object.isFrozen(b)) {
      b = toSliceArrayFn(b);
    }
    assertEquals(b, s);
    return b;
  }
  /**
   * @param {!Object} data
   * @return {?}
   */
  function getKey(data) {
    hasOwnProperty(data, 1);
    return data;
  }
  /**
   * @param {!Object} value
   * @return {?}
   */
  function sanitize(value) {
    hasOwnProperty(value, 16);
    return value;
  }
  /**
   * @param {number} user
   * @param {!Object} group
   * @return {undefined}
   */
  function userToGroup(user, group) {
    assertEquals(group, (user | 0) & -51);
  }
  /**
   * @param {number} n
   * @param {!Object} o
   * @return {undefined}
   */
  function s(n, o) {
    assertEquals(o, (n | 18) & -41);
  }
  /**
   * @param {number} value
   * @return {?}
   */
  function encode(value) {
    /** @type {number} */
    value = value >> 10 & 1023;
    return 0 === value ? 536870912 : value;
  }
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function isObject(obj) {
    return null !== obj && "object" === typeof obj && !Array.isArray(obj) && obj.constructor === Object;
  }
  /**
   * @param {number} source
   * @return {undefined}
   */
  function flush(source) {
    if (source & 2) {
      throw Error();
    }
  }
  /**
   * @param {string} data
   * @return {?}
   */
  function isEmpty(data) {
    if ("boolean" !== typeof data) {
      throw Error("Expected boolean but got " + condition(data) + ": " + data);
    }
    return !!data;
  }
  /**
   * @param {string} value
   * @return {?}
   */
  function transition(value) {
    if (null == value) {
      return value;
    }
    switch (typeof value) {
      case "string":
        return +value;
      case "number":
        return value;
    }
  }
  /**
   * @param {number} value
   * @return {?}
   */
  function assign(value) {
    return null == value ? value : value;
  }
  /**
   * @param {string} index
   * @return {?}
   */
  function iterator(index) {
    return null == index ? index : index;
  }
  /**
   * @param {?} value
   * @return {?}
   */
  function keys(value) {
    if (null != value && "string" !== typeof value) {
      throw Error();
    }
    return value;
  }
  /**
   * @param {!Object} f
   * @return {?}
   */
  function compose(f) {
    return null == f || "string" === typeof f ? f : void 0;
  }
  /**
   * @param {!Object} data
   * @param {!Object} type
   * @param {string} a
   * @param {number} c
   * @return {?}
   */
  function toString(data, type, a, c) {
    /** @type {boolean} */
    var b = false;
    if (null != data && "object" === typeof data && !(b = Array.isArray(data)) && data.sa === undefined) {
      return data;
    }
    if (!b) {
      return a ? c & 2 ? (data = type[version]) ? type = data : (data = new type, hasOwnProperty(data.i, 18), type = type[version] = data) : type = new type : type = void 0, type;
    }
    b = a = NumberFn(data);
    if (0 === b) {
      /** @type {number} */
      b = b | c & 16;
    }
    /** @type {number} */
    b = b | c & 2;
    if (b !== a) {
      assertEquals(data, b);
    }
    return new type(data);
  }
  /**
   * @param {!Function} object
   * @param {string} name
   * @return {?}
   */
  function func(object, name) {
    /** @type {string} */
    cacheConfigName = name;
    object = new object(name);
    cacheConfigName = void 0;
    return object;
  }
  /**
   * @param {string} value
   * @param {number} e
   * @param {string} a
   * @return {?}
   */
  function push(value, e, a) {
    if (null == value) {
      value = cacheConfigName;
    }
    cacheConfigName = void 0;
    if (null == value) {
      /** @type {number} */
      var yMax = 48;
      if (a) {
        /** @type {!Array} */
        value = [a];
        /** @type {number} */
        yMax = yMax | 256;
      } else {
        /** @type {!Array} */
        value = [];
      }
      if (e) {
        /** @type {number} */
        yMax = yMax & -1047553 | (e & 1023) << 10;
      }
    } else {
      if (!Array.isArray(value)) {
        throw Error();
      }
      yMax = NumberFn(value);
      if (yMax & 32) {
        return value;
      }
      /** @type {number} */
      yMax = yMax | 32;
      if (a && (yMax = yMax | 256, a !== value[0])) {
        throw Error();
      }
      a: {
        a = value;
        var t = a.length;
        if (t) {
          /** @type {number} */
          var f = t - 1;
          var d = a[f];
          if (isObject(d)) {
            /** @type {number} */
            yMax = yMax | 128;
            /** @type {number} */
            e = (yMax >> 8 & 1) - 1;
            /** @type {number} */
            t = f - e;
            if (1024 <= t) {
              makeList(a, e, d);
              /** @type {number} */
              t = 1023;
            }
            /** @type {number} */
            yMax = yMax & -1047553 | (t & 1023) << 10;
            break a;
          }
        }
        if (e) {
          /** @type {number} */
          d = (yMax >> 8 & 1) - 1;
          /** @type {number} */
          e = Math.max(e, t - d);
          if (1024 < e) {
            makeList(a, d, {});
            /** @type {number} */
            yMax = yMax | 128;
            /** @type {number} */
            e = 1023;
          }
          /** @type {number} */
          yMax = yMax & -1047553 | (e & 1023) << 10;
        }
      }
    }
    assertEquals(value, yMax);
    return value;
  }
  /**
   * @param {string} node
   * @param {number} name
   * @param {!Object} object
   * @return {undefined}
   */
  function makeList(node, name, object) {
    /** @type {number} */
    var i = 1023 + name;
    /** @type {number} */
    var sources = node.length;
    /** @type {number} */
    var index = i;
    for (; index < sources; index++) {
      var type = node[index];
      if (null != type && type !== object) {
        object[index - name] = type;
      }
    }
    /** @type {number} */
    node.length = i + 1;
    /** @type {!Object} */
    node[i] = object;
  }
  /**
   * @param {?} key
   * @param {string} value
   * @return {?}
   */
  function propertyStringReplacer(key, value) {
    return serialize(value);
  }
  /**
   * @param {string} value
   * @return {?}
   */
  function serialize(value) {
    switch (typeof value) {
      case "number":
        return isFinite(value) ? value : String(value);
      case "boolean":
        return value ? 1 : 0;
      case "object":
        if (value && !Array.isArray(value) && field && null != value && value instanceof Uint8Array) {
          if (Cb$jscomp$0) {
            /** @type {string} */
            var result = "";
            /** @type {number} */
            var name = 0;
            /** @type {number} */
            var start = value.length - 10240;
            for (; name < start;) {
              /** @type {string} */
              result = result + String.fromCharCode.apply(null, value.subarray(name, name = name + 10240));
            }
            /** @type {string} */
            result = result + String.fromCharCode.apply(null, name ? value.subarray(name) : value);
            /** @type {string} */
            value = btoa(result);
          } else {
            if (void 0 === result) {
              /** @type {number} */
              result = 0;
            }
            getAttribute();
            result = nums[result];
            /** @type {!Array} */
            name = Array(Math.floor(value.length / 3));
            start = result[64] || "";
            /** @type {number} */
            var i = 0;
            /** @type {number} */
            var n = 0;
            for (; i < value.length - 2; i = i + 3) {
              var c = value[i];
              var val = value[i + 1];
              var end = value[i + 2];
              var p = result[c >> 2];
              c = result[(c & 3) << 4 | val >> 4];
              val = result[(val & 15) << 2 | end >> 6];
              end = result[end & 63];
              name[n++] = p + c + val + end;
            }
            /** @type {number} */
            p = 0;
            end = start;
            switch (value.length - i) {
              case 2:
                p = value[i + 1];
                end = result[(p & 15) << 2] || start;
              case 1:
                value = value[i];
                name[n] = result[value >> 2] + result[(value & 3) << 4 | p >> 4] + end + start;
            }
            /** @type {string} */
            value = name.join("");
          }
          return value;
        }
    }
    return value;
  }
  /**
   * @param {!Array} result
   * @param {number} value
   * @param {!Function} callback
   * @return {?}
   */
  function normalizeArgs(result, value, callback) {
    result = toSliceArrayFn(result);
    var length = result.length;
    var indexes = value & 128 ? result[length - 1] : void 0;
    length = length + (indexes ? -1 : 0);
    /** @type {number} */
    value = value & 256 ? 1 : 0;
    for (; value < length; value++) {
      result[value] = callback(result[value]);
    }
    if (indexes) {
      value = result[value] = {};
      var i;
      for (i in indexes) {
        if (Object.prototype.hasOwnProperty.call(indexes, i)) {
          value[i] = callback(indexes[i]);
        }
      }
    }
    return result;
  }
  /**
   * @param {!Object} data
   * @param {!Function} value
   * @param {string} options
   * @param {?} name
   * @param {string} settings
   * @param {boolean} key
   * @return {?}
   */
  function extend(data, value, options, name, settings, key) {
    if (null != data) {
      if (Array.isArray(data)) {
        data = settings && 0 == data.length && NumberFn(data) & 1 ? void 0 : key && NumberFn(data) & 2 ? data : normalize(data, value, options, void 0 !== name, settings, key);
      } else {
        if (isObject(data)) {
          var args = {};
          var i;
          for (i in data) {
            if (Object.prototype.hasOwnProperty.call(data, i)) {
              args[i] = extend(data[i], value, options, name, settings, key);
            }
          }
          data = args;
        } else {
          data = value(data, name);
        }
      }
      return data;
    }
  }
  /**
   * @param {!Object} result
   * @param {!Function} name
   * @param {string} fn
   * @param {string} data
   * @param {string} options
   * @param {boolean} key
   * @return {?}
   */
  function normalize(result, name, fn, data, options, key) {
    var safeDone = data || fn ? NumberFn(result) : 0;
    /** @type {(boolean|undefined)} */
    data = data ? !!(safeDone & 16) : void 0;
    result = toSliceArrayFn(result);
    /** @type {number} */
    var i = 0;
    for (; i < result.length; i++) {
      result[i] = extend(result[i], name, fn, data, options, key);
    }
    if (fn) {
      fn(safeDone, result);
    }
    return result;
  }
  /**
   * @param {number} data
   * @return {?}
   */
  function length(data) {
    return data.sa === undefined ? exports(data, normalize(data.i, length, void 0, void 0, false, false), true) : field && null != data && data instanceof Uint8Array ? new Uint8Array(data) : data;
  }
  /**
   * @param {!Function} data
   * @return {?}
   */
  function y(data) {
    return data.sa === undefined ? data.toJSON() : serialize(data);
  }
  /**
   * @param {!Object} value
   * @param {number} i
   * @param {!Function} c
   * @return {?}
   */
  function count(value, i, c) {
    /** @type {!Function} */
    c = void 0 === c ? s : c;
    if (null != value) {
      if (field && value instanceof Uint8Array) {
        return i ? value : new Uint8Array(value);
      }
      if (Array.isArray(value)) {
        var mode = NumberFn(value);
        if (mode & 2) {
          return value;
        }
        if (i && !(mode & 32) && (mode & 16 || 0 === mode)) {
          return assertEquals(value, mode | 18), value;
        }
        value = normalize(value, count, mode & 4 ? s : c, true, false, true);
        i = NumberFn(value);
        if (i & 4 && i & 2) {
          Object.freeze(value);
        }
        return value;
      }
      if (value.sa === undefined) {
        i = value.i;
        c = StringFn(i);
        value = c & 2 ? value : off(value, i, c, true);
      }
      return value;
    }
  }
  /**
   * @param {!Object} container
   * @param {?} args
   * @param {number} callback
   * @param {string} useCapture
   * @return {?}
   */
  function off(container, args, callback, useCapture) {
    /** @type {function(number, !Object): undefined} */
    var n = useCapture || callback & 2 ? s : userToGroup;
    /** @type {boolean} */
    var mode = !!(callback & 16);
    args = normalizeArgs(args, callback, function (a) {
      return count(a, mode, n);
    });
    hasOwnProperty(args, 16 | (useCapture ? 2 : 0));
    return func(container.constructor, args);
  }
  /**
   * @param {!Object} input
   * @return {?}
   */
  function camelCase(input) {
    var i = input.i;
    var fn = StringFn(i);
    return fn & 2 ? off(input, i, fn, false) : input;
  }
  /**
   * @param {!Object} i
   * @param {number} s
   * @return {?}
   */
  function has(i, s) {
    i = i.i;
    return compare(i, StringFn(i), s);
  }
  /**
   * @param {!Object} result
   * @param {number} i
   * @param {number} x
   * @param {string} value
   * @return {?}
   */
  function compare(result, i, x, value) {
    if (-1 === x) {
      return null;
    }
    if (x >= encode(i)) {
      if (i & 128) {
        return result[result.length - 1][x];
      }
    } else {
      var count = result.length;
      if (value && i & 128 && (value = result[count - 1][x], null != value)) {
        return value;
      }
      /** @type {number} */
      i = x + ((i >> 8 & 1) - 1);
      if (i < count) {
        return result[i];
      }
    }
  }
  /**
   * @param {!Object} str
   * @param {number} callback
   * @param {!Object} event
   * @return {?}
   */
  function escapeStringInfo(str, callback, event) {
    var i = str.i;
    var key = StringFn(i);
    flush(key);
    execute(i, key, callback, event);
    return str;
  }
  /**
   * @param {!Object} args
   * @param {number} name
   * @param {number} key
   * @param {!Object} value
   * @param {number} type
   * @return {undefined}
   */
  function execute(args, name, key, value, type) {
    var start = encode(name);
    if (key >= start || type) {
      /** @type {number} */
      type = name;
      if (name & 128) {
        start = args[args.length - 1];
      } else {
        if (null == value) {
          return;
        }
        start = args[start + ((name >> 8 & 1) - 1)] = {};
        /** @type {number} */
        type = type | 128;
      }
      /** @type {!Object} */
      start[key] = value;
      /** @type {number} */
      type = type & -513;
      if (type !== name) {
        assertEquals(args, type);
      }
    } else {
      /** @type {!Object} */
      args[key + ((name >> 8 & 1) - 1)] = value;
      if (name & 128) {
        value = args[args.length - 1];
        if (key in value) {
          delete value[key];
        }
      }
      if (name & 512) {
        assertEquals(args, name & -513);
      }
    }
  }
  /**
   * @param {!Object} id
   * @param {!Function} obj
   * @param {number} value
   * @return {?}
   */
  function isPresent(id, obj, value) {
    return void 0 !== success(id, obj, value, false);
  }
  /**
   * @param {!Object} name
   * @param {!Function} val
   * @param {number} data
   * @return {?}
   */
  function number(name, val, data) {
    return void 0 !== success(name, val, split(name, text, data));
  }
  /**
   * @param {!Object} result
   * @param {number} index
   * @param {number} path
   * @return {?}
   */
  function report(result, index, path) {
    /** @type {number} */
    var maskedIndex = index & 2;
    result = compare(result, index, path);
    if (!Array.isArray(result)) {
      result = key;
    }
    index = NumberFn(result);
    if (!(index & 1)) {
      getKey(result);
    }
    if (maskedIndex) {
      if (!(index & 2)) {
        hasOwnProperty(result, 18);
      }
    } else {
      if (index & 16 && !(index & 2)) {
        tag(result, 16);
      }
    }
    return result;
  }
  /**
   * @param {!Object} value
   * @param {number} module
   * @return {?}
   */
  function warn(value, module) {
    value = has(value, module);
    return null == value ? value : "boolean" === typeof value || "number" === typeof value ? !!value : void 0;
  }
  /**
   * @param {!Object} value
   * @param {number} options
   * @param {!Function} fn
   * @return {?}
   */
  function assert(value, options, fn) {
    value = value.i;
    var name = StringFn(value);
    /** @type {number} */
    var demType = name & 2;
    var result = report(value, name, options);
    var left = NumberFn(result);
    if (!(left & 4)) {
      if (Object.isFrozen(result)) {
        result = getKey(toSliceArrayFn(result));
        execute(value, name, options, result);
      }
      /** @type {number} */
      var k = 0;
      /** @type {number} */
      var i = 0;
      for (; k < result.length; k++) {
        var n = fn(result[k]);
        if (null != n) {
          result[i++] = n;
        }
      }
      if (i < k) {
        /** @type {number} */
        result.length = i;
      }
      /** @type {number} */
      left = left | 5;
      if (demType) {
        /** @type {number} */
        left = left | 18;
      }
      assertEquals(result, left);
      if (left & 2) {
        Object.freeze(result);
      }
    }
    if (!demType && (left & 2 || Object.isFrozen(result))) {
      result = toSliceArrayFn(result);
      hasOwnProperty(result, 5);
      execute(value, name, options, result);
    }
    return result;
  }
  /**
   * @param {number} token
   * @param {number} data
   * @param {!Object} result
   * @return {?}
   */
  function next(token, data, result) {
    var tokenI = token.i;
    var key = StringFn(tokenI);
    flush(key);
    if (null == result) {
      execute(tokenI, key, data);
    } else {
      var numberDataLimit = NumberFn(result);
      if (!(numberDataLimit & 4)) {
        if (numberDataLimit & 2 || Object.isFrozen(result)) {
          result = toSliceArrayFn(result);
        }
        /** @type {number} */
        var i = 0;
        for (; i < result.length; i++) {
          result[i] = result[i];
        }
        assertEquals(result, numberDataLimit | 5);
      }
      execute(tokenI, key, data, result);
    }
    return token;
  }
  /**
   * @param {!Object} obj
   * @param {number} data
   * @param {!Object} value
   * @param {?} object
   * @return {?}
   */
  function callback(obj, data, value, object) {
    var i = obj.i;
    var key = StringFn(i);
    flush(key);
    execute(i, key, data, value !== object ? value : void 0);
    return obj;
  }
  /**
   * @param {!Array} n
   * @param {number} rev
   * @return {undefined}
   */
  function go(n, rev) {
    /** @type {number} */
    var value = performance.now();
    if (null != value && "number" !== typeof value) {
      throw Error("Value of float/double field must be a number|null|undefined, found " + typeof value + ": " + value);
    }
    callback(n, rev, value, 0);
  }
  /**
   * @param {!Object} node
   * @param {number} code
   * @param {boolean} data
   * @param {!Object} callback
   * @return {?}
   */
  function onExit(node, code, data, callback) {
    var i = node.i;
    var key = StringFn(i);
    flush(key);
    if ((data = value(i, key, data)) && data !== code && null != callback) {
      execute(i, key, data);
    }
    execute(i, key, code, callback);
    return node;
  }
  /**
   * @param {!Object} i
   * @param {!Array} data
   * @param {number} object
   * @return {?}
   */
  function split(i, data, object) {
    i = i.i;
    return value(i, StringFn(i), data) === object ? object : -1;
  }
  /**
   * @param {!Object} i
   * @param {!Array} data
   * @return {?}
   */
  function pop(i, data) {
    i = i.i;
    return value(i, StringFn(i), data);
  }
  /**
   * @param {!Object} value
   * @param {undefined} tag
   * @param {?} from
   * @return {?}
   */
  function value(value, tag, from) {
    /** @type {number} */
    var next = 0;
    /** @type {number} */
    var i = 0;
    for (; i < from.length; i++) {
      var o = from[i];
      if (null != compare(value, tag, o)) {
        if (0 !== next) {
          execute(value, tag, next);
        }
        next = o;
      }
    }
    return next;
  }
  /**
   * @param {!Object} value
   * @return {?}
   */
  function toNumber(value) {
    /** @type {function(string): undefined} */
    var context = Component;
    value = value.i;
    var key = StringFn(value);
    flush(key);
    var name = compare(value, key, 3);
    context = camelCase(toString(name, context, true, key));
    if (name !== context) {
      execute(value, key, 3, context);
    }
    return context;
  }
  /**
   * @param {!Object} i
   * @param {string} value
   * @param {number} options
   * @param {boolean} callback
   * @return {?}
   */
  function success(i, value, options, callback) {
    i = i.i;
    var name = StringFn(i);
    var result = compare(i, name, options, callback);
    value = toString(result, value, false, name);
    if (value !== result && null != value) {
      execute(i, name, options, value, callback);
    }
    return value;
  }
  /**
   * @param {!Object} value
   * @param {!Function} name
   * @param {number} options
   * @return {?}
   */
  function get(value, name, options) {
    /** @type {boolean} */
    var callback = void 0 === callback ? false : callback;
    name = success(value, name, options, callback);
    if (null == name) {
      return name;
    }
    value = value.i;
    var tag = StringFn(value);
    if (!(tag & 2)) {
      var type = camelCase(name);
      if (type !== name) {
        name = type;
        execute(value, tag, options, name, callback);
      }
    }
    return name;
  }
  /**
   * @param {!Object} arg
   * @param {number} name
   * @param {number} value
   * @param {number} options
   * @param {number} v
   * @return {?}
   */
  function f(arg, name, value, options, v) {
    /** @type {boolean} */
    var model = !!(name & 2);
    var val = report(arg, name, options);
    if (val === key || !(NumberFn(val) & 4)) {
      var result = val;
      /** @type {boolean} */
      val = !!(name & 2);
      /** @type {boolean} */
      var def = !!(NumberFn(result) & 2);
      model = result;
      if (!val && def) {
        result = toSliceArrayFn(result);
      }
      /** @type {number} */
      var left = name | (def ? 2 : 0);
      /** @type {(boolean|undefined)} */
      def = def || void 0;
      /** @type {number} */
      var k = 0;
      /** @type {number} */
      var j = 0;
      for (; k < result.length; k++) {
        var ret = toString(result[k], value, false, left);
        if (void 0 !== ret) {
          /** @type {(boolean|number)} */
          def = def || StringFn(ret.i) & 2;
          result[j++] = ret;
        }
      }
      if (j < k) {
        /** @type {number} */
        result.length = j;
      }
      value = result;
      result = NumberFn(value);
      /** @type {number} */
      left = result | 5;
      /** @type {number} */
      def = def ? left & -9 : left | 8;
      if (result != def) {
        value = h(value, def);
      }
      result = value;
      if (model !== result) {
        execute(arg, name, options, result);
      }
      if (val && 2 !== v || 1 === v) {
        Object.freeze(result);
      }
      return result;
    }
    if (3 === v) {
      return val;
    }
    if (!model) {
      /** @type {boolean} */
      model = Object.isFrozen(val);
      if (1 === v) {
        if (!model) {
          Object.freeze(val);
        }
      } else {
        v = NumberFn(val);
        /** @type {number} */
        value = v & -19;
        if (model) {
          val = toSliceArrayFn(val);
          /** @type {number} */
          v = 0;
          execute(arg, name, options, val);
        }
        if (v !== value) {
          assertEquals(val, value);
        }
      }
    }
    return val;
  }
  /**
   * @param {!Object} item
   * @param {string} obj
   * @param {number} key
   * @return {?}
   */
  function stringify(item, obj, key) {
    var i = item.i;
    var y = StringFn(i);
    /** @type {boolean} */
    item = !!(y & 2);
    obj = f(i, y, obj, key, item ? 1 : 2);
    if (!(item || NumberFn(obj) & 8)) {
      /** @type {number} */
      key = 0;
      for (; key < obj.length; key++) {
        item = obj[key];
        i = camelCase(item);
        if (item !== i) {
          obj[key] = i;
        }
      }
      hasOwnProperty(obj, 8);
    }
    return obj;
  }
  /**
   * @param {!Object} s
   * @param {number} code
   * @param {!Object} value
   * @return {?}
   */
  function escapeCodeValue(s, code, value) {
    if (null == value) {
      value = void 0;
    }
    return escapeStringInfo(s, code, value);
  }
  /**
   * @param {!Object} code
   * @param {number} err
   * @param {?} data
   * @param {!Object} group
   * @return {?}
   */
  function color(code, err, data, group) {
    if (null == group) {
      group = void 0;
    }
    return onExit(code, err, data, group);
  }
  /**
   * @param {!Object} value
   * @param {number} index
   * @param {!Object} node
   * @return {?}
   */
  function call(value, index, node) {
    var i = value.i;
    var key = StringFn(i);
    flush(key);
    if (null != node) {
      /** @type {boolean} */
      var enabled = !!node.length;
      /** @type {number} */
      var v = 0;
      for (; v < node.length; v++) {
        var value = node[v];
        /** @type {boolean} */
        enabled = enabled && !(NumberFn(value.i) & 2);
      }
      v = NumberFn(node);
      /** @type {number} */
      value = v | 1;
      /** @type {number} */
      value = (enabled ? value | 8 : value & -9) | 4;
      if (value != v) {
        node = h(node, value);
      }
    }
    if (null == node) {
      node = void 0;
    }
    execute(i, key, index, node);
    return value;
  }
  /**
   * @param {!Object} text
   * @param {number} min
   * @return {?}
   */
  function trim(text, min) {
    return transition(has(text, min));
  }
  /**
   * @param {!Object} x
   * @param {number} min
   * @return {?}
   */
  function join(x, min) {
    a: {
      if (x = has(x, min), null != x) {
        switch (typeof x) {
          case "string":
            /** @type {number} */
            x = +x;
            break a;
          case "number":
            break a;
        }
        x = void 0;
      }
    }
    return x;
  }
  /**
   * @param {!Object} s
   * @param {number} code
   * @param {string} value
   * @return {?}
   */
  function convert(s, code, value) {
    return escapeStringInfo(s, code, null == value ? value : isEmpty(value));
  }
  /**
   * @param {!Object} node
   * @param {number} str
   * @param {string} value
   * @return {?}
   */
  function empty(node, str, value) {
    return callback(node, str, null == value ? value : isEmpty(value), false);
  }
  /**
   * @param {!Object} value
   * @param {number} path
   * @return {?}
   */
  function reduce(value, path) {
    return compose(has(value, path));
  }
  /**
   * @param {!Object} name
   * @param {number} value
   * @return {?}
   */
  function ok(name, value) {
    return assert(name, value, compose);
  }
  /**
   * @param {!Object} obj
   * @param {number} key
   * @return {?}
   */
  function filter(obj, key) {
    return iterator(has(obj, key));
  }
  /**
   * @param {!Object} obj
   * @param {number} res
   * @param {number} key
   * @return {?}
   */
  function select(obj, res, key) {
    return callback(obj, res, assign(key), 0);
  }
  /**
   * @param {number} string
   * @param {number} value
   * @return {?}
   */
  function parseInt(string, value) {
    return null != string ? string : value;
  }
  /**
   * @param {!Object} name
   * @param {number} data
   * @param {?} type
   * @return {?}
   */
  function expect(name, data, type) {
    return parseInt(warn(name, data), void 0 === type ? false : type);
  }
  /**
   * @param {?} b
   * @param {number} start
   * @return {?}
   */
  function getVersion(b, start) {
    return parseInt(trim(b, start), 0);
  }
  /**
   * @param {!Object} value
   * @param {number} callback
   * @return {?}
   */
  function fromString(value, callback) {
    /** @type {number} */
    var type = void 0 === type ? 0 : type;
    value = value.i;
    var name = StringFn(value);
    var n = compare(value, name, callback);
    var k = null == n ? n : "number" === typeof n || "NaN" === n || "Infinity" === n || "-Infinity" === n ? Number(n) : void 0;
    if (null != k && k !== n) {
      execute(value, name, callback, k);
    }
    return parseInt(k, type);
  }
  /**
   * @param {!Object} value
   * @param {number} defaultValue
   * @return {?}
   */
  function format(value, defaultValue) {
    return parseInt(reduce(value, defaultValue), "");
  }
  /**
   * @param {!Object} obj
   * @param {number} index
   * @return {?}
   */
  function resolve(obj, index) {
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    i = void 0 === i ? 0 : i;
    return parseInt(filter(obj, index), i);
  }
  /**
   * @param {!Object} name
   * @param {!Function} type
   * @param {number} data
   * @param {!Array} attr
   * @return {?}
   */
  function getStyle(name, type, data, attr) {
    return get(name, type, split(name, attr, data));
  }
  /**
   * @param {string} el
   * @param {undefined} value
   * @param {string} context
   * @return {undefined}
   */
  function Base(el, value, context) {
    this.i = push(el, value, context);
  }
  /**
   * @param {number} val
   * @param {!Array} result
   * @param {number} value
   * @return {?}
   */
  function exports(val, result, value) {
    var index = val.constructor.v;
    var data = encode(StringFn(value ? val.i : result));
    /** @type {boolean} */
    var i = false;
    if (index) {
      if (!value) {
        result = toSliceArrayFn(result);
        var v;
        if (result.length && isObject(v = result[result.length - 1])) {
          /** @type {number} */
          i = 0;
          for (; i < index.length; i++) {
            if (index[i] >= data) {
              define(Object, "assign").call(Object, result[result.length - 1] = {}, v);
              break;
            }
          }
        }
        /** @type {boolean} */
        i = true;
      }
      data = result;
      /** @type {boolean} */
      value = !value;
      v = StringFn(val.i);
      val = encode(v);
      /** @type {number} */
      v = (v >> 8 & 1) - 1;
      var obj;
      var i;
      /** @type {number} */
      var j = 0;
      for (; j < index.length; j++) {
        if (i = index[j], i < val) {
          i = i + v;
          var val = data[i];
          if (null == val) {
            data[i] = value ? key : getKey([]);
          } else {
            if (value && val !== key) {
              observe(val);
            }
          }
        } else {
          if (!obj) {
            val = void 0;
            if (data.length && isObject(val = data[data.length - 1])) {
              obj = val;
            } else {
              data.push(obj = {});
            }
          }
          val = obj[i];
          if (null == obj[i]) {
            obj[i] = value ? key : getKey([]);
          } else {
            if (value && val !== key) {
              observe(val);
            }
          }
        }
      }
    }
    index = result.length;
    if (!index) {
      return result;
    }
    var hasSongChanged;
    if (isObject(obj = result[index - 1])) {
      a: {
        var target = obj;
        data = {};
        /** @type {boolean} */
        value = false;
        var key;
        for (key in target) {
          if (Object.prototype.hasOwnProperty.call(target, key)) {
            val = target[key];
            if (Array.isArray(val) && val != val) {
              /** @type {boolean} */
              value = true;
            }
            if (null != val) {
              data[key] = val;
            } else {
              /** @type {boolean} */
              value = true;
            }
          }
        }
        if (value) {
          var column_name;
          for (column_name in data) {
            target = data;
            break a;
          }
          /** @type {null} */
          target = null;
        }
      }
      if (target != obj) {
        /** @type {boolean} */
        hasSongChanged = true;
      }
      index--;
    }
    for (; 0 < index; index--) {
      obj = result[index - 1];
      if (null != obj) {
        break;
      }
      /** @type {boolean} */
      var isReplayingSong = true;
    }
    if (!hasSongChanged && !isReplayingSong) {
      return result;
    }
    var tmp;
    if (i) {
      tmp = result;
    } else {
      /** @type {!Array<?>} */
      tmp = Array.prototype.slice.call(result, 0, index);
    }
    result = tmp;
    if (i) {
      result.length = index;
    }
    if (target) {
      result.push(target);
    }
    return result;
  }
  /**
   * @param {!Function} name
   * @param {!Object} val
   * @return {?}
   */
  function testcase(name, val) {
    if (null == val) {
      return new name;
    }
    if (!Array.isArray(val)) {
      throw Error("must be an array");
    }
    if (Object.isFrozen(val) || Object.isSealed(val) || !Object.isExtensible(val)) {
      throw Error("arrays passed to jspb constructors must be mutable");
    }
    hasOwnProperty(val, 64);
    return func(name, sanitize(val));
  }
  /**
   * @param {?} value
   * @param {string} name
   * @return {undefined}
   */
  function trigger(value, name) {
    var folder = ionic_img_cache;
    ionic_img_cache = void 0;
    if (!name(value)) {
      throw name = folder ? folder() + "\n" : "", Error(name + String(value));
    }
  }
  /**
   * @param {number} state
   * @return {?}
   */
  function playing(state) {
    return null !== state && void 0 !== state;
  }
  /**
   * @param {!Function} obj
   * @return {?}
   */
  function handleWSMessage(obj) {
    return function (key) {
      if (null == key || "" == key) {
        key = new obj;
      } else {
        /** @type {*} */
        key = JSON.parse(key);
        if (!Array.isArray(key)) {
          throw Error(void 0);
        }
        key = func(obj, sanitize(key));
      }
      return key;
    };
  }
  /**
   * @param {string} file
   * @return {undefined}
   */
  function opts(file) {
    this.i = push(file);
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function result(x) {
    this.i = push(x);
  }
  /**
   * @param {?} control
   * @param {!Function} state
   * @return {undefined}
   */
  function Box(control, state) {
    /** @type {(!Function|string)} */
    this.h = control === jump && state || "";
    this.g = g;
  }
  /**
   * @param {!Function} first
   * @return {?}
   */
  function wrapOverride(first) {
    return function () {
      return !first.apply(this, arguments);
    };
  }
  /**
   * @param {!Function} saveNotifs
   * @return {?}
   */
  function bindEvents(saveNotifs) {
    /** @type {boolean} */
    var isNotify = false;
    var NotifsInfo
    return function () {
      if (!isNotify) {
        NotifsInfo = saveNotifs();
        /** @type {boolean} */
        isNotify = true;
      }
      return NotifsInfo;
    };
  }
  /**
   * @param {!Function} headB
   * @return {?}
   */
  function block(headB) {
    /** @type {!Function} */
    var cacheB = headB;
    return function () {
      if (cacheB) {
        /** @type {!Function} */
        var itemFrame = cacheB;
        /** @type {null} */
        cacheB = null;
        itemFrame();
      }
    };
  }
  /**
   * @param {!Object} obj
   * @param {string} type
   * @param {!Function} name
   * @return {undefined}
   */
  function on(obj, type, name) {
    if (obj.addEventListener) {
      obj.addEventListener(type, name, false);
    }
  }
  /**
   * @param {!Object} scope
   * @param {string} callback
   * @param {!Function} event
   * @return {?}
   */
  function removeEventListener(scope, callback, event) {
    return scope.removeEventListener ? (scope.removeEventListener(callback, event, false), true) : false;
  }
  /**
   * @param {!Array} array
   * @param {!Function} fn
   * @return {?}
   */
  function css(array, fn) {
    var ret = {};
    var i;
    for (i in array) {
      if (fn.call(void 0, array[i], i, array)) {
        ret[i] = array[i];
      }
    }
    return ret;
  }
  /**
   * @param {!Object} data
   * @param {!Function} self
   * @return {?}
   */
  function inject(data, self) {
    var name;
    for (name in data) {
      if (self.call(void 0, data[name], name, data)) {
        return true;
      }
    }
    return false;
  }
  /**
   * @param {!Array} val
   * @return {?}
   */
  function last(val) {
    /** @type {!Array} */
    var data = [];
    /** @type {number} */
    var off = 0;
    var i;
    for (i in val) {
      data[off++] = val[i];
    }
    return data;
  }
  /**
   * @param {!Array} splatAttrs
   * @return {?}
   */
  function getValueIfNeeded(splatAttrs) {
    var rootAttrs = {};
    var splatAttr;
    for (splatAttr in splatAttrs) {
      rootAttrs[splatAttr] = splatAttrs[splatAttr];
    }
    return rootAttrs;
  }
  /**
   * @param {number} value
   * @return {undefined}
   */
  function PromiseBox(value) {
    /** @type {number} */
    this.h = value;
  }
  /**
   * @param {!Array} val
   * @param {string} type
   * @return {?}
   */
  function validate(val, type) {
    /** @type {(Array<string>|null)} */
    val = moveRegex.exec(prop(val).toString());
    /** @type {string} */
    var cwd = val[3] || "";
    return submit(val[1] + exec("?", val[2] || "", type) + exec("#", cwd));
  }
  /**
   * @param {!Object} value
   * @return {?}
   */
  function prop(value) {
    return value instanceof PromiseBox && value.constructor === PromiseBox ? value.h : "type_error:TrustedResourceUrl";
  }
  /**
   * @param {string} value
   * @return {?}
   */
  function submit(value) {
    if (void 0 === _track) {
      /** @type {null} */
      var track = null;
      var hammer = win.trustedTypes;
      if (hammer && hammer.createPolicy) {
        try {
          track = hammer.createPolicy("goog#html", {
            createHTML: createScript,
            createScript: createScript,
            createScriptURL: createScript
          });
        } catch (responseObj) {
          if (win.console) {
            win.console.error(responseObj.message);
          }
        }
        _track = track;
      } else {
        /** @type {null} */
        _track = track;
      }
    }
    value = (track = _track) ? track.createScriptURL(value) : value;
    return new PromiseBox(value, rej);
  }
  /**
   * @param {string} s
   * @param {string} m
   * @param {string} p
   * @return {?}
   */
  function exec(s, m, p) {
    if (null == p) {
      return m;
    }
    if ("string" === typeof p) {
      return p ? s + encodeURIComponent(p) : "";
    }
    var name;
    for (name in p) {
      if (Object.prototype.hasOwnProperty.call(p, name)) {
        var a = p[name];
        a = Array.isArray(a) ? a : [a];
        /** @type {number} */
        var i = 0;
        for (; i < a.length; i++) {
          var p = a[i];
          if (null != p) {
            if (!m) {
              /** @type {string} */
              m = s;
            }
            /** @type {string} */
            m = m + ((m.length > s.length ? "&" : "") + encodeURIComponent(name) + "=" + encodeURIComponent(String(p)));
          }
        }
      }
    }
    return m;
  }
  /**
   * @param {string} b
   * @return {undefined}
   */
  function array(b) {
    /** @type {string} */
    this.g = b;
  }
  /**
   * @param {?} html
   * @return {?}
   */
  function unescape(html) {
    return String(html).replace(/\-([a-z])/g, function (canCreateDiscussions, shortMonthName) {
      return shortMonthName.toUpperCase();
    });
  }
  /**
   * @param {!Document} context
   * @param {!Node} target
   * @param {!Array} method
   * @return {undefined}
   */
  function configure(context, target, method) {
    /**
     * @param {string} value
     * @return {undefined}
     */
    function callback(value) {
      if (value) {
        target.appendChild("string" === typeof value ? context.createTextNode(value) : value);
      }
    }
    /** @type {number} */
    var j = 1;
    for (; j < method.length; j++) {
      var value = method[j];
      if (!scroll(value) || _isObject(value) && 0 < value.nodeType) {
        callback(value);
      } else {
        a: {
          if (value && "number" == typeof value.length) {
            if (_isObject(value)) {
              /** @type {boolean} */
              var fn = "function" == typeof value.item || "string" == typeof value.item;
              break a;
            }
            if ("function" === typeof value) {
              /** @type {boolean} */
              fn = "function" == typeof value.item;
              break a;
            }
          }
          /** @type {boolean} */
          fn = false;
        }
        each(fn ? clean(value) : value, callback);
      }
    }
  }
  /**
   * @param {(Object|null|string)} doc
   * @return {undefined}
   */
  function globalDocument(doc) {
    this.g = doc || win.document || document;
  }
  /**
   * @return {?}
   */
  function detectFromUA() {
    return isPopupCustom && $scope ? $scope.mobile : !isMobile() && (toLowerCase("iPod") || toLowerCase("iPhone") || toLowerCase("Android") || toLowerCase("IEMobile"));
  }
  /**
   * @return {?}
   */
  function isMobile() {
    return isPopupCustom && $scope ? !$scope.mobile && (toLowerCase("iPad") || toLowerCase("Android") || toLowerCase("Silk")) : toLowerCase("iPad") || toLowerCase("Android") && !toLowerCase("Mobile") || toLowerCase("Silk");
  }
  /**
   * @param {string} url
   * @param {string} key
   * @return {?}
   */
  function getText(url, key) {
    /** @type {number} */
    var start = url.search(from);
    a: {
      /** @type {number} */
      var index = 0;
      /** @type {number} */
      var i = key.length;
      for (; 0 <= (index = url.indexOf(key, index)) && index < start;) {
        /** @type {number} */
        var f$jscomp$31 = url.charCodeAt(index - 1);
        if (38 == f$jscomp$31 || 63 == f$jscomp$31) {
          if (f$jscomp$31 = url.charCodeAt(index + i), !f$jscomp$31 || 61 == f$jscomp$31 || 38 == f$jscomp$31 || 35 == f$jscomp$31) {
            break a;
          }
        }
        /** @type {number} */
        index = index + (i + 1);
      }
      /** @type {number} */
      index = -1;
    }
    if (0 > index) {
      return null;
    }
    /** @type {number} */
    i = url.indexOf("&", index);
    if (0 > i || i > start) {
      /** @type {number} */
      i = start;
    }
    /** @type {number} */
    index = index + (key.length + 1);
    return decodeURIComponent(url.slice(index, -1 !== i ? i : 0).replace(/\+/g, " "));
  }
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function defined(obj) {
    try {
      var node;
      if (node = !!obj && null != obj.location.href) {
        a: {
          try {
            div(obj.foo);
            /** @type {boolean} */
            node = true;
            break a;
          } catch (c$jscomp$89) {
          }
          /** @type {boolean} */
          node = false;
        }
      }
      return node;
    } catch (c$jscomp$90) {
      return false;
    }
  }
  /**
   * @param {!Object} options
   * @return {?}
   */
  function _(options) {
    return defined(options.top) ? options.top : null;
  }
  /**
   * @param {!Object} node
   * @param {!Object} data
   * @return {?}
   */
  function refresh(node, data) {
    var el = createElement("SCRIPT", node);
    el.src = prop(data);
    var d;
    var contractFun;
    if (d = (data = null == (contractFun = (d = (el.ownerDocument && el.ownerDocument.defaultView || window).document).querySelector) ? void 0 : contractFun.call(d, "script[nonce]")) ? data.nonce || data.getAttribute("nonce") || "" : "") {
      el.setAttribute("nonce", d);
    }
    return (node = node.getElementsByTagName("script")[0]) && node.parentNode ? (node.parentNode.insertBefore(el, node), el) : null;
  }
  /**
   * @param {!Object} node
   * @param {!Object} doc
   * @return {?}
   */
  function find(node, doc) {
    return doc.getComputedStyle ? doc.getComputedStyle(node, null) : node.currentStyle;
  }
  /**
   * @param {string} a
   * @param {number} i
   * @return {?}
   */
  function action(a, i) {
    if (!fadeToGame() && !keyEventEsc()) {
      /** @type {number} */
      var j = Math.random();
      if (j < i) {
        return j = random(), a[Math.floor(j * a.length)];
      }
    }
    return null;
  }
  /**
   * @return {?}
   */
  function random() {
    if (!global.globalThis.crypto) {
      return Math.random();
    }
    try {
      /** @type {!Uint32Array} */
      var userNonce = new Uint32Array(1);
      global.globalThis.crypto.getRandomValues(userNonce);
      return userNonce[0] / 65536 / 65536;
    } catch (b$jscomp$125) {
      return Math.random();
    }
  }
  /**
   * @param {!Object} obj
   * @param {!Function} iteratee
   * @return {undefined}
   */
  function forEach(obj, iteratee) {
    if (obj) {
      var i;
      for (i in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, i)) {
          iteratee(obj[i], i, obj);
        }
      }
    }
  }
  /**
   * @param {string} value
   * @return {?}
   */
  function equals(value) {
    /** @type {number} */
    var sources = value.length;
    if (0 == sources) {
      return 0;
    }
    /** @type {number} */
    var c$jscomp$94 = 305419896;
    /** @type {number} */
    var index = 0;
    for (; index < sources; index++) {
      /** @type {number} */
      c$jscomp$94 = c$jscomp$94 ^ (c$jscomp$94 << 5) + (c$jscomp$94 >> 2) + value.charCodeAt(index) & 4294967295;
    }
    return 0 < c$jscomp$94 ? c$jscomp$94 : 4294967296 + c$jscomp$94;
  }
  /**
   * @param {string} array
   * @return {?}
   */
  function uniq(array) {
    return -1 != userAgent().indexOf(array);
  }
  /**
   * @param {number} val
   * @return {?}
   */
  function setSize(val) {
    if (!rNum.test(val)) {
      return null;
    }
    /** @type {number} */
    val = Number(val);
    return isNaN(val) ? null : val;
  }
  /**
   * @param {string} height
   * @return {?}
   */
  function height(height) {
    return (height = percentRegExp.exec(height)) ? +height[1] : null;
  }
  /**
   * @param {!Object} p
   * @param {string} n
   * @return {?}
   */
  function clamp(p, n) {
    /** @type {number} */
    var c$jscomp$95 = 0;
    for (; 50 > c$jscomp$95; ++c$jscomp$95) {
      try {
        /** @type {boolean} */
        var d$jscomp$59 = !(!p.frames || !p.frames[n]);
      } catch (g$jscomp$19) {
        /** @type {boolean} */
        d$jscomp$59 = false;
      }
      if (d$jscomp$59) {
        return p;
      }
      a: {
        try {
          var parent = p.parent;
          if (parent && parent != p) {
            var name = parent;
            break a;
          }
        } catch (g$jscomp$20) {
        }
        /** @type {null} */
        name = null;
      }
      if (!(p = name)) {
        break;
      }
    }
    return null;
  }
  /**
   * @param {!Element} elem
   * @param {!Object} styles
   * @return {undefined}
   */
  function setStyles(elem, styles) {
    forEach(styles, function (fromuser, prop) {
      elem.style.setProperty(prop, fromuser, "important");
    });
  }
  /**
   * @return {undefined}
   */
  function doAction() {
    /** @type {!Array} */
    var a = ret;
    /** @type {!Array} */
    ret = [];
    a = $(a);
    var action = a.next();
    for (; !action.done; action = a.next()) {
      action = action.value;
      try {
        action();
      } catch (c$jscomp$97) {
      }
    }
  }
  /**
   * @return {?}
   */
  function roll() {
    /** @type {function(): number} */
    var shift = void 0 === shift ? Math.random : shift;
    return Math.floor(shift() * Math.pow(2, 52));
  }
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function property(obj) {
    if ("number" !== typeof obj.goog_pvsid) {
      try {
        Object.defineProperty(obj, "goog_pvsid", {
          value: roll(),
          configurable: false
        });
      } catch (b$jscomp$131) {
      }
    }
    return Number(obj.goog_pvsid) || -1;
  }
  /**
   * @param {(!Function|string)} cb
   * @return {undefined}
   */
  function checkState(cb) {
    /** @type {!HTMLDocument} */
    var doc = aDocument;
    if ("complete" === doc.readyState || "interactive" === doc.readyState) {
      ret.push(cb);
      if (1 == ret.length) {
        if (global.Promise) {
          global.Promise.resolve().then(doAction);
        } else {
          if (window.setImmediate) {
            setImmediate(doAction);
          } else {
            setTimeout(doAction, 0);
          }
        }
      }
    } else {
      doc.addEventListener("DOMContentLoaded", cb);
    }
  }
  /**
   * @param {string} tag
   * @param {number} context
   * @return {?}
   */
  function createElement(tag, context) {
    context = void 0 === context ? document : context;
    return context.createElement(String(tag).toLowerCase());
  }
  /**
   * @param {!Window} node
   * @param {string} name
   * @param {boolean} refresh
   * @param {?} type
   * @return {undefined}
   */
  function append(node, name, refresh, type) {
    type = void 0 === type ? false : type;
    if (!node.google_image_requests) {
      /** @type {!Array} */
      node.google_image_requests = [];
    }
    var value = createElement("IMG", node.document);
    if (refresh) {
      /**
       * @return {undefined}
       */
      var update = function () {
        if (refresh) {
          /** @type {!Array} */
          var s = node.google_image_requests;
          var data = params(s, value);
          if (0 <= data) {
            Array.prototype.splice.call(s, data, 1);
          }
        }
        removeEventListener(value, "load", update);
        removeEventListener(value, "error", update);
      };
      on(value, "load", update);
      on(value, "error", update);
    }
    if (type) {
      /** @type {string} */
      value.attributionSrc = "";
    }
    /** @type {string} */
    value.src = name;
    node.google_image_requests.push(value);
  }
  /**
   * @param {!Object} params
   * @return {undefined}
   */
  function preprocess(params) {
    /** @type {boolean} */
    var type = void 0 === type ? false : type;
    /** @type {string} */
    var rule = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
    forEach(params, function (value, canCreateDiscussions) {
      if (value || 0 === value) {
        /** @type {string} */
        rule = rule + ("&" + canCreateDiscussions + "=" + encodeURIComponent("" + value));
      }
    });
    goFetch(rule, type);
  }
  /**
   * @param {string} data
   * @param {?} options
   * @return {undefined}
   */
  function goFetch(data, options) {
    /** @type {!Window} */
    var parent = window;
    options = void 0 === options ? false : options;
    /** @type {boolean} */
    var d$jscomp$63 = void 0 === d$jscomp$63 ? false : d$jscomp$63;
    if (parent.fetch) {
      options = {
        keepalive: true,
        credentials: "include",
        redirect: "follow",
        method: "get",
        mode: "no-cors"
      };
      if (d$jscomp$63) {
        /** @type {string} */
        options.mode = "cors";
        if ("setAttributionReporting" in XMLHttpRequest.prototype) {
          options.attributionReporting = {
            eventSourceEligible: "true",
            triggerEligible: "false"
          };
        } else {
          options.headers = {
            "Attribution-Reporting-Eligible": "event-source"
          };
        }
      }
      parent.fetch(data, options);
    } else {
      append(parent, data, void 0 === options ? false : options, void 0 === d$jscomp$63 ? false : d$jscomp$63);
    }
  }
  /**
   * @param {string} item
   * @param {?} parent
   * @return {undefined}
   */
  function draw(item, parent) {
    parent = void 0 === parent ? [] : parent;
    /** @type {boolean} */
    var key = false;
    if (!win.google_logging_queue) {
      /** @type {boolean} */
      key = true;
      /** @type {!Array} */
      win.google_logging_queue = [];
    }
    win.google_logging_queue.push([item, parent]);
    if (item = key) {
      if (null == testCase) {
        /** @type {boolean} */
        testCase = false;
        try {
          var doc = _(win);
          if (doc && -1 !== doc.location.hash.indexOf("google_logging")) {
            /** @type {boolean} */
            testCase = true;
          }
          if (win.localStorage.getItem("google_logging")) {
            /** @type {boolean} */
            testCase = true;
          }
        } catch (e$jscomp$50) {
        }
      }
      /** @type {boolean} */
      item = testCase;
    }
    if (item) {
      doc = win.document;
      item = new Box(jump, "https://pagead2.googlesyndication.com/pagead/js/logging_library.js");
      item = submit(item instanceof Box && item.constructor === Box && item.g === g ? item.h : "type_error:Const");
      refresh(doc, item);
    }
  }
  /**
   * @param {!Object} item
   * @return {?}
   */
  function deepClone(item) {
    item = void 0 === item ? win : item;
    var viewportCenter = item.context || item.AMP_CONTEXT_DATA;
    if (!viewportCenter) {
      try {
        viewportCenter = item.parent.context || item.parent.AMP_CONTEXT_DATA;
      } catch (e$jscomp$51) {
      }
    }
    var interestingPoint;
    var me;
    return (null == (interestingPoint = viewportCenter) ? 0 : interestingPoint.pageViewId) && (null == (me = viewportCenter) ? 0 : me.canonicalUrl) ? viewportCenter : null;
  }
  /**
   * @param {number} value
   * @return {?}
   */
  function isNaN(value) {
    return (value = void 0 === value ? deepClone() : value) ? defined(value.master) ? value.master : null : null;
  }
  /**
   * @param {!Object} result
   * @return {?}
   */
  function ping(result) {
    var features = htmlWebPackPluginAssets.apply(1, arguments);
    if (0 === features.length) {
      return submit(result[0]);
    }
    var value = result[0];
    /** @type {number} */
    var i = 0;
    for (; i < features.length; i++) {
      value = value + (encodeURIComponent(features[i]) + result[i + 1]);
    }
    return submit(value);
  }
  /**
   * @param {!Object} element
   * @return {?}
   */
  function getViewValueFromElement(element) {
    /** @type {number} */
    var type = void 0 === type ? 1 : type;
    element = isNaN(deepClone(element)) || element;
    element.google_unique_id = (element.google_unique_id || 0) + type;
    return element.google_unique_id;
  }
  /**
   * @param {?} a
   * @return {?}
   */
  function repeat(a) {
    a = a.google_unique_id;
    return "number" === typeof a ? a : 0;
  }
  /**
   * @return {?}
   */
  function isSafari() {
    /** @type {(Window|null)} */
    var self = void 0 === self ? globalWindow : self;
    if (!self) {
      return false;
    }
    try {
      return !(!self.navigator.standalone && !self.top.navigator.standalone);
    } catch (b$jscomp$141) {
      return false;
    }
  }
  /**
   * @param {string} s
   * @return {?}
   */
  function escapeHtml(s) {
    if (!s) {
      return "";
    }
    /** @type {string} */
    s = s.toLowerCase();
    if ("ca-" != s.substring(0, 3)) {
      /** @type {string} */
      s = "ca-" + s;
    }
    return s;
  }
  /**
   * @param {!Error} message
   * @param {!Object} data
   * @return {undefined}
   */
  function ArraySliceFn(message, data) {
    /** @type {(undefined|{})} */
    var value = void 0 === value ? {} : value;
    /** @type {!Error} */
    this.error = message;
    this.context = data.context;
    this.msg = data.message || "";
    this.id = data.id || "jserror";
    /** @type {(undefined|{})} */
    this.meta = value;
  }
  /**
   * @param {!Object} context
   * @return {?}
   */
  function onComplete(context) {
    return !!(context.error && context.meta && context.id);
  }
  /**
   * @param {string} g
   * @param {number} x
   * @return {undefined}
   */
  function BigNumber(g, x) {
    /** @type {string} */
    this.g = g;
    /** @type {number} */
    this.h = x;
  }
  /**
   * @param {string} data
   * @param {string} s
   * @param {?} index
   * @return {undefined}
   */
  function Buffer(data, s, index) {
    /** @type {string} */
    this.url = data;
    /** @type {string} */
    this.s = s;
    /** @type {boolean} */
    this.Sa = !!index;
    /** @type {null} */
    this.depth = null;
  }
  /**
   * @return {undefined}
   */
  function buildPortals() {
    /** @type {string} */
    this.j = "&";
    this.h = {};
    /** @type {number} */
    this.l = 0;
    /** @type {!Array} */
    this.g = [];
  }
  /**
   * @param {string} s
   * @param {!Object} x
   * @return {?}
   */
  function endsWith(s, x) {
    var replace_cache = {};
    /** @type {!Object} */
    replace_cache[s] = x;
    return [replace_cache];
  }
  /**
   * @param {!Object} objects
   * @param {!Object} type
   * @param {string} name
   * @param {number} index
   * @param {undefined} options
   * @return {?}
   */
  function addItems(objects, type, name, index, options) {
    /** @type {!Array} */
    var fields = [];
    forEach(objects, function (value, i) {
      if (value = addItem(value, type, name, index, options)) {
        fields.push(i + "=" + value);
      }
    });
    return fields.join(type);
  }
  /**
   * @param {string} item
   * @param {!Object} data
   * @param {string} file
   * @param {number} i
   * @param {number} key
   * @return {?}
   */
  function addItem(item, data, file, i, key) {
    if (null == item) {
      return "";
    }
    /** @type {!Object} */
    data = data || "&";
    /** @type {string} */
    file = file || ",$";
    if ("string" == typeof file) {
      /** @type {!Array<string>} */
      file = file.split("");
    }
    if (item instanceof Array) {
      if (i = i || 0, i < file.length) {
        /** @type {!Array} */
        var fs = [];
        /** @type {number} */
        var kItem = 0;
        for (; kItem < item.length; kItem++) {
          fs.push(addItem(item[kItem], data, file, i + 1, key));
        }
        return fs.join(file[i]);
      }
    } else {
      if ("object" == typeof item) {
        return key = key || 0, 2 > key ? encodeURIComponent(addItems(item, data, file, i, key + 1)) : "...";
      }
    }
    return encodeURIComponent(String(item));
  }
  /**
   * @param {!Object} item
   * @param {string} value
   * @return {?}
   */
  function cell(item, value) {
    /** @type {string} */
    var string = "https://pagead2.googlesyndication.com" + value;
    /** @type {number} */
    var pos = scan(item) - value.length;
    if (0 > pos) {
      return "";
    }
    item.g.sort(function (b, a) {
      return b - a;
    });
    /** @type {null} */
    value = null;
    /** @type {string} */
    var path = "";
    /** @type {number} */
    var i = 0;
    for (; i < item.g.length; i++) {
      var name = item.g[i];
      var crossfilterable_layers = item.h[name];
      /** @type {number} */
      var layer_i = 0;
      for (; layer_i < crossfilterable_layers.length; layer_i++) {
        if (!pos) {
          value = null == value ? name : value;
          break;
        }
        var p = addItems(crossfilterable_layers[layer_i], item.j, ",$");
        if (p) {
          p = path + p;
          if (pos >= p.length) {
            /** @type {number} */
            pos = pos - p.length;
            /** @type {string} */
            string = string + p;
            path = item.j;
            break;
          }
          value = null == value ? name : value;
        }
      }
    }
    /** @type {string} */
    item = "";
    if (null != value) {
      /** @type {string} */
      item = path + "trn=" + value;
    }
    return string + item;
  }
  /**
   * @param {!Object} from
   * @return {?}
   */
  function scan(from) {
    /** @type {number} */
    var prev = 1;
    var current;
    for (current in from.h) {
      /** @type {number} */
      prev = current.length > prev ? current.length : prev;
    }
    return 3997 - prev - from.j.length - 1;
  }
  /**
   * @return {undefined}
   */
  function Particle() {
    /** @type {number} */
    this.g = Math.random();
  }
  /**
   * @param {!Object} config
   * @param {number} value
   * @return {undefined}
   */
  function copyStyles(config, value) {
    if (0 <= value && 1 >= value) {
      /** @type {number} */
      config.g = value;
    }
  }
  /**
   * @param {!Object} left
   * @param {!Object} str
   * @param {!Object} value
   * @param {?} state
   * @param {string} locale
   * @return {undefined}
   */
  function html(left, str, value, state, locale) {
    if (((void 0 === state ? 0 : state) ? left.g : Math.random()) < (locale || .01)) {
      try {
        if (value instanceof buildPortals) {
          /** @type {!Object} */
          var options = value;
        } else {
          options = new buildPortals;
          forEach(value, function (match, query) {
            /** @type {!Object} */
            var argv = options;
            /** @type {number} */
            var i = argv.l++;
            match = endsWith(query, match);
            argv.g.push(i);
            argv.h[i] = match;
          });
        }
        var year = cell(options, "/pagead/gen_204?id=" + str + "&");
        if (year) {
          append(win, year, false, false);
        }
      } catch (h$jscomp$20) {
      }
    }
  }
  /**
   * @return {?}
   */
  function end() {
    if (null === bufferGlobal) {
      /** @type {string} */
      bufferGlobal = "";
      try {
        /** @type {string} */
        var token = "";
        try {
          token = win.top.location.hash;
        } catch (c$jscomp$112) {
          token = win.location.hash;
        }
        if (token) {
          var extensions = token.match(/\bdeid=([\d,]+)/);
          bufferGlobal = extensions ? extensions[1] : "";
        }
      } catch (c$jscomp$113) {
      }
    }
    return bufferGlobal;
  }
  /**
   * @return {?}
   */
  function now() {
    var result = void 0 === result ? win : result;
    return (result = result.performance) && result.now && result.timing ? Math.floor(result.now() + result.timing.navigationStart) : Date.now();
  }
  /**
   * @return {?}
   */
  function redraw() {
    var result = void 0 === result ? win : result;
    return (result = result.performance) && result.now ? result.now() : null;
  }
  /**
   * @param {string} name
   * @param {!Object} tag
   * @return {undefined}
   */
  function toggle(name, tag) {
    var last_value = redraw() || now();
    /** @type {string} */
    this.label = name;
    /** @type {!Object} */
    this.type = tag;
    this.value = last_value;
    /** @type {number} */
    this.duration = 0;
    this.taskId = this.slotId = void 0;
    /** @type {number} */
    this.uniqueId = Math.random();
  }
  /**
   * @param {(Object|null|string)} element
   * @return {undefined}
   */
  function Controller(element) {
    /** @type {!Array} */
    this.h = [];
    this.j = element || win;
    /** @type {null} */
    var elWidth = null;
    if (element) {
      element.google_js_reporting_queue = element.google_js_reporting_queue || [];
      this.h = element.google_js_reporting_queue;
      elWidth = element.google_measure_js_timing;
    }
    this.g = fadeOut() || (null != elWidth ? elWidth : 1 > Math.random());
  }
  /**
   * @param {!Object} o
   * @return {undefined}
   */
  function hide(o) {
    /** @type {boolean} */
    o.g = false;
    if (o.h != o.j.google_js_reporting_queue) {
      if (fadeOut()) {
        each(o.h, item);
      }
      /** @type {number} */
      o.h.length = 0;
    }
  }
  /**
   * @param {!Object} value
   * @return {undefined}
   */
  function item(value) {
    if (value && perf && fadeOut()) {
      perf.clearMarks("goog_" + value.label + "_" + value.uniqueId + "_start");
      perf.clearMarks("goog_" + value.label + "_" + value.uniqueId + "_end");
    }
  }
  /**
   * @param {?} model
   * @param {!Array} options
   * @param {number} callback
   * @return {undefined}
   */
  function Slider(model, options, callback) {
    this.u = model;
    /** @type {!Array} */
    this.m = options;
    /** @type {null} */
    this.g = null;
    this.l = this.J;
    /** @type {(null|number)} */
    this.h = void 0 === callback ? null : callback;
    /** @type {boolean} */
    this.j = false;
  }
  /**
   * @param {!Object} b
   * @return {?}
   */
  function t(b) {
    /** @type {string} */
    var v = b.toString();
    if (b.name && -1 == v.indexOf(b.name)) {
      /** @type {string} */
      v = v + (": " + b.name);
    }
    if (b.message && -1 == v.indexOf(b.message)) {
      /** @type {string} */
      v = v + (": " + b.message);
    }
    if (b.stack) {
      b = b.stack;
      /** @type {string} */
      var s = v;
      try {
        if (-1 == b.indexOf(s)) {
          /** @type {string} */
          b = s + "\n" + b;
        }
        var button;
        for (; b != button;) {
          button = b;
          b = b.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
        }
        v = b.replace(RegExp("\n *", "g"), "\n");
      } catch (e$jscomp$56) {
        /** @type {string} */
        v = s;
      }
    }
    return v;
  }
  /**
   * @param {!Object} data
   * @return {?}
   */
  function isString(data) {
    return "string" === typeof data;
  }
  /**
   * @param {!Array} p
   * @return {?}
   */
  function change(p) {
    return void 0 === p;
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function position(x) {
    this.i = push(x);
  }
  /**
   * @param {?} val
   * @return {?}
   */
  function passThrough(val) {
    return null != val ? !val : val;
  }
  /**
   * @param {!NodeList} parent
   * @param {boolean} key
   * @return {?}
   */
  function header(parent, key) {
    /** @type {boolean} */
    var c$jscomp$117 = false;
    /** @type {number} */
    var i = 0;
    for (; i < parent.length; i++) {
      var header = parent[i]();
      if (header === key) {
        return header;
      }
      if (null == header) {
        /** @type {boolean} */
        c$jscomp$117 = true;
      }
    }
    if (!c$jscomp$117) {
      return !key;
    }
  }
  /**
   * @param {?} value
   * @param {?} event
   * @return {?}
   */
  function attach(value, event) {
    var result = stringify(value, position, 2);
    if (!result.length) {
      return onMessage(value, event);
    }
    value = resolve(value, 1);
    if (1 === value) {
      return passThrough(attach(result[0], event));
    }
    result = when(result, function (name) {
      return function () {
        return attach(name, event);
      };
    });
    switch (value) {
      case 2:
        return header(result, false);
      case 3:
        return header(result, true);
    }
  }
  /**
   * @param {!Object} value
   * @param {?} type
   * @return {?}
   */
  function onMessage(value, type) {
    var index = pop(value, w);
    a: {
      switch (index) {
        case 3:
          var name = resolve(value, split(value, w, 3));
          break a;
        case 4:
          name = resolve(value, split(value, w, 4));
          break a;
        case 5:
          name = resolve(value, split(value, w, 5));
          break a;
      }
      name = void 0;
    }
    if (name && (type = (type = type[index]) && type[name])) {
      try {
        var item = type.apply(null, toArray(ok(value, 8)));
      } catch (f$jscomp$38) {
        return;
      }
      type = resolve(value, 1);
      if (4 === type) {
        return !!item;
      }
      if (5 === type) {
        return null != item;
      }
      if (12 === type) {
        value = format(value, split(value, entry, 7));
      } else {
        a: {
          switch (index) {
            case 4:
              value = fromString(value, split(value, entry, 6));
              break a;
            case 5:
              value = format(value, split(value, entry, 7));
              break a;
          }
          value = void 0;
        }
      }
      if (null != value) {
        if (6 === type) {
          return item === value;
        }
        if (9 === type) {
          return null != item && 0 === generate(String(item), value);
        }
        if (null != item) {
          switch (type) {
            case 7:
              return item < value;
            case 8:
              return item > value;
            case 12:
              return isString(value) && isString(item) && (new RegExp(value)).test(item);
            case 10:
              return null != item && -1 === generate(String(item), value);
            case 11:
              return null != item && 1 === generate(String(item), value);
          }
        }
      }
    }
  }
  /**
   * @param {?} url
   * @param {?} c
   * @return {?}
   */
  function clearServices(url, c) {
    return !url || !(!c || !attach(url, c));
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function foo(x) {
    this.i = push(x);
  }
  /**
   * @param {string} c
   * @return {undefined}
   */
  function Expression(c) {
    this.i = push(c);
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function args(x) {
    this.i = push(x);
  }
  /**
   * @param {string} info
   * @return {undefined}
   */
  function Field(info) {
    this.i = push(info);
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function MinimaxProblemDisplay(x) {
    this.i = push(x);
  }
  /**
   * @param {undefined} expected
   * @return {?}
   */
  function peg$fail(expected) {
    var str_trim = new MinimaxProblemDisplay;
    return escapeStringInfo(str_trim, 1, assign(expected));
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function Animation(x) {
    this.i = push(x);
  }
  /**
   * @param {!Object} field
   * @param {!Object} value
   * @return {?}
   */
  function _max(field, value) {
    return callback(field, 1, value, 0);
  }
  /**
   * @param {!Object} param
   * @param {!Object} element
   * @return {?}
   */
  function max(param, element) {
    return callback(param, 2, element, 0);
  }
  /**
   * @param {string} c
   * @return {undefined}
   */
  function ReturnStatement(c) {
    this.i = push(c);
  }
  /**
   * @param {!Object} data
   * @param {!Object} result
   * @return {?}
   */
  function resolved(data, result) {
    return escapeCodeValue(data, 1, result);
  }
  /**
   * @param {!Object} value
   * @param {!Object} i
   * @return {?}
   */
  function crawl(value, i) {
    return escapeCodeValue(value, 2, i);
  }
  /**
   * @param {!Object} id
   * @param {!Object} o
   * @return {undefined}
   */
  function _has(id, o) {
    escapeCodeValue(id, 3, o);
  }
  /**
   * @param {!Object} count
   * @param {?} data
   * @return {undefined}
   */
  function id(count, data) {
    callback(count, 4, keys(data), "");
  }
  /**
   * @param {!Object} next
   * @param {string} callback
   * @return {?}
   */
  function fetchData(next, callback) {
    return empty(next, 5, callback);
  }
  /**
   * @param {string} el
   * @return {undefined}
   */
  function Component(el) {
    this.i = push(el);
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function hello(x) {
    this.i = push(x);
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function Block(x) {
    this.i = push(x);
  }
  /**
   * @param {!Object} data
   * @param {?} key
   * @return {undefined}
   */
  function min(data, key) {
    callback(data, 1, keys(key), "");
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function NineSlice(x) {
    this.i = push(x);
  }
  /**
   * @param {!Object} key
   * @param {!Object} value
   * @return {?}
   */
  function doIt(key, value) {
    return color(key, 4, progress, value);
  }
  /**
   * @param {string} file
   * @return {undefined}
   */
  function Stats(file) {
    this.i = push(file);
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function Model(x) {
    this.i = push(x);
  }
  /**
   * @param {!Object} win
   * @param {number} start
   * @return {?}
   */
  function focus(win, start) {
    return select(win, 1, start);
  }
  /**
   * @param {!Object} event
   * @param {number} options
   * @return {?}
   */
  function postMessage(event, options) {
    return select(event, 2, options);
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function Options(x) {
    this.i = push(x);
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function component(x) {
    this.i = push(x);
  }
  /**
   * @param {!Object} time
   * @param {!Object} result
   * @return {?}
   */
  function reply(time, result) {
    return escapeCodeValue(time, 1, result);
  }
  /**
   * @param {!Object} name
   * @param {!Object} value
   * @return {?}
   */
  function validation(name, value) {
    return call(name, 2, value);
  }
  /**
   * @param {undefined} text
   * @param {!Object} obj
   * @return {?}
   */
  function __(text, obj) {
    return next(text, 4, obj);
  }
  /**
   * @param {!Object} values
   * @param {!Object} key
   * @return {?}
   */
  function sprintf(values, key) {
    return call(values, 5, key);
  }
  /**
   * @param {!Object} f
   * @param {number} id
   * @return {?}
   */
  function $timeout(f, id) {
    return select(f, 6, id);
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function Code(x) {
    this.i = push(x);
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function Transform(x) {
    this.i = push(x);
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function Variable(x) {
    this.i = push(x);
  }
  /**
   * @param {?} object
   * @return {?}
   */
  function formatClassName(object) {
    var a = new Variable;
    return color(a, 4, summary, object);
  }
  /**
   * @param {!Function} val
   * @return {undefined}
   */
  function concat(val) {
    val.Za.apply(val, toArray(htmlWebPackPluginAssets.apply(1, arguments).map(function (morc) {
      return {
        fb: 4,
        Va: morc.toJSON()
      };
    })));
  }
  /**
   * @param {!Array} f
   * @return {undefined}
   */
  function emit(f) {
    f.Za.apply(f, toArray(htmlWebPackPluginAssets.apply(1, arguments).map(function (morc) {
      return {
        fb: 7,
        Va: morc.toJSON()
      };
    })));
  }
  /**
   * @param {!Array} data
   * @return {?}
   */
  function omit(data) {
    return JSON.stringify([data.map(function (data) {
      var server_identities = {};
      return [(server_identities[data.fb] = data.Va, server_identities)];
    }), null]);
  }
  /**
   * @param {?} path
   * @param {!Array} params
   * @return {undefined}
   */
  function download(path, params) {
    if (global.globalThis.fetch) {
      global.globalThis.fetch(path, {
        method: "POST",
        body: params,
        keepalive: 65536 > params.length,
        credentials: "omit",
        mode: "no-cors",
        redirect: "follow"
      }).catch(function () {
      });
    } else {
      /** @type {!XMLHttpRequest} */
      var xhr = new XMLHttpRequest;
      xhr.open("POST", path, true);
      xhr.send(params);
    }
  }
  /**
   * @return {undefined}
   */
  function selection() {
    this.m = this.m;
    this.j = this.j;
  }
  /**
   * @param {!Object} key
   * @param {(!Function|string)} element
   * @return {undefined}
   */
  function findElement(key, element) {
    if (key.m) {
      element();
    } else {
      if (!key.j) {
        /** @type {!Array} */
        key.j = [];
      }
      key.j.push(element);
    }
  }
  /**
   * @param {string} s
   * @return {undefined}
   */
  function Layout(s) {
    selection.call(this);
    /** @type {string} */
    this.s = s;
    /** @type {number} */
    this.g = 0;
    /** @type {null} */
    this.K = null;
  }
  /**
   * @param {!Object} node
   * @return {undefined}
   */
  function clear(node) {
    if (node.s.document.visibilityState) {
      addEventListener(node, node.s.document, "visibilitychange", function (res) {
        if ("hidden" === node.s.document.visibilityState) {
          forward(node, res);
        }
        if ("visible" === node.s.document.visibilityState) {
          /** @type {number} */
          node.g = 0;
        }
      });
    } else {
      if ("onpagehide" in node.s) {
        addEventListener(node, node.s, "pagehide", function (res) {
          forward(node, res);
        });
        addEventListener(node, node.s, "pageshow", function () {
          /** @type {number} */
          node.g = 0;
        });
      } else {
        addEventListener(node, node.s, "beforeunload", function (res) {
          forward(node, res);
        });
      }
    }
  }
  /**
   * @param {!Object} key
   * @param {!Function} down
   * @return {undefined}
   */
  function all(key, down) {
    if (!key.K) {
      clear(key);
    }
    /** @type {!Function} */
    key.K = down;
  }
  /**
   * @param {!Object} _
   * @param {!Object} fn
   * @return {undefined}
   */
  function forward(_, fn) {
    if (1 !== _.g) {
      /** @type {number} */
      _.g = 1;
      if (_.K) {
        _.K(fn);
      }
    }
  }
  /**
   * @param {!Object} id
   * @param {!Object} emitter
   * @param {string} event
   * @param {!Function} callback
   * @return {undefined}
   */
  function addEventListener(id, emitter, event, callback) {
    on(emitter, event, callback);
    findElement(id, function () {
      return removeEventListener(emitter, event, callback);
    });
  }
  /**
   * @param {string} value
   * @param {?} a
   * @param {number} fn
   * @param {!Array} val
   * @param {?} global
   * @return {undefined}
   */
  function page(value, a, fn, val, global) {
    /** @type {string} */
    this.B = value;
    this.A = a;
    /** @type {number} */
    this.G = fn;
    /** @type {!Array} */
    this.m = val;
    this.u = global;
    /** @type {!Array} */
    this.l = [];
    /** @type {!Array} */
    this.g = [];
    /** @type {null} */
    this.h = null;
  }
  /**
   * @param {!Object} self
   * @param {?} options
   * @param {!Function} callback
   * @param {?} type
   * @return {undefined}
   */
  function resize(self, options, callback, type) {
    if (!self.j) {
      self.j = new Layout(options);
      all(self.j, function () {
        var $openEl = $(self.l);
        var parent = $openEl.next();
        for (; !parent.done; parent = $openEl.next()) {
          parent = parent.value;
          parent();
        }
        callback();
      });
    }
    if (type && 1 !== self.j.g) {
      self.l.push(type);
    }
  }
  /**
   * @param {!Object} a
   * @return {undefined}
   */
  function errorCallback(a) {
    if (null !== a.h) {
      clearTimeout(a.h);
      /** @type {null} */
      a.h = null;
    }
    if (a.g.length) {
      var o = omit(a.g);
      a.A(a.B + "?e=1", o);
      /** @type {!Array} */
      a.g = [];
    }
  }
  /**
   * @param {!Object} value
   * @param {?} doc
   * @param {(!Function|string)} range
   * @return {undefined}
   */
  function moveTo(value, doc, range) {
    resize(value, doc, function () {
      errorCallback(value);
    }, range);
  }
  /**
   * @param {number} state
   * @param {number} callback
   * @param {?} name
   * @return {undefined}
   */
  function Frame(state, callback, name) {
    page.call(this, "https://pagead2.googlesyndication.com/pagead/ping", download, void 0 === state ? 1E3 : state, void 0 === callback ? 100 : callback, (void 0 === name ? false : name) && !!global.globalThis.fetch);
  }
  /**
   * @param {number} val
   * @param {?} options
   * @param {number} callback
   * @return {undefined}
   */
  function animate(val, options, callback) {
    var x = void 0 === x ? new Frame(options) : x;
    /** @type {number} */
    this.m = val;
    /** @type {number} */
    this.l = callback;
    this.h = x;
    /** @type {!Array} */
    this.g = [];
    /** @type {boolean} */
    this.j = 0 < val && random() < 1 / val;
  }
  /**
   * @param {!Object} obj
   * @param {number} value
   * @param {number} event
   * @param {!Object} code
   * @param {!Array} id
   * @param {number} duration
   * @return {undefined}
   */
  function done(obj, value, event, code, id, duration) {
    if (obj.j) {
      var data = postMessage(focus(new Model, value), event);
      value = $timeout(validation(reply(sprintf(__(new component, code), id), data), obj.g.slice()), duration);
      value = formatClassName(value);
      concat(obj.h, reject(obj, value));
      if (1 === duration || 3 === duration || 4 === duration && !obj.g.some(function (expression) {
        return resolve(expression, 1) === resolve(data, 1) && resolve(expression, 2) === event;
      })) {
        obj.g.push(data);
        if (100 < obj.g.length) {
          obj.g.shift();
        }
      }
    }
  }
  /**
   * @param {!Object} data
   * @param {!Array} options
   * @param {!Object} index
   * @param {!Array} value
   * @return {undefined}
   */
  function inspect(data, options, index, value) {
    if (data.j && data.l) {
      var parent = new Transform;
      options = call(parent, 2, options);
      index = call(options, 3, index);
      if (value) {
        callback(index, 1, value, 0);
      }
      value = new Variable;
      value = color(value, 7, summary, index);
      concat(data.h, reject(data, value));
    }
  }
  /**
   * @param {!Object} args
   * @param {?} value
   * @return {?}
   */
  function reject(args, value) {
    value = callback(value, 1, Date.now(), 0);
    var data = property(window);
    value = callback(value, 2, data, 0);
    return callback(value, 6, args.m, 0);
  }
  /**
   * @param {!Function} options
   * @return {?}
   */
  function require(options) {
    /** @type {string} */
    var target = "Aa";
    if (options.Aa && options.hasOwnProperty(target)) {
      return options.Aa;
    }
    target = new options;
    return options.Aa = target;
  }
  /**
   * @return {undefined}
   */
  function clock() {
    var a$jscomp$265 = {};
    this.H = (a$jscomp$265[3] = {}, a$jscomp$265[4] = {}, a$jscomp$265[5] = {}, a$jscomp$265);
  }
  /**
   * @param {!Object} value
   * @param {?} expected
   * @return {?}
   */
  function deepEqual(value, expected) {
    switch (expected) {
      case 1:
        return resolve(value, split(value, offset, 1));
      case 2:
        return resolve(value, split(value, offset, 2));
      case 3:
        return resolve(value, split(value, offset, 3));
      case 6:
        return resolve(value, split(value, offset, 6));
      default:
        return null;
    }
  }
  /**
   * @param {!Object} value
   * @param {number} prop
   * @return {?}
   */
  function _get(value, prop) {
    if (!value) {
      return null;
    }
    switch (prop) {
      case 1:
        return expect(value, 1);
      case 7:
        return format(value, 3);
      case 2:
        return fromString(value, 2);
      case 3:
        return format(value, 3);
      case 6:
        return ok(value, 4);
      default:
        return null;
    }
  }
  /**
   * @param {number} data
   * @param {number} key
   * @param {number} obj
   * @param {number} path
   * @return {?}
   */
  function getObj(data, key, obj, path) {
    /** @type {number} */
    var ii = path = void 0 === path ? 0 : path;
    var current;
    var g$jscomp$27;
    require(main).j[ii] = null != (g$jscomp$27 = null == (current = require(main).j[ii]) ? void 0 : current.add(key)) ? g$jscomp$27 : (new global.Set).add(key);
    ii = formatRegex();
    if (null != ii[key]) {
      return ii[key];
    }
    key = fun(path)[key];
    if (!key) {
      return obj;
    }
    key = handleWSMessageFn(JSON.stringify(key));
    key = read(key);
    data = _get(key, data);
    return null != data ? data : obj;
  }
  /**
   * @param {!Object} root
   * @return {?}
   */
  function read(root) {
    var H = require(clock).H;
    if (H) {
      var tag = apply(stringify(root, Expression, 5), function (data) {
        return clearServices(get(data, position, 1), H);
      });
      if (tag) {
        var d$jscomp$82;
        return null != (d$jscomp$82 = tag.getValue()) ? d$jscomp$82 : null;
      }
    }
    var val;
    return null != (val = get(root, foo, 4)) ? val : null;
  }
  /**
   * @return {undefined}
   */
  function main() {
    this.h = {};
    /** @type {!Array} */
    this.l = [];
    this.j = {};
    this.g = new global.Map;
  }
  /**
   * @param {undefined} page
   * @param {?} name
   * @param {undefined} data
   * @return {?}
   */
  function verbose(page, name, data) {
    return !!getObj(1, page, void 0 === name ? false : name, data);
  }
  /**
   * @param {number} index
   * @param {number} path
   * @param {undefined} props
   * @return {?}
   */
  function validator(index, path, props) {
    /** @type {number} */
    path = void 0 === path ? 0 : path;
    /** @type {number} */
    index = Number(getObj(2, index, path, props));
    return isNaN(index) ? path : index;
  }
  /**
   * @param {undefined} e
   * @param {number} value
   * @param {undefined} props
   * @return {?}
   */
  function output(e, value, props) {
    /** @type {(number|string)} */
    value = void 0 === value ? "" : value;
    e = getObj(3, e, value, props);
    return "string" === typeof e ? e : value;
  }
  /**
   * @param {number} obj
   * @param {number} fn
   * @param {undefined} key
   * @return {?}
   */
  function addHandler(obj, fn, key) {
    /** @type {(Array|number)} */
    fn = void 0 === fn ? [] : fn;
    obj = getObj(6, obj, fn, key);
    return Array.isArray(obj) ? obj : fn;
  }
  /**
   * @param {number} fn
   * @return {?}
   */
  function fun(fn) {
    return require(main).h[fn] || (require(main).h[fn] = {});
  }
  /**
   * @param {!Object} array
   * @param {number} key
   * @return {undefined}
   */
  function interpolate(array, key) {
    var res = fun(key);
    forEach(array, function (resWorkflow, plotIndex) {
      return res[plotIndex] = resWorkflow;
    });
  }
  /**
   * @param {!Object} json
   * @param {!Array} filter
   * @param {!Object} input
   * @param {!Object} data
   * @param {?} event
   * @return {undefined}
   */
  function handle(json, filter, input, data, event) {
    event = void 0 === event ? false : event;
    /** @type {!Array} */
    var options = [];
    /** @type {!Array} */
    var value = [];
    each(filter, function (item) {
      var h = fun(item);
      each(json, function (value) {
        var val = pop(value, offset);
        var key = deepEqual(value, val);
        if (key) {
          var code;
          var encryptedData;
          var arr;
          var res = null != (arr = null == (code = require(main).g.get(item)) ? void 0 : null == (encryptedData = code.get(key)) ? void 0 : encryptedData.slice(0)) ? arr : [];
          a: {
            code = new Code;
            switch (val) {
              case 1:
                onExit(code, 1, err, assign(key));
                break;
              case 2:
                onExit(code, 2, err, assign(key));
                break;
              case 3:
                onExit(code, 3, err, assign(key));
                break;
              case 6:
                onExit(code, 4, err, assign(key));
                break;
              default:
                val = void 0;
                break a;
            }
            next(code, 5, res);
            val = code;
          }
          if (res = val) {
            var ret;
            /** @type {boolean} */
            res = !(null == (ret = require(main).j[item]) || !ret.has(key));
          }
          if (res) {
            options.push(val);
          }
          if (ret = val) {
            var res;
            /** @type {boolean} */
            ret = !(null == (res = require(main).g.get(item)) || !res.has(key));
          }
          if (ret) {
            value.push(val);
          }
          if (!event) {
            res = require(main);
            if (!res.g.has(item)) {
              res.g.set(item, new global.Map);
            }
            if (!res.g.get(item).has(key)) {
              res.g.get(item).set(key, []);
            }
            if (data) {
              res.g.get(item).get(key).push(data);
            }
          }
          h[key] = value.toJSON();
        }
      });
    });
    if (options.length || value.length) {
      inspect(input, options, value, null != data ? data : void 0);
    }
  }
  /**
   * @param {!Object} data
   * @param {undefined} selector
   * @return {undefined}
   */
  function tap(data, selector) {
    var res = fun(selector);
    each(data, function (key) {
      var value = handleWSMessageFn(JSON.stringify(key));
      var val = pop(value, offset);
      if (value = deepEqual(value, val)) {
        if (!res[value]) {
          res[value] = key;
        }
      }
    });
  }
  /**
   * @return {?}
   */
  function list() {
    return when(define(Object, "keys").call(Object, require(main).h), function (minWorkers) {
      return Number(minWorkers);
    });
  }
  /**
   * @param {undefined} data
   * @return {undefined}
   */
  function populate(data) {
    if (!search(require(main).l, data)) {
      interpolate(fun(4), data);
    }
  }
  /**
   * @param {number} key
   * @param {!Function} name
   * @param {!Object} val
   * @return {undefined}
   */
  function parseOptions(key, name, val) {
    if (!val.hasOwnProperty(key)) {
      Object.defineProperty(val, String(key), {
        value: name
      });
    }
  }
  /**
   * @param {number} i
   * @param {number} name
   * @param {!Function} line
   * @return {?}
   */
  function debug(i, name, line) {
    return name[i] || line;
  }
  /**
   * @param {!Object} options
   * @return {undefined}
   */
  function createReadStream(options) {
    parseOptions(5, verbose, options);
    parseOptions(6, validator, options);
    parseOptions(7, output, options);
    parseOptions(8, addHandler, options);
    parseOptions(13, tap, options);
    parseOptions(15, populate, options);
  }
  /**
   * @param {!Object} options
   * @return {undefined}
   */
  function plugin(options) {
    parseOptions(4, function (Quaternion) {
      require(clock).H = Quaternion;
    }, options);
    parseOptions(9, function (javascriptName, jsonName) {
      var time = require(clock);
      if (null == time.H[3][javascriptName]) {
        time.H[3][javascriptName] = jsonName;
      }
    }, options);
    parseOptions(10, function (javascriptName, jsonName) {
      var time = require(clock);
      if (null == time.H[4][javascriptName]) {
        time.H[4][javascriptName] = jsonName;
      }
    }, options);
    parseOptions(11, function (javascriptName, jsonName) {
      var time = require(clock);
      if (null == time.H[5][javascriptName]) {
        time.H[5][javascriptName] = jsonName;
      }
    }, options);
    parseOptions(14, function (syncs) {
      var time = require(clock);
      var $openEl = $([3, 4, 5]);
      var i = $openEl.next();
      for (; !i.done; i = $openEl.next()) {
        i = i.value;
        define(Object, "assign").call(Object, time.H[i], syncs[i]);
      }
    }, options);
  }
  /**
   * @param {!Object} self
   * @return {undefined}
   */
  function restore(self) {
    if (!self.hasOwnProperty("init-done")) {
      Object.defineProperty(self, "init-done", {
        value: true
      });
    }
  }
  /**
   * @return {undefined}
   */
  function r() {
  }
  /**
   * @param {!Object} self
   * @param {undefined} key
   * @param {number} err
   * @return {undefined}
   */
  function initialize(self, key, err) {
    self.j = debug(1, key, function () {
    });
    /**
     * @param {!Object} data
     * @param {?} obj
     * @return {?}
     */
    self.l = function (data, obj) {
      return debug(2, key, function () {
        return [];
      })(data, err, obj);
    };
    /**
     * @return {?}
     */
    self.g = function () {
      return debug(3, key, function () {
        return [];
      })(err);
    };
    /**
     * @param {!Object} data
     * @return {undefined}
     */
    self.h = function (data) {
      debug(16, key, function () {
      })(data, err);
    };
  }
  /**
   * @return {undefined}
   */
  function fastpromise() {
    this.h = new RunHandlerTask(this);
    /** @type {number} */
    this.g = 0;
  }
  /**
   * @param {!Object} that
   * @return {undefined}
   */
  function bind0(that) {
    if (0 != that.g) {
      throw Error("Already resolved/rejected.");
    }
  }
  /**
   * @param {string} g
   * @return {undefined}
   */
  function RunHandlerTask(g) {
    /** @type {string} */
    this.g = g;
  }
  /**
   * @param {!Object} self
   * @return {undefined}
   */
  function newEmptyYaku(self) {
    switch (self.g.g) {
      case 0:
        break;
      case 1:
        if (self.h) {
          self.h(self.g.l);
        }
        break;
      case 2:
        if (self.j) {
          self.j(self.g.j);
        }
        break;
      default:
        throw Error("Unhandled deferred state.");
    }
  }
  /**
   * @param {string} fill
   * @return {undefined}
   */
  function Point(fill) {
    /** @type {string} */
    this.g = fill.slice(0);
  }
  /**
   * @param {!NodeList} options
   * @param {!Function} context
   * @return {undefined}
   */
  function parseText(options, context) {
    /** @type {!Array} */
    var L = [];
    /** @type {number} */
    var z = options.length;
    /** @type {number} */
    var i = 0;
    for (; i < z; i++) {
      L.push(options[i]);
    }
    L.forEach(context, void 0);
  }
  /**
   * @return {undefined}
   */
  function FirebaseStore() {
    this.g = {};
    this.h = {};
  }
  /**
   * @param {string} x
   * @return {?}
   */
  function hash(x) {
    return x instanceof Object ? String(fn(x)) : x + "";
  }
  /**
   * @param {string} g
   * @param {number} w
   * @return {undefined}
   */
  function Node(g, w) {
    /** @type {string} */
    this.g = g;
    /** @type {number} */
    this.h = w;
  }
  /**
   * @param {!Object} el
   * @return {?}
   */
  function saveFile(el) {
    return null != el.g ? el.getValue() : null;
  }
  /**
   * @param {!Object} res
   * @param {!Function} action
   * @return {?}
   */
  function dispatch(res, action) {
    if (null != res.g) {
      action(res.getValue());
    }
    return res;
  }
  /**
   * @param {!Object} self
   * @param {!Function} cb
   * @return {?}
   */
  function once(self, cb) {
    if (!(null != self.g)) {
      cb(self.h);
    }
    return self;
  }
  /**
   * @param {string} newValue
   * @return {?}
   */
  function replace(newValue) {
    return new Node({
      value: newValue
    }, null);
  }
  /**
   * @param {!Object} parent
   * @return {?}
   */
  function match(parent) {
    return new Node(null, parent);
  }
  /**
   * @param {!Function} callback
   * @return {?}
   */
  function loadCSS(callback) {
    try {
      return replace(callback());
    } catch (element) {
      return match(element);
    }
  }
  /**
   * @param {!NodeList} array
   * @return {undefined}
   */
  function List(array) {
    this.g = new FirebaseStore;
    if (array) {
      /** @type {number} */
      var i = 0;
      for (; i < array.length; ++i) {
        this.add(array[i]);
      }
    }
  }
  /**
   * @return {undefined}
   */
  function Stream() {
    this.g = new FirebaseStore;
  }
  /**
   * @param {string} B
   * @return {undefined}
   */
  function j(B) {
    this.i = push(B);
  }
  /**
   * @param {?} elem
   * @return {undefined}
   */
  function drawImage(elem) {
    var memberDefinition = void 0 === elem.Na ? void 0 : elem.Na;
    var x = void 0 === elem.pb ? void 0 : elem.pb;
    var j = void 0 === elem.Ya ? void 0 : elem.Ya;
    this.g = void 0 === elem.hb ? void 0 : elem.hb;
    this.l = new Point(memberDefinition || []);
    this.j = j;
    this.h = x;
  }
  /**
   * @param {!Object} json
   * @return {?}
   */
  function formatter(json) {
    /** @type {!Array} */
    var buf = [];
    var n = json.l;
    if (n && n.g.length) {
      buf.push({
        aa: "a",
        ga: isDate(n)
      });
    }
    if (null != json.g) {
      buf.push({
        aa: "as",
        ga: json.g
      });
    }
    if (null != json.h) {
      buf.push({
        aa: "i",
        ga: String(json.h)
      });
    }
    if (null != json.j) {
      buf.push({
        aa: "rp",
        ga: String(json.j)
      });
    }
    buf.sort(function (x, newPropertyModel) {
      return x.aa.localeCompare(newPropertyModel.aa);
    });
    buf.unshift({
      aa: "t",
      ga: "aa"
    });
    return buf;
  }
  /**
   * @param {string} a
   * @return {?}
   */
  function isDate(a) {
    a = a.g.slice(0).map(json);
    /** @type {string} */
    a = JSON.stringify(a);
    return equals(a);
  }
  /**
   * @param {!Object} value
   * @return {?}
   */
  function json(value) {
    var obj = {};
    if (null != reduce(value, 7)) {
      obj.q = reduce(value, 7);
    }
    if (null != trim(value, 2)) {
      obj.o = trim(value, 2);
    }
    if (null != trim(value, 5)) {
      obj.p = trim(value, 5);
    }
    return obj;
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function Class(x) {
    this.i = push(x);
  }
  /**
   * @param {?} Workshops
   * @param {?} $stateParams
   * @return {undefined}
   */
  function model(Workshops, $stateParams) {
    this.Ra = Workshops;
    this.Xa = $stateParams;
  }
  /**
   * @param {!Array} expr
   * @return {?}
   */
  function build(expr) {
    /** @type {!Array<?>} */
    var deprecatedStylingMethods = [].slice.call(arguments).filter(wrapOverride(function (canCreateDiscussions) {
      return null === canCreateDiscussions;
    }));
    if (!deprecatedStylingMethods.length) {
      return null;
    }
    /** @type {!Array} */
    var attributes = [];
    var ret = {};
    deprecatedStylingMethods.forEach(function (sandbox) {
      /** @type {!Array<?>} */
      attributes = attributes.concat(sandbox.Ra || []);
      ret = define(Object, "assign").call(Object, ret, sandbox.Xa);
    });
    return new model(attributes, ret);
  }
  /**
   * @param {!Object} result
   * @return {?}
   */
  function _isValid(result) {
    switch (result) {
      case 1:
        return new model(null, {
          google_ad_semantic_area: "mc"
        });
      case 2:
        return new model(null, {
          google_ad_semantic_area: "h"
        });
      case 3:
        return new model(null, {
          google_ad_semantic_area: "f"
        });
      case 4:
        return new model(null, {
          google_ad_semantic_area: "s"
        });
      default:
        return null;
    }
  }
  /**
   * @param {string} data
   * @return {?}
   */
  function view(data) {
    if (null == data) {
      /** @type {null} */
      data = null;
    } else {
      var back = formatter(data);
      /** @type {!Array} */
      data = [];
      back = $(back);
      var out = back.next();
      for (; !out.done; out = back.next()) {
        out = out.value;
        /** @type {string} */
        var strTime = String(out.ga);
        data.push(out.aa + "." + (20 >= strTime.length ? strTime : strTime.slice(0, 19) + "_"));
      }
      data = new model(null, {
        google_placement_id: data.join("~")
      });
    }
    return data;
  }
  /**
   * @return {undefined}
   */
  function polyfillCollections() {
    /** @type {boolean} */
    this.wasPlaTagProcessed = false;
    this.wasReactiveAdConfigReceived = {};
    this.adCount = {};
    this.wasReactiveAdVisible = {};
    this.stateForType = {};
    this.reactiveTypeEnabledInAsfe = {};
    /** @type {boolean} */
    this.wasReactiveTagRequestSent = false;
    this.reactiveTypeDisabledByPublisher = {};
    this.tagSpecificState = {};
    /** @type {boolean} */
    this.messageValidationEnabled = false;
    this.floatingAdsStacking = new Dh$jscomp$0;
    this.sideRailProcessedFixedElements = new global.Set;
    this.sideRailAvailableSpace = new global.Map;
    this.sideRailPlasParam = new global.Map;
  }
  /**
   * @param {?} searchElement
   * @return {?}
   */
  function needsPolyfill(searchElement) {
    if (searchElement.google_reactive_ads_global_state) {
      if (null == searchElement.google_reactive_ads_global_state.sideRailProcessedFixedElements) {
        searchElement.google_reactive_ads_global_state.sideRailProcessedFixedElements = new global.Set;
      }
      if (null == searchElement.google_reactive_ads_global_state.sideRailAvailableSpace) {
        searchElement.google_reactive_ads_global_state.sideRailAvailableSpace = new global.Map;
      }
      if (null == searchElement.google_reactive_ads_global_state.sideRailPlasParam) {
        searchElement.google_reactive_ads_global_state.sideRailPlasParam = new global.Map;
      }
    } else {
      searchElement.google_reactive_ads_global_state = new polyfillCollections;
    }
    return searchElement.google_reactive_ads_global_state;
  }
  /**
   * @return {undefined}
   */
  function Dh$jscomp$0() {
    this.maxZIndexRestrictions = {};
    /** @type {number} */
    this.nextRestrictionId = 0;
    /** @type {!Array} */
    this.maxZIndexListeners = [];
  }
  /**
   * @param {!Object} context
   * @return {?}
   */
  function jQuery(context) {
    context = context.document;
    var b$jscomp$231 = {};
    if (context) {
      b$jscomp$231 = "CSS1Compat" == context.compatMode ? context.documentElement : context.body;
    }
    return b$jscomp$231 || {};
  }
  /**
   * @param {!Object} value
   * @return {?}
   */
  function defaultValue(value) {
    return jQuery(value).clientWidth;
  }
  /**
   * @param {!Object} box
   * @return {?}
   */
  function isVisible(box) {
    box = box.getBoundingClientRect();
    return 0 < box.width && 0 < box.height;
  }
  /**
   * @param {!Object} self
   * @return {?}
   */
  function updateCanvasAndSuspend(self) {
    /** @type {number} */
    var widestInView = 0;
    self.forEach(function (wrapperElementOrRectangle) {
      return widestInView = Math.max(widestInView, wrapperElementOrRectangle.getBoundingClientRect().width);
    });
    return function (wrapperElementOrRectangle) {
      return wrapperElementOrRectangle.getBoundingClientRect().width > .5 * widestInView;
    };
  }
  /**
   * @param {!Object} target
   * @return {?}
   */
  function createFilter(target) {
    var b$jscomp$233 = jQuery(target).clientHeight || 0;
    return function (wrapperElementOrRectangle) {
      return wrapperElementOrRectangle.getBoundingClientRect().height >= .75 * b$jscomp$233;
    };
  }
  /**
   * @param {!Element} b
   * @param {!Element} a
   * @return {?}
   */
  function f_sort(b, a) {
    return b.getBoundingClientRect().top - a.getBoundingClientRect().top;
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function Map(x) {
    this.i = push(x);
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function Item(x) {
    this.i = push(x);
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function Image(x) {
    this.i = push(x);
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function dir(x) {
    this.i = push(x);
  }
  /**
   * @param {string} block
   * @return {undefined}
   */
  function Generator(block) {
    this.i = push(block);
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function range(x) {
    this.i = push(x);
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function a(x) {
    this.i = push(x);
  }
  /**
   * @param {string} count
   * @return {undefined}
   */
  function namespace(count) {
    this.i = push(count);
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function date(x) {
    this.i = push(x);
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function node(x) {
    this.i = push(x);
  }
  /**
   * @param {number} invalidValue
   * @param {number} aggregate
   * @param {number} b
   * @param {string} q
   * @return {undefined}
   */
  function SegmentTree(invalidValue, aggregate, b, q) {
    /** @type {number} */
    this.l = invalidValue;
    /** @type {number} */
    this.h = aggregate;
    /** @type {number} */
    this.j = b;
    /** @type {string} */
    this.g = q;
  }
  /**
   * @param {!Object} options
   * @param {!Object} data
   * @return {?}
   */
  function createChordSymbols(options, data) {
    if (null == options.g) {
      return data;
    }
    switch (options.g) {
      case 1:
        return data.slice(1);
      case 2:
        return data.slice(0, data.length - 1);
      case 3:
        return data.slice(1, data.length - 1);
      case 0:
        return data;
      default:
        throw Error("Unknown ignore mode: " + options.g);
    }
  }
  /**
   * @param {!Node} xml
   * @return {?}
   */
  function parseData(xml) {
    /** @type {!Array} */
    var results = [];
    parseText(xml.getElementsByTagName("p"), function (child) {
      if (100 <= compileNode(child)) {
        results.push(child);
      }
    });
    return results;
  }
  /**
   * @param {!Object} node
   * @return {?}
   */
  function compileNode(node) {
    if (3 == node.nodeType) {
      return node.length;
    }
    if (1 != node.nodeType || "SCRIPT" == node.tagName) {
      return 0;
    }
    /** @type {number} */
    var code = 0;
    parseText(node.childNodes, function (child) {
      code = code + compileNode(child);
    });
    return code;
  }
  /**
   * @param {string} d
   * @return {?}
   */
  function _d2h(d) {
    return 0 == d.length || isNaN(d[0]) ? d : "\\" + (30 + parseInt(d[0], 10)) + " " + d.substring(1);
  }
  /**
   * @param {!Object} s
   * @return {?}
   */
  function createHash(s) {
    if (1 != s.nodeType) {
      /** @type {boolean} */
      var result = false;
    } else {
      if (result = "INS" == s.tagName) {
        a: {
          /** @type {!Array} */
          result = ["adsbygoogle-placeholder"];
          s = s.className ? s.className.split(/\s+/) : [];
          var obj = {};
          /** @type {number} */
          var i = 0;
          for (; i < s.length; ++i) {
            /** @type {boolean} */
            obj[s[i]] = true;
          }
          /** @type {number} */
          i = 0;
          for (; i < result.length; ++i) {
            if (!obj[result[i]]) {
              /** @type {boolean} */
              result = false;
              break a;
            }
          }
          /** @type {boolean} */
          result = true;
        }
      }
    }
    return result;
  }
  /**
   * @param {string} name
   * @param {!Object} defaultValue
   * @return {undefined}
   */
  function ComponentProperty(name, defaultValue) {
    /** @type {string} */
    this.g = name;
    this.defaultValue = void 0 === defaultValue ? false : defaultValue;
  }
  /**
   * @param {string} typesToTry
   * @param {number} defaultValue
   * @return {undefined}
   */
  function getDataFromDataTransfer(typesToTry, defaultValue) {
    /** @type {string} */
    this.g = typesToTry;
    /** @type {number} */
    this.defaultValue = void 0 === defaultValue ? 0 : defaultValue;
  }
  /**
   * @return {undefined}
   */
  function _date() {
    var query = {};
    /**
     * @param {!Object} x
     * @param {?} obj
     * @return {?}
     */
    this.g = function (x, obj) {
      return null != query[x] ? query[x] : obj;
    };
    /**
     * @param {!Object} type
     * @param {?} a
     * @return {?}
     */
    this.h = function (type, a) {
      return null != query[type] ? query[type] : a;
    };
    /**
     * @param {!Object} v
     * @param {?} obj
     * @return {?}
     */
    this.j = function (v, obj) {
      return null != query[v] ? query[v] : obj;
    };
    /**
     * @param {!Object} x
     * @param {?} obj
     * @return {?}
     */
    this.l = function (x, obj) {
      return null != query[x] ? query[x] : obj;
    };
    /**
     * @return {undefined}
     */
    this.m = function () {
    };
  }
  /**
   * @param {!Object} config
   * @return {?}
   */
  function indexOf(config) {
    return require(_date).g(config.g, config.defaultValue);
  }
  /**
   * @param {!Object} s
   * @return {?}
   */
  function makeUnique(s) {
    return require(_date).h(s.g, s.defaultValue);
  }
  /**
   * @return {?}
   */
  function warning() {
    return require(_date).j(_arg.g, _arg.defaultValue);
  }
  /**
   * @param {?} sibling
   * @param {!Element} element
   * @param {!Object} parent
   * @return {undefined}
   */
  function createNode(sibling, element, parent) {
    switch (parent) {
      case 0:
        if (element.parentNode) {
          element.parentNode.insertBefore(sibling, element);
        }
        break;
      case 3:
        if (parent = element.parentNode) {
          /** @type {(Node|null)} */
          var child = element.nextSibling;
          if (child && child.parentNode != parent) {
            for (; child && 8 == child.nodeType;) {
              /** @type {(Node|null)} */
              child = child.nextSibling;
            }
          }
          parent.insertBefore(sibling, child);
        }
        break;
      case 1:
        element.insertBefore(sibling, element.firstChild);
        break;
      case 2:
        element.appendChild(sibling);
    }
    if (createHash(element)) {
      element.setAttribute("data-init-display", element.style.display);
      /** @type {string} */
      element.style.display = "block";
    }
  }
  /**
   * @param {!HTMLElement} root
   * @param {string} size
   * @param {!Object} i
   * @return {?}
   */
  function drop(root, size, i) {
    /**
     * @param {!Object} value
     * @return {?}
     */
    function cb(value) {
      value = mapArguments(value);
      return null == value ? false : i > value;
    }
    /**
     * @param {!Object} args
     * @return {?}
     */
    function getPosition(args) {
      args = mapArguments(args);
      return null == args ? false : i < args;
    }
    switch (size) {
      case 0:
        return {
          init: wrap(root.previousSibling, getPosition),
          pa: function (o) {
            return wrap(o.previousSibling, getPosition);
          },
          ta: 0
        };
      case 2:
        return {
          init: wrap(root.lastChild, getPosition),
          pa: function (o) {
            return wrap(o.previousSibling, getPosition);
          },
          ta: 0
        };
      case 3:
        return {
          init: wrap(root.nextSibling, cb),
          pa: function (o) {
            return wrap(o.nextSibling, cb);
          },
          ta: 3
        };
      case 1:
        return {
          init: wrap(root.firstChild, cb),
          pa: function (o) {
            return wrap(o.nextSibling, cb);
          },
          ta: 3
        };
    }
    throw Error("Un-handled RelativePosition: " + size);
  }
  /**
   * @param {!Object} properties
   * @return {?}
   */
  function mapArguments(properties) {
    return properties.hasOwnProperty("google-ama-order-assurance") ? properties["google-ama-order-assurance"] : null;
  }
  /**
   * @param {boolean} data
   * @param {!Function} fn
   * @return {?}
   */
  function wrap(data, fn) {
    return data && fn(data) ? data : null;
  }
  /**
   * @param {!Object} win
   * @return {?}
   */
  function fork(win) {
    if (win == win.top) {
      return 0;
    }
    for (; win && win != win.top && defined(win); win = win.parent) {
      if (win.sf_) {
        return 2;
      }
      if (win.$sf) {
        return 3;
      }
      if (win.inGptIF) {
        return 4;
      }
      if (win.inDapIF) {
        return 5;
      }
    }
    return 1;
  }
  /**
   * @param {!Object} item
   * @param {!Object} value
   * @return {?}
   */
  function scrollTo(item, value) {
    do {
      var result = find(item, value);
      if (result && "fixed" == result.position) {
        return false;
      }
    } while (item = item.parentElement);
    return true;
  }
  /**
   * @param {!Object} d
   * @param {!Object} options
   * @return {undefined}
   */
  function merge(d, options) {
    /** @type {!Array} */
    var fields = ["width", "height"];
    /** @type {number} */
    var i = 0;
    for (; i < fields.length; i++) {
      /** @type {string} */
      var id = "google_ad_" + fields[i];
      if (!options.hasOwnProperty(id)) {
        var value = height(d[fields[i]]);
        /** @type {(null|number)} */
        value = null === value ? null : Math.round(value);
        if (null != value) {
          /** @type {number} */
          options[id] = value;
        }
      }
    }
  }
  /**
   * @param {!Object} result
   * @param {!Array} options
   * @return {?}
   */
  function formatIdeResult(result, options) {
    return !((rNum.test(options.google_ad_width) || percentRegExp.test(result.style.width)) && (rNum.test(options.google_ad_height) || percentRegExp.test(result.style.height)));
  }
  /**
   * @param {!Object} x
   * @param {!Object} b
   * @return {?}
   */
  function abs(x, b) {
    return (x = walk(x, b)) ? x.y : 0;
  }
  /**
   * @param {!Object} n
   * @param {!Object} elem
   * @return {?}
   */
  function walk(n, elem) {
    try {
      var topoBound = elem.document.documentElement.getBoundingClientRect();
      var _bound = n.getBoundingClientRect();
      return {
        x: _bound.left - topoBound.left,
        y: _bound.top - topoBound.top
      };
    } catch (e$jscomp$76) {
      return null;
    }
  }
  /**
   * @param {string} value
   * @return {?}
   */
  function _isArray(value) {
    /** @type {number} */
    var current = 0;
    var key;
    for (key in matrices) {
      if (-1 != value.indexOf(key)) {
        /** @type {number} */
        current = current | matrices[key];
      }
    }
    return current;
  }
  /**
   * @param {!Object} options
   * @param {!Object} parent
   * @param {string} value
   * @param {!Object} obj
   * @param {string} num
   * @return {?}
   */
  function bind(options, parent, value, obj, num) {
    if (options !== options.top) {
      return _(options) ? 3 : 16;
    }
    if (!(488 > defaultValue(options))) {
      return 4;
    }
    if (!(options.innerHeight >= options.innerWidth)) {
      return 5;
    }
    var height = defaultValue(options);
    if (!height || (height - value) / height > obj) {
      /** @type {number} */
      options = 6;
    } else {
      if (value = "true" != num.google_full_width_responsive) {
        a: {
          value = defaultValue(options);
          parent = parent.parentElement;
          for (; parent; parent = parent.parentElement) {
            if ((obj = find(parent, options)) && (num = height(obj.width)) && !(num >= value) && "visible" != obj.overflow) {
              /** @type {boolean} */
              value = true;
              break a;
            }
          }
          /** @type {boolean} */
          value = false;
        }
      }
      /** @type {(boolean|number)} */
      options = value ? 7 : true;
    }
    return options;
  }
  /**
   * @param {number} val
   * @param {string} value
   * @param {!Object} data
   * @param {!Array} key
   * @return {?}
   */
  function adjust(val, value, data, key) {
    var v = bind(value, data, val, .3, key);
    if (true !== v) {
      val = v;
    } else {
      if ("true" == key.google_full_width_responsive || scrollTo(data, value)) {
        value = defaultValue(value);
        /** @type {number} */
        val = value - val;
        /** @type {(boolean|number)} */
        val = value && 0 <= val ? true : value ? -10 > val ? 11 : 0 > val ? 14 : 12 : 10;
      } else {
        /** @type {number} */
        val = 9;
      }
    }
    return val;
  }
  /**
   * @param {!Object} style
   * @param {string} styles
   * @param {string} left
   * @return {undefined}
   */
  function setStyle(style, styles, left) {
    style = style.style;
    if ("rtl" == styles) {
      /** @type {string} */
      style.marginRight = left;
    } else {
      /** @type {string} */
      style.marginLeft = left;
    }
  }
  /**
   * @param {!Array} data
   * @param {!Object} target
   * @return {?}
   */
  function anonymous(data, target) {
    if (3 == target.nodeType) {
      return /\S/.test(target.data);
    }
    if (1 == target.nodeType) {
      if (/^(script|style)$/i.test(target.nodeName)) {
        return false;
      }
      try {
        var a = find(target, data);
      } catch (d$jscomp$105) {
      }
      return !a || "none" != a.display && !("absolute" == a.position && ("hidden" == a.visibility || "collapse" == a.visibility));
    }
    return false;
  }
  /**
   * @param {!Object} value
   * @param {!Object} node
   * @param {string} id
   * @return {?}
   */
  function parser(value, node, id) {
    value = walk(node, value);
    return "rtl" == id ? -value.x : value.x;
  }
  /**
   * @param {?} val
   * @param {!Object} el
   * @return {undefined}
   */
  function render(val, el) {
    var value;
    value = (value = el.parentElement) ? (value = find(value, val)) ? value.direction : "" : "";
    if (value) {
      /** @type {string} */
      el.style.border = el.style.borderStyle = el.style.outline = el.style.outlineStyle = el.style.transition = "none";
      /** @type {string} */
      el.style.borderSpacing = el.style.padding = "0";
      setStyle(el, value, "0px");
      /** @type {string} */
      el.style.width = defaultValue(val) + "px";
      if (0 !== parser(val, el, value)) {
        setStyle(el, value, "0px");
        var x = parser(val, el, value);
        setStyle(el, value, -1 * x + "px");
        val = parser(val, el, value);
        if (0 !== val && val !== x) {
          setStyle(el, value, x / (val - x) * x + "px");
        }
      }
      /** @type {number} */
      el.style.zIndex = 30;
    }
  }
  /**
   * @param {?} a
   * @param {number} b
   * @return {undefined}
   */
  function parent(a, b) {
    this.L = a;
    /** @type {number} */
    this.j = b;
  }
  /**
   * @param {!Object} element
   * @param {!Object} options
   * @param {string} name
   * @param {!Function} value
   * @return {?}
   */
  function attr(element, options, name, value) {
    /** @type {!Function} */
    value = void 0 === value ? function (value) {
      return value;
    } : value;
    var style;
    return element.style && element.style[name] && value(element.style[name]) || (style = find(element, options)) && style[name] && value(style[name]) || null;
  }
  /**
   * @param {!Object} value
   * @return {?}
   */
  function setAttribute(value) {
    return function (v) {
      return v.L <= value;
    };
  }
  /**
   * @param {string} handler
   * @param {!Object} node
   * @param {!Array} name
   * @param {boolean} a
   * @return {?}
   */
  function post(handler, node, name, a) {
    var computeHandler = handler && query(name, node);
    var res = compute(node, a);
    return function (targetShapeBounds) {
      return !(computeHandler && targetShapeBounds.height() >= res);
    };
  }
  /**
   * @param {boolean} idx
   * @return {?}
   */
  function getOffset(idx) {
    return function (targetShapeBounds) {
      return targetShapeBounds.height() <= idx;
    };
  }
  /**
   * @param {!Object} to
   * @param {!Object} i
   * @return {?}
   */
  function query(to, i) {
    return abs(to, i) < jQuery(i).clientHeight - 100;
  }
  /**
   * @param {!Object} options
   * @param {!Object} element
   * @return {?}
   */
  function launch(options, element) {
    var result = attr(element, options, "height", height);
    if (result) {
      return result;
    }
    /** @type {string} */
    var val = element.style.height;
    /** @type {string} */
    element.style.height = "inherit";
    result = attr(element, options, "height", height);
    /** @type {string} */
    element.style.height = val;
    if (result) {
      return result;
    }
    /** @type {number} */
    result = Infinity;
    do {
      if (val = element.style && height(element.style.height)) {
        /** @type {number} */
        result = Math.min(result, val);
      }
      if (val = attr(element, options, "maxHeight", height)) {
        /** @type {number} */
        result = Math.min(result, val);
      }
    } while ((element = element.parentElement) && "HTML" != element.tagName);
    return result;
  }
  /**
   * @param {(Object|null|string)} p
   * @param {boolean} width
   * @return {?}
   */
  function compute(p, width) {
    /** @type {boolean} */
    var height = 0 == repeat(p);
    return width && height ? Math.max(250, 2 * jQuery(p).clientHeight / 3) : 250;
  }
  /**
   * @param {boolean} object
   * @param {!NodeList} body
   * @return {undefined}
   */
  function _update(object, body) {
    /** @type {number} */
    var i = 0;
    for (; i < body.length; i++) {
      var result = body[i];
      var paramName = unescape(result.ec);
      object[paramName] = result.value;
    }
  }
  /**
   * @return {undefined}
   */
  function completeText() {
    /** @type {string} */
    var b = void 0 === b ? "jserror" : b;
    /** @type {number} */
    var val = void 0 === val ? .01 : val;
    var a = void 0 === a ? ping(individualResult) : a;
    /** @type {(string|undefined)} */
    this.j = b;
    /** @type {null} */
    this.g = null;
    /** @type {boolean} */
    this.l = false;
    /** @type {number} */
    this.u = Math.random();
    /** @type {(number|undefined)} */
    this.m = val;
    this.h = this.J;
    this.A = a;
  }
  /**
   * @param {?} e
   * @param {!Array} file
   * @return {undefined}
   */
  function addRow(e, file) {
    file = file.google_js_reporting_queue = file.google_js_reporting_queue || [];
    if (2048 > file.length) {
      file.push(e);
    }
  }
  /**
   * @param {number} definition
   * @param {!Function} params
   * @param {!Function} callback
   * @param {!Object} obj
   * @param {boolean} a
   * @return {?}
   */
  function finalize(definition, params, callback, obj, a) {
    /** @type {boolean} */
    a = void 0 === a ? false : a;
    /** @type {!Object} */
    var container = obj || window;
    /** @type {boolean} */
    var hasDefine = "undefined" !== typeof queueMicrotask;
    return function () {
      if (a && hasDefine) {
        queueMicrotask(function () {
          container.google_rum_task_id_counter = container.google_rum_task_id_counter || 1;
          container.google_rum_task_id_counter += 1;
        });
      }
      var create = redraw();
      /** @type {number} */
      var GET_USER_PROFILE_SUCCESS = 3;
      try {
        var g = params.apply(this, arguments);
      } catch (error_files) {
        /** @type {number} */
        GET_USER_PROFILE_SUCCESS = 13;
        if (!callback) {
          throw error_files;
        }
        callback(definition, error_files);
      } finally {
        if (container.google_measure_js_timing && create) {
          addRow(define(Object, "assign").call(Object, {}, {
            label: definition.toString(),
            value: create,
            duration: (redraw() || 0) - create,
            type: GET_USER_PROFILE_SUCCESS
          }, a && hasDefine && {
            taskId: container.google_rum_task_id_counter = container.google_rum_task_id_counter || 1
          }), container);
        }
      }
      return g;
    };
  }
  /**
   * @param {number} fn
   * @param {!Function} url
   * @return {?}
   */
  function identify(fn, url) {
    return finalize(fn, url, function (n, params) {
      (new completeText).J(n, params);
    }, void 0, false);
  }
  /**
   * @param {number} fn
   * @param {!Function} options
   * @param {!Object} val
   * @return {?}
   */
  function setOptions(fn, options, val) {
    return finalize(fn, options, void 0, val, true).apply();
  }
  /**
   * @param {!Object} value
   * @return {?}
   */
  function selector(value) {
    if (!value) {
      return null;
    }
    var val = reduce(value, 7);
    if (reduce(value, 1) || value.getId() || 0 < ok(value, 4).length) {
      var css = ok(value, 4);
      val = resolver(filter(value, 6));
      var i = reduce(value, 3);
      var distance = reduce(value, 1);
      /** @type {string} */
      var ret = "";
      if (distance) {
        /** @type {string} */
        ret = ret + distance;
      }
      if (i) {
        /** @type {string} */
        ret = ret + ("#" + _d2h(i));
      }
      if (css) {
        /** @type {number} */
        i = 0;
        for (; i < css.length; i++) {
          /** @type {string} */
          ret = ret + ("." + _d2h(css[i]));
        }
      }
      value = (css = ret) ? new SegmentTree(css, trim(value, 2), trim(value, 5), val) : null;
    } else {
      value = val ? new SegmentTree(val, trim(value, 2), trim(value, 5), resolver(filter(value, 6))) : null;
    }
    return value;
  }
  /**
   * @param {string} text
   * @return {?}
   */
  function resolver(text) {
    return null == text ? text : input[text];
  }
  /**
   * @param {!Object} from
   * @return {?}
   */
  function _extend(from) {
    return from.google_ama_state = from.google_ama_state || {};
  }
  /**
   * @param {!Object} options
   * @return {?}
   */
  function toCSS(options) {
    options = _extend(options);
    return options.optimization = options.optimization || {};
  }
  /**
   * @param {string} expr
   * @return {undefined}
   */
  function ws(expr) {
    this.i = push(expr);
  }
  /**
   * @param {!Object} data
   * @return {?}
   */
  function sort(data) {
    switch (filter(data, 8)) {
      case 1:
      case 2:
        if (null == data) {
          /** @type {null} */
          var c = null;
        } else {
          c = get(data, j, 1);
          if (null == c) {
            /** @type {null} */
            c = null;
          } else {
            data = filter(data, 2);
            c = null == data ? null : new drawImage({
              Na: [c],
              Ya: data
            });
          }
        }
        return null != c ? replace(c) : match(Error("Missing dimension when creating placement id"));
      case 3:
        return match(Error("Missing dimension when creating placement id"));
      default:
        return match(Error("Invalid type: " + filter(data, 8)));
    }
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function str(x) {
    this.i = push(x);
  }
  /**
   * @param {string} el
   * @return {undefined}
   */
  function Style(el) {
    this.i = push(el);
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function table(x) {
    this.i = push(x);
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function first(x) {
    this.i = push(x);
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function object(x) {
    this.i = push(x);
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function k(x) {
    this.i = push(x);
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function marker(x) {
    this.i = push(x);
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function left(x) {
    this.i = push(x);
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function Layer(x) {
    this.i = push(x);
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function replacer(x) {
    this.i = push(x);
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function right(x) {
    this.i = push(x);
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function n(x) {
    this.i = push(x);
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function layer(x) {
    this.i = push(x);
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function Constructor(x) {
    this.i = push(x);
  }
  /**
   * @param {?} data
   * @param {!Object} state
   * @return {?}
   */
  function insert(data, state) {
    /**
     * @return {?}
     */
    function create() {
      result.push({
        anchor: info.anchor,
        position: info.position
      });
      return info.anchor == state.anchor && info.position == state.position;
    }
    /** @type {!Array} */
    var result = [];
    var info = data;
    for (; info;) {
      switch (info.position) {
        case 1:
          if (create()) {
            return result;
          }
          /** @type {number} */
          info.position = 2;
        case 2:
          if (create()) {
            return result;
          }
          if (info.anchor.firstChild) {
            info = {
              anchor: info.anchor.firstChild,
              position: 1
            };
            continue;
          } else {
            /** @type {number} */
            info.position = 3;
          }
        case 3:
          if (create()) {
            return result;
          }
          /** @type {number} */
          info.position = 4;
        case 4:
          if (create()) {
            return result;
          }
      }
      for (; info && !info.anchor.nextSibling && info.anchor.parentNode != info.anchor.ownerDocument.body;) {
        info = {
          anchor: info.anchor.parentNode,
          position: 3
        };
        if (create()) {
          return result;
        }
        /** @type {number} */
        info.position = 4;
        if (create()) {
          return result;
        }
      }
      if (info && info.anchor.nextSibling) {
        info = {
          anchor: info.anchor.nextSibling,
          position: 1
        };
      } else {
        /** @type {null} */
        info = null;
      }
    }
    return result;
  }
  /**
   * @param {number} w
   * @param {string} h
   * @return {undefined}
   */
  function updateClearRect(w, h) {
    /** @type {number} */
    this.h = w;
    /** @type {string} */
    this.g = h;
  }
  /**
   * @param {!Array} node
   * @param {!Array} error
   * @return {?}
   */
  function upload(node, error) {
    var out = new Stream;
    var list = new List;
    error.forEach(function (i) {
      if (getStyle(i, marker, 1, len)) {
        i = getStyle(i, marker, 1, len);
        if (get(i, namespace, 1) && get(get(i, namespace, 1), j, 1) && get(i, namespace, 2) && get(get(i, namespace, 2), j, 1)) {
          var result = getPath(node, get(get(i, namespace, 1), j, 1));
          var data = getPath(node, get(get(i, namespace, 2), j, 1));
          if (result && data) {
            result = $(insert({
              anchor: result,
              position: filter(get(i, namespace, 1), 2)
            }, {
              anchor: data,
              position: filter(get(i, namespace, 2), 2)
            }));
            data = result.next();
            for (; !data.done; data = result.next()) {
              data = data.value;
              out.set(fn(data.anchor), data.position);
            }
          }
        }
        if (get(i, namespace, 3) && get(get(i, namespace, 3), j, 1) && (result = getPath(node, get(get(i, namespace, 3), j, 1)))) {
          out.set(fn(result), filter(get(i, namespace, 3), 2));
        }
      } else {
        if (getStyle(i, left, 2, len)) {
          put(node, getStyle(i, left, 2, len), out);
        } else {
          if (getStyle(i, k, 3, len)) {
            recurse(node, getStyle(i, k, 3, len), list);
          }
        }
      }
    });
    return new updateClearRect(out, list);
  }
  /**
   * @param {!Array} value
   * @param {?} key
   * @param {!Object} target
   * @return {undefined}
   */
  function put(value, key, target) {
    if (get(key, namespace, 2)) {
      key = get(key, namespace, 2);
      if (value = getPath(value, get(key, j, 1))) {
        target.set(fn(value), filter(key, 2));
      }
    } else {
      if (get(key, j, 1) && (value = getPosition(value, get(key, j, 1)))) {
        value.forEach(function (arg) {
          arg = fn(arg);
          target.set(arg, 1);
          target.set(arg, 4);
          target.set(arg, 2);
          target.set(arg, 3);
        });
      }
    }
  }
  /**
   * @param {!Array} e
   * @param {!Object} n
   * @param {?} results
   * @return {undefined}
   */
  function recurse(e, n, results) {
    if (get(n, j, 1) && (e = getPosition(e, get(n, j, 1)))) {
      e.forEach(function (date) {
        results.add(fn(date));
      });
    }
  }
  /**
   * @param {!Array} data
   * @param {!Object} parent
   * @return {?}
   */
  function getPath(data, parent) {
    return (data = getPosition(data, parent)) && 0 < data.length ? data[0] : null;
  }
  /**
   * @param {!Array} v
   * @param {!Object} a
   * @return {?}
   */
  function getPosition(v, a) {
    return (a = selector(a)) ? a.query(v) : null;
  }
  /**
   * @param {number} message
   * @return {undefined}
   */
  function Exception(message) {
    /** @type {(number|string)} */
    message = void 0 === message ? "" : message;
    var e = Error.call(this);
    this.message = e.message;
    if ("stack" in e) {
      this.stack = e.stack;
    }
    /** @type {string} */
    this.name = "TagError";
    /** @type {string} */
    this.message = message ? "adsbygoogle.push() error: " + message : "";
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, Exception);
    } else {
      /** @type {string} */
      this.stack = Error().stack || "";
    }
  }
  /**
   * @param {?} fn
   * @return {undefined}
   */
  function transitionEnd(fn) {
    if (null != fn) {
      win.google_measure_js_timing = fn;
    }
    if (!win.google_measure_js_timing) {
      hide(instance);
    }
  }
  /**
   * @param {number} f
   * @param {!Function} x
   * @param {string} c
   * @return {?}
   */
  function setTimeoutPathUa(f, x, c) {
    return path.ua(f, x, c);
  }
  /**
   * @param {number} type
   * @param {!Function} key
   * @return {?}
   */
  function wrapAction(type, key) {
    return path.Wa(type, key);
  }
  /**
   * @param {string} match
   * @param {!Object} context
   * @param {number} out
   * @return {undefined}
   */
  function cb(match, context, out) {
    var actionStack = require(r).g();
    if (!context.eid && actionStack.length) {
      context.eid = actionStack.toString();
    }
    html(config, match, context, true, out);
  }
  /**
   * @param {number} init
   * @param {!Object} req
   * @return {undefined}
   */
  function template(init, req) {
    path.Ba(init, req);
  }
  /**
   * @param {!Array} val
   * @param {!Object} e
   * @param {undefined} f
   * @param {undefined} p
   * @return {?}
   */
  function message(val, e, f, p) {
    var type;
    if (onComplete(e)) {
      type = e.msg || t(e.error);
    } else {
      type = t(e);
    }
    return 0 == type.indexOf("TagError") ? (f = e instanceof ArraySliceFn ? e.error : e, f.pbr || (f.pbr = true, path.J(val, e, .1, p, "puberror")), false) : path.J(val, e, f, p);
  }
  /**
   * @return {undefined}
   */
  function renderHSVPicker() {
    this.g = roll();
    /** @type {number} */
    this.h = 0;
  }
  /**
   * @return {undefined}
   */
  function clear_metrics() {
    this.g = new global.Set;
    this.h = new renderHSVPicker;
  }
  /**
   * @param {!Object} t
   * @return {?}
   */
  function d(t) {
    t = mapType(t);
    return t.has("all") || t.has("after");
  }
  /**
   * @param {!Object} t
   * @return {?}
   */
  function comparator(t) {
    t = mapType(t);
    return t.has("all") || t.has("before");
  }
  /**
   * @param {!Object} data
   * @param {!Object} e
   * @param {(Array|null|string)} value
   * @return {?}
   */
  function setter(data, e, value) {
    switch (value) {
      case 2:
      case 3:
        break;
      case 1:
      case 4:
        e = e.parentElement;
        break;
      default:
        throw Error("Unknown RelativePosition: " + value);
    }
    /** @type {!Array} */
    value = [];
    for (; e;) {
      if (logError(e)) {
        return true;
      }
      if (data.g.has(e)) {
        break;
      }
      value.push(e);
      e = e.parentElement;
    }
    value.forEach(function (w) {
      return data.g.add(w);
    });
    return false;
  }
  /**
   * @param {!Object} a
   * @return {?}
   */
  function logError(a) {
    var result = mapType(a);
    return a && ("AUTO-ADS-EXCLUSION-AREA" === a.tagName || result.has("inside") || result.has("all"));
  }
  /**
   * @param {!Object} t
   * @return {?}
   */
  function mapType(t) {
    return (t = t && t.getAttribute("data-no-auto-ads")) ? new global.Set(t.split("|")) : new global.Set;
  }
  /**
   * @param {string} value
   * @param {!Object} element
   * @return {?}
   */
  function addClass(value, element) {
    if (!value) {
      return false;
    }
    value = find(value, element);
    if (!value) {
      return false;
    }
    value = value.cssFloat || value.styleFloat;
    return "left" == value || "right" == value;
  }
  /**
   * @param {!HTMLElement} elem
   * @return {?}
   */
  function $$(elem) {
    /** @type {(Node|null)} */
    elem = elem.previousSibling;
    for (; elem && 1 != elem.nodeType;) {
      /** @type {(Node|null)} */
      elem = elem.previousSibling;
    }
    return elem ? elem : null;
  }
  /**
   * @param {!HTMLElement} node
   * @return {?}
   */
  function getNextText(node) {
    return !!node.nextSibling || !!node.parentNode && getNextText(node.parentNode);
  }
  /**
   * @param {!Object} hash
   * @param {string} value
   * @return {?}
   */
  function reset(hash, value) {
    if (!hash) {
      return false;
    }
    hash = hash.hash;
    if (!hash || !hash.indexOf) {
      return false;
    }
    if (-1 != hash.indexOf(value)) {
      return true;
    }
    value = expand(value);
    return "go" != value && -1 != hash.indexOf(value) ? true : false;
  }
  /**
   * @param {string} startDate
   * @return {?}
   */
  function expand(startDate) {
    /** @type {string} */
    var rt = "";
    forEach(startDate.split("_"), function (patternStartsWith) {
      rt = rt + patternStartsWith.substr(0, 2);
    });
    return rt;
  }
  /**
   * @param {!Object} key
   * @return {?}
   */
  function style(key) {
    var attrs;
    key = (null != (attrs = void 0 === key ? null : key) ? attrs : window).googletag;
    return (null == key ? 0 : key.apiReady) ? key : void 0;
  }
  /**
   * @param {!Object} n
   * @return {?}
   */
  function visit(n) {
    var styles = style(n);
    return styles ? slice(when(styles.pubads().getSlots(), function (slot) {
      return n.document.getElementById(slot.getSlotElementId());
    }), function (canCreateDiscussions) {
      return null != canCreateDiscussions;
    }) : null;
  }
  /**
   * @param {!Object} container
   * @param {string} x
   * @return {?}
   */
  function wait(container, x) {
    return clean(container.document.querySelectorAll(x));
  }
  /**
   * @param {?} options
   * @return {?}
   */
  function flattenElements(options) {
    /** @type {!Array} */
    var result = [];
    options = $(options);
    var p = options.next();
    for (; !p.done; p = options.next()) {
      p = p.value;
      /** @type {boolean} */
      var d$jscomp$121 = true;
      /** @type {number} */
      var i = 0;
      for (; i < result.length; i++) {
        var l = result[i];
        if (l.contains(p)) {
          /** @type {boolean} */
          d$jscomp$121 = false;
          break;
        }
        if (p.contains(l)) {
          /** @type {boolean} */
          d$jscomp$121 = false;
          result[i] = p;
          break;
        }
      }
      if (d$jscomp$121) {
        result.push(p);
      }
    }
    return result;
  }
  /**
   * @param {string} c
   * @param {number} g
   * @param {number} key
   * @param {string} value
   * @param {!Object} tile
   * @return {undefined}
   */
  function ctor(c, g, key, value, tile) {
    /** @type {string} */
    this.g = c;
    /** @type {number} */
    this.G = g;
    /** @type {number} */
    this.h = key;
    /** @type {!Object} */
    this.m = tile || null;
    this.u = (this.B = value) ? upload(c.document, stringify(value, Layer, 5)) : upload(c.document, []);
    this.A = new clear_metrics;
    /** @type {number} */
    this.j = 0;
    /** @type {boolean} */
    this.l = false;
  }
  /**
   * @param {!Object} opts
   * @param {boolean} server
   * @return {?}
   */
  function add(opts, server) {
    if (opts.l) {
      return true;
    }
    /** @type {boolean} */
    opts.l = true;
    var result = stringify(opts.h, node, 1);
    /** @type {number} */
    opts.j = 0;
    var callback = getRandomItem(opts.B);
    if (reset(opts.g.location, "google_audio_sense")) {
      var data = new Generator;
      data = escapeStringInfo(data, 1, assign(1));
      var obj = new dir;
      obj = convert(obj, 2, true);
      data = escapeCodeValue(data, 2, obj);
      obj = new Image;
      var value = new Map;
      var v = escapeStringInfo(value, 1, assign(1));
      value = obj.i;
      var t = StringFn(value);
      flush(t);
      var s = f(value, t, Map, 1, 2);
      v = null != v ? v : new Map;
      s.push(v);
      if (NumberFn(v.i) & 2) {
        tag(s, 8);
      }
      if (t & 512) {
        assertEquals(value, t & -513);
      }
      value = new Item;
      value = convert(value, 1, true);
      obj = escapeCodeValue(obj, 2, value);
      data = escapeCodeValue(data, 3, obj);
    } else {
      data = get(opts.h, Generator, 27);
    }
    if (obj = data) {
      var i;
      data = (null == (i = get(opts.h, a, 6)) ? void 0 : stringify(i, range, 1)) || [];
      i = opts.g;
      var self;
      if (1 == resolve(obj, 1) && null != (self = get(obj, dir, 2)) && expect(self, 2) && 0 != data.length) {
        /** @type {!Array} */
        self = [];
        data = $(data);
        obj = data.next();
        for (; !obj.done; obj = data.next()) {
          if (obj = selector(get(obj.value, j, 1) || null)) {
            obj = obj.query(i.document);
            if (0 < obj.length) {
              self.push(obj[0]);
            }
          }
        }
        /** @type {!Array<?>} */
        self = self.filter(isVisible).filter(updateCanvasAndSuspend(self)).filter(createFilter(i));
        self.sort(f_sort);
        if (self = self[0] || null) {
          data = i.document.createElement("div");
          /** @type {string} */
          data.id = "google-auto-placed-read-aloud-player-reserved";
          setStyles(data, {
            width: "100%",
            height: "65px"
          });
          self.insertBefore(data, self.firstChild);
          /** @type {boolean} */
          _extend(i).audioSenseSpaceReserved = true;
        }
      }
    }
    self = opts.g;
    var element;
    try {
      var val = (element = self.localStorage.getItem("google_ama_settings")) ? _getElement(element) : null;
    } catch (W$jscomp$1) {
      /** @type {null} */
      val = null;
    }
    element = null !== val && expect(val, 2, false);
    val = _extend(self);
    if (element) {
      /** @type {boolean} */
      val.eatf = true;
      draw(7, [true, 0, false]);
    }
    b: {
      data = {
        nb: false,
        ob: false
      };
      obj = wait(self, ".google-auto-placed");
      value = wait(self, "ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]");
      t = wait(self, "ins.adsbygoogle[data-ad-format=autorelaxed]");
      s = (visit(self) || wait(self, "div[id^=div-gpt-ad]")).concat(wait(self, "iframe[id^=google_ads_iframe]"));
      v = wait(self, "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]");
      var res = wait(self, "ins.adsbygoogle-ablated-ad-slot");
      var result = wait(self, "div.googlepublisherpluginad");
      var found = wait(self, "html > ins.adsbygoogle");
      /** @type {!Array<?>} */
      i = [].concat(wait(self, "iframe[id^=aswift_],iframe[id^=google_ads_frame]"), wait(self, "body ins.adsbygoogle"));
      /** @type {!Array} */
      element = [];
      data = $([[data.Zb, obj], [data.nb, value], [data.cc, t], [data.ac, s], [data.dc, v], [data.Yb, res], [data.bc, result], [data.ob, found]]);
      obj = data.next();
      for (; !obj.done; obj = data.next()) {
        value = $(obj.value);
        obj = value.next().value;
        value = value.next().value;
        if (false === obj) {
          /** @type {!Array<?>} */
          element = element.concat(value);
        } else {
          /** @type {!Array<?>} */
          i = i.concat(value);
        }
      }
      i = flattenElements(i);
      data = flattenElements(element);
      element = i.slice(0);
      i = $(data);
      data = i.next();
      for (; !data.done; data = i.next()) {
        data = data.value;
        /** @type {number} */
        obj = 0;
        for (; obj < element.length; obj++) {
          if (data.contains(element[obj]) || element[obj].contains(data)) {
            element.splice(obj, 1);
          }
        }
      }
      self = jQuery(self).clientHeight;
      /** @type {number} */
      i = 0;
      for (; i < element.length; i++) {
        if (!(element[i].getBoundingClientRect().top > self)) {
          /** @type {boolean} */
          element = true;
          break b;
        }
      }
      /** @type {boolean} */
      element = false;
    }
    /** @type {boolean} */
    val = element ? val.eatfAbg = true : false;
    if (val) {
      return true;
    }
    val = new List([2]);
    /** @type {number} */
    element = 0;
    for (; element < result.length; element++) {
      /** @type {!Object} */
      self = opts;
      data = result[element];
      /** @type {number} */
      i = element;
      /** @type {boolean} */
      obj = server;
      if (get(data, Class, 4) && val.contains(filter(get(data, Class, 4), 1)) && 1 === filter(data, 8) && validateUsernameAndPassword(data, callback)) {
        self.j++;
        if (obj = init(self, data, obj, callback)) {
          value = _extend(self.g);
          if (!value.numAutoAdsPlaced) {
            /** @type {number} */
            value.numAutoAdsPlaced = 0;
          }
          if (get(data, j, 1) && null != trim(get(data, j, 1), 5)) {
            if (value.numPostPlacementsPlaced) {
              value.numPostPlacementsPlaced++;
            } else {
              /** @type {number} */
              value.numPostPlacementsPlaced = 1;
            }
          }
          if (null == value.placed) {
            /** @type {!Array} */
            value.placed = [];
          }
          value.numAutoAdsPlaced++;
          value.placed.push({
            index: i,
            element: obj.ma
          });
          draw(7, [false, self.j, true]);
        }
        self = obj;
      } else {
        /** @type {null} */
        self = null;
      }
      if (self) {
        return true;
      }
    }
    draw(7, [false, opts.j, false]);
    return false;
  }
  /**
   * @param {!Object} d
   * @param {undefined} data
   * @param {!Object} x
   * @param {!HTMLElement} a
   * @return {?}
   */
  function init(d, data, x, a) {
    if (!validateUsernameAndPassword(data, a) || 1 != filter(data, 8)) {
      return null;
    }
    a = get(data, j, 1);
    if (!a) {
      return null;
    }
    a = selector(a);
    if (!a) {
      return null;
    }
    a = a.query(d.g.document);
    if (0 == a.length) {
      return null;
    }
    a = a[0];
    var result = filter(data, 2);
    result = ram[result];
    result = void 0 === result ? null : result;
    var c;
    if (!(c = null == result)) {
      a: {
        c = d.g;
        switch (result) {
          case 0:
            c = addClass($$(a), c);
            break a;
          case 3:
            c = addClass(a, c);
            break a;
          case 2:
            var value = a.lastChild;
            c = addClass(value ? 1 == value.nodeType ? value : $$(value) : null, c);
            break a;
        }
        /** @type {boolean} */
        c = false;
      }
      if (x = !c && !(!x && 2 == result && !getNextText(a))) {
        x = 1 == result || 2 == result ? a : a.parentNode;
        /** @type {boolean} */
        x = !(x && !createHash(x) && 0 >= x.offsetWidth);
      }
      /** @type {boolean} */
      c = !x;
    }
    if (!(x = c)) {
      x = d.u;
      c = filter(data, 2);
      value = fn(a);
      value = x.h.g.get(value);
      if (!(value = value ? value.contains(c) : false)) {
        a: {
          if (x.g.contains(fn(a))) {
            switch (c) {
              case 2:
              case 3:
                /** @type {boolean} */
                value = true;
                break a;
              default:
                /** @type {boolean} */
                value = false;
                break a;
            }
          }
          c = a.parentElement;
          for (; c;) {
            if (x.g.contains(fn(c))) {
              /** @type {boolean} */
              value = true;
              break a;
            }
            c = c.parentElement;
          }
          /** @type {boolean} */
          value = false;
        }
      }
      x = value;
    }
    if (!x) {
      x = d.A;
      value = filter(data, 2);
      a: {
        switch (value) {
          case 1:
            c = d(a.previousElementSibling) || comparator(a);
            break a;
          case 4:
            c = d(a) || comparator(a.nextElementSibling);
            break a;
          case 2:
            c = comparator(a.firstElementChild);
            break a;
          case 3:
            c = d(a.lastElementChild);
            break a;
          default:
            throw Error("Unknown RelativePosition: " + value);
        }
      }
      value = setter(x, a, value);
      x = x.h;
      cb("ama_exclusion_zone", define(Object, "assign").call(Object, {}, {
        typ: c ? value ? "siuex" : "siex" : value ? "suex" : "noex"
      }, {
        cor: x.g,
        num: x.h++,
        dvc: calcularImpostos()
      }), .1);
      x = c || value;
    }
    if (x) {
      return null;
    }
    x = get(data, date, 3);
    c = {};
    if (x) {
      c.eb = reduce(x, 1);
      c.Qa = reduce(x, 2);
      /** @type {boolean} */
      c.ib = !!warn(x, 3);
    }
    x = get(data, Class, 4) && filter(get(data, Class, 4), 2) ? filter(get(data, Class, 4), 2) : null;
    x = _isValid(x);
    value = null != trim(data, 12) ? trim(data, 12) : null;
    value = null == value ? null : new model(null, {
      google_ml_rank: value
    });
    data = click(d, data);
    data = build(d.m, x, value, data);
    x = d.g;
    d = d.G;
    var p = x.document;
    /** @type {boolean} */
    var style = c.ib || false;
    value = (new globalDocument(p)).createElement("DIV");
    var s = value.style;
    /** @type {string} */
    s.width = "100%";
    /** @type {string} */
    s.height = "auto";
    /** @type {string} */
    s.clear = style ? "both" : "none";
    style = value.style;
    /** @type {string} */
    style.textAlign = "center";
    if (c.xb) {
      _update(style, c.xb);
    }
    p = (new globalDocument(p)).createElement("INS");
    style = p.style;
    /** @type {string} */
    style.display = "block";
    /** @type {string} */
    style.margin = "auto";
    /** @type {string} */
    style.backgroundColor = "transparent";
    if (c.eb) {
      style.marginTop = c.eb;
    }
    if (c.Qa) {
      style.marginBottom = c.Qa;
    }
    if (c.gb) {
      _update(style, c.gb);
    }
    value.appendChild(p);
    c = {
      za: value,
      ma: p
    };
    c.ma.setAttribute("data-ad-format", "auto");
    /** @type {!Array} */
    value = [];
    if (p = data && data.Ra) {
      c.za.className = p.join(" ");
    }
    p = c.ma;
    /** @type {string} */
    p.className = "adsbygoogle";
    p.setAttribute("data-ad-client", d);
    if (value.length) {
      p.setAttribute("data-ad-channel", value.join("+"));
    }
    a: {
      try {
        var element = c.za;
        /** @type {number} */
        var value = void 0 === value ? 0 : value;
        if (indexOf(alignConfig)) {
          /** @type {number} */
          value = void 0 === value ? 0 : value;
          var data = drop(a, result, value);
          if (data.init) {
            var link = data.init;
            a = link;
            for (; a = data.pa(a);) {
              link = a;
            }
            var e = {
              anchor: link,
              position: data.ta
            };
          } else {
            e = {
              anchor: a,
              position: result
            };
          }
          /** @type {number} */
          element["google-ama-order-assurance"] = value;
          createNode(element, e.anchor, e.position);
        } else {
          createNode(element, a, result);
        }
        b: {
          var e = c.ma;
          /** @type {string} */
          e.dataset.adsbygoogleStatus = "reserved";
          e.className += " adsbygoogle-noablate";
          element = {
            element: e
          };
          var elem = data && data.Xa;
          if (e.hasAttribute("data-pub-vars")) {
            try {
              /** @type {*} */
              elem = JSON.parse(e.getAttribute("data-pub-vars"));
            } catch (W$jscomp$2) {
              break b;
            }
            e.removeAttribute("data-pub-vars");
          }
          if (elem) {
            /** @type {*} */
            element.params = elem;
          }
          (x.adsbygoogle = x.adsbygoogle || []).push(element);
        }
      } catch (W$jscomp$3) {
        if ((e = c.za) && e.parentNode) {
          elem = e.parentNode;
          elem.removeChild(e);
          if (createHash(elem)) {
            elem.style.display = elem.getAttribute("data-init-display") || "none";
          }
        }
        /** @type {boolean} */
        e = false;
        break a;
      }
      /** @type {boolean} */
      e = true;
    }
    return e ? c : null;
  }
  /**
   * @param {!Object} options
   * @param {!Object} data
   * @return {?}
   */
  function click(options, data) {
    return saveFile(once(sort(data).map(view), function (exception) {
      /** @type {string} */
      _extend(options.g).exception = exception;
    }));
  }
  /**
   * @param {!Object} length
   * @return {?}
   */
  function getRandomItem(length) {
    var item = {};
    if (length) {
      assert(length, 6, iterator).forEach(function (idx_field) {
        /** @type {boolean} */
        item[idx_field] = true;
      });
    }
    return item;
  }
  /**
   * @param {!Object} data
   * @param {!HTMLElement} callback
   * @return {?}
   */
  function validateUsernameAndPassword(data, callback) {
    return data && isPresent(data, Class, 4) && callback[filter(get(data, Class, 4), 2)] ? false : true;
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function Column(x) {
    this.i = push(x);
  }
  /**
   * @param {!Object} model
   * @return {?}
   */
  function parseCSS(model) {
    try {
      var data = model.localStorage.getItem("google_auto_fc_cmp_setting") || null;
    } catch (d$jscomp$125) {
      /** @type {null} */
      data = null;
    }
    var song = data;
    return song ? loadCSS(function () {
      return isGoodSong(song);
    }) : replace(null);
  }
  /**
   * @return {undefined}
   */
  function $export() {
    this.S = {};
  }
  /**
   * @return {?}
   */
  function translate() {
    if (coordinates) {
      return coordinates;
    }
    var cursor = isNaN() || window;
    var obj = cursor.google_persistent_state_async;
    return null != obj && "object" == typeof obj && null != obj.S && "object" == typeof obj.S ? coordinates = obj : cursor.google_persistent_state_async = coordinates = new $export;
  }
  /**
   * @param {number} type
   * @return {?}
   */
  function checkForExceptionOrErrorType(type) {
    return CURRENT[type] || "google_ps_" + type;
  }
  /**
   * @param {!Array} data
   * @param {number} type
   * @param {!Function} name
   * @return {?}
   */
  function record(data, type, name) {
    type = checkForExceptionOrErrorType(type);
    data = data.S;
    var array = data[type];
    return void 0 === array ? (data[type] = name(), data[type]) : array;
  }
  /**
   * @param {!Array} type
   * @param {number} name
   * @param {!Array} body
   * @return {?}
   */
  function sendMessage(type, name, body) {
    return record(type, name, function () {
      return body;
    });
  }
  /**
   * @param {!Object} context
   * @return {undefined}
   */
  function Config(context) {
    /** @type {!Object} */
    this.g = context || {
      cookie: ""
    };
  }
  /**
   * @param {string} info
   * @return {undefined}
   */
  function Info(info) {
    this.i = push(info);
  }
  /**
   * @param {boolean} options
   * @return {?}
   */
  function decode(options) {
    var seedHex = new Info;
    return convert(seedHex, 5, options);
  }
  /**
   * @param {!Object} value
   * @return {?}
   */
  function play(value) {
    if (void 0 !== value.addtlConsent && "string" !== typeof value.addtlConsent) {
      value.addtlConsent = void 0;
    }
    if (void 0 !== value.gdprApplies && "boolean" !== typeof value.gdprApplies) {
      value.gdprApplies = void 0;
    }
    return void 0 !== value.tcString && "string" !== typeof value.tcString || void 0 !== value.listenerId && "number" !== typeof value.listenerId ? 2 : value.cmpStatus && "error" !== value.cmpStatus ? 0 : 3;
  }
  /**
   * @param {number} key
   * @param {number} el
   * @return {undefined}
   */
  function Store(key, el) {
    /** @type {(number|{})} */
    el = void 0 === el ? {} : el;
    selection.call(this);
    /** @type {number} */
    this.h = key;
    /** @type {null} */
    this.g = null;
    this.A = {};
    /** @type {number} */
    this.G = 0;
    var existingWidget;
    this.B = null != (existingWidget = el.bb) ? existingWidget : 500;
    var c;
    this.u = null != (c = el.Xb) ? c : false;
    /** @type {null} */
    this.l = null;
  }
  /**
   * @param {!Window} value
   * @return {?}
   */
  function isPlainObject(value) {
    return "function" === typeof value.h.__tcfapi || null != getPrototypeOf(value);
  }
  /**
   * @param {!Object} o
   * @param {string} name
   * @param {!Object} data
   * @param {string} c
   * @return {undefined}
   */
  function getValue(o, name, data, c) {
    if (!data) {
      /**
       * @return {undefined}
       */
      data = function () {
      };
    }
    if ("function" === typeof o.h.__tcfapi) {
      /** @type {!Function} */
      o = o.h.__tcfapi;
      o(name, 2, data, c);
    } else {
      if (getPrototypeOf(o)) {
        editorSocket(o);
        /** @type {number} */
        var index = ++o.G;
        /** @type {!Object} */
        o.A[index] = data;
        if (o.g) {
          data = {};
          o.g.postMessage((data.__tcfapiCall = {
            command: name,
            version: 2,
            callId: index,
            parameter: c
          }, data), "*");
        }
      } else {
        data({}, false);
      }
    }
  }
  /**
   * @param {!Object} value
   * @return {?}
   */
  function getPrototypeOf(value) {
    if (value.g) {
      return value.g;
    }
    value.g = clamp(value.h, "__tcfapiLocator");
    return value.g;
  }
  /**
   * @param {!Object} _this
   * @return {undefined}
   */
  function editorSocket(_this) {
    if (!_this.l) {
      /**
       * @param {!Object} data
       * @return {undefined}
       */
      _this.l = function (data) {
        try {
          var event = ("string" === typeof data.data ? JSON.parse(data.data) : data.data).__tcfapiReturn;
          _this.A[event.callId](event.returnValue, event.success);
        } catch (d$jscomp$129) {
        }
      };
      on(_this.h, "message", _this.l);
    }
  }
  /**
   * @param {!Object} message
   * @return {?}
   */
  function tokenize(message) {
    if (false === message.gdprApplies) {
      return true;
    }
    if (void 0 === message.internalErrorState) {
      message.internalErrorState = play(message);
    }
    return "error" === message.cmpStatus || 0 !== message.internalErrorState ? message.internalBlockOnErrors ? (preprocess({
      e: String(message.internalErrorState)
    }), false) : true : "loaded" !== message.cmpStatus || "tcloaded" !== message.eventStatus && "useractioncomplete" !== message.eventStatus ? false : true;
  }
  /**
   * @param {!Object} options
   * @return {undefined}
   */
  function coerce(options) {
    var path = options.s;
    var target = options.bb;
    var handler = options.K;
    options = onload({
      s: path,
      ha: options.ha,
      qa: void 0 === options.qa ? false : options.qa,
      ra: void 0 === options.ra ? false : options.ra
    });
    if (null != options.g || "tcunav" != options.h.message) {
      handler(options);
    } else {
      nextTick(path, target).then(function (base) {
        return base.map(addTest);
      }).then(function (buildInTemplates) {
        return buildInTemplates.map(function (oldVal) {
          return type(path, oldVal);
        });
      }).then(handler);
    }
  }
  /**
   * @param {!Object} params
   * @return {?}
   */
  function onload(params) {
    var source = params.s;
    var result = params.ha;
    var str = void 0 === params.qa ? false : params.qa;
    if (params = (void 0 === params.ra ? 0 : params.ra) || !isPlainObject(new Store(source))) {
      if (!str) {
        if (!(result = !result)) {
          if (result = parseCSS(source), null == result.g) {
            path.J(806, result.h, void 0, void 0);
            /** @type {boolean} */
            result = false;
          } else {
            if ((result = result.getValue()) && null != filter(result, 1)) {
              b: {
                switch (result = filter(result, 1), result) {
                  case 1:
                    /** @type {boolean} */
                    result = true;
                    break b;
                  default:
                    throw Error("Unhandled AutoGdprFeatureStatus: " + result);
                }
              }
            } else {
              /** @type {boolean} */
              result = false;
            }
          }
        }
        /** @type {boolean} */
        str = result;
      }
      params = str;
    }
    if (params) {
      return type(source, decode(true));
    }
    result = translate();
    return (result = sendMessage(result, 24)) ? type(source, addTest(result)) : match(Error("tcunav"));
  }
  /**
   * @param {!Object} target
   * @param {?} cb
   * @return {?}
   */
  function nextTick(target, cb) {
    return global.Promise.race([then(), watch(target, cb)]);
  }
  /**
   * @return {?}
   */
  function then() {
    return (new global.Promise(function (resolver) {
      var value = translate();
      resolver = {
        resolve: resolver
      };
      var member = sendMessage(value, 25, []);
      member.push(resolver);
      value.S[checkForExceptionOrErrorType(25)] = member;
    })).then(mockCallback2);
  }
  /**
   * @param {!Object} n
   * @param {?} cb
   * @return {?}
   */
  function watch(n, cb) {
    return new global.Promise(function (close) {
      n.setTimeout(close, cb, match(Error("tcto")));
    });
  }
  /**
   * @param {string} v
   * @return {?}
   */
  function mockCallback2(v) {
    return v ? replace(v) : match(Error("tcnull"));
  }
  /**
   * @param {!Object} data
   * @return {?}
   */
  function addTest(data) {
    /** @type {boolean} */
    var result = void 0 === result ? false : result;
    if (tokenize(data)) {
      if (false === data.gdprApplies || "tcunavailable" === data.tcString || void 0 === data.gdprApplies && !result || "string" !== typeof data.tcString || !data.tcString.length) {
        /** @type {boolean} */
        data = true;
      } else {
        /** @type {string} */
        var x = void 0 === x ? "755" : x;
        b: {
          if (data.publisher && data.publisher.restrictions && (result = data.publisher.restrictions["1"], void 0 !== result)) {
            result = result[void 0 === x ? "755" : x];
            break b;
          }
          result = void 0;
        }
        if (0 === result) {
          /** @type {boolean} */
          data = false;
        } else {
          if (data.purpose && data.vendor) {
            result = data.vendor.consents;
            if ((x = !(!result || !result[void 0 === x ? "755" : x])) && data.purposeOneTreatment && "CH" === data.publisherCC) {
              /** @type {boolean} */
              data = true;
            } else {
              if (x) {
                data = data.purpose.consents;
                /** @type {boolean} */
                x = !(!data || !data["1"]);
              }
              /** @type {boolean} */
              data = x;
            }
          } else {
            /** @type {boolean} */
            data = true;
          }
        }
      }
    } else {
      /** @type {boolean} */
      data = false;
    }
    return decode(data);
  }
  /**
   * @param {!Object} win
   * @param {string} key
   * @return {?}
   */
  function type(win, key) {
    a: {
      /** @type {!Object} */
      win = void 0 === win ? window : win;
      if (expect(key, 5)) {
        try {
          var localStorage = win.localStorage;
          break a;
        } catch (d$jscomp$132) {
        }
      }
      /** @type {null} */
      localStorage = null;
    }
    return (key = localStorage) ? replace(key) : match(Error("unav"));
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function Text(x) {
    this.i = push(x);
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function prepare(x) {
    this.i = push(x);
  }
  /**
   * @param {string} el
   * @return {undefined}
   */
  function meta(el) {
    this.i = push(el);
  }
  /**
   * @param {!Error} exception
   * @return {undefined}
   */
  function NativeStorageError(exception) {
    /** @type {!Error} */
    this.exception = exception;
  }
  /**
   * @param {number} b
   * @param {string} state
   * @param {number} n
   * @return {undefined}
   */
  function Game(b, state, n) {
    /** @type {number} */
    this.j = b;
    /** @type {string} */
    this.g = state;
    /** @type {number} */
    this.h = n;
  }
  /**
   * @param {!Object} d
   * @param {?} e
   * @return {undefined}
   */
  function Color(d, e) {
    try {
      var h = d.h;
      var r = h.resolve;
      var self = d.g;
      _extend(self.g);
      stringify(self.h, node, 1);
      r.call(h, new NativeStorageError(e));
    } catch (theError) {
      d.h.reject(theError);
    }
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function Queue(x) {
    this.i = push(x);
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function b(x) {
    this.i = push(x);
  }
  /**
   * @param {string} value
   * @return {?}
   */
  function write(value) {
    return createError(2 > (value.length + 3) % 4 ? value + "A" : value).map(function (pingErr) {
      return (url = pingErr.toString(2), define(url, "padStart")).call(url, 8, "0");
    }).join("");
  }
  /**
   * @param {string} s
   * @return {?}
   */
  function substr(s) {
    if (!/^[0-1]+$/.test(s)) {
      throw Error("Invalid input [" + s + "] not a bit string.");
    }
    return parseInt(s, 2);
  }
  /**
   * @param {string} s
   * @return {?}
   */
  function parseTag(s) {
    if (!/^[0-1]+$/.test(s)) {
      throw Error("Invalid input [" + s + "] not a bit string.");
    }
    /** @type {!Array} */
    var values = [1, 2, 3, 5];
    /** @type {number} */
    var token = 0;
    /** @type {number} */
    var i = 0;
    for (; i < s.length - 1; i++) {
      if (values.length <= i) {
        values.push(values[i - 1] + values[i - 2]);
      }
      /** @type {number} */
      token = token + parseInt(s[i], 2) * values[i];
    }
    return token;
  }
  /**
   * @param {number} value
   * @return {?}
   */
  function iterate(value) {
    var property = write(value + "A");
    var result = substr(property.slice(0, 6));
    value = substr(property.slice(6, 12));
    var res = new b;
    result = callback(res, 1, result, 0);
    value = callback(result, 2, value, 0);
    property = property.slice(12);
    result = substr(property.slice(0, 12));
    /** @type {!Array} */
    res = [];
    var a = property.slice(12).replace(/0+$/, "");
    /** @type {number} */
    var maximumIntegerDigits = 0;
    for (; maximumIntegerDigits < result; maximumIntegerDigits++) {
      if (0 === a.length) {
        throw Error("Found " + maximumIntegerDigits + " of " + result + " sections [" + res + "] but reached end of input [" + property + "]");
      }
      /** @type {boolean} */
      var tagName = 0 === substr(a[0]);
      a = a.slice(1);
      var tag = processTag(a, property);
      var m = 0 === res.length ? 0 : res[res.length - 1];
      m = parseTag(tag) + m;
      a = a.slice(tag.length);
      if (tagName) {
        res.push(m);
      } else {
        tagName = processTag(a, property);
        tag = parseTag(tagName);
        /** @type {number} */
        var filename = 0;
        for (; filename <= tag; filename++) {
          res.push(m + filename);
        }
        a = a.slice(tagName.length);
      }
    }
    if (0 < a.length) {
      throw Error("Found " + result + " sections [" + res + "] but has remaining input [" + a + "], entire input [" + property + "]");
    }
    return next(value, 3, res);
  }
  /**
   * @param {string} tag
   * @param {string} callback
   * @return {?}
   */
  function processTag(tag, callback) {
    /** @type {number} */
    var offset = tag.indexOf("11");
    if (-1 === offset) {
      throw Error("Expected section bitstring but not found in [" + tag + "] part of [" + callback + "]");
    }
    return tag.slice(0, offset + 2);
  }
  /**
   * @param {string} count
   * @return {undefined}
   */
  function Range(count) {
    this.i = push(count);
  }
  /**
   * @param {string} count
   * @return {undefined}
   */
  function Storage(count) {
    this.i = push(count);
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function body(x) {
    this.i = push(x);
  }
  /**
   * @param {?} e
   * @return {?}
   */
  function getInternalProps(e) {
    var token = new body;
    return callback(token, 1, e, 0);
  }
  /**
   * @param {string} el
   * @return {undefined}
   */
  function Autocomplete(el) {
    this.i = push(el);
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function Sprite(x) {
    this.i = push(x);
  }
  /**
   * @param {!Object} o
   * @return {?}
   */
  function floor(o) {
    var item = new Sprite;
    return escapeCodeValue(item, 1, o);
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function A(x) {
    this.i = push(x);
  }
  /**
   * @return {?}
   */
  function after() {
    var a = new A;
    return callback(a, 1, 0, 0);
  }
  /**
   * @param {(Object|null|string)} v
   * @return {?}
   */
  function isDefined(v) {
    var fill_up_to_px = parseInt(has(v, 1), 0);
    return new Date(1E3 * fill_up_to_px + getVersion(v, 2) / 1E6);
  }
  /**
   * @param {number} data
   * @return {undefined}
   */
  function appendKeyOrId(data) {
    if (/[^01]/.test(data)) {
      throw Error("Input bitstring " + data + " is malformed!");
    }
    /** @type {number} */
    this.h = data;
    /** @type {number} */
    this.g = 0;
  }
  /**
   * @param {!Object} data
   * @return {?}
   */
  function getList(data) {
    var col = getTemplate(data, 16);
    return true === !!getTemplate(data, 1) ? (data = flatten(data), data.forEach(function (tcol) {
      if (tcol > col) {
        throw Error("ID " + tcol + " is past MaxVendorId " + col + "!");
      }
    }), data) : publish(data, col);
  }
  /**
   * @param {!Object} item
   * @return {?}
   */
  function flatten(item) {
    var a = getTemplate(item, 12);
    /** @type {!Array} */
    var styles = [];
    for (; a--;) {
      /** @type {boolean} */
      var tpl = true === !!getTemplate(item, 1);
      var a = getTemplate(item, 16);
      if (tpl) {
        tpl = getTemplate(item, 16);
        for (; a <= tpl; a++) {
          styles.push(a);
        }
      } else {
        styles.push(a);
      }
    }
    styles.sort(function (b, a) {
      return b - a;
    });
    return styles;
  }
  /**
   * @param {!Object} data
   * @param {number} index
   * @param {string} value
   * @return {?}
   */
  function publish(data, index, value) {
    /** @type {!Array} */
    var r = [];
    /** @type {number} */
    var openIndex = 0;
    for (; openIndex < index; openIndex++) {
      if (getTemplate(data, 1)) {
        /** @type {number} */
        var lang = openIndex + 1;
        if (value && -1 === value.indexOf(lang)) {
          throw Error("ID: " + lang + " is outside of allowed values!");
        }
        r.push(lang);
      }
    }
    return r;
  }
  /**
   * @param {!Object} source
   * @param {number} length
   * @return {?}
   */
  function getTemplate(source, length) {
    if (source.g + length > source.h.length) {
      throw Error("Requested length " + length + " is past end of string.");
    }
    var total_pageviews_raw = source.h.substring(source.g, source.g + length);
    source.g += length;
    return parseInt(total_pageviews_raw, 2);
  }
  /**
   * @param {string} task
   * @param {(Object|null|string)} callback
   * @return {?}
   */
  function getNode(task, callback) {
    try {
      var result = createError(task.split(".")[0]).map(function (pingErr) {
        return (url = pingErr.toString(2), define(url, "padStart")).call(url, 8, "0");
      }).join("");
      var data = new appendKeyOrId(result);
      result = {};
      /** @type {string} */
      result.tcString = task;
      /** @type {boolean} */
      result.gdprApplies = true;
      data.g += 78;
      result.cmpId = getTemplate(data, 12);
      result.cmpVersion = getTemplate(data, 12);
      data.g += 30;
      result.tcfPolicyVersion = getTemplate(data, 6);
      /** @type {boolean} */
      result.isServiceSpecific = !!getTemplate(data, 1);
      /** @type {boolean} */
      result.useNonStandardStacks = !!getTemplate(data, 1);
      result.specialFeatureOptins = fail(publish(data, 12, expected), expected);
      result.purpose = {
        consents: fail(publish(data, 24, prev), prev),
        legitimateInterests: fail(publish(data, 24, prev), prev)
      };
      /** @type {boolean} */
      result.purposeOneTreatment = !!getTemplate(data, 1);
      /** @type {string} */
      result.publisherCC = String.fromCharCode(code + getTemplate(data, 6)) + String.fromCharCode(code + getTemplate(data, 6));
      result.vendor = {
        consents: fail(getList(data), callback),
        legitimateInterests: fail(getList(data), callback)
      };
      return result;
    } catch (e$jscomp$99) {
      return null;
    }
  }
  /**
   * @param {!Object} match
   * @param {?} value
   * @return {?}
   */
  function fail(match, value) {
    var d = {};
    if (Array.isArray(value) && 0 !== value.length) {
      value = $(value);
      var p = value.next();
      for (; !p.done; p = value.next()) {
        p = p.value;
        /** @type {boolean} */
        d[p] = -1 !== match.indexOf(p);
      }
    } else {
      match = $(match);
      p = match.next();
      for (; !p.done; p = match.next()) {
        /** @type {boolean} */
        d[p.value] = true;
      }
    }
    delete d[0];
    return d;
  }
  /**
   * @param {string} s
   * @return {undefined}
   */
  function level(s) {
    this.i = push(s);
  }
  /**
   * @param {string} s
   * @return {undefined}
   */
  function song(s) {
    this.i = push(s);
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function unique(x) {
    this.i = push(x);
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function day(x) {
    this.i = push(x);
  }
  /**
   * @param {string} template
   * @return {?}
   */
  function addListener(template) {
    return (template = factory(template)) ? get(template, unique, 4) : null;
  }
  /**
   * @param {string} name
   * @return {?}
   */
  function factory(name) {
    if (name = (new Config(name)).get("FCCDCF", "")) {
      if (define(name, "startsWith").call(name, "%")) {
        try {
          /** @type {string} */
          var value = decodeURIComponent(name);
        } catch (c$jscomp$225) {
          /** @type {null} */
          value = null;
        }
      } else {
        value = name;
      }
    } else {
      /** @type {null} */
      value = null;
    }
    try {
      return value ? moment(value) : null;
    } catch (c$jscomp$226) {
      return null;
    }
  }
  /**
   * @param {string} component
   * @return {?}
   */
  function createComponent(component) {
    var result;
    var c$jscomp$227;
    return null != (c$jscomp$227 = null == (result = factory(component)) ? void 0 : stringify(result, level, 7)) ? c$jscomp$227 : [];
  }
  /**
   * @param {number} b
   * @param {number} a
   * @return {undefined}
   */
  function B(b, a) {
    b = void 0 === b ? selected : b;
    a = void 0 === a ? new A : a;
    this.g = b;
    this.timestamp = a;
  }
  /**
   * @param {string} value
   * @param {boolean} fn
   * @return {?}
   */
  function complete(value, fn) {
    var interestingPoint;
    try {
      if (0 === value.length) {
        throw Error("Cannot decode empty USCA section string");
      }
      /** @type {!Array<string>} */
      var scripts = value.split(".");
      if (2 < scripts.length) {
        throw Error("Expected at most 1 sub-section but got " + (scripts.length - 1) + " when decoding " + value);
      }
      var w = write(scripts[0]);
      var e = substr(w.slice(0, 6));
      w = w.slice(6);
      if (1 !== e) {
        throw Error("Unable to decode unsupported USCA Section specification version " + e + " - only version 1 is supported.");
      }
      if (w.length < min_piv) {
        if (w.length + 8 >= min_piv) {
          /** @type {string} */
          w = w + "00000000";
        } else {
          throw Error("Expected core segment bitstring minus version plus padding to be at least of length " + min_piv + " but was " + (w.length + 8));
        }
      }
      /** @type {number} */
      value = 0;
      /** @type {!Array} */
      var buffer = [];
      /** @type {number} */
      var layer_i = 0;
      for (; layer_i < crossfilterable_layers.length; layer_i++) {
        var remainder = crossfilterable_layers[layer_i];
        buffer.push(substr(w.slice(value, value + remainder)));
        value = value + remainder;
      }
      var props = getInternalProps(e);
      var start = buffer.shift();
      var item = select(props, 2, start);
      var fields = buffer.shift();
      var selected = select(item, 3, fields);
      var deep = buffer.shift();
      var target = select(selected, 4, deep);
      var options = buffer.shift();
      var ref = select(target, 5, options);
      var right = buffer.shift();
      var p = select(ref, 6, right);
      var s = new Storage;
      var a = buffer.shift();
      var list = select(s, 1, a);
      var maxHeight = buffer.shift();
      var row = select(list, 2, maxHeight);
      var head = buffer.shift();
      var table = select(row, 3, head);
      var DOC_STORE_AND_BY_SEQ_JOINER = buffer.shift();
      var sql = select(table, 4, DOC_STORE_AND_BY_SEQ_JOINER);
      var second = buffer.shift();
      var res = select(sql, 5, second);
      var context = buffer.shift();
      var el = select(res, 6, context);
      var lang = buffer.shift();
      var button = select(el, 7, lang);
      var b = buffer.shift();
      var element = select(button, 8, b);
      var data = buffer.shift();
      var previous = select(element, 9, data);
      var r = escapeCodeValue(p, 7, previous);
      var array = new Range;
      var end = buffer.shift();
      var length = select(array, 1, end);
      var graphics = buffer.shift();
      var positions = select(length, 2, graphics);
      var point = escapeCodeValue(r, 8, positions);
      var results = buffer.shift();
      var index = select(point, 9, results);
      var key = buffer.shift();
      var base = select(index, 10, key);
      var prev = buffer.shift();
      var style = select(base, 11, prev);
      var newvalue = buffer.shift();
      var m = select(style, 12, newvalue);
      if (1 === scripts.length) {
        var I = floor(m);
      } else {
        var i = floor(m);
        var w = write(scripts[1]);
        if (3 > w.length) {
          throw Error("Invalid GPC Segment [" + w + "]. Expected length 3, but was " + w.length + ".");
        }
        var now = substr(w.slice(0, 2));
        if (0 > now || 1 < now) {
          throw Error("Attempting to decode unknown GPC segment subsection type " + now + ".");
        }
        var start = now + 1;
        var lastchar = substr(w.charAt(2));
        var props = new Autocomplete;
        var list = select(props, 2, start);
        var result = empty(list, 1, !!lastchar);
        I = escapeCodeValue(i, 2, result);
      }
      var viewportCenter = I;
    } catch (hs$jscomp$0) {
      /** @type {null} */
      viewportCenter = null;
    }
    return new B(null != (interestingPoint = viewportCenter) ? interestingPoint : selected, fn);
  }
  /**
   * @param {string} val
   * @return {?}
   */
  function close(val) {
    var n = new Queue;
    n = callback(n, 1, 1, 0);
    var key = resolve(get(val.g, body, 1), 2);
    var value = resolve(get(val.g, body, 1), 3);
    if (0 === key && 0 === value) {
      select(n, 2, 0);
    } else {
      if (2 === key || 2 === value) {
        select(n, 2, 1);
      } else {
        select(n, 2, 2);
      }
    }
    key = resolve(get(val.g, body, 1), 5);
    val = resolve(get(val.g, body, 1), 6);
    if (0 === key && 0 === val) {
      select(n, 3, 0);
    } else {
      if (1 === key || 1 === val) {
        select(n, 3, 2);
      } else {
        select(n, 3, 1);
      }
    }
    select(n, 4, 1);
    /** @type {string} */
    val = [getVersion(n, 1), cachedMods[resolve(n, 2)], cachedMods[resolve(n, 3)], cachedMods[resolve(n, 4)]].join("");
    return 4 === val.length && (-1 === val.indexOf("-") || "---" === val.substring(1)) && "1" <= val[0] && "9" >= val[0] && values.hasOwnProperty(val[1]) && values.hasOwnProperty(val[2]) && values.hasOwnProperty(val[3]) ? val : null;
  }
  /**
   * @param {string} retireAt
   * @return {undefined}
   */
  function WorkerData(retireAt) {
    /** @type {string} */
    this.g = retireAt;
    /** @type {null} */
    this.h = null;
  }
  /**
   * @param {?} id
   * @return {undefined}
   */
  function fetchFolder(id) {
    if (!id.__tcfapiPostMessageReady) {
      getFolder(new WorkerData(id));
    }
  }
  /**
   * @param {!Object} f
   * @return {undefined}
   */
  function getFolder(f) {
    /**
     * @param {!Object} a
     * @return {undefined}
     */
    f.h = function (a) {
      /** @type {boolean} */
      var needsTranslate = "string" == typeof a.data;
      try {
        /** @type {*} */
        var frag$0 = needsTranslate ? JSON.parse(a.data) : a.data;
      } catch (f$jscomp$67) {
        return;
      }
      var data = frag$0.__tcfapiCall;
      if (!(!data || "ping" !== data.command && "getTCData" !== data.command && "addEventListener" !== data.command && "removeEventListener" !== data.command)) {
        f.g.__tcfapi(data.command, data.version, function (value, successListener) {
          var errorMessage = {};
          /** @type {({callId: ?, returnValue: ?, success: ?}|{callId: ?, success: ?})} */
          errorMessage.__tcfapiReturn = "removeEventListener" === data.command ? {
            success: value,
            callId: data.callId
          } : {
            returnValue: value,
            success: successListener,
            callId: data.callId
          };
          /** @type {(string|{__tcfapiReturn: {callId: ?, success: ?}})} */
          value = needsTranslate ? JSON.stringify(errorMessage) : errorMessage;
          if (a.source && "function" === typeof a.source.postMessage) {
            a.source.postMessage(value, a.origin);
          }
          return value;
        }, data.parameter);
      }
    };
    f.g.addEventListener("message", f.h);
    /** @type {boolean} */
    f.g.__tcfapiPostMessageReady = true;
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function pos(x) {
    this.i = push(x);
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function time(x) {
    this.i = push(x);
  }
  /**
   * @param {!Object} context
   * @param {string} name
   * @return {undefined}
   */
  function helper(context, name) {
    /**
     * @return {undefined}
     */
    function render() {
      if (!context.frames[name]) {
        if (parent.body) {
          var frame = createElement("IFRAME", parent);
          /** @type {string} */
          frame.style.display = "none";
          /** @type {string} */
          frame.style.width = "0px";
          /** @type {string} */
          frame.style.height = "0px";
          /** @type {string} */
          frame.style.border = "none";
          /** @type {string} */
          frame.style.zIndex = "-1000";
          /** @type {string} */
          frame.style.left = "-1000px";
          /** @type {string} */
          frame.style.top = "-1000px";
          /** @type {string} */
          frame.name = name;
          parent.body.appendChild(frame);
        } else {
          context.setTimeout(render, 5);
        }
      }
    }
    var parent = context.document;
    render();
  }
  /**
   * @param {string} value
   * @param {string} item
   * @return {undefined}
   */
  function move(value, item) {
    /** @type {string} */
    this.g = value;
    var key = (key = factory(value.document)) ? get(key, song, 5) || null : null;
    if (item) {
      item = wrapper(this);
      item = start(item);
      if (null != key && null != reduce(key, 2) && 0 !== format(key, 2).length) {
        var result = isPresent(key, A, 1) ? get(key, A, 1) : after();
        key = {
          uspString: format(key, 2),
          ya: isDefined(result)
        };
      } else {
        /** @type {null} */
        key = null;
      }
      key = key && item ? item.ya > key.ya ? item.uspString : key.uspString : key ? key.uspString : item ? item.uspString : null;
    } else {
      key = key ? reduce(key, 2) : null;
    }
    this.l = key;
    this.h = (key = addListener(value.document)) && null != reduce(key, 1) ? reduce(key, 1) : null;
    this.j = (value = addListener(value.document)) && null != reduce(value, 2) ? reduce(value, 2) : null;
  }
  /**
   * @return {undefined}
   */
  function loaded() {
    /** @type {!Window} */
    var context = window;
    var no = indexOf(name);
    var obj_id = indexOf(standardInjects);
    if (!(context.__uspapi || context.frames.__uspapiLocator)) {
      context = new move(context, obj_id);
      bindEvent(context);
      if (no) {
        hookExceptionUnwind(context);
      }
    }
  }
  /**
   * @param {!Object} self
   * @return {undefined}
   */
  function bindEvent(self) {
    if (!(!self.l || self.g.__uspapi || self.g.frames.__uspapiLocator)) {
      /** @type {string} */
      self.g.__uspapiManager = "fc";
      helper(self.g, "__uspapiLocator");
      use("__uspapi", function () {
        return self.u.apply(self, toArray(htmlWebPackPluginAssets.apply(0, arguments)));
      });
    }
  }
  /**
   * @param {!Object} res
   * @return {?}
   */
  function wrapper(res) {
    res = (url = createComponent(res.g.document), define(url, "find")).call(url, function (defaultSounds) {
      return 13 === resolve(defaultSounds, 1);
    });
    if (null == res ? 0 : null != reduce(res, 2)) {
      try {
        return defaultConfig(format(res, 2));
      } catch (b$jscomp$345) {
      }
    }
    return null;
  }
  /**
   * @param {string} text
   * @return {?}
   */
  function start(text) {
    if (null == text || null == reduce(text, 1) || 0 === format(text, 1).length) {
      return null;
    }
    var key = (url = stringify(text, pos, 2), define(url, "find")).call(url, function (n) {
      return 8 === getVersion(n, 1);
    });
    key = (null == key ? 0 : isPresent(key, A, 2)) ? get(key, A, 2) : after();
    text = format(text, 1);
    try {
      if (!define(text, "includes").call(text, "~")) {
        throw Error("GPP String [" + text + "] contains no sections");
      }
      var value = iterate(text.split("~")[0]);
      if (!define(text, "includes").call(text, "~")) {
        throw Error("GPP String [" + text + "] contains no sections");
      }
      var nextIdLookup = text.split("~").slice(1);
      var indexLookupKey = assert(value, 3, transition).indexOf(8);
      return -1 === indexLookupKey ? null : {
        uspString: close(complete(nextIdLookup[indexLookupKey], key)),
        ya: isDefined(key)
      };
    } catch (f$jscomp$70) {
      return null;
    }
  }
  /**
   * @param {!Object} self
   * @return {undefined}
   */
  function hookExceptionUnwind(self) {
    if (!(!self.h || self.g.__tcfapi || self.g.frames.__tcfapiLocator)) {
      /** @type {string} */
      self.g.__tcfapiManager = "fc";
      helper(self.g, "__tcfapiLocator");
      self.g.__tcfapiEventListeners = self.g.__tcfapiEventListeners || [];
      use("__tcfapi", function () {
        return self.m.apply(self, toArray(htmlWebPackPluginAssets.apply(0, arguments)));
      });
      fetchFolder(self.g);
    }
  }
  /**
   * @param {!Object} options
   * @param {!Object} self
   * @param {number} data
   * @return {?}
   */
  function fire(options, self, data) {
    if (!options.h) {
      return null;
    }
    self = getNode(options.h, self);
    self.addtlConsent = null != options.j ? options.j : void 0;
    /** @type {string} */
    self.cmpStatus = "loaded";
    /** @type {string} */
    self.eventStatus = "tcloaded";
    if (null != data) {
      /** @type {number} */
      self.listenerId = data;
    }
    return self;
  }
  /**
   * @param {!Object} obj
   * @param {!Object} body
   * @return {undefined}
   */
  function request(obj, body) {
    if (obj.location.href && obj.location.href.substring) {
      body.url = obj.location.href.substring(0, 200);
    }
    cb("ama", body, .01);
  }
  /**
   * @param {!Object} options
   * @return {?}
   */
  function processOptions(options) {
    var processedOptions = {};
    forEach(classes, function (canCreateDiscussions, name) {
      if (name in options) {
        processedOptions[name] = options[name];
      }
    });
    return processedOptions;
  }
  /**
   * @param {string} locale
   * @return {?}
   */
  function formatPattern(locale) {
    /** @type {!RegExp} */
    var revisionRegex = /[a-zA-Z0-9._~-]/;
    /** @type {!RegExp} */
    var completeMatch = /%[89a-zA-Z]./;
    return locale.replace(/(%[a-zA-Z0-9]{2})/g, function (word) {
      if (!word.match(completeMatch)) {
        /** @type {string} */
        var s = decodeURIComponent(word);
        if (s.match(revisionRegex)) {
          return s;
        }
      }
      return word.toUpperCase();
    });
  }
  /**
   * @param {!NodeList} selector
   * @return {?}
   */
  function transformToNative(selector) {
    /** @type {string} */
    var base = "";
    /** @type {!RegExp} */
    var path = /[/%?&=]/;
    /** @type {number} */
    var j = 0;
    for (; j < selector.length; ++j) {
      var value = selector[j];
      /** @type {string} */
      base = value.match(path) ? base + value : base + encodeURIComponent(value);
    }
    return base;
  }
  /**
   * @param {!Array} context
   * @return {?}
   */
  function eq(context) {
    context = assert(context, 2, iterator);
    if (!context) {
      return false;
    }
    /** @type {number} */
    var i = 0;
    for (; i < context.length; i++) {
      if (1 == context[i]) {
        return true;
      }
    }
    return false;
  }
  /**
   * @param {string} source
   * @param {string} callback
   * @return {?}
   */
  function compile(source, callback) {
    source = transformToNative(formatPattern(source.location.pathname)).replace(/(^\/)|(\/$)/g, "");
    var ok = equals(source);
    var json = parseJson(source);
    return define(callback, "find").call(callback, function (path) {
      var value = isPresent(path, object, 7) ? join(get(path, object, 7), 1) : join(path, 1);
      path = isPresent(path, object, 7) ? filter(get(path, object, 7), 2) : 2;
      if ("number" !== typeof value) {
        return false;
      }
      switch (path) {
        case 1:
          return value == ok;
        case 2:
          return json[value] || false;
      }
      return false;
    }) || null;
  }
  /**
   * @param {string} type
   * @return {?}
   */
  function parseJson(type) {
    var data = {};
    for (; ;) {
      /** @type {boolean} */
      data[equals(type)] = true;
      if (!type) {
        return data;
      }
      /** @type {string} */
      type = type.substring(0, type.lastIndexOf("/"));
    }
  }
  /**
   * @param {!Object} value
   * @return {?}
   */
  function hasClass(value) {
    value = get(value, first, 3);
    return !value || has(value, 1) <= Date.now() ? false : true;
  }
  /**
   * @param {!Object} value
   * @return {?}
   */
  function getGroup(value) {
    if (indexOf(dontDelegate)) {
      /** @type {null} */
      var node = null;
    } else {
      try {
        node = value.getItem("google_ama_config");
      } catch (d$jscomp$150) {
        /** @type {null} */
        node = null;
      }
    }
    try {
      var i = node ? getNodeText(node) : null;
    } catch (d$jscomp$151) {
      /** @type {null} */
      i = null;
    }
    return i;
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function v(x) {
    this.i = push(x);
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function top(x) {
    this.i = push(x);
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function options(x) {
    this.i = push(x);
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function precision(x) {
    this.i = push(x);
  }
  /**
   * @param {string} el
   * @return {undefined}
   */
  function store(el) {
    this.i = push(el);
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function index(x) {
    this.i = push(x);
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function base(x) {
    this.i = push(x);
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function Rectangle(x) {
    this.i = push(x);
  }
  /**
   * @param {!Object} value
   * @return {?}
   */
  function round(value) {
    return getStyle(value, v, 13, text);
  }
  /**
   * @param {!Object} input
   * @return {?}
   */
  function c(input) {
    return getStyle(input, top, 14, text);
  }
  /**
   * @param {!Object} cb
   * @return {undefined}
   */
  function handlePeopleSearchResponse(cb) {
    trigger(release, change);
    /** @type {!Object} */
    release = cb;
  }
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function log(obj) {
    if (!obj.google_ad_modifications) {
      obj.google_ad_modifications = {};
    }
    return obj.google_ad_modifications;
  }
  /**
   * @param {!Object} data
   * @return {?}
   */
  function getSetting(data) {
    data = log(data);
    var moduleName = data.space_collapsing || "none";
    return data.remove_ads_by_default ? {
      Ma: true,
      Eb: moduleName,
      wa: data.ablation_viewport_offset
    } : null;
  }
  /**
   * @param {!Object} result
   * @param {number} def
   * @return {undefined}
   */
  function calculate(result, def) {
    result = log(result);
    /** @type {boolean} */
    result.had_ads_ablation = true;
    /** @type {boolean} */
    result.remove_ads_by_default = true;
    /** @type {string} */
    result.space_collapsing = "slot";
    /** @type {number} */
    result.ablation_viewport_offset = def;
  }
  /**
   * @param {boolean} extra
   * @return {undefined}
   */
  function createRow(extra) {
    /** @type {boolean} */
    log(globalWindow).allow_second_reactive_tag = extra;
  }
  /**
   * @return {?}
   */
  function parseTextMessage() {
    var output = log(window);
    if (!output.afg_slotcar_vars) {
      output.afg_slotcar_vars = {};
    }
    return output.afg_slotcar_vars;
  }
  /**
   * @param {!Object} val
   * @return {?}
   */
  function isNotUndefined(val) {
    var result;
    var parserLength;
    var d$jscomp$152;
    return null != (d$jscomp$152 = null == (result = log(val)) ? void 0 : null == (parserLength = result.head_tag_slot_vars) ? void 0 : parserLength.google_ad_host) ? d$jscomp$152 : isUndefined(val);
  }
  /**
   * @param {!Object} val
   * @return {?}
   */
  function isUndefined(val) {
    var doc;
    var currMetaTag;
    var d$jscomp$153;
    return null != (d$jscomp$153 = null == (doc = val.document) ? void 0 : null == (currMetaTag = doc.querySelector('meta[name="google-adsense-platform-account"]')) ? void 0 : currMetaTag.getAttribute("content")) ? d$jscomp$153 : null;
  }
  /**
   * @param {!Object} value
   * @param {number} array
   * @param {number} data
   * @param {?} update
   * @return {?}
   */
  function setData(value, array, data, update) {
    /** @type {(number|string)} */
    data = void 0 === data ? "" : data;
    return 1 === array && makeRequest(data, void 0 === update ? null : update) ? true : traverse(value, data, function (args) {
      return pipe(stringify(args, opts, 2), function (items) {
        return filter(items, 1) === array;
      });
    });
  }
  /**
   * @param {string} content
   * @param {!Object} i
   * @return {?}
   */
  function makeRequest(content, i) {
    return i ? number(i, v, 13) ? expect(round(i), 1) : number(i, top, 14) && "" !== content && 1 === ok(c(i), 1).length && ok(c(i), 1)[0] === content ? expect(get(c(i), v, 2), 1) : false : false;
  }
  /**
   * @param {?} from
   * @param {number} to
   * @return {undefined}
   */
  function doUpgrade(from, to) {
    to = getVersion(to, 18);
    if (-1 !== to) {
      from.tmod = to;
    }
  }
  /**
   * @param {!Function} value
   * @return {?}
   */
  function lint(value) {
    /** @type {string} */
    var type = void 0 === type ? "" : type;
    var pkg = _(globalWindow) || globalWindow;
    return info(pkg, value) ? true : traverse(globalWindow, type, function (name) {
      return pipe(assert(name, 3, iterator), function (options) {
        return options === value;
      });
    });
  }
  /**
   * @param {string} data
   * @param {!Function} extras
   * @return {?}
   */
  function info(data, extras) {
    data = (data = (data = data.location && data.location.hash) && data.match(/forced_clientside_labs=([\d,]+)/)) && data[1];
    return !!data && search(data.split(","), extras.toString());
  }
  /**
   * @param {!Object} type
   * @param {number} value
   * @param {!Function} cb
   * @return {?}
   */
  function traverse(type, value, cb) {
    type = _(type) || type;
    var files = mapper(type);
    if (value) {
      value = escapeHtml(String(value));
    }
    return inject(files, function (fallbackReleases, key) {
      return Object.prototype.hasOwnProperty.call(files, key) && (!value || value === key) && cb(fallbackReleases);
    });
  }
  /**
   * @param {!Object} callback
   * @return {?}
   */
  function mapper(callback) {
    callback = _set(callback);
    var structuredTypes = {};
    forEach(callback, function (s, newTypeName) {
      try {
        var newType = new result(s);
        structuredTypes[newTypeName] = newType;
      } catch (f$jscomp$74) {
      }
    });
    return structuredTypes;
  }
  /**
   * @param {!Object} options
   * @return {?}
   */
  function _set(options) {
    return indexOf($fallbackLanguage) ? (trigger(release, playing), options = onload({
      s: options,
      ha: release
    }), null != options.g ? pick(options.getValue()) : {}) : pick(options.localStorage);
  }
  /**
   * @param {!Object} dict
   * @return {?}
   */
  function pick(dict) {
    try {
      var resdata = dict.getItem("google_adsense_settings");
      if (!resdata) {
        return {};
      }
      /** @type {*} */
      var value = JSON.parse(resdata);
      return value !== Object(value) ? {} : css(value, function (featureExtractorOrArray, bibsection) {
        return Object.prototype.hasOwnProperty.call(value, bibsection) && "string" === typeof bibsection && Array.isArray(featureExtractorOrArray);
      });
    } catch (d$jscomp$159) {
      return {};
    }
  }
  /**
   * @param {boolean} runAsync
   * @return {undefined}
   */
  function enqueue(runAsync) {
    cb("atf_ad_settings_from_ppabg", {
      p_s: runAsync
    }, .01);
  }
  /**
   * @param {!Object} code
   * @return {?}
   */
  function _evaluate(code) {
    return !!code && (0 < stringify(code, node, 1).length || indexOf(middleware_config) && 0 < stringify(code, range, 3).length);
  }
  /**
   * @param {boolean} opacity
   * @return {undefined}
   */
  function hexToRgb(opacity) {
    cb("overlay_settings_from_ppabg", {
      p_s: opacity
    }, .01);
  }
  /**
   * @param {!Object} type
   * @return {?}
   */
  function compileReadCode(type) {
    var val = stringify(type, replacer, 2);
    return compile(win, val) ? [] : assert(type, 3, iterator);
  }
  /**
   * @param {string} string
   * @param {string} value
   * @return {?}
   */
  function rgb(string, value) {
    if (isNotUndefined(win)) {
      return segment;
    }
    if (null == value ? 0 : number(value, v, 13)) {
      var result = format(round(value), 9);
      var num;
      var m;
      value = null == value ? void 0 : null == (num = round(value)) ? void 0 : null == (m = get(num, meta, 2)) ? void 0 : get(m, prepare, 3);
      if (!string || result != string || !value) {
        return segment;
      }
      hexToRgb(false);
      return compileReadCode(value);
    }
    if (null == value ? 0 : number(value, top, 14)) {
      var i;
      num = null == value ? void 0 : null == (i = c(value)) ? void 0 : ok(i, 1);
      if (!num || 1 !== num.length || !string || num[0] !== string || format(value, 17) != win.location.host) {
        return segment;
      }
      var a;
      var parent;
      string = null == value ? void 0 : null == (result = c(value)) ? void 0 : null == (a = get(result, v, 2)) ? void 0 : null == (parent = get(a, meta, 2)) ? void 0 : get(parent, prepare, 3);
      if (!string) {
        return segment;
      }
      hexToRgb(true);
      return compileReadCode(string);
    }
    return segment;
  }
  /**
   * @param {string} i
   * @param {boolean} name
   * @return {?}
   */
  function includes(i, name) {
    /** @type {!Array} */
    var validParams = [];
    /** @type {!Array} */
    var parent = segment;
    if (indexOf(yAxisModels) || indexOf(staticList) || indexOf(colGroup)) {
      parent = rgb(i, name);
    }
    if (indexOf(yAxisModels) && !define(parent, "includes").call(parent, 1)) {
      validParams.push(1);
    }
    if (indexOf(staticList) && !define(parent, "includes").call(parent, 2)) {
      validParams.push(2);
    }
    if (indexOf(colGroup) && !define(parent, "includes").call(parent, 7)) {
      validParams.push(7);
    }
    return validParams;
  }
  /**
   * @param {?} fontKey
   * @param {boolean} fontName
   * @param {boolean} fontStyle
   * @param {boolean} fontVariant
   * @return {undefined}
   */
  function addToFontDictionary(fontKey, fontName, fontStyle, fontVariant) {
    listener(new verify(fontKey, fontName, fontStyle, fontVariant));
  }
  /**
   * @param {string} s
   * @param {number} n
   * @param {number} b
   * @param {string} c
   * @return {undefined}
   */
  function verify(s, n, b, c) {
    /** @type {string} */
    this.s = s;
    /** @type {number} */
    this.h = n;
    /** @type {number} */
    this.j = b;
    /** @type {string} */
    this.g = c;
  }
  /**
   * @param {!Object} args
   * @return {undefined}
   */
  function listener(args) {
    once(dispatch(onload({
      s: args.s,
      ha: expect(args.h, 6)
    }), function (password) {
      login(args, password, true);
    }), function () {
      chain(args);
    });
  }
  /**
   * @param {!Object} obj
   * @param {!Object} type
   * @param {boolean} values
   * @return {undefined}
   */
  function login(obj, type, values) {
    once(dispatch(createGroup(type), function (item) {
      print("ok");
      obj.g(item, {
        fromLocalStorage: true
      });
    }), function () {
      var server = obj.s;
      try {
        type.removeItem("google_ama_config");
      } catch (e$jscomp$113) {
        request(server, {
          lserr: 1
        });
      }
      if (values) {
        chain(obj);
      } else {
        obj.g(null, null);
      }
    });
  }
  /**
   * @param {!Object} val
   * @return {undefined}
   */
  function chain(val) {
    once(dispatch(evaluate(val), function (item) {
      val.g(item, {
        fromPABGSettings: true
      });
    }), function () {
      colored(val);
    });
  }
  /**
   * @param {!Object} color
   * @return {undefined}
   */
  function colored(color) {
    coerce({
      s: color.s,
      ha: expect(color.h, 6),
      bb: 50,
      K: function (b) {
        C(color, b);
      }
    });
  }
  /**
   * @param {!Object} target
   * @return {?}
   */
  function createGroup(target) {
    return (target = (target = getGroup(target)) ? hasClass(target) ? target : null : null) ? replace(target) : match(Error("invlocst"));
  }
  /**
   * @param {!Object} a
   * @return {?}
   */
  function evaluate(a) {
    if (isNotUndefined(a.s) && !expect(a.h, 22)) {
      return match(Error("invtag"));
    }
    a: {
      var result = a.s;
      var val = a.j;
      a = a.h;
      if (null == a ? 0 : number(a, v, 13)) {
        var x;
        var o;
        result = null == a ? void 0 : null == (x = round(a)) ? void 0 : null == (o = get(x, meta, 2)) ? void 0 : get(o, Text, 2);
        if (_evaluate(result)) {
          enqueue(false);
        } else {
          /** @type {null} */
          result = null;
        }
      } else {
        if (null == a ? 0 : number(a, top, 14)) {
          var r;
          x = null == a ? void 0 : null == (r = c(a)) ? void 0 : ok(r, 1);
          var value;
          var message;
          var data;
          o = null == a ? void 0 : null == (value = c(a)) ? void 0 : null == (message = get(value, v, 2)) ? void 0 : null == (data = get(message, meta, 2)) ? void 0 : get(data, Text, 2);
          if (x && 1 === x.length && x[0] === val && _evaluate(o) && format(a, 17) === result.location.host) {
            enqueue(true);
            result = o;
            break a;
          }
        }
        /** @type {null} */
        result = null;
      }
    }
    if (result) {
      val = new Constructor;
      value = stringify(result, node, 1);
      val = call(val, 1, value);
      value = stringify(result, replacer, 2);
      val = call(val, 7, value);
      if (indexOf(middleware_config) && 0 < stringify(result, range, 3).length) {
        value = new a;
        result = stringify(result, range, 3);
        result = call(value, 1, result);
        escapeCodeValue(val, 6, result);
      }
      result = replace(val);
    } else {
      result = match(Error("invtag"));
    }
    return result;
  }
  /**
   * @param {!Object} val
   * @param {!Object} o
   * @return {undefined}
   */
  function C(val, o) {
    once(dispatch(o, function (password) {
      login(val, password, false);
    }), function (a) {
      print(a.message);
      val.g(null, null);
    });
  }
  /**
   * @param {string} reply
   * @return {undefined}
   */
  function print(reply) {
    cb("abg::amalserr", {
      status: reply,
      guarding: "true",
      timeout: 50,
      rate: .01
    }, .01);
  }
  /**
   * @param {string} data
   * @param {(!Function|RegExp|null|string)} options
   * @param {(Object|null|string)} context
   * @param {!Array} value
   * @return {undefined}
   */
  function make(data, options, context, value) {
    try {
      var result = compile(data, stringify(context, replacer, 7));
      if (result && eq(result)) {
        if (reduce(result, 4)) {
          var node = {};
          var d = new model(null, (node.google_package = reduce(result, 4), node));
          value = build(value, d);
        }
        var obj = new ctor(data, options, context, result, value);
        setOptions(1E3, function () {
          var place = new fastpromise;
          (new Game(data, obj, place)).start();
          return place.h;
        }, data).then(proxy(req, data), proxy(exception, data));
      }
    } catch (k$jscomp$15) {
      request(data, {
        atf: -1
      });
    }
  }
  /**
   * @param {!Object} params
   * @return {undefined}
   */
  function req(params) {
    request(params, {
      atf: 1
    });
  }
  /**
   * @param {!Object} data
   * @param {!Error} err
   * @return {undefined}
   */
  function exception(data, err) {
    /** @type {!Error} */
    (data.google_ama_state = data.google_ama_state || {}).exception = err;
    request(data, {
      atf: 0
    });
  }
  /**
   * @return {undefined}
   */
  function Deferred() {
    var callbackTwo = this;
    this.promise = new global.Promise(function (resolve, reject) {
      /** @type {!Function} */
      callbackTwo.resolve = resolve;
      /** @type {!Function} */
      callbackTwo.reject = reject;
    });
  }
  /**
   * @return {?}
   */
  function createDoneFunction() {
    var deferred = new Deferred;
    return {
      promise: deferred.promise,
      resolve: deferred.resolve
    };
  }
  /**
   * @param {!Function} callback
   * @return {?}
   */
  function asyncFunction(callback) {
    /** @type {!Function} */
    callback = void 0 === callback ? function () {
    } : callback;
    if (!win.google_llp) {
      win.google_llp = {};
    }
    var localStorage = win.google_llp;
    var randomPlaylistConfigStr = localStorage[7];
    if (randomPlaylistConfigStr) {
      return randomPlaylistConfigStr;
    }
    randomPlaylistConfigStr = createDoneFunction();
    localStorage[7] = randomPlaylistConfigStr;
    callback();
    return randomPlaylistConfigStr;
  }
  /**
   * @param {!Object} options
   * @return {?}
   */
  function timeout(options) {
    return asyncFunction(function () {
      refresh(win.document, options);
    }).promise;
  }
  /**
   * @param {?} settingsKeys
   * @return {?}
   */
  function getSettings(settingsKeys) {
    var b$jscomp$383 = {};
    return {
      enable_page_level_ads: (b$jscomp$383.pltais = true, b$jscomp$383),
      google_ad_client: settingsKeys
    };
  }
  /**
   * @param {!Object} row
   * @return {?}
   */
  function getTime(row) {
    if (win.google_apltlad || win !== win.top || !row.google_ad_client) {
      return null;
    }
    /** @type {boolean} */
    win.google_apltlad = true;
    var s = getSettings(row.google_ad_client);
    var data = s.enable_page_level_ads;
    forEach(row, function (responseTasks, arrayOfObjects) {
      if (obj[arrayOfObjects] && "google_ad_client" !== arrayOfObjects) {
        data[arrayOfObjects] = responseTasks;
      }
    });
    /** @type {number} */
    data.google_pgb_reactive = 7;
    if (indexOf(inheritList)) {
      /** @type {boolean} */
      data.easpi = true;
      if (!indexOf(AUTO_CREATE_CONFIG)) {
        /** @type {number} */
        data.asntpc = 1E3;
      }
      /** @type {number} */
      data.asla = .4;
      /** @type {number} */
      data.asaa = -1;
      data.asro = indexOf(nrect);
      if (0 <= makeUnique(auth)) {
        data.asacml = makeUnique(auth);
      }
      if (!indexOf(_configData)) {
        /** @type {boolean} */
        data.asrc = false;
      }
      if (indexOf(sortInput)) {
        /** @type {boolean} */
        data.easppi = true;
      }
      if (indexOf(tableHeaderConfigs)) {
        /** @type {boolean} */
        data.asiscm = true;
      }
      if (indexOf(tempHeaderConf)) {
        /** @type {boolean} */
        data.scsals = true;
      }
      if (indexOf(baseExtractConfig)) {
        /** @type {boolean} */
        data.srtr = true;
      }
      if (!indexOf(_catconfigInternal)) {
        /** @type {boolean} */
        data.sedf = false;
      }
      if (indexOf(preScrapConfig)) {
        /** @type {boolean} */
        data.sefa = true;
      }
    }
    if ("google_ad_section" in row || "google_ad_region" in row) {
      data.google_ad_section = row.google_ad_section || row.google_ad_region;
    }
    return s;
  }
  /**
   * @param {!Object} name
   * @param {string} handler
   * @return {undefined}
   */
  function poll(name, handler) {
    if (!log(globalWindow).ama_ran_on_page) {
      setOptions(1001, function () {
        return _transform(new drawLiquid(name, handler));
      }, win);
    }
  }
  /**
   * @param {number} options
   * @param {number} cell
   * @return {undefined}
   */
  function drawLiquid(options, cell) {
    this.g = win;
    /** @type {number} */
    this.h = options;
    /** @type {number} */
    this.j = cell;
  }
  /**
   * @param {!Object} data
   * @return {undefined}
   */
  function _transform(data) {
    addToFontDictionary(data.g, data.j, data.h.google_ad_client || "", function (items, username) {
      var m = data.g;
      var height = data.h;
      if (!log(globalWindow).ama_ran_on_page) {
        if (items) {
          set(m, height, items, username);
        }
      }
    });
  }
  /**
   * @param {undefined} data
   * @param {boolean} options
   * @param {!Object} source
   * @param {?} html
   * @return {undefined}
   */
  function set(data, options, source, html) {
    if (html) {
      _extend(data).configSourceInAbg = html;
    }
    if (isPresent(source, layer, 24)) {
      html = toCSS(data);
      /** @type {boolean} */
      html.availableAbg = true;
      var value;
      var temp;
      /** @type {boolean} */
      html.ablationFromStorage = !!(null == (value = get(source, layer, 24)) ? 0 : null == (temp = get(value, n, 3)) ? 0 : getStyle(temp, right, 2, dtick));
    }
    if (_isObject(options.enable_page_level_ads) && 7 === options.enable_page_level_ads.google_pgb_reactive) {
      value = compile(data, stringify(source, replacer, 7));
      if (!value || !warn(value, 8)) {
        cb("amaait", {
          value: "true"
        });
        return;
      }
      cb("amaait", {
        value: "false"
      });
    }
    /** @type {boolean} */
    log(globalWindow).ama_ran_on_page = true;
    var node;
    if (null == (node = get(source, table, 15)) ? 0 : warn(node, 23)) {
      /** @type {boolean} */
      log(data).enable_overlap_observer = true;
    }
    if ((node = get(source, Style, 13)) && 1 === filter(node, 1)) {
      /** @type {number} */
      var file = 0;
      var value = get(node, str, 6);
      if (value && trim(value, 3)) {
        file = trim(value, 3) || 0;
      }
      calculate(data, file);
    } else {
      if (null == (file = get(source, layer, 24)) ? 0 : null == (value = get(file, n, 3)) ? 0 : getStyle(value, right, 2, dtick)) {
        /** @type {boolean} */
        toCSS(data).ablatingThisPageview = true;
        calculate(data, 1);
      }
    }
    draw(3, [source.toJSON()]);
    var widget = options.google_ad_client || "";
    options = processOptions(_isObject(options.enable_page_level_ads) ? options.enable_page_level_ads : {});
    var arg = build(new_paths, new model(null, options));
    setTimeoutPathUa(782, function () {
      make(data, widget, source, arg);
    });
  }
  /**
   * @param {number} result
   * @param {number} metric
   * @return {?}
   */
  function getResult(result, metric) {
    if (15 == metric) {
      if (728 <= result) {
        return 728;
      }
      if (468 <= result) {
        return 468;
      }
    } else {
      if (90 == metric) {
        if (200 <= result) {
          return 200;
        }
        if (180 <= result) {
          return 180;
        }
        if (160 <= result) {
          return 160;
        }
        if (120 <= result) {
          return 120;
        }
      }
    }
    return null;
  }
  /**
   * @param {?} ol3map
   * @param {?} gmap
   * @param {string} options
   * @param {?} state
   * @return {undefined}
   */
  function View(ol3map, gmap, options, state) {
    state = void 0 === state ? false : state;
    parent.call(this, ol3map, gmap);
    /** @type {string} */
    this.ja = options;
    this.sb = state;
  }
  /**
   * @param {string} data
   * @return {?}
   */
  function loadXML4IE(data) {
    return function (global) {
      return !!(global.ja & data);
    };
  }
  /**
   * @param {number} options
   * @return {?}
   */
  function construct(options) {
    /** @type {number} */
    var Xmatrix = 0;
    if (options.U) {
      Xmatrix++;
    }
    if (options.M) {
      Xmatrix++;
    }
    if (options.O) {
      Xmatrix++;
    }
    if (3 > Xmatrix) {
      return {
        R: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
      };
    }
    Xmatrix = options.U.split(",");
    var Ymatrix = options.O.split(",");
    options = options.M.split(",");
    if (Xmatrix.length !== Ymatrix.length || Xmatrix.length !== options.length) {
      return {
        R: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
      };
    }
    if (2 < Xmatrix.length) {
      return {
        R: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while you are providing " + (Xmatrix.length + ' parameters. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".')
      };
    }
    /** @type {!Array} */
    var currentMaxTerms = [];
    /** @type {!Array} */
    var item = [];
    /** @type {number} */
    var i = 0;
    for (; i < Xmatrix.length; i++) {
      /** @type {number} */
      var j = Number(Ymatrix[i]);
      if (define(Number, "isNaN").call(Number, j) || 0 === j) {
        return {
          R: "Wrong value '" + Ymatrix[i] + "' for data-matched-content-rows-num."
        };
      }
      currentMaxTerms.push(j);
      /** @type {number} */
      j = Number(options[i]);
      if (define(Number, "isNaN").call(Number, j) || 0 === j) {
        return {
          R: "Wrong value '" + options[i] + "' for data-matched-content-columns-num."
        };
      }
      item.push(j);
    }
    return {
      O: currentMaxTerms,
      M: item,
      Ua: Xmatrix
    };
  }
  /**
   * @param {number} b
   * @return {?}
   */
  function objectExtend(b) {
    return 1200 <= b ? {
      width: 1200,
      height: 600
    } : 850 <= b ? {
      width: b,
      height: Math.floor(.5 * b)
    } : 550 <= b ? {
      width: b,
      height: Math.floor(.6 * b)
    } : 468 <= b ? {
      width: b,
      height: Math.floor(.7 * b)
    } : {
      width: b,
      height: Math.floor(3.44 * b)
    };
  }
  /**
   * @param {?} tag
   * @param {!Object} done
   * @param {string} value
   * @param {number} name
   * @param {number} prefix
   * @param {number} parent
   * @param {number} node
   * @param {number} data
   * @param {number} ownerDocument
   * @param {number} type
   * @param {number} resolvedType
   * @param {number} isMapKey
   * @return {undefined}
   */
  function Element(tag, done, value, name, prefix, parent, node, data, ownerDocument, type, resolvedType, isMapKey) {
    this.u = tag;
    /** @type {!Object} */
    this.ca = done;
    this.ja = void 0 === value ? null : value;
    /** @type {(null|number)} */
    this.g = void 0 === name ? null : name;
    /** @type {(null|number)} */
    this.W = void 0 === prefix ? null : prefix;
    /** @type {(null|number)} */
    this.h = void 0 === parent ? null : parent;
    /** @type {(null|number)} */
    this.j = void 0 === node ? null : node;
    /** @type {(null|number)} */
    this.G = void 0 === data ? null : data;
    /** @type {(null|number)} */
    this.T = void 0 === ownerDocument ? null : ownerDocument;
    /** @type {(null|number)} */
    this.l = void 0 === type ? null : type;
    /** @type {(null|number)} */
    this.m = void 0 === resolvedType ? null : resolvedType;
    /** @type {(null|number)} */
    this.V = void 0 === isMapKey ? null : isMapKey;
    /** @type {null} */
    this.X = this.B = this.A = null;
  }
  /**
   * @param {!Object} o
   * @param {!Object} element
   * @param {!Array} options
   * @return {undefined}
   */
  function update(o, element, options) {
    if (null != o.ja) {
      options.google_responsive_formats = o.ja;
    }
    if (null != o.W) {
      options.google_safe_for_responsive_override = o.W;
    }
    if (null != o.h) {
      if (true === o.h) {
        /** @type {boolean} */
        options.google_full_width_responsive_allowed = true;
      } else {
        /** @type {boolean} */
        options.google_full_width_responsive_allowed = false;
        options.gfwrnwer = o.h;
      }
    }
    if (null != o.j && true !== o.j) {
      options.gfwrnher = o.j;
    }
    var dim = o.m || options.google_ad_width;
    if (null != dim) {
      options.google_resizing_width = dim;
    }
    dim = o.l || options.google_ad_height;
    if (null != dim) {
      options.google_resizing_height = dim;
    }
    dim = o.size().g(element);
    var value = o.size().height();
    if (!options.google_ad_resize) {
      options.google_ad_width = dim;
      options.google_ad_height = value;
      var paper = o.size();
      element = paper.g(element) + "x" + paper.height();
      /** @type {!Object} */
      options.google_ad_format = element;
      options.google_responsive_auto_format = o.u;
      if (null != o.g) {
        options.armr = o.g;
      }
      /** @type {boolean} */
      options.google_ad_resizable = true;
      /** @type {number} */
      options.google_override_format = 1;
      /** @type {number} */
      options.google_loader_features_used = 128;
      if (true === o.h) {
        options.gfwrnh = o.size().height() + "px";
      }
    }
    if (null != o.G) {
      options.gfwroml = o.G;
    }
    if (null != o.T) {
      options.gfwromr = o.T;
    }
    if (null != o.l) {
      options.gfwroh = o.l;
    }
    if (null != o.m) {
      options.gfwrow = o.m;
    }
    if (null != o.V) {
      options.gfwroz = o.V;
    }
    if (null != o.A) {
      options.gml = o.A;
    }
    if (null != o.B) {
      options.gmr = o.B;
    }
    if (null != o.X) {
      options.gzi = o.X;
    }
    element = _(window) || window;
    if (reset(element.location, "google_responsive_dummy_ad") && (search([1, 2, 3, 4, 5, 6, 7, 8], o.u) || 1 === o.g) && 2 !== o.g) {
      /** @type {string} */
      o = JSON.stringify({
        googMsgType: "adpnt",
        key_value: [{
          key: "qid",
          value: "DUMMY_AD"
        }]
      });
      /** @type {string} */
      options.dash = "<" + elm + ">window.top.postMessage('" + o + "', '*');\n          </" + elm + '>\n          <div id="dummyAd" style="width:' + dim + "px;height:" + value + 'px;\n            background:#ddd;border:3px solid #f00;box-sizing:border-box;\n            color:#000;">\n            <p>Requested size:' + dim + "x" + value + "</p>\n            <p>Rendered size:" + dim + "x" + value + "</p>\n          </div>";
    }
  }
  /**
   * @param {?} url
   * @param {?} data
   * @return {undefined}
   */
  function Calendar(url, data) {
    parent.call(this, url, data);
  }
  /**
   * @param {number} params
   * @param {!Array} data
   * @return {?}
   */
  function activate(params, data) {
    getString(params, data);
    if ("pedestal" == data.google_content_recommendation_ui_type) {
      return new Element(9, new Calendar(params, Math.floor(params * data.google_phwr)));
    }
    var da = detectFromUA();
    if (468 > params) {
      if (da) {
        /** @type {number} */
        da = params - 8 - 8;
        /** @type {number} */
        da = Math.floor(da / 1.91 + 70) + Math.floor(11 * (da * iconContainerStyle.mobile_banner_image_sidebyside + BaseTarget.mobile_banner_image_sidebyside) + 96);
        params = {
          ea: params,
          da: da,
          M: 1,
          O: 12,
          U: "mobile_banner_image_sidebyside"
        };
      } else {
        params = objectExtend(params);
        params = {
          ea: params.width,
          da: params.height,
          M: 1,
          O: 13,
          U: "image_sidebyside"
        };
      }
    } else {
      params = objectExtend(params);
      params = {
        ea: params.width,
        da: params.height,
        M: 4,
        O: 2,
        U: "image_stacked"
      };
    }
    getTitle(data, params);
    return new Element(9, new Calendar(params.ea, params.da));
  }
  /**
   * @param {number} params
   * @param {!Array} data
   * @return {?}
   */
  function createInstance(params, data) {
    getString(params, data);
    var item = construct({
      O: data.google_content_recommendation_rows_num,
      M: data.google_content_recommendation_columns_num,
      U: data.google_content_recommendation_ui_type
    });
    if (item.R) {
      params = {
        ea: 0,
        da: 0,
        M: 0,
        O: 0,
        U: "image_stacked",
        R: item.R
      };
    } else {
      /** @type {number} */
      var i = 2 === item.Ua.length && 468 <= params ? 1 : 0;
      var prop = item.Ua[i];
      prop = 0 === prop.indexOf("pub_control_") ? prop : "pub_control_" + prop;
      var b = state[prop];
      var a = item.M[i];
      for (; params / a < b && 1 < a;) {
        a--;
      }
      b = a;
      item = item.O[i];
      /** @type {number} */
      i = Math.floor(((params - 8 * b - 8) / b * iconContainerStyle[prop] + BaseTarget[prop]) * item + 8 * item + 8);
      /** @type {({Cb: string, height: number, width: number}|{height: number, width: number})} */
      params = 1500 < params ? {
        width: 0,
        height: 0,
        Cb: "Calculated slot width is too large: " + params
      } : 1500 < i ? {
        width: 0,
        height: 0,
        Cb: "Calculated slot height is too large: " + i
      } : {
        width: params,
        height: i
      };
      params = {
        ea: params.width,
        da: params.height,
        M: b,
        O: item,
        U: prop
      };
    }
    if (params.R) {
      throw new Exception(params.R);
    }
    getTitle(data, params);
    return new Element(9, new Calendar(params.ea, params.da));
  }
  /**
   * @param {number} key
   * @param {!Array} params
   * @return {undefined}
   */
  function getString(key, params) {
    if (0 >= key) {
      throw new Exception("Invalid responsive width from Matched Content slot " + params.google_ad_slot + ": " + key + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
    }
  }
  /**
   * @param {!Array} msg
   * @param {number} options
   * @return {undefined}
   */
  function getTitle(msg, options) {
    msg.google_content_recommendation_ui_type = options.U;
    msg.google_content_recommendation_columns_num = options.M;
    msg.google_content_recommendation_rows_num = options.O;
  }
  /**
   * @param {?} error
   * @param {?} data
   * @return {undefined}
   */
  function Event(error, data) {
    parent.call(this, error, data);
  }
  /**
   * @param {?} event
   * @param {?} uiSourceCode
   * @return {undefined}
   */
  function Message(event, uiSourceCode) {
    parent.call(this, event, uiSourceCode);
  }
  /**
   * @param {number} value
   * @param {?} index
   * @param {!Object} target
   * @param {string} x
   * @param {!Object} s
   * @return {?}
   */
  function create(value, index, target, x, s) {
    var i = s.google_ad_layout || "image-top";
    if ("in-article" == i) {
      /** @type {number} */
      var t = value;
      if ("false" == s.google_full_width_responsive) {
        /** @type {number} */
        value = t;
      } else {
        if (value = bind(index, target, t, .2, s), true !== value) {
          s.gfwrnwer = value;
          /** @type {number} */
          value = t;
        } else {
          if (value = defaultValue(index)) {
            if (s.google_full_width_responsive_allowed = true, target.parentElement) {
              b: {
                /** @type {!Object} */
                t = target;
                /** @type {number} */
                var ii = 0;
                for (; 100 > ii && t.parentElement; ++ii) {
                  var data = t.parentElement.childNodes;
                  /** @type {number} */
                  var a = 0;
                  for (; a < data.length; ++a) {
                    var i = data[a];
                    if (i != t && anonymous(index, i)) {
                      break b;
                    }
                  }
                  t = t.parentElement;
                  /** @type {string} */
                  t.style.width = "100%";
                  /** @type {string} */
                  t.style.height = "auto";
                }
              }
              render(index, target);
            } else {
              /** @type {number} */
              value = t;
            }
          } else {
            /** @type {number} */
            value = t;
          }
        }
      }
    }
    if (250 > value) {
      throw new Exception("Fluid responsive ads must be at least 250px wide: availableWidth=" + value);
    }
    /** @type {number} */
    value = Math.min(1200, Math.floor(value));
    if (x && "in-article" != i) {
      /** @type {number} */
      i = Math.ceil(x);
      if (50 > i) {
        throw new Exception("Fluid responsive ads must be at least 50px tall: height=" + i);
      }
      return new Element(11, new parent(value, i));
    }
    if ("in-article" != i && (x = s.google_ad_layout_key)) {
      /** @type {string} */
      i = "" + x;
      /** @type {number} */
      index = Math.pow(10, 3);
      if (x = (target = i.match(/([+-][0-9a-z]+)/g)) && target.length) {
        /** @type {!Array} */
        s = [];
        /** @type {number} */
        t = 0;
        for (; t < x; t++) {
          s.push(parseInt(target[t], 36) / index);
        }
        /** @type {!Array} */
        index = s;
      } else {
        /** @type {null} */
        index = null;
      }
      if (!index) {
        throw new Exception("Invalid data-ad-layout-key value: " + i);
      }
      /** @type {number} */
      i = (value + -725) / 1E3;
      /** @type {number} */
      target = 0;
      /** @type {number} */
      x = 1;
      /** @type {number} */
      s = index.length;
      /** @type {number} */
      t = 0;
      for (; t < s; t++) {
        /** @type {number} */
        target = target + index[t] * x;
        /** @type {number} */
        x = x * i;
      }
      /** @type {number} */
      i = Math.ceil(1E3 * target - -725 + 10);
      if (isNaN(i)) {
        throw new Exception("Invalid height: height=" + i);
      }
      if (50 > i) {
        throw new Exception("Fluid responsive ads must be at least 50px tall: height=" + i);
      }
      if (1200 < i) {
        throw new Exception("Fluid responsive ads must be at most 1200px tall: height=" + i);
      }
      return new Element(11, new parent(value, i));
    }
    x = sortedCols[i];
    if (!x) {
      throw new Exception("Invalid data-ad-layout value: " + i);
    }
    target = query(target, index);
    index = defaultValue(index);
    /** @type {number} */
    index = "in-article" !== i || target || value !== index ? Math.ceil(x(value)) : Math.ceil(1.25 * x(value));
    return new Element(11, "in-article" == i ? new Message(value, index) : new parent(value, index));
  }
  /**
   * @param {string} target
   * @return {?}
   */
  function negate(target) {
    return function (result) {
      /** @type {number} */
      var onEvent = target.length - 1;
      for (; 0 <= onEvent; --onEvent) {
        if (!target[onEvent](result)) {
          return false;
        }
      }
      return true;
    };
  }
  /**
   * @param {?} cb
   * @param {?} matcher
   * @return {?}
   */
  function findIndex(cb, matcher) {
    /** @type {!Array<?>} */
    var encryptorAesTestInputs = charListNotLatin.slice(0);
    /** @type {number} */
    var patchLen = encryptorAesTestInputs.length;
    /** @type {null} */
    var ret = null;
    /** @type {number} */
    var i = 0;
    for (; i < patchLen; ++i) {
      var input = encryptorAesTestInputs[i];
      if (cb(input)) {
        if (!matcher || matcher(input)) {
          return input;
        }
        if (null === ret) {
          ret = input;
        }
      }
    }
    return ret;
  }
  /**
   * @param {boolean} from
   * @param {number} name
   * @param {!Object} data
   * @param {!Object} options
   * @param {!Array} key
   * @return {?}
   */
  function listen(from, name, data, options, key) {
    if ("false" == key.google_full_width_responsive) {
      data = {
        D: from,
        F: 1
      };
    } else {
      if ("autorelaxed" == name && key.google_full_width_responsive || setCookie(name) || key.google_ad_resize) {
        name = adjust(from, data, options, key);
        /** @type {({D: ??, F: boolean}|{D: boolean, F: ?})} */
        data = true !== name ? {
          D: from,
          F: name
        } : {
          D: defaultValue(data) || from,
          F: true
        };
      } else {
        data = {
          D: from,
          F: 2
        };
      }
    }
    /** @type {number} */
    name = data.F;
    return true !== name ? {
      D: from,
      F: name
    } : options.parentElement ? {
      D: data.D,
      F: name
    } : {
      D: from,
      F: name
    };
  }
  /**
   * @param {?} fn
   * @param {string} i
   * @param {!Object} options
   * @param {!Object} el
   * @param {!Array} scope
   * @return {?}
   */
  function open(fn, i, options, el, scope) {
    var f = setTimeoutPathUa(247, function () {
      return listen(fn, i, options, el, scope);
    });
    var name = f.D;
    f = f.F;
    /** @type {boolean} */
    var hash = true === f;
    var h = height(el.style.width);
    var parent = height(el.style.height);
    var result = load(name, i, options, el, scope, hash);
    name = result.ba;
    hash = result.Z;
    var index = result.va;
    result = result.Ta;
    var obj = omitDeep(i, index);
    var ret;
    /** @type {string} */
    var opt_by = (ret = attr(el, options, "marginLeft", height)) ? ret + "px" : "";
    /** @type {string} */
    var tprefix = (ret = attr(el, options, "marginRight", height)) ? ret + "px" : "";
    ret = attr(el, options, "zIndex") || "";
    return new Element(obj, name, index, null, result, f, hash, opt_by, tprefix, parent, h, ret);
  }
  /**
   * @param {number} value
   * @return {?}
   */
  function setCookie(value) {
    return "auto" == value || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(value);
  }
  /**
   * @param {!Object} name
   * @param {string} value
   * @param {!Object} options
   * @param {?} data
   * @param {!Array} params
   * @param {boolean} h
   * @return {?}
   */
  function load(name, value, options, data, params, h) {
    value = "auto" == value ? .25 >= name / Math.min(1200, defaultValue(options)) ? 4 : 3 : _isArray(value);
    /** @type {boolean} */
    var node = false;
    /** @type {boolean} */
    var context = false;
    /** @type {boolean} */
    var code = 488 > defaultValue(options);
    if (code) {
      var layout = scrollTo(data, options);
      var result = query(data, options);
      node = !result && layout;
      context = result && layout;
    }
    /** @type {!Array} */
    result = [setAttribute(name), loadXML4IE(value)];
    result.push(post(code, options, data, context));
    if (null != params.google_max_responsive_height) {
      result.push(getOffset(params.google_max_responsive_height));
    }
    /** @type {!Array} */
    code = [function (state) {
      return !state.sb;
    }];
    if (node || context) {
      node = launch(options, data);
      code.push(getOffset(node));
    }
    var index = findIndex(negate(result), negate(code));
    if (!index) {
      throw new Exception("No slot size for availableWidth=" + name);
    }
    result = setTimeoutPathUa(248, function () {
      var arg;
      a: {
        if (h) {
          if (params.gfwrnh && (arg = height(params.gfwrnh))) {
            arg = {
              ba: new Event(name, arg),
              Z: true
            };
            break a;
          }
          /** @type {number} */
          arg = name / 1.2;
          var m = Math;
          /** @type {function(...?): number} */
          var c = m.min;
          if (params.google_resizing_allowed || "true" == params.google_full_width_responsive) {
            /** @type {number} */
            var d = Infinity;
          } else {
            d = data;
            /** @type {number} */
            var value = Infinity;
            do {
              var result = attr(d, options, "height", height);
              if (result) {
                /** @type {number} */
                value = Math.min(value, result);
              }
              if (result = attr(d, options, "maxHeight", height)) {
                /** @type {number} */
                value = Math.min(value, result);
              }
            } while ((d = d.parentElement) && "HTML" != d.tagName);
            /** @type {number} */
            d = value;
          }
          /** @type {number} */
          m = c.call(m, arg, d);
          if (m < .5 * arg || 100 > m) {
            /** @type {number} */
            m = arg;
          }
          arg = {
            ba: new Event(name, Math.floor(m)),
            Z: m < arg ? 102 : true
          };
        } else {
          arg = {
            ba: index,
            Z: 100
          };
        }
      }
      return arg;
    });
    node = result.ba;
    result = result.Z;
    return "in-article" === params.google_ad_layout && options.location && "#hffwroe2etoq" == options.location.hash ? {
      ba: follow(name, options, data, node, params),
      Z: false,
      va: value,
      Ta: layout
    } : {
      ba: node,
      Z: result,
      va: value,
      Ta: layout
    };
  }
  /**
   * @param {string} value
   * @param {?} obj
   * @return {?}
   */
  function omitDeep(value, obj) {
    if ("auto" == value) {
      return 1;
    }
    switch (obj) {
      case 2:
        return 2;
      case 1:
        return 3;
      case 4:
        return 4;
      case 3:
        return 5;
      case 6:
        return 6;
      case 5:
        return 7;
      case 7:
        return 8;
    }
    throw Error("bad mask");
  }
  /**
   * @param {boolean} el
   * @param {!Object} options
   * @param {!Object} content
   * @param {?} target
   * @param {!Object} req
   * @return {?}
   */
  function follow(el, options, content, target, req) {
    var i = req.google_ad_height || attr(content, options, "height", height);
    options = create(el, options, content, i, req).size();
    return options.L * options.height() > el * target.height() ? new View(options.L, options.height(), 1) : target;
  }
  /**
   * @param {string} result
   * @param {string} options
   * @param {(Object|null|string)} obj
   * @param {(!Function|RegExp|null|string)} trace
   * @param {!Array} callback
   * @return {?}
   */
  function calc(result, options, obj, trace, callback) {
    var value;
    if (value = defaultValue(options)) {
      if (488 > defaultValue(options)) {
        if (options.innerHeight >= options.innerWidth) {
          /** @type {boolean} */
          callback.google_full_width_responsive_allowed = true;
          render(options, obj);
          value = {
            D: value,
            F: true
          };
        } else {
          value = {
            D: result,
            F: 5
          };
        }
      } else {
        value = {
          D: result,
          F: 4
        };
      }
    } else {
      value = {
        D: result,
        F: 10
      };
    }
    /** @type {({D: ??, F: boolean}|{D: string, F: number})} */
    var f = value;
    value = f.D;
    /** @type {(boolean|number)} */
    f = f.F;
    if (true !== f || result == value) {
      return new Element(12, new parent(result, trace), null, null, true, f, 100);
    }
    result = load(value, "auto", options, obj, callback, true);
    return new Element(1, result.ba, result.va, 2, true, f, result.Z);
  }
  /**
   * @param {!Object} options
   * @param {!Function} data
   * @return {?}
   */
  function register(options, data) {
    var value = data.google_ad_format;
    if ("autorelaxed" == value) {
      a: {
        if ("pedestal" != data.google_content_recommendation_ui_type) {
          options = $(docType);
          value = options.next();
          for (; !value.done; value = options.next()) {
            if (null != data[value.value]) {
              /** @type {boolean} */
              data = true;
              break a;
            }
          }
        }
        /** @type {boolean} */
        data = false;
      }
      return data ? 9 : 5;
    }
    if (setCookie(value)) {
      return 1;
    }
    if ("link" === value) {
      return 4;
    }
    if ("fluid" == value) {
      return "in-article" !== data.google_ad_layout || !options.location || "#hffwroe2etop" != options.location.hash && "#hffwroe2etoq" != options.location.hash ? 8 : (getVariablesInAllScopes(data), 1);
    }
    if (27 === data.google_reactive_ad_format) {
      return getVariablesInAllScopes(data), 1;
    }
  }
  /**
   * @param {number} t
   * @param {!Object} input
   * @param {!Array} options
   * @param {!Array} value
   * @param {?} callback
   * @return {undefined}
   */
  function runTest(t, input, options, value, callback) {
    callback = input.offsetWidth || (options.google_ad_resize || (void 0 === callback ? false : callback)) && attr(input, value, "width", height) || options.google_ad_width || 0;
    if (4 === t) {
      /** @type {string} */
      options.google_ad_format = "auto";
      /** @type {number} */
      t = 1;
    }
    var result = (result = ready(t, callback, input, options, value)) ? result : open(callback, options.google_ad_format, value, input, options);
    result.size().h(value, options, input);
    update(result, callback, options);
    if (1 != t) {
      t = result.size().height();
      /** @type {string} */
      input.style.height = t + "px";
    }
  }
  /**
   * @param {boolean} i
   * @param {boolean} element
   * @param {!Object} value
   * @param {!Array} options
   * @param {!Array} type
   * @return {?}
   */
  function ready(i, element, value, options, type) {
    var p = options.google_ad_height || attr(value, type, "height", height);
    switch (i) {
      case 5:
        return p = setTimeoutPathUa(247, function () {
          return listen(element, options.google_ad_format, type, value, options);
        }), i = p.D, p = p.F, true === p && element != i && render(type, value), true === p ? options.google_full_width_responsive_allowed = true : (options.google_full_width_responsive_allowed = false, options.gfwrnwer = p), activate(i, options);
      case 9:
        return createInstance(element, options);
      case 8:
        return create(element, type, value, p, options);
      case 10:
        return calc(element, type, value, p, options);
    }
  }
  /**
   * @param {!Function} scope
   * @return {undefined}
   */
  function getVariablesInAllScopes(scope) {
    /** @type {string} */
    scope.google_ad_format = "auto";
    /** @type {number} */
    scope.armr = 3;
  }
  /**
   * @param {!Object} value
   * @param {!Object} el
   * @return {?}
   */
  function getComputedStyle(value, el) {
    var width = _(el);
    if (width) {
      width = defaultValue(width);
      var computedStyle = find(value, el) || {};
      var currentDirection = computedStyle.direction;
      if ("0px" === computedStyle.width && "none" !== computedStyle.cssFloat) {
        return -1;
      }
      if ("ltr" === currentDirection && width) {
        return Math.floor(Math.min(1200, width - value.getBoundingClientRect().left));
      }
      if ("rtl" === currentDirection && width) {
        return value = el.document.body.getBoundingClientRect().right - value.getBoundingClientRect().right, Math.floor(Math.min(1200, width - value - Math.floor((width - el.document.body.clientWidth) / 2)));
      }
    }
    return -1;
  }
  /**
   * @param {!Object} a
   * @return {?}
   */
  function showData(a) {
    return (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null;
  }
  /**
   * @param {!Object} data
   * @return {?}
   */
  function isEmail(data) {
    if (data = data.innerText || data.innerHTML) {
      if (data = data.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (data = data.match(/^\x3c!--+(.*?)(?:--+>)?$/) || data.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp("google_ad_client").test(data[1])) {
        return data[1];
      }
    }
    return null;
  }
  /**
   * @param {string} val
   * @return {?}
   */
  function convertType(val) {
    switch (val) {
      case "true":
        return true;
      case "false":
        return false;
      case "null":
        return null;
      case "undefined":
        break;
      default:
        try {
          /** @type {(Array<string>|null)} */
          var b$jscomp$415 = val.match(/^(?:'(.*)'|"(.*)")$/);
          if (b$jscomp$415) {
            return b$jscomp$415[1] || b$jscomp$415[2] || "";
          }
          if (/^[-+]?\d*(\.\d+)?$/.test(val)) {
            /** @type {number} */
            var n = parseFloat(val);
            return n === n ? n : void 0;
          }
        } catch (d$jscomp$186) {
        }
    }
  }
  /**
   * @param {!Object} context
   * @return {?}
   */
  function detect(context) {
    if (context.google_ad_client) {
      return String(context.google_ad_client);
    }
    var data;
    var o;
    var m;
    var type;
    var autoReview;
    if (null != (type = null != (m = null == (data = log(context).head_tag_slot_vars) ? void 0 : data.google_ad_client) ? m : null == (o = context.document.querySelector(".adsbygoogle[data-ad-client]")) ? void 0 : o.getAttribute("data-ad-client"))) {
      data = type;
    } else {
      b: {
        data = context.document.getElementsByTagName("script");
        context = context.navigator && context.navigator.userAgent || "";
        /** @type {function(!Object): ?} */
        context = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube", "i").test(context) || /i(phone|pad|pod)/i.test(context) && /applewebkit/i.test(context) && !/version|safari/i.test(context) && !isSafari() ? showData : isEmail;
        /** @type {number} */
        o = data.length - 1;
        for (; 0 <= o; o--) {
          if (m = data[o], !m.google_parsed_script_for_pub_code && (m.google_parsed_script_for_pub_code = true, m = context(m))) {
            data = m;
            break b;
          }
        }
        /** @type {null} */
        data = null;
      }
      if (data) {
        /** @type {!RegExp} */
        context = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
        o = {};
        for (; m = context.exec(data);) {
          o[m[1]] = convertType(m[2]);
        }
        data = o.google_ad_client ? o.google_ad_client : "";
      } else {
        /** @type {string} */
        data = "";
      }
    }
    return null != (autoReview = data) ? autoReview : "";
  }
  /**
   * @param {!Window} global
   * @param {!Function} cb
   * @return {?}
   */
  function task(global, cb) {
    /** @type {number} */
    var c$jscomp$282 = 10;
    return promise(function (g1) {
      return 0 >= c$jscomp$282 ? g1.return(global.Promise.reject()) : cb() ? g1.return(global.Promise.resolve()) : g1.return(new global.Promise(function (saveNotifs, negater) {
        var intervalHandler = global.setInterval(function () {
          if (--c$jscomp$282) {
            if (cb()) {
              global.clearInterval(intervalHandler);
              saveNotifs();
            }
          } else {
            global.clearInterval(intervalHandler);
            negater();
          }
        }, 200);
      }));
    });
  }
  /**
   * @param {!Object} status
   * @return {undefined}
   */
  function settings(status) {
    this.s = isNaN() || window;
    this.h = null != status ? status : new Frame(100, 100, true);
    this.g = record(translate(), 33, function () {
      var value = makeUnique(form);
      return {
        sd: value,
        ssp: 0 < value && random() < 1 / value,
        pc: null,
        wpc: null,
        cu: null,
        le: [],
        lgdp: [],
        psi: null
      };
    });
  }
  /**
   * @param {!Object} self
   * @param {?} x
   * @return {?}
   */
  function triggerEvent(self, x) {
    var result = new NineSlice;
    var data = handleMessage(self);
    result = callback(result, 1, data, 0);
    data = minify(self);
    result = callback(result, 2, keys(data), "");
    result = callback(result, 3, self.g.sd, 0);
    return callback(result, 7, Math.round(x || self.s.performance.now()), 0);
  }
  /**
   * @param {!Object} self
   * @return {?}
   */
  function handleMessage(self) {
    var PC_id = self.g.pc;
    return null !== PC_id && 0 !== PC_id ? PC_id : self.g.pc = property(self.s);
  }
  /**
   * @param {!Object} options
   * @return {?}
   */
  function minify(options) {
    var mask = options.g.wpc;
    return null !== mask && "" !== mask ? mask : options.g.wpc = detect(options.s);
  }
  /**
   * @param {!Object} self
   * @return {?}
   */
  function startServer(self) {
    return promise(function (name) {
      return string(name, task(self.s, function () {
        return !(!handleMessage(self) || !minify(self));
      }), 0);
    });
  }
  /**
   * @param {!Function} callback
   * @return {undefined}
   */
  function runner(callback) {
    var json = require(settings);
    if (json.j) {
      setTimeoutPathUa(1178, function () {
        var msg = json.m;
        callback(msg);
        json.g.psi = msg.toJSON();
      });
    }
  }
  /**
   * @param {string} url
   * @return {?}
   */
  function transform(url) {
    var self = require(settings);
    var timer;
    var value;
    var i;
    var result;
    var doc;
    var s;
    var d;
    var peg$c186;
    return promise(function (cell) {
      if (1 == cell.g) {
        if (!self.j || define(self.g.le, "includes").call(self.g.le, 1)) {
          return cell.return();
        }
        self.g.le.push(1);
        timer = self.s.performance.now();
        return string(cell, startServer(self), 2);
      }
      value = resolved(crawl(fetchData(new ReturnStatement, url), max(_max(new Animation, jQuery(self.s).scrollWidth), jQuery(self.s).scrollHeight)), max(_max(new Animation, defaultValue(self.s)), jQuery(self.s).clientHeight));
      i = new Block;
      if (indexOf(swatchConfig)) {
        id(value, self.l);
        min(i, self.l);
      } else {
        id(value, null == (result = self.s) ? void 0 : null == (doc = result.document) ? void 0 : doc.URL);
        min(i, null == (s = self.s) ? void 0 : null == (d = s.document) ? void 0 : d.URL);
      }
      peg$c186 = fork(self.s);
      if (0 !== peg$c186) {
        _has(value, peg$fail(peg$c186));
      }
      emit(self.h, doIt(triggerEvent(self, timer), value));
      moveTo(self.h, self.s, function () {
        try {
          var l;
          if (null != (null == (l = self.g) ? void 0 : l.psi)) {
            var result = testcase(hello, crx2ffwarn(self.g.psi));
            escapeCodeValue(i, 2, result);
          }
        } catch (y$jscomp$66) {
        }
        l = self.h;
        result = triggerEvent(self);
        result = color(result, 8, progress, i);
        emit(l, result);
      });
      /** @type {number} */
      cell.g = 0;
    });
  }
  /**
   * @param {!Object} self
   * @param {!Array} options
   * @param {!Object} doc
   * @return {?}
   */
  function save(self, options, doc) {
    var input;
    return promise(function (cell) {
      if (1 == cell.g) {
        if (!self.j || !doc.length || define(self.g.lgdp, "includes").call(self.g.lgdp, Number(options))) {
          return cell.return();
        }
        self.g.lgdp.push(Number(options));
        input = self.s.performance.now();
        return string(cell, startServer(self), 2);
      }
      var last = self.h;
      var result = triggerEvent(self, input);
      var value = new Field;
      value = select(value, 1, options);
      value = next(value, 2, doc);
      result = color(result, 9, progress, value);
      emit(last, result);
      /** @type {number} */
      cell.g = 0;
    });
  }
  /**
   * @return {?}
   */
  function _init() {
    /** @type {!Window} */
    var w = window;
    if ("on" !== win.google_adtest && "on" !== win.google_adbreak_test && !define(w.location.host, "endsWith").call(w.location.host, "h5games.usercontent.goog")) {
      return [];
    }
    var currMetaTag;
    var functionCode;
    return (null == (currMetaTag = w.document.querySelector('meta[name="h5-games-eids"]')) ? void 0 : null == (functionCode = currMetaTag.getAttribute("content")) ? void 0 : functionCode.split(",").map(function (part) {
      return Math.floor(Number(part));
    }).filter(function (yscore) {
      return !isNaN(yscore) && 0 < yscore;
    })) || [];
  }
  /**
   * @param {!Object} elem
   * @param {(RegExp|null|string)} test
   * @return {?}
   */
  function equal(elem, test) {
    return elem instanceof HTMLScriptElement && test.test(elem.src) ? 0 : 1;
  }
  /**
   * @param {(RegExp|null|string)} t
   * @return {?}
   */
  function matches(t) {
    var content = globalWindow.document;
    if (content.currentScript) {
      return equal(content.currentScript, t);
    }
    content = $(content.scripts);
    var nextOther = content.next();
    for (; !nextOther.done; nextOther = content.next()) {
      if (0 === equal(nextOther.value, t)) {
        return 0;
      }
    }
    return 1;
  }
  /**
   * @param {string} obj
   * @param {!Object} s
   * @return {?}
   */
  function pad(obj, s) {
    var quux = {};
    var a = {};
    var obj = {};
    return obj[3] = (quux[55] = function () {
      return 0 === obj;
    }, quux[23] = function (minWorkers) {
      return setData(globalWindow, Number(minWorkers));
    }, quux[24] = function (code) {
      return lint(Number(code));
    }, quux[61] = function () {
      return expect(s, 6);
    }, quux[63] = function () {
      return expect(s, 6) || ".google.ch" === format(s, 8);
    }, quux), obj[4] = {}, obj[5] = (a[6] = function () {
      return format(s, 15);
    }, a), obj;
  }
  /**
   * @param {!Array} value
   * @return {?}
   */
  function isBlank(value) {
    value = void 0 === value ? win : value;
    return value.ggeac || (value.ggeac = {});
  }
  /**
   * @return {undefined}
   */
  function onKeyDown() {
    var line = require(_date).l(src.g, src.defaultValue);
    var document = globalWindow.document;
    if (line.length && document.head) {
      line = $(line);
      var child = line.next();
      for (; !child.done; child = line.next()) {
        if ((child = child.value) && document.head) {
          var el = createElement("META");
          document.head.appendChild(el);
          /** @type {string} */
          el.httpEquiv = "origin-trial";
          el.content = child;
        }
      }
    }
  }
  /**
   * @param {!Object} type
   * @param {string} v
   * @return {?}
   */
  function typeOf(type, v) {
    try {
      var types = type.split(".");
      type = win;
      /** @type {number} */
      var j = 0;
      var obj;
      for (; null != type && j < types.length; j++) {
        obj = type;
        type = type[types[j]];
        if ("function" === typeof type) {
          type = obj[types[j]]();
        }
      }
      var val = type;
      if (typeof val === v) {
        return val;
      }
    } catch (g$jscomp$53) {
    }
  }
  /**
   * @param {!Function} service
   * @param {string} endpoint
   * @param {string} options
   * @param {!Object} key
   * @return {undefined}
   */
  function Connection(service, endpoint, options, key) {
    var resizedObj = this;
    /** @type {!Object} */
    var newElKey = void 0 === key ? {} : key;
    var oa = void 0 === newElKey.oa ? false : newElKey.oa;
    key = void 0 === newElKey.zb ? [] : newElKey.zb;
    newElKey = void 0 === newElKey.ia ? {} : newElKey.ia;
    /** @type {string} */
    this.I = options;
    this.j = service.slice();
    this.m = {};
    this.oa = oa;
    this.ia = newElKey;
    service = {};
    this.g = (service[endpoint] = [], service[4] = [], service);
    this.h = {};
    this.l = {};
    if (endpoint = end()) {
      each(endpoint.split(",") || [], function (i) {
        if (i = Number(i)) {
          /** @type {boolean} */
          resizedObj.h[i] = true;
        }
      });
    }
    each(key, function (i) {
      /** @type {boolean} */
      resizedObj.h[i] = true;
    });
  }
  /**
   * @param {!Object} data
   * @param {number} value
   * @param {number} callback
   * @return {?}
   */
  function tick(data, value, callback) {
    /** @type {!Array} */
    var resultBaseInfo = [];
    var attValue = clone(data.j, value);
    var isUriEncoded;
    if (isUriEncoded = 9 !== value) {
      if (data.m[value]) {
        /** @type {boolean} */
        isUriEncoded = true;
      } else {
        /** @type {boolean} */
        data.m[value] = true;
        /** @type {boolean} */
        isUriEncoded = false;
      }
    }
    if (isUriEncoded) {
      return done(data.I, value, callback, resultBaseInfo, [], 4), resultBaseInfo;
    }
    if (!attValue.length) {
      return done(data.I, value, callback, resultBaseInfo, [], 3), resultBaseInfo;
    }
    var index = search(domain, value);
    /** @type {!Array} */
    var config = [];
    each(attValue, function (value) {
      var options = new Options;
      var child = remove(data, value, callback, options);
      if (child) {
        if (0 !== pop(options, user)) {
          config.push(options);
        }
        options = child.getId();
        resultBaseInfo.push(options);
        highlight(data, options, index ? 4 : callback);
        if (0 !== resolve(value, 13)) {
          var item = data.l[String(resolve(value, 13))] || void 0;
          if (void 0 !== item && item !== options) {
            item = data.I;
            var result = data.l[String(resolve(value, 13))];
            value = resolve(value, 13);
            if (item.j) {
              var s = new Stats;
              result = escapeStringInfo(s, 1, result);
              result = escapeStringInfo(result, 2, options);
              value = escapeStringInfo(result, 3, assign(value));
              result = new Variable;
              value = color(result, 8, summary, value);
              concat(item.h, reject(item, value));
            }
          } else {
            data.l[String(resolve(value, 13))] = options;
          }
        }
        if (child = stringify(child, args, 2)) {
          if (index) {
            handle(child, list(), data.I, options);
          } else {
            handle(child, [callback], data.I, options);
          }
        }
      }
    });
    done(data.I, value, callback, resultBaseInfo, config, 1);
    return resultBaseInfo;
  }
  /**
   * @param {!Object} tree
   * @param {number} value
   * @param {number} i
   * @return {undefined}
   */
  function highlight(tree, value, i) {
    if (!tree.g[i]) {
      /** @type {!Array} */
      tree.g[i] = [];
    }
    tree = tree.g[i];
    if (!search(tree, value)) {
      tree.push(value);
    }
  }
  /**
   * @param {!Object} options
   * @param {string} event
   * @return {undefined}
   */
  function resume(options, event) {
    options.j.push.apply(options.j, toArray(slice(when(event, function (name) {
      return new store(name);
    }), function (key) {
      return !search(domain, resolve(key, 1));
    })));
  }
  /**
   * @param {!Object} element
   * @param {!Array} data
   * @param {number} name
   * @param {!Array} e
   * @return {?}
   */
  function remove(element, data, name, e) {
    var c = require(clock).H;
    if (!clearServices(get(data, position, 3), c)) {
      return null;
    }
    var b = stringify(data, options, 2);
    var value = resolve(data, 6);
    if (value) {
      onExit(e, 1, user, assign(value));
      b = c[4];
      switch (name) {
        case 2:
          var f = b[8];
          break;
        case 1:
          f = b[7];
      }
      name = void 0;
      if (f) {
        try {
          name = f(value);
          callback(e, 3, name, 0);
        } catch (k$jscomp$23) {
        }
      }
      return (data = getState(data, name)) ? contains(element, [data], 1) : null;
    }
    if (value = resolve(data, 10)) {
      onExit(e, 2, user, assign(value));
      /** @type {null} */
      f = null;
      switch (name) {
        case 1:
          f = c[4][9];
          break;
        case 2:
          f = c[4][10];
          break;
        default:
          return null;
      }
      name = f ? f(String(value)) : void 0;
      if (void 0 === name && 1 === resolve(data, 11)) {
        return null;
      }
      if (void 0 !== name) {
        callback(e, 3, name, 0);
      }
      return (data = getState(data, name)) ? contains(element, [data], 1) : null;
    }
    e = c ? slice(b, function (data) {
      return clearServices(get(data, position, 3), c);
    }) : b;
    if (!e.length) {
      return null;
    }
    /** @type {number} */
    name = e.length * parseInt(join(data, 1), 0);
    return (data = resolve(data, 4)) ? _isMouseEnterOrLeave(element, data, name, e) : contains(element, e, name / 1E3);
  }
  /**
   * @param {!Object} root
   * @param {!Array} k
   * @param {number} e
   * @param {boolean} obj
   * @return {?}
   */
  function _isMouseEnterOrLeave(root, k, e, obj) {
    var c = null != root.ia[k] ? root.ia[k] : 1E3;
    if (0 >= c) {
      return null;
    }
    obj = contains(root, obj, e / c);
    /** @type {number} */
    root.ia[k] = obj ? 0 : c - e;
    return obj;
  }
  /**
   * @param {!Object} options
   * @param {boolean} item
   * @param {number} id
   * @return {?}
   */
  function contains(options, item, id) {
    var h = options.h;
    var mime = is(item, function (sortedAccount) {
      return !!h[sortedAccount.getId()];
    });
    return mime ? mime : options.oa ? null : action(item, id);
  }
  /**
   * @param {!Object} data
   * @param {!Object} options
   * @return {undefined}
   */
  function memory(data, options) {
    parseOptions(1, function (i) {
      /** @type {boolean} */
      data.h[i] = true;
    }, options);
    parseOptions(2, function (ease, callback) {
      return tick(data, ease, callback);
    }, options);
    parseOptions(3, function (i) {
      return (data.g[i] || []).concat(data.g[4]);
    }, options);
    parseOptions(12, function (type) {
      return void resume(data, type);
    }, options);
    parseOptions(16, function (term, diff) {
      return void highlight(data, term, diff);
    }, options);
  }
  /**
   * @param {string} token
   * @param {number} path
   * @return {?}
   */
  function clone(token, path) {
    return (token = is(token, function (file) {
      return resolve(file, 1) === path;
    })) && stringify(token, precision, 2) || [];
  }
  /**
   * @param {number} i
   * @param {number} e
   * @return {?}
   */
  function getState(i, e) {
    var data = stringify(i, options, 2);
    var n = data.length;
    var s = parseInt(join(i, 8), 0);
    /** @type {number} */
    i = n * parseInt(join(i, 1), 0);
    /** @type {number} */
    e = void 0 !== e ? e : Math.floor(1E3 * random());
    if (e < s || e - s >= i) {
      return null;
    }
    data = data[(e - s) % n];
    n = require(clock).H;
    return !data || n && !clearServices(get(data, position, 3), n) ? null : data;
  }
  /**
   * @return {undefined}
   */
  function fill() {
    /**
     * @return {undefined}
     */
    this.g = function () {
    };
  }
  /**
   * @param {!Object} options
   * @param {number} type
   * @return {undefined}
   */
  function ajax(options, type) {
    options.g = debug(14, type, function () {
    });
  }
  /**
   * @param {!Array} s
   * @return {undefined}
   */
  function writeFile(s) {
    require(fill).g(s);
  }
  /**
   * @param {string} item
   * @return {undefined}
   */
  function finish(item) {
    var name = item.lb;
    var data = item.H;
    var ds = item.jb;
    var res = void 0 === item.Oa ? isBlank() : item.Oa;
    var file = void 0 === item.Pa ? 0 : item.Pa;
    item = void 0 === item.I ? new animate(null != (Xp$jscomp$0 = null == (p = get(name, index, 5)) ? void 0 : parseInt(has(p, 2), 0)) ? Xp$jscomp$0 : 0, null != (Yp$jscomp$0 = null == (target = get(name, index, 5)) ? void 0 : parseInt(has(target, 4), 0)) ? Yp$jscomp$0 : 0, null != (spikes = null == (temp = get(name, index, 5)) ? void 0 :
      expect(temp, 3)) ? spikes : false) : item.I;
    if (res.hasOwnProperty("init-done")) {
      debug(12, res, function () {
      })(when(stringify(name, store, 2), function (morc) {
        return morc.toJSON();
      }));
      debug(13, res, function () {
      })(when(stringify(name, args, 1), function (morc) {
        return morc.toJSON();
      }), file);
      if (data) {
        debug(14, res, function () {
        })(data);
      }
      fmt(file, res);
    } else {
      memory(new Connection(stringify(name, store, 2), file, item, ds), res);
      createReadStream(res);
      plugin(res);
      restore(res);
      fmt(file, res);
      handle(stringify(name, args, 1), [file], item, void 0, true);
      /** @type {boolean} */
      results = results || !(!ds || !ds.qb);
      writeFile(module);
      if (data) {
        writeFile(data);
      }
    }
  }
  /**
   * @param {number} options
   * @param {number} value
   * @return {undefined}
   */
  function fmt(options, value) {
    var lang = value = void 0 === value ? isBlank() : value;
    initialize(require(r), lang, options);
    formatDate(value, options);
    options = value;
    ajax(require(fill), options);
    require(_date).m();
  }
  /**
   * @param {number} key
   * @param {number} options
   * @return {undefined}
   */
  function formatDate(key, options) {
    var data = require(_date);
    /**
     * @param {!Object} data
     * @param {?} code
     * @return {?}
     */
    data.g = function (data, code) {
      return debug(5, key, function () {
        return false;
      })(data, code, options);
    };
    /**
     * @param {!Object} data
     * @param {?} code
     * @return {?}
     */
    data.h = function (data, code) {
      return debug(6, key, function () {
        return 0;
      })(data, code, options);
    };
    /**
     * @param {!Object} data
     * @param {?} obj
     * @return {?}
     */
    data.j = function (data, obj) {
      return debug(7, key, function () {
        return "";
      })(data, obj, options);
    };
    /**
     * @param {!Object} data
     * @param {?} code
     * @return {?}
     */
    data.l = function (data, code) {
      return debug(8, key, function () {
        return [];
      })(data, code, options);
    };
    /**
     * @return {undefined}
     */
    data.m = function () {
      debug(15, key, function () {
      })(options);
    };
  }
  /**
   * @param {number} name
   * @return {?}
   */
  function l(name) {
    name = void 0 === name ? random() : name;
    return function (x) {
      return equals(name + "." + x) % 1E3;
    };
  }
  /**
   * @param {?} url
   * @param {!Array} d
   * @return {undefined}
   */
  function notify(url, d) {
    var oParse = {};
    d = (oParse[0] = l(property(d).toString()), oParse);
    d = require(r).l(url, d);
    labelElement.Ba(1085, save(require(settings), url, d));
  }
  /**
   * @param {?} value
   * @param {!Object} name
   * @param {!Object} d
   * @return {undefined}
   */
  function error(value, name, d) {
    var result = log(value);
    if (result.plle) {
      fmt(1, isBlank(value));
    } else {
      /** @type {boolean} */
      result.plle = true;
      result = get(name, base, 12);
      var check = expect(name, 9);
      finish({
        lb: result,
        H: pad(d, name),
        jb: {
          oa: check && !!value.google_disable_experiments,
          qb: check
        },
        Oa: isBlank(value),
        Pa: 1
      });
      if (d = format(name, 15)) {
        /** @type {number} */
        d = Number(d);
        require(r).j(d);
      }
      name = $(assert(name, 19, transition));
      d = name.next();
      for (; !d.done; d = name.next()) {
        d = d.value;
        require(r).h(d);
      }
      notify(12, value);
      notify(10, value);
      value = _(value) || value;
      if (reset(value.location, "google_mc_lab")) {
        require(r).h(44738307);
      }
      if (reset(value.location, "google_auto_storify_swipeable")) {
        require(r).h(44773747);
      }
      if (reset(value.location, "google_auto_storify_scrollable")) {
        require(r).h(44773746);
      }
    }
  }
  /**
   * @param {?} item
   * @return {?}
   */
  function getData(item) {
    var href = item.Ca;
    return item.xa || ("dev" === href ? "dev" : "");
  }
  /**
   * @param {string} value
   * @return {undefined}
   */
  function mapModifications(value) {
    path.Da(function (n) {
      /** @type {string} */
      n.shv = String(value);
      n.mjsv = getData({
        xa: "m202307170101",
        Ca: value
      });
      var rowChunk = require(r).g();
      var j = _init();
      n.eid = rowChunk.concat(j).join(",");
    });
  }
  /**
   * @param {?} val
   * @return {?}
   */
  function rectangle(val) {
    var key = path;
    try {
      return trigger(val, isString), new Rectangle(JSON.parse(val));
    } catch (result) {
      key.J(838, result instanceof Error ? result : Error(String(result)), void 0, function (p) {
        /** @type {string} */
        p.jspb = String(val);
      });
    }
    return new Rectangle;
  }
  /**
   * @param {string} str
   * @param {number} date
   * @return {?}
   */
  function map(str, date) {
    return null == date ? "&" + str + "=null" : "&" + str + "=" + Math.floor(date);
  }
  /**
   * @param {string} prop
   * @param {number} val
   * @return {?}
   */
  function getUnit(prop, val) {
    return "&" + prop + "=" + val.toFixed(3);
  }
  /**
   * @return {?}
   */
  function processNode() {
    var entry = new global.Set;
    var v = style();
    try {
      if (!v) {
        return entry;
      }
      var pfo = v.pubads();
      var $openEl = $(pfo.getSlots());
      var event = $openEl.next();
      for (; !event.done; event = $openEl.next()) {
        entry.add(event.value.getSlotId().getDomId());
      }
    } catch (f$jscomp$103) {
    }
    return entry;
  }
  /**
   * @param {string} parent
   * @return {?}
   */
  function source(parent) {
    parent = parent.id;
    return null != parent && (processNode().has(parent) || define(parent, "startsWith").call(parent, "google_ads_iframe_") || define(parent, "startsWith").call(parent, "aswift"));
  }
  /**
   * @param {!Object} value
   * @param {!Array} rule
   * @param {!Array} property
   * @return {?}
   */
  function getType(value, rule, property) {
    if (!value.sources) {
      return false;
    }
    switch (getTarget(value)) {
      case 2:
        var result = getObject(value);
        if (result) {
          return property.some(function (popper) {
            return cursorIsOutsideInteractiveBorder(result, popper);
          });
        }
        break;
      case 1:
        var actual = getError(value);
        if (actual) {
          return rule.some(function (popper) {
            return cursorIsOutsideInteractiveBorder(actual, popper);
          });
        }
    }
    return false;
  }
  /**
   * @param {!Object} params
   * @return {?}
   */
  function getTarget(params) {
    if (!params.sources) {
      return 0;
    }
    params = params.sources.filter(function (movingRects) {
      return movingRects.previousRect && movingRects.currentRect;
    });
    if (1 <= params.length) {
      params = params[0];
      if (params.previousRect.top < params.currentRect.top) {
        return 2;
      }
      if (params.previousRect.top > params.currentRect.top) {
        return 1;
      }
    }
    return 0;
  }
  /**
   * @param {!Object} name
   * @return {?}
   */
  function getError(name) {
    return loading(name, function (movingRects) {
      return movingRects.currentRect;
    });
  }
  /**
   * @param {!Object} name
   * @return {?}
   */
  function getObject(name) {
    return loading(name, function (canCreateDiscussions) {
      return canCreateDiscussions.previousRect;
    });
  }
  /**
   * @param {!Object} event
   * @param {!Function} callback
   * @return {?}
   */
  function loading(event, callback) {
    return event.sources.reduce(function (b, a) {
      a = callback(a);
      return b ? a && 0 !== a.width * a.height ? a.top < b.top ? a : b : b : a;
    }, null);
  }
  /**
   * @param {number} settings
   * @param {!ClientRect} target
   * @return {?}
   */
  function cursorIsOutsideInteractiveBorder(settings, target) {
    /** @type {number} */
    var c$jscomp$317 = Math.min(settings.right, target.right) - Math.max(settings.left, target.left);
    /** @type {number} */
    settings = Math.min(settings.bottom, target.bottom) - Math.max(settings.top, target.top);
    return 0 >= c$jscomp$317 || 0 >= settings ? false : 50 <= 100 * c$jscomp$317 * settings / ((target.right - target.left) * (target.bottom - target.top));
  }
  /**
   * @return {undefined}
   */
  function SvgShape() {
    /** @type {number} */
    this.h = this.g = this.B = this.A = this.m = 0;
    /** @type {number} */
    this.Ia = this.Fa = Number.NEGATIVE_INFINITY;
    /** @type {number} */
    this.W = this.ca = this.la = this.Ga = this.La = this.j = this.Ka = this.T = 0;
    /** @type {boolean} */
    this.X = false;
    /** @type {number} */
    this.G = this.u = this.l = 0;
    /** @type {null} */
    this.I = null;
    /** @type {boolean} */
    this.Ha = false;
    /**
     * @return {undefined}
     */
    this.V = function () {
    };
    /** @type {(Element|null)} */
    var bar_node = document.querySelector("[data-google-query-id]");
    /** @type {(null|string)} */
    this.Ja = bar_node ? bar_node.getAttribute("data-google-query-id") : null;
  }
  /**
   * @return {undefined}
   */
  function setUp() {
    var node = new SvgShape;
    if (indexOf(lazyCfg)) {
      /** @type {!Window} */
      var scroller = window;
      if (!scroller.google_plmetrics && window.PerformanceObserver) {
        /** @type {boolean} */
        scroller.google_plmetrics = true;
        scroller = $(["layout-shift", "largest-contentful-paint", "first-input", "longtask"]);
        var iterNECR = scroller.next();
        for (; !iterNECR.done; iterNECR = scroller.next()) {
          iterNECR = iterNECR.value;
          run(node).observe({
            type: iterNECR,
            buffered: true
          });
        }
        addListeners(node);
      }
    }
  }
  /**
   * @param {!Object} data
   * @return {?}
   */
  function run(data) {
    if (!data.I) {
      /** @type {!PerformanceObserver} */
      data.I = new PerformanceObserver(identify(640, function (b) {
        /** @type {!Array} */
        var type = scrollX !== window.scrollX || scrollY !== window.scrollY ? [] : replay;
        var pulse = enable();
        b = $(b.getEntries());
        var e = b.next();
        for (; !e.done; e = b.next()) {
          switch (e = e.value, e.entryType) {
            case "layout-shift":
              /** @type {!Object} */
              var self = data;
              if (!e.hadRecentInput) {
                self.m += Number(e.value);
                if (Number(e.value) > self.A) {
                  /** @type {number} */
                  self.A = Number(e.value);
                }
                self.B += 1;
                var t = getType(e, type, pulse);
                if (t) {
                  self.j += e.value;
                  self.Ga++;
                }
                if (5E3 < e.startTime - self.Fa || 1E3 < e.startTime - self.Ia) {
                  self.Fa = e.startTime;
                  /** @type {number} */
                  self.g = 0;
                  /** @type {number} */
                  self.h = 0;
                }
                self.Ia = e.startTime;
                self.g += e.value;
                if (t) {
                  self.h += e.value;
                }
                if (self.g > self.T) {
                  /** @type {number} */
                  self.T = self.g;
                  /** @type {number} */
                  self.La = self.h;
                  self.Ka = e.startTime + e.duration;
                }
              }
              break;
            case "largest-contentful-paint":
              /** @type {number} */
              data.la = Math.floor(e.renderTime || e.loadTime);
              data.ca = e.size;
              break;
            case "first-input":
              /** @type {number} */
              data.W = Number((e.processingStart - e.startTime).toFixed(3));
              /** @type {boolean} */
              data.X = true;
              break;
            case "longtask":
              /** @type {number} */
              e = Math.max(0, e.duration - 50);
              data.l += e;
              /** @type {number} */
              data.u = Math.max(data.u, e);
              data.G += 1;
          }
        }
      }));
    }
    return data.I;
  }
  /**
   * @param {!Object} self
   * @return {undefined}
   */
  function addListeners(self) {
    var name = identify(641, function () {
      /** @type {!HTMLDocument} */
      var d = document;
      if (2 === (d.prerendering ? 3 : {
        visible: 1,
        hidden: 2,
        prerender: 3,
        preview: 4,
        unloaded: 5
      }[d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0)) {
        loop(self);
      }
    });
    var resizeOutput = identify(641, function () {
      return void loop(self);
    });
    document.addEventListener("visibilitychange", name);
    document.addEventListener("pagehide", resizeOutput);
    /**
     * @return {undefined}
     */
    self.V = function () {
      document.removeEventListener("visibilitychange", name);
      document.removeEventListener("pagehide", resizeOutput);
      run(self).disconnect();
    };
  }
  /**
   * @param {!Object} self
   * @return {undefined}
   */
  function loop(self) {
    if (!self.Ha) {
      /** @type {boolean} */
      self.Ha = true;
      run(self).takeRecords();
      /** @type {string} */
      var val = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
      if (window.LayoutShift) {
        /** @type {string} */
        val = val + getUnit("cls", self.m);
        /** @type {string} */
        val = val + getUnit("mls", self.A);
        /** @type {string} */
        val = val + map("nls", self.B);
        if (window.LayoutShiftAttribution) {
          /** @type {string} */
          val = val + getUnit("cas", self.j);
          /** @type {string} */
          val = val + map("nas", self.Ga);
          /** @type {string} */
          val = val + getUnit("was", self.La);
        }
        /** @type {string} */
        val = val + getUnit("wls", self.T);
        /** @type {string} */
        val = val + getUnit("tls", self.Ka);
      }
      if (window.LargestContentfulPaint) {
        /** @type {string} */
        val = val + map("lcp", self.la);
        /** @type {string} */
        val = val + map("lcps", self.ca);
      }
      if (window.PerformanceEventTiming && self.X) {
        /** @type {string} */
        val = val + map("fid", self.W);
      }
      if (window.PerformanceLongTaskTiming) {
        /** @type {string} */
        val = val + map("cbt", self.l);
        /** @type {string} */
        val = val + map("mbt", self.u);
        /** @type {string} */
        val = val + map("nlt", self.G);
      }
      /** @type {number} */
      var v = 0;
      var $openEl = $(document.getElementsByTagName("iframe"));
      var request = $openEl.next();
      for (; !request.done; request = $openEl.next()) {
        if (source(request.value)) {
          v++;
        }
      }
      /** @type {string} */
      val = val + map("nif", v);
      /** @type {string} */
      val = val + map("ifi", repeat(window));
      v = require(r).g();
      /** @type {string} */
      val = val + ("&eid=" + encodeURIComponent(v.join()));
      /** @type {string} */
      val = val + ("&top=" + (win === win.top ? 1 : 0));
      /** @type {string} */
      val = val + (self.Ja ? "&qqid=" + encodeURIComponent(self.Ja) : map("pvsid", property(win)));
      if (window.googletag) {
        /** @type {string} */
        val = val + "&gpt=1";
      }
      window.fetch(val, {
        keepalive: true,
        credentials: "include",
        redirect: "follow",
        method: "get",
        mode: "no-cors"
      });
      self.V();
    }
  }
  /**
   * @return {?}
   */
  function enable() {
    var sections = define(Array, "from").call(Array, document.getElementsByTagName("iframe")).filter(source);
    /** @type {!Array<?>} */
    var args = [].concat(toArray(processNode())).map(function (switchTextDiv) {
      return document.getElementById(switchTextDiv);
    }).filter(function (canCreateDiscussions) {
      return null !== canCreateDiscussions;
    });
    /** @type {number} */
    scrollX = window.scrollX;
    /** @type {number} */
    scrollY = window.scrollY;
    return replay = [].concat(toArray(sections), toArray(args)).map(function (wrapperElementOrRectangle) {
      return wrapperElementOrRectangle.getBoundingClientRect();
    });
  }
  /**
   * @param {string} db
   * @return {undefined}
   */
  function Collection(db) {
    this.i = push(db);
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function Set(x) {
    this.i = push(x);
  }
  /**
   * @param {!Object} key
   * @param {?} data
   * @return {?}
   */
  function commit(key, data) {
    return escapeStringInfo(key, 2, keys(data));
  }
  /**
   * @param {!Object} url
   * @param {?} link
   * @return {?}
   */
  function resolveUrl(url, link) {
    return escapeStringInfo(url, 3, keys(link));
  }
  /**
   * @param {!Object} str
   * @param {?} value
   * @return {?}
   */
  function encrypt(str, value) {
    return escapeStringInfo(str, 4, keys(value));
  }
  /**
   * @param {!Object} name
   * @param {?} value
   * @return {?}
   */
  function addHeader(name, value) {
    return escapeStringInfo(name, 5, keys(value));
  }
  /**
   * @param {!Object} title
   * @param {?} name
   * @return {?}
   */
  function method(title, name) {
    return escapeStringInfo(title, 9, keys(name));
  }
  /**
   * @param {!Object} name
   * @param {!Object} type
   * @return {?}
   */
  function address(name, type) {
    return call(name, 10, type);
  }
  /**
   * @param {!Object} val
   * @param {string} o
   * @return {?}
   */
  function converter(val, o) {
    return convert(val, 11, o);
  }
  /**
   * @param {!Object} text
   * @param {?} metadata
   * @return {?}
   */
  function renderer(text, metadata) {
    return escapeStringInfo(text, 1, keys(metadata));
  }
  /**
   * @param {!Object} name
   * @param {string} o
   * @return {?}
   */
  function throttle(name, o) {
    return convert(name, 7, o);
  }
  /**
   * @return {?}
   */
  function disableList() {
    var tempBufferN;
    return null != (tempBufferN = globalWindow.google_tag_data) ? tempBufferN : globalWindow.google_tag_data = {};
  }
  /**
   * @return {?}
   */
  function stop() {
    var val;
    var nprovince;
    return "function" === typeof (null == (val = globalWindow.navigator) ? void 0 : null == (nprovince = val.userAgentData) ? void 0 : nprovince.getHighEntropyValues);
  }
  /**
   * @return {?}
   */
  function lookup() {
    if (!stop()) {
      return null;
    }
    var eventGesture = disableList();
    if (eventGesture.uach_promise) {
      return eventGesture.uach_promise;
    }
    var isFlick = globalWindow.navigator.userAgentData.getHighEntropyValues(jScramblerClient).then(function (isFlick) {
      if (!(null != eventGesture.uach)) {
        /** @type {!Object} */
        eventGesture.uach = isFlick;
      }
      return isFlick;
    });
    return eventGesture.uach_promise = isFlick;
  }
  /**
   * @param {!Object} options
   * @return {?}
   */
  function Client(options) {
    var src_currencies;
    return converter(address(addHeader(commit(renderer(encrypt(throttle(method(resolveUrl(new Set, options.architecture || ""), options.bitness || ""), options.mobile || false), options.model || ""), options.platform || ""), options.platformVersion || ""), options.uaFullVersion || ""), (null == (src_currencies = options.fullVersionList) ? void 0 : src_currencies.map(function (data) {
      var result = new Collection;
      result = escapeStringInfo(result, 1, keys(data.brand));
      return escapeStringInfo(result, 2, keys(data.version));
    })) || []), options.wow64 || false);
  }
  /**
   * @return {?}
   */
  function limit() {
    var r;
    var b$jscomp$478;
    return null != (b$jscomp$478 = null == (r = lookup()) ? void 0 : r.then(function (server) {
      return Client(server);
    })) ? b$jscomp$478 : null;
  }
  /**
   * @param {!Object} node
   * @param {!Object} parent
   * @return {undefined}
   */
  function visitJsBlock(node, parent) {
    if (!parent.google_ad_host) {
      if (node = isUndefined(node)) {
        parent.google_ad_host = node;
      }
    }
  }
  /**
   * @param {!Array} data
   * @param {!Object} value
   * @param {number} name
   * @return {undefined}
   */
  function patch(data, value, name) {
    /** @type {(number|string)} */
    name = void 0 === name ? "" : name;
    if (globalWindow.google_sa_impl && !globalWindow.document.getElementById("google_shimpl")) {
      delete globalWindow.google_sa_queue;
      delete globalWindow.google_sa_impl;
    }
    if (!globalWindow.google_sa_queue) {
      /** @type {!Array} */
      globalWindow.google_sa_queue = [];
      globalWindow.google_process_slots = wrapAction(215, function () {
        return setInterval(globalWindow.google_sa_queue);
      });
      data = checkType(name, data, value);
      /** @type {string} */
      refresh(globalWindow.document, data).id = "google_shimpl";
    }
  }
  /**
   * @param {!Array} callback
   * @return {undefined}
   */
  function setInterval(callback) {
    var options = callback.shift();
    if ("function" === typeof options) {
      setTimeoutPathUa(216, options);
    }
    if (callback.length) {
      win.setTimeout(wrapAction(215, function () {
        return setInterval(callback);
      }), 0);
    }
  }
  /**
   * @param {!Window} engine
   * @param {(!Function|string)} fn
   * @param {!Object} ctx
   * @return {undefined}
   */
  function _render(engine, fn, ctx) {
    engine.google_sa_queue = engine.google_sa_queue || [];
    if (engine.google_sa_impl) {
      ctx(fn);
    } else {
      engine.google_sa_queue.push(fn);
    }
  }
  /**
   * @param {!Object} object
   * @param {!Array} args
   * @param {!Object} value
   * @return {?}
   */
  function checkType(object, args, value) {
    args = expect(value, 4) ? args.Ab : args.Bb;
    var type = {};
    a: {
      if (expect(value, 4)) {
        if (object = object || detect(globalWindow)) {
          value = {};
          object = (value.client = object, value.plah = globalWindow.location.host, value);
          break a;
        }
        throw Error("PublisherCodeNotFoundForAma");
      }
      object = {};
    }
    toObject(object, type);
    toObject(warning() ? {
      bust: warning()
    } : {}, type);
    return validate(args, type);
  }
  /**
   * @param {!Object} keys
   * @param {!NodeList} val
   * @return {undefined}
   */
  function toObject(keys, val) {
    forEach(keys, function (obj, real) {
      if (void 0 === val[real]) {
        val[real] = obj;
      }
    });
  }
  /**
   * @param {?} data
   * @return {?}
   */
  function createIframe(data) {
    a: {
      /** @type {boolean} */
      var i = void 0 === i ? false : i;
      /** @type {!Array} */
      var ret = [win.top];
      /** @type {!Array} */
      var el = [];
      /** @type {number} */
      var r = 0;
      var entry;
      for (; entry = ret[r++];) {
        if (!(i && !defined(entry))) {
          el.push(entry);
        }
        try {
          if (entry.frames) {
            /** @type {number} */
            var i = 0;
            for (; i < entry.frames.length && 1024 > ret.length; ++i) {
              ret.push(entry.frames[i]);
            }
          }
        } catch (k$jscomp$25) {
        }
      }
      /** @type {number} */
      i = 0;
      for (; i < el.length; i++) {
        try {
          var viewportCenter = el[i].frames.google_esf;
          if (viewportCenter) {
            interestingPoint = viewportCenter;
            break a;
          }
        } catch (k$jscomp$26) {
        }
      }
      /** @type {null} */
      interestingPoint = null;
    }
    if (interestingPoint) {
      return null;
    }
    el = createElement("IFRAME");
    /** @type {string} */
    el.id = "google_esf";
    /** @type {string} */
    el.name = "google_esf";
    el.src = prop(data.Hb).toString();
    /** @type {string} */
    el.style.display = "none";
    return el;
  }
  /**
   * @param {!Window} node
   * @param {!Object} state
   * @param {number} n
   * @param {!Object} res
   * @param {?} e
   * @return {undefined}
   */
  function connect(node, state, n, res, e) {
    var id = e.mb;
    process(node, n, state);
    var t;
    /** @type {number} */
    n = null != (t = state.google_start_time) ? t : lowerLimit;
    /** @type {number} */
    t = (new Date).getTime();
    state.google_lrv = getData({
      xa: "m202307170101",
      Ca: format(res, 2)
    });
    state.google_async_iframe_id = id;
    /** @type {number} */
    state.google_start_time = n;
    /** @type {number} */
    state.google_bpp = t > n ? t - n : 1;
    node.google_sv_map = node.google_sv_map || {};
    /** @type {!Object} */
    node.google_sv_map[id] = state;
    res = node.document.getElementById(id + "_host") ? function (callback) {
      return callback();
    } : function (rafFunction) {
      return window.setTimeout(rafFunction, 0);
    };
    _render(node, function () {
      var component = e.Gb;
      if (!component || !component.isConnected) {
        if (component = node.document.getElementById(String(state.google_async_iframe_id) + "_host"), null == component) {
          throw Error("no_div");
        }
      }
      if (component = node.google_sa_impl({
        pubWin: node,
        vars: state,
        innerInsElement: component
      })) {
        template(911, component);
      }
    }, res);
  }
  /**
   * @param {!Object} current
   * @param {!Object} el
   * @param {!Object} options
   * @return {undefined}
   */
  function process(current, el, options) {
    var index = options.google_ad_output;
    var html = options.google_ad_format;
    var data = options.google_ad_width || 0;
    var tag = options.google_ad_height || 0;
    if (!(html || "html" !== index && null != index)) {
      /** @type {string} */
      html = data + "x" + tag;
    }
    index = !options.google_ad_slot || options.google_override_format || !teardownPermutations[options.google_ad_width + "x" + options.google_ad_height] && "aa" === options.google_loader_used;
    if (html && index) {
      html = html.toLowerCase();
    } else {
      /** @type {string} */
      html = "";
    }
    options.google_ad_format = html;
    if ("number" !== typeof options.google_reactive_sra_index || !options.google_ad_unit_key) {
      /** @type {!Array} */
      html = [options.google_ad_slot, options.google_orig_ad_format || options.google_ad_format, options.google_ad_type, options.google_orig_ad_width || options.google_ad_width, options.google_orig_ad_height || options.google_ad_height];
      /** @type {!Array} */
      index = [];
      /** @type {number} */
      data = 0;
      /** @type {!Object} */
      tag = el;
      for (; tag && 25 > data; tag = tag.parentNode, ++data) {
        if (9 === tag.nodeType) {
          index.push("");
        } else {
          index.push(tag.id);
        }
      }
      if (index = index.join()) {
        html.push(index);
      }
      options.google_ad_unit_key = equals(html.join(":")).toString();
      /** @type {boolean} */
      var b = void 0 === b ? false : b;
      /** @type {!Array} */
      html = [];
      /** @type {number} */
      index = 0;
      for (; el && 25 > index; ++index) {
        /** @type {string} */
        data = "";
        if (!(void 0 !== b && b)) {
          /** @type {string} */
          data = (data = 9 !== el.nodeType && el.id) ? "/" + data : "";
        }
        a: {
          if (el && el.nodeName && el.parentElement) {
            tag = el.nodeName.toString().toLowerCase();
            var bodyChildNodes = el.parentElement.childNodes;
            /** @type {number} */
            var end = 0;
            /** @type {number} */
            var i = 0;
            for (; i < bodyChildNodes.length; ++i) {
              var node = bodyChildNodes[i];
              if (node.nodeName && node.nodeName.toString().toLowerCase() === tag) {
                if (el === node) {
                  /** @type {string} */
                  tag = "." + end;
                  break a;
                }
                ++end;
              }
            }
          }
          /** @type {string} */
          tag = "";
        }
        html.push((el.nodeName && el.nodeName.toString().toLowerCase()) + data + tag);
        el = el.parentElement;
      }
      /** @type {string} */
      b = html.join() + ":";
      /** @type {!Array} */
      el = [];
      if (current) {
        try {
          var node = current.parent;
          /** @type {number} */
          html = 0;
          for (; node && node !== current && 25 > html; ++html) {
            var children = node.frames;
            /** @type {number} */
            index = 0;
            for (; index < children.length; ++index) {
              if (current === children[index]) {
                el.push(index);
                break;
              }
            }
            current = node;
            node = current.parent;
          }
        } catch (I$jscomp$7) {
        }
      }
      options.google_ad_dom_fingerprint = equals(b + el.join()).toString();
    }
  }
  /**
   * @return {undefined}
   */
  function get_widget_elements() {
    var instance = _(win);
    if (instance) {
      instance = needsPolyfill(instance);
      if (!instance.tagSpecificState[1]) {
        instance.tagSpecificState[1] = {
          debugCard: null,
          debugCardRequested: false
        };
      }
    }
  }
  /**
   * @return {undefined}
   */
  function findOrCreate() {
    var c = limit();
    if (null != c) {
      c.then(function (morc) {
        a: {
          /** @type {boolean} */
          Sb$jscomp$0 = true;
          try {
            /** @type {string} */
            var myBrick = JSON.stringify(morc.toJSON(), propertyStringReplacer);
            break a;
          } finally {
            /** @type {boolean} */
            Sb$jscomp$0 = false;
          }
          myBrick = void 0;
        }
        /** @type {(string|undefined)} */
        globalWindow.google_user_agent_client_hint = myBrick;
      });
    }
    onKeyDown();
  }
  /**
   * @param {?} val
   * @param {?} str
   * @return {?}
   */
  function parseValue(val, str) {
    switch (val) {
      case "google_reactive_ad_format":
        return val = parseInt(str, 10), isNaN(val) ? 0 : val;
      case "google_allow_expandable_ads":
        return /^true$/.test(str);
      default:
        return str;
    }
  }
  /**
   * @param {!Object} result
   * @param {!Array} data
   * @return {undefined}
   */
  function handler(result, data) {
    if (result.getAttribute("src")) {
      var value = result.getAttribute("src") || "";
      var key = getText(value, "client");
      if (key) {
        data.google_ad_client = parseValue("google_ad_client", key);
      }
      if (value = getText(value, "host")) {
        data.google_ad_host = parseValue("google_ad_host", value);
      }
    }
    result = result.attributes;
    value = result.length;
    /** @type {number} */
    key = 0;
    for (; key < value; key++) {
      var item = result[key];
      if (/data-/.test(item.name)) {
        var key = exists(item.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_"));
        if (!data.hasOwnProperty(key)) {
          item = parseValue(key, item.value);
          if (null !== item) {
            data[key] = item;
          }
        }
      }
    }
  }
  /**
   * @param {!Object} s
   * @return {?}
   */
  function subscribe(s) {
    if (s = deepClone(s)) {
      switch (s.data && s.data.autoFormat) {
        case "rspv":
          return 13;
        case "mcrspv":
          return 15;
        default:
          return 14;
      }
    } else {
      return 12;
    }
  }
  /**
   * @param {!Object} item
   * @param {!Array} options
   * @param {!Object} value
   * @param {!Object} node
   * @return {undefined}
   */
  function setup(item, options, value, node) {
    handler(item, options);
    if (value.document && value.document.body && !register(value, options) && !options.google_reactive_ad_format) {
      /** @type {number} */
      var key = parseInt(item.style.width, 10);
      var obj = getComputedStyle(item, value);
      if (0 < obj && key > obj) {
        /** @type {number} */
        var result = parseInt(item.style.height, 10);
        /** @type {boolean} */
        key = !!teardownPermutations[key + "x" + result];
        var last = obj;
        if (key) {
          var key = getResult(obj, result);
          if (key) {
            last = key;
            /** @type {string} */
            options.google_ad_format = key + "x" + result + "_0ads_al";
          } else {
            throw new Exception("No slot size for availableWidth=" + obj);
          }
        }
        /** @type {boolean} */
        options.google_ad_resize = true;
        options.google_ad_width = last;
        if (!key) {
          /** @type {null} */
          options.google_ad_format = null;
          /** @type {boolean} */
          options.google_override_format = true;
        }
        obj = last;
        /** @type {string} */
        item.style.width = obj + "px";
        result = open(obj, "auto", value, item, options);
        last = obj;
        result.size().h(value, options, item);
        update(result, last, options);
        result = result.size();
        /** @type {null} */
        options.google_responsive_formats = null;
        if (result.L > obj && !key) {
          options.google_ad_width = result.L;
          /** @type {string} */
          item.style.width = result.L + "px";
        }
      }
    }
    key = item.offsetWidth || attr(item, value, "width", height) || options.google_ad_width || 0;
    if (488 > defaultValue(value)) {
      obj = _(value) || value;
      result = options.google_ad_client;
      if (node = reset(obj.location, "google_responsive_slot_preview") || indexOf(winConfig) || setData(obj, 1, result, node)) {
        b: {
          if (options.google_reactive_ad_format || options.google_ad_resize || register(value, options) || formatIdeResult(item, options)) {
            /** @type {boolean} */
            node = false;
          } else {
            /** @type {!Object} */
            node = item;
            for (; node; node = node.parentElement) {
              obj = find(node, value);
              if (!obj) {
                /** @type {number} */
                options.gfwrnwer = 18;
                /** @type {boolean} */
                node = false;
                break b;
              }
              if (!search(["static", "relative"], obj.position)) {
                /** @type {number} */
                options.gfwrnwer = 17;
                /** @type {boolean} */
                node = false;
                break b;
              }
            }
            node = bind(value, item, key, .3, options);
            if (true !== node) {
              options.gfwrnwer = node;
              /** @type {boolean} */
              node = false;
            } else {
              /** @type {boolean} */
              node = value === value.top ? true : false;
            }
          }
        }
      }
      if (node) {
        /** @type {boolean} */
        options.google_resizing_allowed = true;
        /** @type {boolean} */
        options.ovlp = true;
        /** @type {string} */
        options.google_ad_format = "auto";
        /** @type {boolean} */
        options.iaaso = true;
        /** @type {number} */
        options.armr = 1;
        /** @type {boolean} */
        node = true;
      } else {
        /** @type {boolean} */
        node = false;
      }
    } else {
      /** @type {boolean} */
      node = false;
    }
    if (key = register(value, options)) {
      runTest(key, item, options, value, node);
    } else {
      if (formatIdeResult(item, options)) {
        if (node = find(item, value)) {
          item.style.width = node.width;
          item.style.height = node.height;
          merge(node, options);
        }
        if (!options.google_ad_width) {
          options.google_ad_width = item.offsetWidth;
        }
        if (!options.google_ad_height) {
          options.google_ad_height = item.offsetHeight;
        }
        /** @type {number} */
        options.google_loader_features_used = 256;
        options.google_responsive_auto_format = subscribe(value);
      } else {
        merge(item.style, options);
      }
      if (value.location && "#gfwmrp" == value.location.hash || 12 == options.google_responsive_auto_format && "true" == options.google_full_width_responsive) {
        runTest(10, item, options, value, false);
      } else {
        if (.01 > Math.random() && 12 === options.google_responsive_auto_format) {
          item = adjust(item.offsetWidth || parseInt(item.style.width, 10) || options.google_ad_width, value, item, options);
          if (true !== item) {
            /** @type {boolean} */
            options.efwr = false;
            options.gfwrnwer = item;
          } else {
            /** @type {boolean} */
            options.efwr = true;
          }
        }
      }
    }
  }
  /**
   * @param {number} x
   * @param {string} y
   * @param {?} layer
   * @return {undefined}
   */
  function Vector(x, y, layer) {
    selection.call(this);
    /** @type {string} */
    this.B = y;
    this.u = layer;
    this.A = new global.Map;
    this.l = new global.Map;
    /** @type {number} */
    this.h = x;
  }
  /**
   * @param {!Object} self
   * @return {?}
   */
  function setValue(self) {
    if (self.g) {
      return self.g;
    }
    if (self.u && self.u(self.h)) {
      self.g = self.h;
    } else {
      self.g = clamp(self.h, self.B);
    }
    var pg;
    return null != (pg = self.g) ? pg : null;
  }
  /**
   * @param {?} optionsValue
   * @param {?} context
   * @return {undefined}
   */
  function val(optionsValue, context) {
    (0, optionsValue.__uspapi)("getUSPData", 1, function (canCreateDiscussions, isSlidingUp) {
      context.K({
        consentData: null != canCreateDiscussions ? canCreateDiscussions : void 0,
        kb: isSlidingUp ? void 0 : 2
      });
    });
  }
  /**
   * @param {!Object} message
   * @return {?}
   */
  function enter(message) {
    var msg = {};
    if ("string" === typeof message.data) {
      /** @type {*} */
      msg = JSON.parse(message.data);
    } else {
      msg = message.data;
    }
    return {
      payload: msg,
      yb: msg.__uspapiReturn.callId
    };
  }
  /**
   * @param {string} w
   * @return {undefined}
   */
  function Tab(w) {
    selection.call(this);
    this.caller = new Vector(w, "__uspapiLocator", function (canCreateDiscussions) {
      return "function" === typeof canCreateDiscussions.__uspapi;
    }, enter);
    this.caller.A.set("getDataWithCallback", val);
    this.caller.l.set("getDataWithCallback", that);
  }
  /**
   * @param {string} x
   * @return {undefined}
   */
  function Behavior(x) {
    this.i = push(x);
  }
  /**
   * @param {!Array} viz
   * @param {!Object} options
   * @return {undefined}
   */
  function title(viz, options) {
    var item = {
      cb: function (er) {
        er = cb_(er);
        options.K({
          consentData: er
        });
      }
    };
    if (options.spsp) {
      item.spsp = options.spsp;
    }
    viz = viz.googlefc || (viz.googlefc = {});
    viz.__fci = viz.__fci || [];
    viz.__fci.push(options.command, item);
  }
  /**
   * @param {(Object|null|string)} name
   * @return {?}
   */
  function makeModuleMetaEntry(name) {
    name = cb_(name.data.__fciReturn);
    return {
      payload: name,
      yb: parseInt(has(name, 1), 0)
    };
  }
  /**
   * @param {string} i
   * @return {undefined}
   */
  function Body(i) {
    selection.call(this);
    /** @type {boolean} */
    this.g = this.h = false;
    this.caller = new Vector(i, "googlefcPresent", void 0, makeModuleMetaEntry);
    this.caller.A.set("getDataWithCallback", title);
    this.caller.l.set("getDataWithCallback", removeCritText);
  }
  /**
   * @param {!Function} callback
   * @return {undefined}
   */
  function getWebdriverSessions(callback) {
    /** @type {!Window} */
    var win = window;
    /** @type {null} */
    var callback = void 0 === callback ? null : callback;
    on(win, "message", function (output) {
      try {
        /** @type {*} */
        var parserErr = JSON.parse(output.data);
      } catch (f$jscomp$112) {
        return;
      }
      if (!(!parserErr || "sc-cnf" !== parserErr.googMsgType || callback && /[:|%3A]javascript\(/i.test(output.data) && !callback(parserErr, output))) {
        callback(parserErr, output);
      }
    });
  }
  /**
   * @param {!Object} element
   * @return {?}
   */
  function getId(element) {
    return re.test(element.className) && "done" !== element.dataset.adsbygoogleStatus;
  }
  /**
   * @param {!Object} obj
   * @param {!Object} name
   * @param {!Object} callback
   * @return {undefined}
   */
  function hook(obj, name, callback) {
    /** @type {string} */
    obj.dataset.adsbygoogleStatus = "done";
    link(obj, name, callback);
  }
  /**
   * @param {!Object} target
   * @param {!Object} options
   * @param {!Object} opts
   * @return {undefined}
   */
  function link(target, options, opts) {
    /** @type {!Window} */
    var element = window;
    if (!element.google_spfd) {
      /** @type {function(!Object, !Array, !Object, !Object): undefined} */
      element.google_spfd = setup;
    }
    var PNGProcessor = options.google_reactive_ads_config;
    if (!PNGProcessor) {
      setup(target, options, element, opts);
    }
    visitJsBlock(element, options);
    if (!show(target, options, element)) {
      if (!PNGProcessor) {
        element.google_lpabyc = abs(target, element) + (attr(target, element, "height", height) || 0);
      }
      if (PNGProcessor) {
        PNGProcessor = PNGProcessor.page_level_pubvars || {};
        if (log(globalWindow).page_contains_reactive_tag && !log(globalWindow).allow_second_reactive_tag) {
          if (PNGProcessor.pltais) {
            createRow(false);
            return;
          }
          throw new Exception("Only one 'enable_page_level_ads' allowed per page.");
        }
        /** @type {boolean} */
        log(globalWindow).page_contains_reactive_tag = true;
        createRow(7 === PNGProcessor.google_pgb_reactive);
      }
      options.google_unique_id = getViewValueFromElement(element);
      forEach(iter, function (canCreateDiscussions, name) {
        options[name] = options[name] || element[name];
      });
      if (indexOf(boundaryElements)) {
        delete options.google_ad_modifications;
      }
      if ("sd" !== options.google_loader_used) {
        /** @type {string} */
        options.google_loader_used = "aa";
      }
      /** @type {boolean} */
      options.google_reactive_tag_first = 1 === (log(globalWindow).first_tag_on_page || 0);
      setTimeoutPathUa(164, function () {
        var m = element.document;
        var x = void 0;
        /** @type {number} */
        var h = 0;
        for (; !x || m.getElementById(x + "_host");) {
          /** @type {string} */
          x = "aswift_" + h++;
        }
        /** @type {string} */
        m = x;
        /** @type {number} */
        x = Number(options.google_ad_width || 0);
        /** @type {number} */
        h = Number(options.google_ad_height || 0);
        var div = createElement("DIV");
        /** @type {string} */
        div.id = m + "_host";
        var s = div.style;
        /** @type {string} */
        s.border = "none";
        /** @type {string} */
        s.height = h + "px";
        /** @type {string} */
        s.width = x + "px";
        /** @type {string} */
        s.margin = "0px";
        /** @type {string} */
        s.padding = "0px";
        /** @type {string} */
        s.position = "relative";
        /** @type {string} */
        s.visibility = "visible";
        /** @type {string} */
        s.backgroundColor = "transparent";
        /** @type {string} */
        div.style.display = "inline-block";
        target.appendChild(div);
        connect(element, options, target, opts, {
          mb: m,
          Gb: div
        });
      });
    }
  }
  /**
   * @param {!Object} node
   * @param {!Object} attr
   * @param {!Object} element
   * @return {?}
   */
  function show(node, attr, element) {
    var value = attr.google_reactive_ads_config;
    /** @type {boolean} */
    var delta = "string" === typeof node.className && RegExp("(\\W|^)adsbygoogle-noablate(\\W|$)").test(node.className);
    var style = getSetting(element);
    if (style && style.Ma && "on" !== attr.google_adtest && !delta) {
      delta = abs(node, element);
      var s_divisor = jQuery(element).clientHeight;
      if (!style.wa || style.wa && ((0 == s_divisor ? null : delta / s_divisor) || 0) >= style.wa) {
        return node.className += " adsbygoogle-ablated-ad-slot", element = element.google_sv_map = element.google_sv_map || {}, value = fn(node), attr.google_element_uid = value, element[attr.google_element_uid] = attr, node.setAttribute("google_element_uid", String(value)), "slot" === style.Eb && (null !== setSize(node.getAttribute("width")) && node.setAttribute("width", 0),
          null !== setSize(node.getAttribute("height")) && node.setAttribute("height", 0), node.style.width = "0px", node.style.height = "0px"), true;
      }
    }
    if ((style = find(node, element)) && "none" === style.display && !("on" === attr.google_adtest || 0 < attr.google_reactive_ad_format || value)) {
      return element.document.createComment && node.appendChild(element.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), true;
    }
    /** @type {boolean} */
    node = null == attr.google_pgb_reactive || 3 === attr.google_pgb_reactive;
    return 1 !== attr.google_reactive_ad_format && 8 !== attr.google_reactive_ad_format || !node ? false : (win.console && win.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + String(attr.google_reactive_ad_format) + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), true);
  }
  /**
   * @param {string} callback
   * @return {?}
   */
  function destroy(callback) {
    /** @type {!NodeList<Element>} */
    var body = document.getElementsByTagName("INS");
    /** @type {number} */
    var i = 0;
    /** @type {(Element|null)} */
    var item = body[i];
    for (; i < body.length; item = body[++i]) {
      /** @type {(Element|null)} */
      var contact = item;
      if (getId(contact) && "reserved" !== contact.dataset.adsbygoogleStatus && (!callback || item.id === callback)) {
        return item;
      }
    }
    return null;
  }
  /**
   * @param {!Object} options
   * @param {!Array} event
   * @param {!Object} data
   * @return {undefined}
   */
  function step(options, event, data) {
    if (options && "shift" in options) {
      runner(function (n) {
        if (!fromString(toNumber(n), 2)) {
          n = toNumber(n);
          go(n, 2);
        }
      });
      /** @type {number} */
      var d$jscomp$233 = 20;
      for (; 0 < options.length && 0 < d$jscomp$233;) {
        try {
          fireEvent(options.shift(), event, data);
        } catch (e$jscomp$165) {
          setTimeout(function () {
            throw e$jscomp$165;
          });
        }
        --d$jscomp$233;
      }
    }
  }
  /**
   * @return {?}
   */
  function buildReceiveDiv() {
    var div = createElement("INS");
    /** @type {string} */
    div.className = "adsbygoogle";
    div.className += " adsbygoogle-noablate";
    setStyles(div, {
      display: "none"
    });
    return div;
  }
  /**
   * @param {!Object} options
   * @param {!Object} method
   * @return {undefined}
   */
  function before(options, method) {
    var json = {};
    var node = includes(options.google_ad_client, method);
    forEach(defaults, function (p1__3354_SHARP_, prop) {
      if (false === options.enable_page_level_ads) {
        /** @type {boolean} */
        json[prop] = false;
      } else {
        if (options.hasOwnProperty(prop)) {
          json[prop] = options[prop];
        } else {
          if (define(node, "includes").call(node, p1__3354_SHARP_)) {
            /** @type {boolean} */
            json[prop] = false;
          }
        }
      }
    });
    if (_isObject(options.enable_page_level_ads)) {
      json.page_level_pubvars = options.enable_page_level_ads;
    }
    var item = buildReceiveDiv();
    aDocument.body.appendChild(item);
    var s = {};
    s = (s.google_reactive_ads_config = json, s.google_ad_client = options.google_ad_client, s);
    /** @type {boolean} */
    s.google_pause_ad_requests = !!log(globalWindow).pause_ad_requests;
    hook(item, s, method);
    runner(function (n) {
      if (!fromString(toNumber(n), 6)) {
        n = toNumber(n);
        go(n, 6);
      }
    });
  }
  /**
   * @param {!Object} fn
   * @param {string} target
   * @return {undefined}
   */
  function check(fn, target) {
    /**
     * @return {undefined}
     */
    function destroy() {
      before(fn, target);
    }
    /** @type {boolean} */
    needsPolyfill(win).wasPlaTagProcessed = true;
    var doc = win.document;
    if (doc.body || "complete" === doc.readyState || "interactive" === doc.readyState) {
      destroy();
    } else {
      var context = block(wrapAction(191, destroy));
      on(doc, "DOMContentLoaded", context);
      (new win.MutationObserver(function (canCreateDiscussions, attributesObserver) {
        if (doc.body) {
          context();
          attributesObserver.disconnect();
        }
      })).observe(doc, {
        childList: true,
        subtree: true
      });
    }
  }
  /**
   * @param {!Array} arg
   * @param {!Array} event
   * @param {!Object} args
   * @return {undefined}
   */
  function fireEvent(arg, event, args) {
    var options = {};
    setTimeoutPathUa(165, function () {
      return constructor(arg, options, event, args);
    }, function (header) {
      header.client = header.client || options.google_ad_client || arg.google_ad_client;
      header.slotname = header.slotname || options.google_ad_slot;
      header.tag_origin = header.tag_origin || options.google_tag_origin;
    });
  }
  /**
   * @param {!Object} params
   * @return {undefined}
   */
  function createContext(params) {
    delete params.google_checked_head;
    forEach(params, function (linkID, api) {
      if (!obj[api]) {
        delete params[api];
        linkID = api.replace("google", "data").replace(/_/g, "-");
        win.console.warn("AdSense head tag doesn't support " + linkID + " attribute.");
      }
    });
  }
  /**
   * @param {string} evt
   * @param {!Object} item
   * @return {undefined}
   */
  function onLoad(evt, item) {
    var p = globalWindow.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])') || globalWindow.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])');
    if (p) {
      p.setAttribute("data-checked-head", "true");
      var result = log(window);
      if (result.head_tag_slot_vars) {
        exitIfDone(p);
      } else {
        runner(function (data) {
          data = toNumber(data);
          empty(data, 7, true);
        });
        var element = {};
        handler(p, element);
        createContext(element);
        var el = getValueIfNeeded(element);
        result.head_tag_slot_vars = el;
        p = {
          google_ad_client: element.google_ad_client,
          enable_page_level_ads: element
        };
        if ("bottom" === element.google_overlays) {
          result = {};
          p.overlays = (result.bottom = true, result);
        }
        delete element.google_overlays;
        if (!globalWindow.adsbygoogle) {
          /** @type {!Array} */
          globalWindow.adsbygoogle = [];
        }
        /** @type {!Array} */
        result = globalWindow.adsbygoogle;
        if (result.loaded) {
          result.push(p);
        } else {
          if (result.splice) {
            result.splice(0, 0, p);
          }
        }
        var value;
        if (element.google_adbreak_test || (null == (value = round(item)) ? 0 : expect(value, 3))) {
          onClick(el, evt);
        } else {
          getWebdriverSessions(function () {
            onClick(el, evt);
          });
        }
      }
    }
  }
  /**
   * @param {!Object} type
   * @return {undefined}
   */
  function exitIfDone(type) {
    var obj = log(window).head_tag_slot_vars;
    var url = type.getAttribute("src") || "";
    if ((type = getText(url, "client") || type.getAttribute("data-ad-client") || "") && type !== obj.google_ad_client) {
      throw new Exception("Warning: Do not add multiple property codes with AdSense tag to avoid seeing unexpected behavior. These codes were found on the page " + type + ", " + obj.google_ad_client);
    }
  }
  /**
   * @param {!Object} value
   * @return {?}
   */
  function size(value) {
    if ("object" === typeof value && null != value) {
      if ("string" === typeof value.type) {
        return 2;
      }
      if ("string" === typeof value.sound || "string" === typeof value.preloadAdBreaks) {
        return 3;
      }
    }
    return 0;
  }
  /**
   * @param {!Object} node
   * @param {!Array} data
   * @param {!Array} options
   * @param {!Object} value
   * @return {undefined}
   */
  function constructor(node, data, options, value) {
    if (null == node) {
      throw new Exception("push() called with no parameters.");
    }
    runner(function (n) {
      if (!fromString(toNumber(n), 3)) {
        n = toNumber(n);
        go(n, 3);
      }
    });
    if (number(value, top, 14)) {
      getSize(node, ok(c(value), 1), format(value, 2));
    }
    var item = size(node);
    if (0 !== item) {
      if (value = parseTextMessage(), value.first_slotcar_request_processing_time || (value.first_slotcar_request_processing_time = Date.now(), value.adsbygoogle_execution_start_time = lowerLimit), null == current) {
        fetch(node);
        items.push(node);
      } else {
        if (3 === item) {
          /** @type {null} */
          var startContainer = current;
          setTimeoutPathUa(787, function () {
            startContainer.handleAdConfig(node);
          });
        } else {
          template(730, current.handleAdBreak(node));
        }
      }
    } else {
      /** @type {number} */
      lowerLimit = (new Date).getTime();
      patch(options, value, reverse(node));
      onMouseUp();
      a: {
        if (void 0 != node.enable_page_level_ads) {
          if ("string" === typeof node.google_ad_client) {
            /** @type {boolean} */
            item = true;
            break a;
          }
          throw new Exception("'google_ad_client' is missing from the tag config.");
        }
        /** @type {boolean} */
        item = false;
      }
      if (item) {
        runner(function (n) {
          if (!fromString(toNumber(n), 4)) {
            n = toNumber(n);
            go(n, 4);
          }
        });
        schedule(node, value);
      } else {
        if ((item = node.params) && forEach(item, function (result, subId) {
          data[subId] = result;
        }), "js" === data.google_ad_output) {
          console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
        } else {
          item = el(node.element);
          handler(item, data);
          options = log(win).head_tag_slot_vars || {};
          forEach(options, function (set, index) {
            if (!data.hasOwnProperty(index)) {
              data[index] = set;
            }
          });
          if (item.hasAttribute("data-require-head") && !log(win).head_tag_slot_vars) {
            throw new Exception("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
          }
          if (!data.google_ad_client) {
            throw new Exception("Ad client is missing from the slot.");
          }
          if (options = 0 === (log(globalWindow).first_tag_on_page || 0) && getTime(data)) {
            runner(function (n) {
              if (!fromString(toNumber(n), 5)) {
                n = toNumber(n);
                go(n, 5);
              }
            });
            ChromosomeInfo(options);
          }
          if (0 === (log(globalWindow).first_tag_on_page || 0)) {
            /** @type {number} */
            log(globalWindow).first_tag_on_page = 2;
          }
          /** @type {boolean} */
          data.google_pause_ad_requests = !!log(globalWindow).pause_ad_requests;
          hook(item, data, value);
        }
      }
    }
  }
  /**
   * @param {!Object} text
   * @param {!Array} shape
   * @param {?} type
   * @return {undefined}
   */
  function getSize(text, shape, type) {
    if (!Wr$jscomp$0) {
      /** @type {boolean} */
      Wr$jscomp$0 = true;
      text = reverse(text) || detect(globalWindow);
      cb("predictive_abg", {
        a_c: text,
        p_c: shape.join(),
        b_v: type
      }, .01);
    }
  }
  /**
   * @param {!Object} data
   * @return {?}
   */
  function reverse(data) {
    return data.google_ad_client ? data.google_ad_client : (data = data.params) && data.google_ad_client ? data.google_ad_client : "";
  }
  /**
   * @return {undefined}
   */
  function onMouseUp() {
    if (indexOf(bufferResources)) {
      var html = getSetting(globalWindow);
      if (!(html = html && html.Ma)) {
        try {
          /** @type {(Storage|null)} */
          var node = globalWindow.localStorage;
        } catch (c$jscomp$355) {
          /** @type {null} */
          node = null;
        }
        node = node ? getGroup(node) : null;
        /** @type {boolean} */
        html = !(node && hasClass(node) && node);
      }
      if (!html) {
        calculate(globalWindow, 1);
      }
    }
  }
  /**
   * @param {!Array} success
   * @return {undefined}
   */
  function ChromosomeInfo(success) {
    checkState(function () {
      if (!needsPolyfill(win).wasPlaTagProcessed) {
        if (win.adsbygoogle) {
          win.adsbygoogle.push(success);
        }
      }
    });
  }
  /**
   * @param {!Object} callback
   * @param {boolean} request
   * @return {undefined}
   */
  function schedule(callback, request) {
    if (0 === (log(globalWindow).first_tag_on_page || 0)) {
      /** @type {number} */
      log(globalWindow).first_tag_on_page = 1;
    }
    if (callback.tag_partner) {
      var additional = callback.tag_partner;
      var prompt = log(win);
      prompt.tag_partners = prompt.tag_partners || [];
      prompt.tag_partners.push(additional);
    }
    poll(callback, request);
    check(callback, request);
  }
  /**
   * @param {!Object} el
   * @return {?}
   */
  function el(el) {
    if (el) {
      if (!getId(el) && (el.id ? el = destroy(el.id) : el = null, !el)) {
        throw new Exception("'element' has already been filled.");
      }
      if (!("innerHTML" in el)) {
        throw new Exception("'element' is not a good DOM element.");
      }
    } else {
      if (el = destroy(), !el) {
        throw new Exception("All ins elements in the DOM with class=adsbygoogle already have ads in them.");
      }
    }
    return el;
  }
  /**
   * @return {undefined}
   */
  function openFile() {
    var source = new Store(globalWindow);
    var data = new Tab(globalWindow);
    var a = new Body(globalWindow);
    /** @type {number} */
    var d$jscomp$240 = globalWindow.__cmp ? 1 : 0;
    /** @type {number} */
    source = isPlainObject(source) ? 1 : 0;
    /** @type {number} */
    data = setValue(data.caller) ? 1 : 0;
    if (!a.h) {
      /** @type {boolean} */
      a.g = !!setValue(a.caller);
      /** @type {boolean} */
      a.h = true;
    }
    cb("cmpMet", {
      tcfv1: d$jscomp$240,
      tcfv2: source,
      usp: data,
      fc: a.g ? 1 : 0,
      ptt: 9
    }, .001);
  }
  /**
   * @param {!Object} value
   * @return {undefined}
   */
  function pass(value) {
    /** @type {boolean} */
    translate().S[checkForExceptionOrErrorType(26)] = !!Number(value);
  }
  /**
   * @param {!Object} trigger
   * @return {undefined}
   */
  function autoSubmit(trigger) {
    if (Number(trigger)) {
      /** @type {boolean} */
      log(globalWindow).pause_ad_requests = true;
    } else {
      /** @type {boolean} */
      log(globalWindow).pause_ad_requests = false;
      /**
       * @return {undefined}
       */
      trigger = function () {
        if (!log(globalWindow).pause_ad_requests) {
          /** @type {(undefined|{})} */
          var params = void 0 === params ? {} : params;
          if ("function" === typeof window.CustomEvent) {
            /** @type {!CustomEvent} */
            var e = new CustomEvent("adsbygoogle-pub-unpause-ad-requests-event", params);
          } else {
            /** @type {(Event|null)} */
            e = document.createEvent("CustomEvent");
            e.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !!params.bubbles, !!params.cancelable, params.detail);
          }
          globalWindow.dispatchEvent(e);
        }
      };
      win.setTimeout(trigger, 0);
      win.setTimeout(trigger, 1E3);
    }
  }
  /**
   * @param {!Object} fn
   * @return {undefined}
   */
  function _PS_runOn_impl(fn) {
    if (fn && fn.call && "function" === typeof fn) {
      window.setTimeout(fn, 0);
    }
  }
  /**
   * @param {!Array} item
   * @param {string} options
   * @return {undefined}
   */
  function onClick(item, options) {
    options = timeout(validate(options.Db, warning() ? {
      bust: warning()
    } : {})).then(function (tree) {
      if (null == current) {
        tree.init(item);
        /** @type {string} */
        current = tree;
        disable(tree);
      }
    });
    template(723, options);
    define(options, "finally").call(options, function () {
      /** @type {number} */
      items.length = 0;
      cb("slotcar", {
        event: "api_ld",
        time: Date.now() - lowerLimit,
        time_pr: Date.now() - yr$jscomp$0
      });
    });
  }
  /**
   * @param {string} type
   * @return {undefined}
   */
  function disable(type) {
    var el = $(data);
    var x = el.next();
    for (; !x.done; x = el.next()) {
      var problemFilter = $(x.value);
      x = problemFilter.next().value;
      problemFilter = problemFilter.next().value;
      if (-1 !== problemFilter) {
        win.clearTimeout(problemFilter);
        data.delete(x);
      }
    }
    el = {};
    /** @type {number} */
    x = 0;
    for (; x < items.length; el = {
      ka: el.ka,
      fa: el.fa
    }, x++) {
      if (!data.has(x)) {
        el.fa = items[x];
        el.ka = size(el.fa);
        setTimeoutPathUa(723, function (data) {
          return function () {
            if (3 === data.ka) {
              type.handleAdConfig(data.fa);
            } else {
              if (2 === data.ka) {
                template(730, type.handleAdBreakBeforeReady(data.fa));
              }
            }
          };
        }(el));
      }
    }
  }
  /**
   * @param {!Object} list
   * @return {undefined}
   */
  function fetch(list) {
    /** @type {number} */
    var c = items.length;
    if (2 === size(list) && "preroll" === list.type && null != list.adBreakDone) {
      var pending = list.adBreakDone;
      if (-1 === yr$jscomp$0) {
        /** @type {number} */
        yr$jscomp$0 = Date.now();
      }
      var title = win.setTimeout(function () {
        try {
          pending({
            breakType: "preroll",
            breakName: list.name,
            breakFormat: "preroll",
            breakStatus: "timeout"
          });
          data.set(c, -1);
          cb("slotcar", {
            event: "pr_to",
            source: "adsbygoogle"
          });
        } catch (result) {
          console.error("[Ad Placement API] adBreakDone callback threw an error:", result instanceof Error ? result : Error(String(result)));
        }
      }, 1E3 * makeUnique(reg));
      data.set(c, title);
    }
  }
  /**
   * @return {undefined}
   */
  function createLink() {
    var context = globalWindow.document;
    var value = ping(socket);
    var e = context.createElement("LINK");
    /** @type {string} */
    e.crossOrigin = "";
    a: {
      if (value instanceof PromiseBox) {
        e.href = prop(value).toString();
      } else {
        if (-1 === transport.indexOf("preconnect")) {
          throw Error('TrustedResourceUrl href attribute required with rel="preconnect"');
        }
        if (value instanceof array) {
          value = value instanceof array && value.constructor === array ? value.g : "type_error:SafeUrl";
        } else {
          c: {
            if (addedRelations) {
              try {
                /** @type {!URL} */
                var url = new URL(value);
              } catch (e$jscomp$173) {
                /** @type {string} */
                url = "https:";
                break c;
              }
              /** @type {string} */
              url = url.protocol;
            } else {
              d: {
                /** @type {!Element} */
                url = document.createElement("a");
                try {
                  url.href = value;
                } catch (e$jscomp$174) {
                  url = void 0;
                  break d;
                }
                url = url.protocol;
                url = ":" === url || "" === url ? "https:" : url;
              }
            }
          }
          value = "javascript:" !== url ? value : void 0;
        }
        if (void 0 === value) {
          break a;
        }
        e.href = value;
      }
      /** @type {string} */
      e.rel = "preconnect";
    }
    context.head.appendChild(e);
  }
  var documentPrototype;
  var url;
  /** @type {!Function} */
  var defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function (object, name, descriptor) {
    if (object == Array.prototype || object == Object.prototype) {
      return object;
    }
    object[name] = descriptor.value;
    return object;
  };
  var root = dom(this);
  /** @type {boolean} */
  var copyValues = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
  var global = {};
  var props = {};
  test("Symbol", function (canCreateDiscussions) {
    /**
     * @param {!Object} dir
     * @return {?}
     */
    function toDest(dir) {
      if (this instanceof toDest) {
        throw new TypeError("Symbol is not a constructor");
      }
      return new Cell(name + (dir || "") + "_" + widgetUniqueIDIndex++, dir);
    }
    /**
     * @param {string} blocktype
     * @param {!Object} x
     * @return {undefined}
     */
    function Cell(blocktype, x) {
      /** @type {string} */
      this.g = blocktype;
      defineProperty(this, "description", {
        configurable: true,
        writable: true,
        value: x
      });
    }
    if (canCreateDiscussions) {
      return canCreateDiscussions;
    }
    /**
     * @return {?}
     */
    Cell.prototype.toString = function () {
      return this.g;
    };
    /** @type {string} */
    var name = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_";
    /** @type {number} */
    var widgetUniqueIDIndex = 0;
    return toDest;
  }, "es6");
  test("Symbol.iterator", function (name) {
    if (name) {
      return name;
    }
    name = (0, global.Symbol)("Symbol.iterator");
    /** @type {!Array<string>} */
    var segs = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" ");
    /** @type {number} */
    var i = 0;
    for (; i < segs.length; i++) {
      var constructor = root[segs[i]];
      if ("function" === typeof constructor && "function" != typeof constructor.prototype[name]) {
        defineProperty(constructor.prototype, name, {
          configurable: true,
          writable: true,
          value: function () {
            return operation(sync(this));
          }
        });
      }
    }
    return name;
  }, "es6");
  var isCurrentType = copyValues && "function" == typeof define(Object, "assign") ? define(Object, "assign") : function (assignValue, canCreateDiscussions) {
    /** @type {number} */
    var i = 1;
    for (; i < arguments.length; i++) {
      var data = arguments[i];
      if (data) {
        var key;
        for (key in data) {
          if (isFunction(data, key)) {
            assignValue[key] = data[key];
          }
        }
      }
    }
    return assignValue;
  };
  test("Object.assign", function (isPrevType) {
    return isPrevType || isCurrentType;
  }, "es6");
  /** @type {!Function} */
  var __create = "function" == typeof Object.create ? Object.create : function (_Date_prototype) {
    /**
     * @return {undefined}
     */
    function capture_Date() {
    }
    /** @type {!Object} */
    capture_Date.prototype = _Date_prototype;
    return new capture_Date;
  };
  var aValue;
  if (copyValues && "function" == typeof Object.setPrototypeOf) {
    /** @type {function(!Object, ?): !Object} */
    aValue = Object.setPrototypeOf;
  } else {
    var a;
    a: {
      var metadata = {
        a: true
      };
      var self = {};
      try {
        self.__proto__ = metadata;
        a = self.a;
        break a;
      } catch (a$jscomp$727) {
      }
      /** @type {boolean} */
      a = false;
    }
    /** @type {(function(!Object, !Function): ?|null)} */
    aValue = a ? function (object, user) {
      /** @type {!Function} */
      object.__proto__ = user;
      if (object.__proto__ !== user) {
        throw new TypeError(object + " is not extensible");
      }
      return object;
    } : null;
  }
  /** @type {(function(!Object, !Function): ?|null)} */
  var oldGetContextMenuItems = aValue;
  /**
   * @param {!Object} value
   * @return {undefined}
   */
  colorRgbToHsl.prototype.m = function (value) {
    /** @type {!Object} */
    this.A = value;
  };
  /**
   * @param {string} x
   * @return {undefined}
   */
  colorRgbToHsl.prototype.return = function (x) {
    this.j = {
      return: x
    };
    this.g = this.u;
  };
  test("Promise", function (canCreateDiscussions) {
    /**
     * @param {?} executor
     * @return {undefined}
     */
    function Promise(executor) {
      /** @type {number} */
      this.g = 0;
      this.j = void 0;
      /** @type {!Array} */
      this.h = [];
      /** @type {boolean} */
      this.A = false;
      var future = this.l();
      try {
        executor(future.resolve, future.reject);
      } catch (reasons) {
        future.reject(reasons);
      }
    }
    /**
     * @return {undefined}
     */
    function p() {
      /** @type {null} */
      this.g = null;
    }
    /**
     * @param {?} onSuccess
     * @return {?}
     */
    function resolve(onSuccess) {
      return onSuccess instanceof Promise ? onSuccess : new Promise(function (exec) {
        exec(onSuccess);
      });
    }
    if (canCreateDiscussions) {
      return canCreateDiscussions;
    }
    /**
     * @param {?} type
     * @return {undefined}
     */
    p.prototype.h = function (type) {
      if (null == this.g) {
        /** @type {!Array} */
        this.g = [];
        var resultFrameMatrix = this;
        this.j(function () {
          resultFrameMatrix.m();
        });
      }
      this.g.push(type);
    };
    var setTimeout = root.setTimeout;
    /**
     * @param {!Object} s
     * @return {undefined}
     */
    p.prototype.j = function (s) {
      setTimeout(s, 0);
    };
    /**
     * @return {undefined}
     */
    p.prototype.m = function () {
      for (; this.g && this.g.length;) {
        /** @type {!Array} */
        var i = this.g;
        /** @type {!Array} */
        this.g = [];
        /** @type {number} */
        var c = 0;
        for (; c < i.length; ++c) {
          var o = i[c];
          /** @type {null} */
          i[c] = null;
          try {
            o();
          } catch (val) {
            this.l(val);
          }
        }
      }
      /** @type {null} */
      this.g = null;
    };
    /**
     * @param {!Object} data
     * @return {undefined}
     */
    p.prototype.l = function (data) {
      this.j(function () {
        throw data;
      });
    };
    /**
     * @return {?}
     */
    Promise.prototype.l = function () {
      /**
       * @param {!Function} t
       * @return {?}
       */
      function load(t) {
        return function (s1) {
          if (!k$jscomp$32) {
            /** @type {boolean} */
            k$jscomp$32 = true;
            t.call(FAKE_CONTENT_LENGTH, s1);
          }
        };
      }
      var FAKE_CONTENT_LENGTH = this;
      /** @type {boolean} */
      var k$jscomp$32 = false;
      return {
        resolve: load(this.W),
        reject: load(this.m)
      };
    };
    /**
     * @param {?} val
     * @return {undefined}
     */
    Promise.prototype.W = function (val) {
      if (val === this) {
        this.m(new TypeError("A Promise cannot resolve to itself"));
      } else {
        if (val instanceof Promise) {
          this.ca(val);
        } else {
          a: {
            switch (typeof val) {
              case "object":
                /** @type {boolean} */
                var change = null != val;
                break a;
              case "function":
                /** @type {boolean} */
                change = true;
                break a;
              default:
                /** @type {boolean} */
                change = false;
            }
          }
          if (change) {
            this.V(val);
          } else {
            this.u(val);
          }
        }
      }
    };
    /**
     * @param {?} x
     * @return {undefined}
     */
    Promise.prototype.V = function (x) {
      var then = void 0;
      try {
        then = x.then;
      } catch (val) {
        this.m(val);
        return;
      }
      if ("function" == typeof then) {
        this.la(then, x);
      } else {
        this.u(x);
      }
    };
    /**
     * @param {?} s
     * @return {undefined}
     */
    Promise.prototype.m = function (s) {
      this.B(2, s);
    };
    /**
     * @param {?} s
     * @return {undefined}
     */
    Promise.prototype.u = function (s) {
      this.B(1, s);
    };
    /**
     * @param {!Object} t
     * @param {number} b
     * @return {undefined}
     */
    Promise.prototype.B = function (t, b) {
      if (0 != this.g) {
        throw Error("Cannot settle(" + t + ", " + b + "): Promise already settled in state" + this.g);
      }
      /** @type {!Object} */
      this.g = t;
      /** @type {number} */
      this.j = b;
      if (2 === this.g) {
        this.X();
      }
      this.G();
    };
    /**
     * @return {undefined}
     */
    Promise.prototype.X = function () {
      var target = this;
      setTimeout(function () {
        if (target.T()) {
          var async = root.console;
          if ("undefined" !== typeof async) {
            async.error(target.j);
          }
        }
      }, 1);
    };
    /**
     * @return {?}
     */
    Promise.prototype.T = function () {
      if (this.A) {
        return false;
      }
      var event = root.CustomEvent;
      var Event = root.Event;
      var $ = root.dispatchEvent;
      if ("undefined" === typeof $) {
        return true;
      }
      if ("function" === typeof event) {
        event = new event("unhandledrejection", {
          cancelable: true
        });
      } else {
        if ("function" === typeof Event) {
          event = new Event("unhandledrejection", {
            cancelable: true
          });
        } else {
          event = root.document.createEvent("CustomEvent");
          event.initCustomEvent("unhandledrejection", false, true, event);
        }
      }
      event.promise = this;
      event.reason = this.j;
      return $(event);
    };
    /**
     * @return {undefined}
     */
    Promise.prototype.G = function () {
      if (null != this.h) {
        /** @type {number} */
        var i = 0;
        for (; i < this.h.length; ++i) {
          z.h(this.h[i]);
        }
        /** @type {null} */
        this.h = null;
      }
    };
    var z = new p;
    /**
     * @param {!Object} nextPromise
     * @return {undefined}
     */
    Promise.prototype.ca = function (nextPromise) {
      var resultCapability = this.l();
      nextPromise.na(resultCapability.resolve, resultCapability.reject);
    };
    /**
     * @param {!Function} then
     * @param {?} value
     * @return {undefined}
     */
    Promise.prototype.la = function (then, value) {
      var deferred = this.l();
      try {
        then.call(value, deferred.resolve, deferred.reject);
      } catch (exception) {
        deferred.reject(exception);
      }
    };
    /**
     * @param {!Function} callback
     * @param {!Function} arg
     * @return {?}
     */
    Promise.prototype.then = function (callback, arg) {
      /**
       * @param {!Function} fn
       * @param {(!Function|boolean)} callback
       * @return {?}
       */
      function fn(fn, callback) {
        return "function" == typeof fn ? function (newComponent) {
          try {
            resolve(fn(newComponent));
          } catch (allNewFiles) {
            update(allNewFiles);
          }
        } : callback;
      }
      var resolve;
      var update;
      var thenPromise = new Promise(function (rs, res) {
        resolve = rs;
        update = res;
      });
      this.na(fn(callback, resolve), fn(arg, update));
      return thenPromise;
    };
    /**
     * @param {!Function} handler
     * @return {?}
     */
    Promise.prototype.catch = function (handler) {
      return this.then(void 0, handler);
    };
    /**
     * @param {?} expect
     * @param {?} cb
     * @return {undefined}
     */
    Promise.prototype.na = function (expect, cb) {
      /**
       * @return {undefined}
       */
      function start() {
        switch (result.g) {
          case 1:
            expect(result.j);
            break;
          case 2:
            cb(result.j);
            break;
          default:
            throw Error("Unexpected state: " + result.g);
        }
      }
      var result = this;
      if (null == this.h) {
        z.h(start);
      } else {
        this.h.push(start);
      }
      /** @type {boolean} */
      this.A = true;
    };
    /** @type {function(?): ?} */
    Promise.resolve = resolve;
    /**
     * @param {?} reason
     * @return {?}
     */
    Promise.reject = function (reason) {
      return new Promise(function (canCreateDiscussions, reject$2) {
        reject$2(reason);
      });
    };
    /**
     * @param {!Array} a
     * @return {?}
     */
    Promise.race = function (a) {
      return new Promise(function (T, cb0) {
        var f = $(a);
        var result = f.next();
        for (; !result.done; result = f.next()) {
          resolve(result.value).na(T, cb0);
        }
      });
    };
    /**
     * @param {!Array} runners
     * @return {?}
     */
    Promise.all = function (runners) {
      var $openEl = $(runners);
      var e = $openEl.next();
      return e.done ? resolve([]) : new Promise(function (resolve, cb0) {
        /**
         * @param {number} k
         * @return {?}
         */
        function d(k) {
          return function (name) {
            fileData[k] = name;
            y$jscomp$71--;
            if (0 == y$jscomp$71) {
              resolve(fileData);
            }
          };
        }
        /** @type {!Array} */
        var fileData = [];
        /** @type {number} */
        var y$jscomp$71 = 0;
        do {
          fileData.push(void 0);
          y$jscomp$71++;
          resolve(e.value).na(d(fileData.length - 1), cb0);
          e = $openEl.next();
        } while (!e.done);
      });
    };
    return Promise;
  }, "es6");
  test("Array.prototype.find", function (canCreateDiscussions) {
    return canCreateDiscussions ? canCreateDiscussions : function (client, gen34_options) {
      a: {
        var text = this;
        if (text instanceof String) {
          /** @type {string} */
          text = String(text);
        }
        var l = text.length;
        /** @type {number} */
        var i = 0;
        for (; i < l; i++) {
          var c = text[i];
          if (client.call(gen34_options, c, i, text)) {
            client = c;
            break a;
          }
        }
        client = void 0;
      }
      return client;
    };
  }, "es6");
  test("WeakMap", function (result) {
    /**
     * @param {?} folder
     * @return {undefined}
     */
    function Traverse(folder) {
      /** @type {string} */
      this.g = (buf = buf + (Math.random() + 1)).toString();
      if (folder) {
        folder = $(folder);
        var result;
        for (; !(result = folder.next()).done;) {
          result = result.value;
          this.set(result[0], result[1]);
        }
      }
    }
    /**
     * @return {undefined}
     */
    function Method() {
    }
    /**
     * @param {!Object} o
     * @return {?}
     */
    function isObject(o) {
      /** @type {string} */
      var type = typeof o;
      return "object" === type && null !== o || "function" === type;
    }
    if (function () {
      if (!result || !Object.seal) {
        return false;
      }
      try {
        var win = Object.seal({});
        var arg = Object.seal({});
        var r = new result([[win, 2], [arg, 3]]);
        if (2 != r.get(win) || 3 != r.get(arg)) {
          return false;
        }
        r.delete(win);
        r.set(arg, 4);
        return !r.has(win) && 4 == r.get(arg);
      } catch (l$jscomp$29) {
        return false;
      }
    }()) {
      return result;
    }
    /** @type {string} */
    var prop = "$jscomp_hidden_" + Math.random();
    /** @type {number} */
    var buf = 0;
    /**
     * @param {!Object} obj
     * @param {!Function} key
     * @return {?}
     */
    Traverse.prototype.set = function (obj, key) {
      if (!isObject(obj)) {
        throw Error("Invalid WeakMap key");
      }
      if (!isFunction(obj, prop)) {
        var method = new Method;
        defineProperty(obj, prop, {
          value: method
        });
      }
      if (!isFunction(obj, prop)) {
        throw Error("WeakMap key fail: " + obj);
      }
      /** @type {!Function} */
      obj[prop][this.g] = key;
      return this;
    };
    /**
     * @param {!Object} obj
     * @return {?}
     */
    Traverse.prototype.get = function (obj) {
      return isObject(obj) && isFunction(obj, prop) ? obj[prop][this.g] : void 0;
    };
    /**
     * @param {!Object} obj
     * @return {?}
     */
    Traverse.prototype.has = function (obj) {
      return isObject(obj) && isFunction(obj, prop) && isFunction(obj[prop], this.g);
    };
    /**
     * @param {!Object} obj
     * @return {?}
     */
    Traverse.prototype.delete = function (obj) {
      return isObject(obj) && isFunction(obj, prop) && isFunction(obj[prop], this.g) ? delete obj[prop][this.g] : false;
    };
    return Traverse;
  }, "es6");
  test("Map", function (constructor) {
    /**
     * @return {?}
     */
    function init() {
      var head = {};
      return head.P = head.next = head.head = head;
    }
    /**
     * @param {!Object} args
     * @param {!Function} fn
     * @return {?}
     */
    function call(args, fn) {
      var node = args[1];
      return operation(function () {
        if (node) {
          for (; node.head != args[1];) {
            node = node.P;
          }
          for (; node.next != node.head;) {
            return node = node.next, {
              done: false,
              value: fn(node)
            };
          }
          /** @type {null} */
          node = null;
        }
        return {
          done: true,
          value: void 0
        };
      });
    }
    /**
     * @param {string} index
     * @param {!Object} value
     * @return {?}
     */
    function f(index, value) {
      /** @type {string} */
      var type = value && typeof value;
      if ("object" == type || "function" == type) {
        if (updatedSet.has(value)) {
          type = updatedSet.get(value);
        } else {
          /** @type {string} */
          type = "" + ++nextGuid;
          updatedSet.set(value, type);
        }
      } else {
        /** @type {string} */
        type = "p_" + value;
      }
      var result = index[0][type];
      if (result && isFunction(index[0], type)) {
        /** @type {number} */
        index = 0;
        for (; index < result.length; index++) {
          var state = result[index];
          if (value !== value && state.key !== state.key || value === state.key) {
            return {
              id: type,
              list: result,
              index: index,
              C: state
            };
          }
        }
      }
      return {
        id: type,
        list: result,
        index: -1,
        C: void 0
      };
    }
    /**
     * @param {?} s
     * @return {undefined}
     */
    function Map(s) {
      this[0] = {};
      this[1] = init();
      /** @type {number} */
      this.size = 0;
      if (s) {
        s = $(s);
        var result;
        for (; !(result = s.next()).done;) {
          result = result.value;
          this.set(result[0], result[1]);
        }
      }
    }
    if (function () {
      if (!constructor || "function" != typeof constructor || !constructor.prototype.entries || "function" != typeof Object.seal) {
        return false;
      }
      try {
        var key = Object.seal({
          x: 4
        });
        var map = new constructor($([[key, "s"]]));
        if ("s" != map.get(key) || 1 != map.size || map.get({
          x: 4
        }) || map.set({
          x: 4
        }, "t") != map || 2 != map.size) {
          return false;
        }
        var deletedChar = map.entries();
        var item = deletedChar.next();
        if (item.done || item.value[0] != key || "s" != item.value[1]) {
          return false;
        }
        item = deletedChar.next();
        return item.done || 4 != item.value[0].x || "t" != item.value[1] || !deletedChar.next().done ? false : true;
      } catch (n$jscomp$19) {
        return false;
      }
    }()) {
      return constructor;
    }
    var updatedSet = new global.WeakMap;
    /**
     * @param {?} value
     * @param {!Function} key
     * @return {?}
     */
    Map.prototype.set = function (value, key) {
      value = 0 === value ? 0 : value;
      var node = f(this, value);
      if (!node.list) {
        /** @type {!Array} */
        node.list = this[0][node.id] = [];
      }
      if (node.C) {
        /** @type {!Function} */
        node.C.value = key;
      } else {
        node.C = {
          next: this[1],
          P: this[1].P,
          head: this[1],
          key: value,
          value: key
        };
        node.list.push(node.C);
        this[1].P.next = node.C;
        this[1].P = node.C;
        this.size++;
      }
      return this;
    };
    /**
     * @param {!Object} node
     * @return {?}
     */
    Map.prototype.delete = function (node) {
      node = f(this, node);
      return node.C && node.list ? (node.list.splice(node.index, 1), node.list.length || delete this[0][node.id], node.C.P.next = node.C.next, node.C.next.P = node.C.P, node.C.head = null, this.size--, true) : false;
    };
    /**
     * @return {undefined}
     */
    Map.prototype.clear = function () {
      this[0] = {};
      this[1] = this[1].P = init();
      /** @type {number} */
      this.size = 0;
    };
    /**
     * @param {!Object} key
     * @return {?}
     */
    Map.prototype.has = function (key) {
      return !!f(this, key).C;
    };
    /**
     * @param {!Object} elem
     * @return {?}
     */
    Map.prototype.get = function (elem) {
      return (elem = f(this, elem).C) && elem.value;
    };
    /**
     * @return {?}
     */
    Map.prototype.entries = function () {
      return call(this, function (dataItemObj) {
        return [dataItemObj.key, dataItemObj.value];
      });
    };
    /**
     * @return {?}
     */
    Map.prototype.keys = function () {
      return call(this, function (shortcutKeyObject) {
        return shortcutKeyObject.key;
      });
    };
    /**
     * @return {?}
     */
    Map.prototype.values = function () {
      return call(this, function (select_ele) {
        return select_ele.value;
      });
    };
    /**
     * @param {!Function} method
     * @param {!Object} context
     * @return {undefined}
     */
    Map.prototype.forEach = function (method, context) {
      var entries = this.entries();
      var array;
      for (; !(array = entries.next()).done;) {
        array = array.value;
        method.call(context, array[1], array[0], this);
      }
    };
    /** @type {function(): ?} */
    Map.prototype[define(global.Symbol, "iterator")] = Map.prototype.entries;
    /** @type {number} */
    var nextGuid = 0;
    return Map;
  }, "es6");
  test("Object.values", function (canCreateDiscussions) {
    return canCreateDiscussions ? canCreateDiscussions : function (obj) {
      /** @type {!Array} */
      var objarr = [];
      var key;
      for (key in obj) {
        if (isFunction(obj, key)) {
          objarr.push(obj[key]);
        }
      }
      return objarr;
    };
  }, "es8");
  test("Object.is", function (canCreateDiscussions) {
    return canCreateDiscussions ? canCreateDiscussions : function (a, b) {
      return a === b ? 0 !== a || 1 / a === 1 / b : a !== a && b !== b;
    };
  }, "es6");
  test("Array.prototype.includes", function (canCreateDiscussions) {
    return canCreateDiscussions ? canCreateDiscussions : function (type, idx) {
      var value = this;
      if (value instanceof String) {
        /** @type {string} */
        value = String(value);
      }
      var length = value.length;
      idx = idx || 0;
      if (0 > idx) {
        /** @type {number} */
        idx = Math.max(idx + length, 0);
      }
      for (; idx < length; idx++) {
        var val = value[idx];
        if (val === type || define(Object, "is").call(Object, val, type)) {
          return true;
        }
      }
      return false;
    };
  }, "es7");
  test("String.prototype.includes", function (canCreateDiscussions) {
    return canCreateDiscussions ? canCreateDiscussions : function (searchString, startIndex) {
      return -1 !== context(this, searchString, "includes").indexOf(searchString, startIndex || 0);
    };
  }, "es6");
  test("Number.isNaN", function (canCreateDiscussions) {
    return canCreateDiscussions ? canCreateDiscussions : function (value) {
      return "number" === typeof value && isNaN(value);
    };
  }, "es6");
  test("Array.from", function (canCreateDiscussions) {
    return canCreateDiscussions ? canCreateDiscussions : function (args, callback, item) {
      callback = null != callback ? callback : function (canCreateDiscussions) {
        return canCreateDiscussions;
      };
      /** @type {!Array} */
      var menuItems = [];
      var data = "undefined" != typeof global.Symbol && define(global.Symbol, "iterator") && args[define(global.Symbol, "iterator")];
      if ("function" == typeof data) {
        args = data.call(args);
        /** @type {number} */
        var i = 0;
        for (; !(data = args.next()).done;) {
          menuItems.push(callback.call(item, data.value, i++));
        }
      } else {
        data = args.length;
        /** @type {number} */
        i = 0;
        for (; i < data; i++) {
          menuItems.push(callback.call(item, args[i], i));
        }
      }
      return menuItems;
    };
  }, "es6");
  test("Array.prototype.keys", function (canCreateDiscussions) {
    return canCreateDiscussions ? canCreateDiscussions : function () {
      return assembleTree(this, function (canCreateDiscussions) {
        return canCreateDiscussions;
      });
    };
  }, "es6");
  test("Array.prototype.values", function (canCreateDiscussions) {
    return canCreateDiscussions ? canCreateDiscussions : function () {
      return assembleTree(this, function (canCreateDiscussions, isSlidingUp) {
        return isSlidingUp;
      });
    };
  }, "es8");
  test("Set", function (constructor) {
    /**
     * @param {?} label
     * @return {undefined}
     */
    function Map(label) {
      this.g = new global.Map;
      if (label) {
        label = $(label);
        var item;
        for (; !(item = label.next()).done;) {
          this.add(item.value);
        }
      }
      this.size = this.g.size;
    }
    if (function () {
      if (!constructor || "function" != typeof constructor || !constructor.prototype.entries || "function" != typeof Object.seal) {
        return false;
      }
      try {
        var value = Object.seal({
          x: 4
        });
        var object = new constructor($([value]));
        if (!object.has(value) || 1 != object.size || object.add(value) != object || 1 != object.size || object.add({
          x: 4
        }) != object || 2 != object.size) {
          return false;
        }
        var deletedChar = object.entries();
        var item = deletedChar.next();
        if (item.done || item.value[0] != value || item.value[1] != value) {
          return false;
        }
        item = deletedChar.next();
        return item.done || item.value[0] == value || 4 != item.value[0].x || item.value[1] != item.value[0] ? false : deletedChar.next().done;
      } catch (g$jscomp$110) {
        return false;
      }
    }()) {
      return constructor;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    Map.prototype.add = function (type) {
      type = 0 === type ? 0 : type;
      this.g.set(type, type);
      this.size = this.g.size;
      return this;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    Map.prototype.delete = function (key) {
      key = this.g.delete(key);
      this.size = this.g.size;
      return key;
    };
    /**
     * @return {undefined}
     */
    Map.prototype.clear = function () {
      this.g.clear();
      /** @type {number} */
      this.size = 0;
    };
    /**
     * @param {!Object} type
     * @return {?}
     */
    Map.prototype.has = function (type) {
      return this.g.has(type);
    };
    /**
     * @return {?}
     */
    Map.prototype.entries = function () {
      return this.g.entries();
    };
    /**
     * @return {?}
     */
    Map.prototype.values = function () {
      return define(this.g, "values").call(this.g);
    };
    Map.prototype.keys = define(Map.prototype, "values");
    Map.prototype[define(global.Symbol, "iterator")] = define(Map.prototype, "values");
    /**
     * @param {!Function} self
     * @param {!Object} context
     * @return {undefined}
     */
    Map.prototype.forEach = function (self, context) {
      var limit = this;
      this.g.forEach(function (signedAuthToken) {
        return self.call(context, signedAuthToken, signedAuthToken, limit);
      });
    };
    return Map;
  }, "es6");
  test("String.prototype.endsWith", function (canCreateDiscussions) {
    return canCreateDiscussions ? canCreateDiscussions : function (searchString, length) {
      var that = context(this, searchString, "endsWith");
      if (void 0 === length) {
        length = that.length;
      }
      /** @type {number} */
      length = Math.max(0, Math.min(length | 0, that.length));
      var bufferLength = searchString.length;
      for (; 0 < bufferLength && 0 < length;) {
        if (that[--length] != searchString[--bufferLength]) {
          return false;
        }
      }
      return 0 >= bufferLength;
    };
  }, "es6");
  test("String.prototype.startsWith", function (canCreateDiscussions) {
    return canCreateDiscussions ? canCreateDiscussions : function (searchString, index) {
      var that = context(this, searchString, "startsWith");
      var end = that.length;
      var len = searchString.length;
      /** @type {number} */
      index = Math.max(0, Math.min(index | 0, that.length));
      /** @type {number} */
      var i = 0;
      for (; i < len && index < end;) {
        if (that[index++] != searchString[i++]) {
          return false;
        }
      }
      return i >= len;
    };
  }, "es6");
  test("String.prototype.repeat", function (canCreateDiscussions) {
    return canCreateDiscussions ? canCreateDiscussions : function (flags) {
      var filename = context(this, null, "repeat");
      if (0 > flags || 1342177279 < flags) {
        throw new RangeError("Invalid count value");
      }
      /** @type {number} */
      flags = flags | 0;
      /** @type {string} */
      var src = "";
      for (; flags;) {
        if (flags & 1 && (src = src + filename), flags = flags >>> 1) {
          filename = filename + filename;
        }
      }
      return src;
    };
  }, "es6");
  test("globalThis", function (opt_folderId) {
    return opt_folderId || root;
  }, "es_2020");
  test("String.prototype.padStart", function (canCreateDiscussions) {
    return canCreateDiscussions ? canCreateDiscussions : function (y, options) {
      var a = context(this, null, "padStart");
      /** @type {number} */
      y = y - a.length;
      /** @type {string} */
      options = void 0 !== options ? String(options) : " ";
      return (0 < y && options ? define(options, "repeat").call(options, Math.ceil(y / options.length)).substring(0, y) : "") + a;
    };
  }, "es8");
  test("Promise.prototype.finally", function (canCreateDiscussions) {
    return canCreateDiscussions ? canCreateDiscussions : function (functionToRunLater) {
      return this.then(function (canCreateDiscussions) {
        return global.Promise.resolve(functionToRunLater()).then(function () {
          return canCreateDiscussions;
        });
      }, function (canCreateDiscussions) {
        return global.Promise.resolve(functionToRunLater()).then(function () {
          throw canCreateDiscussions;
        });
      });
    };
  }, "es9");
  var win = this || self;
  /** @type {string} */
  var opt = "closure_uid_" + (1E9 * Math.random() >>> 0);
  /** @type {number} */
  var Na$jscomp$0 = 0;
  /** @type {number} */
  var lowerLimit = (new Date).getTime();
  var isPopupCustom;
  var searchwindow = rowSort("CLOSURE_FLAGS");
  var searchwindowclass = searchwindow && searchwindow[610401301];
  isPopupCustom = null != searchwindowclass ? searchwindowclass : false;
  var $scope;
  var nav = win.navigator;
  $scope = nav ? nav.userAgentData || null : null;
  /**
   * @return {undefined}
   */
  div[" "] = function () {
  };
  var ie = isIE();
  if (!!toLowerCase("Android")) {
    _detectBrowserVersion();
  }
  _detectBrowserVersion();
  getBrowserInfo();
  var nums = {};
  /** @type {null} */
  var processor = null;
  /** @type {boolean} */
  var field = "undefined" !== typeof Uint8Array;
  /** @type {boolean} */
  var Cb$jscomp$0 = !ie && "function" === typeof btoa;
  var globalSymbol = "function" === typeof global.Symbol && "symbol" === typeof (0, global.Symbol)() ? (0, global.Symbol)() : void 0;
  var hasOwnProperty = globalSymbol ? function (data, mask) {
    data[globalSymbol] |= mask;
  } : function (source, flag) {
    if (void 0 !== source.g) {
      source.g |= flag;
    } else {
      Object.defineProperties(source, {
        g: {
          value: flag,
          configurable: true,
          writable: true,
          enumerable: false
        }
      });
    }
  };
  var tag = globalSymbol ? function (S, partKeys) {
    S[globalSymbol] &= ~partKeys;
  } : function (node, value) {
    if (void 0 !== node.g) {
      node.g &= ~value;
    }
  };
  var NumberFn = globalSymbol ? function (str) {
    return str[globalSymbol] | 0;
  } : function (obj) {
    return obj.g | 0;
  };
  var StringFn = globalSymbol ? function (exprCode) {
    return exprCode[globalSymbol];
  } : function (exprCode) {
    return exprCode.g;
  };
  var assertEquals = globalSymbol ? function (node, text) {
    /** @type {number} */
    node[globalSymbol] = text;
  } : function (node, x) {
    if (void 0 !== node.g) {
      /** @type {number} */
      node.g = x;
    } else {
      Object.defineProperties(node, {
        g: {
          value: x,
          configurable: true,
          writable: true,
          enumerable: false
        }
      });
    }
  };
  var undefined = {};
  var Sb$jscomp$0;
  var key;
  /** @type {!Array} */
  var key_node = [];
  assertEquals(key_node, 23);
  /** @type {!Array} */
  key = Object.freeze(key_node);
  var version = "function" === typeof global.Symbol && "symbol" === typeof (0, global.Symbol)() ? (0, global.Symbol)() : "di";
  var cacheConfigName;
  var crx2ffwarn = "undefined" != typeof structuredClone ? structuredClone : function (month) {
    return normalize(month, length, void 0, void 0, false, false);
  };
  /**
   * @return {?}
   */
  Base.prototype.toJSON = function () {
    if (Sb$jscomp$0) {
      var ret = exports(this, this.i, false);
    } else {
      ret = normalize(this.i, y, void 0, void 0, false, false);
      ret = exports(this, ret, true);
    }
    return ret;
  };
  Base.prototype.sa = undefined;
  var ionic_img_cache = void 0;
  __extends(opts, Base);
  __extends(result, Base);
  /** @type {!Array} */
  result.v = [2, 3, 4];
  var g = {};
  var jump = {};
  var _track;
  /**
   * @return {?}
   */
  PromiseBox.prototype.toString = function () {
    return this.h + "";
  };
  /** @type {!RegExp} */
  var moveRegex = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
  var rej = {};
  /**
   * @return {?}
   */
  array.prototype.toString = function () {
    return this.g.toString();
  };
  documentPrototype = globalDocument.prototype;
  /**
   * @param {string} tagName
   * @param {(Object|null|string)} context
   * @return {?}
   */
  documentPrototype.getElementsByTagName = function (tagName, context) {
    return (context || this.g).getElementsByTagName(String(tagName));
  };
  /**
   * @param {string} name
   * @return {?}
   */
  documentPrototype.createElement = function (name) {
    var c = this.g;
    /** @type {string} */
    name = String(name);
    if ("application/xhtml+xml" === c.contentType) {
      /** @type {string} */
      name = name.toLowerCase();
    }
    return c.createElement(name);
  };
  /**
   * @param {string} text
   * @return {?}
   */
  documentPrototype.createTextNode = function (text) {
    return this.g.createTextNode(String(text));
  };
  /**
   * @param {!Element} elem
   * @param {?} attrs
   * @return {undefined}
   */
  documentPrototype.append = function (elem, attrs) {
    configure(9 == elem.nodeType ? elem : elem.ownerDocument || elem.document, elem, arguments);
  };
  /**
   * @param {!Object} p
   * @param {!Object} c
   * @return {?}
   */
  documentPrototype.contains = function (p, c) {
    if (!p || !c) {
      return false;
    }
    if (p.contains && 1 == c.nodeType) {
      return p == c || p.contains(c);
    }
    if ("undefined" != typeof p.compareDocumentPosition) {
      return p == c || !!(p.compareDocumentPosition(c) & 16);
    }
    for (; c && p != c;) {
      c = c.parentNode;
    }
    return c == p;
  };
  /** @type {!RegExp} */
  var splitter = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
  /** @type {!RegExp} */
  var from = /#|$/;
  var currentRelations;
  try {
    new URL("s://g");
    /** @type {boolean} */
    currentRelations = true;
  } catch (a$jscomp$767) {
    /** @type {boolean} */
    currentRelations = false;
  }
  /** @type {boolean} */
  var addedRelations = currentRelations;
  /** @type {!Array<string>} */
  var transport = "alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");
  var keyEventEsc = bindEvents(function () {
    return pipe(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], uniq) || 1E-4 > Math.random();
  });
  var fadeToGame = bindEvents(function () {
    return uniq("MSIE");
  });
  /** @type {!RegExp} */
  var percentRegExp = /^([0-9.]+)px$/;
  /** @type {!RegExp} */
  var rNum = /^(-?[0-9.]{1,30})$/;
  var calcularImpostos = bindEvents(function () {
    return detectFromUA() ? 2 : isMobile() ? 1 : 0;
  });
  /** @type {!Array} */
  var ret = [];
  /** @type {null} */
  var interestingPoint = null;
  /** @type {!HTMLDocument} */
  var aDocument = document;
  /** @type {!Window} */
  var globalWindow = window;
  /** @type {null} */
  var testCase = null;
  /** @type {!RegExp} */
  var black = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
  /** @type {null} */
  var bufferGlobal = null;
  var perf = win.performance;
  /** @type {boolean} */
  var prevFinal = !!(perf && perf.mark && perf.measure && perf.clearMarks);
  var fadeOut = bindEvents(function () {
    var final;
    if (final = prevFinal) {
      final = end();
      /** @type {boolean} */
      final = !!final.indexOf && 0 <= final.indexOf("1337");
    }
    return final;
  });
  /**
   * @param {!Function} node
   * @param {?} name
   * @return {?}
   */
  Controller.prototype.start = function (node, name) {
    if (!this.g) {
      return null;
    }
    node = new toggle(node, name);
    /** @type {string} */
    name = "goog_" + node.label + "_" + node.uniqueId + "_start";
    if (perf && fadeOut()) {
      perf.mark(name);
    }
    return node;
  };
  /**
   * @param {!Object} settings
   * @return {undefined}
   */
  Controller.prototype.end = function (settings) {
    if (this.g && "number" === typeof settings.value) {
      /** @type {number} */
      settings.duration = (redraw() || now()) - settings.value;
      /** @type {string} */
      var name = "goog_" + settings.label + "_" + settings.uniqueId + "_end";
      if (perf && fadeOut()) {
        perf.mark(name);
      }
      if (!(!this.g || 2048 < this.h.length)) {
        this.h.push(settings);
      }
    }
  };
  documentPrototype = Slider.prototype;
  /**
   * @param {string} cfg
   * @return {undefined}
   */
  documentPrototype.ab = function (cfg) {
    /** @type {string} */
    this.l = cfg;
  };
  /**
   * @param {string} elem
   * @return {undefined}
   */
  documentPrototype.Da = function (elem) {
    /** @type {string} */
    this.g = elem;
  };
  /**
   * @param {number} b
   * @return {undefined}
   */
  documentPrototype.Ea = function (b) {
    /** @type {number} */
    this.j = b;
  };
  /**
   * @param {?} input
   * @param {!Function} number
   * @param {string} name
   * @return {?}
   */
  documentPrototype.ua = function (input, number, name) {
    try {
      if (this.h && this.h.g) {
        var key = this.h.start(input.toString(), 3);
        var num = number();
        this.h.end(key);
      } else {
        num = number();
      }
    } catch (n) {
      number = this.m;
      try {
        item(key);
        number = this.l(input, new ArraySliceFn(n, {
          message: t(n)
        }), void 0, name);
      } catch (params) {
        this.J(217, params);
      }
      if (number) {
        var _ref1;
        var callback;
        if (!(null == (_ref1 = window.console) || null == (callback = _ref1.error))) {
          callback.call(_ref1, n);
        }
      } else {
        throw n;
      }
    }
    return num;
  };
  /**
   * @param {?} name
   * @param {!Function} raw
   * @return {?}
   */
  documentPrototype.Wa = function (name, raw) {
    var IncomingRequest = this;
    return function () {
      var bytes = htmlWebPackPluginAssets.apply(0, arguments);
      return IncomingRequest.ua(name, function () {
        return raw.apply(void 0, bytes);
      });
    };
  };
  /**
   * @param {!Object} v
   * @param {!Object} data
   * @param {!Object} c
   * @param {string} el
   * @param {!Object} innerHtml
   * @return {?}
   */
  documentPrototype.J = function (v, data, c, el, innerHtml) {
    /** @type {!Object} */
    innerHtml = innerHtml || "jserror";
    try {
      var parent = new buildPortals;
      parent.g.push(1);
      parent.h[1] = endsWith("context", v);
      if (!onComplete(data)) {
        data = new ArraySliceFn(data, {
          message: t(data)
        });
      }
      if (data.msg) {
        var length = data.msg.substring(0, 512);
        parent.g.push(2);
        parent.h[2] = endsWith("msg", length);
      }
      var input = data.meta || {};
      if (this.g) {
        try {
          this.g(input);
        } catch (Jb$jscomp$1) {
        }
      }
      if (el) {
        try {
          el(input);
        } catch (Jb$jscomp$2) {
        }
      }
      /** @type {!Array} */
      data = [input];
      parent.g.push(3);
      /** @type {!Array} */
      parent.h[3] = data;
      el = win;
      /** @type {!Array} */
      data = [];
      /** @type {null} */
      length = null;
      do {
        var target = el;
        if (defined(target)) {
          var i = target.location.href;
          length = target.document && target.document.referrer || null;
        } else {
          i = length;
          /** @type {null} */
          length = null;
        }
        data.push(new Buffer(i || "", target));
        try {
          el = target.parent;
        } catch (Jb$jscomp$3) {
          /** @type {null} */
          el = null;
        }
      } while (el && target != el);
      /** @type {number} */
      i = 0;
      /** @type {number} */
      var index = data.length - 1;
      for (; i <= index; ++i) {
        /** @type {number} */
        data[i].depth = index - i;
      }
      target = win;
      if (target.location && target.location.ancestorOrigins && target.location.ancestorOrigins.length == data.length - 1) {
        /** @type {number} */
        index = 1;
        for (; index < data.length; ++index) {
          var p = data[index];
          if (!p.url) {
            p.url = target.location.ancestorOrigins[index - 1] || "";
            /** @type {boolean} */
            p.Sa = true;
          }
        }
      }
      var n = new Buffer(win.location.href, win, false);
      /** @type {null} */
      target = null;
      /** @type {number} */
      var id = data.length - 1;
      /** @type {number} */
      p = id;
      for (; 0 <= p; --p) {
        var value = data[p];
        if (!target && black.test(value.url)) {
          target = value;
        }
        if (value.url && !value.Sa) {
          n = value;
          break;
        }
      }
      /** @type {null} */
      value = null;
      var A$jscomp$9 = data.length && data[id].url;
      if (0 != n.depth && A$jscomp$9) {
        value = data[id];
      }
      var result = new BigNumber(n, value);
      if (result.h) {
        var actual = result.h.url || "";
        parent.g.push(4);
        parent.h[4] = endsWith("top", actual);
      }
      var ajaxCfg = {
        url: result.g.url || ""
      };
      if (result.g.url) {
        var data = result.g.url.match(splitter);
        var counter = data[1];
        var total = data[3];
        var i = data[4];
        /** @type {string} */
        n = "";
        if (counter) {
          /** @type {string} */
          n = n + (counter + ":");
        }
        if (total) {
          /** @type {string} */
          n = n + "//";
          /** @type {string} */
          n = n + total;
          if (i) {
            /** @type {string} */
            n = n + (":" + i);
          }
        }
        /** @type {string} */
        var cur = n;
      } else {
        /** @type {string} */
        cur = "";
      }
      /** @type {!Array} */
      ajaxCfg = [ajaxCfg, {
        url: cur
      }];
      parent.g.push(5);
      /** @type {!Array} */
      parent.h[5] = ajaxCfg;
      html(this.u, innerHtml, parent, this.j, c);
    } catch (e) {
      try {
        html(this.u, innerHtml, {
          context: "ecmserr",
          rctx: v,
          msg: t(e),
          url: result && result.g.url
        }, this.j, c);
      } catch (Zh$jscomp$1) {
      }
    }
    return this.m;
  };
  /**
   * @param {?} n
   * @param {!Object} s
   * @return {undefined}
   */
  documentPrototype.Ba = function (n, s) {
    var settings = this;
    s.catch(function (error) {
      error = error ? error : "unknown rejection";
      settings.J(n, error instanceof Error ? error : Error(error), void 0, settings.g || void 0);
    });
  };
  __extends(position, Base);
  /** @type {!Array} */
  position.v = [2, 8];
  /** @type {!Array} */
  var w = [3, 4, 5];
  /** @type {!Array} */
  var entry = [6, 7];
  __extends(foo, Base);
  /** @type {!Array} */
  foo.v = [4];
  __extends(Expression, Base);
  /**
   * @return {?}
   */
  Expression.prototype.getValue = function () {
    return get(this, foo, 2);
  };
  __extends(args, Base);
  var handleWSMessageFn = handleWSMessage(args);
  /** @type {!Array} */
  args.v = [5];
  /** @type {!Array} */
  var offset = [1, 2, 3, 6, 7];
  __extends(Field, Base);
  /** @type {!Array} */
  Field.v = [2];
  __extends(MinimaxProblemDisplay, Base);
  /**
   * @return {?}
   */
  MinimaxProblemDisplay.prototype.getValue = function () {
    return resolve(this, 1);
  };
  __extends(Animation, Base);
  /**
   * @return {?}
   */
  Animation.prototype.getWidth = function () {
    return parseInt(has(this, 1), 0);
  };
  /**
   * @return {?}
   */
  Animation.prototype.getHeight = function () {
    return parseInt(has(this, 2), 0);
  };
  __extends(ReturnStatement, Base);
  /**
   * @return {?}
   */
  ReturnStatement.prototype.getContentUrl = function () {
    return format(this, 4);
  };
  __extends(Component, Base);
  __extends(hello, Base);
  __extends(Block, Base);
  /**
   * @return {?}
   */
  Block.prototype.getContentUrl = function () {
    return format(this, 1);
  };
  __extends(NineSlice, Base);
  /** @type {!Array} */
  var progress = [4, 5, 6, 8, 9, 10, 11];
  __extends(Stats, Base);
  __extends(Model, Base);
  __extends(Options, Base);
  /** @type {!Array} */
  var user = [1, 2];
  __extends(component, Base);
  /** @type {!Array} */
  component.v = [2, 4, 5];
  __extends(Code, Base);
  /** @type {!Array} */
  Code.v = [5];
  /** @type {!Array} */
  var err = [1, 2, 3, 4];
  __extends(Transform, Base);
  /** @type {!Array} */
  Transform.v = [2, 3];
  __extends(Variable, Base);
  /**
   * @return {?}
   */
  Variable.prototype.getTagSessionCorrelator = function () {
    return parseInt(has(this, 2), 0);
  };
  /** @type {!Array} */
  var summary = [4, 5, 7, 8];
  /** @type {boolean} */
  selection.prototype.m = false;
  __extends(Layout, selection);
  /**
   * @return {undefined}
   */
  page.prototype.Za = function () {
    var query = htmlWebPackPluginAssets.apply(0, arguments);
    var params = this;
    if (this.u && 65536 <= omit(this.g.concat(query)).length) {
      errorCallback(this);
    }
    this.g.push.apply(this.g, toArray(query));
    if (this.g.length >= this.m) {
      errorCallback(this);
    }
    if (this.g.length && null === this.h) {
      /** @type {number} */
      this.h = setTimeout(function () {
        errorCallback(params);
      }, this.G);
    }
  };
  __extends(Frame, page);
  /** @type {boolean} */
  var results = /^true$/.test("false");
  var formatRegex = bindEvents(function () {
    if (!results) {
      return {};
    }
    try {
      /** @type {(null|string)} */
      var favs_data = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
      if (favs_data) {
        return JSON.parse(favs_data);
      }
    } catch (b$jscomp$561) {
    }
    return {};
  });
  /**
   * @return {undefined}
   */
  r.prototype.j = function () {
  };
  /**
   * @return {undefined}
   */
  r.prototype.h = function () {
  };
  /**
   * @return {?}
   */
  r.prototype.l = function () {
    return [];
  };
  /**
   * @return {?}
   */
  r.prototype.g = function () {
    return [];
  };
  var control;
  var labelElement;
  var proto = new Controller(window);
  (function (path) {
    control = null != path ? path : new Particle;
    if ("number" !== typeof window.google_srt) {
      /** @type {number} */
      window.google_srt = Math.random();
    }
    copyStyles(control, window.google_srt);
    labelElement = new Slider(control, true, proto);
    labelElement.Da(function () {
    });
    labelElement.Ea(true);
    if ("complete" == window.document.readyState) {
      if (!window.google_measure_js_timing) {
        hide(proto);
      }
    } else {
      if (proto.g) {
        on(window, "load", function () {
          if (!window.google_measure_js_timing) {
            hide(proto);
          }
        });
      }
    }
  })();
  var arr = {
    Sb: 0,
    Rb: 1,
    Ob: 2,
    Jb: 3,
    Pb: 4,
    Kb: 5,
    Qb: 6,
    Mb: 7,
    Nb: 8,
    Ib: 9,
    Lb: 10,
    Tb: 11
  };
  var lines = {
    Vb: 0,
    Wb: 1,
    Ub: 2
  };
  /**
   * @param {!Object} is_connected
   * @return {undefined}
   */
  fastpromise.prototype.resolve = function (is_connected) {
    bind0(this);
    /** @type {number} */
    this.g = 1;
    /** @type {!Object} */
    this.l = is_connected;
    newEmptyYaku(this.h);
  };
  /**
   * @param {number} reason
   * @return {undefined}
   */
  fastpromise.prototype.reject = function (reason) {
    bind0(this);
    /** @type {number} */
    this.g = 2;
    /** @type {number} */
    this.j = reason;
    newEmptyYaku(this.h);
  };
  /**
   * @param {!Function} callback
   * @param {number} arg
   * @return {undefined}
   */
  RunHandlerTask.prototype.then = function (callback, arg) {
    if (this.h) {
      throw Error("Then functions already set.");
    }
    /** @type {!Function} */
    this.h = callback;
    /** @type {number} */
    this.j = arg;
    newEmptyYaku(this);
  };
  documentPrototype = Point.prototype;
  /**
   * @param {!Function} onDone
   * @return {undefined}
   */
  documentPrototype.forEach = function (onDone) {
    var etag = this;
    this.g.forEach(function (result, name) {
      return void onDone(result, name, etag);
    });
  };
  /**
   * @param {!Function} obj
   * @return {?}
   */
  documentPrototype.filter = function (obj) {
    return new Point(slice(this.g, obj));
  };
  /**
   * @param {!Function} object
   * @return {?}
   */
  documentPrototype.apply = function (object) {
    return new Point(object(this.g.slice(0)));
  };
  /**
   * @param {!Object} key
   * @return {?}
   */
  documentPrototype.get = function (key) {
    return this.g[key];
  };
  /**
   * @param {?} uri
   * @return {?}
   */
  documentPrototype.add = function (uri) {
    var search = this.g.slice(0);
    search.push(uri);
    return new Point(search);
  };
  /**
   * @param {!Object} value
   * @param {!Function} key
   * @return {undefined}
   */
  FirebaseStore.prototype.set = function (value, key) {
    var id = hash(value);
    /** @type {!Function} */
    this.g[id] = key;
    /** @type {!Object} */
    this.h[id] = value;
  };
  /**
   * @param {!Object} key
   * @param {string} noJson
   * @return {?}
   */
  FirebaseStore.prototype.get = function (key, noJson) {
    key = hash(key);
    return void 0 !== this.g[key] ? this.g[key] : noJson;
  };
  /**
   * @return {undefined}
   */
  FirebaseStore.prototype.clear = function () {
    this.g = {};
    this.h = {};
  };
  /**
   * @return {?}
   */
  Node.prototype.getValue = function () {
    return this.g.value;
  };
  /**
   * @param {!Function} value
   * @return {?}
   */
  Node.prototype.map = function (value) {
    return null != this.g ? (value = value(this.getValue()), value instanceof Node ? value : replace(value)) : this;
  };
  /**
   * @param {!Array} type
   * @return {undefined}
   */
  List.prototype.add = function (type) {
    this.g.set(type, true);
  };
  /**
   * @param {!Function} value
   * @return {?}
   */
  List.prototype.contains = function (value) {
    return void 0 !== this.g.g[hash(value)];
  };
  /**
   * @param {!Object} val
   * @param {?} key
   * @return {undefined}
   */
  Stream.prototype.set = function (val, key) {
    var y = this.g.get(val);
    if (!y) {
      y = new List;
      this.g.set(val, y);
    }
    y.add(key);
  };
  __extends(j, Base);
  /**
   * @return {?}
   */
  j.prototype.getId = function () {
    return reduce(this, 3);
  };
  /** @type {!Array} */
  j.v = [4];
  __extends(Class, Base);
  /**
   * @param {undefined} value
   * @return {?}
   */
  Class.prototype.setLocation = function (value) {
    return escapeStringInfo(this, 1, assign(value));
  };
  var URLObjBase = {};
  var new_paths = new model(["google-auto-placed"], (URLObjBase.google_reactive_ad_format = 40, URLObjBase.google_tag_origin = "qs", URLObjBase));
  var defaults = {
    overlays: 1,
    interstitials: 2,
    vignettes: 2,
    inserts: 3,
    immersives: 4,
    list_view: 5,
    full_page: 6,
    side_rails: 7
  };
  __extends(Map, Base);
  __extends(Item, Base);
  __extends(Image, Base);
  /** @type {!Array} */
  Image.v = [1];
  __extends(dir, Base);
  __extends(Generator, Base);
  __extends(range, Base);
  __extends(a, Base);
  /** @type {!Array} */
  a.v = [1];
  __extends(namespace, Base);
  __extends(date, Base);
  __extends(node, Base);
  /** @type {!Array} */
  node.v = [6, 7, 9, 10, 11];
  /**
   * @param {!Object} data
   * @return {?}
   */
  SegmentTree.prototype.query = function (data) {
    /** @type {!Array} */
    var x = [];
    try {
      x = data.querySelectorAll(this.l);
    } catch (f$jscomp$133) {
    }
    if (!x.length) {
      return [];
    }
    data = clean(x);
    data = createChordSymbols(this, data);
    if ("number" === typeof this.h) {
      /** @type {number} */
      x = this.h;
      if (0 > x) {
        x = x + data.length;
      }
      /** @type {!Array} */
      data = 0 <= x && x < data.length ? [data[x]] : [];
    }
    if ("number" === typeof this.j) {
      /** @type {!Array} */
      x = [];
      /** @type {number} */
      var key = 0;
      for (; key < data.length; key++) {
        var p = parseData(data[key]);
        /** @type {number} */
        var i = this.j;
        if (0 > i) {
          i = i + p.length;
        }
        if (0 <= i && i < p.length) {
          x.push(p[i]);
        }
      }
      /** @type {!Array} */
      data = x;
    }
    return data;
  };
  /**
   * @return {?}
   */
  SegmentTree.prototype.toString = function () {
    return JSON.stringify({
      nativeQuery: this.l,
      occurrenceIndex: this.h,
      paragraphIndex: this.j,
      ignoreMode: this.g
    });
  };
  var $fallbackLanguage = new ComponentProperty(1082, true);
  var loopConfig = new ComponentProperty(1271);
  var form = new getDataFromDataTransfer(1130, 100);
  var _arg = new function (g, b) {
    /** @type {number} */
    this.g = g;
    this.defaultValue = void 0 === b ? "" : b;
  }(14);
  var swatchConfig = new ComponentProperty(1247, true);
  var catconfig = new ComponentProperty(1272);
  var dontDelegate = new ComponentProperty(316);
  var middleware_config = new ComponentProperty(1207, true);
  var alignConfig = new ComponentProperty(313);
  var bufferResources = new ComponentProperty(369);
  var staticList = new ComponentProperty(1230);
  var yAxisModels = new ComponentProperty(1229);
  var colGroup = new ComponentProperty(1231);
  var name = new ComponentProperty(1171, true);
  var standardInjects = new ComponentProperty(1276);
  var winConfig = new ComponentProperty(217);
  var boundaryElements = new ComponentProperty(1278);
  var auth = new getDataFromDataTransfer(542281105, -1);
  var tempHeaderConf = new ComponentProperty(534095582);
  var inheritList = new ComponentProperty(1120);
  var _catconfigInternal = new ComponentProperty(547450892, true);
  var preScrapConfig = new ComponentProperty(544317767);
  var sortInput = new ComponentProperty(522099048, true);
  var tableHeaderConfigs = new ComponentProperty(529362570, true);
  var nrect = new ComponentProperty(506914611);
  var _configData = new ComponentProperty(501545959, true);
  var baseExtractConfig = new ComponentProperty(542187945);
  var AUTO_CREATE_CONFIG = new ComponentProperty(547823580);
  var reg = new getDataFromDataTransfer(1079, 5);
  var src = new function (g, value) {
    /** @type {!Array} */
    value = void 0 === value ? [] : value;
    /** @type {number} */
    this.g = g;
    /** @type {!Array} */
    this.defaultValue = value;
  }(1934, ["A7CQXglZzTrThjGTBEn1rWTxHOEtkWivwzgea+NjyardrwlieSjVuyG44PkYgIPGs8Q9svD8sF3Yedn0BBBjXAkAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A3vKT9yxRPjmXN3DpIiz58f5JykcWHjUo/W7hvmtjgh9jPpQgem9VbADiNovG8NkO6mRmk70Kex8/KUqAYWVWAEAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
    "A4A26Ymj79UVY7C7JGUS4BG1s7MdcDokAQf/RP0paks+RoTYbXHxceT/5L4iKcsleFCngi75YfNRGW2+SpVv1ggAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "As0hBNJ8h++fNYlkq8cTye2qDLyom8NddByiVytXGGD0YVE+2CEuTCpqXMDxdhOMILKoaiaYifwEvCRlJ/9GcQ8AAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==",
    "AgRYsXo24ypxC89CJanC+JgEmraCCBebKl8ZmG7Tj5oJNx0cmH0NtNRZs3NB5ubhpbX/bIt7l2zJOSyO64NGmwMAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ=="]);
  var lazyCfg = new ComponentProperty(203);
  var element = new ComponentProperty(84);
  var matrices = {
    rectangle: 1,
    horizontal: 2,
    vertical: 4
  };
  /**
   * @return {?}
   */
  parent.prototype.height = function () {
    return this.j;
  };
  /**
   * @param {number} data
   * @return {?}
   */
  parent.prototype.g = function (data) {
    return 300 < data && 300 < this.j ? this.L : Math.min(1200, Math.round(data));
  };
  /**
   * @return {undefined}
   */
  parent.prototype.h = function () {
  };
  var _obj = {};
  var obj = (_obj.google_ad_channel = true, _obj.google_ad_client = true, _obj.google_ad_host = true, _obj.google_ad_host_channel = true, _obj.google_adtest = true, _obj.google_tag_for_child_directed_treatment = true, _obj.google_tag_for_under_age_of_consent = true, _obj.google_tag_partner = true, _obj.google_restrict_data_processing = true, _obj.google_page_url = true, _obj.google_debug_params = true,
    _obj.google_shadow_mode = true, _obj.google_adbreak_test = true, _obj.google_ad_frequency_hint = true, _obj.google_admob_interstitial_slot = true, _obj.google_admob_rewarded_slot = true, _obj.google_admob_ads_only = true, _obj.google_max_ad_content_rating = true, _obj.google_traffic_source = true, _obj.google_overlays = true, _obj);
  /** @type {!RegExp} */
  var re = RegExp("(^| )adsbygoogle($| )");
  var individualResult = io(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]);
  documentPrototype = completeText.prototype;
  /**
   * @param {string} elem
   * @return {undefined}
   */
  documentPrototype.Da = function (elem) {
    /** @type {string} */
    this.g = elem;
  };
  /**
   * @param {string} level
   * @return {undefined}
   */
  documentPrototype.Ea = function (level) {
    /** @type {string} */
    this.l = level;
  };
  /**
   * @param {!Function} cfg
   * @return {undefined}
   */
  documentPrototype.ab = function (cfg) {
    /** @type {!Function} */
    this.h = cfg;
  };
  /**
   * @param {!Object} value
   * @param {!Object} a
   * @param {?} i
   * @param {!Object} n
   * @param {number} k
   * @return {?}
   */
  documentPrototype.J = function (value, a, i, n, k) {
    i = void 0 === i ? this.m : i;
    k = void 0 === k ? this.j : k;
    if ((this.l ? this.u : Math.random()) > i) {
      return false;
    }
    if (!onComplete(a)) {
      a = new ArraySliceFn(a, {
        context: value,
        id: k
      });
    }
    if (n || this.g) {
      a.meta = {};
      if (this.g) {
        this.g(a.meta);
      }
      if (n) {
        n(a.meta);
      }
    }
    win.google_js_errors = win.google_js_errors || [];
    win.google_js_errors.push(a);
    if (!win.error_rep_loaded) {
      refresh(win.document, this.A);
      /** @type {boolean} */
      win.error_rep_loaded = true;
    }
    return false;
  };
  /**
   * @param {?} c
   * @param {!Function} target
   * @param {string} number
   * @return {?}
   */
  documentPrototype.ua = function (c, target, number) {
    try {
      return target();
    } catch (params) {
      if (!this.h(c, params, this.m, number, this.j)) {
        throw params;
      }
    }
  };
  /**
   * @param {?} name
   * @param {!Function} raw
   * @return {?}
   */
  documentPrototype.Wa = function (name, raw) {
    var IncomingRequest = this;
    return function () {
      var bytes = htmlWebPackPluginAssets.apply(0, arguments);
      return IncomingRequest.ua(name, function () {
        return raw.apply(void 0, bytes);
      });
    };
  };
  /**
   * @param {?} name
   * @param {!Object} req
   * @return {undefined}
   */
  documentPrototype.Ba = function (name, req) {
    var UNITS = this;
    req.catch(function (error) {
      error = error ? error : "unknown rejection";
      UNITS.J(name, error instanceof Error ? error : Error(error), void 0, UNITS.g || void 0);
    });
  };
  var input = {
    1: 1,
    2: 2,
    3: 3,
    0: 0
  };
  var ram = {
    1: 0,
    2: 1,
    3: 2,
    4: 3
  };
  __extends(ws, Base);
  var _getElement = handleWSMessage(ws);
  __extends(str, Base);
  __extends(Style, Base);
  __extends(table, Base);
  __extends(first, Base);
  __extends(object, Base);
  __extends(k, Base);
  __extends(marker, Base);
  __extends(left, Base);
  __extends(Layer, Base);
  /**
   * @return {?}
   */
  Layer.prototype.getName = function () {
    return reduce(this, 4);
  };
  /** @type {!Array} */
  var len = [1, 2, 3];
  __extends(replacer, Base);
  /** @type {!Array} */
  replacer.v = [2, 5, 6, 11];
  __extends(right, Base);
  __extends(n, Base);
  /** @type {!Array} */
  var dtick = [1, 2];
  __extends(layer, Base);
  /** @type {!Array} */
  layer.v = [1, 4];
  __extends(Constructor, Base);
  var getNodeText = handleWSMessage(Constructor);
  /** @type {!Array} */
  Constructor.v = [1, 2, 5, 7];
  __extends(Exception, Error);
  var config;
  var path;
  var instance = new Controller(win);
  (function (options, parent) {
    parent = void 0 === parent ? true : parent;
    config = options || new Particle;
    if ("number" !== typeof win.google_srt) {
      /** @type {number} */
      win.google_srt = Math.random();
    }
    copyStyles(config, win.google_srt);
    path = new Slider(config, parent, instance);
    path.Ea(true);
    if ("complete" == win.document.readyState) {
      transitionEnd();
    } else {
      if (instance.g) {
        on(win, "load", function () {
          transitionEnd();
        });
      }
    }
  })();
  __extends(Column, Base);
  var isGoodSong = handleWSMessage(Column);
  /** @type {null} */
  var coordinates = null;
  var _styles = {};
  var CURRENT = (_styles[8] = "google_prev_ad_formats_by_region", _styles[9] = "google_prev_ad_slotnames_by_region", _styles);
  /**
   * @param {!Object} value
   * @param {!Function} key
   * @param {!Object} result
   * @return {undefined}
   */
  Config.prototype.set = function (value, key, result) {
    /** @type {boolean} */
    var idAttributeProvided = false;
    if ("object" === typeof result) {
      var year = result.hc;
      idAttributeProvided = result.ic || false;
      var parentKey = result.domain || void 0;
      var mixElem = result.path || void 0;
      var newWidth = result.vb;
    }
    if (/[;=\s]/.test(value)) {
      throw Error('Invalid cookie name "' + value + '"');
    }
    if (/[;\r\n]/.test(key)) {
      throw Error('Invalid cookie value "' + key + '"');
    }
    if (void 0 === newWidth) {
      /** @type {number} */
      newWidth = -1;
    }
    /** @type {string} */
    this.g.cookie = value + "=" + key + (parentKey ? ";domain=" + parentKey : "") + (mixElem ? ";path=" + mixElem : "") + (0 > newWidth ? "" : 0 == newWidth ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * newWidth)).toUTCString()) + (idAttributeProvided ? ";secure" : "") + (null != year ? ";samesite=" + year : "");
  };
  /**
   * @param {!Object} type
   * @param {string} force_promise
   * @return {?}
   */
  Config.prototype.get = function (type, force_promise) {
    /** @type {string} */
    var prefix = type + "=";
    var set = (this.g.cookie || "").split(";");
    /** @type {number} */
    var i = 0;
    var s;
    for (; i < set.length; i++) {
      s = exists(set[i]);
      if (0 == s.lastIndexOf(prefix, 0)) {
        return s.slice(prefix.length);
      }
      if (s == type) {
        return "";
      }
    }
    return force_promise;
  };
  /**
   * @return {?}
   */
  Config.prototype.isEmpty = function () {
    return !this.g.cookie;
  };
  /**
   * @return {undefined}
   */
  Config.prototype.clear = function () {
    var index = (this.g.cookie || "").split(";");
    /** @type {!Array} */
    var url = [];
    /** @type {!Array} */
    var p = [];
    var params;
    var resource;
    /** @type {number} */
    var i = 0;
    for (; i < index.length; i++) {
      resource = exists(index[i]);
      params = resource.indexOf("=");
      if (-1 == params) {
        url.push("");
        p.push(resource);
      } else {
        url.push(resource.substring(0, params));
        p.push(resource.substring(params + 1));
      }
    }
    /** @type {number} */
    index = url.length - 1;
    for (; 0 <= index; index--) {
      p = url[index];
      this.get(p);
      this.set(p, "", {
        vb: 0,
        path: void 0,
        domain: void 0
      });
    }
  };
  __extends(Info, Base);
  /** @type {!Array} */
  Info.v = [10];
  __extends(Store, selection);
  /**
   * @param {string} name
   * @return {undefined}
   */
  Store.prototype.addEventListener = function (name) {
    /**
     * @param {?} roots
     * @param {boolean} rootValueTypes
     * @return {undefined}
     */
    function f(roots, rootValueTypes) {
      clearTimeout(_takingTooLongTimeout);
      if (roots) {
        t = roots;
        t.internalErrorState = play(t);
        t.internalBlockOnErrors = cfg.u;
        if (!(rootValueTypes && 0 === t.internalErrorState)) {
          /** @type {string} */
          t.tcString = "tcunavailable";
          if (!rootValueTypes) {
            /** @type {number} */
            t.internalErrorState = 3;
          }
        }
      } else {
        /** @type {string} */
        t.tcString = "tcunavailable";
        /** @type {number} */
        t.internalErrorState = 3;
      }
      name(t);
    }
    var cfg = this;
    var t = {
      internalBlockOnErrors: this.u
    };
    var listener = block(function () {
      return name(t);
    });
    /** @type {number} */
    var _takingTooLongTimeout = 0;
    if (-1 !== this.B) {
      /** @type {number} */
      _takingTooLongTimeout = setTimeout(function () {
        /** @type {string} */
        t.tcString = "tcunavailable";
        /** @type {number} */
        t.internalErrorState = 1;
        listener();
      }, this.B);
    }
    try {
      getValue(this, "addEventListener", f);
    } catch (g$jscomp$116) {
      /** @type {string} */
      t.tcString = "tcunavailable";
      /** @type {number} */
      t.internalErrorState = 3;
      if (_takingTooLongTimeout) {
        clearTimeout(_takingTooLongTimeout);
        /** @type {number} */
        _takingTooLongTimeout = 0;
      }
      listener();
    }
  };
  /**
   * @param {string} name
   * @return {undefined}
   */
  Store.prototype.removeEventListener = function (name) {
    if (name && name.listenerId) {
      getValue(this, "removeEventListener", null, name.listenerId);
    }
  };
  __extends(Text, Base);
  /** @type {!Array} */
  Text.v = [1, 2, 3];
  __extends(prepare, Base);
  /** @type {!Array} */
  prepare.v = [1, 2, 3];
  __extends(meta, Base);
  /**
   * @return {undefined}
   */
  Game.prototype.start = function () {
    this.l();
  };
  /**
   * @return {undefined}
   */
  Game.prototype.l = function () {
    try {
      switch (this.j.document.readyState) {
        case "complete":
        case "interactive":
          add(this.g, true);
          Color(this);
          break;
        default:
          if (add(this.g, false)) {
            Color(this);
          } else {
            this.j.setTimeout(one(this.l, this), 100);
          }
      }
    } catch (uboard) {
      Color(this, uboard);
    }
  };
  __extends(Queue, Base);
  var values = {
    "-": 0,
    Y: 2,
    N: 1
  };
  var __codonToAminoAcid = {};
  var cachedMods = (__codonToAminoAcid[0] = "-", __codonToAminoAcid[2] = "Y", __codonToAminoAcid[1] = "N", __codonToAminoAcid);
  __extends(b, Base);
  /**
   * @return {?}
   */
  b.prototype.getVersion = function () {
    return getVersion(this, 2);
  };
  /** @type {!Array} */
  b.v = [3];
  __extends(Range, Base);
  __extends(Storage, Base);
  __extends(body, Base);
  /**
   * @return {?}
   */
  body.prototype.getVersion = function () {
    return getVersion(this, 1);
  };
  __extends(Autocomplete, Base);
  __extends(Sprite, Base);
  /** @type {!Array} */
  var crossfilterable_layers = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
  var min_piv = crossfilterable_layers.reduce(function (buckets, name) {
    return buckets + name;
  });
  /** @type {number} */
  var code = "a".charCodeAt();
  var prev = last(arr);
  var expected = last(lines);
  __extends(A, Base);
  __extends(level, Base);
  __extends(song, Base);
  __extends(unique, Base);
  __extends(day, Base);
  var moment = handleWSMessage(day);
  /** @type {!Array} */
  day.v = [7];
  [].concat(toArray(new global.Map([[8, "usca"], [9, "usva"], [10, "usco"], [12, "usct"]]))).sort(function (subtractor, subtractee) {
    return subtractor[0] - subtractee[0];
  }).map(function (canCreateDiscussions) {
    return canCreateDiscussions[1];
  });
  var selected = floor(getInternalProps(1));
  /**
   * @return {?}
   */
  B.prototype.getTimestamp = function () {
    return this.timestamp;
  };
  last(arr).map(function (minWorkers) {
    return Number(minWorkers);
  });
  last(lines).map(function (minWorkers) {
    return Number(minWorkers);
  });
  __extends(pos, Base);
  __extends(time, Base);
  var defaultConfig = handleWSMessage(time);
  /** @type {!Array} */
  time.v = [2];
  /**
   * @param {!Object} node
   * @param {?} input
   * @param {!Object} callback
   * @return {undefined}
   */
  move.prototype.u = function (node, input, callback) {
    if ("function" === typeof callback && "getUSPData" === node) {
      callback({
        version: 1,
        uspString: this.l
      }, true);
    }
  };
  /**
   * @param {string} s
   * @param {string} input
   * @param {!Object} action
   * @param {string} value
   * @return {undefined}
   */
  move.prototype.m = function (s, input, action, value) {
    /** @type {(null|string)} */
    value = void 0 === value ? null : value;
    if ("function" === typeof action) {
      if (input && (2.1 < input || 1 >= input)) {
        action(null, false);
      } else {
        switch (input = this.g.__tcfapiEventListeners, s) {
          case "getTCData":
            if (!value || Array.isArray(value) && value.every(function (maxKeyAge) {
              return "number" === typeof maxKeyAge;
            })) {
              action(fire(this, value, null), true);
            } else {
              action(null, false);
            }
            break;
          case "ping":
            action({
              gdprApplies: true,
              cmpLoaded: true,
              cmpStatus: "loaded",
              displayStatus: "disabled",
              apiVersion: "2.1",
              cmpVersion: 2,
              cmpId: 300
            });
            break;
          case "addEventListener":
            s = input.push(action);
            action(fire(this, null, s - 1), true);
            break;
          case "removeEventListener":
            if (input[value]) {
              /** @type {null} */
              input[value] = null;
              action(true);
            } else {
              action(false);
            }
            break;
          case "getInAppTCData":
          case "getVendorList":
            action(null, false);
        }
      }
    }
  };
  var _classes = {};
  var classes = (_classes.google_ad_channel = true, _classes.google_ad_host = true, _classes);
  __extends(v, Base);
  __extends(top, Base);
  /** @type {!Array} */
  top.v = [1];
  __extends(options, Base);
  /**
   * @return {?}
   */
  options.prototype.getId = function () {
    return getVersion(this, 1);
  };
  /** @type {!Array} */
  options.v = [2];
  __extends(precision, Base);
  /** @type {!Array} */
  precision.v = [2];
  __extends(store, Base);
  /** @type {!Array} */
  store.v = [2];
  __extends(index, Base);
  __extends(base, Base);
  /** @type {!Array} */
  base.v = [1, 4, 2, 3];
  __extends(Rectangle, Base);
  /** @type {!Array} */
  Rectangle.v = [19];
  /** @type {!Array} */
  var text = [13, 14];
  var release = void 0;
  /** @type {!Array} */
  var segment = [2, 7, 1];
  if (!ie) {
    getBrowserInfo();
  }
  var teardownPermutations = {
    "120x90": true,
    "160x90": true,
    "180x90": true,
    "200x90": true,
    "468x15": true,
    "728x15": true
  };
  __extends(View, parent);
  /**
   * @return {?}
   */
  View.prototype.va = function () {
    return this.ja;
  };
  /**
   * @param {!Object} key
   * @param {?} s
   * @param {!Object} data
   * @return {undefined}
   */
  View.prototype.h = function (key, s, data) {
    if (!s.google_ad_resize) {
      data.style.height = this.height() + "px";
      /** @type {boolean} */
      s.rpe = true;
    }
  };
  var _iconContainerStyle = {};
  var iconContainerStyle = (_iconContainerStyle.image_stacked = 1 / 1.91, _iconContainerStyle.image_sidebyside = 1 / 3.82, _iconContainerStyle.mobile_banner_image_sidebyside = 1 / 3.82, _iconContainerStyle.pub_control_image_stacked = 1 / 1.91, _iconContainerStyle.pub_control_image_sidebyside = 1 / 3.82, _iconContainerStyle.pub_control_image_card_stacked = 1 / 1.91, _iconContainerStyle.pub_control_image_card_sidebyside = 1 / 3.74, _iconContainerStyle.pub_control_text = 0, _iconContainerStyle.pub_control_text_card = 0, _iconContainerStyle);
  var _class = {};
  var BaseTarget = (_class.image_stacked = 80, _class.image_sidebyside = 0, _class.mobile_banner_image_sidebyside = 0, _class.pub_control_image_stacked = 80, _class.pub_control_image_sidebyside = 0, _class.pub_control_image_card_stacked = 85, _class.pub_control_image_card_sidebyside = 0, _class.pub_control_text = 80, _class.pub_control_text_card = 80, _class);
  var _a = {};
  var state = (_a.pub_control_image_stacked = 100, _a.pub_control_image_sidebyside = 200, _a.pub_control_image_card_stacked = 150, _a.pub_control_image_card_sidebyside = 250, _a.pub_control_text = 100, _a.pub_control_text_card = 150, _a);
  var elm = div("script");
  /**
   * @return {?}
   */
  Element.prototype.size = function () {
    return this.ca;
  };
  /** @type {!Array} */
  var docType = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];
  __extends(Calendar, parent);
  /**
   * @param {!Object} s
   * @return {?}
   */
  Calendar.prototype.g = function (s) {
    return Math.min(1200, Math.max(this.L, Math.round(s)));
  };
  __extends(Event, parent);
  /**
   * @return {?}
   */
  Event.prototype.g = function () {
    return this.L;
  };
  /**
   * @param {?} num
   * @param {?} s
   * @param {!Object} data
   * @return {undefined}
   */
  Event.prototype.h = function (num, s, data) {
    render(num, data);
    if (!s.google_ad_resize) {
      data.style.height = this.height() + "px";
      /** @type {boolean} */
      s.rpe = true;
    }
  };
  var sortedCols = {
    "image-top": function (canCreateDiscussions) {
      return 600 >= canCreateDiscussions ? 284 + .414 * (canCreateDiscussions - 250) : 429;
    },
    "image-middle": function (canCreateDiscussions) {
      return 500 >= canCreateDiscussions ? 196 - .13 * (canCreateDiscussions - 250) : 164 + .2 * (canCreateDiscussions - 500);
    },
    "image-side": function (canCreateDiscussions) {
      return 500 >= canCreateDiscussions ? 205 - .28 * (canCreateDiscussions - 250) : 134 + .21 * (canCreateDiscussions - 500);
    },
    "text-only": function (canCreateDiscussions) {
      return 500 >= canCreateDiscussions ? 187 - .228 * (canCreateDiscussions - 250) : 130;
    },
    "in-article": function (canCreateDiscussions) {
      return 420 >= canCreateDiscussions ? canCreateDiscussions / 1.2 : 460 >= canCreateDiscussions ? canCreateDiscussions / 1.91 + 130 : 800 >= canCreateDiscussions ? canCreateDiscussions / 4 : 200;
    }
  };
  __extends(Message, parent);
  /**
   * @return {?}
   */
  Message.prototype.g = function () {
    return Math.min(1200, this.L);
  };
  /** @type {!Array} */
  var mo$jscomp$0 = [new View(970, 90, 2), new View(728, 90, 2), new View(468, 60, 2), new View(336, 280, 1), new View(320, 100, 2), new View(320, 50, 2), new View(300, 600, 4), new View(300, 250, 1), new View(250, 250, 1), new View(234, 60, 2), new View(200, 200, 1), new View(180, 150, 1), new View(160, 600, 4), new View(125, 125, 1), new View(120, 600, 4), new View(120,
    240, 4), new View(120, 120, 1, true)];
  /** @type {!Array} */
  var charListNotLatin = [mo$jscomp$0[6], mo$jscomp$0[12], mo$jscomp$0[3], mo$jscomp$0[0], mo$jscomp$0[7], mo$jscomp$0[14], mo$jscomp$0[1], mo$jscomp$0[8], mo$jscomp$0[10], mo$jscomp$0[4], mo$jscomp$0[15], mo$jscomp$0[2], mo$jscomp$0[11], mo$jscomp$0[5], mo$jscomp$0[13], mo$jscomp$0[9], mo$jscomp$0[16]];
  var $jscomp$compprop0 = {};
  var iter = ($jscomp$compprop0.google_ad_modifications = true, $jscomp$compprop0.google_analytics_domain_name = true, $jscomp$compprop0.google_analytics_uacct = true, $jscomp$compprop0.google_pause_ad_requests = true, $jscomp$compprop0.google_user_agent_client_hint = true, $jscomp$compprop0);
  root.Object.defineProperties(settings.prototype, {
    j: {
      configurable: true,
      enumerable: true,
      get: function () {
        return this.g.ssp;
      }
    },
    l: {
      configurable: true,
      enumerable: true,
      get: function () {
        return this.g.cu;
      },
      set: function (value) {
        /** @type {!Object} */
        this.g.cu = value;
      }
    },
    m: {
      configurable: true,
      enumerable: true,
      get: function () {
        return null === this.g.psi ? new hello : testcase(hello, crx2ffwarn(this.g.psi));
      }
    }
  });
  var quux = {};
  var Cp$jscomp$0 = {};
  var Dp$jscomp$0 = {};
  var obj1 = {};
  var module = (obj1[3] = (quux[8] = function (a) {
    try {
      return null != rowSort(a);
    } catch (b$jscomp$586) {
    }
  }, quux[9] = function (a) {
    try {
      var obj = rowSort(a);
    } catch (c$jscomp$409) {
      return;
    }
    if (a = "function" === typeof obj) {
      /** @type {string} */
      obj = obj && obj.toString && obj.toString();
      /** @type {boolean} */
      a = "string" === typeof obj && -1 != obj.indexOf("[native code]");
    }
    return a;
  }, quux[10] = function () {
    return window === window.top;
  }, quux[6] = function (key) {
    return search(require(r).g(), Number(key));
  }, quux[27] = function (type) {
    type = typeOf(type, "boolean");
    return void 0 !== type ? type : void 0;
  }, quux[60] = function (nodeOrSelector) {
    try {
      return !!win.document.querySelector(nodeOrSelector);
    } catch (b$jscomp$588) {
    }
  }, quux[69] = function (p1__3354_SHARP_) {
    var parent = win.document;
    parent = void 0 === parent ? document : parent;
    var body;
    return !(null == (body = parent.featurePolicy) || !(url = body.features(), define(url, "includes")).call(url, p1__3354_SHARP_));
  }, quux[70] = function (p1__3354_SHARP_) {
    var doc = win.document;
    doc = void 0 === doc ? document : doc;
    var value;
    return !(null == (value = doc.featurePolicy) || !(url = value.allowedFeatures(), define(url, "includes")).call(url, p1__3354_SHARP_));
  }, quux), obj1[4] = (Cp$jscomp$0[3] = function () {
    return calcularImpostos();
  }, Cp$jscomp$0[6] = function (actual) {
    actual = typeOf(actual, "number");
    return void 0 !== actual ? actual : void 0;
  }, Cp$jscomp$0), obj1[5] = (Dp$jscomp$0[2] = function () {
    return window.location.href;
  }, Dp$jscomp$0[3] = function () {
    try {
      return window.top.location.hash;
    } catch (a$jscomp$838) {
      return "";
    }
  }, Dp$jscomp$0[4] = function (value) {
    value = typeOf(value, "string");
    return void 0 !== value ? value : void 0;
  }, Dp$jscomp$0), obj1);
  /** @type {!Array} */
  var domain = [12, 13, 20];
  var p;
  var target;
  var temp;
  var Xp$jscomp$0;
  var Yp$jscomp$0;
  var spikes;
  var speed = "undefined" === typeof argSpeed ? void 0 : argSpeed;
  var scrollX;
  var scrollY;
  /** @type {!Array} */
  var replay = [];
  __extends(Collection, Base);
  /**
   * @return {?}
   */
  Collection.prototype.getVersion = function () {
    return format(this, 2);
  };
  __extends(Set, Base);
  /** @type {!Array} */
  Set.v = [10, 6];
  /** @type {!Array<string>} */
  var jScramblerClient = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");
  __extends(Vector, selection);
  var that = {
    tb: function (_input) {
      return _input.K;
    },
    ub: function (module, data) {
      module = {};
      return module.__uspapiCall = {
        callId: data,
        command: "getUSPData",
        version: 1
      }, module;
    },
    wb: function (viewGetter, event) {
      event = event.__uspapiReturn;
      var value;
      viewGetter({
        consentData: null != (value = event.returnValue) ? value : void 0,
        kb: event.success ? void 0 : 2
      });
    }
  };
  __extends(Tab, selection);
  __extends(Behavior, Base);
  var cb_ = handleWSMessage(Behavior);
  var removeCritText = {
    tb: function (_input) {
      return _input.K;
    },
    ub: function (ssh_config, disable_tt) {
      return {
        __fciCall: {
          callId: disable_tt,
          command: ssh_config.command,
          spsp: ssh_config.spsp || void 0
        }
      };
    },
    wb: function (saveNotifs, events) {
      saveNotifs({
        consentData: events
      });
    }
  };
  __extends(Body, selection);
  var socket = io(["https://googleads.g.doubleclick.net"]);
  /** @type {null} */
  var current = null;
  /** @type {!Array} */
  var items = [];
  var data = new global.Map;
  /** @type {number} */
  var yr$jscomp$0 = -1;
  /** @type {boolean} */
  var Wr$jscomp$0 = false;
  var client = io(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/slotcar_library", ".js"]);
  var host = io(["https://googleads.g.doubleclick.net/pagead/html/", "/", "/zrt_lookup.html"]);
  var asyncSyncTime = io(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl", ".js"]);
  var fibersFutureTime = io(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl_with_ama", ".js"]);
  var first_result = io(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl_instrumented", ".js"]);
  (function (x1, width, complete, saveNotifs) {
    saveNotifs = void 0 === saveNotifs ? function () {
    } : saveNotifs;
    path.ab(message);
    setTimeoutPathUa(166, function () {
      var data = rectangle(width);
      mapModifications(format(data, 2));
      handlePeopleSearchResponse(expect(data, 6));
      saveNotifs();
      draw(16, [1, data.toJSON()]);
      var e = isNaN(deepClone(globalWindow)) || globalWindow;
      var node = complete(getData({
        xa: x1,
        Ca: format(data, 2)
      }), data);
      var options = null === globalWindow.document.currentScript ? 1 : matches(node.Fb);
      doUpgrade(e, data);
      error(e, data, options);
      if (indexOf(loopConfig)) {
        createLink();
      }
      runner(function (n) {
        callback(n, 1, getVersion(n, 1) + 1, 0);
        if (globalWindow.top === globalWindow) {
          callback(n, 2, getVersion(n, 2) + 1, 0);
        }
        if (!fromString(toNumber(n), 1)) {
          n = toNumber(n);
          go(n, 1);
        }
      });
      template(1086, transform(0 === options));
      if (!isIE() || 0 <= generate(parse(), 11)) {
        transitionEnd(indexOf(element));
        findOrCreate();
        loaded();
        try {
          setUp();
        } catch (n$jscomp$22) {
        }
        get_widget_elements();
        onLoad(node, data);
        /** @type {!Window} */
        e = window;
        options = e.adsbygoogle;
        if (!options || !options.loaded) {
          cb("new_abg_tag", {
            value: "" + expect(data, 16),
            host_v: "" + expect(data, 22),
            frequency: .01
          }, .01);
          openFile();
          var self = {
            push: function (name) {
              fireEvent(name, node, data);
            },
            loaded: true
          };
          try {
            Object.defineProperty(self, "requestNonPersonalizedAds", {
              set: pass
            });
            Object.defineProperty(self, "pauseAdRequests", {
              set: autoSubmit
            });
            Object.defineProperty(self, "onload", {
              set: _PS_runOn_impl
            });
          } catch (n$jscomp$24) {
          }
          if (options) {
            var $openEl = $(["requestNonPersonalizedAds", "pauseAdRequests"]);
            var item = $openEl.next();
            for (; !item.done; item = $openEl.next()) {
              item = item.value;
              if (void 0 !== options[item]) {
                self[item] = options[item];
              }
            }
          }
          step(options, node, data);
          e.adsbygoogle = self;
          if (options) {
            self.onload = options.onload;
          }
          if (!indexOf(catconfig)) {
            if (e = createIframe(node)) {
              document.documentElement.appendChild(e);
            }
          }
        }
      }
    });
  })("m202307170101", speed, function (options, key) {
    /** @type {string} */
    var password = 2012 < getVersion(key, 1) ? "_fy" + getVersion(key, 1) : "";
    var result = format(key, 3);
    var id = format(key, 2);
    key = ping(client, options, password);
    result = ping(host, id, result);
    return {
      Db: key,
      Bb: ping(asyncSyncTime, options, password),
      Ab: ping(fibersFutureTime, options, password),
      jc: ping(first_result, options, password),
      Hb: result,
      Fb: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/
    };
  });
}).call(this, '[2012,"r20230717","r20190131",null,null,null,null,".google.cn",null,null,null,[[[1082,null,null,[1]],[null,1130,null,[null,100]],[1270,null,null,[]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,500]]]],[1262,null,null,[1]],[1247,null,null,[1]],[1252,null,null,[1]],[1240,null,null,[1]],[null,1224,null,[null,0.01]],[null,1159,null,[null,500]],[1122,null,null,[1]],[1207,null,null,[1]],[null,1263,null,[null,-1]],[null,1265,null,[null,-1]],[null,1264,null,[null,-1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1205,null,null,[1]],[1241,null,null,[1]],[1236,null,null,[1]],[1223,null,null,[1]],[null,null,null,[null,null,null,["44786015","44786016"]],null,1261],[1167,null,null,[1]],[1129,null,null,[1]],[1171,null,null,[1]],[1276,null,null,[]],[1199,null,null,[1]],[1161,null,null,[1]],[null,1072,null,[null,0.75]],[1101,null,null,[1]],[1198,null,null,[1]],[1206,null,null,[1]],[1190,null,null,[1]],[null,1245,null,[null,3600]],[null,542281105,null,[null,-1]],[null,506864295,null,[null,300]],[null,508040914,null,[null,100]],[547450892,null,null,[1]],[522099048,null,null,[1]],[529362570,null,null,[1]],[540827546,null,null,[1]],[540248731,null,null,[1]],[501545959,null,null,[1]],[537288587,null,null,[1]],[null,469675170,null,[null,30000]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1080,null,[null,5]],[1086,null,null,[1]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[10007,null,null,[1]],[10005,null,null,[1]],[1033,null,null,[1]],[null,null,null,[null,null,null,["A7CQXglZzTrThjGTBEn1rWTxHOEtkWivwzgea+NjyardrwlieSjVuyG44PkYgIPGs8Q9svD8sF3Yedn0BBBjXAkAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==","A3vKT9yxRPjmXN3DpIiz58f5JykcWHjUo/W7hvmtjgh9jPpQgem9VbADiNovG8NkO6mRmk70Kex8/KUqAYWVWAEAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==","A4A26Ymj79UVY7C7JGUS4BG1s7MdcDokAQf/RP0paks+RoTYbXHxceT/5L4iKcsleFCngi75YfNRGW2+SpVv1ggAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==","As0hBNJ8h++fNYlkq8cTye2qDLyom8NddByiVytXGGD0YVE+2CEuTCpqXMDxdhOMILKoaiaYifwEvCRlJ/9GcQ8AAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==","AgRYsXo24ypxC89CJanC+JgEmraCCBebKl8ZmG7Tj5oJNx0cmH0NtNRZs3NB5ubhpbX/bIt7l2zJOSyO64NGmwMAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ=="]],null,1934],[1957,null,null,[1]],[null,1972,null,[]],[485990406,null,null,[]]],[[12,[[40,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,["LayoutShift"]],71],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]],null,61],[10,[[44769661],[44769662,[[1973,null,null,[1]]]]]]]],[13,[[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,["31061691"]]],[200,[[44783616,null,[4,null,70,null,null,null,null,["attribution-reporting"]]],[44791426,null,[4,null,70,null,null,null,null,["attribution-reporting"]]]],null,77],[200,[[44790623,null,[4,null,70,null,null,null,null,["attribution-reporting"]]],[44791427,null,[4,null,70,null,null,null,null,["attribution-reporting"]]]],null,77]]],[10,[[50,[[31067422],[31067423,[[null,1032,null,[]]]],[44776369],[44792510]],[3,[[4,null,8,null,null,null,null,["gmaSdk.getQueryInfo"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaQueryInfo.postMessage"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaSig.postMessage"]]]],69],[10,[[31071258],[31071259]]],[100,[[31075849],[31075850,[[543481449,null,null,[1]]]]]],[50,[[31075951],[31075952,[[1229,null,null,[1]]]],[31075953,[[1230,null,null,[1]]]],[31075954,[[1231,null,null,[1]]]],[31075955,[[1230,null,null,[1]],[1229,null,null,[1]],[1231,null,null,[1]]]]],null,72],[100,[[31076087],[31076088,[[1276,null,null,[1]]]]]],[100,[[31076089],[31076090,[[1278,null,null,[1]]]]]],[1000,[[31076133,[[null,null,14,[null,null,"31076133"]]],[6,null,null,null,6,null,"31076133"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31076134,[[null,null,14,[null,null,"31076134"]]],[6,null,null,null,6,null,"31076134"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[100,[[31076159],[31076160,[[544051502,null,null,[1]]]]]],[100,[[31076161],[31076162,[[545207430,null,null,[1]]]]]],[10,[[31076171],[31076172,[[1274,null,null,[1]]]]]],[10,[[31076178],[31076179,[[1279,null,null,[1]]]]]],[1000,[[31076186,[[null,null,14,[null,null,"31076186"]]],[6,null,null,null,6,null,"31076186"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31076187,[[null,null,14,[null,null,"31076187"]]],[6,null,null,null,6,null,"31076187"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31076208,[[null,null,14,[null,null,"31076208"]]],[6,null,null,null,6,null,"31076208"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31076209,[[null,null,14,[null,null,"31076209"]]],[6,null,null,null,6,null,"31076209"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31076244,[[null,null,14,[null,null,"31076244"]]],[6,null,null,null,6,null,"31076244"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31076245,[[null,null,14,[null,null,"31076245"]]],[6,null,null,null,6,null,"31076245"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[10,[[31076250],[31076251,[[534095582,null,null,[1]]]]]],[10,[[31076252],[31076253,[[45401989,null,null,[1]]]]]],[1,[[42531513],[42531514,[[316,null,null,[1]]]]]],[1,[[42531644],[42531645,[[368,null,null,[1]]]],[42531646,[[369,null,null,[1]],[368,null,null,[1]]]]]],[50,[[42531705],[42531706]]],[1,[[42532242],[42532243,[[1256,null,null,[1]],[290,null,null,[1]]]]]],[1,[[42532262],[42532263,[[null,1263,null,[null,16]]]],[42532264,[[null,1263,null,[null,4294967296]]]],[42532265,[[null,1265,null,[null,60]],[null,1264,null,[null,0.2]],[1266,null,null,[1]]]],[42532266,[[null,1263,null,[null,4294967296]],[null,1265,null,[null,60]],[null,1264,null,[null,0.2]],[1266,null,null,[1]]]],[42532267,[[null,1263,null,[null,16]],[null,1265,null,[null,60]],[null,1264,null,[null,0.2]],[1266,null,null,[1]]]],[42532268,[[1266,null,null,[1]]]]]],[10,[[42532314],[42532315,[[1267,null,null,[1]]]],[42532316,[[1268,null,null,[1]]]],[42532317,[[1267,null,null,[1]],[1268,null,null,[1]]]]]],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[10,[[44776368],[44779257],[44784478]],[3,[[4,null,8,null,null,null,null,["gmaSdk.getQueryInfo"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaQueryInfo.postMessage"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaSig.postMessage"]]]],69],[10,[[44785292],[44785293,[[1239,null,null,[1]]]]]],[10,[[44785294],[44785295]]],[500,[[44788441],[44788442,[[1147,null,null,[1]]]]],null,54],[10,[[44792012],[44792013,[[1233,null,null,[1]],[1185,null,null,[1]]]]],null,76],[1,[[44795552],[44795553,[[1260,null,null,[1]]]]]],[1,[[44795554],[44795555]]],[10,[[44795909],[44795910,[[1271,null,null,[1]]]],[44795911,[[1272,null,null,[1]]]],[44795912,[[1271,null,null,[1]],[1272,null,null,[1]]]]]],[10,[[44795921],[44795922,[[1222,null,null,[1]]]]]],[50,[[44796476],[44796477,[[null,null,null,[null,null,null,["en","de"]],null,1273]]]],null,75],[50,[[44796478],[44796479]],null,75],[50,[[44796632],[44796700,[[1185,null,null,[1]]]]],null,76],[10,[[44796634,[[1185,null,null,[1]]]],[44796684]],null,76],[100,[[44796826],[44796827,[[null,null,null,[null,null,null,["en","de"]],null,1273]]]],null,75]]],[17,[[10,[[31071260]]],[10,[[31075885],[31075886,[[541943501,null,null,[1]]]],[31076040,[[541943501,null,null,[1]],[null,1245,null,[null,600]]]],[31076085,[[541943501,null,null,[1]],[null,1245,null,[null,600]]]]],null,null,null,null,null,400,null,120],[20,[[44788469,[[null,506871937,null,[null,44788469]]]],[44788470,[[1120,null,null,[1]],[501545959,null,null,[]],[null,506871937,null,[null,44788470]]]],[44788471,[[1120,null,null,[1]],[null,506871937,null,[null,44788471]]]]],[4,null,55],null,null,null,null,2,null,118,1],[10,[[44789815],[44789816],[44789817],[44789818]],null,null,null,null,22,null,null,101],[10,[[44789819],[44789820]],null,null,null,null,null,500,null,101],[1,[[44792954,[[506914611,null,null,[1]],[null,506871937,null,[null,44792954]]]],[44792955,[[1120,null,null,[1]],[506914611,null,null,[1]],[null,506871937,null,[null,44792955]]]]],[4,null,55],null,null,null,null,259,null,118,1],[14,[[44793253]],[2,[[4,null,55],[5,null,8,null,null,null,null,["localStorage"]],[4,null,8,null,null,null,null,["localStorage"]],[7,null,null,15,null,20230524]]],null,null,null,null,null,null,120,1],[14,[[44793254,[[null,1245,null,[null,60]]]]],[2,[[4,null,55],[5,null,8,null,null,null,null,["localStorage"]],[4,null,8,null,null,null,null,["localStorage"]],[7,null,null,15,null,20230524]]],null,null,null,null,15,null,120,1],[139,[[44793255,[[null,1245,null,[null,60]]],[4,null,71,null,null,null,null,["120","14"]]]],[2,[[4,null,55],[5,null,8,null,null,null,null,["localStorage"]],[4,null,8,null,null,null,null,["localStorage"]],[7,null,null,15,null,20230524]]],null,null,null,null,30,null,120,1],[14,[[44793256,[[null,1245,null,[null,600]]]]],[2,[[4,null,55],[5,null,8,null,null,null,null,["localStorage"]],[4,null,8,null,null,null,null,["localStorage"]],[7,null,null,15,null,20230524]]],null,null,null,null,170,null,120,1],[139,[[44793257,[[null,1245,null,[null,600]]],[4,null,71,null,null,null,null,["120","14"]]]],[2,[[4,null,55],[5,null,8,null,null,null,null,["localStorage"]],[4,null,8,null,null,null,null,["localStorage"]],[7,null,null,15,null,20230524]]],null,null,null,null,185,null,120,1],[196,[[44795337,[[1120,null,null,[1]],[null,506871937,null,[null,44795337]],[160889229,null,null,[1]]],[12,null,null,null,2,null,"smitmehta\\\\.com/"]]],[4,null,55],null,null,null,null,62,null,118,1],[10,[[44796718,[[1120,null,null,[1]],[null,506871937,null,[null,44796718]]]],[44796719,[[1120,null,null,[1]],[null,506871937,null,[null,44796719]],[542610792,null,null,[1]]]]],[4,null,55],null,null,null,null,856,null,118,1],[48,[[44796896,[[541943501,null,null,[1]],[null,1245,null,[null,600]]]]],[2,[[4,null,55],[7,null,null,15,null,20230711]]],null,null,null,null,440,null,120,1],[504,[[44796897,[[541943501,null,null,[1]],[null,1245,null,[null,600]]],[4,null,71,null,null,null,null,["120","14"]]]],[2,[[4,null,55],[7,null,null,15,null,20230711]]],null,null,null,null,488,null,120,1],[10,[[44797298,[[1120,null,null,[1]],[null,506871937,null,[null,44797298]]]],[44797299,[[39823972,null,null,[1]],[1120,null,null,[1]],[null,506871937,null,[null,44797299]]]]],[4,null,55],null,null,null,null,936,null,118,1]]],[11,[[1,[[31076204],[31076205,[[1277,null,null,[1]],[1270,null,null,[1]]]]]]]]],null,null,[null,"1000",1,"1000"]],null,null,"31076187",null,null,1012952570,[44759875,44759837,44759926,42532277,42532279]]');
