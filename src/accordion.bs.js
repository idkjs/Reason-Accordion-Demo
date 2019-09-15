// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

function unwrapElement(param) {
  if (param !== undefined) {
    return Caml_option.valFromOption(param);
  } else {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Passed none to unwrap"
        ];
  }
}

function map(f, param) {
  if (param !== undefined) {
    return Caml_option.some(Curry._1(f, Caml_option.valFromOption(param)));
  }
  
}

function andThen(f, param) {
  if (param !== undefined) {
    return Curry._1(f, Caml_option.valFromOption(param));
  }
  
}

function unwrapUnsafely(param) {
  if (param !== undefined) {
    return Caml_option.valFromOption(param);
  } else {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Passed `None` to unwrapUnsafely"
        ];
  }
}

function getClassList(item) {
  return item.classList;
}

function toggleClasses(newClass, oldClass, classList) {
  classList.add(newClass);
  classList.remove(oldClass);
  return /* () */0;
}

function toggle(toggleAction) {
  if (toggleAction.tag) {
    var item = toggleAction[0];
    var maxHeight = "max-height:" + (toggleAction[1] + "px");
    item.setAttribute("style", maxHeight);
    return toggleClasses("collapsed", "expanded", item.classList);
  } else {
    var item$1 = toggleAction[0];
    var maxHeight$1 = "max-height:" + (toggleAction[1] + "px");
    item$1.setAttribute("style", maxHeight$1);
    return toggleClasses("expanded", "collapsed", item$1.classList);
  }
}

var accordion = unwrapElement(Caml_option.nullable_to_opt(document.querySelector(".accordion")));

var sections = accordion.querySelectorAll(".section");

function getSectionElement(withClass, section) {
  return unwrapElement(Caml_option.nullable_to_opt(section.querySelector(withClass)));
}

function getHeight(element) {
  return element.clientHeight;
}

function handleHeaderClick(e, headerHeight, contentHeight) {
  var element = e.target;
  var section = element.closest(".section");
  var section$1 = (section == null) ? undefined : Caml_option.some(section);
  var match = unwrapElement(section$1).classList.contains("collapsed");
  if (match) {
    return toggle(/* Expand */Block.__(0, [
                  unwrapElement(section$1),
                  String(headerHeight + contentHeight | 0)
                ]));
  } else {
    return toggle(/* Collapse */Block.__(1, [
                  unwrapElement(section$1),
                  String(headerHeight)
                ]));
  }
}

function composeItem(node) {
  var header = getSectionElement(".header", node);
  var content = getSectionElement(".content", node);
  var headerHeight = header.clientHeight;
  var contentHeight = content.clientHeight;
  var match = node.classList.contains("collapsed");
  var intialHeight = match ? headerHeight : contentHeight;
  node.setAttribute("style", "max-height:" + (String(intialHeight) + "px"));
  header.addEventListener("click", (function (e) {
          return handleHeaderClick(e, headerHeight, contentHeight);
        }));
  return /* record */[
          /* header */header,
          /* content */content,
          /* headerHeight */header.clientHeight,
          /* contentHeight */content.clientHeight,
          /* el */unwrapElement(Caml_option.nullable_to_opt(node.parentElement))
        ];
}

var accordionElements = $$Array.map(composeItem, Array.prototype.slice.call(sections));

exports.unwrapElement = unwrapElement;
exports.map = map;
exports.andThen = andThen;
exports.unwrapUnsafely = unwrapUnsafely;
exports.getClassList = getClassList;
exports.toggleClasses = toggleClasses;
exports.toggle = toggle;
exports.accordion = accordion;
exports.sections = sections;
exports.getSectionElement = getSectionElement;
exports.getHeight = getHeight;
exports.handleHeaderClick = handleHeaderClick;
exports.composeItem = composeItem;
exports.accordionElements = accordionElements;
/* accordion Not a pure module */
