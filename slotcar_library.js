'use strict';
(function (argSpeed) {
  function once(args) {
    var i = 0;
    return function () {
      return i < args.length ? {
        done: false,
        value: args[i++]
      } : {
        done: true
      };
    };
  }
  function dom(children) {
    children = ["object" == typeof globalThis && globalThis, children, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    var i = 0;
    for (; i < children.length; ++i) {
      var window = children[i];
      if (window && window.Math == Math) {
        return window;
      }
    }
    throw Error("Cannot find global object");
  }
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
  function test(key, type, name) {
    if (type) {
      a: {
        var i = key.split(".");
        key = 1 === i.length;
        var v = i[0];
        var obj;
        if (!key && v in global) {
          obj = global;
        } else {
          obj = root;
        }
        v = 0;
        for (; v < i.length - 1; v++) {
          var k = i[v];
          if (!(k in obj)) {
            break a;
          }
          obj = obj[k];
        }
        i = i[i.length - 1];
        name = applyFunc && "es6" === name ? obj[i] : null;
        type = type(name);
        if (null != type) {
          if (key) {
            defineProperty(global, i, {
              configurable: true,
              writable: true,
              value: type
            });
          } else {
            if (type !== name) {
              if (void 0 === props[i]) {
                key = 1E9 * Math.random() >>> 0;
                props[i] = applyFunc ? root.Symbol(i) : "$jscp$" + key + "$" + i;
              }
              defineProperty(obj, props[i], {
                configurable: true,
                writable: true,
                value: type
              });
            }
          }
        }
      }
    }
  }
  function string(next) {
    next = {
      next: next
    };
    next[define(global.Symbol, "iterator")] = function () {
      return this;
    };
    return next;
  }
  function typecastAttribute(value) {
    return value.raw = value;
  }
  function setTimeout(callback) {
    var b = "undefined" != typeof global.Symbol && define(global.Symbol, "iterator") && callback[define(global.Symbol, "iterator")];
    if (b) {
      return b.call(callback);
    }
    if ("number" == typeof callback.length) {
      return {
        next: once(callback)
      };
    }
    throw Error(String(callback) + " is not an iterable or ArrayLike");
  }
  function toArray(a) {
    if (!(a instanceof Array)) {
      a = setTimeout(a);
      var _s;
      var _arr = [];
      for (; !(_s = a.next()).done;) {
        _arr.push(_s.value);
      }
      a = _arr;
    }
    return a;
  }
  function assert(a, val) {
    return Object.prototype.hasOwnProperty.call(a, val);
  }
  function extend(obj, value) {
    obj.prototype = mixin(value.prototype);
    obj.prototype.constructor = obj;
    if (method) {
      method(obj, value);
    } else {
      var name;
      for (name in value) {
        if ("prototype" != name) {
          if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(value, name);
            if (d) {
              Object.defineProperty(obj, name, d);
            }
          } else {
            obj[name] = value[name];
          }
        }
      }
    }
    obj.O = value.prototype;
  }
  function component() {
    this.l = false;
    this.h = null;
    this.i = void 0;
    this.g = 1;
    this.C = 0;
    this.j = null;
  }
  function reject(a) {
    if (a.l) {
      throw new TypeError("Generator is already running");
    }
    a.l = true;
  }
  function inspect(next, x) {
    next.j = {
      exception: x,
      Na: true
    };
    next.g = next.C;
  }
  function cb(s, l, v) {
    s.g = v;
    return {
      value: l
    };
  }
  function ImageInstance(h) {
    this.g = new component;
    this.h = h;
  }
  function parse(module, data) {
    reject(module.g);
    var cond = module.g.h;
    if (cond) {
      return error(module, "return" in cond ? cond["return"] : function (command_module_id) {
        return {
          value: command_module_id,
          done: true
        };
      }, data, module.g.return);
    }
    module.g.return(data);
    return walk(module);
  }
  function error(options, scope, d, t) {
    try {
      var s = scope.call(options.g.h, d);
      if (!(s instanceof Object)) {
        throw new TypeError("Iterator result " + s + " is not an object");
      }
      if (!s.done) {
        return options.g.l = false, s;
      }
      var step = s.value;
    } catch (i) {
      return options.g.h = null, inspect(options.g, i), walk(options);
    }
    options.g.h = null;
    t.call(options.g, step);
    return walk(options);
  }
  function walk(options) {
    for (; options.g.g;) {
      try {
        var response = options.h(options.g);
        if (response) {
          return options.g.l = false, {
            value: response.value,
            done: false
          };
        }
      } catch (i) {
        options.g.i = void 0;
        inspect(options.g, i);
      }
    }
    options.g.l = false;
    if (options.g.j) {
      response = options.g.j;
      options.g.j = null;
      if (response.Na) {
        throw response.exception;
      }
      return {
        value: response.return,
        done: true
      };
    }
    return {
      value: void 0,
      done: true
    };
  }
  function AppEventHandlerIterator(e) {
    this.next = function (value) {
      reject(e.g);
      if (e.g.h) {
        value = error(e, e.g.h.next, value, e.g.m);
      } else {
        e.g.m(value);
        value = walk(e);
      }
      return value;
    };
    this.throw = function (err) {
      reject(e.g);
      if (e.g.h) {
        err = error(e, e.g.h["throw"], err, e.g.m);
      } else {
        inspect(e.g, err);
        err = walk(e);
      }
      return err;
    };
    this.return = function (value) {
      return parse(e, value);
    };
    this[define(global.Symbol, "iterator")] = function () {
      return this;
    };
  }
  function all(iter) {
    function resolve(data) {
      return iter.next(data);
    }
    function check(err) {
      return iter.throw(err);
    }
    return new global.Promise(function (onchangef, unbindFinished) {
      function run(options) {
        if (options.done) {
          onchangef(options.value);
        } else {
          global.Promise.resolve(options.value).then(resolve, check).then(run, unbindFinished);
        }
      }
      run(iter.next());
    });
  }
  function promise(options) {
    return all(new AppEventHandlerIterator(new ImageInstance(options)));
  }
  function htmlWebPackPluginAssets() {
    var start = Number(this);
    var array = [];
    var i = start;
    for (; i < arguments.length; i++) {
      array[i - start] = arguments[i];
    }
    return array;
  }
  function flatten(bytes, value, p) {
    if (null == bytes) {
      throw new TypeError("The 'this' value for String.prototype." + p + " must not be null or undefined");
    }
    if (value instanceof RegExp) {
      throw new TypeError("First argument to String.prototype." + p + " must not be a regular expression");
    }
    return bytes + "";
  }
  function iterator(value, fn) {
    if (value instanceof String) {
      value = value + "";
    }
    var index = 0;
    var started = false;
    var result = {
      next: function () {
        if (!started && index < value.length) {
          var i = index++;
          return {
            value: fn(i, value[i]),
            done: false
          };
        }
        started = true;
        return {
          done: true,
          value: void 0
        };
      }
    };
    result[define(global.Symbol, "iterator")] = function () {
      return result;
    };
    return result;
  }
  function statesAreEqual(value) {
    var type = typeof value;
    type = "object" != type ? type : value ? Array.isArray(value) ? "array" : type : "null";
    return "array" == type || "object" == type && "number" == typeof value.length;
  }
  function forEach(value) {
    var type = typeof value;
    return "object" == type && null != value || "function" == type;
  }
  function makeColorMaterial(r, g, a) {
    return r.call.apply(r.bind, arguments);
  }
  function bind(handler, type, table) {
    if (!handler) {
      throw Error();
    }
    if (2 < arguments.length) {
      var cmd_args = Array.prototype.slice.call(arguments, 2);
      return function () {
        var a = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(a, cmd_args);
        return handler.apply(type, a);
      };
    }
    return function () {
      return handler.apply(type, arguments);
    };
  }
  function call(a, b, func) {
    call = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? makeColorMaterial : bind;
    return call.apply(null, arguments);
  }
  function addEventListener(handler, capture) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
      var a = c.slice();
      a.push.apply(a, arguments);
      return handler.apply(this, a);
    };
  }
  function addListener(names, handler) {
    names = names.split(".");
    var obj = context || context;
    if (!(names[0] in obj || "undefined" == typeof obj.execScript)) {
      obj.execScript("var " + names[0]);
    }
    var key;
    for (; names.length && (key = names.shift());) {
      if (names.length || void 0 === handler) {
        if (obj[key] && obj[key] !== Object.prototype[key]) {
          obj = obj[key];
        } else {
          obj = obj[key] = {};
        }
      } else {
        obj[key] = handler;
      }
    }
  }
  function override(f, fn) {
    function Date() {
    }
    Date.prototype = fn.prototype;
    f.O = fn.prototype;
    f.prototype = new Date;
    f.prototype.constructor = f;
    f.ab = function (a, b, cb) {
      var actions = Array(arguments.length - 2);
      var i = 2;
      for (; i < arguments.length; i++) {
        actions[i - 2] = arguments[i];
      }
      return fn.prototype[b].apply(a, actions);
    };
  }
  function createScript(script) {
    return script;
  }
  function userAgent() {
    var n = context.navigator;
    return n && (n = n.userAgent) ? n : "";
  }
  function match(key) {
    return facetHasSelection ? $scope ? $scope.brands.some(function (current) {
      return (current = current.brand) && -1 != current.indexOf(key);
    }) : false : false;
  }
  function agent_contains(str) {
    return -1 != userAgent().indexOf(str);
  }
  function lastIndexOf() {
    return facetHasSelection ? !!$scope && 0 < $scope.brands.length : false;
  }
  function isInputEventSupported() {
    return lastIndexOf() ? false : agent_contains("Trident") || agent_contains("MSIE");
  }
  function getBrowserInfo() {
    if (!(!agent_contains("Safari") || _detectBrowserVersion() || (lastIndexOf() ? 0 : agent_contains("Coast")) || (lastIndexOf() ? 0 : agent_contains("Opera")) || (lastIndexOf() ? 0 : agent_contains("Edge")) || (lastIndexOf() ? match("Microsoft Edge") : agent_contains("Edg/")))) {
      if (lastIndexOf()) {
        match("Opera");
      }
    }
  }
  function _detectBrowserVersion() {
    return lastIndexOf() ? match("Chromium") : (agent_contains("Chrome") || agent_contains("CriOS")) && !(lastIndexOf() ? 0 : agent_contains("Edge")) || agent_contains("Silk");
  }
  function h(node, value) {
    if ("string" === typeof node) {
      return "string" !== typeof value || 1 != value.length ? -1 : node.indexOf(value, 0);
    }
    var key = 0;
    for (; key < node.length; key++) {
      if (key in node && node[key] === value) {
        return key;
      }
    }
    return -1;
  }
  function emit(options, callback) {
    var end = options.length;
    var config = "string" === typeof options ? options.split("") : options;
    var i = 0;
    for (; i < end; i++) {
      if (i in config) {
        callback.call(void 0, config[i], i, options);
      }
    }
  }
  function copyArray(array) {
    var length = array.length;
    if (0 < length) {
      var result = Array(length);
      var i = 0;
      for (; i < length; i++) {
        result[i] = array[i];
      }
      return result;
    }
    return [];
  }
  function equals(result) {
    equals[" "](result);
    return result;
  }
  function equal(a, s) {
    try {
      return equals(a[s]), true;
    } catch (c) {
    }
    return false;
  }
  function cloneDeep() {
    var val = [];
    setTime(val, 1);
    return val;
  }
  function parseInt(val) {
    val = val >> 10 & 1023;
    return 0 === val ? 536870912 : val;
  }
  function isObject(value) {
    return null !== value && "object" === typeof value && !Array.isArray(value) && value.constructor === Object;
  }
  function watch(value) {
    if (null == value) {
      return value;
    }
    if ("boolean" === typeof value || "number" === typeof value) {
      return !!value;
    }
  }
  function setOption(value) {
    if (null != value && "string" !== typeof value) {
      throw Error();
    }
    return value;
  }
  function alert(type) {
    return null == type || "string" === typeof type ? type : void 0;
  }
  function find(val, n, x) {
    if (null == val) {
      val = ghost;
    }
    ghost = void 0;
    if (null == val) {
      var start = 48;
      if (x) {
        val = [x];
        start = start | 256;
      } else {
        val = [];
      }
      if (n) {
        start = start & -1047553 | (n & 1023) << 10;
      }
    } else {
      if (!Array.isArray(val)) {
        throw Error();
      }
      start = indexOf(val);
      if (start & 32) {
        return val;
      }
      start = start | 32;
      if (x && (start = start | 256, x !== val[0])) {
        throw Error();
      }
      a: {
        x = val;
        var i = x.length;
        if (i) {
          var length = i - 1;
          var len = x[length];
          if (isObject(len)) {
            start = start | 128;
            n = (start >> 8 & 1) - 1;
            i = length - n;
            if (1024 <= i) {
              debug(x, n, len);
              i = 1023;
            }
            start = start & -1047553 | (i & 1023) << 10;
            break a;
          }
        }
        if (n) {
          len = (start >> 8 & 1) - 1;
          n = Math.max(n, i - len);
          if (1024 < n) {
            debug(x, len, {});
            start = start | 128;
            n = 1023;
          }
          start = start & -1047553 | (n & 1023) << 10;
        }
      }
    }
    trim(val, start);
    return val;
  }
  function debug(d, n, a) {
    var m = 1023 + n;
    var numberNewElement = d.length;
    var i = m;
    for (; i < numberNewElement; i++) {
      var b = d[i];
      if (null != b && b !== a) {
        a[i - n] = b;
      }
    }
    d.length = m + 1;
    d[m] = a;
  }
  function toString(data) {
    switch (typeof data) {
      case "number":
        return isFinite(data) ? data : String(data);
      case "boolean":
        return data ? 1 : 0;
      case "object":
        if (data && !Array.isArray(data) && hasFocus && null != data && data instanceof Uint8Array) {
          if (zb) {
            var c = "";
            var index = 0;
            var i = data.length - 10240;
            for (; index < i;) {
              c = c + String.fromCharCode.apply(null, data.subarray(index, index = index + 10240));
            }
            c = c + String.fromCharCode.apply(null, index ? data.subarray(index) : data);
            data = btoa(c);
          } else {
            if (void 0 === c) {
              c = 0;
            }
            if (!dst) {
              dst = {};
              index = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
              i = ["+/=", "+/", "-_=", "-_.", "-_"];
              var id = 0;
              for (; 5 > id; id++) {
                var d = index.concat(i[id].split(""));
                row[id] = d;
                var x = 0;
                for (; x < d.length; x++) {
                  var start = d[x];
                  if (void 0 === dst[start]) {
                    dst[start] = x;
                  }
                }
              }
            }
            c = row[c];
            index = Array(Math.floor(data.length / 3));
            i = c[64] || "";
            id = d = 0;
            for (; d < data.length - 2; d = d + 3) {
              var y = data[d];
              var l = data[d + 1];
              start = data[d + 2];
              x = c[y >> 2];
              y = c[(y & 3) << 4 | l >> 4];
              l = c[(l & 15) << 2 | start >> 6];
              start = c[start & 63];
              index[id++] = x + y + l + start;
            }
            x = 0;
            start = i;
            switch (data.length - d) {
              case 2:
                x = data[d + 1];
                start = c[(x & 15) << 2] || i;
              case 1:
                data = data[d];
                index[id] = c[data >> 2] + c[(data & 3) << 4 | x >> 4] + start + i;
            }
            data = index.join("");
          }
          return data;
        }
    }
    return data;
  }
  function filter(data, fn, c, array, options, key) {
    if (null != data) {
      if (Array.isArray(data)) {
        data = options && 0 == data.length && indexOf(data) & 1 ? void 0 : key && indexOf(data) & 2 ? data : print(data, fn, c, void 0 !== array, options, key);
      } else {
        if (isObject(data)) {
          var result = {};
          var i;
          for (i in data) {
            if (Object.prototype.hasOwnProperty.call(data, i)) {
              result[i] = filter(data[i], fn, c, array, options, key);
            }
          }
          data = result;
        } else {
          data = fn(data, array);
        }
      }
      return data;
    }
  }
  function print(result, data, c, array, options, key) {
    var postFunc = array || c ? indexOf(result) : 0;
    array = array ? !!(postFunc & 16) : void 0;
    result = Array.prototype.slice.call(result);
    var i = 0;
    for (; i < result.length; i++) {
      result[i] = filter(result[i], data, c, array, options, key);
    }
    if (c) {
      c(postFunc, result);
    }
    return result;
  }
  function j(value) {
    return value.Qa === symbol ? value.toJSON() : toString(value);
  }
  function fromJSON(obj, callback) {
    obj = obj.g;
    return map(obj, hasOwnProperty(obj), callback);
  }
  function map(s, c, a) {
    if (-1 === a) {
      return null;
    }
    if (a >= parseInt(c)) {
      if (c & 128) {
        return s[s.length - 1][a];
      }
    } else {
      if (c = a + ((c >> 8 & 1) - 1), c < s.length) {
        return s[c];
      }
    }
  }
  function compare(e, b, k, val) {
    var a = parseInt(b);
    if (k >= a) {
      var t = b;
      if (b & 128) {
        a = e[e.length - 1];
      } else {
        if (null == val) {
          return;
        }
        a = e[a + ((b >> 8 & 1) - 1)] = {};
        t = t | 128;
      }
      a[k] = val;
      t = t & -513;
      if (t !== b) {
        trim(e, t);
      }
    } else {
      e[k + ((b >> 8 & 1) - 1)] = val;
      if (b & 128) {
        val = e[e.length - 1];
        if (k in val) {
          delete val[k];
        }
      }
      if (b & 512) {
        trim(e, b & -513);
      }
    }
  }
  function wrap(a, b, s, value) {
    var x = a.g;
    var shuffled = hasOwnProperty(x);
    if (shuffled & 2) {
      throw Error();
    }
    compare(x, shuffled, b, s !== value ? s : void 0);
    return a;
  }
  function getStyle(value, t) {
    var options = account;
    if (null == t) {
      t = void 0;
    }
    var x = value.g;
    var a = hasOwnProperty(x);
    if (a & 2) {
      throw Error();
    }
    var path = 0;
    var i = 0;
    for (; i < options.length; i++) {
      var val = options[i];
      if (null != map(x, a, val)) {
        if (0 !== path) {
          compare(x, a, path);
        }
        path = val;
      }
    }
    if ((options = path) && 10 !== options && null != t) {
      compare(x, a, options);
    }
    compare(x, a, 10, t);
    return value;
  }
  function renderAndSend(html, label) {
    return null != html ? html : label;
  }
  function DocumentCache(p, q, a) {
    this.g = find(p, q, a);
  }
  function rm(name, type) {
    var trim = crop;
    crop = void 0;
    if (!type(name)) {
      throw type = trim ? trim() + "\n" : "", Error(type + String(name));
    }
  }
  function input(source, value) {
    this.h = source === latex && value || "";
    this.i = undefined;
  }
  function include(merge) {
    var b = false;
    var context;
    return function () {
      if (!b) {
        context = merge();
        b = true;
      }
      return context;
    };
  }
  function timeoutSaver(throttle) {
    var currentQueryTimer = 0;
    return function (canCreateDiscussions) {
      context.clearTimeout(currentQueryTimer);
      var ar = arguments;
      currentQueryTimer = context.setTimeout(function () {
        throttle.apply(void 0, ar);
      }, 100);
    };
  }
  function on(a, b, callback) {
    if (a.addEventListener) {
      a.addEventListener(b, callback, false);
    }
  }
  function removeEventListener(el, type, callback) {
    return el.removeEventListener ? (el.removeEventListener(type, callback, false), true) : false;
  }
  function step(d, e, value) {
    var n;
    for (n in d) {
      e.call(value, d[n], n, d);
    }
  }
  function _get(error) {
    var result = {};
    var p;
    for (p in error) {
      result[p] = error[p];
    }
    return result;
  }
  function caller(obj, name) {
    var prop;
    var source;
    var i = 1;
    for (; i < arguments.length; i++) {
      source = arguments[i];
      for (prop in source) {
        obj[prop] = source[prop];
      }
      var _i = 0;
      for (; _i < _ref.length; _i++) {
        prop = _ref[_i];
        if (Object.prototype.hasOwnProperty.call(source, prop)) {
          obj[prop] = source[prop];
        }
      }
    }
  }
  function getItem() {
    if (void 0 === nav_target) {
      var new_target = null;
      var session = context.trustedTypes;
      if (session && session.createPolicy) {
        try {
          new_target = session.createPolicy("goog#html", {
            createHTML: createScript,
            createScript: createScript,
            createScriptURL: createScript
          });
        } catch (responseObj) {
          if (context.console) {
            context.console.error(responseObj.message);
          }
        }
        nav_target = new_target;
      } else {
        nav_target = new_target;
      }
    }
    return nav_target;
  }
  function Type(value) {
    this.h = value;
  }
  function isFunction(obj) {
    return obj instanceof Type && obj.constructor === Type ? obj.h : "type_error:TrustedResourceUrl";
  }
  function getImmediateParents(sub) {
    getType(sub instanceof input && sub.constructor === input && sub.i === undefined ? sub.h : "type_error:Const");
  }
  function getType(data) {
    var utf8 = getItem();
    data = utf8 ? utf8.createScriptURL(data) : data;
    return new Type(data, inputHandler);
  }
  function Class(x) {
    this.h = x;
    this.Z = true;
  }
  function decodeURIComponent(val) {
    return val instanceof Class && val.constructor === Class ? val.h : "type_error:SafeStyle";
  }
  function ArrayBuffer(length) {
    this.h = length;
    this.Z = true;
  }
  function stringifyJSON(object) {
    return object instanceof ArrayBuffer && object.constructor === ArrayBuffer ? object.h : "type_error:SafeStyleSheet";
  }
  function Promise(value) {
    this.h = value;
    this.Z = true;
  }
  function stringify(value) {
    return value instanceof Promise && value.constructor === Promise ? value.h : "type_error:SafeHtml";
  }
  function encode(val) {
    if (!(val instanceof Promise)) {
      val = "object" == typeof val && val.Z ? val.g() : String(val);
      if (NUMBERS_RE.test(val)) {
        if (-1 != val.indexOf("&")) {
          val = val.replace(HTML_REGEX, "&amp;");
        }
        if (-1 != val.indexOf("<")) {
          val = val.replace(eamp, "&lt;");
        }
        if (-1 != val.indexOf(">")) {
          val = val.replace(reVowels, "&gt;");
        }
        if (-1 != val.indexOf('"')) {
          val = val.replace(reAlphas, "&quot;");
        }
        if (-1 != val.indexOf("'")) {
          val = val.replace(trimRE, "&#39;");
        }
        if (-1 != val.indexOf("\x00")) {
          val = val.replace(suffixre, "&#0;");
        }
      }
      val = handler(val);
    }
    return val;
  }
  function handler(options) {
    var value = getItem();
    options = value ? value.createHTML(options) : options;
    return new Promise(options, name);
  }
  function Cartesian2(x, y) {
    this.width = x;
    this.height = y;
  }
  function camelize(it) {
    return String(it).replace(/\-([a-z])/g, function (b, shortMonthName) {
      return shortMonthName.toUpperCase();
    });
  }
  function toTitleCase(s) {
    return s.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function (b, canCreateDiscussions, shortMonthName) {
      return canCreateDiscussions + shortMonthName.toUpperCase();
    });
  }
  function publish(doc, target, value) {
    function callback(value) {
      if (value) {
        target.appendChild("string" === typeof value ? doc.createTextNode(value) : value);
      }
    }
    var i = 1;
    for (; i < value.length; i++) {
      var data = value[i];
      if (!statesAreEqual(data) || forEach(data) && 0 < data.nodeType) {
        callback(data);
      } else {
        a: {
          if (data && "number" == typeof data.length) {
            if (forEach(data)) {
              var fn = "function" == typeof data.item || "string" == typeof data.item;
              break a;
            }
            if ("function" === typeof data) {
              fn = "function" == typeof data.item;
              break a;
            }
          }
          fn = false;
        }
        emit(fn ? copyArray(data) : data, callback);
      }
    }
  }
  function attr(context, name) {
    name = String(name);
    if ("application/xhtml+xml" === context.contentType) {
      name = name.toLowerCase();
    }
    return context.createElement(name);
  }
  function path(n) {
    return n && n.parentNode ? n.parentNode.removeChild(n) : null;
  }
  function popup() {
    this.g = context.document || document;
  }
  function createElement(el, data) {
    el.src = isFunction(data);
    var y;
    var d;
    if (y = (data = null == (d = (y = (el.ownerDocument && el.ownerDocument.defaultView || window).document).querySelector) ? void 0 : d.call(y, "script[nonce]")) ? data.nonce || data.getAttribute("nonce") || "" : "") {
      el.setAttribute("nonce", y);
    }
  }
  function normalize(test) {
    try {
      return !!test && null != test.location.href && equal(test, "foo");
    } catch (b) {
      return false;
    }
  }
  function random() {
    if (!global.globalThis.crypto) {
      return Math.random();
    }
    try {
      var userNonce = new Uint32Array(1);
      global.globalThis.crypto.getRandomValues(userNonce);
      return userNonce[0] / 65536 / 65536;
    } catch (b) {
      return Math.random();
    }
  }
  function contains(obj, condition) {
    if (obj) {
      var key;
      for (key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          condition(obj[key], key, obj);
        }
      }
    }
  }
  function uniq(items) {
    var immutableState = [];
    contains(items, function (stringWithoutNewline) {
      immutableState.push(stringWithoutNewline);
    });
    return immutableState;
  }
  function $(obj, context) {
    contains(context, function (propertiesDocId, groupField) {
      obj.style.setProperty(groupField, propertiesDocId, "important");
    });
  }
  function select(value, text) {
    if ("length" in value.style) {
      value = value.style;
      var valueLength = value.length;
      var j = 0;
      for (; j < valueLength; j++) {
        var i = value[j];
        text(value[i], i, value);
      }
    } else {
      value = write(value.style.cssText);
      contains(value, text);
    }
  }
  function write(email) {
    var ret = {};
    if (email) {
      var c = /\s*:\s*/;
      emit((email || "").split(/\s*;\s*/), function (s) {
        if (s) {
          var l = s.split(c);
          s = l[0];
          l = l[1];
          if (s && l) {
            ret[s.toLowerCase()] = l;
          }
        }
      });
    }
    return ret;
  }
  function link(data) {
    var rm = void 0 === rm ? function () {
      return true;
    } : rm;
    var c = /!\s*important/i;
    select(data, function (src, list) {
      if (!c.test(src) && rm(list, src)) {
        data.style.setProperty(list, src, "important");
      } else {
        if (c.test(src) && !rm(list, src)) {
          data.style.setProperty(list, src, "");
        }
      }
    });
  }
  function u(c) {
    return styles[c] || matchLetter.test(c) || LIST_REGEX.test(c) || PITFALL_REGEX.test(c);
  }
  function flush() {
    var result = emptyArray;
    emptyArray = [];
    result = setTimeout(result);
    var type = result.next();
    for (; !type.done; type = result.next()) {
      type = type.value;
      try {
        type();
      } catch (c) {
      }
    }
  }
  function async(tryLocsList) {
    emptyArray.push(tryLocsList);
    if (1 == emptyArray.length) {
      if (global.Promise) {
        global.Promise.resolve().then(flush);
      } else {
        if (window.setImmediate) {
          setImmediate(flush);
        } else {
          setTimeout(flush, 0);
        }
      }
    }
  }
  function template(elem) {
    if ("number" !== typeof elem.goog_pvsid) {
      try {
        var obj = Object;
        var define = obj.defineProperty;
        var a = void 0;
        a = void 0 === a ? Math.random : a;
        var command_module_id = Math.floor(a() * Math.pow(2, 52));
        define.call(obj, elem, "goog_pvsid", {
          value: command_module_id,
          configurable: false
        });
      } catch (f) {
      }
    }
    return Number(elem.goog_pvsid) || -1;
  }
  function repeat(a, opt_max) {
    return new global.Promise(function (Number) {
      setTimeout(function () {
        return void Number(opt_max);
      }, a);
    });
  }
  function createTag(tag, target) {
    target = void 0 === target ? document : target;
    return target.createElement(String(tag).toLowerCase());
  }
  function createImg(url) {
    if (!context.google_image_requests) {
      context.google_image_requests = [];
    }
    var tmp = createTag("IMG", context.document);
    tmp.src = url;
    context.google_image_requests.push(tmp);
  }
  function destroy() {
    if (void 0 === result) {
      var node = void 0 === node ? context : node;
      var result = node.context || node.AMP_CONTEXT_DATA;
      if (!result) {
        try {
          result = node.parent.context || node.parent.AMP_CONTEXT_DATA;
        } catch (e) {
        }
      }
      var mutSnowplowState;
      var data;
      node = (null == (mutSnowplowState = result) ? 0 : mutSnowplowState.pageViewId) && (null == (data = result) ? 0 : data.canonicalUrl) ? result : null;
    } else {
      node = result;
    }
    return (result = node) ? normalize(result.master) ? result.master : null : null;
  }
  function getElementsByTagName(name) {
    var features = htmlWebPackPluginAssets.apply(1, arguments);
    if (0 === features.length) {
      return getType(name[0]);
    }
    var result = name[0];
    var i = 0;
    for (; i < features.length; i++) {
      result = result + (encodeURIComponent(features[i]) + name[i + 1]);
    }
    return getType(result);
  }
  function getFile(fn, relativePath) {
    var result = isFunction(fn).toString();
    if (/#/.test(result)) {
      throw Error("");
    }
    var dataType = /\?/.test(result) ? "&" : "?";
    relativePath.forEach(function (e, data) {
      e = e instanceof Array ? e : [e];
      var g = 0;
      for (; g < e.length; g++) {
        var i = e[g];
        if (null !== i && void 0 !== i) {
          result = result + (dataType + encodeURIComponent(data) + "=" + encodeURIComponent(String(i)));
          dataType = "&";
        }
      }
    });
    return getType(result);
  }
  function css(element, name, target) {
    if ("string" === typeof name) {
      if (name = prefix(element, name)) {
        element.style[name] = target;
      }
    } else {
      var s;
      for (s in name) {
        target = element;
        var obj = name[s];
        var p = prefix(target, s);
        if (p) {
          target.style[p] = obj;
        }
      }
    }
  }
  function prefix(obj, key) {
    var val = jsonVal[key];
    if (!val) {
      var s = camelize(key);
      val = s;
      if (void 0 === obj.style[s]) {
        s = (relto ? "Webkit" : isFirefox ? "Moz" : isIEMobile ? "ms" : null) + toTitleCase(s);
        if (void 0 !== obj.style[s]) {
          val = s;
        }
      }
      jsonVal[key] = val;
    }
    return val;
  }
  function click() {
    var self = void 0 === self ? ctx : self;
    if (!self) {
      return false;
    }
    try {
      return !(!self.navigator.standalone && !self.top.navigator.standalone);
    } catch (b) {
      return false;
    }
  }
  function Error(error, params) {
    var value = void 0 === value ? {} : value;
    this.error = error;
    this.context = params.context;
    this.msg = params.message || "";
    this.id = params.id || "jserror";
    this.meta = value;
  }
  function SymbolValue(value, type) {
    this.g = value;
    this.h = type;
  }
  function Tile(url, options, context) {
    this.url = url;
    this.o = options;
    this.Ia = !!context;
    this.depth = null;
  }
  function ArrayInstance() {
    this.i = "&";
    this.h = {};
    this.j = 0;
    this.g = [];
  }
  function format(a, b) {
    var TIME_FORMATS = {};
    TIME_FORMATS[a] = b;
    return [TIME_FORMATS];
  }
  function getValue(result, params, args, next, opts) {
    var buffer = [];
    contains(result, function (options, command) {
      if (options = compile(options, params, args, next, opts)) {
        buffer.push(command + "=" + options);
      }
    });
    return buffer.join(params);
  }
  function compile(v, opts, data, index, options) {
    if (null == v) {
      return "";
    }
    opts = opts || "&";
    data = data || ",$";
    if ("string" == typeof data) {
      data = data.split("");
    }
    if (v instanceof Array) {
      if (index = index || 0, index < data.length) {
        var deferred = [];
        var i = 0;
        for (; i < v.length; i++) {
          deferred.push(compile(v[i], opts, data, index + 1, options));
        }
        return deferred.join(data[index]);
      }
    } else {
      if ("object" == typeof v) {
        return options = options || 0, 2 > options ? encodeURIComponent(getValue(v, opts, data, index, options + 1)) : "...";
      }
    }
    return encodeURIComponent(String(v));
  }
  function getComputedStyle(item, value) {
    var str = "https://pagead2.googlesyndication.com" + value;
    var maxLength = unwrap(item) - value.length;
    if (0 > maxLength) {
      return "";
    }
    item.g.sort(function (p, _arc) {
      return p - _arc;
    });
    value = null;
    var i = "";
    var index = 0;
    for (; index < item.g.length; index++) {
      var field = item.g[index];
      var items = item.h[field];
      var i = 0;
      for (; i < items.length; i++) {
        if (!maxLength) {
          value = null == value ? field : value;
          break;
        }
        var val = getValue(items[i], item.i, ",$");
        if (val) {
          val = i + val;
          if (maxLength >= val.length) {
            maxLength = maxLength - val.length;
            str = str + val;
            i = item.i;
            break;
          }
          value = null == value ? field : value;
        }
      }
    }
    item = "";
    if (null != value) {
      item = i + "trn=" + value;
    }
    return str + item;
  }
  function unwrap(self) {
    var prev = 1;
    var current;
    for (current in self.h) {
      prev = current.length > prev ? current.length : prev;
    }
    return 3997 - prev - self.i.length - 1;
  }
  function WeakMap() {
    this.g = Math.random();
  }
  function setSelection(node, value) {
    if (0 <= value && 1 >= value) {
      node.g = value;
    }
  }
  function func(f, options, value, i, task) {
    if (((void 0 === i ? 0 : i) ? f.g : Math.random()) < (task || .01)) {
      try {
        if (value instanceof ArrayInstance) {
          var el = value;
        } else {
          el = new ArrayInstance;
          contains(value, function (height, x) {
            var proto = el;
            var i = proto.j++;
            height = format(x, height);
            proto.g.push(i);
            proto.h[i] = height;
          });
        }
        var imgUrl = getComputedStyle(el, "/pagead/gen_204?id=" + options + "&");
        if (imgUrl) {
          createImg(imgUrl);
        }
      } catch (h) {
      }
    }
  }
  function now() {
    var data = void 0 === data ? context : data;
    return (data = data.performance) && data.now && data.timing ? Math.floor(data.now() + data.timing.navigationStart) : Date.now();
  }
  function dispatch() {
    var result = void 0 === result ? context : result;
    return (result = result.performance) && result.now ? result.now() : null;
  }
  function Item(label, type) {
    var last_value = dispatch() || now();
    this.label = label;
    this.type = type;
    this.value = last_value;
    this.duration = 0;
    this.taskId = this.slotId = void 0;
    this.uniqueId = Math.random();
  }
  function Scene(type) {
    this.h = [];
    this.i = type || context;
    var length = null;
    if (type) {
      type.google_js_reporting_queue = type.google_js_reporting_queue || [];
      this.h = type.google_js_reporting_queue;
      length = type.google_measure_js_timing;
    }
    this.g = defined() || (null != length ? length : 1 > Math.random());
  }
  function set(value) {
    value.g = false;
    if (value.h != value.i.google_js_reporting_queue) {
      if (defined()) {
        emit(value.h, process);
      }
      value.h.length = 0;
    }
  }
  function process(settings) {
    if (settings && perf && defined()) {
      perf.clearMarks("goog_" + settings.label + "_" + settings.uniqueId + "_start");
      perf.clearMarks("goog_" + settings.label + "_" + settings.uniqueId + "_end");
    }
  }
  function Element(i, tag, prefix) {
    this.i = i;
    this.j = tag;
    this.ea = null;
    this.l = this.ka;
    this.g = void 0 === prefix ? null : prefix;
    this.h = false;
  }
  function each(v, callback) {
    v.ea = callback;
  }
  function apply(b, d, j) {
    try {
      if (b.g && b.g.g) {
        var i = b.g.start(d.toString(), 3);
        var c = j();
        b.g.end(i);
      } else {
        c = j();
      }
    } catch (message) {
      j = b.j;
      try {
        process(i);
        j = b.l(d, new Error(message, {
          message: decode(message)
        }), void 0, void 0);
      } catch (l) {
        b.ka(217, l);
      }
      if (j) {
        var _ref1;
        var callback;
        if (!(null == (_ref1 = window.console) || null == (callback = _ref1.error))) {
          callback.call(_ref1, message);
        }
      } else {
        throw message;
      }
    }
    return c;
  }
  function flip(t, b, callback) {
    return function () {
      var d = htmlWebPackPluginAssets.apply(0, arguments);
      return apply(t, b, function () {
        return callback.apply(void 0, d);
      });
    };
  }
  function _merge_results_in_place(a, b) {
    b.catch(function (error) {
      error = error ? error : "unknown rejection";
      node.ka(a, error instanceof Error ? error : Error(error), void 0, node.ea || void 0);
    });
  }
  function decode(val) {
    var result = val.toString();
    if (val.name && -1 == result.indexOf(val.name)) {
      result = result + (": " + val.name);
    }
    if (val.message && -1 == result.indexOf(val.message)) {
      result = result + (": " + val.message);
    }
    if (val.stack) {
      val = val.stack;
      var value = result;
      try {
        if (-1 == val.indexOf(value)) {
          val = value + "\n" + val;
        }
        var gameMode;
        for (; val != gameMode;) {
          gameMode = val;
          val = val.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
        }
        result = val.replace(RegExp("\n *", "g"), "\n");
      } catch (e) {
        result = value;
      }
    }
    return result;
  }
  function dir(s) {
    return "string" === typeof s;
  }
  function type(object) {
    return void 0 === object;
  }
  function Grid(y) {
    this.g = find(y);
  }
  function Field(value) {
    this.g = find(value);
  }
  function trigger(type) {
    type.Va.apply(type, toArray(htmlWebPackPluginAssets.apply(1, arguments).map(function (morc) {
      return {
        Za: 7,
        Pa: morc.toJSON()
      };
    })));
  }
  function expect(val) {
    return JSON.stringify([val.map(function (data) {
      var server_identities = {};
      return [(server_identities[data.Za] = data.Pa, server_identities)];
    }), null]);
  }
  function receive(data, url) {
    if (global.globalThis.fetch) {
      global.globalThis.fetch(data, {
        method: "POST",
        body: url,
        keepalive: 65536 > url.length,
        credentials: "omit",
        mode: "no-cors",
        redirect: "follow"
      }).catch(function () {
      });
    } else {
      var http = new XMLHttpRequest;
      http.open("POST", data, true);
      http.send(url);
    }
  }
  function scroll(val) {
    if (val && "function" == typeof val.v) {
      val.v();
    }
  }
  function v() {
    this.C = this.C;
    this.H = this.H;
  }
  function ready(val, cb) {
    if (val.C) {
      cb();
    } else {
      if (!val.H) {
        val.H = [];
      }
      val.H.push(cb);
    }
  }
  function w(val, fn, C, i, b) {
    this.m = val;
    this.l = fn;
    this.C = C;
    this.i = i;
    this.j = b;
    this.g = [];
    this.h = null;
  }
  function notify(module) {
    if (null !== module.h) {
      clearTimeout(module.h);
      module.h = null;
    }
    if (module.g.length) {
      var done = expect(module.g);
      module.l(module.m + "?e=1", done);
      module.g = [];
    }
  }
  function constructor(value, current, data) {
    w.call(this, "https://pagead2.googlesyndication.com/pagead/ping", receive, void 0 === value ? 1E3 : value, void 0 === current ? 100 : current, (void 0 === data ? false : data) && !!global.globalThis.fetch);
  }
  function join(req) {
    var token = "va";
    if (req.va && req.hasOwnProperty(token)) {
      return req.va;
    }
    token = new req;
    return req.va = token;
  }
  function remove(context, val, options) {
    return val[context] || options;
  }
  function k() {
  }
  function convert(color, type) {
    color.g = function () {
      return remove(3, type, function () {
        return [];
      })(1);
    };
  }
  function isString(a, c) {
    apply(node, a, c);
  }
  function throttle(options, fn) {
    return flip(node, options, fn);
  }
  function _create(o, id, n) {
    var d = join(k).g();
    if (!id.eid && d.length) {
      id.eid = d.toString();
    }
    func(div, o, id, true, n);
  }
  function URLFetchable() {
    this.S = {};
  }
  function serialize(reduce) {
    if (index) {
      var t = index;
    } else {
      var c = destroy() || window;
      t = c.google_persistent_state_async;
      t = null != t && "object" == typeof t && null != t.S && "object" == typeof t.S ? index = t : c.google_persistent_state_async = index = new URLFetchable;
    }
    c = BaseTarget[33] || "google_ps_33";
    t = t.S;
    var v = t[c];
    return void 0 === v ? (t[c] = reduce(), t[c]) : v;
  }
  function ComponentProperty(name, defaultValue) {
    this.g = name;
    this.defaultValue = void 0 === defaultValue ? false : defaultValue;
  }
  function foo(b, m) {
    this.g = b;
    this.defaultValue = void 0 === m ? 0 : m;
  }
  function close(a) {
    a.googMsgType = "fullscreen";
  }
  function listen(el, path, key, callback) {
    function handler(event) {
      try {
        var last = JSON.parse(event.data);
      } catch (k) {
        return;
      }
      if (!(!last || last.googMsgType !== path || callback && /[:|%3A]javascript\(/i.test(event.data) && !callback(last, event))) {
        key(last, event);
      }
    }
    callback = void 0 === callback ? null : callback;
    on(el, "message", handler);
    var f = false;
    return function () {
      var listener = false;
      if (!f) {
        f = true;
        listener = removeEventListener(el, "message", handler);
      }
      return listener;
    };
  }
  function then(b, n, f, p) {
    return listen(b, "fullscreen", flip(p, 952, function (map, p) {
      if (p.source === n) {
        if (!("eventType" in map)) {
          throw Error("bad message " + JSON.stringify(map));
        }
        delete map.googMsgType;
        f(map);
      }
    }));
  }
  function DateInstance() {
    var callbackTwo = this;
    this.promise = new global.Promise(function (resolve, reject) {
      callbackTwo.resolve = resolve;
      callbackTwo.reject = reject;
    });
  }
  function Particle(startKineticState, fieldAccel, beginState, index, options) {
    v.call(this);
    this.slotType = startKineticState;
    this.pubWin = fieldAccel;
    this.ua = beginState;
    this.j = index;
    this.l = options;
    this.state = 1;
    this.i = new DateInstance;
    this.g = new DateInstance;
    this.h = new DateInstance;
  }
  function save(event) {
    return promise(function ($) {
      return $.return(event.i.promise);
    });
  }
  function task(options) {
    return promise(function ($) {
      return $.return(options.g.promise);
    });
  }
  function upload(s) {
    return promise(function ($) {
      return $.return(s.h.promise);
    });
  }
  function respond(data, o) {
    o.type = "err_st";
    o.slot = data.slotType;
    func(data.l, "fullscreen_tag", o, false, .25);
  }
  function copy(target, y, size) {
    target = new Particle(target, y, size, node, div);
    target.init();
    return target;
  }
  function Request(callback) {
    var arr = Array(36);
    var tema = 0;
    var andTmp;
    var j = 0;
    for (; 36 > j; j++) {
      if (8 == j || 13 == j || 18 == j || 23 == j) {
        arr[j] = "-";
      } else {
        if (14 == j) {
          arr[j] = "4";
        } else {
          if (2 >= tema) {
            tema = 33554432 + 16777216 * Math.random() | 0;
          }
          andTmp = tema & 15;
          tema = tema >> 4;
          arr[j] = aux[19 == j ? andTmp & 3 | 8 : andTmp];
        }
      }
    }
    this.uuid = arr.join("");
    this.callback = callback;
  }
  function post(request) {
    var b = context.imalib_globalCallbacks || new global.Map;
    var c = b.get("AFMA_updateActiveView") || [];
    if (0 === c.length && context.AFMA_updateActiveView) {
      var request = new Request(context.AFMA_updateActiveView);
      c.push(request);
      context.AFMA_updateActiveView = void 0;
    }
    if (!context.AFMA_updateActiveView) {
      context.AFMA_updateActiveView = function () {
        var e = b.get("AFMA_updateActiveView");
        e = setTimeout(e);
        var control = e.next();
        for (; !control.done; control = e.next()) {
          control.value.callback.apply(null, arguments);
        }
      };
    }
    request = new Request(request);
    c.push(request);
    b.set("AFMA_updateActiveView", c);
    context.imalib_globalCallbacks = b;
    return request.uuid;
  }
  function cleanup(data) {
    if (context.AFMA_updateActiveView) {
      var b = context.imalib_globalCallbacks;
      if (b) {
        var c = b.get("AFMA_updateActiveView");
        if (c) {
          var cIndex = define(c, "findIndex").call(c, function (object) {
            return object.uuid === data;
          });
          if (-1 !== cIndex) {
            c.splice(cIndex, 1);
            if (0 === c.length) {
              context.AFMA_updateActiveView = void 0;
            }
            b.set("AFMA_updateActiveView", c);
            context.imalib_globalCallbacks = b;
          }
        }
      }
    }
  }
  function Event(type, target) {
    this.type = type;
    this.currentTarget = this.target = target;
    this.defaultPrevented = this.h = false;
  }
  function Buffer(ibase, dab) {
    this.messageName = ibase;
    this.parameters = dab || {};
  }
  function Response(message, type) {
    Event.call(this, message.messageName, type);
    this.params = message.parameters || {};
  }
  function append(message) {
    var name = getType("gmsg://mobileads.google.com/" + message.messageName);
    return getFile(name, new global.Map(define(Object, "entries").call(Object, message.parameters)));
  }
  function l(event, obj) {
    Event.call(this, event ? event.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = false;
    this.state = null;
    this.pointerId = 0;
    this.pointerType = "";
    this.g = null;
    if (event) {
      this.init(event, obj);
    }
  }
  function Sprite(callback, url, type, uuid, name) {
    this.listener = callback;
    this.proxy = null;
    this.src = url;
    this.type = type;
    this.capture = !!uuid;
    this.ja = name;
    this.key = ++nextKey;
    this.aa = this.fa = false;
  }
  function text(data) {
    data.aa = true;
    data.listener = null;
    data.proxy = null;
    data.src = null;
    data.ja = null;
  }
  function Node(val) {
    this.src = val;
    this.g = {};
    this.h = 0;
  }
  function add(data, key, index, obj, i) {
    key = key.toString();
    if (key in data.g) {
      var value = data.g[key];
      index = transform(value, index, obj, i);
      if (-1 < index) {
        text(value[index]);
        Array.prototype.splice.call(value, index, 1);
        if (0 == value.length) {
          delete data.g[key];
          data.h--;
        }
      }
    }
  }
  function f(item, x) {
    var key = x.type;
    var result;
    if (result = key in item.g) {
      result = item.g[key];
      var t = h(result, x);
      var f;
      if (f = 0 <= t) {
        Array.prototype.splice.call(result, t, 1);
      }
      result = f;
    }
    if (result) {
      text(x);
      if (0 == item.g[key].length) {
        delete item.g[key];
        item.h--;
      }
    }
  }
  function transform(data, string, cb, type) {
    var i = 0;
    for (; i < data.length; ++i) {
      var obj = data[i];
      if (!obj.aa && obj.listener == string && obj.capture == !!cb && obj.ja == type) {
        return i;
      }
    }
    return -1;
  }
  function has(obj, name, id, options, cb) {
    if (options && options.once) {
      return send(obj, name, id, options, cb);
    }
    if (Array.isArray(name)) {
      var i = 0;
      for (; i < name.length; i++) {
        has(obj, name[i], id, options, cb);
      }
      return null;
    }
    id = reduce(id);
    return obj && obj[key] ? obj.listen(name, id, forEach(options) ? !!options.capture : !!options, cb) : resolve(obj, name, id, false, options, cb);
  }
  function resolve(b, p, e, d, obj, width) {
    if (!p) {
      throw Error("Invalid event type");
    }
    var y = forEach(obj) ? !!obj.capture : !!obj;
    var c = require(b);
    if (!c) {
      b[i] = c = new Node(b);
    }
    e = c.add(p, e, d, y, width);
    if (e.proxy) {
      return e;
    }
    d = openProject();
    e.proxy = d;
    d.src = b;
    d.listener = e;
    if (b.addEventListener) {
      if (!$e) {
        obj = y;
      }
      if (void 0 === obj) {
        obj = false;
      }
      b.addEventListener(p.toString(), d, obj);
    } else {
      if (b.attachEvent) {
        b.attachEvent(source(p.toString()), d);
      } else {
        if (b.addListener && b.removeListener) {
          b.addListener(d);
        } else {
          throw Error("addEventListener and attachEvent are unavailable.");
        }
      }
    }
    nf++;
    return e;
  }
  function openProject() {
    function data(height) {
      return el.call(data.src, data.listener, height);
    }
    var el = loadImage;
    return data;
  }
  function send(obj, type, res, data, options) {
    if (Array.isArray(type)) {
      var i = 0;
      for (; i < type.length; i++) {
        send(obj, type[i], res, data, options);
      }
      return null;
    }
    res = reduce(res);
    return obj && obj[key] ? obj.g.add(String(type), res, true, forEach(data) ? !!data.capture : !!data, options) : resolve(obj, type, res, true, data, options);
  }
  function validate(data, params, value, options, name) {
    if (Array.isArray(params)) {
      var i = 0;
      for (; i < params.length; i++) {
        validate(data, params[i], value, options, name);
      }
    } else {
      if (options = forEach(options) ? !!options.capture : !!options, value = reduce(value), data && data[key]) {
        add(data.g, String(params), value, options, name);
      } else {
        if (data && (data = require(data))) {
          params = data.g[params.toString()];
          data = -1;
          if (params) {
            data = transform(params, value, options, name);
          }
          if (value = -1 < data ? params[data] : null) {
            onReady(value);
          }
        }
      }
    }
  }
  function onReady(data) {
    if ("number" !== typeof data && data && !data.aa) {
      var item = data.src;
      if (item && item[key]) {
        f(item.g, data);
      } else {
        var key = data.type;
        var proxy = data.proxy;
        if (item.removeEventListener) {
          item.removeEventListener(key, proxy, data.capture);
        } else {
          if (item.detachEvent) {
            item.detachEvent(source(key), proxy);
          } else {
            if (item.addListener && item.removeListener) {
              item.removeListener(proxy);
            }
          }
        }
        nf--;
        if (key = require(item)) {
          f(key, data);
          if (0 == key.h) {
            key.src = null;
            item[i] = null;
          }
        } else {
          text(data);
        }
      }
    }
  }
  function source(i) {
    return i in o ? o[i] : o[i] = "on" + i;
  }
  function loadImage(data, fn) {
    if (data.aa) {
      data = true;
    } else {
      fn = new l(fn, this);
      var callback = data.listener;
      var elem = data.ja || data.src;
      if (data.fa) {
        onReady(data);
      }
      data = callback.call(elem, fn);
    }
    return data;
  }
  function require(node) {
    node = node[i];
    return node instanceof Node ? node : null;
  }
  function reduce(state) {
    if ("function" === typeof state) {
      return state;
    }
    if (!state[reducerMountPoint]) {
      state[reducerMountPoint] = function (type) {
        return state.handleEvent(type);
      };
    }
    return state[reducerMountPoint];
  }
  function options(value) {
    v.call(this);
    this.h = value;
    this.g = {};
  }
  function tick(options) {
    step(options.g, function (f, flowId) {
      if (this.g.hasOwnProperty(flowId)) {
        onReady(f);
      }
    }, options);
    options.g = {};
  }
  function item() {
    v.call(this);
    this.g = new Node(this);
    this.B = this;
    this.j = null;
  }
  function end(target, e) {
    var cells;
    var result = target.j;
    if (result) {
      cells = [];
      for (; result; result = result.j) {
        cells.push(result);
      }
    }
    target = target.B;
    result = e.type || e;
    if ("string" === typeof e) {
      e = new Event(e, target);
    } else {
      if (e instanceof Event) {
        e.target = e.target || target;
      } else {
        var ok = e;
        e = new Event(result, target);
        caller(e, ok);
      }
    }
    ok = true;
    if (cells) {
      var i = cells.length - 1;
      for (; !e.h && 0 <= i; i--) {
        var value = e.currentTarget = cells[i];
        ok = check(value, result, true, e) && ok;
      }
    }
    if (!e.h) {
      value = e.currentTarget = target;
      ok = check(value, result, true, e) && ok;
      if (!e.h) {
        ok = check(value, result, false, e) && ok;
      }
    }
    if (cells) {
      i = 0;
      for (; !e.h && i < cells.length; i++) {
        value = e.currentTarget = cells[i];
        ok = check(value, result, false, e) && ok;
      }
    }
  }
  function check(color, d, input, event) {
    d = color.g.g[String(d)];
    if (!d) {
      return true;
    }
    d = d.concat();
    var result = true;
    var i = 0;
    for (; i < d.length; ++i) {
      var data = d[i];
      if (data && !data.aa && data.capture == input) {
        var l = data.listener;
        var modifier = data.ja || data.src;
        if (data.fa) {
          f(color.g, data);
        }
        result = false !== l.call(modifier, event) && result;
      }
    }
    return result && !event.defaultPrevented;
  }
  function exports(i, h) {
    item.call(this);
    this.i = i || 1;
    this.h = h || context;
    this.l = call(this.Ya, this);
    this.m = Date.now();
  }
  function handleMessage() {
    if (window.googleJsEnvironment && ("rhino" == window.googleJsEnvironment.environment || "jscore" == window.googleJsEnvironment.environment)) {
      return new module;
    }
    if (inmap && window.googleAdsJsInterface && "notify" in window.googleAdsJsInterface) {
      try {
        return window.googleAdsJsInterface.notify("gmsg://mobileads.google.com/noop"), new module;
      } catch (a) {
      }
    } else {
      if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.gadGMSGHandler) {
        return new Client;
      }
    }
    return new Plugin;
  }
  function getPrototypeOf() {
    if (!proto) {
      proto = handleMessage();
    }
    return proto;
  }
  function aCommands() {
    v.call(this);
  }
  function getObject(data) {
    var s = _get(data.parameters);
    s["google.afma.Notify_dt"] = (new Date).getTime();
    return append(new Buffer(data.messageName, s)).toString();
  }
  function scope(level, version) {
    v.call(this);
    this.l = level;
    this.m = version || 1;
    this.j = [];
    this.i = new exports(this.m);
    this.B = new options(this);
    this.B.listen(this.i, "tick", this.D);
  }
  function Plugin() {
    scope.call(this, function (result) {
      var element = proxy.g[proxy.h];
      if (!element) {
        element = attr(document, "IFRAME");
        element.id = "afma-notify-" + (new Date).getTime();
        element.style.display = "none";
        proxy.g[proxy.h] = element;
      }
      proxy.h = (proxy.h + 1) % 25;
      var s = _get(result.parameters);
      s["google.afma.Notify_dt"] = (new Date).getTime();
      result = append(new Buffer(result.messageName, s));
      element.src = isFunction(result).toString();
      if (!element.parentNode) {
        document.body.appendChild(element);
      }
    });
    var proxy = this;
    this.g = [];
    this.h = 0;
  }
  function module() {
    v.call(this);
  }
  function Client() {
    v.call(this);
  }
  function addLine() {
    var num1 = this;
    this.j = [];
    this.i = window === window.top;
    this.l = false;
    this.g = 0;
    this.h = null;
    if ("undefined" !== typeof window.addEventListener) {
      window.addEventListener("message", function (r2) {
        return calc(num1, r2);
      });
    }
  }
  function calc(options, f) {
    var file = f.data;
    if ((f = f.source) && file) {
      var selector = options.j;
      if ("arwebview_iframe_loaded" === file && options.i) {
        addListener("JavascriptWebViewBridge.incoming.postMessage", options.m.bind(options));
        if (-1 === selector.indexOf(f)) {
          selector.push(f);
        }
      } else {
        var timemodified = file.messageName;
        file = file.parameters;
        if (options.i) {
          switch (timemodified) {
            case "mraid_loaded":
              file = file.is_top_win;
              if (false === file) {
                options.l = true;
                options.h = post(function (inputEnc) {
                  if (options.i) {
                    assign(options, new Buffer("update_activeview_action", inputEnc));
                  }
                });
                if (-1 === selector.indexOf(f)) {
                  selector.push(f);
                  if ("undefined" !== typeof f.postMessage) {
                    f.postMessage(new Buffer("mraid_env_obj", window.MRAID_ENV), "*");
                  }
                }
              }
              break;
            case "start_tracking_action":
              if (0 == options.g) {
                window.AFMA_SendMessage("trackActiveViewUnit");
              }
              options.g += 1;
              break;
            case "stop_tracking_action":
              --options.g;
              if (0 == options.g) {
                window.AFMA_SendMessage("untrackActiveViewUnit", {
                  hashCode: file.hashCode
                });
                if (options.h) {
                  cleanup(options.h);
                  options.h = null;
                }
              }
              break;
            case "register_iframe_window_action":
              file = file.is_top_win;
              if (false === file && -1 === selector.indexOf(f)) {
                selector.push(f);
              }
          }
        } else {
          switch (timemodified) {
            case "mraid_env_obj":
              window.MRAID_ENV = file;
              break;
            case "update_activeview_action":
              if (window.AFMA_updateActiveView) {
                window.AFMA_updateActiveView(file);
              }
              break;
            case "receive_message_action":
              window.AFMA_ReceiveMessage(file.messageName, file.parameters);
          }
        }
      }
    }
  }
  function assign(options, name) {
    options.j.forEach(function (parentData) {
      return parentData.postMessage(name, "*");
    });
  }
  function Store() {
    item.call(this);
    this.i = getPrototypeOf();
    this.i = getPrototypeOf();
    ready(this, addEventListener(scroll, this.i));
    this.h = {};
    this.l = new addLine;
  }
  function log(message, url) {
    if (context.AFMA_Communicator) {
      context.AFMA_Communicator.sendMessage(message, url);
    } else {
      fn(message, url);
    }
  }
  function fn(data, options) {
    if ("loading" == document.readyState) {
      data = call(fn, null, data, options);
      send(context, "DOMContentLoaded", data, false);
    } else {
      data = new Buffer(data, options);
      getPrototypeOf().sendMessage(data);
    }
  }
  function listener(message, type) {
    context.AFMA_Communicator.receiveMessage(message, type);
  }
  function closeHandler(event, key, self, handler) {
    context.AFMA_Communicator.removeEventListener(event, key, self, handler);
  }
  function t(end, c, b, params) {
    context.AFMA_Communicator.addEventListener(end, c, b, params);
  }
  function focus(key, f, e) {
    context.AFMA_Communicator.addObserver(key, f, e);
  }
  function unload(name, handler) {
    context.AFMA_Communicator.removeObserver(name, handler);
  }
  function r(p) {
    var attrCache = this;
    this.g = p;
    t("h5adsEvent", function (val) {
      return void attrCache.g(val);
    });
  }
  function escape(data) {
    if (void 0 === data.extras) {
      data.extras = {};
    }
    data.extras.highfive = "1";
    return encodeURIComponent(JSON.stringify(data));
  }
  function Entity(type, chainIndexList) {
    v.call(this);
    this.id = type;
    this.g = chainIndexList;
  }
  function s(a, b) {
    v.call(this);
    this.id = a;
    this.g = b;
  }
  function draw() {
    var me = this;
    this.m = 0;
    this.j = new global.Map;
    this.g = new global.Map;
    this.i = new DateInstance;
    this.h = 0;
    this.l = new r(function (data) {
      data = data.params;
      switch (data.eventCategory) {
        case "initialize":
          me.j.clear();
          me.g.clear();
          me.h = 3;
          me.i.resolve(me);
          break;
        case "creation":
          var key = data.objectId;
          switch (data.event) {
            case "nativeObjectCreated":
              if (data = me.g.get(key)) {
                me.g.delete(key);
                me.j.set(key, data.ad);
                data.N.resolve(data.ad);
              }
              return;
            case "nativeObjectNotCreated":
              if (data = me.g.get(key)) {
                me.g.delete(key);
                data.ad.v();
                data.N.reject(Error("Native object not created"));
              }
              return;
            default:
              return;
          }case "interstitial":
          var target = me.j.get(data.objectId);
          if (target && target instanceof Entity && target.listener) {
            switch (data.event) {
              case "onAdLoaded":
                var DOMChangeEvent;
                if (!(null == (DOMChangeEvent = (key = target.listener).W))) {
                  DOMChangeEvent.call(key, target);
                }
                break;
              case "onAdFailedToLoad":
                var _ref1;
                var sqlrl;
                if (!(null == (sqlrl = (_ref1 = target.listener).V))) {
                  sqlrl.call(_ref1, target, data.errorCode);
                }
                break;
              case "onAdOpened":
                var _ref2;
                var _ajaxSetup;
                if (!(null == (_ajaxSetup = (_ref2 = target.listener).Sa))) {
                  _ajaxSetup.call(_ref2, target);
                }
                break;
              case "onAdClicked":
                var id;
                var p;
                if (!(null == (p = (id = target.listener).eb))) {
                  p.call(id, target);
                }
                break;
              case "onAdClosed":
                var targetOwner;
                var appendEndpoints;
                if (!(null == (appendEndpoints = (targetOwner = target.listener).J))) {
                  appendEndpoints.call(targetOwner, target);
                }
                break;
              case "onNativeAdObjectNotAvailable":
                var parentElement;
                var caller;
                if (!(null == (caller = (parentElement = target.listener).X))) {
                  caller.call(parentElement, target);
                }
            }
          }
          break;
        case "rewarded":
          if ((key = me.j.get(data.objectId)) && key instanceof s && key.listener) {
            switch (data.event) {
              case "onRewardedAdLoaded":
                var mori;
                if (!(null == (mori = (target = key.listener).W))) {
                  mori.call(target, key);
                }
                break;
              case "onRewardedAdFailedToLoad":
                var listener;
                var value;
                if (!(null == (value = (listener = key.listener).V))) {
                  value.call(listener, key, data.errorCode);
                }
                break;
              case "onRewardedAdOpened":
                var keyVal;
                var _this;
                if (!(null == (_this = (keyVal = key.listener).Sa))) {
                  _this.call(keyVal, key);
                }
                break;
              case "onRewardedAdFailedToShow":
                var out;
                var set;
                if (!(null == (set = (out = key.listener).Ra))) {
                  set.call(out, key, data.errorCode);
                }
                break;
              case "onUserEarnedReward":
                var img;
                var api;
                if (!(null == (api = (img = key.listener).Ta))) {
                  api.call(img, key);
                }
                break;
              case "onRewardedAdClosed":
                var storage;
                var oldGet;
                if (!(null == (oldGet = (storage = key.listener).J))) {
                  oldGet.call(storage, key);
                }
                break;
              case "onNativeAdObjectNotAvailable":
                var source;
                var utils;
                if (!(null == (utils = (source = key.listener).X))) {
                  utils.call(source, key);
                }
            }
          }
      }
    });
  }
  function getLiteralString(node) {
    var om = node.m;
    node.m += 1;
    return om;
  }
  function right() {
    throw Error("Do not instantiate directly");
  }
  function base() {
    right.call(this);
  }
  function removeItem(id) {
    if (null != id) {
      switch (id.Ga) {
        case 1:
          return 1;
        case -1:
          return -1;
        case 0:
          return 0;
      }
    }
    return null;
  }
  function clean(value) {
    return null != value && value.ha === music_hot ? value : value instanceof Promise ? ajax(stringify(value).toString()) : value instanceof Promise ? ajax(stringify(value).toString()) : ajax(String(String(value)).replace(qreg, replaceCSS), removeItem(value));
  }
  function parseJSON(name) {
    return name.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>");
  }
  function refresh(message) {
    if (null != message && message.ha === music_hot) {
      var toString = String;
      message = message.getContent();
      message = String(message).replace(savedRegExp, "").replace(regNewline, "&lt;");
      toString = toString(message).replace(identifier, replaceCSS);
    } else {
      toString = String(message).replace(qreg, replaceCSS);
    }
    return toString;
  }
  function onMessage(message) {
    if (null != message && message.ha === movie_classic) {
      message = parseJSON(message.getContent());
    } else {
      if (null == message) {
        message = "";
      } else {
        if (message instanceof Class) {
          message = parseJSON(decodeURIComponent(message));
        } else {
          if (message instanceof Class) {
            message = parseJSON(decodeURIComponent(message));
          } else {
            if (message instanceof ArrayBuffer) {
              message = parseJSON(stringifyJSON(message));
            } else {
              if (message instanceof ArrayBuffer) {
                message = parseJSON(stringifyJSON(message));
              } else {
                message = String(message);
                message = extraordinarilyBad.test(message) ? message : "zSoyz";
              }
            }
          }
        }
      }
    }
    return message;
  }
  function replaceCSS(selector) {
    return entities[selector];
  }
  function Path(value) {
    this.g = find(value);
  }
  function patchDisplay(to) {
    rm(target, type);
    target = to;
  }
  function _date() {
    var PL$74 = {};
    this.g = function (value, i) {
      return null != PL$74[value] ? PL$74[value] : i;
    };
    this.h = function (value, action) {
      return null != PL$74[value] ? PL$74[value] : action;
    };
    this.j = function (value, elem) {
      return null != PL$74[value] ? PL$74[value] : elem;
    };
    this.l = function (key, f) {
      return null != PL$74[key] ? PL$74[key] : f;
    };
    this.i = function () {
    };
  }
  function StringInstance(val) {
    return join(_date).g(val.g, val.defaultValue);
  }
  function get(element) {
    return join(_date).h(element.g, element.defaultValue);
  }
  function needsPolyfill() {
    this.wasPlaTagProcessed = false;
    this.wasReactiveAdConfigReceived = {};
    this.adCount = {};
    this.wasReactiveAdVisible = {};
    this.stateForType = {};
    this.reactiveTypeEnabledInAsfe = {};
    this.wasReactiveTagRequestSent = false;
    this.reactiveTypeDisabledByPublisher = {};
    this.tagSpecificState = {};
    this.messageValidationEnabled = false;
    this.floatingAdsStacking = new Set;
    this.sideRailProcessedFixedElements = new global.Set;
    this.sideRailAvailableSpace = new global.Map;
    this.sideRailPlasParam = new global.Map;
  }
  function Set() {
    this.maxZIndexRestrictions = {};
    this.nextRestrictionId = 0;
    this.maxZIndexListeners = [];
  }
  function replace(options, node) {
    return options && options.source ? options.source === node || options.source.parent === node : false;
  }
  function show(element) {
    var options = {
      bottom: "auto",
      clear: "none",
      display: "inline",
      "float": "none",
      height: "auto",
      left: "auto",
      margin: 0,
      "margin-bottom": 0,
      "margin-left": 0,
      "margin-right": "0",
      "margin-top": 0,
      "max-height": "none",
      "max-width": "none",
      opacity: 1,
      overflow: "visible",
      padding: 0,
      "padding-bottom": 0,
      "padding-left": 0,
      "padding-right": 0,
      "padding-top": 0,
      position: "static",
      right: "auto",
      top: "auto",
      "vertical-align": "baseline",
      visibility: "visible",
      width: "auto",
      "z-index": "auto"
    };
    emit(define(Object, "keys").call(Object, options), function (name) {
      var actual = element.style[camelize(name)];
      if (!("undefined" !== typeof actual ? actual : element.style[prefix(element, name)])) {
        css(element, name, options[name]);
      }
    });
    link(element);
  }
  function Model(proxy) {
    if (proxy.google_reactive_ads_global_state) {
      if (null == proxy.google_reactive_ads_global_state.sideRailProcessedFixedElements) {
        proxy.google_reactive_ads_global_state.sideRailProcessedFixedElements = new global.Set;
      }
      if (null == proxy.google_reactive_ads_global_state.sideRailAvailableSpace) {
        proxy.google_reactive_ads_global_state.sideRailAvailableSpace = new global.Map;
      }
      if (null == proxy.google_reactive_ads_global_state.sideRailPlasParam) {
        proxy.google_reactive_ads_global_state.sideRailPlasParam = new global.Map;
      }
    } else {
      proxy.google_reactive_ads_global_state = new needsPolyfill;
    }
    this.g = proxy.google_reactive_ads_global_state.floatingAdsStacking;
  }
  function isSet(value) {
    value = uniq(value.g.maxZIndexRestrictions);
    return value.length ? Math.min.apply(null, value) : null;
  }
  function reset(key) {
    var hasKey = isSet(key);
    emit(key.g.maxZIndexListeners, function (callback) {
      return callback(hasKey);
    });
  }
  function TestModel(options) {
    this.h = options;
    this.g = null;
  }
  function setup(document, parent) {
    if (!document.body) {
      return null;
    }
    var self = new EventDispatcher;
    self.apply(document, parent);
    return function () {
      css(document.body, {
        filter: self.g,
        webkitFilter: self.g,
        overflow: self.i,
        position: self.j,
        top: self.l
      });
      parent.scrollTo(0, self.h);
    };
  }
  function EventDispatcher() {
    this.g = this.l = this.j = this.i = null;
    this.h = 0;
  }
  function message(t, d, level) {
    v.call(this);
    var footerBox = this;
    this.g = t;
    this.D = d;
    this.l = level;
    this.h = null;
    ready(this, function () {
      return footerBox.h = null;
    });
  }
  function off(obj, fn) {
    if (!obj.h) {
      obj.h = [];
      var item = obj.g.parentElement;
      for (; item;) {
        obj.h.push(item);
        if (obj.B(item)) {
          break;
        }
        item = item.parentNode && 1 === item.parentNode.nodeType ? item.parentNode : null;
      }
    }
    item = obj.h.slice();
    var i;
    var prop;
    i = 0;
    for (; i < item.length; ++i) {
      if (prop = item[i]) {
        fn.call(obj, prop, i, item);
      }
    }
  }
  function factory(data, options, handlers) {
    message.call(this, data, options, handlers);
    this.i = null;
    this.j = options.document;
    data = new Model(options);
    this.m = new TestModel(data);
  }
  function start(self) {
    callback(self, false);
    var el = self.l;
    if (el) {
      off(self, function (checkbox) {
        $(checkbox, bar);
        show(checkbox);
      });
      self.g.setAttribute("width", "");
      self.g.setAttribute("height", "");
      css(self.g, bar);
      css(self.g, left);
      css(el, style);
      css(el, {
        background: "transparent"
      });
      $(el, {
        display: "none",
        position: "fixed"
      });
      show(el);
      show(self.g);
    }
  }
  function callback(options, data) {
    var el = options.l;
    if (el) {
      if (data) {
        data = options.m;
        if (null == data.g) {
          var hash = data.h;
          var p = hash.g.nextRestrictionId++;
          hash.g.maxZIndexRestrictions[p] = 2147483646;
          reset(hash);
          data.g = p;
        }
        $(el, {
          display: "block"
        });
        if (options.j.body && !options.i) {
          options.i = setup(options.j, options.D);
        }
        el.setAttribute("tabindex", "0");
        el.setAttribute("aria-hidden", "false");
        options.j.body.setAttribute("aria-hidden", "true");
      } else {
        data = options.m;
        if (null != data.g) {
          hash = data.h;
          delete hash.g.maxZIndexRestrictions[data.g];
          reset(hash);
          data.g = null;
        }
        $(el, {
          display: "none"
        });
        if (options.i) {
          options.i();
          options.i = null;
        }
        options.j.body.setAttribute("aria-hidden", "false");
        el.setAttribute("aria-hidden", "true");
      }
    }
  }
  function FunctionInstance(parent, obj, options) {
    factory.call(this, obj, parent, options);
    start(this);
  }
  function getViewport(referenceWindow) {
    try {
      var doc = (referenceWindow || window).document;
      var canvas = "CSS1Compat" == doc.compatMode ? doc.documentElement : doc.body;
      return (new Cartesian2(canvas.clientWidth, canvas.clientHeight)).round();
    } catch (d) {
      return new Cartesian2(-12245933, -12245933);
    }
  }
  function minus(context) {
    if (!context.google_ad_modifications) {
      context.google_ad_modifications = {};
    }
    return context.google_ad_modifications;
  }
  function merge() {
    var offset = minus(window);
    if (!offset.afg_slotcar_vars) {
      offset.afg_slotcar_vars = {};
    }
    return offset.afg_slotcar_vars;
  }
  function d(a) {
    return (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null;
  }
  function isEmail(data) {
    if (data = data.innerText || data.innerHTML) {
      if (data = data.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (data = data.match(/^\x3c!--+(.*?)(?:--+>)?$/) || data.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp("google_ad_client").test(data[1])) {
        return data[1];
      }
    }
    return null;
  }
  function getPath(value) {
    switch (value) {
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
          var o = value.match(/^(?:'(.*)'|"(.*)")$/);
          if (o) {
            return o[1] || o[2] || "";
          }
          if (/^[-+]?\d*(\.\d+)?$/.test(value)) {
            var result = parseFloat(value);
            return result === result ? result : void 0;
          }
        } catch (d) {
        }
    }
  }
  function checkout(global, cb) {
    var c = 10;
    return promise(function (g1) {
      return 0 >= c ? g1.return(global.Promise.reject()) : cb() ? g1.return(global.Promise.resolve()) : g1.return(new global.Promise(function (saveNotifs, f) {
        var intervalHandler = global.setInterval(function () {
          if (--c) {
            if (cb()) {
              global.clearInterval(intervalHandler);
              saveNotifs();
            }
          } else {
            global.clearInterval(intervalHandler);
            f();
          }
        }, 200);
      }));
    });
  }
  function register(g) {
    this.o = destroy() || window;
    this.g = null != g ? g : new constructor(100, 100, true);
    this.state = serialize(function () {
      var value = get(obj);
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
  function output(params) {
    var value = new Field;
    var key = tpl(params);
    value = wrap(value, 1, key, 0);
    key = main(params);
    value = wrap(value, 2, setOption(key), "");
    value = wrap(value, 3, params.state.sd, 0);
    return wrap(value, 7, Math.round(params.o.performance.now()), 0);
  }
  function tpl(obj) {
    var PC_id = obj.state.pc;
    return null !== PC_id && 0 !== PC_id ? PC_id : obj.state.pc = template(obj.o);
  }
  function main(context) {
    var value = context.state.wpc;
    if (null !== value && "" !== value) {
      var middleware = value;
    } else {
      value = context.state;
      context = context.o;
      if (context.google_ad_client) {
        var path = String(context.google_ad_client);
      } else {
        var filter;
        var p;
        var attrStrOrPath;
        if (null != (attrStrOrPath = null != (p = null == (path = minus(context).head_tag_slot_vars) ? void 0 : path.google_ad_client) ? p : null == (filter = context.document.querySelector(".adsbygoogle[data-ad-client]")) ? void 0 : filter.getAttribute("data-ad-client"))) {
          path = attrStrOrPath;
        } else {
          c: {
            path = context.document.getElementsByTagName("script");
            filter = context.navigator && context.navigator.userAgent || "";
            filter = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube", "i").test(filter) || /i(phone|pad|pod)/i.test(filter) && /applewebkit/i.test(filter) && !/version|safari/i.test(filter) && !click() ? d : isEmail;
            p = path.length - 1;
            for (; 0 <= p; p--) {
              if (context = path[p], !context.google_parsed_script_for_pub_code && (context.google_parsed_script_for_pub_code = true, context = filter(context))) {
                path = context;
                break c;
              }
            }
            path = null;
          }
          if (path) {
            filter = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
            p = {};
            for (; context = filter.exec(path);) {
              p[context[1]] = getPath(context[2]);
            }
            path = p.google_ad_client ? p.google_ad_client : "";
          } else {
            path = "";
          }
        }
        path = null != (middleware = path) ? middleware : "";
      }
      middleware = value.wpc = path;
    }
    return middleware;
  }
  function fetch(view) {
    return promise(function (b) {
      return cb(b, checkout(view.o, function () {
        return !(!tpl(view) || !main(view));
      }), 0);
    });
  }
  function html(data, left) {
    promise(function (res) {
      if (1 == res.g) {
        return StringInstance(alias) ? res = cb(res, fetch(data), 6) : data.h ? res = cb(res, fetch(data), 5) : (res.g = 0, res = void 0), res;
      }
      if (6 != res.g) {
        var s = data.g;
        var value = output(data);
        value = getStyle(value, left);
        trigger(s, value);
      } else {
        s = data.g;
        value = output(data);
        value = wrap(value, 3, 1, 0);
        value = getStyle(value, left);
        trigger(s, value);
      }
      res.g = 0;
    });
  }
  function getData() {
    var w = window;
    if ("on" !== context.google_adtest && "on" !== context.google_adbreak_test && !define(w.location.host, "endsWith").call(w.location.host, "h5games.usercontent.goog")) {
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
  function loggedIn() {
  }
  function setClasses() {
    if (void 0 === m) {
      var type = void 0 === type ? context : type;
      var m = type.ggeac || (type.ggeac = {});
    }
    type = m;
    convert(join(k), type);
    php_date_format(m);
    join(loggedIn);
    join(_date).i();
  }
  function php_date_format(a) {
    var data = join(_date);
    data.g = function (value, c) {
      return remove(5, a, function () {
        return false;
      })(value, c, 1);
    };
    data.h = function (value, c) {
      return remove(6, a, function () {
        return 0;
      })(value, c, 1);
    };
    data.j = function (value, c) {
      return remove(7, a, function () {
        return "";
      })(value, c, 1);
    };
    data.l = function (b, c) {
      return remove(8, a, function () {
        return [];
      })(b, c, 1);
    };
    data.i = function () {
      remove(15, a, function () {
      })(1);
    };
  }
  function mapModifications(a) {
    each(node, function (context) {
      context.shv = String(a);
      context.mjsv = "m202307170101";
      var c = join(k).g();
      var data = getData();
      context.eid = c.concat(data).join(",");
    });
  }
  function defer() {
    var d = new DateInstance;
    return {
      promise: d.promise,
      resolve: d.resolve
    };
  }
  function Deferred() {
    var x = void 0 === x ? function () {
    } : x;
    if (!context.google_llp) {
      context.google_llp = {};
    }
    var requests = context.google_llp;
    var deferred = requests[7];
    if (deferred) {
      return deferred;
    }
    deferred = defer();
    requests[7] = deferred;
    x();
    return deferred;
  }
  function renderDefaultPanel(options) {
    Deferred().resolve(options);
  }
  function done(n, args, window) {
    n.dataset.adsbygoogleStatus = "reserved";
    n.className += " adsbygoogle-noablate";
    if (!window.adsbygoogle) {
      window.adsbygoogle = [];
      var content = window.document;
      var inlineStyles = getElementsByTagName(Style);
      var form = createTag("SCRIPT", content);
      createElement(form, inlineStyles);
      if ((content = content.getElementsByTagName("script")[0]) && content.parentNode) {
        content.parentNode.insertBefore(form, content);
      }
    }
    window.adsbygoogle.push({
      element: n,
      params: args
    });
  }
  function translate() {
    var setter = node;
    try {
      return rm(src, dir), new Path(JSON.parse(src));
    } catch (result) {
      setter.ka(838, result instanceof Error ? result : Error(String(result)), void 0, function (postData) {
        postData.jspb = String(src);
      });
    }
    return new Path;
  }
  function e() {
    v.apply(this, arguments);
  }
  function Collection(callback) {
    v.call(this);
    this.callback = callback;
  }
  function Box(h) {
    v.call(this);
    this.h = h;
    this.g = new global.Set;
  }
  function Module(_xOff) {
    this.l = _xOff;
    this.m = "m202307170101";
    this.i = "unset";
  }
  function a(type, i, j, x) {
    e.call(this);
    this.ad = type;
    this.i = i;
    this.j = j;
    this.h = x;
    this.g = null;
    this.m = this.B = false;
    this.D = true;
  }
  function Vector(value, i, j, x) {
    a.call(this, value, i, j, x);
    this.ad = value;
    this.i = i;
    this.j = j;
    this.h = x;
  }
  function b(a) {
    return {
      W: throttle(849, function () {
        a.W();
      }),
      V: throttle(850, function () {
        a.V();
      }),
      J: throttle(851, function () {
        a.J();
      }),
      X: throttle(854, function () {
        a.X();
      })
    };
  }
  function m(file, i, b, n) {
    a.call(this, file, i, b, n);
    this.ad = file;
    this.i = i;
    this.j = b;
    this.h = n;
  }
  function load(o) {
    return {
      W: throttle(849, function () {
        o.W();
      }),
      V: throttle(850, function () {
        o.V();
      }),
      Ra: throttle(855, function () {
        o.h.s("admb_rfs");
        (0, o.g)(2);
      }),
      Ta: throttle(852, function () {
        o.B = true;
      }),
      J: throttle(853, function () {
        o.J();
      }),
      X: throttle(854, function () {
        o.X();
      })
    };
  }
  function fill(h, g, b, c) {
    this.h = h;
    this.G = g;
    this.j = b;
    this.g = c;
    this.i = template(window).toString();
  }
  function parseManuscript(isString) {
    isString(850, function () {
      isString(null);
    });
  }
  function open(options, url, c) {
    options.j.error("Unable to fetch ad: '" + url + "' is missing from tag.");
    c(null);
  }
  function command(o, name) {
    var c = "on" === o.G.google_adbreak_test;
    switch (name) {
      case 1:
        return c ? "ca-app-pub-3940256099942544/1033173712" : o.G.google_admob_interstitial_slot;
      case 2:
        return c ? "ca-app-pub-3940256099942544/5224354917" : o.G.google_admob_rewarded_slot;
      default:
        throw Error("Unknown ad type " + name);
    }
  }
  function config(entryName, value, c, val) {
    v.call(this);
    var p = this;
    this.j = entryName;
    this.h = value;
    this.g = c;
    this.m = val;
    this.l = {};
    this.B = flip(this.g, 168, function (b, image) {
      return void E(p, b, image);
    });
    this.M = flip(this.g, 169, function (canCreateDiscussions, nodeComment) {
      func(p.m, "ras::xsf", {
        c: nodeComment.data.substring(0, 500),
        u: p.j.location.href.substring(0, 500)
      }, true, .1);
      return true;
    });
    this.i = [];
    when(this, this.l);
    this.i.push(listen(this.j, "sth", this.B, this.M));
  }
  function E(options, d, e) {
    try {
      if (!u(e.origin) || !replace(e, options.h.contentWindow)) {
        return;
      }
    } catch (f) {
      return;
    }
    var type = d.msg_type;
    var value;
    if ("string" === typeof type && (value = options.l[type])) {
      apply(options.g, 168, function () {
        value.call(options, d, e);
      });
    }
  }
  function Color(d, g, type, value) {
    config.call(this, value, type, node, div);
    this.D = d;
    this.adDismissed = g;
  }
  function when(state, result) {
    result["i-adframe-load"] = throttle(792, function () {
      state.D();
    });
    result["i-dismiss"] = throttle(793, function () {
      state.adDismissed(1);
    });
    result["r-dismiss-before-reward"] = throttle(794, function () {
      state.adDismissed(2);
    });
    result["r-dismiss-after-reward"] = throttle(795, function () {
      state.adDismissed(3);
    });
  }
  function q(a, b) {
    a.dataset["slotcar" + (1 === b ? "Interstitial" : "Rewarded")] = "true";
  }
  function p(a, b, s, p, x) {
    e.call(this);
    var t = this;
    this.o = a;
    this.m = b;
    this.h = x;
    this.j = this.i = this.g = null;
    this.l = new FunctionInstance(a, s, b);
    var m = middleware(this, p);
    if (StringInstance(creative_size) && !StringInstance(defaultRegionSelectedValue)) {
      this.j = success(this, a, s, p, x, m);
    } else {
      this.i = new Color(function () {
        clearTimeout(m);
        p(t);
      }, function (y) {
        if (1 === y && 2 === x) {
          y = 3;
        }
        push(t, y);
      }, s, a);
    }
    ready(this, function () {
      var p;
      if (!(null == (p = t.i))) {
        p.v();
      }
      var j;
      if (!(null == (j = t.j))) {
        j.v();
      }
      clearTimeout(m);
    });
    q(b, x);
  }
  function push(obj, x) {
    if (null != obj.g) {
      callback(obj.l, false);
      if ("goog_slotcar_ad" === obj.o.location.hash) {
        obj.o.history.back();
      }
      var g = obj.g;
      obj.g = null;
      g(x);
    }
  }
  function middleware(type, next) {
    return setTimeout(throttle(728, function () {
      next(null);
      type.v();
    }), 1E3 * get(obj2));
  }
  function init(options) {
    if (StringInstance(password_verify)) {
      if ("" !== options.o.location.hash) {
        _create("pub_hash", {
          o_url: options.o.location.href
        }, .1);
      }
      options.o.location.hash = "goog_slotcar_ad";
      var resize = throttle(950, function (event) {
        if (define(event.oldURL, "endsWith").call(event.oldURL, "#goog_slotcar_ad")) {
          if (1 === options.h) {
            push(options, 1);
          } else {
            var currentPos;
            if (!(null == (currentPos = options.i))) {
              currentPos.ya();
            }
            var namespace;
            if (!(null == (namespace = options.j))) {
              namespace.ya();
            }
          }
          options.o.removeEventListener("hashchange", resize);
        }
      });
      options.o.addEventListener("hashchange", resize);
      ready(options, function () {
        options.o.removeEventListener("hashchange", resize);
        if ("#goog_slotcar_ad" === options.o.location.hash) {
          options.o.history.back();
        }
      });
    }
  }
  function success(db, data, options, resolve, path, marker) {
    data = copy(2 === path ? 2 : 1, data, options.contentWindow);
    options = save(data).then(function () {
      clearTimeout(marker);
      resolve(db);
    });
    _merge_results_in_place(1005, options);
    options = task(data).then(function (n) {
      switch (n.status) {
        case 1:
          n = 1;
          break;
        case 2:
          n = 3;
          break;
        case 3:
          n = 2;
          break;
        default:
          throw Error("Unexpected CloseResult: " + n.status);
      }
      push(db, n);
    });
    _merge_results_in_place(1006, options);
    options = upload(data).then(function () {
      db.v();
    });
    _merge_results_in_place(1004, options);
    return data;
  }
  function Matrix(g) {
    this.o = window;
    this.G = g;
  }
  function create(query, account, state, title) {
    var viewPort = getViewport(query.o);
    if (StringInstance(ARByte)) {
      var header = {};
      account = (header.google_ad_width = viewPort.width, header.google_ad_height = viewPort.height, header.google_reactive_ad_format = 1 === account ? 10 : 11, header.google_acr = title, header.google_video_play_muted = 2 !== account && !state, header);
    } else {
      state = {};
      account = (state.google_ad_width = viewPort.width, state.google_ad_height = viewPort.height, state.google_reactive_ad_format = 1 === account ? 10 : 11, state.google_acr = title, state);
    }
    if (StringInstance(creative_size)) {
      account.fsapi = true;
    }
    return define(Object, "assign").call(Object, {}, query.G, account);
  }
  function err() {
    return ajax('<ins class="adsbygoogle" style="width:100% !important;height:100% !important;" id="fake-interstitial-ins"><iframe style="overflow:hidden;" width="100%" height="100%" frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" scrolling="no" src="about:blank" id="aswift-fake"></iframe></ins>');
  }
  function view() {
    return ajax('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path style="fill:#f5f5f5" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>');
  }
  function data(n) {
    var nn = n.Oa;
    n = n.Xa;
    return ajax('<div class="dialog-wrapper" style="width: 100%; height: 100%; position: absolute; top: 0;"><div class="close-confirmation-dialog" id="close-confirmation-dialog" style="width: ' + refresh(onMessage(Math.floor(.78 * n))) + 'px"><div class="confirmation-title" style="font-size: ' + refresh(onMessage(Math.floor(.031 * nn))) + "px; margin-top: " + refresh(onMessage(Math.floor(.0375 * nn))) + "px; margin-left: " + refresh(onMessage(Math.floor(.066 *
      n))) + "px; margin-right: " + refresh(onMessage(Math.floor(.066 * n))) + 'px;">Close Ad?</div><div class="confirmation-message" style="font-size: ' + refresh(onMessage(Math.floor(.025 * nn))) + "px; margin-bottom: " + refresh(onMessage(Math.floor(.0375 * nn))) + "px; margin-top: " + refresh(onMessage(Math.floor(.0375 * nn))) + "px; margin-left: " + refresh(onMessage(Math.floor(.066 * n))) + "px; margin-right: " +
      refresh(onMessage(Math.floor(.066 * n))) + 'px;">You will lose your reward</div><div class="confirmation-buttons" style="font-size: ' + refresh(onMessage(Math.floor(.0218 * nn))) + "px; line-height: " + refresh(onMessage(Math.floor(.05625 * nn))) + "px; margin-right: " + refresh(onMessage(Math.floor(.0125 * nn))) + "px; margin-bottom: " + refresh(onMessage(Math.floor(.0125 * nn))) + 'px;"><div class="close-ad-button" id="close-ad-button" style="padding-left: ' +
      refresh(onMessage(Math.floor(.044 * n))) + "px; padding-right: " + refresh(onMessage(Math.floor(.044 * n))) + 'px;">CLOSE</div><div class="resume-ad-button" id="resume-ad-button" style="padding-left: ' + refresh(onMessage(Math.floor(.044 * n))) + "px; padding-right: " + refresh(onMessage(Math.floor(.044 * n))) + 'px;">RESUME</div></div></div></div>');
  }
  function SingleAssignmentDisposable() {
    this.g = body || (body = new popup);
  }
  function build(element, d, value) {
    element = element.g;
    value = d(value || eleresult, {});
    d = element || body || (body = new popup);
    if (value && value.g) {
      d = value.g();
    } else {
      d = d.createElement("DIV");
      b: {
        if (forEach(value)) {
          if (value.za && (value = value.za(), value instanceof Promise)) {
            break b;
          }
          value = encode("zSoyz");
        } else {
          value = encode(String(value));
        }
      }
      element = d;
      if (Map()) {
        for (; element.lastChild;) {
          element.removeChild(element.lastChild);
        }
      }
      element.innerHTML = stringify(value);
    }
    if (1 == d.childNodes.length) {
      value = d.firstChild;
      if (1 == value.nodeType) {
        d = value;
      }
    }
    return d;
  }
  function initialize(test, a) {
    e.call(this);
    var data = this;
    this.h = a;
    this.m = new SingleAssignmentDisposable;
    this.i = 10;
    this.l = false;
    this.j = build(this.m, err);
    q(this.j, a);
    document.documentElement.appendChild(this.j);
    onLoad(this.j.firstChild, function (f) {
      var type = {};
      var values = 2 === data.h ? "Rewarded ad example" : "Interstitial ad example";
      var t = data.h;
      var event = type && type.bb;
      type = ajax;
      if (event) {
        event = String(event);
        event = hookRE.test(event) ? event : "zSoyz";
        event = ' nonce="' + refresh(event) + '"';
      } else {
        event = "";
      }
      type = "<!DOCTYPE html><html><head>" + type("\n  <style" + event + '>\n    body {\n      padding: 0;\n      margin: 0;\n      background-color: #262626;\n    }\n    .container {\n      width: 100vw;\n      height: 92vh;\n      display: flex;\n      flex-direction: column;\n    }\n    .container .creative {\n      background-color: white;\n      border-style: solid;\n      border-width: thin;\n      border-color:#bdc1c6;\n      height: 250px;\n      margin: 20vh auto auto auto;\n      overflow: hidden;\n      padding: 0;\n      width: 300px;\n    }\n    .header-panel {\n      display: flex;\n      justify-content: center;\n      margin-bottom: 20px;\n      background-color: #424242;\n      border: 1px solid transparent;\n      border-radius: 4px;\n      height: 8vh;\n      color: #f5f5f5;\n      font-family: "Google Sans",Roboto,Arial,sans-serif;\n      font-size: 20px;\n      line-height: 8vh;\n    }\n    .dismiss-button {\n      display: flex;\n      flex-direction: row;\n      height: inherit;\n      align-items: center;\n      padding-right: 4%;\n      cursor: pointer;\n      position: absolute;\n      right: 0;\n    }\n    .count-down-container {\n      display: inline-flex;\n      flex: auto;\n    }\n    .adContainer {\n      display: flex;\n      flex-direction: row;\n      width: 100%;\n      height: 100%;\n      text-align: left;\n      margin: 0;\n    }\n    .adContainer .logo {\n      align-self: center;\n      width: 40px;\n      margin: 0 24px;\n      height: 40px;\n    }\n    .adContainer .logo IMG {\n      height: 40px;\n      width: 40px;\n    }\n    .adContainer .text {\n      margin: auto auto auto 0;\n    }\n    .adContainer .button {\n      align-self: center;\n      height: 100%;\n      max-height: 48px;\n      /* This gives a perceived margin of 32px, due to the margins within the button SVGs. */\n      margin-right: 30px;\n    }\n    .adContainer .button-inner {\n      max-height: 48px;\n      height: 100%;\n    }\n    .adContainer .button-inner SVG {\n      height: 100%;\n      width: auto;\n    }\n    .adText {\n      font-family: "Google Sans",Roboto,Arial,sans-serif;\n      font-size: 18px;\n      font-weight: normal;\n      line-height: 18px;\n      color: #202124;\n      margin-bottom: 4px;\n    }\n    .areaText {\n      font-family: Roboto,Arial,sans-serif;\n      font-size: 14px;\n      font-weight: medium;\n      line-height: 14px;\n      color: #5f6368;\n    }\n    .nativeIframeMessage .text {\n      padding: 0 10px;\n    }\n    .creative a {\n      text-decoration: none;\n    }\n\n    @media (max-height: 44px),\n        (max-height: 150px) and (max-width: 210px) {\n      .adContainer .logo {\n        display: none;\n      }\n      .adContainer .text {\n        margin-left: 5px;\n      }\n    }\n    @media (max-height: 110px) and (max-width: 330px) {\n      .adText {\n        font-size: 13px;\n        line-height: 13px;\n        margin-bottom: 2px;\n      }\n      .areaText {\n        font-size: 11px;\n        line-height: 11px;\n      }\n    }\n    @media (max-height: 38px) {\n      .adText {\n        font-size: 17px;\n        line-height: 17px;\n        margin-bottom: 0;\n      }\n      .areaText {\n        display: none;\n      }\n    }\n    @media (max-height: 20px) {\n      .adText {\n        font-size: 12px;\n        line-height: 12px;\n        margin-bottom: 0;\n      }\n    }\n\n    /* Vertically stacked assets in cases where creative is not a distictly\n       horizontal rectangle shape */\n    @media (min-height: 240px),\n        (max-width: 65px) and (min-height: 50px),\n        (max-width: 130px) and (min-height: 100px),\n        (max-width: 195px) and (min-height: 150px),\n        (max-width: 260px) and (min-height: 200px) {\n      .adContainer .logo {\n        display: initial;\n      }\n      .areaText {\n        display: initial;\n      }\n      .adContainer .text {\n        margin-left: 0;\n      }\n      .adContainer {\n        text-align: center;\n        display: flex;\n        flex-direction: column;\n      }\n      .adContainer .logo {\n        margin: 40px auto 24px auto;\n      }\n      .adContainer .text {\n        margin: 0 auto auto auto;\n      }\n      .adContainer .text .adText{\n        margin-bottom: 8px;\n      }\n      .adContainer .button {\n        margin: auto auto 32px auto;\n      }\n      @media (max-height: 200px) {\n        .adContainer .logo {\n          display: none;\n        }\n        .adContainer .text {\n          margin: 10px auto auto auto;\n        }\n      }\n    }\n\n    .x-button {\n      display: flex;\n      align-items: center;\n    }\n\n    .dialog-wrapper {\n      background: rgba(0, 0, 0, .4);\n      height: 100%;\n      left: 0;\n      opacity: 1;\n      pointer-events: auto;\n      position: fixed;\n      top: 0;\n      transition: opacity .15s ease-out;\n      -webkit-transition: opacity .15s ease-out;\n      width: 100%;\n      will-change: opacity;\n      z-index: 2147483647;\n    }\n\n    .close-confirmation-dialog {\n      background: #fff;\n      box-shadow: 0 16px 24px 2px rgba(0, 0, 0, .14),\n        0 6px 30px 5px rgba(0, 0, 0, .12), 0 8px 10px -5px rgba(0, 0, 0, .2);\n      font-family: Roboto, sans-serif;\n      left: 50%;\n      position: fixed;\n      top: 50%;\n      transform: translate(-50%, -50%);\n      -webkit-transform: translate(-50%, -50%);\n    }\n\n    .confirmation-title {\n      color: #000;\n    }\n\n    .confirmation-message {\n      color: #757575;\n    }\n\n    .confirmation-buttons {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: flex;\n\n      -webkit-box-align: center;\n      -webkit-align-items: center;\n      align-items: center;\n\n      -webkit-box-pack: flex-end;\n      -webkit-justify-content: flex-end;\n      justify-content: flex-end;\n    }\n\n    .close-ad-button,\n    .resume-ad-button {\n      color: #fff;\n      cursor: pointer;\n      font-weight: 500;\n      text-align: center;\n\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: flex;\n    }\n\n    .close-ad-button {\n      color: #3e82f7;\n    }\n\n    .resume-ad-button {\n      background: #3e82f7;\n      border-radius: 2px;\n      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .24);\n    }\n  </style>\n  ') +
        '</head><body><div class="header-panel">';
      if (2 != t) {
        type = type + "Ad";
      }
      type = type + ('<div class="dismiss-button" id="dismiss-button">' + (2 == t ? '<div class="count-down-container" id="count-down-container"><div id="count-down"><div class="count-down-text" id="count-down-text"></div></div><div class="x-button" id="close-button" style="padding-left: 5px;">' + view() + "</div></div>" : "") + '<div class="x-button" id="dismiss-button-element">' + view() + '</div></div></div><div class="container"><div class="creative">' +
        ajax('<div style="position:relative;float:right;top:1px;right:1px;width:15px;height:15px;"><svg style="fill:#00aecd;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15"><circle cx="6" cy="6" r="0.67"></circle><path d="M4.2,11.3Q3.3,11.8,3.3,10.75L3.3,4.1Q3.3,3.1,4.3,3.5L10.4,7.0Q12.0,7.5,10.4,8.0L6.65,10.0L6.65,7.75a0.65,0.65,0,1,0,-1.3,0L5.35,10.75a0.9,0.9,0,0,0,1.3,0.8L12.7,8.2Q13.7,7.5,12.7,6.7L3.3,1.6Q2.2,1.3,1.8,2.5L1.8,12.5Q2.2,13.9,3.3,13.3L4.8,12.5A0.3,0.3,0,1,0,4.2,11.3Z"></path></svg></div>') +
        '<a target="_blank" href="https://developers.google.com/ad-placement"><div class="adContainer"><div class="logo">' + ajax('<img width="40" height="40" alt="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTVweCIgaGVpZ2h0PSI1NnB4IiB2aWV3Qm94PSIwIDAgNTUgNTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjMgKDY3Mjk3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5sb2dvX2dvb2dsZWdfNDhkcDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJNMl92MiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IjAyYV9hdXRvX2FkcyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQxNy4wMDAwMDAsIC03MDUuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJtb2JpbGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM3OC4wMDAwMDAsIDE2NC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC00IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDc0LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHUC1hZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEuMDAwMDAwLCA0NDQuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJsb2dvX2dvb2dsZWdfNDhkcCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuMDAwMDAwLCAyMy4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01NC44OCwyOC42MzYzNjM2IEM1NC44OCwyNi42NTA5MDkxIDU0LjcwMTgxODIsMjQuNzQxODE4MiA1NC4zNzA5MDkxLDIyLjkwOTA5MDkgTDI4LDIyLjkwOTA5MDkgTDI4LDMzLjc0IEw0My4wNjkwOTA5LDMzLjc0IEM0Mi40MiwzNy4yNCA0MC40NDcyNzI3LDQwLjIwNTQ1NDUgMzcuNDgxODE4Miw0Mi4xOTA5MDkxIEwzNy40ODE4MTgyLDQ5LjIxNjM2MzYgTDQ2LjUzMDkwOTEsNDkuMjE2MzYzNiBDNTEuODI1NDU0NSw0NC4zNDE4MTgyIDU0Ljg4LDM3LjE2MzYzNjQgNTQuODgsMjguNjM2MzYzNiBaIiBpZD0iU2hhcGUiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI4LDU2IEMzNS41Niw1NiA0MS44OTgxODE4LDUzLjQ5MjcyNzMgNDYuNTMwOTA5MSw0OS4yMTYzNjM2IEwzNy40ODE4MTgyLDQyLjE5MDkwOTEgQzM0Ljk3NDU0NTUsNDMuODcwOTA5MSAzMS43NjcyNzI3LDQ0Ljg2MzYzNjQgMjgsNDQuODYzNjM2NCBDMjAuNzA3MjcyNyw0NC44NjM2MzY0IDE0LjUzNDU0NTUsMzkuOTM4MTgxOCAxMi4zMzI3MjczLDMzLjMyIEwyLjk3ODE4MTgyLDMzLjMyIEwyLjk3ODE4MTgyLDQwLjU3NDU0NTUgQzcuNTg1NDU0NTUsNDkuNzI1NDU0NSAxNy4wNTQ1NDU1LDU2IDI4LDU2IFoiIGlkPSJTaGFwZSIgZmlsbD0iIzM0QTg1MyIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTIuMzMyNzI3MywzMy4zMiBDMTEuNzcyNzI3MywzMS42NCAxMS40NTQ1NDU1LDI5Ljg0NTQ1NDUgMTEuNDU0NTQ1NSwyOCBDMTEuNDU0NTQ1NSwyNi4xNTQ1NDU1IDExLjc3MjcyNzMsMjQuMzYgMTIuMzMyNzI3MywyMi42OCBMMTIuMzMyNzI3MywxNS40MjU0NTQ1IEwyLjk3ODE4MTgyLDE1LjQyNTQ1NDUgQzEuMDgxODE4MTgsMTkuMjA1NDU0NSAwLDIzLjQ4MTgxODIgMCwyOCBDMCwzMi41MTgxODE4IDEuMDgxODE4MTgsMzYuNzk0NTQ1NSAyLjk3ODE4MTgyLDQwLjU3NDU0NTUgTDEyLjMzMjcyNzMsMzMuMzIgWiIgaWQ9IlNoYXBlIiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOCwxMS4xMzYzNjM2IEMzMi4xMTA5MDkxLDExLjEzNjM2MzYgMzUuODAxODE4MiwxMi41NDkwOTA5IDM4LjcwMzYzNjQsMTUuMzIzNjM2NCBMNDYuNzM0NTQ1NSw3LjI5MjcyNzI3IEM0MS44ODU0NTQ1LDIuNzc0NTQ1NDUgMzUuNTQ3MjcyNywwIDI4LDAgQzE3LjA1NDU0NTUsMCA3LjU4NTQ1NDU1LDYuMjc0NTQ1NDUgMi45NzgxODE4MiwxNS40MjU0NTQ1IEwxMi4zMzI3MjczLDIyLjY4IEMxNC41MzQ1NDU1LDE2LjA2MTgxODIgMjAuNzA3MjcyNywxMS4xMzYzNjM2IDI4LDExLjEzNjM2MzYgWiIgaWQ9IlNoYXBlIiBmaWxsPSIjRUE0MzM1IiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJTaGFwZSIgcG9pbnRzPSIwIDAgNTYgMCA1NiA1NiAwIDU2Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="/>') +
        '</div><div class="text"><div class="adText">' + clean(values) + '</div><div class="areaText">' + (clean("Disclaimer: This ad is not frequency capped.") + "</div></div></div></a></div></div></body></html>"));
      values = ajax(type).za();
      t = f.contentDocument || f.contentWindow.document;
      t.open();
      t.write(stringify(values));
      t.close();
      data.g = new FunctionInstance(window, f, data.j);
      test(data);
    });
  }
  function onLoad(iframe, callback) {
    if (iframe.contentDocument || iframe.contentWindow) {
      callback(iframe);
    } else {
      var handler = function () {
        callback(iframe);
        removeEventListener(iframe, "load", handler);
      };
      on(iframe, "load", handler);
    }
  }
  function render(d) {
    var b;
    var iframe;
    var vy;
    var e;
    var iframeDocument;
    var a;
    var rendererSorttoggle;
    var valueProgess;
    var openInitPopup;
    var onDoubleClick;
    var i;
    return promise(function (cell) {
      if (1 == cell.g) {
        if (null == d.g) {
          throw Error("Tried to show ad before initialized.");
        }
        b = new DateInstance;
        iframe = d.g.g;
        vy = Math.min(Number(iframe.clientWidth), Number(iframe.clientHeight));
        e = Math.max(Number(iframe.clientWidth), Number(iframe.clientHeight));
        if (minhour(d)) {
          vy = vy * .5;
          e = e * .5;
        }
        iframeDocument = iframe.contentDocument;
        a = iframeDocument.body.appendChild(build(d.m, data, {
          Xa: vy,
          Oa: e
        }));
        rendererSorttoggle = a.querySelector(".close-ad-button");
        valueProgess = a.querySelector(".resume-ad-button");
        openInitPopup = function () {
          b.resolve(0);
        };
        onDoubleClick = function () {
          b.resolve(1);
        };
        on(rendererSorttoggle, "click", openInitPopup);
        on(valueProgess, "click", onDoubleClick);
        return cb(cell, b.promise, 2);
      }
      i = cell.i;
      iframeDocument.body.removeChild(a);
      return cell.return(0 === i);
    });
  }
  function minhour(d) {
    if (null == d.g) {
      throw Error("Tried to show ad before initialized.");
    }
    d = d.g.g;
    return 1E3 < Number(d.clientWidth) || 1E3 < Number(d.clientHeight);
  }
  function InfoCommandHandler() {
  }
  function Form(data, x, a, b, theta) {
    e.call(this);
    this.ima = data;
    this.h = x;
    this.i = a;
    this.j = b;
    this.g = theta;
    this.callback = function () {
    };
  }
  function onPlayerReady(event, url, settings) {
    event.g.addEventListener(event.ima.AdErrorEvent.Type.AD_ERROR, function () {
      playVideo(event, settings);
    });
    event.g.addEventListener(event.ima.AdEvent.Type.SKIPPED, function () {
      playVideo(event, url);
    });
    event.g.addEventListener(event.ima.AdEvent.Type.COMPLETE, function () {
      playVideo(event, url);
    });
  }
  function playVideo(options, item) {
    $(options.i, {
      display: "none",
      "z-index": "0"
    });
    options.callback(item);
  }
  function googleChartsLoader(g) {
    var o = window;
    var font = this;
    var object = void 0 === object ? getElementsByTagName(value) : object;
    this.o = o;
    this.G = g;
    this.Ma = object;
    this.ima = player.ima;
    this.document = this.o.document;
    g = this.document.createElement("script");
    createElement(g, this.Ma);
    var e = new DateInstance;
    g.onload = function () {
      font.ima = font.o.google.ima;
      e.resolve();
    };
    this.Wa = e.promise;
    this.document.documentElement.appendChild(g);
  }
  function createFrame(d) {
    var frame = d.document.createElement("div");
    $(frame, {
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      position: "fixed",
      display: "none",
      "z-index": "0"
    });
    d.document.body.appendChild(frame);
    return frame;
  }
  function _windowHasScrollbar(page, context) {
    page = new page.ima.AdDisplayContainer(context);
    page.initialize();
    return page;
  }
  function bindEvents(table, opts, options, callback, category, message) {
    var adsRenderingSettings = new table.ima.AdsRenderingSettings;
    adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = true;
    var self = opts.getAdsManager({}, adsRenderingSettings);
    self.addEventListener(table.ima.AdEvent.Type.LOADED, function () {
      var request = new Form(table.ima, message.type, options, callback, self);
      category.destroy();
      message.callback(request);
    });
    opts = getViewport(table.o);
    self.init(opts.width, opts.height, table.ima.ViewMode.FULLSCREEN);
  }
  function redirect(o) {
    var input = o.G.google_ad_client.replace("ca-", "ca-games-");
    o = o.G.google_page_url || o.document.URL;
    var self = {};
    input = (self.ad_type = "video_text_image", self.client = input, self.description_url = o, self.overlay = "0", self);
    o = new URL("https://googleads.g.doubleclick.net/pagead/ads");
    o.search = (new URLSearchParams(input)).toString();
    return o.toString();
  }
  function ui() {
    this.j = join(register);
    this.l = (new global.Map).set("inv_plcnf", 1).set("inv_adcnf", 2).set("adbr_cl", 3).set("adbr_noad", 4).set("adbr_nousitr", 5).set("adbr_usrint", 6).set("adbr_naf", 7).set("adbr_pgad", 8).set("adbr_pgaatd", 9).set("adbr_tepgai", 10).set("adcf_cl", 11).set("adcf_pgad", 13).set("adcf_pgaatd", 14).set("prf_suc", 15).set("prf_fail", 16).set("admb_na", 17).set("admb_rfs", 18).set("admb_fetfail", 19).set("lgc_fld", 20).set("pr_rr", 21).set("api_ld", 23).set("dbl_init", 26).set("admb_tm", 24).set("adbr_dn",
      25).set("dbl_init", 26).set("sess_m", 27).set("ad_cls", 28);
    this.m = (new global.Map).set("admob", 1).set("adsense", 2).set("ima", 3);
  }
  function val(p) {
    this.h = new ui;
    this.g = p;
  }
  function enter(elem) {
    function update() {
      needle_color.g = Date.now();
    }
    v.call(this);
    var needle_color = this;
    this.g = 0;
    var to = setTimeout(doEnd);
    var testCase = to.next();
    for (; !testCase.done; testCase = to.next()) {
      elem.document.documentElement.addEventListener(testCase.value, update, {
        capture: true
      });
    }
    ready(this, function () {
      var to = setTimeout(doEnd);
      var entry = to.next();
      for (; !entry.done; entry = to.next()) {
        elem.document.documentElement.removeEventListener(entry.value, update, {
          capture: true
        });
      }
    });
  }
  function execute(options, state) {
    function executeSpecific(boardManager) {
      d = true;
      state.error("Invalid ad config: " + boardManager + ".");
    }
    var d = false;
    if (null != options.preloadAdBreaks && !dependants.has(options.preloadAdBreaks)) {
      var e = define(Array, "from").call(Array, dependants).map(function (canCreateDiscussions) {
        return "'" + canCreateDiscussions + "'";
      }).join(", ");
      executeSpecific("'preloadAdBreaks' must be one of [" + e + "]");
    }
    if (!(null == options.sound || args.has(options.sound))) {
      e = define(Array, "from").call(Array, args).map(function (canCreateDiscussions) {
        return "'" + canCreateDiscussions + "'";
      }).join(", ");
      executeSpecific("'sound' must be one of [" + e + "]");
    }
    if (null != options.onReady && "function" !== typeof options.onReady) {
      executeSpecific("'onReady' must be a function");
    }
    return !d;
  }
  function exec(a, b, input) {
    var deletedChar = setTimeout(setTrailViewOffset);
    var p = deletedChar.next();
    for (; !p.done; p = deletedChar.next()) {
      var x = setTimeout(p.value);
      p = x.next().value;
      x = x.next().value;
      if (p in a) {
        input.s("lgc_fld", {
          field: p
        });
        if (x in a) {
          return b.error("Invalid placement config: '" + p + "' has been renamed to " + x + ". Cannot pass both fields. Please use " + x + " only."), false;
        }
        b.warn("Placement config: '" + p + "' has been renamed to '" + x + "'. Please update your code.");
        a[x] = a[p];
        delete a[p];
      }
    }
    return true;
  }
  function parseParams(p, url, args) {
    function decode(textToBeDecoded) {
      data = true;
      url.error("Invalid placement config: " + textToBeDecoded + ".");
    }
    var data = false;
    p = define(Object, "assign").call(Object, {}, p);
    if (!exec(p, url, args)) {
      return {
        xa: false,
        Aa: p
      };
    }
    if (!redirects.has(p.type)) {
      return args = define(Array, "from").call(Array, redirects).map(function (canCreateDiscussions) {
        return "'" + canCreateDiscussions + "'";
      }).join(", "), decode("'type' must be one of [" + args + "]"), {
        xa: !data,
        Aa: p
      };
    }
    args = resultMapA.get(p.type);
    var e = implModule.get(args).filter(function (data) {
      return !(data in p);
    });
    if (0 < e.length) {
      decode("missing required properties " + e.map(function (canCreateDiscussions) {
        return "'" + canCreateDiscussions + "'";
      }).join(", "));
    }
    args = codegenUtils.get(args).filter(function (data) {
      return data in p;
    });
    if (0 < args.length) {
      decode("the following properties are not used for the given ad type: " + args.map(function (canCreateDiscussions) {
        return "'" + canCreateDiscussions + "'";
      }).join(", "));
    }
    args = setTimeout(innerTimer);
    e = args.next();
    for (; !e.done; e = args.next()) {
      e = e.value;
      if (e in p && "function" !== typeof p[e]) {
        decode("'" + e + "' must be a function");
      }
    }
    return {
      xa: !data,
      Aa: p
    };
  }
  function Connection(index, callback) {
    v.call(this);
    this.N = new DateInstance;
    this.g = false;
    this.timeout = setTimeout(throttle(726, function () {
      callback();
    }), 1E3 * index);
  }
  function run(b, q) {
    v.call(this);
    this.j = b;
    this.g = q;
    this.i = null;
    this.D = "";
    this.na = this.ca = this.Ca = this.R = false;
    this.ma = 0;
    this.T = false;
    this.Ba = null;
    this.pa = [];
    this.da = window.innerWidth;
    this.ra = window.innerHeight;
    this.oa = this.Fa = this.B = false;
    this.P = global.Promise.resolve();
    this.Da = 0;
    this.m = {
      sound: "on"
    };
    this.h = new global.Map;
    this.qa = new global.Set;
    this.l = new global.Map;
    this.Ea = new enter(window);
    this.M = new global.Set;
    this.Ka = new global.Map([[1, []], [2, []]]);
    ready(this, addEventListener(scroll, this.Ea));
  }
  function search(res, a) {
    window.addEventListener("onpagehide" in self ? "pagehide" : "unload", throttle(938, function () {
      if (a.first_slotcar_request_processing_time) {
        var latitude = Date.now();
        res.g.s("sess_m", {
          igsl: latitude - a.first_slotcar_request_processing_time,
          afh: String(a.ad_frequency_hint),
          niab: Number(a.number_of_interstitial_ad_breaks),
          nias: Number(a.number_of_interstitial_ads_shown),
          opsl: latitude - a.adsbygoogle_execution_start_time
        });
      }
    }));
  }
  function request(data) {
    if (!data.ca || data.Fa) {
      if (!data.Ca && data.m.preloadAdBreaks) {
        var index = setTimeout([1, 2]);
        var value = index.next();
        for (; !value.done; value = index.next()) {
          if (value = value.value, !data.h.has(value) && !data.M.has(value)) {
            return;
          }
        }
      }
      data.Ca = true;
      for (; 0 < data.pa.length;) {
        index = data.pa.pop();
        keys(data, "onReady", index);
      }
    }
  }
  function query(item, done, value) {
    var done;
    var i;
    return promise(function (result) {
      if (1 == result.g) {
        if (item.na) {
          return item.g.s("pr_rr"), sync(item, done, value, "frequencyCapped"), result.return(false);
        }
        item.na = true;
        if (item.ca) {
          result = cb(result, item.P, 2);
        } else {
          result.g = 2;
          result = void 0;
        }
        return result;
      }
      if (4 != result.g) {
        return done = isArray(item, value) ? item.l.get(value) : slice(item, value, 0, 2), cb(result, global.Promise.race([done.promise, repeat(1E3 * get(obj1), 2)]), 4);
      }
      i = result.i;
      return 1 === i ? (item.g.s("adbr_noad"), sync(item, done, value, "noAdPreloaded"), result.return(false)) : 2 === i ? (item.g.s("pr_to", {
        source: "slotcar"
      }), sync(item, done, value, "timeout"), result.return(false)) : result.return(true);
    });
  }
  function concat(a, memo) {
    var e = a.google_adbreak_test;
    if (e) {
      switch (e) {
        case "on":
          return new InfoCommandHandler;
        case "adsense":
          break;
        default:
          throw memo.error("Unsupported data-adbreak-test value '" + e + ". Supported values: 'on'."), Error("unsupported test mode");
      }
    }
    return new Matrix(a);
  }
  function getFieldFromFilter(filter, strategy, selector) {
    if (null == reverEnv) {
      reverEnv = new draw;
    }
    return reverEnv.connect().then(function (canCreateDiscussions) {
      return new fill(canCreateDiscussions, filter, strategy, selector);
    });
  }
  function loop(val, m, a, f, start) {
    var v = val.Ka.get(a);
    var k = m ? 1 : -1;
    var d = 0 < v.length ? v[v.length - 1] : 0;
    if (define(Math, "sign").call(Math, d) === k) {
      v[v.length - 1] = d + k;
    } else {
      v.push(k);
    }
    val.g.s(m ? "prf_suc" : "prf_fail", {
      type: a,
      src: f,
      stats: v.join(","),
      timing: Date.now() - start
    });
  }
  function grayscale(data) {
    return data.R ? "adbreaktest" : data.B ? "admob" : "adsense";
  }
  function next(data, i, callback) {
    var p;
    var key;
    return promise(function (domFixtures) {
      p = data.i;
      key = Date.now();
      p.fetch({
        type: i,
        wa: "on" === data.m.sound,
        La: join(k).g(),
        callback: function (url) {
          data.M.delete(i);
          var h = data.l.get(i);
          if (url) {
            h.resolve(0);
            data.h.set(i, url);
            ready(url, function () {
              data.h.delete(i);
            });
          } else {
            h.resolve(1);
            data.M.add(i);
            slice(data, i, get(instance), 5);
          }
          loop(data, null != url, i, callback, key);
          if (!(1 !== callback && 7 !== callback)) {
            request(data);
          }
        }
      });
      domFixtures.g = 0;
    });
  }
  function sort(a, b) {
    var c;
    return promise(function (cell) {
      return 1 == cell.g ? (c = new DateInstance, a.Ba = c, evaluate(a, "beforeReward", function () {
        b.beforeReward(function () {
          c.resolve(0);
        });
      }), cb(cell, c.promise, 2)) : cell.return(0 === cell.i);
    });
  }
  function slice(a, b, s, end) {
    if (isArray(a, b)) {
      throw Error("already scheduled");
    }
    s = new Connection(s, function () {
      return next(a, b, end);
    });
    a.l.set(b, s);
    return s;
  }
  function evaluate(options, callback, done) {
    if (done) {
      try {
        done();
      } catch (newRemoteSdp) {
        return options.j.error("'" + callback + "' callback threw an error:", newRemoteSdp), false;
      }
    }
    return true;
  }
  function keys(scope, options, object) {
    async(function () {
      evaluate(scope, options, object);
    });
  }
  function generate(args) {
    var deletedChar = setTimeout([1, 2]);
    var i = deletedChar.next();
    for (; !i.done; i = deletedChar.next()) {
      i = i.value;
      var recipe = args.h.get(i);
      if (recipe || isArray(args, i)) {
        if (recipe) {
          recipe.v();
          args.h.delete(i);
        } else {
          args.l.get(i).v();
          args.l.delete(i);
        }
        slice(args, i, 0, 7);
      }
    }
  }
  function update(item, i, to, source) {
    source = void 0 === source ? true : source;
    var recipe = item.h.get(i);
    if (recipe) {
      recipe.v();
      slice(item, i, 10, to);
      if (source) {
        item.h.delete(i);
      }
    }
  }
  function clone(options, name) {
    name = name.google_ad_frequency_hint;
    var tmp = get(y);
    if ("string" !== typeof name) {
      return tmp;
    }
    var regExResult = /^(\d+)s$/.exec(name);
    return null == regExResult ? (options.j.error("Invalid data-ad-frequency-hint value: '" + name + "'. It must be in format 'Xs' where X is a number."), tmp) : Math.max(get(c), Number(regExResult[1]));
  }
  function isArray(a, obj) {
    return a.l.has(obj) && !a.l.get(obj).g;
  }
  function sync(val, options, method, action) {
    var data = {
      breakType: options.type,
      breakFormat: 2 === method ? "reward" : "preroll" === options.type ? "preroll" : "interstitial",
      breakStatus: action
    };
    if (options.name) {
      data.breakName = options.name;
    }
    var ghRepos;
    val.g.s("adbr_dn", {
      breakType: data.breakType,
      breakFormat: data.breakFormat,
      breakStatus: data.breakStatus,
      breakName: null != (ghRepos = data.breakName) ? ghRepos : ""
    });
    var success = options.adBreakDone;
    if (null != success) {
      keys(val, "adBreakDone", function () {
        success(data);
      });
    }
  }
  function read(value) {
    return ["google_admob_interstitial_slot", "google_admob_rewarded_slot"].some(function (f) {
      return "string" === typeof normalizeValue(f, value);
    });
  }
  function normalizeValue(value, property) {
    if (property[value] && "string" === typeof property[value]) {
      return String(property[value]);
    }
  }
  function restore(self, file) {
    var type = file.google_admob_ads_only;
    if ("string" === typeof type) {
      if ("on" === type) {
        if (read(file)) {
          self.oa = true;
        } else {
          self.j.error("Cannot set data-admob-ads-only without providing at least one AdMob ad slot id.");
        }
      } else {
        self.j.error("Unsupported data-admob-ads-only value '" + type + "'. Supported value: 'on'.");
      }
    }
  }
  function verify(self, onComplete) {
    if (!self.oa || self.B) {
      onComplete();
    } else {
      self.g.s("adcf_afni");
    }
  }
  var result;
  var img;
  var defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function (object, name, descriptor) {
    if (object == Array.prototype || object == Object.prototype) {
      return object;
    }
    object[name] = descriptor.value;
    return object;
  };
  var root = dom(this);
  var applyFunc = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
  var global = {};
  var props = {};
  test("Symbol", function (a) {
    function parse(separator) {
      if (this instanceof parse) {
        throw new TypeError("Symbol is not a constructor");
      }
      return new Identifier(name + (separator || "") + "_" + widgetUniqueIDIndex++, separator);
    }
    function Identifier(p, start) {
      this.g = p;
      defineProperty(this, "description", {
        configurable: true,
        writable: true,
        value: start
      });
    }
    if (a) {
      return a;
    }
    Identifier.prototype.toString = function () {
      return this.g;
    };
    var name = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_";
    var widgetUniqueIDIndex = 0;
    return parse;
  }, "es6");
  test("Symbol.iterator", function (name) {
    if (name) {
      return name;
    }
    name = (0, global.Symbol)("Symbol.iterator");
    var segs = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" ");
    var i = 0;
    for (; i < segs.length; i++) {
      var constructor = root[segs[i]];
      if ("function" === typeof constructor && "function" != typeof constructor.prototype[name]) {
        defineProperty(constructor.prototype, name, {
          configurable: true,
          writable: true,
          value: function () {
            return string(once(this));
          }
        });
      }
    }
    return name;
  }, "es6");
  var isCurrentType = applyFunc && "function" == typeof define(Object, "assign") ? define(Object, "assign") : function (runner, b) {
    var index = 1;
    for (; index < arguments.length; index++) {
      var config = arguments[index];
      if (config) {
        var prop;
        for (prop in config) {
          if (assert(config, prop)) {
            runner[prop] = config[prop];
          }
        }
      }
    }
    return runner;
  };
  test("Object.assign", function (isPrevType) {
    return isPrevType || isCurrentType;
  }, "es6");
  var mixin = "function" == typeof Object.create ? Object.create : function (a) {
    function GUI() {
    }
    GUI.prototype = a;
    return new GUI;
  };
  var getBackendSessionBySid;
  if (applyFunc && "function" == typeof Object.setPrototypeOf) {
    getBackendSessionBySid = Object.setPrototypeOf;
  } else {
    var a;
    a: {
      var r = {
        a: true
      };
      var global = {};
      try {
        global.__proto__ = r;
        a = global.a;
        break a;
      } catch (a) {
      }
      a = false;
    }
    getBackendSessionBySid = a ? function (source, src) {
      source.__proto__ = src;
      if (source.__proto__ !== src) {
        throw new TypeError(source + " is not extensible");
      }
      return source;
    } : null;
  }
  var method = getBackendSessionBySid;
  component.prototype.m = function (str) {
    this.i = str;
  };
  component.prototype.return = function (value) {
    this.j = {
      return: value
    };
    this.g = this.C;
  };
  test("Promise", function (a) {
    function Promise(executor) {
      this.g = 0;
      this.i = void 0;
      this.h = [];
      this.C = false;
      var future = this.j();
      try {
        executor(future.resolve, future.reject);
      } catch (reasons) {
        future.reject(reasons);
      }
    }
    function self() {
      this.g = null;
    }
    function resolve(data) {
      return data instanceof Promise ? data : new Promise(function (resolve) {
        resolve(data);
      });
    }
    if (a) {
      return a;
    }
    self.prototype.h = function (str) {
      if (null == this.g) {
        this.g = [];
        var pocker = this;
        this.i(function () {
          pocker.l();
        });
      }
      this.g.push(str);
    };
    var attr = root.setTimeout;
    self.prototype.i = function (value) {
      attr(value, 0);
    };
    self.prototype.l = function () {
      for (; this.g && this.g.length;) {
        var lineNumbers = this.g;
        this.g = [];
        var i = 0;
        for (; i < lineNumbers.length; ++i) {
          var insertBefore = lineNumbers[i];
          lineNumbers[i] = null;
          try {
            insertBefore();
          } catch (l) {
            this.j(l);
          }
        }
      }
      this.g = null;
    };
    self.prototype.j = function (value) {
      this.i(function () {
        throw value;
      });
    };
    Promise.prototype.j = function () {
      function c(cb) {
        return function (name) {
          if (!k) {
            k = true;
            cb.call(cbCtx, name);
          }
        };
      }
      var cbCtx = this;
      var k = false;
      return {
        resolve: c(this.P),
        reject: c(this.l)
      };
    };
    Promise.prototype.P = function (x) {
      if (x === this) {
        this.l(new TypeError("A Promise cannot resolve to itself"));
      } else {
        if (x instanceof Promise) {
          this.T(x);
        } else {
          a: {
            switch (typeof x) {
              case "object":
                var dirty = null != x;
                break a;
              case "function":
                dirty = true;
                break a;
              default:
                dirty = false;
            }
          }
          if (dirty) {
            this.M(x);
          } else {
            this.m(x);
          }
        }
      }
    };
    Promise.prototype.M = function (value) {
      var then = void 0;
      try {
        then = value.then;
      } catch (k) {
        this.l(k);
        return;
      }
      if ("function" == typeof then) {
        this.U(then, value);
      } else {
        this.m(value);
      }
    };
    Promise.prototype.l = function (b) {
      this.H(2, b);
    };
    Promise.prototype.m = function (str) {
      this.H(1, str);
    };
    Promise.prototype.H = function (b, a) {
      if (0 != this.g) {
        throw Error("Cannot settle(" + b + ", " + a + "): Promise already settled in state" + this.g);
      }
      this.g = b;
      this.i = a;
      if (2 === this.g) {
        this.R();
      }
      this.B();
    };
    Promise.prototype.R = function () {
      var msg = this;
      attr(function () {
        if (msg.D()) {
          var async = root.console;
          if ("undefined" !== typeof async) {
            async.error(msg.i);
          }
        }
      }, 1);
    };
    Promise.prototype.D = function () {
      if (this.C) {
        return false;
      }
      var event = root.CustomEvent;
      var Event = root.Event;
      var cb = root.dispatchEvent;
      if ("undefined" === typeof cb) {
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
      event.reason = this.i;
      return cb(event);
    };
    Promise.prototype.B = function () {
      if (null != this.h) {
        var i = 0;
        for (; i < this.h.length; ++i) {
          obj.h(this.h[i]);
        }
        this.h = null;
      }
    };
    var obj = new self;
    Promise.prototype.T = function (self) {
      var j = this.j();
      self.ga(j.resolve, j.reject);
    };
    Promise.prototype.U = function (then, x) {
      var deferred = this.j();
      try {
        then.call(x, deferred.resolve, deferred.reject);
      } catch (exception) {
        deferred.reject(exception);
      }
    };
    Promise.prototype.then = function (callback, type) {
      function wrap(callback, type) {
        return "function" == typeof callback ? function (reason) {
          try {
            cast(callback(reason));
          } catch (allNewFiles) {
            update(allNewFiles);
          }
        } : type;
      }
      var cast;
      var update;
      var thenPromise = new Promise(function (boolean, res) {
        cast = boolean;
        update = res;
      });
      this.ga(wrap(callback, cast), wrap(type, update));
      return thenPromise;
    };
    Promise.prototype.catch = function (handler) {
      return this.then(void 0, handler);
    };
    Promise.prototype.ga = function (expect, fn) {
      function end() {
        switch (list.g) {
          case 1:
            expect(list.i);
            break;
          case 2:
            fn(list.i);
            break;
          default:
            throw Error("Unexpected state: " + list.g);
        }
      }
      var list = this;
      if (null == this.h) {
        obj.h(end);
      } else {
        this.h.push(end);
      }
      this.C = true;
    };
    Promise.resolve = resolve;
    Promise.reject = function (reason) {
      return new Promise(function (canCreateDiscussions, reject$2) {
        reject$2(reason);
      });
    };
    Promise.race = function (done) {
      return new Promise(function (T, key) {
        var fail = setTimeout(done);
        var result = fail.next();
        for (; !result.done; result = fail.next()) {
          resolve(result.value).ga(T, key);
        }
      });
    };
    Promise.all = function (mask) {
      var f = setTimeout(mask);
      var e = f.next();
      return e.done ? resolve([]) : new Promise(function (objCallback, key) {
        function next(i) {
          return function (x) {
            remainders[i] = x;
            G--;
            if (0 == G) {
              objCallback(remainders);
            }
          };
        }
        var remainders = [];
        var G = 0;
        do {
          remainders.push(void 0);
          G++;
          resolve(e.value).ga(next(remainders.length - 1), key);
          e = f.next();
        } while (!e.done);
      });
    };
    return Promise;
  }, "es6");
  test("WeakMap", function (TransitionController) {
    function e(a) {
      this.g = (buf = buf + (Math.random() + 1)).toString();
      if (a) {
        a = setTimeout(a);
        var result;
        for (; !(result = a.next()).done;) {
          result = result.value;
          this.set(result[0], result[1]);
        }
      }
    }
    function Method() {
    }
    function isObject(b) {
      var a = typeof b;
      return "object" === a && null !== b || "function" === a;
    }
    if (function () {
      if (!TransitionController || !Object.seal) {
        return false;
      }
      try {
        var g = Object.seal({});
        var h = Object.seal({});
        var c = new TransitionController([[g, 2], [h, 3]]);
        if (2 != c.get(g) || 3 != c.get(h)) {
          return false;
        }
        c.delete(g);
        c.set(h, 4);
        return !c.has(g) && 4 == c.get(h);
      } catch (l) {
        return false;
      }
    }()) {
      return TransitionController;
    }
    var value = "$jscomp_hidden_" + Math.random();
    var buf = 0;
    e.prototype.set = function (obj, n) {
      if (!isObject(obj)) {
        throw Error("Invalid WeakMap key");
      }
      if (!assert(obj, value)) {
        var method = new Method;
        defineProperty(obj, value, {
          value: method
        });
      }
      if (!assert(obj, value)) {
        throw Error("WeakMap key fail: " + obj);
      }
      obj[value][this.g] = n;
      return this;
    };
    e.prototype.get = function (object) {
      return isObject(object) && assert(object, value) ? object[value][this.g] : void 0;
    };
    e.prototype.has = function (data) {
      return isObject(data) && assert(data, value) && assert(data[value], this.g);
    };
    e.prototype.delete = function (data) {
      return isObject(data) && assert(data, value) && assert(data[value], this.g) ? delete data[value][this.g] : false;
    };
    return e;
  }, "es6");
  test("Map", function (Map) {
    function init() {
      var head = {};
      return head.K = head.next = head.head = head;
    }
    function initialize(array, config) {
      var entry = array[1];
      return string(function () {
        if (entry) {
          for (; entry.head != array[1];) {
            entry = entry.K;
          }
          for (; entry.next != entry.head;) {
            return entry = entry.next, {
              done: false,
              value: config(entry)
            };
          }
          entry = null;
        }
        return {
          done: true,
          value: void 0
        };
      });
    }
    function run(index, value) {
      var type = value && typeof value;
      if ("object" == type || "function" == type) {
        if (f.has(value)) {
          type = f.get(value);
        } else {
          type = "" + ++nextGuid;
          f.set(value, type);
        }
      } else {
        type = "p_" + value;
      }
      var result = index[0][type];
      if (result && assert(index[0], type)) {
        index = 0;
        for (; index < result.length; index++) {
          var entry = result[index];
          if (value !== value && entry.key !== entry.key || value === entry.key) {
            return {
              id: type,
              list: result,
              index: index,
              F: entry
            };
          }
        }
      }
      return {
        id: type,
        list: result,
        index: -1,
        F: void 0
      };
    }
    function Map(f) {
      this[0] = {};
      this[1] = init();
      this.size = 0;
      if (f) {
        f = setTimeout(f);
        var result;
        for (; !(result = f.next()).done;) {
          result = result.value;
          this.set(result[0], result[1]);
        }
      }
    }
    if (function () {
      if (!Map || "function" != typeof Map || !define(Map.prototype, "entries") || "function" != typeof Object.seal) {
        return false;
      }
      try {
        var key = Object.seal({
          x: 4
        });
        var map = new Map(setTimeout([[key, "s"]]));
        if ("s" != map.get(key) || 1 != map.size || map.get({
          x: 4
        }) || map.set({
          x: 4
        }, "t") != map || 2 != map.size) {
          return false;
        }
        var operation = define(map, "entries").call(map);
        var item = operation.next();
        if (item.done || item.value[0] != key || "s" != item.value[1]) {
          return false;
        }
        item = operation.next();
        return item.done || 4 != item.value[0].x || "t" != item.value[1] || !operation.next().done ? false : true;
      } catch (w) {
        return false;
      }
    }()) {
      return Map;
    }
    var f = new global.WeakMap;
    Map.prototype.set = function (name, n) {
      name = 0 === name ? 0 : name;
      var p = run(this, name);
      if (!p.list) {
        p.list = this[0][p.id] = [];
      }
      if (p.F) {
        p.F.value = n;
      } else {
        p.F = {
          next: this[1],
          K: this[1].K,
          head: this[1],
          key: name,
          value: n
        };
        p.list.push(p.F);
        this[1].K.next = p.F;
        this[1].K = p.F;
        this.size++;
      }
      return this;
    };
    Map.prototype.delete = function (item) {
      item = run(this, item);
      return item.F && item.list ? (item.list.splice(item.index, 1), item.list.length || delete this[0][item.id], item.F.K.next = item.F.next, item.F.next.K = item.F.K, item.F.head = null, this.size--, true) : false;
    };
    Map.prototype.clear = function () {
      this[0] = {};
      this[1] = this[1].K = init();
      this.size = 0;
    };
    Map.prototype.has = function (name) {
      return !!run(this, name).F;
    };
    Map.prototype.get = function (callback) {
      return (callback = run(this, callback).F) && callback.value;
    };
    Map.prototype.entries = function () {
      return initialize(this, function (dataItemObj) {
        return [dataItemObj.key, dataItemObj.value];
      });
    };
    Map.prototype.keys = function () {
      return initialize(this, function (shortcutKeyObject) {
        return shortcutKeyObject.key;
      });
    };
    Map.prototype.values = function () {
      return initialize(this, function (select_ele) {
        return select_ele.value;
      });
    };
    Map.prototype.forEach = function (fn, thisv) {
      var deletedChar = define(this, "entries").call(this);
      var data;
      for (; !(data = deletedChar.next()).done;) {
        data = data.value;
        fn.call(thisv, data[1], data[0], this);
      }
    };
    Map.prototype[define(global.Symbol, "iterator")] = define(Map.prototype, "entries");
    var nextGuid = 0;
    return Map;
  }, "es6");
  test("Object.values", function (position) {
    return position ? position : function (b) {
      var bulletList = [];
      var i;
      for (i in b) {
        if (assert(b, i)) {
          bulletList.push(b[i]);
        }
      }
      return bulletList;
    };
  }, "es8");
  test("Object.is", function (position) {
    return position ? position : function (a, b) {
      return a === b ? 0 !== a || 1 / a === 1 / b : a !== a && b !== b;
    };
  }, "es6");
  test("Array.prototype.includes", function (position) {
    return position ? position : function (type, offset) {
      var b = this;
      if (b instanceof String) {
        b = String(b);
      }
      var length = b.length;
      offset = offset || 0;
      if (0 > offset) {
        offset = Math.max(offset + length, 0);
      }
      for (; offset < length; offset++) {
        var val = b[offset];
        if (val === type || define(Object, "is").call(Object, val, type)) {
          return true;
        }
      }
      return false;
    };
  }, "es7");
  test("String.prototype.includes", function (position) {
    return position ? position : function (i, startIndex) {
      return -1 !== flatten(this, i, "includes").indexOf(i, startIndex || 0);
    };
  }, "es6");
  test("Array.prototype.entries", function (position) {
    return position ? position : function () {
      return iterator(this, function (b, canCreateDiscussions) {
        return [b, canCreateDiscussions];
      });
    };
  }, "es6");
  test("Array.from", function (position) {
    return position ? position : function (parent, fn, validator) {
      fn = null != fn ? fn : function (canCreateDiscussions) {
        return canCreateDiscussions;
      };
      var values = [];
      var last = "undefined" != typeof global.Symbol && define(global.Symbol, "iterator") && parent[define(global.Symbol, "iterator")];
      if ("function" == typeof last) {
        parent = last.call(parent);
        var i = 0;
        for (; !(last = parent.next()).done;) {
          values.push(fn.call(validator, last.value, i++));
        }
      } else {
        last = parent.length;
        i = 0;
        for (; i < last; i++) {
          values.push(fn.call(validator, parent[i], i));
        }
      }
      return values;
    };
  }, "es6");
  test("Array.prototype.keys", function (position) {
    return position ? position : function () {
      return iterator(this, function (b) {
        return b;
      });
    };
  }, "es6");
  test("Array.prototype.values", function (position) {
    return position ? position : function () {
      return iterator(this, function (b, canCreateDiscussions) {
        return canCreateDiscussions;
      });
    };
  }, "es8");
  test("Set", function (fn) {
    function Map(f) {
      this.g = new global.Map;
      if (f) {
        f = setTimeout(f);
        var item;
        for (; !(item = f.next()).done;) {
          this.add(item.value);
        }
      }
      this.size = this.g.size;
    }
    if (function () {
      if (!fn || "function" != typeof fn || !define(fn.prototype, "entries") || "function" != typeof Object.seal) {
        return false;
      }
      try {
        var value = Object.seal({
          x: 4
        });
        var object = new fn(setTimeout([value]));
        if (!object.has(value) || 1 != object.size || object.add(value) != object || 1 != object.size || object.add({
          x: 4
        }) != object || 2 != object.size) {
          return false;
        }
        var keydownSignal = define(object, "entries").call(object);
        var item = keydownSignal.next();
        if (item.done || item.value[0] != value || item.value[1] != value) {
          return false;
        }
        item = keydownSignal.next();
        return item.done || item.value[0] == value || 4 != item.value[0].x || item.value[1] != item.value[0] ? false : keydownSignal.next().done;
      } catch (g) {
        return false;
      }
    }()) {
      return fn;
    }
    Map.prototype.add = function (x) {
      x = 0 === x ? 0 : x;
      this.g.set(x, x);
      this.size = this.g.size;
      return this;
    };
    Map.prototype.delete = function (type) {
      type = this.g.delete(type);
      this.size = this.g.size;
      return type;
    };
    Map.prototype.clear = function () {
      this.g.clear();
      this.size = 0;
    };
    Map.prototype.has = function (type) {
      return this.g.has(type);
    };
    Map.prototype.entries = function () {
      return define(this.g, "entries").call(this.g);
    };
    Map.prototype.values = function () {
      return define(this.g, "values").call(this.g);
    };
    Map.prototype.keys = define(Map.prototype, "values");
    Map.prototype[define(global.Symbol, "iterator")] = define(Map.prototype, "values");
    Map.prototype.forEach = function (self, obj) {
      var overlayFrag = this;
      this.g.forEach(function (signedAuthToken) {
        return self.call(obj, signedAuthToken, signedAuthToken, overlayFrag);
      });
    };
    return Map;
  }, "es6");
  test("Object.entries", function (position) {
    return position ? position : function (b) {
      var steps = [];
      var p;
      for (p in b) {
        if (assert(b, p)) {
          steps.push([p, b[p]]);
        }
      }
      return steps;
    };
  }, "es8");
  test("String.prototype.endsWith", function (position) {
    return position ? position : function (val, v) {
      var object = flatten(this, val, "endsWith");
      if (void 0 === v) {
        v = object.length;
      }
      v = Math.max(0, Math.min(v | 0, object.length));
      var paswordLength = val.length;
      for (; 0 < paswordLength && 0 < v;) {
        if (object[--v] != val[--paswordLength]) {
          return false;
        }
      }
      return 0 >= paswordLength;
    };
  }, "es6");
  test("globalThis", function (opt_folderId) {
    return opt_folderId || root;
  }, "es_2020");
  test("Array.prototype.findIndex", function (position) {
    return position ? position : function (a, m) {
      a: {
        var c = this;
        if (c instanceof String) {
          c = String(c);
        }
        var cl = c.length;
        var i = 0;
        for (; i < cl; i++) {
          if (a.call(m, c[i], i, c)) {
            a = i;
            break a;
          }
        }
        a = -1;
      }
      return a;
    };
  }, "es6");
  test("Math.sign", function (position) {
    return position ? position : function (value) {
      value = Number(value);
      return 0 === value || isNaN(value) ? value : 0 < value ? 1 : -1;
    };
  }, "es6");
  test("Promise.prototype.finally", function (position) {
    return position ? position : function (functionToRunLater) {
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
  var context = this || self;
  var body;
  var HTML_REGEX = /&/g;
  var eamp = /</g;
  var reVowels = />/g;
  var reAlphas = /"/g;
  var trimRE = /'/g;
  var suffixre = /\x00/g;
  var NUMBERS_RE = /[\x00&<>"']/;
  var facetHasSelection;
  var searchwindow;
  a: {
    var crossfilterable_layers = ["CLOSURE_FLAGS"];
    var cur = context;
    var layer_i = 0;
    for (; layer_i < crossfilterable_layers.length; layer_i++) {
      if (cur = cur[crossfilterable_layers[layer_i]], null == cur) {
        searchwindow = null;
        break a;
      }
    }
    searchwindow = cur;
  }
  var searchwindowclass = searchwindow && searchwindow[610401301];
  facetHasSelection = null != searchwindowclass ? searchwindowclass : false;
  var $scope;
  var browser = context.navigator;
  $scope = browser ? browser.userAgentData || null : null;
  equals[" "] = function () {
  };
  var isIEMobile = isInputEventSupported();
  var isFirefox = agent_contains("Gecko") && !(-1 != userAgent().toLowerCase().indexOf("webkit") && !agent_contains("Edge")) && !(agent_contains("Trident") || agent_contains("MSIE")) && !agent_contains("Edge");
  var relto = -1 != userAgent().toLowerCase().indexOf("webkit") && !agent_contains("Edge");
  if (!!agent_contains("Android")) {
    _detectBrowserVersion();
  }
  _detectBrowserVersion();
  getBrowserInfo();
  var row = {};
  var dst = null;
  var hasFocus = "undefined" !== typeof Uint8Array;
  var zb = !isIEMobile && "function" === typeof btoa;
  var _i = "function" === typeof global.Symbol && "symbol" === typeof (0, global.Symbol)() ? (0, global.Symbol)() : void 0;
  var setTime = _i ? function (buffer, mask) {
    buffer[_i] |= mask;
  } : function (self, type) {
    if (void 0 !== self.g) {
      self.g |= type;
    } else {
      Object.defineProperties(self, {
        g: {
          value: type,
          configurable: true,
          writable: true,
          enumerable: false
        }
      });
    }
  };
  var indexOf = _i ? function (obj) {
    return obj[_i] | 0;
  } : function (str) {
    return str.g | 0;
  };
  var hasOwnProperty = _i ? function (date) {
    return date[_i];
  } : function (a) {
    return a.g;
  };
  var trim = _i ? function (b, x) {
    b[_i] = x;
  } : function (obj, c) {
    if (void 0 !== obj.g) {
      obj.g = c;
    } else {
      Object.defineProperties(obj, {
        g: {
          value: c,
          configurable: true,
          writable: true,
          enumerable: false
        }
      });
    }
  };
  var symbol = {};
  var cls = [];
  trim(cls, 23);
  Object.freeze(cls);
  var ghost;
  DocumentCache.prototype.toJSON = function () {
    var a = print(this.g, j, void 0, void 0, false, false);
    var c = this.constructor.Ua;
    if (c) {
      var g = hasOwnProperty(this.g);
      var s = parseInt(g);
      g = (g >> 8 & 1) - 1;
      var r;
      var i;
      var k = 0;
      for (; k < c.length; k++) {
        if (i = c[k], i < s) {
          i = i + g;
          if (null == a[i]) {
            a[i] = cloneDeep();
          }
        } else {
          if (!r) {
            var v = void 0;
            if (a.length && isObject(v = a[a.length - 1])) {
              r = v;
            } else {
              a.push(r = {});
            }
          }
          if (null == r[i]) {
            r[i] = cloneDeep();
          }
        }
      }
    }
    if (c = a.length) {
      var type;
      if (isObject(s = a[c - 1])) {
        b: {
          var t = s;
          r = {};
          g = false;
          var j;
          for (j in t) {
            if (Object.prototype.hasOwnProperty.call(t, j)) {
              k = t[j];
              if (Array.isArray(k) && k != k) {
                g = true;
              }
              if (null != k) {
                r[j] = k;
              } else {
                g = true;
              }
            }
          }
          if (g) {
            var y;
            for (y in r) {
              t = r;
              break b;
            }
            t = null;
          }
        }
        if (t != s) {
          type = true;
        }
        c--;
      }
      for (; 0 < c; c--) {
        s = a[c - 1];
        if (null != s) {
          break;
        }
        var coreany = true;
      }
      if (type || coreany) {
        a = Array.prototype.slice.call(a, 0, c);
        if (t) {
          a.push(t);
        }
      }
    }
    return a;
  };
  DocumentCache.prototype.Qa = symbol;
  var crop = void 0;
  input.prototype.Z = true;
  input.prototype.g = function () {
    return this.h;
  };
  var undefined = {};
  var latex = {};
  var _ref = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  var nav_target;
  Type.prototype.toString = function () {
    return this.h + "";
  };
  Type.prototype.Z = true;
  Type.prototype.g = function () {
    return this.h.toString();
  };
  var inputHandler = {};
  Class.prototype.g = function () {
    return this.h;
  };
  Class.prototype.toString = function () {
    return this.h.toString();
  };
  ArrayBuffer.prototype.toString = function () {
    return this.h.toString();
  };
  ArrayBuffer.prototype.g = function () {
    return this.h;
  };
  var name = {};
  Promise.prototype.g = function () {
    return this.h.toString();
  };
  Promise.prototype.toString = function () {
    return this.h.toString();
  };
  var url = new Promise(context.trustedTypes && context.trustedTypes.emptyHTML || "", name);
  var Map = include(function () {
    var element = document.createElement("div");
    var bg = document.createElement("div");
    bg.appendChild(document.createElement("div"));
    element.appendChild(bg);
    bg = element.firstChild.firstChild;
    element.innerHTML = stringify(url);
    return !bg.parentElement;
  });
  result = Cartesian2.prototype;
  result.aspectRatio = function () {
    return this.width / this.height;
  };
  result.isEmpty = function () {
    return !(this.width * this.height);
  };
  result.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  result.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  result.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  popup.prototype.getElementsByTagName = function (tagName, context) {
    return (context || this.g).getElementsByTagName(String(tagName));
  };
  popup.prototype.createElement = function (type) {
    return attr(this.g, type);
  };
  popup.prototype.createTextNode = function (text) {
    return this.g.createTextNode(String(text));
  };
  popup.prototype.append = function (o, cmp) {
    publish(9 == o.nodeType ? o : o.ownerDocument || o.document, o, arguments);
  };
  var expExtSequences = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
  var _styles = {};
  var styles = (_styles["http://googleads.g.doubleclick.net"] = true, _styles["http://pagead2.googlesyndication.com"] = true, _styles["https://googleads.g.doubleclick.net"] = true, _styles["https://pagead2.googlesyndication.com"] = true, _styles);
  var matchLetter = /\.proxy\.(googleprod|googlers)\.com(:\d+)?$/;
  var LIST_REGEX = /.*domain\.test$/;
  var PITFALL_REGEX = /\.prod\.google\.com(:\d+)?$/;
  var emptyArray = [];
  var ctx = window;
  var jsonVal = {};
  var black = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
  var last = null;
  var perf = context.performance;
  var nativeObjectObject = !!(perf && perf.mark && perf.measure && perf.clearMarks);
  var defined = include(function () {
    var a;
    if (a = nativeObjectObject) {
      var desc;
      if (null === last) {
        last = "";
        try {
          a = "";
          try {
            a = context.top.location.hash;
          } catch (c) {
            a = context.location.hash;
          }
          if (a) {
            last = (desc = a.match(/\bdeid=([\d,]+)/)) ? desc[1] : "";
          }
        } catch (c) {
        }
      }
      desc = last;
      a = !!desc.indexOf && 0 <= desc.indexOf("1337");
    }
    return a;
  });
  Scene.prototype.start = function (value, type) {
    if (!this.g) {
      return null;
    }
    value = new Item(value, type);
    type = "goog_" + value.label + "_" + value.uniqueId + "_start";
    if (perf && defined()) {
      perf.mark(type);
    }
    return value;
  };
  Scene.prototype.end = function (item) {
    if (this.g && "number" === typeof item.value) {
      item.duration = (dispatch() || now()) - item.value;
      var name = "goog_" + item.label + "_" + item.uniqueId + "_end";
      if (perf && defined()) {
        perf.mark(name);
      }
      if (!(!this.g || 2048 < this.h.length)) {
        this.h.push(item);
      }
    }
  };
  Element.prototype.ka = function (obj, data, done, c, percent) {
    percent = percent || "jserror";
    try {
      var e = new ArrayInstance;
      e.g.push(1);
      e.h[1] = format("context", obj);
      if (!(data.error && data.meta && data.id)) {
        data = new Error(data, {
          message: decode(data)
        });
      }
      if (data.msg) {
        var height = data.msg.substring(0, 512);
        e.g.push(2);
        e.h[2] = format("msg", height);
      }
      var foo = data.meta || {};
      if (this.ea) {
        try {
          this.ea(foo);
        } catch (oa) {
        }
      }
      if (c) {
        try {
          c(foo);
        } catch (oa) {
        }
      }
      data = [foo];
      e.g.push(3);
      e.h[3] = data;
      c = context;
      data = [];
      height = null;
      do {
        var options = c;
        if (normalize(options)) {
          var i = options.location.href;
          height = options.document && options.document.referrer || null;
        } else {
          i = height;
          height = null;
        }
        data.push(new Tile(i || "", options));
        try {
          c = options.parent;
        } catch (oa) {
          c = null;
        }
      } while (c && options != c);
      i = 0;
      var index = data.length - 1;
      for (; i <= index; ++i) {
        data[i].depth = index - i;
      }
      options = context;
      if (options.location && options.location.ancestorOrigins && options.location.ancestorOrigins.length == data.length - 1) {
        index = 1;
        for (; index < data.length; ++index) {
          var p = data[index];
          if (!p.url) {
            p.url = options.location.ancestorOrigins[index - 1] || "";
            p.Ia = true;
          }
        }
      }
      var description = new Tile(context.location.href, context, false);
      options = null;
      var id = data.length - 1;
      p = id;
      for (; 0 <= p; --p) {
        var val = data[p];
        if (!options && black.test(val.url)) {
          options = val;
        }
        if (val.url && !val.Ia) {
          description = val;
          break;
        }
      }
      val = null;
      var x = data.length && data[id].url;
      if (0 != description.depth && x) {
        val = data[id];
      }
      var value = new SymbolValue(description, val);
      if (value.h) {
        var height = value.h.url || "";
        e.g.push(4);
        e.h[4] = format("top", height);
      }
      var ajaxCfg = {
        url: value.g.url || ""
      };
      if (value.g.url) {
        var map = value.g.url.match(expExtSequences);
        var line = map[1];
        var s = map[3];
        var events = map[4];
        description = "";
        if (line) {
          description = description + (line + ":");
        }
        if (s) {
          description = description + "//";
          description = description + s;
          if (events) {
            description = description + (":" + events);
          }
        }
        var text = description;
      } else {
        text = "";
      }
      ajaxCfg = [ajaxCfg, {
        url: text
      }];
      e.g.push(5);
      e.h[5] = ajaxCfg;
      func(this.i, percent, e, this.h, done);
    } catch (data) {
      try {
        func(this.i, percent, {
          context: "ecmserr",
          rctx: obj,
          msg: decode(data),
          url: value && value.g.url
        }, this.h, done);
      } catch (Fc) {
      }
    }
    return this.j;
  };
  extend(Grid, DocumentCache);
  Grid.prototype.L = function (value) {
    return wrap(this, 2, value, 0);
  };
  extend(Field, DocumentCache);
  var account = [4, 5, 6, 8, 9, 10, 11];
  v.prototype.C = false;
  v.prototype.U = function () {
    return this.C;
  };
  v.prototype.v = function () {
    if (!this.C) {
      this.C = true;
      this.A();
    }
  };
  v.prototype.A = function () {
    if (this.H) {
      for (; this.H.length;) {
        this.H.shift()();
      }
    }
  };
  w.prototype.Va = function () {
    var x = htmlWebPackPluginAssets.apply(0, arguments);
    var url = this;
    if (this.j && 65536 <= expect(this.g.concat(x)).length) {
      notify(this);
    }
    this.g.push.apply(this.g, toArray(x));
    if (this.g.length >= this.i) {
      notify(this);
    }
    if (this.g.length && null === this.h) {
      this.h = setTimeout(function () {
        notify(url);
      }, this.C);
    }
  };
  extend(constructor, w);
  k.prototype.g = function () {
    return [];
  };
  var el;
  var ret;
  var params = new Scene(window);
  (function (max) {
    el = null != max ? max : new WeakMap;
    if ("number" !== typeof window.google_srt) {
      window.google_srt = Math.random();
    }
    setSelection(el, window.google_srt);
    ret = new Element(el, true, params);
    each(ret, function () {
    });
    ret.h = true;
    if ("complete" == window.document.readyState) {
      if (!window.google_measure_js_timing) {
        set(params);
      }
    } else {
      if (params.g) {
        on(window, "load", function () {
          if (!window.google_measure_js_timing) {
            set(params);
          }
        });
      }
    }
  })();
  var div;
  var node;
  var group = new Scene(context);
  (function (_attachmentsMap, data) {
    data = void 0 === data ? true : data;
    div = _attachmentsMap || new WeakMap;
    if ("number" !== typeof context.google_srt) {
      context.google_srt = Math.random();
    }
    setSelection(div, context.google_srt);
    node = new Element(div, data, group);
    node.h = true;
    if ("complete" == context.document.readyState) {
      if (!context.google_measure_js_timing) {
        set(group);
      }
    } else {
      if (group.g) {
        on(context, "load", function () {
          if (!context.google_measure_js_timing) {
            set(group);
          }
        });
      }
    }
  })();
  var index = null;
  var _class = {};
  var BaseTarget = (_class[8] = "google_prev_ad_formats_by_region", _class[9] = "google_prev_ad_slotnames_by_region", _class);
  var obj = new foo(1130, 100);
  var alias = new ComponentProperty(1252, true);
  var defaultRegionSelectedValue = new ComponentProperty(1233);
  var z = new foo(1085, 5);
  var obj2 = new foo(63, 30);
  var obj1 = new foo(1080, 5);
  var x = new foo(1027, 10);
  var y = new foo(57, 120);
  var password_verify = new ComponentProperty(1134);
  var c = new foo(1050, 30);
  var instance = new foo(58, 120);
  var token = new ComponentProperty(10007, true);
  var isdom = new ComponentProperty(10005, true);
  var password = new ComponentProperty(1200);
  var ARByte = new ComponentProperty(1033, true);
  var creative_size = new ComponentProperty(1185);
  extend(Particle, v);
  Particle.prototype.ya = function () {
    var mockPort = this.ua;
    var data = {
      eventType: "backButton"
    };
    close(data);
    mockPort.postMessage(JSON.stringify(data), "*");
  };
  Particle.prototype.init = function () {
    var o = this;
    var repl = then(this.pubWin, this.ua, function (evt) {
      if ("adError" === evt.eventType) {
        o.h.resolve();
        o.state = 0;
      } else {
        if ("adReady" === evt.eventType && 1 === o.state) {
          if (evt.slotType !== o.slotType) {
            respond(o, {
              cur_st: o.state,
              evt: evt.eventType,
              adp_tp: evt.slotType
            });
            o.state = 0;
          }
          o.i.resolve();
          o.state = 2;
        } else {
          if ("adClosed" === evt.eventType && 2 === o.state) {
            o.g.resolve(evt.result);
            o.state = 3;
          } else {
            if ("adClosed" !== evt.eventType || 3 !== o.state) {
              respond(o, {
                cur_st: o.state,
                evt: evt.eventType
              });
              o.state = 0;
            }
          }
        }
      }
    }, this.j);
    ready(this, repl);
  };
  var aux = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
  var player = {};
  var inmap = -1 != (context.navigator ? context.navigator.userAgent : "").indexOf("Android");
  Event.prototype.stopPropagation = function () {
    this.h = true;
  };
  Event.prototype.preventDefault = function () {
    this.defaultPrevented = true;
  };
  extend(Response, Event);
  var $e = function () {
    if (!context.addEventListener || !Object.defineProperty) {
      return false;
    }
    var a = false;
    var options = Object.defineProperty({}, "passive", {
      get: function () {
        a = true;
      }
    });
    try {
      var c = function () {
      };
      context.addEventListener("test", c, options);
      context.removeEventListener("test", c, options);
    } catch (d) {
    }
    return a;
  }();
  override(l, Event);
  var MODIFIER_KEYS = {
    2: "touch",
    3: "pen",
    4: "mouse"
  };
  l.prototype.init = function (event, target) {
    var type = this.type = event.type;
    var relevantTouch = event.changedTouches && event.changedTouches.length ? event.changedTouches[0] : null;
    this.target = event.target || event.srcElement;
    this.currentTarget = target;
    if (target = event.relatedTarget) {
      if (isFirefox) {
        if (!equal(target, "nodeName")) {
          target = null;
        }
      }
    } else {
      if ("mouseover" == type) {
        target = event.fromElement;
      } else {
        if ("mouseout" == type) {
          target = event.toElement;
        }
      }
    }
    this.relatedTarget = target;
    if (relevantTouch) {
      this.clientX = void 0 !== relevantTouch.clientX ? relevantTouch.clientX : relevantTouch.pageX;
      this.clientY = void 0 !== relevantTouch.clientY ? relevantTouch.clientY : relevantTouch.pageY;
      this.screenX = relevantTouch.screenX || 0;
      this.screenY = relevantTouch.screenY || 0;
    } else {
      this.clientX = void 0 !== event.clientX ? event.clientX : event.pageX;
      this.clientY = void 0 !== event.clientY ? event.clientY : event.pageY;
      this.screenX = event.screenX || 0;
      this.screenY = event.screenY || 0;
    }
    this.button = event.button;
    this.key = event.key || "";
    this.ctrlKey = event.ctrlKey;
    this.altKey = event.altKey;
    this.shiftKey = event.shiftKey;
    this.metaKey = event.metaKey;
    this.pointerId = event.pointerId || 0;
    this.pointerType = "string" === typeof event.pointerType ? event.pointerType : MODIFIER_KEYS[event.pointerType] || "";
    this.state = event.state;
    this.g = event;
    if (event.defaultPrevented) {
      l.O.preventDefault.call(this);
    }
  };
  l.prototype.stopPropagation = function () {
    l.O.stopPropagation.call(this);
    if (this.g.stopPropagation) {
      this.g.stopPropagation();
    } else {
      this.g.cancelBubble = true;
    }
  };
  l.prototype.preventDefault = function () {
    l.O.preventDefault.call(this);
    var e = this.g;
    if (e.preventDefault) {
      e.preventDefault();
    } else {
      e.returnValue = false;
    }
  };
  var key = "closure_listenable_" + (1E6 * Math.random() | 0);
  var nextKey = 0;
  Node.prototype.add = function (value, data, depth, key, i) {
    var type = value.toString();
    value = this.g[type];
    if (!value) {
      value = this.g[type] = [];
      this.h++;
    }
    var path = transform(value, data, key, i);
    if (-1 < path) {
      data = value[path];
      if (!depth) {
        data.fa = false;
      }
    } else {
      data = new Sprite(data, this.src, type, !!key, i);
      data.fa = depth;
      value.push(data);
    }
    return data;
  };
  var i = "closure_lm_" + (1E6 * Math.random() | 0);
  var o = {};
  var nf = 0;
  var reducerMountPoint = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
  override(options, v);
  var abortActionType = [];
  options.prototype.listen = function (source, type, opt_fn, opt_X) {
    if (!Array.isArray(type)) {
      if (type) {
        abortActionType[0] = type.toString();
      }
      type = abortActionType;
    }
    var i = 0;
    for (; i < type.length; i++) {
      var index = has(source, type[i], opt_fn || this.handleEvent, opt_X || false, this.h || this);
      if (!index) {
        break;
      }
      this.g[index.key] = index;
    }
    return this;
  };
  options.prototype.A = function () {
    options.O.A.call(this);
    tick(this);
  };
  options.prototype.handleEvent = function () {
    throw Error("EventHandler.handleEvent not implemented");
  };
  override(item, v);
  item.prototype[key] = true;
  item.prototype.addEventListener = function (type, id, options, callback) {
    has(this, type, id, options, callback);
  };
  item.prototype.removeEventListener = function (name, fn, type, callback) {
    validate(this, name, fn, type, callback);
  };
  item.prototype.A = function () {
    item.O.A.call(this);
    if (this.g) {
      var c = this.g;
      var b = 0;
      var i;
      for (i in c.g) {
        var value = c.g[i];
        var j = 0;
        for (; j < value.length; j++) {
          ++b;
          text(value[j]);
        }
        delete c.g[i];
        c.h--;
      }
    }
    this.j = null;
  };
  item.prototype.listen = function (type, id, opts, options) {
    return this.g.add(String(type), id, false, opts, options);
  };
  override(exports, item);
  result = exports.prototype;
  result.Y = false;
  result.I = null;
  result.Ya = function () {
    if (this.Y) {
      var diff = Date.now() - this.m;
      if (0 < diff && diff < .8 * this.i) {
        this.I = this.h.setTimeout(this.l, this.i - diff);
      } else {
        if (this.I) {
          this.h.clearTimeout(this.I);
          this.I = null;
        }
        end(this, "tick");
        if (this.Y) {
          this.stop();
          this.start();
        }
      }
    }
  };
  result.start = function () {
    this.Y = true;
    if (!this.I) {
      this.I = this.h.setTimeout(this.l, this.i);
      this.m = Date.now();
    }
  };
  result.stop = function () {
    this.Y = false;
    if (this.I) {
      this.h.clearTimeout(this.I);
      this.I = null;
    }
  };
  result.A = function () {
    exports.O.A.call(this);
    this.stop();
    delete this.h;
  };
  var proto = null;
  extend(aCommands, v);
  extend(scope, aCommands);
  scope.prototype.sendMessage = function (object) {
    this.j.push(object);
    if (!this.i.Y) {
      object = this.j.shift();
      this.l(object);
      this.i.start();
    }
  };
  scope.prototype.D = function () {
    var a = this.j.shift();
    if (a) {
      this.l(a);
    } else {
      this.i.stop();
    }
  };
  extend(Plugin, scope);
  Plugin.prototype.A = function () {
    this.g.forEach(path);
    this.g = [];
    scope.prototype.A.call(this);
  };
  extend(module, aCommands);
  module.prototype.sendMessage = function (data) {
    data = getObject(data);
    if (window.googleAdsJsInterface && window.googleAdsJsInterface.notify) {
      window.googleAdsJsInterface.notify(data);
      if (window.googleAdsJsInterface.DEBUG) {
        console.log(data);
      }
    }
  };
  extend(Client, aCommands);
  Client.prototype.sendMessage = function (data) {
    data = getObject(data);
    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.gadGMSGHandler) {
      window.webkit.messageHandlers.gadGMSGHandler.postMessage(data);
    }
  };
  addLine.prototype.m = function (str) {
    if (this.i) {
      assign(this, {
        name: "arwebview_message_forwarded",
        message: str
      });
    }
  };
  extend(Store, item);
  result = Store.prototype;
  result.sendMessage = function (data, format) {
    var instance = this;
    var user;
    if ("string" === typeof data) {
      user = new Buffer(data, format);
    } else {
      if (data instanceof Buffer) {
        user = data;
      }
    }
    if ("loading" == document.readyState) {
      send(context, "DOMContentLoaded", function () {
        return instance.i.sendMessage(user);
      }, false, this);
    } else {
      this.i.sendMessage(user);
    }
  };
  result.receiveMessage = function (message, type) {
    if (this.shouldForwardMessageToIframe()) {
      this.forwardMessage(new Buffer("receive_message_action", new Buffer(message, type)));
    } else {
      var fbMainFrame = document.getElementById("ad_iframe");
      if (void 0 != fbMainFrame && void 0 != fbMainFrame.contentWindow && void 0 != fbMainFrame.contentWindow.AFMA_ReceiveMessage) {
        fbMainFrame.contentWindow.AFMA_ReceiveMessage(message, type);
      }
    }
    if ("onshow" == message && "loading" == document.readyState) {
      send(context, "DOMContentLoaded", function () {
        return listener(message, null != type ? type : void 0);
      });
    } else {
      end(this, new Response(new Buffer(message, type), this));
    }
  };
  result.addObserver = function (key, event, callback) {
    function handler(match) {
      return void callback.call(event, match.type, match.params);
    }
    this.listen(key, handler);
    if (!this.h[key]) {
      this.h[key] = {};
    }
    this.h[key][event] = handler;
  };
  result.removeObserver = function (name, type) {
    if (this.h[name] && this.h[name][type]) {
      add(this.g, String(name), this.h[name][type]);
      delete this.h[name][type];
    }
  };
  result.shouldForwardMessageToIframe = function () {
    return this.l.l;
  };
  result.forwardMessage = function (message) {
    assign(this.l, message);
  };
  if (!context.AFMA_Communicator) {
    addListener("AFMA_AddEventListener", t);
    addListener("AFMA_RemoveEventListener", closeHandler);
    addListener("AFMA_AddObserver", focus);
    addListener("AFMA_RemoveObserver", unload);
    addListener("AFMA_ReceiveMessage", listener);
    addListener("AFMA_SendMessage", log);
    context.AFMA_Communicator = new Store;
  }
  r.prototype.sa = function (n, selector) {
    log("h5ads", {
      obj_id: n,
      action: "create_interstitial_ad",
      ad_unit: selector
    });
  };
  r.prototype.ta = function (a, b) {
    log("h5ads", {
      obj_id: a,
      ad_unit: b,
      action: "create_rewarded_ad"
    });
  };
  r.prototype.v = function (value) {
    log("h5ads", {
      obj_id: value,
      action: "dispose"
    });
  };
  extend(Entity, v);
  Entity.prototype.load = function (data, callback) {
    if (!v.prototype.U.call(this)) {
      this.listener = callback;
      data = escape(data);
      log("h5ads", {
        obj_id: this.id,
        action: "load_interstitial_ad",
        ad_request: data
      });
    }
  };
  Entity.prototype.show = function () {
    if (!v.prototype.U.call(this)) {
      if (null == this.listener) {
        throw Error("load must be called before show");
      }
      log("h5ads", {
        obj_id: this.id,
        action: "show_interstitial_ad"
      });
    }
  };
  Entity.prototype.A = function () {
    this.g.l.v(this.id);
    v.prototype.A.call(this);
  };
  extend(s, v);
  s.prototype.load = function (data, callback) {
    if (!v.prototype.U.call(this)) {
      this.listener = callback;
      data = escape(data);
      log("h5ads", {
        obj_id: this.id,
        action: "load_rewarded_ad",
        ad_request: data
      });
    }
  };
  s.prototype.show = function () {
    if (!v.prototype.U.call(this)) {
      if (null == this.listener) {
        throw Error("load must be called before show");
      }
      log("h5ads", {
        obj_id: this.id,
        action: "show_rewarded_ad"
      });
    }
  };
  s.prototype.A = function () {
    this.g.l.v(this.id);
    v.prototype.A.call(this);
  };
  draw.prototype.connect = function () {
    var node = this;
    switch (this.h) {
      case 3:
        return global.Promise.resolve(this);
      case 1:
        return this.i.promise;
      default:
        return this.h = 1, this.i = new DateInstance, log("h5ads", {
          action: "initialize"
        }), setTimeout(function () {
          if (3 !== node.h) {
            node.h = 2;
            node.i.reject(Error("GmaBridge could not connect to SDK after 10000 ms."));
          }
        }, 1E4), this.i.promise;
    }
  };
  draw.prototype.sa = function (selector) {
    if (3 !== this.h) {
      return global.Promise.reject(Error("GmaBridge is not connected"));
    }
    var r = getLiteralString(this);
    var d = new DateInstance;
    this.g.set(r, {
      N: d,
      ad: new Entity(r, this)
    });
    this.l.sa(r, selector);
    return d.promise;
  };
  draw.prototype.ta = function (e) {
    if (3 !== this.h) {
      return global.Promise.reject(Error("GmaBridge is not connected"));
    }
    var a = getLiteralString(this);
    var d = new DateInstance;
    this.g.set(a, {
      N: d,
      ad: new s(a, this)
    });
    this.l.ta(a, e);
    return d.promise;
  };
  var reverEnv = null;
  var music_hot = {};
  var movie_classic = {};
  right.prototype.Ga = null;
  right.prototype.getContent = function () {
    return this.content;
  };
  right.prototype.toString = function () {
    return this.content;
  };
  right.prototype.za = function () {
    if (this.ha !== music_hot) {
      throw Error("Sanitized content was not of kind HTML.");
    }
    return handler(this.toString());
  };
  override(base, right);
  base.prototype.ha = music_hot;
  var ajax = function (ctor) {
    function InstantiableCtor(content) {
      this.content = content;
    }
    InstantiableCtor.prototype = ctor.prototype;
    return function (content, xhr) {
      content = new InstantiableCtor(String(content));
      if (void 0 !== xhr) {
        content.Ga = xhr;
      }
      return content;
    };
  }(base);
  var entities = {
    "\x00": "&#0;",
    "\t": "&#9;",
    "\n": "&#10;",
    "\x0B": "&#11;",
    "\f": "&#12;",
    "\r": "&#13;",
    " ": "&#32;",
    '"': "&quot;",
    "&": "&amp;",
    "'": "&#39;",
    "-": "&#45;",
    "/": "&#47;",
    "<": "&lt;",
    "=": "&#61;",
    ">": "&gt;",
    "`": "&#96;",
    "\u0085": "&#133;",
    "\u00a0": "&#160;",
    "\u2028": "&#8232;",
    "\u2029": "&#8233;"
  };
  var qreg = /[\x00\x22\x26\x27\x3c\x3e]/g;
  var identifier = /[\x00\x22\x27\x3c\x3e]/g;
  var extraordinarilyBad = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:calc|cubic-bezier|hsl|hsla|hue-rotate|invert|linear-gradient|max|min|rgb|rgba|rotate|rotateZ|translate|translate3d|translateX|translateY)\((?:[-\u0020\t,+.!#%_0-9a-zA-Z]|(?:calc|cubic-bezier|hsl|hsla|hue-rotate|invert|linear-gradient|max|min|rgb|rgba|rotate|rotateZ|translate|translate3d|translateX|translateY)\([-\u0020\t,+.!#%_0-9a-zA-Z]+\))+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|!important)(?:\s*[,\u0020]\s*|$))*$/i;
  var hookRE = /^[a-zA-Z0-9+\/_-]+={0,2}$/;
  var savedRegExp = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g;
  var regNewline = /</g;
  extend(Path, DocumentCache);
  Path.Ua = [19];
  var target = void 0;
  Model.prototype.addListener = function (listener) {
    this.g.maxZIndexListeners.push(listener);
    listener(isSet(this));
  };
  EventDispatcher.prototype.apply = function (config, o) {
    this.i = config.body.style.overflow;
    this.j = config.body.style.position;
    this.l = config.body.style.top;
    this.g = config.body.style.filter ? config.body.style.filter : config.body.style.webkitFilter;
    this.h = void 0 === o.pageYOffset ? (o.document.documentElement || o.document.body.parentNode || o.document.body).scrollTop : o.pageYOffset;
    css(config.body, "top", -this.h + "px");
  };
  extend(message, v);
  message.prototype.B = function (value) {
    return this.l === value;
  };
  extend(factory, message);
  var style = {
    backgroundColor: "white",
    opacity: "1",
    position: "fixed",
    left: "0px",
    top: "0px",
    margin: "0px",
    padding: "0px",
    display: "none",
    zIndex: "2147483647"
  };
  var bar = {
    width: "100vw",
    height: "100vh"
  };
  var left = {
    left: "0",
    position: "absolute",
    top: "0"
  };
  extend(FunctionInstance, factory);
  FunctionInstance.prototype.B = function (value) {
    if (value.classList) {
      value = value.classList.contains("adsbygoogle");
    } else {
      value = value.classList ? value.classList : ("string" == typeof value.className ? value.className : value.getAttribute && value.getAttribute("class") || "").match(/\S+/g) || [];
      value = 0 <= h(value, "adsbygoogle");
    }
    return value;
  };
  root.Object.defineProperties(register.prototype, {
    h: {
      configurable: true,
      enumerable: true,
      get: function () {
        return this.state.ssp;
      }
    }
  });
  if (!isIEMobile) {
    getBrowserInfo();
  }
  var Style = typecastAttribute(["https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]);
  var src = "undefined" === typeof argSpeed ? void 0 : argSpeed;
  extend(e, v);
  e.prototype.A = function () {
    this.ia();
    v.prototype.A.call(this);
  };
  extend(Collection, v);
  extend(Box, v);
  Box.prototype.fetch = function (key) {
    var needle_color = this;
    var query = new Collection(key.callback);
    this.g.add(query);
    key = define(Object, "assign").call(Object, {}, key, {
      callback: function (obj) {
        if (query.C) {
          if (obj) {
            obj.v();
          }
        } else {
          query.callback(obj);
        }
        needle_color.g.delete(query);
      }
    });
    this.h.fetch(key);
  };
  Box.prototype.A = function () {
    var deletedChar = setTimeout(define(this.g, "values").call(this.g));
    var request = deletedChar.next();
    for (; !request.done; request = deletedChar.next()) {
      request.value.v();
    }
    this.g.clear();
    v.prototype.A.call(this);
  };
  Module.prototype.la = function (a) {
    this.i = a;
  };
  Module.prototype.ba = function (data) {
    this.g = data.Ha;
    this.h = data.Ja;
  };
  Module.prototype.L = function (b) {
    this.j = b;
  };
  Module.prototype.s = function (event, data) {
    data = void 0 === data ? {} : data;
    data.event = event;
    data.client = this.i;
    data.bow_v = this.l;
    data.js_v = this.m;
    var default_favicon;
    var dur;
    data.fetcher = null != (dur = null == (default_favicon = this.j) ? void 0 : default_favicon.toString()) ? dur : "unset";
    if (this.g) {
      data.admb_iid = this.g;
    }
    if (this.h) {
      data.admb_rid = this.h;
    }
    _create("slotcar", data, 1);
  };
  extend(a, e);
  result = a.prototype;
  result.show = function (c) {
    this.g = c;
    if (this.D && this.m) {
      this.ad.show();
    } else {
      if (this.m) {
        this.J();
      } else {
        throw Error("Tried to show AdMobAd before it finished loading.");
      }
    }
  };
  result.ia = function () {
    this.ad.v();
  };
  result.W = function () {
    this.m = true;
    this.j(this);
  };
  result.V = function () {
    this.j(null);
    this.v();
  };
  result.X = function () {
    this.h.s("admb_na");
    if (this.g) {
      this.J();
    } else {
      this.D = false;
    }
  };
  extend(Vector, a);
  Vector.prototype.l = function () {
    this.ad.load(this.i, b(this));
  };
  Vector.prototype.J = function () {
    (0, this.g)(1);
  };
  extend(m, a);
  m.prototype.l = function () {
    this.ad.load(this.i, load(this));
  };
  m.prototype.J = function () {
    if (this.B) {
      (0, this.g)(3);
    } else {
      (0, this.g)(2);
    }
  };
  fill.prototype.fetch = function (o) {
    var needle_color = this;
    var config = {
      isTestDevice: false,
      httpTimeoutMillis: 1E3 * get(obj2)
    };
    var key = this.G.google_tag_for_child_directed_treatment;
    if ("0" === key || "1" === key) {
      config.tagForChildDirectedTreatment = "1" === key;
    }
    key = this.G.google_tag_for_under_age_of_consent;
    if ("0" === key || "1" === key) {
      config.tagForUnderAgeOfConsent = "1" === key;
    }
    key = this.G.google_max_ad_content_rating;
    if ("string" === typeof key) {
      config.maxAdContentRating = key;
    }
    if (this.i) {
      if (!(null != config.extras)) {
        config.extras = {};
      }
      config.extras.pvsid = this.i;
    }
    key = StringInstance(token) ? join(k).g() : o.La;
    if (null == key ? 0 : key.length) {
      if (!(null != config.extras)) {
        config.extras = {};
      }
      config.extras.slotcar_eids = key.join(",");
    }
    if (StringInstance(ARByte)) {
      if (!(null != config.extras)) {
        config.extras = {};
      }
      config.extras.muted = o.wa || 2 === o.type ? "0" : "1";
    }
    key = command(this, o.type);
    if (1 === o.type) {
      if ("string" !== typeof key) {
        open(this, "data-admob-interstitial-slot", o.callback);
      } else {
        this.h.sa(key).then(function (result) {
          (new Vector(result, config, o.callback, needle_color.g)).l();
        }).catch(function () {
          parseManuscript(o.callback);
        });
      }
    } else {
      if ("string" !== typeof key) {
        open(this, "data-admob-rewarded-slot", o.callback);
      } else {
        this.h.ta(key).then(function (a) {
          (new m(a, config, o.callback, needle_color.g)).l();
        }).catch(function () {
          parseManuscript(o.callback);
        });
      }
    }
  };
  extend(config, v);
  config.prototype.A = function () {
    var c = setTimeout(this.i);
    var next = c.next();
    for (; !next.done; next = c.next()) {
      next = next.value;
      next();
    }
    this.i.length = 0;
    v.prototype.A.call(this);
  };
  extend(Color, config);
  Color.prototype.ya = function () {
    var msg = {};
    msg = (msg.msg_type = "r-back-button", msg);
    var h;
    (null == (h = this.h) ? void 0 : h.contentWindow).postMessage(JSON.stringify(msg), "*");
  };
  extend(p, e);
  p.prototype.show = function (result) {
    this.g = result;
    callback(this.l, true);
    if (null != (result = this.i)) {
      var msg = {};
      msg = (msg.msg_type = "i-view", msg);
      var t;
      (null == (t = result.h) ? void 0 : t.contentWindow).postMessage(JSON.stringify(msg), "*");
    }
    if (!(null == (t = this.j) || context.IntersectionObserver)) {
      t = t.ua;
      result = {
        eventType: "visible"
      };
      close(result);
      t.postMessage(JSON.stringify(result), "*");
    }
    init(this);
  };
  p.prototype.ia = function () {
    push(this, 4);
    path(this.m);
  };
  Matrix.prototype.fetch = function (data) {
    var bng1 = this;
    var c = this.o.document.createElement("ins");
    c.classList.add("adsbygoogle");
    $(c, {
      display: "none"
    });
    this.o.document.documentElement.appendChild(c);
    var e = create(this, data.type, data.wa, function (d) {
      new p(bng1.o, c, d, data.callback, data.type);
    });
    done(c, e, this.o);
  };
  var eleresult = {};
  if (isIEMobile) {
    getImmediateParents(new input(latex, 'javascript:""'));
  } else {
    getImmediateParents(new input(latex, "about:blank"));
  }
  if (isIEMobile) {
    getImmediateParents(new input(latex, 'javascript:""'));
  } else {
    getImmediateParents(new input(latex, "javascript:undefined"));
  }
  extend(initialize, e);
  initialize.prototype.show = function (fn) {
    var self = this;
    if (null == this.g) {
      throw Error("Tried to show ad before initialized.");
    }
    var sidebarDoc = this.g.g.contentDocument;
    var w = sidebarDoc.getElementById("dismiss-button");
    callback(this.g, true);
    if (2 === this.h) {
      var helpHAct = w.querySelector("#dismiss-button-element");
      helpHAct.style.display = "none";
      var init = function () {
        return promise(function (l) {
          if (1 == l.g) {
            if (null == self.g) {
              throw Error("Failure on rewarded example: Could not find ad frame.");
            }
            self.l = true;
            return cb(l, render(self), 2);
          }
          if (l.i) {
            callback(self.g, false);
            on(w, "click", init);
            fn(2);
          } else {
            self.l = false;
          }
          l.g = 0;
        });
      };
      on(w, "click", init);
      this.i = get(x);
      var g = 0 > this.i;
      this.l = false;
      var speedDial = sidebarDoc.getElementById("count-down-container");
      var storageMeter = speedDial.querySelector("#count-down-text");
      storageMeter.innerText = "Reward in " + this.i + " seconds";
      if (!g) {
        this.B = setInterval(function () {
          if (!self.l) {
            --self.i;
            storageMeter.innerText = "Reward in " + self.i + " seconds";
          }
          if (0 === self.i) {
            speedDial.style.display = "none";
            helpHAct.style.display = "";
            clearInterval(self.B);
            var render = function () {
              return promise(function (domFixtures) {
                if (null == self.g) {
                  throw Error("Failure on rewarded example: Could not find ad frame.");
                }
                callback(self.g, false);
                removeEventListener(w, "click", render);
                fn(3);
                domFixtures.g = 0;
              });
            };
            on(w, "click", render);
            removeEventListener(w, "click", init);
          }
        }, 1E3);
      }
    } else {
      on(w, "click", function () {
        if (null == self.g) {
          throw Error("Failure on rewarded example: Could not find ad frame.");
        }
        callback(self.g, false);
        fn(1);
      });
    }
  };
  initialize.prototype.ia = function () {
    var div;
    if (null != (div = this.g)) {
      callback(div, false);
    }
    path(this.j);
  };
  InfoCommandHandler.prototype.fetch = function (scope) {
    new initialize(scope.callback, scope.type);
  };
  extend(Form, e);
  Form.prototype.show = function (done) {
    this.callback = done;
    switch (this.h) {
      case 1:
        onPlayerReady(this, 1, 1);
        break;
      case 2:
        onPlayerReady(this, 3, 2);
    }
    try {
      $(this.i, {
        display: "block",
        "z-index": "1000000"
      });
      this.g.start();
    } catch (b) {
      this.g.discardAdBreak();
      playVideo(this, 2 === this.h ? 2 : 1);
    }
  };
  Form.prototype.ia = function () {
    this.j.destroy();
    this.g.destroy();
    this.i.remove();
  };
  var value = typecastAttribute(["https://imasdk.googleapis.com/js/sdkloader/ima3.js"]);
  googleChartsLoader.prototype.fetch = function (data) {
    var query = this;
    var context;
    var result;
    var adsLoader;
    var adsRequest;
    var size;
    return promise(function (h) {
      if (1 == h.g) {
        return cb(h, query.Wa, 2);
      }
      context = createFrame(query);
      result = _windowHasScrollbar(query, context);
      adsLoader = new query.ima.AdsLoader(result);
      adsLoader.addEventListener(query.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, function (callback) {
        bindEvents(query, callback, context, result, adsLoader, data);
      });
      adsLoader.addEventListener(query.ima.AdErrorEvent.Type.AD_ERROR, function () {
        data.callback(null);
      });
      adsRequest = new query.ima.AdsRequest;
      adsRequest.adTagUrl = redirect(query);
      adsRequest.setAdWillAutoPlay(false);
      adsRequest.setAdWillPlayMuted(!(2 === data.type || data.wa));
      adsRequest.forceNonLinearFullSlot = true;
      size = getViewport(query.o);
      adsRequest.linearAdSlotWidth = size.width;
      adsRequest.linearAdSlotHeight = size.height;
      adsRequest.nonLinearAdSlotWidth = size.width;
      adsRequest.nonLinearAdSlotHeight = size.height;
      adsLoader.requestAds(adsRequest);
      h.g = 0;
    });
  };
  ui.prototype.la = function () {
  };
  ui.prototype.ba = function (data) {
    this.g = data.Ha;
    this.h = data.Ja;
  };
  ui.prototype.L = function (a) {
    var i;
    this.i = null != (i = this.m.get(a)) ? i : 0;
  };
  ui.prototype.s = function (value) {
    var data;
    var x = new Grid;
    value = null != (data = this.l.get(value)) ? data : 0;
    data = wrap(x, 1, value, 0).L(this.i);
    if (this.g) {
      wrap(data, 3, setOption(this.g), "");
    }
    if (this.h) {
      wrap(data, 4, setOption(this.h), "");
    }
    html(this.j, data);
  };
  val.prototype.la = function (a) {
    this.g.la(a);
  };
  val.prototype.ba = function (fn) {
    this.h.ba(fn);
    this.g.ba(fn);
  };
  val.prototype.L = function (x) {
    this.h.L(x);
    this.g.L(x);
  };
  val.prototype.s = function (x, index) {
    index = void 0 === index ? {} : index;
    this.h.s(x, index);
    this.g.s(x, index);
  };
  var doEnd = "click mousedown mouseup touchstart touchend pointerdown pointerup keydown keyup scroll".split(" ");
  extend(enter, v);
  var dependants = new global.Set(["auto", "on"]);
  var args = new global.Set(["on", "off"]);
  var redirects = new global.Set("start pause next browse reward preroll".split(" "));
  var resultMapA = new global.Map([["start", "interstitial"], ["pause", "interstitial"], ["next", "interstitial"], ["browse", "interstitial"], ["reward", "reward"], ["preroll", "preroll"]]);
  var implModule = new global.Map([["interstitial", ["type"]], ["reward", ["type", "beforeReward", "adDismissed", "adViewed"]], ["preroll", ["type", "adBreakDone"]]]);
  var codegenUtils = new global.Map([["interstitial", ["beforeReward", "adDismissed", "adViewed"]], ["reward", []], ["preroll", ["beforeAd", "afterAd", "beforeReward", "adDismissed", "adViewed"]]]);
  var innerTimer = "beforeAd afterAd beforeReward adDismissed adViewed adBreakDone".split(" ");
  var setTrailViewOffset = new global.Map([["beforeBreak", "beforeAd"], ["afterBreak", "afterAd"], ["adComplete", "adViewed"]]);
  extend(Connection, v);
  Connection.prototype.resolve = function (object) {
    if (!this.C) {
      this.g = true;
      this.N.resolve(object);
    }
  };
  Connection.prototype.reject = function (reason) {
    if (!this.C) {
      this.g = true;
      this.N.reject(reason);
    }
  };
  Connection.prototype.A = function () {
    clearTimeout(this.timeout);
  };
  root.Object.defineProperties(Connection.prototype, {
    promise: {
      configurable: true,
      enumerable: true,
      get: function () {
        return this.N.promise;
      }
    }
  });
  extend(run, v);
  result = run.prototype;
  result.init = function (value) {
    var data = this;
    this.D = String(value.google_ad_client);
    if (null != this.i) {
      this.g.s("dbl_init", {
        ad_client: this.D
      });
    } else {
      var a = merge();
      a.in_game_session_length = 0;
      a.number_of_interstitial_ad_breaks = 0;
      a.number_of_interstitial_ads_shown = 0;
      a.ad_frequency_hint = value.google_ad_frequency_hint ? String(value.google_ad_frequency_hint) : "";
      search(this, a);
      a = navigator.userAgent;
      var r = RegExp("\\bwv\\b");
      this.ca = define(a, "includes").call(a, "Android") && r.test(a);
      if ("on" === value.google_adbreak_test) {
        this.R = true;
      }
      restore(this, value);
      this.g.la(this.D);
      this.i = new Box(concat(value, this.j));
      this.g.L(grayscale(this));
      if (read(value)) {
        this.g.ba({
          Ha: normalizeValue("google_admob_interstitial_slot", value),
          Ja: normalizeValue("google_admob_rewarded_slot", value)
        });
        var start = Date.now();
        a = (img = getFieldFromFilter(value, this.j, this.g).then(function (options) {
          if (null != data.i) {
            data.i.v();
          }
          data.i = new Box(options);
          data.B = true;
          data.g.L(grayscale(data));
          generate(data);
        }).catch(function (error_func) {
          data.g.s("admb_fetfail", {
            error: error_func
          });
        }), define(img, "finally")).call(img, function () {
          data.g.s("admb_tm", {
            timing: Date.now() - start
          });
        });
        if (this.ca) {
          this.P = global.Promise.race([a, repeat(1E3 * get(z))]);
          define(this.P, "finally").call(this.P, function () {
            data.Fa = true;
            request(data);
          });
        }
      } else {
        if (StringInstance(password)) {
          this.i.v();
          this.i = new Box(new googleChartsLoader(value));
          this.g.L("ima");
          generate(this);
        }
      }
      this.ma = clone(this, value);
      this.da = window.innerWidth;
      this.ra = window.innerHeight;
      var f = timeoutSaver(throttle(791, function () {
        if (data.da !== window.innerWidth || data.ra !== window.innerHeight) {
          if (!data.B || data.da !== window.innerWidth) {
            var deletedChar = setTimeout(define(data.h, "keys").call(data.h));
            var info = deletedChar.next();
            for (; !info.done; info = deletedChar.next()) {
              update(data, info.value, 4, false);
            }
            data.h.clear();
            data.da = window.innerWidth;
            data.ra = window.innerHeight;
          }
        }
      }));
      window.addEventListener("resize", f);
      ready(this, function () {
        window.removeEventListener("resize", f);
      });
      this.Da = Date.now();
    }
  };
  result.handleAdConfig = function (options) {
    var item = this;
    if (execute(options, this.j)) {
      this.g.s("adcf_cl", {
        preloadAdBreaks: options.preloadAdBreaks || "",
        sound: options.sound || "",
        onReady: options.onReady ? "true" : "false"
      });
      if (options.sound && this.m.sound !== options.sound) {
        this.m.sound = options.sound;
        verify(this, function () {
          update(item, 1, 6);
        });
      }
      if (options.preloadAdBreaks && !this.m.preloadAdBreaks) {
        verify(this, function () {
          item.m.preloadAdBreaks = options.preloadAdBreaks;
          if ("on" === item.m.preloadAdBreaks) {
            var deletedChar = setTimeout([1, 2]);
            var value = deletedChar.next();
            for (; !value.done; value = deletedChar.next()) {
              value = value.value;
              if (!(item.h.has(value) || isArray(item, value))) {
                slice(item, value, 0, 1);
              }
            }
          }
        });
      } else {
        if (options.preloadAdBreaks && this.m.preloadAdBreaks) {
          this.j.error("'adConfig' was already called to set 'preloadAdBreaks' with value '" + (this.m.preloadAdBreaks + "'"));
        }
      }
      if (options.onReady) {
        this.pa.push(options.onReady);
        request(this);
      }
    } else {
      this.g.s("inv_adcnf");
    }
  };
  result.handleAdBreak = function (options, pattern) {
    var data = this;
    var parsed;
    var opts;
    var number;
    var ngAnimateConsumable;
    var text;
    var extensionResolver;
    var value;
    var b;
    var current;
    var r2;
    var lastViewTime;
    var init;
    return promise(function (item) {
      switch (item.g) {
        case 1:
          if (data.oa && !data.B) {
            return data.g.s("adbr_naf"), item.return();
          }
          parsed = parseParams(options, data.j, data.g);
          if (!parsed.xa) {
            return data.g.s("inv_plcnf"), item.return();
          }
          opts = parsed.Aa;
          number = "reward" === opts.type ? 2 : 1;
          if (!("ca-pub-1725310704471587" === data.D && 1 === number ? 6E4 < Date.now() - data.Da : 1)) {
            return data.g.s("adbr_tepgai"), item.return();
          }
          ngAnimateConsumable = merge();
          if (1 === number) {
            ngAnimateConsumable.number_of_interstitial_ad_breaks++;
          }
          text = "preroll" === opts.type;
          data.g.s("adbr_cl", {
            type: opts.type,
            name: opts.name || "",
            frequency_cap: 2 === number ? 0 : data.ma,
            last_intr: Date.now() - data.Ea.g
          });
          if (pattern && !text) {
            return sync(data, opts, number, "notReady"), item.return();
          }
          if (!(2 !== number)) {
            if (null != (extensionResolver = data.Ba)) {
              extensionResolver.resolve(1);
            }
          }
          if (data.h.get(number) || !text) {
            item.g = 2;
            break;
          }
          return cb(item, query(data, opts, number), 3);
        case 3:
          if (value = item.i, !value) {
            return item.return();
          }
        case 2:
          b = data.h.get(number);
          if (!b) {
            return isArray(data, number) ? (data.g.s("adbr_noad"), sync(data, opts, number, data.M.has(number) ? "other" : "frequencyCapped")) : (slice(data, number, 0, 2), sync(data, opts, number, "noAdPreloaded")), item.return();
          }
          if (data.qa.has(number) && data.R) {
            return data.qa.delete(number), sync(data, opts, number, "frequencyCapped"), item.return();
          }
          data.qa.add(number);
          if (2 !== number) {
            item.g = 4;
            break;
          }
          return cb(item, sort(data, opts), 5);
        case 5:
          if (current = item.i, !current) {
            return sync(data, opts, number, "ignored"), item.return();
          }
        case 4:
          if (data.T) {
            return data.j.error("Cannot show ad while another ad is already visible."), sync(data, opts, number, "frequencyCapped"), item.return();
          }
          r2 = evaluate(data, "beforeAd", opts.beforeAd);
          if (!r2) {
            return keys(data, "afterAd", opts.afterAd), sync(data, opts, number, "error"), item.return();
          }
          data.T = true;
          if (1 === number) {
            ngAnimateConsumable.number_of_interstitial_ads_shown++;
          }
          data.na = true;
          lastViewTime = Date.now();
          init = function (value) {
            data.T = false;
            if (2 === value || 2 === number && 4 === value) {
              keys(data, "adDismissed", opts.adDismissed);
            } else {
              if (3 === value) {
                keys(data, "adViewed", opts.adViewed);
              }
            }
            keys(data, "afterAd", opts.afterAd);
            if (1 === number) {
              sync(data, opts, number, "viewed");
            } else {
              sync(data, opts, number, 4 === value ? "other" : 2 === value ? "dismissed" : "viewed");
            }
            if (4 !== value) {
              b.v();
              slice(data, number, data.R || 2 === number ? 0 : data.ma, 3);
            }
            data.g.s("ad_cls", {
              result: value,
              adType: number,
              dur: Date.now() - lastViewTime
            });
          };
          ready(b, function () {
            if (data.T) {
              init(4);
            }
          });
          b.show(init);
          item.g = 0;
      }
    });
  };
  result.handleAdBreakBeforeReady = function (keyReads) {
    return this.handleAdBreak(keyReads, true);
  };
  result.A = function () {
    var errTimeout = setTimeout(define(this.l, "values").call(this.l));
    var request = errTimeout.next();
    for (; !request.done; request = errTimeout.next()) {
      request.value.v();
    }
    this.l.clear();
    errTimeout = setTimeout(define(this.h, "values").call(this.h));
    request = errTimeout.next();
    for (; !request.done; request = errTimeout.next()) {
      request.value.v();
    }
    this.h.clear();
    if (this.i) {
      this.i.v();
    }
    v.prototype.A.call(this);
  };
  isString(723, function () {
    var args = translate();
    mapModifications(renderAndSend(alert(fromJSON(args, 2)), ""));
    patchDisplay(renderAndSend(watch(fromJSON(args, 6)), false));
    setClasses();
    args = new Module(renderAndSend(alert(fromJSON(args, 2)), ""));
    args = isdom ? new val(args) : args;
    var reporter = {
      error: function () {
        console.error.apply(console, ["[Ad Placement API]"].concat(toArray(htmlWebPackPluginAssets.apply(0, arguments))));
      },
      warn: function () {
        console.warn.apply(console, ["[Ad Placement API]"].concat(toArray(htmlWebPackPluginAssets.apply(0, arguments))));
      }
    };
    if (isInputEventSupported()) {
      reporter.warn("Internet Explorer is not supported.");
    } else {
      renderDefaultPanel(new run(reporter, args));
    }
  });
}).call(this, '[2021,"r20230719","r20110914",null,null,null,null,".google.cn",null,null,null,null,null,null,null,null,null,-1,[44759876,44759927,44759842]]');
