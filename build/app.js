var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);

// test.js
var require_test = __commonJS((exports, module) => {
  module.exports = 3;
});

// app.tsx
var import_test = __toESM(require_test(), 1);

// test2.js
var test2_default = 4;

// app.tsx
//!normallerweise muss man erweiterung der datei schreiben aber mit bun muss man das nicht
console.log(import_test.default, test2_default);
console.log(import.meta.dir);
console.log(import.meta.url);
console.log(import.meta.main);
