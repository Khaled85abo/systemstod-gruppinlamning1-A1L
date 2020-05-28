(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ 2099:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(11));var _styledComponents=_interopRequireDefault(__webpack_require__(3));function _templateObject(){var data=(0,_taggedTemplateLiteral2.default)(["\n  padding: 18px 30px 18px 30px;\n"]);_templateObject=function _templateObject(){return data;};return data;}var Container=_styledComponents.default.div(_templateObject());var _default=Container;exports.default=_default;

/***/ }),

/***/ 2103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _pluginId=_interopRequireDefault(__webpack_require__(119));var getTrad=function getTrad(id){return"".concat(_pluginId.default,".").concat(id);};var _default=getTrad;exports.default=_default;

/***/ }),

/***/ 2107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=__webpack_require__(0);var _ListView=_interopRequireDefault(__webpack_require__(2189));var useListView=function useListView(){return(0,_react.useContext)(_ListView.default);};var _default=useListView;exports.default=_default;

/***/ }),

/***/ 2119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireWildcard=__webpack_require__(12);var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.Truncated=exports.Truncate=exports.Thead=exports.TableRow=exports.TableEmpty=exports.TableDelete=exports.Table=exports.DeleteSpan=exports.DeletAllSpan=exports.Arrow=exports.ActionContainer=void 0;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__(132));var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(11));var _react=_interopRequireDefault(__webpack_require__(0));var _styledComponents=_interopRequireWildcard(__webpack_require__(3));var _icons=__webpack_require__(86);function _templateObject12(){var data=(0,_taggedTemplateLiteral2.default)(["\n  position: absolute;\n  color: #f64d0a;\n  font-weight: 500;\n  cursor: pointer;\n  &:after {\n    position: relative;\n    top: -1px;\n    content: '\f1f8';\n    margin-left: 7px;\n    font-size: 13px;\n    font-family: FontAwesome;\n    -webkit-font-smoothing: antialiased;\n  }\n"],["\n  position: absolute;\n  color: #f64d0a;\n  font-weight: 500;\n  cursor: pointer;\n  &:after {\n    position: relative;\n    top: -1px;\n    content: '\\f1f8';\n    margin-left: 7px;\n    font-size: 13px;\n    font-family: FontAwesome;\n    -webkit-font-smoothing: antialiased;\n  }\n"]);_templateObject12=function _templateObject12(){return data;};return data;}function _templateObject11(){var data=(0,_taggedTemplateLiteral2.default)(["\n  font-weight: 600;\n  -webkit-font-smoothing: antialiased;\n  &:after {\n    content: '\u2014';\n    margin: 0 7px;\n    font-size: 13px;\n    font-weight: 600;\n  }\n"]);_templateObject11=function _templateObject11(){return data;};return data;}function _templateObject10(){var data=(0,_taggedTemplateLiteral2.default)(["\n  text-align: right;\n\n  i,\n  svg {\n    margin-left: 15px;\n    font-size: 1rem;\n    height: 1rem;\n    color: #333740;\n\n    &:first-of-type {\n      margin-left: 0px;\n    }\n  }\n"]);_templateObject10=function _templateObject10(){return data;};return data;}function _templateObject9(){var data=(0,_taggedTemplateLiteral2.default)(["\n  width: 100%;\n  height: 36px;\n  background: #f7f8f8;\n\n  td {\n    height: 36px;\n    line-height: 36px;\n    font-size: 1.3rem;\n    font-weight: 400;\n    color: #333740;\n    text-align: left;\n    border-collapse: collapse;\n    border-top: 1px solid #f1f1f2 !important;\n  }\n"]);_templateObject9=function _templateObject9(){return data;};return data;}function _templateObject8(){var data=(0,_taggedTemplateLiteral2.default)(["\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-bottom: 0;\n"]);_templateObject8=function _templateObject8(){return data;};return data;}function _templateObject7(){var data=(0,_taggedTemplateLiteral2.default)([""]);_templateObject7=function _templateObject7(){return data;};return data;}function _templateObject6(){var data=(0,_taggedTemplateLiteral2.default)(["\n  margin-left: 5px;\n  ","\n"]);_templateObject6=function _templateObject6(){return data;};return data;}function _templateObject5(){var data=(0,_taggedTemplateLiteral2.default)(["\n  height: 54px;\n  background: #ffffff;\n\n  &:hover {\n    cursor: pointer;\n    background: #f7f8f8;\n  }\n\n  td {\n    height: 53px;\n    font-size: 1.3rem;\n    line-height: 1.8rem;\n    font-weight: 400;\n    color: #333740;\n    vertical-align: middle;\n    border-collapse: collapse;\n    border-top: 1px solid #f1f1f2 !important;\n  }\n"]);_templateObject5=function _templateObject5(){return data;};return data;}function _templateObject4(){var data=(0,_taggedTemplateLiteral2.default)(["\n  width: 100%;\n  height: 108px;\n  background: #ffffff;\n\n  td {\n    height: 106px;\n    line-height: 90px;\n    font-size: 1.3rem;\n    font-weight: 400;\n    color: #333740;\n    text-align: center;\n    border-collapse: collapse;\n    border-top: 1px solid #f1f1f2 !important;\n  }\n"]);_templateObject4=function _templateObject4(){return data;};return data;}function _templateObject3(){var data=(0,_taggedTemplateLiteral2.default)(["\n        > tr {\n          th:first-child {\n            width: 50px;\n          }\n        }\n      "]);_templateObject3=function _templateObject3(){return data;};return data;}function _templateObject2(){var data=(0,_taggedTemplateLiteral2.default)(["\n  background: #f3f3f3;\n  height: 43px;\n  overflow: hidden;\n\n  th {\n    height: 43px;\n    border: none !important;\n    font-size: 1.3rem;\n    vertical-align: middle !important;\n    > span {\n      position: relative;\n      &.sortable {\n        cursor: pointer;\n      }\n    }\n  }\n  ","\n"]);_templateObject2=function _templateObject2(){return data;};return data;}function _templateObject(){var data=(0,_taggedTemplateLiteral2.default)(["\n  border-radius: 3px;\n  border-collapse: initial;\n  box-shadow: 0 2px 4px #e3e9f3;\n  table-layout: fixed;\n  margin-bottom: 0;\n\n  tr,\n  th,\n  td {\n    border: none;\n    padding: 0;\n  }\n\n  th,\n  td {\n    padding: 0 25px;\n\n    label {\n      display: inline;\n    }\n  }\n"]);_templateObject=function _templateObject(){return data;};return data;}var Table=_styledComponents.default.table(_templateObject());exports.Table=Table;var Thead=_styledComponents.default.thead(_templateObject2(),function(_ref){var isBulkable=_ref.isBulkable;if(isBulkable){return(0,_styledComponents.css)(_templateObject3());}});exports.Thead=Thead;var TableEmpty=_styledComponents.default.tr(_templateObject4());exports.TableEmpty=TableEmpty;var TableRow=_styledComponents.default.tr(_templateObject5());exports.TableRow=TableRow;var Arrow=(0,_styledComponents.default)(function(_ref2){var isUp=_ref2.isUp,rest=(0,_objectWithoutProperties2.default)(_ref2,["isUp"]);return/*#__PURE__*/_react.default.createElement(_icons.Carret,rest);})(_templateObject6(),function(_ref3){var isUp=_ref3.isUp;return isUp&&"\n    transform: rotateZ(180deg);\n\n  ";});exports.Arrow=Arrow;var Truncate=_styledComponents.default.div(_templateObject7());exports.Truncate=Truncate;var Truncated=_styledComponents.default.p(_templateObject8());exports.Truncated=Truncated;var TableDelete=_styledComponents.default.tr(_templateObject9());exports.TableDelete=TableDelete;var ActionContainer=_styledComponents.default.td(_templateObject10());exports.ActionContainer=ActionContainer;var DeleteSpan=_styledComponents.default.span(_templateObject11());exports.DeleteSpan=DeleteSpan;var DeletAllSpan=_styledComponents.default.span(_templateObject12());exports.DeletAllSpan=DeletAllSpan;

/***/ }),

/***/ 2188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(11));var _reactstrap=__webpack_require__(62);var _styledComponents=_interopRequireDefault(__webpack_require__(3));function _templateObject(){var data=(0,_taggedTemplateLiteral2.default)(["\n  padding: 0;\n  &:active,\n  :focus {\n    background-color: #f7f7f9 !important;\n    color: #333740;\n    font-weight: 500;\n    outline: 0;\n  }\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  label {\n    width: 100%;\n    outline: none;\n    &:before {\n      top: 12px;\n    }\n  }\n  .form-check {\n    height: 36px;\n    line-height: 36px;\n  }\n"]);_templateObject=function _templateObject(){return data;};return data;}var ItemDropdown=(0,_styledComponents.default)(_reactstrap.DropdownItem)(_templateObject());var _default=ItemDropdown;exports.default=_default;

/***/ }),

/***/ 2189:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=__webpack_require__(0);var ListViewContext=(0,_react.createContext)();var _default=ListViewContext;exports.default=_default;

/***/ }),

/***/ 2190:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);var _interopRequireWildcard=__webpack_require__(12);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(0));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _components=__webpack_require__(2440);/**
 *
 * CustomInputCheckbox
 */function CustomInputCheckbox(_ref){var entriesToDelete=_ref.entriesToDelete,isAll=_ref.isAll,name=_ref.name,onChange=_ref.onChange,value=_ref.value;var shouldDisplaySomeChecked=isAll&&entriesToDelete.length>0&&!value;var shouldDisplayAllChecked=isAll&&value;return/*#__PURE__*/_react.default.createElement("span",{className:"form-check",styles:{marginLeft:'-15px'}},/*#__PURE__*/_react.default.createElement(_components.Label,{className:"form-check-label",isAll:isAll,shouldDisplaySomeChecked:shouldDisplaySomeChecked,shouldDisplayAllChecked:shouldDisplayAllChecked,isChecked:value&&!isAll,htmlFor:name},/*#__PURE__*/_react.default.createElement("input",{className:"form-check-input",checked:value,id:name,name:name,onChange:onChange,type:"checkbox"})));}CustomInputCheckbox.defaultProps={entriesToDelete:[],isAll:false,name:'',value:false};CustomInputCheckbox.propTypes={entriesToDelete:_propTypes.default.array,isAll:_propTypes.default.bool,name:_propTypes.default.oneOfType([_propTypes.default.number,_propTypes.default.string]),onChange:_propTypes.default.func.isRequired,value:_propTypes.default.bool};var _default=(0,_react.memo)(CustomInputCheckbox);exports.default=_default;

/***/ }),

/***/ 2191:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _defineProperty2=_interopRequireDefault(__webpack_require__(16));var _strapiHelperPlugin=__webpack_require__(6);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2.default)(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var dateFormats=_objectSpread({},_strapiHelperPlugin.dateFormats);var _default=dateFormats;exports.default=_default;

/***/ }),

/***/ 2192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.Input=exports.InputWrapperDate=exports.Wrapper=exports.InputWrapper=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(11));var _styledComponents=_interopRequireDefault(__webpack_require__(3));function _templateObject4(){var data=(0,_taggedTemplateLiteral2.default)(["\n  height: 3.4rem;\n  margin-top: 0.9rem;\n  padding-left: 1rem;\n  background-size: 0 !important;\n  border: 1px solid #e3e9f3;\n  border-radius: 0.25rem;\n  line-height: 3.4rem;\n  font-size: 1.3rem;\n  font-family: 'Lato' !important;\n  box-shadow: 0px 1px 1px rgba(104, 118, 142, 0.05);\n"]);_templateObject4=function _templateObject4(){return data;};return data;}function _templateObject3(){var data=(0,_taggedTemplateLiteral2.default)(["\n  margin-right: 10px;\n  span {\n    left: 5px;\n  }\n  .rc-input-number-handler-wrap {\n    right: -5px !important;\n  }\n  .rc-input-number-input-wrap {\n    max-width: 210px;\n    overflow: visible;\n  }\n  > div {\n    width: 210px;\n  }\n\n  ","\n"]);_templateObject3=function _templateObject3(){return data;};return data;}function _templateObject2(){var data=(0,_taggedTemplateLiteral2.default)(["\n  display: flex;\n  input,\n  select {\n    margin: 0px 5px !important;\n  }\n"]);_templateObject2=function _templateObject2(){return data;};return data;}function _templateObject(){var data=(0,_taggedTemplateLiteral2.default)(["\n  min-height: 38px;\n  border-left: ",";\n  padding-left: ",";\n  margin-bottom: 0px !important;\n"]);_templateObject=function _templateObject(){return data;};return data;}/* eslint-disable */var Wrapper=_styledComponents.default.div(_templateObject(),function(props){return props.borderLeft&&'3px solid #007EFF';},function(props){return props.borderLeft?'10px':'13px';});exports.Wrapper=Wrapper;var InputWrapper=_styledComponents.default.div(_templateObject2());exports.InputWrapper=InputWrapper;var InputWrapperDate=_styledComponents.default.div(_templateObject3(),function(_ref){var type=_ref.type;if(type==='datetime'){return"\n      > div {\n        width: 300px;\n      }\n\n      ";}});exports.InputWrapperDate=InputWrapperDate;var Input=_styledComponents.default.input(_templateObject4());exports.Input=Input;

