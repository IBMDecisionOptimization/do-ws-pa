(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jQuery"), require("vis"), require("datatables.net"));
	else if(typeof define === 'function' && define.amd)
		define("Gantt", ["jQuery", "vis", "datatables.net"], factory);
	else if(typeof exports === 'object')
		exports["Gantt"] = factory(require("jQuery"), require("vis"), require("datatables.net"));
	else
		root["Gantt"] = factory(root["jQuery"], root["vis"], root["datatables.net"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_58__, __WEBPACK_EXTERNAL_MODULE_59__, __WEBPACK_EXTERNAL_MODULE_69__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(37);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2016-present, Olivier, NOIRET.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 * @providesModule canDefineProperty
	 */
	
	'use strict';
	
	var _gantt = __webpack_require__(38);
	
	var _gantt2 = _interopRequireDefault(_gantt);
	
	__webpack_require__(63);
	
	__webpack_require__(64);
	
	__webpack_require__(65);
	
	__webpack_require__(66);
	
	__webpack_require__(67);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = _gantt2.default;
	// JQuery modules

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2016-present, Olivier, NOIRET.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 * @providesModule canDefineProperty
	 */
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _core = __webpack_require__(39);
	
	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_core).default;
	  }
	});
	
	__webpack_require__(40);
	
	__webpack_require__(41);
	
	__webpack_require__(42);
	
	__webpack_require__(43);
	
	__webpack_require__(44);
	
	__webpack_require__(51);
	
	__webpack_require__(52);
	
	__webpack_require__(53);
	
	__webpack_require__(54);
	
	__webpack_require__(55);
	
	__webpack_require__(57);
	
	var _es6Promise = __webpack_require__(60);
	
	var _es6Promise2 = _interopRequireDefault(_es6Promise);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	if (typeof Promise === "undefined" /* && Promise.toString().indexOf("[native code]") !== -1*/) {
	    console.log('Use of es6-promise');
	    _es6Promise2.default.polyfill();
	  }

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Gantt = function Gantt(context, config) {
	  _classCallCheck(this, Gantt);
	
	  this.context = Gantt.utils.isString(context) ? document.getElementById(context) : context;
	  var panelClass = Gantt.components.GanttPanel.impl || Gantt.components.GanttPanel;
	  this.gantt = new panelClass(this.context, config);
	  return this.gantt;
	};
	
	exports.default = Gantt;
	
	
	Gantt.defaultConfiguration = {
	  rowHeight: 27,
	  zoomFactor: 0.2,
	  loadingPanelThresold: 500
	};
	
	//noinspection SpellCheckingInspection
	Gantt.events = {
	  TITLE_CHANGED: 'titleChanged',
	  TABLE_INIT: 'tableinit',
	  TIME_TABLE_INIT: 'timesheetinit',
	  TIME_LINE_INIT: 'timeline_init',
	  TIME_WINDOW_CHANGED: 'timeWindowChanged',
	  TIME_LINE_RANGE_CHANGE: 'timeline_rangechange',
	  TIME_LINE_RANGE_CHANGED: 'timeline_rangechanged',
	  TIME_LINE_SIZE_CHANGED: 'timeline_sizeChanged',
	  TIME_LINE_PAN_MOVE: 'timeline_panmove',
	  TIME_LINE_PAN_MOVED: 'timeline_panmove',
	  TIME_LINE_SCROLLED: 'timeline_scrolled',
	  RESIZED: 'resized',
	  SPLIT_RESIZED: 'split_resized',
	  ROWS_FILTERED: 'rows_filtered',
	  DATA_LOADED: 'data_loaded',
	  ROWS_ADDED: 'rows_added',
	  ROWS_REMOVED: 'rows_removed',
	  ROWS_MODIFIED: 'rows_modified',
	  ROWS_SORTED: 'rows_sorted',
	
	  START_SELECTING: 'startSelecting',
	  SELECTION_CLEARED: 'selectionCleared',
	  STOP_SELECTING: 'stopSelecting',
	
	  // Event names are generated from the Type objects associated with the SelectionHandler, with the format type.name + 'Selected|Unselected|SelectionChanged|SelectionCleared'
	  ACTIVITY_SELECTED: 'activitySelected',
	  ACTIVITY_UNSELECTED: 'activityUnselected',
	  ACTIVITY_SELECTION_CHANGED: 'activitySelectionChanged',
	  ACTIVITY_SELECTION_CLEARED: 'activitySelectionCleared',
	
	  RESOURCE_SELECTED: 'resourceSelected',
	  RESOURCE_UNSELECTED: 'resourceUnselected',
	  RESOURCE_SELECTION_CHANGED: 'resourceSelectionChanged',
	  RESOURCE_SELECTION_CLEARED: 'resourceSelectionCleared',
	
	  ROW_SELECTED: 'rowSelected',
	  ROW_UNSELECTED: 'rowUnselected',
	  ROW_SELECTION_CHANGED: 'rowSelectionChanged',
	  ROW_SELECTION_CLEARED: 'rowSelectionCleared',
	
	  CONSTRAINT_SELECTED: 'constraintSelected',
	  CONSTRAINT_UNSELECTED: 'constraintUnselected',
	  CONSTRAINT_SELECTION_CHANGED: 'constraintSelectionChanged',
	  CONSTRAINT_SELECTION_CLEARED: 'constraintSelectionCleared'
	};
	
	Gantt.type = {
	  ACTIVITY_CHART: "ActivityChart",
	  SCHEDULE_CHART: "ScheduleChart"
	};
	
	Gantt.constraintTypes = {
	  START_TO_START: 0,
	  START_TO_END: 2,
	  END_TO_END: 3,
	  END_TO_START: 1,
	  isFromStart: function isFromStart(type) {
	    return type === 0 || type === 2;
	  },
	  isToStart: function isToStart(type) {
	    return type < 2;
	  }
	};
	
	var Tooltip = function () {
	  function Tooltip(config) {
	    _classCallCheck(this, Tooltip);
	  }
	
	  _createClass(Tooltip, [{
	    key: 'showTooltip',
	    value: function showTooltip(elt, ctx, cb) {}
	  }, {
	    key: 'hideTooltip',
	    value: function hideTooltip() {}
	  }, {
	    key: 'destroy',
	    value: function destroy() {}
	  }]);
	
	  return Tooltip;
	}();
	
	var DataFetcher = function () {
	  function DataFetcher() {
	    _classCallCheck(this, DataFetcher);
	  }
	
	  _createClass(DataFetcher, [{
	    key: 'get',
	    value: function get(obj) {}
	  }]);
	
	  return DataFetcher;
	}();
	
	var Split = function () {
	  function Split(elt, config) {
	    _classCallCheck(this, Split);
	  }
	
	  _createClass(Split, [{
	    key: 'getLeftComponent',
	    value: function getLeftComponent() {}
	  }, {
	    key: 'getRightComponent',
	    value: function getRightComponent() {}
	  }, {
	    key: 'leftComponentCreated',
	    value: function leftComponentCreated() {}
	  }]);
	
	  return Split;
	}();
	
	var Component = function () {
	  function Component(gantt, config) {
	    _classCallCheck(this, Component);
	
	    this.gantt = gantt;
	    this.config = config;
	    this.utils = Gantt.utils;
	  }
	
	  _createClass(Component, [{
	    key: 'on',
	    value: function on(event, handler) {
	      var events = this.__events || (this.__events = {});
	      var ar;
	      var eventList = this.utils.isArray(event) && event || event.split(' ');
	      for (var i = 0; i < eventList.length; i++) {
	        event = eventList[i];
	        if (!(ar = events[event])) {
	          events[event] = ar = [handler];
	        } else {
	          ar.push(handler);
	        }
	      }
	    }
	  }, {
	    key: 'one',
	    value: function one(events, handler) {
	      var _this = this;
	
	      var wrapperHandler = function wrapperHandler() {
	        for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
	          params[_key] = arguments[_key];
	        }
	
	        handler.apply(_this, params);
	        // remove the handler after it has been notified
	        var event = params[0];
	        var index = _this.__events[event].indexOf(wrapperHandler);
	        if (index > -1) {
	          _this.__events[event].splice(index, 1);
	        }
	      };
	      this.on(events, wrapperHandler);
	    }
	  }, {
	    key: 'off',
	    value: function off(event, handler) {
	      if (this.__events) {
	        var ar, i;
	        var eventList = this.utils.isArray(event) && event || event.split(' ');
	        for (var iEvent = 0; iEvent < eventList.length; iEvent++) {
	          event = eventList[iEvent];
	          if (ar = this.__events[event]) {
	            for (i = 0; i < ar.length; i++) {
	              if (ar[i] == handler) {
	                ar.splice(i, 1);
	                break;
	              }
	            }
	          }
	        }
	      }
	    }
	  }, {
	    key: 'triggerEvent',
	    value: function triggerEvent(events) {
	      var ar, params;
	      if (events === true) {
	        // Apply mode, event parameters are provided as an array
	        events = arguments[1];
	        var paramsArg = arguments[2] || [];
	        params = new Array(paramsArg.length + 1);
	        for (var iParam = 0; iParam < paramsArg.length; ++iParam) {
	          params[iParam + 1] = paramsArg[iParam];
	        }
	      } else {
	        params = new Array(arguments.length);
	        for (var _iParam = 1; _iParam < arguments.length; ++_iParam) {
	          params[_iParam] = arguments[_iParam];
	        }
	      }
	
	      var eventList = this.utils.isArray(events) && events || events.split(' ');
	      for (var iEvent = 0, event, evCount = eventList.length; iEvent < evCount; iEvent++) {
	        if (ar = this.__events && this.__events[params[0] = event = eventList[iEvent]]) {
	          for (var i = 0, count = ar.length; i < count;) {
	            ar[i].apply(this, params);
	            // If the handler being notified still in the array, go to next array elt
	            if (count == ar.length) {
	              ++i;
	            } else {
	              // If the handler was removed during notification (see one method), next element is at same index
	              count = ar.length;
	            }
	          }
	        }
	      }
	    }
	  }]);
	
	  return Component;
	}();
	
	var ErrorHandler = function (_Component) {
	  _inherits(ErrorHandler, _Component);
	
	  function ErrorHandler(config) {
	    _classCallCheck(this, ErrorHandler);
	
	    var _this2 = _possibleConstructorReturn(this, (ErrorHandler.__proto__ || Object.getPrototypeOf(ErrorHandler)).call(this, null, config));
	
	    _this2.config = config;
	    return _this2;
	  }
	
	  _createClass(ErrorHandler, [{
	    key: 'addError',
	    value: function addError(err) {}
	  }, {
	    key: 'hasErrors',
	    value: function hasErrors() {
	      return false;
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {}
	  }, {
	    key: 'showError',
	    value: function showError(err) {}
	  }, {
	    key: 'getErrors',
	    value: function getErrors() {
	      return [];
	    }
	  }, {
	    key: 'createErrorNode',
	    value: function createErrorNode(err) {
	      var node = document.createElement('div');
	      node.className = 'gantt_error';
	      return node;
	    }
	  }, {
	    key: 'removeGroup',
	    value: function removeGroup(node) {}
	  }]);
	
	  return ErrorHandler;
	}(Component);
	
	/**
	 *
	 * <br>Emmits events: <ul>
	 *   <li>Gantt.events.TIME_LINE_INIT</li>
	 *   <li>Gantt.events.TIME_LINE_RANGE_CHANGE</li>
	 *   <li>Gantt.events.TIME_LINE_RANGE_CHANGED</li>
	 *   <li>Gantt.events.TIME_LINE_PAN_MOVED</li>
	 *   <li>Gantt.events.TIME_LINE_SIZE_CHANGED</li>
	 * </ul>
	 */
	
	
	var TimeLine = function (_Component2) {
	  _inherits(TimeLine, _Component2);
	
	  function TimeLine(gantt, node, config) {
	    _classCallCheck(this, TimeLine);
	
	    var _this3 = _possibleConstructorReturn(this, (TimeLine.__proto__ || Object.getPrototypeOf(TimeLine)).call(this, gantt, config));
	
	    _this3.node = node;
	    return _this3;
	  }
	
	  _createClass(TimeLine, [{
	    key: 'setTimeWindow',
	    value: function setTimeWindow(start, end) {}
	  }, {
	    key: 'getTimeAxisHeight',
	    value: function getTimeAxisHeight() {
	      return 0;
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {}
	  }, {
	    key: 'validateZoomFactor',
	    value: function validateZoomFactor(zoomFactor) {}
	  }, {
	    key: 'getXFromMillis',
	    value: function getXFromMillis(time) {}
	  }, {
	    key: 'getDecorationContainer',
	    value: function getDecorationContainer() {}
	
	    /**
	     * Returns the current time horizon, an object with two start and end time properties, time given in milliseconds
	     */
	
	  }, {
	    key: 'getHorizon',
	    value: function getHorizon() {}
	  }, {
	    key: 'getScrollableHorizon',
	    value: function getScrollableHorizon() {}
	  }, {
	    key: 'setVisibleTimeWindow',
	    value: function setVisibleTimeWindow(window) {}
	  }, {
	    key: 'resetZoom',
	    value: function resetZoom() {}
	
	    /**
	     * Markers
	     */
	
	  }, {
	    key: 'addTimeMarker',
	    value: function addTimeMarker(id, time, classes) {}
	  }, {
	    key: 'removeTimeMarker',
	    value: function removeTimeMarker(id) {}
	  }, {
	    key: 'setTimeLineItem',
	    value: function setTimeLineItem(id, item) {}
	  }, {
	    key: 'addTimeLineItem',
	    value: function addTimeLineItem(id, item) {}
	  }, {
	    key: 'removeTimeLineItem',
	    value: function removeTimeLineItem(id) {}
	  }]);
	
	  return TimeLine;
	}(Component);
	
	var TimeTable = function (_Component3) {
	  _inherits(TimeTable, _Component3);
	
	  function TimeTable(gantt, node, config) {
	    _classCallCheck(this, TimeTable);
	
	    var _this4 = _possibleConstructorReturn(this, (TimeTable.__proto__ || Object.getPrototypeOf(TimeTable)).call(this, gantt, config));
	
	    _this4.node = node;
	    _this4.setConfiguration(config);
	    return _this4;
	  }
	
	  _createClass(TimeTable, [{
	    key: 'setConfiguration',
	    value: function setConfiguration(config) {}
	  }, {
	    key: 'draw',
	    value: function draw() {}
	  }, {
	    key: 'createUpdates',
	    value: function createUpdates(parent) {
	      return new (Gantt.components.GanttUpdates.impl || Gantt.components.GanttUpdates)(parent);
	    }
	  }, {
	    key: 'highlightRow',
	    value: function highlightRow(row, highlight, deselectAll) {}
	  }, {
	    key: 'getDisplayedActivitiesTimeRange',
	    value: function getDisplayedActivitiesTimeRange() {}
	  }, {
	    key: 'searchActivities',
	    value: function searchActivities(row, callback) {}
	  }, {
	    key: 'setConstraints',
	    value: function setConstraints(constraints) {}
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'scrollToRow',
	    value: function scrollToRow(row) {}
	  }, {
	    key: 'scrollToY',
	    value: function scrollToY(y) {}
	  }, {
	    key: 'setScrollTop',
	    value: function setScrollTop(y) {}
	  }, {
	    key: 'setFirstVisibleRow',
	    value: function setFirstVisibleRow(row) {}
	  }, {
	    key: 'getScrollLeft',
	    value: function getScrollLeft() {}
	  }, {
	    key: 'setScrollLeft',
	    value: function setScrollLeft(x) {}
	
	    /**
	     * Returns the component responsible for scrolling the time table.
	     */
	
	  }, {
	    key: 'getScroller',
	    value: function getScroller() {}
	  }, {
	    key: 'getVisibleWidth',
	    value: function getVisibleWidth() {}
	  }, {
	    key: 'getVisibleHeight',
	    value: function getVisibleHeight() {}
	
	    // Called to adjust the time table body width according to the time line width
	
	  }, {
	    key: 'setBodyWidth',
	    value: function setBodyWidth(w) {}
	  }, {
	    key: 'getBodyWidth',
	    value: function getBodyWidth() {}
	
	    // Called to adjust the height of the time  table body according to the height of the gantt table
	
	  }, {
	    key: 'setBodyHeight',
	    value: function setBodyHeight(h) {}
	  }, {
	    key: 'getBodyHeight',
	    value: function getBodyHeight() {}
	
	    // To perfectly horizontally align the time line and the time table, we need to apply a right margin
	    // to the time line corresponding to the width of the vertical scroller in the time table, if any.
	
	  }, {
	    key: 'getRightMargin',
	    value: function getRightMargin() {}
	
	    // The time line bottom must stops where the horizontal scrollbar of the time table starts.
	    // The getBottomMargin returns the height of this scrollbar.
	
	  }, {
	    key: 'getBottomMargin',
	    value: function getBottomMargin() {}
	  }]);
	
	  return TimeTable;
	}(Component);
	
	/**
	 *
	 * <br>Emmits events: <ul>
	 *   <li>Gantt.events.TABLE_INIT</li>
	 *   <li>Gantt.events.ROWS_ADDED</li>
	 *   <li>Gantt.events.ROWS_REMOVED</li>
	 *   <li>Gantt.events.ROWS_MODIFIED</li>
	 *   <li>Gantt.events.ROWS_FILTERED</li>
	 * </ul>
	 */
	
	
	var TreeTable = function (_Component4) {
	  _inherits(TreeTable, _Component4);
	
	  function TreeTable(gantt, node, config) {
	    _classCallCheck(this, TreeTable);
	
	    var _this5 = _possibleConstructorReturn(this, (TreeTable.__proto__ || Object.getPrototypeOf(TreeTable)).call(this, gantt, config));
	
	    _this5.node = node;
	    return _this5;
	  }
	
	  _createClass(TreeTable, [{
	    key: 'setRows',
	    value: function setRows(rows) {}
	  }, {
	    key: 'getRowCount',
	    value: function getRowCount() {
	      return 0;
	    }
	  }, {
	    key: 'isRowVisible',
	    value: function isRowVisible(param) {}
	  }, {
	    key: 'deleteDrawCache',
	    value: function deleteDrawCache() {}
	  }, {
	    key: 'draw',
	    value: function draw() {}
	  }, {
	    key: 'createUpdates',
	    value: function createUpdates(parent) {
	      return new (Gantt.components.GanttUpdates.impl || Gantt.components.GanttUpdates)(parent);
	    }
	  }, {
	    key: 'highlightRow',
	    value: function highlightRow(row, highlight, deselectAll) {}
	  }, {
	    key: 'setRowFilter',
	    value: function setRowFilter(filter) {}
	  }, {
	    key: 'filterChanged',
	    value: function filterChanged() {}
	  }, {
	    key: 'isRowFiltered',
	    value: function isRowFiltered(row) {
	      return false;
	    }
	  }, {
	    key: 'toggleCollapseRow',
	    value: function toggleCollapseRow(param, collapse) {}
	  }, {
	    key: 'setHeaderHeight',
	    value: function setHeaderHeight(height) {}
	  }, {
	    key: 'getTableBody',
	    value: function getTableBody() {}
	  }, {
	    key: 'getScrollableTable',
	    value: function getScrollableTable() {}
	  }, {
	    key: 'getTop',
	    value: function getTop(tr) {
	      return tr && tr.offsetTop - this.getTableBody().offsetTop || 0;
	    }
	  }, {
	    key: 'getRowAt',
	    value: function getRowAt(y) {}
	  }, {
	    key: 'getHeight',
	    value: function getHeight() {}
	  }, {
	    key: 'nextRow',
	    value: function nextRow(row) {
	      return null;
	    }
	  }, {
	    key: 'getRow',
	    value: function getRow(id) {
	      return null;
	    }
	  }, {
	    key: 'getRowName',
	    value: function getRowName(row) {
	      return row.name;
	    }
	  }, {
	    key: 'getRowTop',
	    value: function getRowTop(row) {
	      return row.tr && row.tr.offsetTop - this.getTableBody().offsetTop || 0;
	    }
	  }, {
	    key: 'expandParents',
	    value: function expandParents(row) {}
	  }]);
	
	  return TreeTable;
	}(Component);
	
	TreeTable.defaultClass = '';
	
	var GanttModel = function (_Component5) {
	  _inherits(GanttModel, _Component5);
	
	  function GanttModel(gantt, config) {
	    _classCallCheck(this, GanttModel);
	
	    var _this6 = _possibleConstructorReturn(this, (GanttModel.__proto__ || Object.getPrototypeOf(GanttModel)).call(this, gantt, config));
	
	    if (config) {
	      _this6.setConfiguration(config);
	    }
	    return _this6;
	  }
	
	  _createClass(GanttModel, [{
	    key: 'setConfiguration',
	    value: function setConfiguration(config) {}
	  }]);
	
	  return GanttModel;
	}(Component);
	
	/**
	 *
	 * <br>Emmits events: <ul>
	 *   <li>Gantt.events.TABLE_INIT</li>
	 *   <li>Gantt.events.ROWS_ADDED</li>
	 *   <li>Gantt.events.ROWS_REMOVED</li>
	 *   <li>Gantt.events.ROWS_MODIFIED</li>
	 *   <li>Gantt.events.ROWS_FILTERED</li>
	 * </ul>
	 */
	
	
	var GanttPanel = function (_Component6) {
	  _inherits(GanttPanel, _Component6);
	
	  function GanttPanel(node, config) {
	    _classCallCheck(this, GanttPanel);
	
	    var _this7 = _possibleConstructorReturn(this, (GanttPanel.__proto__ || Object.getPrototypeOf(GanttPanel)).call(this, node, config));
	
	    _this7.node = node;
	    _this7.events = Gantt.events;
	    _this7.constraintTypes = Gantt.constraintTypes;
	    return _this7;
	  }
	
	  _createClass(GanttPanel, [{
	    key: 'setConfiguration',
	    value: function setConfiguration(config) {}
	  }, {
	    key: 'draw',
	    value: function draw() {}
	  }, {
	    key: 'startUpdating',
	    value: function startUpdating() {}
	  }, {
	    key: 'stopUpdating',
	    value: function stopUpdating() {}
	  }, {
	    key: 'getModel',
	    value: function getModel() {}
	  }, {
	    key: 'getRowCount',
	    value: function getRowCount() {
	      return 0;
	    }
	  }, {
	    key: 'getRow',
	    value: function getRow(param) {
	      return null;
	    }
	  }, {
	    key: 'getVisiibleRows',
	    value: function getVisiibleRows() {
	      return [];
	    }
	  }, {
	    key: 'ensureRowVisible',
	    value: function ensureRowVisible(param) {}
	  }, {
	    key: 'isRowVisible',
	    value: function isRowVisible(param) {}
	  }, {
	    key: 'getFirstVisibleRow',
	    value: function getFirstVisibleRow() {}
	  }, {
	    key: 'setFirstVisibleRow',
	    value: function setFirstVisibleRow(row) {}
	  }, {
	    key: 'isRowFiltered',
	    value: function isRowFiltered(param) {}
	  }, {
	    key: 'toggleCollapseRow',
	    value: function toggleCollapseRow(param, collapse) {}
	  }, {
	    key: 'scrollToY',
	    value: function scrollToY(y) {}
	  }, {
	    key: 'getRowActivities',
	    value: function getRowActivities(param) {}
	  }, {
	    key: 'resetZoom',
	    value: function resetZoom() {}
	  }, {
	    key: 'zoomIn',
	    value: function zoomIn(evt) {}
	  }, {
	    key: 'zoomOut',
	    value: function zoomOut(evt) {}
	  }, {
	    key: 'zoom',
	    value: function zoom(zoomFactor, evt) {}
	  }, {
	    key: 'fitToContent',
	    value: function fitToContent() {}
	  }, {
	    key: 'getVisibleHeight',
	    value: function getVisibleHeight() {
	      return 0;
	    }
	
	    /*                        */
	    /*    Search and filter   */
	    /*                        */
	
	  }, {
	    key: 'addFilter',
	    value: function addFilter(rowFilter, rows, activities) {}
	  }, {
	    key: 'addFilter',
	    value: function addFilter(rowFilter, filterTasks) {}
	  }, {
	    key: 'removeFilter',
	    value: function removeFilter(key, preventNotify) {}
	  }, {
	    key: 'search',
	    value: function search(text, rows, activities) {}
	  }, {
	    key: 'setHideEmptyRows',
	    value: function setHideEmptyRows(hide, preventNotify) {}
	
	    /*                        */
	    /*          Utils         */
	    /*                        */
	
	  }]);
	
	  return GanttPanel;
	}(Component);
	
	var Filter = function Filter(options) {
	  _classCallCheck(this, Filter);
	};
	
	var Renderer = function () {
	  function Renderer(config, proto, paletteHandler) {
	    _classCallCheck(this, Renderer);
	
	    if (proto) {
	      Gantt.utils.mergeObjects(this, proto);
	    }
	    this.config = config;
	    this.paletteHandler = paletteHandler;
	    this.setConfiguration(config);
	  }
	
	  _createClass(Renderer, [{
	    key: 'setConfiguration',
	    value: function setConfiguration(config) {}
	  }]);
	
	  return Renderer;
	}();
	
	var ActivityLayout = function () {
	  function ActivityLayout(config) {
	    _classCallCheck(this, ActivityLayout);
	  }
	
	  _createClass(ActivityLayout, [{
	    key: 'layout',
	    value: function layout(row) {}
	  }, {
	    key: 'allowVariableRowHeight',
	    value: function allowVariableRowHeight() {
	      return false;
	    }
	  }]);
	
	  return ActivityLayout;
	}();
	
	Gantt.ObjectTypes = {
	  Activity: 2,
	  Resource: 4,
	  Row: 1,
	  Constraint: 8,
	  Reservation: 16
	};
	
	var SelectionHandler = function (_Component7) {
	  _inherits(SelectionHandler, _Component7);
	
	  function SelectionHandler(config, proto) {
	    _classCallCheck(this, SelectionHandler);
	
	    var _this8 = _possibleConstructorReturn(this, (SelectionHandler.__proto__ || Object.getPrototypeOf(SelectionHandler)).call(this, null, config));
	
	    _this8.selections = [];
	    _this8.selectionType = null;
	    if (proto) {
	      Gantt.utils.mergeObjects(_this8, proto);
	    }
	    _this8.setConfiguration(config);
	    return _this8;
	  }
	
	  _createClass(SelectionHandler, [{
	    key: 'setConfiguration',
	    value: function setConfiguration(config) {}
	  }, {
	    key: 'getObjectType',
	    value: function getObjectType(obj) {}
	  }, {
	    key: 'select',
	    value: function select(obj, clear, notActive) {}
	  }, {
	    key: 'clearSelection',
	    value: function clearSelection() {
	      this.selections = [];
	    }
	  }, {
	    key: 'isSelected',
	    value: function isSelected(obj) {
	      return this.selections.indexOf(obj) >= 0;
	    }
	  }, {
	    key: 'processClick',
	    value: function processClick(e, obj) {}
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.selections = [];
	    }
	  }]);
	
	  return SelectionHandler;
	}(Component);
	
	var LayoutSynchronizer = function (_Component8) {
	  _inherits(LayoutSynchronizer, _Component8);
	
	  function LayoutSynchronizer(config, proto) {
	    _classCallCheck(this, LayoutSynchronizer);
	
	    var _this9 = _possibleConstructorReturn(this, (LayoutSynchronizer.__proto__ || Object.getPrototypeOf(LayoutSynchronizer)).call(this, null, config));
	
	    if (proto) {
	      Gantt.utils.mergeObjects(_this9, proto || config);
	    }
	    _this9.setConfiguration(config);
	    return _this9;
	  }
	
	  _createClass(LayoutSynchronizer, [{
	    key: 'setConfiguration',
	    value: function setConfiguration(config) {}
	  }, {
	    key: 'connect',
	    value: function connect(gantt) {}
	  }, {
	    key: 'disconnect',
	    value: function disconnect() {}
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.disconnect();
	    }
	  }]);
	
	  return LayoutSynchronizer;
	}(Component);
	
	var Palette = function () {
	  function Palette(config) {
	    _classCallCheck(this, Palette);
	  }
	
	  _createClass(Palette, [{
	    key: 'getColors',
	    value: function getColors(count) {}
	  }]);
	
	  return Palette;
	}();
	
	Gantt.defaultPaletteName = null;
	Gantt.defaultPalettes = {};
	
	var GanttUpdates = function () {
	  function GanttUpdates(parent) {
	    _classCallCheck(this, GanttUpdates);
	
	    this.parent = parent;
	  }
	
	  _createClass(GanttUpdates, [{
	    key: 'addUpdate',
	    value: function addUpdate(update) {}
	  }, {
	    key: 'removeUpdate',
	    value: function removeUpdate(update) {}
	  }, {
	    key: 'reload',
	    value: function reload() {
	      this._reload = true;
	    }
	  }, {
	    key: 'isReload',
	    value: function isReload() {
	      return false;
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {}
	  }, {
	    key: 'startUpdating',
	    value: function startUpdating() {}
	  }, {
	    key: 'stopUpdating',
	    value: function stopUpdating() {}
	  }]);
	
	  return GanttUpdates;
	}();
	
	var Toolbar = function (_Component9) {
	  _inherits(Toolbar, _Component9);
	
	  function Toolbar(gantt, node, config) {
	    _classCallCheck(this, Toolbar);
	
	    var _this10 = _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).call(this, gantt, config));
	
	    _this10.node = node;
	    _this10.setConfiguration(config, node);
	    return _this10;
	  }
	
	  _createClass(Toolbar, [{
	    key: 'setConfiguration',
	    value: function setConfiguration(config, node) {
	      this.config = config;
	    }
	  }, {
	    key: 'connect',
	    value: function connect(gantt) {}
	  }, {
	    key: 'ganttLoaded',
	    value: function ganttLoaded(gantt, rows) {}
	  }, {
	    key: 'onInitialized',
	    value: function onInitialized() {}
	  }, {
	    key: 'destroy',
	    value: function destroy() {}
	  }]);
	
	  return Toolbar;
	}(Component);
	
	Toolbar.createTitle = function (title) {
	  var node = document.createElement('div');
	  node.innerHTML = title;
	  node.className = 'toolbar-title';
	  return node;
	};
	
	var Button = function (_Component10) {
	  _inherits(Button, _Component10);
	
	  function Button(gantt, config) {
	    _classCallCheck(this, Button);
	
	    var _this11 = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, gantt, config));
	
	    _this11.callbacks = [];
	    _this11.setConfiguration(config);
	    return _this11;
	  }
	
	  _createClass(Button, [{
	    key: 'setConfiguration',
	    value: function setConfiguration(config) {
	      var _this12 = this;
	
	      var btn = document.createElement('div');
	      if (config.id) {
	        btn.id = config.id;
	      }
	      btn.className = 'toolbar-button g-hoverable g-selectable' + (config.classes ? ' ' + config.classes : '');
	      if (config.icon) {
	        var img = document.createElement('img');
	        img.src = config.icon;
	        img.alt = '';
	        btn.appendChild(img);
	      }
	      if (config.fontIcon) {
	        var fontIcon = document.createElement('i');
	        fontIcon.className = config.fontIcon + (config.text ? ' fa-fw' : '');
	        btn.appendChild(fontIcon);
	      }
	      if (config.text) {
	        btn.appendChild(document.createTextNode(config.text));
	      }
	      this.node = btn;
	      this.node.onclick = function (e) {
	        _this12.clicked(e);
	        _this12.callbacks.map(function (cb) {
	          cb({ gantt: _this12.gantt, event: e });
	        });
	      };
	      if (config.onclick) {
	        this.onclick(config.onclick);
	      }
	      return btn;
	    }
	  }, {
	    key: 'onclick',
	    value: function onclick(callback) {
	      this.callbacks.push(callback);
	    }
	  }, {
	    key: 'clicked',
	    value: function clicked(e) {}
	  }, {
	    key: 'setId',
	    value: function setId(id) {
	      this.node.id = id;
	    }
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'setSelected',
	    value: function setSelected(selected) {
	      Gantt.utils.toggleClass(this.node, 'selected', selected);
	    }
	  }]);
	
	  return Button;
	}(Component);
	
	var CheckBox = function (_Component11) {
	  _inherits(CheckBox, _Component11);
	
	  function CheckBox(gantt, config) {
	    _classCallCheck(this, CheckBox);
	
	    var _this13 = _possibleConstructorReturn(this, (CheckBox.__proto__ || Object.getPrototypeOf(CheckBox)).call(this, gantt, config));
	
	    _this13.setConfiguration(config);
	    return _this13;
	  }
	
	  _createClass(CheckBox, [{
	    key: 'setConfiguration',
	    value: function setConfiguration(config) {
	      var ctnr = this.node = document.createElement('div');
	      ctnr.style.whiteSpace = 'nowrap';
	      var input = this.inputNode = document.createElement('input');
	      input.setAttribute('type', 'checkbox');
	      input.setAttribute('value', 'None');
	      input.className = 'g-selectable g-hoverable';
	      if (config.id) {
	        input.id = id;
	      }
	      if (config.classes) {
	        ctnr.className = config.classes;
	      }
	      ctnr.appendChild(input);
	      var label = document.createElement('label');
	      if (config.id) {
	        label.setAttribute('for', config.id);
	      }
	      if (config.icon) {
	        var img = document.createElement('img');
	        img.src = config.icon;
	        img.alt = '';
	        label.appendChild(img);
	      }
	      if (config.text) {
	        label.appendChild(document.createTextNode(config.text));
	      }
	      if (config.onclick) {
	        this.onclick(config.onclick);
	      }
	      ctnr.appendChild(label);
	      return ctnr;
	    }
	  }, {
	    key: 'setChecked',
	    value: function setChecked(checked) {
	      this.inputNode.checked = checked;
	    }
	  }, {
	    key: 'onclick',
	    value: function onclick(callback) {
	      var _this14 = this;
	
	      this.inputNode.onclick = function (e) {
	        callback(_this14.inputNode.checked, { gantt: _this14.gantt, event: e });
	      };
	    }
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'setId',
	    value: function setId(id) {
	      this.inputNode.id = id;
	    }
	  }]);
	
	  return CheckBox;
	}(Component);
	
	CheckBox.defaultClass = null;
	
	var Toggle = function (_Component12) {
	  _inherits(Toggle, _Component12);
	
	  function Toggle(gantt, config) {
	    _classCallCheck(this, Toggle);
	
	    var _this15 = _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call(this, gantt, config));
	
	    _this15.setConfiguration(config);
	    return _this15;
	  }
	
	  _createClass(Toggle, [{
	    key: 'setConfiguration',
	    value: function setConfiguration(config) {
	      var _this16 = this;
	
	      this.callbacks = [];
	      var ctnr = this._node = document.createElement('div');
	      this._isSel = config.isSelected && config.isSelected(this.gantt);
	      this.btnUnselected = new (Gantt.components.Button.impl || Gantt.components.Button)(this.gantt, config.unselected);
	      this.btnSelected = new (Gantt.components.Button.impl || Gantt.components.Button)(this.gantt, config.selected);
	      ctnr.appendChild(this._isSel ? this.btnSelected.node : this.btnUnselected.node);
	      if (config.id) {
	        ctnr.id = id;
	      }
	      var onclick = function onclick(e) {
	        _this16._isSel = !_this16._isSel;
	        _this16.updateButtons(_this16._isSel);
	        _this16.callbacks.forEach(function (c) {
	          c(_this16._isSel, { gantt: _this16.gantt, event: e });
	        });
	      };
	      this.btnUnselected.node.onclick = this.btnSelected.node.onclick = onclick;
	      if (config.onclick) {
	        this.onclick(config.onclick);
	      }
	      return ctnr;
	    }
	  }, {
	    key: 'isSelected',
	    value: function isSelected() {
	      return this._isSel;
	    }
	  }, {
	    key: 'setSelected',
	    value: function setSelected(selected) {
	      this._isSel = selected;
	      this.updateButtons(selected);
	    }
	  }, {
	    key: 'onclick',
	    value: function onclick(callback) {
	      this.callbacks.push(callback);
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      this.updateButtons(this.config.isSelected ? this._isSel = this.config.isSelected(this.gantt) : this._isSel);
	    }
	  }, {
	    key: 'updateButtons',
	    value: function updateButtons(isSel) {
	      if (this.btnSelected.node.parentNode) {
	        if (!isSel) this._node.replaceChild(this.btnUnselected.node, this.btnSelected.node);
	      } else if (this.btnUnselected.node.parentNode) {
	        this._node.replaceChild(this.btnSelected.node, this.btnUnselected.node);
	      }
	    }
	  }, {
	    key: 'node',
	    get: function get() {
	      return this._node;
	    },
	    set: function set(node) {
	      this._node = node;
	    }
	  }]);
	
	  return Toggle;
	}(Component);
	
	Toggle.defaultClass = null;
	
	var DropDownList = function (_Component13) {
	  _inherits(DropDownList, _Component13);
	
	  function DropDownList(gantt, config) {
	    _classCallCheck(this, DropDownList);
	
	    var _this17 = _possibleConstructorReturn(this, (DropDownList.__proto__ || Object.getPrototypeOf(DropDownList)).call(this, gantt, config));
	
	    _this17.setConfiguration(config);
	    return _this17;
	  }
	
	  _createClass(DropDownList, [{
	    key: 'setConfiguration',
	    value: function setConfiguration(config) {
	      var node = this.node = document.createElement('div');
	      var defaultClass = DropDownList.defaultClass;
	      if (defaultClass) {
	        node.className = defaultClass;
	      }
	      if (config.classes) {
	        Gantt.utils.addClass(node, config.classes);
	      }
	      if (config.text || config.icon || config.fontIcon) {
	        var labelNode = document.createElement('div');
	        labelNode.className = 'label';
	        if (config.icon) {
	          var img = document.createElement('img');
	          img.src = config.icon;
	          img.alt = '';
	          labelNode.appendChild(img);
	        }
	        if (config.fontIcon) {
	          var fontIcon = document.createElement('i');
	          fontIcon.className = config.fontIcon + (config.text ? ' fa-fw' : '');
	          labelNode.appendChild(fontIcon);
	        }
	        if (config.text) {
	          labelNode.appendChild(document.createTextNode(config.text));
	        }
	        node.appendChild(labelNode);
	      }
	      var select = this.selectNode = document.createElement('select');
	      select.className = 'g-hoverable';
	      for (var i = 0, count = config.options.length, opt, optNode; i < count; i++) {
	        opt = config.options[i];
	        optNode = document.createElement('option');
	        optNode.text = opt.text;
	        optNode.value = opt.value;
	        select.appendChild(optNode);
	      }
	      node.appendChild(select);
	      if (config.onchange) {
	        this.onchange(config.onchange);
	      }
	      return node;
	    }
	  }, {
	    key: 'select',
	    value: function select(value) {
	      this.selectNode.value = value;
	    }
	  }, {
	    key: 'onchange',
	    value: function onchange(callback) {
	      var _this18 = this;
	
	      this.selectNode.onchange = function (e) {
	        callback(_this18.selectNode.value, { gantt: _this18.gantt, event: e });
	      };
	    }
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'setId',
	    value: function setId(id) {
	      this.selectNode.id = id;
	    }
	  }]);
	
	  return DropDownList;
	}(Component);
	
	DropDownList.defaultClass = 'dropdown-list';
	
	var Input = function (_Component14) {
	  _inherits(Input, _Component14);
	
	  function Input(gantt, config) {
	    _classCallCheck(this, Input);
	
	    var _this19 = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, gantt, config));
	
	    _this19.setConfiguration(config);
	    return _this19;
	  }
	
	  _createClass(Input, [{
	    key: 'setConfiguration',
	    value: function setConfiguration(config) {
	      var node = this.node = document.createElement('div');
	      if (Input.defaultClass) {
	        node.className = Input.defaultClass;
	      }
	      if (config.classes) {
	        Gantt.utils.addClass(node, config.classes);
	      }
	      node.style.display = 'flex';
	      node.style.flexDirection = 'row';
	      node.style.alignItems = 'center';
	
	      if (config.text || config.icon || config.fontIcon || config.type === 'search') {
	        var labelNode = document.createElement('div');
	        labelNode.className = 'label';
	        labelNode.style.display = 'inline-block';
	        if (config.icon) {
	          var img = document.createElement('img');
	          img.src = config.icon;
	          img.alt = '';
	          labelNode.appendChild(img);
	        }
	        if (config.fontIcon) {
	          var fontIcon = document.createElement('i');
	          fontIcon.className = config.fontIcon + (config.text ? ' fa-fw' : '');
	          fontIcon.setAttribute('aria-disabled', true);
	          labelNode.appendChild(fontIcon);
	        } else if (config.type === 'search') {
	          var _fontIcon = document.createElement('i');
	          _fontIcon.setAttribute('aria-disabled', true);
	          _fontIcon.className = 'fa fa-search fa-lg' + (config.text ? ' fa-fw' : '');
	          labelNode.appendChild(_fontIcon);
	        }
	        if (config.text) {
	          labelNode.appendChild(document.createTextNode(config.text));
	        }
	        node.appendChild(labelNode);
	      }
	      var input = this.inputNode = document.createElement('input');
	      node.appendChild(input);
	
	      var deleteBtn = document.createElement('div');
	      deleteBtn.className = 'delete-button';
	      deleteBtn.display = 'inline-block';
	      var deleteIcon = document.createElement('i');
	      deleteIcon.className = 'fa fa-times fa-lg';
	      deleteBtn.appendChild(deleteIcon);
	      node.appendChild(deleteBtn);
	      deleteBtn.onclick = function () {
	        input.value = '';
	        if ("createEvent" in document) {
	          var evt = document.createEvent("HTMLEvents");
	          evt.initEvent("change", false, true);
	          input.dispatchEvent(evt);
	        } else input.fireEvent("onchange");
	      };
	
	      if (config.onchange) {
	        this.onchange(config.onchange);
	      }
	      return node;
	    }
	  }, {
	    key: 'setText',
	    value: function setText(value) {
	      this.input.value = value;
	    }
	  }, {
	    key: 'onchange',
	    value: function onchange(userCallback) {
	      var _this20 = this;
	
	      var callback = function callback(e) {
	        userCallback(_this20.inputNode.value, { gantt: _this20.gantt, event: e });
	      };
	      this.inputNode.onchange = callback;
	      this.inputNode.onkeyup = callback;
	    }
	  }, {
	    key: 'setId',
	    value: function setId(id) {
	      this.inputNode.id = id;
	    }
	  }]);
	
	  return Input;
	}(Component);
	
	Input.defaultClass = 'input-box';
	
	var ButtonGroup = function (_Component15) {
	  _inherits(ButtonGroup, _Component15);
	
	  function ButtonGroup(gantt, config) {
	    _classCallCheck(this, ButtonGroup);
	
	    var _this21 = _possibleConstructorReturn(this, (ButtonGroup.__proto__ || Object.getPrototypeOf(ButtonGroup)).call(this, gantt, config));
	
	    _this21.selected = null;
	    _this21.callbacks = [];
	    _this21.setConfiguration(config);
	    return _this21;
	  }
	
	  _createClass(ButtonGroup, [{
	    key: 'setConfiguration',
	    value: function setConfiguration(config) {
	      var node = this.node = document.createElement('div');
	      if (config.classes) {
	        node.className = config.classes;
	      }
	      this.buttons = [];
	      Gantt.utils.addClass(node, 'button-group');
	      node.style.display = 'flex';
	      node.style.flexDirection = 'row';
	      node.style.alignItems = 'center';
	
	      var self = this;
	      function installBtnClicked(button) {
	        button.clicked = function () {
	          self.setSelected(button);
	        };
	      }
	
	      this.value = null;
	      var cfgBtns = config.buttons;
	      for (var i = 0; i < cfgBtns.length; ++i) {
	        var btn = new (Gantt.components.Button.impl || Gantt.components.Button)(this.gantt, cfgBtns[i]);
	        this.buttons.push(btn);
	        installBtnClicked(btn);
	        if (cfgBtns[i].selected) {
	          this.selected = btn;
	          btn.setSelected(true);
	          this.value = btn.value;
	        }
	        btn.value = cfgBtns[i].value;
	        node.appendChild(btn.node);
	      }
	      if (config.onchange) {
	        this.onchange(config.onchange);
	      }
	      if (config.value !== undefined) {
	        this.setValue(config.value);
	      }
	      return node;
	    }
	  }, {
	    key: 'setValue',
	    value: function setValue(value, noNotify) {
	      for (var i = 0; i < this.buttons.length; i++) {
	        if (this.buttons[i].value === value) {
	          this.setSelected(this.buttons[i], noNotify);
	          break;
	        }
	      }
	    }
	  }, {
	    key: 'getValue',
	    value: function getValue() {
	      return this.value;
	    }
	  }, {
	    key: 'setSelected',
	    value: function setSelected(btn, noNotify) {
	      var _this22 = this;
	
	      if (this.selected !== btn) {
	        if (this.selected) {
	          this.selected.setSelected(false);
	        }
	        this.selected = btn;
	        if (btn) {
	          this.value = btn.value;
	          btn.setSelected(true);
	        } else {
	          this.value = null;
	        }
	        if (!noNotify) {
	          this.callbacks.map(function (cb) {
	            cb(_this22.value);
	          });
	        }
	      }
	    }
	  }, {
	    key: 'onchange',
	    value: function onchange(userCallback) {
	      this.callbacks.push(userCallback);
	    }
	  }, {
	    key: 'setId',
	    value: function setId(id) {
	      this.inputNode.id = id;
	    }
	  }]);
	
	  return ButtonGroup;
	}(Component);
	
	var LoadResourceChart = function (_Component16) {
	  _inherits(LoadResourceChart, _Component16);
	
	  function LoadResourceChart(gantt, node, config) {
	    _classCallCheck(this, LoadResourceChart);
	
	    var _this23 = _possibleConstructorReturn(this, (LoadResourceChart.__proto__ || Object.getPrototypeOf(LoadResourceChart)).call(this, gantt, node, config));
	
	    _this23.node = node;
	    _this23.setConfiguration(config);
	    return _this23;
	  }
	
	  _createClass(LoadResourceChart, [{
	    key: 'setConfiguration',
	    value: function setConfiguration(config) {}
	  }]);
	
	  return LoadResourceChart;
	}(Component);
	
	var ConstraintsGraph = function (_Component17) {
	  _inherits(ConstraintsGraph, _Component17);
	
	  function ConstraintsGraph(gantt, node, config) {
	    _classCallCheck(this, ConstraintsGraph);
	
	    var _this24 = _possibleConstructorReturn(this, (ConstraintsGraph.__proto__ || Object.getPrototypeOf(ConstraintsGraph)).call(this, gantt, node, config));
	
	    _this24.node = node;
	    _this24.setConfiguration(config);
	    return _this24;
	  }
	
	  _createClass(ConstraintsGraph, [{
	    key: 'setConfiguration',
	    value: function setConfiguration(config) {}
	  }, {
	    key: 'setConstraints',
	    value: function setConstraints(cts) {}
	  }, {
	    key: 'setNode',
	    value: function setNode(node) {}
	  }]);
	
	  return ConstraintsGraph;
	}(Component);
	
	var ConstraintLayout = function (_Component18) {
	  _inherits(ConstraintLayout, _Component18);
	
	  function ConstraintLayout(gantt, config) {
	    _classCallCheck(this, ConstraintLayout);
	
	    var _this25 = _possibleConstructorReturn(this, (ConstraintLayout.__proto__ || Object.getPrototypeOf(ConstraintLayout)).call(this, gantt, null, config));
	
	    _this25.setConfiguration(config);
	    return _this25;
	  }
	
	  _createClass(ConstraintLayout, [{
	    key: 'setConfiguration',
	    value: function setConfiguration(config) {}
	  }, {
	    key: 'startInitialize',
	    value: function startInitialize() {}
	  }, {
	    key: 'addNode',
	    value: function addNode(node) {}
	  }, {
	    key: 'addConstraint',
	    value: function addConstraint(nodeFrom, nodeTo, cons) {}
	  }, {
	    key: 'stopInitialize',
	    value: function stopInitialize() {}
	  }, {
	    key: 'forEachLink',
	    value: function forEachLink(node, cb) {}
	  }, {
	    key: 'layoutNode',
	    value: function layoutNode(node) {}
	  }, {
	    key: 'layoutRowNodeLinks',
	    value: function layoutRowNodeLinks(rowIndex) {}
	  }, {
	    key: 'drawRowLinks',
	    value: function drawRowLinks(rowIndex, parentElt, renderer, ctx) {}
	  }]);
	
	  return ConstraintLayout;
	}(Component);
	
	Gantt.components = {
	  Component: Component,
	  GanttPanel: GanttPanel,
	  GanttModel: GanttModel,
	  TreeTable: TreeTable,
	  TimeLine: TimeLine,
	  TimeTable: TimeTable,
	  Split: Split,
	  Tooltip: Tooltip,
	  Filter: Filter,
	  DataFetcher: DataFetcher,
	  ErrorHandler: ErrorHandler,
	  Renderer: Renderer,
	  ActivityLayout: ActivityLayout,
	  SelectionHandler: SelectionHandler,
	  LayoutSynchronizer: LayoutSynchronizer,
	  GanttUpdates: GanttUpdates,
	  Palette: Palette,
	  Toolbar: Toolbar,
	  Button: Button,
	  CheckBox: CheckBox,
	  Toggle: Toggle,
	  DropDownList: DropDownList,
	  Input: Input,
	  ButtonGroup: ButtonGroup,
	  LoadResourceChart: LoadResourceChart,
	  ConstraintsGraph: ConstraintsGraph,
	  ConstraintLayout: ConstraintLayout
	};
	
	Gantt.envReady = function () {
	  return Promise.resolve(true);
	};
	
	if (false) {
	  module.hot.accept();
	}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _core = __webpack_require__(39);
	
	var _core2 = _interopRequireDefault(_core);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	_core2.default.plugins = {
	  plugins: [],
	
	  /**
	   * Registers the list of specified plugins if not already registered.
	   * @param {Array|Object} plugins plugin instance(s).
	   */
	  register: function register(plugins) {
	    for (var i = 0; i < arguments.length; i++) {
	      if (this.plugins.indexOf(arguments[i]) === -1) {
	        this.plugins.push(arguments[i]);
	      }
	    }
	  },
	
	  /**
	   * Unregisters the specified plugin if registered.
	   * @param {Array|Object} plugins plugin instance(s).
	   */
	  unregister: function unregister(plugins) {
	    for (var i = 0, index; i < arguments.length; i++) {
	      if ((index = this.plugins.indexOf(arguments[i])) !== -1) {
	        this.plugins.splice(index, 1);
	      }
	    }
	  },
	
	  /**
	   * Remove all registered plugins.
	   * @see #register
	   */
	  clear: function clear() {
	    this.plugins = [];
	  },
	
	  /**
	   * Returns the number of registered plugins.
	   * @returns {Number}
	   */
	  count: function count() {
	    return this.plugins.length;
	  },
	
	  /**
	   * Returns all registered plugin instances.
	   * @returns {Array} array of plugins.
	   */
	  getAll: function getAll() {
	    return this.plugins;
	  },
	
	  /**
	   * Calls the registermed plugins on the specified method, with the provided args. This
	   * method immediately returns as soon as a plugin returns a value. The
	   * returned value can be used, for instance, to interrupt the current action.
	   * @param {String|Boolean} method boolean to indicate the plugin call order of the name of the plugin method to call.
	   * @param {...Object} args list to apply to the method call.
	   * @returns {Object} the value false if any of the plugins return false, otherwise returns true.
	   */
	  call: function call(method) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }
	
	    var paramsStart = void 0,
	        reverse = void 0;
	    if (typeof method !== 'string') {
	      reverse = method;
	      method = arguments[1];
	      paramsStart = 2;
	    } else {
	      paramsStart = 1;
	    }
	    var params = Array.prototype.slice.call(arguments, paramsStart);
	    for (var i = reverse ? this.plugins.length - 1 : 0, inc = reverse ? -1 : 1, end = reverse ? -1 : this.plugins.length, result; i != end; i += inc) {
	      var plugin = this.plugins[i];
	      if (typeof plugin[method] === 'function') {
	        if ((result = plugin[method].apply(plugin, params)) !== undefined) {
	          return result;
	        }
	      }
	    }
	  }
	};
	
	/**
	 * Plugin extension methods.
	 * @interface Gantt.PluginBase
	 */
	
	var Plugin = function () {
	  function Plugin() {
	    _classCallCheck(this, Plugin);
	  }
	
	  _createClass(Plugin, [{
	    key: 'beforeInit',
	
	    // Called at start of Gantt init
	    value: function beforeInit() {}
	
	    // Called at end of Gantt init
	
	  }, {
	    key: 'afterInit',
	    value: function afterInit() {}
	
	    // Called at start of update
	
	  }, {
	    key: 'beforeUpdate',
	    value: function beforeUpdate() {}
	
	    // Called at end of update
	
	  }, {
	    key: 'afterUpdate',
	    value: function afterUpdate() {}
	
	    // Called at start of draw
	
	  }, {
	    key: 'beforeDraw',
	    value: function beforeDraw() {}
	
	    // Called at end of draw
	
	  }, {
	    key: 'afterDraw',
	    value: function afterDraw() {}
	
	    // Called during destroy
	
	  }, {
	    key: 'destroy',
	    value: function destroy() {}
	  }]);
	
	  return Plugin;
	}();
	
	exports.default = Plugin;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _core = __webpack_require__(39);
	
	var _core2 = _interopRequireDefault(_core);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function updateTimeWindow(wnd, activity) {
	  if (activity.start && wnd.start > activity.start) {
	    wnd.start = activity.start;
	  }
	  if (activity.end && wnd.end < activity.end) {
	    wnd.end = activity.end;
	  }
	  return activity;
	}
	
	var ConstraintPrototype = {
	  isDisplayed: function isDisplayed() {
	    return this.nodes != null;
	  },
	
	  clearLink: function clearLink() {
	    this.nodes = null;
	  },
	
	  setNodes: function setNodes(nodes) {
	    this.nodes = nodes;
	  }
	};
	
	var GanttModel = function (_Gantt$components$Gan) {
	  _inherits(GanttModel, _Gantt$components$Gan);
	
	  function GanttModel(gantt, config) {
	    _classCallCheck(this, GanttModel);
	
	    return _possibleConstructorReturn(this, (GanttModel.__proto__ || Object.getPrototypeOf(GanttModel)).call(this, gantt, config));
	  }
	
	  _createClass(GanttModel, [{
	    key: 'setConfiguration',
	    value: function setConfiguration(config) {
	      var _this2 = this;
	
	      this.destroy();
	      var ftchClass = _core2.default.components.DataFetcher.impl || _core2.default.components.DataFetcher;
	      var fetchConfig = void 0;
	      var checkFetcher = function checkFetcher(fetcher, type) {
	        if (!fetcher.get) {
	          throw new Error("Could not configure data for " + type + ". Probably a configuration issue with key(s) " + Object.keys(fetcher).join(','));
	        }
	      };
	      this.dateParser = null;
	      if (config.dateFormat) {
	        try {
	          this.dateParser = _core2.default.utils.createDateParser(config.dateFormat);
	        } catch (err) {
	          throw new Error("Could not process date format " + config.dateFormat + ": " + err);
	        }
	      }
	      var makeTimeFct = function makeTimeFct(fct) {
	        if (_this2.dateParser) {
	          var final;
	          return function (obj) {
	            if (!final) {
	              var value = fct(obj);
	              if (_core2.default.utils.isString(value)) {
	                final = function final(obj) {
	                  return _this2.dateParser(fct(obj));
	                };
	                return _this2.dateParser(value);
	              } else {
	                final = fct;
	                return value;
	              }
	            }
	            return final(obj);
	          };
	        }
	        return fct;
	      };
	
	      this.allFetcher = null;
	      if (fetchConfig = config.all) {
	        this.allFetcher = new ftchClass(fetchConfig, ['reader', 'resources', 'activities', 'reservations', 'constraints'], { gantt: this.gantt });
	        checkFetcher(this.allFetcher, 'all');
	        this.allFetcher._reader = fetchConfig.reader && _core2.default.utils.isFunction(fetchConfig.reader) ? fetchConfig.reader : function (data) {
	          return fetchConfig.reader;
	        };
	        this.allFetcher._resourcesGetter = fetchConfig.resources && _core2.default.utils.propertyEvaluator(fetchConfig.resources);
	        this.allFetcher._activitiesGetter = fetchConfig.activities && _core2.default.utils.propertyEvaluator(fetchConfig.activities);
	        this.allFetcher._reservationsGetter = fetchConfig.reservations && _core2.default.utils.propertyEvaluator(fetchConfig.reservations);
	        this.allFetcher._constraintsGetter = fetchConfig.constraints && _core2.default.utils.propertyEvaluator(fetchConfig.constraints);
	      }
	
	      this.resourceFetcher = null;
	      if (fetchConfig = config.resources) {
	        this.resourceFetcher = new ftchClass(fetchConfig, ['id', 'parent', 'name', 'activities'], { gantt: this.gantt });
	        checkFetcher(this.resourceFetcher, 'resources');
	        if (fetchConfig.parent) {
	          this.resourceFetcher._parentIdGetter = _core2.default.utils.propertyEvaluator(fetchConfig.parent || 'parentId');
	        }
	        this.resourceFetcher._idGetter = _core2.default.utils.propertyEvaluator(fetchConfig.id || 'id');
	        this.resourceFetcher._nameGetter = fetchConfig.name && _core2.default.utils.propertyEvaluator(fetchConfig.name) || this.resourceFetcher._idGetter;
	        if (fetchConfig.activities) {
	          this.resourceFetcher._activityGetter = _core2.default.utils.propertyEvaluator(fetchConfig.activities);
	        }
	      }
	
	      if (fetchConfig = config.activities) {
	        // Do no not create an activity getter if activities are provided along with the resources
	        this.activityFetcher = this.resourceFetcher && this.resourceFetcher._activityGetter && {} || new ftchClass(fetchConfig, ['id', 'parent', 'name', 'start', 'end', 'resource'], { gantt: this.gantt });
	        if (!this.resourceFetcher || !this.resourceFetcher._activityGetter) {
	          checkFetcher(this.activityFetcher, 'activities');
	        }
	        if (fetchConfig.parent) {
	          this.activityFetcher._parentIdGetter = _core2.default.utils.propertyEvaluator(fetchConfig.parent || 'parentId');
	        }
	        this.activityFetcher._idGetter = _core2.default.utils.propertyEvaluator(fetchConfig.id || 'id');
	        this.activityFetcher._nameGetter = fetchConfig.name && _core2.default.utils.propertyEvaluator(fetchConfig.name) || this.activityFetcher._idGetter;
	        this.activityFetcher._startGetter = makeTimeFct(_core2.default.utils.propertyEvaluator(fetchConfig.start || 'start'));
	        this.activityFetcher._endGetter = makeTimeFct(_core2.default.utils.propertyEvaluator(fetchConfig.end || 'end'));
	        if (fetchConfig.resource) {
	          this.activityFetcher._resourceIdGetter = _core2.default.utils.propertyEvaluator(fetchConfig.resource);
	        }
	      }
	
	      if (fetchConfig = config.reservations) {
	        this.reservationFetcher = new ftchClass(fetchConfig, ['activity', 'resource'], { gantt: this.gantt });
	        checkFetcher(this.reservationFetcher, 'reservations');
	        //noinspection JSUnresolvedVariable
	        this.reservationFetcher._activityGetter = _core2.default.utils.propertyEvaluator(fetchConfig.activity || 'activity');
	        this.reservationFetcher._resourceGetter = _core2.default.utils.propertyEvaluator(fetchConfig.resource || 'resource');
	      }
	
	      if (fetchConfig = config.constraints) {
	        this.constraintFetcher = new ftchClass(fetchConfig, ['from', 'to', 'type'], { gantt: this.gantt });
	        checkFetcher(this.constraintFetcher, 'constraints');
	        this.constraintFetcher._fromGetter = _core2.default.utils.propertyEvaluator(fetchConfig.from || 'from');
	        //noinspection JSUnresolvedVariable
	        this.constraintFetcher._toGetter = _core2.default.utils.propertyEvaluator(fetchConfig.to || 'to');
	        this.constraintFetcher._typeGetter = _core2.default.utils.propertyEvaluator(fetchConfig.type || 'type');
	        this.constraintFetcher._idGetter = fetchConfig.id && _core2.default.utils.propertyEvaluator(fetchConfig.id) || null;
	      }
	
	      if (fetchConfig = config.timeWindow) {
	        this.timeWindowFetcher = new ftchClass(fetchConfig, null, { gantt: this.gantt });
	        checkFetcher(this.timeWindowFetcher, 'timeWindow');
	        this.timeWindowFetcher._startGetter = makeTimeFct(_core2.default.utils.propertyEvaluator(fetchConfig.start || 'start'));
	        this.timeWindowFetcher._endGetter = makeTimeFct(_core2.default.utils.propertyEvaluator(fetchConfig.end || 'end'));
	      }
	    }
	  }, {
	    key: 'load',
	    value: function load(config) {
	      var _this3 = this;
	
	      if (config) {
	        this.destroy();
	        this.setConfiguration(config);
	      }
	
	      this.allData = null;
	      if (this.allFetcher) {
	        return this.allFetcher.get().then(function (data) {
	          return _this3.loadFromData(data);
	        });
	      }
	      return this.loadFromData();
	    }
	  }, {
	    key: 'loadFromData',
	    value: function loadFromData(data /* May be null */) {
	      var _this4 = this;
	
	      var actPromise = void 0,
	          resaPromise = void 0,
	          resourcePromise = void 0,
	          consPromise = void 0;
	      this.activities = [];
	      this.activities.byIds = {};
	      this.rows = [];
	      this.constraints = [];
	      this.constraints.byIds = {};
	      this.resources = [];
	      this.resources.byIds = {};
	      this.reservations = [];
	      this.reservations.byIds = {};
	      this.timeWindow = null;
	      this.flat = true;
	
	      var wnd = void 0,
	          wndPromise = void 0;
	      if (this.timeWindowFetcher) {
	        wndPromise = this.timeWindowFetcher.get(data).then(function (obj) {
	          return {
	            start: _this4.timeWindowFetcher._startGetter(obj),
	            end: _this4.timeWindowFetcher._endGetter(obj)
	          };
	        });
	      } else {
	        // If time window not provided with a specified data fetcher, we compute it.
	        wnd = { start: Number.MAX_VALUE, end: 0 } || null;
	      }
	
	      var resourceGantt = this.gantt.isResourceGantt();
	      if (!this.resourceFetcher && !this.activityFetcher) {
	        if (resourceGantt) resourcePromise = Promise.resolve([]);else actPromise = Promise.resolve([]);
	      } else {
	        var timeWindowProcessed = !!wndPromise;
	        if (this.resourceFetcher) {
	          resourcePromise = this.resourceFetcher.get(data).then(function (resources) {
	            // Compute here the time window only if this is resource chart with activities provided along with resources
	            var computeTimeWindow = !timeWindowProcessed && resourceGantt && _this4.resourceFetcher._activityGetter;
	            _this4.resources = _this4.createTreeNodes(resources, _this4.resourceFetcher, false, computeTimeWindow && wnd);
	            timeWindowProcessed = timeWindowProcessed || computeTimeWindow;
	            return _this4.resources;
	          });
	        }
	
	        if (this.activityFetcher && (!resourceGantt || !this.resourceFetcher || !this.resourceFetcher._activityGetter)) {
	          actPromise = this.activityFetcher.get(data).then(function (activities) {
	            // Compute here the time window only if a time window fetcher was not specified
	            _this4.activities = _this4.createTreeNodes(activities, _this4.activityFetcher, true, !timeWindowProcessed && wnd);
	            return _this4.activities;
	          });
	        }
	
	        if (this.reservationFetcher) {
	          resaPromise = this.reservationFetcher.get(data);
	        }
	
	        if (this.constraintFetcher) {
	          consPromise = this.constraintFetcher.get(data);
	        }
	      }
	
	      return Promise.all([resourcePromise, actPromise, resaPromise, consPromise, wndPromise]).then(function (_ref) {
	        var _ref2 = _slicedToArray(_ref, 5),
	            resources = _ref2[0],
	            activities = _ref2[1],
	            resas = _ref2[2],
	            cons = _ref2[3],
	            wndResult = _ref2[4];
	
	        // If assigning activities to resources through a resource ID getter on activities
	        if (_this4.activityFetcher && _this4.activityFetcher._resourceIdGetter) {
	          _this4.createReservationsFromActivityResources(resourceGantt ? _this4.resources.byIds : _this4.activities.byIds);
	        }
	        if (resas && resas.length) {
	          _this4.createReservations(resas);
	        }
	        if (cons && cons.length) {
	          _this4.createConstraints(cons);
	        }
	        wndResult = wndResult || wnd;
	        if (!wndResult.end && resourceGantt && activities && activities.length) {
	          // Gantt without reservations, process time window from unused activities
	          wndResult.start = activities[0].start;
	          wndResult.end = activities[0].end;
	          for (var i = activities.length - 1; i; i--) {
	            updateTimeWindow(wndResult, activities[i]);
	          }
	        }
	        if (wndResult.end) {
	          _this4.timeWindow = { start: wndResult.start, end: wndResult.end };
	          _this4.triggerEvent(_core2.default.events.TIME_WINDOW_CHANGED, _this4.timeWindow);
	        }
	        return _this4.rows = resourceGantt ? resources : activities;
	      });
	    }
	  }, {
	    key: 'createReservations',
	    value: function createReservations(data) {
	      this.reservations = [];
	      this.reservations.byIds = {};
	      if (!data || data.length === 0) {
	        return;
	      }
	      var resByIds = this.resources.byIds;
	      var actByIds = this.activities.byIds;
	      var resIdGetter = this.reservationFetcher._resourceGetter;
	      var actIdGetter = this.reservationFetcher._activityGetter;
	      for (var i = 0, resId, res, actId, act, len = data.length, resa; i < len; ++i) {
	        resa = data[i];
	        resId = resIdGetter(resa);
	        if ((resId || resId === 0) && (res = resByIds[resId])) {
	          actId = actIdGetter(resa);
	          if ((actId || actId === 0) && (act = actByIds[actId])) {
	            (res.activities || (res.activities = [])).push(resa = this.createReservationNode(act, res));
	            this.reservations.push(resa);
	            if (resa.id) {
	              this.reservations.byIds[resa.id] = resa;
	            }
	          } else if (actId) {
	            console.error('Cannot find activity "' + actId + '" for reservation ' + JSON.stringify(resa));
	          } else {
	            console.error('No activity specified for reservation ' + JSON.stringify(resa));
	          }
	        } else if (resId || resId === 0) {
	          console.error('Cannot find resource "' + resId + '" for reservation ' + JSON.stringify(resa));
	        } else {
	          console.error('No resource specified for reservation ' + JSON.stringify(resa));
	        }
	      }
	    }
	  }, {
	    key: 'createReservationsFromActivityResources',
	    value: function createReservationsFromActivityResources(rowByIds) {
	      var resGetter = this.activityFetcher._resourceIdGetter;
	      for (var i = 0, resId, res, len = this.activities.length, actNode; i < len; ++i) {
	        resId = resGetter((actNode = this.activities[i]).getData());
	        if (resId || resId === 0) {
	          if (res = rowByIds[resId]) {
	            (res.activities || (res.activities = [])).push(this.createReservationNode(actNode, res));
	          } else {
	            console.error('Cannot find resource "' + resId + '" for activity ' + JSON.stringify(actNode.getData()));
	          }
	        } else {
	          console.error('No resource specified for activity ' + JSON.stringify(actNode.getData()));
	        }
	      }
	    }
	  }, {
	    key: 'createConstraints',
	    value: function createConstraints(data) {
	      var len = data.length;
	      var consNodes = new Array(len);
	      consNodes.byIds = {};
	      for (var i = 0, node; i < len; ++i) {
	        consNodes[i] = node = this.createConstraintNode(data[i], this.activities, i);
	        consNodes.byIds[node.id] = node;
	      }
	      return this.constraints = consNodes;
	    }
	  }, {
	    key: 'isResourceGanttModel',
	    value: function isResourceGanttModel() {
	      return !!this.resourceFetcher;
	    }
	  }, {
	    key: 'isFlat',
	    value: function isFlat() {
	      return this.flat;
	    }
	  }, {
	    key: 'createActivityNode',
	    value: function createActivityNode(activity) {
	      var node = Object.create(activity);
	      node.id = this.activityFetcher._idGetter(activity);
	      node.name = this.activityFetcher._nameGetter(activity);
	      node.start = this.activityFetcher._startGetter(activity);
	      node.end = this.activityFetcher._endGetter(activity);
	      node.getData = function () {
	        return activity;
	      };
	      node.gantt = this.gantt;
	      node.getObjectType = function () {
	        return _core2.default.ObjectTypes.Activity;
	      };
	      return node;
	    }
	  }, {
	    key: 'createReservationNode',
	    value: function createReservationNode(activity, row) {
	      var node = Object.create(activity);
	      node.row = row;
	      node.gantt = this.gantt;
	      node.getObjectType = function () {
	        return _core2.default.ObjectTypes.Activity;
	      }; // No reservation type as for now an activity acts as a reservation as the copy objects points to a row
	      return node;
	    }
	  }, {
	    key: 'createConstraintNode',
	    value: function createConstraintNode(cons, activities, index) {
	      var id = this.constraintFetcher._fromGetter(cons);
	      if (!id) {
	        throw "No from activity specified for the constraint " + JSON.stringify(cons);
	      }
	      var from = activities.byIds[id];
	      if (!from) {
	        throw "No activity could be found with the ID " + id + "for constraint " + JSON.stringify(cons);
	      }
	
	      id = this.constraintFetcher._toGetter(cons);
	      if (!id) {
	        throw "No to activity specified for the constraint " + JSON.stringify(cons);
	      }
	      var to = activities.byIds[id];
	      if (!to) {
	        throw "No activity could be found with the ID " + id + "for constraint " + JSON.stringify(cons);
	      }
	      var node = Object.create(cons, ConstraintPrototype);
	      node.from = from;
	      node.to = to;
	      node.type = this.constraintFetcher._typeGetter(cons);
	      node.gantt = this.gantt;
	      node.getData = function () {
	        return cons;
	      };
	      node.id = this.constraintFetcher._idGetter ? this.constraintFetcher._idGetter(cons) : 'cons_' + index;
	      if (!from.consOuts) from.consOuts = [node];else from.consOuts.push(node);
	      if (!to.consIns) to.consIns = [node];else to.consIns.push(node);
	      node.getObjectType = function () {
	        return _core2.default.ObjectTypes.Constraint;
	      };
	      return node;
	    }
	  }, {
	    key: 'createTreeNode',
	    value: function createTreeNode(id, data) {
	      var row = Object.create(data);
	
	      row.id = id;
	      row.gantt = this.gantt;
	      row.getData = function () {
	        return data;
	      };
	      row.hasAncestor = function (node) {
	        for (var p = row.parent; p; p = p.parent) {
	          if (p == node) {
	            return true;
	          }
	        }
	        return true;
	      };
	
	      row.getAncestorsCount = function () {
	        var count = 0;
	        for (var parent = row.parent; parent; parent = parent.parent) {
	          count++;
	        }
	        return count;
	      };
	
	      row.setRowHeight = function (row, h) {};
	
	      row.isGanttRow = function () {
	        return true;
	      };
	      return row;
	    }
	  }, {
	    key: 'createTreeNodes',
	    value: function createTreeNodes(data, rowFetcher, isActivity, wnd) {
	      var result = new Array(data.length);
	      var byIds = result.byIds = {};
	      var children = {},
	          row,
	          origData,
	          parentId,
	          arr;
	      var i,
	          resultIndex,
	          id,
	          activities,
	          iAct,
	          len,
	          roots = [];
	
	      var allActivities = this.activities,
	          actNode = void 0,
	          startGetter = void 0,
	          endGetter = void 0,
	          actsGetter = void 0,
	          act = void 0;
	      if (isActivity || (actsGetter = rowFetcher._activityGetter)) {
	        startGetter = this.activityFetcher._startGetter;
	        endGetter = this.activityFetcher._endGetter;
	      }
	
	      /*function sortNodes(a, b) {
	        // Put child nodes with children first
	        const aChildren = children[a.id], bChildren = children[b.id];
	        return aChildren && aChildren.length
	            ? (bChildren && bChildren.length? 0 : -1) : (bChildren && bChildren.length? 1 : 0)
	      }*/
	
	      function addNode(node, parentNode) {
	        result[resultIndex++] = node;
	        node.parent = parentNode;
	        //const childNodes = children[node.id].sort(sortNodes);
	        var childNodes = children[node.id];
	        node.children = childNodes;
	        var childCount = childNodes.length;
	        for (var iChild = 0; iChild < childCount; ++iChild) {
	          addNode(childNodes[iChild], node);
	        }
	        if (isActivity && childCount && (!node.start || !node.end)) {
	          if (!node.start) {
	            node.start = childNodes[0].start;
	          }
	          if (!node.end) {
	            node.end = childNodes[0].end;
	          }
	          for (var _iChild = 1; _iChild < childCount; ++_iChild) {
	            updateTimeWindow(node, childNodes[_iChild]);
	          }
	        }
	        if (wnd && isActivity) {
	          updateTimeWindow(wnd, node);
	        }
	      }
	
	      var idGetter = rowFetcher._idGetter,
	          nameGetter = rowFetcher._nameGetter,
	          parentIdGetter = rowFetcher._parentIdGetter;
	
	      for (i = 0, len = data.length; i < len; ++i) {
	        origData = data[i];
	        parentId = parentIdGetter ? parentIdGetter(origData) : null;
	        id = idGetter(origData);
	        row = this.createTreeNode(id, origData, children[id]);
	        if (!children[id]) {
	          children[id] = [];
	        }
	        if (nameGetter) {
	          row.name = nameGetter(origData);
	        }
	        if (isActivity) {
	          row.start = rowFetcher._startGetter(origData);
	          row.end = rowFetcher._endGetter(origData);
	          row.activities = [row];
	          row.getObjectType = function () {
	            return _core2.default.ObjectTypes.Activity;
	          };
	        } else {
	          row.getObjectType = function () {
	            return _core2.default.ObjectTypes.Resource;
	          };
	        }
	
	        // Process the time window
	        if (wnd) {
	          if (!isActivity) {
	            activities = actsGetter(origData);
	            if (activities) {
	              row.activities = new Array(activities.length);
	              for (iAct = 0; iAct < activities.length; ++iAct) {
	                actNode = this.createActivityNode(act = activities[iAct]);
	                allActivities.push(actNode);
	                if (actNode.id) {
	                  allActivities.byIds[actNode.id] = actNode;
	                }
	                row.activities[iAct] = this.createReservationNode(updateTimeWindow(wnd, actNode), row);
	              }
	            } else {
	              row.activities = [];
	            }
	          } else {
	            // We are defining an activity chart, rows are activities
	            updateTimeWindow(wnd, row);
	          }
	        }
	        byIds[id] = row;
	        if (parentId || parentId === 0) {
	          arr = children[parentId];
	          if (!arr) {
	            children[parentId] = [row];
	          } else {
	            arr.push(row);
	          }
	        } else {
	          roots.push(row);
	        }
	      }
	      if (this.gantt.isResourceGantt() !== isActivity) {
	        this.flat = roots.length === data.length;
	      }
	      for (i = 0, len = roots.length, resultIndex = 0; i < len; ++i) {
	        addNode(roots[i]);
	      }
	
	      return result;
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      if (this.allFetcher && this.allFetcher.destroy) {
	        this.allFetcher.destroy();
	      }
	      this.allFetcher = null;
	      if (this.resourceFetcher && this.resourceFetcher.destroy) {
	        this.resourceFetcher.destroy();
	      }
	      this.resourceFetcher = null;
	      this.resources = null;
	
	      if (this.activityFetcher && this.activityFetcher.destroy) {
	        this.activityFetcher.destroy();
	      }
	      this.activityFetcher = null;
	      this.activities = null;
	
	      if (this.reservationFetcher && this.reservationFetcher.destroy) {
	        this.reservationFetcher.destroy();
	      }
	      this.reservationFetcher = null;
	      this.reservations = null;
	
	      if (this.constraintFetcher && this.constraintFetcher.destroy) {
	        this.constraintFetcher.destroy();
	      }
	      this.constraintFetcher = null;
	      this.constraints = null;
	
	      if (this.timeWindowFetcher && this.timeWindowFetcher.destroy) {
	        this.timeWindowFetcher.destroy();
	      }
	      this.timeWindowFetcher = null;
	      this.timeWindow = null;
	    }
	  }, {
	    key: 'getActivity',
	    value: function getActivity(param) {
	      if (_core2.default.utils.isString(param)) {
	        return this.activities && this.activities.byIds[param];
	      } else if (this.activities) {
	        for (var i = 0, count = this.activities.length; i < count; ++i) {
	          if (this.activities[i].getData() === param) {
	            return this.activities[i];
	          }
	        }
	      }
	      return null;
	    }
	  }]);
	
	  return GanttModel;
	}(_core2.default.components.GanttModel);
	
	exports.default = GanttModel;
	
	
	_core2.default.components.GanttModel = GanttModel;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _core = __webpack_require__(39);
	
	var _core2 = _interopRequireDefault(_core);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var START_SELECTION_METHOD = 'startSelection';
	var STOP_SELECTION_METHOD = 'stopSelection';
	var CLEAR_SELECTION_METHOD = 'clearSelection';
	
	var SELECTION_CHANGED_EVENT = 'SelectionChanged';
	var UNSELECT_EVENT = 'Unselected';
	var SELECT_EVENT = 'Selected';
	var CLEAR_SELECTION_EVENT = 'SelectionCleared';
	var START_SELECTING = 'StartSelecting';
	var STOP_SELECTING = 'StopSelecting';
	
	var Type = function () {
	    function Type(config) {
	        var _this = this;
	
	        _classCallCheck(this, Type);
	
	        _core2.default.utils.mergeObjects(this, config);
	        this[SELECTION_CHANGED_EVENT] = {
	            event: function event() {
	                return _this.getSelectionChangedEvent();
	            },
	            method: function method() {
	                return _this.getSelectionChangedMethod();
	            }
	        };
	        this[SELECT_EVENT] = {
	            event: function event() {
	                return _this.getSelectionEvent();
	            },
	            method: function method() {
	                return _this.getSelectionMethod();
	            }
	        };
	        this[UNSELECT_EVENT] = {
	            event: function event() {
	                return _this.getUnselectionEvent();
	            },
	            method: function method() {
	                return _this.getUnselectionMethod();
	            }
	        };
	        this[CLEAR_SELECTION_EVENT] = {
	            event: function event() {
	                return _this.getClearSelectionEvent();
	            },
	            method: function method() {
	                return _this.getClearSelectionMethod();
	            }
	        };
	    }
	
	    _createClass(Type, [{
	        key: 'accept',
	        value: function accept(obj) {
	            return false;
	        }
	    }, {
	        key: 'getTypeEvent',
	        value: function getTypeEvent(event) {
	            return this[event] && this[event].event();
	        }
	    }, {
	        key: 'getTypeMethod',
	        value: function getTypeMethod(method) {
	            return this.name + method;
	        }
	    }, {
	        key: 'notify',
	        value: function notify(o, event, params) {
	            var m = this[event] && this[event].method();
	            if (m = o[m]) {
	                m.apply(o, params);
	            }
	        }
	    }, {
	        key: 'getClearSelectionEvent',
	        value: function getClearSelectionEvent() {
	            return this.name + CLEAR_SELECTION_EVENT;
	        }
	    }, {
	        key: 'getClearSelectionMethod',
	        value: function getClearSelectionMethod() {
	            return this.clearSelectionMethod || this.getTypeMethod(SELECT_EVENT);
	        }
	    }, {
	        key: 'getSelectionEvent',
	        value: function getSelectionEvent() {
	            return this.name + SELECT_EVENT;
	        }
	    }, {
	        key: 'getSelectionMethod',
	        value: function getSelectionMethod() {
	            return this.selectionMethod || this.getTypeMethod(SELECT_EVENT);
	        }
	    }, {
	        key: 'getUnselectionEvent',
	        value: function getUnselectionEvent() {
	            return this.name + UNSELECT_EVENT;
	        }
	    }, {
	        key: 'getUnselectionMethod',
	        value: function getUnselectionMethod() {
	            return this.unselectionMethod || this.getTypeMethod(UNSELECT_EVENT);
	        }
	    }, {
	        key: 'getSelectionChangedEvent',
	        value: function getSelectionChangedEvent() {
	            return this.name + SELECTION_CHANGED_EVENT;
	        }
	    }, {
	        key: 'getSelectionChangedMethod',
	        value: function getSelectionChangedMethod() {
	            return this.selectionChangedMethod || this.getTypeMethod(SELECTION_CHANGED_EVENT);
	        }
	    }]);
	
	    return Type;
	}();
	
	var SelectionHandler = function (_Gantt$components$Sel) {
	    _inherits(SelectionHandler, _Gantt$components$Sel);
	
	    function SelectionHandler(config, proto) {
	        _classCallCheck(this, SelectionHandler);
	
	        var _this2 = _possibleConstructorReturn(this, (SelectionHandler.__proto__ || Object.getPrototypeOf(SelectionHandler)).call(this, config, proto));
	
	        _this2.lock = 0;
	        _this2.types = [];
	        _this2.genericType = new Type({ name: '' });
	        _this2.genericType[CLEAR_SELECTION_EVENT] = {
	            event: function event() {
	                return _core2.default.events.SELECTION_CLEARED;
	            },
	            method: function method() {
	                return CLEAR_SELECTION_METHOD;
	            }
	        };
	        _this2.genericType[START_SELECTING] = {
	            event: function event() {
	                return _core2.default.events.START_SELECTING;
	            },
	            method: function method() {
	                return START_SELECTION_METHOD;
	            }
	        };
	        _this2.genericType[STOP_SELECTING] = {
	            event: function event() {
	                return _core2.default.events.STOP_SELECTING;
	            },
	            method: function method() {
	                return STOP_SELECTION_METHOD;
	            }
	        };
	        return _this2;
	    }
	
	    /**
	     * @return {string}
	     */
	
	
	    _createClass(SelectionHandler, [{
	        key: 'setConfiguration',
	        value: function setConfiguration(config) {
	            this.config = config;
	            this.observers = [];
	            if (config) {
	                if (_core2.default.utils.isArray(config)) {
	                    for (var i = 0; i < config.length; i++) {
	                        this.addConfiguration(config[i]);
	                    }
	                } else {
	                    this.addConfiguration(config);
	                }
	            }
	        }
	    }, {
	        key: 'addConfiguration',
	        value: function addConfiguration(config) {
	            this.addObserver(config);
	        }
	    }, {
	        key: 'select',
	        value: function select(obj, clear, notActive) {
	            if (obj) {
	                this.startSelecting();
	                var objType = this.getObjectType(obj),
	                    selTypeChanged = this.selectionType !== objType;
	                if (this.selections.length && (clear || selTypeChanged)) {
	                    var oldType = this.selectionType;
	                    this.clear();
	                    if (selTypeChanged) {
	                        this.notify(oldType, SELECTION_CHANGED_EVENT, this.selections);
	                    }
	                }
	                this.selectionType = objType;
	                if (notActive && this.selections.length) {
	                    // Add the selections at the end of selections array so that the current active selection at
	                    // position zero remains active
	                    if (_core2.default.utils.isArray(obj)) {
	                        for (var i = 0, count = obj.length; i < count; ++i) {
	                            this.setObjectSelected(obj[i], true);
	                        }
	                        this.selections = this.selections.concat(obj);
	                    } else {
	                        this.setObjectSelected(obj, true);
	                        this.selections.push(obj);
	                    }
	                } else if (_core2.default.utils.isArray(obj)) {
	                    for (var _i = 0, _count = obj.length; _i < _count; ++_i) {
	                        this.setObjectSelected(obj[_i], true);
	                    }
	                    this.selections = obj.concat(this.selections);
	                } else {
	                    // obj becomes the new active selection
	                    this.setObjectSelected(obj, true);
	                    this.selections.unshift(obj);
	                }
	                if (this.selections.length) {
	                    this.notify(this.selectionType, SELECT_EVENT, this.selections, this.selections[0]);
	                }
	                this.stopSelecting();
	            }
	        }
	    }, {
	        key: 'unselect',
	        value: function unselect(obj) {
	            var _this3 = this;
	
	            if (obj) {
	                var selecting = false;
	                var uns = _core2.default.utils.isArray(obj) && obj || [obj],
	                    foundUns = [];
	                uns.map(function (o) {
	                    var index = _this3.selections.indexOf(obj);
	                    if (index >= 0) {
	                        if (!selecting) {
	                            _this3.startSelecting();
	                            selecting = true;
	                        }
	                        _this3.selections.splice(index, 1);
	                        _this3.setObjectSelected(obj, false);
	                        foundUns.push(obj);
	                    }
	                });
	                if (selecting) {
	                    this.notify(this.selectionType, UNSELECT_EVENT, foundUns);
	                    this.stopSelecting();
	                }
	            }
	        }
	    }, {
	        key: 'setObjectSelected',
	        value: function setObjectSelected(obj, selected) {}
	    }, {
	        key: 'clear',
	        value: function clear() {
	            if (this.selections.length) {
	                this.startSelecting();
	                var oldSelection = this.selections;
	                for (var i = 0, count = oldSelection && oldSelection.length || 0; i < count; ++i) {
	                    this.setObjectSelected(oldSelection[i], false);
	                }
	                this.selections = [];
	                this.notify(this.selectionType, CLEAR_SELECTION_EVENT, oldSelection);
	                this.notify(this.genericType, CLEAR_SELECTION_EVENT, oldSelection);
	                this.stopSelecting();
	            }
	        }
	    }, {
	        key: 'processClick',
	        value: function processClick(e, obj) {
	            if (obj) {
	                if (e.ctrlKey) {
	                    // toggle object selection.
	                    if (this.isSelected(obj)) {
	                        this.unselect(obj);
	                    } else {
	                        this.select(obj);
	                    }
	                } else {
	                    if (!this.isSelected(obj)) {
	                        this.select(obj, !e.shiftKey);
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'getObjectType',
	        value: function getObjectType(obj) {
	            for (var i = 0, count = this.types.length; i < count; ++i) {
	                if (this.types[i].accept(obj)) return this.types[i];
	            }
	            return null;
	        }
	    }, {
	        key: 'startSelecting',
	        value: function startSelecting() {
	            if (++this.lock === 1) {
	                this.notify(this.genericType, START_SELECTING);
	            }
	        }
	    }, {
	        key: 'stopSelecting',
	        value: function stopSelecting() {
	            if (! --this.lock) {
	                this.notify(this.genericType, STOP_SELECTING);
	                if (this.selectionType) {
	                    this.notify(this.selectionType, SELECTION_CHANGED_EVENT, this.selections, this.selections.length ? this.selections[0] : null);
	                }
	            }
	        }
	
	        //
	        // Notify selection observers
	        //
	
	    }, {
	        key: 'notify',
	        value: function notify(type, event) {
	            var typeEvent = type.getTypeEvent(event);
	
	            for (var _len = arguments.length, params = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	                params[_key - 2] = arguments[_key];
	            }
	
	            if (typeEvent) {
	                this.triggerEvent(true /* Specify 3rd parameter is an array of parameters */, typeEvent, params);
	            }
	            for (var i = 0, o; i < this.observers.length; i++) {
	                o = this.observers[i];
	                type.notify(o, event, params);
	            }
	        }
	
	        /*notifyObserver(type, event, ...params) {
	            for(let i = 0, o, m; i < this.observers.length; i++) {
	                o = this.observers[i];
	                type.notify(o, event, params);
	            }
	        }*/
	
	    }, {
	        key: 'addObserver',
	        value: function addObserver(o) {
	            this.observers.push(o);
	        }
	    }, {
	        key: 'removeObserver',
	        value: function removeObserver(o) {
	            var index = this.observers.indexOf(o);
	            if (index >= 0) {
	                this.observers.splice(index, 1);
	                return 0;
	            }
	            return null;
	        }
	
	        //
	        // Object types
	        //
	
	    }, {
	        key: 'registerType',
	        value: function registerType(type) {
	            type = new Type(type);
	            this.types.push(type);
	            return type;
	        }
	    }], [{
	        key: 'SELECTION_CHANGED_EVENT',
	        get: function get() {
	            return SELECTION_CHANGED_EVENT;
	        }
	
	        /**
	         * @return {string}
	         */
	
	    }, {
	        key: 'UNSELECT_EVENT',
	        get: function get() {
	            return UNSELECT_EVENT;
	        }
	
	        /**
	         * @return {string}
	         */
	
	    }, {
	        key: 'SELECT_EVENT',
	        get: function get() {
	            return SELECT_EVENT;
	        }
	
	        /**
	         * @return {string}
	         */
	
	    }, {
	        key: 'CLEAR_SELECTION_EVENT',
	        get: function get() {
	            return CLEAR_SELECTION_EVENT;
	        }
	    }]);
	
	    return SelectionHandler;
	}(_core2.default.components.SelectionHandler);
	
	exports.default = SelectionHandler;
	
	
	_core2.default.components.SelectionHandler.impl = SelectionHandler;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _core = __webpack_require__(39);
	
	var _core2 = _interopRequireDefault(_core);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function sameBounds(rect1, rect2) {
	    if (!rect1 || !rect2) {
	        return !rect1 == !rect2;
	    }
	    return rect1.x === rect2.x && rect1.y === rect2.y && rect1.width === rect2.width && rect1.height === rect2.height;
	}
	
	function bounds(x, y, width, height) {
	    return {
	        x: x, y: y, width: width, height: height,
	        toString: function toString() {
	            return "{ x = " + this.x + ", y = " + this.y + ", width = " + this.width + ", height = " + this.height + " }";
	        }
	    };
	}
	
	var LayoutSynchronizer = function (_Gantt$components$Lay) {
	    _inherits(LayoutSynchronizer, _Gantt$components$Lay);
	
	    function LayoutSynchronizer(config, proto) {
	        _classCallCheck(this, LayoutSynchronizer);
	
	        var _this = _possibleConstructorReturn(this, (LayoutSynchronizer.__proto__ || Object.getPrototypeOf(LayoutSynchronizer)).call(this, config, config));
	
	        _this.timeTableBounds = null;
	        return _this;
	    }
	
	    _createClass(LayoutSynchronizer, [{
	        key: 'setConfiguration',
	        value: function setConfiguration(config) {
	            if (config) {
	                _core2.default.utils.mergeObjects(this, config);
	            }
	        }
	    }, {
	        key: 'connect',
	        value: function connect(gantt) {
	            var _this2 = this;
	
	            this.gantt = gantt;
	            this.resizeHandler = function (e) {
	                _this2.checkBounds();
	            };
	            gantt.on([_core2.default.events.RESIZED, _core2.default.events.SPLIT_RESIZED], this.resizeHandler);
	
	            this.timeWindowChangeListener = function (e, start, end) {
	                _this2.timeWindowChanged(start, end);
	            };
	            gantt.on(_core2.default.events.TIME_WINDOW_CHANGED, this.timeWindowChangeListener);
	
	            this.timeLineSizeListener = function (e, width, height) {
	                _this2.timeLineSizeChanged(width, height);
	            };
	            gantt.on(_core2.default.events.TIME_LINE_SIZE_CHANGED, this.timeLineSizeListener);
	
	            this.timeLineInitializedListener = function (e) {
	                _this2.timeLineInitialized();
	            };
	            gantt.on(_core2.default.events.TIME_LINE_INIT, this.timeLineInitializedListener);
	
	            this.timeLineScrollListener = function (e, x) {
	                _this2.timeLineScrolled(x);
	            };
	            gantt.on(_core2.default.events.TIME_LINE_SCROLLED, this.timeLineScrollListener);
	        }
	    }, {
	        key: 'convertBounds',
	        value: function convertBounds(bounds, elt) {
	            var parent = _core2.default.utils.offsetParent(elt);
	            var parentBounds = _core2.default.utils.getScreenPoint(parent);
	            parentBounds.x = bounds.x - parentBounds.x;
	            parentBounds.y = bounds.y - parentBounds.y;
	            parentBounds.width = bounds.width;
	            parentBounds.height = bounds.height;
	            return parentBounds;
	        }
	
	        //
	        // Time line methods
	        //
	
	    }, {
	        key: 'getTimeLine',
	        value: function getTimeLine() {
	            return this.gantt.timeLine;
	        }
	    }, {
	        key: 'getTimeLineWidth',
	        value: function getTimeLineWidth() {
	            return this.gantt.timeLine.getWidth();
	        }
	    }, {
	        key: 'getTimeLineHeight',
	        value: function getTimeLineHeight() {
	            return this.gantt.timeLine.getTimeAxisHeight();
	        }
	    }, {
	        key: 'getTimeLineScrollLeft',
	        value: function getTimeLineScrollLeft() {
	            return this.gantt.timeTable.getScroller().scrollLeft;
	        }
	    }, {
	        key: 'getTimeAt',
	        value: function getTimeAt(x) {
	            return this.gantt.timeLine.getTimeAt(x);
	        }
	    }, {
	        key: 'timeLineInitialized',
	        value: function timeLineInitialized() {}
	    }, {
	        key: 'timeTableBoundsChanged',
	        value: function timeTableBoundsChanged(bounds) {}
	    }, {
	        key: 'timeWindowChanged',
	        value: function timeWindowChanged(start, end) {}
	    }, {
	        key: 'timeLineSizeChanged',
	        value: function timeLineSizeChanged(width, height) {}
	    }, {
	        key: 'timeLineScrolled',
	        value: function timeLineScrolled(x) {}
	    }, {
	        key: 'checkBounds',
	        value: function checkBounds() {
	            var newBounds = this.getScreenTimeTableScrollerBounds();
	            if (newBounds) {
	                if (!sameBounds(this.timeTableBounds, newBounds)) {
	                    this.timeTableBounds = newBounds;
	                    this.timeTableBoundsChanged(newBounds);
	                }
	            }
	        }
	    }, {
	        key: 'getScreenTimeTableScrollerBounds',
	        value: function getScreenTimeTableScrollerBounds() {
	            if (!this.gantt.timeTable) {
	                // Called from first cycle of the Gantt initialization
	                return null;
	            }
	            var timeTableScroller = this.gantt.timeTable.getScroller();
	            var pt = _core2.default.utils.getScreenPoint(timeTableScroller);
	            return bounds(pt.x, pt.y, this.gantt.timeTable.getVisibleWidth(), this.gantt.timeTable.getVisibleHeight());
	        }
	    }, {
	        key: 'disconnect',
	        value: function disconnect() {
	            if (this.gantt) {
	                this.gantt.off([_core2.default.events.RESIZED, _core2.default.events.SPLIT_RESIZED], this.resizeHandler);
	                this.gantt.off(_core2.default.events.TIME_WINDOW_CHANGED, this.timeWindowChangeListener);
	                this.gantt.off(_core2.default.events.TIME_LINE_SIZE_CHANGED, this.timeLineSizeListener);
	                this.gantt.off(_core2.default.events.TIME_LINE_INIT, this.timeLineInitializedListener);
	                this.gantt.off(_core2.default.events.TIME_LINE_SCROLLED, this.timeLineScrollListener);
	            }
	        }
	    }, {
	        key: 'destroy',
	        value: function destroy() {}
	    }]);
	
	    return LayoutSynchronizer;
	}(_core2.default.components.LayoutSynchronizer);
	
	exports.default = LayoutSynchronizer;
	
	
	_core2.default.components.LayoutSynchronizer.impl = LayoutSynchronizer;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _core = __webpack_require__(39);
	
	var _core2 = _interopRequireDefault(_core);
	
	__webpack_require__(45);
	
	__webpack_require__(46);
	
	__webpack_require__(47);
	
	__webpack_require__(48);
	
	__webpack_require__(49);
	
	__webpack_require__(50);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * Gantt panel is structured as follows:
	 *
	 * <pre>
	 *   .gantt-panel
	 *   ------------------------------------------------------------------------------------------------------------
	 *   | Split pane                                                                                               |
	 *   | -------------------------------------------------------------------------------------------------------- |
	 *   | | .table-panel      | .time-panel                                                                      | |
	 *   | | ----------------- | -------------------------------------------------------------------------------  | |
	 *   | | | Table         | | | .time-line-scroller                            .vertical-scroller-filler     | | |
	 *   | | | ------------- | | | --------------------------------------------   ----------------------------  | | |
	 *   | | | | Header    | | | | | Time Line                                |   |                          |  | | |
	 *   | | | ------------- | | | --------------------------------------------   ----------------------------  | | |
	 *   | | |               | | |                                                                              | | |
	 *   | | |               | | | .time-table-scroller                                                         | | |
	 *   | | | ------------- | | | ---------------------------------------------------------------------------  | | |
	 *   | | | | Body    ^ | | | | | Time Table                                                            ^^ | | | |
	 *   | | | |         : | | | | |< .............. timeTableWidthTester ...................................>| | | |
	 *   | | | |         : | | | | |                                                                       :: | | | |
	 *   | | | |         : | | | | |                                                 timeTableHeightTester :: | | | |
	 *   | | | |         : | | | | |                                                                       :: | | | |
	 *   | | | |         : | | | | |                                                                       v: | | | |
	 *   | | ------------:-- | | ---------------------------------------------------------------------------:-- | | |
	 *   | --------------:----------------------------------------------------------------------------------:------ |
	 *   ----------------:----------------------------------------------------------------------------------:--------
	 *                   :                                                                                  :
	 *                   : Matches height of .time-table-body                              .time-table-body :
	 *                   v                                                                                  v
	 * </pre>
	 */
	var GanttPanel = function (_Gantt$components$Gan) {
	  _inherits(GanttPanel, _Gantt$components$Gan);
	
	  function GanttPanel(node, config) {
	    _classCallCheck(this, GanttPanel);
	
	    var _this = _possibleConstructorReturn(this, (GanttPanel.__proto__ || Object.getPrototypeOf(GanttPanel)).call(this, node, config));
	
	    _this.resizeHandler = function () {
	      return _this.onResize();
	    };
	    _core2.default.envReady().then(function () {
	      return _this.setConfiguration(config);
	    });
	    return _this;
	  }
	
	  _createClass(GanttPanel, [{
	    key: 'setConfiguration',
	    value: function setConfiguration(config) {
	      var _this2 = this;
	
	      if (this.splitPane) {
	        this.destroy();
	      }
	
	      this.initializing = true;
	      window.addEventListener('resize', this.resizeHandler);
	
	      this.config = _core2.default.utils.mergeObjects({}, _core2.default.defaultConfiguration, config);
	
	      //TODO
	      this.rowHeight = this.config.rowHeight;
	      this.zoomFactor = this.config.zoomFactor;
	
	      if (this.tooltip && this.tooltip.destroy) {
	        this.tooltip.destroy();
	      }
	      var tooltipClazz = _core2.default.components.Tooltip.impl || _core2.default.components.Tooltip;
	      this.tooltip = new tooltipClazz(this.config.tooltip);
	
	      if (this.config.title) {
	        if (_core2.default.utils.isFunction(this.config.title)) {
	          this.title = this.config.title(this);
	        } else {
	          this.title = this.config.title;
	        }
	      } else this.title = null;
	
	      var stringMatcher = _core2.default.utils.stringMatches;
	      var filterClazz = _core2.default.components.Filter.impl || _core2.default.components.Filter;
	      this.rowFilter = _core2.default.utils.mergeObjects(new filterClazz(this.config && this.config.rows && this.config.rows.filter), {
	        stringMatches: function stringMatches(string, pattern) {
	          return stringMatcher(string, pattern);
	        },
	        getObjectFilterMethodName: function getObjectFilterMethodName() {
	          return 'acceptRow';
	        },
	        acceptString: function acceptString(row, columnData, rowIndex, text) {
	          if (!text) {
	            return true;
	          }
	          for (var col = 0; col < columnData.length; col++) {
	            if (stringMatcher(columnData[col], text)) {
	              return true;
	            }
	          }
	          return false;
	        }
	      });
	      this.activityFilter = _core2.default.utils.mergeObjects(new filterClazz(this.config && this.config.tasks && this.config.tasks.filter), {
	        stringMatches: function stringMatches(string, pattern) {
	          return stringMatcher(string, pattern);
	        },
	        getObjectFilterMethodName: function getObjectFilterMethodName() {
	          return 'acceptTask';
	        },
	        acceptString: function acceptString(activity, row, text) {
	          var actName = activity.name;
	          return !text || actName && stringMatcher(actName, text);
	        }
	      });
	      if (this.config.table && this.config.table.hideEmptyRows) {
	        this.setHideEmptyRows(true, true);
	      }
	
	      if (this.config.palette) {
	        this.setPaletteConfiguration(this.config.palette);
	      } else {
	        this.palettes = {};
	        this.defaultPalette = null;
	      }
	
	      var selectionClazz = _core2.default.components.SelectionHandler.impl || _core2.default.components.SelectionHandler;
	      this.selectionHandler = new selectionClazz(this.config && this.config.selection, {
	        setObjectSelected: function setObjectSelected(obj, selected) {
	          if (selected) {
	            obj.selected = true;
	          } else {
	            delete obj.selected;
	          }
	        }
	      });
	      var actType = this.selectionHandler.registerType({ name: 'activity', accept: function accept(o) {
	          return o.getObjectType() === _core2.default.ObjectTypes.Activity;
	        },
	        clearSelectionMethod: 'clearActivitySelection', selectionChangedMethod: 'activitySelectionChanged',
	        unselectionMethod: 'unselectActivities', selectionMethod: 'selectActivities' });
	      var resType = this.selectionHandler.registerType({ name: 'resource', accept: function accept(o) {
	          return o.getObjectType() === _core2.default.ObjectTypes.Resource;
	        },
	        clearSelectionMethod: 'clearResourceSelection', selectionChangedMethod: 'resourceSelectionChanged',
	        unselectionMethod: 'unselectResources', selectionMethod: 'selectResources' });
	      this.selectionHandler.registerType({ name: 'constraint', accept: function accept(o) {
	          return o.getObjectType() === _core2.default.ObjectTypes.Constraint;
	        },
	        clearSelectionMethod: 'clearConstraintSelection', selectionChangedMethod: 'constraintSelectionChanged',
	        unselectionMethod: 'unselectConstraints', selectionMethod: 'selectConstraints' });
	      this.selectionHandler.registerType({ name: 'reservation', accept: function accept(o) {
	          return o.getObjectType() === _core2.default.ObjectTypes.Reservation;
	        },
	        clearSelectionMethod: 'clearReservationSelection', selectionChangedMethod: 'reservationSelectionChanged',
	        unselectionMethod: 'unselectReservations', selectionMethod: 'selectReservations' });
	      var rowType = this.selectionHandler.registerType({ name: 'row',
	        clearSelectionMethod: 'clearRowSelection', selectionChangedMethod: 'rowSelectionChanged',
	        unselectionMethod: 'unselectRows', selectionMethod: 'selectRows' });
	
	      this.type = config && config.type || _core2.default.type.SCHEDULE_CHART;
	      var rc = this.isResourceGantt();
	      this.selectionHandler.on(rc && _core2.default.events.RESOURCE_SELECTED || _core2.default.events.ACTIVITY_SELECTED, function (e, sels) {
	        return _this2.selectionHandler.triggerEvent(_core2.default.events.ROW_SELECTED, sels);
	      });
	      this.selectionHandler.on(rc && _core2.default.events.RESOURCE_UNSELECTED || _core2.default.events.ACTIVITY_UNSELECTED, function (e, sels) {
	        return _this2.selectionHandler.triggerEvent(_core2.default.events.ROW_UNSELECTED, sels);
	      });
	      this.selectionHandler.on(rc && _core2.default.events.RESOURCE_SELECTION_CHANGED || _core2.default.events.ACTIVITY_SELECTION_CHANGED, function (e, sels) {
	        return _this2.selectionHandler.triggerEvent(_core2.default.events.ROW_SELECTION_CHANGED, sels);
	      });
	      this.selectionHandler.on(rc && _core2.default.events.RESOURCE_SELECTION_CLEARED || _core2.default.events.ACTIVITY_SELECTION_CLEARED, function (e, sels) {
	        return _this2.selectionHandler.triggerEvent(_core2.default.events.ROW_SELECTION_CLEARED, sels);
	      });
	      // Selection of objects that are rows for the Gantt chart (activities or resources) must generate row specific events
	      var typeForRow = rc ? resType : actType;
	      var defaultNotify = this.selectionHandler.notify;
	      var handler = this.selectionHandler;
	      this.selectionHandler.notify = function (type, event) {
	        var args = new Array(arguments.length);
	        for (var i = 0; i < arguments.length; i++) {
	          args[i] = arguments[i];
	        }
	        defaultNotify.apply(handler, args);
	        if (type === typeForRow) {
	          args[0] = rowType;
	          defaultNotify.apply(handler, args);
	        }
	      };
	
	      var errorClass = _core2.default.components.ErrorHandler.impl || _core2.default.components.ErrorHandler;
	      this.errorHandler = new errorClass(this.node, this.config && this.config.error);
	
	      this.updates = new (_core2.default.components.GanttUpdates.impl || _core2.default.components.GanttUpdates)();
	      var oldApplyUpdates = this.updates.applyUpdates;
	      this.updates.applyUpdates = function () {
	        var containsRowChanges = _this2.updates.containsRowChanges;
	        oldApplyUpdates.call(_this2.updates);
	        if (containsRowChanges) {
	          // Time sheet scroller height depends on the height of the time sheet displays rows.
	          // Call updateScrollerHeight without modifying the time sheet rows first has no effect
	          _this2.updateScrollerHeight();
	        }
	        if (_this2.updates.hasTableScrollYChanged()) {
	          var table = _this2.table && _this2.table.getScrollableTable();
	          var scrollTop = table.scrollTop;
	          _this2.timeTable.setScrollTop(scrollTop);
	        }
	      };
	
	      this.model = null;
	      // Create the Gantt
	      try {
	        this.create();
	      } catch (err) {
	        // Error already display in the Gantt
	        return this._init = Promise.reject(err);
	      }
	
	      try {
	        // Constructs the model, not loading it yet
	        // Load data if specified in the configuration
	        this.model = this.createModel(this.config.data || this.createDefaultModelConfig());
	        this.initializing = false;
	        this.triggerEvent(_core2.default.events.RESIZED);
	        return this._init = this.model && this.load() || Promise.resolve([]).then(function () {
	          return _this2.updateScrollerHeight();
	        });
	      } catch (err) {
	        this.errorHandler.addError(err, "Error initializing the Gantt");
	      }
	    }
	  }, {
	    key: 'createDefaultModelConfig',
	    value: function createDefaultModelConfig(config) {
	      return {
	        resources: { data: [] },
	        activities: { data: [] },
	        reservations: { data: [] }
	      };
	    }
	  }, {
	    key: 'createModel',
	    value: function createModel(config) {
	      var _this3 = this;
	
	      var modelClass = _core2.default.components.GanttModel.impl || _core2.default.components.GanttModel;
	      var model = new modelClass(this, config);
	      model.on(_core2.default.events.TIME_WINDOW_CHANGED, function (event, wnd) {
	        return _this3.setTimeWindow(wnd);
	      });
	      return model;
	    }
	  }, {
	    key: 'create',
	    value: function create() {
	      var _this4 = this;
	
	      this.contentElt = document.createElement('div');
	      this.contentElt.className = 'gantt-panel docloud-gantt';
	      this.contentElt.style.position = 'relative';
	      this.contentElt.style.display = 'flex';
	      this.contentElt.style.flexDirection = 'column';
	      this.contentElt.style.height = '100%';
	
	      var getLoadConfig = function getLoadConfig(p) {
	        var c = _this4.config.loadResourceChart;
	        return _core2.default.utils.isArray(c) ? c.length ? c[0][p] : undefined : c[p];
	      };
	      this.loadChartHidden = !this.config.loadResourceChart || !getLoadConfig('visible');
	
	      this.toolbars = null;
	      if (this.config.toolbar) {
	        this.createToolbars(this.config.toolbar);
	      } else {
	        this.toolbarElt = null;
	      }
	
	      if (this.config.classes) {
	        _core2.default.utils.addClass(this.contentElt, this.config.classes);
	      }
	      if (this.config.header) {
	        this.headerElt = this.createHeader(this.config.header);
	        if (this.headerElt != null) {
	          this.contentElt.appendChild(this.headerElt);
	        }
	      } else {
	        this.headerElt = null;
	      }
	
	      this.node.appendChild(this.contentElt);
	
	      var bodyElt = this.body = document.createElement('div');
	      bodyElt.className = 'gantt-body';
	      bodyElt.style.position = 'relative'; // Position must be set for the child split pane to get its offsetTop relative to it and have the tooltips positioning work...
	      bodyElt.style.flexGrow = 1;
	      bodyElt.style.flexShrink = 1;
	      // Impressive hack: the flex layout does not manage well resizing of components of height initially to zero!
	      bodyElt.style.height = '10px';
	      this.errorHandler.node = bodyElt;
	      this.contentElt.appendChild(bodyElt); // Need to be added here for the split pane to be created in a element in the DOM
	
	      var bodyCtnr = void 0;
	      var splitClass = _core2.default.components.Split.impl || _core2.default.components.Split;
	      if (this.config.loadResourceChart) {
	        var _getLoadConfig = function _getLoadConfig(p) {
	          var c = _this4.config.loadResourceChart;
	          return _core2.default.utils.isArray(c) ? c.length ? c[0][p] : undefined : c[p];
	        };
	        var h = 150,
	            hConfig = _getLoadConfig('height');
	        if (hConfig) {
	          if (_core2.default.utils.isFunction(hConfig)) {
	            h = hConfig();
	          } else if (_core2.default.utils.isString(hConfig)) {
	            h = parseInt(hConfig);
	          } else {
	            h = hConfig;
	          }
	        }
	        try {
	          this.loadChartSplit = new splitClass(bodyElt, _core2.default.utils.mergeObjects({}, this.config && this.config.divider, { pos: -h, horizontal: false, fixedFirst: false, hideSecond: this.loadChartHidden }));
	          this.loadChartSplit.onDividerDragEnd = function (e) {
	            if (_this4._init) {
	              _this4._init.then(function () {
	                _this4.triggerEvent(_core2.default.events.SPLIT_RESIZED);
	                _this4.onResize();
	              });
	            }
	          };
	        } catch (err) {
	          this.errorHandler.addError(err, "Load split pane initialization error", this.node);
	          throw new Error("Load split pane initialization error");
	        }
	        bodyCtnr = this.loadChartSplit.getLeftComponent();
	      } else bodyCtnr = bodyElt;
	      try {
	        this.splitPane = new splitClass(bodyCtnr, this.config && this.config.divider);
	        this.splitPane.onresized = function (e) {
	          _this4.triggerEvent(_core2.default.events.SPLIT_RESIZED);
	        };
	      } catch (err) {
	        this.errorHandler.addError(err, "Split pane initialization error", this.node);
	        throw new Error("Split pane initialization error");
	      }
	
	      // Initialize table panel
	      this.tablePanel = null;
	      var leftComp = this.splitPane.getLeftComponent();
	      leftComp.style.overflow = 'hidden';
	      try {
	        this.tablePanel = this.createTreeTable(leftComp);
	        // A non-zero width component has been created in the left component part of the split pane, we can now
	        // fix the split position
	        this.splitPane.leftComponentCreated();
	      } catch (err) {
	        this.errorHandler.addError(err, "Tree table initialization error", this.tablePanel || this.node);
	        throw new Error("Table creation error");
	      }
	
	      // Initialize the time panel
	      var rightPanel = this.splitPane.getRightComponent();
	      rightPanel.style.overflow = 'hidden';
	      try {
	        this.createTimePanel(rightPanel);
	      } catch (err) {
	        this.errorHandler.addError(err, "Error creating the time panel", rightPanel);
	        throw new Error("Time panel creation error");
	      }
	      try {
	        this.createTimeLine(this.timeLineScroller);
	      } catch (err) {
	        this.errorHandler.addError(err, "Error create the time line", this.timeLineScroller);
	        throw new Error("Time line creation error");
	      }
	
	      if (this.toolbars) {
	        for (var i = 0; i < this.toolbars.length; i++) {
	          this.toolbars[i].connect(this, this.toolbars[i].node);
	        }
	      }
	
	      // Initialize the load resource chart if any
	      this.loadCharts = null;
	      this.loadResPanel = null;
	      if (this.config.loadResourceChart) {
	        this.loadResPanel = this.createLoadResourceChart(this.config.loadResourceChart);
	        if (this.loadResPanel) {
	          // Both width and height to 100% for IE
	          this.loadResPanel.style.width = '100%';
	          this.loadResPanel.style.height = '100%';
	          this.loadChartSplit.getRightComponent().appendChild(this.loadResPanel);
	          this.loadChartSplit.rightComponentCreated();
	        }
	      }
	    }
	  }, {
	    key: 'load',
	    value: function load(config) {
	      var _this5 = this;
	
	      if (config) {
	        if (this.model && this.model.destroy) {
	          this.model.destroy();
	        }
	        this.model = this.createModel(config);
	      }
	      this.timeLineInit = null;
	
	      //Loading panel
	      this.loadingPanel = null;
	      var loadTimeout = setTimeout(function () {
	        _this5.loadingPanel = _this5.createLoadingPanel(_this5.config);
	        _this5.body.appendChild(_this5.loadingPanel);
	      }, this.config.loadingPanelThresold);
	      var stopLoading = function stopLoading() {
	        if (!_this5.loadingPanel) {
	          clearTimeout(loadTimeout);
	        } else {
	          _this5.body.removeChild(_this5.loadingPanel);
	        }
	        _this5.loading = false;
	      };
	
	      return this.model.load().then(function (rows) {
	        var wnd = _this5.getTimeWindow();
	        if (!wnd || !wnd.start) {
	          if (!rows.length) {
	            // Empty Gantt, this is ok
	            var today = new Date().getTime(),
	                day = 1000 * 3600 * 24;
	            _this5.setTimeWindow({ start: today - day * 2, end: today + day * 2 });
	          } else {
	            stopLoading();
	            return Promise.reject("No time window defined");
	          }
	        }
	        _this5.loading = true;
	        _this5.startUpdating();
	        _this5._resourceGantt = _this5.isResourceGantt();
	        _core2.default.utils.toggleClass(_this5.contentElt, 'schedule_chart', _this5._resourceGantt);
	        _core2.default.utils.toggleClass(_this5.contentElt, 'activity_chart', !_this5._resourceGantt);
	        _core2.default.utils.toggleClass(_this5.contentElt, 'constraints_chart', _this5.hasConstraints);
	        return Promise.all([
	        // Promise.all can be given non-promises as the parameter.
	        // See example in https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
	        _this5.table.setRows(rows) || rows, _this5.timeLineInit || rows]).then(function () {
	          stopLoading();
	          // After table is initialized and time line ready with accurate time window
	          // We can update the time table
	
	          _this5.triggerEvent(_core2.default.events.DATA_LOADED, rows);
	          _this5.timeTable.setConstraints(_this5.model.constraints);
	          _this5.updates.timeTable.reload();
	          _this5.stopUpdating();
	          if (_this5.toobars) {
	            _this5.toolbars.map(function (bar) {
	              bar.ganttLoaded(_this5, rows);
	            });
	          }
	          return rows;
	        });
	      }).catch(function (err) {
	        stopLoading();
	        _this5.errorHandler.addError(err, "Loading error", _this5.tablePanel);
	        return Promise.reject(err);
	      });
	    }
	  }, {
	    key: 'isResourceGantt',
	    value: function isResourceGantt() {
	      return !this.type || this.type !== _core2.default.type.ACTIVITY_CHART;
	    }
	  }, {
	    key: 'hasConstraints',
	    value: function hasConstraints() {
	      return this.model && this.model.constraints && this.model.constraints.length;
	    }
	  }, {
	    key: 'isFlat',
	    value: function isFlat() {
	      return !this.model || this.model.isFlat();
	    }
	  }, {
	    key: 'getTimeWindow',
	    value: function getTimeWindow() {
	      return this.timeWindow;
	    }
	  }, {
	    key: 'setTimeWindow',
	    value: function setTimeWindow(_ref) {
	      var _this6 = this;
	
	      var start = _ref.start,
	          end = _ref.end;
	
	      if (end === 0) {
	        throw new Error("Invalid time window + " + JSON.stringify({ start: start, end: end }) + ", may not have been processed correctly");
	      }
	      if (this.timeWindow && this.timeWindow.start == start && this.timeWindow.end == end) {
	        return Promise.resolve(this.timeWindow);
	      }
	      this.timeWindow = { start: start, end: end };
	      return this.timeLineInit = this.timeLine.setTimeWindow(start, end).then(function (_ref2) {
	        var start = _ref2.start,
	            end = _ref2.end;
	
	        _this6.updateTableHeaderHeight();
	        _this6.updateWidthFromTimeLine();
	        _this6.scrollTimeTableToX(_this6.timeLine.getXFromMillis(_this6.timeLine.getHorizon().start));
	        _this6.updateTimeLineHeight();
	        _this6.triggerEvent(_core2.default.events.TIME_WINDOW_CHANGED, start, end);
	      });
	    }
	  }, {
	    key: 'getBody',
	    value: function getBody() {
	      return this.body;
	    }
	  }, {
	    key: 'initialized',
	    value: function initialized() {
	      return this._init;
	    }
	
	    //noinspection JSUnusedLocalSymbols
	
	  }, {
	    key: 'createTreeTable',
	    value: function createTreeTable(ctnr) {
	      // Initialize table panel
	      var tablePanel = document.createElement('div');
	      tablePanel.className = 'table-panel';
	      tablePanel.style.position = 'relative';
	      tablePanel.style.height = '100%';
	      tablePanel.style.width = '100%';
	      tablePanel.style.overflow = 'hidden';
	      // If not setting the min width, the table width would be zero while data being loaded and
	      // the split pane would not able to set its split position.
	      tablePanel.style.minWidth = '100px';
	
	      var clazz = _core2.default.components.TreeTable.impl || _core2.default.components.TreeTable;
	      this.table = new clazz(this, tablePanel, this.config.table);
	      this.table.setRowFilter(this.rowFilter);
	      this.updates.table = this.table.createUpdates(this.updates);
	      ctnr.appendChild(tablePanel);
	      return tablePanel;
	    }
	
	    //noinspection JSUnusedLocalSymbols
	
	  }, {
	    key: 'createTimePanel',
	    value: function createTimePanel(ctnr) {
	      var _this7 = this;
	
	      this.timePanel = document.createElement('div');
	      this.timePanel.className = 'time-panel';
	      // CSS layout
	      this.timePanel.style.position = 'relative';
	      this.timePanel.style.height = '100%';
	
	      // Create the time right panel
	      var vScrollerFiller = document.createElement('div');
	      vScrollerFiller.className = 'vertical-scroller-filler';
	      // CSS layout
	      vScrollerFiller.style.position = 'absolute';
	      vScrollerFiller.style.right = 0;
	      vScrollerFiller.top = 0;
	      this.timePanel.appendChild(vScrollerFiller);
	      this.updateTimeLineRightMargin = function () {
	        var rightMargin = _this7.timeTable.getRightMargin();
	        _this7.timeLineScroller.style.paddingRight = rightMargin ? '' + rightMargin + 'px' : '0';
	        vScrollerFiller.style.width = _this7.timeLineScroller.style.paddingRight;
	        vScrollerFiller.style.display = rightMargin ? 'block' : 'none';
	      };
	
	      this.updateTableHeaderHeight = function (force) {
	        if (!_this7.initializing && _this7.timeLine) {
	          // Timeline is created after first resize events are fired
	          var h = _this7.timeLine.getTimeAxisHeight();
	          if (force || _this7.headersHeight != h) {
	            _this7.headersHeight = h;
	            _this7.table.setHeaderHeight(h);
	            if (h) {
	              _this7.timeTablePanel.style.top = vScrollerFiller.style.height = h + 'px';
	            }
	          }
	        }
	      };
	
	      this.timeLineScroller = document.createElement('div');
	      this.timeLineScroller.className = 'time-line-scroller';
	      this.timeLineScroller.style.overflow = 'hidden';
	      this.timeLineScroller.style.width = '100%';
	      this.timeLineScroller.style.height = '100%';
	
	      this.timePanel.appendChild(this.timeLineScroller);
	
	      this.timeTablePanel = document.createElement('div');
	      this.timeTablePanel.className = 'time-table';
	      // CSS layout
	      this.timeTablePanel.style.position = 'absolute';
	      this.timeTablePanel.style.left = '0';
	      this.timeTablePanel.style.right = '0';
	      this.timeTablePanel.style.bottom = '0';
	
	      this.timePanel.appendChild(this.timeTablePanel);
	
	      var clazz = _core2.default.components.TimeTable.impl || _core2.default.components.TimeTable;
	      this.timeTable = new clazz(this, this.timeTablePanel, this.config && this.config.timeTable);
	      this.updates.timeTable = this.timeTable.createUpdates(this.updates);
	      this.attachTimeTableMouseWheel(this.timeTable.getScroller());
	      this.timeTable.getScroller().addEventListener('scroll', function (e) {
	        _this7.timeLineScroller.scrollLeft = e.target.scrollLeft;
	        _this7.triggerEvent(_core2.default.events.TIME_LINE_SCROLLED, e.target.scrollLeft);
	      });
	      ctnr.appendChild(this.timePanel);
	      return this.timePanel;
	    }
	  }, {
	    key: 'drawTimeTable',
	    value: function drawTimeTable(clear) {
	      if (clear && this.table.deleteDrawCache) {
	        this.table.deleteDrawCache();
	      }
	      this.timeTable.draw(clear);
	    }
	  }, {
	    key: 'createLoadingPanel',
	    value: function createLoadingPanel(config) {
	      var lp = document.createElement('div');
	      lp.className = 'loading-panel';
	      lp.style.position = 'absolute';
	      lp.style.left = '0';
	      lp.style.right = '0';
	      lp.style.top = '0';
	      lp.style.bottom = '0';
	      lp.style.display = 'flex';
	      lp.style.alignItems = 'center';
	      lp.style.justifyContent = 'center';
	
	      var loaderCtnr = document.createElement('div');
	      loaderCtnr.style.position = 'absolute';
	      loaderCtnr.style.left = '50%';
	      loaderCtnr.style.top = '50%';
	      loaderCtnr.style.transform = 'translate(-50%, -50%)';
	
	      var loader = document.createElement('div');
	      loader.className = 'loader';
	      loaderCtnr.appendChild(loader);
	      lp.appendChild(loaderCtnr);
	
	      var label = document.createElement('div');
	      label.className = 'label';
	      label.appendChild(document.createTextNode(_core2.default.utils.getString('gantt.loading')));
	      lp.appendChild(label);
	      return lp;
	    }
	  }, {
	    key: 'createLoadResourceChart',
	    value: function createLoadResourceChart(config) {
	      var _this8 = this;
	
	      var loadChartNode = void 0;
	      var chartPanel = void 0;
	      (_core2.default.utils.isArray(config) && config.length && _core2.default.utils.isArray(config[0]) ? config : [config]).map(function (loadConfig) {
	        // Construct the bar node
	        if (!chartPanel) {
	          chartPanel = document.createElement('div');
	          chartPanel.className = 'load-resource-chart-panel';
	          chartPanel.style.flexShrink = 0;
	          chartPanel.style.position = 'relative';
	          // IE specific
	          chartPanel.style.display = 'flex';
	          chartPanel.style.flexDirection = 'columm';
	        }
	        loadChartNode = document.createElement('div');
	        loadChartNode.className = 'load-resource-chart';
	        chartPanel.appendChild(loadChartNode);
	        if (!_this8.loadCharts) {
	          _this8.loadCharts = [];
	        }
	        var loadChart = new (_core2.default.components.LoadResourceChart.impl || _core2.default.components.LoadResourceChart)(_this8, loadChartNode, _core2.default.utils.mergeObjects({}, loadConfig, { height: '' }));
	        loadChart.node.style.flex = '1 1';
	        _this8.loadCharts.push(loadChart);
	        window.addWheelListener(loadChart.getScroller(), function (evt) {
	          evt.preventDefault();
	        });
	      });
	
	      return chartPanel;
	    }
	  }, {
	    key: 'toggleLoadChartVisible',
	    value: function toggleLoadChartVisible() {
	      this.setLoadChartVisible(!this.isLoadChartVisible());
	    }
	  }, {
	    key: 'setLoadChartVisible',
	    value: function setLoadChartVisible(visible) {
	      this.loadChartHidden = !visible;
	      this.loadChartSplit.setRightComponentVisible(visible);
	      this.onResize();
	    }
	  }, {
	    key: 'isLoadChartVisible',
	    value: function isLoadChartVisible() {
	      return !this.loadChartHidden;
	    }
	  }, {
	    key: 'getPanelNode',
	    value: function getPanelNode() {
	      return this.contentElt;
	    }
	  }, {
	    key: 'updateTimeLineHeight',
	    value: function updateTimeLineHeight() {
	      var bottomMargin = this.timeTable.getBottomMargin();
	      this.timeLineScroller.style.paddingBottom = bottomMargin ? '' + bottomMargin + 'px' : '0';
	    }
	  }, {
	    key: 'attachTimeTableMouseWheel',
	    value: function attachTimeTableMouseWheel(scroller) {
	      var _this9 = this;
	
	      window.addWheelListener(scroller, function (evt) {
	        if (evt.ctrlKey && evt.deltaY != 0) {
	          if (evt.deltaY < 0) {
	            _this9.zoomIn(evt);
	          } else {
	            _this9.zoomOut(evt);
	          }
	          evt.preventDefault();
	        }
	      });
	    }
	
	    //noinspection JSUnusedLocalSymbols
	
	  }, {
	    key: 'createTimeLine',
	    value: function createTimeLine(timeLineCtnr) {
	      var _this10 = this;
	
	      var clazz = _core2.default.components.TimeLine.impl || _core2.default.components.TimeLine;
	      this.timeLine = new clazz(this, timeLineCtnr, this.config);
	      this.timeLine.on([_core2.default.events.TIME_LINE_RANGE_CHANGE, _core2.default.events.TIME_LINE_RANGE_CHANGED, _core2.default.events.TIME_LINE_PAN_MOVED], function () {
	        _this10.updateTableHeaderHeight();
	        _this10.updateWidthFromTimeLine();
	        _this10.drawTimeTable(true);
	      });
	      this.timeLine.on(_core2.default.events.TIME_LINE_SIZE_CHANGED, function (e, w, h) {
	        _this10.updateWidthFromTimeLine();
	        _this10.drawTimeTable(true);
	        _this10.triggerEvent(_core2.default.events.TIME_LINE_SIZE_CHANGED, w, h);
	      });
	      this.timeLine.on(_core2.default.events.TIME_LINE_INIT, function (e) {
	        _this10.triggerEvent(_core2.default.events.TIME_LINE_INIT);
	      });
	      return this.timeLine;
	    }
	  }, {
	    key: 'createToolbars',
	    value: function createToolbars(config) {
	      var _this11 = this;
	
	      this.toolbars = [];
	      var ToolbarClass = _core2.default.components.Toolbar.impl || _core2.default.components.Toolbar;
	      var toolbarNode = void 0;
	      this.toolbarElt = null;
	      (_core2.default.utils.isArray(config) && config.length && _core2.default.utils.isArray(config[0]) ? config : [config]).map(function (barConfig) {
	        if (barConfig.node) {
	          if (_core2.default.utils.isString(barConfig.node)) {
	            toolbarNode = document.getElementById(barConfig.node);
	          } else if (_core2.default.utils.isDomElement(node)) {
	            toolbarNode = node;
	          } else if (_core2.default.utils.isFunction(barConfig.node)) {
	            toolbarNode = barConfig.node(_this11);
	          } else {
	            throw new Error('The toolbar.node must be a string(Dom element ID) or a Dom element or a function returning a Dom element');
	          }
	          barConfig = barConfig.components;
	        } else {
	          // Construct the bar node
	          if (!_this11.toolbarElt) {
	            _this11.toolbarElt = document.createElement('div');
	            _this11.toolbarElt.className = 'gantt-toolbars';
	            _this11.toolbarElt.style.flexShrink = 0;
	          }
	          toolbarNode = document.createElement('div');
	          toolbarNode.className = 'gantt-toolbar';
	          _this11.toolbarElt.appendChild(toolbarNode);
	        }
	        _this11.toolbars.push(new ToolbarClass(_this11, toolbarNode, barConfig));
	      });
	
	      if (this.toolbarElt) {
	        this.contentElt.appendChild(this.toolbarElt);
	      }
	      // Wait for all toolbar components to be created before triggering onInitialized as components can refer to each others
	      this.toolbars.forEach(function (t) {
	        t.onInitialized();
	      });
	      return this.toolbarElt;
	    }
	  }, {
	    key: 'createHeader',
	    value: function createHeader(config) {
	      var header = document.createElement('div');
	      header.className = 'gantt-header';
	      if (_core2.default.utils.isString(config)) {
	        header.appendChild(document.createTextNode(config));
	      } else if (_core2.default.utils.isFunction(config)) {
	        var _node = config(this);
	        if (_node) {
	          header.appendChild(_node);
	        }
	      }
	      return header;
	    }
	  }, {
	    key: 'getRowCount',
	    value: function getRowCount() {
	      return this.table.getRowCount();
	    }
	  }, {
	    key: 'getRow',
	    value: function getRow(param) {
	      return this.table.getRow(param);
	    }
	  }, {
	    key: 'getVisibleRows',
	    value: function getVisibleRows() {
	      return this.table.getVisibleRows();
	    }
	  }, {
	    key: 'getVisibleHeight',
	    value: function getVisibleHeight() {
	      return this.timeTable.getVisibleHeight();
	    }
	  }, {
	    key: 'ensureRowVisible',
	    value: function ensureRowVisible(param) {
	      var row = this.table.getRow(param);
	      if (!row) {
	        throw new Error("Cannot find row for " + param);
	      }
	      if (this.table.isRowFiltered(row)) {
	        throw new Error("Cannot show the filtered row: " + param);
	      }
	      this.table.expandParents(row);
	      this.timeTable.scrollToRow(row);
	    }
	  }, {
	    key: 'isRowVisible',
	    value: function isRowVisible(param) {
	      return this.table.isRowVisible(param);
	    }
	  }, {
	    key: 'getFirstVisibleRow',
	    value: function getFirstVisibleRow() {
	      return this.table.getFirstVisibleRow();
	    }
	  }, {
	    key: 'setFirstVisibleRow',
	    value: function setFirstVisibleRow(param) {
	      this.timeTable.setFirstVisibleRow(this.getRow(param));
	    }
	  }, {
	    key: 'isRowFiltered',
	    value: function isRowFiltered(param) {
	      return this.table.isRowFiltered(param);
	    }
	  }, {
	    key: 'toggleCollapseRow',
	    value: function toggleCollapseRow(param, collapse) {
	      this.table.toggleCollapseRow(this.getRow(param), collapse);
	    }
	  }, {
	    key: 'scrollToY',
	    value: function scrollToY(y) {
	      this.timeTable.scrollToY(y);
	    }
	  }, {
	    key: 'getRowHeight',
	    value: function getRowHeight(row) {
	      row = this.getRow(row);
	      return row && (row.activityRow ? row.activityRow.height : row.tr.offsetHeight);
	    }
	  }, {
	    key: 'draw',
	    value: function draw(forceTableRedraw) {
	      this.timeLine.draw(true);
	      if (this.table.deleteDrawCache) {
	        this.table.deleteDrawCache();
	      }
	      this.table.draw(forceTableRedraw);
	      this.timeTable.draw();
	      this.updateScrollerHeight();
	    }
	  }, {
	    key: 'updateScrollerHeight',
	    value: function updateScrollerHeight() {
	      this.timeTable.setBodyHeight(this.loadOnDemand ? this.table.getRowCount() * this.getRowHeight() : this.table.getHeight());
	      this.updateTimeLineRightMargin();
	    }
	  }, {
	    key: 'getRowActivities',
	    value: function getRowActivities(row) {
	      row = this.getRow(row);
	      return row && row.activities || [];
	    }
	  }, {
	    key: 'getActivity',
	    value: function getActivity(param, row) {
	      if (row) {
	        var acts = this.getRowActivities(row);
	        if (_core2.default.utils.isString(param)) {
	          for (var i = 0, count = acts.length; i < count; ++i) {
	            if (acts[i].id === param) {
	              return acts[i];
	            }
	          }
	        } else if (_core2.default.utils.isInteger(param)) {
	          return acts[param];
	        } else {
	          for (var _i = 0, _count = acts.length; _i < _count; ++_i) {
	            if (acts[_i].getData() === param) {
	              return acts[_i];
	            }
	          }
	        }
	      } else {
	        return this.model.getActivity(param);
	      }
	    }
	  }, {
	    key: 'getActivityNode',
	    value: function getActivityNode(param, res) {
	      var activity = this.getActivity(param, res);
	      return activity && activity.node;
	    }
	  }, {
	    key: 'getToolbarComponent',
	    value: function getToolbarComponent(id) {
	      for (var i = 0; i < this.toolbars.length; i++) {
	        for (var j = 0; j < this.toolbars[i].components.length; j++) {
	          var c = this.toolbars[i].components[j];
	          if (c && id === c.id) {
	            return c;
	          }
	        }
	      }
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	      if (this.timeLine && this.timeLine.onResize) {
	        this.timeLine.onResize();
	      }
	      if (this.updateTimeLineRightMargin) {
	        this.updateTimeLineRightMargin();
	      }
	      if (this.table && this.table.onResize) {
	        this.table.onResize();
	      }
	      if (this.updateTableHeaderHeight && this.timeLine) {
	        this.updateTableHeaderHeight(true);
	      }
	      if (this.table) {
	        this.triggerEvent(_core2.default.events.RESIZED);
	      }
	      if (this.timeTable && this.timeTable.onResize) {
	        this.timeTable.onResize();
	      }
	      this.updateScrollerHeight();
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      _core2.default.plugins.call('destroy', this);
	      if (this.errorHandler && this.errorHandler.destroy) {
	        this.errorHandler.destroy();
	      }
	
	      if (this.splitPane && this.splitPane.destroy) {
	        this.splitPane.destroy();
	      }
	
	      if (this.table && this.table.destroy) {
	        this.table.destroy();
	      }
	
	      if (this.model && this.model.destroy) {
	        this.model.destroy();
	      }
	
	      if (this.resizeHandler) {
	        window.removeEventListener('resize', this.resizeHandler);
	        this.resizeHandler = null;
	      }
	
	      if (this.updates) {
	        this.updates.destroy();
	      }
	
	      if (this.toolbars) {
	        this.toolbars.map(function (bar) {
	          bar.destroy();
	        });
	
	        this.toobars = null;
	      }
	
	      while (this.node.firstChild) {
	        this.node.removeChild(this.node.firstChild);
	      }
	
	      this.contentElt = null;
	      this.table = null;
	      this.body = null;
	    }
	  }, {
	    key: 'disconnect',
	    value: function disconnect() {}
	
	    /*             */
	    /*     Rows    */
	    /*             */
	
	  }, {
	    key: 'highlightRow',
	    value: function highlightRow(row, highlight, deselectAll) {
	      if (typeof row === 'string') {
	        row = this.table.getRow(row);
	      }
	      highlight = highlight === undefined || highlight;
	      this.table.highlightRow(row, highlight, deselectAll);
	      this.timeTable.highlightRow(row, highlight, deselectAll);
	    }
	
	    /*                */
	    /*   Selection    */
	    /*                */
	
	  }, {
	    key: 'synchLayout',
	
	
	    /*                         */
	    /*   Layout synchronizer   */
	    /*                         */
	    value: function synchLayout(config) {
	      var ls = new (_core2.default.components.LayoutSynchronizer.impl || _core2.default.components.LayoutSynchronizer)(config);
	      ls.connect(this);
	      return ls;
	    }
	
	    /*             */
	    /*     Zoom    */
	    /*             */
	
	  }, {
	    key: 'resetZoom',
	    value: function resetZoom() {
	      this.timeLine.resetZoom();
	      this.scrollTimeTableToX(this.timeLine.getXFromMillis(this.timeLine.getHorizon().start));
	    }
	  }, {
	    key: 'zoomIn',
	    value: function zoomIn(evt) {
	      this.zoom(this.zoomFactor, evt);
	    }
	  }, {
	    key: 'zoomOut',
	    value: function zoomOut(evt) {
	      this.zoom(-this.zoomFactor, evt);
	    }
	  }, {
	    key: 'zoom',
	    value: function zoom(zoomFactor, evt) {
	      zoomFactor = this.timeLine.validateZoomFactor(zoomFactor);
	      if (zoomFactor != 0) {
	        var visibleW = this.timeTable.getVisibleWidth();
	        // When zooming, we want to keep the same time coordinate under the mouse, if mousewheel event is provided as a parameter.
	        var xRef = evt && this.getTimeTableCoordinates(evt.target, { x: evt.offsetX, y: evt.offsetY }).x || this.timeTable.getScrollLeft() + visibleW / 2;
	        var timeRef = this.timeLine.getTimeAt(xRef);
	        xRef -= this.timeTable.getScrollLeft();
	
	        this.timeLine.zoom(zoomFactor);
	
	        var newScrollLeft = this.timeLine.getXFromMillis(timeRef) - xRef;
	        this.scrollTimeTableToX(newScrollLeft);
	      }
	    }
	  }, {
	    key: 'fitToContent',
	    value: function fitToContent() {
	      var timeRange = this.timeTable.getDisplayedActivitiesTimeRange();
	      this.timeLine.setVisibleTimeWindow(timeRange);
	      this.scrollTimeTableToX(this.timeLine.getXFromMillis(timeRange && timeRange.start || this.timeLine.getHorizon().start));
	    }
	  }, {
	    key: 'updateScrollFromTimeLine',
	    value: function updateScrollFromTimeLine() {}
	  }, {
	    key: 'updateWidthFromTimeLine',
	    value: function updateWidthFromTimeLine() {
	      this.timeTable.setBodyWidth(this.timeLine.getWidth());
	    }
	
	    /*                        */
	    /*    Search and filter   */
	    /*                        */
	
	  }, {
	    key: 'addFilter',
	    value: function addFilter(filter, rows, activities) {
	      var result = { activities: activities && this.activityFilter.addFilter(filter) };
	      var actFilter = result.activities;
	      if (rows) {
	        //noinspection JSUnusedLocalSymbols
	        result.row = actFilter ? this.rowFilter.addOrFilters(filter, function (row, columnData, rowIndex) {
	          var count = row.activities.length,
	              params = [null, row];
	          for (var i = 0; i < count; i++) {
	            params[0] = row.activities[i];
	            if (actFilter(params)) {
	              return true;
	            }
	          }
	          return false;
	        }) : this.rowFilter.addFilter(filter);
	      }
	      if (result.row || result.activities) {
	        this.filterChanged();
	        return result;
	      }
	      return null;
	    }
	  }, {
	    key: 'removeFilter',
	    value: function removeFilter(key, preventNotify) {
	      var success = false;
	      if (key) {
	        if (key.row) {
	          success = this.rowFilter.removeFilter(key.row);
	        }
	        if (key.activities) {
	          success = this.activityFilter.removeFilter(key.activities);
	        }
	        if (this.searchFilter == key) {
	          this.searchFilter = null;
	        }
	      }
	      if (success && !preventNotify) {
	        this.filterChanged();
	      }
	      return success;
	    }
	  }, {
	    key: 'search',
	    value: function search(text, rows, activities) {
	      if (this.searchFilter) {
	        if (this.searchFilter.row) {
	          this.rowFilter.removeFilter(this.searchFilter.row);
	        }
	        if (this.searchFilter.activities) {
	          this.activityFilter.removeFilter(this.searchFilter.activities);
	        }
	      }
	      if (text && (rows || activities)) {
	        this.searchFilter = this.addFilter(text, rows, activities);
	      } else {
	        this.searchFilter = null;
	        this.filterChanged();
	      }
	    }
	  }, {
	    key: 'setHideEmptyRows',
	    value: function setHideEmptyRows(hide, preventNotify) {
	      var _this12 = this;
	
	      if (hide && !this.hideEmptyRowsFilter || !hide && this.hideEmptyRowsFilter) {
	        if (this.hideEmptyRowsFilter) {
	          this.rowFilter.removeFilter(this.hideEmptyRowsFilter);
	          this.hideEmptyRowsFilter = null;
	        } else {
	          //noinspection JSUnusedLocalSymbols
	          this.hideEmptyRowsFilter = this.rowFilter.addFilter(function (row, columnData, rowIndex) {
	            var activityFilter = _this12.activityFilter;
	            activityFilter = activityFilter && !activityFilter.isEmpty() ? activityFilter : null;
	            var count = row.activities && row.activities.length;
	            if (!count || !activityFilter) {
	              return count;
	            }
	            for (var i = 0; i < count; i++) {
	              if (activityFilter.accept(row.activities[i], row)) {
	                return true;
	              }
	            }
	            return false;
	          });
	        }
	        if (!preventNotify) {
	          this.filterChanged();
	        }
	        return true;
	      }
	      return false;
	    }
	  }, {
	    key: 'filterChanged',
	    value: function filterChanged() {
	      if (this.table && this.timeTable) {
	        this.table.filterChanged();
	        var table = this.table && this.table.getScrollableTable();
	        this.updateScrollerHeight();
	        var scrollTop = table.scrollTop;
	        this.timeTable.setScrollTop(scrollTop);
	        this.drawTimeTable(true);
	        this.triggerEvent(_core2.default.events.ROWS_FILTERED);
	      }
	    }
	
	    /*             */
	    /*     Title   */
	    /*             */
	
	  }, {
	    key: 'getTitle',
	    value: function getTitle() {
	      return this.title;
	    }
	  }, {
	    key: 'setTitle',
	    value: function setTitle(title) {
	      this.title = title;
	      this.triggerEvent(_core2.default.events.TITLE_CHANGED, title);
	    }
	
	    /*                */
	    /*   Row colors   */
	    /*                */
	
	  }, {
	    key: 'setRowColor',
	    value: function setRowColor(row, color) {
	      row.color = color;
	      if (this.table.setRowColor) {
	        this.table.setRowColor(row, color);
	      }
	      if (this.timeTable.setRowColor) {
	        this.timeTable.setRowColor(row, color);
	      }
	    }
	
	    /*             */
	    /*     Utils   */
	    /*             */
	
	    //noinspection JSUnusedGlobalSymbols
	
	  }, {
	    key: 'centerTimeSheetOnX',
	    value: function centerTimeSheetOnX(x) {
	      this.scrollTimeTableToX(x - this.timeTable.getVisibleWidth() / 2);
	    }
	  }, {
	    key: 'scrollTimeTableToX',
	    value: function scrollTimeTableToX(x) {
	      x = Math.min(Math.max(Math.round(x), 0), this.timeTable.getBodyWidth() - this.timeTable.getVisibleWidth());
	      this.timeTable.setScrollLeft(x);
	      if (this.loadCharts && this.loadCharts.length) {
	        this.loadCharts.forEach(function (lc) {
	          return lc.getScroller().scrollLeft = x;
	        });
	      }
	      this.triggerEvent(_core2.default.events.TIME_LINE_SCROLLED, x);
	    }
	  }, {
	    key: 'getTimeTableCoordinates',
	    value: function getTimeTableCoordinates(target, position) {
	      var _this13 = this;
	
	      return _core2.default.utils.walkToAncestor([this.timeTable.getScroller(), this.timeLineScroller], target, function (parent, node, position) {
	        if (parent == _this13.timeLineScroller) {
	          position.x += _this13.timeTable.getScrollLeft();
	        } else if (parent == _this13.timeTable.getScroller()) {
	          return position;
	        }
	        return { x: position.x + node.offsetLeft - parent.scrollLeft, y: position.y + node.offsetTop - parent.scrollTop };
	      }, { x: position && position.x || 0, y: position && position.y || 0 });
	    }
	  }, {
	    key: 'addTimeMarker',
	    value: function addTimeMarker(id, time, classes) {
	      this.timeLine.addTimeMarker(id, time, classes);
	    }
	  }, {
	    key: 'removeTimeMarker',
	    value: function removeTimeMarker(id) {
	      this.timeLine.removeTimeMarker(id);
	    }
	  }, {
	    key: 'setTimeLineItem',
	    value: function setTimeLineItem(id, item) {
	      this.timeLine.setTimeLineItem(id, item);
	    }
	  }, {
	    key: 'addTimeLineItem',
	    value: function addTimeLineItem(id, item) {
	      this.timeLine.addTimeLineItem(id, item);
	    }
	  }, {
	    key: 'removeTimeLineItem',
	    value: function removeTimeLineItem(id) {
	      this.timeLine.removeTimeLineItem(id);
	    }
	
	    /*             */
	    /*    Errors   */
	    /*             */
	
	  }, {
	    key: 'hasErrors',
	    value: function hasErrors() {
	      return this.errorHandler.hasErrors();
	    }
	
	    /*             */
	    /*   Palettes  */
	    /*             */
	
	  }, {
	    key: 'setPaletteConfiguration',
	    value: function setPaletteConfiguration(config) {
	      if (_core2.default.utils.isArray(config) || _core2.default.utils.isFunction(config)) {
	        this.palettes = null;
	        this.defaultPalette = new (_core2.default.components.Palette.impl || _core2.default.components.Palette)(config);
	      } else if (_core2.default.utils.isString(config)) {
	        this.palettes = null;
	        this.defaultPalette = _core2.default.defaultPalettes[config];
	        if (!this.defaultPalette) {
	          console.error("Palette [" + config + "] does not exist");
	        }
	      } else {
	        var paletteNames = Object.keys(config);
	        this.palettes = {};
	        this.defaultPalette = null;
	        for (var i = 0, count = paletteNames.length; i < count; ++i) {
	          this.palettes[paletteNames[i]] = new (_core2.default.components.Palette.impl || _core2.default.components.Palette)(config[paletteNames[i]]);
	        }
	      }
	    }
	  }, {
	    key: 'getPalette',
	    value: function getPalette(name) {
	      if (!name) {
	        return this.defaultPalette || _core2.default.defaultPaletteName && _core2.default.defaultPalettes[_core2.default.defaultPaletteName];
	      }
	      return this.palettes && this.palettes[name] || _core2.default.defaultPalettes[name];
	    }
	
	    /*             */
	    /*   Updates   */
	    /*             */
	
	  }, {
	    key: 'startUpdating',
	    value: function startUpdating() {
	      this.updates.startUpdating();
	    }
	  }, {
	    key: 'stopUpdating',
	    value: function stopUpdating() {
	      if (this.updates.stopUpdating()) {}
	    }
	  }, {
	    key: 'rowsChanged',
	    value: function rowsChanged(event, rows) {
	      this.updates.startUpdating();
	      this.triggerEvent(event, rows);
	      this.updates.rowsChanged(event, rows);
	      this.updates.stopUpdating();
	    }
	  }, {
	    key: 'selection',
	    get: function get() {
	      return this.selectionHandler;
	    },
	    set: function set(sel) {
	      var currentSel = this.selectionHandler && this.selectionHandler.get();
	      if (this.selectionHandler) {
	        this.selectionHandler.destroy();
	      }
	      this.selectionHandler = sel;
	      if (this.selectionHandler) {
	        if (currentSel && currentSel.length) {
	          this.selectionHandler.select(sel);
	        }
	      }
	    }
	  }]);
	
	  return GanttPanel;
	}(_core2.default.components.GanttPanel);
	
	_core2.default.components.GanttPanel.impl = GanttPanel;
	
	exports.default = GanttPanel;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _core = __webpack_require__(39);
	
	var _core2 = _interopRequireDefault(_core);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var GanttStrings = {
	  "Gantt.MoveActivity": "Move \"{name}\"",
	  "Gantt.ChangeActivityRow": "Change \"{name}\" of row",
	  "timeLine.changeRowItem.fmt": '<div class="dragg-item-content"><h2 class="dragg-title">{title}</h2><table>' + '<tr><td class="dragg-item-property">From row</td><td class="table-separator"></td><td class="dragg-item-value">{start}</td></tr>' + '<tr><td class="dragg-item-property">At date</td><td class="table-separator"></td><td class="dragg-item-value">{startRow}</td></tr>' + '<tr><td class="dragg-item-property">To row</td><td class="table-separator"></td><td class="dragg-item-value">{current}</td></tr>' + '<tr><td class="dragg-item-property">At date</td><td class="table-separator"></td><td class="dragg-item-value">{currentRow}</td></tr>' + '</table></div>',
	  "timeLine.newTimeItem.fmt": '<div class="dragg-item-content"><h2 class="dragg-title {draggStatusClass}">{title}</h2><table>' + '<tr><td class="dragg-item-property">From</td><td class="table-separator"></td><td class="dragg-item-value">{start}</td></tr>' + '<tr><td class="dragg-item-property">To</td><td class="table-separator"></td><td class="dragg-item-value">{current}</td></tr>' + '</table></div>',
	  'gantt.loading': 'Loading',
	  'gantt.error.details': 'Details',
	  'gantt.error.title.fmt': '{msg} : {title}',
	  'gantt.toolbar.mini.text': 'Mini',
	  'gantt.toolbar.minimize.text': 'Compact',
	  'gantt.toolbar.normal.text': 'Normal',
	  'gantt.toolbar.mini.tooltip': 'Change row height',
	  'gantt.toolbar.fit.tooltip': 'Fit',
	  'gantt.toolbar.refresh.text': 'Refresh',
	  'gantt.toolbar.refresh.tooltip': 'Refresh',
	  'gantt.toolbar.zoomIn.tooltip': 'Zoom In',
	  'gantt.toolbar.zoomOut.tooltip': 'Zoom Out',
	  'gantt.loadResourceChart.load.title': 'Load',
	  'gantt.loadResourceChart.show.tooltip': 'Show Load chart',
	  'gantt.loadResourceChart.hide.tooltip': 'Hide Load chart',
	  'gantt.loadResourceChart.noSelection.title': 'Select one or more resources to display in the load chart',
	  'gantt.constraintChart.from': 'From',
	  'gantt.constraintChart.to': 'To',
	  'gantt.constraintChart.type': 'Type',
	  'gantt.constraintChart.start.start': 'Start to Start',
	  'gantt.constraintChart.start.end': 'End to Start',
	  'gantt.constraintChart.end.end': 'End to End',
	  'gantt.constraintChart.end.start': 'End to Start',
	  'gantt.name': 'Name',
	  'gantt.id': 'Id',
	  'gantt.start': 'Start',
	  'gantt.end': 'End'
	};
	
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
	Number.isInteger = Number.isInteger || function (value) {
	  return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
	};
	
	_core2.default.utils = {
	  defaultDateFormat: "mmm d, hh:MM:ss TT",
	
	  createDateParser: function createDateParser(format) {
	    var i = 0,
	        fmt = {};
	    var year = 'year',
	        month = 'month',
	        day = 'day',
	        hour = 'hour',
	        min = 'min',
	        secs = 'secs',
	        millis = 'millis';
	    var convertor = {
	      yyyy: year, yy: year, y: year,
	      M: month, MM: month, MMMM: month,
	      d: day, dd: day,
	      H: hour, HH: hour,
	      m: min, mm: min,
	      s: secs, ss: secs,
	      S: millis, SS: millis, SSS: millis
	    };
	    format.replace(/(yyyy|yy|y|MMMM|MM|M|dd|d|HH|H|mm|m|ss|s|SSS|SS|S)/g, function (part) {
	      fmt[convertor[part]] = i++;
	    });
	    return function (s) {
	      if (!s) return 0;
	      var parts = s.match(/(\d+)/g);
	      return new Date(parts[fmt[year]], parts[fmt[month]] - 1, parts[fmt[day]], parts[fmt[hour]], parts[fmt[min]], parts[fmt[secs]]).getTime();
	    };
	  },
	
	  closest: function closest(elt, selector) {},
	  mergeObjects: function mergeObjects(target) {
	    if (!target) {
	      target = {};
	    }
	    for (var _i = 1, obj, prop; _i < arguments.length; _i++) {
	      if (obj = arguments[_i]) {
	        for (var j = 0, keys = Object.keys(obj); j < keys.length; j++) {
	          prop = keys[j];
	          target[prop] = obj[prop];
	        }
	      }
	    }
	    return target;
	  },
	  getChild: function getChild(elt, tagname) {
	    tagname = tagname ? tagname.toUpperCase() : null;
	    for (var i = 0; i < elt.childNodes.length; i++) {
	      if (!tagname || elt.childNodes[i].tagName.toUpperCase() === tagname) {
	        return elt.childNodes[i];
	      }
	    }
	    return null;
	  },
	  isArray: function isArray(obj) {
	    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
	    if (!Array.isArray) {
	      Array.isArray = function (arg) {
	        return Object.prototype.toString.call(arg) === '[object Array]';
	      };
	    }
	    return Array.isArray(obj);
	  },
	  isString: function isString(obj) {
	    return typeof obj === 'string' || obj instanceof String;
	  },
	  isFunction: function isFunction(obj) {
	    return typeof obj === 'function';
	  },
	  isDomElement: function isDomElement(obj) {
	    return obj.nodeType > 0;
	    /*return (
	        typeof HTMLElement === "object"
	            ? o instanceof HTMLElement :  o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"
	    )*/
	  },
	  hasClass: function hasClass(el, className) {
	    if (el.classList) {
	      return el.classList.contains(className);
	    } else if (el.className && el.className.match) {
	      // Classname strings for SVG elements don't have some string methods including replace or match
	      return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
	    }
	    return false;
	  },
	  addClass: function addClass(el, className) {
	    if (el.classList) {
	      el.classList.add(className);
	    } else if (!this.hasClass(el, className)) {
	      if (el.className) {
	        el.className += " " + className;
	      } else {
	        el.className = className;
	      }
	    }
	  },
	  removeClass: function removeClass(el, className) {
	    if (el.classList) {
	      el.classList.remove(className);
	    } else if (this.hasClass(el, className)) {
	      var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
	      el.className = el.className.replace(reg, ' ');
	    }
	  },
	  toggleClass: function toggleClass(el, classname, set) {
	    if (set === undefined) {
	      if (this.hasClass(el, classname)) {
	        this.removeClass(el, classname);
	      } else {
	        this.addClass(el, classname);
	      }
	    } else if (set) {
	      this.addClass(el, classname);
	    } else {
	      this.removeClass(el, classname);
	    }
	  },
	  html: function html(node, htmlText) {
	    throw new Error('Gantt.utils.html not supported');
	  },
	  walkToAncestor: function walkToAncestor(parent, elt, cb, param) {
	    function makeArrayMatcher(array) {
	      return function (obj) {
	        for (var i = 0; i < array.length; i++) {
	          if (obj === array[i]) {
	            return true;
	          }
	        }
	        return false;
	      };
	    }
	    var matcher = typeof parent === "function" ? parent : this.isArray(parent) ? makeArrayMatcher(parent) : function (obj) {
	      return parent === obj;
	    };
	    for (var p = elt, parentNode; p && p !== document || matcher(p);) {
	      if (matcher(p)) {
	        return param === undefined && p || param;
	      }
	      parentNode = p.parentNode;
	      if (parentNode === document && !matcher(document)) {
	        return;
	      }
	      if (cb) {
	        var result = cb(parentNode, p, param);
	        if (result !== undefined) {
	          param = result;
	        }
	      }
	      p = parentNode;
	    }
	  },
	  getWindowScrollLeft: function getWindowScrollLeft() {
	    var t;
	    // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect for this browser safe implementation of scrollLeft
	    return (((t = document.documentElement) || (t = document.body.parentNode)) && typeof t.scrollLeft == 'number' ? t : document.body).scrollLeft;
	  },
	  getWindowScrollTop: function getWindowScrollTop() {
	    var t;
	    // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect for this browser safe implementation of scrollTop
	    return (((t = document.documentElement) || (t = document.body.parentNode)) && typeof t.scrollTop == 'number' ? t : document.body).scrollTop;
	  },
	  getScreenPoint: function getScreenPoint(elt, pt) {
	    var bounds = elt.getBoundingClientRect();
	    return {
	      x: bounds.left + this.getWindowScrollLeft() + (pt ? pt.x : 0),
	      y: bounds.top + this.getWindowScrollTop() + (pt ? pt.y : 0)
	    };
	  },
	  getHeight: function getHeight(elt) {
	    // In firefox, actual row heights can be non-integers, which results in elt.offsetHeight (integer)
	    // being different from the actual display size, as the rounding done in the browser display and the one returned
	    // from offsetHeight can different. A table row of height 32.5 is displayed with 32px and have its offsetHeight
	    // returning 33...
	    return elt.offsetHeight;
	  },
	  offsetParent: function offsetParent(elt) {
	    return elt.parentNode; // Should be the closest ancestor with positioned style (fixed, relative or absolute)
	  },
	  ajax: function ajax(url, params) {},
	  propertyEvaluator: function propertyEvaluator(path) {
	    if (this.isFunction(path)) {
	      return path;
	    }
	    var ar = path.split('.');
	    if (ar.length > 1) {
	      return function (obj) {
	        for (var i = 0; obj && i < ar.length; i++) {
	          obj = obj[ar[i]];
	        }
	        return obj;
	      };
	    } else if (ar.length == 1) {
	      return function (obj) {
	        return obj[path];
	      };
	    } else return function (obj) {
	      return obj;
	    };
	  },
	  stringMatches: function stringMatches(s, search) {
	    return s.toLocaleLowerCase().indexOf(search.toLowerCase()) > -1;
	  },
	  getString: function getString(key, defaultValue) {
	    return GanttStrings[key] || defaultValue || key;
	  },
	  formatString: function formatString(tpl, obj) {
	    tpl = this.getString(tpl, tpl);
	    return tpl.replace(/\{(\w+)\}/g, function (_, key) {
	      return obj[key];
	    });
	  },
	  addEventListener: function addEventListener(target, evt, cb, capture) {
	    if (target.addEventListener) target.addEventListener(evt, cb, capture);else if (target.attachEvent) target.attachEvent('on' + evt, cb);
	  },
	  removeEventListener: function removeEventListener(target, evt, cb) {
	    if (target.removeEventListener) target.removeEventListener(evt, cb, false);else if (target.detachEvent) target.detachEvent('on' + evt, cb);
	  },
	  implements: function _implements(clazz) {
	    for (var i = 1, count = arguments.length; i < count; i++) {
	      var toImplement = arguments[i];
	      for (var key in toImplement) {
	        if (toImplement.hasOwnProperty(key)) {
	          clazz[key] = toImplement[key];
	        }
	      }
	    }
	    return clazz;
	  },
	  detectIE: function detectIE() {
	    // https://codepen.io/gapcode/pen/vEJNZN
	    var ua = window.navigator.userAgent;
	
	    // Test values; Uncomment to check result …
	
	    // IE 10
	    // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
	
	    // IE 11
	    // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
	
	    // Edge 12 (Spartan)
	    // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
	
	    // Edge 13
	    // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';
	
	    var msie = ua.indexOf('MSIE ');
	    if (msie > 0) {
	      // IE 10 or older => return version number
	      return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	    }
	
	    var trident = ua.indexOf('Trident/');
	    if (trident > 0) {
	      // IE 11 => return version number
	      var rv = ua.indexOf('rv:');
	      return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	    }
	
	    var edge = ua.indexOf('Edge/');
	    if (edge > 0) {
	      // Edge (IE 12+) => return version number
	      return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
	    }
	
	    // other browser
	    return false;
	  }
	};
	
	_core2.default.utils.isInteger = Number.isInteger;
	
	//
	// DataFetcher
	//
	/**
	 * Utility class for accessing remote or local data
	 * @
	 * @param config Configuration for accessing data.
	 * @constructor
	 */
	
	var DataFetcher =
	/**
	 * Constructs a new data fetcher associated with specified context and parameterized with the provided
	 * options.
	 * @param config parameters describing the access to data.
	 * @param privateFields (Array) list of fields to not take into account when parsing the configuration.
	 * @param settings the settings object to provide contextual info to user's callbacks.
	 */
	function DataFetcher(config, privateFields, settings) {
	  var _this = this;
	
	  _classCallCheck(this, DataFetcher);
	
	  var createEntry = function createEntry(name, cfg) {
	    var ctx = config.context || config;
	    var postProcess = function postProcess(data) {
	      var p = data && data.then && data || Promise.resolve(data);
	      if (config.success) {
	        p = p.then(function (data) {
	          return config.success.call(ctx, data, settings);
	        });
	      }
	      return p;
	    };
	    if (_core2.default.utils.isFunction(cfg)) {
	      _this[name] = function () {
	        for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
	          params[_key] = arguments[_key];
	        }
	
	        try {
	          return cfg.apply(settings, params);
	        } catch (err) {
	          return Promise.reject(err);
	        }
	      };
	    } else if (config.url) {
	      // make the ajax call
	      var ajaxConfig = _core2.default.utils.mergeObjects({ success: cfg.success, settings: settings }, cfg.ajaxConfig);
	      _this[name] = function () {
	        return _core2.default.utils.ajax(cfg.url, ajaxConfig);
	      };
	    } else if (_core2.default.utils.isArray(config)) {
	      _this[name] = function () {
	        return Promise.resolve(config);
	      };
	    } else {
	      var data = config.data;
	      if (data) {
	        if (_core2.default.utils.isString(data)) {
	          if (!ctx) {
	            throw "No context defined for data fetcher " + name;
	          }
	          var propEval = _core2.default.utils.propertyEvaluator(data);
	          var fct = typeof ctx === 'function';
	          _this[name] = function (model) {
	            model = model ? model : fct ? ctx() : ctx;
	            if (model && model.then) {
	              // Check if promise. See https://promisesaplus.com/#point-53
	              return model.then(function (res) {
	                return postProcess(propEval(res));
	              });
	            }
	            return postProcess(propEval(model));
	          };
	        } else if (_core2.default.utils.isFunction(data)) {
	          var _fct = typeof ctx === 'function';
	          _this[name] = function (model) {
	            model = model ? model : _fct ? ctx() : ctx;
	            if (model && model.then) {
	              // Check if promise. See https://promisesaplus.com/#point-53
	              return model.then(function (res) {
	                return postProcess(data.call(ctx, model));
	              });
	            }
	            try {
	              return postProcess(data.call(ctx, model));
	            } catch (err) {
	              return Promise.reject(err);
	            }
	          };
	        } else {
	          _this[name] = function () {
	            return postProcess(data);
	          };
	        }
	      } else {
	        throw "Data definition for " + JSON.stringify(config) + " for '" + name + "' does not define ajax parameters nor static data";
	      }
	    }
	  };
	
	  if (_core2.default.utils.isFunction(config)) {
	    createEntry('get', config, {});
	  } else if (_core2.default.utils.isArray(config)) {
	    createEntry('get', config, {});
	  } else {
	    var defConfig = { context: settings };
	    var entryConfigs = [];
	    var useDefault = void 0;
	    for (var _i2 = 0, prop, keys = Object.keys(config); _i2 < keys.length; _i2++) {
	      prop = keys[_i2];
	      if (prop === 'data' || prop === 'url' || prop === 'success' || prop === 'context' || prop === 'ajaxConfig') {
	        defConfig[prop] = config[prop];
	        useDefault = true;
	      } else if (!privateFields || privateFields.indexOf(prop) < 0) {
	        entryConfigs.push(prop);
	        entryConfigs.push(config[prop]);
	      }
	    }
	
	    for (var _i3 = 0, _prop; _i3 < entryConfigs.length;) {
	      _prop = entryConfigs[_i3++];
	      createEntry(_prop, useDefault && _core2.default.utils.mergeObjects({}, defConfig, entryConfigs[_i3++]) || entryConfigs[_i3++], defConfig);
	    }
	    if (!entryConfigs.length && useDefault) {
	      createEntry('get', defConfig);
	    }
	  }
	};
	
	_core2.default.components.DataFetcher.impl = DataFetcher;
	
	//
	// Tooltip
	//
	
	// See https://developer.mozilla.org/en-US/docs/Web/Events/wheel
	var prefix = "",
	    _addEventListener = void 0,
	    support = void 0;
	
	// detect event model
	if (window.addEventListener) {
	  _addEventListener = "addEventListener";
	} else {
	  _addEventListener = "attachEvent";
	  prefix = "on";
	}
	
	// detect available wheel event
	//noinspection JSUnresolvedVariable
	support = "onwheel" in document.createElement("div") ? "wheel" : // Modern browsers support "wheel"
	document.onmousewheel !== undefined ? "mousewheel" : // Webkit and IE support at least "mousewheel"
	"DOMMouseScroll"; // let's assume that remaining browsers are older Firefox
	
	window.addWheelListener = function (elem, callback, useCapture) {
	  _addWheelListener(elem, support, callback, useCapture);
	
	  // handle MozMousePixelScroll in older Firefox
	  if (support == "DOMMouseScroll") {
	    _addWheelListener(elem, "MozMousePixelScroll", callback, useCapture);
	  }
	};
	
	function _addWheelListener(elem, eventName, callback, useCapture) {
	  elem[_addEventListener](prefix + eventName, support == "wheel" ? callback : function (originalEvent) {
	    !originalEvent && (originalEvent = window.event);
	
	    // create a normalized event object
	    var event = {
	      // keep a ref to the original event object
	      originalEvent: originalEvent,
	      target: originalEvent.target || originalEvent.srcElement,
	      type: "wheel",
	      deltaMode: originalEvent.type == "MozMousePixelScroll" ? 0 : 1,
	      deltaX: 0,
	      deltaY: 0,
	      deltaZ: 0,
	      altKey: originalEvent.altKey,
	      ctrlKey: originalEvent.ctrlKey,
	      shiftKey: originalEvent.shiftKey,
	
	      preventDefault: function preventDefault() {
	        originalEvent.preventDefault ? originalEvent.preventDefault() : originalEvent.returnValue = false;
	      }
	    };
	
	    // calculate deltaY (and deltaX) according to the event
	    if (support == "mousewheel") {
	      event.deltaY = -1 / 40 * originalEvent.wheelDelta;
	      // Webkit also support wheelDeltaX
	      //noinspection JSUnresolvedVariable
	      originalEvent.wheelDeltaX && (event.deltaX = -1 / 40 * originalEvent.wheelDeltaX);
	    } else {
	      event.deltaY = originalEvent.detail;
	    }
	
	    // it's time to fire the callback
	    return callback(event);
	  }, useCapture || false);
	}
	
	/*                                                                                      */
	/*                                                                                      */
	/*                                  Date formatting                                     */
	/*                                                                                      */
	/*                                                                                      */
	var dateFormat = function () {
	  var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
	      timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
	      timezoneClip = /[^-+\dA-Z]/g,
	      pad = function pad(val, len) {
	    val = String(val);
	    len = len || 2;
	    while (val.length < len) {
	      val = "0" + val;
	    }return val;
	  };
	
	  // Regexes and supporting functions are cached through closure
	  return function (date, mask, utc) {
	    var dF = dateFormat;
	
	    // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
	    if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
	      mask = date;
	      date = undefined;
	    }
	
	    // Passing date through Date applies Date.parse, if necessary
	    date = date ? new Date(date) : new Date();
	    if (isNaN(date)) throw SyntaxError("invalid date");
	
	    mask = String(dF.masks[mask] || mask || dF.masks["default"]);
	
	    // Allow setting the utc argument via the mask
	    if (mask.slice(0, 4) == "UTC:") {
	      mask = mask.slice(4);
	      utc = true;
	    }
	
	    var _ = utc ? "getUTC" : "get",
	        d = date[_ + "Date"](),
	        D = date[_ + "Day"](),
	        m = date[_ + "Month"](),
	        y = date[_ + "FullYear"](),
	        H = date[_ + "Hours"](),
	        M = date[_ + "Minutes"](),
	        s = date[_ + "Seconds"](),
	        L = date[_ + "Milliseconds"](),
	        o = utc ? 0 : date.getTimezoneOffset(),
	        flags = {
	      d: d,
	      dd: pad(d),
	      ddd: dF.i18n.dayNames[D],
	      dddd: dF.i18n.dayNames[D + 7],
	      m: m + 1,
	      mm: pad(m + 1),
	      mmm: dF.i18n.monthNames[m],
	      mmmm: dF.i18n.monthNames[m + 12],
	      yy: String(y).slice(2),
	      yyyy: y,
	      h: H % 12 || 12,
	      hh: pad(H % 12 || 12),
	      H: H,
	      HH: pad(H),
	      M: M,
	      MM: pad(M),
	      s: s,
	      ss: pad(s),
	      l: pad(L, 3),
	      L: pad(L > 99 ? Math.round(L / 10) : L),
	      t: H < 12 ? "a" : "p",
	      tt: H < 12 ? "am" : "pm",
	      T: H < 12 ? "A" : "P",
	      TT: H < 12 ? "AM" : "PM",
	      Z: utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
	      o: (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
	      S: ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
	    };
	
	    return mask.replace(token, function ($0) {
	      return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
	    });
	  };
	}();
	
	// Some common format strings
	dateFormat.masks = {
	  "default": "ddd mmm dd yyyy HH:MM:ss",
	  shortDate: "m/d/yy",
	  mediumDate: "mmm d, yyyy",
	  longDate: "mmmm d, yyyy",
	  fullDate: "dddd, mmmm d, yyyy",
	  shortTime: "h:MM TT",
	  mediumTime: "h:MM:ss TT",
	  longTime: "h:MM:ss TT Z",
	  isoDate: "yyyy-mm-dd",
	  isoTime: "HH:MM:ss",
	  isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
	  isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
	};
	
	// Internationalization strings
	dateFormat.i18n = {
	  dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
	  monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
	};
	
	// For convenience...
	Date.prototype.format = function (mask, utc) {
	  return dateFormat(this, mask || _core2.default.utils.defaultDateFormat, utc);
	};
	
	//
	// Palette
	//
	
	var Palette = function (_Gantt$components$Pal) {
	  _inherits(Palette, _Gantt$components$Pal);
	
	  function Palette(config) {
	    _classCallCheck(this, Palette);
	
	    var _this2 = _possibleConstructorReturn(this, (Palette.__proto__ || Object.getPrototypeOf(Palette)).call(this, config));
	
	    _this2.colorSet = null;
	    _this2.setConfiguration(config);
	    return _this2;
	  }
	
	  _createClass(Palette, [{
	    key: 'setConfiguration',
	    value: function setConfiguration(config) {
	      var _this3 = this;
	
	      var maxColorsSize = -1;
	      var addColorSet = function addColorSet(col, size) {
	        if (col.length >= maxColorsSize) {
	          _this3.colorSet[size] = col;
	          maxColorsSize = col.length;
	        } else {
	          var insert = size - 1;
	          while (insert >= 0 && _this3.colorSet[insert].length < col.length) {
	            _this3.colorSet[i] = _this3.colorSet[i - 1];
	          }
	          _this3.colorSet[insert === -1 ? 0 : insert] = col;
	        }
	      };
	
	      var getColorsFromSet = function getColorsFromSet(count) {
	        for (var index = 0, setCount = _this3.colorSet.length; index < setCount; ++index) {
	          if (_this3.colorSet[index].length >= count) {
	            return _this3.colorSet[index];
	          }
	        }
	        return _this3.colorSet.length && _this3.colorSet[_this3.colorSet.length - 1] || null;
	      };
	
	      if (_core2.default.utils.isArray(config)) {
	        var count = config.length;
	        if (count) {
	          if (_core2.default.utils.isArray(config[0])) {
	            // If defining a set of color collections
	            this.colorSet = new Array(count);
	            // Sort color collections in this.colorSet from the lowest number of colors to the greatest.
	            // Algo is optimized for case when receiving ordered array of color collections.
	            for (var _i4 = 0; _i4 < count; _i4++) {
	              addColorSet(config[_i4], _i4);
	            }
	            this._getColors = getColorsFromSet;
	          } else {
	            this.colors = config;
	            this._getColors = function () {
	              return _this3.colors;
	            };
	          }
	        } else {
	          this._getColors = function () {
	            return null;
	          };
	        }
	      } else if (_core2.default.utils.isFunction(config)) {
	        this._getColors = config;
	      } else {
	        var keys = Object.keys(config);
	        var keyCount = keys.length,
	            size = 0;
	        this.colorSet = new Array(keyCount);
	        for (var _i5 = 0, val; _i5 < keyCount; ++_i5) {
	          if (_core2.default.utils.isArray(val = config[keys[_i5]])) {
	            addColorSet(val, size++);
	          }
	        }
	        if (!size || size !== keyCount) {
	          console.error('Unkown palette configuration ' + config);
	          console.log(config);
	          this._getColors = function () {
	            return null;
	          };
	          this.colorSet = null;
	        } else {
	          this._getColors = getColorsFromSet;
	        }
	      }
	    }
	  }, {
	    key: 'getColors',
	    value: function getColors(count) {
	      function makeResult(ar) {
	        var arLen = ar.length;
	        if (count < 0 || arLen === count) return ar;
	        if (arLen > count) return ar.slice(0, count);
	        // Extremely bad temporary solution when number of required colors exceeds palette's size
	        var result = new Array(count);
	        for (var _i6 = 0; _i6 < count; ++_i6) {
	          result[_i6] = ar[_i6 % arLen];
	        }
	        return result;
	      }
	      var colors = this._getColors(count);
	      return colors && makeResult(colors);
	    }
	  }]);
	
	  return Palette;
	}(_core2.default.components.Palette);
	
	_core2.default.components.Palette.impl = Palette;
	
	_core2.default.defaultPaletteName = 'qualitative20';
	_core2.default.defaultPalettes[_core2.default.defaultPaletteName] = new Palette([
	// IBM colors. See http://www.ibm.com/design/language/framework/visual/color/
	//'#5AA8F8', '#FFA573', '#8CD211', '#EFC100', '#AF6EE8', '#FDE876', '#FF5050', '#00B29E', '#152935', '#4178BC', '#562F72', '#C8F08F', '#FF7832', '#FDD600'
	// '#325C80', '#2D660A', '#4178BE', '#4B8401', '#5596E6', '#5AA701', '#5AAAFA', '#8CD211', '#7CC7FF', '#B4E051', '#C0E6FF', '#C8F08F', '#1D3649', '#0A3C02'
	//'#6EB400', '#FF7832', '#BA8FF7', '#F0F2F4'
	//'#9655D2', '#FF71D2', '#D92780', '#FF7D85', '#FCFAFA'
	/*'#C0E6FF', '#7CC7FF', '#5AAAFA', '#5596E6', '#4178BE', '#325C80'*/ // blue palette
	/*"#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a" // Brewer palette*/
	// https://releases.fr.eurolabs.ibm.com/display/OS/Design+for+GANTT+CHART
	'#41D6C3', '#8CD211', '#5AAAFA', '#BA8FF7', '#00AE9A', '#5AA600', '#4178BE', '#9855D4', '#EFC100', '#FF7832', '#E71D32', '#325C80', '#AC8C00', '#D74108', '#AD1625', '#1D3649', '#FF71D4', '#DB2780', '#9D9393', '#645A5A']);
	
	_core2.default.components.GanttPanel.prototype.utils = _core2.default.utils;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	/*require('../../css/error.css');*/
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _core = __webpack_require__(39);
	
	var _core2 = _interopRequireDefault(_core);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var defaults = {
	  listClass: 'error-list fit-parent-content',
	  maxErrors: 5,
	  bodyClass: 'error-body clearfix',
	  titleClass: 'error-title',
	  barClass: 'error-bar',
	  descClass: 'error-desc',
	  detailsBtnClass: 'error-details-btn',
	  removeBtnClass: 'remove-error-btn',
	  errorExpandedDefault: true,
	  fadingOutDuration: 600
	};
	
	var ErrorGroup = function () {
	  function ErrorGroup(node) {
	    _classCallCheck(this, ErrorGroup);
	
	    this.node = node;
	    this.errs = [];
	    this.errNodes = [];
	    this.errorList = null;
	  }
	
	  _createClass(ErrorGroup, [{
	    key: 'addError',
	    value: function addError(err, node, maxErrors) {
	      var _this = this;
	
	      if (maxErrors && maxErrors > 0 && this.errs.length >= maxErrors) {
	        this.errs.splice(0, this.errs.length - maxErrors + 1);
	        var removed = this.errNodes.splice(0, this.errNodes.length - maxErrors + 1);
	        removed.map(function (removedElt) {
	          _this.errorList.removeChild(removedElt);
	        });
	      }
	      this.errs.push(err);
	      this.errNodes.push(node);
	      this.errorList.appendChild(node);
	      return node;
	    }
	  }, {
	    key: 'removeError',
	    value: function removeError(err) {
	      for (var i = 0; i < this.errs.length; i++) {
	        if (this.errs[i] == err || this.errNodes[i] == err) {
	          this.errs.splice(i, 1);
	          var nodes = this.errNodes.splice(i, 1);
	          if (nodes.length) {
	            this.errorList.removeChild(nodes[0]);
	          }
	          return true;
	        }
	      }
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      if (this.errorList && this.errorList.parentNode == this.node) {
	        this.node.removeChild(this.errorList);
	      }
	      this.errs = [];
	      this.errNodes = [];
	      this.errorList = null;
	    }
	  }, {
	    key: 'updateErrorList',
	    value: function updateErrorList() {
	      if (this.errorList) {
	        if (this.errs.length) {
	          this.errorList.style.display = '';
	          if (!this.errorList.parentNode) {
	            this.beforeSettingErrorList(this.node);
	            this.node.appendChild(this.errorList);
	          }
	        } else {
	          this.errorList.style.display = 'none';
	        }
	      }
	    }
	  }, {
	    key: 'beforeSettingErrorList',
	    value: function beforeSettingErrorList(node) {
	      while (node.firstChild) {
	        node.removeChild(node.firstChild);
	      }
	    }
	  }, {
	    key: 'hasErrors',
	    value: function hasErrors() {
	      return !!this.errs.length;
	    }
	  }]);
	
	  return ErrorGroup;
	}();
	
	function ensureErrorGroup(node, errorGroups) {
	  for (var i = 0; i < errorGroups.length; i++) {
	    if (errorGroups[i].node == node) {
	      return errorGroups[i];
	    }
	  }
	  var errorGroup = new ErrorGroup(node);
	  errorGroups.push(errorGroup);
	  return errorGroup;
	}
	
	var ErrorHandler = function (_Gantt$components$Err) {
	  _inherits(ErrorHandler, _Gantt$components$Err);
	
	  function ErrorHandler(node, config) {
	    _classCallCheck(this, ErrorHandler);
	
	    var _this2 = _possibleConstructorReturn(this, (ErrorHandler.__proto__ || Object.getPrototypeOf(ErrorHandler)).call(this, _core2.default.utils.mergeObjects({}, defaults, config)));
	
	    _this2.node = node;
	    _this2.lockCount = 0;
	    _this2.errorGroups = [];
	    return _this2;
	  }
	
	  //noinspection JSUnusedGlobalSymbols
	
	
	  _createClass(ErrorHandler, [{
	    key: 'addError',
	    value: function addError(err, msg, node) {
	      if (!this.lockCount) {
	        var errDetails = this.convertError(err, msg);
	        var errNode = errDetails && this.createErrorNode(err, errDetails);
	        if (errNode) {
	          var errorGroup = ensureErrorGroup(node || this.node, this.errorGroups);
	          if (!errorGroup.errorList) {
	            errorGroup.errorList = this.createErrorList();
	          }
	          errorGroup.addError(err, errNode, this.config.maxErrors);
	          errorGroup.updateErrorList();
	          return errNode;
	        }
	      }
	    }
	  }, {
	    key: 'lock',
	    value: function lock() {
	      this.lockCount++;
	    }
	
	    //noinspection JSUnusedGlobalSymbols
	
	  }, {
	    key: 'unlock',
	    value: function unlock() {
	      --this.lockCount;
	    }
	  }, {
	    key: 'getErrors',
	    value: function getErrors() {
	      var result = [];
	      for (var iGroup = 0, count = this.errorGroups.length; iGroup < count; ++iGroup) {
	        result = result.concat(this.errorGroups[iGroup].errs);
	      }
	      return result;
	    }
	  }, {
	    key: 'hasErrors',
	    value: function hasErrors() {
	      for (var iGroup = 0, count = this.errorGroups.length; iGroup < count; ++iGroup) {
	        if (this.errorGroups[iGroup].hasErrors()) {
	          return true;
	        }
	      }
	      return false;
	    }
	  }, {
	    key: 'createErrorList',
	    value: function createErrorList() {
	      var lst = document.createElement('ul');
	      lst.className = 'error-list';
	      return lst;
	    }
	  }, {
	    key: 'createErrorNode',
	    value: function createErrorNode(err, errDetails) {
	      var _this3 = this;
	
	      var node = document.createElement('li');
	      node.className = this.config.errorExpandedDefault && 'error-component error-expanded' || 'error-component';;
	
	      var errorContent = document.createElement('div');
	      errorContent.className = 'error-content clearfix';
	
	      var textContent = document.createElement('div');
	      var divTitle = document.createElement('span');
	      divTitle.innerHTML = errDetails.title;
	      divTitle.className = 'error-title';
	      divTitle.onclick = function (evt) {
	        return _this3._toggleErrorDisplay(node);
	      };
	      textContent.appendChild(divTitle);
	
	      var divErrorBar = document.createElement('div');
	      divErrorBar.className = 'error-bar';
	
	      if (errDetails.desc) {
	        var divDesc = document.createElement('div');
	        divDesc.className = 'error-desc';
	        divDesc.innerHTML = errDetails.desc;
	        textContent.appendChild(divDesc);
	
	        var detailsBtn = document.createElement('span');
	        detailsBtn.tabIndex = 0;
	        detailsBtn.className = 'error-details-btn';
	        detailsBtn.innerHTML = _core2.default.utils.getString('gantt.error.details');
	        detailsBtn.onclick = function (evt) {
	          return _this3._toggleErrorDisplay(node);
	        };
	        divErrorBar.appendChild(detailsBtn);
	      }
	
	      // Remove error button
	      var removeErrorBtn = document.createElement('span');
	      removeErrorBtn.className = 'remove-error-btn';
	      removeErrorBtn.tabIndex = 0;
	      removeErrorBtn.onclick = function (evt) {
	        return _this3.removeError(err);
	      };
	      divErrorBar.appendChild(removeErrorBtn);
	
	      errorContent.appendChild(divErrorBar);
	
	      errorContent.appendChild(textContent); // Error the text div after the bar so that the bar remains top aligned with its container
	      node.appendChild(errorContent);
	
	      return node;
	    }
	  }, {
	    key: 'convertError',
	    value: function convertError(err, msg) {
	      var c = this.config && this.config.convertError && this.config.convertError(err, msg);
	      if (c) {
	        return c;
	      }
	      if (_core2.default.utils.isString(err)) {
	        return {
	          title: err
	        };
	      }
	      var title = err.message || err.status || err.statusCode;
	      if (msg) {
	        title = _core2.default.utils.formatString('gantt.error.title.fmt', { msg: msg, title: title });
	      }
	      var desc = err.desc || err.description || err.stack;
	      if (desc) {
	        desc = desc.replace(/(?:\r\n|\r|\n)/g, '<br />');
	      }
	      return {
	        title: title,
	        desc: desc
	      };
	    }
	  }, {
	    key: '_toggleErrorDisplay',
	    value: function _toggleErrorDisplay(errorNode) {
	      _core2.default.utils.toggleClass(errorNode, 'error-expanded');
	    }
	  }, {
	    key: 'removeError',
	    value: function removeError(err) {
	      for (var iGroup = 0, count = this.errorGroups.length; iGroup < count; iGroup++) {
	        if (this.errorGroups[iGroup].removeError(err)) {
	          this.errorGroups[iGroup].updateErrorList();
	          return true;
	        }
	      }
	      return false;
	    }
	  }, {
	    key: 'removeGroup',
	    value: function removeGroup(node) {
	      for (var iGroup = 0, count = this.errorGroups.length; iGroup < count; iGroup++) {
	        if (this.errorGroups[iGroup].node === node) {
	          this.errorGroups[iGroup].clear();
	          this.errorGroups.splice(iGroup, 1);
	          return true;
	        }
	      }
	      return false;
	    }
	  }]);
	
	  return ErrorHandler;
	}(_core2.default.components.ErrorHandler);
	
	exports.default = ErrorHandler;
	
	
	_core2.default.components.ErrorHandler.impl = ErrorHandler;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _core = __webpack_require__(39);
	
	var _core2 = _interopRequireDefault(_core);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Filter = function () {
	  function Filter(options) {
	    _classCallCheck(this, Filter);
	
	    this.filters = [];
	    this.filterKeys = [];
	    if (options) {
	      if (Array.isArray(options)) {
	        for (var i = 0; i < options.length; i++) {
	          this.addFilter(options[i]);
	        }
	      } else {
	        this.addFilter(options);
	      }
	    }
	  }
	
	  _createClass(Filter, [{
	    key: 'addFilter',
	    value: function addFilter(filter) {
	      var filterKey = filter;
	      filter = this.createFilter(filter);
	      if (filter) {
	        this.filters.push(filter);
	        this.filterKeys.push(filterKey);
	      }
	      return filter;
	    }
	  }, {
	    key: 'addOrFilters',
	    value: function addOrFilters() {
	      var params = new Array(arguments.length);
	      for (var i = 0; i < arguments.length; i++) {
	        params[i] = arguments[i];
	      }
	      var filter = this.createFilterSet(params, true);
	      if (filter) {
	        this.filters.push(filter);
	        this.filterKeys.push(filter);
	      }
	      return filter;
	    }
	  }, {
	    key: 'addAndFilters',
	    value: function addAndFilters() {
	      var params = new Array(arguments.length);
	      for (var i = 0; i < arguments.length; i++) {
	        params[i] = arguments[i];
	      }
	      var filter = this.createFilterSet(params, false);
	      if (filter) {
	        this.filters.push(filter);
	        this.filterKeys.push(filter);
	      }
	      return filter;
	    }
	  }, {
	    key: 'createFilterSet',
	    value: function createFilterSet() {
	      if (!arguments.length) {
	        return null;
	      }
	      var paramList, orFilter, i, filter;
	      if (Array.isArray(arguments[0])) {
	        paramList = arguments[0];
	        orFilter = arguments.length > 1 ? arguments[1] : this.DEFAULT_FILTER_SET_MODE_OR;
	      } else {
	        var copyLength;
	        orFilter = arguments[arguments.length - 1];
	        if (typeof orFilter !== 'boolean') {
	          orFilter = this.DEFAULT_FILTER_SET_MODE_OR;
	          copyLength = arguments.length;
	        } else {
	          copyLength = arguments.length - 1;
	        }
	        paramList = new Array(copyLength);
	        for (i = 0; i < copyLength; i++) {
	          paramList[i] = arguments[i];
	        }
	      }
	      var filterList = [];
	      for (i = 0; i < paramList.length; i++) {
	        filter = this.createFilter(paramList[i]);
	        if (filter) {
	          filterList.push(filter);
	        }
	      }
	      if (filterList.length) {
	        filter = orFilter ? function (args) {
	          for (var f = 0; f < filterList.length; f++) {
	            if (filterList[f](args)) {
	              return true;
	            }
	          }
	          return false;
	        } : function (args) {
	          for (var f = 0; f < filterList.length; f++) {
	            if (!filterList[f](args)) {
	              return false;
	            }
	          }
	        };
	        return filter;
	      }
	      return null;
	    }
	  }, {
	    key: 'removeFilter',
	    value: function removeFilter(filter) {
	      var index = this.filters.indexOf(filter);
	      if (index < 0) {
	        index = this.filterKeys.indexOf(filter);
	      }
	      if (index > -1) {
	        this.filters.splice(index, 1);
	        this.filterKeys.splice(index, 1);
	        return true;
	      }
	      return false;
	    }
	  }, {
	    key: 'createFilter',
	    value: function createFilter(filter) {
	      if (filter !== undefined) {
	        var self = this;
	        if (typeof filter === 'string') {
	          return filter && function () {
	            var params = arguments[0];
	            params.push(filter);
	            var result = self.acceptString.apply(self, params);
	            params.pop();
	            return result;
	          } || function () {
	            return true;
	          };
	        } else if (typeof filter == "function") {
	          return function () {
	            return filter.apply(self, arguments[0]);
	          };
	        } else if (filter[this.getObjectFilterMethodName()]) {
	          // Filter is an object with the appropriate filter method
	          var fct = filter[this.getObjectFilterMethodName()];
	          return function () {
	            return fct.apply(filter, arguments[0]);
	          };
	        } else if (filter.or) {
	          return this.createFilterSet(filter.or, true);
	        } else if (filter.and) {
	          return this.createFilterSet(filter.and, false);
	        } else {
	          console.log('Cannot process filter:');
	          console.log(filter);
	        }
	      } else {
	        console.log('Null filter specified');
	      }
	      return null;
	    }
	  }, {
	    key: 'accept',
	    value: function accept() {
	      var params = [],
	          i;
	      for (i = 0; i < arguments.length; i++) {
	        params.push(arguments[i]);
	      }
	
	      for (i = 0; i < this.filters.length; i++) {
	        if (!this.filters[i].call(this, params)) {
	          return false;
	        }
	      }
	      return true;
	    }
	  }, {
	    key: 'setFilter',
	    value: function setFilter(filter) {
	      this.filters = [];
	      this.filterKeys = [];
	      var params = [],
	          i;
	      for (i = 0; i < arguments.length; i++) {
	        params.push(arguments[i]);
	      }
	      this.addFilter.apply(this, params);
	    }
	  }, {
	    key: 'stringMatches',
	    value: function stringMatches(string, pattern) {
	      return string.indexOf(pattern) > -1;
	    }
	  }, {
	    key: 'acceptString',
	    value: function acceptString(object, str) {}
	  }, {
	    key: 'getObjectFilterMethodName',
	    value: function getObjectFilterMethodName() {
	      return 'accept';
	    }
	  }, {
	    key: 'isEmpty',
	    value: function isEmpty() {
	      return this.filters.length === 0;
	    }
	  }], [{
	    key: 'DEFAULT_FILTER_SET_MODE_OR',
	    get: function get() {
	      return false;
	    }
	  }]);
	
	  return Filter;
	}();
	
	_core2.default.components.Filter.impl = Filter;
	
	exports.default = Filter;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _core = __webpack_require__(39);
	
	var _core2 = _interopRequireDefault(_core);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var GanttUpdates = function (_Gantt$components$Gan) {
	    _inherits(GanttUpdates, _Gantt$components$Gan);
	
	    function GanttUpdates(parent, proto) {
	        _classCallCheck(this, GanttUpdates);
	
	        var _this = _possibleConstructorReturn(this, (GanttUpdates.__proto__ || Object.getPrototypeOf(GanttUpdates)).call(this, parent));
	
	        _this.children = [];
	        _this.updates = [];
	        _this.updateLocks = 0;
	        _this._reload = false;
	        if (parent) {
	            parent.children.push(_this);
	        }
	        if (proto) {
	            _core2.default.utils.mergeObjects(_this, proto);
	        }
	        _this._containsRowChanges = false;
	        _this._tableYScrollChanged = false;
	        return _this;
	    }
	
	    _createClass(GanttUpdates, [{
	        key: 'reload',
	        value: function reload() {
	            this._reload = true;
	            this._containsRowChanges = true;
	        }
	    }, {
	        key: 'isReload',
	        value: function isReload() {
	            return this._reload || this.parent && this.parent.isReload();
	        }
	    }, {
	        key: 'rowsChanged',
	        value: function rowsChanged(event, rows, rowRef) {
	            this.addUpdate({ type: event, rows: rows, rowRef: rowRef });
	            this._containsRowChanges = true;
	        }
	    }, {
	        key: 'addUpdate',
	        value: function addUpdate(update) {
	            this.updates.push(update);
	        }
	    }, {
	        key: 'removeUpdate',
	        value: function removeUpdate(update) {
	            var index = this.updates.indexOf(update);
	            if (index >= 0) {
	                this.updates.splice(index, 1);
	            }
	
	            for (var i = 0, count = this.children ? this.children.length : 0; i < count; i++) {
	                this.children[i].removeUpdate(update);
	            }
	        }
	    }, {
	        key: 'tableScrollYChanged',
	        value: function tableScrollYChanged() {
	            this._tableYScrollChanged = true;
	        }
	    }, {
	        key: 'hasTableScrollYChanged',
	        value: function hasTableScrollYChanged() {
	            return this._tableYScrollChanged || this.parent && this.parent.hasTableScrollYChanged();
	        }
	    }, {
	        key: 'startUpdating',
	        value: function startUpdating() {
	            ++this.updateLocks;
	        }
	    }, {
	        key: 'stopUpdating',
	        value: function stopUpdating() {
	            if (--this.updateLocks === 0) {
	                this.applyUpdates();
	                return true;
	            }
	            return false;
	        }
	    }, {
	        key: 'applyUpdates',
	        value: function applyUpdates() {
	            this.doApplyUpdates();
	            this.updates = [];
	            this._reload = false;
	            for (var i = 0, count = this.children ? this.children.length : 0; i < count; i++) {
	                this.children[i].applyUpdates();
	            }
	            this._containsRowChanges = false;
	        }
	    }, {
	        key: 'containsRowChanges',
	        value: function containsRowChanges() {
	            return this._containsRowChanges || this.parent && this.parent.containsRowChanges();
	        }
	    }, {
	        key: 'applyReload',
	        value: function applyReload() {}
	    }, {
	        key: 'doApplyUpdates',
	        value: function doApplyUpdates() {
	            if (this._reload) {
	                this.applyReload();
	            } else {
	                for (var iUpdate = 0, count = this.updates.length; iUpdate < count; iUpdate++) {
	                    this.applyUpdate(this.updates[iUpdate]);
	                }
	            }
	        }
	    }, {
	        key: 'applyUpdate',
	        value: function applyUpdate(update) {}
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            for (var i = 0, count = this.children ? this.children.length : 0; i < count; i++) {
	                this.children[i].destroy();
	            }
	            this.children = null;
	        }
	    }]);
	
	    return GanttUpdates;
	}(_core2.default.components.GanttUpdates);
	
	_core2.default.components.GanttUpdates.impl = GanttUpdates;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _core = __webpack_require__(39);
	
	var _core2 = _interopRequireDefault(_core);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var idCount = 1;
	
	function makeId(prefix) {
	    return prefix + idCount++;
	}
	
	var checkClass;
	function Checkbox(gantt, config) {
	    if (!checkClass) {
	        checkClass = _core2.default.components.CheckBox.impl || _core2.default.components.CheckBox;
	    }
	    return new checkClass(gantt, config);
	}
	
	var buttonClass;
	function Button(gantt, config) {
	    if (!buttonClass) {
	        buttonClass = _core2.default.components.Button.impl || _core2.default.components.Button;
	    }
	    return new buttonClass(gantt, config);
	}
	
	var selectClass;
	function Select(gantt, config) {
	    if (!selectClass) {
	        selectClass = _core2.default.components.DropDownList.impl || _core2.default.components.DropDownList;
	    }
	    return new selectClass(gantt, config);
	}
	
	var toggleClass;
	function Toggle(gantt, config) {
	    if (!toggleClass) {
	        toggleClass = _core2.default.components.Toggle.impl || _core2.default.components.Toggle;
	    }
	    return new toggleClass(gantt, config);
	}
	
	var ToolbarComponents = {
	    title: {
	        node: function node(parentElt, gantt) {
	            var node = _core2.default.components.Toolbar.createTitle(gantt.getTitle());
	            gantt.on(_core2.default.events.TITLE_CHANGED, function (event, title) {
	                node.innerHTML = title;
	            });
	            return node;
	        },
	
	        justifyLeft: true
	    },
	    separator: {
	        node: function node(parentElt) {
	            var sep = document.createElement('div');
	            sep.className = 'separator';
	            return sep;
	        }
	    },
	    whitespace: {
	        node: function node(parentElt) {
	            var sep = document.createElement('div');
	            sep.className = 'white-space';
	            return sep;
	        }
	    },
	
	    search: {
	        component: function component(gantt) {
	            return new (_core2.default.components.Input.impl || _core2.default.components.Input)(gantt, {
	                type: 'search',
	                onchange: function onchange(text) {
	                    gantt.search(text, true, true);
	                }
	            });
	        }
	    },
	    mini: {
	        component: function component(gantt) {
	            return new Toggle(gantt, {
	                unselected: {
	                    /*text : Gantt.utils.getString('gantt.toolbar.minimize.text'),*/
	                    tooltip: _core2.default.utils.getString('gantt.toolbar.mini.tooltip'),
	                    /*fontIcon : "fa fa-compress fa-lg"*/
	                    svg: {
	                        width: 20,
	                        height: 20,
	                        viewBox: "0 0 16 16",
	                        margin: "-6px 0 0 0 ",
	                        paths: ["M4 5h16v2H4zM4 9h16v2H4zM4 13h16v2H4zM4 17h16v2H4z"]
	                    }
	                },
	                selected: {
	                    /*fontIcon : "fa fa-expand fa-lg",*/
	                    /*text : Gantt.utils.getString('gantt.toolbar.normal.text'),*/
	                    tooltip: _core2.default.utils.getString('gantt.toolbar.mini.tooltip'),
	                    svg: {
	                        width: 24,
	                        height: 24,
	                        viewBox: "0 0 24 24",
	                        paths: ["M4 5h16v2H4zM4 9h16v2H4zM4 13h16v2H4zM4 17h16v2H4z"]
	                    }
	                },
	                isSelected: function isSelected() {
	                    var ganttNode = gantt.getPanelNode();
	                    return _core2.default.utils.hasClass(ganttNode, 'mini');
	                },
	
	                onclick: function onclick() {
	                    var ganttNode = gantt.getPanelNode();
	                    _core2.default.utils.toggleClass(ganttNode, 'mini');
	                    gantt.draw();
	                }
	            });
	        },
	        update: function update(gantt, rows, comp) {
	            var ganttNode = gantt.getPanelNode();
	            comp.setChecked(_core2.default.utils.hasClass(ganttNode, 'mini'));
	        }
	        /*    template : "<div class='rounded-check' style='white-space: nowrap;'> \
	                            <input type='checkbox' value='None' name='check' id='{id}'/> \
	                            <label for='{id}'>{label}</label> \
	                         </div>",*/
	
	    },
	
	    fitToContent: {
	        component: function component(gantt) {
	            return Button(gantt, {
	                /*fontIcon : 'fa fa-arrows fa-lg',*/
	                // Edited with http://editor.method.ac/
	                svg: {
	                    width: 20,
	                    height: 20,
	                    viewBox: "0 0 24 24",
	                    paths: ["m9,3c3.309,0 6,2.691 6,6s-2.691,6 -6,6s-6,-2.691 -6,-6s2.691,-6 6,-6m0,-2a8,8 0 1 0 0,16a8,8 0 0 0 0,-16zm6,17l3,-3l5,5l-3,3l-5,-5z", "m5.067202,10.936161l1.794565,-1.677985l-1.794565,-1.677997l1.025685,-0.958955l2.820467,2.636953l-2.820467,2.637771", "m13.211615,7.601521l-1.74349,1.712784l1.74349,1.712783l-0.996386,0.979422l-2.739875,-2.692204l2.739875,-2.69241"]
	                },
	                tooltip: _core2.default.utils.getString('gantt.toolbar.fit.tooltip'),
	                onclick: function onclick() {
	                    gantt.fitToContent();
	                }
	            });
	        }
	    },
	
	    refresh: {
	        component: function component(gantt) {
	            return Button(gantt, {
	                fontIcon: 'fa fa-refresh fa-lg',
	                /*svg : {
	                    width: 24,
	                    height: 40,
	                    margin: '-6px 2px 0 0',
	                    viewBox : "0 0 24 24",
	                    paths: ["M2 13.987c0-4.97 4.032-8.994 9-8.994h7l-2.5-2.506L17 1l5 4.987-5 5-1.5-1.5 2.5-2.5h-6.864c-3.867 0-7.136 3.133-7.136 7S7.146 21 11.013 21a7.034 7.034 0 0 0 5.185-2.29l1.478 1.348A9.067 9.067 0 0 1 11 23c-4.97 0-9-4.043-9-9.013z"]
	                },*/
	                text: _core2.default.utils.getString('gantt.toolbar.refresh.text'),
	                tooltip: _core2.default.utils.getString('gantt.toolbar.fit.tooltip'),
	                onclick: function onclick() {
	                    gantt.draw();
	                }
	            });
	        }
	    },
	
	    zoomIn: {
	        component: function component(gantt) {
	            return Button(gantt, {
	                /*classes: 'zoom-in',*/
	                /*fontIcon : 'fa fa-search-plus fa-lg',*/
	                svg: {
	                    width: 20,
	                    height: 20,
	                    viewBox: "0 0 24 24",
	                    paths: ["M9 1a8 8 0 1 0 0 16A8 8 0 0 0 9 1zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM15 18l3-3 5 5-3 3z", "M10 5H8v3H5v2h3v3h2v-3h3V8h-3z"]
	                },
	                tooltip: _core2.default.utils.getString('gantt.toolbar.zoomIn.tooltip'),
	                onclick: function onclick() {
	                    gantt.zoomIn();
	                }
	            });
	        }
	    },
	
	    zoomOut: {
	        component: function component(gantt) {
	            return Button(gantt, {
	                /*classes: 'zoom-out',*/
	                /*fontIcon : 'fa fa-search-minus fa-lg',*/
	                svg: {
	                    width: 20,
	                    height: 20,
	                    /*margin: '-2px 0 0 0',*/
	                    viewBox: "0 0 24 24",
	                    paths: ["M9 3c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6m0-2a8 8 0 1 0 0 16A8 8 0 0 0 9 1zM14.999 18l3-3 5 5-3 3z", "M9 3c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6m0-2a8 8 0 1 0 0 16A8 8 0 0 0 9 1z", "M5 8h8v2H5z"]
	                },
	                tooltip: _core2.default.utils.getString('gantt.toolbar.zoomOut.tooltip'),
	                onclick: function onclick() {
	                    gantt.zoomOut();
	                }
	            });
	        }
	    },
	
	    toggleLoadChart: {
	        component: function component(gantt) {
	            return new Toggle(gantt, {
	                unselected: {
	                    classes: 'toggle-load-chart',
	                    fontIcon: 'fa fa-bar-chart fa-lg',
	                    tooltip: _core2.default.utils.getString('gantt.loadResourceChart.show.tooltip')
	                },
	                selected: {
	                    classes: 'toggle-load-chart selected',
	                    fontIcon: 'fa fa-bar-chart fa-lg',
	                    tooltip: _core2.default.utils.getString('gantt.loadResourceChart.hide.tooltip')
	                },
	                isSelected: function isSelected() {
	                    return gantt.isLoadChartVisible();
	                },
	
	                onclick: function onclick() {
	                    gantt.toggleLoadChartVisible();
	                }
	            });
	        }
	    }
	};
	
	var Toolbar = function (_Gantt$components$Too) {
	    _inherits(Toolbar, _Gantt$components$Too);
	
	    function Toolbar(gantt, node, config) {
	        _classCallCheck(this, Toolbar);
	
	        return _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).call(this, gantt, node, config));
	    }
	
	    _createClass(Toolbar, [{
	        key: 'setConfiguration',
	        value: function setConfiguration(config, toolbarNode) {
	            var _this2 = this;
	
	            this.components = [];
	            var leftBar = null;
	
	            function append(comp, handler) {
	                if (handler.justifyLeft) {
	                    if (!leftBar) {
	                        leftBar = document.createElement('div');
	                        leftBar.style.display = 'flex';
	                        leftBar.style.flexDirection = 'row';
	                        leftBar.style.alignItems = 'center';
	                        leftBar.style.marginRight = 'auto';
	                        leftBar.className = 'left-toolbar-body';
	                        toolbarNode.appendChild(leftBar);
	                    }
	                    leftBar.appendChild(comp.node);
	                } else {
	                    toolbarNode.appendChild(comp.node);
	                }
	            }
	
	            var _loop = function _loop(i, count, _cfgNode, _handler, node, _comp) {
	                _cfgNode = config[i];
	                if (_core2.default.utils.isString(_cfgNode)) {
	                    _handler = ToolbarComponents[_cfgNode];
	                } else {
	                    _handler = _cfgNode;
	                }
	
	                if (!_handler.node) {
	                    if (_handler.component) {
	                        _comp = _handler.component(_this2.gantt, toolbarNode);
	                        if (_comp.node && !_comp.node.parentNode) {
	                            append(_comp, _handler);
	                        }
	                    } else if (_handler.template) {
	                        _comp = { id: _handler.id !== undefined ? _core2.default.utils.isFunction(_handler.id) ? _handler.id(_handler) : _handler.id : makeId(_core2.default.utils.isString(_cfgNode) ? _cfgNode : "toolbarComp") };
	                        _comp.node = document.createElement('div');
	                        var tpl = _core2.default.utils.formatString(_handler.template, _comp);
	                        _core2.default.utils.html(_comp.node, tpl);
	                        append(_comp, _handler);
	                    } else if (_handler.type) {
	                        if (_handler.type === 'button') {
	                            _comp = Button(_this2.gantt, _handler);
	                        } else if (_handler.type === 'checkbox') {
	                            _comp = Checkbox(_this2.gantt, _handler);
	                        } else if (_handler.type === 'select') {
	                            _comp = Select(_this2.gantt, _handler);
	                        } else if (_handler.type === 'buttonGroup') {
	                            _comp = new (_core2.default.components.ButtonGroup.impl || _core2.default.components.ButtonGroup)(_this2.gantt, _handler);
	                        } else if (_handler.type === 'separator') {
	                            _handler = ToolbarComponents.separator;
	                            _comp = {};
	                            _comp.node = _handler.node(toolbarNode, _this2.gantt, _comp);
	                        } else {
	                            throw new Error('Unknown toolbar component type: ' + config.type);
	                        }
	                        if (_comp.node && !_comp.node.parentNode) {
	                            append(_comp, _handler);
	                        }
	                    } else {
	                        throw new Error('a node property must be specified in a toolbar element: ' + _cfgNode);
	                    }
	                } else if (_core2.default.utils.isString(_handler.node)) {
	                    _comp = { id: _handler.node, node: document.getElementById(_handler.node) };
	                } else if (_core2.default.utils.isFunction(_handler.node)) {
	                    _comp = {};
	                    _comp.node = _handler.node(toolbarNode, _this2.gantt, _comp);
	                    append(_comp, _handler);
	                } else {
	                    throw new Error("The node property of a toolbar element must be either a string ID or a function creating a Dom element");
	                }
	
	                if (_handler.id) {
	                    _comp.setId(_handler.id);
	                }
	
	                if (_handler.connect) {
	                    _handler.connect(_comp.node, _comp);
	                }
	                if (_handler.update) {
	                    _comp.update = function (gantt, rows) {
	                        _handler.update(gantt, rows, _comp);
	                    };
	                }
	                if (_cfgNode.id) _comp.id = _cfgNode.id;
	                _this2.components.push(_comp);
	                cfgNode = _cfgNode;
	                handler = _handler;
	                comp = _comp;
	            };
	
	            for (var i = 0, count = config.length, cfgNode, handler, node, comp; i < count; i++) {
	                _loop(i, count, cfgNode, handler, node, comp);
	            }
	            this.initTooltip();
	        }
	    }, {
	        key: 'onInitialized',
	        value: function onInitialized() {
	            this.components.forEach(function (c) {
	                if (c.onInitialized) {
	                    c.onInitialized();
	                }
	            });
	        }
	    }, {
	        key: 'initTooltip',
	        value: function initTooltip() {
	            var tooltbar = this;
	            function getTooltipNode(elt) {
	                for (; elt && elt !== tooltbar.node; elt = elt.parentNode) {
	                    // Can be called with an elt outside the toolbar
	                    if (elt.dataset && elt.dataset.tooltip) {
	                        return elt;
	                    }
	                }
	            }
	            this.gantt.tooltip.installTooltip({
	                // The container that contains elements to display tooltip for.
	                container: this.node,
	                // The container inside which bounds the tooltip can be displayed
	                getTooltipDisplayContainer: function getTooltipDisplayContainer() {
	                    return tooltbar.gantt.getBody();
	                },
	
	                // Returns an element in the node hierarchy for which a tooltip can be displayed
	                getTooltipElement: function getTooltipElement(node) {
	                    return getTooltipNode(node);
	                },
	                renderTooltip: function renderTooltip(tooltipNode /* The element returned by getTooltipElement */
	                , act /* data returned by getTooltipData for the specified tooltipElt */
	                , tooltipCtnr /* The container of the tooltip to fill with info. */) {
	                    tooltipCtnr.appendChild(document.createTextNode(tooltipNode.dataset.tooltip));
	                }
	            });
	        }
	    }, {
	        key: 'connect',
	        value: function connect(gantt) {}
	    }, {
	        key: 'ganttLoaded',
	        value: function ganttLoaded(gantt, rows) {
	            for (var i = 0, count = this.components.length, _comp2; i < count; ++i) {
	                _comp2 = this.components[i];
	                if (_comp2.update) {
	                    _comp2.update(gantt, rows);
	                }
	            }
	        }
	    }, {
	        key: 'destroy',
	        value: function destroy() {}
	    }]);
	
	    return Toolbar;
	}(_core2.default.components.Toolbar);
	
	_core2.default.components.Toolbar.impl = Toolbar;
	
	/*                    */
	/* Toolbar components */
	/*                    */
	
	var FlatCheckbox = function (_Gantt$components$Che) {
	    _inherits(FlatCheckbox, _Gantt$components$Che);
	
	    function FlatCheckbox(gantt, config) {
	        _classCallCheck(this, FlatCheckbox);
	
	        return _possibleConstructorReturn(this, (FlatCheckbox.__proto__ || Object.getPrototypeOf(FlatCheckbox)).call(this, gantt, config));
	    }
	
	    _createClass(FlatCheckbox, [{
	        key: 'setConfiguration',
	        value: function setConfiguration(config) {
	            var _this4 = this;
	
	            var btn = document.createElement('div');
	            if (config.id) {
	                btn.id = config.id;
	            }
	            btn.className = 'button g-hoverable g-selectable' + (config.classes ? ' ' + config.classes : '');
	            if (config.icon) {
	                var img = document.createElement('img');
	                img.src = config.icon;
	                img.alt = '';
	                btn.appendChild(img);
	            }
	            if (config.fontIcon) {
	                var fontIcon = document.createElement('i');
	                fontIcon.className = config.fontIcon + (config.text ? ' fa-fw' : '');
	                btn.appendChild(fontIcon);
	            }
	            if (config.text) {
	                btn.appendChild(document.createTextNode(config.text));
	            }
	            this.node = btn;
	            btn.onclick = function (e) {
	                _core2.default.utils.toggleClass(btn, 'selected');
	                if (config.onclick) {
	                    config.onclick(_this4.gantt);
	                }
	            };
	            return btn;
	        }
	    }]);
	
	    return FlatCheckbox;
	}(_core2.default.components.CheckBox);
	
	_core2.default.components.CheckBox.impl = FlatCheckbox;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _core = __webpack_require__(39);
	
	var _core2 = _interopRequireDefault(_core);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ARROW_STYLE = 'gantt-tooltip-arrow';
	var BOTTOM_ARROW_STYLE = 'bottom-arrow';
	var TOP_ARROW_STYLE = 'top-arrow';
	
	var Tooltip = function (_Gantt$components$Too) {
	    _inherits(Tooltip, _Gantt$components$Too);
	
	    function Tooltip(options) {
	        _classCallCheck(this, Tooltip);
	
	        var _this = _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, options));
	
	        _this._tooltip = document.createElement('div');
	        _this._tooltip.className = 'gantt-tooltip';
	        _this._tooltip.style.position = "fixed";
	        _this._tooltip.style.visibility = 'hidden';
	
	        // Cannot have the arrow defined in CSS as the arrow position on the tooltip varies.
	        _this._tooltipArrow = document.createElement('div');
	        _this._tooltipArrow.style.position = "absolute";
	        _this._tooltipArrow.style.width = '0';
	        _this._tooltipArrow.style.height = '0';
	        _this._arrowHeight = 5;
	        _this._tooltip.appendChild(_this._tooltipArrow);
	        document.body.appendChild(_this._tooltip);
	
	        _core2.default.utils.addEventListener(_this._tooltip, 'mouseenter', function (evt) {
	            if (_this._hideTimer !== undefined) {
	                clearTimeout(_this._hideTimer);
	                _this._hideTimer = null;
	                _this._hidingElt = null;
	            }
	        }, true); // Capturing!
	        _core2.default.utils.addEventListener(_this._tooltip, 'mouseleave', function (evt) {
	            if (evt.target === _this._tooltip) {
	                _this.hideTooltip(300);
	            }
	        }, true); // Capturing!*/
	        return _this;
	    }
	
	    _createClass(Tooltip, [{
	        key: 'showTooltip',
	        value: function showTooltip(elt, ctx, cb) {
	            var _this2 = this;
	
	            if (elt === this._tooltipElt) return;
	            if (this._hideTimer !== undefined) {
	                clearTimeout(this._hideTimer);
	                delete this._hideTimer;
	                var hidingElt = this._hidingElt;
	                this._hidingElt = null;
	                if (hidingElt === elt) {
	                    return;
	                }
	            }
	            // tooltip associated with same data is already showing.
	            if (this._showTimer !== undefined) {
	                if (this._tooltipElt === elt) {
	                    // tooltip associated with same data is about to show, do nothing
	                    return;
	                }
	                clearTimeout(this._showTimer);
	                delete this._showTimer;
	                this._tooltipElt = null;
	            }
	            this._tooltip.innerHTML = '';
	            if (arguments.length === 2) {
	                cb = ctx;
	                ctx = null;
	            }
	            cb(this._tooltip);
	            this._tooltip.style.visibility = 'hidden';
	            this._tooltip.style.left = this._tooltip.style.top = 0; // If tooltip is a the right/bottom of the page, its processed sized can be cut, before display
	            this._tooltip.style.maxHeight = 'none';
	            var tooltipHeight = this._tooltip.offsetHeight + this._arrowHeight;
	
	            var eltScreenPt = _core2.default.utils.getScreenPoint(elt);
	
	            // Process the limit bounds in which to display the tooltip
	            var limits = void 0;
	            if (ctx && ctx.limitElt) {
	                var bounds = ctx.limitElt.getBoundingClientRect();
	                var scrollLeft = _core2.default.utils.getWindowScrollLeft();
	                var scrollTop = _core2.default.utils.getWindowScrollTop();
	                limits = {
	                    x: Math.max(bounds.left + scrollLeft + (bounds.left < 0 ? bounds.lef : 0), 0),
	                    y: Math.max(bounds.top + scrollTop + (bounds.left < 0 ? bounds.lef : 0), 0)
	                };
	                //limits = Gantt.utils.getScreenPoint(ctx.limitElt);
	                limits.width = Math.min(document.documentElement.clientWidth, bounds.right + scrollLeft) - Math.max(bounds.left, 0);
	                limits.height = Math.min(document.documentElement.clientHeight, bounds.bottom + scrollTop) - Math.max(bounds.top, 0);
	            } else {
	                limits = { x: 0, y: 0, width: document.body.offsetWidth, height: document.body.offsetHeight };
	            }
	
	            // Display the tooltip at the top or the bottom of the specified element?
	            // Prefer top
	            var topAvailHeight = void 0,
	                bottomAvailHeight = void 0,
	                arrowStyle = void 0,
	                arrowPos = void 0;
	            if (eltScreenPt.y - tooltipHeight >= limits.y) {
	                eltScreenPt.y -= tooltipHeight;
	                this._tooltip.style.maxHeight = 'none';
	                arrowStyle = BOTTOM_ARROW_STYLE;
	            }
	            // Otherwise, if displaying the tooltip at the bottom works, go for it
	            else if (eltScreenPt.y + tooltipHeight + elt.offsetHeight <= limits.y + limits.height) {
	                    eltScreenPt.y += elt.offsetHeight + this._arrowHeight;
	                    this._tooltip.style.maxHeight = 'none';
	                    arrowStyle = TOP_ARROW_STYLE;
	                }
	                // Otherwise, display on top if more space available on top
	                else if ((topAvailHeight = eltScreenPt.y - limits.y) > (bottomAvailHeight = limits.y + limits.height - eltScreenPt.y - elt.offsetHeight)) {
	                        eltScreenPt.y = limits.y;
	                        this._tooltip.style.maxHeight = topAvailHeight - this._arrowHeight + 'px';
	                        arrowStyle = BOTTOM_ARROW_STYLE;
	                    }
	                    // Display at the bottom
	                    else {
	                            eltScreenPt.y += elt.offsetHeight + this._arrowHeight;
	                            this._tooltip.style.maxHeight = bottomAvailHeight - this._arrowHeight + 'px';
	                            arrowStyle = TOP_ARROW_STYLE;
	                        }
	
	            // Adjust horizontal position
	            function adjustHorizontally(x, limitLeft, limitRight) {
	                return Math.max(Math.min(x, limitRight), limitLeft);
	            }
	            var arrowMargin = 10; // Arrow cannot start at the left or right border of the tooltip because of the round border of the tooltip. Suggesting 10px as the minimum space from the tooltip border
	            arrowPos = eltScreenPt.x + elt.offsetWidth / 2; // Ideal x screen position of the arrow
	            if (limits.width <= this._tooltip.offsetWidth) {
	                eltScreenPt.x = limits.x;
	                this._tooltip.style.maxWidth = limits.width + 'px';
	            } else {
	                eltScreenPt.x = adjustHorizontally(eltScreenPt.x + elt.offsetWidth / 2 - this._tooltip.offsetWidth / 2, limits.x, limits.x + limits.width - this._tooltip.offsetWidth);
	                this._tooltip.style.maxWidth = 'none';
	            }
	            arrowPos = adjustHorizontally(arrowPos - eltScreenPt.x, arrowMargin, this._tooltip.offsetWidth - arrowMargin);
	            this.setArrowPosition(arrowStyle, arrowPos);
	            this._tooltip.appendChild(this._tooltipArrow); // Previously removed with innerHTML = '';
	            this._tooltip.style.top = eltScreenPt.y + 'px';
	            this._tooltip.style.left = eltScreenPt.x + 'px';
	            this._tooltipElt = elt;
	            if (ctx && ctx.showDelay) {
	                this._showTimer = setTimeout(function () {
	                    delete _this2._showTimer;
	                    _this2._tooltip.style.visibility = 'visible';
	                }, ctx.showDelay);
	            } else {
	                this._tooltip.style.visibility = 'visible';
	            }
	        }
	    }, {
	        key: 'setArrowPosition',
	        value: function setArrowPosition(style, pos) {
	            this._tooltipArrow.className = ARROW_STYLE + ' ' + style;
	            if (style === TOP_ARROW_STYLE) {
	                //this._tooltipArrow.style.top = 0;
	                this._tooltipArrow.style.left = pos + 'px';
	            } else if (style === BOTTOM_ARROW_STYLE) {
	                //this._tooltipArrow.style.top = '100%';
	                this._tooltipArrow.style.left = pos + 'px';
	            }
	        }
	    }, {
	        key: 'hideTooltip',
	        value: function hideTooltip(millis, cb) {
	            var _this3 = this;
	
	            if (this._showTimer !== undefined) {
	                clearTimeout(this._showTimer);
	                this._tooltipElt = null;
	                delete this._showTimer;
	                // If about to show a tooltip, no tooltip to hide.
	                return;
	            }
	            // If no tooltip shown, nothing to hide
	            if (!this._tooltipElt) return;
	            if (millis) {
	                if (this._hideTimer) {
	                    return;
	                }
	                this._hideCB = cb;
	                this._hidingElt = this._tooltipElt;
	                this._hideTimer = setTimeout(function () {
	                    _this3._hideTimer = null;
	                    _this3._hidingElt = null;
	                    _this3._tooltipElt = null;
	                    if (_this3._hideCB) {
	                        _this3._hideCB();
	                    }
	                    _this3._hideCB = null;
	                    _this3._tooltip.style.display = 'none';
	                }, millis);
	            } else {
	                if (cb) {
	                    cb();
	                }
	                this._tooltipElt = null;
	                this._tooltip.style.display = 'none';
	            }
	        }
	    }, {
	        key: 'installTooltip',
	        value: function installTooltip(config) {
	            var _this4 = this;
	
	            var TOOLTIP_FADING_TIME = 1000;
	            var TOOLTIP_SHOWING_DELAY = 800;
	
	            _core2.default.utils.addEventListener(config.container, 'mouseenter', function (evt) {
	                //console.log('Enter ' + printElement(evt.target) + ', relatedTarget: ' + (evt.relatedTarget && printElement(evt.relatedTarget) || 'none'));
	                var tooltipNode = config.getTooltipElement(evt.target);
	                if (tooltipNode) {
	                    var tooltipData = config.getTooltipData && config.getTooltipData(tooltipNode);
	                    if (config.enteringTooltipElement && config.enteringTooltipElement(tooltipNode, tooltipData) === false) {
	                        // During a drag n drop for example.
	                        return;
	                    }
	                    var ctx = {
	                        limitElt: config.getTooltipDisplayContainer && config.getTooltipDisplayContainer() || document.body,
	                        showDelay: TOOLTIP_SHOWING_DELAY
	                    };
	                    //console.log('   show tooltip: ' + tooltipNode);
	                    _this4.showTooltip(tooltipNode, ctx, function (parent) {
	                        config.renderTooltip(tooltipNode, tooltipData, parent);
	                    });
	                } else {
	                    _this4.hideTooltip(TOOLTIP_FADING_TIME);
	                }
	            }, true);
	            _core2.default.utils.addEventListener(config.container, 'mouseleave', function (evt) {
	                //console.log('Leave ' + printElement(evt.target) + ', relatedTarget: ' + (evt.relatedTarget && printElement(evt.relatedTarget) || 'none'));
	                var tooltipNode = config.getTooltipElement(evt.target);
	                if (tooltipNode) {
	                    if (_this4._tooltipElt === tooltipNode) {
	                        var tooltipData = config.getTooltipData && config.getTooltipData(tooltipNode);
	                        if (config.leavingTooltipElement && config.leavingTooltipElement(tooltipNode, tooltipData) === false) {
	                            // To leave displayed the tooltip after leaving the element we show the tooltip for.
	                            return;
	                        }
	                        if (evt.relatedTarget && config.getTooltipElement(evt.relatedTarget) === tooltipNode) {
	                            // If the element the mouse is moving in is still in the tooltip node, do nothing.
	                            return;
	                        }
	                    }
	                    // Otherwise hide the tooltip
	                    _this4.hideTooltip(TOOLTIP_FADING_TIME);
	                }
	            }, true);
	        }
	    }]);
	
	    return Tooltip;
	}(_core2.default.components.Tooltip);
	
	_core2.default.components.Tooltip.impl = Tooltip;
	
	function printElement(elt) {
	    return elt.tagName + (elt.id ? '#' + elt.id : '') + (elt.className && elt.className.replace ? '.' + elt.className.replace(/ /g, '.') : '');
	}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _core = __webpack_require__(39);
	
	var _core2 = _interopRequireDefault(_core);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AUTOMATIC_COLOR = 'automatic';
	var TEXT_OVERFLOW_ELLIPSIS = 'ellipsis';
	var TEXT_OVERFLOW_NO_DISPLAY = 'noDisplay';
	var TEXT_OVERFLOW_CUT = 'cut';
	
	function createSelectorFunction(selector, fct, oldFct, fctCtx) {
	    return fct && function (object, ctx, ext) {
	        if (!selector || selector(object, ctx)) {
	            return fctCtx ? fct.call(fctCtx, object, ctx, ext) : fct(object, ctx, ext);
	        }
	        return oldFct && oldFct(object, ctx, ext) || undefined;
	    };
	}
	
	var Renderer = function (_Gantt$components$Ren) {
	    _inherits(Renderer, _Gantt$components$Ren);
	
	    function Renderer(config, proto, paletteHandler) {
	        _classCallCheck(this, Renderer);
	
	        return _possibleConstructorReturn(this, (Renderer.__proto__ || Object.getPrototypeOf(Renderer)).call(this, config, proto, paletteHandler));
	    }
	
	    _createClass(Renderer, [{
	        key: 'draw',
	        value: function draw(object, parentElt, ctx) {
	            var shapeElt = this.createShape && this.createShape(object, parentElt, ctx) || null;
	            if (this.getCSS) {
	                var css = this.getCSS(object, ctx);
	                if (css) {
	                    this.setCSS(shapeElt || parentElt, css);
	                }
	            }
	            if ((this.getText || this.getIcon) && this.drawContent) {
	                var text = this.getText && this.getText(object, ctx);
	                var icon = this.getIcon && this.getIcon(object, ctx);
	                this.drawContent(shapeElt || parentElt, icon, text, object, ctx);
	            }
	            var bg = void 0;
	            if (this.background) {
	                this.setBackground(shapeElt, bg = this.background(object, ctx));
	            }
	            if (this.color) {
	                this.setColor(shapeElt, this.color(object, ctx, bg));
	            }
	            if (parentElt && shapeElt != parentElt) {
	                parentElt.appendChild(shapeElt);
	            }
	            return shapeElt;
	        }
	    }, {
	        key: 'setBackground',
	        value: function setBackground(shapeElt, bg) {
	            shapeElt.style.backgroundColor = bg;
	        }
	    }, {
	        key: 'setColor',
	        value: function setColor(shapeElt, c) {
	            shapeElt.style.color = c;
	        }
	    }, {
	        key: 'setCSS',
	        value: function setCSS(elt, classname) {
	            if (classname) {
	                elt.className = elt.className && elt.className + ' ' + classname || classname;
	            }
	        }
	
	        //noinspection JSUnusedLocalSymbols
	
	    }, {
	        key: 'createShape',
	        value: function createShape(object, parentElt, ctx) {
	            return null;
	        }
	
	        //noinspection JSUnusedLocalSymbols
	
	    }, {
	        key: 'drawContent',
	        value: function drawContent(elt, icon, text, object, ctx) {
	            this.drawDefaultContent(elt, icon, text, object, ctx);
	        }
	    }, {
	        key: 'drawNoDisplayOverflowContent',
	        value: function drawNoDisplayOverflowContent(elt, icon, text, object, ctx) {
	            var ctnt = document.createElement('div');
	            ctnt.className = 'content';
	            ctnt.style.overflow = 'hidden';
	            ctnt.style.display = 'flex';
	            /*ctnt.style.alignItems = 'center';*/ // Cannot used as issue with FF https://github.ibm.com/IBMDecisionOptimization/dd-gantt-component/issues/14
	            ctnt.style.justifyContent = 'center';
	            ctnt.style.left = '0';
	            ctnt.style.top = '0';
	            ctnt.style.bottom = '0';
	            ctnt.style.right = '0';
	            ctnt.style.position = 'absolute';
	            ctnt.style.flexWrap = 'wrap';
	
	            if (icon) {
	                var img = document.createElement('img');
	                img.className = 'image-content';
	                img.src = icon;
	                img.alt = '';
	                img.style.float = 'left';
	                ctnt.appendChild(img);
	            }
	
	            var separator = document.createElement('div');
	            separator.style.width = '1px';
	            separator.style.display = 'inline-block';
	            separator.style.height = '100%';
	            ctnt.appendChild(separator);
	
	            var t = document.createElement('div');
	            t.className = 'text-content';
	            t.innerHTML = text;
	            t.style.display = 'flex';
	            t.style.alignItems = 'center';
	            t.style.whiteSpace = 'nowrap';
	            t.style.height = '100%';
	            t.style.textAlign = 'center';
	            ctnt.appendChild(t);
	            elt.appendChild(ctnt);
	        }
	    }, {
	        key: 'drawCutContent',
	        value: function drawCutContent(elt, icon, text, object, ctx) {
	            if (icon) {
	                var img = document.createElement('img');
	                img.className = 'image-content';
	                img.src = icon;
	                img.alt = '';
	                elt.appendChild(img);
	            }
	            elt.style.overflow = 'hidden';
	            var t = document.createElement('div');
	            t.className = 'text-content';
	            t.innerHTML = text;
	            elt.appendChild(t);
	            return t;
	        }
	    }, {
	        key: 'drawEllipsisContent',
	        value: function drawEllipsisContent(elt, icon, text, object, ctx) {
	            if (icon) {
	                var img = document.createElement('img');
	                img.className = 'image-content';
	                img.src = icon;
	                img.alt = '';
	                elt.appendChild(img);
	            }
	            var t = document.createElement('div');
	            t.className = 'text-content';
	            t.style.textOverflow = 'ellipsis';
	            t.style.overflow = 'hidden';
	            t.innerHTML = text;
	            elt.appendChild(t);
	            return t;
	        }
	    }, {
	        key: 'drawOverflowVisibleContent',
	        value: function drawOverflowVisibleContent(elt, icon, text, object, ctx) {
	            if (icon) {
	                var img = document.createElement('img');
	                img.className = 'image-content';
	                img.src = icon;
	                img.alt = '';
	                img.style.float = 'left';
	                elt.appendChild(img);
	            }
	            var t = document.createElement('div');
	            t.className = 'text-content';
	            t.overflow = 'visible';
	            t.innerHTML = text;
	            elt.appendChild(t);
	            return t;
	        }
	    }, {
	        key: 'filter',
	        value: function filter(object, row, search) {
	            if (this.getText && search) {
	                var text = this.getText(object, row);
	                return text && _core2.default.utils.stringMatches(text, search);
	            }
	            return false;
	        }
	    }, {
	        key: 'createCSSGetter',
	        value: function createCSSGetter(selector, classOptions, ctx) {
	            if (typeof classOptions == "function") {
	                // Function is given the object to render in parameter and returns a set of CSS classes
	                return createSelectorFunction(selector, classOptions, null, ctx);
	            } else if (typeof classOptions == "string") {
	                if (classOptions[0] == '@') {
	                    // The string represents the accessor to the object property providing the CSS class
	                    return createSelectorFunction(selector, _core2.default.utils.propertyEvaluator(classOptions.substring(1)));
	                } else {
	                    return createSelectorFunction(selector, function () {
	                        return classOptions;
	                    });
	                }
	            }
	            // Else the config is a descriptive object of the CSS setter
	            else if (!classOptions.property) {
	                    console.warn('Missing "property" field in class setter description:');
	                    console.warn(classOptions);
	                    return null;
	                } else {
	                    var propGetter = _core2.default.utils.propertyEvaluator(classOptions.property);
	                    return createSelectorFunction(selector, function (obj) {
	                        var prop = propGetter.call(obj, obj);
	                        if (prop) {
	                            if (classOptions.prefix) {
	                                prop = classOptions.prefix + prop;
	                            }
	                            if (classOptions.suffix) {
	                                prop = classOptions.suffix + prop;
	                            }
	                        }
	                        return prop;
	                    });
	                }
	        }
	    }, {
	        key: 'addCSSConfiguration',
	        value: function addCSSConfiguration(selector, classes, ctx) {
	            var i, getter;
	            if (!_core2.default.utils.isArray(classes)) {
	                classes = [classes];
	            }
	            for (i = 0; i < classes.length; i++) {
	                getter = this.createCSSGetter(selector, classes[i], ctx);
	                if (getter) {
	                    if (this.cssGetters) {
	                        this.cssGetters.push(getter);
	                    } else {
	                        this.cssGetters = [getter];
	                        this.getCSS = function (object, ctx) {
	                            var cssClasses = '',
	                                cssToAdd;
	                            for (var i = 0; i < this.cssGetters.length; i++) {
	                                cssToAdd = this.cssGetters[i](object, ctx);
	                                if (cssToAdd) {
	                                    cssClasses = cssClasses && cssClasses + ' ' + cssToAdd || cssToAdd;
	                                }
	                            }
	                            return cssClasses;
	                        };
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'addFilterConfiguration',
	        value: function addFilterConfiguration(selector, config, ctx) {
	            var filter;
	            if (typeof config == "function") {
	                filter = function filter() {
	                    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
	                        params[_key] = arguments[_key];
	                    }
	
	                    return config.apply(ctx, params);
	                };
	            } else if (typeof config == "string") {
	                var getter = _core2.default.utils.propertyEvaluator(config);
	                if (getter) {
	                    filter = function filter(object, ctx, search) {
	                        if (search) {
	                            var value = getter(object, ctx);
	                            return value && _core2.default.utils.stringMatches(value, search);
	                        }
	                        return true;
	                    };
	                }
	            } else {
	                console.warn('Cannot process filter config. Must be a string or a function.');
	                console.warn(config);
	            }
	            if (filter) {
	                var oldFilter = this.filter;
	                this.filter = function (object, ctx, search) {
	                    if (!oldFilter(object, ctx, search)) {
	                        return false;
	                    }
	                    if (!selector || selector(object)) {
	                        if (!filter(object, ctx, search)) {
	                            return false;
	                        }
	                    }
	                    return true;
	                };
	            }
	        }
	    }, {
	        key: 'addTooltipPropertiesConfiguration',
	        value: function addTooltipPropertiesConfiguration(selector, config, ctx) {
	            var tooltipPropsGetter;
	            if (typeof config == "function") {
	                tooltipPropsGetter = config;
	            } else {
	                console.warn('Cannot process tooltip properties config. Must be a a function.');
	                console.warn(config);
	            }
	            if (tooltipPropsGetter) {
	                if (selector) {
	                    this.getTooltipProperties = createSelectorFunction(selector, tooltipPropsGetter, this.getTooltipProperties, ctx);
	                } else this.getTooltipProperties = tooltipPropsGetter;
	            }
	        }
	    }, {
	        key: 'addTooltipConfiguration',
	        value: function addTooltipConfiguration(selector, config, ctx) {
	            var tooltipGetter;
	            if (typeof config == "function") {
	                tooltipGetter = function tooltipGetter() {
	                    for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                        params[_key2] = arguments[_key2];
	                    }
	
	                    return config.apply(ctx, params);
	                };
	            } else {
	                console.warn('Cannot process tooltip config. Must be a function.');
	                console.warn(config);
	            }
	            if (tooltipGetter) {
	                if (selector) {
	                    this.getTooltip = createSelectorFunction(selector, tooltipGetter, this.getTooltip);
	                } else this.getTooltip = tooltipGetter;
	            }
	        }
	    }, {
	        key: 'addTextConfiguration',
	        value: function addTextConfiguration(selector, config, ctx) {
	            var textGetter;
	            if (typeof config == "function") {
	                textGetter = function textGetter() {
	                    for (var _len3 = arguments.length, params = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	                        params[_key3] = arguments[_key3];
	                    }
	
	                    return config.apply(ctx, params);
	                };
	            } else if (typeof config == "string") {
	                textGetter = _core2.default.utils.propertyEvaluator(config);
	            } else {
	                console.warn('Cannot process text config. Must be a string or a function.');
	                console.warn(config);
	            }
	            if (textGetter) {
	                if (selector) {
	                    this.getText = createSelectorFunction(selector, textGetter, this.getText);
	                } else this.getText = textGetter;
	            }
	        }
	    }, {
	        key: 'addIconConfiguration',
	        value: function addIconConfiguration(selector, config, ctx) {
	            var iconGetter;
	            if (typeof config == "function") {
	                iconGetter = function iconGetter() {
	                    for (var _len4 = arguments.length, params = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	                        params[_key4] = arguments[_key4];
	                    }
	
	                    return config.apply(ctx, params);
	                };
	            } else if (typeof config == "string") {
	                iconGetter = _core2.default.utils.propertyEvaluator(config);
	            } else {
	                console.warn('Cannot process icon config. Must be a string or a function.');
	                console.warn(config);
	            }
	            if (iconGetter) {
	                if (selector) {
	                    this.getIcon = createSelectorFunction(selector, iconGetter, this.getIcon);
	                } else this.getIcon = iconGetter;
	            }
	        }
	    }, {
	        key: 'addDrawConfiguration',
	        value: function addDrawConfiguration(selector, config) {
	            if (selector) {
	                var oldDraw = this.draw;
	                this.draw = function (object, elt, ctx) {
	                    if (selector(object, ctx)) {
	                        config.draw(object, elt, ctx);
	                    } else {
	                        oldDraw(object, elt, ctx);
	                    }
	                };
	            } else {
	                this.draw = function (object, elt, ctx) {
	                    config.draw(object, elt, ctx);
	                };
	            }
	        }
	    }, {
	        key: 'addDrawContentConfiguration',
	        value: function addDrawContentConfiguration(selector, config) {
	            if (selector) {
	                var oldDrawContent = this.drawContent;
	                this.drawContent = function (elt, text, object, ctx) {
	                    if (selector(object, ctx)) {
	                        config.drawContent(elt, text, object, ctx);
	                    } else {
	                        oldDrawContent(elt, text, object, ctx);
	                    }
	                };
	            } else {
	                this.drawContent = function (elt, text, object, ctx) {
	                    config.drawContent(elt, text, object, ctx);
	                };
	            }
	        }
	    }, {
	        key: 'addTextOverflowConfiguration',
	        value: function addTextOverflowConfiguration(selector, config) {
	            var drawDefaultContent = void 0;
	            if (config === TEXT_OVERFLOW_ELLIPSIS) {
	                drawDefaultContent = this.drawEllipsisContent;
	            } else if (config === TEXT_OVERFLOW_NO_DISPLAY) {
	                drawDefaultContent = this.drawNoDisplayOverflowContent;
	            } else if (config === TEXT_OVERFLOW_CUT) {
	                drawDefaultContent = this.drawCutContent;
	            }
	            if (selector) {
	                var oldDrawDefaultContent = this.drawDefaultContent;
	                this.drawDefaultContent = function (elt, text, object, ctx) {
	                    if (selector(object, ctx)) {
	                        drawDefaultContent.call(this, elt, text, object, ctx);
	                    } else {
	                        oldDrawDefaultContent.call(this, elt, text, object, ctx);
	                    }
	                };
	            } else {
	                this.drawDefaultContent = drawDefaultContent;
	            }
	        }
	    }, {
	        key: 'hexToRgb',
	        value: function hexToRgb(hex) {
	            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	            return result ? {
	                r: parseInt(result[1], 16),
	                g: parseInt(result[2], 16),
	                b: parseInt(result[3], 16)
	            } : null;
	        }
	    }, {
	        key: 'getTextColorFromBackgroundColor',
	        value: function getTextColorFromBackgroundColor(hexColor) {
	            var rgb = this.hexToRgb(hexColor);
	            //http://www.w3.org/TR/AERT#color-contrast
	            var o = Math.round((rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000);
	            return o > 125 ? '#383633' : 'white';
	        }
	    }, {
	        key: 'addColorConfiguration',
	        value: function addColorConfiguration(selector, config, property, ctx) {
	            var _this2 = this;
	
	            var colorGetter;
	            if (typeof config === "function") {
	                colorGetter = function colorGetter() {
	                    for (var _len5 = arguments.length, params = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	                        params[_key5] = arguments[_key5];
	                    }
	
	                    return config.apply(ctx, params);
	                };
	            } else if (typeof config === "string") {
	                if (property === 'color' && AUTOMATIC_COLOR === config) {
	                    colorGetter = function colorGetter(obj, ctx, bg) {
	                        var index = _this2.colors && _this2.colors.indexOf(bg) || -1;
	                        if (index < 0) {
	                            var textColor = void 0;
	                            try {
	                                textColor = _this2.getTextColorFromBackgroundColor(bg);
	                            } catch (err) {
	                                console.error('Invalid color format ' + bg);
	                                console.error(err);
	                                textColor = 'black';
	                            }
	                            if (!_this2.colors) {
	                                _this2.colors = [bg];
	                                _this2.textColors = [textColor];
	                            } else {
	                                _this2.colors.push(bg);
	                                _this2.textColors.push(textColor);
	                            }
	                            return textColor;
	                        }
	                        return _this2.textColors[index];
	                    };
	                } else {
	                    colorGetter = _core2.default.utils.propertyEvaluator(config);
	                }
	            } else {
	                // Object describing how to get a color from a palette
	                var paletteConfig = config.palette;
	                var paletteRenderer = {
	                    paletteHandler: this.paletteHandler,
	                    colors: null,
	                    value: _core2.default.utils.propertyEvaluator(config.getValue),
	                    getColor: function getColor(obj, ctx) {
	                        var value = this.value(obj, ctx);
	                        var colors = this.colors || this.makeColors(obj, ctx); // makeColors leads to the creation of this.values
	                        var index = this.values.indexOf(value);
	                        if (index < 0) {
	                            index = this.values.length;
	                            this.values.push(value);
	                        }
	                        return index < 0 ? null : colors[index % colors.length];
	                    },
	                    getValues: config.values && (_core2.default.utils.isFunction(config.values) && config.values || function () {
	                        return config.values;
	                    }),
	                    makeColors: function makeColors(obj, ctx) {
	                        var palette = void 0;
	                        if (paletteConfig) {
	                            if (_core2.default.utils.isString(paletteConfig)) {
	                                palette = this.paletteHandler.getPalette(paletteConfig);
	                            } else {
	                                palette = new (_core2.default.components.Palette.impl || _core2.default.components.Palette)(paletteConfig);
	                            }
	                        } else {
	                            palette = this.paletteHandler.getPalette();
	                        }
	                        if (!palette && !this.colors) {
	                            console.error('No palette found for ' + paletteConfig);
	                            palette = _core2.default.defaultPalettes[_core2.default.defaultPaletteName];
	                        }
	                        this.values = this.getValues && this.getValues(obj, ctx) || [];
	                        this.colors = palette && palette.getColors(this.values.length || -1); // -1 for the max number of colors handled by the palette.
	                        return this.colors;
	                    }
	                };
	                colorGetter = function colorGetter(obj, ctx) {
	                    return paletteRenderer.getColor(obj, ctx);
	                };
	            }
	            if (colorGetter) {
	                if (selector) {
	                    this[property] = createSelectorFunction(selector, colorGetter, this[property]);
	                } else this[property] = colorGetter;
	            }
	        }
	    }, {
	        key: 'addConfiguration',
	        value: function addConfiguration(config) {
	            var selector;
	            if (config.selector) {
	                if (typeof config.selector == "function") {
	                    selector = function selector() {
	                        for (var _len6 = arguments.length, params = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	                            params[_key6] = arguments[_key6];
	                        }
	
	                        return config.selector.apply(config, params);
	                    };
	                } else if (_typeof(config.selector) != "object" || !config.selector.property || !config.selector.value) {
	                    console.warn('Renderer selector must be a function or an object with "property" and "value" fields.');
	                    console.warn(config.selector);
	                } else {
	                    var prop = _core2.default.utils.propertyEvaluator(this.config.selector.property);
	                    var values = this.config.selector.value.split(',');
	                    selector = function selector(object) {
	                        var value = prop(object);
	                        return value && values.indexOf(value) >= 0;
	                    };
	                }
	            }
	
	            this.processConfiguration(selector, config);
	        }
	    }, {
	        key: 'processConfiguration',
	        value: function processConfiguration(selector, config) {
	            this.defaultProcessConfiguration(selector, config);
	        }
	    }, {
	        key: 'defaultProcessConfiguration',
	        value: function defaultProcessConfiguration(selector, config) {
	            if (config.classes || config.css) {
	                this.addCSSConfiguration(selector, config.classes || config.css, config);
	            }
	
	            if (config.text) {
	                this.addTextConfiguration(selector, config.text, config);
	            }
	            if (config.icon) {
	                this.addIconConfiguration(selector, config.icon, config);
	            }
	
	            if (config.filter) {
	                this.addFilterConfiguration(selector, config.filter, config);
	            }
	
	            if (config.tooltip) {
	                this.addTooltipConfiguration(selector, config.tooltip, config);
	            }
	
	            if (config.tooltipProperties) {
	                this.addTooltipPropertiesConfiguration(selector, config.tooltipProperties, config);
	            }
	
	            if (config.createShape) {
	                console.warn('config.createShape: Not implemented');
	            }
	
	            if (config.drawContent) {
	                this.addDrawContentConfiguration(selector, config);
	            }
	
	            if (config.textOverflow) {
	                this.addTextOverflowConfiguration(selector, config.textOverflow);
	            }
	
	            if (config.background) {
	                this.addColorConfiguration(selector, config.background, 'background', config);
	            }
	
	            if (config.color) {
	                this.addColorConfiguration(selector, config.color, 'color', config);
	            }
	
	            if (config.draw) {
	                this.addDrawConfiguration(selector, config);
	            }
	        }
	    }, {
	        key: 'setConfiguration',
	        value: function setConfiguration(config) {
	            this.drawDefaultContent = this.drawNoDisplayOverflowContent;
	
	            if (Array.isArray(config)) {
	                for (var i = 0; i < config.length; i++) {
	                    this.addConfiguration(config[i]);
	                }
	            } else if (config) {
	                this.addConfiguration(config);
	            }
	            this.initialized(config);
	        }
	    }, {
	        key: 'initialized',
	        value: function initialized(config) {}
	
	        //noinspection JSUnusedLocalSymbols
	
	    }, {
	        key: 'getTooltipProperties',
	        value: function getTooltipProperties(obj, ctx) {
	            return [];
	        }
	    }, {
	        key: 'getTooltip',
	        value: function getTooltip(parentNode, obj, ctx) {
	            parentNode.style.display = 'flex';
	            parentNode.style.flexDirection = 'column';
	            /*const tooltipContent = document.createElement('div');
	            tooltipContent.className = 'gantt-tooltip-content';
	            tooltipContent.style.display = 'flex';
	            tooltipContent.style.flexFlow = 'column';*/
	            if (this.getText) {
	                var title = document.createElement('h2');
	                title.appendChild(document.createTextNode(this.getText(obj, ctx)));
	                title.style.display = 'block';
	                title.style.flex = '0 0 auto';
	                parentNode.appendChild(title);
	            }
	            var props = this.getTooltipProperties(obj, ctx);
	            var tableCtnr = document.createElement('div');
	            tableCtnr.style.overflow = 'auto';
	            tableCtnr.style.display = 'block';
	            tableCtnr.style.flexShrink = '1';
	            tableCtnr.style.flexGrow = '1';
	            var table = document.createElement('table');
	            var body = document.createElement('tbody'),
	                tr,
	                td;
	            for (var iProp = 0, count = props.length; iProp < count;) {
	                tr = document.createElement('tr');
	                td = document.createElement('td');
	                td.className = 'tooltip-key';
	                td.appendChild(document.createTextNode(props[iProp++]));
	                tr.appendChild(td);
	
	                td = document.createElement('td');
	                td.className = 'tooltip-table-separator';
	                tr.appendChild(td);
	
	                td = document.createElement('td');
	                td.className = 'tooltip-value';
	                td.appendChild(document.createTextNode(props[iProp++]));
	                tr.appendChild(td);
	                body.appendChild(tr);
	            }
	            table.appendChild(body);
	            tableCtnr.appendChild(table);
	            parentNode.appendChild(tableCtnr);
	            //tooltipContent.appendChild(tableCtnr);
	            //parentNode.appendChild(tooltipContent);
	        }
	    }]);
	
	    return Renderer;
	}(_core2.default.components.Renderer);
	
	exports.default = Renderer;
	
	
	_core2.default.components.Renderer.impl = Renderer;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _core = __webpack_require__(39);
	
	var _core2 = _interopRequireDefault(_core);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var defaultOptions = {
	    cascadeOffset: 5,
	    topMargin: 1,
	    bottomMargin: 1,
	    subRowPadding: 1,
	    constantRowHeight: false,
	    compareBoundingBoxes: false,
	    miniWidth: 4
	};
	
	var STRATEGY_LOGISTIC = 'logistic';
	var STRATEGY_TILE = 'tile';
	var STRATEGIES = {};
	var MINI_ACTIVITY_CLASS = 'mini-activity';
	var MILESTONE = 'milestone';
	
	STRATEGIES[STRATEGY_LOGISTIC] = function (row) {
	    // this is the activity layout calling this function
	    ActivityLayout.sortTasksOnStart(row);
	    var subRowsCount = ActivityLayout.computeSubRows(row),
	        offset;
	    var actHeight = row.height - this.topMargin - this.bottomMargin - 1;
	    if (subRowsCount > 1) {
	        offset = this.cascadeOffset;
	        actHeight = Math.max(actHeight - this.cascadeOffset * (subRowsCount - 1), 0);
	        if (actHeight == 0) {
	            offset = 0;
	        }
	    }
	    var actCount = row.activities && row.activities.length || 0;
	    for (var iAct = 0, act; iAct < actCount; ++iAct) {
	        act = row.activities[iAct];
	        if (act.node) {
	            act.node.style.top = this.topMargin + offset * act.subRowIndex + 'px';
	            act.node.style.height = actHeight;
	        }
	    }
	};
	
	STRATEGIES[STRATEGY_TILE] = function (row) {
	    var rowHeight = row.tableRowHeight;
	
	    var topMargin = this.topMargin;
	    var bottomMargin = this.bottomMargin;
	    var subRowHeight = rowHeight - topMargin - bottomMargin - 1;
	    if (subRowHeight <= 0) {
	        subRowHeight = 1;
	        var availMargin = rowHeight - subRowHeight;
	        topMargin = availMargin * topMargin / (topMargin + bottomMargin);
	        bottomMargin = availMargin - topMargin;
	    }
	
	    // Compute the overlap, tiling, and number of subrows required to accommodate the
	    // graphics. First, we associate each graphic with its the bounds in view coordinates.
	    // Then we sort the array by start time or x position, depending on the overlap
	    // detection strategy being used.
	    var activitiyComparator = this.compareBoundingBoxes ? function (act1, act2) {
	        return act1.left - act2.left;
	    } : function (act1, act2) {
	        return act1.start - act2.start;
	    };
	    row.activities.sort(activitiyComparator);
	
	    // Finally, assign graphics to subrows, increasing the number of subrows as
	    // necessary so that the graphics do not overlap.
	    var subRows = this.setTaskSubRows(row);
	
	    // For constant row height, we subdivide the row's current height into the required
	    // number of subrows. For constant subrow height, we expand the row to accommodate the
	    // required number of subrows
	    var subRowMargin = this.subRowPadding;
	    if (this.constantRowHeight) {
	        if (subRowMargin * (subRows.length - 1) >= subRowHeight) {
	            subRowMargin = subRowHeight / (subRows.length - 1);
	        }
	        subRowHeight = (subRowHeight - (subRows.length - 1) * subRowMargin) / subRows.length;
	    } else {
	        rowHeight = topMargin + bottomMargin + subRows.length * subRowHeight + (subRows.length - 1) * subRowMargin;
	        // Set the row height so that each subrow has the chart's global row
	        // height.
	        row.setRowHeight(Math.round(rowHeight));
	    }
	
	    // Set the vertical bounds of the activities in each subrow.
	    var top = topMargin,
	        subRowTasks,
	        task;
	    for (var i = 0, iTask; i < subRows.length; i++) {
	        subRowTasks = subRows[i];
	        for (iTask = 0; iTask < subRowTasks.length; iTask++) {
	            task = subRowTasks[iTask];
	            task.node.style.top = top + 'px';
	            task.node.style.height = subRowHeight + 'px';
	        }
	        top += subRowHeight + subRowMargin;
	    }
	};
	
	var ActivityLayout = function (_Gantt$components$Act) {
	    _inherits(ActivityLayout, _Gantt$components$Act);
	
	    function ActivityLayout(config, proto, ctx) {
	        _classCallCheck(this, ActivityLayout);
	
	        var _this = _possibleConstructorReturn(this, (ActivityLayout.__proto__ || Object.getPrototypeOf(ActivityLayout)).call(this, config));
	
	        _core2.default.utils.mergeObjects(_this, defaultOptions, config, proto);
	        _this.ctx = ctx;
	
	        if (_this.strategy) {
	            if (typeof config.strategy === 'string') {
	                _this.getLayoutStrategy = function () {
	                    return _this.strategy;
	                };
	            } else if (typeof _this.strategy === 'function') {
	                _this.getLayoutStrategy = function () {
	                    return _this.strategy(_this.ctx);
	                };
	            }
	        }
	        return _this;
	    }
	
	    _createClass(ActivityLayout, [{
	        key: 'layout',
	        value: function layout(row) {
	            if (row.activities && row.activities.length) {
	                var strategyKey = this.getLayoutStrategy();
	                var vLayout = void 0;
	                this.layoutHorizontally(row);
	                if (strategyKey && (vLayout = STRATEGIES[strategyKey])) {
	                    vLayout.call(this, row);
	                } else {
	                    var act = void 0,
	                        elt = void 0;
	                    for (var iAct = 0; iAct < row.activities.length; iAct++) {
	                        act = row.activities[iAct];
	                        elt = act.node;
	                        if (elt) {
	                            elt.style.top = '' + this.topMargin + 'px';
	                            elt.style.height = '' + (row.height - this.topMargin - this.bottomMargin - 1) + 'px';
	                        }
	                    }
	                }
	            }
	        }
	
	        /**
	         * @return {string}
	         */
	
	    }, {
	        key: 'allowVariableRowHeight',
	        value: function allowVariableRowHeight() {
	            var strategyKey = this.getLayoutStrategy();
	            if (strategyKey && strategyKey === STRATEGY_TILE) {
	                return !this.constantRowHeight;
	            }
	            return false;
	        }
	    }, {
	        key: 'layoutHorizontally',
	        value: function layoutHorizontally(row) {
	            var act = void 0,
	                elt = void 0,
	                left = void 0;
	            var actCount = row.activities.length;
	            for (var iAct = 0; iAct < actCount; iAct++) {
	                act = row.activities[iAct];
	                elt = act.node;
	                if (elt) {
	                    left = act.left = row.getX(act.start);
	                    elt.style.left = '' + left + 'px';
	                    elt.style.width = (act.width = row.getX(act.end) - left + 1) + 'px';
	                    if (act.width <= this.miniWidth && !_core2.default.utils.hasClass(elt, MILESTONE)) {
	                        act.width = this.miniWidth;
	                        elt.style.width = act.width + 'px';
	                        _core2.default.utils.addClass(elt, MINI_ACTIVITY_CLASS);
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'getLayoutStrategy',
	
	
	        //noinspection JSMethodCanBeStatic
	        value: function getLayoutStrategy() {
	            return null;
	        }
	
	        //noinspection JSMethodCanBeStatic
	
	    }, {
	        key: 'layoutVertically',
	        value: function layoutVertically(row) {
	            row.subRows = [];
	        }
	    }, {
	        key: 'setTaskSubRows',
	
	
	        /*                                  */
	        /*      Tiling specific methods     */
	        /*                                  */
	        /**
	         * Creates as many subrows as needed to accommodate the given activity graphics and
	         * assigns the activity graphics to the subrows. The activity graphics are provided
	         * with their view bounding boxes as an array of {@link GraphicBounds}. This allows
	         * the tiling policy to take advantage of the precomputed activity bounding boxes when
	         * computing graphic overlap and assigning activity graphics to subrows. The result of
	         * this method is a list of subrows, where each subrow is a list of {@link
	            * GraphicBounds} representing the activities assigned to the subrow. All activity
	         * graphics provided as input to the tiling policy must be assigned to one and only
	         * one subrow.
	         *
	         * @param graphics             The activity graphics to be tiled into subrows, as an
	         *                             array of {@link GraphicBounds}. If <code>compareBoundingBoxes</code>
	         *                             is <code>true</code> then the array will be sorted by
	         *                             the x position of each activity graphic's bounding box.
	         *                             If <code>compareBoundingBoxes</code> is
	         *                             <code>false</code> then the array will be sorted by the
	         *                             start time of each activity. Note, that the bounding
	         *                             boxes are provided as input only. Modifying the
	         *                             bounding box of a {@link GraphicBounds} will not affect
	         *                             how an activity is positioned.
	         * @param compareBoundingBoxes Indicates whether the tiling policy should compute
	         *                             activity overlap by comparing the graphic bounding
	         *                             boxes. If <code>false</code>, activity overlap should
	         *                             be computed by comparing the activity time intervals.
	         * @return The list of subrows, where each subrow is a list of {@link GraphicBounds}
	         *         representing the activities assigned to the subrow.
	         */
	        value: function setTaskSubRows(row) {
	            var subRows = [],
	                act,
	                iSubRow;
	            for (var iAct = 0, actCount = row.activities && row.activities.length || 0; iAct < actCount; ++iAct) {
	                act = row.activities[iAct];
	                if (act.node) {
	                    for (iSubRow = 0; iSubRow < subRows.length; iSubRow++) {
	                        if (this.addGraphicToSubRowIfFits(act, subRows[iSubRow])) {
	                            break;
	                        }
	                    }
	                    if (iSubRow == subRows.length) {
	                        subRows.push([act]);
	                    }
	                }
	            }
	            return subRows;
	        }
	    }, {
	        key: 'addGraphicToSubRowIfFits',
	
	
	        /**
	         * Adds the specified task to the specified subRow if it fits. If the
	         * task is successfully added to the list of graphics for the subrow, this method
	         * returns true. If the graphic does not fit into the subrow, this method returns
	         * false. If the graphic does not fit into any of the existing subrows, the tiling
	         * policy will create a new subrow for the graphic. Note, that a graphic must always
	         * succeed in being added to an empty subrow.
	         *
	         * @param activity             The activity to add.
	         * @param subRow               The subRow, represented as a list of activities.
	         */
	        value: function addGraphicToSubRowIfFits(activity, subRow) {
	            // Adding a graphic to an empty subrow must always succeed.
	            if (!subRow.length) {
	                subRow.push(activity);
	            }
	            // Otherwise, check whether the graphic fits at the end of the subRow.
	            else {
	                    var lastRowTask = subRow[subRow.length - 1];
	                    if (this.compareBoundingBoxes) {
	                        if (activity.left < lastRowTask.left + lastRowTask.width) {
	                            return false;
	                        }
	                    } else if (activity.start < lastRowTask.end) {
	                        return false;
	                    }
	                    subRow.push(activity);
	                }
	            return true;
	        }
	    }], [{
	        key: 'sortTasksOnStart',
	        value: function sortTasksOnStart(row) {
	            row.activities.sort(function (act1, act2) {
	                return act1.start - act2.start;
	            });
	        }
	    }, {
	        key: 'computeSubRows',
	        value: function computeSubRows(row) {
	            var endTimes = [],
	                endTime = void 0,
	                iAct = void 0,
	                act = void 0,
	                e = void 0,
	                endTimesCount = 0;
	            var actCount = row.activities && row.activities.length || 0;
	            for (iAct = 0; iAct < actCount; ++iAct) {
	                act = row.activities[iAct];
	                if (act.node) {
	                    for (e = 0; e < endTimesCount; e++) {
	                        endTime = endTimes[e];
	                        if (act.start === endTime || act.start > endTime) {
	                            break;
	                        }
	                    }
	                    act.subRowIndex = e;
	                    if (e < endTimesCount) {
	                        endTimes[e] = act.end;
	                    } else {
	                        endTimes.push(act.end);
	                        endTimesCount++;
	                    }
	                }
	            }
	            return endTimesCount;
	        }
	    }, {
	        key: 'STRATEGY_LOGISTIC',
	        get: function get() {
	            return STRATEGY_LOGISTIC;
	        }
	
	        /**
	         * @return {string}
	         */
	
	    }, {
	        key: 'STRATEGY_TILE',
	        get: function get() {
	            return STRATEGY_TILE;
	        }
	    }, {
	        key: 'STRATEGIES',
	        get: function get() {
	            return STRATEGIES;
	        }
	    }]);
	
	    return ActivityLayout;
	}(_core2.default.components.ActivityLayout);
	
	exports.default = ActivityLayout;
	
	
	_core2.default.components.ActivityLayout.impl = ActivityLayout;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _core = __webpack_require__(39);
	
	var _core2 = _interopRequireDefault(_core);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var defaultOptions = {
	    linkOutlineWidth: 2
	};
	
	var ID_DELIM = '_';
	var TOOLTIP_FADING_TIME = 1000;
	var TOOLTIP_SHOWING_DELAY = 800;
	
	var CONSTRAINT_LINK_CLASS = 'constraint-link';
	var CONSTRAINT_LINK_CTNR_CLASS = 'constraint-link-ctnr';
	var CONSTRAINT_ARROW = 'constraint-arrow';
	
	var SELECTION_CLASS = 'selected';
	
	var ConstraintsGraph = function (_Gantt$components$Con) {
	    _inherits(ConstraintsGraph, _Gantt$components$Con);
	
	    function ConstraintsGraph(gantt, node, config) {
	        _classCallCheck(this, ConstraintsGraph);
	
	        return _possibleConstructorReturn(this, (ConstraintsGraph.__proto__ || Object.getPrototypeOf(ConstraintsGraph)).call(this, gantt, node, _core2.default.utils.mergeObjects({}, defaultOptions, config)));
	    }
	
	    _createClass(ConstraintsGraph, [{
	        key: 'setConfiguration',
	        value: function setConfiguration(config) {
	            var _this2 = this;
	
	            this.destroy();
	
	            this.create();
	            this.ready = Promise.resolve([]);
	
	            if (config.layout && _core2.default.utils.isFunction(config.layout)) {
	                this.layout = new config.layout(this.gantt);
	            } else {
	                this.layout = new (_core2.default.components.ConstraintLayout.impl || _core2.default.components.ConstraintLayout)(this.gantt, config.layout);
	            }
	
	            this.linkRenderer = new (_core2.default.components.Renderer.impl || _core2.default.components.Renderer)(config.renderer, LinkRendererPrototype, this.gantt);
	            if (config.linkOutlineWidth) this.linkRenderer.linkOutlineWidth = config.linkOutlineWidth;
	            // Ugly way for managing the exception of this view having several DOM nodes in its life
	            var node = this.node;
	            this.node = null;
	            this.setNode(node);
	
	            var selectionHandler = this.gantt.selection;
	            selectionHandler.on(_core2.default.events.CONSTRAINT_SELECTION_CLEARED, function (e, sels) {
	                return _this2.clearConstraintSelection(sels);
	            });
	            selectionHandler.on(_core2.default.events.CONSTRAINT_SELECTED, function (e, sels) {
	                return _this2.selectConstraints(sels);
	            });
	            selectionHandler.on(_core2.default.events.CONSTRAINT_UNSELECTED, function (e, sels) {
	                return _this2.unselectConstraints(sels);
	            });
	        }
	    }, {
	        key: 'setNode',
	        value: function setNode(node) {
	            var _this3 = this;
	
	            if (this.node) {
	                this.gantt.errorHandler.removeGroup(this.node);
	                if (this.tooltipEnter) {
	                    _core2.default.utils.removeEventListener(this.node, 'mouseenter', this.tooltipEnter);
	                    _core2.default.utils.removeEventListener(this.node, 'mouseleave', this.tooltipLeave);
	                    _core2.default.utils.removeEventListener(this.node, 'click', this.clickHandler);
	                }
	                this.node.innerHTML = '';
	            }
	            this.node = node;
	            if (node) {
	                if (!this.tooltipEnter) {
	                    this.tooltipEnter = function (evt) {
	                        var node = _this3.getConstraintNode(evt.target);
	                        if (node && (!_this3.gantt.timeTable.isDragAndDropping || !_this3.gantt.timeTable.isDragAndDropping())) {
	                            _this3.showTooltip(node);
	                        }
	                    };
	                    this.tooltipLeave = function (evt) {
	                        var node = _this3.getConstraintNode(evt.target);
	                        if (node && _this3.tooltipElt == node) {
	                            _this3.hideTooltip(TOOLTIP_FADING_TIME);
	                        }
	                    };
	                    this.clickHandler = function (e) {
	                        return _this3.processClick(e);
	                    };
	                }
	                _core2.default.utils.addEventListener(this.node, 'mouseenter', this.tooltipEnter, true);
	                _core2.default.utils.addEventListener(this.node, 'mouseleave', this.tooltipLeave, true);
	                _core2.default.utils.addEventListener(this.node, 'click', this.clickHandler, true);
	            }
	        }
	    }, {
	        key: 'create',
	        value: function create() {
	            if (this.config && this.config.classes) {
	                _core2.default.utils.addClass(this.config.classes);
	            }
	        }
	    }, {
	        key: 'setConstraints',
	        value: function setConstraints(cts) {
	            var _this4 = this;
	
	            this.cts = cts;
	            if (cts && cts.length) {
	                this.ready = new Promise(function (resolve) {
	                    setTimeout(function () {
	                        _this4.processConstraints(cts);
	                        resolve();
	                    }, 0);
	                });
	            } else {
	                this.ready = Promise.resolve([]);
	            }
	        }
	    }, {
	        key: 'processConstraints',
	        value: function processConstraints(cts) {
	            var table = this.gantt.table;
	            var activityFilter = this.gantt.timeTable.getActivityFilter();
	            var row = void 0,
	                count = void 0,
	                acts = void 0,
	                act = void 0,
	                i = void 0;
	            this.layout.startInitialize();
	            try {
	                for (row = table.getFirstVisibleRow(); row; row = table.nextRow(row)) {
	                    acts = row.activities;
	                    count = acts && acts.length;
	                    if (count) {
	                        for (i = 0; i < count; ++i) {
	                            act = acts[i];
	                            act = !activityFilter || activityFilter.accept(act, row) ? act : null;
	                            if (act) {
	                                act.consNode = this.layout.addNode(act, row.index);
	                            }
	                        }
	                    }
	                }
	
	                var from = void 0,
	                    to = void 0,
	                    cons = void 0;
	                for (i = 0, count = cts.length; i < count; ++i) {
	                    cons = cts[i];
	                    cons.nodes = null; // Remove nodes from previous display
	                    from = cons.from.consNode;
	                    to = cons.to.consNode;
	                    if (from && to) {
	                        this.layout.addConstraint(from, to, cons);
	                    }
	                }
	            } catch (e) {
	                this.addError(e, "Error processing constraints");
	                this.layout.stopInitialize();
	                throw e;
	            }
	
	            this.layout.stopInitialize();
	        }
	    }, {
	        key: 'addError',
	        value: function addError(e, msg) {
	            if (!this.errorNode) {
	                this.errorNode = document.createElement('div');
	                this.errorNode.style.opacity = '0.80';
	                this.gantt.timeTablePanel.appendChild(this.errorNode);
	            }
	            this.gantt.errorHandler.addError(e, msg, this.errorNode);
	        }
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            if (this.layout && this.layout.destroy) {
	                this.layout.destroy();
	            }
	            this.layout = null;
	            if (this.node && this.tooltipEnter) {
	                _core2.default.utils.removeEventListener(this.node, 'mouseenter', this.tooltipEnter);
	                _core2.default.utils.removeEventListener(this.node, 'mouseleave', this.tooltipLeave);
	                this.tooltipEnter = this.tooltipLeave = null;
	            }
	        }
	    }, {
	        key: 'clearCache',
	        value: function clearCache() {
	            if (this.cts) {
	                for (var i = 0, count = this.cts.length; i < count; ++i) {
	                    this.cts[i].fromNode = null;
	                    this.cts[i].toNode = null;
	                }
	            }
	        }
	    }, {
	        key: 'clear',
	        value: function clear() {
	            this.node.innerHTML = '';
	            this.clearCache();
	        }
	    }, {
	        key: 'clearLinks',
	        value: function clearLinks() {
	            this.layout.clearLinks();
	        }
	    }, {
	        key: 'resetLayout',
	        value: function resetLayout() {
	            this.layout.resetLayout();
	        }
	    }, {
	        key: 'draw',
	        value: function draw(rows, drawCB) {
	            var _this5 = this;
	
	            if (!rows.length) return this.ready;
	            return this.ready.then(function () {
	                var table = _this5.gantt.table;
	                var firstRowIndex = rows[0].row.index,
	                    lastRowIndex = rows[rows.length - 1].row.index;
	
	                function getNodeRect(act, index) {
	                    var row = void 0,
	                        y = void 0;
	                    if (index < firstRowIndex) {
	                        row = rows[0].row;
	                        y = rows[0].y;
	                        while (index < firstRowIndex) {
	                            row = table.prevRow(row);
	                            drawCB(row);
	                            y -= row.activityRow.height;
	                            rows.splice(0, 0, { y: y, row: row, height: row.activityRow.height, index: --firstRowIndex });
	                        }
	                    } else if (index > lastRowIndex) {
	                        row = rows[lastRowIndex];
	                        y = row.y + row.height;
	                        row = row.row;
	                        while (index > lastRowIndex) {
	                            row = table.nextRow(row);
	                            drawCB(row);
	                            rows.push({ y: y, row: row, height: row.activityRow.height, index: ++lastRowIndex });
	                            y += row.activityRow.height;
	                        }
	                    }
	                    row = rows[index - firstRowIndex];
	                    return act.node ? { x: act.left, y: row.y, top: parseInt(act.node.style.top),
	                        width: act.node.offsetWidth, height: act.node.offsetHeight, rowHeight: row.height } : { x: 0, y: row.y, top: 0, width: 0, height: 0, rowHeight: row.height };
	                }
	
	                _this5.layout.getNodeRect = getNodeRect;
	                var ctx = { gantt: _this5.gantt,
	                    nodeToLinkPadding: _this5.layout.horizLinkToNodeDist,
	                    linkToLinkPadding: _this5.layout.horizLinkToLinkDist };
	
	                var i = void 0,
	                    rowIndex = void 0;
	                var count = rows.length;
	
	                try {
	                    for (i = 0, rowIndex = firstRowIndex; i < count; i++, rowIndex++) {
	                        _this5.layout.layoutRowNodeLinks(rowIndex, _this5.linkRenderer, ctx);
	                    }
	                } catch (e) {
	                    _this5.addError(e);
	                }
	
	                try {
	                    var fragment = document.createDocumentFragment();
	                    for (i = 0, rowIndex = firstRowIndex; i < count; i++, rowIndex++) {
	                        _this5.layout.drawRowLinks(rowIndex, fragment, _this5.linkRenderer, ctx);
	                    }
	
	                    _this5.node.appendChild(fragment);
	                } catch (e) {
	                    _this5.addError(e, "Error drawing constraints");
	                }
	            });
	        }
	    }, {
	        key: 'getConstraint',
	        value: function getConstraint(node) {
	            var id = node.id;
	            var lastIndex = id.indexOf(ID_DELIM),
	                index = void 0;
	            if (lastIndex >= 0) {
	                while ((index = id.indexOf(ID_DELIM, lastIndex + 1)) > 0) {
	                    lastIndex = index;
	                }
	                id = id.substring(0, lastIndex);
	            }
	            var cons = void 0;
	            if (this.cts.byIds && (cons = this.cts.byIds[id])) {
	                return cons;
	            }
	            return null;
	        }
	    }, {
	        key: 'getConstraintNode',
	        value: function getConstraintNode(elt) {
	            var node = null;
	            for (; elt && elt !== this.node; elt = elt.parentNode) {
	                if (_core2.default.utils.hasClass(elt, CONSTRAINT_LINK_CTNR_CLASS) || _core2.default.utils.hasClass(elt, CONSTRAINT_ARROW)) return elt;
	                if (_core2.default.utils.hasClass(elt, CONSTRAINT_LINK_CLASS)) node = elt;
	            }
	            return node;
	        }
	
	        /*                 */
	        /*     Tooltips    */
	        /*                 */
	
	    }, {
	        key: 'showTooltip',
	        value: function showTooltip(consNode) {
	            var _this6 = this;
	
	            var cons = void 0;
	            if (consNode && consNode != this.tooltipElt && (cons = this.getConstraint(consNode))) {
	                this.tooltipElt = consNode;
	                var ctx = {
	                    limitElt: this.gantt.getBody(),
	                    showDelay: TOOLTIP_SHOWING_DELAY
	                };
	                this.gantt.tooltip.showTooltip(consNode, ctx, function (parent) {
	                    var ctx = { gantt: _this6.gantt };
	                    _this6.linkRenderer.getTooltip(parent, cons, ctx);
	                });
	            }
	        }
	    }, {
	        key: 'hideTooltip',
	        value: function hideTooltip(fadingTime) {
	            this.tooltipElt = null;
	            this.gantt.tooltip.hideTooltip(fadingTime);
	        }
	
	        /**
	         * Selection management
	         */
	
	    }, {
	        key: 'processClick',
	        value: function processClick(e) {
	            this.hideTooltip();
	            var consNode = this.getConstraintNode(e.target);
	            var cons = void 0;
	            if (consNode && (cons = this.getConstraint(consNode))) {
	                this.gantt.selection.processClick(e, cons);
	            }
	        }
	
	        //noinspection JSMethodCanBeStatic
	
	    }, {
	        key: 'clearConstraintSelection',
	        value: function clearConstraintSelection(sels) {
	            for (var i = 0, nodes, count = sels.length, sel; i < count; ++i) {
	                sel = sels[i];
	                if (nodes = sel.nodes) {
	                    for (var j = 0, _count = nodes.length; j < _count; j++) {
	                        _core2.default.utils.removeClass(nodes[j], SELECTION_CLASS);
	                    }
	                }
	            }
	        }
	
	        //noinspection JSMethodCanBeStatic
	
	    }, {
	        key: 'selectConstraints',
	        value: function selectConstraints(sels) {
	            for (var i = 0, nodes; i < sels.length; i++) {
	                if (nodes = sels[i].nodes) {
	                    for (var j = 0, count = nodes.length; j < count; j++) {
	                        _core2.default.utils.addClass(nodes[j], SELECTION_CLASS);
	                    }
	                }
	            }
	        }
	
	        //noinspection JSMethodCanBeStatic
	
	    }, {
	        key: 'unselectConstraints',
	        value: function unselectConstraints(sels) {
	            for (var i = 0, nodes; i < sels.length; i++) {
	                if (nodes = sels[i].nodes) {
	                    for (var j = 0, count = nodes.length; j < count; j++) {
	                        _core2.default.utils.removeClass(nodes[j], SELECTION_CLASS);
	                    }
	                }
	            }
	        }
	    }]);
	
	    return ConstraintsGraph;
	}(_core2.default.components.ConstraintsGraph);
	
	exports.default = ConstraintsGraph;
	;
	
	var STYLE_ARROW = 1;
	
	var NodeLabelLayout = function () {
	    function NodeLabelLayout() {
	        _classCallCheck(this, NodeLabelLayout);
	    }
	
	    _createClass(NodeLabelLayout, [{
	        key: 'startLayout',
	        value: function startLayout(act, ctx) {}
	    }, {
	        key: 'getNodeToLabelSpacing',
	        value: function getNodeToLabelSpacing(act, bbox, textWidth, ctx) {}
	    }]);
	
	    return NodeLabelLayout;
	}();
	
	var DefaultNodeLabelLayout = function (_NodeLabelLayout) {
	    _inherits(DefaultNodeLabelLayout, _NodeLabelLayout);
	
	    function DefaultNodeLabelLayout(left) {
	        _classCallCheck(this, DefaultNodeLabelLayout);
	
	        var _this7 = _possibleConstructorReturn(this, (DefaultNodeLabelLayout.__proto__ || Object.getPrototypeOf(DefaultNodeLabelLayout)).call(this));
	
	        _this7.left = left;
	        return _this7;
	    }
	
	    _createClass(DefaultNodeLabelLayout, [{
	        key: 'getNodeToLabelSpacing',
	        value: function getNodeToLabelSpacing(act, bbox, textWidth, ctx) {
	            return this.left ? -ctx.nodeToLinkPadding : ctx.nodeToLinkPadding;
	        }
	    }]);
	
	    return DefaultNodeLabelLayout;
	}(NodeLabelLayout);
	
	var LinkRendererPrototype = {
	    drawLink: function drawLink(object, points, style, parentElt, ctx) {
	        if (points.length < 2) return null;
	        var lastX = points[0].x,
	            lastY = points[0].y;
	        var nodes = [];
	        var color = this.color ? this.color(object, ctx) : undefined;
	        var css = this.getCSS && this.getCSS(object, ctx);
	        var w = this.lineWidth && this.lineWidth(object, ctx);
	        var i = 0,
	            line = void 0,
	            pt = void 0,
	            horiz = void 0;
	        while (true) {
	            line = document.createElement('div');
	            line.style.position = 'absolute';
	            line.style.pointerEvents = 'auto';
	            pt = points[++i];
	            if (object && object.id) line.id = object.id + ID_DELIM + i;
	            horiz = pt.y === lastY;
	            line.className = CONSTRAINT_LINK_CLASS + ' ' + (horiz ? 'constraint-horiz-link' : 'constraint-vert-link');
	
	            if (this.linkOutlineWidth) {
	                line.className = CONSTRAINT_LINK_CTNR_CLASS + ' ' + (horiz ? 'constraint-horiz-link' : 'constraint-vert-link');
	                if (horiz) {
	                    line.style.height = (w || 1) + this.linkOutlineWidth + this.linkOutlineWidth + 'px';
	                    line.style.paddingTop = line.style.paddingBottom = this.linkOutlineWidth + 'px';
	                    line.style.top = lastY - this.linkOutlineWidth + 'px';
	                    line.style.left = Math.min(lastX, pt.x) + 'px';
	                    line.style.width = Math.abs(lastX - pt.x) + (i && lastX > pt.x ? w || 1 : 0) + 'px';
	                    if (css) line.className += ' ' + css;
	
	                    var link = document.createElement('div');
	                    link.className = CONSTRAINT_LINK_CLASS + ' constraint-horiz-link';
	                    if (w) link.style.height = w + 'px';
	                    link.style.width = '100%';
	                    line.appendChild(link);
	                } else {
	                    line.style.width = (w || 1) + this.linkOutlineWidth + this.linkOutlineWidth + 'px';
	                    line.style.paddingLeft = line.style.paddingRight = this.linkOutlineWidth + 'px';
	                    line.style.left = lastX - this.linkOutlineWidth + 'px';
	                    line.style.top = Math.min(lastY, pt.y) + 'px';
	                    line.style.height = Math.abs(lastY - pt.y) + 'px';
	                    if (css) line.className += ' ' + css;
	
	                    var _link = document.createElement('div');
	                    _link.className = CONSTRAINT_LINK_CLASS + ' constraint-vert-link';
	                    if (w) _link.style.width = w + 'px';
	                    _link.style.height = '100%';
	                    line.appendChild(_link);
	                }
	            } else if (horiz) {
	                if (w) line.style.height = w + 'px';
	                line.style.top = lastY + 'px';
	                line.style.left = Math.min(lastX, pt.x) + 'px';
	                line.style.width = Math.abs(lastX - pt.x) + (i && lastX > pt.x ? w || 1 : 0) + 'px';
	                if (css) line.className += ' ' + css;
	            } else {
	                if (w) line.style.width = w + 'px';
	                line.style.left = lastX + 'px';
	                line.style.top = Math.min(lastY, pt.y) + 'px';
	                line.style.height = Math.abs(lastY - pt.y) + 'px';
	                if (css) line.className += ' ' + css;
	            }
	            nodes.push(line);
	            parentElt.appendChild(line);
	            if (i === points.length - 1) {
	                if (style === STYLE_ARROW) {
	                    if (horiz) {
	                        var arrowWidth = this.arrowWidth(object, ctx),
	                            arrowHeight = this.arrowHeight(object, ctx);
	                        if (lastX < pt.x) {
	                            line = this.drawRightArrow(pt.x, lastY, arrowWidth, arrowHeight, color);
	                        } else {
	                            line = this.drawLeftArrow(pt.x, lastY, arrowWidth, arrowHeight, color);
	                        }
	                        line.style.pointerEvents = 'auto';
	                        if (css) line.className += ' ' + css;
	                        if (object && object.id) line.id = object.id + ID_DELIM + 'arrow';
	                        nodes.push(line);
	                        parentElt.appendChild(line);
	                    }
	                }
	                return nodes;
	            } else {
	                lastX = pt.x;
	                lastY = pt.y;
	            }
	        }
	    },
	    drawLeftArrow: function drawLeftArrow(x, y, arrowWidth, arrowHeight, color) {
	        var node = document.createElement('div');
	        node.style.position = 'absolute';
	        node.className = CONSTRAINT_ARROW + ' constraint-left-arrow';
	        node.style.left = x + 'px';
	        node.style.top = y - (arrowHeight - 1) + 'px';
	        node.style.width = '0';
	        node.style.height = '0';
	        node.style.borderTop = arrowHeight + 'px solid transparent';
	        node.style.borderBottom = arrowHeight + 'px solid transparent';
	        node.style.borderRightWidth = arrowWidth + 'px';
	        node.style.borderRightStyle = 'solid';
	        if (color) node.style.borderRightColor = color;
	        return node;
	    },
	    drawRightArrow: function drawRightArrow(x, y, arrowWidth, arrowHeight, color) {
	        var node = document.createElement('div');
	        node.style.position = 'absolute';
	        node.className = CONSTRAINT_ARROW + ' constraint-right-arrow';
	        node.style.left = x - arrowWidth + 'px';
	        node.style.top = y - (arrowHeight - 1) + 'px';
	        node.style.width = '0';
	        node.style.height = '0';
	        node.style.borderTop = arrowHeight + 'px solid transparent';
	        node.style.borderBottom = arrowHeight + 'px solid transparent';
	        node.style.borderLeftWidth = arrowWidth + 'px';
	        node.style.borderLeftStyle = 'solid';
	        if (color) node.style.borderLeftColor = color;
	        return node;
	    },
	    arrowWidth: function arrowWidth() {
	        return 5;
	    },
	    arrowHeight: function arrowHeight() {
	        return 5;
	    },
	
	
	    getTooltipProperties: function getTooltipProperties(cons, ctx) {
	        var getName = function getName(act) {
	            return act.name || act.id;
	        };
	        var props = [_core2.default.utils.getString('gantt.constraintChart.from'), getName(cons.from), _core2.default.utils.getString('gantt.constraintChart.to'), getName(cons.to), _core2.default.utils.getString('gantt.constraintChart.type')];
	        var type = void 0;
	        if (cons.type === _core2.default.constraintTypes.START_TO_START) type = _core2.default.utils.getString('gantt.constraintChart.start.start');else if (cons.type === _core2.default.constraintTypes.START_TO_END) type = _core2.default.utils.getString('gantt.constraintChart.start.end');else if (cons.type === _core2.default.constraintTypes.END_TO_END) type = _core2.default.utils.getString('gantt.constraintChart.end.end');else type = _core2.default.utils.getString('gantt.constraintChart.end.start');
	        props.push(type);
	        return props;
	    },
	
	    processConfiguration: function processConfiguration(selector, config) {
	        this.defaultProcessConfiguration(selector, config);
	
	        if (config.lineWidth) {
	            this.addLineWidthConfiguration(selector, config.lineWidth);
	        }
	
	        if (config.arrowWidth) {
	            this.addArrowConfiguration(selector, config.arrowWidth, 'arrowWidth');
	        }
	
	        if (config.arrowHeight) {
	            this.addArrowConfiguration(selector, config.arrowWidth, 'arrowHeight');
	        }
	
	        if (config.nodeLabelLayout) {
	            this.addNodeLabelLayoutConfiguration(selector, config.nodeLabelLayout);
	        }
	    },
	
	    setColor: function setColor(elt, color) {
	        elt.style.color = color;
	    },
	    destroy: function destroy() {},
	    addLineWidthConfiguration: function addLineWidthConfiguration(selector, config) {
	        var lineWidth;
	        if (typeof config == "function") {
	            lineWidth = config;
	        } else if (typeof config == "string") {
	            var getter = _core2.default.utils.propertyEvaluator(config);
	            if (getter) {
	                lineWidth = function lineWidth(object, ctx) {
	                    return getter(object, ctx);
	                };
	            }
	        } else {
	            lineWidth = function lineWidth() {
	                return config;
	            };
	        }
	        if (lineWidth) {
	            var oldLineWidth = this.lineWidth;
	            this.lineWidth = function (object, ctx) {
	                if (!selector || selector(object, ctx)) {
	                    return lineWidth(object, ctx);
	                }
	                return oldLineWidth && oldLineWidth(object, ctx);
	            };
	        }
	    },
	    addArrowConfiguration: function addArrowConfiguration(selector, config, field) {
	        var arrowSize;
	        if (typeof config == "function") {
	            arrowSize = config;
	        } else if (typeof config == "string") {
	            var getter = _core2.default.utils.propertyEvaluator(config);
	            if (getter) {
	                arrowSize = function arrowSize(object, ctx) {
	                    return getter(object, ctx);
	                };
	            }
	        } else {
	            arrowSize = function arrowSize() {
	                return config;
	            };
	        }
	        if (arrowSize) {
	            var oldArrowSize = this[field];
	            this[field] = function (object, ctx) {
	                if (!selector || selector(object, ctx)) {
	                    return arrowSize(object, ctx);
	                }
	                return oldArrowSize && oldArrowSize(object, ctx);
	            };
	        }
	    },
	    addNodeLabelLayoutConfiguration: function addNodeLabelLayoutConfiguration(selector, config) {
	        var labelLayout = void 0;
	        if (typeof config == "string") {
	            if (config === 'left' || config === 'LEFT') {
	                labelLayout = new DefaultNodeLabelLayout(true);
	            } else if (config === 'right' || config === 'RIGHT') {
	                labelLayout = new DefaultNodeLabelLayout(false);
	            }
	        } else if (_core2.default.utils.isFunction(config)) {
	            labelLayout = new NodeLabelLayout();
	            labelLayout.getNodeToLabelSpacing = config;
	        } else {
	            labelLayout = config;
	        }
	        if (labelLayout) {
	            var oldGetLabelLayout = this.getLabelLayout;
	            this.getLabelLayout = function (object, ctx) {
	                if (!selector || selector(object, ctx)) {
	                    return labelLayout;
	                }
	                return oldGetLabelLayout && oldGetLabelLayout(object, ctx);
	            };
	        }
	    }
	};
	
	_core2.default.components.ConstraintsGraph.impl = ConstraintsGraph;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _core = __webpack_require__(39);
	
	var _core2 = _interopRequireDefault(_core);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var LOCKED = Number.MAX_VALUE;
	
	var STYLE_ARROW = 1;
	var LEFT = 0;
	var RIGHT = 1;
	var SIDE_COUNT = 2;
	
	var CONNECTOR_COUNT = 4;
	var INCOMINGS = new Array(4);
	INCOMINGS[_core2.default.constraintTypes.START_TO_START] = 0;
	INCOMINGS[_core2.default.constraintTypes.START_TO_END] = 2;
	INCOMINGS[_core2.default.constraintTypes.END_TO_START] = 0;
	INCOMINGS[_core2.default.constraintTypes.END_TO_END] = 2;
	
	var OUTGINGS = new Array(4);
	OUTGINGS[_core2.default.constraintTypes.START_TO_START] = 1;
	OUTGINGS[_core2.default.constraintTypes.START_TO_END] = 1;
	OUTGINGS[_core2.default.constraintTypes.END_TO_START] = 3;
	OUTGINGS[_core2.default.constraintTypes.END_TO_END] = 3;
	
	var Link = function () {
	    function Link(cons) {
	        _classCallCheck(this, Link);
	
	        this.ar = [cons];
	        if (cons.from.consNode.index < cons.to.consNode.index) {
	            this.topNode = cons.from.consNode;
	            this.bottomNode = cons.to.consNode;
	        } else {
	            this.topNode = cons.to.consNode;
	            this.bottomNode = cons.from.consNode;
	        }
	    }
	
	    _createClass(Link, [{
	        key: 'addConstraint',
	        value: function addConstraint(cons) {
	            this.ar.push(cons);
	            var rowIndex = cons.from.consNode.index;
	            if (rowIndex < this.topNode.index) {
	                this.topNode = cons.from.consNode;
	            } else if (rowIndex > this.bottomNode.index) {
	                this.bottomNode = cons.from.consNode;
	            }
	        }
	    }, {
	        key: 'topIndex',
	        value: function topIndex() {
	            return this.topNode.index;
	        }
	    }, {
	        key: 'bottomIndex',
	        value: function bottomIndex() {
	            return this.bottomNode.index;
	        }
	    }, {
	        key: 'toNode',
	        value: function toNode() {
	            return this.ar[0].to.consNode;
	        }
	    }, {
	        key: 'switchSides',
	        value: function switchSides() {
	            var type = this.ar[0].type;
	            return type === _core2.default.constraintTypes.END_TO_START || type === _core2.default.constraintTypes.START_TO_END;
	        }
	    }, {
	        key: 'isDisplayed',
	        value: function isDisplayed() {
	            for (var i = 0; i < this.ar.length; i++) {
	                if (!this.ar[i].nodes) {
	                    return false;
	                }
	            }
	            return true;
	        }
	    }, {
	        key: 'toString',
	        value: function toString() {
	            var s = 'Link[';
	            if (this.ar.length > 1) {
	                s += '(' + this.ar.map(function (cons) {
	                    return cons.from.consNode.toString();
	                }).join(',') + ')';
	            } else s += this.ar[0].from.consNode.toString();
	            s += ' -> ';
	            s += this.ar[0].to.consNode.toString();
	            return s + ']';
	        }
	    }, {
	        key: 'resetLayout',
	        value: function resetLayout() {
	            this.x = undefined;
	            for (var i = 0; i < this.ar.length; i++) {
	                this.ar[i].nodes = undefined;
	            }
	        }
	    }]);
	
	    return Link;
	}();
	
	function compareLinks(l1, l2) {
	    var i1 = l1.topIndex(),
	        i2 = l2.topIndex();
	    if (i1 < i2) return 1;
	    if (i1 > i2) return -1;
	    i1 = l1.bottomIndex();i2 = l2.bottomIndex();
	    return i1 < i2 ? 1 : i1 > i2 ? -1 : 0;
	}
	
	var Node = function () {
	    function Node(act, index) {
	        _classCallCheck(this, Node);
	
	        this.act = act;
	        this.index = index;
	        this.links = [[], []];
	        this.layoutLinks = 0;
	        this.linksDisplayed = 0;
	        this.bbox = null;
	        this.incomingLinks = new Array(4);
	        this.connectors = new Array(CONNECTOR_COUNT);
	        this.nodeLabelLayout = false;
	        for (var i = 0; i < CONNECTOR_COUNT; i++) {
	            this.connectors[i] = 0;
	        }
	    }
	
	    _createClass(Node, [{
	        key: 'addLink',
	        value: function addLink(link, side) {
	            var ar = this.links[side];
	            for (var i = 0, count = ar.length, thisLink; i < count; i++) {
	                thisLink = ar[i];
	                if (compareLinks(ar[i], link) >= 0) {
	                    ar.splice(i, 0, link);
	                    return;
	                }
	            }
	            ar.push(link);
	        }
	    }, {
	        key: 'getLinks',
	        value: function getLinks(side) {
	            return this.links[side];
	        }
	    }, {
	        key: 'getIncomingLink',
	        value: function getIncomingLink(type) {
	            return this.incomingLinks[type];
	        }
	    }, {
	        key: 'setIncomingLink',
	        value: function setIncomingLink(type, link) {
	            this.incomingLinks[type] = link;
	        }
	    }, {
	        key: 'incConnectionCount',
	        value: function incConnectionCount(type) {
	            this.connectors[type]++;
	        }
	    }, {
	        key: 'setBBox',
	        value: function setBBox(bbox) {
	            this.bbox = bbox;
	        }
	    }, {
	        key: 'hasLinks',
	        value: function hasLinks() {
	            for (var side = 0; side < SIDE_COUNT; side++) {
	                if (this.links[side].length) return true;
	            }
	            return false;
	        }
	    }, {
	        key: 'clearLinks',
	        value: function clearLinks() {
	            this.links = [[], []];
	            this.connectors = new Array(CONNECTOR_COUNT);
	            this.bbox = null;
	        }
	    }, {
	        key: 'resetLayout',
	        value: function resetLayout() {
	            for (var side = 0; side < SIDE_COUNT; ++side) {
	                for (var iLink = 0, ar = this.links[side], link; iLink < ar.length; iLink++) {
	                    if ((link = ar[iLink]).toNode() === this) {
	                        ar[iLink].resetLayout();
	                    }
	                }
	            }
	            this.nodeLabelLayout = false;
	        }
	    }, {
	        key: 'topRight',
	        value: function topRight() {
	            var n = this;
	            while (n.next) {
	                n = n.next;
	            }
	            return n;
	        }
	    }, {
	        key: 'toString',
	        value: function toString() {
	            return this.act.name || this.act.id;
	        }
	    }]);
	
	    return Node;
	}();
	
	var defaultLayoutOptions = {
	    horizLinkToNodeDist: 11,
	    horizSwitchSideLinkToNodeDist: 8,
	    horizLinkToLinkDist: 10,
	    switchSideLinkVertMargin: 1 // Vertical space between the To node row and the link crossing over the node
	};
	
	var ConstraintLayout = function (_Gantt$components$Con) {
	    _inherits(ConstraintLayout, _Gantt$components$Con);
	
	    function ConstraintLayout(gantt, config) {
	        _classCallCheck(this, ConstraintLayout);
	
	        return _possibleConstructorReturn(this, (ConstraintLayout.__proto__ || Object.getPrototypeOf(ConstraintLayout)).call(this, gantt, config));
	    }
	
	    _createClass(ConstraintLayout, [{
	        key: 'setConfiguration',
	        value: function setConfiguration(config) {
	            _core2.default.utils.mergeObjects(this, defaultLayoutOptions, config);
	        }
	    }, {
	        key: 'startInitialize',
	        value: function startInitialize() {
	            this.nodes = [];
	        }
	    }, {
	        key: 'addNode',
	        value: function addNode(act, index) {
	            var node = new Node(act, index);
	            node.next = this.nodes[index];
	            this.nodes[index] = node;
	            return node;
	        }
	    }, {
	        key: 'addConstraint',
	        value: function addConstraint(from, to, cons) {
	            var type = cons.type,
	                side = _core2.default.constraintTypes.isFromStart(cons.type) ? LEFT : RIGHT;
	            var link = to.getIncomingLink(INCOMINGS[type]),
	                i = void 0;
	            from.incConnectionCount(OUTGINGS[type]);
	            to.incConnectionCount(INCOMINGS[type]);
	            if (link) {
	                var beforeTop = link.topIndex(),
	                    beforeBottom = link.bottomIndex();
	                link.addConstraint(cons);
	                for (i = link.topIndex(); i < beforeTop; i++) {
	                    this.nodes[i].addLink(link, side);
	                }
	                for (i = beforeBottom + 1; i <= link.bottomIndex(); i++) {
	                    this.nodes[i].addLink(link, side);
	                }
	            } else {
	                to.setIncomingLink(INCOMINGS[type], link = new Link(cons));
	                for (i = link.topIndex(); i <= link.bottomIndex(); i++) {
	                    this.nodes[i].addLink(link, side);
	                }
	            }
	        }
	    }, {
	        key: 'stopInitialize',
	        value: function stopInitialize() {}
	    }, {
	        key: 'layoutRowNodeLinks',
	        value: function layoutRowNodeLinks(rowIndex, renderer, ctx) {
	            this.reinteringPath = null;
	            for (var consNode = this.nodes[rowIndex]; consNode; consNode = consNode.next) {
	                this.layoutOneSideNodeLinks(consNode, LEFT);
	                this.layoutOneSideNodeLinks(consNode, RIGHT);
	                this.layoutNodeLabel(consNode, renderer, ctx);
	            }
	        }
	    }, {
	        key: 'processConnectors',
	        value: function processConnectors(consNode, bbox) {
	            if (!consNode.links[LEFT].length && !consNode.links[RIGHT].length) return;
	            var parentAct = consNode.act.children && consNode.act.children.length;
	            var h = parentAct ? bbox.height / 2 : bbox.height;
	
	            for (var side = 0, connectIndex = 0, incoming, outgoing; side < SIDE_COUNT; side++, connectIndex += 2) {
	                incoming = consNode.connectors[connectIndex];
	                outgoing = consNode.connectors[connectIndex + 1];
	                if (incoming || outgoing) {
	                    if (incoming) {
	                        consNode.connectors[connectIndex] = bbox.y + bbox.top + h / (outgoing ? 3 : 2);
	                    }
	                    if (outgoing) {
	                        consNode.connectors[connectIndex + 1] = bbox.y + bbox.top + h - h / (incoming ? 3 : 2);
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'layoutOneSideNodeLinks',
	        value: function layoutOneSideNodeLinks(consNode, side, beforeLink) {
	            if (!consNode.bbox) {
	                consNode.setBBox(this.getNodeRect(consNode.act, consNode.index));
	                this.processConnectors(consNode, consNode.bbox);
	            }
	            var left = side === LEFT;
	            var nodeLimit = consNode.bbox.x + (left ? -this.horizLinkToNodeDist : consNode.bbox.width + this.horizLinkToNodeDist);
	            var limit = nodeLimit;
	            for (var i = 0, links = consNode.getLinks(side), lastIndex = beforeLink ? links.indexOf(beforeLink) : links.length, link; i < lastIndex; i++) {
	                link = links[i];
	                if (link.x === undefined) {
	                    link.x = LOCKED;
	                    var x = nodeLimit;
	                    var skipIndex = void 0;
	                    if (link.switchSides()) {
	                        // If node switch sides (goes from start to end or end to start), we don't need to layout the
	                        // 'to' node as its bounds are not taken into account into the current layout processing which
	                        // layouts the other side.
	                        var toNode = link.toNode();
	                        skipIndex = toNode.index;
	                        // However, it is still necessary to calc the 'to' node bounds for the link when it is to
	                        // be the drawn, in case the 'to' node is outside the layout processing row range.
	                        if (!toNode.bbox) {
	                            toNode.setBBox(this.getNodeRect(toNode.act, toNode.index));
	                            this.processConnectors(toNode, toNode.bbox);
	                        }
	                    }
	                    for (var index = link.topIndex(), last = link.bottomIndex(), value; index <= last; index++) {
	                        if (index !== consNode.index && index !== skipIndex) {
	                            value = this.layoutOneSideNodeLinks(this.nodes[index], side, link);
	                            if (this.reinteringPath) {
	                                this.reinteringPath = this.nodes[index].toString() + ' -> ' + link.toString() + ' -> ' + this.reinteringPath;
	                                if (!beforeLink) {
	                                    throw new Error('Re-entering layout on ' + (left ? 'left side of ' : 'right side of ') + this.reinteringPath);
	                                }
	                                return left ? Number.MAX_VALUE : Number.MIN_VALUE;
	                            } else {
	                                x = left ? Math.min(x, value) : Math.max(x, value);
	                            }
	                        }
	                    }
	                    link.x = x;
	                    consNode.layoutLinks++;
	                } else if (link.x === LOCKED) {
	                    // Re-entering on a same node, we are looping
	                    this.reinteringPath = consNode.toString() + ' -> ' + link.toString();
	                    return left ? Number.MAX_VALUE : Number.MIN_VALUE;
	                }
	                limit = left ? Math.min(limit, link.x - this.horizLinkToLinkDist) : Math.max(limit, link.x + this.horizLinkToLinkDist);
	            }
	            return limit;
	        }
	    }, {
	        key: 'layoutNodeLabel',
	        value: function layoutNodeLabel(consNode, renderer, ctx) {
	            var _this2 = this;
	
	            var label = consNode.act.label;
	            if (!label) return;
	
	            var labelLayout = renderer.getLabelLayout && renderer.getLabelLayout(consNode.act, ctx);
	            if (labelLayout) {
	                var labelW = label.getTextWidth();
	
	                var iterLinks = function iterLinks(side) {
	                    var limit = consNode.bbox.x + (side === LEFT ? 0 : consNode.bbox.width);
	                    var links = consNode.links[side];
	                    var lastX = limit,
	                        x = void 0,
	                        i = 0,
	                        link = void 0;
	                    for (; i < links.length; i++) {
	                        link = links[i];
	                        if (link.toNode() === consNode && link.switchSides()) continue; // Switching side links are either on top or at the bottom of the row in the label area, cannot go over labels
	                        x = link.x; // Link margin not taken into account, compensated with applied padding
	                        if (labelLayout.nextLink(consNode.act, side === LEFT, link.x, lastX, limit, ctx)) break;
	                        lastX = x;
	                    }
	                    return Math.abs(lastX + (side === LEFT ? -1 : 1) * (i ? _this2.horizLinkToLinkDist : _this2.horizLinkToNodeDist) - limit);
	                };
	
	                labelLayout.startLayout(consNode.act, labelW, ctx);
	                if (consNode.hasLinks() && labelLayout.nextLink) {
	                    iterLinks(RIGHT);
	                    iterLinks(LEFT);
	                }
	
	                var spacing = labelLayout.getNodeToLabelSpacing(consNode.act, consNode.bbox, labelW, ctx);
	                if (spacing < 0) {
	                    label.move(true, -spacing + labelW);
	                } else {
	                    label.move(false, spacing);
	                }
	            }
	        }
	    }, {
	        key: 'drawLink',
	        value: function drawLink(link, parentElt, renderer, ctx) {
	            var cons = link.ar[0];
	            var toNode = cons.to.consNode;
	
	            // If the link starts from one side (left/right) of the node and comes to the node on the otherside.
	            var startLeft = _core2.default.constraintTypes.isFromStart(cons.type);
	            var endLeft = _core2.default.constraintTypes.isToStart(cons.type);
	            var points = new Array(startLeft != endLeft ? 6 : 4);
	
	            link.nodes = null;
	            for (var i = 0, count = link.ar.length, fromNode, x, y, iPoint; i < count; i++) {
	                cons = link.ar[i];
	                iPoint = 0;
	                fromNode = cons.from.consNode;
	                points[iPoint++] = {
	                    x: startLeft ? fromNode.bbox.x : fromNode.bbox.x + fromNode.bbox.width,
	                    y: y = fromNode.connectors[OUTGINGS[cons.type]]
	                };
	                points[iPoint++] = {
	                    x: link.x,
	                    y: y
	                };
	                if (startLeft !== endLeft) {
	                    y = fromNode.index < toNode.index ? toNode.bbox.y + this.switchSideLinkVertMargin : toNode.bbox.y + toNode.bbox.rowHeight - this.switchSideLinkVertMargin;
	                    points[iPoint++] = {
	                        x: link.x,
	                        y: y
	                    };
	                    x = endLeft ? toNode.bbox.x - this.horizSwitchSideLinkToNodeDist : toNode.bbox.x + toNode.bbox.width + this.horizSwitchSideLinkToNodeDist;
	                    points[iPoint++] = {
	                        x: x,
	                        y: y
	                    };
	                    points[iPoint++] = {
	                        x: x,
	                        y: y = toNode.connectors[INCOMINGS[cons.type]]
	                    };
	                } else {
	                    points[iPoint++] = {
	                        x: link.x,
	                        y: y = toNode.connectors[INCOMINGS[cons.type]]
	                    };
	                }
	                points[iPoint++] = {
	                    x: endLeft ? toNode.bbox.x : toNode.bbox.x + toNode.bbox.width,
	                    y: y
	                };
	                cons.nodes = renderer.drawLink(cons, points, STYLE_ARROW, parentElt, ctx);
	            }
	        }
	    }, {
	        key: 'drawRowLinks',
	        value: function drawRowLinks(rowIndex, parentElt, renderer, ctx) {
	            var side = void 0,
	                links = void 0,
	                i = void 0,
	                count = void 0;
	            for (var consNode = this.nodes[rowIndex]; consNode; consNode = consNode.next) {
	                if (consNode.linksDisplayed === consNode.links.length) continue;
	                for (side = 0; side < SIDE_COUNT; side++) {
	                    links = consNode.getLinks(side);
	                    for (i = 0, count = links.length; i < count; ++i) {
	                        if (!links[i].isDisplayed()) {
	                            consNode.linksDisplayed++;
	                            this.drawLink(links[i], parentElt, renderer, ctx);
	                        }
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'clearLinks',
	        value: function clearLinks() {
	            for (var i = 0, count = this.nodes ? this.nodes.length : 0; i < count; i++) {
	                for (var node = this.nodes[i]; node; node = node.next) {
	                    node.clearLinks();
	                }
	            }
	        }
	    }, {
	        key: 'resetLayout',
	        value: function resetLayout() {
	            for (var i = 0, count = this.nodes ? this.nodes.length : 0; i < count; i++) {
	                for (var node = this.nodes[i]; node; node = node.next) {
	                    node.resetLayout();
	                }
	            }
	        }
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            if (this.nodes) {
	                for (var i = 0, count = this.nodes.length; i < count; i++) {
	                    if (this.nodes[i].act) {
	                        this.nodes[i].act.consNode = null;
	                    }
	                }
	                this.nodes = null;
	            }
	        }
	    }]);
	
	    return ConstraintLayout;
	}(_core2.default.components.ConstraintLayout);
	
	exports.default = ConstraintLayout;
	
	
	_core2.default.components.ConstraintLayout.impl = ConstraintLayout;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _core = __webpack_require__(39);
	
	var _core2 = _interopRequireDefault(_core);
	
	var _dragdrop = __webpack_require__(56);
	
	var _dragdrop2 = _interopRequireDefault(_dragdrop);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ROW_ID_PREFIX = 'timeTableRow_';
	var ACTIVITY_ID_PREFIX = '';
	var defaultOptions = {
	    bufferPageSize: 3
	};
	
	var TIME_MARKER_DRAG_ITEM = 'dragg-item';
	var TIME_TABLE_ACTIVITY_CLASSNAME = 'time-table-activity';
	var TIME_TABLE_ROW = 'time-table-row';
	var UNSELECTABLE_CLASSNAME = 'g-unselectable';
	
	var DEFAULT_ACTIVITY_CLASSNAME = TIME_TABLE_ACTIVITY_CLASSNAME + ' ' + UNSELECTABLE_CLASSNAME;
	var MILESTONE_CLASSNAME = DEFAULT_ACTIVITY_CLASSNAME + ' milestone';
	var PARENT_ACTIVITY_CLASSNAME = DEFAULT_ACTIVITY_CLASSNAME + ' parent-activity';
	var HIGHLIGHT_CLASS = 'highlight';
	var SELECTION_CLASS = 'selected';
	var SELECT_CONTENT_CLASSNAME = 'select-content';
	
	var DECORATION_INVALID_TYPE = 'invalid';
	var DECORATION_INVALID_CLASS = 'time-table-invalid';
	var DECORATION_BREAK_TYPE = 'break';
	var DECORATION_BREAK_CLASS = 'time-table-break';
	
	var TimeTable = function (_Gantt$components$Tim) {
	    _inherits(TimeTable, _Gantt$components$Tim);
	
	    function TimeTable(gantt, node, config) {
	        _classCallCheck(this, TimeTable);
	
	        // Selection management
	        var _this = _possibleConstructorReturn(this, (TimeTable.__proto__ || Object.getPrototypeOf(TimeTable)).call(this, gantt, node, _core2.default.utils.mergeObjects({}, defaultOptions, config)));
	
	        _core2.default.utils.addEventListener(node, 'click', function (e) {
	            return _this.processClick(e);
	        }, true);
	        _core2.default.utils.addEventListener(node, 'dblclick', function (e) {
	            return _this.processDoubleClick(e);
	        }, true);
	        _core2.default.utils.addEventListener(node, 'contextmenu', function (e) {
	            return _this.processMouseDown(e);
	        }, true);
	        var selectionHandler = gantt.selection;
	        selectionHandler.on(_core2.default.events.ACTIVITY_SELECTION_CLEARED, function (e, sels) {
	            return _this.clearActivitySelection(sels);
	        });
	        selectionHandler.on(_core2.default.events.ACTIVITY_SELECTED, function (e, sels) {
	            return _this.selectActvities(sels);
	        });
	        selectionHandler.on(_core2.default.events.ACTIVITY_UNSELECTED, function (e, sels) {
	            return _this.unselectActvities(sels);
	        });
	        selectionHandler.on(_core2.default.events.ROW_SELECTED, function (e, sels) {
	            return _this.selectRows(sels);
	        });
	        selectionHandler.on(_core2.default.events.ROW_UNSELECTED, function (e, sels) {
	            return _this.unselectRows(sels);
	        });
	        selectionHandler.on(_core2.default.events.ROW_SELECTION_CLEARED, function (e, sels) {
	            return _this.unselectRows(sels);
	        });
	        return _this;
	    }
	
	    // Method called from super class
	    //noinspection JSUnusedGlobalSymbols
	
	
	    _createClass(TimeTable, [{
	        key: 'setConfiguration',
	        value: function setConfiguration(config) {
	            var _this2 = this;
	
	            this.destroy();
	
	            this.create();
	
	            this.bufferPageSize = config.bufferPageSize;
	
	            var rendererClass = _core2.default.components.Renderer.impl || _core2.default.components.Renderer;
	            this.activityRenderer = new rendererClass(config.renderer, ActivityRendererPrototype, this.gantt);
	
	            this.interactor = this.config.interactor;
	            this.moveInterator = this.interactor && this.interactor.move;
	            this.mouseHandler = this.interactor && this.interactor.click;
	
	            var onScroll = function onScroll(e) {
	                if (_this2.synchronizeTableTop(e.target.scrollTop)) {
	                    e.preventDefault && e.preventDefault();
	                }
	            };
	            _core2.default.utils.addEventListener(this.scroller, 'scroll', onScroll);
	            if (this.moveInterator) this.initDragAndDrop();
	            this.initTooltip();
	            this.events = {};
	
	            var layoutClass = _core2.default.components.ActivityLayout.impl || _core2.default.components.ActivityLayout;
	            this.layout = new layoutClass(config && config.layout, null /* proto */, { gantt: this.gantt });
	        }
	    }, {
	        key: 'create',
	        value: function create() {
	            var _this3 = this;
	
	            this.scroller = document.createElement('div');
	            this.scroller.className = 'time-table-scroller';
	            // CSS layout
	            this.scroller.style.position = 'absolute';
	            this.scroller.style.height = '100%';
	            this.scroller.style.top = '0';
	            this.scroller.style.left = '0';
	            this.scroller.style.right = '0';
	            this.scroller.style.bottom = '0';
	            this.scroller.style.overflowX = 'scroll';
	            this.node.appendChild(this.scroller);
	
	            // Element used for getting the width of the visible time table area.
	            var timeTableWidthTester = document.createElement('div');
	            this.getVisibleWidth = function () {
	                return timeTableWidthTester.offsetWidth;
	            };
	            // CSS layout
	            timeTableWidthTester.style.width = '100%';
	            timeTableWidthTester.style.height = 0;
	            this.scroller.appendChild(timeTableWidthTester);
	
	            // Element used for getting the height of the visible time table area, excluding the horizontal scrollbar height
	            var timeTableHeightTester = document.createElement('div');
	            //noinspection JSUnusedGlobalSymbols
	            this.getVisibleHeight = function () {
	                return timeTableHeightTester.offsetHeight;
	            };
	            timeTableHeightTester.style.width = 0;
	            timeTableHeightTester.style.position = 'absolute';
	            timeTableHeightTester.style.top = 0;
	            timeTableHeightTester.style.height = '100%';
	            this.scroller.appendChild(timeTableHeightTester);
	
	            //noinspection JSUnresolvedVariable
	            this.body = document.createElement('div');
	            this.body.style.minHeight = '1px'; // Horizontal scroll position for this.scroll is set before the body is given a height. If this.scroll content (this.body) has no height, the h-scroll position does not apply
	            this.body.className = 'time-table-body';
	            //this.scroller.style.width = 0;
	
	            this.scroller.appendChild(this.body);
	
	            _core2.default.utils.addEventListener(this.body, 'mouseenter', function (e) {
	                var row = _this3.getTimeTableRowNode(e.target);
	                if (row) {
	                    _this3.gantt.highlightRow(row.id.substring(ROW_ID_PREFIX.length), true, true);
	                }
	            }, true);
	            _core2.default.utils.addEventListener(this.body, 'mouseleave', function (e) {
	                var row = _this3.getTimeTableRowNode(e.target);
	                if (row) {
	                    _this3.gantt.highlightRow(row.id.substring(ROW_ID_PREFIX.length), false, true);
	                }
	            }, true);
	        }
	    }, {
	        key: 'update',
	        value: function update() {
	            this.draw();
	        }
	    }, {
	        key: 'createUpdates',
	        value: function createUpdates(parent) {
	            var _this4 = this;
	
	            return new (_core2.default.components.GanttUpdates.impl || _core2.default.components.GanttUpdates)(parent, {
	                applyReload: function applyReload() {
	                    _this4.draw();
	                },
	
	                applyUpdates: function applyUpdates() {
	                    var containsRowChanges = _this4.ctsGraph && parent.containsRowChanges();
	                    if (containsRowChanges) {
	                        _this4.resetConstraints();
	                    }
	                    _this4.draw();
	                }
	            });
	        }
	
	        //noinspection JSUnusedLocalSymbols
	
	    }, {
	        key: 'renderRow',
	        value: function renderRow(row, ctx) {
	            var timeLine = this.gantt.timeLine;
	            var actRow = {
	                row: row,
	                getX: function getX(date) {
	                    return timeLine.getXFromMillis(date);
	                },
	                setRowHeight: function setRowHeight(h) {
	                    this.height = h;
	                }
	            };
	            var node = document.createElement('div');
	            node.id = ROW_ID_PREFIX + row.id;
	            var table = this.gantt.table;
	            // In Firefox, the use of tr.offsetHeight leads to error.
	            // For a row of height 32.5px, tr.offsetHeight will return 33px where as the actual display of the row takes 32px.
	            // Gantt.utils.getHeight internally invokes the JQuery.height() function which is more reliable.
	            var oldRowHeight = table.getRowHeight(row);
	            var variableLayoutRowHeight = this.layout.allowVariableRowHeight();
	            actRow.tableRowHeight = actRow.height = !variableLayoutRowHeight && this.activityRenderer.rowHeight && this.activityRenderer.rowHeight(row) || oldRowHeight;
	            if (!variableLayoutRowHeight && actRow.height != oldRowHeight) {
	                table.setRowHeight(row, actRow.height);
	                // For example if actRow.height < minimum table row height
	                actRow.height = oldRowHeight = table.getRowHeight(row);
	            }
	
	            // See http://help.dottoro.com/lhwdpnva.php
	            // for making nodes unselectable
	            node.className = (ctx.odd ? TIME_TABLE_ROW + ' odd' : TIME_TABLE_ROW) + ' ' + UNSELECTABLE_CLASSNAME;
	            //node.style.backgroundColor = row.tr.style.backgroundColor;
	
	            var rowSpan = document.createElement('div');
	            rowSpan.innerHTML = '' + (row.index + 1);
	            rowSpan.className = 'row-number';
	            node.appendChild(rowSpan);
	            actRow.rowNode = node;
	
	            if (this.activityRenderer.generateRowDecorations) {
	                this.generateRowDecorations(row, node, ctx);
	            }
	
	            this.renderActivities(actRow, ctx);
	
	            if (actRow.height != oldRowHeight) {
	                table.setRowHeight(row, actRow.height);
	                // For example if actRow.height < minimum table row height
	                actRow.height = table.getRowHeight(row);
	            }
	
	            node.style.height = actRow.height + 'px';
	            return actRow;
	        }
	    }, {
	        key: 'renderActivities',
	        value: function renderActivities(activityRow) {
	            var activityFilter = this.getActivityFilter(),
	                activities = activityRow.row.activities,
	                actCount = activities && activities.length || 0;
	            var actNodes = void 0,
	                iAct = void 0,
	                act = void 0,
	                actNode = void 0;
	            activityRow.activities = actNodes = [];
	            if (actCount) {
	                for (iAct = 0; iAct < actCount; ++iAct) {
	                    act = activities[iAct];
	
	                    act.node = actNode = (!activityFilter || activityFilter.accept(act, activityRow.row)) && this.renderActivity(act, activityRow.row, activityRow.rowNode) || null;
	                    if (actNode) {
	                        if (act.id) {
	                            actNode.id = ACTIVITY_ID_PREFIX + activityRow.rowNode.id + act.id;
	                        }
	                        actNodes.push(act);
	                        activityRow.rowNode.appendChild(actNode);
	                    }
	                }
	                this.layout.layout(activityRow);
	            }
	        }
	    }, {
	        key: 'getActivityFilter',
	        value: function getActivityFilter() {
	            var activityFilter = this.gantt.activityFilter;
	            return activityFilter && !activityFilter.isEmpty() ? activityFilter : null;
	        }
	    }, {
	        key: 'renderActivity',
	        value: function renderActivity(act, row, timeTableRowNode) {
	            return this.activityRenderer.draw(act, timeTableRowNode, row);
	        }
	    }, {
	        key: 'getX',
	        value: function getX(date) {
	            return this.gantt.timeLine.getXFromMillis(date);
	        }
	    }, {
	        key: 'draw',
	        value: function draw(forceRedraw) {
	            var _this5 = this;
	
	            if (this.container) {
	                this.body.removeChild(this.container);
	                this.container = null;
	            }
	            var ctsNode = void 0;
	            if (this.ctsGraph && forceRedraw) {
	                this.resetConstraints();
	            }
	
	            // Draw the height of several row pages
	            var top = this.scroller.scrollTop;
	            this.lastRepaintY = top;
	            if (top < 0) {
	                top = 0;
	            }
	            var table = this.gantt.table;
	            top -= Math.abs((this.bufferPageSize - 1) / 2 * this.scroller.clientHeight);
	            if (top < 0) {
	                top = 0;
	            }
	
	            var timeLine = this.gantt.timeLine;
	            var ctx = {
	                getX: function getX(millis) {
	                    timeLine.getXFromMillis(millis);
	                },
	                horiz: this.gantt.timeLine.getScrollableHorizon(),
	                gantt: this.gantt
	            };
	            // Generate  global decorations
	            if (this.activityRenderer.generateDecorations && (forceRedraw || !this.backgroundCtnr)) {
	                this.generateGlobalDecorations(ctx);
	            }
	            var row = table.getRowAt(top);
	            if (row && row.getData()) {
	                // If no rows are displayed, a row displaying 'No matching records found' is displayed instead: no activities to display
	                top = table.getRowTop(row);
	
	                var ctsRows = this.ctsGraph ? [] : null,
	                    firstRowIndex = row.index;
	
	                var maxBufferHeight = top + this.bufferPageSize * this.scroller.clientHeight;
	                var yFinal = Math.min(maxBufferHeight, table.getHeight());
	                var variableHeightLayout = this.layout.allowVariableRowHeight() || this.activityRenderer.rowHeight;
	                ctx.odd = row.index % 2 == 0; // This is the way datatables work...
	
	                this.container = this.createContainer(top);
	
	                var activityRow;
	                while (row && top < yFinal) {
	                    activityRow = row.activityRow;
	                    if (forceRedraw || !activityRow || !activityRow.rowNode) {
	                        row.activityRow = activityRow = this.renderRow(row, ctx);
	                    }
	                    this.container.appendChild(activityRow.rowNode);
	
	                    if (ctsRows) {
	                        ctsRows.push({ y: top, height: activityRow.height, row: row });
	                    }
	
	                    top += activityRow.height;
	                    if (variableHeightLayout) {
	                        // Row height can change so that the yFinal
	                        yFinal = Math.min(maxBufferHeight, table.getHeight());
	                    }
	                    ctx.odd = !ctx.odd;
	                    row = table.nextRow(row);
	                }
	
	                if (this.ctsGraph && this.ctsGraph.node) {
	                    this.body.insertBefore(this.container, this.ctsGraph.node);
	                } else {
	                    this.body.appendChild(this.container);
	                }
	                if (variableHeightLayout) {
	                    this.gantt.updateScrollerHeight();
	                }
	
	                if (this.ctsGraph) {
	                    var updateScrolls = false;
	                    this.ctsGraph.draw(ctsRows, function (row) {
	                        // Draw callback to draw additional rows
	                        activityRow = row.activityRow;
	                        if (forceRedraw || !activityRow || !activityRow.rowNode) {
	                            row.activityRow = activityRow = _this5.renderRow(row, ctx);
	                        }
	                        if (row.index > firstRowIndex) {
	                            // We only add row nodes rendered after the last row node above.
	                            // The constraint draw algorithm ensures that additional rows to be rendered are drawn
	                            // in ascending order, from the lowest to the highest index.
	                            _this5.container.appendChild(activityRow.rowNode);
	                            updateScrolls = true;
	                        }
	                    }).then(function () {
	                        if (forceRedraw) {
	                            _this5.body.appendChild(ctsNode);
	                        }
	                        if (updateScrolls) {
	                            _this5.gantt.updateScrollerHeight();
	                        }
	                    });
	                }
	            }
	            this._ready = true;
	        }
	    }, {
	        key: 'createContainer',
	        value: function createContainer(y) {
	            var c = document.createElement('div');
	            c.className = 'time-table-row-container';
	            //c.style.width = this.gantt.getTimeTableWidth() + 'px';
	            c.style.width = this.getBodyWidth() + 'px';
	            c.style.overflow = 'none';
	            c.style.position = 'absolute';
	            c.style.padding = 0;
	            c.style.border = 'none';
	            c.style.top = y + 'px';
	            c.style.left = 0;
	            return c;
	        }
	    }, {
	        key: 'on',
	        value: function on(event, handler) {
	            if (event == _core2.default.events.TIME_TABLE_INIT) {
	                if (this._ready) {
	                    handler.call(this);
	                } else {
	                    _get(TimeTable.prototype.__proto__ || Object.getPrototypeOf(TimeTable.prototype), 'on', this).call(this, this, _core2.default.events.TIME_TABLE_INIT, handler);
	                }
	            }
	        }
	    }, {
	        key: 'onResize',
	        value: function onResize() {
	            this.draw(false);
	        }
	    }, {
	        key: 'getActivityNode',
	        value: function getActivityNode(elt) {
	            for (; elt && elt !== this.body; elt = elt.parentNode) {
	                if (TimeTable.isActivityNode(elt)) {
	                    return elt;
	                }
	            }
	            return null;
	        }
	    }, {
	        key: 'getActivity',
	        value: function getActivity(activityElt) {
	            var tr = this.getTimeTableRowNode(activityElt);
	            if (tr) {
	                var row = this.getRow(tr.id.substring(ROW_ID_PREFIX.length));
	
	                var activities = row && row.activityRow && row.activityRow.activities;
	                if (activities) {
	                    for (var iAct = 0; iAct < activities.length; iAct++) {
	                        if (activities[iAct].node == activityElt) {
	                            return activities[iAct];
	                        }
	                    }
	                }
	            }
	            return null;
	        }
	    }, {
	        key: 'getTimeTableRowNode',
	        value: function getTimeTableRowNode(activityNode) {
	            for (var tr = activityNode; tr !== this.body; tr = tr.parentNode) {
	                if (_core2.default.utils.hasClass(tr, TIME_TABLE_ROW)) {
	                    return tr;
	                }
	            }
	            return null;
	        }
	
	        //noinspection JSUnusedGlobalSymbols
	
	    }, {
	        key: 'getActivityRow',
	        value: function getActivityRow(activity) {
	            var tr,
	                actNode = activity.node && activity.start && activity.node || activity;
	            for (tr = actNode.parentNode; tr != this.body; tr = tr.parentNode) {
	                if (this.utils.hasClass(tr, TIME_TABLE_ROW)) {
	                    break;
	                }
	            }
	            return tr && this.getRow(tr.id.substring(ROW_ID_PREFIX.length));
	        }
	    }, {
	        key: 'getRow',
	        value: function getRow(id) {
	            return this.gantt.table.getRow(id);
	        }
	    }, {
	        key: 'scrollToRow',
	        value: function scrollToRow(row) {
	            var y = this.gantt.table.getRowTop(row);
	            var top = this.scroller.scrollTop;
	            // If row before or after visible area
	            if (y < top || y > top + this.getVisibleHeight()) {
	                this.scrollToY(y);
	            }
	            // Check if row is fully visible
	            else {
	                    // Draw of row has been called, we can access its height.
	                    var rowHeight = this.gantt.getRowHeight(row);
	                    if (top + this.getVisibleHeight() < y + rowHeight) {
	                        this.scrollToY(y);
	                    }
	                }
	        }
	    }, {
	        key: 'setFirstVisibleRow',
	        value: function setFirstVisibleRow(row) {
	            var y = this.gantt.table.getRowTop(row);
	            this.scrollToY(y);
	        }
	    }, {
	        key: 'scrollToY',
	        value: function scrollToY(y) {
	            this.scroller.scrollTop = y;
	            // For unit test, we want both the time table and table have their top synchronised immediatly
	            this.synchronizeTableTop(y);
	        }
	    }, {
	        key: 'setScrollTop',
	        value: function setScrollTop(y) {
	            this.scroller.scrollTop = y;
	        }
	    }, {
	        key: 'synchronizeTableTop',
	        value: function synchronizeTableTop(top) {
	            var table = this.gantt.table && this.gantt.table.getScrollableTable();
	            if (table) {
	                // Table may not be initialized yet.
	                table.scrollTop = top;
	
	                var scrollTop = table.scrollTop;
	                // No empty space below the table which impacts the default scrolling strategy of the element.
	                // When reaching the bottom of the table, last scroll down events won't impact table's display
	                // We need to reflect that on the time table scrollbar
	                //e.target.scrollTop = scrollTop;
	                if (this.lastRepaintY == undefined || Math.abs(scrollTop - this.lastRepaintY) > this.scroller.clientHeight) {
	                    this.draw();
	                }
	                return true;
	            }
	            return false;
	        }
	    }, {
	        key: 'highlightActivity',
	        value: function highlightActivity(act, highlight, deSelectAll) {
	            if (deSelectAll && (!act || !_core2.default.utils.hasClass(act, HIGHLIGHT_CLASS))) {
	                var highlightActs = this.body.querySelectorAll('.' + TIME_TABLE_ACTIVITY_CLASSNAME + '.' + HIGHLIGHT_CLASS);
	                if (highlightActs && highlightActs.length) {
	                    for (var i = 0; i < highlightActs.length; i++) {
	                        _core2.default.utils.removeClass(highlightActs[i], HIGHLIGHT_CLASS);
	                    }
	                }
	            }
	            if (act) {
	                _core2.default.utils.toggleClass(act, HIGHLIGHT_CLASS, highlight);
	            }
	        }
	    }, {
	        key: 'highlightRow',
	        value: function highlightRow(row, highlight, deSelectAll) {
	            if (deSelectAll) {
	                var highlightRows = this.body.querySelectorAll('.' + TIME_TABLE_ROW + '.' + HIGHLIGHT_CLASS);
	                if (highlightRows && highlightRows.length) {
	                    for (var i = 0; i < highlightRows.length; i++) {
	                        _core2.default.utils.removeClass(highlightRows[i], HIGHLIGHT_CLASS);
	                    }
	                }
	            }
	            if (row) {
	                if (row.activityRow && row.activityRow.rowNode) {
	                    _core2.default.utils.toggleClass(row.activityRow.rowNode, HIGHLIGHT_CLASS, highlight);
	                }
	            }
	        }
	    }, {
	        key: 'getDisplayedActivitiesTimeRange',
	        value: function getDisplayedActivitiesTimeRange() {
	            var top = this.scroller.scrollTop;
	            if (top < 0) {
	                top = 0;
	            }
	            var table = this.gantt.table;
	
	            var row = table.getRowAt(top);
	            if (!row || !row.getData()) {
	                return null; // If no rows are displayed, a row displaying 'No matching records found' is displayed instead: no activities to display
	            }
	            top = table.getRowTop(row);
	            var yFinal = Math.min(top + this.scroller.clientHeight, table.getHeight());
	            var activityFilter = this.getActivityFilter();
	            var minDate,
	                maxDate = 0,
	                activities,
	                act,
	                iAct,
	                start,
	                end,
	                actCount;
	            while (row && top < yFinal) {
	                top += row.tr.offsetHeight;
	                activities = row.activityRow && row.activityRow.activities;
	                if (actCount = activities && activities.length) {
	                    for (iAct = 0; iAct < actCount; ++iAct) {
	                        act = activities[iAct];
	                        if (!activityFilter || activityFilter.accept(act, row)) {
	                            start = act.start;
	                            end = act.end;
	                            if (minDate) {
	                                if (minDate > start) {
	                                    minDate = start;
	                                }
	                                if (maxDate < end) {
	                                    maxDate = end;
	                                }
	                            } else {
	                                minDate = start;
	                                maxDate = end;
	                            }
	                        }
	                    }
	                }
	                row = table.nextRow(row);
	            }
	            return minDate && { start: minDate, end: maxDate };
	        }
	    }, {
	        key: 'getScrollLeft',
	        value: function getScrollLeft() {
	            return this.scroller.scrollLeft;
	        }
	    }, {
	        key: 'setScrollLeft',
	        value: function setScrollLeft(x) {
	            this.scroller.scrollLeft = x;
	        }
	    }, {
	        key: 'getScroller',
	        value: function getScroller() {
	            return this.scroller;
	        }
	    }, {
	        key: 'getRightMargin',
	        value: function getRightMargin() {
	            return this.scroller.offsetWidth - this.getVisibleWidth();
	        }
	    }, {
	        key: 'getBottomMargin',
	        value: function getBottomMargin() {
	            return this.scroller.offsetHeight - this.getVisibleHeight();
	        }
	    }, {
	        key: 'setBodyWidth',
	        value: function setBodyWidth(w) {
	            //this.timeScroller.style.width = this.timeLine.getWidth() + 'px';
	            this.body.style.width = w + 'px';
	        }
	    }, {
	        key: 'getBodyWidth',
	        value: function getBodyWidth() {
	            return this.body.offsetWidth;
	        }
	    }, {
	        key: 'setBodyHeight',
	        value: function setBodyHeight(h) {
	            this.body.style.height = h + 'px';
	        }
	
	        //noinspection JSUnusedGlobalSymbols
	
	    }, {
	        key: 'getBodyHeight',
	        value: function getBodyHeight() {
	            return _core2.default.utils.getHeight(this.scroller);
	        }
	
	        /*                 */
	        /*     Tooltips    */
	        /*                 */
	
	    }, {
	        key: 'initTooltip',
	        value: function initTooltip() {
	            var timeTable = this;
	            var resGantt = this.gantt.isResourceGantt();
	            this.gantt.tooltip.installTooltip({
	                // The container that contains elements to display tooltip for.
	                container: this.body,
	                // The container inside which bounds the tooltip can be displayed
	                getTooltipDisplayContainer: function getTooltipDisplayContainer() {
	                    return timeTable.gantt.getBody();
	                },
	
	                // Returns an element in the node hierarchy for which a tooltip can be displayed
	                getTooltipElement: function getTooltipElement(node) {
	                    return timeTable.getActivityNode(node);
	                },
	                getTooltipData: function getTooltipData(actNode) {
	                    return timeTable.getActivity(actNode);
	                },
	                renderTooltip: function renderTooltip(actNode /* The element returned by getTooltipElement */
	                , act /* data returned by getTooltipData for the specified tooltipElt */
	                , tooltipCtnr /* The container of the tooltip to fill with info. */) {
	                    if (act && (resGantt && act.row || act)) {
	                        timeTable.activityRenderer.getTooltip(tooltipCtnr, act, act.row);
	                    }
	                },
	                enteringTooltipElement: function enteringTooltipElement(actNode, act) {
	                    if (timeTable.isDragAndDropping()) return false;
	                    if (actNode) {
	                        timeTable.highlightActivity(actNode, true, true);
	                    }
	                    return true;
	                },
	                leavingTooltipElement: function leavingTooltipElement(actNode, act) {
	                    if (actNode) {
	                        timeTable.highlightActivity(actNode, false, true);
	                    }
	                }
	            });
	        }
	    }, {
	        key: 'hideTooltip',
	        value: function hideTooltip() {
	            this.gantt.tooltip.hideTooltip(0);
	        }
	        /*                 */
	        /*      Search     */
	        /*                 */
	
	        //noinspection JSUnusedGlobalSymbols
	
	    }, {
	        key: 'searchActivities',
	        value: function searchActivities(row, filter) {
	            var _this6 = this;
	
	            var activities = row.activities;
	            var actCount = activities && activities.length;
	            if (actCount) {
	                var filterFct = typeof filter === 'string' && function (act, object, filter) {
	                    return _this6.activityRenderer.filter(act, row, filter);
	                } || filter;
	                for (var iAct = 0; iAct < actCount; ++iAct) {
	                    if (filterFct(activities[iAct], row, filter)) {
	                        return true;
	                    }
	                }
	            }
	            return false;
	        }
	
	        /*                   */
	        /*   Drag and drop   */
	        /*                   */
	
	    }, {
	        key: 'initDragAndDrop',
	        value: function initDragAndDrop() {
	            var node = this.body,
	                timeTable = this;
	            this.dragDropHandler = new _dragdrop2.default(node);
	            this.dragDropHandler.addHandler({
	                startMove: function startMove(target, initOffsetX, initOffsetY) {
	                    var actNode = timeTable.getActivityNode(target);
	                    if (actNode) {
	                        this.activity = timeTable.getActivity(actNode);
	                        if (this.activity == null) {
	                            console.log('null activity!');
	                            return false;
	                        }
	                        this.initActivityRow = timeTable.getTimeTableRowNode(actNode);
	                        this.row = this.initRow = timeTable.getRow(this.initActivityRow.id.substring(ROW_ID_PREFIX.length));
	                        this.initTimeTablePos = timeTable.gantt.getTimeTableCoordinates(target, { x: initOffsetX, y: initOffsetY });
	                        this.initScrollLeft = node.scrollLeft;
	                        this.initScrollTop = node.scrollTop;
	                        this.timeLineItem = {
	                            start: new Date(this.activity.start),
	                            type: 'box'
	                        };
	                        this.timeLineItem.context = {
	                            start: this.timeLineItem.start.format(),
	                            startRow: this.initRow.name
	                        };
	                        timeTable.hideTooltip();
	                        timeTable.gantt.highlightRow(this.row, true, true);
	                        timeTable.startDraggingActivity(this);
	                        return actNode;
	                    }
	                    return false;
	                },
	                move: function move(pos) {
	                    pos.y = undefined; // We don't change the activity Y position
	                    var scrollDiffX = node.scrollLeft - this.initScrollLeft;
	                    if (scrollDiffX) {
	                        pos.dx += scrollDiffX;
	                        pos.x += scrollDiffX;
	                    }
	                    var scrollDiffY = node.scrollTop - this.initScrollTop;
	                    if (scrollDiffY) {
	                        pos.dy += scrollDiffY;
	                    }
	                    var preRow = this.row;
	                    var newRow = timeTable.gantt.table.getRowAt(this.initTimeTablePos.y + pos.dy, preRow);
	                    this.currentTime = new Date(timeTable.gantt.timeLine.getTimeAt(pos.x));
	                    if (newRow) {
	                        this.row = newRow;
	                        if (preRow.id !== newRow.id && this.initRow.id !== preRow.id) {
	                            // Keep highlighting the init row
	                            timeTable.gantt.highlightRow(preRow, false);
	                        }
	                        if (preRow.id !== newRow.id) {
	                            if (this.initRow.id !== preRow.id) {
	                                timeTable.gantt.highlightRow(preRow, false);
	                            }
	                            if (this.initRow.id !== newRow.id) {
	                                timeTable.gantt.highlightRow(newRow, true);
	                            }
	                            if (newRow.activityRow) {
	                                newRow.activityRow.rowNode.appendChild(timeTable.dragDropHandler.draggedObject);
	                            }
	                        }
	                        return this.row.id !== this.initRow.id ? timeTable.acceptActivityRowChange(this) : timeTable.acceptActivityMove(this);
	                    } else {
	                        return false;
	                    }
	                },
	                moved: function moved() {
	                    this.updateTimeLineItem();
	                },
	                restoreInitPosition: function restoreInitPosition() {
	                    if (this.row && this.initRow.id !== this.row.id) {
	                        timeTable.gantt.highlightRow(this.row, false);
	                        this.row = this.initRow;
	                    }
	                    node.scrollTop = this.initTop;
	                },
	                stopMove: function stopMove() {
	                    timeTable.stopDraggingActivity(this);
	                    timeTable.gantt.timeLine.removeTimeLineItem(TIME_MARKER_DRAG_ITEM);
	                    if (this.row) {
	                        timeTable.gantt.highlightRow(this.row, true, true);
	                    }
	                },
	                applyMove: function applyMove() {
	                    timeTable.applyActivityMove(this);
	                },
	                cancel: function cancel() {
	                    timeTable.abortActivityMove();
	                },
	                updateTimeLineItem: function updateTimeLineItem() {
	                    timeTable.gantt.timeLine.setTimeLineItem(TIME_MARKER_DRAG_ITEM, this.createDragTimeLineItem());
	                },
	                createDragTimeLineItem: function createDragTimeLineItem() {
	                    var item = this.timeLineItem,
	                        changeRow = this.row.id !== this.initRow.id;
	                    item.className = TIME_MARKER_DRAG_ITEM + ' ' + (timeTable.dragDropHandler.invalid ? 'dragg-invalid' : 'dragg-valid');
	                    //item.context.draggStatusClass = dragDropHandler.invalid? 'dragg-invalid' : 'dragg-valid';
	                    item.context.current = this.currentTime.format();
	                    item.start = this.currentTime;
	                    item.context.title = _core2.default.utils.formatString(changeRow ? 'Gantt.ChangeActivityRow' : 'Gantt.MoveActivity', this.activity);
	                    if (changeRow) {
	                        item.context.currentRow = this.row.name;
	                    }
	                    item.content = _core2.default.utils.formatString(changeRow ? 'timeLine.changeRowItem.fmt' : 'timeLine.newTimeItem.fmt', item.context);
	                    return item;
	                }
	            });
	            this.dragDropHandler.addEventListener(node, 'mousedown', this.dragDropHandler.startDragMouse, true); // Capturing!
	        }
	    }, {
	        key: 'startDraggingActivity',
	        value: function startDraggingActivity(actParam) {
	            if (this.moveInterator && this.moveInterator.startMove) {
	                this.moveInterator.startMove(actParam);
	            }
	        }
	    }, {
	        key: 'acceptActivityRowChange',
	        value: function acceptActivityRowChange(actParam) {
	            if (this.moveInterator && this.moveInterator.acceptRowChange) {
	                return this.moveInterator.acceptRowChange(actParam);
	            }
	            return true;
	        }
	    }, {
	        key: 'acceptActivityMove',
	        value: function acceptActivityMove(actParam) {
	            if (this.moveInterator && this.moveInterator.acceptMove) {
	                return this.moveInterator.acceptMove(actParam);
	            }
	            return true;
	        }
	    }, {
	        key: 'abortActivityMove',
	        value: function abortActivityMove(actParam) {
	            if (this.moveInterator && this.moveInterator.abortMove) {
	                return this.moveInterator.abortMove(actParam);
	            }
	            return true;
	        }
	    }, {
	        key: 'applyActivityMove',
	        value: function applyActivityMove(actParam) {
	            if (this.moveInterator && this.moveInterator.applyMove) {
	                return this.moveInterator.applyMove(actParam);
	            }
	            return true;
	        }
	    }, {
	        key: 'stopDraggingActivity',
	        value: function stopDraggingActivity(actParam) {
	            if (this.moveInterator && this.moveInterator.stopMove) {
	                return this.moveInterator.stopMove(actParam);
	            }
	            return true;
	        }
	    }, {
	        key: 'isDragAndDropping',
	        value: function isDragAndDropping() {
	            return this.dragDropHandler && this.dragDropHandler.draggedObject;
	        }
	
	        /*  Selection methods  */
	
	    }, {
	        key: 'processClick',
	        value: function processClick(e) {
	            var _this7 = this;
	
	            this.hideTooltip();
	            this.processMouseEvent(e, function (e, row, date) {
	                _this7.gantt.highlightRow(row, true, true);
	                _this7.gantt.selection.processClick(e, row);
	                if (_this7.mouseHandler && _this7.mouseHandler.rowClicked) {
	                    _this7.mouseHandler.rowClicked(e, row, date);
	                }
	            }, function (e, activity, date, row) {
	                _this7.gantt.selection.processClick(e, activity);
	                if (_this7.mouseHandler && _this7.mouseHandler.activityClicked) {
	                    _this7.mouseHandler.activityClicked(e, activity, date, row);
	                }
	            });
	        }
	    }, {
	        key: 'processMouseEvent',
	        value: function processMouseEvent(e, rowCB, activityCB) {
	            //const date = new Date(this.gantt.timeLine.getTimeAt(pos.x));
	            var coord = this.gantt.getTimeTableCoordinates(e.target, { x: event.offsetX, y: event.offsetY });
	            var date = new Date(this.gantt.timeLine.getTimeAt(coord.x));
	            if (e.target && _core2.default.utils.hasClass(e.target, TIME_TABLE_ROW)) {
	                var row = this.getRow(e.target.id.substring(ROW_ID_PREFIX.length));
	                if (row) {
	                    this.gantt.highlightRow(row, true, true);
	                    if (rowCB) {
	                        rowCB(e, row, date);
	                    }
	                    this.gantt.selection.processClick(e, row);
	                }
	            } else {
	                var actNode = _core2.default.utils.closest(e.target, '.' + TIME_TABLE_ACTIVITY_CLASSNAME);
	                var act = actNode && this.getActivity(actNode);
	                if (act) {
	                    var _row = act.row;
	                    if (!_row) {
	                        var rowNode = _core2.default.utils.closest(e.target, '.' + TIME_TABLE_ROW);
	                        _row = this.getRow(rowNode.id.substring(ROW_ID_PREFIX.length));
	                    }
	                    if (_row) {
	                        this.gantt.highlightRow(_row, true, true);
	                    }
	                    if (activityCB) {
	                        activityCB(e, act, date, _row);
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'processDoubleClick',
	        value: function processDoubleClick(e) {
	            var _this8 = this;
	
	            this.hideTooltip();
	            this.processMouseEvent(e, function (e, row, date) {
	                if (_this8.mouseHandler && _this8.mouseHandler.rowDoubleClicked && row) {
	                    _this8.mouseHandler.rowDoubleClicked(e, row, date);
	                }
	            }, function (e, activity, date, row) {
	                if (_this8.mouseHandler && _this8.mouseHandler.activityDoubleClicked) {
	                    _this8.mouseHandler.activityDoubleClicked(e, activity, date, row);
	                }
	            });
	        }
	    }, {
	        key: 'processMouseDown',
	        value: function processMouseDown(e) {
	            var _this9 = this;
	
	            this.hideTooltip();
	            if (e.which === 3) {
	                this.processMouseEvent(e, function (e, row, date) {
	                    if (_this9.mouseHandler && _this9.mouseHandler.rowRightClicked && row) {
	                        _this9.mouseHandler.rowRightClicked(e, row, date);
	                    }
	                }, function (e, activity, date, row) {
	                    if (_this9.mouseHandler && _this9.mouseHandler.activityRightClicked) {
	                        _this9.mouseHandler.activityRightClicked(e, activity, date, row);
	                    }
	                });
	                e && e.preventDefault && e.preventDefault();
	                e && e.stopPropagation && e.stopPropagation();
	                return false;
	            }
	        }
	
	        //noinspection JSMethodCanBeStatic
	
	    }, {
	        key: 'clearActivitySelection',
	        value: function clearActivitySelection(sels) {
	            for (var i = 0, count = sels.length, sel; i < count; ++i) {
	                sel = sels[i];
	                if (sel.node) {
	                    _core2.default.utils.removeClass(sel.node, SELECTION_CLASS);
	                }
	            }
	        }
	
	        //noinspection JSMethodCanBeStatic
	
	    }, {
	        key: 'selectActvities',
	        value: function selectActvities(sels) {
	            for (var i = 0, node; i < sels.length; i++) {
	                if (node = sels[i].node) {
	                    _core2.default.utils.addClass(node, SELECTION_CLASS);
	                }
	            }
	        }
	
	        //noinspection JSMethodCanBeStatic
	
	    }, {
	        key: 'unselectActvities',
	        value: function unselectActvities(sels) {
	            for (var i = 0, node; i < sels.length; i++) {
	                if (node = sels[i].node) {
	                    _core2.default.utils.removeClass(node, SELECTION_CLASS);
	                }
	            }
	        }
	
	        //noinspection JSMethodCanBeStatic
	
	    }, {
	        key: 'selectRows',
	        value: function selectRows(rows) {
	            for (var i = 0, node; i < rows.length; i++) {
	                if ((node = rows[i].activityRow) && (node = node.rowNode)) {
	                    _core2.default.utils.addClass(node, SELECTION_CLASS);
	                }
	            }
	        }
	
	        //noinspection JSMethodCanBeStatic
	
	    }, {
	        key: 'unselectRows',
	        value: function unselectRows(rows) {
	            for (var i = 0, node; i < rows.length; i++) {
	                if ((node = rows[i].activityRow) && (node = node.rowNode)) {
	                    _core2.default.utils.removeClass(node, SELECTION_CLASS);
	                }
	            }
	        }
	
	        //
	        // Decoration management
	        //
	
	    }, {
	        key: 'generateGlobalDecorations',
	        value: function generateGlobalDecorations(ctx) {
	            var decoContainer = this.gantt.timeLine.getDecorationContainer();
	            if (!decoContainer) {
	                console.warn('No decoration container found in time line');
	                return;
	            }
	            if (this.backgroundCtnr) {
	                decoContainer.removeChild(this.backgroundCtnr);
	                this.backgroundCtnr = null;
	            }
	            if (this.activityRenderer.generateDecorations) {
	                var ctnr = document.createElement('div');
	                ctnr.className = 'time-table-decoration-ctnr decoration-background-ctnr';
	                ctnr.style.position = 'absolute';
	                ctnr.style.left = 0;
	                ctnr.style.top = 0;
	                ctnr.style.bottom = 0;
	                ctnr.style.width = '100%';
	                ctnr.style.height = '100%';
	
	                var objs = this.activityRenderer.generateDecorations(ctx.horiz.start, ctx.horiz.end, ctx);
	                for (var i = 0, count = objs ? objs.length : 0, obj; i < count; ++i) {
	                    obj = objs[i];
	                    //noinspection JSUnresolvedVariable
	                    this.addDecoration(obj, ctnr);
	                }
	                if (ctnr.firstChild) {
	                    decoContainer.appendChild(this.backgroundCtnr = ctnr);
	                }
	            }
	        }
	    }, {
	        key: 'generateRowDecorations',
	        value: function generateRowDecorations(row, rowNode, ctx) {
	            var objs = this.activityRenderer.generateRowDecorations(row, ctx.horiz.start, ctx.horiz.end, ctx);
	            for (var i = 0, count = objs ? objs.length : 0, obj, node; i < count; ++i) {
	                obj = objs[i];
	                node = this.addDecoration(obj, rowNode);
	                //noinspection JSUnresolvedVariable
	                node.style.zIndex = obj.foreground ? 1 : -1;
	            }
	        }
	    }, {
	        key: 'addDecoration',
	        value: function addDecoration(obj, ctnr) {
	            var node = void 0;
	            if (obj.create) {
	                node = obj.create();
	            } else {
	                node = document.createElement('div');
	                if (obj.type) {
	                    if (obj.type === DECORATION_INVALID_TYPE) {
	                        node.className = DECORATION_INVALID_CLASS;
	                    } else if (obj.type === DECORATION_BREAK_TYPE) {
	                        node.className = DECORATION_BREAK_CLASS;
	                    }
	                } else {
	                    node.className = DECORATION_BREAK_CLASS;
	                }
	                node.display = 'inline-block';
	            }
	
	            if (obj.className) {
	                _core2.default.utils.addClass(node, obj.className);
	            }
	
	            node.style.position = 'absolute';
	            if (obj.background) {
	                node.style.background = obj.background;
	            }
	            //noinspection JSUnresolvedVariable
	            if (obj.color || obj.foreground) {
	                //noinspection JSUnresolvedVariable
	                node.style.color = obj.color || obj.foreground;
	            }
	            var left = this.gantt.timeLine.getXFromMillis(obj.start);
	            node.style.left = left + 'px';
	            node.style.width = this.gantt.timeLine.getXFromMillis(obj.end) - left;
	            node.style.top = '1px';
	            node.style.bottom = '1px';
	            ctnr.appendChild(node);
	            return node;
	        }
	
	        //
	        // Constraints
	        //
	
	    }, {
	        key: 'createConstraintGrapherNode',
	        value: function createConstraintGrapherNode() {
	            if (this.ctsGraph && this.ctsGraph.node) {
	                this.body.removeChild(this.ctsGraph.node);
	            }
	            var ctsNode = document.createElement('div');
	            ctsNode.className = 'constraints-grapher';
	            ctsNode.style.height = '100%';
	            ctsNode.style.width = '100%';
	            ctsNode.style.position = 'relative';
	            ctsNode.style.pointerEvents = 'none';
	            return ctsNode;
	        }
	    }, {
	        key: 'setConstraints',
	        value: function setConstraints(constraints) {
	            this.constraints = constraints;
	            if (constraints && constraints.length) {
	                if (!this.ctsGraph) {
	                    var ctsNode = this.createConstraintGrapherNode();
	                    this.ctsGraph = new (_core2.default.components.ConstraintsGraph.impl || _core2.default.components.ConstraintsGraph)(this.gantt, ctsNode, this.gantt.config && this.gantt.config.constraints);
	                    this.body.appendChild(ctsNode);
	                }
	                this.ctsGraph.setConstraints(constraints);
	            } else if (this.ctsGraph) {
	                if (this.ctsGraph.node) {
	                    this.body.removeChild(this.ctsGraph.node);
	                }
	                if (this.ctsGraph.destroy) {
	                    this.ctsGraph.destroy();
	                }
	                this.ctsGraph = null;
	            }
	        }
	    }, {
	        key: 'resetConstraints',
	        value: function resetConstraints() {
	            var ctsNode = this.createConstraintGrapherNode();
	            this.ctsGraph.setNode(ctsNode); // Instead of removing all links, we change the link container
	            this.ctsGraph.setConstraints(this.constraints);
	            this.body.appendChild(ctsNode);
	        }
	
	        //
	        // Destroy
	        //
	
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            if (this.backgroundCtnr) {
	                this.node.removeChild(this.backgroundCtnr);
	                this.backgroundCtnr = null;
	            }
	            if (this.foregroundCtnr) {
	                this.node.removeChild(this.foregroundCtnr);
	                this.foregroundCtnr = null;
	            }
	            if (this.activityRenderer) {
	                this.activityRenderer.destroy();
	                this.activityRenderer = null;
	            }
	
	            if (this.ctsGraph) {
	                this.ctsGraph.destroy();
	                this.ctsGraph = null;
	            }
	        }
	    }], [{
	        key: 'isActivityNode',
	        value: function isActivityNode(elt) {
	            return _core2.default.utils.hasClass(elt, TIME_TABLE_ACTIVITY_CLASSNAME);
	        }
	    }]);
	
	    return TimeTable;
	}(_core2.default.components.TimeTable);
	
	//noinspection JSUnusedLocalSymbols,JSUnusedGlobalSymbols
	
	
	exports.default = TimeTable;
	var ActivityRendererPrototype = {
	    createShape: function createShape(activity, parentElt, ctx) {
	        var elt = document.createElement('div');
	        var start = activity.start;
	        var end = activity.end;
	        if (end === start) {
	            elt.className = MILESTONE_CLASSNAME;
	            elt.style.border = 'none';
	            elt.style.maxWidth = '0';
	
	            var diamond = document.createElement('div');
	            diamond.className = 'shape';
	            diamond.style.position = 'absolute';
	            diamond.style.top = '8px';
	            diamond.style.left = '0';
	            diamond.style.right = '0';
	            diamond.style.bottom = '-8px';
	            diamond.style.minWidth = '16px';
	            diamond.style.maxHeight = '16px';
	            diamond.style.background = 'inherit';
	            elt.appendChild(diamond);
	        } else if (activity.children && activity.children.length) {
	            elt.className = PARENT_ACTIVITY_CLASSNAME;
	            elt.style.display = 'block';
	            elt.style.backgroundColor = 'transparent';
	            var bar = document.createElement('div');
	            bar.className = 'parent-activity-bar';
	            bar.style.width = '100%';
	            bar.style.height = '50%';
	            elt.appendChild(bar);
	
	            var triangleBar = document.createElement('div');
	            var triangleWidth = 7;
	            triangleBar.style.width = '100%';
	            triangleBar.style.height = '50%';
	            triangleBar.style.backgroundColor = 'transparent';
	
	            var leftTriangle = document.createElement('div');
	            leftTriangle.className = 'top-left-triangle activity-limit';
	            leftTriangle.style.display = 'inline-block';
	            leftTriangle.style.float = 'left';
	            leftTriangle.style.width = '0';
	            leftTriangle.style.height = '0';
	            leftTriangle.style.borderTopStyle = 'solid';
	            leftTriangle.style.borderTopWidth = triangleWidth + 'px';
	            leftTriangle.style.borderRightStyle = 'solid';
	            leftTriangle.style.borderRightWidth = triangleWidth + 'px';
	            leftTriangle.style.borderRightColor = 'transparent';
	            triangleBar.appendChild(leftTriangle);
	
	            var rightTriangle = document.createElement('div');
	            rightTriangle.className = 'top-right-triangle activity-limit';
	            triangleBar.appendChild(rightTriangle);
	            rightTriangle.style.display = 'inline-block';
	            rightTriangle.style.float = 'right';
	            rightTriangle.style.width = '0';
	            rightTriangle.style.height = '0';
	            rightTriangle.style.borderTopStyle = 'solid';
	            rightTriangle.style.borderTopWidth = triangleWidth + 'px';
	            rightTriangle.style.borderLeftStyle = 'solid';
	            rightTriangle.style.borderLeftWidth = triangleWidth + 'px';
	            rightTriangle.style.borderLeftColor = 'transparent';
	            elt.appendChild(triangleBar);
	        } else {
	            elt.className = DEFAULT_ACTIVITY_CLASSNAME;
	        }
	        var selElt = document.createElement('div');
	        selElt.className = SELECT_CONTENT_CLASSNAME;
	        selElt.style.height = '100%';
	        selElt.style.display = 'flex';
	        selElt.style.justifyContent = 'space-between';
	        selElt.style.alignItems = 'center';
	        selElt.style.border = 'none';
	        elt.appendChild(selElt);
	        return elt;
	    },
	
	    drawRightContent: function drawRightContent(elt, icon, text, object, ctx) {
	        var textCtnr = document.createElement('div');
	        textCtnr.style.position = 'absolute';
	        textCtnr.className = 'text-container right';
	        textCtnr.style.left = '100%';
	        textCtnr.style.top = '0';
	        textCtnr.style.height = '100%';
	        if (icon) {
	            var img = document.createElement('img');
	            img.className = 'image-content';
	            img.src = icon;
	            img.alt = '';
	            textCtnr.appendChild(img);
	        }
	        elt.style.overflowX = 'visible';
	        var t = document.createElement('span');
	        t.className = 'text-content';
	        t.innerHTML = text;
	        textCtnr.appendChild(t);
	        elt.appendChild(textCtnr);
	        object.label = {
	            getTextWidth: function getTextWidth() {
	                return t.offsetWidth;
	            },
	            getTextHeight: function getTextHeight() {
	                return t.offsetHeight;
	            },
	            move: function move(left, dist) {
	                _core2.default.utils.toggleClass(textCtnr, 'left', left);
	                textCtnr.style.marginLeft = 0; // Default one is for margin on text without links
	                if (left) {
	                    textCtnr.style.left = -dist + 'px';
	                    textCtnr.style.paddingLeft = 0;
	                } else {
	                    textCtnr.style.left = '100%';
	                    textCtnr.style.paddingLeft = dist + 'px';
	                }
	            }
	        };
	        return textCtnr;
	    },
	
	
	    getText: function getText(activity, ctx) {
	        return activity.name;
	    },
	
	    getTooltipProperties: function getTooltipProperties(act) {
	        var props = [_core2.default.utils.getString("gantt.start"), new Date(act.start).format(), _core2.default.utils.getString("gantt.end"), new Date(act.end).format()];
	        if (act.id !== undefined) {
	            props.push(_core2.default.utils.getString("gantt.id"));
	            props.push(act.id);
	        }
	        return props;
	    },
	
	
	    processConfiguration: function processConfiguration(selector, config) {
	        this.defaultProcessConfiguration(selector, config);
	
	        if (config.rowHeight) {
	            this.addRowHeightConfiguration(selector, config.rowHeight);
	        }
	
	        if (config.generateRowDecorations) {
	            this.addGenerateRowDecorations(selector, config.generateRowDecorations);
	        }
	
	        if (config.generateDecorations) {
	            this.addGenerateDecorations(selector, config.generateDecorations);
	        }
	    },
	
	    initialized: function initialized(config) {
	        var _this10 = this;
	
	        var gantt = this.paletteHandler;
	        this.defaultSetBackground = this.setBackground;
	        this.drawDefaultContentSet = this.drawDefaultContent;
	        this.ganttLoadListener = function (e) {
	            if (gantt.isResourceGantt()) {
	                _this10.drawDefaultContent = _this10.drawNoDisplayOverflowContent;
	                _this10.setBackground = _this10.defaultSetBackground;
	                _this10.drawDefaultContent = _this10.drawDefaultContentSet;
	            } else {
	                // TODO Don't put a setter in a get...
	                _this10.setBackground = function (shapeElt, bg) {
	                    if (_core2.default.utils.hasClass('parent-activity')) {
	                        shapeElt.querySelectorAll('.activity-limit').map(function (elt) {
	                            elt.style.borderColor = bg;
	                        });
	                        shapeElt.querySelector('parent-activity-bar').style.backgroundColor = bg;
	                    } else {
	                        this.drawDefaultContentSet(shapeElt, bg);
	                    }
	                };
	                _this10.drawDefaultContent = _this10.drawRightContent;
	            }
	        };
	        gantt.on(_core2.default.events.DATA_LOADED, this.ganttLoadListener);
	    },
	    destroy: function destroy() {
	        if (this.ganttLoadListener) {
	            var gantt = this.paletteHandler;
	            gantt.off(_core2.default.events.DATA_LOADED, this.ganttLoadListener);
	            this.ganttLoadListener = null;
	        }
	    },
	    addRowHeightConfiguration: function addRowHeightConfiguration(selector, config) {
	        var rowHeight;
	        if (typeof config == "function") {
	            rowHeight = config;
	        } else if (typeof config == "string") {
	            var getter = _core2.default.utils.propertyEvaluator(config);
	            if (getter) {
	                rowHeight = function rowHeight(object, ctx) {
	                    return getter(object, ctx);
	                };
	            }
	        } else {
	            rowHeight = function rowHeight() {
	                return config;
	            };
	        }
	        if (rowHeight) {
	            var oldRowHeight = this.rowHeight;
	            this.rowHeight = function (object, ctx) {
	                if (!selector || selector(object)) {
	                    return rowHeight(object, ctx);
	                }
	                return oldRowHeight && oldRowHeight(object, ctx);
	            };
	        }
	    },
	
	
	    //
	    // Decoration management
	    //
	
	    addGenerateRowDecorations: function addGenerateRowDecorations(selector, config) {
	        var generateRowDecorations;
	        if (typeof config == "function") {
	            generateRowDecorations = config;
	        } else if (typeof config == "string") {
	            var getter = _core2.default.utils.propertyEvaluator(config);
	            if (getter) {
	                generateRowDecorations = function generateRowDecorations(row, start, end, ctx) {
	                    return getter(row, start, end, ctx);
	                };
	            }
	        } else {
	            throw new Error('generateRowDecorations must be a function or an accessor to a row method');
	        }
	        if (generateRowDecorations) {
	            var oldGenerateRowDecorations = this.generateRowDecorations;
	            this.generateRowDecorations = function (row, start, end, ctx) {
	                var decorations = oldGenerateRowDecorations && oldGenerateRowDecorations(row, start, end, ctx) || null;
	                if (!selector || selector(row)) {
	                    var newDecos = generateRowDecorations(row, start, end, ctx);
	                    if (newDecos && newDecos.length) {
	                        return !decorations || !decorations.length ? newDecos : decorations.concat(newDecos);
	                    }
	                }
	                return decorations;
	            };
	        }
	    },
	    addGenerateDecorations: function addGenerateDecorations(selector, config) {
	        var generateDecorations;
	        if (typeof config == "function") {
	            generateDecorations = config;
	        } else {
	            throw new Error('generateDecorations must be a function');
	        }
	        if (generateDecorations) {
	            var oldGenerateDecorations = this.generateDecorations;
	            this.generateDecorations = function (start, end, ctx) {
	                var decorations = oldGenerateDecorations && oldGenerateDecorations(start, end, ctx) || null;
	                if (!selector || selector(ctx)) {
	                    var newDecos = generateDecorations(start, end, ctx);
	                    if (newDecos && newDecos.length) {
	                        return !decorations || !decorations.length ? newDecos : decorations.concat(newDecos);
	                    }
	                }
	                return decorations;
	            };
	        }
	    }
	};
	
	_core2.default.components.TimeTable.impl = TimeTable;
	
	if (false) {
	    module.hot.accept();
	}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _core = __webpack_require__(39);
	
	var _core2 = _interopRequireDefault(_core);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var defaultConfig = {
	    keySpeed: 10,
	    showMoveOnInvalid: true,
	    dragActivationThresoldWidth: 5,
	    dragActivationThresoldHeight: 5
	};
	
	var DragDropHandler = function () {
	    function DragDropHandler(container, config) {
	        _classCallCheck(this, DragDropHandler);
	
	        _core2.default.utils.mergeObjects(this, defaultConfig, config);
	
	        this.container = container;
	
	        this.initialMouseX = undefined;
	        this.initialMouseY = undefined;
	        this.startX = undefined;
	        this.startY = undefined;
	        this.dXKeys = undefined;
	        this.dYKeys = undefined;
	        this.draggedObject = undefined;
	        this.clickedObject = undefined;
	        this.handlers = [];
	        this.methodsToHitch = [];
	        this.hitchedMethods = [];
	    }
	
	    _createClass(DragDropHandler, [{
	        key: 'addHandler',
	        value: function addHandler(handler) {
	            this.handlers.push(handler);
	        }
	
	        //noinspection JSUnusedGlobalSymbols
	
	    }, {
	        key: 'removeHandler',
	        value: function removeHandler(handler) {
	            var index = this.handlers.indexOf(handler);
	            if (index > -1) {
	                this.handlers.splice(index, 1);
	                return true;
	            }
	            return false;
	        }
	    }, {
	        key: 'attach',
	        value: function attach(element) {
	            var _this = this;
	
	            element.onmousedown = function (e) {
	                return _this.startDragMouse(e);
	            };
	        }
	    }, {
	        key: 'startDragMouse',
	        value: function startDragMouse(e) {
	            var evt = e || window.event;
	            if (evt.button == 2) {
	                // Right button, we cancel the drag if any
	                if (this.draggedObject) {
	                    this.cancel(evt);
	                }
	            } else if (!evt.button) {
	                this.initialMouseX = evt.clientX;
	                this.initialMouseY = evt.clientY;
	                evt.target.blur();
	                this.connectDragStarter(evt);
	                return false;
	            }
	        }
	    }, {
	        key: 'connectDragStarter',
	        value: function connectDragStarter(evt) {
	            // Drag will be triggered only if the mouse moves more than options.dragActivationThresoldWidth / options.dragActivationThresoldHeight
	            this.initOffsetX = evt.offsetX;
	            this.initOffsetY = evt.offsetY;
	            this.clickedObject = evt.target;
	            this.dXKeys = this.dYKeys = 0;
	            this.addEventListener(document, 'mousemove', this.checkStartDrag);
	            this.addEventListener(document, 'mouseup', this.cancelDragStarter);
	            this.addEventListener(document, 'keydown', this.dragStarterKeys);
	            this.addEventListener(document, 'keypress', this.dragStartSwitchKeyEvents);
	        }
	    }, {
	        key: 'checkStartDrag',
	        value: function checkStartDrag(e) {
	            var evt = e || window.event;
	            var dX = evt.clientX - this.initialMouseX;
	            var dY = evt.clientY - this.initialMouseY;
	            if (Math.abs(dX) >= this.dragActivationThresoldWidth || Math.abs(dY) >= this.dragActivationThresoldHeight) {
	                this.cancelDragStarter();
	                if (this.startDrag()) {
	                    this.move(dX, dY);
	                }
	            }
	        }
	    }, {
	        key: 'dragStartSwitchKeyEvents',
	        value: function dragStartSwitchKeyEvents() {
	            // for Opera and Safari 1.3
	            this.removeEventListener(document, 'keydown', this.dragStarterKeys);
	            this.removeEventListener(document, 'keypress', this.switchKeyEvents);
	            this.addEventListener(document, 'keypress', this.dragStarterKeys);
	        }
	    }, {
	        key: 'dragStarterKeys',
	        value: function dragStarterKeys(e) {
	            var evt = e || window.event;
	            var key = evt.keyCode;
	            switch (key) {
	                case 37: // left
	                case 63234:
	                    this.dXKeys -= this.keySpeed;
	                    break;
	                case 38: // up
	                case 63232:
	                    this.dYKeys -= this.keySpeed;
	                    break;
	                case 39: // right
	                case 63235:
	                    this.dXKeys += this.keySpeed;
	                    break;
	                case 40: // down
	                case 63233:
	                    this.dYKeys += this.keySpeed;
	                    break;
	                case 13: // enter
	                case 27:
	                    // escape
	                    if (evt.preventDefault) evt.preventDefault();
	                    this.cancelDragStarter(evt);
	                    return false;
	                default:
	                    return true;
	            }
	            if (evt.preventDefault) evt.preventDefault();
	            this.cancelDragStarter(); // Any movement key pressed triggers the start of the drag
	            if (this.startDrag()) {
	                this.move(this.dXKeys, this.dYKeys);
	            }
	            return false;
	        }
	    }, {
	        key: 'cancelDragStarter',
	        value: function cancelDragStarter() {
	            this.removeEventListener(document, 'mousemove', this.checkStartDrag);
	            this.removeEventListener(document, 'mouseup', this.cancelDragStarter);
	            this.removeEventListener(document, 'keypress', this.dragStarterKeys);
	            this.removeEventListener(document, 'keypress', this.dragStartSwitchKeyEvents);
	            this.removeEventListener(document, 'keydown', this.dragStarterKeys);
	        }
	    }, {
	        key: 'startDrag',
	        value: function startDrag() {
	            var obj = this.startMove(this.clickedObject, this.initOffsetX, this.initOffsetY);
	            if (!obj) {
	                return false;
	            }
	            if (this.draggedObject) {
	                this.releaseElement();
	            }
	            this.addEventListener(document, 'mousemove', this.dragMouse);
	            this.addEventListener(document, 'mouseup', this.dropped);
	            this.addEventListener(document, 'keydown', this.dragKeys);
	            this.addEventListener(document, 'keypress', this.switchKeyEvents);
	            this.startX = obj.offsetLeft;
	            this.startY = obj.offsetTop;
	            this.initLeft = obj.style.left;
	            this.initTop = obj.style.top;
	            this.initParentNode = obj.parentNode;
	            this.draggedObject = obj;
	            this.invalid = false;
	            obj.className += ' dragged';
	            return true;
	        }
	    }, {
	        key: 'callHandlers',
	        value: function callHandlers(meth, evt) {
	            var result = void 0,
	                i = void 0,
	                handler = void 0;
	            for (i = 0; i < this.handlers.length; i++) {
	                handler = this.handlers[i];
	                if (handler[meth]) {
	                    result = handler[meth](evt);
	                    if (result !== undefined && !result) {
	                        return false;
	                    }
	                }
	            }
	            return result;
	        }
	    }, {
	        key: 'startMove',
	        value: function startMove(obj, offsetX, offsetY) {
	            var result = this.callHandlers('startMove', obj, offsetX, offsetY);
	            return result == undefined ? obj : result;
	        }
	    }, {
	        key: 'dragMouse',
	        value: function dragMouse(e) {
	            var evt = e || window.event;
	            var dX = evt.clientX - this.initialMouseX;
	            var dY = evt.clientY - this.initialMouseY;
	            this.move(dX, dY);
	            return false;
	        }
	    }, {
	        key: 'move',
	        value: function move(dx, dy) {
	            var i, handler, result;
	            var pos = {
	                dx: dx,
	                dy: dy,
	                x: this.startX + dx,
	                y: this.startY + dy
	            };
	            // Check if move valid
	            this.invalid = false;
	            for (i = 0; i < this.handlers.length; i++) {
	                handler = this.handlers[i];
	                if (handler.move) {
	                    result = handler.move(pos);
	                    if (result !== undefined && !result) {
	                        this.invalid = true;
	                    }
	                }
	            }
	            if (this.invalid && !this.showMoveOnInvalid) {
	                return false;
	            }
	            this.moved(dx, dy);
	            if (pos.x !== undefined) {
	                this.draggedObject.style.left = pos.x + 'px';
	            }
	            if (pos.y !== undefined) {
	                this.draggedObject.style.top = pos.y + 'px';
	            }
	            return true;
	        }
	    }, {
	        key: 'dragKeys',
	        value: function dragKeys(e) {
	            var evt = e || window.event;
	            var key = evt.keyCode;
	            switch (key) {
	                case 37: // left
	                case 63234:
	                    this.dXKeys -= this.keySpeed;
	                    break;
	                case 38: // up
	                case 63232:
	                    this.dYKeys -= this.keySpeed;
	                    break;
	                case 39: // right
	                case 63235:
	                    this.dXKeys += this.keySpeed;
	                    break;
	                case 40: // down
	                case 63233:
	                    this.dYKeys += this.keySpeed;
	                    break;
	                case 13: // enter
	                case 27:
	                    // escape
	                    this.cancel(evt);
	                    return false;
	                default:
	                    return true;
	            }
	            this.move(this.dXKeys, this.dYKeys);
	            if (evt.preventDefault) evt.preventDefault();
	            return false;
	        }
	    }, {
	        key: 'addEventListener',
	        value: function addEventListener(elt, event, method, capturing) {
	            var _this2 = this;
	
	            var index = this.methodsToHitch.indexOf(method);
	            var hitched = index >= 0 ? this.hitchedMethods[index] : null;
	            if (index < 0) {
	                this.methodsToHitch.push(method);
	                this.hitchedMethods.push(hitched = function hitched(e) {
	                    return method.call(_this2, e);
	                });
	            } else {
	                hitched = this.hitchedMethods[index];
	            }
	            if (capturing) {
	                _core2.default.utils.addEventListener(elt, event, hitched, true);
	            } else {
	                _core2.default.utils.addEventListener(elt, event, hitched);
	            }
	        }
	    }, {
	        key: 'removeEventListener',
	        value: function removeEventListener(elt, event, method) {
	            var index = this.methodsToHitch.indexOf(method);
	            if (index >= 0) {
	                _core2.default.utils.removeEventListener(elt, event, this.hitchedMethods[index]);
	            }
	        }
	    }, {
	        key: 'switchKeyEvents',
	        value: function switchKeyEvents() {
	            // for Opera and Safari 1.3
	            this.removeEventListener(document, 'keydown', this.dragKeys);
	            this.removeEventListener(document, 'keypress', this.switchKeyEvents);
	            this.addEventListener(document, 'keypress', this.dragKeys);
	        }
	
	        //noinspection JSUnusedLocalSymbols
	
	    }, {
	        key: 'moved',
	        value: function moved(dx, dy) {
	            this.callHandlers('moved');
	        }
	    }, {
	        key: 'stopDrag',
	        value: function stopDrag() {
	            this.callHandlers('stopMove');
	        }
	    }, {
	        key: 'cancel',
	        value: function cancel(evt) {
	            this.restoreInitPosition();
	            this.callHandlers('cancel');
	            this.releaseElement(evt);
	        }
	    }, {
	        key: 'restoreInitPosition',
	        value: function restoreInitPosition() {
	            if (this.draggedObject) {
	                if (this.callHandlers('restoreInitPosition') !== false) {
	                    this.draggedObject.style.left = this.initLeft;
	                    this.draggedObject.style.top = this.initTop;
	                    if (this.initParentNode != this.draggedObject.parentNode) {
	                        this.initParentNode.appendChild(this.draggedObject);
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'dropped',
	        value: function dropped(e) {
	            var evt = e || window.event;
	            if (!evt.button && this.draggedObject) {
	                // Drag and drop may have been cancelled through a right click or pressing the Esc key
	                var dX = evt.clientX - this.initialMouseX;
	                var dY = evt.clientY - this.initialMouseY;
	                this.move(dX, dY, true);
	                this.applyMove();
	                this.releaseElement(evt);
	            }
	        }
	    }, {
	        key: 'applyMove',
	        value: function applyMove() {
	            this.callHandlers('applyMove');
	        }
	    }, {
	        key: 'releaseElement',
	        value: function releaseElement(evt) {
	            this.stopDrag(evt);
	            this.removeEventListener(document, 'mousemove', this.dragMouse);
	            this.removeEventListener(document, 'mouseup', this.dropped);
	            this.removeEventListener(document, 'keypress', this.dragKeys);
	            this.removeEventListener(document, 'keypress', this.switchKeyEvents);
	            this.removeEventListener(document, 'keydown', this.dragKeys);
	            _core2.default.utils.removeClass(this.draggedObject, 'dragged');
	            this.draggedObject = null;
	        }
	    }]);
	
	    return DragDropHandler;
	}();
	
	exports.default = DragDropHandler;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _core = __webpack_require__(39);
	
	var _core2 = _interopRequireDefault(_core);
	
	var _vis = __webpack_require__(59);
	
	var _vis2 = _interopRequireDefault(_vis);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var LOAD_RESOURCE_BAR_CLASS = 'load-resource-bar';
	var RESOURCE_LOAD_CLASS = 'resource-load';
	var CHART_TOP_MARGIN = 8;
	
	function ResNode(resource, activity, load, maxLoad) {
	    this.resource = resource;
	    this.activity = activity;
	    this.load = load;
	    this.maxLoad = maxLoad;
	}
	
	ResNode.prototype.toString = function () {
	    return this.resource.name + " - " + this.activity.name;
	};
	
	var Block = function () {
	    function Block(start, end, prev, next) {
	        _classCallCheck(this, Block);
	
	        this.start = start;
	        this.end = end;
	        this.prev = prev;
	        this.next = next;
	        this.resNodes = [];
	    }
	
	    _createClass(Block, [{
	        key: 'addResource',
	        value: function addResource(resNode) {
	            this.resNodes.push(resNode);
	        }
	    }, {
	        key: 'insertBefore',
	        value: function insertBefore(start, end, resNode) {
	            var block = new Block(start, end, this.prev, this);
	            this.prev.next = block; // Always a previous as firstBlock initialized with a minimal date.
	            this.prev = block;
	            if (resNode) block.addResource(resNode);
	            return block;
	        }
	    }, {
	        key: 'insertAfter',
	        value: function insertAfter(start, end, resNode) {
	            if (this.next) {
	                return this.next.insert(start, end, resNode);
	            }
	            var block = new Block(start, end, this, null);
	            this.next = block;
	            if (resNode) block.addResource(resNode);
	            return block;
	        }
	    }, {
	        key: 'insert',
	        value: function insert(start, end, resNode) {
	            var block = void 0;
	            if (start >= this.end) {
	                return this.insertAfter(start, end, resNode);
	            }
	            if (start < this.start) {
	                this.insertBefore(start, Math.min(this.start, end), resNode);
	                if (end <= this.start) return;
	                start = this.start;
	            }
	            if (start > this.start) {
	                this.insertBefore(this.start, start).resNodes = [].concat(this.resNodes);
	                this.start = start;
	            }
	            if (end < this.end) {
	                block = this.insertBefore(this.start, end);
	                block.resNodes = this.resNodes.concat([resNode]);
	                this.start = end;
	                return block;
	            } else {
	                this.resNodes.push(resNode);
	            }
	            if (end > this.end) {
	                return this.insertAfter(this.end, end, resNode);
	            }
	            return this;
	        }
	    }, {
	        key: 'computeMax',
	        value: function computeMax(useMaxLoad) {
	            var max = 0;
	            var usedRes = [];
	            this.resNodes.map(function (node) {
	                if (useMaxLoad) {
	                    if (usedRes.indexOf(node.resource) < 0) {
	                        usedRes.push(node.resource);
	                        max += node.maxLoad;
	                    }
	                } else max += node.load;
	            });
	            this.max = max;
	            return Math.max(max, this.next ? this.next.computeMax(useMaxLoad) : 0);
	        }
	    }, {
	        key: 'createVisItem',
	        value: function createVisItem(ctx) {
	            //max, verticalPercentage, renderer
	            if (!this.resNodes.length) return null;
	            var tpl = '<div style="display: flex; flex-direction: column-reverse; height: 100%" class="' + LOAD_RESOURCE_BAR_CLASS + '">';
	            var closing = '</div>';
	            var max = ctx.max;
	            var height = ctx.plotAreaHeight;
	            if (ctx.useMaxLoad && this.max) {
	                // Only true if one resource selected => this.resNodes is always of size 1
	                tpl += '<div style="display: flex; flex-direction: column-reverse; height: ' + Math.round(height = height * this.max / max) + 'px;" class="max-load">';
	                max = this.max; // activities height are now proportional to their max load container height
	                closing = '</div>' + closing;
	            }
	            for (var i = 0, res; i < this.resNodes.length; i++) {
	                res = this.resNodes[i];
	                tpl += '<div style="background-color: ' + ctx.chartRenderer.background(res.resource, res.activity) + '; height: ' + Math.round(height * res.load / max) + 'px;" data-res-name="' + res.resource.name + '" data-act-name="' + (res.activity.name || '') + '" data-res-load="' + res.load + '"' + (res.maxLoad ? ' data-max-load="' + res.maxLoad + '"' : '') + ' class="' + RESOURCE_LOAD_CLASS + '"></div>';
	            }
	            tpl += closing;
	            return {
	                start: this.start,
	                end: this.end,
	                type: 'background',
	                content: tpl
	            };
	        }
	    }, {
	        key: 'toString',
	        value: function toString() {
	            var s = void 0;
	            if (this.start) {
	                s = "[ start: " + new Date(this.start).toLocaleDateString() + " - end: " + new Date(this.end).toLocaleDateString() + "(";
	                s += this.resNodes.join(', ');
	                s += ")]";
	            } else {
	                s = '';
	            }
	            return s + (this.next ? "\n     " + this.next.toString() : '');
	        }
	    }]);
	
	    return Block;
	}();
	
	var LoadResourceChart = function (_Gantt$components$Loa) {
	    _inherits(LoadResourceChart, _Gantt$components$Loa);
	
	    function LoadResourceChart(gantt, node, config) {
	        _classCallCheck(this, LoadResourceChart);
	
	        var _this = _possibleConstructorReturn(this, (LoadResourceChart.__proto__ || Object.getPrototypeOf(LoadResourceChart)).call(this, gantt, node, config));
	
	        var loadChart = _this;
	        gantt.selection.addObserver({
	            rowSelectionChanged: function rowSelectionChanged(selections) {
	                // Selections array is sorted from the last selected object to the first.
	                // To keep the same colors associated with the resources when changing the selection (Ctrl + Click),
	                // we need to reverse this order so that the first selected object remains always at the same array index.
	                loadChart.setResources(selections.concat([]).reverse());
	            }
	        });
	        return _this;
	    }
	
	    _createClass(LoadResourceChart, [{
	        key: 'addChildResources',
	        value: function addChildResources(resources, a) {
	            for (var i = 0, res; i < resources.length; i++) {
	                res = resources[i];
	                a.push(res);
	                if (res.children) {
	                    this.addChildResources(res.children, a);
	                }
	            }
	            return a;
	        }
	    }, {
	        key: 'setConfiguration',
	        value: function setConfiguration(config) {
	            var _this2 = this;
	
	            if (this.layoutSynch) {
	                this.destroy();
	            }
	            if (config.classes) {
	                _core2.default.utils.addClass(this.node, config.classes);
	            }
	
	            this.header = document.createElement('div');
	            this.header.className = 'load-resource-chart-header';
	            if (config.header) {
	                var headerContent = void 0;
	                if (_core2.default.utils.isFunction(config.header)) {
	                    headerContent = config.header(this.header);
	                } else if (_core2.default.utils.isDomElement(config.header)) {
	                    headerContent = config.header;
	                } else {
	                    headerContent = document.createElement('h3');
	                    headerContent.appendChild(document.createTextNode(config.header));
	                }
	                if (headerContent) {
	                    this.header.appendChild(headerContent);
	                }
	            }
	            this.node.appendChild(this.header);
	            this.body = document.createElement('div');
	            this.body.className = 'load-resource-chart-body';
	            this.body.style.position = 'relative';
	            if (config.height) {
	                if (_core2.default.utils.isFunction(config.height)) {
	                    this.body.style.height = config.height() + 'px';
	                } else if (_core2.default.utils.isString(config.height)) {
	                    this.body.style.height = config.height;
	                } else {
	                    this.body.style.height = config.height + 'px';
	                }
	            } else {
	                this.body.style.height = '100%';
	            }
	            this.node.appendChild(this.body);
	
	            this.leftPanel = document.createElement('div');
	            this.leftPanel.className = 'load-resource-chart-left';
	            this.leftPanel.style.position = 'absolute';
	            this.leftPanel.style.left = '0';
	            this.leftPanel.style.top = '0';
	            this.leftPanel.style.bottom = '0';
	            this.legendPanel = document.createElement('div');
	            this.legendPanel.className = 'legend-panel empty-legend';
	            this.legendPanel.style.position = 'absolute';
	            this.legendPanel.style.bottom = '0';
	            this.legendPanel.style.overflowY = 'auto';
	            this.leftPanel.appendChild(this.legendPanel);
	
	            // Create Y-Axis panel
	            this.yAxisPanel = document.createElement('div');
	            this.yAxisPanel.className = 'y-axis-ctnr';
	            this.yAxisPanel.style.position = 'absolute';
	            this.yAxisPanel.style.right = 0;
	            this.yAxisPanel.style.top = '0';
	            this.yAxis = document.createElement('div');
	            this.yAxis.className = 'y-axis' + (config && config.yAxis && config.yAxis.className ? ' ' + config.yAxis.className : '');
	            this.yAxis.style.position = 'absolute';
	            this.yAxis.style.overflow = 'visible';
	            this.yAxis.style.right = 0;
	            this.yAxis.style.top = '0';
	            this.yAxisPanel.appendChild(this.yAxis);
	            this.leftPanel.appendChild(this.yAxisPanel);
	
	            this.body.appendChild(this.leftPanel);
	
	            this.timeLineScrollerElt = document.createElement('div');
	            this.timeLineScrollerElt.className = 'load-resource-chart-scroller';
	            this.timeLineScrollerElt.style.position = 'absolute';
	            this.timeLineScrollerElt.style.top = '0';
	            this.timeLineScrollerElt.style.bottom = '0';
	            this.timeLineScrollerElt.style.right = '0';
	            this.timeLineScrollerElt.style.overflow = 'hidden';
	            this.body.appendChild(this.timeLineScrollerElt);
	
	            this.noSelectionElt = document.createElement('div');
	            this.noSelectionElt.className = 'no-selection';
	            this.noSelectionElt.style.position = 'absolute';
	            this.noSelectionElt.style.left = '0';
	            this.noSelectionElt.style.top = '0';
	            this.noSelectionElt.style.bottom = '0';
	            this.noSelectionElt.style.right = '0';
	            this.noSelectionElt.style.overflow = 'hidden';
	            this.noSelectionElt.style.display = 'flex';
	            this.noSelectionElt.style.alignItems = 'center';
	            this.noSelectionElt.style.justifyContent = 'center';
	            this.noSelectionElt.style.zIndex = '1';
	            var noSelMsg = document.createElement('div');
	            noSelMsg.className = 'no-selection-message';
	            noSelMsg.appendChild(document.createTextNode(_core2.default.utils.getString('gantt.loadResourceChart.noSelection.title')));
	            this.noSelectionElt.appendChild(noSelMsg);
	            this.body.appendChild(this.noSelectionElt);
	
	            var loadChart = this;
	            this.layoutSynch = this.gantt.synchLayout({
	                timeTableBoundsChanged: function timeTableBoundsChanged(bounds) {
	                    bounds = this.convertBounds(bounds, loadChart.timeLineScrollerElt);
	                    loadChart.timeLineScrollerElt.style.left = bounds.x + 'px';
	                    loadChart.timeLineScrollerElt.style.width = bounds.width + 'px';
	                    loadChart.leftPanel.style.width = bounds.x + 'px';
	
	                    if (loadChart.timeLineElt) {
	                        loadChart.updatePlottingArea();
	                        loadChart.drawCharts();
	                    }
	                },
	                timeWindowChanged: function timeWindowChanged(start, end) {
	                    loadChart.setTimeWindow(start, end);
	                },
	                timeLineSizeChanged: function timeLineSizeChanged(width, height) {
	                    if (loadChart.timeLineElt) {
	                        loadChart.timeLineElt.style.width = width + 'px';
	                    }
	                },
	                timeLineInitialized: function timeLineInitialized() {},
	                timeLineScrolled: function timeLineScrolled(x) {
	                    loadChart.timeLineScrollerElt.scrollLeft = x;
	                }
	            });
	
	            function createGetter(config) {
	                if (_core2.default.utils.isFunction(config)) {
	                    return config;
	                } else if (_core2.default.utils.isString(config)) {
	                    return _core2.default.utils.propertyEvaluator(config);
	                }
	                return function () {
	                    return config;
	                };
	            }
	
	            this.resourceMaxLoad = config.maxLoad && createGetter(config.maxLoad);
	            this.resourceActivityLoad = config.load && createGetter(config.load) || function () {
	                return 1;
	            };
	
	            var rendererClass = _core2.default.components.Renderer.impl || _core2.default.components.Renderer;
	            this.chartRenderer = new rendererClass(_core2.default.utils.mergeObjects({
	                background: {
	                    getValue: function getValue(res) {
	                        return _this2.resources.indexOf(res);
	                    }
	                } }, config.renderer), {
	                getTooltipProperties: function getTooltipProperties(info, ctx) {
	                    var props = ['Resource', info.resourceName, 'Activity', info.activityName, 'Load', info.resourceLoad];
	                    if (info.resourceMaxLoad) {
	                        props.push('Maximum load', info.resourceMaxLoad);
	                    }
	                    return props;
	                }
	            }, this.gantt);
	
	            this.initTooltips();
	        }
	    }, {
	        key: 'setTimeWindow',
	        value: function setTimeWindow(start, end) {
	            var _this3 = this;
	
	            if (this.timeLineElt) {
	                this.timeLineScrollerElt.removeChild(this.timeLineElt);
	            }
	            this.timeLineElt = document.createElement('div');
	            this.timeLineElt.style.width = this.gantt.timeLine.getWidth() + 'px';
	            this.timeLineElt.style.height = '100%';
	
	            try {
	                // See https://github.com/almende/vis/issues/24 for time zone hack
	                this.visTimeline = new _vis2.default.Timeline(this.timeLineElt, {}, {
	                    // 'millisecond', 'second', 'minute', 'hour', 'weekday', 'day', 'month', 'year'
	                    orientation: { axis: 'bottom', item: 'bottom' },
	                    height: '100%',
	                    start: this.gantt.timeLine.scrollableHorizon.start,
	                    end: this.gantt.timeLine.scrollableHorizon.end
	                });
	                this.visTimeline.range.body.emitter.off('mousewheel');
	                var fireReady = function fireReady() {
	                    _this3._init = true;
	                    var wnd = _this3.visTimeline.getWindow();
	                    _this3.visTimeline.off('changed', fireReady);
	                    _this3.timeScaleElt = _this3.timeLineElt.getElementsByClassName("vis-panel vis-bottom")[0];
	                    var style = window.getComputedStyle(_this3.timeScaleElt);
	                    var bottom = style.bottom;
	                    bottom = bottom ? parseInt(bottom) : 0;
	                    if (isNaN(bottom)) {
	                        bottom = 0;
	                    }
	                    var topBorder = style.borderTopWidth;
	                    topBorder = topBorder ? parseInt(topBorder) : 0;
	                    _this3.timeScaleHeight = $(_this3.timeScaleElt).outerHeight() + bottom - topBorder; // visjs set a -2px bottom
	                    _this3.updatePlottingArea();
	                    _this3.triggerEvent(_core2.default.events.TIME_LINE_INIT);
	                };
	                this.visTimeline.on('changed', fireReady);
	            } catch (e) {
	                console.error(e);
	                throw e;
	            }
	            this.timeLineScrollerElt.appendChild(this.timeLineElt);
	        }
	    }, {
	        key: 'setResources',
	        value: function setResources(resources) {
	            var allRes = this.addChildResources(resources, []);
	            this.resources = allRes;
	            for (var i = 0, count = allRes.length, res; i < count; i++) {
	                res = allRes[i];
	                res.color = this.chartRenderer.background(res);
	            }
	            this.gantt.rowsChanged(_core2.default.events.ROWS_MODIFIED, this.resources);
	            this.selectionChanged();
	            this.drawCharts();
	        }
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            if (this.layoutSynch) {
	                this.layoutSynch.disconnect();
	                this.layoutSynch = null;
	            }
	        }
	    }, {
	        key: 'selectionChanged',
	        value: function selectionChanged() {
	            this.noSelectionElt.style.display = this.resources && this.resources.length ? 'none' : 'flex';
	            this.updateLegend();
	            this.drawCharts();
	        }
	    }, {
	        key: 'drawCharts',
	        value: function drawCharts() {
	            var _this4 = this;
	
	            var firstBlock = new Block(0, 0);
	            var maxLoad = void 0,
	                load = void 0;
	            (this.resources || []).map(function (res) {
	                (res.activities || []).map(function (act) {
	                    load = _this4.resourceActivityLoad(res, act);
	                    maxLoad = _this4.resourceMaxLoad && _this4.resourceMaxLoad(res, act);
	                    firstBlock.insert(act.start, act.end, new ResNode(res, act, load, maxLoad));
	                });
	            });
	            var max = firstBlock.computeMax(this.resourceMaxLoad && this.resources.length === 1);
	            this.setYAxisMax(max);
	            var items = [],
	                item = void 0;
	            var ctx = {
	                max: max,
	                useMaxLoad: this.resourceMaxLoad && this.resources.length === 1,
	                chartRenderer: this.chartRenderer,
	                plotAreaHeight: this.plotAreaHeight - CHART_TOP_MARGIN,
	                yRatio: this.yRatio
	            };
	            for (var block = firstBlock.next; block; block = block.next) {
	                item = block.createVisItem(ctx);
	                if (item) {
	                    items.push(item);
	                }
	            }
	            this.visTimeline.setItems(items);
	        }
	    }, {
	        key: 'updateLegend',
	        value: function updateLegend() {
	            if (this.legend) {
	                this.legendPanel.removeChild(this.legend);
	            }
	            var hasRes = this.resources && this.resources.length;
	            _core2.default.utils.toggleClass(this.legendPanel, 'empty-legend', !hasRes);
	            this.legendPanel.style.overflowY = 'auto';
	            if (this.resources) {
	                this.legend = document.createElement('ul');
	                this.legend.className = 'legend';
	                var li = void 0,
	                    colorBox = void 0,
	                    name = void 0,
	                    res = void 0;
	                for (var i = 0, count = this.resources.length; i < count; i++) {
	                    res = this.resources[i];
	                    li = document.createElement('li');
	                    li.className = 'legend-item';
	                    li.style.display = 'table';
	                    colorBox = document.createElement('div');
	                    colorBox.className = 'legend-item-color';
	                    colorBox.style.display = 'table-cell';
	                    colorBox.style.verticalAlign = 'middle';
	                    colorBox.style.backgroundColor = res.color;
	                    li.appendChild(colorBox);
	
	                    name = document.createElement('div');
	                    name.className = 'legend-item-name';
	                    name.style.display = 'table-cell';
	                    name.style.verticalAlign = 'middle';
	                    name.innerHTML = res.name;
	                    li.appendChild(name);
	                    this.legend.appendChild(li);
	                }
	                this.legendPanel.appendChild(this.legend);
	            }
	        }
	    }, {
	        key: 'setYAxisMax',
	        value: function setYAxisMax(max) {
	            var tickCount = void 0;
	            var tickUnit = void 0;
	            this.yAxis.innerHTML = '';
	
	            if (!max) return;
	            // Calc the best tick units
	            function closest10Factor(n) {
	                var f = 10;
	                while (n > f) {
	                    f *= 10;
	                }
	                return f;
	            }
	
	            var MAX_TICK_COUNT = 5;
	            if (max <= MAX_TICK_COUNT) {
	                tickUnit = 1;
	                tickCount = max;
	            } else {
	                // Due to the small height of the axis, we can draw a maximum of 5 axis labels
	                // Determine the best unit to use for a number of labels from 2 to 5
	                max = closest10Factor(max);
	                tickCount = MAX_TICK_COUNT;
	                tickUnit = Math.round(max / tickCount);
	            }
	            var totalHeight = this.plotAreaHeight - CHART_TOP_MARGIN;
	            this.yRatio = Math.round(totalHeight / max);
	
	            // Create the Y Axis labels
	            for (var iTick = 0, v = 0, h = tickUnit * this.yRatio; iTick <= tickCount; iTick++, v += tickUnit) {
	                // <= MAX_TICK_COUNT because first tick is zero
	                var label = this.createLabelledTick('' + v, h);
	                label.style.top = this.plotAreaHeight - v * this.yRatio - h / 2 - 2 + 'px'; // -2 for the height of the tick border
	                label.style.right = '0';
	                this.yAxis.appendChild(label);
	            }
	        }
	    }, {
	        key: 'createLabelledTick',
	        value: function createLabelledTick(label, height) {
	            var labelDiv = document.createElement('div');
	            labelDiv.className = 'y-axis-label';
	            labelDiv.style.position = 'absolute';
	            labelDiv.style.height = height + 'px';
	            labelDiv.style.lineHeight = height + 'px';
	            labelDiv.style.textAlign = 'center';
	            labelDiv.style.whiteSpace = 'nowrap';
	            labelDiv.appendChild(document.createTextNode(label));
	            var tick = document.createElement('div');
	            tick.style.display = 'inline-block';
	            tick.style.position = 'absolute';
	            tick.style.top = height / 2 + 'px';
	            tick.style.right = '0';
	            tick.className = 'y-axis-tick';
	            labelDiv.appendChild(tick);
	            return labelDiv;
	        }
	    }, {
	        key: 'updatePlottingArea',
	        value: function updatePlottingArea() {
	            // Cannot use native offsetHeight as it is rounding dimensions
	            // See warning at https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight
	            this.setPlottingAreaHeight($(this.body).outerHeight() - this.timeScaleHeight);
	        }
	    }, {
	        key: 'setPlottingAreaHeight',
	        value: function setPlottingAreaHeight(h) {
	            this.yAxis.style.height = h + 'px';
	            this.plotAreaHeight = h;
	        }
	    }, {
	        key: 'getScroller',
	        value: function getScroller() {
	            return this.timeLineScrollerElt;
	        }
	
	        //
	        // Tooltips
	        //
	
	    }, {
	        key: 'initTooltips',
	        value: function initTooltips() {
	            var _this5 = this;
	
	            var isResourceLoadNode = function isResourceLoadNode(elt) {
	                return _core2.default.utils.hasClass(elt, RESOURCE_LOAD_CLASS);
	            };
	            var getResourceLoadNode = function getResourceLoadNode(elt) {
	                for (; elt && elt !== _this5.body; elt = elt.parentNode) {
	                    if (isResourceLoadNode(elt)) {
	                        return elt;
	                    }
	                }
	                return null;
	            };
	            var getResource = function getResource(id) {
	                return id && _this5.gantt.table.getRow(id);
	            };
	            var gantt = this.gantt;
	            var loadchart = this;
	            this.gantt.tooltip.installTooltip({
	                // The container that contains elements to display tooltip for.
	                container: this.body,
	                // The container inside which bounds the tooltip can be displayed
	                getTooltipDisplayContainer: function getTooltipDisplayContainer() {
	                    return gantt.getBody();
	                },
	
	                // Returns an element in the node hierarchy for which a tooltip can be displayed
	                getTooltipElement: function getTooltipElement(node) {
	                    return getResourceLoadNode(node);
	                },
	                getTooltipData: function getTooltipData(node) {
	                    return { resourceName: node.dataset.resName, resourceLoad: node.dataset.resLoad,
	                        resourceMaxLoad: node.dataset.resMaxLoad, activityName: node.dataset.actName };
	                },
	                renderTooltip: function renderTooltip(node /* The element returned by getTooltipElement */
	                , info /* data returned by getTooltipData for the specified tooltipElt */
	                , tooltipCtnr /* The container of the tooltip to fill with info. */) {
	                    if (info) {
	                        loadchart.chartRenderer.getTooltip(tooltipCtnr, info);
	                    }
	                }
	            });
	        }
	    }]);
	
	    return LoadResourceChart;
	}(_core2.default.components.LoadResourceChart);
	
	_core2.default.components.LoadResourceChart.impl = LoadResourceChart;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(58)))

/***/ }),
/* 58 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_58__;

/***/ }),
/* 59 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_59__;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	var require;/* WEBPACK VAR INJECTION */(function(process, $, global) {!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define(e):t.ES6Promise=e()}(this,function(){"use strict";function t(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)}function e(t){return"function"==typeof t}function n(t){I=t}function r(t){J=t}function o(){return function(){return process.nextTick(a)}}function i(){return"undefined"!=typeof H?function(){H(a)}:c()}function s(){var t=0,e=new V(a),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function u(){var t=new MessageChannel;return t.port1.onmessage=a,function(){return t.port2.postMessage(0)}}function c(){var t=setTimeout;return function(){return t(a,1)}}function a(){for(var t=0;t<G;t+=2){var e=$[t],n=$[t+1];e(n),$[t]=void 0,$[t+1]=void 0}G=0}function f(){try{var t=require,e=__webpack_require__(62);return H=e.runOnLoop||e.runOnContext,i()}catch(n){return c()}}function l(t,e){var n=arguments,r=this,o=new this.constructor(p);void 0===o[et]&&k(o);var i=r._state;return i?!function(){var t=n[i-1];J(function(){return x(i,o,t,r._result)})}():E(r,o,t,e),o}function h(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(p);return g(n,t),n}function p(){}function v(){return new TypeError("You cannot resolve a promise with itself")}function d(){return new TypeError("A promises callback cannot return that same promise.")}function _(t){try{return t.then}catch(e){return it.error=e,it}}function y(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function m(t,e,n){J(function(t){var r=!1,o=y(n,e,function(n){r||(r=!0,e!==n?g(t,n):S(t,n))},function(e){r||(r=!0,j(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,j(t,o))},t)}function b(t,e){e._state===rt?S(t,e._result):e._state===ot?j(t,e._result):E(e,void 0,function(e){return g(t,e)},function(e){return j(t,e)})}function w(t,n,r){n.constructor===t.constructor&&r===l&&n.constructor.resolve===h?b(t,n):r===it?(j(t,it.error),it.error=null):void 0===r?S(t,n):e(r)?m(t,n,r):S(t,n)}function g(e,n){e===n?j(e,v()):t(n)?w(e,n,_(n)):S(e,n)}function A(t){t._onerror&&t._onerror(t._result),T(t)}function S(t,e){t._state===nt&&(t._result=e,t._state=rt,0!==t._subscribers.length&&J(T,t))}function j(t,e){t._state===nt&&(t._state=ot,t._result=e,J(A,t))}function E(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+rt]=n,o[i+ot]=r,0===i&&t._state&&J(T,t)}function T(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?x(n,r,o,i):o(i);t._subscribers.length=0}}function M(){this.error=null}function P(t,e){try{return t(e)}catch(n){return st.error=n,st}}function x(t,n,r,o){var i=e(r),s=void 0,u=void 0,c=void 0,a=void 0;if(i){if(s=P(r,o),s===st?(a=!0,u=s.error,s.error=null):c=!0,n===s)return void j(n,d())}else s=o,c=!0;n._state!==nt||(i&&c?g(n,s):a?j(n,u):t===rt?S(n,s):t===ot&&j(n,s))}function C(t,e){try{e(function(e){g(t,e)},function(e){j(t,e)})}catch(n){j(t,n)}}function O(){return ut++}function k(t){t[et]=ut++,t._state=void 0,t._result=void 0,t._subscribers=[]}function Y(t,e){this._instanceConstructor=t,this.promise=new t(p),this.promise[et]||k(this.promise),B(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?S(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&S(this.promise,this._result))):j(this.promise,q())}function q(){return new Error("Array Methods must be provided an Array")}function F(t){return new Y(this,t).promise}function D(t){var e=this;return new e(B(t)?function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function K(t){var e=this,n=new e(p);return j(n,t),n}function L(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function N(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function U(t){this[et]=O(),this._result=this._state=void 0,this._subscribers=[],p!==t&&("function"!=typeof t&&L(),this instanceof U?C(this,t):N())}function W(){var t=void 0;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;if(n){var r=null;try{r=Object.prototype.toString.call(n.resolve())}catch(e){}if("[object Promise]"===r&&!n.cast)return}t.Promise=U}var z=void 0;z=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var B=z,G=0,H=void 0,I=void 0,J=function(t,e){$[G]=t,$[G+1]=e,G+=2,2===G&&(I?I(a):tt())},Q="undefined"!=typeof window?window:void 0,R=Q||{},V=R.MutationObserver||R.WebKitMutationObserver,X="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),Z="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,$=new Array(1e3),tt=void 0;tt=X?o():V?s():Z?u():void 0===Q&&"function"=="function"?f():c();var et=Math.random().toString(36).substring(16),nt=void 0,rt=1,ot=2,it=new M,st=new M,ut=0;return Y.prototype._enumerate=function(t){for(var e=0;this._state===nt&&e<t.length;e++)this._eachEntry(t[e],e)},Y.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===h){var o=_(t);if(o===l&&t._state!==nt)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===U){var i=new n(p);w(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},Y.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===nt&&(this._remaining--,t===ot?j(r,n):this._result[e]=n),0===this._remaining&&S(r,this._result)},Y.prototype._willSettleAt=function(t,e){var n=this;E(t,void 0,function(t){return n._settledAt(rt,e,t)},function(t){return n._settledAt(ot,e,t)})},U.all=F,U.race=D,U.resolve=h,U.reject=K,U._setScheduler=n,U._setAsap=r,U._asap=J,U.prototype={constructor:U,then:l,"catch":function(t){return this.then(null,t)}},U.polyfill=W,U.Promise=U,U});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(61), __webpack_require__(58), (function() { return this; }())))

/***/ }),
/* 61 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 62 */
/***/ (function(module, exports) {

	/* (ignored) */

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _jquery = __webpack_require__(58);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _core = __webpack_require__(39);
	
	var _core2 = _interopRequireDefault(_core);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var allGantts = [];
	
	var getGantt = function getGantt(node) {
	  for (var i = 0, count = allGantts.length; i < count; ++i) {
	    if (allGantts[i].node == node) {
	      return allGantts[i];
	    }
	  }
	  return null;
	};
	
	var removeGantt = function removeGantt(gantt) {
	  var index = allGantts.indexOf(gantt);
	  if (index > -1) {
	    allGantts.splice(index, 1);
	  }
	  return gantt;
	};
	
	_core2.default.envReady = function () {
	  return new Promise(function (resolve, reject) {
	    (0, _jquery2.default)(document).ready(resolve);
	  });
	};
	
	try {
	
	  _jquery2.default.fn.Gantt = function (options) {
	
	    var gantts = [];
	    this.each(function () {
	      var _this = this;
	
	      var gantt = getGantt(this);
	      if (gantt) {
	        if (options) {
	          gantt.destroy();
	          removeGantt(gantt);
	        } else {
	          // Use the current gantt associated with this node as no configuration change has been specified.
	          return;
	        }
	      }
	      gantt = new _core2.default(this, options);
	      gantt.disconnect = function () {
	        removeGantt(_this);
	      };
	      gantts.push(gantt);
	    });
	
	    var ganttRef = gantts.length && gantts[0];
	    var apiRef = ganttRef && ganttRef.api && ganttRef.api() || {};
	    if (gantts.length == 1) {
	      this.api = function () {
	        return apiRef;
	      };
	    } else if (gantts.length > 0) {
	      //TODO
	    } else {
	      this.api = function () {
	        return {};
	      };
	    }
	    _jquery2.default.extend(this, apiRef);
	    return gantts.length && gantts[0];
	  };
	} catch (e) {
	  console.error(e);
	}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _core = __webpack_require__(39);
	
	var _core2 = _interopRequireDefault(_core);
	
	var _jquery = __webpack_require__(58);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_core2.default.utils = _jquery2.default.extend({}, _core2.default.utils, {
	    closest: function closest(elt, selector) {
	        var res = (0, _jquery2.default)(elt).closest(selector);
	        return res && res.length && res[0] || null;
	    },
	
	    mergeObjects: function mergeObjects() {
	        var args = [];
	        for (var i = 0; i < arguments.length; i++) {
	            args.push(arguments[i]);
	        }
	        return _jquery2.default.extend.apply(_jquery2.default, args);
	    },
	
	    html: function html(node, htmlText) {
	        (0, _jquery2.default)(node).html(htmlText);
	    },
	    offsetParent: function offsetParent(elt) {
	        var $parent = (0, _jquery2.default)(elt).offsetParent();
	        return $parent.length && $parent[0] || null;
	    },
	
	
	    ajax: function ajax(url, params) {
	        var $params = {
	            url: url || params.url,
	            dataType: params && params.dataType || "json"
	        };
	        if (params && params.method) {
	            $params.method = params.method;
	        }
	        if (params && params.params) {
	            $params.data = params.params;
	        }
	        if (params && params.customizeRequest) {
	            $params.beforeSend = params.customizeRequest;
	        }
	        var settings = params.settings;
	        if (params && params.success) {
	            return _jquery2.default.ajax($params).then(function (data, statusText, req) {
	                if (params.settings) {
	                    params.settings.statusText = statusText;
	                    params.settings.request = req;
	                }
	                if (params.context) {
	                    return params.success.call(params.context, data, params.settings);
	                }
	                return params.success(data, params.settings);
	            });
	        }
	        return _jquery2.default.ajax($params);
	    },
	
	    getHeight: function getHeight(elt) {
	        return (0, _jquery2.default)(elt).height();
	    }
	});

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	/*!
	
	 Split Pane v0.7.1
	
	 Copyright (c) 2014 Simon HagstrÃ¶m
	
	 Released under the MIT license
	 https://raw.github.com/shagstrom/split-pane/master/LICENSE
	
	 */
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _core = __webpack_require__(39);
	
	var _core2 = _interopRequireDefault(_core);
	
	var _jquery = __webpack_require__(58);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/* ONO: Gantt malfunctions with latter versions of this plugin! */
	(function (Gantt, $) {
	
	  var methods = {};
	
	  methods.init = function () {
	    var $splitPanes = this;
	    $splitPanes.each(setMinHeightAndMinWidth);
	    $splitPanes.append('<div class="split-pane-resize-shim">');
	    $splitPanes.children('.split-pane-divider').html('<div class="split-pane-divider-inner"></div>');
	    $splitPanes.children('.split-pane-divider').on('touchstart mousedown', mousedownHandler);
	    setTimeout(function () {
	      // Doing this later because of an issue with Chrome (v23.0.1271.64) returning split-pane width = 0
	      // and triggering multiple resize events when page is being opened from an <a target="_blank"> .
	      $splitPanes.each(function () {
	        $(this).on('_splitpaneparentresize', createParentresizeHandler($(this)));
	      });
	      $(window).trigger('resize');
	    }, 100);
	  };
	
	  methods.firstComponentSize = function (value) {
	    this.each(function () {
	      var $splitPane = $(this),
	          components = getComponents($splitPane);
	      if ($splitPane.is('.fixed-top')) {
	        fixedTopHandler(components, components.divider.offsetTop)({ pageY: value });
	      } else if ($splitPane.is('.fixed-bottom')) {
	        value = components.splitPane.offsetHeight - components.divider.offsetHeight - value;
	        fixedBottomHandler(components, -components.last.offsetHeight)({ pageY: -value });
	      } else if ($splitPane.is('.horizontal-percent')) {
	        value = components.splitPane.offsetHeight - components.divider.offsetHeight - value;
	        horizontalPercentHandler(components, -components.last.offsetHeight)({ pageY: -value });
	      } else if ($splitPane.is('.fixed-left')) {
	        fixedLeftHandler(components, components.divider.offsetLeft)({ pageX: value });
	      } else if ($splitPane.is('.fixed-right')) {
	        value = components.splitPane.offsetWidth - components.divider.offsetWidth - value;
	        fixedRightHandler(components, -components.last.offsetWidth)({ pageX: -value });
	      } else if ($splitPane.is('.vertical-percent')) {
	        value = components.splitPane.offsetWidth - components.divider.offsetWidth - value;
	        verticalPercentHandler(components, -components.last.offsetWidth)({ pageX: -value });
	      }
	    });
	  };
	
	  methods.lastComponentSize = function (value) {
	    this.each(function () {
	      var $splitPane = $(this),
	          components = getComponents($splitPane);
	      if ($splitPane.is('.fixed-top')) {
	        value = components.splitPane.offsetHeight - components.divider.offsetHeight - value;
	        fixedTopHandler(components, components.divider.offsetTop)({ pageY: value });
	      } else if ($splitPane.is('.fixed-bottom')) {
	        fixedBottomHandler(components, -components.last.offsetHeight)({ pageY: -value });
	      } else if ($splitPane.is('.horizontal-percent')) {
	        horizontalPercentHandler(components, -components.last.offsetHeight)({ pageY: -value });
	      } else if ($splitPane.is('.fixed-left')) {
	        value = components.splitPane.offsetWidth - components.divider.offsetWidth - value;
	        fixedLeftHandler(components, components.divider.offsetLeft)({ pageX: value });
	      } else if ($splitPane.is('.fixed-right')) {
	        fixedRightHandler(components, -components.last.offsetWidth)({ pageX: -value });
	      } else if ($splitPane.is('.vertical-percent')) {
	        verticalPercentHandler(components, -components.last.offsetWidth)({ pageX: -value });
	      }
	    });
	  };
	
	  methods.setLeftComponentVisible = function (visible) {
	    this.each(function () {
	      var $splitPane = $(this);
	      var components = getComponents($splitPane);
	
	      components.divider.style.display = visible ? '' : 'none';
	      components.first.style.display = visible ? '' : 'none';
	    });
	  };
	
	  methods.setRightComponentVisible = function (visible) {
	    this.each(function () {
	      var $splitPane = $(this);
	      var components = getComponents($splitPane);
	
	      var first = components.first;
	      first.style.position = visible ? 'absolute' : 'relative';
	      first.style[$(first).hasClass('top-pane') ? 'height' : 'width'] = visible ? '' : '100%';
	      components.divider.style.display = visible ? '' : 'none';
	      components.last.style.display = visible ? '' : 'none';
	    });
	  };
	
	  $.fn.splitPane = function (method) {
	    if (!method) {
	      method = 'init';
	    }
	    methods[method].apply(this, $.grep(arguments, function (it, i) {
	      return i > 0;
	    }));
	  };
	
	  var SPLITPANERESIZE_HANDLER = '_splitpaneparentresizeHandler';
	
	  /**
	   * A special event that will "capture" a resize event from the parent split-pane or window.
	   * The event will NOT propagate to grandchildren.
	   */
	  $.event.special._splitpaneparentresize = {
	    setup: function setup(data, namespaces) {
	      var element = this,
	          parent = $(this).parent().closest('.split-pane')[0] || window;
	      $(this).data(SPLITPANERESIZE_HANDLER, function (event) {
	        var target = event.target === document ? window : event.target;
	        if (target === parent) {
	          event.type = "_splitpaneparentresize";
	          $.event.dispatch.apply(element, arguments);
	        } else {
	          event.stopPropagation();
	        }
	      });
	      $(parent).on('resize', $(this).data(SPLITPANERESIZE_HANDLER));
	    },
	    teardown: function teardown(namespaces) {
	      var parent = $(this).parent().closest('.split-pane')[0] || window;
	      $(parent).off('resize', $(this).data(SPLITPANERESIZE_HANDLER));
	      $(this).removeData(SPLITPANERESIZE_HANDLER);
	    }
	  };
	
	  function setMinHeightAndMinWidth() {
	    var $splitPane = $(this),
	        components = getComponents($splitPane);
	    if ($splitPane.is('.fixed-top, .fixed-bottom, .horizontal-percent')) {
	      $splitPane.css('min-height', minHeight(components.first) + minHeight(components.last) + $(components.divider).height() + 'px');
	    } else {
	      $splitPane.css('min-width', minWidth(components.first) + minWidth(components.last) + $(components.divider).width() + 'px');
	    }
	  }
	
	  function mousedownHandler(event) {
	    var $divider = $(this),
	        $splitPane = $divider.parent(),
	        $resizeShim = $divider.siblings('.split-pane-resize-shim');
	    $resizeShim.show();
	    $divider.addClass('dragged');
	    if (event.type.match(/^touch/)) {
	      $divider.addClass('touch');
	    }
	    var moveEventHandler = createMousemove($splitPane, pageXof(event), pageYof(event));
	    $(document).on('touchmove mousemove', moveEventHandler);
	    $(document).one('touchend mouseup', function (event) {
	      $(document).off('touchmove mousemove', moveEventHandler);
	      $divider.removeClass('dragged touch');
	      $resizeShim.hide();
	      $splitPane.trigger('dividerdragend', [getComponentsSizes($splitPane)]);
	    });
	    $splitPane.trigger('dividerdragstart', [getComponentsSizes($splitPane)]);
	  }
	
	  function getComponentsSizes($splitPane) {
	    var property = $splitPane.is('.fixed-top, .fixed-bottom, .horizontal-percent') ? 'height' : 'width';
	    return {
	      firstComponentSize: $splitPane.find('.split-pane-component:first')[property](),
	      lastComponentSize: $splitPane.find('.split-pane-component:last')[property]()
	    };
	  }
	
	  function createParentresizeHandler($splitPane) {
	    var components = getComponents($splitPane);
	    if ($splitPane.is('.fixed-top')) {
	      return function (event) {
	        var lastComponentMinHeight = minHeight(components.last),
	            maxfirstComponentHeight = components.splitPane.offsetHeight - lastComponentMinHeight - components.divider.offsetHeight;
	        if (components.first.offsetHeight > maxfirstComponentHeight) {
	          setTop(components, maxfirstComponentHeight + 'px');
	        }
	        $splitPane.resize();
	      };
	    } else if ($splitPane.is('.fixed-bottom')) {
	      return function (event) {
	        var firstComponentMinHeight = minHeight(components.first),
	            maxLastComponentHeight = components.splitPane.offsetHeight - firstComponentMinHeight - components.divider.offsetHeight;
	        if (components.last.offsetHeight > maxLastComponentHeight) {
	          setBottom(components, maxLastComponentHeight + 'px');
	        }
	        $splitPane.resize();
	      };
	    } else if ($splitPane.is('.horizontal-percent')) {
	      return function (event) {
	        var lastComponentMinHeight = minHeight(components.last),
	            firstComponentMinHeight = minHeight(components.first),
	            maxLastComponentHeight = components.splitPane.offsetHeight - firstComponentMinHeight - components.divider.offsetHeight;
	        if (components.last.offsetHeight > maxLastComponentHeight) {
	          setBottom(components, maxLastComponentHeight / components.splitPane.offsetHeight * 100 + '%');
	        } else {
	          if (components.splitPane.offsetHeight - components.first.offsetHeight - components.divider.offsetHeight < lastComponentMinHeight) {
	            setBottom(components, lastComponentMinHeight / components.splitPane.offsetHeight * 100 + '%');
	          }
	        }
	        $splitPane.resize();
	      };
	    } else if ($splitPane.is('.fixed-left')) {
	      return function (event) {
	        var lastComponentMinWidth = minWidth(components.last),
	            maxFirstComponentWidth = components.splitPane.offsetWidth - lastComponentMinWidth - components.divider.offsetWidth;
	        if (components.first.offsetWidth > maxFirstComponentWidth) {
	          setLeft(components, maxFirstComponentWidth + 'px');
	        }
	        $splitPane.resize();
	      };
	    } else if ($splitPane.is('.fixed-right')) {
	      return function (event) {
	        var firstComponentMinWidth = minWidth(components.first),
	            maxLastComponentWidth = components.splitPane.offsetWidth - firstComponentMinWidth - components.divider.offsetWidth;
	        if (components.last.offsetWidth > maxLastComponentWidth) {
	          setRight(components, maxLastComponentWidth + 'px');
	        }
	        $splitPane.resize();
	      };
	    } else if ($splitPane.is('.vertical-percent')) {
	      return function (event) {
	        var lastComponentMinWidth = minWidth(components.last),
	            firstComponentMinWidth = minWidth(components.first),
	            maxLastComponentWidth = components.splitPane.offsetWidth - firstComponentMinWidth - components.divider.offsetWidth;
	        if (components.last.offsetWidth > maxLastComponentWidth) {
	          setRight(components, maxLastComponentWidth / components.splitPane.offsetWidth * 100 + '%');
	        } else {
	          if (components.splitPane.offsetWidth - components.first.offsetWidth - components.divider.offsetWidth < lastComponentMinWidth) {
	            setRight(components, lastComponentMinWidth / components.splitPane.offsetWidth * 100 + '%');
	          }
	        }
	        $splitPane.resize();
	      };
	    }
	  }
	
	  function createMousemove($splitPane, pageX, pageY) {
	    var components = getComponents($splitPane);
	    if ($splitPane.is('.fixed-top')) {
	      return fixedTopHandler(components, pageY);
	    } else if ($splitPane.is('.fixed-bottom')) {
	      return fixedBottomHandler(components, pageY);
	    } else if ($splitPane.is('.horizontal-percent')) {
	      return horizontalPercentHandler(components, pageY);
	    } else if ($splitPane.is('.fixed-left')) {
	      return fixedLeftHandler(components, pageX);
	    } else if ($splitPane.is('.fixed-right')) {
	      return fixedRightHandler(components, pageX);
	    } else if ($splitPane.is('.vertical-percent')) {
	      return verticalPercentHandler(components, pageX);
	    }
	  }
	
	  function fixedTopHandler(components, pageY) {
	    var firstComponentMinHeight = minHeight(components.first),
	        maxFirstComponentHeight = components.splitPane.offsetHeight - minHeight(components.last) - components.divider.offsetHeight,
	        topOffset = components.divider.offsetTop - pageY;
	    return function (event) {
	      var top = newTop(firstComponentMinHeight, maxFirstComponentHeight, topOffset + pageYof(event));
	      setTop(components, top + 'px');
	      $(components.splitPane).resize();
	    };
	  }
	
	  function fixedBottomHandler(components, pageY) {
	    var lastComponentMinHeight = minHeight(components.last),
	        maxLastComponentHeight = components.splitPane.offsetHeight - minHeight(components.first) - components.divider.offsetHeight,
	        bottomOffset = components.last.offsetHeight + pageY;
	    return function (event) {
	      event.preventDefault && event.preventDefault();
	      var bottom = Math.min(Math.max(lastComponentMinHeight, bottomOffset - pageYof(event)), maxLastComponentHeight);
	      setBottom(components, bottom + 'px');
	      $(components.splitPane).resize();
	    };
	  }
	
	  function horizontalPercentHandler(components, pageY) {
	    var splitPaneHeight = components.splitPane.offsetHeight,
	        lastComponentMinHeight = minHeight(components.last),
	        maxLastComponentHeight = splitPaneHeight - minHeight(components.first) - components.divider.offsetHeight,
	        bottomOffset = components.last.offsetHeight + pageY;
	    return function (event) {
	      event.preventDefault && event.preventDefault();
	      var bottom = Math.min(Math.max(lastComponentMinHeight, bottomOffset - pageYof(event)), maxLastComponentHeight);
	      setBottom(components, bottom / splitPaneHeight * 100 + '%');
	      $(components.splitPane).resize();
	    };
	  }
	
	  function fixedLeftHandler(components, pageX) {
	    var firstComponentMinWidth = minWidth(components.first),
	        maxFirstComponentWidth = components.splitPane.offsetWidth - minWidth(components.last) - components.divider.offsetWidth,
	        leftOffset = components.divider.offsetLeft - pageX;
	    return function (event) {
	      event.preventDefault && event.preventDefault();
	      var left = newLeft(firstComponentMinWidth, maxFirstComponentWidth, leftOffset + pageXof(event));
	      setLeft(components, left + 'px');
	      $(components.splitPane).resize();
	    };
	  }
	
	  function fixedRightHandler(components, pageX) {
	    var lastComponentMinWidth = minWidth(components.last),
	        maxLastComponentWidth = components.splitPane.offsetWidth - minWidth(components.first) - components.divider.offsetWidth,
	        rightOffset = components.last.offsetWidth + pageX;
	    return function (event) {
	      event.preventDefault && event.preventDefault();
	      var right = Math.min(Math.max(lastComponentMinWidth, rightOffset - pageXof(event)), maxLastComponentWidth);
	      setRight(components, right + 'px');
	      $(components.splitPane).resize();
	    };
	  }
	
	  function verticalPercentHandler(components, pageX) {
	    var splitPaneWidth = components.splitPane.offsetWidth,
	        lastComponentMinWidth = minWidth(components.last),
	        maxLastComponentWidth = splitPaneWidth - minWidth(components.first) - components.divider.offsetWidth,
	        rightOffset = components.last.offsetWidth + pageX;
	    return function (event) {
	      event.preventDefault && event.preventDefault();
	      var right = Math.min(Math.max(lastComponentMinWidth, rightOffset - pageXof(event)), maxLastComponentWidth);
	      setRight(components, right / splitPaneWidth * 100 + '%');
	      $(components.splitPane).resize();
	    };
	  }
	
	  function getComponents($splitPane) {
	    return {
	      splitPane: $splitPane[0],
	      first: $splitPane.children('.split-pane-component:first')[0],
	      divider: $splitPane.children('.split-pane-divider')[0],
	      last: $splitPane.children('.split-pane-component:last')[0]
	    };
	  }
	
	  function pageXof(event) {
	    if (event.pageX !== undefined) {
	      return event.pageX;
	    } else if (event.originalEvent.pageX !== undefined) {
	      return event.originalEvent.pageX;
	    } else if (event.originalEvent.touches) {
	      return event.originalEvent.touches[0].pageX;
	    }
	  }
	
	  function pageYof(event) {
	    if (event.pageY !== undefined) {
	      return event.pageY;
	    } else if (event.originalEvent.pageY !== undefined) {
	      return event.originalEvent.pageY;
	    } else if (event.originalEvent.touches) {
	      return event.originalEvent.touches[0].pageY;
	    }
	  }
	
	  function minHeight(element) {
	    return parseInt($(element).css('min-height')) || 0;
	  }
	
	  function minWidth(element) {
	    return parseInt($(element).css('min-width')) || 0;
	  }
	
	  function newTop(firstComponentMinHeight, maxFirstComponentHeight, value) {
	    return Math.min(Math.max(firstComponentMinHeight, value), maxFirstComponentHeight);
	  }
	
	  function newLeft(firstComponentMinWidth, maxFirstComponentWidth, value) {
	    return Math.min(Math.max(firstComponentMinWidth, value), maxFirstComponentWidth);
	  }
	  function setTop(components, top) {
	    components.first.style.height = top;
	    components.divider.style.top = top;
	    components.last.style.top = top;
	  }
	
	  function setBottom(components, bottom) {
	    components.first.style.bottom = bottom;
	    components.divider.style.bottom = bottom;
	    components.last.style.height = bottom;
	  }
	
	  function setLeft(components, left) {
	    components.first.style.width = left;
	    components.divider.style.left = left;
	    components.last.style.left = left;
	  }
	
	  function setRight(components, right) {
	    components.first.style.right = right;
	    components.divider.style.left = right;
	    components.last.style.width = right;
	  }
	
	  var Split = function () {
	    function Split(elt, options) {
	      var _this = this;
	
	      _classCallCheck(this, Split);
	
	      this.options = options;
	      this.horiz = !this.options || this.options.horizontal === undefined || this.options.horizontal;
	      var fixedFirst = !this.options || this.options.fixedFirst === undefined || this.options.fixedFirst;
	      var hideFirst = options && options.hideFirst;
	      var hideSecond = options && options.hideSecond;
	      this.splitPaneElt = document.createElement('div');
	      this.splitPaneElt.className = 'split-pane docloud-splitpane ' + (this.horiz ? fixedFirst ? 'fixed-left' : 'fixed-right' : fixedFirst ? 'fixed-top' : 'fixed-bottom');
	
	      this.leftComponent = document.createElement('div');
	      this.leftComponent.className = 'split-pane-component ' + (this.horiz ? 'left-pane split-pane-left' : 'top-pane split-pane-top');
	      this.splitPaneElt.appendChild(this.leftComponent);
	
	      var divider = document.createElement('div');
	      divider.className = 'split-pane-divider ' + (this.horiz ? 'h-split-pane-divider' : 'v-split-pane-divider');
	      this.splitPaneElt.appendChild(divider);
	      if (hideFirst || hideSecond) {
	        divider.style.display = 'none';
	      }
	
	      this.rightComponent = document.createElement('div');
	      this.rightComponent.className = 'split-pane-component ' + (this.horiz ? 'right-pane split-pane-right' : 'bottom-pane split-pane-bottom');
	      this.splitPaneElt.appendChild(this.rightComponent);
	
	      if (hideSecond) {
	        this.leftComponent.style.position = 'relative';
	        this.leftComponent.style[!this.horiz ? 'height' : 'width'] = '100%';
	        this.rightComponent.style.display = 'none';
	      } else if (hideFirst) {
	        this.rightComponent.style.position = 'relative';
	        this.rightComponent.style[!this.horiz ? 'height' : 'width'] = '100%';
	        this.leftComponent.style.display = 'none';
	      }
	
	      elt.appendChild(this.splitPaneElt);
	      this.$splitPaneElt = $(this.splitPaneElt).splitPane();
	
	      $(this.splitPaneElt).on('resize', function (e) {
	        _this.onresized();
	      });
	      $(this.splitPaneElt).on('dividerdragend', function (e) {
	        _this.onDividerDragEnd();
	      });
	    }
	
	    _createClass(Split, [{
	      key: 'getLeftComponent',
	      value: function getLeftComponent() {
	        return this.leftComponent;
	      }
	    }, {
	      key: 'getRightComponent',
	      value: function getRightComponent() {
	        return this.rightComponent;
	      }
	    }, {
	      key: 'leftComponentCreated',
	      value: function leftComponentCreated() {
	        var pos = this.options && this.options.pos || 200;
	        if (pos >= 0) {
	          $(this.splitPaneElt).splitPane('firstComponentSize', pos);
	        }
	      }
	    }, {
	      key: 'rightComponentCreated',
	      value: function rightComponentCreated() {
	        var pos = this.options && this.options.pos;
	        if (pos < 0) {
	          $(this.splitPaneElt).splitPane('lastComponentSize', -pos);
	        }
	      }
	    }, {
	      key: 'onresized',
	      value: function onresized() {}
	    }, {
	      key: 'onDividerDragEnd',
	      value: function onDividerDragEnd() {}
	    }, {
	      key: 'setLeftComponentVisible',
	      value: function setLeftComponentVisible(visible) {
	        $(this.splitPaneElt).splitPane('setLeftComponentVisible', visible);
	      }
	    }, {
	      key: 'setRightComponentVisible',
	      value: function setRightComponentVisible(visible) {
	        $(this.splitPaneElt).splitPane('setRightComponentVisible', visible);
	      }
	    }]);
	
	    return Split;
	  }();
	
	  Gantt.components.Split.impl = Split;
	})(_core2.default, _jquery2.default);

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _core = __webpack_require__(39);
	
	var _core2 = _interopRequireDefault(_core);
	
	var _jquery = __webpack_require__(58);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _vis = __webpack_require__(59);
	
	var _vis2 = _interopRequireDefault(_vis);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//import vis from '../../node_modules/vis/dist/vis';
	
	var defaultConfig = {
	  scrollableHorizonFactor: 3,
	  margin: 20
	};
	
	var TimeLine = function (_Gantt$components$Tim) {
	  _inherits(TimeLine, _Gantt$components$Tim);
	
	  function TimeLine(gantt, elt, config) {
	    _classCallCheck(this, TimeLine);
	
	    var _this = _possibleConstructorReturn(this, (TimeLine.__proto__ || Object.getPrototypeOf(TimeLine)).call(this, gantt, elt, _core2.default.utils.mergeObjects({}, defaultConfig, config)));
	
	    _this.create();
	    return _this;
	  }
	
	  _createClass(TimeLine, [{
	    key: 'create',
	    value: function create() {
	      this.scrollableHorizonFactor = Math.max(this.config && this.config.scrollableHorizonFactor || 3, 1);
	      this.items = [];
	      this.itemsByIds = {};
	      this._init = false;
	    }
	  }, {
	    key: 'setTimeWindow',
	    value: function setTimeWindow(start, end) {
	      var _this2 = this;
	
	      if (this.timeLineElt) {
	        this.node.removeChild(this.timeLineElt);
	      }
	      this.timeLineElt = document.createElement('div');
	      this.timeLineElt.style.width = this.node.offsetWidth * this.scrollableHorizonFactor + 'px';
	      this.timeLineElt.style.height = '100%';
	
	      var data = [];
	      var span = end - start;
	      this.scrollableHorizon = {
	        start: Math.round(start - (this.scrollableHorizonFactor - 1) / 2 * span),
	        end: Math.round(end + (this.scrollableHorizonFactor - 1) / 2 * span)
	      };
	      try {
	        // See https://github.com/almende/vis/issues/24 for time zone hack
	        this.visTimeline = new _vis2.default.Timeline(this.timeLineElt, data, {
	          // 'millisecond', 'second', 'minute', 'hour', 'weekday', 'day', 'month', 'year'
	          orientation: { axis: 'top', item: 'top' },
	          height: '100%',
	          start: this.scrollableHorizon.start,
	          end: this.scrollableHorizon.end
	        });
	      } catch (e) {
	        console.error(e);
	        throw e;
	      }
	      this.horizon = { start: start, end: end };
	      this.node.appendChild(this.timeLineElt);
	      this.zoomFactor = 1;
	
	      var initPromise = new Promise(function (resolve, reject) {
	        _this2.initResolve = resolve;
	      });
	      this.visTimeline.on('rangechanged', function () {
	        _this2.updateRatio();
	      });
	      this._init = false;
	      var fireReady = function fireReady() {
	        _this2._init = true;
	        var window = _this2.visTimeline.getWindow();
	        window.startMillis = window.start.getTime();
	        window.endMillis = window.end.getTime();
	        _this2.updateRatio();
	        var wnd = { start: start, end: end };
	        _this2.initResolve(wnd);
	        _this2.visTimeline.off('changed', fireReady);
	        _this2.triggerEvent(_core2.default.events.TIME_LINE_INIT, wnd);
	      };
	      this.visTimeline.on('changed', fireReady);
	      this.visTimeline.on('rangechange', function () {
	        _this2.updateRatio();
	        _this2.triggerEvent(_core2.default.events.TIME_LINE_RANGE_CHANGE);
	      });
	      this.visTimeline.on('rangechanged', function () {
	        _this2.updateRatio();
	        _this2.triggerEvent(_core2.default.events.TIME_LINE_RANGE_CHANGED);
	      });
	      this.visTimeline.on('pan', function () {
	        _this2.triggerEvent(_core2.default.events.TIME_LINE_PAN_MOVE);
	      });
	      this.visTimeline.on('panend', function () {
	        _this2.triggerEvent(_core2.default.events.TIME_LINE_PAN_MOVED);
	      });
	      return initPromise;
	    }
	  }, {
	    key: 'getWidth',
	    value: function getWidth() {
	      return this.timeLineElt.offsetWidth;
	    }
	  }, {
	    key: 'getHorizon',
	    value: function getHorizon() {
	      return this.horizon;
	    }
	  }, {
	    key: 'getScrollableHorizon',
	    value: function getScrollableHorizon() {
	      return this.scrollableHorizon;
	    }
	  }, {
	    key: 'updateRatio',
	    value: function updateRatio() {
	      this.window = this.visTimeline.getWindow();
	      this.window.startMillis = this.window.start.getTime();
	      this.window.endMillis = this.window.end.getTime();
	      this.scrollableHorizon.start = this.window.startMillis;
	      this.scrollableHorizon.end = this.window.endMillis;
	      this.ratio = this.getWidth() / (this.window.endMillis - this.window.startMillis);
	    }
	  }, {
	    key: 'getXFromMillis',
	    value: function getXFromMillis(time) {
	      return Math.round((time - this.scrollableHorizon.start) * this.ratio);
	      //return (time - this.window.startMillis) * this.ratio;
	    }
	  }, {
	    key: 'getX',
	    value: function getX(time) {
	      return Math.round((time - this.scrollableHorizon.start) * this.ratio);
	    }
	  }, {
	    key: 'getTimeAt',
	    value: function getTimeAt(x) {
	      return this.scrollableHorizon.start + Math.round(x / this.getWidth() * (this.scrollableHorizon.end - this.scrollableHorizon.start));
	    }
	  }, {
	    key: 'getTimeAxisHeight',
	    value: function getTimeAxisHeight(defaultValue) {
	      var visTimeAxis = this.timeLineElt && this.timeLineElt.getElementsByClassName("vis-panel vis-top");
	      // Cannot use native offsetHeight as it is rounding dimensions
	      // See warning at https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight
	      return visTimeAxis && visTimeAxis.length && (0, _jquery2.default)(visTimeAxis[0]).outerHeight() || defaultValue;
	    }
	  }, {
	    key: 'getTimeWindow',
	    value: function getTimeWindow() {
	      return this.visTimeline && this.visTimeline.getWindow();
	    }
	  }, {
	    key: 'draw',
	    value: function draw() {}
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	      if (this._init) {
	        this.updateRatio();
	      }
	    }
	  }, {
	    key: 'validateZoomFactor',
	    value: function validateZoomFactor(zoomFactor) {
	      if (this.zoomFactor + zoomFactor < 1) {
	        return 0;
	      }
	      return zoomFactor;
	    }
	  }, {
	    key: 'zoom',
	    value: function zoom(zoomFactor, xCenter) {
	      this.zoomFactor += zoomFactor;
	      var w = this.getWidth() + zoomFactor * this.getWidth();
	      this.timeLineElt.style.width = w + 'px';
	      this.updateRatio();
	
	      this.triggerEvent(_core2.default.events.TIME_LINE_SIZE_CHANGED, w, this.getTimeAxisHeight());
	    }
	  }, {
	    key: 'resetZoom',
	    value: function resetZoom() {
	      this.zoomFactor = 1;
	      var w = this.node.offsetWidth * this.scrollableHorizonFactor;
	      this.timeLineElt.style.width = w + 'px';
	      this.updateRatio();
	      this.triggerEvent(_core2.default.events.TIME_LINE_SIZE_CHANGED, w, this.getTimeAxisHeight());
	    }
	  }, {
	    key: 'setVisibleTimeWindow',
	    value: function setVisibleTimeWindow(window) {
	      if (!window || !window.start || !window.end) {
	        this.resetZoom();
	      } else {
	        var horizPageCount = (this.scrollableHorizon.end - this.scrollableHorizon.start) / (window.end - window.start);
	        this.zoomFactor = horizPageCount / this.scrollableHorizonFactor;
	        var w = horizPageCount * this.node.offsetWidth;
	        this.timeLineElt.style.width = w + 'px';
	        this.updateRatio();
	        this.triggerEvent(_core2.default.events.TIME_LINE_SIZE_CHANGED, w, this.getTimeAxisHeight());
	      }
	    }
	  }, {
	    key: 'getVisibleTimes',
	    value: function getVisibleTimes() {
	      return { start: this.window.startMillis, end: this.window.endMillis };
	    }
	  }, {
	    key: 'scrollTo',
	    value: function scrollTo(time, animate) {
	      var range = this.visTimeline.getWindow();
	      var interval = range.end - range.start;
	
	      this.visTimeline.setWindow(time, time + interval, animate === undefined ? undefined : { animation: animate });
	    }
	
	    /*           Markers        */
	
	  }, {
	    key: 'addTimeMarker',
	    value: function addTimeMarker(id, time, classes) {
	      var ar = this.visTimeline.customTimes,
	          l = ar && ar.length;
	      this.visTimeline.addCustomTime(time, id);
	
	      // Retrieve the node associate with the time marker
	      if (ar && ar.length && ar.length != l) {
	        var markerObj = this.visTimeline.customTimes[l];
	        if (markerObj && markerObj.bar) {
	          (0, _jquery2.default)(markerObj.bar).css('top', this.getTimeAxisHeight() - 3 + 'px');
	        }
	      }
	    }
	  }, {
	    key: 'removeTimeMarker',
	    value: function removeTimeMarker(id, time, classes) {
	      this.visTimeline.removeCustomTime(id);
	    }
	  }, {
	    key: 'createVisItem',
	    value: function createVisItem(item) {
	      return {
	        start: item.start || (item.type == 'background' ? this.window.startMillis : undefined),
	        end: item.end || (item.type == 'background' ? this.window.endMillis : undefined),
	        title: item.title,
	        type: item.type == 'background' ? 'background' : item.type == 'box' ? 'box' : item.type == 'point' ? 'point' : 'background',
	        className: item.className,
	        content: item.content
	      };
	    }
	  }, {
	    key: 'setTimeLineItem',
	    value: function setTimeLineItem(id, item) {
	      this.removeTimeLineItem(id, false);
	      this.addTimeLineItem(id, item);
	    }
	  }, {
	    key: 'addTimeLineItem',
	    value: function addTimeLineItem(id, item, update) {
	      item = this.createVisItem(item);
	      this.items.push(item);
	      this.itemsByIds[id] = item;
	      if (update === undefined || update) {
	        this.visTimeline.setItems(this.items);
	      }
	    }
	  }, {
	    key: 'removeTimeLineItem',
	    value: function removeTimeLineItem(id, update) {
	      var item = this.itemsByIds[id];
	      if (item) {
	        delete this.itemsByIds[id];
	        var index = this.items.indexOf(item);
	        if (index > -1) {
	          this.items.splice(index, 1);
	        }
	        if (update === undefined || update) {
	          this.visTimeline.setItems(this.items);
	        }
	      }
	    }
	
	    //
	    // Decorations
	
	  }, {
	    key: 'getDecorationContainer',
	    value: function getDecorationContainer() {
	      var $panel = (0, _jquery2.default)(this.timeLineElt).find('.vis-panel.vis-background.vis-horizontal');
	      return $panel.length && $panel[0] || null;
	    }
	  }]);
	
	  return TimeLine;
	}(_core2.default.components.TimeLine);
	
	exports.default = TimeLine;
	
	
	_core2.default.components.TimeLine.impl = TimeLine;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _core = __webpack_require__(39);
	
	var _core2 = _interopRequireDefault(_core);
	
	var _treetablecontroller = __webpack_require__(68);
	
	var _treetablecontroller2 = _interopRequireDefault(_treetablecontroller);
	
	var _jquery = __webpack_require__(58);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _datatables = __webpack_require__(69);
	
	var _datatables2 = _interopRequireDefault(_datatables);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	if (_datatables2.default) {
	    (0, _datatables2.default)(window, _jquery2.default); // https://github.com/aurelia/skeleton-navigation/issues/473
	} //attaches to global jquery object only if datatables are included in the same bundle as Gantt source.
	
	
	var HIGHLIGHT_CLASS = 'highlight';
	var SELECTION_CLASS = 'selected';
	var FLAT_CLASS = 'tree-table-flat';
	
	var NUMBER_COLUMN_NAME = 'rowNumbers';
	var HIERARCHY_COLUMN_NAME = 'hierarchy';
	
	var TREE_NODE_TYPE = 'tree-node';
	
	var defaultDataTableOptions = {
	    /*serverSide: true,*/
	    /*
	     searching: false,*/
	    bInfo: false,
	    paging: false,
	    "scrollY": "100%",
	    "scrollX": true,
	    rowId: "id"
	};
	
	function getDefaultTableColumns() {
	    return [{
	        name: NUMBER_COLUMN_NAME,
	        data: null,
	        title: "",
	        render: function render(data, type, full, meta) {
	            return '<div class="row-number">' + (meta.row + 1) + '</div>';
	        },
	        /*"width": "40px",*/
	        className: "row-number-col",
	        orderable: false,
	        searchable: false
	    }, {
	        name: HIERARCHY_COLUMN_NAME,
	        data: null,
	        title: "Name"
	    }];
	}
	
	var findColumn = function findColumn(columns, name) {
	    for (var iCol = 0, count = columns ? columns.length : 0; iCol < count; iCol++) {
	        if (columns[iCol].name === name) {
	            return columns[iCol];
	        }
	    }
	    return null;
	};
	
	var GanttDataTable = function (_Gantt$components$Tre) {
	    _inherits(GanttDataTable, _Gantt$components$Tre);
	
	    function GanttDataTable(gantt, node, config) {
	        _classCallCheck(this, GanttDataTable);
	
	        var _this = _possibleConstructorReturn(this, (GanttDataTable.__proto__ || Object.getPrototypeOf(GanttDataTable)).call(this, gantt, node, config));
	
	        _this.gantt = gantt;
	        var selectionHandler = _this.gantt.selection;
	        selectionHandler.on(_core2.default.events.ROW_SELECTION_CLEARED, function () {
	            return _this.clearSelection();
	        });
	        selectionHandler.on(_core2.default.events.ROW_SELECTED, function (e, sels) {
	            return _this.selectRows(sels);
	        });
	        selectionHandler.on(_core2.default.events.ROW_UNSELECTED, function (e, sels) {
	            return _this.unselectRows(sels);
	        });
	        _this.setConfiguration(config);
	        return _this;
	    }
	
	    _createClass(GanttDataTable, [{
	        key: 'setConfiguration',
	        value: function setConfiguration(config) {
	            var _this2 = this;
	
	            this.config = config;
	
	            if (this.$dataTable) {
	                this.destroy();
	            }
	
	            var defaultConfig = _core2.default.utils.mergeObjects({}, defaultDataTableOptions);
	            defaultConfig.columns = getDefaultTableColumns(); // Instead of doing a deep copy of the defaultDataTableOptions
	            this.dataTableOptions = _core2.default.utils.mergeObjects(defaultConfig, config && config.dataTables);
	
	            if (config && config.columns && config.columns.length) {
	                var defaultColumns = {};
	                this.dataTableOptions.columns = this.dataTableOptions.columns.filter(function (col) {
	                    // Remove default columns if defined - maybe with a different order - in config.columns
	                    if (col.name) {
	                        defaultColumns[col.name] = col;
	                    }
	                    return !col.name || !findColumn(config.columns, col.name);
	                });
	
	                for (var iCol = 0, configCol, col; iCol < config.columns.length; iCol++) {
	                    configCol = config.columns[iCol];
	                    col = this.customizeDataColumn(configCol.name && defaultColumns[configCol.name] || {}, configCol);
	                    if (col) {
	                        this.dataTableOptions.columns.push(col);
	                    }
	                }
	
	                // if default columns not in the specified config.columns, add them back in the columns unless explicitely removed
	                var removedCols = {};
	                this.dataTableOptions.columns = this.dataTableOptions.columns.filter(function (col) {
	                    if (col.remove && col.name) {
	                        removedCols[col.name] = true;
	                        return false;
	                    }
	                    return true;
	                });
	
	                if (!findColumn(this.dataTableOptions.columns, HIERARCHY_COLUMN_NAME) && !removedCols[HIERARCHY_COLUMN_NAME]) {
	                    this.dataTableOptions.columns.splice(0, 0, findColumn(defaultColumns[HIERARCHY_COLUMN_NAME]));
	                }
	                if (!findColumn(this.dataTableOptions.columns, NUMBER_COLUMN_NAME) && !removedCols[NUMBER_COLUMN_NAME]) {
	                    this.dataTableOptions.columns.splice(0, 0, findColumn(defaultColumns[NUMBER_COLUMN_NAME]));
	                }
	            }
	
	            if (config && config.sorting !== undefined && !config.sorting) {
	                this.dataTableOptions.columns.bSort = false;
	            } else if (!config || !config.initialSorting) {
	                this.dataTableOptions.order = [];
	            }
	
	            this.controller = new _treetablecontroller2.default();
	            this.controller.rowsVisibilityChanged = function (visible, rows, rowRef) {
	                _this2.gantt.startUpdating();
	                _this2.triggerEvent(visible ? _core2.default.events.ROWS_ADDED : _core2.default.events.ROWS_REMOVED, rows, rowRef);
	                _this2.gantt.updates.rowsChanged(visible ? _core2.default.events.ROWS_ADDED : _core2.default.events.ROWS_REMOVED, rows, rowRef);
	                _this2.gantt.stopUpdating();
	            };
	            this.controller.customizeOptions(this.dataTableOptions, findColumn(this.dataTableOptions.columns, HIERARCHY_COLUMN_NAME));
	
	            this.dataTableOptions.rowId = 'id';
	
	            var oldInitComplete = this.dataTableOptions.initComplete;
	            this.dataTableOptions.initComplete = function (oSettings, json) {
	                if (oldInitComplete) {
	                    oldInitComplete(oSettings, json);
	                }
	            };
	            var oldDrawCallback = this.dataTableOptions.drawCallback;
	            this._drawCallbacks = [];
	            this.dataTableOptions.drawCallback = function (settings) {
	                if (oldDrawCallback) {
	                    oldDrawCallback.call(_this2, settings);
	                }
	                for (var i = 0; i < _this2._drawCallbacks.length; i++) {
	                    _this2._drawCallbacks[i](settings);
	                }
	                _this2._drawCallbacks = [];
	            };
	            this.create();
	        }
	    }, {
	        key: 'customizeDataColumn',
	        value: function customizeDataColumn(col, config) {
	            if (config.name) {
	                col.name = config.name;
	            }
	            if (config.title) {
	                col.title = config.title;
	            }
	            if (config.width) {
	                col.width = config.width;
	            }
	            if (config.visible) {
	                col.visible = config.visible;
	            }
	            if (config.className) {
	                col.className = config.className;
	            }
	            if (config.remove) {
	                // Not a dataTables field but pre-processed by this class
	                col.remove = config.remove;
	            }
	            if (config.data || config.text) {
	                var c = config.data || config.text;
	                if (typeof c == "function") {
	                    col.data = c;
	                } else if (typeof c == "string") {
	                    var getter = _core2.default.utils.propertyEvaluator(c);
	                    if (getter) {
	                        col.data = function (object) {
	                            return getter(object);
	                        };
	                    }
	                }
	            }
	
	            if (config.renderer || config.sortComparator || config.sortValue || config.filterValue) {
	                var colRenderer = config.renderer ? new (_core2.default.components.Renderer.impl || _core2.default.components.Renderer)(config.renderer, ColumnRendererPrototype, this.gantt) : null;
	                if (config.sortValue || config.sortComparator || colRenderer && colRenderer.getText) {
	                    col.type = TREE_NODE_TYPE;
	                    var sortValue = void 0;
	                    if (config.sortValue) {
	                        if (_core2.default.utils.isFunction(config.sortValue)) {
	                            sortValue = function sortValue(obj) {
	                                return config.sortValue.call(config, obj);
	                            };
	                        } else if (_core2.default.utils.isString(config.sortValue)) {
	                            sortValue = _core2.default.utils.propertyEvaluator(config.sortValue);
	                        } else {
	                            console.warn('sortValue column config should be a function or a string');
	                        }
	                    }
	                    if (!sortValue && !config.sortComparator && colRenderer && colRenderer.getText) {
	                        sortValue = function sortValue(obj) {
	                            return colRenderer.getText(obj);
	                        };
	                    }
	                    col.render = {};
	                    col.render.sort = function (node, type, full, meta) {
	                        var obj = Object.create(full);
	                        if (sortValue) {
	                            obj.getSortValue = sortValue;
	                        }
	                        if (config.sortComparator) {
	                            obj.comparator = function (a, b) {
	                                return config.sortComparator.call(config, a, b);
	                            };
	                        }
	                        return obj;
	                    };
	                } else {
	                    col.orderable = false;
	                }
	                if (config.filterValue) {
	                    if (!col.render) {
	                        col.render = {};
	                    }
	                    if (_core2.default.utils.isFunction(config.filterValue)) {
	                        col.render.filter = function (node, type, full, meta) {
	                            return config.filterValue.call(config, full);
	                        };
	                    } else if (_core2.default.utils.isString(config.filterValue)) {
	                        var filterValue = _core2.default.utils.propertyEvaluator(config.filterValue);
	                        col.render.filter = function (node, type, full, meta) {
	                            return filterValue(full);
	                        };
	                    } else {
	                        console.warn('filterValue column config should be a function or a string');
	                    }
	                }
	                if (colRenderer) {
	                    if (!col.render) {
	                        col.render = {};
	                    }
	                    if (colRenderer.getText) {
	                        // Value used for sorting or filtering if not sort/filter config specified.
	                        col.render._ = function (node, type, full, meta) {
	                            return colRenderer.getText(full);
	                        };
	                    }
	                    col.render.display = function (node, type, full, meta) {
	                        var result = '';
	                        var icon = colRenderer.getIcon && colRenderer.getIcon(node, meta);
	                        if (icon) {
	                            icon = _core2.default.utils.isArray(icon) ? icon : [icon];
	                            for (var iIcon = 0; iIcon < icon.length; iIcon++) {
	                                result += "<img src='" + icon[iIcon] + "' alt='' class='text-icon'>";
	                            }
	                        }
	                        var text = colRenderer.getText && colRenderer.getText(node, meta);
	                        if (text) {
	                            result += "<span>" + text + "</span>";
	                        }
	                        return result;
	                    };
	                }
	                // https://datatables.net/reference/option/columns.createdCell
	                var ctx = {};
	                col.createdCell = function (cell, cellData, rowData, rowIndex, colIndex) {
	                    colRenderer.draw(rowData, cell, ctx);
	                };
	            }
	            if (!col.data) {
	                col.data = null;
	            }
	            return col;
	        }
	    }, {
	        key: 'setRowFilter',
	        value: function setRowFilter(filter) {
	            this.filter = filter;
	        }
	    }, {
	        key: 'create',
	        value: function create() {}
	    }, {
	        key: 'setRows',
	        value: function setRows(rows) {
	            var _this3 = this;
	
	            this.rows = rows;
	            if (this.tableElt) {
	                this.destroy();
	            }
	
	            this.tableElt = document.createElement('table');
	            this.tableElt.className = _core2.default.components.TreeTable.defaultClass;
	            this.tableElt.cellSpacing = 0;
	            //this.tableElt.style.width = '100%';
	
	            var thead = document.createElement('thead');
	            var tr = document.createElement('tr');
	
	            // Scan columns definitions
	            var columns = this.dataTableOptions.columns;
	            for (var i = 0, th; i < columns.length; i++) {
	                th = document.createElement('th');
	                th.innerHTML = columns[i].title && _core2.default.utils.getString(columns[i].title) || columns[i].data || 'Col' + (i + 1);
	                tr.appendChild(th);
	            }
	
	            thead.appendChild(tr);
	            this.tableElt.appendChild(thead);
	
	            this.node.appendChild(this.tableElt);
	
	            var initResolver = void 0;
	            var initPms = new Promise(function (resolver, reject) {
	                initResolver = resolver;
	            });
	
	            var $tableElt = (0, _jquery2.default)(this.tableElt);
	            this.tableBody = null;
	            if (this.headerHeight > 0) {
	                this.headerHeight = -this.headerHeight;
	            }
	            this.$dataTable = $tableElt.on('init.dt', function () {
	                _this3.tableInitialized();
	
	                if (_this3.headerHeight < 0) {
	                    _this3.setHeaderHeight(-_this3.headerHeight);
	                }
	                _this3.triggerEvent(_core2.default.events.TABLE_INIT);
	                initResolver(rows);
	                _this3.dataTableOptions.data = null;
	            }).DataTable(_core2.default.utils.mergeObjects({}, this.dataTableOptions, { data: rows }));
	            // https://datatables.net/examples/api/counter_columns.html
	            var hasNumberColumn = findColumn(this.dataTableOptions.columns, NUMBER_COLUMN_NAME);
	            this.$dataTable.on('order.dt search.dt', function (e) {
	                if (hasNumberColumn) {
	                    _this3.$dataTable.column(NUMBER_COLUMN_NAME + ':name', { search: 'applied', order: 'applied' }).nodes().each(function (cell, i) {
	                        cell.innerHTML = i + 1;
	                    });
	                }
	            }).draw('full-hold');
	
	            var allSettings = this.$dataTable.settings();
	            for (var _i = 0; _i < allSettings.length; _i++) {
	                // Retrieve the GanttDataTable from the global search function
	                allSettings[_i].ganttDataTable = this;
	            }
	            var body = this.getScrollableBody(this.tableElt);
	            this.controller.install(this.$dataTable, body);
	            /* Impossilbe to use the code below as an alternative of re-creating the table for each setRows
	                The code below does not set ids to tr rows and the workaround for doing that is too costly.
	                this.$dataTable.rows.add(rows).draw();
	                **/
	
	            /*  Manage selection  */
	            (0, _jquery2.default)(body).on('click', 'tr', function (e) {
	                var tr = (0, _jquery2.default)(e.target).closest('tr');
	                var row = tr && tr.length && _this3.getRow(tr[0]);
	                if (row) {
	                    _this3.gantt.highlightRow(row, true, true);
	                    _this3.gantt.selection.processClick(e, row);
	                }
	            });
	            (0, _jquery2.default)(body).on('mouseenter', 'tr', function (e) {
	                var tr = (0, _jquery2.default)(e.target).closest('tr');
	                var row = tr && tr.length && _this3.getRow(tr[0]);
	                if (row) {
	                    _this3.gantt.highlightRow(row, true, true);
	                }
	            });
	            (0, _jquery2.default)(body).on('mouseleave', 'tr', function (e) {
	                var tr = (0, _jquery2.default)(e.target).closest('tr');
	                var row = tr && tr.length && _this3.getRow(tr[0]);
	                _this3.gantt.highlightRow(null, true, true);
	            });
	            return initPms;
	        }
	    }, {
	        key: 'tableInitialized',
	        value: function tableInitialized() {
	            (0, _jquery2.default)(this.node).toggleClass(FLAT_CLASS, this.gantt.isFlat());
	            this.$scrollableBody = (0, _jquery2.default)(this.node).find('div.dataTables_scrollBody');
	            this.scrollableBody = this.$scrollableBody[0];
	            this.tableBody = this.$scrollableBody.find('TBODY')[0];
	
	            this.scrollableBody.overflowX = 'scroll';
	            this.scrollableBody.overflowY = 'hidden';
	            this.scrollableBody.style.position = 'absolute';
	            this.scrollableBody.style.right = 0;
	            this.scrollableBody.style.left = 0;
	            this.scrollableBody.style.bottom = 0;
	            this.scrollableBody.style.width = null;
	            this.scrollableBody.style.height = null;
	
	            var $scrollableHead = (0, _jquery2.default)(this.node).find('div.dataTables_scrollHead THEAD');
	            this.tableHeader = $scrollableHead[0];
	            var table = this;
	            $scrollableHead.find('th').click(function () {
	                if (_core2.default.utils.hasClass(this, 'sorting') || _core2.default.utils.hasClass(this, 'sorting_asc') || _core2.default.utils.hasClass(this, 'sorting_desc')) {
	                    table.gantt.startUpdating();
	                    table.gantt.updates.rowsChanged(_core2.default.events.ROWS_SORTED);
	                    table.gantt.updates.tableScrollYChanged(); // When sorting, datatable automatically restore scrolly position to 0
	                    table.triggerEvent(_core2.default.events.ROWS_SORTED);
	                    table.gantt.stopUpdating();
	                }
	            });
	        }
	    }, {
	        key: 'onDraw',
	        value: function onDraw(fct) {
	            this._drawCallbacks.push(fct);
	        }
	    }, {
	        key: 'createUpdates',
	        value: function createUpdates(parent) {
	            var _this4 = this;
	
	            var updates = new (_core2.default.components.GanttUpdates.impl || _core2.default.components.GanttUpdates)(parent, {
	                doApplyUpdates: function doApplyUpdates() {
	                    if (updates.isReload()) {
	                        _this4.$dataTable.draw();
	                    } else if (updates.containsRowChanges) {
	                        _this4.$dataTable.draw('full-hold');
	                    }
	                }
	            });
	            return updates;
	        }
	    }, {
	        key: 'getScrollableBody',
	        value: function getScrollableBody() {
	            return this.getTableBody();
	        }
	    }, {
	        key: 'setHeaderHeight',
	        value: function setHeaderHeight(height) {
	            if (this.tableHeader) {
	                this.headerHeight = height;
	                var scrollHeadHeight = void 0;
	                if (!height) {
	                    scrollHeadHeight = (0, _jquery2.default)(this.tableHeader).height();
	                } else {
	                    scrollHeadHeight = height;
	                    var tds = _core2.default.utils.getChild(this.tableHeader, 'TR').childNodes;
	                    for (var i = 0, count = tds.length; i < count; ++i) {
	                        (0, _jquery2.default)(tds.item(i)).css({ height: height + 'px' });
	                    }
	                }
	                // Horrible hack to Datatable issue for fitting its parent div
	                // https://datatables.net/forums/discussion/12187/datatable-fixed-height
	                this.scrollableBody.style.top = scrollHeadHeight + 'px';
	                var panelHeight = (0, _jquery2.default)(this.node).height();
	                this.$scrollableBody.height(panelHeight - scrollHeadHeight);
	                //this.getScrollableBody().style.top = scrollHeadHeight + 'px';
	            }
	            // Table not initialized yet
	            else {
	                    // Store it for when the table is initialized
	                    this.headerHeight = -height;
	                }
	        }
	    }, {
	        key: 'getScrollableTable',
	        value: function getScrollableTable() {
	            return this.scrollableBody;
	        }
	    }, {
	        key: 'getTableBody',
	        value: function getTableBody() {
	            return this.tableBody;
	        }
	    }, {
	        key: 'getHeight',
	        value: function getHeight() {
	            return this.tableBody ? this.tableBody.offsetHeight : 0;
	        }
	    }, {
	        key: 'getRowCount',
	        value: function getRowCount() {
	            return this.$dataTable.data().length;
	        }
	    }, {
	        key: 'createRowResult',
	        value: function createRowResult(tr, index) {
	            var id = tr.id;
	            var node = (id || id === 0) && this.rows && this.rows.byIds[id] || null;
	            if (node) {
	                node.tr = tr;
	                if (index !== undefined) {
	                    node.index = index;
	                }
	            }
	            return node;
	        }
	    }, {
	        key: 'getRow',
	        value: function getRow(param) {
	            var id = void 0,
	                row = void 0;
	            if (param && param.isGanttRow) {
	                row = param;
	                id = param.id;
	            } else if (typeof param === 'string' || param && param.id) {
	                id = param.id || param;
	                row = this.rows && this.rows.byIds && id && this.rows.byIds[id];
	            } else if (_core2.default.utils.isInteger(param)) {
	                row = this.rows && this.rows[param];
	                id = row && row.id;
	            }
	            if (row && !row.tr && id) {
	                row.tr = param.nodeType ? param : document.getElementById(id);
	            }
	            return row;
	        }
	    }, {
	        key: 'getVisibleRows',
	        value: function getVisibleRows() {
	            var trs = this.$dataTable.$('tr', { "filter": "applied" });
	            var count = trs.length,
	                result = new Array(count);
	            for (var i = 0, row; i < count; ++i) {
	                row = trs[i];
	                row = row.length ? row[0] : row;
	                row = this.rows && this.rows.byIds[row.id];
	                result[i] = row;
	            }
	            return result;
	        }
	    }, {
	        key: 'getRowAt',
	        value: function getRowAt(y, startingRow) {
	            //TODO code below seems to be quicker but does not work as is as getBoundingClientRect().top does not
	            // return the coordinate relative to the direct parent
	            /*var rowHeight = this.getRowHeight();
	             var rowNum = y / rowHeight;
	             var row = this.getRowAtIndex(Math.floor(y / rowHeight));
	              if (!row && !(row = this.nextRow(null))) {
	             return null;
	             }
	             var rect = row.tr.getBoundingClientRect();
	             if (y >= rect.top) {
	             while (y >= rect.bottom) {
	             row = this.nextRow(row);
	             if (!row) {
	             return null;
	             }
	             rect = row.tr.getBoundingClientRect()
	             }
	             }
	             else {
	             while (y < rect.top) {
	             row = this.prevRow(row);
	             if (!row) {
	             return null;
	             }
	             rect = row.tr.getBoundingClientRect();
	             }
	             }
	             return row;*/
	            // Alternative slower option, only using element.offsetHeight
	            var tr = void 0,
	                index = void 0;
	            if (startingRow && startingRow.getData() && (tr = startingRow.tr)) {
	                index = startingRow.index;
	                var top = this.getRowTop(startingRow);
	                if (top <= y) {
	                    y -= top;
	                    while (tr && y > tr.offsetHeight) {
	                        y -= tr.offsetHeight;
	                        tr = tr.nextSibling;
	                        index++;
	                    }
	                } else {
	                    do {
	                        tr = tr.previousSibling;
	                        --index;
	                    } while (tr && y < (top -= tr.offsetHeight));
	                }
	                if (tr && startingRow.tr == tr) {
	                    return startingRow;
	                }
	            } else {
	                index = 0;
	                var row = this.nextRow(null);
	                tr = row && row.tr;
	                while (tr && y >= tr.offsetHeight) {
	                    y -= tr.offsetHeight;
	                    tr = tr.nextSibling;
	                    ++index;
	                }
	            }
	            return tr && this.createRowResult(tr, index);
	        }
	
	        //noinspection JSUnusedGlobalSymbols
	
	    }, {
	        key: 'getRowAtIndex',
	        value: function getRowAtIndex(index) {
	            var body = this.getTableBody();
	            if (body) {
	                var tr = _core2.default.utils.getChild(body, 'TR');
	                var origIndex = index;
	                while (index-- && tr) {
	                    tr = tr.nextSibling;
	                }
	                return tr && this.createRowResult(tr, origIndex) || null;
	            }
	            return null;
	        }
	    }, {
	        key: 'getRowTop',
	        value: function getRowTop(row) {
	            return (row.tr || (row.tr = document.getElementById(row.id))) && row.tr.offsetTop - this.getTableBody().offsetTop || 0;
	        }
	    }, {
	        key: 'nextRow',
	        value: function nextRow(row) {
	            if (!row) {
	                var tr = this.getTableBody() && this.getTableBody().firstChild;
	                return tr && this.createRowResult(tr, 0) || null;
	            }
	            var nextTr = row.tr.nextSibling;
	            return nextTr && this.createRowResult(nextTr, row.index + 1) || null;
	        }
	
	        //noinspection JSUnusedGlobalSymbols
	
	    }, {
	        key: 'prevRow',
	        value: function prevRow(row) {
	            if (!row) {
	                var tr = this.getTableBody() && this.getTableBody().lastChild;
	                return tr && this.createRowResult(tr, this.getTableBody().childElementCount) || null;
	            }
	            var prevTr = row.tr.previousSibling;
	            return prevTr && this.createRowResult(prevTr, row.index - 1) || null;
	        }
	    }, {
	        key: 'setRowHeight',
	        value: function setRowHeight(row, height) {
	            if (!row.defaultHeight) {
	                row.defaultHeight = row.tr.offsetHeight;
	            }
	            if (height != row.defaultHeight) {
	                (0, _jquery2.default)(row.tr).css({ height: height + 'px' }).addClass('variable-row-height');
	            } else {
	                (0, _jquery2.default)(row.tr).css({ height: 'inherit' });
	            }
	        }
	    }, {
	        key: 'getRowHeight',
	        value: function getRowHeight(row, height) {
	            //return $(row.tr).offsetHeight;
	            return (0, _jquery2.default)(row.tr || (row.tr = document.getElementById(row.id))).height();
	        }
	    }, {
	        key: 'deleteDrawCache',
	        value: function deleteDrawCache() {
	            if (this.rows) {
	                for (var i = 0, count = this.rows.length; i < count; ++i) {
	                    delete this.rows[i].activityRow;
	                }
	            }
	            this.$dataTable.$('tr.variable-row-height').css({ height: 'inherit' }).removeClass('variable-row-height');
	        }
	    }, {
	        key: 'expandParents',
	        value: function expandParents(row) {
	            row = this.getRow(row);
	            if (row) {
	                this.controller.expandParents('' + row.id); // In case row.id is a num
	            }
	        }
	    }, {
	        key: 'getFirstVisibleRow',
	        value: function getFirstVisibleRow() {
	            var yTop = this.getScrollableTable().scrollTop;
	            return this.getRowAt(yTop);
	        }
	    }, {
	        key: 'isRowVisible',
	        value: function isRowVisible(param) {
	            var row = this.getRow(param);
	            if (this.isRowFiltered(row)) {
	                return false;
	            }
	            var parent = row.parent;
	            while (parent) {
	                if (this.controller.isCollapsedNode(parent.id)) {
	                    return false;
	                }
	                parent = parent.parent;
	            }
	            return true;
	        }
	    }, {
	        key: 'toggleCollapseRow',
	        value: function toggleCollapseRow(param, collapse) {
	            var row = this.getRow(param);
	            if (!row || this.isRowFiltered(row)) {
	                return false;
	            }
	            if (collapse === undefined) {
	                collapse = !this.controller.isCollapsedNode(row.id);
	            }
	            this.controller.collapseNode(row.id, collapse);
	        }
	    }, {
	        key: 'highlightRow',
	        value: function highlightRow(row, highlight, deselectAll) {
	            var utils = _core2.default.utils;
	            if (deselectAll) {
	                var result = this.getTableBody().querySelectorAll('tr.' + HIGHLIGHT_CLASS);
	                for (var i = 0; i < result.length; i++) {
	                    utils.removeClass(result[i], HIGHLIGHT_CLASS);
	                }
	            }
	            if (row && row.tr) {
	                utils.toggleClass(row.tr, HIGHLIGHT_CLASS, highlight === undefined || highlight);
	            } else if (row) {
	                (0, _jquery2.default)(this.getTableBody()).find('#' + (row.id || row)).toggleClass(HIGHLIGHT_CLASS, highlight === undefined || highlight);
	            }
	        }
	    }, {
	        key: 'draw',
	        value: function draw(forceTableReload) {
	            if (forceTableReload) {
	                this.$dataTable.draw();
	            } else {
	                this.$dataTable.draw('full-hold');
	            }
	        }
	    }, {
	        key: 'onResize',
	        value: function onResize() {
	            if (this.$dataTable) this.$dataTable.draw('full-hold');
	        }
	    }, {
	        key: 'filterChanged',
	        value: function filterChanged() {
	            if (this.$dataTable) this.$dataTable.draw('full-hold');
	        }
	    }, {
	        key: 'isRowFiltered',
	        value: function isRowFiltered(row) {
	            return row.__filterMatched !== undefined && !row.__filterMatched;
	        }
	    }, {
	        key: 'setRowColor',
	        value: function setRowColor(row, color) {}
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            if (this.$dataTable) {
	                this.$dataTable.destroy(); // https://datatables.net/reference/api/destroy()
	                if (this.tableElt.parentNode === this.node) {
	                    this.node.removeChild(this.tableElt);
	                }
	                this.$dataTable = null;
	                this.tableElt = null;
	                this.tableBody = null;
	                this.$scrollableBody = null;
	                this.tableHeader = null;
	            }
	        }
	
	        /*  Selection methods  */
	
	    }, {
	        key: 'clearSelection',
	        value: function clearSelection() {
	            if (this.$dataTable) {
	                this.$dataTable.$('tr.' + SELECTION_CLASS).removeClass(SELECTION_CLASS);
	            }
	        }
	    }, {
	        key: 'selectRows',
	        value: function selectRows(rows) {
	            for (var i = 0, tr; i < rows.length; i++) {
	                tr = rows[i].tr || this.getRow(rows[i]).tr;
	                if (tr) {
	                    _core2.default.utils.addClass(tr, SELECTION_CLASS);
	                    /*const tds = tr.querySelectorAll('td');
	                     for (let i = 0; i < tds.length; i++) {
	                     Gantt.utils.addClass(tds[i], SELECTION_CLASS);
	                     }*/
	                }
	            }
	        }
	    }, {
	        key: 'unselectRows',
	        value: function unselectRows(rows) {
	            for (var i = 0, tr; i < rows.length; i++) {
	                tr = rows[i].tr || this.getRow(rows[i]).tr;
	                if (tr) {
	                    _core2.default.utils.removeClass(tr, SELECTION_CLASS);
	                }
	            }
	        }
	    }]);
	
	    return GanttDataTable;
	}(_core2.default.components.TreeTable);
	
	exports.default = GanttDataTable;
	
	
	_core2.default.components.TreeTable.defaultClass = 'gantt-tree-table display nowrap';
	
	var ColumnRendererPrototype = {
	    createShape: function createShape(activity, parentElt, ctx) {
	        return parentElt;
	    },
	
	    getText: function getText(row) {
	        return row.name;
	    },
	
	    drawContent: function drawContent(elt, icon, text, object, ctx) {
	        // Done through the render method
	        /*if (icon) {
	            const img = document.createElement('img');
	            img.className = 'image-content';
	            img.src = icon;
	            img.alt = '';
	            img.style.float = 'left';
	            elt.appendChild(img);
	        }
	         if (text) {
	            elt.appendChild(document.createTextNode(text));
	        }*/
	    }
	};
	
	_core2.default.components.TreeTable.impl = GanttDataTable;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DATATABLE_FILTER_INSTALLED = false;
	var TREE_NODE_TYPE = 'tree-node';
	
	var TreeTableController = function () {
	    function TreeTableController() {
	        _classCallCheck(this, TreeTableController);
	
	        this.collapsedNodes = {};
	    }
	
	    _createClass(TreeTableController, [{
	        key: 'getHierarchyColumn',
	        value: function getHierarchyColumn(columns) {
	            // Safe enough for now to consider the first column is the one controlling the table hierarchy
	            return columns && columns.length && columns[0] || null;
	        }
	    }, {
	        key: 'customizeOptions',
	        value: function customizeOptions(options, hCol) {
	            var _this = this;
	
	            if (hCol || (hCol = this.getHierarchyColumn(options.columns))) {
	                // Without this column, not hierarchy can be managed, this tree table controller remains inactive
	                if (!hCol.render) {
	                    hCol.render = {};
	                }
	                var oldRender = hCol.render.display;
	                var oldData = hCol.data;
	                var self = this;
	                hCol.render.display = function (node, type, full, meta) {
	                    var content = oldRender && oldRender.call(this, oldData && node[oldData] || node, type, full, meta) || node.name;
	                    var parent = node.parent;
	                    var prefix = '';
	                    while (parent) {
	                        prefix += '<div class="tree-node-spacing"></div>';
	                        parent = parent.parent;
	                    }
	                    prefix += '<div class="tree-node-handle">' + (node.children && node.children.length ? '<i style="width: 16px;" class="fa fa-caret-right fa-lg collapsed"></i><i style="16px;" class="fa fa-caret-down fa-lg expanded"></i>' : '') + '</div>';
	                    if (node.color) {
	                        prefix += '<div class="tree-node-color" style="background-color="' + node.color + '"></div>';
	                    }
	                    return prefix + content;
	                };
	                hCol.render.filter = function (node, type, full, meta) {
	                    return node ? node.name : '';
	                };
	                hCol.className = hCol.className && hCol.className + ' hierarchy-control' || 'hierarchy-control';
	                hCol.type = TREE_NODE_TYPE;
	
	                var oldCreatedRow = options.createdRow;
	                options.createdRow = function (row, node, index) {
	                    var parentRow = node.children && node.children.length;
	                    var classname = parentRow ? _this.collapsedNodes[node.id] && 'parent-row collapsed' || 'parent-row' : 'leaf-row';
	                    if (node.hidden) {
	                        classname = classname + ' hidden';
	                    }
	                    $(row).addClass(classname);
	                    if (oldCreatedRow) {
	                        oldCreatedRow.call(_this, row, node, index);
	                    }
	                };
	            }
	        }
	    }, {
	        key: 'getData',
	        value: function getData(id) {
	            var row = this.$dataTable.row(id);
	            var node = void 0;
	            return row && (node = row.data()) && node.getData() || null;
	        }
	    }, {
	        key: 'reset',
	        value: function reset() {
	            this.collapsedNodes = {};
	        }
	    }, {
	        key: 'getRow',
	        value: function getRow(data) {
	            if (typeof data == 'string') {
	                // object ID
	                return this.$dataTable.row('#' + data);
	            }
	            return data;
	        }
	    }, {
	        key: 'isCollapsedNode',
	        value: function isCollapsedNode(node) {
	            if (typeof node == 'string') {
	                return this.collapsedNodes[node];
	            }
	            var row = this.getRow(node);
	            node = row && row.data();
	            return node && node.children && this.collapsedNodes[node.id];
	        }
	    }, {
	        key: 'collapseNode',
	        value: function collapseNode(node, collapse) {
	            var row = this.getRow(node);
	            node = row && row.data();
	            if (node && node.children && node.children.length) {
	                var visible = !collapse;
	                if (!collapse) {
	                    delete this.collapsedNodes[node.id];
	                    $(row.node()).removeClass('collapsed');
	                } else {
	                    this.collapsedNodes[node.id] = true;
	                    $(row.node()).addClass('collapsed');
	                }
	                var rowsModified = [];
	                for (var i = 0; i < node.children.length; i++) {
	                    this.setRowVisible(node.children[i], visible, rowsModified);
	                }
	                this.rowsVisibilityChanged(!collapse, rowsModified, node.id);
	            }
	        }
	    }, {
	        key: 'rowsVisibilityChanged',
	        value: function rowsVisibilityChanged(visible, rows, rowRef) {}
	    }, {
	        key: 'setRowVisible',
	        value: function setRowVisible(row, visible, rowsModified) {
	            var tr = row.tr || this.$dataTable.row('#' + row.id).node();
	            if (tr) {
	                $(tr).toggleClass('hidden', !visible);
	                if (visible) {
	                    delete row.hidden;
	                } else {
	                    row.hidden = true;
	                }
	                if (rowsModified) {
	                    rowsModified.push(row.id);
	                }
	                if (row.children && !this.collapsedNodes[row.id]) {
	                    for (var i = 0, count = row.children.length; i < count; ++i) {
	                        this.setRowVisible(row.children[i], visible, rowsModified);
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'expandParents',
	        value: function expandParents(row) {
	            row = this.getRow(row); // row is Datatable row
	            var node = row && row.data(); // node is Gantt row.
	            if (node) {
	                var parent = node.parent,
	                    topCollapsed = void 0;
	                while (parent) {
	                    if (this.collapsedNodes[parent.id]) {
	                        // Change the collapse state of all collapsed ancestor except for the top most collapsed ancestor
	                        // which will be processed with the call to collapseNode().
	                        if (topCollapsed) {
	                            delete this.collapsedNodes[topCollapsed.id];
	                        }
	                        topCollapsed = parent;
	                    }
	                    parent = parent.parent;
	                }
	                if (topCollapsed) {
	                    // Expand the top most collapsed ancestor
	                    this.collapseNode(topCollapsed.id, false);
	                }
	            }
	        }
	    }, {
	        key: 'install',
	        value: function install($dataTable, bodyElt) {
	            var _this2 = this;
	
	            this.$dataTable = $dataTable;
	            $(bodyElt).on('click', 'td.hierarchy-control .tree-node-handle', function (e) {
	                var tr = $(e.target).closest('tr');
	                if (tr && tr.length) {
	                    var row = $dataTable.row(tr);
	
	                    _this2.collapseNode(row, !_this2.isCollapsedNode(row));
	                }
	            });
	
	            if (!DATATABLE_FILTER_INSTALLED) {
	                DATATABLE_FILTER_INSTALLED = true;
	                $.fn.dataTable.ext.search.push(function (settings, aData, dataIndex, node) {
	                    var dataTable;
	                    if (dataTable = settings.ganttDataTable) {
	                        // Be sure this global search applies only to GanttDataTables
	                        if (!dataTable.filter.isEmpty()) {
	                            node.__filterMatched = dataTable.filter.accept(node, aData, dataIndex);
	                        }
	                    }
	                    return true;
	                });
	                $.fn.dataTable.ext.search.push(function (settings, data, dataIndex, node) {
	                    if (settings.ganttDataTable) {
	                        // Be sure this global search applies only to GanttDataTables
	                        if (node.hidden) {
	                            return false;
	                        }
	                        if (!settings.ganttDataTable.filter.isEmpty()) {
	                            // If a search is in place, a collapsed or not matching node cam be made visible if at least one child matches the search
	                            var processVisibilityFromChildren = function processVisibilityFromChildren(vNode) {
	                                if (vNode && vNode.children) {
	                                    for (var iChild = 0, count = vNode.children.length, child; iChild < count; iChild++) {
	                                        child = vNode.children[iChild];
	                                        if (child.__filterMatched || processVisibilityFromChildren(child)) {
	                                            vNode.__filterMatched = true;
	                                            return true;
	                                        }
	                                    }
	                                }
	                                return false;
	                            };
	
	                            return node.__filterMatched || processVisibilityFromChildren(node);
	                        }
	                        return true;
	                    }
	                    return true;
	                });
	
	                var makeComparisonFct = function makeComparisonFct(m) {
	                    function comp(a, b, comparator) {
	                        a = a.getSortValue ? a.getSortValue(a) : comparator ? a : a.name;
	                        b = b.getSortValue ? b.getSortValue(b) : comparator ? b : b.name;
	                        return comparator ? comparator(a, b) * m : a < b ? -m : a > b ? m : 0;
	                    }
	                    return function (a, b) {
	                        var comparator = a.comparator; // If comparator specified in user config, we are sure it is provided with a or b. But a.parent or b.parent won't have it has they are not constructed from the sort render callback
	                        if (a.parent === b.parent) {
	                            return comp(a, b, comparator);
	                        }
	                        // Look for common ancestor
	                        var aParent = a.parent,
	                            lastParent = a,
	                            bParent = void 0;
	                        while (aParent) {
	                            // Has b aParent has an ancestor?
	                            bParent = b;
	                            while (bParent) {
	                                if (bParent.parent === aParent) {
	                                    return comp(lastParent, bParent, comparator);
	                                }
	                                bParent = bParent.parent;
	                            }
	                            lastParent = aParent;
	                            aParent = aParent.parent;
	                        }
	                        // Compare top ancestor for both nodes
	                        for (bParent = b; bParent.parent;) {
	                            bParent = bParent.parent;
	                        }
	                        return comp(lastParent, bParent, comparator);
	                    };
	                };
	
	                $.fn.dataTable.ext.type.order[TREE_NODE_TYPE + '-asc'] = makeComparisonFct(1);
	                $.fn.dataTable.ext.type.order[TREE_NODE_TYPE + '-desc'] = makeComparisonFct(-1);
	            }
	        }
	    }]);
	
	    return TreeTableController;
	}();
	
	exports.default = TreeTableController;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(58)))

/***/ }),
/* 69 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_69__;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=gantt-jquery.js.map