/***/ }),

/***/ 2193:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.Wrapper=exports.Remove=exports.Separator=exports.FilterWrapper=exports.SelectWrapper=exports.Label=exports.Img=exports.FooterWrapper=exports.FilterIcon=exports.AddFilterCta=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(11));var _styledComponents=_interopRequireDefault(__webpack_require__(3));var _strapiHelperPlugin=__webpack_require__(6);var _iconCrossBlue=_interopRequireDefault(__webpack_require__(2455));function _templateObject10(){var data=(0,_taggedTemplateLiteral2.default)(["\n  height: 28px;\n  cursor: pointer;\n  vertical-align: middle;\n\n  &:after {\n    display: inline-block;\n    content: '';\n    width: 8px;\n    height: 8px;\n    margin: auto;\n    margin-top: -3px;\n    background-image: url(",");\n  }\n"]);_templateObject10=function _templateObject10(){return data;};return data;}function _templateObject9(){var data=(0,_taggedTemplateLiteral2.default)(["\n  height: 30px;\n  margin-left: 10px;\n  margin-right: 10px;\n  line-height: 30px;\n  &:after {\n    content: '';\n    height: 15px;\n    border-left: 1px solid #007eff;\n    opacity: 0.1;\n  }\n"]);_templateObject9=function _templateObject9(){return data;};return data;}function _templateObject8(){var data=(0,_taggedTemplateLiteral2.default)(["\n  display: inline-block;\n  height: 30px;\n  margin-bottom: 6px;\n  margin-right: 10px;\n  padding: 0 10px;\n  background: rgba(0, 126, 255, 0.08);\n  border: 1px solid rgba(0, 126, 255, 0.24);\n  border-radius: 2px;\n  line-height: 28px;\n  color: #007eff;\n  font-size: 13px;\n\n  > span {\n    display: inline-block;\n    margin-top: -1px;\n  }\n\n  > span:nth-child(2) {\n    font-weight: 700;\n  }\n\n  > span:nth-child(3) {\n    cursor: pointer;\n  }\n\n  -webkit-font-smoothing: antialiased;\n  font-size: 13px;\n"]);_templateObject8=function _templateObject8(){return data;};return data;}function _templateObject7(){var data=(0,_taggedTemplateLiteral2.default)(["\n  display: flex;\n"]);_templateObject7=function _templateObject7(){return data;};return data;}function _templateObject6(){var data=(0,_taggedTemplateLiteral2.default)(["\n  display: inline-block;\n  height: 32px;\n  margin-left: 10px;\n  line-height: 32px;\n  color: #787e8f;\n  font-size: 13px;\n  font-style: italic;\n"]);_templateObject6=function _templateObject6(){return data;};return data;}function _templateObject5(){var data=(0,_taggedTemplateLiteral2.default)(["\n  padding-top: 3rem;\n"]);_templateObject5=function _templateObject5(){return data;};return data;}function _templateObject4(){var data=(0,_taggedTemplateLiteral2.default)(["\n  height: 7px;\n  margin: auto;\n  margin-right: 0px;\n  font-size: 12px;\n"]);_templateObject4=function _templateObject4(){return data;};return data;}function _templateObject3(){var data=(0,_taggedTemplateLiteral2.default)(["\n  display: flex;\n  height: 30px;\n  margin-right: 10px;\n  padding: 0 10px;\n  text-align: center;\n  background-color: #FFFFFF;\n  border: 1px solid #E3E9F3;\n  border-radius: 2px;\n  line-height: 28px;\n  font-size: 13px;\n  font-weight: 500;\n  font-family: Lato;\n  -webkit-font-smoothing-antialiased;\n  cursor: pointer;\n  &:hover {\n    background: #F7F8F8;\n  }\n  &:focus, &:active {\n    outline:0;\n  }\n  > span {\n    margin-left: 10px;\n  }\n"]);_templateObject3=function _templateObject3(){return data;};return data;}function _templateObject2(){var data=(0,_taggedTemplateLiteral2.default)(["\n  padding: 0 !important;\n  margin: auto !important;\n  > g {\n    stroke: #282b2c;\n  }\n"]);_templateObject2=function _templateObject2(){return data;};return data;}function _templateObject(){var data=(0,_taggedTemplateLiteral2.default)(["\n  padding-top: 1px;\n"]);_templateObject=function _templateObject(){return data;};return data;}var Wrapper=_styledComponents.default.div(_templateObject());exports.Wrapper=Wrapper;var FilterIcon=(0,_styledComponents.default)(_strapiHelperPlugin.FilterIcon)(_templateObject2());exports.FilterIcon=FilterIcon;var AddFilterCta=(0,_styledComponents.default)(_strapiHelperPlugin.Button)(_templateObject3());exports.AddFilterCta=AddFilterCta;var Img=_styledComponents.default.img(_templateObject4());exports.Img=Img;var FooterWrapper=_styledComponents.default.div(_templateObject5());exports.FooterWrapper=FooterWrapper;var Label=_styledComponents.default.label(_templateObject6());exports.Label=Label;var SelectWrapper=_styledComponents.default.div(_templateObject7());exports.SelectWrapper=SelectWrapper;var FilterWrapper=_styledComponents.default.div(_templateObject8());exports.FilterWrapper=FilterWrapper;var Separator=_styledComponents.default.span(_templateObject9());exports.Separator=Separator;var Remove=_styledComponents.default.span(_templateObject10(),_iconCrossBlue.default);exports.Remove=Remove;

/***/ }),

/***/ 2194:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.TOGGLE_MODAL_DELETE=exports.TOGGLE_MODAL_DELETE_ALL=exports.RESET_PROPS=exports.ON_DELETE_SEVERAL_DATA_SUCCEEDED=exports.ON_DELETE_DATA_SUCCEEDED=exports.ON_CHANGE_BULK_SELECT_ALL=exports.ON_CHANGE_BULK=exports.GET_DATA_SUCCEEDED=void 0;var GET_DATA_SUCCEEDED='ContentManager/ListView/GET_DATA_SUCCEEDED';exports.GET_DATA_SUCCEEDED=GET_DATA_SUCCEEDED;var ON_CHANGE_BULK='ContentManager/ListView/ON_CHANGE_BULK';exports.ON_CHANGE_BULK=ON_CHANGE_BULK;var ON_CHANGE_BULK_SELECT_ALL='ContentManager/ListView/ON_CHANGE_BULK_SELECT_ALL';exports.ON_CHANGE_BULK_SELECT_ALL=ON_CHANGE_BULK_SELECT_ALL;var ON_DELETE_DATA_SUCCEEDED='ContentManager/ListView/ON_DELETE_DATA_SUCCEEDED';exports.ON_DELETE_DATA_SUCCEEDED=ON_DELETE_DATA_SUCCEEDED;var ON_DELETE_SEVERAL_DATA_SUCCEEDED='ContentManager/ListView/ON_DELETE_SEVERAL_DATA_SUCCEEDED';exports.ON_DELETE_SEVERAL_DATA_SUCCEEDED=ON_DELETE_SEVERAL_DATA_SUCCEEDED;var RESET_PROPS='ContentManager/ListView/RESET_PROPS';exports.RESET_PROPS=RESET_PROPS;var TOGGLE_MODAL_DELETE_ALL='ContentManager/ListView/TOGGLE_MODAL_DELETE_ALL';exports.TOGGLE_MODAL_DELETE_ALL=TOGGLE_MODAL_DELETE_ALL;var TOGGLE_MODAL_DELETE='ContentManager/ListView/TOGGLE_MODAL_DELETE';exports.TOGGLE_MODAL_DELETE=TOGGLE_MODAL_DELETE;

/***/ }),

/***/ 2195:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=exports.initialState=void 0;var _immutable=__webpack_require__(37);var _lodash=__webpack_require__(7);var _constants=__webpack_require__(2194);/**
 *
 * listView reducer
 */var initialState=(0,_immutable.fromJS)({count:0,data:(0,_immutable.List)([]),entriesToDelete:(0,_immutable.List)([]),isLoading:true,shouldRefetchData:false,showWarningDelete:false,showWarningDeleteAll:false});exports.initialState=initialState;function listViewReducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments.length>1?arguments[1]:undefined;switch(action.type){case _constants.GET_DATA_SUCCEEDED:return state.update('count',function(){return action.count;}).update('data',function(){return(0,_immutable.List)(action.data);}).update('isLoading',function(){return false;});case _constants.ON_CHANGE_BULK:return state.update('entriesToDelete',function(list){var hasElement=list.some(function(el){return el===action.name;});if(hasElement){return list.filter(function(el){return el!==action.name;});}return list.push(action.name);});case _constants.ON_CHANGE_BULK_SELECT_ALL:return state.update('entriesToDelete',function(list){if(list.size!==0){return(0,_immutable.List)([]);}return state.get('data').map(function(value){return(0,_lodash.toString)(value.id);});});case _constants.ON_DELETE_DATA_SUCCEEDED:return state.update('shouldRefetchData',function(v){return!v;}).update('showWarningDelete',function(){return false;});case _constants.ON_DELETE_SEVERAL_DATA_SUCCEEDED:return state.update('shouldRefetchData',function(v){return!v;}).update('showWarningDeleteAll',function(){return false;});case _constants.RESET_PROPS:return initialState;case _constants.TOGGLE_MODAL_DELETE:return state.update('entriesToDelete',function(){return(0,_immutable.List)([]);}).update('showWarningDelete',function(v){return!v;});case _constants.TOGGLE_MODAL_DELETE_ALL:return state.update('showWarningDeleteAll',function(v){return!v;});default:return state;}}var _default=listViewReducer;exports.default=_default;

/***/ }),

/***/ 2428:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireWildcard=__webpack_require__(12);var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.mapDispatchToProps=mapDispatchToProps;exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__(13));var _toConsumableArray2=_interopRequireDefault(__webpack_require__(58));var _defineProperty2=_interopRequireDefault(__webpack_require__(16));var _regenerator=_interopRequireDefault(__webpack_require__(85));var _asyncToGenerator2=_interopRequireDefault(__webpack_require__(108));var _slicedToArray2=_interopRequireDefault(__webpack_require__(57));var _react=_interopRequireWildcard(__webpack_require__(0));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _reactRedux=__webpack_require__(78);var _redux=__webpack_require__(83);var _lodash=__webpack_require__(7);var _reactIntl=__webpack_require__(15);var _custom=__webpack_require__(63);var _strapiHelperPlugin=__webpack_require__(6);var _pluginId=_interopRequireDefault(__webpack_require__(119));var _DisplayedFieldsDropdown=_interopRequireDefault(__webpack_require__(2429));var _Container=_interopRequireDefault(__webpack_require__(2099));var _CustomTable=_interopRequireDefault(__webpack_require__(2438));var _FilterPicker=_interopRequireDefault(__webpack_require__(2446));var _Search=_interopRequireDefault(__webpack_require__(2453));var _ListViewProvider=_interopRequireDefault(__webpack_require__(2454));var _actions=__webpack_require__(715);var _components=__webpack_require__(2193);var _Filter=_interopRequireDefault(__webpack_require__(2456));var _Footer=_interopRequireDefault(__webpack_require__(2457));var _actions2=__webpack_require__(2458);var _reducer=_interopRequireDefault(__webpack_require__(2195));var _selectors=_interopRequireDefault(__webpack_require__(2459));var _getRequestUrl=_interopRequireDefault(__webpack_require__(707));function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2.default)(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}/* eslint-disable react/no-array-index-key */function ListView(_ref){var count=_ref.count,data=_ref.data,emitEvent=_ref.emitEvent,entriesToDelete=_ref.entriesToDelete,_ref$location=_ref.location,pathname=_ref$location.pathname,search=_ref$location.search,getDataSucceeded=_ref.getDataSucceeded,layouts=_ref.layouts,push=_ref.history.push,onChangeBulk=_ref.onChangeBulk,onChangeBulkSelectall=_ref.onChangeBulkSelectall,onChangeListLabels=_ref.onChangeListLabels,onDeleteDataSucceeded=_ref.onDeleteDataSucceeded,onDeleteSeveralDataSucceeded=_ref.onDeleteSeveralDataSucceeded,resetListLabels=_ref.resetListLabels,resetProps=_ref.resetProps,shouldRefetchData=_ref.shouldRefetchData,showWarningDelete=_ref.showWarningDelete,slug=_ref.slug,toggleModalDelete=_ref.toggleModalDelete,showWarningDeleteAll=_ref.showWarningDeleteAll,toggleModalDeleteAll=_ref.toggleModalDeleteAll;strapi.useInjectReducer({key:'listView',reducer:_reducer.default,pluginId:_pluginId.default});var _useGlobalContext=(0,_strapiHelperPlugin.useGlobalContext)(),formatMessage=_useGlobalContext.formatMessage;var getLayoutSettingRef=(0,_react.useRef)();var getDataRef=(0,_react.useRef)();var _useState=(0,_react.useState)(false),_useState2=(0,_slicedToArray2.default)(_useState,2),isLabelPickerOpen=_useState2[0],setLabelPickerState=_useState2[1];var _useState3=(0,_react.useState)(false),_useState4=(0,_slicedToArray2.default)(_useState3,2),isFilterPickerOpen=_useState4[0],setFilterPickerState=_useState4[1];var _useState5=(0,_react.useState)(null),_useState6=(0,_slicedToArray2.default)(_useState5,2),idToDelete=_useState6[0],setIdToDelete=_useState6[1];var contentTypePath=[slug,'contentType'];getDataRef.current=/*#__PURE__*/function(){var _ref2=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee(uid,params){var generatedSearch,_yield$Promise$all,_yield$Promise$all2,_count,_data;return _regenerator.default.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;generatedSearch=(0,_strapiHelperPlugin.generateSearchFromObject)(params);_context.next=4;return Promise.all([(0,_strapiHelperPlugin.request)((0,_getRequestUrl.default)("explorer/".concat(uid,"/count?").concat(generatedSearch)),{method:'GET'}),(0,_strapiHelperPlugin.request)((0,_getRequestUrl.default)("explorer/".concat(uid,"?").concat(generatedSearch)),{method:'GET'})]);case 4:_yield$Promise$all=_context.sent;_yield$Promise$all2=(0,_slicedToArray2.default)(_yield$Promise$all,2);_count=_yield$Promise$all2[0].count;_data=_yield$Promise$all2[1];getDataSucceeded(_count,_data);_context.next=14;break;case 11:_context.prev=11;_context.t0=_context["catch"](0);strapi.notification.error("".concat(_pluginId.default,".error.model.fetch"));case 14:case"end":return _context.stop();}}},_callee,null,[[0,11]]);}));return function(_x,_x2){return _ref2.apply(this,arguments);};}();getLayoutSettingRef.current=function(settingName){return(0,_lodash.get)(layouts,[].concat(contentTypePath,['settings',settingName]),'');};var getSearchParams=(0,_react.useCallback)(function(){var updatedParams=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};return _objectSpread({_limit:(0,_strapiHelperPlugin.getQueryParameters)(search,'_limit')||getLayoutSettingRef.current('pageSize'),_page:(0,_strapiHelperPlugin.getQueryParameters)(search,'_page')||1,_q:(0,_strapiHelperPlugin.getQueryParameters)(search,'_q')||'',_sort:(0,_strapiHelperPlugin.getQueryParameters)(search,'_sort')||"".concat(getLayoutSettingRef.current('defaultSortBy'),":").concat(getLayoutSettingRef.current('defaultSortOrder')),filters:(0,_strapiHelperPlugin.generateFiltersFromSearch)(search)},updatedParams);},[getLayoutSettingRef,search]);var handleConfirmDeleteData=(0,_react.useCallback)(/*#__PURE__*/(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee2(){return _regenerator.default.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.prev=0;emitEvent('willDeleteEntry');_context2.next=4;return(0,_strapiHelperPlugin.request)((0,_getRequestUrl.default)("explorer/".concat(slug,"/").concat(idToDelete)),{method:'DELETE'});case 4:strapi.notification.success("".concat(_pluginId.default,".success.record.delete"));// Close the modal and refetch data
onDeleteDataSucceeded();emitEvent('didDeleteEntry');_context2.next=12;break;case 9:_context2.prev=9;_context2.t0=_context2["catch"](0);strapi.notification.error("".concat(_pluginId.default,".error.record.delete"));case 12:case"end":return _context2.stop();}}},_callee2,null,[[0,9]]);})),[emitEvent,idToDelete,onDeleteDataSucceeded,slug]);var handleConfirmDeleteAllData=(0,_react.useCallback)(/*#__PURE__*/(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee3(){var params;return _regenerator.default.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:params=Object.assign(entriesToDelete);_context3.prev=1;_context3.next=4;return(0,_strapiHelperPlugin.request)((0,_getRequestUrl.default)("explorer/deleteAll/".concat(slug)),{method:'DELETE',params:params});case 4:onDeleteSeveralDataSucceeded();_context3.next=10;break;case 7:_context3.prev=7;_context3.t0=_context3["catch"](1);strapi.notification.error("".concat(_pluginId.default,".error.record.delete"));case 10:case"end":return _context3.stop();}}},_callee3,null,[[1,7]]);})),[entriesToDelete,onDeleteSeveralDataSucceeded,slug]);(0,_react.useEffect)(function(){getDataRef.current(slug,getSearchParams());return function(){resetProps();setFilterPickerState(false);};// eslint-disable-next-line react-hooks/exhaustive-deps
},[slug,shouldRefetchData]);var toggleLabelPickerState=function toggleLabelPickerState(){if(!isLabelPickerOpen){emitEvent('willChangeListFieldsSettings');}setLabelPickerState(function(prevState){return!prevState;});};var toggleFilterPickerState=function toggleFilterPickerState(){if(!isFilterPickerOpen){emitEvent('willFilterEntries');}setFilterPickerState(function(prevState){return!prevState;});};// Helpers
var getMetaDatas=function getMetaDatas(){var path=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];return(0,_lodash.get)(layouts,[].concat(contentTypePath,['metadatas'],(0,_toConsumableArray2.default)(path)),{});};var getListLayout=function getListLayout(){return(0,_lodash.get)(layouts,[].concat(contentTypePath,['layouts','list']),[]);};var getListSchema=function getListSchema(){return(0,_lodash.get)(layouts,[].concat(contentTypePath,['schema']),{});};var getName=function getName(){return(0,_lodash.get)(getListSchema(),['info','name'],'');};var getAllLabels=function getAllLabels(){return(0,_lodash.sortBy)(Object.keys(getMetaDatas()).filter(function(key){return!['json','component','dynamiczone','relation','richtext'].includes((0,_lodash.get)(getListSchema(),['attributes',key,'type'],''));}).map(function(label){return{name:label,value:getListLayout().includes(label)};}),['label','name']);};var getFirstSortableElement=function getFirstSortableElement(){var name=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'';return(0,_lodash.get)(getListLayout().filter(function(h){return h!==name&&getMetaDatas([h,'list','sortable'])===true;}),['0'],'id');};var getTableHeaders=function getTableHeaders(){return getListLayout().map(function(label){return _objectSpread(_objectSpread({},getMetaDatas([label,'list'])),{},{name:label});});};var handleChangeListLabels=function handleChangeListLabels(_ref5){var name=_ref5.name,value=_ref5.value;var currentSort=getSearchParams()._sort;if(value&&getListLayout().length===1){strapi.notification.error('content-manager.notification.error.displayedFields');return;}if(currentSort.split(':')[0]===name&&value){emitEvent('didChangeDisplayedFields');handleChangeParams({target:{name:'_sort',value:"".concat(getFirstSortableElement(name),":ASC")}});}onChangeListLabels({target:{name:name,slug:slug,value:!value}});};var handleChangeParams=function handleChangeParams(_ref6){var _ref6$target=_ref6.target,name=_ref6$target.name,value=_ref6$target.value;var updatedSearch=getSearchParams((0,_defineProperty2.default)({},name,value));var newSearch=(0,_strapiHelperPlugin.generateSearchFromFilters)(updatedSearch);if(name==='_limit'){emitEvent('willChangeNumberOfEntriesPerPage');}push({search:newSearch});resetProps();getDataRef.current(slug,updatedSearch);};var handleClickDelete=function handleClickDelete(id){setIdToDelete(id);toggleModalDelete();};var handleSubmit=function handleSubmit(){var filters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];emitEvent('didFilterEntries');toggleFilterPickerState();handleChangeParams({target:{name:'filters',value:filters}});};var filterPickerActions=[{label:"".concat(_pluginId.default,".components.FiltersPickWrapper.PluginHeader.actions.clearAll"),kind:'secondary',onClick:function onClick(){toggleFilterPickerState();handleChangeParams({target:{name:'filters',value:[]}});}},{label:"".concat(_pluginId.default,".components.FiltersPickWrapper.PluginHeader.actions.apply"),kind:'primary',type:'submit'}];var headerAction=[{label:formatMessage({id:'content-manager.containers.List.addAnEntry'},{entity:getName()||'Content Manager'}),onClick:function onClick(){emitEvent('willCreateEntry');push({pathname:"".concat(pathname,"/create"),search:"redirectUrl=".concat(pathname).concat(search)});},color:'primary',type:'button',icon:true,style:{paddingLeft:15,paddingRight:15,fontWeight:600}}];var headerProps={title:{label:getName()||'Content Manager'},content:formatMessage({id:count>1?"".concat(_pluginId.default,".containers.List.pluginHeaderDescription"):"".concat(_pluginId.default,".containers.List.pluginHeaderDescription.singular")},{label:count}),actions:headerAction};return/*#__PURE__*/_react.default.createElement(_react.default.Fragment,null,/*#__PURE__*/_react.default.createElement(_ListViewProvider.default,{data:data,count:count,entriesToDelete:entriesToDelete,emitEvent:emitEvent,firstSortableElement:getFirstSortableElement(),label:getName(),onChangeBulk:onChangeBulk,onChangeBulkSelectall:onChangeBulkSelectall,onChangeParams:handleChangeParams,onClickDelete:handleClickDelete,schema:getListSchema(),searchParams:getSearchParams(),slug:slug,toggleModalDeleteAll:toggleModalDeleteAll},/*#__PURE__*/_react.default.createElement(_FilterPicker.default,{actions:filterPickerActions,isOpen:isFilterPickerOpen,name:getName(),toggleFilterPickerState:toggleFilterPickerState,onSubmit:handleSubmit}),/*#__PURE__*/_react.default.createElement(_Container.default,{className:"container-fluid"},!isFilterPickerOpen&&/*#__PURE__*/_react.default.createElement(_custom.Header,headerProps),getLayoutSettingRef.current('searchable')&&/*#__PURE__*/_react.default.createElement(_Search.default,{changeParams:handleChangeParams,initValue:(0,_strapiHelperPlugin.getQueryParameters)(search,'_q')||'',model:getName(),value:(0,_strapiHelperPlugin.getQueryParameters)(search,'_q')||''}),/*#__PURE__*/_react.default.createElement(_components.Wrapper,null,/*#__PURE__*/_react.default.createElement("div",{className:"row",style:{marginBottom:'5px'}},/*#__PURE__*/_react.default.createElement("div",{className:"col-10"},/*#__PURE__*/_react.default.createElement("div",{className:"row",style:{marginLeft:0,marginRight:0}},getLayoutSettingRef.current('filterable')&&/*#__PURE__*/_react.default.createElement(_react.default.Fragment,null,/*#__PURE__*/_react.default.createElement(_components.AddFilterCta,{type:"button",onClick:toggleFilterPickerState},/*#__PURE__*/_react.default.createElement(_components.FilterIcon,null),/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:"app.utils.filters"})),getSearchParams().filters.map(function(filter,key){return/*#__PURE__*/_react.default.createElement(_Filter.default,(0,_extends2.default)({},filter,{changeParams:handleChangeParams,filters:getSearchParams().filters,index:key,schema:getListSchema(),key:key,toggleFilterPickerState:toggleFilterPickerState,isFilterPickerOpen:isFilterPickerOpen}));})))),/*#__PURE__*/_react.default.createElement("div",{className:"col-2"},/*#__PURE__*/_react.default.createElement(_DisplayedFieldsDropdown.default,{isOpen:isLabelPickerOpen,items:getAllLabels(),onChange:handleChangeListLabels,onClickReset:function onClickReset(){resetListLabels(slug);},slug:slug,toggle:toggleLabelPickerState}))),/*#__PURE__*/_react.default.createElement("div",{className:"row",style:{paddingTop:'12px'}},/*#__PURE__*/_react.default.createElement("div",{className:"col-12"},/*#__PURE__*/_react.default.createElement(_CustomTable.default,{data:data,headers:getTableHeaders(),isBulkable:getLayoutSettingRef.current('bulkable'),onChangeParams:handleChangeParams}),/*#__PURE__*/_react.default.createElement(_Footer.default,null))))),/*#__PURE__*/_react.default.createElement(_strapiHelperPlugin.PopUpWarning,{isOpen:showWarningDelete,toggleModal:toggleModalDelete,content:{title:"".concat(_pluginId.default,".popUpWarning.title"),message:"".concat(_pluginId.default,".popUpWarning.bodyMessage.contentType.delete"),cancel:"".concat(_pluginId.default,".popUpWarning.button.cancel"),confirm:"".concat(_pluginId.default,".popUpWarning.button.confirm")},onConfirm:handleConfirmDeleteData,popUpWarningType:"danger"}),/*#__PURE__*/_react.default.createElement(_strapiHelperPlugin.PopUpWarning,{isOpen:showWarningDeleteAll,toggleModal:toggleModalDeleteAll,content:{title:"".concat(_pluginId.default,".popUpWarning.title"),message:"".concat(_pluginId.default,".popUpWarning.bodyMessage.contentType.delete").concat(entriesToDelete.length>1?'.all':''),cancel:"".concat(_pluginId.default,".popUpWarning.button.cancel"),confirm:"".concat(_pluginId.default,".popUpWarning.button.confirm")},popUpWarningType:"danger",onConfirm:handleConfirmDeleteAllData})));}ListView.defaultProps={layouts:{}};ListView.propTypes={count:_propTypes.default.number.isRequired,data:_propTypes.default.array.isRequired,emitEvent:_propTypes.default.func.isRequired,entriesToDelete:_propTypes.default.array.isRequired,layouts:_propTypes.default.object,location:_propTypes.default.shape({pathname:_propTypes.default.string.isRequired,search:_propTypes.default.string.isRequired}).isRequired,models:_propTypes.default.array.isRequired,getDataSucceeded:_propTypes.default.func.isRequired,history:_propTypes.default.shape({push:_propTypes.default.func.isRequired}).isRequired,onChangeBulk:_propTypes.default.func.isRequired,onChangeBulkSelectall:_propTypes.default.func.isRequired,onChangeListLabels:_propTypes.default.func.isRequired,onDeleteDataSucceeded:_propTypes.default.func.isRequired,onDeleteSeveralDataSucceeded:_propTypes.default.func.isRequired,resetListLabels:_propTypes.default.func.isRequired,resetProps:_propTypes.default.func.isRequired,shouldRefetchData:_propTypes.default.bool.isRequired,showWarningDelete:_propTypes.default.bool.isRequired,showWarningDeleteAll:_propTypes.default.bool.isRequired,slug:_propTypes.default.string.isRequired,toggleModalDelete:_propTypes.default.func.isRequired,toggleModalDeleteAll:_propTypes.default.func.isRequired};var mapStateToProps=(0,_selectors.default)();function mapDispatchToProps(dispatch){return(0,_redux.bindActionCreators)({getDataSucceeded:_actions2.getDataSucceeded,onChangeBulk:_actions2.onChangeBulk,onChangeBulkSelectall:_actions2.onChangeBulkSelectall,onChangeListLabels:_actions.onChangeListLabels,onDeleteDataSucceeded:_actions2.onDeleteDataSucceeded,onDeleteSeveralDataSucceeded:_actions2.onDeleteSeveralDataSucceeded,resetListLabels:_actions.resetListLabels,resetProps:_actions2.resetProps,toggleModalDelete:_actions2.toggleModalDelete,toggleModalDeleteAll:_actions2.toggleModalDeleteAll},dispatch);}var withConnect=(0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps);var _default=(0,_redux.compose)(withConnect,_react.memo)(ListView);exports.default=_default;

/***/ }),

/***/ 2429:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(0));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _reactstrap=__webpack_require__(62);var _reactIntl=__webpack_require__(15);var _strapiHelperPlugin=__webpack_require__(6);var _pluginId=_interopRequireDefault(__webpack_require__(119));var _InputCheckbox=_interopRequireDefault(__webpack_require__(2430));var _DropdownItemLink=_interopRequireDefault(__webpack_require__(2432));var _DropdownWrapper=_interopRequireDefault(__webpack_require__(2433));var _ItemDropdown=_interopRequireDefault(__webpack_require__(2188));var _ItemDropdownReset=_interopRequireDefault(__webpack_require__(2434));var _LayoutWrapper=_interopRequireDefault(__webpack_require__(2435));var _MenuDropdown=_interopRequireDefault(__webpack_require__(2436));var _Toggle=_interopRequireDefault(__webpack_require__(2437));var DisplayedFieldsDropdown=function DisplayedFieldsDropdown(_ref){var isOpen=_ref.isOpen,items=_ref.items,_onChange=_ref.onChange,onClickReset=_ref.onClickReset,slug=_ref.slug,toggle=_ref.toggle;var _useGlobalContext=(0,_strapiHelperPlugin.useGlobalContext)(),emitEvent=_useGlobalContext.emitEvent;return/*#__PURE__*/_react.default.createElement(_DropdownWrapper.default,null,/*#__PURE__*/_react.default.createElement(_reactstrap.ButtonDropdown,{isOpen:isOpen,toggle:toggle,direction:"down"},/*#__PURE__*/_react.default.createElement(_Toggle.default,{isopen:isOpen.toString()}),/*#__PURE__*/_react.default.createElement(_MenuDropdown.default,{isopen:isOpen.toString()},/*#__PURE__*/_react.default.createElement(_DropdownItemLink.default,null,/*#__PURE__*/_react.default.createElement(_LayoutWrapper.default,{to:"".concat(slug,"/ctm-configurations/list-settings"),onClick:function onClick(){return emitEvent('willEditListLayout');}},/*#__PURE__*/_react.default.createElement(_strapiHelperPlugin.LayoutIcon,null),/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:"app.links.configure-view"}))),/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:"".concat(_pluginId.default,".containers.ListPage.displayedFields")},function(msg){return/*#__PURE__*/_react.default.createElement(_ItemDropdownReset.default,{onClick:onClickReset},/*#__PURE__*/_react.default.createElement("div",{style:{display:'flex',justifyContent:'space-between'}},/*#__PURE__*/_react.default.createElement("span",null,msg),/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:"".concat(_pluginId.default,".containers.Edit.reset")})));}),items.map(function(item){return/*#__PURE__*/_react.default.createElement(_ItemDropdown.default,{key:item.name,toggle:false,onClick:function onClick(){return _onChange(item);}},/*#__PURE__*/_react.default.createElement("div",null,/*#__PURE__*/_react.default.createElement(_InputCheckbox.default,{onChange:function onChange(){return _onChange(item);},name:item.name,value:item.value})));}))));};DisplayedFieldsDropdown.propTypes={isOpen:_propTypes.default.bool.isRequired,items:_propTypes.default.array.isRequired,onChange:_propTypes.default.func.isRequired,onClickReset:_propTypes.default.func.isRequired,slug:_propTypes.default.string.isRequired,toggle:_propTypes.default.func.isRequired};var _default=DisplayedFieldsDropdown;exports.default=_default;

/***/ }),

/***/ 2430:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);var _interopRequireWildcard=__webpack_require__(12);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(0));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _components=__webpack_require__(2431);/**
 *
 * InputCheckbox
 */function InputCheckbox(_ref){var name=_ref.name,onChange=_ref.onChange,value=_ref.value;return/*#__PURE__*/_react.default.createElement(_components.Div,{className:"col-12",onClick:function onClick(e){e.stopPropagation();}},/*#__PURE__*/_react.default.createElement("div",{className:"form-check"},/*#__PURE__*/_react.default.createElement(_components.Label,{className:"form-check-label",htmlFor:name,value:value},/*#__PURE__*/_react.default.createElement("input",{className:"form-check-input",defaultChecked:value,id:name,name:name,onChange:onChange,type:"checkbox"}),name)));}InputCheckbox.defaultProps={onChange:function onChange(){},value:false};InputCheckbox.propTypes={name:_propTypes.default.string.isRequired,onChange:_propTypes.default.func,value:_propTypes.default.bool};var _default=(0,_react.memo)(InputCheckbox);exports.default=_default;

/***/ }),

/***/ 2431:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireWildcard=__webpack_require__(12);var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.Label=exports.Div=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(11));var _styledComponents=_interopRequireWildcard(__webpack_require__(3));function _templateObject3(){var data=(0,_taggedTemplateLiteral2.default)(["\n        font-weight: 500;\n        &:after {\n          content: '\f00c';\n          position: absolute;\n          top: 1px;\n          left: 17px;\n          font-size: 10px;\n          font-family: 'FontAwesome';\n          font-weight: 100;\n          color: #1c5de7;\n          transition: all 0.2s;\n        }\n      "],["\n        font-weight: 500;\n        &:after {\n          content: '\\f00c';\n          position: absolute;\n          top: 1px;\n          left: 17px;\n          font-size: 10px;\n          font-family: 'FontAwesome';\n          font-weight: 100;\n          color: #1c5de7;\n          transition: all 0.2s;\n        }\n      "]);_templateObject3=function _templateObject3(){return data;};return data;}function _templateObject2(){var data=(0,_taggedTemplateLiteral2.default)(["\n  margin: 0;\n  margin-left: 9px;\n  color: #333740 !important;\n  cursor: pointer;\n  > input {\n    display: none;\n    margin-right: 9px;\n  }\n\n  &:before {\n    content: '';\n    position: absolute;\n    left: 15px;\n    top: 7px;\n    width: 14px;\n    height: 14px;\n    border: 1px solid rgba(16, 22, 34, 0.15);\n    background-color: #fdfdfd;\n    border-radius: 3px;\n  }\n\n  ","\n"]);_templateObject2=function _templateObject2(){return data;};return data;}function _templateObject(){var data=(0,_taggedTemplateLiteral2.default)(["\n  padding-left: 0;\n  font-size: 13px;\n  &:active,\n  :focus {\n    outline: 0 !important;\n  }\n  > div {\n    height: 27px;\n    margin: 0 !important;\n    padding-left: 15px;\n    line-height: 27px;\n    &:active,\n    :focus {\n      outline: 0 !important;\n    }\n  }\n"]);_templateObject=function _templateObject(){return data;};return data;}var Div=_styledComponents.default.div(_templateObject());exports.Div=Div;var Label=_styledComponents.default.label(_templateObject2(),function(_ref){var value=_ref.value;if(value===true){return(0,_styledComponents.css)(_templateObject3());}return'';});exports.Label=Label;

/***/ }),

/***/ 2432:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(11));var _reactstrap=__webpack_require__(62);var _styledComponents=_interopRequireDefault(__webpack_require__(3));function _templateObject(){var data=(0,_taggedTemplateLiteral2.default)(["\n  border-bottom: 1px solid #f7f8f8;\n  padding: 0.3rem 1.5rem 0.8rem 1.5rem;\n  &:hover {\n    background-color: #fff;\n  }\n"]);_templateObject=function _templateObject(){return data;};return data;}var DropdownItemLink=(0,_styledComponents.default)(_reactstrap.DropdownItem)(_templateObject());var _default=DropdownItemLink;exports.default=_default;

/***/ }),

/***/ 2433:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(11));var _styledComponents=_interopRequireDefault(__webpack_require__(3));function _templateObject(){var data=(0,_taggedTemplateLiteral2.default)(["\n  display: flex;\n  margin-bottom: 6px;\n  justify-content: flex-end;\n  font-family: Lato;\n  -webkit-font-smoothing: antialiased;\n"]);_templateObject=function _templateObject(){return data;};return data;}var DropdownWrapper=_styledComponents.default.div(_templateObject());var _default=DropdownWrapper;exports.default=_default;

/***/ }),

/***/ 2434:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(11));var _styledComponents=_interopRequireDefault(__webpack_require__(3));var _ItemDropdown=_interopRequireDefault(__webpack_require__(2188));function _templateObject(){var data=(0,_taggedTemplateLiteral2.default)(["\n  margin-bottom: 6px;\n  padding: 0.8rem 1.5rem 0.2rem 1.5rem;\n  font-weight: 600;\n  font-size: 1.3rem;\n\n  &:hover {\n    background-color: #ffffff !important;\n  }\n  > div {\n    > span:last-child {\n      color: #007eff;\n      font-weight: 400;\n      cursor: pointer;\n    }\n  }\n"]);_templateObject=function _templateObject(){return data;};return data;}var ItemDropdownReset=(0,_styledComponents.default)(_ItemDropdown.default)(_templateObject());var _default=ItemDropdownReset;exports.default=_default;

/***/ }),

/***/ 2435:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(11));var _styledComponents=_interopRequireDefault(__webpack_require__(3));var _reactRouterDom=__webpack_require__(35);function _templateObject(){var data=(0,_taggedTemplateLiteral2.default)(["\n  display: block;\n  width: 100%;\n  text-decoration: none;\n  color: #333740;\n  font-size: 13px;\n  svg {\n    margin-right: 10px;\n    vertical-align: middle;\n  }\n  &:hover {\n    text-decoration: none;\n    span {\n      color: #007eff;\n    }\n    svg {\n      g {\n        fill: #007eff;\n      }\n    }\n  }\n"]);_templateObject=function _templateObject(){return data;};return data;}var LayoutWrapper=(0,_styledComponents.default)(_reactRouterDom.Link)(_templateObject());var _default=LayoutWrapper;exports.default=_default;

/***/ }),

/***/ 2436:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(11));var _styledComponents=_interopRequireDefault(__webpack_require__(3));var _reactstrap=__webpack_require__(62);function _templateObject(){var data=(0,_taggedTemplateLiteral2.default)(["\n  min-width: 230px;\n  padding-top: 9px;\n  padding-bottom: 5px !important;\n  border-top-right-radius: 0 !important;\n  border: 1px solid #e3e9f3;\n  box-shadow: 0px 2px 4px rgba(227, 233, 243, 0.5);\n  transform: translate3d(-178px, 28px, 0px) !important;\n\n  ","\n"]);_templateObject=function _templateObject(){return data;};return data;}var MenuDropdown=(0,_styledComponents.default)(_reactstrap.DropdownMenu)(_templateObject(),function(_ref){var isopen=_ref.isopen;if(isopen==='true'){return"\n        border-top-color: #aed4fb !important;\n        border-top-right-radius: 0;\n      ";}return'';});var _default=MenuDropdown;exports.default=_default;

/***/ }),

/***/ 2437:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(11));var _reactstrap=__webpack_require__(62);var _styledComponents=_interopRequireDefault(__webpack_require__(3));function _templateObject(){var data=(0,_taggedTemplateLiteral2.default)(["\n  height: 30px;\n  padding: 0 10px;\n\n  &:focus {\n    outline: 0;\n  }\n\n  &:active {\n    border-color: #aed4fb !important;\n  }\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  ","\n"]);_templateObject=function _templateObject(){return data;};return data;}var Toggle=(0,_styledComponents.default)(_reactstrap.DropdownToggle)(_templateObject(),function(_ref){var isopen=_ref.isopen;// Fix react warning
if(isopen==='true'){return"\n        background: #e6f0fb;\n        border: 1px solid #aed4fb !important;\n        border-radius: 2px;\n        border-bottom-right-radius: 0 !important;\n        border-bottom-left-radius: 0 !important;\n        border-top-right-radius: 2px !important;\n\n        &:before {\n          content: '\f013';\n          font-family: FontAwesome;\n          color: #007eff;\n        }\n\n        &:after {\n          content: '\f0d7';\n          display: inline-block;\n          margin-top: -1px;\n          margin-left: 10px;\n          font-family: FontAwesome;\n          color: #007eff;\n          transform: rotateX(180deg);\n          transition: transform 0.3s ease-out;\n        }\n\n        &:hover,\n        :active,\n        :focus {\n          background: #e6f0fb;\n          border: 1px solid #aed4fb;\n        }\n      ";}return"\n      background: #ffffff !important;\n      border: 1px solid #e3e9f3;\n      border-radius: 2px !important;\n      font-size: 1.4rem;\n\n      &:before {\n        content: '\f013';\n        font-family: FontAwesome;\n        color: #323740;\n      }\n      &:after {\n        content: '\f0d7';\n        display: inline-block;\n        margin-top: -1px;\n        margin-left: 11px;\n        font-family: FontAwesome;\n        color: #323740;\n        transition: transform 0.3s ease-out;\n      }\n      &:hover,\n      :focus,\n      :active {\n        background: #ffffff !important;\n        border: 1px solid #e3e9f3;\n      }\n    ";});var _default=Toggle;exports.default=_default;

/***/ }),

/***/ 2438:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);var _interopRequireWildcard=__webpack_require__(12);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(0));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _reactRouterDom=__webpack_require__(35);var _reactIntl=__webpack_require__(15);var _lodash=__webpack_require__(7);var _useListView2=_interopRequireDefault(__webpack_require__(2107));var _TableHeader=_interopRequireDefault(__webpack_require__(2439));var _styledComponents=__webpack_require__(2119);var _ActionCollapse=_interopRequireDefault(__webpack_require__(2441));var _Row=_interopRequireDefault(__webpack_require__(2442));var CustomTable=function CustomTable(_ref){var data=_ref.data,headers=_ref.headers,isBulkable=_ref.isBulkable;var _useListView=(0,_useListView2.default)(),emitEvent=_useListView.emitEvent,entriesToDelete=_useListView.entriesToDelete,label=_useListView.label,_useListView$searchPa=_useListView.searchParams,filters=_useListView$searchPa.filters,_q=_useListView$searchPa._q;var _useLocation=(0,_reactRouterDom.useLocation)(),pathname=_useLocation.pathname,search=_useLocation.search;var _useHistory=(0,_reactRouterDom.useHistory)(),push=_useHistory.push;var redirectUrl="redirectUrl=".concat(pathname).concat(search);var colSpanLength=isBulkable?headers.length+2:headers.length+1;var handleGoTo=function handleGoTo(id){emitEvent('willEditEntryFromList');push({pathname:"".concat(pathname,"/").concat(id),search:redirectUrl});};var values={contentType:(0,_lodash.upperFirst)(label),search:_q};var tableEmptyMsgId=filters.length>0?'withFilters':'withoutFilter';if(_q!==''){tableEmptyMsgId='withSearch';}var content=data.length===0?/*#__PURE__*/_react.default.createElement(_styledComponents.TableEmpty,null,/*#__PURE__*/_react.default.createElement("td",{colSpan:colSpanLength},/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:"content-manager.components.TableEmpty.".concat(tableEmptyMsgId),values:values}))):data.map(function(row){return/*#__PURE__*/_react.default.createElement(_styledComponents.TableRow,{key:row.id,onClick:function onClick(e){e.preventDefault();e.stopPropagation();handleGoTo(row.id);}},/*#__PURE__*/_react.default.createElement(_Row.default,{isBulkable:isBulkable,headers:headers,row:row,goTo:handleGoTo}));});return/*#__PURE__*/_react.default.createElement(_styledComponents.Table,{className:"table"},/*#__PURE__*/_react.default.createElement(_TableHeader.default,{headers:headers,isBulkable:isBulkable}),/*#__PURE__*/_react.default.createElement("tbody",null,entriesToDelete.length>0&&/*#__PURE__*/_react.default.createElement(_ActionCollapse.default,{colSpan:colSpanLength}),content));};CustomTable.defaultProps={data:[],headers:[],isBulkable:true};CustomTable.propTypes={data:_propTypes.default.array,headers:_propTypes.default.array,isBulkable:_propTypes.default.bool};var _default=(0,_react.memo)(CustomTable);exports.default=_default;

/***/ }),

/***/ 2439:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireWildcard=__webpack_require__(12);var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__(57));var _react=_interopRequireWildcard(__webpack_require__(0));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _useListView2=_interopRequireDefault(__webpack_require__(2107));var _CustomInputCheckbox=_interopRequireDefault(__webpack_require__(2190));var _styledComponents=__webpack_require__(2119);/* eslint-disable jsx-a11y/control-has-associated-label */function TableHeader(_ref){var headers=_ref.headers,isBulkable=_ref.isBulkable;var _useListView=(0,_useListView2.default)(),data=_useListView.data,entriesToDelete=_useListView.entriesToDelete,firstSortableElement=_useListView.firstSortableElement,onChangeBulkSelectall=_useListView.onChangeBulkSelectall,onChangeParams=_useListView.onChangeParams,_sort=_useListView.searchParams._sort;var _sort$split=_sort.split(':'),_sort$split2=(0,_slicedToArray2.default)(_sort$split,2),sortBy=_sort$split2[0],sortOrder=_sort$split2[1];return/*#__PURE__*/_react.default.createElement(_styledComponents.Thead,{isBulkable:isBulkable},/*#__PURE__*/_react.default.createElement("tr",null,isBulkable&&/*#__PURE__*/_react.default.createElement("th",null,/*#__PURE__*/_react.default.createElement(_CustomInputCheckbox.default,{entriesToDelete:entriesToDelete,isAll:true,name:"all",onChange:onChangeBulkSelectall,value:data.length===entriesToDelete.length&&entriesToDelete.length>0})),headers.map(function(header){return/*#__PURE__*/_react.default.createElement("th",{key:header.name,onClick:function onClick(){if(header.sortable){var isCurrentSort=header.name===sortBy;var nextOrder=isCurrentSort&&sortOrder==='ASC'?'DESC':'ASC';var value="".concat(header.name,":").concat(nextOrder);if(isCurrentSort&&sortOrder==='DESC'){value="".concat(firstSortableElement,":ASC");}onChangeParams({target:{name:'_sort',value:value}});}}},/*#__PURE__*/_react.default.createElement("span",{className:header.sortable?'sortable':''},header.label,sortBy===header.name&&/*#__PURE__*/_react.default.createElement(_styledComponents.Arrow,{fill:"#212529",isUp:sortOrder==='ASC'&&'isAsc'})));}),/*#__PURE__*/_react.default.createElement("th",null)));}TableHeader.defaultProps={isBulkable:true,headers:[]};TableHeader.propTypes={headers:_propTypes.default.array,isBulkable:_propTypes.default.bool};var _default=(0,_react.memo)(TableHeader);exports.default=_default;

/***/ }),

/***/ 2440:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireWildcard=__webpack_require__(12);Object.defineProperty(exports,"__esModule",{value:true});exports.Label=void 0;var _styledComponents=_interopRequireWildcard(__webpack_require__(3));/* eslint-disable */const Label=_styledComponents.default.label`
  cursor: pointer;
  position: relative;
  vertical-align: middle;
  > input {
    display: none;
  }
  &:before {
    content: '';
    position: absolute;
    left: 15px;
    top: calc(50% - 8px);
    width: 14px;
    height: 14px;
    border: 1px solid rgba(16, 22, 34, 0.15);
    background-color: #fdfdfd;
    border-radius: 3px;
  }

  ${({shouldDisplaySomeChecked})=>{if(shouldDisplaySomeChecked){return(0,_styledComponents.css)`
        &:after {
          content: '\f068';
          position: absolute;
          top: calc(50% - 8px);
          left: 18px;
          font-size: 10px;
          font-family: 'FontAwesome';
          font-weight: 100;
          color: #1c5de7;
        }
      `;}}}

  ${({shouldDisplayAllChecked})=>{if(shouldDisplayAllChecked){return(0,_styledComponents.css)`
        &:after {
          content: '\f00c';
          position: absolute;
          top: calc(50% - 9px);
          left: 17px;
          font-size: 10px;
          font-family: 'FontAwesome';
          font-weight: 100;
          color: #1c5de7;
          transition: all 0.2s;
        }
      `;}}}

  ${({isChecked})=>{if(isChecked){return(0,_styledComponents.css)`
        &:after {
          content: '\f00c';
          position: absolute;
          top: calc(50% - 11px);
          left: 17px;
          font-size: 10px;
          font-family: 'FontAwesome';
          font-weight: 100;
          color: #1c5de7;
          transition: all 0.2s;
        }
      `;}}}
`;exports.Label=Label;

/***/ }),

/***/ 2441:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);var _interopRequireWildcard=__webpack_require__(12);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(0));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _reactIntl=__webpack_require__(15);var _pluginId=_interopRequireDefault(__webpack_require__(119));var _useListView2=_interopRequireDefault(__webpack_require__(2107));var _styledComponents=__webpack_require__(2119);function ActionCollapse(_ref){var colSpan=_ref.colSpan;var _useListView=(0,_useListView2.default)(),data=_useListView.data,entriesToDelete=_useListView.entriesToDelete,toggleModalDeleteAll=_useListView.toggleModalDeleteAll;var number=entriesToDelete.length;var suffix=number>1?'plural':'singular';var deleteMessageId=number===data.length?'delete':'deleteSelected';return/*#__PURE__*/_react.default.createElement(_styledComponents.TableDelete,{colSpan:colSpan},/*#__PURE__*/_react.default.createElement("td",{colSpan:colSpan},/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:"".concat(_pluginId.default,".components.TableDelete.entries.").concat(suffix),values:{number:number}},function(message){return/*#__PURE__*/_react.default.createElement(_styledComponents.DeleteSpan,null,message);}),/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:"".concat(_pluginId.default,".components.TableDelete.").concat(deleteMessageId)},function(message){return/*#__PURE__*/_react.default.createElement(_styledComponents.DeletAllSpan,{onClick:toggleModalDeleteAll},message);})));}ActionCollapse.propTypes={colSpan:_propTypes.default.number.isRequired};var _default=(0,_react.memo)(ActionCollapse);exports.default=_default;

/***/ }),

/***/ 2442:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireWildcard=__webpack_require__(12);var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__(57));var _react=_interopRequireWildcard(__webpack_require__(0));var _reactRouter=__webpack_require__(708);var _propTypes=_interopRequireDefault(__webpack_require__(2));var _lodash=__webpack_require__(7);var _moment=_interopRequireDefault(__webpack_require__(19));var _strapiHelperPlugin=__webpack_require__(6);var _useListView2=_interopRequireDefault(__webpack_require__(2107));var _dateFormats=_interopRequireDefault(__webpack_require__(2191));var _CustomInputCheckbox=_interopRequireDefault(__webpack_require__(2190));var _MediaPreviewList=_interopRequireDefault(__webpack_require__(2443));var _styledComponents=__webpack_require__(2119);/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */var getDisplayedValue=function getDisplayedValue(type,value,name){switch((0,_lodash.toLower)(type)){case'string':case'text':case'email':case'enumeration':case'uid':return value&&!(0,_lodash.isEmpty)((0,_lodash.toString)(value))||name==='id'?(0,_lodash.toString)(value):'-';case'float':case'integer':case'biginteger':case'decimal':return!(0,_lodash.isNull)(value)?(0,_lodash.toString)(value):'-';case'boolean':return value!==null?(0,_lodash.toString)(value):'-';case'date':case'datetime':case'timestamp':{if(value==null){return'-';}var date=value&&(0,_lodash.isObject)(value)&&value._isAMomentObject===true?JSON.stringify(value):value;return(0,_moment.default)(date).format(_dateFormats.default[type]);}case'password':return'••••••••';case'media':case'file':case'files':return value;case'time':{if(!value){return'-';}var _value$split=value.split(':'),_value$split2=(0,_slicedToArray2.default)(_value$split,3),hour=_value$split2[0],minute=_value$split2[1],second=_value$split2[2];var timeObj={hour:hour,minute:minute,second:second};var _date=(0,_moment.default)().set(timeObj);return _date.format(_dateFormats.default.time);}default:return'-';}};function Row(_ref){var goTo=_ref.goTo,isBulkable=_ref.isBulkable,row=_ref.row,headers=_ref.headers;var _useListView=(0,_useListView2.default)(),entriesToDelete=_useListView.entriesToDelete,onChangeBulk=_useListView.onChangeBulk,onClickDelete=_useListView.onClickDelete,schema=_useListView.schema;var memoizedDisplayedValue=(0,_react.useCallback)(function(name){var type=(0,_lodash.get)(schema,['attributes',name,'type'],'string');return getDisplayedValue(type,row[name],name);},[row,schema]);var _useGlobalContext=(0,_strapiHelperPlugin.useGlobalContext)(),emitEvent=_useGlobalContext.emitEvent;return/*#__PURE__*/_react.default.createElement(_react.default.Fragment,null,isBulkable&&/*#__PURE__*/_react.default.createElement("td",{key:"i",onClick:function onClick(e){return e.stopPropagation();}},/*#__PURE__*/_react.default.createElement(_CustomInputCheckbox.default,{name:row.id,onChange:onChangeBulk,value:entriesToDelete.filter(function(id){return(0,_lodash.toString)(id)===(0,_lodash.toString)(row.id);}).length>0})),headers.map(function(header){return/*#__PURE__*/_react.default.createElement("td",{key:header.name},(0,_lodash.get)(schema,['attributes',header.name,'type'])!=='media'?/*#__PURE__*/_react.default.createElement(_styledComponents.Truncate,null,/*#__PURE__*/_react.default.createElement(_styledComponents.Truncated,null,memoizedDisplayedValue(header.name))):/*#__PURE__*/_react.default.createElement(_MediaPreviewList.default,{files:memoizedDisplayedValue(header.name)}));}),/*#__PURE__*/_react.default.createElement(_styledComponents.ActionContainer,null,/*#__PURE__*/_react.default.createElement(_strapiHelperPlugin.IcoContainer,{style:{minWidth:'inherit',width:'100%',lineHeight:48},icons:[{icoType:'pencil-alt',onClick:function onClick(){emitEvent('willEditEntryFromList');goTo(row.id);}},{id:row.id,icoType:'trash',onClick:function onClick(){emitEvent('willDeleteEntryFromList');onClickDelete(row.id);}}]})));}Row.propTypes={goTo:_propTypes.default.func.isRequired,headers:_propTypes.default.array.isRequired,isBulkable:_propTypes.default.bool.isRequired,row:_propTypes.default.object.isRequired};var _default=(0,_reactRouter.withRouter)((0,_react.memo)(Row));exports.default=_default;

/***/ }),

/***/ 2443:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(0));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _lodash=__webpack_require__(7);var _strapiHelperPlugin=__webpack_require__(6);var _Na=_interopRequireDefault(__webpack_require__(2444));var _StyledMediaPreviewList=__webpack_require__(2445);var IMAGE_PREVIEW_COUNT=3;function MediaPreviewList(_ref){var hoverable=_ref.hoverable,files=_ref.files;var renderImage=function renderImage(image){var name=image.name,size=image.size,url=image.url;var thumbnail=(0,_lodash.get)(image,['formats','thumbnail','url'],null);var fileUrl=thumbnail||url;if(!thumbnail&&size>20000){return renderFile(image);}return/*#__PURE__*/_react.default.createElement(_StyledMediaPreviewList.MediaPreviewImage,{className:hoverable?'hoverable':''},/*#__PURE__*/_react.default.createElement("div",null,/*#__PURE__*/_react.default.createElement("img",{src:(0,_strapiHelperPlugin.prefixFileUrlWithBackendUrl)(fileUrl),alt:"".concat(name)})),/*#__PURE__*/_react.default.createElement("img",{src:(0,_strapiHelperPlugin.prefixFileUrlWithBackendUrl)(fileUrl),alt:"".concat(name)}));};var renderFile=function renderFile(file){var ext=file.ext,name=file.name;var fileExtension=(0,_strapiHelperPlugin.getFileExtension)(ext);return/*#__PURE__*/_react.default.createElement(_StyledMediaPreviewList.MediaPreviewFile,{className:hoverable?'hoverable':''},fileExtension?/*#__PURE__*/_react.default.createElement("div",null,/*#__PURE__*/_react.default.createElement("span",null,fileExtension)):/*#__PURE__*/_react.default.createElement(_StyledMediaPreviewList.MediaPreviewItem,null,/*#__PURE__*/_react.default.createElement(_Na.default,null)),/*#__PURE__*/_react.default.createElement("span",null,name));};var renderItem=function renderItem(file){var mime=file.mime;return/*#__PURE__*/_react.default.createElement(_react.default.Fragment,{key:JSON.stringify(file)},(0,_lodash.includes)(mime,'image')?renderImage(file):renderFile(file));};var renderText=function renderText(count){return/*#__PURE__*/_react.default.createElement(_StyledMediaPreviewList.MediaPreviewText,null,/*#__PURE__*/_react.default.createElement("div",null,/*#__PURE__*/_react.default.createElement("span",null,"+",count)));};var renderMultipleItems=function renderMultipleItems(files){return files.map(function(file,index){return/*#__PURE__*/_react.default.createElement(_react.default.Fragment,{key:JSON.stringify(file)},index===IMAGE_PREVIEW_COUNT&&files.length>IMAGE_PREVIEW_COUNT+1?renderText(files.length-IMAGE_PREVIEW_COUNT):renderItem(file));});};return!!files&&!(0,_lodash.isEmpty)(files)?/*#__PURE__*/_react.default.createElement(_StyledMediaPreviewList.StyledMediaPreviewList,null,!(0,_lodash.isArray)(files)?renderItem(files):renderMultipleItems(files)):/*#__PURE__*/_react.default.createElement(_StyledMediaPreviewList.MediaPreviewItem,null,/*#__PURE__*/_react.default.createElement(_Na.default,null));}MediaPreviewList.defaultProps={hoverable:true,files:null};MediaPreviewList.propTypes={hoverable:_propTypes.default.bool,files:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array])};var _default=MediaPreviewList;exports.default=_default;

/***/ }),

/***/ 2444:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__(13));var _react=_interopRequireDefault(__webpack_require__(0));var _propTypes=_interopRequireDefault(__webpack_require__(2));const Na=({fill,fontFamily,fontSize,fontWeight,height,textFill,width,...rest})=>{return/*#__PURE__*/_react.default.createElement("svg",(0,_extends2.default)({},rest,{width:width,height:height,xmlns:"http://www.w3.org/2000/svg"}),/*#__PURE__*/_react.default.createElement("g",{fill:"none",fillRule:"evenodd"},/*#__PURE__*/_react.default.createElement("rect",{fill:fill,width:width,height:height,rx:"17.5"}),/*#__PURE__*/_react.default.createElement("text",{fontFamily:fontFamily,fontSize:fontSize,fontWeight:fontWeight,fill:textFill},/*#__PURE__*/_react.default.createElement("tspan",{x:"6",y:"22"},"N/A"))));};Na.defaultProps={fill:'#fafafb',fontFamily:'Lato-Medium, Lato',fontSize:'12',fontWeight:'400',height:'35',textFill:'#838383',width:'35'};Na.propTypes={fill:_propTypes.default.string,fontFamily:_propTypes.default.string,fontSize:_propTypes.default.string,fontWeight:_propTypes.default.string,height:_propTypes.default.oneOfType([_propTypes.default.number,_propTypes.default.string]),textFill:_propTypes.default.string,width:_propTypes.default.oneOfType([_propTypes.default.number,_propTypes.default.string])};var _default=Na;exports.default=_default;

/***/ }),

/***/ 2445:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireWildcard=__webpack_require__(12);Object.defineProperty(exports,"__esModule",{value:true});exports.StyledMediaPreviewList=exports.MediaPreviewText=exports.MediaPreviewItem=exports.MediaPreviewImage=exports.MediaPreviewFile=void 0;var _styledComponents=_interopRequireWildcard(__webpack_require__(3));const sizes={small:'35px',big:'127px',margin:'20px'};const max=4;const StyledMediaPreviewList=_styledComponents.default.div`
  position: relative;
  height: ${sizes.small};
  > div {
    position: absolute;
    top: 0;
    ${createCSS()};
  }
`;exports.StyledMediaPreviewList=StyledMediaPreviewList;function createCSS(){let styles='';for(let i=0;i<=max;i+=1){styles+=`
      &:nth-of-type(${i}) {
        left: calc( ${sizes.margin} * ${i-1});
        z-index: ${i};
      }
    `;}return(0,_styledComponents.css)`
    ${styles}
  `;}const MediaPreviewItem=_styledComponents.default.div`
  width: ${sizes.small};
  height: ${sizes.small};
  div {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: calc(${sizes.small} / 2);
    background-color: #f3f3f4;
    border: 1px solid #f3f3f4;
  }
  &.hoverable {
    :hover {
      z-index: ${max+1};
    }
  }
`;exports.MediaPreviewItem=MediaPreviewItem;const MediaPreviewFile=(0,_styledComponents.default)(MediaPreviewItem)`
  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  div {
    position: relative;
    background-color: #f3f3f4;
    color: #333740;
    text-align: center;
    line-height: ${sizes.small};
    border: 1px solid white;
    span {
      display: block;
      padding: 0 3px;
      text-transform: uppercase;
      font-size: 10px;
      font-weight: 600;
    }
    i,
    svg {
      position: absolute;
      left: 1px;
      top: -1px;
      font-size: 15px;
      width: 100%;
      height: 100%;
      &:before {
        width: 100%;
        height: 100%;
        padding: 10px;
        line-height: 35px;
        background: #f3f3f4;
      }
    }
  }
  div + span {
    display: none;
    position: absolute;
    left: 120%;
    bottom: -10px;
    display: none;
    max-width: 150px;
    color: #333740;
  }
  &.hoverable {
    :hover {
      div + span {
        display: block;
      }
    }
  }
`;exports.MediaPreviewFile=MediaPreviewFile;const MediaPreviewText=(0,_styledComponents.default)(MediaPreviewItem)`
  div {
    font-size: 13px;
    color: #333740;
    text-align: center;
    line-height: ${sizes.small};
    font-weight: 600;
  }
`;exports.MediaPreviewText=MediaPreviewText;const MediaPreviewImage=(0,_styledComponents.default)(MediaPreviewItem)`
  img {
    display: block;
    object-fit: cover;
    background-color: #fafafb;
  }
  div {
    position: relative;
    &::before {
      content: '-';
      position: absolute;
      width: 100%;
      height: 100%;
      background: white;
      color: transparent;
      opacity: 0;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  div + img {
    display: none;
    width: ${sizes.big};
    height: ${sizes.big};
    border-radius: calc(${sizes.big} / 2);
    margin-top: calc(-${sizes.big} - ${sizes.small} - 5px);
    margin-left: calc((-${sizes.big} + ${sizes.small}) / 2);
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.05);
  }

  &.hoverable {
    :hover {
      div {
        &::before {
          opacity: 0.6;
        }
      }
      div + img {
        display: block;
      }
    }
  }
`;exports.MediaPreviewImage=MediaPreviewImage;

/***/ }),

/***/ 2446:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireWildcard=__webpack_require__(12);var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__(13));var _slicedToArray2=_interopRequireDefault(__webpack_require__(57));var _react=_interopRequireWildcard(__webpack_require__(0));var _reactRouter=__webpack_require__(708);var _propTypes=_interopRequireDefault(__webpack_require__(2));var _lodash=__webpack_require__(7);var _reactstrap=__webpack_require__(62);var _reactIntl=__webpack_require__(15);var _strapiHelperPlugin=__webpack_require__(6);var _pluginId=_interopRequireDefault(__webpack_require__(119));var _useListView2=_interopRequireDefault(__webpack_require__(2107));var _Container=_interopRequireDefault(__webpack_require__(2099));var _FilterPickerOption=_interopRequireDefault(__webpack_require__(2447));var _components=__webpack_require__(2450);var _init=_interopRequireDefault(__webpack_require__(2451));var _reducer=_interopRequireWildcard(__webpack_require__(2452));var NOT_ALLOWED_FILTERS=['json','component','relation','media','richtext'];function FilterPicker(_ref){var actions=_ref.actions,isOpen=_ref.isOpen,name=_ref.name,_onSubmit=_ref.onSubmit,toggleFilterPickerState=_ref.toggleFilterPickerState;var _useListView=(0,_useListView2.default)(),schema=_useListView.schema,searchParams=_useListView.searchParams;var allowedAttributes=Object.keys((0,_lodash.get)(schema,['attributes']),{}).filter(function(attr){var current=(0,_lodash.get)(schema,['attributes',attr],{});return!NOT_ALLOWED_FILTERS.includes(current.type)&&current.type!==undefined;}).sort().map(function(attr){var current=(0,_lodash.get)(schema,['attributes',attr],{});return{name:attr,type:current.type,options:current.enum||null};});var _useReducer=(0,_react.useReducer)(_reducer.default,_reducer.initialState,function(){return(0,_init.default)(_reducer.initialState,allowedAttributes[0]);}),_useReducer2=(0,_slicedToArray2.default)(_useReducer,2),state=_useReducer2[0],dispatch=_useReducer2[1];var modifiedData=state.get('modifiedData').toJS();var handleChange=function handleChange(_ref2){var _ref2$target=_ref2.target,name=_ref2$target.name,value=_ref2$target.value;dispatch({type:'ON_CHANGE',keys:name.split('.'),value:value});};var renderTitle=function renderTitle(){return/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:"".concat(_pluginId.default,".components.FiltersPickWrapper.PluginHeader.title.filter")},function(message){return/*#__PURE__*/_react.default.createElement("span",null,(0,_lodash.capitalize)(name),"\xA0-\xA0",/*#__PURE__*/_react.default.createElement("span",null,message));});};// Generate the first filter for adding a new one or at initial state
var getInitialFilter=function getInitialFilter(){var type=(0,_lodash.get)(allowedAttributes,[0,'type'],'');var _getFilterType=(0,_strapiHelperPlugin.getFilterType)(type),_getFilterType2=(0,_slicedToArray2.default)(_getFilterType,1),filter=_getFilterType2[0];var value='';if(type==='boolean'){value='true';}else if(type==='number'){value=0;}else if(type==='enumeration'){value=(0,_lodash.get)(allowedAttributes,[0,'options',0],'');}var initFilter={name:(0,_lodash.get)(allowedAttributes,[0,'name'],''),filter:filter.value,value:value};return initFilter;};// Set the filters when the collapse is opening
var handleEntering=function handleEntering(){var currentFilters=searchParams.filters;var initialFilters=currentFilters.length>0?currentFilters:[getInitialFilter()];dispatch({type:'SET_FILTERS',initialFilters:initialFilters,attributes:(0,_lodash.get)(schema,'attributes',{})});};var addFilter=function addFilter(){dispatch({type:'ADD_FILTER',filter:getInitialFilter()});};return/*#__PURE__*/_react.default.createElement(_reactstrap.Collapse,{isOpen:isOpen,onEntering:handleEntering},/*#__PURE__*/_react.default.createElement(_Container.default,{style:{backgroundColor:'white',paddingBottom:0}},/*#__PURE__*/_react.default.createElement("form",{onSubmit:function onSubmit(e){e.preventDefault();_onSubmit(modifiedData);}},/*#__PURE__*/_react.default.createElement(_strapiHelperPlugin.PluginHeader,{actions:actions,title:renderTitle,description:{id:"".concat(_pluginId.default,".components.FiltersPickWrapper.PluginHeader.description")}}),/*#__PURE__*/_react.default.createElement(_components.Wrapper,null,modifiedData.map(function(filter,key){return/*#__PURE__*/_react.default.createElement(_FilterPickerOption.default,(0,_extends2.default)({},filter,{allowedAttributes:allowedAttributes,index:key,modifiedData:modifiedData,onChange:handleChange,onClickAddFilter:addFilter,onRemoveFilter:function onRemoveFilter(index){if(index===0&&modifiedData.length===1){toggleFilterPickerState();return;}dispatch({type:'REMOVE_FILTER',index:index});},type:(0,_lodash.get)(schema,['attributes',filter.name,'type'],''),showAddButton:key===modifiedData.length-1// eslint-disable-next-line react/no-array-index-key
,key:key}));})),/*#__PURE__*/_react.default.createElement(_components.Flex,null,/*#__PURE__*/_react.default.createElement(_components.Span,{onClick:toggleFilterPickerState},/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:"content-manager.components.FiltersPickWrapper.hide"}),"\xA0")))));}FilterPicker.defaultProps={actions:[],isOpen:false,name:''};FilterPicker.propTypes={actions:_propTypes.default.array,isOpen:_propTypes.default.bool,location:_propTypes.default.shape({search:_propTypes.default.string.isRequired}).isRequired,name:_propTypes.default.string,onSubmit:_propTypes.default.func.isRequired,toggleFilterPickerState:_propTypes.default.func.isRequired};var _default=(0,_reactRouter.withRouter)((0,_react.memo)(FilterPicker));exports.default=_default;

/***/ }),

/***/ 2447:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireWildcard=__webpack_require__(12);var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__(13));var _react=_interopRequireWildcard(__webpack_require__(0));var _lodash=__webpack_require__(7);var _propTypes=_interopRequireDefault(__webpack_require__(2));var _strapiHelperPlugin=__webpack_require__(6);var _core=__webpack_require__(25);var _components=__webpack_require__(2192);var _Input=_interopRequireDefault(__webpack_require__(2448));var _Option=_interopRequireDefault(__webpack_require__(2449));var styles={select:{minWidth:'170px',maxWidth:'200px'},selectMiddle:{minWidth:'130px',maxWidth:'200px',marginLeft:'10px',marginRight:'10px'}};function FilterPickerOption(_ref){var allowedAttributes=_ref.allowedAttributes,modifiedData=_ref.modifiedData,index=_ref.index,_onChange=_ref.onChange,onClickAddFilter=_ref.onClickAddFilter,onRemoveFilter=_ref.onRemoveFilter,value=_ref.value,showAddButton=_ref.showAddButton,type=_ref.type;var filtersOptions=(0,_strapiHelperPlugin.getFilterType)(type);var currentFilterName=(0,_lodash.get)(modifiedData,[index,'name']);var currentFilterData=allowedAttributes.find(function(attr){return attr.name===currentFilterName;});var options=(0,_lodash.get)(currentFilterData,['options'],null)||['true','false'];return/*#__PURE__*/_react.default.createElement(_components.Wrapper,{borderLeft:!(0,_lodash.isEmpty)(value)},/*#__PURE__*/_react.default.createElement(_components.InputWrapper,null,/*#__PURE__*/_react.default.createElement(_strapiHelperPlugin.CircleButton,{type:"button",isRemoveButton:true,onClick:function onClick(){return onRemoveFilter(index);}}),/*#__PURE__*/_react.default.createElement(_core.Select,{onChange:function onChange(e){// Change the attribute
_onChange(e);// Change the default filter so it reset to the common one which is '='
_onChange({target:{name:"".concat(index,".filter"),value:'='}});},name:"".concat(index,".name"),value:(0,_lodash.get)(modifiedData,[index,'name'],''),options:allowedAttributes.map(function(attr){return attr.name;}),style:styles.select}),/*#__PURE__*/_react.default.createElement(_core.Select,{onChange:_onChange,name:"".concat(index,".filter"),options:filtersOptions.map(function(option){return/*#__PURE__*/_react.default.createElement(_Option.default,(0,_extends2.default)({},option,{key:option.value}));}),style:styles.selectMiddle,value:(0,_lodash.get)(modifiedData,[index,'filter'],'')}),/*#__PURE__*/_react.default.createElement(_Input.default,{type:type,name:"".concat(index,".value"),value:(0,_lodash.get)(modifiedData,[index,'value'],''),options:options,onChange:_onChange}),showAddButton&&/*#__PURE__*/_react.default.createElement(_strapiHelperPlugin.CircleButton,{type:"button",onClick:onClickAddFilter})));}FilterPickerOption.defaultProps={allowedAttributes:[],modifiedData:[],index:-1,onChange:function onChange(){},onClickAddFilter:function onClickAddFilter(){},onRemoveFilter:function onRemoveFilter(){},value:null,type:'string'};FilterPickerOption.propTypes={allowedAttributes:_propTypes.default.array,modifiedData:_propTypes.default.array,index:_propTypes.default.number,onChange:_propTypes.default.func,onClickAddFilter:_propTypes.default.func,onRemoveFilter:_propTypes.default.func,showAddButton:_propTypes.default.bool.isRequired,type:_propTypes.default.string,value:_propTypes.default.any};var _default=(0,_react.memo)(FilterPickerOption);exports.default=_default;

/***/ }),

/***/ 2448:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireWildcard=__webpack_require__(12);var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__(13));var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__(132));var _react=_interopRequireWildcard(__webpack_require__(0));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _custom=__webpack_require__(63);var _core=__webpack_require__(25);var _components=__webpack_require__(2192);/**
 *
 * InputWithAutoFocus that programatically manage the autofocus of another one
 */var getInputType=function getInputType(attrType){switch(attrType){case'boolean':return _core.Select;case'date':case'timestamp':case'timestampUpdate':return _core.DatePicker;case'datetime':return _custom.DateTime;case'enumeration':return _core.Select;case'integer':case'biginteger':case'decimal':case'float':return _core.InputNumber;case'time':return _core.TimePicker;default:return _core.InputText;}};function Input(_ref){var type=_ref.type,rest=(0,_objectWithoutProperties2.default)(_ref,["type"]);var Component=getInputType(type);var style=type!=='time'?{width:'210px'}:{};if(['integer','biginteger','float','decimal'].includes(type)){style={marginRight:'20px'};}var styles=type==='boolean'?{minWidth:'100px',maxWidth:'200px'}:style;var wrapperStyle=type==='boolean'||['date','timestamp','time','datetime'].includes(type)?{marginRight:'20px'}:{marginRight:'10px'};return/*#__PURE__*/_react.default.createElement(_components.InputWrapperDate,{type:type||'text',style:wrapperStyle},/*#__PURE__*/_react.default.createElement(Component,(0,_extends2.default)({},rest,{style:styles,autoComplete:"off"})));}Input.propTypes={type:_propTypes.default.string.isRequired};var _default=(0,_react.memo)(Input);exports.default=_default;

/***/ }),

/***/ 2449:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(0));var _reactIntl=__webpack_require__(15);var _propTypes=_interopRequireDefault(__webpack_require__(2));var Option=function Option(_ref){var id=_ref.id,value=_ref.value;return/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:id},function(msg){return/*#__PURE__*/_react.default.createElement("option",{value:value},msg);});};Option.propTypes={id:_propTypes.default.string.isRequired,value:_propTypes.default.string.isRequired};var _default=Option;exports.default=_default;

/***/ }),

/***/ 2450:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.Wrapper=exports.Span=exports.Flex=exports.Div=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(11));var _styledComponents=_interopRequireDefault(__webpack_require__(3));function _templateObject4(){var data=(0,_taggedTemplateLiteral2.default)(["\n  width: calc(100% + 60px);\n  margin: ",";\n  background: #fff;\n  box-shadow: 3px 2px 4px #e3e9f3;\n  padding: 18px 30px 0px 30px;\n  transition: ",";\n"]);_templateObject4=function _templateObject4(){return data;};return data;}function _templateObject3(){var data=(0,_taggedTemplateLiteral2.default)(["\n  display: flex;\n  justify-content: flex-end;\n  padding: 0 0 10px 30px !important;\n  margin-top: -10px;\n  color: #c3c5c8;\n  font-size: 13px;\n"]);_templateObject3=function _templateObject3(){return data;};return data;}function _templateObject2(){var data=(0,_taggedTemplateLiteral2.default)(["\n  vertical-align: text-top;\n  cursor: pointer;\n\n  &:after {\n    margin-left: 2px;\n    content: '\f077';\n    font-family: FontAwesome;\n    font-size: 10px;\n  }\n"],["\n  vertical-align: text-top;\n  cursor: pointer;\n\n  &:after {\n    margin-left: 2px;\n    content: '\\f077';\n    font-family: FontAwesome;\n    font-size: 10px;\n  }\n"]);_templateObject2=function _templateObject2(){return data;};return data;}function _templateObject(){var data=(0,_taggedTemplateLiteral2.default)(["\n  margin-top: -6px;\n  > div {\n    padding-top: 2px;\n    &:not(:first-of-type) {\n      padding-top: 9px;\n      padding-bottom: 2px;\n      &:last-of-type:nth-of-type(even) {\n        padding-bottom: 11px;\n      }\n    }\n  }\n"]);_templateObject=function _templateObject(){return data;};return data;}var Wrapper=_styledComponents.default.div(_templateObject());exports.Wrapper=Wrapper;var Span=_styledComponents.default.span(_templateObject2());exports.Span=Span;var Flex=_styledComponents.default.div(_templateObject3());exports.Flex=Flex;var Div=_styledComponents.default.div(_templateObject4(),function(props){return props.show?'-100px -30px 30px':"-".concat(props.number,"px -30px 103px");},function(props){if(props.anim){return props.show?'margin-top .3s ease-out, margin-bottom .2s ease-out':'margin .3s ease-in';}return'';});exports.Div=Div;

/***/ }),

/***/ 2451:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__(57));var _immutable=__webpack_require__(37);var _strapiHelperPlugin=__webpack_require__(6);var _lodash=__webpack_require__(7);function init(initialState,_ref){var name=_ref.name,type=_ref.type,options=_ref.options;// Create the first filter
var _getFilterType=(0,_strapiHelperPlugin.getFilterType)(type),_getFilterType2=(0,_slicedToArray2.default)(_getFilterType,1),filter=_getFilterType2[0];var value='';if(type==='boolean'){value='true';}else if(type==='number'){value=0;}else if(type==='enumeration'){value=(0,_lodash.get)(options,[0],'');}var initialFilter={name:name,filter:filter.value,value:value};return initialState.update('initialData',function(){return(0,_immutable.fromJS)([initialFilter]);}).update('modifiedData',function(){return(0,_immutable.fromJS)([initialFilter]);});}var _default=init;exports.default=_default;

/***/ }),

/***/ 2452:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.initialState=exports.default=void 0;var _toConsumableArray2=_interopRequireDefault(__webpack_require__(58));var _slicedToArray2=_interopRequireDefault(__webpack_require__(57));var _immutable=__webpack_require__(37);var _moment=_interopRequireDefault(__webpack_require__(19));var initialState=(0,_immutable.fromJS)({attributes:{},initialData:[],modifiedData:[]});exports.initialState=initialState;function reducer(state,action){switch(action.type){case'ADD_FILTER':return state.update('modifiedData',function(list){return list.push((0,_immutable.fromJS)(action.filter));});case'ON_CHANGE':{var _action$keys=(0,_slicedToArray2.default)(action.keys,2),index=_action$keys[0],key=_action$keys[1];return state.updateIn(['modifiedData'].concat((0,_toConsumableArray2.default)(action.keys)),function(){if(action.value&&action.value._isAMomentObject===true){return(0,_moment.default)(action.value,'YYYY-MM-DD HH:mm:ss').format();}return action.value;}).updateIn(['modifiedData',index,'value'],function(value){if(key==='name'){var attribute=state.getIn(['attributes',action.value]);var attributeType=attribute.get('type');if(attributeType==='boolean'){return'true';}if(attributeType==='enumeration'){return attribute.getIn(['enum','0'])||'';}return'';}return value;});}case'REMOVE_FILTER':return state.removeIn(['modifiedData',action.index]);case'RESET_FILTERS':return initialState;case'SET_FILTERS':return state.update('attributes',function(){return(0,_immutable.fromJS)(action.attributes);}).update('initialData',function(){return(0,_immutable.fromJS)(action.initialFilters);}).update('modifiedData',function(){return(0,_immutable.fromJS)(action.initialFilters);});default:return state;}}var _default=reducer;exports.default=_default;

/***/ }),

/***/ 2453:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireWildcard=__webpack_require__(12);var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(__webpack_require__(134));var _createClass2=_interopRequireDefault(__webpack_require__(135));var _assertThisInitialized2=_interopRequireDefault(__webpack_require__(48));var _inherits2=_interopRequireDefault(__webpack_require__(136));var _possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(137));var _getPrototypeOf2=_interopRequireDefault(__webpack_require__(138));var _defineProperty2=_interopRequireDefault(__webpack_require__(16));var _react=_interopRequireWildcard(__webpack_require__(0));var _lodash=__webpack_require__(7);var _propTypes=_interopRequireDefault(__webpack_require__(2));var _reactIntl=__webpack_require__(15);var _strapiHelperPlugin=__webpack_require__(6);var _getTrad=_interopRequireDefault(__webpack_require__(2103));function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}var WAIT=400;var Search=/*#__PURE__*/function(_React$Component){(0,_inherits2.default)(Search,_React$Component);var _super=_createSuper(Search);function Search(){var _this;(0,_classCallCheck2.default)(this,Search);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"state",{value:_this.props.initValue});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"timer",null);(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"resetState",function(){return _this.setState({value:''});});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"handleChange",function(_ref){var target=_ref.target;clearTimeout(_this.timer);_this.setState({value:target.value});_this.timer=setTimeout(function(){return _this.triggerChange(target.value);},WAIT);});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"handleClick",function(){_this.setState({value:''});_this.triggerChange('');});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"triggerChange",function(value){return _this.props.changeParams({target:{name:'_q',value:value}});});return _this;}(0,_createClass2.default)(Search,[{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){var _this$props=this.props,model=_this$props.model,value=_this$props.value;if(prevProps.model!==model||!(0,_lodash.isEmpty)(prevProps.value)&&(0,_lodash.isEmpty)(value)){this.resetState();}}},{key:"render",value:function render(){var _this2=this;var model=this.props.model;var value=this.state.value;return/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:(0,_getTrad.default)('components.Search.placeholder')},function(placeholder){return/*#__PURE__*/_react.default.createElement(_strapiHelperPlugin.HeaderSearch,{label:(0,_lodash.upperFirst)(model),onChange:_this2.handleChange,onClear:_this2.handleClick,placeholder:placeholder,value:value});});}}]);return Search;}(_react.default.Component);Search.defaultProps={changeParams:function changeParams(){},model:'',value:''};Search.propTypes={changeParams:_propTypes.default.func,initValue:_propTypes.default.string.isRequired,model:_propTypes.default.string,value:_propTypes.default.string};var _default=(0,_react.memo)(Search);exports.default=_default;

/***/ }),

/***/ 2454:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__(132));var _react=_interopRequireDefault(__webpack_require__(0));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _ListView=_interopRequireDefault(__webpack_require__(2189));function ListViewProvider(_ref){var children=_ref.children,rest=(0,_objectWithoutProperties2.default)(_ref,["children"]);return/*#__PURE__*/_react.default.createElement(_ListView.default.Provider,{value:rest},children);}ListViewProvider.propTypes={children:_propTypes.default.node.isRequired};var _default=ListViewProvider;exports.default=_default;

/***/ }),

/***/ 2455:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3996eea080b78f9e7dc1dd56c6c851c2.svg";

/***/ }),

/***/ 2456:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(0));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _lodash=__webpack_require__(7);var _moment=_interopRequireDefault(__webpack_require__(19));var _strapiHelperPlugin=__webpack_require__(6);var _dateFormats=_interopRequireDefault(__webpack_require__(2191));function Filter(_ref){var changeParams=_ref.changeParams,filter=_ref.filter,filters=_ref.filters,index=_ref.index,name=_ref.name,schema=_ref.schema,value=_ref.value,toggleFilterPickerState=_ref.toggleFilterPickerState,isFilterPickerOpen=_ref.isFilterPickerOpen;var type=(0,_lodash.get)(schema,['attributes',name,'type'],'string');var displayedValue=(0,_lodash.toString)(value);if(type.includes('date')||type.includes('timestamp')){var date=(0,_moment.default)(value,_moment.default.ISO_8601);var format;if(type==='date'||type==='timestamp'){format=_dateFormats.default.date;}else{format=_dateFormats.default.datetime;}displayedValue=_moment.default.parseZone(date).utc().format(format);}var label={name:name,filter:filter,value:displayedValue};return/*#__PURE__*/_react.default.createElement(_strapiHelperPlugin.FilterButton,{onClick:function onClick(){var updatedFilters=filters.slice().filter(function(_,i){return i!==index;});if(isFilterPickerOpen){toggleFilterPickerState();}changeParams({target:{name:'filters',value:updatedFilters}});},label:label,type:type});}Filter.defaultProps={name:'',value:''};Filter.propTypes={changeParams:_propTypes.default.func.isRequired,filter:_propTypes.default.string.isRequired,filters:_propTypes.default.array.isRequired,index:_propTypes.default.number.isRequired,isFilterPickerOpen:_propTypes.default.bool.isRequired,name:_propTypes.default.string,schema:_propTypes.default.object.isRequired,toggleFilterPickerState:_propTypes.default.func.isRequired,value:_propTypes.default.any};var _default=Filter;exports.default=_default;

/***/ }),

/***/ 2457:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);var _interopRequireWildcard=__webpack_require__(12);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(0));var _reactIntl=__webpack_require__(15);var _strapiHelperPlugin=__webpack_require__(6);var _useListView2=_interopRequireDefault(__webpack_require__(2107));var _components=__webpack_require__(2193);function Footer(){var _useListView=(0,_useListView2.default)(),count=_useListView.count,_onChangeParams=_useListView.onChangeParams,_useListView$searchPa=_useListView.searchParams,_limit=_useListView$searchPa._limit,_page=_useListView$searchPa._page;return/*#__PURE__*/_react.default.createElement(_components.FooterWrapper,{className:"row"},/*#__PURE__*/_react.default.createElement("div",{className:"col-6"},/*#__PURE__*/_react.default.createElement(_components.SelectWrapper,null,/*#__PURE__*/_react.default.createElement(_strapiHelperPlugin.InputSelect,{style:{width:'75px',height:'32px',marginTop:'-1px'},name:"_limit",onChange:_onChangeParams,selectOptions:['10','20','50','100'],value:_limit}),/*#__PURE__*/_react.default.createElement(_components.Label,{htmlFor:"_limit"},/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:"components.PageFooter.select"})))),/*#__PURE__*/_react.default.createElement("div",{className:"col-6"},/*#__PURE__*/_react.default.createElement(_strapiHelperPlugin.GlobalPagination,{count:count,onChangeParams:function onChangeParams(_ref){var value=_ref.target.value;_onChangeParams({target:{name:'_page',value:value}});},params:{currentPage:parseInt(_page,10),_limit:parseInt(_limit,10),_page:parseInt(_page,10)}})));}var _default=(0,_react.memo)(Footer);exports.default=_default;

/***/ }),

/***/ 2458:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.getDataSucceeded=getDataSucceeded;exports.onChangeBulk=onChangeBulk;exports.onChangeBulkSelectall=onChangeBulkSelectall;exports.onDeleteDataSucceeded=onDeleteDataSucceeded;exports.onDeleteSeveralDataSucceeded=onDeleteSeveralDataSucceeded;exports.resetProps=resetProps;exports.toggleModalDeleteAll=toggleModalDeleteAll;exports.toggleModalDelete=toggleModalDelete;var _constants=__webpack_require__(2194);function getDataSucceeded(count,data){return{type:_constants.GET_DATA_SUCCEEDED,count:count,data:data};}function onChangeBulk(_ref){var _ref$target=_ref.target,name=_ref$target.name,value=_ref$target.value;return{type:_constants.ON_CHANGE_BULK,name:name,value:value};}function onChangeBulkSelectall(){return{type:_constants.ON_CHANGE_BULK_SELECT_ALL};}function onDeleteDataSucceeded(){return{type:_constants.ON_DELETE_DATA_SUCCEEDED};}function onDeleteSeveralDataSucceeded(){return{type:_constants.ON_DELETE_SEVERAL_DATA_SUCCEEDED};}function resetProps(){return{type:_constants.RESET_PROPS};}function toggleModalDeleteAll(){return{type:_constants.TOGGLE_MODAL_DELETE_ALL};}function toggleModalDelete(){return{type:_constants.TOGGLE_MODAL_DELETE};}

/***/ }),

/***/ 2459:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.listViewDomain=exports.default=void 0;var _reselect=__webpack_require__(72);var _pluginId=_interopRequireDefault(__webpack_require__(119));var _reducer=__webpack_require__(2195);/**
 * Direct selector to the listView state domain
 */var listViewDomain=function listViewDomain(){return function(state){return state.get("".concat(_pluginId.default,"_listView"))||_reducer.initialState;};};/**
 * Other specific selectors
 */ /**
 * Default selector used by listView
 */exports.listViewDomain=listViewDomain;var makeSelectListView=function makeSelectListView(){return(0,_reselect.createSelector)(listViewDomain(),function(substate){return substate.toJS();});};var _default=makeSelectListView;exports.default=_default;

/***/ })

}]);