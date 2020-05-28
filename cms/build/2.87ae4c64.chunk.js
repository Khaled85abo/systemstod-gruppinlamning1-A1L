(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 2097:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=__webpack_require__(0);var _EditViewDataManager=_interopRequireDefault(__webpack_require__(2156));var useDataManager=function useDataManager(){return(0,_react.useContext)(_EditViewDataManager.default);};var _default=useDataManager;exports.default=_default;

/***/ }),

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

/***/ 2113:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=__webpack_require__(0);var _EditView=_interopRequireDefault(__webpack_require__(2157));var useEditView=function useEditView(){return(0,_react.useContext)(_EditView.default);};var _default=useEditView;exports.default=_default;

/***/ }),

/***/ 2114:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(0));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _lodash=__webpack_require__(7);var _reactIntl=__webpack_require__(15);var _reactFontawesome=__webpack_require__(41);var _pluginId=_interopRequireDefault(__webpack_require__(119));var _useDataManager2=_interopRequireDefault(__webpack_require__(2097));var _useEditView2=_interopRequireDefault(__webpack_require__(2113));var _ComponentInitializer=_interopRequireDefault(__webpack_require__(2234));var _NonRepeatableComponent=_interopRequireDefault(__webpack_require__(2236));var _RepeatableComponent=_interopRequireDefault(__webpack_require__(2394));var _ComponentIcon=_interopRequireDefault(__webpack_require__(2401));var _Label=_interopRequireDefault(__webpack_require__(2402));var _ResetComponent=_interopRequireDefault(__webpack_require__(2403));var _Wrapper=_interopRequireDefault(__webpack_require__(2404));/* eslint-disable  import/no-cycle */var FieldComponent=function FieldComponent(_ref){var componentFriendlyName=_ref.componentFriendlyName,componentUid=_ref.componentUid,icon=_ref.icon,isFromDynamicZone=_ref.isFromDynamicZone,isRepeatable=_ref.isRepeatable,isNested=_ref.isNested,label=_ref.label,max=_ref.max,min=_ref.min,name=_ref.name;var _useDataManager=(0,_useDataManager2.default)(),modifiedData=_useDataManager.modifiedData,removeComponentFromField=_useDataManager.removeComponentFromField;var _useEditView=(0,_useEditView2.default)(),allLayoutData=_useEditView.allLayoutData;var componentValue=(0,_lodash.get)(modifiedData,name,null);var componentValueLength=(0,_lodash.size)(componentValue);var isInitialized=componentValue!==null||isFromDynamicZone;var showResetComponent=!isRepeatable&&isInitialized&&!isFromDynamicZone;var currentComponentSchema=(0,_lodash.get)(allLayoutData,['components',componentUid],{});var displayedFields=(0,_lodash.get)(currentComponentSchema,['layouts','edit'],[]);return/*#__PURE__*/_react.default.createElement(_Wrapper.default,{className:"col-12",isFromDynamicZone:isFromDynamicZone},isFromDynamicZone&&/*#__PURE__*/_react.default.createElement(_ComponentIcon.default,{title:componentFriendlyName},/*#__PURE__*/_react.default.createElement("div",{className:"component_name"},/*#__PURE__*/_react.default.createElement("div",{className:"component_icon"},/*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon,{icon:icon,title:componentFriendlyName})),/*#__PURE__*/_react.default.createElement("p",null,componentFriendlyName))),/*#__PURE__*/_react.default.createElement(_Label.default,null,label,"\xA0",isRepeatable&&"(".concat(componentValueLength,")")),showResetComponent&&/*#__PURE__*/_react.default.createElement(_ResetComponent.default,{onClick:function onClick(e){e.preventDefault();e.stopPropagation();removeComponentFromField(name,componentUid);}},/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:"".concat(_pluginId.default,".components.reset-entry")}),/*#__PURE__*/_react.default.createElement("div",null)),!isRepeatable&&!isInitialized&&/*#__PURE__*/_react.default.createElement(_ComponentInitializer.default,{componentUid:componentUid,name:name}),!isRepeatable&&isInitialized&&/*#__PURE__*/_react.default.createElement(_NonRepeatableComponent.default,{fields:displayedFields,isFromDynamicZone:isFromDynamicZone,name:name,schema:currentComponentSchema}),isRepeatable&&/*#__PURE__*/_react.default.createElement(_RepeatableComponent.default,{componentValue:componentValue,componentValueLength:componentValueLength,componentUid:componentUid,fields:displayedFields,isFromDynamicZone:isFromDynamicZone,isNested:isNested,max:max,min:min,name:name,schema:currentComponentSchema}));};FieldComponent.defaultProps={componentFriendlyName:null,icon:'smile',isFromDynamicZone:false,isRepeatable:false,isNested:false,max:Infinity,min:-Infinity};FieldComponent.propTypes={componentFriendlyName:_propTypes.default.string,componentUid:_propTypes.default.string.isRequired,icon:_propTypes.default.string,isFromDynamicZone:_propTypes.default.bool,isRepeatable:_propTypes.default.bool,isNested:_propTypes.default.bool,label:_propTypes.default.string.isRequired,max:_propTypes.default.number,min:_propTypes.default.number,name:_propTypes.default.string.isRequired};var _default=FieldComponent;exports.default=_default;

/***/ }),

/***/ 2120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(0));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _reactFontawesome=__webpack_require__(41);var _Wrapper=_interopRequireDefault(__webpack_require__(2121));var DynamicComponentCard=function DynamicComponentCard(_ref){var children=_ref.children,componentUid=_ref.componentUid,friendlyName=_ref.friendlyName,icon=_ref.icon,_onClick=_ref.onClick;return/*#__PURE__*/_react.default.createElement(_Wrapper.default,{onClick:function onClick(e){e.preventDefault();e.stopPropagation();_onClick(componentUid);}},/*#__PURE__*/_react.default.createElement("button",{className:"component-icon",type:"button"},/*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon,{icon:icon})),/*#__PURE__*/_react.default.createElement("div",{className:"component-uid"},/*#__PURE__*/_react.default.createElement("span",null,friendlyName)),children);};DynamicComponentCard.defaultProps={children:null,friendlyName:'',onClick:function onClick(){},icon:'smile'};DynamicComponentCard.propTypes={children:_propTypes.default.node,componentUid:_propTypes.default.string.isRequired,friendlyName:_propTypes.default.string,icon:_propTypes.default.string,onClick:_propTypes.default.func};var _default=DynamicComponentCard;exports.default=_default;

/***/ }),

/***/ 2121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(11));var _styledComponents=_interopRequireDefault(__webpack_require__(3));function _templateObject(){var data=(0,_taggedTemplateLiteral2.default)(["\n  position: relative;\n  height: 90px;\n  width: 139px !important;\n  margin-right: 10px;\n  padding: 18px 10px;\n  background-color: #ffffff;\n  color: #919bae;\n  text-align: center;\n  border-radius: 2px;\n  cursor: pointer;\n  border: 1px solid #ffffff;\n\n  button {\n    outline: 0;\n  }\n\n  .component-uid {\n    width: 119px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    color: #919bae;\n    font-weight: 500;\n    font-size: 13px;\n    line-height: normal;\n  }\n\n  .component-icon {\n    width: 35px;\n    height: 35px;\n    margin-bottom: 5px;\n    line-height: 35px;\n    align-self: center;\n    border-radius: 50%;\n    background-color: #e9eaeb;\n    color: #b4b6ba;\n    padding: 0;\n    i,\n    svg {\n      margin: auto;\n      display: block;\n    }\n  }\n\n  &:hover {\n    background-color: #e6f0fb;\n    color: #007eff;\n    border: 1px solid #aed4fb;\n\n    .component-icon {\n      background-color: #aed4fb;\n      color: #007eff;\n    }\n    .component-uid {\n      color: #007eff;\n    }\n  }\n"]);_templateObject=function _templateObject(){return data;};return data;}var Wrapper=_styledComponents.default.div(_templateObject());var _default=Wrapper;exports.default=_default;

/***/ }),

/***/ 2129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _toConsumableArray2=_interopRequireDefault(__webpack_require__(58));var _extends2=_interopRequireDefault(__webpack_require__(13));var _react=_interopRequireDefault(__webpack_require__(0));var _lodash=__webpack_require__(7);var _pluginId=_interopRequireDefault(__webpack_require__(119));/**
 * Retrieve external links from injected components
 * @type {Array} List of external links to display
 */var getInjectedComponents=function getInjectedComponents(container,area,plugins,currentEnvironment,slug,push){for(var _len=arguments.length,rest=new Array(_len>6?_len-6:0),_key=6;_key<_len;_key++){rest[_key-6]=arguments[_key];}var componentsToInject=Object.keys(plugins).reduce(function(acc,current){// Retrieve injected compos from plugin
var currentPlugin=plugins[current];var injectedComponents=(0,_lodash.get)(currentPlugin,'injectedComponents',[]);var compos=injectedComponents.filter(function(compo){return compo.plugin==="".concat(_pluginId.default,".").concat(container)&&compo.area===area;}).map(function(compo){var Component=compo.component;return/*#__PURE__*/_react.default.createElement(Component,(0,_extends2.default)({viewProps:rest,currentEnvironment:currentEnvironment,getModelName:function getModelName(){return slug;},push:push},compo.props,{key:compo.key}));});return[].concat((0,_toConsumableArray2.default)(acc),(0,_toConsumableArray2.default)(compos));},[]);return componentsToInject;};var _default=getInjectedComponents;exports.default=_default;

/***/ }),

/***/ 2130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireWildcard=__webpack_require__(12);var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _defineProperty2=_interopRequireDefault(__webpack_require__(16));var _toConsumableArray2=_interopRequireDefault(__webpack_require__(58));var _extends2=_interopRequireDefault(__webpack_require__(13));var _react=_interopRequireWildcard(__webpack_require__(0));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _lodash=__webpack_require__(7);var _reactIntl=__webpack_require__(15);var _custom=__webpack_require__(63);var _strapiHelperPlugin=__webpack_require__(6);var _useDataManager2=_interopRequireDefault(__webpack_require__(2097));var _InputJSONWithErrors=_interopRequireDefault(__webpack_require__(2237));var _SelectWrapper=_interopRequireDefault(__webpack_require__(2160));var _WysiwygWithErrors=_interopRequireDefault(__webpack_require__(2255));var _InputUID=_interopRequireDefault(__webpack_require__(2381));function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2.default)(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var getInputType=function getInputType(){var type=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'';switch((0,_lodash.toLower)(type)){case'boolean':return'bool';case'decimal':case'float':case'integer':return'number';case'date':case'datetime':case'time':return type;case'email':return'email';case'enumeration':return'select';case'password':return'password';case'string':return'text';case'text':return'textarea';case'media':case'file':case'files':return'media';case'json':return'json';case'wysiwyg':case'WYSIWYG':case'richtext':return'wysiwyg';case'uid':return'uid';default:return'text';}};function Inputs(_ref){var autoFocus=_ref.autoFocus,keys=_ref.keys,layout=_ref.layout,name=_ref.name,onBlur=_ref.onBlur;var _useStrapi=(0,_strapiHelperPlugin.useStrapi)(),fieldApi=_useStrapi.strapi.fieldApi;var _useDataManager=(0,_useDataManager2.default)(),didCheckErrors=_useDataManager.didCheckErrors,formErrors=_useDataManager.formErrors,modifiedData=_useDataManager.modifiedData,onChange=_useDataManager.onChange;var attribute=(0,_react.useMemo)(function(){return(0,_lodash.get)(layout,['schema','attributes',name],{});},[layout,name]);var metadatas=(0,_react.useMemo)(function(){return(0,_lodash.get)(layout,['metadatas',name,'edit'],{});},[layout,name]);var disabled=(0,_react.useMemo)(function(){return!(0,_lodash.get)(metadatas,'editable',true);},[metadatas]);var type=(0,_react.useMemo)(function(){return(0,_lodash.get)(attribute,'type',null);},[attribute]);var regexpString=(0,_react.useMemo)(function(){return(0,_lodash.get)(attribute,'regex',null);},[attribute]);var value=(0,_lodash.get)(modifiedData,keys,null);var temporaryErrorIdUntilBuffetjsSupportsFormattedMessage='app.utils.defaultMessage';var errorId=(0,_lodash.get)(formErrors,[keys,'id'],temporaryErrorIdUntilBuffetjsSupportsFormattedMessage);var validationsToOmit=['type','model','via','collection','default','plugin','enum','regex'];var validations=(0,_lodash.omit)(attribute,validationsToOmit);if(regexpString){var regexp=new RegExp(regexpString);if(regexp){validations.regex=regexp;}}var description=metadatas.description,visible=metadatas.visible;if(visible===false){return null;}var isRequired=(0,_lodash.get)(validations,['required'],false);if(type==='relation'){return/*#__PURE__*/_react.default.createElement("div",{key:keys},/*#__PURE__*/_react.default.createElement(_SelectWrapper.default,(0,_extends2.default)({},metadatas,{name:keys,plugin:attribute.plugin,relationType:attribute.relationType,targetModel:attribute.targetModel,value:(0,_lodash.get)(modifiedData,keys)})));}var inputValue=value;// Fix for input file multipe
if(type==='media'&&!value){inputValue=[];}var step;if(type==='float'||type==='decimal'){step='any';}else if(type==='time'||type==='datetime'){step=30;}else{step='1';}var options=(0,_lodash.get)(attribute,'enum',[]).map(function(v){return/*#__PURE__*/_react.default.createElement("option",{key:v,value:v},v);});var enumOptions=[/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:"components.InputSelect.option.placeholder",key:"__enum_option_null"},function(msg){return/*#__PURE__*/_react.default.createElement("option",{disabled:isRequired,hidden:isRequired,value:""},msg);})].concat((0,_toConsumableArray2.default)(options));return/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:errorId},function(error){return/*#__PURE__*/_react.default.createElement(_custom.Inputs,(0,_extends2.default)({},metadatas,{autoComplete:"new-password",autoFocus:autoFocus,didCheckErrors:didCheckErrors,disabled:disabled,error:(0,_lodash.isEmpty)(error)||errorId===temporaryErrorIdUntilBuffetjsSupportsFormattedMessage?null:error,inputDescription:description,description:description,contentTypeUID:layout.uid,customInputs:_objectSpread({json:_InputJSONWithErrors.default,wysiwyg:_WysiwygWithErrors.default,uid:_InputUID.default},fieldApi.getFields()),multiple:(0,_lodash.get)(attribute,'multiple',false),attribute:attribute,name:keys,onBlur:onBlur,onChange:onChange,options:enumOptions,step:step,type:getInputType(type),validations:validations,value:inputValue,withDefaultValue:false}));});}Inputs.defaultProps={autoFocus:false,onBlur:null};Inputs.propTypes={autoFocus:_propTypes.default.bool,keys:_propTypes.default.string.isRequired,layout:_propTypes.default.object.isRequired,name:_propTypes.default.string.isRequired,onBlur:_propTypes.default.func,onChange:_propTypes.default.func.isRequired};var _default=(0,_react.memo)(Inputs);exports.default=_default;

/***/ }),

/***/ 2144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=__webpack_require__(0);const WysiwygContext=(0,_react.createContext)();var _default=WysiwygContext;exports.default=_default;

/***/ }),

/***/ 2145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.DEFAULT_INDENTATION=exports.CONTROLS=exports.SELECT_OPTIONS=void 0;const SELECT_OPTIONS=[{id:'components.Wysiwyg.selectOptions.title',value:''},{id:'components.Wysiwyg.selectOptions.H1',value:'#'},{id:'components.Wysiwyg.selectOptions.H2',value:'##'},{id:'components.Wysiwyg.selectOptions.H3',value:'###'},{id:'components.Wysiwyg.selectOptions.H4',value:'####'},{id:'components.Wysiwyg.selectOptions.H5',value:'#####'},{id:'components.Wysiwyg.selectOptions.H6',value:'######'}];exports.SELECT_OPTIONS=SELECT_OPTIONS;const CONTROLS=[[{label:'B',style:'BOLD',className:'bold',hideLabel:true,handler:'addContent',text:'**textToReplace**'},{label:'I',style:'ITALIC',className:'italic',hideLabel:true,handler:'addContent',text:'*textToReplace*'},{label:'U',style:'UNDERLINE',className:'underline',hideLabel:true,handler:'addContent',text:'__textToReplace__'},{label:'S',style:'STRIKED',className:'striked',hideLabel:true,handler:'addContent',text:'~~textToReplace~~'},{label:'UL',style:'unordered-list-item',className:'ul',hideLabel:true,handler:'addUlBlock',text:'- textToReplace'},{label:'OL',style:'ordered-list-item',className:'ol',hideLabel:true,handler:'addOlBlock',text:'1. textToReplace'}],[{label:'<>',style:'CODE',className:'code',hideLabel:true,handler:'addSimpleBlockWithSelection',text:'```textToReplace```'},{label:'img',style:'IMG',className:'img',hideLabel:true,handler:'handleOpenMediaLibrary',text:'![text](textToReplace)'},{label:'Link',style:'LINK',className:'link',hideLabel:true,handler:'addContent',text:'[text](textToReplace)'},{label:'quotes',style:'BLOCKQUOTE',className:'quote',hideLabel:true,handler:'addSimpleBlockWithSelection',text:'> textToReplace'}]];exports.CONTROLS=CONTROLS;const DEFAULT_INDENTATION='  ';exports.DEFAULT_INDENTATION=DEFAULT_INDENTATION;

/***/ }),

/***/ 2155:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireWildcard=__webpack_require__(12);var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=exports.EditView=void 0;var _extends2=_interopRequireDefault(__webpack_require__(13));var _slicedToArray2=_interopRequireDefault(__webpack_require__(57));var _react=_interopRequireWildcard(__webpack_require__(0));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _lodash=__webpack_require__(7);var _reactRouterDom=__webpack_require__(35);var _strapiHelperPlugin=__webpack_require__(6);var _pluginId=_interopRequireDefault(__webpack_require__(119));var _Container=_interopRequireDefault(__webpack_require__(2099));var _DynamicZone=_interopRequireDefault(__webpack_require__(2233));var _FormWrapper=_interopRequireDefault(__webpack_require__(2412));var _FieldComponent=_interopRequireDefault(__webpack_require__(2114));var _Inputs=_interopRequireDefault(__webpack_require__(2130));var _SelectWrapper=_interopRequireDefault(__webpack_require__(2160));var _getComponents=_interopRequireDefault(__webpack_require__(2129));var _EditViewDataManagerProvider=_interopRequireDefault(__webpack_require__(2413));var _EditViewProvider=_interopRequireDefault(__webpack_require__(2422));var _Header=_interopRequireDefault(__webpack_require__(2423));var _createAttributesLayout=_interopRequireDefault(__webpack_require__(2424));var _components=__webpack_require__(2425);var _init=_interopRequireDefault(__webpack_require__(2426));var _reducer=_interopRequireWildcard(__webpack_require__(2427));/* eslint-disable  react/no-array-index-key */var EditView=function EditView(_ref){var components=_ref.components,currentEnvironment=_ref.currentEnvironment,layouts=_ref.layouts,plugins=_ref.plugins,slug=_ref.slug;var formatLayoutRef=(0,_react.useRef)();formatLayoutRef.current=_createAttributesLayout.default;// Retrieve push to programmatically navigate between views
var _useHistory=(0,_reactRouterDom.useHistory)(),push=_useHistory.push;// Retrieve the search and the pathname
var _useLocation=(0,_reactRouterDom.useLocation)(),search=_useLocation.search,pathname=_useLocation.pathname;var _useRouteMatch=(0,_reactRouterDom.useRouteMatch)('/plugins/content-manager/:contentType'),contentType=_useRouteMatch.params.contentType;var isSingleType=contentType==='singleType';var _useReducer=(0,_react.useReducer)(_reducer.default,_reducer.initialState,function(){return(0,_init.default)(_reducer.initialState);}),_useReducer2=(0,_slicedToArray2.default)(_useReducer,2),reducerState=_useReducer2[0],dispatch=_useReducer2[1];var allLayoutData=(0,_react.useMemo)(function(){return(0,_lodash.get)(layouts,[slug],{});},[layouts,slug]);var currentContentTypeLayoutData=(0,_react.useMemo)(function(){return(0,_lodash.get)(allLayoutData,['contentType'],{});},[allLayoutData]);var currentContentTypeLayout=(0,_react.useMemo)(function(){return(0,_lodash.get)(currentContentTypeLayoutData,['layouts','edit'],[]);},[currentContentTypeLayoutData]);var currentContentTypeLayoutRelations=(0,_react.useMemo)(function(){return(0,_lodash.get)(currentContentTypeLayoutData,['layouts','editRelations'],[]);},[currentContentTypeLayoutData]);var currentContentTypeSchema=(0,_react.useMemo)(function(){return(0,_lodash.get)(currentContentTypeLayoutData,['schema'],{});},[currentContentTypeLayoutData]);var getFieldMetas=(0,_react.useCallback)(function(fieldName){return(0,_lodash.get)(currentContentTypeLayoutData,['metadatas',fieldName,'edit'],{});},[currentContentTypeLayoutData]);var getField=(0,_react.useCallback)(function(fieldName){return(0,_lodash.get)(currentContentTypeSchema,['attributes',fieldName],{});},[currentContentTypeSchema]);var getFieldType=(0,_react.useCallback)(function(fieldName){return(0,_lodash.get)(getField(fieldName),['type'],'');},[getField]);var getFieldComponentUid=(0,_react.useCallback)(function(fieldName){return(0,_lodash.get)(getField(fieldName),['component'],'');},[getField]);// Check if a block is a dynamic zone
var isDynamicZone=(0,_react.useCallback)(function(block){return block.every(function(subBlock){return subBlock.every(function(obj){return getFieldType(obj.name)==='dynamiczone';});});},[getFieldType]);(0,_react.useEffect)(function(){// Force state to be cleared when navigation from one entry to another
dispatch({type:'RESET_PROPS'});dispatch({type:'SET_LAYOUT_DATA',formattedContentTypeLayout:formatLayoutRef.current(currentContentTypeLayout,currentContentTypeSchema.attributes)});},[currentContentTypeLayout,currentContentTypeSchema.attributes]);var _reducerState$toJS=reducerState.toJS(),formattedContentTypeLayout=_reducerState$toJS.formattedContentTypeLayout,isDraggingComponent=_reducerState$toJS.isDraggingComponent;// We can't use the getQueryParameters helper here because the search
// can contain 'redirectUrl' several times since we can navigate between documents
var redirectURL=search.split('redirectUrl=').filter(function(_,index){return index!==0;}).join('redirectUrl=');var redirectToPreviousPage=function redirectToPreviousPage(){return push(redirectURL);};return/*#__PURE__*/_react.default.createElement(_EditViewProvider.default,{allLayoutData:allLayoutData,components:components,layout:currentContentTypeLayoutData,isDraggingComponent:isDraggingComponent,setIsDraggingComponent:function setIsDraggingComponent(){dispatch({type:'SET_IS_DRAGGING_COMPONENT'});},unsetIsDraggingComponent:function unsetIsDraggingComponent(){dispatch({type:'UNSET_IS_DRAGGING_COMPONENT'});}},/*#__PURE__*/_react.default.createElement(_EditViewDataManagerProvider.default,{allLayoutData:allLayoutData,redirectToPreviousPage:redirectToPreviousPage,slug:slug},/*#__PURE__*/_react.default.createElement(_strapiHelperPlugin.BackHeader,{onClick:redirectToPreviousPage}),/*#__PURE__*/_react.default.createElement(_Container.default,{className:"container-fluid"},/*#__PURE__*/_react.default.createElement(_Header.default,null),/*#__PURE__*/_react.default.createElement("div",{className:"row",style:{paddingTop:3}},/*#__PURE__*/_react.default.createElement("div",{className:"col-md-12 col-lg-9",style:{marginBottom:13}},formattedContentTypeLayout.map(function(block,blockIndex){if(isDynamicZone(block)){var name=block[0][0].name;var _getField=getField(name),max=_getField.max,min=_getField.min;return/*#__PURE__*/_react.default.createElement(_DynamicZone.default,{key:blockIndex,name:name,max:max,min:min});}return/*#__PURE__*/_react.default.createElement(_FormWrapper.default,{key:blockIndex},block.map(function(fieldsBlock,fieldsBlockIndex){return/*#__PURE__*/_react.default.createElement("div",{className:"row",key:fieldsBlockIndex},fieldsBlock.map(function(_ref2,fieldIndex){var name=_ref2.name,size=_ref2.size;var isComponent=getFieldType(name)==='component';if(isComponent){var componentUid=getFieldComponentUid(name);var isRepeatable=(0,_lodash.get)(getField(name),'repeatable',false);var _getField2=getField(name),_max=_getField2.max,_min=_getField2.min;var label=(0,_lodash.get)(getFieldMetas(name),'label',componentUid);return/*#__PURE__*/_react.default.createElement(_FieldComponent.default,{key:componentUid,componentUid:componentUid,isRepeatable:isRepeatable,label:label,max:_max,min:_min,name:name});}return/*#__PURE__*/_react.default.createElement("div",{className:"col-".concat(size),key:name},/*#__PURE__*/_react.default.createElement(_Inputs.default,{autoFocus:blockIndex===0&&fieldsBlockIndex===0&&fieldIndex===0,keys:name,layout:currentContentTypeLayoutData,name:name,onChange:function onChange(){}}));}));}));})),/*#__PURE__*/_react.default.createElement("div",{className:"col-md-12 col-lg-3"},currentContentTypeLayoutRelations.length>0&&/*#__PURE__*/_react.default.createElement(_components.SubWrapper,{style:{padding:'0 20px 1px',marginBottom:'25px'}},/*#__PURE__*/_react.default.createElement("div",{style:{paddingTop:'22px'}},currentContentTypeLayoutRelations.map(function(relationName){var relation=(0,_lodash.get)(currentContentTypeLayoutData,['schema','attributes',relationName],{});var relationMetas=(0,_lodash.get)(currentContentTypeLayoutData,['metadatas',relationName,'edit'],{});return/*#__PURE__*/_react.default.createElement(_SelectWrapper.default,(0,_extends2.default)({},relation,relationMetas,{key:relationName,name:relationName,relationsType:relation.relationType}));}))),/*#__PURE__*/_react.default.createElement(_components.LinkWrapper,null,/*#__PURE__*/_react.default.createElement("ul",null,/*#__PURE__*/_react.default.createElement(_strapiHelperPlugin.LiLink,{message:{id:'app.links.configure-view'},icon:"layout",key:"".concat(_pluginId.default,".link"),url:"".concat(isSingleType?"".concat(pathname,"/"):'',"ctm-configurations/edit-settings/content-types"),onClick:function onClick(){// emitEvent('willEditContentTypeLayoutFromEditView');
}}),(0,_getComponents.default)('editView','right.links',plugins,currentEnvironment,slug))))))));};exports.EditView=EditView;EditView.defaultProps={currentEnvironment:'production',emitEvent:function emitEvent(){},plugins:{}};EditView.propTypes={currentEnvironment:_propTypes.default.string,components:_propTypes.default.array.isRequired,emitEvent:_propTypes.default.func,layouts:_propTypes.default.object.isRequired,slug:_propTypes.default.string.isRequired,plugins:_propTypes.default.object};var _default=(0,_react.memo)(EditView);exports.default=_default;

/***/ }),

/***/ 2156:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=__webpack_require__(0);var EditViewDataManagerContext=(0,_react.createContext)();var _default=EditViewDataManagerContext;exports.default=_default;

/***/ }),

/***/ 2157:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=__webpack_require__(0);var EditViewContext=(0,_react.createContext)();var _default=EditViewContext;exports.default=_default;

/***/ }),

/***/ 2158:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__(3));const NonRepeatableWrapper=_styledComponents.default.div`
  margin: 0 !important;
  padding: 0 20px !important;

  ${({isEmpty,isFromDynamicZone})=>{if(isEmpty){return`
        position: relative;
        height: 108px;
        margin-bottom: 21px !important;
        background-color: #fafafb;
        text-align: center;
        cursor: pointer;
        border-radius: 2px;

        > button {
          position: absolute;
          top: 30px;
          left: calc(50% - 18px);
          height: 36px;
          width: 36px;
          line-height: 38px;
          border-radius: 50%;
          background-color: #f3f4f4;
          cursor: pointer;
        }
        border: 1px solid transparent;

        &:hover {
          border: 1px solid #aed4fb;
          background-color: #e6f0fb;
          > button {
            :before,
            :after {
              background-color: #007eff;
            }
            background-color: #aed4fb;
          }

          > p {
            color: #007eff;
          }
        }
      `;}if(isFromDynamicZone){return`
        background-color: #fff;
        padding: 0 10px !important;
      `;}return`
      padding-top: 25px !important;
      background-color: #f7f8f8;
      margin-bottom: 18px !important;
    `;}}
`;var _default=NonRepeatableWrapper;exports.default=_default;

/***/ }),

/***/ 2159:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(11));var _styledComponents=_interopRequireDefault(__webpack_require__(3));function _templateObject(){var data=(0,_taggedTemplateLiteral2.default)(["\n  position: relative;\n  height: 36px;\n  width: 36px;\n  background-color: #f3f4f4;\n  border-radius: 50%;\n  text-align: center;\n\n  :focus {\n    outline: 0;\n  }\n\n  :before {\n    ","\n  }\n  :after {\n    ","\n  }\n\n  :before,\n  :after {\n    background-color: #b4b6ba;\n  }\n"]);_templateObject=function _templateObject(){return data;};return data;}var beforeStyle="\n  content: ' ';\n  position: absolute;\n  display: block;\n  width: 14px;\n  height: 2px;\n  left: 11px;\n  top: 17px;\n  bottom: 10px;\n  z-index: 9;\n";var afterStyle="\n  content: ' ';\n  position: absolute;\n  display: block;\n  height: 14px;\n  width: 2px;\n  left: 17px;\n  top: 11px;\n  right: 10px;\n  z-index: 9;\n";var Button=_styledComponents.default.button(_templateObject(),beforeStyle,afterStyle);var _default=Button;exports.default=_default;

/***/ }),

/***/ 2160:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireWildcard=__webpack_require__(12);var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _regenerator=_interopRequireDefault(__webpack_require__(85));var _defineProperty2=_interopRequireDefault(__webpack_require__(16));var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__(132));var _asyncToGenerator2=_interopRequireDefault(__webpack_require__(108));var _slicedToArray2=_interopRequireDefault(__webpack_require__(57));var _react=_interopRequireWildcard(__webpack_require__(0));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _reactIntl=__webpack_require__(15);var _reactRouterDom=__webpack_require__(35);var _lodash=__webpack_require__(7);var _strapiHelperPlugin=__webpack_require__(6);var _pluginId=_interopRequireDefault(__webpack_require__(119));var _useDataManager2=_interopRequireDefault(__webpack_require__(2097));var _useEditView2=_interopRequireDefault(__webpack_require__(2113));var _SelectOne=_interopRequireDefault(__webpack_require__(2251));var _SelectMany=_interopRequireDefault(__webpack_require__(2252));var _components=__webpack_require__(2254);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2.default)(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function SelectWrapper(_ref){var description=_ref.description,editable=_ref.editable,label=_ref.label,mainField=_ref.mainField,name=_ref.name,relationType=_ref.relationType,targetModel=_ref.targetModel,placeholder=_ref.placeholder;var _useLocation=(0,_reactRouterDom.useLocation)(),pathname=_useLocation.pathname,search=_useLocation.search;// Disable the input in case of a polymorphic relation
var isMorph=relationType.toLowerCase().includes('morph');var _useDataManager=(0,_useDataManager2.default)(),_addRelation=_useDataManager.addRelation,modifiedData=_useDataManager.modifiedData,moveRelation=_useDataManager.moveRelation,_onChange=_useDataManager.onChange,onRemoveRelation=_useDataManager.onRemoveRelation;var _useEditView=(0,_useEditView2.default)(),isDraggingComponent=_useEditView.isDraggingComponent;var value=(0,_lodash.get)(modifiedData,name,null);var _useState=(0,_react.useState)({_contains:'',_limit:20,_start:0}),_useState2=(0,_slicedToArray2.default)(_useState,2),state=_useState2[0],setState=_useState2[1];var _useState3=(0,_react.useState)([]),_useState4=(0,_slicedToArray2.default)(_useState3,2),options=_useState4[0],setOptions=_useState4[1];var _useState5=(0,_react.useState)(true),_useState6=(0,_slicedToArray2.default)(_useState5,2),isLoading=_useState6[0],setIsLoading=_useState6[1];var abortController=new AbortController();var signal=abortController.signal;var ref=(0,_react.useRef)();var startRef=(0,_react.useRef)();startRef.current=state._start;ref.current=/*#__PURE__*/(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee(){var requestUrl,containsKey,_cloneDeep,_contains,restState,params,data,formattedData;return _regenerator.default.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(!isMorph){_context.next=3;break;}setIsLoading(false);return _context.abrupt("return");case 3:if(isDraggingComponent){_context.next=20;break;}_context.prev=4;requestUrl="/".concat(_pluginId.default,"/explorer/").concat(targetModel);containsKey="".concat(mainField,"_contains");_cloneDeep=(0,_lodash.cloneDeep)(state),_contains=_cloneDeep._contains,restState=(0,_objectWithoutProperties2.default)(_cloneDeep,["_contains"]);params=(0,_lodash.isEmpty)(state._contains)?restState:_objectSpread((0,_defineProperty2.default)({},containsKey,_contains),restState);_context.next=11;return(0,_strapiHelperPlugin.request)(requestUrl,{method:'GET',params:params,signal:signal});case 11:data=_context.sent;formattedData=data.map(function(obj){return{value:obj,label:obj[mainField]};});setOptions(function(prevState){return prevState.concat(formattedData).filter(function(obj,index){var objIndex=prevState.findIndex(function(el){return el.value.id===obj.value.id;});if(objIndex===-1){return true;}return prevState.findIndex(function(el){return el.value.id===obj.value.id;})===index;});});setIsLoading(false);_context.next=20;break;case 17:_context.prev=17;_context.t0=_context["catch"](4);if(_context.t0.code!==20){strapi.notification.error('notification.error');}case 20:case"end":return _context.stop();}}},_callee,null,[[4,17]]);}));(0,_react.useEffect)(function(){if(state._contains!==''){var timer=setTimeout(function(){ref.current();},300);return function(){return clearTimeout(timer);};}ref.current();return function(){abortController.abort();};},[state._contains]);(0,_react.useEffect)(function(){if(state._start!==0){ref.current();}return function(){abortController.abort();};},[state._start]);var onInputChange=function onInputChange(inputValue,_ref3){var action=_ref3.action;if(action==='input-change'){setState(function(prevState){if(prevState._contains===inputValue){return prevState;}return _objectSpread(_objectSpread({},prevState),{},{_contains:inputValue,_start:0});});}return inputValue;};var onMenuScrollToBottom=function onMenuScrollToBottom(){setState(function(prevState){return _objectSpread(_objectSpread({},prevState),{},{_start:prevState._start+20});});};var isSingle=['oneWay','oneToOne','manyToOne','oneToManyMorph','oneToOneMorph'].includes(relationType);var nextSearch="".concat(pathname).concat(search);var to="/plugins/".concat(_pluginId.default,"/collectionType/").concat(targetModel,"/").concat(value?value.id:null,"?redirectUrl=").concat(nextSearch);var link=value===null||value===undefined||['plugins::users-permissions.role','plugins::users-permissions.permission'].includes(targetModel)?null:/*#__PURE__*/_react.default.createElement(_reactRouterDom.Link,{to:to},/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:"content-manager.containers.Edit.seeDetails"}));var Component=isSingle?_SelectOne.default:_SelectMany.default;var associationsLength=(0,_lodash.isArray)(value)?value.length:0;var customStyles={option:function option(provided){return _objectSpread(_objectSpread({},provided),{},{maxWidth:'100% !important',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'});}};return/*#__PURE__*/_react.default.createElement(_components.Wrapper,{className:"form-group"},/*#__PURE__*/_react.default.createElement(_components.Nav,null,/*#__PURE__*/_react.default.createElement("div",null,/*#__PURE__*/_react.default.createElement("label",{htmlFor:name},label,!isSingle&&/*#__PURE__*/_react.default.createElement("span",{style:{fontWeight:400,fontSize:12}},"\xA0(",associationsLength,")")),isSingle&&link),!(0,_lodash.isEmpty)(description)&&/*#__PURE__*/_react.default.createElement("p",{className:"description"},description)),/*#__PURE__*/_react.default.createElement(Component,{addRelation:function addRelation(value){_addRelation({target:{name:name,value:value}});},id:name,isDisabled:!editable||isMorph,isLoading:isLoading,isClearable:true,mainField:mainField,move:moveRelation,name:name,nextSearch:nextSearch,options:options,onChange:function onChange(value){_onChange({target:{name:name,value:value?value.value:value}});},onInputChange:onInputChange,onMenuClose:function onMenuClose(){setState(function(prevState){return _objectSpread(_objectSpread({},prevState),{},{_contains:''});});},onMenuScrollToBottom:onMenuScrollToBottom,onRemove:onRemoveRelation,placeholder:(0,_lodash.isEmpty)(placeholder)?/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:"".concat(_pluginId.default,".containers.Edit.addAnItem")}):placeholder,styles:customStyles,targetModel:targetModel,value:value}),/*#__PURE__*/_react.default.createElement("div",{style:{marginBottom:18}}));}SelectWrapper.defaultProps={editable:true,description:'',label:'',placeholder:''};SelectWrapper.propTypes={editable:_propTypes.default.bool,description:_propTypes.default.string,label:_propTypes.default.string,mainField:_propTypes.default.string.isRequired,name:_propTypes.default.string.isRequired,placeholder:_propTypes.default.string,relationType:_propTypes.default.string.isRequired,targetModel:_propTypes.default.string.isRequired};var _default=(0,_react.memo)(SelectWrapper);exports.default=_default;

/***/ }),

/***/ 2187:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__(13));var _react=_interopRequireDefault(__webpack_require__(0));var _draftJs=__webpack_require__(2115);var _propTypes=_interopRequireDefault(__webpack_require__(2));/**
 *
 * WysiwygEditor
 *
 */class WysiwygEditor extends _react.default.Component{render(){return/*#__PURE__*/_react.default.createElement(_draftJs.Editor,(0,_extends2.default)({},this.props,{ref:this.props.setRef}));}}WysiwygEditor.defaultProps={setRef:()=>{}};WysiwygEditor.propTypes={setRef:_propTypes.default.func};var _default=WysiwygEditor;exports.default=_default;

/***/ }),

/***/ 2233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireWildcard=__webpack_require__(12);var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=exports.DynamicZone=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__(57));var _react=_interopRequireWildcard(__webpack_require__(0));var _lodash=__webpack_require__(7);var _propTypes=_interopRequireDefault(__webpack_require__(2));var _reactIntl=__webpack_require__(15);var _icons=__webpack_require__(86);var _reactFontawesome=__webpack_require__(41);var _pluginId=_interopRequireDefault(__webpack_require__(119));var _useDataManager2=_interopRequireDefault(__webpack_require__(2097));var _useEditView2=_interopRequireDefault(__webpack_require__(2113));var _DynamicComponentCard=_interopRequireDefault(__webpack_require__(2120));var _FieldComponent=_interopRequireDefault(__webpack_require__(2114));var _Button=_interopRequireDefault(__webpack_require__(2405));var _ComponentsPicker=_interopRequireDefault(__webpack_require__(2406));var _ComponentWrapper=_interopRequireDefault(__webpack_require__(2407));var _DynamicZoneWrapper=_interopRequireDefault(__webpack_require__(2408));var _Label=_interopRequireDefault(__webpack_require__(2409));var _RoundCTA=_interopRequireDefault(__webpack_require__(2410));var _Wrapper=_interopRequireDefault(__webpack_require__(2411));/* eslint-disable react/no-array-index-key */var DynamicZone=function DynamicZone(_ref){var max=_ref.max,min=_ref.min,name=_ref.name;var _useState=(0,_react.useState)(false),_useState2=(0,_slicedToArray2.default)(_useState,2),isOpen=_useState2[0],setIsOpen=_useState2[1];var _useDataManager=(0,_useDataManager2.default)(),addComponentToDynamicZone=_useDataManager.addComponentToDynamicZone,formErrors=_useDataManager.formErrors,layout=_useDataManager.layout,modifiedData=_useDataManager.modifiedData,moveComponentUp=_useDataManager.moveComponentUp,moveComponentDown=_useDataManager.moveComponentDown,removeComponentFromDynamicZone=_useDataManager.removeComponentFromDynamicZone;var _useEditView=(0,_useEditView2.default)(),components=_useEditView.components;var getDynamicDisplayedComponents=(0,_react.useCallback)(function(){return(0,_lodash.get)(modifiedData,[name],[]).map(function(data){return data.__component;});},[modifiedData,name]);var getDynamicComponentSchemaData=function getDynamicComponentSchemaData(componentUid){var component=components.find(function(compo){return compo.uid===componentUid;});var schema=component.schema;return schema;};var getDynamicComponentInfos=function getDynamicComponentInfos(componentUid){var _getDynamicComponentS=getDynamicComponentSchemaData(componentUid),_getDynamicComponentS2=_getDynamicComponentS.info,icon=_getDynamicComponentS2.icon,name=_getDynamicComponentS2.name;return{icon:icon,name:name};};var dynamicZoneErrors=Object.keys(formErrors).filter(function(key){return key===name;}).map(function(key){return formErrors[key];});var dynamicZoneAvailableComponents=(0,_lodash.get)(layout,['schema','attributes',name,'components'],[]);var metas=(0,_lodash.get)(layout,['metadatas',name,'edit'],{});var dynamicDisplayedComponentsLength=getDynamicDisplayedComponents().length;var missingComponentNumber=min-dynamicDisplayedComponentsLength;var hasError=dynamicZoneErrors.length>0;var hasMinError=dynamicZoneErrors.length>0&&(0,_lodash.get)(dynamicZoneErrors,[0,'id'],'').includes('min');var hasRequiredError=hasError&&!hasMinError;var hasMaxError=hasError&&(0,_lodash.get)(dynamicZoneErrors,[0,'id'],'')==='components.Input.error.validation.max';return/*#__PURE__*/_react.default.createElement(_DynamicZoneWrapper.default,null,getDynamicDisplayedComponents().length>0&&/*#__PURE__*/_react.default.createElement(_Label.default,null,/*#__PURE__*/_react.default.createElement("p",null,metas.label),/*#__PURE__*/_react.default.createElement("p",null,metas.description)),/*#__PURE__*/_react.default.createElement(_ComponentWrapper.default,null,getDynamicDisplayedComponents().map(function(componentUid,index){var showDownIcon=dynamicDisplayedComponentsLength>0&&index<dynamicDisplayedComponentsLength-1;var showUpIcon=dynamicDisplayedComponentsLength>0&&index>0;return/*#__PURE__*/_react.default.createElement("div",{key:index},/*#__PURE__*/_react.default.createElement("div",{className:"arrow-icons"},showDownIcon&&/*#__PURE__*/_react.default.createElement(_RoundCTA.default,{className:"arrow-btn arrow-down",onClick:function onClick(){return moveComponentDown(name,index);}},/*#__PURE__*/_react.default.createElement(_icons.Arrow,null)),showUpIcon&&/*#__PURE__*/_react.default.createElement(_RoundCTA.default,{className:"arrow-btn arrow-up",onClick:function onClick(){return moveComponentUp(name,index);}},/*#__PURE__*/_react.default.createElement(_icons.Arrow,null))),/*#__PURE__*/_react.default.createElement(_RoundCTA.default,{onClick:function onClick(){return removeComponentFromDynamicZone(name,index);}},/*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon,{icon:"trash"})),/*#__PURE__*/_react.default.createElement(_FieldComponent.default,{componentUid:componentUid,componentFriendlyName:getDynamicComponentInfos(componentUid).name,icon:getDynamicComponentInfos(componentUid).icon,label:"",name:"".concat(name,".").concat(index),isFromDynamicZone:true}));})),/*#__PURE__*/_react.default.createElement(_Wrapper.default,null,/*#__PURE__*/_react.default.createElement(_Button.default,{type:"button",hasError:hasError,className:isOpen&&'isOpen',onClick:function onClick(){if(dynamicDisplayedComponentsLength<max){setIsOpen(function(prev){return!prev;});}else{strapi.notification.info("".concat(_pluginId.default,".components.notification.info.maximum-requirement"));}}}),hasRequiredError&&!isOpen&&!hasMaxError&&/*#__PURE__*/_react.default.createElement("div",{className:"error-label"},"Component is required"),hasMaxError&&!isOpen&&/*#__PURE__*/_react.default.createElement("div",{className:"error-label"},/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:"components.Input.error.validation.max"})),hasMinError&&!isOpen&&/*#__PURE__*/_react.default.createElement("div",{className:"error-label"},/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:"".concat(_pluginId.default,".components.DynamicZone.missing").concat(missingComponentNumber>1?'.plural':'.singular'),values:{count:missingComponentNumber}})),/*#__PURE__*/_react.default.createElement("div",{className:"info"},/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:"".concat(_pluginId.default,".components.DynamicZone.add-compo"),values:{componentName:name}})),/*#__PURE__*/_react.default.createElement(_ComponentsPicker.default,{isOpen:isOpen},/*#__PURE__*/_react.default.createElement("div",null,/*#__PURE__*/_react.default.createElement("p",{className:"componentPickerTitle"},/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:"".concat(_pluginId.default,".components.DynamicZone.pick-compo")})),/*#__PURE__*/_react.default.createElement("div",{className:"componentsList"},dynamicZoneAvailableComponents.map(function(componentUid){var _getDynamicComponentI=getDynamicComponentInfos(componentUid),icon=_getDynamicComponentI.icon,friendlyName=_getDynamicComponentI.name;return/*#__PURE__*/_react.default.createElement(_DynamicComponentCard.default,{key:componentUid,componentUid:componentUid,friendlyName:friendlyName,icon:icon,onClick:function onClick(){setIsOpen(false);var shouldCheckErrors=hasError;addComponentToDynamicZone(name,componentUid,shouldCheckErrors);}});}))))));};exports.DynamicZone=DynamicZone;DynamicZone.defaultProps={max:Infinity,min:-Infinity};DynamicZone.propTypes={max:_propTypes.default.number,min:_propTypes.default.number,name:_propTypes.default.string.isRequired};var _default=DynamicZone;exports.default=_default;

/***/ }),

/***/ 2234:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(0));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _reactIntl=__webpack_require__(15);var _pluginId=_interopRequireDefault(__webpack_require__(119));var _useDataManager=_interopRequireDefault(__webpack_require__(2097));var _NonRepeatableWrapper=_interopRequireDefault(__webpack_require__(2158));var _PlusButton=_interopRequireDefault(__webpack_require__(2159));var _P=_interopRequireDefault(__webpack_require__(2235));const ComponentInitializer=({componentUid,name})=>{const{addNonRepeatableComponentToField}=(0,_useDataManager.default)();return/*#__PURE__*/_react.default.createElement(_NonRepeatableWrapper.default,{isEmpty:true},/*#__PURE__*/_react.default.createElement(_PlusButton.default,{onClick:()=>addNonRepeatableComponentToField(name,componentUid),type:"button"}),/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:`${_pluginId.default}.components.empty-repeatable`},msg=>/*#__PURE__*/_react.default.createElement(_P.default,{style:{paddingTop:78}},msg)));};ComponentInitializer.defaultProps={name:''};ComponentInitializer.propTypes={componentUid:_propTypes.default.string.isRequired,name:_propTypes.default.string};var _default=ComponentInitializer;exports.default=_default;

/***/ }),

/***/ 2235:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__(3));const P=_styledComponents.default.p`
  color: #9ea7b8;
  font-size: 13px;
  font-weight: 500;
`;var _default=P;exports.default=_default;

/***/ }),

/***/ 2236:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(0));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _lodash=__webpack_require__(7);var _NonRepeatableWrapper=_interopRequireDefault(__webpack_require__(2158));var _Inputs=_interopRequireDefault(__webpack_require__(2130));var _FieldComponent=_interopRequireDefault(__webpack_require__(2114));/* eslint-disable react/no-array-index-key */ /* eslint-disable import/no-cycle */const NonRepeatableComponent=({fields,isFromDynamicZone,name,schema})=>{const getField=fieldName=>(0,_lodash.get)(schema,['schema','attributes',fieldName],{});const getMeta=fieldName=>(0,_lodash.get)(schema,['metadatas',fieldName,'edit'],{});return/*#__PURE__*/_react.default.createElement(_NonRepeatableWrapper.default,{isFromDynamicZone:isFromDynamicZone},fields.map((fieldRow,key)=>{return/*#__PURE__*/_react.default.createElement("div",{className:"row",key:key},fieldRow.map(field=>{const currentField=getField(field.name);const isComponent=(0,_lodash.get)(currentField,'type','')==='component';const keys=`${name}.${field.name}`;if(isComponent){const componentUid=currentField.component;const metas=getMeta(field.name);return/*#__PURE__*/_react.default.createElement(_FieldComponent.default,{key:field.name,componentUid:componentUid,isRepeatable:currentField.repeatable,label:metas.label,max:currentField.max,min:currentField.min,name:keys});}return/*#__PURE__*/_react.default.createElement("div",{key:field.name,className:`col-${field.size}`},/*#__PURE__*/_react.default.createElement(_Inputs.default,{keys:keys,layout:schema,name:field.name,onChange:()=>{}}));}));}));};NonRepeatableComponent.defaultProps={fields:[],isFromDynamicZone:false};NonRepeatableComponent.propTypes={fields:_propTypes.default.array,isFromDynamicZone:_propTypes.default.bool,name:_propTypes.default.string.isRequired,schema:_propTypes.default.object.isRequired};var _default=NonRepeatableComponent;exports.default=_default;

/***/ }),

/***/ 2237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__(13));var _defineProperty2=_interopRequireDefault(__webpack_require__(16));var _react=_interopRequireDefault(__webpack_require__(0));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _lodash=__webpack_require__(7);var _classnames=_interopRequireDefault(__webpack_require__(22));var _styles=__webpack_require__(18);var _core=__webpack_require__(25);var _InputJSON=_interopRequireDefault(__webpack_require__(2238));var _Wrapper=_interopRequireDefault(__webpack_require__(2250));/**
 *
 * InputJSONWithErrors
 *
 */class InputJSONWithErrors extends _react.default.Component{constructor(...args){super(...args);(0,_defineProperty2.default)(this,"handleChange",e=>{this.props.onChange(e);});}render(){const{autoFocus,className,deactivateErrorHighlight,disabled,error:inputError,inputClassName,inputDescription,inputStyle,label,name,onBlur,placeholder,resetProps,tabIndex,validations,value,...rest}=this.props;const handleBlur=(0,_lodash.isFunction)(onBlur)?onBlur:this.handleBlur;return/*#__PURE__*/_react.default.createElement(_core.Error,{inputError:inputError,name:name,type:"text",validations:validations},({canCheck,onBlur,error,dispatch})=>{const hasError=error&&error!==null;return/*#__PURE__*/_react.default.createElement(_Wrapper.default,{className:`${(0,_classnames.default)(!(0,_lodash.isEmpty)(className)&&className)} ${hasError?'bordered':''}`},/*#__PURE__*/_react.default.createElement(_styles.Label,{htmlFor:name},label),/*#__PURE__*/_react.default.createElement(_InputJSON.default,(0,_extends2.default)({},rest,{autoFocus:autoFocus,className:inputClassName,disabled:disabled,deactivateErrorHighlight:deactivateErrorHighlight,name:name,onBlur:(0,_lodash.isFunction)(handleBlur)?handleBlur:onBlur,onChange:e=>{if(!canCheck){dispatch({type:'SET_CHECK'});}dispatch({type:'SET_ERROR',error:null});this.handleChange(e);},placeholder:placeholder,resetProps:resetProps,style:inputStyle,tabIndex:tabIndex,value:value})),!hasError&&inputDescription&&/*#__PURE__*/_react.default.createElement(_styles.Description,null,inputDescription),hasError&&/*#__PURE__*/_react.default.createElement(_styles.ErrorMessage,null,error));});}}InputJSONWithErrors.defaultProps={autoFocus:false,className:'',deactivateErrorHighlight:false,didCheckErrors:false,disabled:false,error:null,inputClassName:'',inputDescription:'',inputStyle:{},label:'',labelClassName:'',labelStyle:{},onBlur:false,placeholder:'',resetProps:false,tabIndex:'0',validations:{},value:null};InputJSONWithErrors.propTypes={autoFocus:_propTypes.default.bool,className:_propTypes.default.string,deactivateErrorHighlight:_propTypes.default.bool,didCheckErrors:_propTypes.default.bool,disabled:_propTypes.default.bool,error:_propTypes.default.string,inputClassName:_propTypes.default.string,inputDescription:_propTypes.default.oneOfType([_propTypes.default.string,_propTypes.default.func,_propTypes.default.shape({id:_propTypes.default.string,params:_propTypes.default.object})]),inputStyle:_propTypes.default.object,label:_propTypes.default.oneOfType([_propTypes.default.string,_propTypes.default.func,_propTypes.default.shape({id:_propTypes.default.string,params:_propTypes.default.object})]),labelClassName:_propTypes.default.string,labelStyle:_propTypes.default.object,name:_propTypes.default.string.isRequired,onBlur:_propTypes.default.oneOfType([_propTypes.default.bool,_propTypes.default.func]),onChange:_propTypes.default.func.isRequired,placeholder:_propTypes.default.string,resetProps:_propTypes.default.bool,tabIndex:_propTypes.default.string,validations:_propTypes.default.object,value:_propTypes.default.oneOfType([_propTypes.default.array,_propTypes.default.object,_propTypes.default.bool,_propTypes.default.string,_propTypes.default.number])};var _default=InputJSONWithErrors;exports.default=_default;

/***/ }),

/***/ 2238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _defineProperty2=_interopRequireDefault(__webpack_require__(16));var _react=_interopRequireDefault(__webpack_require__(0));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _codemirror=_interopRequireDefault(__webpack_require__(2104));__webpack_require__(2239);__webpack_require__(2240);__webpack_require__(2241);__webpack_require__(2242);__webpack_require__(2243);__webpack_require__(2244);__webpack_require__(2246);var _lodash=__webpack_require__(7);var _jsonlint=_interopRequireDefault(__webpack_require__(2248));var _components=_interopRequireDefault(__webpack_require__(2249));/**
 *
 * InputJSON
 *
 */const WAIT=600;const stringify=JSON.stringify;const DEFAULT_THEME='3024-night';class InputJSON extends _react.default.Component{constructor(props){super(props);(0,_defineProperty2.default)(this,"timer",null);(0,_defineProperty2.default)(this,"setInitValue",()=>{const{value}=this.props;try{this.setState({hasInitValue:true});if(value===null)return this.codeMirror.setValue('');return this.codeMirror.setValue(stringify(value,null,2));}catch(err){return this.setState({error:true});}});(0,_defineProperty2.default)(this,"setSize",()=>this.codeMirror.setSize('100%','auto'));(0,_defineProperty2.default)(this,"getContentAtLine",line=>this.codeMirror.getLine(line));(0,_defineProperty2.default)(this,"getEditorOption",opt=>this.codeMirror.getOption(opt));(0,_defineProperty2.default)(this,"getValue",()=>this.codeMirror.getValue());(0,_defineProperty2.default)(this,"markSelection",({message})=>{let line=parseInt(message.split(':')[0].split('line ')[1],10)-1;let content=this.getContentAtLine(line);if(content==='{'){line+=1;content=this.getContentAtLine(line);}const chEnd=content.length;const chStart=chEnd-(0,_lodash.trimStart)(content,' ').length;const markedText=this.codeMirror.markText({line,ch:chStart},{line,ch:chEnd},{className:'colored'});this.setState({markedText});});(0,_defineProperty2.default)(this,"handleBlur",({target})=>{const{name,onBlur}=this.props;if(target===undefined){// codemirror catches multiple events
onBlur({target:{name,type:'json',value:this.getValue()}});}});(0,_defineProperty2.default)(this,"handleChange",()=>{const{hasInitValue}=this.state;const{name,onChange}=this.props;let value=this.codeMirror.getValue();if(!hasInitValue){this.setState({hasInitValue:true});// Fix for the input firing on onChange event on mount
return;}if(value===''){value=null;}// Update the parent
onChange({target:{name,value,type:'json'}});// Remove higlight error
if(this.state.markedText){this.state.markedText.clear();this.setState({markedText:null,error:null});}clearTimeout(this.timer);this.timer=setTimeout(()=>this.testJSON(this.codeMirror.getValue()),WAIT);});(0,_defineProperty2.default)(this,"testJSON",value=>{try{_jsonlint.default.parse(value);}catch(err){this.markSelection(err);}});this.editor=_react.default.createRef();this.state={error:false,markedText:null};}componentDidMount(){// Init codemirror component
this.codeMirror=_codemirror.default.fromTextArea(this.editor.current,{autoCloseBrackets:true,lineNumbers:true,matchBrackets:true,mode:'application/json',readOnly:this.props.disabled,smartIndent:true,styleSelectedText:true,tabSize:2,theme:DEFAULT_THEME,fontSize:'13px'});this.codeMirror.on('change',this.handleChange);this.codeMirror.on('blur',this.handleBlur);this.setSize();this.setInitValue();}componentDidUpdate(prevProps){if((0,_lodash.isEmpty)(prevProps.value)&&!(0,_lodash.isEmpty)(this.props.value)&&!this.state.hasInitValue){this.setInitValue();}}render(){if(this.state.error){return/*#__PURE__*/_react.default.createElement("div",null,"error json");}return/*#__PURE__*/_react.default.createElement(_components.default,null,/*#__PURE__*/_react.default.createElement("textarea",{ref:this.editor,autoComplete:"off",id:this.props.name,defaultValue:""}));}}InputJSON.defaultProps={disabled:false,onBlur:()=>{},onChange:()=>{},value:null};InputJSON.propTypes={disabled:_propTypes.default.bool,name:_propTypes.default.string.isRequired,onBlur:_propTypes.default.func,onChange:_propTypes.default.func,value:_propTypes.default.any};var _default=InputJSON;exports.default=_default;

/***/ }),

/***/ 2248:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Jison generated parser */ /* eslint-disable */var jsonlint=function(){var parser={trace:function trace(){},yy:{},symbols_:{"error":2,"JSONString":3,"STRING":4,"JSONNumber":5,"NUMBER":6,"JSONNullLiteral":7,"NULL":8,"JSONBooleanLiteral":9,"TRUE":10,"FALSE":11,"JSONText":12,"JSONValue":13,"EOF":14,"JSONObject":15,"JSONArray":16,"{":17,"}":18,"JSONMemberList":19,"JSONMember":20,":":21,",":22,"[":23,"]":24,"JSONElementList":25,"$accept":0,"$end":1},terminals_:{2:"error",4:"STRING",6:"NUMBER",8:"NULL",10:"TRUE",11:"FALSE",14:"EOF",17:"{",18:"}",21:":",22:",",23:"[",24:"]"},productions_:[0,[3,1],[5,1],[7,1],[9,1],[9,1],[12,2],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[15,2],[15,3],[20,3],[19,1],[19,3],[16,2],[16,3],[25,1],[25,3]],performAction:function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$){var $0=$$.length-1;switch(yystate){case 1:// replace escaped characters with actual character
this.$=yytext.replace(/\\(\\|")/g,"$"+"1").replace(/\\n/g,'\n').replace(/\\r/g,'\r').replace(/\\t/g,'\t').replace(/\\v/g,'\v').replace(/\\f/g,'\f').replace(/\\b/g,'\b');break;case 2:this.$=Number(yytext);break;case 3:this.$=null;break;case 4:this.$=true;break;case 5:this.$=false;break;case 6:return this.$=$$[$0-1];break;case 13:this.$={};break;case 14:this.$=$$[$0-1];break;case 15:this.$=[$$[$0-2],$$[$0]];break;case 16:this.$={};this.$[$$[$0][0]]=$$[$0][1];break;case 17:this.$=$$[$0-2];$$[$0-2][$$[$0][0]]=$$[$0][1];break;case 18:this.$=[];break;case 19:this.$=$$[$0-1];break;case 20:this.$=[$$[$0]];break;case 21:this.$=$$[$0-2];$$[$0-2].push($$[$0]);break;}},table:[{3:5,4:[1,12],5:6,6:[1,13],7:3,8:[1,9],9:4,10:[1,10],11:[1,11],12:1,13:2,15:7,16:8,17:[1,14],23:[1,15]},{1:[3]},{14:[1,16]},{14:[2,7],18:[2,7],22:[2,7],24:[2,7]},{14:[2,8],18:[2,8],22:[2,8],24:[2,8]},{14:[2,9],18:[2,9],22:[2,9],24:[2,9]},{14:[2,10],18:[2,10],22:[2,10],24:[2,10]},{14:[2,11],18:[2,11],22:[2,11],24:[2,11]},{14:[2,12],18:[2,12],22:[2,12],24:[2,12]},{14:[2,3],18:[2,3],22:[2,3],24:[2,3]},{14:[2,4],18:[2,4],22:[2,4],24:[2,4]},{14:[2,5],18:[2,5],22:[2,5],24:[2,5]},{14:[2,1],18:[2,1],21:[2,1],22:[2,1],24:[2,1]},{14:[2,2],18:[2,2],22:[2,2],24:[2,2]},{3:20,4:[1,12],18:[1,17],19:18,20:19},{3:5,4:[1,12],5:6,6:[1,13],7:3,8:[1,9],9:4,10:[1,10],11:[1,11],13:23,15:7,16:8,17:[1,14],23:[1,15],24:[1,21],25:22},{1:[2,6]},{14:[2,13],18:[2,13],22:[2,13],24:[2,13]},{18:[1,24],22:[1,25]},{18:[2,16],22:[2,16]},{21:[1,26]},{14:[2,18],18:[2,18],22:[2,18],24:[2,18]},{22:[1,28],24:[1,27]},{22:[2,20],24:[2,20]},{14:[2,14],18:[2,14],22:[2,14],24:[2,14]},{3:20,4:[1,12],20:29},{3:5,4:[1,12],5:6,6:[1,13],7:3,8:[1,9],9:4,10:[1,10],11:[1,11],13:30,15:7,16:8,17:[1,14],23:[1,15]},{14:[2,19],18:[2,19],22:[2,19],24:[2,19]},{3:5,4:[1,12],5:6,6:[1,13],7:3,8:[1,9],9:4,10:[1,10],11:[1,11],13:31,15:7,16:8,17:[1,14],23:[1,15]},{18:[2,17],22:[2,17]},{18:[2,15],22:[2,15]},{22:[2,21],24:[2,21]}],defaultActions:{16:[2,6]},parseError:function parseError(str,hash){throw new Error(str);},parse:function parse(input){var self=this,stack=[0],vstack=[null],// semantic value stack
lstack=[],// location stack
table=this.table,yytext='',yylineno=0,yyleng=0,recovering=0,TERROR=2,EOF=1;//this.reductionCount = this.shiftCount = 0;
this.lexer.setInput(input);this.lexer.yy=this.yy;this.yy.lexer=this.lexer;if(typeof this.lexer.yylloc=='undefined')this.lexer.yylloc={};var yyloc=this.lexer.yylloc;lstack.push(yyloc);if(typeof this.yy.parseError==='function')this.parseError=this.yy.parseError;function popStack(n){stack.length=stack.length-2*n;vstack.length=vstack.length-n;lstack.length=lstack.length-n;}function lex(){var token;token=self.lexer.lex()||1;// $end = 1
// if token isn't its numeric value, convert
if(typeof token!=='number'){token=self.symbols_[token]||token;}return token;}var symbol,preErrorSymbol,state,action,a,r,yyval={},p,len,newState,expected;while(true){// retreive state number from top of stack
state=stack[stack.length-1];// use default actions if available
if(this.defaultActions[state]){action=this.defaultActions[state];}else{if(symbol==null)symbol=lex();// read action for current state and first input
action=table[state]&&table[state][symbol];}// handle parse error
_handle_error:if(typeof action==='undefined'||!action.length||!action[0]){if(!recovering){// Report error
expected=[];for(p in table[state])if(this.terminals_[p]&&p>2){expected.push("'"+this.terminals_[p]+"'");}var errStr='';if(this.lexer.showPosition){errStr='Parse error on line '+(yylineno+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+expected.join(', ')+", got '"+this.terminals_[symbol]+"'";}else{errStr='Parse error on line '+(yylineno+1)+": Unexpected "+(symbol==1/*EOF*/?"end of input":"'"+(this.terminals_[symbol]||symbol)+"'");}this.parseError(errStr,{text:this.lexer.match,token:this.terminals_[symbol]||symbol,line:this.lexer.yylineno,loc:yyloc,expected:expected});}// just recovered from another error
if(recovering==3){if(symbol==EOF){throw new Error(errStr||'Parsing halted.');}// discard current lookahead and grab another
yyleng=this.lexer.yyleng;yytext=this.lexer.yytext;yylineno=this.lexer.yylineno;yyloc=this.lexer.yylloc;symbol=lex();}// try to recover from error
while(1){// check for error recovery rule in this state
if(TERROR.toString()in table[state]){break;}if(state==0){throw new Error(errStr||'Parsing halted.');}popStack(1);state=stack[stack.length-1];}preErrorSymbol=symbol;// save the lookahead token
symbol=TERROR;// insert generic error symbol as new lookahead
state=stack[stack.length-1];action=table[state]&&table[state][TERROR];recovering=3;// allow 3 real symbols to be shifted before reporting a new error
}// this shouldn't happen, unless resolve defaults are off
if(action[0]instanceof Array&&action.length>1){throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);}switch(action[0]){case 1:// shift
//this.shiftCount++;
stack.push(symbol);vstack.push(this.lexer.yytext);lstack.push(this.lexer.yylloc);stack.push(action[1]);// push state
symbol=null;if(!preErrorSymbol){// normal execution/no error
yyleng=this.lexer.yyleng;yytext=this.lexer.yytext;yylineno=this.lexer.yylineno;yyloc=this.lexer.yylloc;if(recovering>0)recovering--;}else{// error just occurred, resume old lookahead f/ before error
symbol=preErrorSymbol;preErrorSymbol=null;}break;case 2:// reduce
//this.reductionCount++;
len=this.productions_[action[1]][1];// perform semantic action
yyval.$=vstack[vstack.length-len];// default to $$ = $1
// default location, uses first token for firsts, last for lasts
yyval._$={first_line:lstack[lstack.length-(len||1)].first_line,last_line:lstack[lstack.length-1].last_line,first_column:lstack[lstack.length-(len||1)].first_column,last_column:lstack[lstack.length-1].last_column};r=this.performAction.call(yyval,yytext,yyleng,yylineno,this.yy,action[1],vstack,lstack);if(typeof r!=='undefined'){return r;}// pop off stack
if(len){stack=stack.slice(0,-1*len*2);vstack=vstack.slice(0,-1*len);lstack=lstack.slice(0,-1*len);}stack.push(this.productions_[action[1]][0]);// push nonterminal (reduce)
vstack.push(yyval.$);lstack.push(yyval._$);// goto new state = table[STATE][NONTERMINAL]
newState=table[stack[stack.length-2]][stack[stack.length-1]];stack.push(newState);break;case 3:// accept
return true;}}return true;}};/* Jison generated lexer */var lexer=function(){var lexer={EOF:1,parseError:function parseError(str,hash){if(this.yy.parseError){this.yy.parseError(str,hash);}else{throw new Error(str);}},setInput:function(input){this._input=input;this._more=this._less=this.done=false;this.yylineno=this.yyleng=0;this.yytext=this.matched=this.match='';this.conditionStack=['INITIAL'];this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};return this;},input:function(){var ch=this._input[0];this.yytext+=ch;this.yyleng++;this.match+=ch;this.matched+=ch;var lines=ch.match(/\n/);if(lines)this.yylineno++;this._input=this._input.slice(1);return ch;},unput:function(ch){this._input=ch+this._input;return this;},more:function(){this._more=true;return this;},less:function(n){this._input=this.match.slice(n)+this._input;},pastInput:function(){var past=this.matched.substr(0,this.matched.length-this.match.length);return(past.length>20?'...':'')+past.substr(-20).replace(/\n/g,"");},upcomingInput:function(){var next=this.match;if(next.length<20){next+=this._input.substr(0,20-next.length);}return(next.substr(0,20)+(next.length>20?'...':'')).replace(/\n/g,"");},showPosition:function(){var pre=this.pastInput();var c=new Array(pre.length+1).join("-");return pre+this.upcomingInput()+"\n"+c+"^";},next:function(){if(this.done){return this.EOF;}if(!this._input)this.done=true;var token,match,tempMatch,index,col,lines;if(!this._more){this.yytext='';this.match='';}var rules=this._currentRules();for(var i=0;i<rules.length;i++){tempMatch=this._input.match(this.rules[rules[i]]);if(tempMatch&&(!match||tempMatch[0].length>match[0].length)){match=tempMatch;index=i;if(!this.options.flex)break;}}if(match){lines=match[0].match(/\n.*/g);if(lines)this.yylineno+=lines.length;this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:lines?lines[lines.length-1].length-1:this.yylloc.last_column+match[0].length};this.yytext+=match[0];this.match+=match[0];this.yyleng=this.yytext.length;this._more=false;this._input=this._input.slice(match[0].length);this.matched+=match[0];token=this.performAction.call(this,this.yy,this,rules[index],this.conditionStack[this.conditionStack.length-1]);if(this.done&&this._input)this.done=false;if(token)return token;else return;}if(this._input===""){return this.EOF;}else{this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),{text:"",token:null,line:this.yylineno});}},lex:function lex(){var r=this.next();if(typeof r!=='undefined'){return r;}else{return this.lex();}},begin:function begin(condition){this.conditionStack.push(condition);},popState:function popState(){return this.conditionStack.pop();},_currentRules:function _currentRules(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;},topState:function(){return this.conditionStack[this.conditionStack.length-2];},pushState:function begin(condition){this.begin(condition);}};lexer.options={};lexer.performAction=function anonymous(yy,yy_,$avoiding_name_collisions,YY_START){var YYSTATE=YY_START;switch($avoiding_name_collisions){case 0:/* skip whitespace */break;case 1:return 6;break;case 2:yy_.yytext=yy_.yytext.substr(1,yy_.yyleng-2);return 4;break;case 3:return 17;break;case 4:return 18;break;case 5:return 23;break;case 6:return 24;break;case 7:return 22;break;case 8:return 21;break;case 9:return 10;break;case 10:return 11;break;case 11:return 8;break;case 12:return 14;break;case 13:return'INVALID';break;}};lexer.rules=[/^(?:\s+)/,/^(?:(-?([0-9]|[1-9][0-9]+))(\.[0-9]+)?([eE][-+]?[0-9]+)?\b)/,/^(?:"(?:\\[\\"bfnrt/]|\\u[a-fA-F0-9]{4}|[^\\\0-\x09\x0a-\x1f"])*")/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:,)/,/^(?::)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:null\b)/,/^(?:$)/,/^(?:.)/];lexer.conditions={"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],"inclusive":true}};;return lexer;}();parser.lexer=lexer;return parser;}();if(true){exports.parser=jsonlint;exports.parse=function(){return jsonlint.parse.apply(jsonlint,arguments);};exports.main=function commonjsMain(args){if(!args[1]){throw new Error('Usage: '+args[0]+' FILE');}};}

/***/ }),

/***/ 2249:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__(3));const Wrapper=_styledComponents.default.div`
  position: relative;
  margin-bottom: 3px;
  line-height: 18px;

  .CodeMirror {
    font-size: 13px !important;
  }

  > div {
    border-radius: 3px;

    > div:last-of-type {
      min-height: 315px;
      max-height: 635px;
      font-weight: 500;
      font-size: 1.3rem !important;
    }
  }

  .colored {
    background-color: yellow;
    color: black !important;
  }
`;var _default=Wrapper;exports.default=_default;

/***/ }),

/***/ 2250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__(3));const Wrapper=_styledComponents.default.div`
  padding-bottom: 26px;

  label {
    margin-bottom: 1rem;
    line-height: 18px;
    display: block;
  }
  > div {
    border-radius: 4px;
    border: 1px solid #090300;
  }
  &.bordered {
    > div {
      border-color: red;
    }
  }
  > p {
    width 100%;
    padding-top: 14px;
    font-size: 1.2rem;
    line-height: normal;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: -11px;
  }
`;var _default=Wrapper;exports.default=_default;

/***/ }),

/***/ 2251:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);var _interopRequireWildcard=__webpack_require__(12);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(0));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _lodash=__webpack_require__(7);var _reactSelect=_interopRequireDefault(__webpack_require__(168));function SelectOne({mainField,name,isDisabled,isLoading,onChange,onInputChange,onMenuClose,onMenuScrollToBottom,options,placeholder,styles,value}){return/*#__PURE__*/_react.default.createElement(_reactSelect.default,{id:name,isClearable:true,isDisabled:isDisabled,isLoading:isLoading,options:options,onChange:onChange,onInputChange:onInputChange,onMenuClose:onMenuClose,onMenuScrollToBottom:onMenuScrollToBottom,placeholder:placeholder,styles:styles,value:(0,_lodash.isNull)(value)?null:{label:(0,_lodash.get)(value,[mainField],''),value}});}SelectOne.defaultProps={value:null};SelectOne.propTypes={isDisabled:_propTypes.default.bool.isRequired,isLoading:_propTypes.default.bool.isRequired,mainField:_propTypes.default.string.isRequired,name:_propTypes.default.string.isRequired,onChange:_propTypes.default.func.isRequired,onInputChange:_propTypes.default.func.isRequired,onMenuClose:_propTypes.default.func.isRequired,onMenuScrollToBottom:_propTypes.default.func.isRequired,options:_propTypes.default.array.isRequired,placeholder:_propTypes.default.node.isRequired,styles:_propTypes.default.object.isRequired,value:_propTypes.default.object};var _default=(0,_react.memo)(SelectOne);exports.default=_default;

/***/ }),

/***/ 2252:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);var _interopRequireWildcard=__webpack_require__(12);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(0));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _lodash=__webpack_require__(7);var _reactDnd=__webpack_require__(197);var _reactSelect=_interopRequireWildcard(__webpack_require__(168));var _ItemTypes=_interopRequireDefault(__webpack_require__(705));var _components=__webpack_require__(385);var _ListItem=_interopRequireDefault(__webpack_require__(2253));function SelectMany({addRelation,mainField,name,isDisabled,isLoading,move,nextSearch,onInputChange,onMenuClose,onMenuScrollToBottom,onRemove,options,placeholder,styles,targetModel,value}){const[,drop]=(0,_reactDnd.useDrop)({accept:_ItemTypes.default.RELATION});const findRelation=id=>{const relation=value.filter(c=>{return`${c.id}`===`${id}`;})[0];return{relation,index:value.indexOf(relation)};};const moveRelation=(0,_react.useCallback)((id,atIndex)=>{const{index}=findRelation(id);move(index,atIndex,name);},// eslint-disable-next-line react-hooks/exhaustive-deps
[value]);const filterConfig={ignoreCase:true,ignoreAccents:true,trim:false,matchFrom:'any'};return/*#__PURE__*/_react.default.createElement(_react.default.Fragment,null,/*#__PURE__*/_react.default.createElement(_reactSelect.default,{isDisabled:isDisabled,id:name,filterOption:(candidate,input)=>{if(!(0,_lodash.isEmpty)(value)){const isSelected=value.findIndex(item=>item.id===candidate.value.id)!==-1;if(isSelected){return false;}}if(input){return(0,_reactSelect.createFilter)(filterConfig)(candidate,input);}return true;},isLoading:isLoading,isMulti:true,isSearchable:true,options:options,onChange:addRelation,onInputChange:onInputChange,onMenuClose:onMenuClose,onMenuScrollToBottom:onMenuScrollToBottom,placeholder:placeholder,styles:styles,value:[]}),/*#__PURE__*/_react.default.createElement(_components.ListWrapper,{ref:drop},!(0,_lodash.isEmpty)(value)&&/*#__PURE__*/_react.default.createElement("ul",null,value.map((data,index)=>/*#__PURE__*/_react.default.createElement(_ListItem.default,{key:data.id,data:data,findRelation:findRelation,mainField:mainField,moveRelation:moveRelation,nextSearch:nextSearch,onRemove:()=>onRemove(`${name}.${index}`),targetModel:targetModel}))),!(0,_lodash.isEmpty)(value)&&value.length>4&&/*#__PURE__*/_react.default.createElement(_components.ListShadow,null)));}SelectMany.defaultProps={move:()=>{},value:null};SelectMany.propTypes={addRelation:_propTypes.default.func.isRequired,isDisabled:_propTypes.default.bool.isRequired,mainField:_propTypes.default.string.isRequired,move:_propTypes.default.func,name:_propTypes.default.string.isRequired,nextSearch:_propTypes.default.string.isRequired,isLoading:_propTypes.default.bool.isRequired,onInputChange:_propTypes.default.func.isRequired,onMenuClose:_propTypes.default.func.isRequired,onMenuScrollToBottom:_propTypes.default.func.isRequired,onRemove:_propTypes.default.func.isRequired,options:_propTypes.default.array.isRequired,placeholder:_propTypes.default.node.isRequired,styles:_propTypes.default.object.isRequired,targetModel:_propTypes.default.string.isRequired,value:_propTypes.default.array};var _default=(0,_react.memo)(SelectMany);exports.default=_default;

/***/ }),

/***/ 2253:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);var _interopRequireWildcard=__webpack_require__(12);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(0));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _reactDnd=__webpack_require__(197);var _reactDndHtml5Backend=__webpack_require__(283);var _pluginId=_interopRequireDefault(__webpack_require__(119));var _ItemTypes=_interopRequireDefault(__webpack_require__(705));var _components=__webpack_require__(385);var _Relation=_interopRequireDefault(__webpack_require__(714));function ListItem({data,findRelation,mainField,moveRelation,nextSearch,onRemove,targetModel}){const to=`/plugins/${_pluginId.default}/collectionType/${targetModel}/${data.id}?redirectUrl=${nextSearch}`;const originalIndex=findRelation(data.id).index;const[{isDragging},drag,preview]=(0,_reactDnd.useDrag)({item:{type:_ItemTypes.default.RELATION,id:data.id,originalIndex,data,mainField},collect:monitor=>({isDragging:monitor.isDragging()})});const[,drop]=(0,_reactDnd.useDrop)({accept:_ItemTypes.default.RELATION,canDrop:()=>false,hover({id:draggedId}){if(draggedId!==data.id){const{index:overIndex}=findRelation(data.id);moveRelation(draggedId,overIndex);}}});(0,_react.useEffect)(()=>{preview((0,_reactDndHtml5Backend.getEmptyImage)(),{captureDraggingState:true});},[preview]);const opacity=isDragging?0.2:1;return/*#__PURE__*/_react.default.createElement(_components.Li,{ref:node=>drag(drop(node)),style:{opacity}},/*#__PURE__*/_react.default.createElement(_Relation.default,{mainField:mainField,onRemove:onRemove,data:data,to:to}));}ListItem.defaultProps={findRelation:()=>{},moveRelation:()=>{},nextSearch:'',onRemove:()=>{},targetModel:''};ListItem.propTypes={data:_propTypes.default.object.isRequired,findRelation:_propTypes.default.func,mainField:_propTypes.default.string.isRequired,moveRelation:_propTypes.default.func,nextSearch:_propTypes.default.string,onRemove:_propTypes.default.func,targetModel:_propTypes.default.string};var _default=(0,_react.memo)(ListItem);exports.default=_default;

/***/ }),

/***/ 2254:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.Wrapper=exports.Nav=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(11));var _styledComponents=_interopRequireDefault(__webpack_require__(3));function _templateObject2(){var data=(0,_taggedTemplateLiteral2.default)(["\n  > div {\n    display: flex;\n\n    justify-content: space-between;\n\n    a {\n      color: #007eff !important;\n      font-size: 1.3rem;\n\n      &:hover {\n        text-decoration: underline !important;\n        cursor: pointer;\n      }\n    }\n  }\n  .description {\n    color: #9ea7b8;\n    font-family: 'Lato';\n    font-size: 1.2rem;\n    margin-top: -5px;\n    max-width: 100%;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  }\n"]);_templateObject2=function _templateObject2(){return data;};return data;}function _templateObject(){var data=(0,_taggedTemplateLiteral2.default)(["\n  position: relative;\n  margin-bottom: 27px;\n\n  label {\n    width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-size: 1.3rem;\n    font-weight: 500;\n  }\n\n  nav + div {\n    height: 34px;\n    background-color: white;\n    margin-top: 5px;\n    > div {\n      min-height: 34px;\n      height: 100%;\n      border: 1px solid #e3e9f3;\n      border-radius: 3px;\n      box-shadow: 0 1px 1px 0 rgba(104, 118, 142, 0.05);\n      flex-wrap: initial;\n      padding: 0 10px;\n\n      // Arrow\n      &:before {\n        content: '\f0d7';\n        position: absolute;\n        top: 5px;\n        right: 10px;\n        font-family: 'FontAwesome';\n        font-size: 14px;\n        font-weight: 800;\n        color: #aaa;\n      }\n      > div {\n        padding: 0;\n        &:first-of-type {\n          // Placeholder\n          > div span {\n            color: #aaa;\n          }\n        }\n      }\n      div:last-of-type {\n        span {\n          display: none;\n          & + div {\n            display: none;\n          }\n        }\n        svg {\n          width: 15px;\n          margin-right: 6px;\n        }\n      }\n      span {\n        font-size: 13px;\n        line-height: 34px;\n        color: #333740;\n      }\n      :hover {\n        cursor: pointer;\n        border-color: #e3e9f3;\n        &:before {\n          color: #666;\n        }\n      }\n    }\n    span[aria-live='polite'] + div {\n      &:before {\n        transform: rotate(180deg);\n        top: 4px;\n      }\n      & + div {\n        z-index: 2;\n        height: fit-content;\n        padding: 0;\n        margin-top: -2px;\n        border-top-left-radius: 0;\n        border-top-right-radius: 0;\n        &:before {\n          content: '';\n        }\n        div {\n          width: 100%;\n        }\n        > div {\n          max-height: 200px;\n          height: fit-content;\n          div {\n            height: 36px;\n            cursor: pointer;\n          }\n        }\n      }\n    }\n  }\n"],["\n  position: relative;\n  margin-bottom: 27px;\n\n  label {\n    width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-size: 1.3rem;\n    font-weight: 500;\n  }\n\n  nav + div {\n    height: 34px;\n    background-color: white;\n    margin-top: 5px;\n    > div {\n      min-height: 34px;\n      height: 100%;\n      border: 1px solid #e3e9f3;\n      border-radius: 3px;\n      box-shadow: 0 1px 1px 0 rgba(104, 118, 142, 0.05);\n      flex-wrap: initial;\n      padding: 0 10px;\n\n      // Arrow\n      &:before {\n        content: '\\f0d7';\n        position: absolute;\n        top: 5px;\n        right: 10px;\n        font-family: 'FontAwesome';\n        font-size: 14px;\n        font-weight: 800;\n        color: #aaa;\n      }\n      > div {\n        padding: 0;\n        &:first-of-type {\n          // Placeholder\n          > div span {\n            color: #aaa;\n          }\n        }\n      }\n      div:last-of-type {\n        span {\n          display: none;\n          & + div {\n            display: none;\n          }\n        }\n        svg {\n          width: 15px;\n          margin-right: 6px;\n        }\n      }\n      span {\n        font-size: 13px;\n        line-height: 34px;\n        color: #333740;\n      }\n      :hover {\n        cursor: pointer;\n        border-color: #e3e9f3;\n        &:before {\n          color: #666;\n        }\n      }\n    }\n    span[aria-live='polite'] + div {\n      &:before {\n        transform: rotate(180deg);\n        top: 4px;\n      }\n      & + div {\n        z-index: 2;\n        height: fit-content;\n        padding: 0;\n        margin-top: -2px;\n        border-top-left-radius: 0;\n        border-top-right-radius: 0;\n        &:before {\n          content: '';\n        }\n        div {\n          width: 100%;\n        }\n        > div {\n          max-height: 200px;\n          height: fit-content;\n          div {\n            height: 36px;\n            cursor: pointer;\n          }\n        }\n      }\n    }\n  }\n"]);_templateObject=function _templateObject(){return data;};return data;}var Wrapper=_styledComponents.default.div(_templateObject());exports.Wrapper=Wrapper;var Nav=_styledComponents.default.nav(_templateObject2());exports.Nav=Nav;

/***/ }),

/***/ 2255:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__(13));var _react=_interopRequireDefault(__webpack_require__(0));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _lodash=__webpack_require__(7);var _classnames=_interopRequireDefault(__webpack_require__(22));var _styles=__webpack_require__(18);var _core=__webpack_require__(25);var _Wysiwyg=_interopRequireDefault(__webpack_require__(2256));var _Wrapper=_interopRequireDefault(__webpack_require__(2380));/**
 *
 * WysiwygWithErrors
 *
 */ // eslint-disable-next-line react/prefer-stateless-function
class WysiwygWithErrors extends _react.default.Component{render(){const{autoFocus,className,deactivateErrorHighlight,disabled,error:inputError,inputClassName,inputDescription,inputStyle,label,name,onBlur:handleBlur,onChange,placeholder,resetProps,style,tabIndex,validations,value,...rest}=this.props;return/*#__PURE__*/_react.default.createElement(_core.Error,{inputError:inputError,name:name,type:"text",validations:validations},({canCheck,onBlur,error,dispatch})=>{const hasError=error&&error!==null;return/*#__PURE__*/_react.default.createElement(_Wrapper.default,{className:`${(0,_classnames.default)(!(0,_lodash.isEmpty)(className)&&className)} ${hasError?'bordered':''}`,style:style},/*#__PURE__*/_react.default.createElement(_styles.Label,{htmlFor:name},label),/*#__PURE__*/_react.default.createElement(_Wysiwyg.default,(0,_extends2.default)({},rest,{autoFocus:autoFocus,className:inputClassName,disabled:disabled,deactivateErrorHighlight:deactivateErrorHighlight,error:hasError,name:name,onBlur:(0,_lodash.isFunction)(handleBlur)?handleBlur:onBlur,onChange:e=>{if(!canCheck){dispatch({type:'SET_CHECK'});}dispatch({type:'SET_ERROR',error:null});onChange(e);},placeholder:placeholder,resetProps:resetProps,style:inputStyle,tabIndex:tabIndex,value:value})),!hasError&&inputDescription&&/*#__PURE__*/_react.default.createElement(_styles.Description,null,inputDescription),hasError&&/*#__PURE__*/_react.default.createElement(_styles.ErrorMessage,null,error));});}}WysiwygWithErrors.defaultProps={autoFocus:false,className:'',deactivateErrorHighlight:false,didCheckErrors:false,disabled:false,error:null,inputClassName:'',inputDescription:'',inputStyle:{},label:'',onBlur:false,placeholder:'',resetProps:false,style:{},tabIndex:'0',validations:{},value:null};WysiwygWithErrors.propTypes={autoFocus:_propTypes.default.bool,className:_propTypes.default.string,deactivateErrorHighlight:_propTypes.default.bool,didCheckErrors:_propTypes.default.bool,disabled:_propTypes.default.bool,error:_propTypes.default.string,inputClassName:_propTypes.default.string,inputDescription:_propTypes.default.oneOfType([_propTypes.default.string,_propTypes.default.func,_propTypes.default.shape({id:_propTypes.default.string,params:_propTypes.default.object})]),inputStyle:_propTypes.default.object,label:_propTypes.default.oneOfType([_propTypes.default.string,_propTypes.default.func,_propTypes.default.shape({id:_propTypes.default.string,params:_propTypes.default.object})]),name:_propTypes.default.string.isRequired,onBlur:_propTypes.default.oneOfType([_propTypes.default.bool,_propTypes.default.func]),onChange:_propTypes.default.func.isRequired,placeholder:_propTypes.default.string,resetProps:_propTypes.default.bool,style:_propTypes.default.object,tabIndex:_propTypes.default.string,validations:_propTypes.default.object,value:_propTypes.default.string};var _default=WysiwygWithErrors;exports.default=_default;

/***/ }),

/***/ 2256:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _defineProperty2=_interopRequireDefault(__webpack_require__(16));var _react=_interopRequireDefault(__webpack_require__(0));var _draftJs=__webpack_require__(2115);var _propTypes=_interopRequireDefault(__webpack_require__(2));var _lodash=__webpack_require__(7);var _classnames=_interopRequireDefault(__webpack_require__(22));var _WysiwygProvider=_interopRequireDefault(__webpack_require__(2344));var _WysiwygInlineControls=_interopRequireDefault(__webpack_require__(2345));var _WysiwygBottomControls=_interopRequireDefault(__webpack_require__(2359));var _WysiwygEditor=_interopRequireDefault(__webpack_require__(2187));var _MediaLib=_interopRequireDefault(__webpack_require__(2361));var _customSelect=_interopRequireDefault(__webpack_require__(2362));var _previewControl=_interopRequireDefault(__webpack_require__(2365));var _previewWysiwyg=_interopRequireDefault(__webpack_require__(2367));var _toggleMode=_interopRequireDefault(__webpack_require__(2375));var _constants=__webpack_require__(2145);var _helpers=__webpack_require__(2377);var _utils=__webpack_require__(2378);var _EditorWrapper=_interopRequireDefault(__webpack_require__(2379));/**
 *
 * Wysiwyg
 *
 */ /* eslint-disable */class Wysiwyg extends _react.default.Component{constructor(_props){super(_props);(0,_defineProperty2.default)(this,"setInitialValue",props=>{if((0,_lodash.isEmpty)(props.value)){return this.setState({editorState:_draftJs.EditorState.createEmpty()});}const contentState=_draftJs.ContentState.createFromText(props.value);const newEditorState=_draftJs.EditorState.createWithContent(contentState);const editorState=this.state.isFocused?_draftJs.EditorState.moveFocusToEnd(newEditorState):newEditorState;return this.setState({editorState});});(0,_defineProperty2.default)(this,"addContent",(content,style)=>{const selectedText=this.getSelectedText();// Retrieve the associated data for the type to add
const{innerContent,endReplacer,startReplacer}=(0,_helpers.getBlockContent)(style);// Replace the selected text by the markdown command or insert default text
const defaultContent=selectedText===''?(0,_lodash.replace)(content,'textToReplace',innerContent):(0,_lodash.replace)(content,'textToReplace',selectedText);// Get the current cursor position
const cursorPosition=(0,_helpers.getOffSets)(this.getSelection()).start;const textWithEntity=this.modifyBlockContent(defaultContent);// Highlight the text
const{anchorOffset,focusOffset}=(0,_helpers.getDefaultSelectionOffsets)(defaultContent,startReplacer,endReplacer,cursorPosition);// Merge the current selection with the new one
const updatedSelection=this.getSelection().merge({anchorOffset,focusOffset});const newEditorState=_draftJs.EditorState.push(this.getEditorState(),textWithEntity,'insert-character');// Update the parent reducer
this.sendData(newEditorState);// Don't handle selection : the user has selected some text to be changed with the appropriate markdown
if(selectedText!==''){return this.setState({editorState:newEditorState},()=>{this.focus();});}return this.setState({// Highlight the text if the selection wad empty
editorState:_draftJs.EditorState.forceSelection(newEditorState,updatedSelection)});});(0,_defineProperty2.default)(this,"addOlBlock",()=>{// Get all the selected blocks
const selectedBlocksList=(0,_utils.getSelectedBlocksList)(this.getEditorState());let newEditorState=this.getEditorState();// Check if the cursor is NOT at the beginning of a new line
// So we need to move all the next blocks
if((0,_helpers.getOffSets)(this.getSelection()).start!==0){// Retrieve all the blocks after the current position
const nextBlocks=(0,_utils.getNextBlocksList)(newEditorState,this.getSelection().getStartKey());let liNumber=1;// Loop to update each block after the inserted li
nextBlocks.map((block,index)=>{const previousContent=index===0?this.getEditorState().getCurrentContent().getBlockForKey(this.getCurrentAnchorKey()):newEditorState.getCurrentContent().getBlockBefore(block.getKey());// Check if there was an li before the position so we update the entire list bullets
const number=previousContent?parseInt(previousContent.getText().split('.')[0],10):0;liNumber=(0,_lodash.isNaN)(number)?1:number+1;const nextBlockText=index===0?`${liNumber}. `:nextBlocks.get(index-1).getText();// Update the current block
const newBlock=(0,_utils.createNewBlock)(nextBlockText,'block-list',block.getKey());// Update the contentState
const newContentState=this.createNewContentStateFromBlock(newBlock,newEditorState.getCurrentContent());newEditorState=_draftJs.EditorState.push(newEditorState,newContentState);});// Move the cursor to the correct position and add a space after '.'
// 2 for the dot and the space after, we add the number length (10 = offset of 2)
const offset=2+liNumber.toString().length;const updatedSelection=(0,_utils.updateSelection)(this.getSelection(),nextBlocks,offset);return this.setState({editorState:_draftJs.EditorState.acceptSelection(newEditorState,updatedSelection)});}// If the cursor is at the beginning we need to move all the content after the cursor so we don't loose the data
selectedBlocksList.map((block,i)=>{const selectedText=block.getText();const li=selectedText===''?`${i+1}. `:`${i+1}. ${selectedText}`;const newBlock=(0,_utils.createNewBlock)(li,'block-list',block.getKey());const newContentState=this.createNewContentStateFromBlock(newBlock,newEditorState.getCurrentContent());newEditorState=_draftJs.EditorState.push(newEditorState,newContentState);});// Update the parent reducer
this.sendData(newEditorState);return this.setState({editorState:_draftJs.EditorState.moveFocusToEnd(newEditorState)});});(0,_defineProperty2.default)(this,"addUlBlock",()=>{const selectedBlocksList=(0,_utils.getSelectedBlocksList)(this.getEditorState());let newEditorState=this.getEditorState();if((0,_helpers.getOffSets)(this.getSelection()).start!==0){const nextBlocks=(0,_utils.getNextBlocksList)(newEditorState,this.getSelection().getStartKey());nextBlocks.map((block,index)=>{const nextBlockText=index===0?'- ':nextBlocks.get(index-1).getText();const newBlock=(0,_utils.createNewBlock)(nextBlockText,'block-list',block.getKey());const newContentState=this.createNewContentStateFromBlock(newBlock,newEditorState.getCurrentContent());newEditorState=_draftJs.EditorState.push(newEditorState,newContentState);});const updatedSelection=(0,_utils.updateSelection)(this.getSelection(),nextBlocks,2);return this.setState({editorState:_draftJs.EditorState.acceptSelection(newEditorState,updatedSelection)});}selectedBlocksList.map(block=>{const selectedText=block.getText();const li=selectedText===''?'- ':`- ${selectedText}`;const newBlock=(0,_utils.createNewBlock)(li,'block-list',block.getKey());const newContentState=this.createNewContentStateFromBlock(newBlock,newEditorState.getCurrentContent());newEditorState=_draftJs.EditorState.push(newEditorState,newContentState);});this.sendData(newEditorState);return this.setState({editorState:_draftJs.EditorState.moveFocusToEnd(newEditorState)});});(0,_defineProperty2.default)(this,"addBlock",text=>{const nextBlockKey=this.getNextBlockKey(this.getCurrentAnchorKey())||(0,_draftJs.genKey)();const newBlock=(0,_utils.createNewBlock)(text,'header',nextBlockKey);const newContentState=this.createNewContentStateFromBlock(newBlock);const newEditorState=this.createNewEditorState(newContentState,text);return this.setState({editorState:newEditorState},()=>{this.focus();});});(0,_defineProperty2.default)(this,"addLink",({alt,url})=>{const{selection}=this.state;const link=`![${alt}](${url})`;const newBlock=(0,_utils.createNewBlock)(link);const newContentState=this.createNewContentStateFromBlock(newBlock);const anchorOffset=link.length;const focusOffset=link.length;let newEditorState=this.createNewEditorState(newContentState,link);const updatedSelection=(0,_helpers.getOffSets)(selection).start===0?this.getSelection().merge({anchorOffset,focusOffset}):new _draftJs.SelectionState({anchorKey:newBlock.getKey(),anchorOffset,focusOffset,focusKey:newBlock.getKey(),isBackward:false});newEditorState=_draftJs.EditorState.forceSelection(newEditorState,updatedSelection);this.setState({isFocused:true});this.sendData(newEditorState);return this.setState({editorState:newEditorState});});(0,_defineProperty2.default)(this,"addSimpleBlockWithSelection",(content,style)=>{// Retrieve the selected text by the user
const selectedText=this.getSelectedText();const{innerContent,endReplacer,startReplacer}=(0,_helpers.getBlockContent)(style);const defaultContent=selectedText===''?(0,_lodash.replace)(content,'textToReplace',innerContent):(0,_lodash.replace)(content,'textToReplace',selectedText);const newBlock=(0,_utils.createNewBlock)(defaultContent);const newContentState=this.createNewContentStateFromBlock(newBlock);const{anchorOffset,focusOffset}=(0,_helpers.getDefaultSelectionOffsets)(defaultContent,startReplacer,endReplacer);let newEditorState=this.createNewEditorState(newContentState,defaultContent);const updatedSelection=(0,_helpers.getOffSets)(this.getSelection()).start===0?this.getSelection().merge({anchorOffset,focusOffset}):new _draftJs.SelectionState({anchorKey:newBlock.getKey(),anchorOffset,focusOffset,focusKey:newBlock.getKey(),isBackward:false});newEditorState=_draftJs.EditorState.acceptSelection(newEditorState,updatedSelection);return this.setState({editorState:_draftJs.EditorState.forceSelection(newEditorState,newEditorState.getSelection())});});(0,_defineProperty2.default)(this,"createNewEditorState",(newContentState,text)=>{let newEditorState;if((0,_helpers.getOffSets)(this.getSelection()).start!==0){newEditorState=_draftJs.EditorState.push(this.getEditorState(),newContentState);}else{const textWithEntity=this.modifyBlockContent(text);newEditorState=_draftJs.EditorState.push(this.getEditorState(),textWithEntity,'insert-characters');}return newEditorState;});(0,_defineProperty2.default)(this,"createNewBlockMap",(newBlock,contentState)=>contentState.getBlockMap().set(newBlock.key,newBlock));(0,_defineProperty2.default)(this,"createNewContentStateFromBlock",(newBlock,contentState=this.getEditorState().getCurrentContent())=>_draftJs.ContentState.createFromBlockArray(this.createNewBlockMap(newBlock,contentState).toArray()).set('selectionBefore',contentState.getSelectionBefore()).set('selectionAfter',contentState.getSelectionAfter()));(0,_defineProperty2.default)(this,"getCharactersNumber",(editorState=this.getEditorState())=>{const plainText=editorState.getCurrentContent().getPlainText();const spacesNumber=plainText.split(' ').length;return(0,_lodash.words)(plainText).join('').length+spacesNumber-1;});(0,_defineProperty2.default)(this,"getEditorState",()=>this.state.editorState);(0,_defineProperty2.default)(this,"getSelection",()=>this.getEditorState().getSelection());(0,_defineProperty2.default)(this,"getCurrentAnchorKey",()=>this.getSelection().getAnchorKey());(0,_defineProperty2.default)(this,"getCurrentContentBlock",()=>this.getEditorState().getCurrentContent().getBlockForKey(this.getSelection().getAnchorKey()));(0,_defineProperty2.default)(this,"getNextBlockKey",(currentBlockKey,editorState=this.getEditorState())=>editorState.getCurrentContent().getKeyAfter(currentBlockKey));(0,_defineProperty2.default)(this,"getSelectedText",({start,end}=(0,_helpers.getOffSets)(this.getSelection()))=>this.getCurrentContentBlock().getText().slice(start,end));(0,_defineProperty2.default)(this,"handleBlur",()=>{const target={name:this.props.name,type:'textarea',value:this.getEditorState().getCurrentContent().getPlainText()};this.props.onBlur({target});this.blur();});(0,_defineProperty2.default)(this,"handleChangeSelect",({target})=>{this.setState({headerValue:target.value});const selectedText=this.getSelectedText();const title=selectedText===''?`${target.value} `:`${target.value} ${selectedText}`;this.addBlock(title);return this.setState({headerValue:''});});(0,_defineProperty2.default)(this,"handleClickPreview",()=>this.setState({isPreviewMode:!this.state.isPreviewMode}));(0,_defineProperty2.default)(this,"handleKeyCommand",(command,editorState)=>{const newState=_draftJs.RichUtils.handleKeyCommand(editorState,command);if(command==='bold'||command==='italic'||command==='underline'){const{content,style}=(0,_helpers.getKeyCommandData)(command);this.addContent(content,style);return false;}if(newState&&command!=='backspace'){this.onChange(newState);return true;}return false;});(0,_defineProperty2.default)(this,"handleOpenMediaLibrary",()=>{return this.setState({isMediaLibraryOpened:true,isFullscreen:false,selection:this.getSelection()});});(0,_defineProperty2.default)(this,"handleReturn",(e,editorState)=>{const selection=editorState.getSelection();const currentBlock=editorState.getCurrentContent().getBlockForKey(selection.getStartKey());if(currentBlock.getText().split('')[0]==='-'){this.addUlBlock();return true;}if(currentBlock.getText().split('.').length>1&&!(0,_lodash.isNaN)(parseInt(currentBlock.getText().split('.')[0],10))){this.addOlBlock();return true;}return false;});(0,_defineProperty2.default)(this,"mapKeyToEditorCommand",e=>{if(e.keyCode===9/* TAB */){const newEditorState=_draftJs.RichUtils.onTab(e,this.state.editorState,4/* maxDepth */);if(newEditorState!==this.state.editorState){this.onChange(newEditorState);}return;}return(0,_draftJs.getDefaultKeyBinding)(e);});(0,_defineProperty2.default)(this,"modifyBlockContent",(text,contentState=this.getEditorState().getCurrentContent())=>_draftJs.Modifier.replaceText(contentState,this.getSelection(),text));(0,_defineProperty2.default)(this,"onChange",editorState=>{this.setState({editorState});this.sendData(editorState);});(0,_defineProperty2.default)(this,"handleTab",e=>{e.preventDefault();const newEditorState=(0,_utils.onTab)(this.getEditorState());return this.onChange(newEditorState);});(0,_defineProperty2.default)(this,"handleToggle",()=>{this.setState(prevState=>({...prevState,isMediaLibraryOpened:!prevState.isMediaLibraryOpened}));});(0,_defineProperty2.default)(this,"sendData",editorState=>{if(this.getEditorState().getCurrentContent()!==editorState.getCurrentContent()||editorState.getLastChangeType()==='remove-range'){this.props.onChange({target:{value:editorState.getCurrentContent().getPlainText(),name:this.props.name,type:'textarea'}});}else return;});(0,_defineProperty2.default)(this,"toggleFullScreen",e=>{e.preventDefault();this.setState({isFullscreen:!this.state.isFullscreen,isPreviewMode:false});});this.state={editorState:_draftJs.EditorState.createEmpty(),isFocused:false,isFullscreen:false,isMediaLibraryOpened:false,isPreviewMode:false,headerValue:'',selection:null};this.focus=()=>{this.setState({isFocused:true});return this.domEditor.focus();};this.blur=()=>{this.setState({isFocused:false});return this.domEditor.blur();};}componentDidMount(){if(this.props.autoFocus){this.focus();}if(!(0,_lodash.isEmpty)(this.props.value)){this.setInitialValue(this.props);}}shouldComponentUpdate(nextProps,nextState){if(nextProps.value!==this.props.value&&!this.state.isFocused){return true;}if(nextState.editorState!==this.state.editorState){return true;}if(nextProps.resetProps!==this.props.resetProps){return true;}if(nextState.isFocused!==this.state.isFocused){return true;}if(nextState.isFullscreen!==this.state.isFullscreen){return true;}if(nextState.isPreviewMode!==this.state.isPreviewMode){return true;}if(nextState.headerValue!==this.state.headerValue){return true;}if(nextProps.error!==this.props.error){return true;}if(nextState.isMediaLibraryOpened!==this.state.isMediaLibraryOpened){return true;}return false;}componentDidUpdate(prevProps){// Handle resetProps
if(prevProps.resetProps!==this.props.resetProps){this.setInitialValue(this.props);}// Update the content when used in a dynamiczone
if(prevProps.value!==this.props.value&&!this.state.isFocused){this.setInitialValue(this.props);}}/**
   * Init the editor with data from
   * @param {[type]} props [description]
   */render(){const{editorState,isMediaLibraryOpened,isPreviewMode,isFullscreen}=this.state;const editorStyle=isFullscreen?{marginTop:'0'}:this.props.style;return/*#__PURE__*/_react.default.createElement(_WysiwygProvider.default,{handleChangeSelect:this.handleChangeSelect,headerValue:this.state.headerValue,html:this.props.value,isPreviewMode:this.state.isPreviewMode,isFullscreen:this.state.isFullscreen,placeholder:this.props.placeholder},/*#__PURE__*/_react.default.createElement(_EditorWrapper.default,{isFullscreen:isFullscreen},/*#__PURE__*/_react.default.createElement("div",{className:(0,_classnames.default)('editorWrapper',!this.props.deactivateErrorHighlight&&this.props.error&&'editorError',!(0,_lodash.isEmpty)(this.props.className)&&this.props.className),onClick:e=>{if(isFullscreen){e.preventDefault();e.stopPropagation();}},style:editorStyle},/*#__PURE__*/_react.default.createElement("div",{className:"controlsContainer"},/*#__PURE__*/_react.default.createElement(_customSelect.default,null),_constants.CONTROLS.map((value,key)=>/*#__PURE__*/_react.default.createElement(_WysiwygInlineControls.default,{key:key,buttons:value,disabled:isPreviewMode,editorState:editorState,handlers:{addContent:this.addContent,addOlBlock:this.addOlBlock,addSimpleBlockWithSelection:this.addSimpleBlockWithSelection,addUlBlock:this.addUlBlock,handleOpenMediaLibrary:this.handleOpenMediaLibrary},onToggle:this.toggleInlineStyle,onToggleBlock:this.toggleBlockType})),!isFullscreen?/*#__PURE__*/_react.default.createElement(_toggleMode.default,{isPreviewMode:isPreviewMode,onClick:this.handleClickPreview}):/*#__PURE__*/_react.default.createElement("div",{style:{marginRight:'10px'}})),isPreviewMode?/*#__PURE__*/_react.default.createElement(_previewWysiwyg.default,{data:this.props.value}):/*#__PURE__*/_react.default.createElement("div",{className:(0,_classnames.default)('editor',isFullscreen&&'editorFullScreen'),onClick:this.focus},/*#__PURE__*/_react.default.createElement(_WysiwygEditor.default,{blockStyleFn:_helpers.getBlockStyle,editorState:editorState,handleKeyCommand:this.handleKeyCommand,handleReturn:this.handleReturn,keyBindingFn:this.mapKeyToEditorCommand,onBlur:this.handleBlur,onChange:this.onChange,onTab:this.handleTab,placeholder:this.props.placeholder,setRef:editor=>this.domEditor=editor,stripPastedStyles:true,tabIndex:this.props.tabIndex}),/*#__PURE__*/_react.default.createElement("input",{className:"editorInput",tabIndex:"-1"})),!isFullscreen&&/*#__PURE__*/_react.default.createElement(_WysiwygBottomControls.default,{isPreviewMode:isPreviewMode,onClick:this.toggleFullScreen,onChange:this.handleDrop})),isFullscreen&&/*#__PURE__*/_react.default.createElement("div",{className:(0,_classnames.default)('editorWrapper'),onClick:e=>{e.preventDefault();e.stopPropagation();},style:{marginTop:'0'}},/*#__PURE__*/_react.default.createElement(_previewControl.default,{onClick:this.toggleFullScreen,characters:this.getCharactersNumber()}),/*#__PURE__*/_react.default.createElement(_previewWysiwyg.default,{data:this.props.value}))),/*#__PURE__*/_react.default.createElement(_MediaLib.default,{onToggle:this.handleToggle,isOpen:isMediaLibraryOpened,onChange:this.addLink}));}}Wysiwyg.defaultProps={autoFocus:false,className:'',deactivateErrorHighlight:false,error:false,onBlur:()=>{},onChange:()=>{},placeholder:'',resetProps:false,style:{},tabIndex:'0',value:''};Wysiwyg.propTypes={autoFocus:_propTypes.default.bool,className:_propTypes.default.string,deactivateErrorHighlight:_propTypes.default.bool,error:_propTypes.default.bool,name:_propTypes.default.string.isRequired,onBlur:_propTypes.default.func,onChange:_propTypes.default.func,placeholder:_propTypes.default.string,resetProps:_propTypes.default.bool,style:_propTypes.default.object,tabIndex:_propTypes.default.string,value:_propTypes.default.string};var _default=Wysiwyg;exports.default=_default;

/***/ }),

/***/ 2344:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(0));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _Wysiwyg=_interopRequireDefault(__webpack_require__(2144));function WysiwygProvider({children,...rest}){return/*#__PURE__*/_react.default.createElement(_Wysiwyg.default.Provider,{value:rest},children);}WysiwygProvider.propTypes={children:_propTypes.default.node.isRequired};var _default=WysiwygProvider;exports.default=_default;

/***/ }),

/***/ 2345:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(0));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _Button=_interopRequireDefault(__webpack_require__(2346));var _Wrapper=_interopRequireDefault(__webpack_require__(2358));/**
 *
 * WysiwygInlineControls
 *
 */const WysiwygInlineControls=({buttons,disabled,editorState,handlers,onToggle,onToggleBlock})=>{const selection=editorState.getSelection();const blockType=editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();const currentStyle=editorState.getCurrentInlineStyle();return/*#__PURE__*/_react.default.createElement(_Wrapper.default,null,buttons.map(type=>/*#__PURE__*/_react.default.createElement(_Button.default,{key:type.label,active:type.style===blockType||currentStyle.has(type.style),className:type.className,disabled:disabled,handler:type.handler,handlers:handlers,hideLabel:type.hideLabel||false,label:type.label,onToggle:onToggle,onToggleBlock:onToggleBlock,style:type.style,text:type.text})));};WysiwygInlineControls.defaultProps={buttons:[],disabled:false,onToggle:()=>{},onToggleBlock:()=>{}};WysiwygInlineControls.propTypes={buttons:_propTypes.default.array,disabled:_propTypes.default.bool,editorState:_propTypes.default.object.isRequired,handlers:_propTypes.default.object.isRequired,onToggle:_propTypes.default.func,onToggleBlock:_propTypes.default.func};var _default=WysiwygInlineControls;exports.default=_default;

/***/ }),

/***/ 2346:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(0));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _Bold=_interopRequireDefault(__webpack_require__(2347));var _Code=_interopRequireDefault(__webpack_require__(2348));var _Media=_interopRequireDefault(__webpack_require__(2349));var _Italic=_interopRequireDefault(__webpack_require__(2350));var _Link=_interopRequireDefault(__webpack_require__(2351));var _Ol=_interopRequireDefault(__webpack_require__(2352));var _Quote=_interopRequireDefault(__webpack_require__(2353));var _Striked=_interopRequireDefault(__webpack_require__(2354));var _Ul=_interopRequireDefault(__webpack_require__(2355));var _Underline=_interopRequireDefault(__webpack_require__(2356));var _StyledButton=_interopRequireDefault(__webpack_require__(2357));const icons={bold:_Bold.default,italic:_Italic.default,underline:_Underline.default,ul:_Ul.default,ol:_Ol.default,link:_Link.default,quote:_Quote.default,code:_Code.default,striked:_Striked.default,img:_Media.default};const Button=({active,disabled,className:type,handler,handlers,hideLabel,label,style,text})=>{const handleClick=e=>{e.preventDefault();handlers[handler](text,style);};const Icon=icons[type];return/*#__PURE__*/_react.default.createElement(_StyledButton.default,{active:active,disabled:disabled,onClick:handleClick,type:type},icons[type]&&/*#__PURE__*/_react.default.createElement(Icon,null),!hideLabel&&label);};Button.defaultProps={active:false,className:'',disabled:false,hideLabel:false,label:'',style:'',text:''};Button.propTypes={active:_propTypes.default.bool,className:_propTypes.default.string,disabled:_propTypes.default.bool,handler:_propTypes.default.string.isRequired,handlers:_propTypes.default.object.isRequired,hideLabel:_propTypes.default.bool,label:_propTypes.default.string,style:_propTypes.default.string,text:_propTypes.default.string};var _default=Button;exports.default=_default;

/***/ }),

/***/ 2347:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(0));const Bold=()=>{return/*#__PURE__*/_react.default.createElement("svg",{width:"9",height:"10",xmlns:"http://www.w3.org/2000/svg"},/*#__PURE__*/_react.default.createElement("text",{transform:"translate(-12 -10)",fill:"#333740",fillRule:"evenodd",fontSize:"13",fontFamily:"Baskerville-SemiBold, Baskerville",fontWeight:"500"},/*#__PURE__*/_react.default.createElement("tspan",{x:"12",y:"20"},"B")));};var _default=Bold;exports.default=_default;

/***/ }),

/***/ 2348:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(0));const Code=()=>{return/*#__PURE__*/_react.default.createElement("svg",{width:"12",height:"8",xmlns:"http://www.w3.org/2000/svg"},/*#__PURE__*/_react.default.createElement("g",{fill:"#333740",fillRule:"evenodd"},/*#__PURE__*/_react.default.createElement("path",{d:"M3.653 7.385a.632.632 0 0 1-.452-.191L.214 4.154a.66.66 0 0 1 0-.922L3.201.19a.632.632 0 0 1 .905 0 .66.66 0 0 1 0 .921l-2.534 2.58 2.534 2.58a.66.66 0 0 1 0 .922.632.632 0 0 1-.453.19zM8.347 7.385a.632.632 0 0 0 .452-.191l2.987-3.04a.66.66 0 0 0 0-.922L8.799.19a.632.632 0 0 0-.905 0 .66.66 0 0 0 0 .921l2.534 2.58-2.534 2.58a.66.66 0 0 0 0 .922c.125.127.289.19.453.19z"})));};var _default=Code;exports.default=_default;

/***/ }),

/***/ 2349:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(0));const Media=()=>{return/*#__PURE__*/_react.default.createElement("svg",{width:"12",height:"11",xmlns:"http://www.w3.org/2000/svg"},/*#__PURE__*/_react.default.createElement("g",{fill:"#333740",fillRule:"evenodd"},/*#__PURE__*/_react.default.createElement("path",{d:"M9 4.286a1.286 1.286 0 1 0 0-2.572 1.286 1.286 0 0 0 0 2.572z"}),/*#__PURE__*/_react.default.createElement("path",{d:"M11.25 0H.75C.332 0 0 .34 0 .758v8.77c0 .418.332.758.75.758h10.5c.418 0 .75-.34.75-.758V.758A.752.752 0 0 0 11.25 0zM8.488 5.296a.46.46 0 0 0-.342-.167c-.137 0-.234.065-.343.153l-.501.423c-.105.075-.188.126-.308.126a.443.443 0 0 1-.295-.11 3.5 3.5 0 0 1-.115-.11L5.143 4.054a.59.59 0 0 0-.897.008L.857 8.148V1.171a.353.353 0 0 1 .351-.314h9.581a.34.34 0 0 1 .346.322l.008 6.975-2.655-2.858z"})));};var _default=Media;exports.default=_default;

/***/ }),

/***/ 2350:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(0));const Italic=()=>{return/*#__PURE__*/_react.default.createElement("svg",{width:"6",height:"9",xmlns:"http://www.w3.org/2000/svg"},/*#__PURE__*/_react.default.createElement("text",{transform:"translate(-13 -11)",fill:"#333740",fillRule:"evenodd",fontWeight:"500",fontSize:"13",fontFamily:"Baskerville-SemiBoldItalic, Baskerville",fontStyle:"italic"},/*#__PURE__*/_react.default.createElement("tspan",{x:"13",y:"20"},"I")));};var _default=Italic;exports.default=_default;

/***/ }),

/***/ 2351:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(0));const Link=()=>{return/*#__PURE__*/_react.default.createElement("svg",{width:"12",height:"6",xmlns:"http://www.w3.org/2000/svg"},/*#__PURE__*/_react.default.createElement("g",{fill:"none",fillRule:"evenodd"},/*#__PURE__*/_react.default.createElement("path",{d:"M6.063 1.5H6h.063z",fill:"#000"}),/*#__PURE__*/_react.default.createElement("path",{d:"M9.516 0H8s.813.531.988 1.5h.528c.55 0 .984.434.984.984v1c0 .55-.434 1.016-.984 1.016h-3.5A1.03 1.03 0 0 1 5 3.484V2.5H3.5v.984A2.518 2.518 0 0 0 6.016 6h3.5C10.896 6 12 4.866 12 3.484v-1A2.473 2.473 0 0 0 9.516 0z",fill:"#333740"}),/*#__PURE__*/_react.default.createElement("path",{d:"M8.3 1.5A2.473 2.473 0 0 0 6.016 0h-3.5C1.134 0 0 1.103 0 2.484v1A2.526 2.526 0 0 0 2.516 6H4s-.806-.531-1.003-1.5h-.481A1.03 1.03 0 0 1 1.5 3.484v-1c0-.55.466-.984 1.016-.984h3.5c.55 0 .984.434.984.984V3.5h1.5V2.484c0-.35-.072-.684-.2-.984z",fill:"#333740"})));};var _default=Link;exports.default=_default;

/***/ }),

/***/ 2352:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(0));const Ol=()=>{return/*#__PURE__*/_react.default.createElement("svg",{width:"12",height:"8",xmlns:"http://www.w3.org/2000/svg"},/*#__PURE__*/_react.default.createElement("g",{fill:"#333740",fillRule:"evenodd"},/*#__PURE__*/_react.default.createElement("path",{d:"M2.4 3H.594v-.214h.137c.123 0 .212-.01.266-.032.053-.022.086-.052.1-.092a.67.67 0 0 0 .018-.188V.74a.46.46 0 0 0-.03-.194C1.064.504 1.021.476.955.46A1.437 1.437 0 0 0 .643.435H.539V.23c.332-.035.565-.067.7-.096.135-.03.258-.075.37-.134h.275v2.507c0 .104.023.177.07.218.047.04.14.061.278.061H2.4V3zM2.736 6.695l-.132.528h-.246a.261.261 0 0 0 .015-.074c0-.058-.049-.087-.146-.087H.293v-.198c.258-.173.511-.367.76-.581.25-.215.457-.437.623-.667.166-.23.249-.447.249-.653a.49.49 0 0 0-.321-.478.794.794 0 0 0-.582-.006.482.482 0 0 0-.196.138.284.284 0 0 0-.07.182c0 .074.04.17.12.289.006.008.009.015.009.02 0 .012-.041.03-.123.053l-.19.057a.693.693 0 0 1-.115.03c-.031 0-.067-.038-.108-.114a.516.516 0 0 1 .071-.586.899.899 0 0 1 .405-.238c.18-.058.4-.087.657-.087.317 0 .566.044.749.132.183.087.306.187.37.3a.64.64 0 0 1 .094.312c0 .197-.089.389-.266.575a5.296 5.296 0 0 1-.916.74 62.947 62.947 0 0 1-.62.413h1.843zM4 0h8v1H4zM4 2h8v1H4zM4 4h8v1H4zM4 6h8v1H4z"})));};var _default=Ol;exports.default=_default;

/***/ }),

/***/ 2353:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(0));const Quote=()=>{return/*#__PURE__*/_react.default.createElement("svg",{width:"9",height:"9",xmlns:"http://www.w3.org/2000/svg"},/*#__PURE__*/_react.default.createElement("g",{fill:"#333740",fillRule:"evenodd"},/*#__PURE__*/_react.default.createElement("path",{d:"M3 0C2.047 0 1.301.263.782.782.263 1.302 0 2.047 0 3v6h3.75V3H1.5c0-.54.115-.93.343-1.157C2.07 1.615 2.46 1.5 3 1.5M8.25 0c-.953 0-1.699.263-2.218.782-.519.52-.782 1.265-.782 2.218v6H9V3H6.75c0-.54.115-.93.343-1.157.227-.228.617-.343 1.157-.343"})));};var _default=Quote;exports.default=_default;

/***/ }),

/***/ 2354:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(0));const Striked=()=>{return/*#__PURE__*/_react.default.createElement("svg",{width:"19",height:"10",xmlns:"http://www.w3.org/2000/svg"},/*#__PURE__*/_react.default.createElement("g",{fill:"none",fillRule:"evenodd"},/*#__PURE__*/_react.default.createElement("text",{fontFamily:"Lato-Semibold, Lato",fontSize:"11",fontWeight:"500",fill:"#41464E",transform:"translate(0 -2)"},/*#__PURE__*/_react.default.createElement("tspan",{x:"1",y:"11"},"abc")),/*#__PURE__*/_react.default.createElement("path",{d:"M.5 6.5h18",stroke:"#2C3039",strokeLinecap:"square"})));};var _default=Striked;exports.default=_default;

/***/ }),

/***/ 2355:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(0));const Ul=()=>{return/*#__PURE__*/_react.default.createElement("svg",{width:"13",height:"7",xmlns:"http://www.w3.org/2000/svg"},/*#__PURE__*/_react.default.createElement("g",{fill:"none",fillRule:"evenodd"},/*#__PURE__*/_react.default.createElement("path",{fill:"#333740",d:"M5 0h8v1H5zM5 2h8v1H5zM5 4h8v1H5zM5 6h8v1H5z"}),/*#__PURE__*/_react.default.createElement("rect",{stroke:"#333740",x:".5",y:".5",width:"2",height:"2",rx:"1"}),/*#__PURE__*/_react.default.createElement("rect",{stroke:"#333740",x:".5",y:"4.5",width:"2",height:"2",rx:"1"})));};var _default=Ul;exports.default=_default;

/***/ }),

/***/ 2356:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(0));const Underline=()=>{return/*#__PURE__*/_react.default.createElement("svg",{width:"10",height:"10",xmlns:"http://www.w3.org/2000/svg"},/*#__PURE__*/_react.default.createElement("text",{transform:"translate(-10 -11)",fill:"#101622",fillRule:"evenodd",fontSize:"13",fontFamily:"Baskerville-SemiBold, Baskerville",fontWeight:"500"},/*#__PURE__*/_react.default.createElement("tspan",{x:"10",y:"20"},"U")));};var _default=Underline;exports.default=_default;

/***/ }),

/***/ 2357:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireWildcard=__webpack_require__(12);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _styledComponents=_interopRequireWildcard(__webpack_require__(3));const Button=_styledComponents.default.button`
  display: flex;
  height: 32px;
  min-width: 32px;
  background-color: #ffffff;
  border: 1px solid rgba(16, 22, 34, 0.1);
  font-size: 13px;
  font-weight: 500;
  line-height: 32px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #f3f4f4;
  }
  &:active,
  &:focus {
    outline: 0;
  }

  ${({active,disabled})=>{if(active){return(0,_styledComponents.css)`
        border: 0;
        background: rgba(16, 22, 34, 0);
        box-shadow: inset 0 -1px 0 0 rgba(16, 22, 34, 0.04),
          inset 0 1px 0 0 rgba(16, 22, 34, 0.04);
      `;}if(disabled){return(0,_styledComponents.css)`
        opacity: 0.7;
        cursor: not-allowed;
      `;}return'';}}

  > svg {
    margin: auto;
    > text {
      font-family: Baskerville-SemiBoldItalic, Baskerville;
    }
  }

  background-position: center;
  background-repeat: no-repeat;
`;var _default=Button;exports.default=_default;

/***/ }),

/***/ 2358:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__(3));const Wrapper=_styledComponents.default.div`
  height: 49px;
  display: flex;
  padding: 8px 3px 0 10px;
  background-color: #f3f4f4;
  user-select: none;
  overflow-x: auto;
  > button:nth-child(even) {
    border-left: 0;
    border-right: 0;
  }
  > button:first-child {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  > button:last-child {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    border-right: 1px solid rgba(16, 22, 34, 0.1);
  }
`;var _default=Wrapper;exports.default=_default;

/***/ }),

/***/ 2359:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(0));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _reactIntl=__webpack_require__(15);var _components=__webpack_require__(2360);/* eslint-disable jsx-a11y/no-static-element-interactions */ /* eslint-disable jsx-a11y/click-events-have-key-events */ /**
 *
 * WysiwygBottomControls
 *
 */const WysiwygBottomControls=({onClick})=>{return/*#__PURE__*/_react.default.createElement(_components.Wrapper,null,/*#__PURE__*/_react.default.createElement("div",null),/*#__PURE__*/_react.default.createElement("div",{className:"fullScreenWrapper",onClick:onClick},/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:"components.WysiwygBottomControls.fullscreen"})));};WysiwygBottomControls.defaultProps={onClick:()=>{}};WysiwygBottomControls.propTypes={onClick:_propTypes.default.func};var _default=WysiwygBottomControls;exports.default=_default;

/***/ }),

/***/ 2360:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.Wrapper=exports.Span=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__(3));const Span=_styledComponents.default.span`
  color: #1c5de7;
  text-decoration: underline;
  cursor: pointer;
`;exports.Span=Span;const Wrapper=_styledComponents.default.div`
  display: flex;
  height: 30px;
  width: 100%;
  padding: 0 15px;
  justify-content: space-between;
  background-color: #fafafb;
  line-height: 30px;
  font-size: 13px;
  font-family: Lato;
  border-top: 1px dashed #e3e4e4;

  > div:first-child {
    > span:last-child {
      font-size: 12px;
    }
  }

  .fullScreenWrapper {
    cursor: pointer;
    &:after {
      content: '\f065';
      margin-left: 8px;
      font-family: FontAwesome;
      font-size: 12px;
    }
  }

  .dropLabel {
    > input {
      display: none;
    }
  }
`;exports.Wrapper=Wrapper;

/***/ }),

/***/ 2361:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);var _interopRequireWildcard=__webpack_require__(12);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(0));var _strapiHelperPlugin=__webpack_require__(6);var _propTypes=_interopRequireDefault(__webpack_require__(2));const MediaLib=({isOpen,onChange,onToggle})=>{const{strapi:{componentApi:{getComponent}}}=(0,_strapiHelperPlugin.useStrapi)();const[data,setData]=(0,_react.useState)(null);const[isDisplayed,setIsDisplayed]=(0,_react.useState)(false);(0,_react.useEffect)(()=>{if(isOpen){setIsDisplayed(true);}},[isOpen]);const Component=getComponent('media-library').Component;const handleInputChange=data=>{if(data){const{name,alternativeText,url}=data;const alt=alternativeText||name;setData({alt,url:(0,_strapiHelperPlugin.prefixFileUrlWithBackendUrl)(url)});}};const handleClosed=()=>{if(data){onChange(data);}setData(null);setIsDisplayed(false);};if(Component&&isDisplayed){return/*#__PURE__*/_react.default.createElement(Component,{allowedTypes:['images','videos','files'],isOpen:isOpen,multiple:false,noNavigation:true,onClosed:handleClosed,onInputMediaChange:handleInputChange,onToggle:onToggle});}return null;};MediaLib.defaultProps={isOpen:false,onChange:()=>{},onToggle:()=>{}};MediaLib.propTypes={isOpen:_propTypes.default.bool,onChange:_propTypes.default.func,onToggle:_propTypes.default.func};var _default=MediaLib;exports.default=_default;

/***/ }),

/***/ 2362:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(0));var _strapiHelperPlugin=__webpack_require__(6);var _useWysiwyg=_interopRequireDefault(__webpack_require__(2363));var _constants=__webpack_require__(2145);var _SelectWrapper=_interopRequireDefault(__webpack_require__(2364));/**
 *
 *
 * CustomSelect
 *
 */const CustomSelect=()=>{const{isPreviewMode,headerValue,isFullscreen,handleChangeSelect}=(0,_useWysiwyg.default)();return/*#__PURE__*/_react.default.createElement(_SelectWrapper.default,{isFullscreen:isFullscreen},/*#__PURE__*/_react.default.createElement(_strapiHelperPlugin.InputSelect,{disabled:isPreviewMode,name:"headerSelect",onChange:handleChangeSelect,value:headerValue,selectOptions:_constants.SELECT_OPTIONS}));};var _default=CustomSelect;exports.default=_default;

/***/ }),

/***/ 2363:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=__webpack_require__(0);var _Wysiwyg=_interopRequireDefault(__webpack_require__(2144));const useWysiwyg=()=>(0,_react.useContext)(_Wysiwyg.default);var _default=useWysiwyg;exports.default=_default;

/***/ }),

/***/ 2364:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireWildcard=__webpack_require__(12);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _styledComponents=_interopRequireWildcard(__webpack_require__(3));/* eslint-disable */const SelectWrapper=_styledComponents.default.div`
  min-width: ${({isFullScreen})=>isFullScreen?'161px':'115px'};
  margin-left: 15px;
  > select {
    ${({isFullScreen})=>{if(isFullScreen){return(0,_styledComponents.css)`
          min-width: 110px !important;
        `;}else{return(0,_styledComponents.css)`
          margin-right: 5px;
        `;}}}
    box-shadow: 0 0 0 rgba(0, 0, 0, 0) !important;
  }
`;var _default=SelectWrapper;exports.default=_default;

/***/ }),

/***/ 2365:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(0));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _reactIntl=__webpack_require__(15);var _PreviewControlWrapper=_interopRequireDefault(__webpack_require__(2366));/**
 *
 *
 * PreviewControl
 *
 */const PreviewControl=({onClick})=>/*#__PURE__*/_react.default.createElement(_PreviewControlWrapper.default,{onClick:onClick},/*#__PURE__*/_react.default.createElement("div",null),/*#__PURE__*/_react.default.createElement("div",{className:"wysiwygCollapse"},/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:"components.Wysiwyg.collapse"})));PreviewControl.defaultProps={onClick:()=>{}};PreviewControl.propTypes={onClick:_propTypes.default.func};var _default=PreviewControl;exports.default=_default;

/***/ }),

/***/ 2366:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__(3));const PreviewControlWrapper=_styledComponents.default.div`
  display: flex;
  height: 49px;
  width: 100%;
  padding: 0 17px;
  justify-content: space-between;
  background-color: #fafafb;
  line-height: 30px;
  font-size: 12px;
  font-family: Lato;
  background-color: #fff;
  border-bottom: 1px solid #f3f4f4;
  line-height: 49px;
  font-size: 13px;
  > div:first-child {
    > span:last-child {
      font-size: 12px;
    }
  }
  cursor: pointer;

  .wysiwygCollapse {
    &:after {
      content: '\f066';
      font-family: FontAwesome;
      margin-left: 8px;
    }
  }
`;var _default=PreviewControlWrapper;exports.default=_default;

/***/ }),

/***/ 2367:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _defineProperty2=_interopRequireDefault(__webpack_require__(16));var _react=_interopRequireDefault(__webpack_require__(0));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _draftJs=__webpack_require__(2115);var _immutable=__webpack_require__(37);var _lodash=__webpack_require__(7);var _Wysiwyg=_interopRequireDefault(__webpack_require__(2144));var _WysiwygEditor=_interopRequireDefault(__webpack_require__(2187));var _converter=_interopRequireDefault(__webpack_require__(2368));var _strategies=__webpack_require__(2370);var _PreviewWysiwygWrapper=_interopRequireDefault(__webpack_require__(2371));var _image=_interopRequireDefault(__webpack_require__(2372));var _link=_interopRequireDefault(__webpack_require__(2373));var _video=_interopRequireDefault(__webpack_require__(2374));/**
 *
 * PreviewWysiwyg
 *
 */ /* eslint-disable react/no-unused-state */ /* eslint-disable no-new */ /* eslint-disable consistent-return */ /* eslint-disable react/sort-comp */function getBlockStyle(block){switch(block.getType()){case'blockquote':return'editorBlockquote';case'code-block':return'editorCodeBlock';case'unstyled':return'editorParagraph';case'unordered-list-item':return'unorderedList';case'ordered-list-item':case'header-one':case'header-two':case'header-three':case'header-four':case'header-five':case'header-six':default:return null;}}const decorator=new _draftJs.CompositeDecorator([{strategy:_strategies.findLinkEntities,component:_link.default},{strategy:_strategies.findImageEntities,component:_image.default},{strategy:_strategies.findVideoEntities,component:_video.default},{strategy:_strategies.findAtomicEntities,component:_link.default}]);const getBlockSpecForElement=aElement=>({contentType:'link',aHref:aElement.href,aInnerHTML:aElement.innerHTML});const elementToBlockSpecElement=element=>wrapBlockSpec(getBlockSpecForElement(element));const wrapBlockSpec=blockSpec=>{if(blockSpec==null){return null;}const tempEl=document.createElement('blockquote');// stringify meta data and insert it as text content of temp HTML element. We will later extract
// and parse it.
tempEl.innerText=JSON.stringify(blockSpec);return tempEl;};const replaceElement=(oldEl,newEl)=>{if(!(newEl instanceof HTMLElement)){return;}const parentNode=oldEl.parentNode;return parentNode.replaceChild(newEl,oldEl);};const aReplacer=aElement=>replaceElement(aElement,elementToBlockSpecElement(aElement));const createContentBlock=(blockData={})=>{const{key,type,text,data,inlineStyles,entityData}=blockData;let blockSpec={type:type!==null&&type!==undefined?type:'unstyled',text:text!==null&&text!==undefined?text:'',key:key!==null&&key!==undefined?key:(0,_draftJs.genKey)()};if(data){blockSpec.data=(0,_immutable.fromJS)(data);}if(inlineStyles||entityData){let entityKey;if(entityData){const{type,mutability,data}=entityData;entityKey=_draftJs.Entity.create(type,mutability,data);}else{entityKey=null;}const style=(0,_immutable.OrderedSet)(inlineStyles||[]);const charData=_draftJs.CharacterMetadata.applyEntity(_draftJs.CharacterMetadata.create({style,entityKey}),entityKey);blockSpec.characterList=(0,_immutable.List)((0,_immutable.Repeat)(charData,text.length));}return new _draftJs.ContentBlock(blockSpec);};class PreviewWysiwyg extends _react.default.PureComponent{constructor(...args){super(...args);(0,_defineProperty2.default)(this,"state",{editorState:_draftJs.EditorState.createEmpty(),isMounted:false});(0,_defineProperty2.default)(this,"previewHTML",rawContent=>{const initHtml=(0,_lodash.isEmpty)(rawContent)?'<p></p>':rawContent;const html=new DOMParser().parseFromString(_converter.default.makeHtml(initHtml),'text/html');(0,_lodash.toArray)(html.getElementsByTagName('a'))// Retrieve all the links <a> tags
.filter(value=>value.getElementsByTagName('img').length>0)// Filter by checking if they have any <img> children
.forEach(aReplacer);// Change those links into <blockquote> elements so we can set some metacharacters with the img content
// TODO:
// in the same way, retrieve all <pre> tags
// create custom atomic block
// create custom code block
let blocksFromHTML=(0,_draftJs.convertFromHTML)(html.body.innerHTML);if(blocksFromHTML.contentBlocks){blocksFromHTML=blocksFromHTML.contentBlocks.reduce((acc,block)=>{if(block.getType()==='blockquote'){try{const{aHref,aInnerHTML}=JSON.parse(block.getText());const entityData={type:'LINK',mutability:'IMMUTABLE',data:{aHref,aInnerHTML}};const blockSpec=Object.assign({type:'atomic',text:' ',key:block.getKey()},{entityData});const atomicBlock=createContentBlock(blockSpec);// Create an atomic block so we can identify it easily
return acc.concat([atomicBlock]);}catch(err){return acc.concat(block);}}return acc.concat(block);},[]);const contentState=_draftJs.ContentState.createFromBlockArray(blocksFromHTML);return this.setState({editorState:_draftJs.EditorState.createWithContent(contentState,decorator)});}return this.setState({editorState:_draftJs.EditorState.createEmpty()});});}componentDidMount(){const{data}=this.props;this.setState({isMounted:true});if(!(0,_lodash.isEmpty)(data)){this.previewHTML(data);}}// NOTE: This is not optimal and this lifecycle should be removed
// I couldn't find a better way to decrease the fullscreen preview's data conversion time
// Trying with componentDidUpdate didn't work
UNSAFE_componentWillUpdate(nextProps,nextState){if(nextProps.data!==this.props.data){new Promise(resolve=>{setTimeout(()=>{if(nextProps.data===this.props.data&&nextState.isMounted){// I use an handler here to update the state which is fine since the condition above prevent
// from entering into an infinite loop
this.previewHTML(nextProps.data);}resolve();},300);});}}componentWillUnmount(){this.setState({isMounted:false});}render(){const{placeholder}=this.context;return/*#__PURE__*/_react.default.createElement(_PreviewWysiwygWrapper.default,{isFullscreen:this.context.isFullscreen},/*#__PURE__*/_react.default.createElement(_WysiwygEditor.default,{blockStyleFn:getBlockStyle,editorState:this.state.editorState,onChange:()=>{},placeholder:placeholder}),/*#__PURE__*/_react.default.createElement("input",{className:"editorInput",value:"",onChange:()=>{},tabIndex:"-1"}));}}(0,_defineProperty2.default)(PreviewWysiwyg,"contextType",_Wysiwyg.default);PreviewWysiwyg.defaultProps={data:''};PreviewWysiwyg.propTypes={data:_propTypes.default.string};var _default=PreviewWysiwyg;exports.default=_default;

/***/ }),

/***/ 2368:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _showdown=_interopRequireDefault(__webpack_require__(2369));const converterOptions={backslashEscapesHTMLTags:true,emoji:true,parseImgDimensions:true,simpleLineBreaks:true,simplifiedAutoLink:true,smoothLivePreview:true,splitAdjacentBlockquotes:false,strikethrough:true,tables:true,tasklists:true,underline:true};const converter=new _showdown.default.Converter(converterOptions);var _default=converter;exports.default=_default;

/***/ }),

/***/ 2370:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.findAtomicEntities=findAtomicEntities;exports.findLinkEntities=findLinkEntities;exports.findImageEntities=findImageEntities;exports.findVideoEntities=findVideoEntities;/* eslint-disable no-unused-vars */function findLinkEntities(contentBlock,callback,contentState){contentBlock.findEntityRanges(character=>{const entityKey=character.getEntity();return entityKey!==null&&contentState.getEntity(entityKey).getType()==='LINK';},callback);}function findAtomicEntities(contentBlock,callback,contentState){contentBlock.findEntityRanges(character=>{const entityKey=character.getEntity();return entityKey!==null&&contentBlock.getType()==='atomic';},callback);}function findImageEntities(contentBlock,callback,contentState){contentBlock.findEntityRanges(character=>{const entityKey=character.getEntity();return entityKey!==null&&contentState.getEntity(entityKey).getType()==='IMAGE'&&!isVideoType(contentState.getEntity(entityKey).getData().src);},callback);}function findVideoEntities(contentBlock,cb,contentState){contentBlock.findEntityRanges(character=>{const entityKey=character.getEntity();return entityKey!==null&&contentState.getEntity(entityKey).getType()==='IMAGE'&&isVideoType(contentState.getEntity(entityKey).getData().src);},cb);}const isVideoType=fileName=>/\.(mp4|mpg|mpeg|mov|avi|qt)$/i.test(fileName);

/***/ }),

/***/ 2371:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireWildcard=__webpack_require__(12);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _styledComponents=_interopRequireWildcard(__webpack_require__(3));/* eslint-disable */const PreviewWysiwygWrapper=_styledComponents.default.div`
  max-height: 555px;
  min-height: 294px;
  overflow: auto;
  padding: 20px 20px 0 20px;
  font-size: 16px;
  background-color: #fff;
  line-height: 24px !important;
  font-family: 'Lato';
  cursor: text;

  // TODO define rules for header's margin
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    line-height: 24px !important;
    font-family: 'Lato';
  }

  h1 {
    margin-top: 11px !important;
    font-size: 36px;
    font-weight: 600;
  }

  h2 {
    margin-top: 26px;
    font-size: 30px;
    font-weight: 500;
  }

  h3 {
    margin-top: 26px;
    font-size: 24px;
    font-weight: 500;
  }

  h4 {
    margin-top: 26px;
    font-size: 20px;
    font-weight: 500;
  }

  > div {
    > div {
      > div {
        margin-bottom: 32px;
      }
    }
  }

  li {
    margin-top: 0;
  }

  ul,
  ol {
    padding: 0;
    margin-top: 27px;
  }

  ol {
    padding-left: 20px;
  }

  // NOTE: we might need this later
  span {
    white-space: pre-line;
  }

  h1 + .editorParagraph {
    margin-top: 31px;
  }

  .editorParagraph + * {
    margin-bottom: -2px !important;
  }

  .editorParagraph + .editorBlockquote {
    margin-bottom: 32px !important;
  }

  .editorBlockquote + ul {
    margin-top: 38px !important;
  }

  .editorParagraph {
    color: #333740;
    margin-top: 27px;
    margin-bottom: -3px;
    font-size: 16px;
    font-weight: 400;
  }

  .editorBlockquote {
    margin-top: 41px;
    margin-bottom: 34px;
    font-size: 16px;
    font-weight: 400;
    border-left: 5px solid #eee;
    font-style: italic;
    padding: 10px 20px;
  }

  .unorderedList {
    padding: 0;
    margin-left: 18px;
  }

  .editorCodeBlock {
    padding: 16px;
    margin-top: 26px;
    padding-bottom: 0;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 3px;

    span {
      font-family: Consolas, monospace !important;
      font-size: 12px;
      line-height: 16px;
      white-space: pre;
    }
  }

  .editorInput {
    height: 0;
    width: 0;
  }

  ${({isFullscreen})=>{if(isFullscreen){return(0,_styledComponents.css)`
        max-height: calc(100% - 70px) !important;
        margin-bottom: 0;
        margin-top: 9px;
        padding: 10px 20px;
        overflow: auto;
      `;}}}
`;var _default=PreviewWysiwygWrapper;exports.default=_default;

/***/ }),

/***/ 2372:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(0));var _strapiHelperPlugin=__webpack_require__(6);var _propTypes=_interopRequireDefault(__webpack_require__(2));/**
 *
 * Image
 *
 */const Image=props=>{const{alt,height,src,width}=props.contentState.getEntity(props.entityKey).getData();const url=(0,_strapiHelperPlugin.prefixFileUrlWithBackendUrl)(src);return/*#__PURE__*/_react.default.createElement("img",{alt:alt,src:url,height:height,width:width,style:{maxWidth:'100%'}});};Image.propTypes={contentState:_propTypes.default.object.isRequired,entityKey:_propTypes.default.string.isRequired};var _default=Image;exports.default=_default;

/***/ }),

/***/ 2373:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(0));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _lodash=__webpack_require__(7);/**
 *
 * Link
 *
 */const Link=props=>{const{url,aHref,aInnerHTML}=props.contentState.getEntity(props.entityKey).getData();let content=aInnerHTML;if((0,_lodash.includes)(aInnerHTML,'<img','src=')){const src=aInnerHTML.split('src="')[1].split('" ')[0];const width=(0,_lodash.includes)(aInnerHTML,'width=')?aInnerHTML.split('width="')[1].split('" ')[0]:'';const height=(0,_lodash.includes)(aInnerHTML,'height=')?aInnerHTML.split('height="')[1].split('" ')[0]:'';content=/*#__PURE__*/_react.default.createElement("img",{src:src,alt:"img",width:width,height:height,style:{marginTop:'27px',maxWidth:'100%'}});}return/*#__PURE__*/_react.default.createElement("a",{href:url||aHref,onClick:()=>{window.open(url||aHref,'_blank');},style:{cursor:'pointer'}},content||props.children);};Link.defaultProps={children:''};Link.propTypes={children:_propTypes.default.node,contentState:_propTypes.default.object.isRequired,entityKey:_propTypes.default.string.isRequired};var _default=Link;exports.default=_default;

/***/ }),

/***/ 2374:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(0));var _propTypes=_interopRequireDefault(__webpack_require__(2));/**
 *
 * Video
 *
 */ /* eslint-disable jsx-a11y/media-has-caption */const Video=props=>{const{height,src,width}=props.contentState.getEntity(props.entityKey).getData();return/*#__PURE__*/_react.default.createElement("video",{height:height,width:width,style:{maxWidth:'100%'},controls:true},/*#__PURE__*/_react.default.createElement("source",{src:src}));};Video.propTypes={contentState:_propTypes.default.object.isRequired,entityKey:_propTypes.default.string.isRequired};var _default=Video;exports.default=_default;

/***/ }),

/***/ 2375:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(0));var _reactIntl=__webpack_require__(15);var _propTypes=_interopRequireDefault(__webpack_require__(2));var _ToggleModeWrapper=_interopRequireDefault(__webpack_require__(2376));/**
 *
 *
 * ToggleMode
 */const ToggleMode=props=>{const label=props.isPreviewMode?'components.Wysiwyg.ToggleMode.markdown':'components.Wysiwyg.ToggleMode.preview';return/*#__PURE__*/_react.default.createElement(_ToggleModeWrapper.default,null,/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:label},msg=>/*#__PURE__*/_react.default.createElement("button",{type:"button",className:"toggleModeButton",onClick:props.onClick},msg)));};ToggleMode.defaultProps={isPreviewMode:false,onClick:()=>{}};ToggleMode.propTypes={isPreviewMode:_propTypes.default.bool,onClick:_propTypes.default.func};var _default=ToggleMode;exports.default=_default;

/***/ }),

/***/ 2376:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__(3));const ToggleModeWrapper=_styledComponents.default.div`
  margin-left: auto;
  padding-right: 15px;
  padding-top: 8px;

  .toggleModeButton {
    height: 32px;
    min-width: 32px;
    padding-left: 10px;
    padding-right: 10px;
    border: 1px solid rgba(16, 22, 34, 0.1);
    border-radius: 3px;
    background: #f3f4f4;
    font-size: 13px;
    font-weight: 500;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    cursor: pointer;
    &:focus,
    &:active {
      outline: 0;
    }
  }
`;var _default=ToggleModeWrapper;exports.default=_default;

/***/ }),

/***/ 2377:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.getBlockStyle=getBlockStyle;exports.getBlockContent=getBlockContent;exports.getOffSets=getOffSets;exports.getKeyCommandData=getKeyCommandData;exports.getDefaultSelectionOffsets=void 0;var _lodash=__webpack_require__(7);/**
 * Override the editor css
 * @param  {[type]} block [description]
 * @return {[type]}       [description]
 */function getBlockStyle(){return null;}function getBlockContent(style){switch(style){case'IMG':return{innerContent:'link',endReplacer:')',startReplacer:'![text]('};case'CODE':return{innerContent:'code block',endReplacer:'`',startReplacer:'`'};case'BLOCKQUOTE':return{innerContent:'quote',endReplacer:'',startReplacer:'> '};case'BOLD':return{innerContent:'bold text',endReplacer:'*',startReplacer:'*'};case'ITALIC':return{innerContent:'italic text',endReplacer:'*',startReplacer:'*'};case'STRIKED':return{innerContent:'striked out',endReplacer:'~',startReplacer:'~'};case'UNDERLINE':return{innerContent:'underlined text',endReplacer:'_',startReplacer:'_'};case'LINK':return{innerContent:'link',endReplacer:')',startReplacer:'[text]('};default:return{innerContent:'',endReplacer:'',startReplacer:''};}}const getDefaultSelectionOffsets=(content,startReplacer,endReplacer,initPosition=0)=>({anchorOffset:initPosition+content.length-(0,_lodash.trimStart)(content,startReplacer).length,focusOffset:initPosition+(0,_lodash.trimEnd)(content,endReplacer).length});/**
 * Get the start and end offset
 * @param  {Object} selection
 * @return {Object}
 */exports.getDefaultSelectionOffsets=getDefaultSelectionOffsets;function getOffSets(selection){return{end:selection.getEndOffset(),start:selection.getStartOffset()};}function getKeyCommandData(command){let content;let style;switch(command){case'bold':content='**textToReplace**';style='BOLD';break;case'italic':content='*textToReplace*';style='ITALIC';break;case'underline':content='__textToReplace__';style='UNDERLINE';break;default:content='';style='';}return{content,style};}

/***/ }),

/***/ 2378:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.createNewBlock=createNewBlock;exports.getNextBlocksList=getNextBlocksList;exports.updateSelection=updateSelection;exports.getSelectedBlocksList=getSelectedBlocksList;exports.onTab=onTab;var _draftJs=__webpack_require__(2115);var _immutable=__webpack_require__(37);var _constants=__webpack_require__(2145);/**
 *
 * Utils
 *
 */function createNewBlock(text='',type='unstyled',key=(0,_draftJs.genKey)()){return new _draftJs.ContentBlock({key,type,text,charaterList:(0,_immutable.List)([])});}function getNextBlocksList(editorState,startKey){return editorState.getCurrentContent().getBlockMap().toSeq().skipUntil((_,k)=>k===startKey).toList().shift().concat([createNewBlock()]);}function updateSelection(selection,blocks,offset){return selection.merge({anchorKey:blocks.get(0).getKey(),focusKey:blocks.get(0).getKey(),anchorOffset:offset,focusOffset:offset});}function getSelectedBlocksList(editorState){const selectionState=editorState.getSelection();const contentState=editorState.getCurrentContent();const startKey=selectionState.getStartKey();const endKey=selectionState.getEndKey();const blockMap=contentState.getBlockMap();return blockMap.toSeq().skipUntil((_,k)=>k===startKey).takeUntil((_,k)=>k===endKey).concat([[endKey,blockMap.get(endKey)]]).toList();}function onTab(editorState){const contentState=editorState.getCurrentContent();const selection=editorState.getSelection();let newContentState;if(selection.isCollapsed()){newContentState=_draftJs.Modifier.insertText(contentState,selection,_constants.DEFAULT_INDENTATION);}else{newContentState=_draftJs.Modifier.replaceText(contentState,selection,_constants.DEFAULT_INDENTATION);}return _draftJs.EditorState.push(editorState,newContentState,'insert-characters');}

/***/ }),

/***/ 2379:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireWildcard=__webpack_require__(12);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _styledComponents=_interopRequireWildcard(__webpack_require__(3));/* eslint-disable */const EditorWrapper=_styledComponents.default.div`
  ${({isFullscreen})=>{if(isFullscreen){return(0,_styledComponents.css)`
        position: fixed;
        z-index: 1040;
        top: calc(6rem + 90px);
        left: calc(24rem + 28px);
        right: 28px;
        bottom: 32px;
        display: flex;
        background-color: transparent;
        z-index: 99999;

        > div {
          min-width: 50%;
        }
        > div:first-child {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }
        > div:last-child {
          border-left: 0;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
        .editorWrapper {
          border-color: #f3f4f4 !important;
        }
      `;}}}

  .controlsContainer {
    display: flex;
    box-sizing: border-box;
    background-color: #f3f4f4;

    select {
      min-height: 31px !important;
      min-width: 161px !important;
      font-weight: 600;
      outline: none;

      &:focus,
      &:active {
        border: 1px solid #e3e9f3;
      }
    }
  }

  .editorWrapper {
    min-height: 320px;
    margin-top: 0.9rem;
    border: 1px solid #f3f4f4;
    border-radius: 0.25rem;
    line-height: 18px !important;
    font-size: 13px;
    box-shadow: 0px 1px 1px rgba(104, 118, 142, 0.05);
    background-color: #fff;
    position: relative;
  }

  .editorError {
    border-color: #ff203c !important;
  }

  .editor {
    min-height: 294px;
    max-height: 555px;
    padding: 20px 20px 0 20px;
    font-size: 13px;
    background-color: #fff;
    line-height: 18px !important;
    cursor: text;
    overflow: auto;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0;
      line-height: 18px !important;
    }
    h1 {
      margin-top: 13px !important;
      margin-bottom: 22px;
    }
    > div {
      > div {
        > div {
          margin-bottom: 32px;
        }
      }
    }
    li {
      margin-top: 0;
    }
    ul,
    ol {
      margin-bottom: 18px;
    }
  }

  .editorFullScreen {
    max-height: calc(100% - 70px) !important;
    margin-bottom: 0;
    overflow: auto;
  }

  .editorInput {
    height: 0;
    width: 0;
  }
`;var _default=EditorWrapper;exports.default=_default;

/***/ }),

/***/ 2380:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__(3));const Wrapper=_styledComponents.default.div`
  padding-bottom: 2.4rem;
  font-size: 1.3rem;
  font-family: 'Lato'; 
  label {
    display: block;
    margin-bottom: 1rem;
  }
  &.bordered {
    .editorWrapper {
      border-color: red;
    }
  }
  > div + p {
    width 100%;
    padding-top: 12px;
    font-size: 1.2rem;
    line-height: normal;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: -9px;
  }
`;var _default=Wrapper;exports.default=_default;

/***/ }),

/***/ 2381:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireWildcard=__webpack_require__(12);var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__(13));var _react=_interopRequireWildcard(__webpack_require__(0));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _icons=__webpack_require__(86);var _styles=__webpack_require__(18);var _core=__webpack_require__(25);var _hooks=__webpack_require__(169);var _styledComponents=_interopRequireDefault(__webpack_require__(3));var _strapiHelperPlugin=__webpack_require__(6);var _reactIntl=__webpack_require__(15);var _lodash=__webpack_require__(7);var _pluginId=_interopRequireDefault(__webpack_require__(119));var _getRequestUrl=_interopRequireDefault(__webpack_require__(707));var _useDataManager=_interopRequireDefault(__webpack_require__(2097));var _RightLabel=_interopRequireDefault(__webpack_require__(2382));var _Options=_interopRequireDefault(__webpack_require__(2383));var _RegenerateButton=_interopRequireDefault(__webpack_require__(2388));var _RightContent=_interopRequireDefault(__webpack_require__(2389));var _InputUID=_interopRequireDefault(__webpack_require__(2390));var _Wrapper=_interopRequireDefault(__webpack_require__(2391));var _SubLabel=_interopRequireDefault(__webpack_require__(2392));var _regex=_interopRequireDefault(__webpack_require__(2393));const InputContainer=_styledComponents.default.div`
  position: relative;
`;const Name=(0,_styledComponents.default)(_core.Label)`
  display: block;
  text-transform: capitalize;
  margin-bottom: 1rem;
`;// This component should be in buffetjs. It will be used in the media lib.
// This component will be the strapi custom dropdown component.
// TODO : Make this component generic -> InputDropdown.
// TODO : Use the Compounds components pattern
// https://blog.bitsrc.io/understanding-compound-components-in-react-23c4b84535b5
const InputUID=({attribute,contentTypeUID,description,error:inputError,name,onChange,required,validations,value,editable,...inputProps})=>{const{modifiedData,initialData}=(0,_useDataManager.default)();const[isLoading,setIsLoading]=(0,_react.useState)(false);const[availability,setAvailability]=(0,_react.useState)(null);const[isSuggestionOpen,setIsSuggestionOpen]=(0,_react.useState)(true);const[isCustomized,setIsCustomized]=(0,_react.useState)(false);const[label,setLabel]=(0,_react.useState)();const debouncedValue=(0,_hooks.useDebounce)(value,300);const debouncedTargetFieldValue=(0,_hooks.useDebounce)(modifiedData[attribute.targetField],300);const wrapperRef=(0,_react.useRef)(null);const generateUid=(0,_react.useRef)();const initialValue=initialData[name];const isCreation=(0,_lodash.isEmpty)(initialData);generateUid.current=async()=>{setIsLoading(true);const requestURL=(0,_getRequestUrl.default)('explorer/uid/generate');try{const{data}=await(0,_strapiHelperPlugin.request)(requestURL,{method:'POST',body:{contentTypeUID,field:name,data:modifiedData}});onChange({target:{name,value:data,type:'text'}});setIsLoading(false);}catch(err){console.error({err});setIsLoading(false);}};const checkAvailability=async()=>{setIsLoading(true);const requestURL=(0,_getRequestUrl.default)('explorer/uid/check-availability');try{const data=await(0,_strapiHelperPlugin.request)(requestURL,{method:'POST',body:{contentTypeUID,field:name,value:value?value.trim():null}});setAvailability(data);if(data.suggestion){setIsSuggestionOpen(true);}setIsLoading(false);}catch(err){console.error({err});setIsLoading(false);}};(0,_react.useEffect)(()=>{if(!value&&required){generateUid.current();}// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);(0,_react.useEffect)(()=>{if(debouncedValue&&debouncedValue.trim().match(_regex.default)&&debouncedValue!==initialValue){checkAvailability();}if(!debouncedValue){setAvailability(null);}// eslint-disable-next-line react-hooks/exhaustive-deps
},[debouncedValue,initialValue]);(0,_react.useEffect)(()=>{let timer;if(availability&&availability.isAvailable){timer=setTimeout(()=>{setAvailability(null);},4000);}return()=>{if(timer){clearTimeout(timer);}};},[availability]);(0,_react.useEffect)(()=>{if(!isCustomized&&isCreation&&debouncedTargetFieldValue!==null){generateUid.current();}},[debouncedTargetFieldValue,isCustomized,isCreation]);(0,_hooks.useClickAwayListener)(wrapperRef,()=>setIsSuggestionOpen(false));const handleFocus=()=>{if(availability&&availability.suggestion){setIsSuggestionOpen(true);}};const handleSuggestionClick=()=>{setIsSuggestionOpen(false);onChange({target:{name,value:availability.suggestion,type:'text'}});};const handleGenerateMouseEnter=()=>{setLabel('regenerate');};const handleGenerateMouseLeave=()=>{setLabel(null);};const handleChange=(e,canCheck,dispatch)=>{if(!canCheck){dispatch({type:'SET_CHECK'});}dispatch({type:'SET_ERROR',error:null});if(e.target.value&&isCreation){setIsCustomized(true);}onChange(e);};return/*#__PURE__*/_react.default.createElement(_core.Error,{name:name,inputError:inputError,type:"text",validations:{...validations,regex:_regex.default}},({canCheck,onBlur,error,dispatch})=>{const hasError=error&&error!==null;return/*#__PURE__*/_react.default.createElement(_Wrapper.default,{ref:wrapperRef},/*#__PURE__*/_react.default.createElement(Name,{htmlFor:name},name),/*#__PURE__*/_react.default.createElement(InputContainer,null,/*#__PURE__*/_react.default.createElement(_InputUID.default,(0,_extends2.default)({},inputProps,{editable:editable,error:hasError,onFocus:handleFocus,name:name,onChange:e=>handleChange(e,canCheck,dispatch),type:"text",onBlur:onBlur// eslint-disable-next-line no-irregular-whitespace
,value:value||''})),/*#__PURE__*/_react.default.createElement(_RightContent.default,null,/*#__PURE__*/_react.default.createElement(_RightLabel.default,{availability:availability,label:label}),editable&&/*#__PURE__*/_react.default.createElement(_RegenerateButton.default,{onMouseEnter:handleGenerateMouseEnter,onMouseLeave:handleGenerateMouseLeave,onClick:generateUid.current},isLoading?/*#__PURE__*/_react.default.createElement(_strapiHelperPlugin.LoadingIndicator,{small:true}):/*#__PURE__*/_react.default.createElement(_icons.Sync,{fill:label?'#007EFF':'#B5B7BB',width:"11px",height:"11px"}))),availability&&availability.suggestion&&isSuggestionOpen&&/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:`${_pluginId.default}.components.uid.suggested`},msg=>/*#__PURE__*/_react.default.createElement(_Options.default,{title:msg,options:[{id:'suggestion',label:availability.suggestion,onClick:handleSuggestionClick}]}))),!hasError&&description&&/*#__PURE__*/_react.default.createElement(_SubLabel.default,{as:_styles.Description},description),hasError&&/*#__PURE__*/_react.default.createElement(_SubLabel.default,{as:_styles.ErrorMessage},error));});};InputUID.propTypes={attribute:_propTypes.default.object.isRequired,contentTypeUID:_propTypes.default.string.isRequired,description:_propTypes.default.string,editable:_propTypes.default.bool,error:_propTypes.default.string,name:_propTypes.default.string.isRequired,onChange:_propTypes.default.func.isRequired,required:_propTypes.default.bool,validations:_propTypes.default.object,value:_propTypes.default.string};InputUID.defaultProps={description:'',editable:false,error:null,required:false,validations:{},value:''};var _default=InputUID;exports.default=_default;

/***/ }),

/***/ 2382:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _propTypes=_interopRequireDefault(__webpack_require__(2));var _react=_interopRequireDefault(__webpack_require__(0));var _icons=__webpack_require__(86);var _styledComponents=_interopRequireDefault(__webpack_require__(3));var _strapiHelperPlugin=__webpack_require__(6);var _pluginId=_interopRequireDefault(__webpack_require__(119));var _getTrad=_interopRequireDefault(__webpack_require__(2103));// Note you don't need to create a specific file for this one
// as it will soon be replaced by the Text one so you can leave it in this file.
const RightContentLabel=_styledComponents.default.div`
  padding: 0 5px;
  text-transform: capitalize;
  font-size: 1.3rem;
  color: ${({theme,color})=>theme.main.colors[color]};
`;const RightLabel=({label,availability})=>{const{formatMessage}=(0,_strapiHelperPlugin.useGlobalContext)();if(label){return/*#__PURE__*/_react.default.createElement(RightContentLabel,{color:"blue"},formatMessage({id:(0,_getTrad.default)('components.uid.regenerate')}));}if(availability!==null){// This should be more generic in the futur.
return availability.isAvailable?/*#__PURE__*/_react.default.createElement(_react.default.Fragment,null,/*#__PURE__*/_react.default.createElement(_icons.Success,{fill:"#27b70f",width:"20px",height:"20px"}),/*#__PURE__*/_react.default.createElement(RightContentLabel,{color:"green"},formatMessage({id:`${_pluginId.default}.components.uid.available`}))):/*#__PURE__*/_react.default.createElement(_react.default.Fragment,null,/*#__PURE__*/_react.default.createElement(_icons.Remove,{fill:"#ff203c",width:"9px",height:"9px"}),/*#__PURE__*/_react.default.createElement(RightContentLabel,{color:"red"},formatMessage({id:(0,_getTrad.default)('components.uid.unavailable')})));}return null;};RightLabel.propTypes={label:_propTypes.default.string,availability:_propTypes.default.shape({isAvailable:_propTypes.default.bool})};RightLabel.defaultProps={label:null,availability:null};var _default=RightLabel;exports.default=_default;

/***/ }),

/***/ 2383:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(0));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _reactIntl=__webpack_require__(15);var _getTrad=_interopRequireDefault(__webpack_require__(2103));var _wrapper=_interopRequireDefault(__webpack_require__(2384));var _Option=_interopRequireDefault(__webpack_require__(2385));var _OptionsTitle=_interopRequireDefault(__webpack_require__(2386));var _RightOptionLabel=_interopRequireDefault(__webpack_require__(2387));const Options=({options,title})=>/*#__PURE__*/_react.default.createElement(_wrapper.default,null,title&&/*#__PURE__*/_react.default.createElement(_OptionsTitle.default,null,title),options.map(option=>/*#__PURE__*/_react.default.createElement(_Option.default,{key:option.id,onClick:option.onClick},/*#__PURE__*/_react.default.createElement("div",null,option.label),/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:(0,_getTrad.default)('components.uid.apply')},msg=>/*#__PURE__*/_react.default.createElement(_RightOptionLabel.default,{className:"right-label"},msg)))));Options.propTypes={options:_propTypes.default.array.isRequired,title:_propTypes.default.string};Options.defaultProps={title:null};var _default=Options;exports.default=_default;

/***/ }),

/***/ 2384:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__(3));const wrapper=_styledComponents.default.div`
  position: absolute;
  width: 100%;
  margin-top: 3px;
  border: 1px solid ${props=>props.theme.main.colors.border};
  border-radius: 2px;
  background-color: white;
  z-index: 11;
`;var _default=wrapper;exports.default=_default;

/***/ }),

/***/ 2385:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__(3));const Option=_styledComponents.default.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  line-height: 3rem;
  cursor: pointer;
  &:hover {
    background-color: #e4f0fc;
    .right-label {
      display: block;
    }
  }
  .right-label {
    display: block;
  }
`;var _default=Option;exports.default=_default;

/***/ }),

/***/ 2386:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__(3));const OptionsTitle=_styledComponents.default.div`
  padding: 0.7rem 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 2.1rem;
  text-transform: uppercase;
  color: #9ea7b8;
`;var _default=OptionsTitle;exports.default=_default;

/***/ }),

/***/ 2387:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__(3));const RightOptionLabel=_styledComponents.default.div`
  color: #007dff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.1rem;
`;var _default=RightOptionLabel;exports.default=_default;

/***/ }),

/***/ 2388:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__(3));const RegenerateButton=_styledComponents.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 32px;
  background-color: #fafafb;
  z-index: 10;

  &:hover {
    cursor: pointer;
    background-color: #aed4fb;
  }
`;var _default=RegenerateButton;exports.default=_default;

/***/ }),

/***/ 2389:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__(3));const RightContent=_styledComponents.default.div`
  display: flex;
  z-index: 10;
  background-color: ${({theme})=>theme.main.colors.white};
  align-items: center;
  line-height: 32px;
  right: 1px;
  top: 1px;
  position: absolute;
`;var _default=RightContent;exports.default=_default;

/***/ }),

/***/ 2390:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__(3));var _core=__webpack_require__(25);var _styles=__webpack_require__(18);const InputUID=(0,_styledComponents.default)(_core.InputText)`
  width: 100%;
  ${({error})=>error&&`
      > input {
        border-color: ${_styles.colors.darkOrange};
      }
    `}
`;var _default=InputUID;exports.default=_default;

/***/ }),

/***/ 2391:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__(3));const Wrapper=_styledComponents.default.div`
  position: relative;
  padding-bottom: 23px;
`;var _default=Wrapper;exports.default=_default;

/***/ }),

/***/ 2392:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__(3));const SubLabel=_styledComponents.default.p`
  padding-top: 10px;
  line-height: normal;
  font-size: 1.3rem;
`;var _default=SubLabel;exports.default=_default;

/***/ }),

/***/ 2393:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;const UID_REGEX=new RegExp(/^[A-Za-z0-9-_.~]*$/);var _default=UID_REGEX;exports.default=_default;

/***/ }),

/***/ 2394:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);var _interopRequireWildcard=__webpack_require__(12);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(0));var _reactDnd=__webpack_require__(197);var _propTypes=_interopRequireDefault(__webpack_require__(2));var _lodash=__webpack_require__(7);var _reactIntl=__webpack_require__(15);var _styles=__webpack_require__(18);var _pluginId=_interopRequireDefault(__webpack_require__(119));var _useDataManager=_interopRequireDefault(__webpack_require__(2097));var _ItemTypes=_interopRequireDefault(__webpack_require__(705));var _AddFieldButton=_interopRequireDefault(__webpack_require__(2395));var _DraggedItem=_interopRequireDefault(__webpack_require__(2396));var _EmptyComponent=_interopRequireDefault(__webpack_require__(2398));var _init=_interopRequireDefault(__webpack_require__(2399));var _reducer=_interopRequireWildcard(__webpack_require__(2400));/* eslint-disable import/no-cycle */const RepeatableComponent=({componentUid,componentValue,componentValueLength,fields,isNested,max,min,name,schema})=>{const{addRepeatableComponentToField,formErrors}=(0,_useDataManager.default)();const[,drop]=(0,_reactDnd.useDrop)({accept:_ItemTypes.default.COMPONENT});const componentErrorKeys=Object.keys(formErrors).filter(errorKey=>{return(0,_lodash.take)(errorKey.split('.'),isNested?3:1).join('.')===name;}).map(errorKey=>{return errorKey.split('.').slice(0,name.split('.').length+1).join('.');});// We need to synchronize the collapses array with the data
// The key needed for react in the list will be the one from the collapses data
// This way we don't have to mutate the data when it is received and we can use a unique key
const[state,dispatch]=(0,_react.useReducer)(_reducer.default,_reducer.initialState,()=>(0,_init.default)(_reducer.initialState,componentValue));const{collapses}=state.toJS();const toggleCollapses=index=>{dispatch({type:'TOGGLE_COLLAPSE',index});};const missingComponentsValue=min-componentValueLength;const errorsArray=componentErrorKeys.map(key=>(0,_lodash.get)(formErrors,[key,'id'],''));const hasMinError=(0,_lodash.get)(errorsArray,[0],'').includes('min')&&!collapses.some(obj=>obj.isOpen===true);return/*#__PURE__*/_react.default.createElement("div",null,componentValueLength===0&&/*#__PURE__*/_react.default.createElement(_EmptyComponent.default,{hasMinError:hasMinError},/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:`${_pluginId.default}.components.empty-repeatable`},msg=>/*#__PURE__*/_react.default.createElement("p",null,msg))),/*#__PURE__*/_react.default.createElement("div",{ref:drop},componentValueLength>0&&componentValue.map((data,index)=>{const componentFieldName=`${name}.${index}`;const doesPreviousFieldContainErrorsAndIsOpen=componentErrorKeys.includes(`${name}.${index-1}`)&&index!==0&&(0,_lodash.get)(collapses,[index-1,'isOpen'],false)===false;const hasErrors=componentErrorKeys.includes(componentFieldName);return/*#__PURE__*/_react.default.createElement(_DraggedItem.default,{fields:fields,componentFieldName:componentFieldName,doesPreviousFieldContainErrorsAndIsOpen:doesPreviousFieldContainErrorsAndIsOpen,hasErrors:hasErrors,hasMinError:hasMinError,isFirst:index===0,isOpen:(0,_lodash.get)(collapses,[index,'isOpen'],false),key:(0,_lodash.get)(collapses,[index,'_temp__id'],null),onClickToggle:()=>{// Close all other collapses and open the selected one
toggleCollapses(index);},removeCollapse:()=>{dispatch({type:'REMOVE_COLLAPSE',index});},moveCollapse:(dragIndex,hoverIndex)=>{dispatch({type:'MOVE_COLLAPSE',dragIndex,hoverIndex});},parentName:name,schema:schema,toggleCollapses:toggleCollapses});})),/*#__PURE__*/_react.default.createElement(_AddFieldButton.default,{hasMinError:hasMinError,withBorderRadius:false,doesPreviousFieldContainErrorsAndIsClosed:componentValueLength>0&&componentErrorKeys.includes(`${name}.${componentValueLength-1}`)&&collapses[componentValueLength-1].isOpen===false,type:"button",onClick:()=>{if(componentValueLength<max){const shouldCheckErrors=hasMinError;addRepeatableComponentToField(name,componentUid,shouldCheckErrors);dispatch({type:'ADD_NEW_FIELD'});}else if(componentValueLength>=max){strapi.notification.info(`${_pluginId.default}.components.notification.info.maximum-requirement`);}}},/*#__PURE__*/_react.default.createElement("i",{className:"fa fa-plus"}),/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:`${_pluginId.default}.containers.EditView.add.new`})),hasMinError&&/*#__PURE__*/_react.default.createElement(_styles.ErrorMessage,null,/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:`${_pluginId.default}.components.DynamicZone.missing${missingComponentsValue>1?'.plural':'.singular'}`,values:{count:missingComponentsValue}})));};RepeatableComponent.defaultProps={componentValue:null,componentValueLength:0,fields:[],isNested:false,max:Infinity,min:-Infinity};RepeatableComponent.propTypes={componentUid:_propTypes.default.string.isRequired,componentValue:_propTypes.default.oneOfType([_propTypes.default.array,_propTypes.default.object]),componentValueLength:_propTypes.default.number,fields:_propTypes.default.array,isNested:_propTypes.default.bool,max:_propTypes.default.number,min:_propTypes.default.number,name:_propTypes.default.string.isRequired,schema:_propTypes.default.object.isRequired};var _default=RepeatableComponent;exports.default=_default;

/***/ }),

/***/ 2395:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireWildcard=__webpack_require__(12);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _styledComponents=_interopRequireWildcard(__webpack_require__(3));const Button=_styledComponents.default.button`
  width: 100%;
  height: 37px;
  margin-bottom: 21px;
  padding: 0 0 3px 0;
  text-align: center;
  border: 1px solid rgba(227, 233, 243, 0.75);
  border-top: 1px solid
    ${({doesPreviousFieldContainErrorsAndIsClosed})=>doesPreviousFieldContainErrorsAndIsClosed?'#FFA784':'rgba(227, 233, 243, 0.75)'};

  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  ${({withBorderRadius})=>{if(withBorderRadius){return(0,_styledComponents.css)`
        border-radius: 2px;
      `;}return'';}}

  ${({hasMinError})=>{if(hasMinError){return`
        border-color: #FAA684;
        border-top-color: rgba(227, 233, 243, 0.75);
      `;}return'';}}

  color: #007eff;
  font-size: 12px;
  font-weight: 700;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background-color: #fff;
  &:focus {
    outline: 0;
  }
  > i,
  svg {
    margin-right: 10px;
  }
  & + p {
    margin-bottom: 17px;
    margin-top: -18px;
  }
`;var _default=Button;exports.default=_default;

/***/ }),

/***/ 2396:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);var _interopRequireWildcard=__webpack_require__(12);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(0));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _lodash=__webpack_require__(7);var _reactstrap=__webpack_require__(62);var _reactDnd=__webpack_require__(197);var _reactDndHtml5Backend=__webpack_require__(283);var _useDataManager=_interopRequireDefault(__webpack_require__(2097));var _useEditView=_interopRequireDefault(__webpack_require__(2113));var _ItemTypes=_interopRequireDefault(__webpack_require__(705));var _Inputs=_interopRequireDefault(__webpack_require__(2130));var _FieldComponent=_interopRequireDefault(__webpack_require__(2114));var _Banner=_interopRequireDefault(__webpack_require__(712));var _FormWrapper=_interopRequireDefault(__webpack_require__(2397));/* eslint-disable import/no-cycle */ /* eslint-disable react/no-array-index-key */ // Issues:
// https://github.com/react-dnd/react-dnd/issues/1368
// https://github.com/frontend-collective/react-sortable-tree/issues/490
const DraggedItem=({componentFieldName,doesPreviousFieldContainErrorsAndIsOpen,fields,hasErrors,hasMinError,isFirst,isOpen,moveCollapse,onClickToggle,removeCollapse,schema,toggleCollapses})=>{const{checkFormErrors,modifiedData,moveComponentField,removeRepeatableField,triggerFormValidation}=(0,_useDataManager.default)();const{setIsDraggingComponent,unsetIsDraggingComponent}=(0,_useEditView.default)();const mainField=(0,_lodash.get)(schema,['settings','mainField'],'id');const displayedValue=(0,_lodash.get)(modifiedData,[...componentFieldName.split('.'),mainField],null);const dragRef=(0,_react.useRef)(null);const dropRef=(0,_react.useRef)(null);const[showForm,setShowForm]=(0,_react.useState)(false);(0,_react.useEffect)(()=>{if(isOpen){setShowForm(true);}},[isOpen]);const[,drop]=(0,_reactDnd.useDrop)({accept:_ItemTypes.default.COMPONENT,canDrop(){return false;},hover(item,monitor){if(!dropRef.current){return;}const dragPath=item.originalPath;const hoverPath=componentFieldName;const fullPathToComponentArray=dragPath.split('.');const dragIndexString=fullPathToComponentArray.slice().splice(-1).join('');const hoverIndexString=hoverPath.split('.').splice(-1).join('');const pathToComponentArray=fullPathToComponentArray.slice(0,fullPathToComponentArray.length-1);const dragIndex=parseInt(dragIndexString,10);const hoverIndex=parseInt(hoverIndexString,10);// Don't replace items with themselves
if(dragIndex===hoverIndex){return;}// Determine rectangle on screen
const hoverBoundingRect=dropRef.current.getBoundingClientRect();// Get vertical middle
const hoverMiddleY=(hoverBoundingRect.bottom-hoverBoundingRect.top)/2;// Determine mouse position
const clientOffset=monitor.getClientOffset();// Get pixels to the top
const hoverClientY=clientOffset.y-hoverBoundingRect.top;// Only perform the move when the mouse has crossed half of the items height
// When dragging downwards, only move when the cursor is below 50%
// When dragging upwards, only move when the cursor is above 50%
// Dragging downwards
if(dragIndex<hoverIndex&&hoverClientY<hoverMiddleY){return;}// Dragging upwards
if(dragIndex>hoverIndex&&hoverClientY>hoverMiddleY){return;}// Time to actually perform the action in the data
moveComponentField(pathToComponentArray,dragIndex,hoverIndex);// Time to actually perform the action in the synchronized collapses
moveCollapse(dragIndex,hoverIndex);// Note: we're mutating the monitor item here!
// Generally it's better to avoid mutations,
// but it's good here for the sake of performance
// to avoid expensive index searches.
item.originalPath=hoverPath;}});const[{isDragging},drag,preview]=(0,_reactDnd.useDrag)({item:{type:_ItemTypes.default.COMPONENT,displayedValue,originalPath:componentFieldName},begin:()=>{// Close all collapses
toggleCollapses(-1);// Prevent the relations select from firing requests
setIsDraggingComponent();},end:()=>{// Enable the relations select to fire requests
unsetIsDraggingComponent();// Update the errors
triggerFormValidation();},collect:monitor=>({isDragging:monitor.isDragging()})});(0,_react.useEffect)(()=>{preview((0,_reactDndHtml5Backend.getEmptyImage)(),{captureDraggingState:false});},[preview]);const getField=fieldName=>(0,_lodash.get)(schema,['schema','attributes',fieldName],{});const getMeta=fieldName=>(0,_lodash.get)(schema,['metadatas',fieldName,'edit'],{});// Create the refs
// We need 1 for the drop target
// 1 for the drag target
const refs={dragRef:drag(dragRef),dropRef:drop(dropRef)};return/*#__PURE__*/_react.default.createElement(_react.default.Fragment,null,/*#__PURE__*/_react.default.createElement(_Banner.default,{componentFieldName:componentFieldName,hasErrors:hasErrors,hasMinError:hasMinError,isFirst:isFirst,displayedValue:displayedValue,doesPreviousFieldContainErrorsAndIsOpen:doesPreviousFieldContainErrorsAndIsOpen,isDragging:isDragging,isOpen:isOpen,onClickToggle:onClickToggle,onClickRemove:()=>{removeRepeatableField(componentFieldName);removeCollapse();},ref:refs}),/*#__PURE__*/_react.default.createElement(_reactstrap.Collapse,{isOpen:isOpen,style:{backgroundColor:'#FAFAFB'},onExited:()=>setShowForm(false)},!isDragging&&/*#__PURE__*/_react.default.createElement(_FormWrapper.default,{hasErrors:hasErrors,isOpen:isOpen},showForm&&fields.map((fieldRow,key)=>{return/*#__PURE__*/_react.default.createElement("div",{className:"row",key:key},fieldRow.map(field=>{const currentField=getField(field.name);const isComponent=(0,_lodash.get)(currentField,'type','')==='component';const keys=`${componentFieldName}.${field.name}`;if(isComponent){const componentUid=currentField.component;const metas=getMeta(field.name);return/*#__PURE__*/_react.default.createElement(_FieldComponent.default,{componentUid:componentUid,isRepeatable:currentField.repeatable,key:field.name,label:metas.label,isNested:true,name:keys,max:currentField.max,min:currentField.min});}return/*#__PURE__*/_react.default.createElement("div",{key:field.name,className:`col-${field.size}`},/*#__PURE__*/_react.default.createElement(_Inputs.default,{autoFocus:false,keys:keys,layout:schema,name:field.name,onChange:()=>{},onBlur:hasErrors?checkFormErrors:null}));}));}))));};DraggedItem.defaultProps={doesPreviousFieldContainErrorsAndIsOpen:false,fields:[],hasErrors:false,hasMinError:false,isFirst:false,isOpen:false,moveCollapse:()=>{},toggleCollapses:()=>{}};DraggedItem.propTypes={componentFieldName:_propTypes.default.string.isRequired,doesPreviousFieldContainErrorsAndIsOpen:_propTypes.default.bool,fields:_propTypes.default.array,hasErrors:_propTypes.default.bool,hasMinError:_propTypes.default.bool,isFirst:_propTypes.default.bool,isOpen:_propTypes.default.bool,moveCollapse:_propTypes.default.func,onClickToggle:_propTypes.default.func.isRequired,removeCollapse:_propTypes.default.func.isRequired,schema:_propTypes.default.object.isRequired,toggleCollapses:_propTypes.default.func};var _default=DraggedItem;exports.default=_default;

/***/ }),

/***/ 2397:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__(3));/* eslint-disable indent */const FormWrapper=_styledComponents.default.div`
  padding-top: 24px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;
  border-top: 1px solid
    ${({hasErrors,isOpen})=>{if(hasErrors){return'#ffa784';}if(isOpen){return'#AED4FB';}return'rgba(227, 233, 243, 0.75)';}};
`;var _default=FormWrapper;exports.default=_default;

/***/ }),

/***/ 2398:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__(3));const EmptyComponent=_styledComponents.default.div`
  height: 71px;
  border: 1px solid rgba(227, 233, 243, 0.75);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-bottom: 0;
  line-height: 66px;
  text-align: center;
  background-color: #fff;

  ${({hasMinError})=>{if(hasMinError){return'border-color: #FAA684';}return'';}}

  > p {
    color: #9ea7b8;
    font-size: 13px;
    font-weight: 500;
  }
`;var _default=EmptyComponent;exports.default=_default;

/***/ }),

/***/ 2399:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _immutable=__webpack_require__(37);var _lodash=__webpack_require__(7);// Initialize all the fields of the component is the isOpen key to false
// The key will be used to control the open close state of the banner
function init(initialState,componentValue){return initialState.update('collapses',list=>{if((0,_lodash.isArray)(componentValue)){return(0,_immutable.fromJS)(componentValue.map((_,i)=>({isOpen:false,_temp__id:i})));}return list;});}var _default=init;exports.default=_default;

/***/ }),

/***/ 2400:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.initialState=exports.default=void 0;var _immutable=__webpack_require__(37);const initialState=(0,_immutable.fromJS)({collapses:[]});exports.initialState=initialState;const getMax=arr=>{if(arr.size===0){return-1;}return Math.max.apply(Math,arr.toJS().map(o=>o._temp__id));};const reducer=(state,action)=>{switch(action.type){case'ADD_NEW_FIELD':return state.update('collapses',list=>{return list.map(obj=>obj.update('isOpen',()=>false)).push((0,_immutable.fromJS)({isOpen:true,_temp__id:getMax(list)+1}));});case'MOVE_COLLAPSE':return state.updateIn(['collapses'],list=>{const oldList=list;const newList=list.delete(action.dragIndex).insert(action.hoverIndex,state.getIn(['collapses',action.dragIndex]));// Fix for
// https://github.com/react-dnd/react-dnd/issues/1368
// https://github.com/frontend-collective/react-sortable-tree/issues/490
if(oldList.size!==newList.size){strapi.notification.error("An error occured while reordering your component's field, please try again");return oldList;}return newList;});case'TOGGLE_COLLAPSE':return state.update('collapses',list=>{return list.map((obj,index)=>{if(index===action.index){return obj.update('isOpen',v=>!v);}return obj.update('isOpen',()=>false);});});case'REMOVE_COLLAPSE':return state.removeIn(['collapses',action.index]).update('collapses',list=>list.map(obj=>obj.set('isOpen',false))).update('collapses',list=>{if(action.shouldAddEmptyField){return list.push((0,_immutable.fromJS)({isOpen:true}));}return list;});default:return state;}};var _default=reducer;exports.default=_default;

/***/ }),

/***/ 2401:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(11));var _styledComponents=_interopRequireDefault(__webpack_require__(3));function _templateObject(){var data=(0,_taggedTemplateLiteral2.default)(["\n  position: absolute;\n  top: -16px;\n  left: 10px;\n  display: flex;\n\n  > .component_name {\n    overflow: hidden;\n    position: relative;\n    width: 31px;\n    height: 31px;\n    padding: 0 11px 0 0px;\n    color: #007eff;\n    font-size: 13px;\n    font-weight: 600;\n    line-height: 26px;\n    border-radius: 31px;\n    border: 2px solid white;\n    background-color: #e6f0fb;\n    transition: all 0.2s ease-out;\n\n    .component_icon {\n      z-index: 1;\n      display: flex;\n      position: absolute;\n      top: -1px;\n      left: -1px;\n      width: 29px;\n      height: 29px;\n      border-radius: 31px;\n      border: 1px solid white;\n      background-color: #e6f0fb;\n\n      i,\n      svg {\n        margin: auto;\n        color: #007eff;\n        font-size: 11px;\n      }\n    }\n\n    &:hover {\n      cursor: pointer;\n      width: auto !important;\n      padding-left: 39px;\n    }\n  }\n"]);_templateObject=function _templateObject(){return data;};return data;}var ComponentIcon=_styledComponents.default.div(_templateObject());var _default=ComponentIcon;exports.default=_default;

/***/ }),

/***/ 2402:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(11));var _styledComponents=_interopRequireDefault(__webpack_require__(3));function _templateObject(){var data=(0,_taggedTemplateLiteral2.default)(["\n  font-weight: 500;\n  font-size: 13px;\n  margin-bottom: 1rem;\n  display: block;\n"]);_templateObject=function _templateObject(){return data;};return data;}var Label=_styledComponents.default.label(_templateObject());var _default=Label;exports.default=_default;

/***/ }),

/***/ 2403:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(11));var _styledComponents=_interopRequireDefault(__webpack_require__(3));function _templateObject(){var data=(0,_taggedTemplateLiteral2.default)(["\n  position: absolute;\n  top: 0;\n  right: 15px;\n  display: flex;\n\n  cursor: pointer;\n  color: #4b515a;\n\n  > span {\n    margin-right: 10px;\n    display: none;\n  }\n\n  &:hover {\n    > div {\n      background-color: #faa684;\n    }\n    color: #f64d0a;\n    > span {\n      display: initial;\n    }\n  }\n\n  > div {\n    width: 24px;\n    height: 24px;\n    background-color: #f3f4f4;\n    text-align: center;\n    border-radius: 2px;\n    &:after {\n      content: '\f1f8';\n      font-size: 14px;\n      font-family: FontAwesome;\n    }\n  }\n"],["\n  position: absolute;\n  top: 0;\n  right: 15px;\n  display: flex;\n\n  cursor: pointer;\n  color: #4b515a;\n\n  > span {\n    margin-right: 10px;\n    display: none;\n  }\n\n  &:hover {\n    > div {\n      background-color: #faa684;\n    }\n    color: #f64d0a;\n    > span {\n      display: initial;\n    }\n  }\n\n  > div {\n    width: 24px;\n    height: 24px;\n    background-color: #f3f4f4;\n    text-align: center;\n    border-radius: 2px;\n    &:after {\n      content: '\\f1f8';\n      font-size: 14px;\n      font-family: FontAwesome;\n    }\n  }\n"]);_templateObject=function _templateObject(){return data;};return data;}var ResetComponent=_styledComponents.default.div(_templateObject());var _default=ResetComponent;exports.default=_default;

/***/ }),

/***/ 2404:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(11));var _styledComponents=_interopRequireDefault(__webpack_require__(3));function _templateObject(){var data=(0,_taggedTemplateLiteral2.default)(["\n  position: relative;\n  .row {\n    margin-bottom: 4px;\n  }\n\n  ","\n"]);_templateObject=function _templateObject(){return data;};return data;}var Wrapper=_styledComponents.default.div(_templateObject(),function(_ref){var isFromDynamicZone=_ref.isFromDynamicZone;if(isFromDynamicZone){return"\n        background-color: #fff;\n      ";}return'';});var _default=Wrapper;exports.default=_default;

/***/ }),

/***/ 2405:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(11));var _styledComponents=_interopRequireDefault(__webpack_require__(3));var _PlusButton=_interopRequireDefault(__webpack_require__(2159));function _templateObject(){var data=(0,_taggedTemplateLiteral2.default)(["\n  transform: rotate(-90deg);\n  transition: background-color 0.1s linear;\n  transition: transform 0.1s ease-in-out;\n  &:hover {\n    background-color: #aed4fb;\n    :before,\n    :after {\n      background-color: #007eff;\n    }\n  }\n\n  ","\n  &.isOpen {\n    transform: rotate(-45deg);\n  }\n"]);_templateObject=function _templateObject(){return data;};return data;}var Button=(0,_styledComponents.default)(_PlusButton.default)(_templateObject(),function(_ref){var hasError=_ref.hasError;if(hasError){return"\n        background-color: #FAA684;\n        :before, :after {\n          background-color: #F64D0A;\n        }\n      ";}return'';});var _default=Button;exports.default=_default;

/***/ }),

/***/ 2406:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireWildcard=__webpack_require__(12);var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(11));var _styledComponents=_interopRequireWildcard(__webpack_require__(3));function _templateObject2(){var data=(0,_taggedTemplateLiteral2.default)(["\n      max-height: 260px;\n    "]);_templateObject2=function _templateObject2(){return data;};return data;}function _templateObject(){var data=(0,_taggedTemplateLiteral2.default)(["\n  overflow: hidden;\n  max-height: 0;\n  transition: max-height 0.2s ease-out;\n\n  > div {\n    margin-top: 15px;\n    padding: 23px 18px 21px 18px;\n    background-color: #f2f3f4;\n  }\n\n  ","\n\n  .componentPickerTitle {\n    margin-bottom: 15px;\n    color: #919bae;\n    font-weight: 600;\n    font-size: 13px;\n    line-height: normal;\n  }\n  .componentsList {\n    display: flex;\n    overflow-x: auto;\n  }\n"]);_templateObject=function _templateObject(){return data;};return data;}var ComponentsPicker=_styledComponents.default.div(_templateObject(),function(_ref){var isOpen=_ref.isOpen;return isOpen&&(0,_styledComponents.css)(_templateObject2());});var _default=ComponentsPicker;exports.default=_default;

/***/ }),

/***/ 2407:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(11));var _styledComponents=_interopRequireDefault(__webpack_require__(3));function _templateObject(){var data=(0,_taggedTemplateLiteral2.default)(["\n  position: relative;\n  > div {\n    position: relative;\n    box-shadow: 0 2px 4px #e3e9f3;\n    border-radius: 2px;\n    .arrow-icons {\n      position: absolute;\n      top: -12px;\n      right: 49px;\n      z-index: 9;\n      .arrow-btn {\n        display: inline-flex;\n        svg {\n          margin-left: 5px;\n          margin-top: 5px;\n        }\n      }\n    }\n    &:not(:first-of-type) {\n      margin-top: 32px;\n      &:before {\n        content: '&';\n        position: absolute;\n        top: -30px;\n        left: 24.5px;\n        height: 100%;\n        width: 2px;\n        background-color: #e6f0fb;\n        color: transparent;\n      }\n    }\n    > div:last-of-type {\n      padding-top: 6px;\n      padding-bottom: 5px;\n      margin-bottom: 22px;\n      border-radius: 2px;\n    }\n  }\n"]);_templateObject=function _templateObject(){return data;};return data;}var ComponentWrapper=_styledComponents.default.div(_templateObject());var _default=ComponentWrapper;exports.default=_default;

/***/ }),

/***/ 2408:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(11));var _styledComponents=_interopRequireDefault(__webpack_require__(3));function _templateObject(){var data=(0,_taggedTemplateLiteral2.default)(["\n  position: relative;\n  padding-top: 10px;\n  margin-bottom: 15px;\n  & + & {\n    padding-top: 13px;\n  }\n"]);_templateObject=function _templateObject(){return data;};return data;}var DynamicZoneWrapper=_styledComponents.default.div(_templateObject());var _default=DynamicZoneWrapper;exports.default=_default;

/***/ }),

/***/ 2409:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(11));var _styledComponents=_interopRequireDefault(__webpack_require__(3));function _templateObject(){var data=(0,_taggedTemplateLiteral2.default)(["\n  padding: 9px 20px;\n  font-size: 13px;\n  font-weight: 600;\n  position: relative;\n  min-height: 64px;\n  &:after {\n    content: '\u2022';\n    position: absolute;\n    top: 15px;\n    left: 21.5px;\n    font-size: 15px;\n    width: 8px;\n    height: 8px;\n    background-color: #aed4fb;\n    color: transparent;\n    border-radius: 4px;\n    border: 1px solid white;\n  }\n  &:before {\n    content: '&';\n    position: absolute;\n    top: 22px;\n    left: 24.5px;\n    height: 100%;\n    width: 2px;\n    background-color: #e6f0fb;\n    color: transparent;\n  }\n  p {\n    padding-left: 18px;\n    margin-bottom: 0;\n  }\n  p:last-of-type:not(:first-of-type) {\n    color: #9ea7b8;\n    font-weight: 400;\n  }\n"]);_templateObject=function _templateObject(){return data;};return data;}var Label=_styledComponents.default.div(_templateObject());var _default=Label;exports.default=_default;

/***/ }),

/***/ 2410:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(11));var _styledComponents=_interopRequireDefault(__webpack_require__(3));function _templateObject(){var data=(0,_taggedTemplateLiteral2.default)(["\n  height: 31px;\n  width: 31px;\n  border-radius: 50%;\n  background-color: #f2f3f4;\n  border: 2px solid #ffffff;\n  cursor: pointer;\n  display: flex;\n  z-index: 9;\n  svg {\n    font-size: 10px;\n    line-height: 29px;\n    margin: auto;\n  }\n  &:not(.arrow-btn) {\n    position: absolute;\n    top: -16px;\n    right: 10px;\n    transition: all 200ms ease-in;\n    &:hover {\n      background-color: #faa684;\n      color: #f64d0a;\n    }\n  }\n  &.arrow-btn {\n    height: 22px;\n    width: 22px;\n    background-color: #ffffff;\n    border: 2px solid #ffffff;\n    svg {\n      font-size: 10px;\n      line-height: 22px;\n    }\n    &:hover {\n      background-color: #f2f3f4;\n    }\n    &.arrow-down {\n      transform: rotate(180deg);\n    }\n  }\n"]);_templateObject=function _templateObject(){return data;};return data;}var RoundCTA=_styledComponents.default.div(_templateObject());var _default=RoundCTA;exports.default=_default;

/***/ }),

/***/ 2411:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(11));var _styledComponents=_interopRequireDefault(__webpack_require__(3));function _templateObject(){var data=(0,_taggedTemplateLiteral2.default)(["\n  position: relative;\n  padding-top: 5px;\n  text-align: center;\n  .info {\n    position: absolute;\n    display: none;\n    top: 10px;\n    left: calc(50% + 28px);\n    > span {\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      color: #007eff;\n      font-size: 11px;\n      font-weight: 700;\n    }\n  }\n  button {\n    &:not(.isOpen):hover + .info {\n      display: block;\n    }\n  }\n  .error-label {\n    color: #f64d0a;\n    font-size: 13px;\n    margin-top: 4px;\n    margin-bottom: -5px;\n  }\n"]);_templateObject=function _templateObject(){return data;};return data;}var Wrapper=_styledComponents.default.div(_templateObject());var _default=Wrapper;exports.default=_default;

/***/ }),

/***/ 2412:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(11));var _styledComponents=_interopRequireDefault(__webpack_require__(3));function _templateObject(){var data=(0,_taggedTemplateLiteral2.default)(["\n  padding: 22px 10px 0 10px;\n  background: #ffffff;\n  border-radius: 2px;\n  box-shadow: 0 2px 4px #e3e9f3;\n  margin-bottom: 3px;\n  > div {\n    margin-right: 0;\n    margin-left: 0;\n  }\n  .row {\n    margin-bottom: 4px;\n    &:last-of-type {\n      margin-bottom: 0;\n    }\n  }\n"]);_templateObject=function _templateObject(){return data;};return data;}var FormWrapper=_styledComponents.default.div(_templateObject());var _default=FormWrapper;exports.default=_default;

/***/ }),

/***/ 2413:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireWildcard=__webpack_require__(12);var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _regenerator=_interopRequireDefault(__webpack_require__(85));var _asyncToGenerator2=_interopRequireDefault(__webpack_require__(108));var _slicedToArray2=_interopRequireDefault(__webpack_require__(57));var _lodash=__webpack_require__(7);var _propTypes=_interopRequireDefault(__webpack_require__(2));var _react=_interopRequireWildcard(__webpack_require__(0));var _reactRouterDom=__webpack_require__(35);var _strapiHelperPlugin=__webpack_require__(6);var _EditViewDataManager=_interopRequireDefault(__webpack_require__(2156));var _pluginId=_interopRequireDefault(__webpack_require__(119));var _init=_interopRequireDefault(__webpack_require__(2414));var _reducer=_interopRequireWildcard(__webpack_require__(2415));var _utils=__webpack_require__(2416);var getRequestUrl=function getRequestUrl(path){return"/".concat(_pluginId.default,"/explorer/").concat(path);};var EditViewDataManagerProvider=function EditViewDataManagerProvider(_ref){var allLayoutData=_ref.allLayoutData,children=_ref.children,redirectToPreviousPage=_ref.redirectToPreviousPage,slug=_ref.slug;var _useParams=(0,_reactRouterDom.useParams)(),id=_useParams.id;// Retrieve the search
var _useReducer=(0,_react.useReducer)(_reducer.default,_reducer.initialState,_init.default),_useReducer2=(0,_slicedToArray2.default)(_useReducer,2),reducerState=_useReducer2[0],dispatch=_useReducer2[1];var _reducerState$toJS=reducerState.toJS(),formErrors=_reducerState$toJS.formErrors,initialData=_reducerState$toJS.initialData,isLoading=_reducerState$toJS.isLoading,modifiedData=_reducerState$toJS.modifiedData,modifiedDZName=_reducerState$toJS.modifiedDZName,shouldShowLoadingState=_reducerState$toJS.shouldShowLoadingState,shouldCheckErrors=_reducerState$toJS.shouldCheckErrors;var _useState=(0,_react.useState)(id==='create'),_useState2=(0,_slicedToArray2.default)(_useState,2),isCreatingEntry=_useState2[0],setIsCreatingEntry=_useState2[1];var currentContentTypeLayout=(0,_lodash.get)(allLayoutData,['contentType'],{});var abortController=new AbortController();var signal=abortController.signal;var _useGlobalContext=(0,_strapiHelperPlugin.useGlobalContext)(),emitEvent=_useGlobalContext.emitEvent,formatMessage=_useGlobalContext.formatMessage;var _useRouteMatch=(0,_reactRouterDom.useRouteMatch)('/plugins/content-manager/:contentType'),contentType=_useRouteMatch.params.contentType;var isSingleType=contentType==='singleType';(0,_react.useEffect)(function(){if(!isLoading){checkFormErrors();}// eslint-disable-next-line react-hooks/exhaustive-deps
},[shouldCheckErrors]);(0,_react.useEffect)(function(){var fetchData=/*#__PURE__*/function(){var _ref2=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee(){var data;return _regenerator.default.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;_context.next=3;return(0,_strapiHelperPlugin.request)(getRequestUrl("".concat(slug,"/").concat(id||'')),{method:'GET',signal:signal});case 3:data=_context.sent;dispatch({type:'GET_DATA_SUCCEEDED',data:data});_context.next=11;break;case 7:_context.prev=7;_context.t0=_context["catch"](0);if(id&&_context.t0.code!==20){strapi.notification.error("".concat(_pluginId.default,".error.record.fetch"));}if(!id&&_context.t0.response.status===404){setIsCreatingEntry(true);}case 11:case"end":return _context.stop();}}},_callee,null,[[0,7]]);}));return function fetchData(){return _ref2.apply(this,arguments);};}();var componentsDataStructure=Object.keys(allLayoutData.components).reduce(function(acc,current){acc[current]=(0,_utils.createDefaultForm)((0,_lodash.get)(allLayoutData,['components',current,'schema','attributes'],{}),allLayoutData.components);return acc;},{});var contentTypeDataStructure=(0,_utils.createDefaultForm)(currentContentTypeLayout.schema.attributes,allLayoutData.components);// Force state to be cleared when navigation from one entry to another
dispatch({type:'RESET_PROPS'});dispatch({type:'SET_DEFAULT_DATA_STRUCTURES',componentsDataStructure:componentsDataStructure,contentTypeDataStructure:contentTypeDataStructure});if(!isCreatingEntry){fetchData();}else{// Will create default form
dispatch({type:'SET_DEFAULT_MODIFIED_DATA_STRUCTURE',contentTypeDataStructure:contentTypeDataStructure});}return function(){abortController.abort();};// eslint-disable-next-line react-hooks/exhaustive-deps
},[id,slug,isCreatingEntry]);var addComponentToDynamicZone=function addComponentToDynamicZone(keys,componentUid){var shouldCheckErrors=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;emitEvent('addComponentToDynamicZone');dispatch({type:'ADD_COMPONENT_TO_DYNAMIC_ZONE',keys:keys.split('.'),componentUid:componentUid,shouldCheckErrors:shouldCheckErrors});};var addNonRepeatableComponentToField=function addNonRepeatableComponentToField(keys,componentUid){dispatch({type:'ADD_NON_REPEATABLE_COMPONENT_TO_FIELD',keys:keys.split('.'),componentUid:componentUid});};var addRelation=function addRelation(_ref3){var _ref3$target=_ref3.target,name=_ref3$target.name,value=_ref3$target.value;dispatch({type:'ADD_RELATION',keys:name.split('.'),value:value});};var addRepeatableComponentToField=function addRepeatableComponentToField(keys,componentUid){var shouldCheckErrors=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;dispatch({type:'ADD_REPEATABLE_COMPONENT_TO_FIELD',keys:keys.split('.'),componentUid:componentUid,shouldCheckErrors:shouldCheckErrors});};var checkFormErrors=/*#__PURE__*/function(){var _ref4=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee2(){var dataToSet,schema,errors,updatedData,_args2=arguments;return _regenerator.default.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:dataToSet=_args2.length>0&&_args2[0]!==undefined?_args2[0]:{};schema=(0,_utils.createYupSchema)(currentContentTypeLayout,{components:(0,_lodash.get)(allLayoutData,'components',{})},isCreatingEntry);errors={};updatedData=(0,_lodash.cloneDeep)(modifiedData);if(!(0,_lodash.isEmpty)(updatedData)){(0,_lodash.set)(updatedData,dataToSet.path,dataToSet.value);}_context2.prev=5;_context2.next=8;return schema.validate(updatedData,{abortEarly:false});case 8:_context2.next=14;break;case 10:_context2.prev=10;_context2.t0=_context2["catch"](5);errors=(0,_utils.getYupInnerErrors)(_context2.t0);if(modifiedDZName){errors=Object.keys(errors).reduce(function(acc,current){var dzName=current.split('.')[0];if(dzName!==modifiedDZName){acc[current]=errors[current];}return acc;},{});}case 14:dispatch({type:'SET_ERRORS',errors:errors});case 15:case"end":return _context2.stop();}}},_callee2,null,[[5,10]]);}));return function checkFormErrors(){return _ref4.apply(this,arguments);};}();var handleChange=function handleChange(_ref5){var _ref5$target=_ref5.target,name=_ref5$target.name,value=_ref5$target.value,type=_ref5$target.type;var inputValue=value;// Empty string is not a valid date,
// Set the date to null when it's empty
if(type==='date'&&value===''){inputValue=null;}if(type==='password'&&!value){dispatch({type:'REMOVE_PASSWORD_FIELD',keys:name.split('.')});return;}// Allow to reset enum
if(type==='select-one'&&value===''){inputValue=null;}// Allow to reset number input
if(type==='number'&&value===''){inputValue=null;}dispatch({type:'ON_CHANGE',keys:name.split('.'),value:inputValue});};var handleSubmit=/*#__PURE__*/function(){var _ref6=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee3(e){var schema,filesToUpload,cleanedData,formData,headers,method,endPoint,error,errors;return _regenerator.default.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:e.preventDefault();// Create yup schema
schema=(0,_utils.createYupSchema)(currentContentTypeLayout,{components:(0,_lodash.get)(allLayoutData,'components',{})},isCreatingEntry);_context3.prev=2;_context3.next=5;return schema.validate(modifiedData,{abortEarly:false});case 5:// Set the loading state in the plugin header
filesToUpload=(0,_utils.getFilesToUpload)(modifiedData);// Remove keys that are not needed
// Clean relations
cleanedData=(0,_utils.cleanData)((0,_lodash.cloneDeep)(modifiedData),currentContentTypeLayout,allLayoutData.components);formData=new FormData();formData.append('data',JSON.stringify(cleanedData));Object.keys(filesToUpload).forEach(function(key){var files=filesToUpload[key];files.forEach(function(file){formData.append("files.".concat(key),file);});});// Change the request helper default headers so we can pass a FormData
headers={};method=isCreatingEntry?'POST':'PUT';// All endpoints for creation and edition are the same for both content types
// But, the id from the URL didn't exist for the single types.
// So, we use the id of the modified data if this one is setted.
if(isCreatingEntry){endPoint=slug;}else if(modifiedData){endPoint="".concat(slug,"/").concat(modifiedData.id);}else{endPoint="".concat(slug,"/").concat(id);}emitEvent(isCreatingEntry?'willCreateEntry':'willEditEntry');_context3.prev=14;_context3.next=17;return(0,_strapiHelperPlugin.request)(getRequestUrl(endPoint),{method:method,headers:headers,body:formData,signal:signal},false,false);case 17:emitEvent(isCreatingEntry?'didCreateEntry':'didEditEntry');dispatch({type:'SUBMIT_SUCCESS'});strapi.notification.success("".concat(_pluginId.default,".success.record.save"));if(isSingleType){setIsCreatingEntry(false);}else{redirectToPreviousPage();}_context3.next=30;break;case 23:_context3.prev=23;_context3.t0=_context3["catch"](14);console.error({err:_context3.t0});error=(0,_lodash.get)(_context3.t0,['response','payload','message','0','messages','0','id'],'SERVER ERROR');setIsSubmitting(false);emitEvent(isCreatingEntry?'didNotCreateEntry':'didNotEditEntry',{error:_context3.t0});strapi.notification.error(error);case 30:_context3.next=37;break;case 32:_context3.prev=32;_context3.t1=_context3["catch"](2);errors=(0,_utils.getYupInnerErrors)(_context3.t1);console.error({err:_context3.t1,errors:errors});dispatch({type:'SUBMIT_ERRORS',errors:errors});case 37:case"end":return _context3.stop();}}},_callee3,null,[[2,32],[14,23]]);}));return function handleSubmit(_x){return _ref6.apply(this,arguments);};}();var moveComponentDown=function moveComponentDown(dynamicZoneName,currentIndex){emitEvent('changeComponentsOrder');dispatch({type:'MOVE_COMPONENT_DOWN',dynamicZoneName:dynamicZoneName,currentIndex:currentIndex,shouldCheckErrors:shouldCheckDZErrors(dynamicZoneName)});};var moveComponentUp=function moveComponentUp(dynamicZoneName,currentIndex){emitEvent('changeComponentsOrder');dispatch({type:'MOVE_COMPONENT_UP',dynamicZoneName:dynamicZoneName,currentIndex:currentIndex,shouldCheckErrors:shouldCheckDZErrors(dynamicZoneName)});};var moveComponentField=function moveComponentField(pathToComponent,dragIndex,hoverIndex){dispatch({type:'MOVE_COMPONENT_FIELD',pathToComponent:pathToComponent,dragIndex:dragIndex,hoverIndex:hoverIndex});};var moveRelation=function moveRelation(dragIndex,overIndex,name){dispatch({type:'MOVE_FIELD',dragIndex:dragIndex,overIndex:overIndex,keys:name.split('.')});};var onRemoveRelation=function onRemoveRelation(keys){dispatch({type:'REMOVE_RELATION',keys:keys});};var shouldCheckDZErrors=function shouldCheckDZErrors(dzName){var doesDZHaveError=Object.keys(formErrors).some(function(key){return key.split('.')[0]===dzName;});var shouldCheckErrors=!(0,_lodash.isEmpty)(formErrors)&&doesDZHaveError;return shouldCheckErrors;};var removeComponentFromDynamicZone=function removeComponentFromDynamicZone(dynamicZoneName,index){emitEvent('removeComponentFromDynamicZone');dispatch({type:'REMOVE_COMPONENT_FROM_DYNAMIC_ZONE',dynamicZoneName:dynamicZoneName,index:index,shouldCheckErrors:shouldCheckDZErrors(dynamicZoneName)});};var removeComponentFromField=function removeComponentFromField(keys,componentUid){dispatch({type:'REMOVE_COMPONENT_FROM_FIELD',keys:keys.split('.'),componentUid:componentUid});};var removeRepeatableField=function removeRepeatableField(keys,componentUid){dispatch({type:'REMOVE_REPEATABLE_FIELD',keys:keys.split('.'),componentUid:componentUid});};var setIsSubmitting=function setIsSubmitting(){var value=arguments.length>0&&arguments[0]!==undefined?arguments[0]:true;dispatch({type:'IS_SUBMITTING',value:value});};var deleteSuccess=function deleteSuccess(){dispatch({type:'DELETE_SUCCEEDED'});};var resetData=function resetData(){dispatch({type:'RESET_DATA'});};var clearData=function clearData(){if(isSingleType){setIsCreatingEntry(true);}dispatch({type:'SET_DEFAULT_MODIFIED_DATA_STRUCTURE',contentTypeDataStructure:{}});};var triggerFormValidation=function triggerFormValidation(){dispatch({type:'TRIGGER_FORM_VALIDATION'});};var showLoader=!isCreatingEntry&&isLoading;return/*#__PURE__*/_react.default.createElement(_EditViewDataManager.default.Provider,{value:{addComponentToDynamicZone:addComponentToDynamicZone,addNonRepeatableComponentToField:addNonRepeatableComponentToField,addRelation:addRelation,addRepeatableComponentToField:addRepeatableComponentToField,allLayoutData:allLayoutData,checkFormErrors:checkFormErrors,clearData:clearData,deleteSuccess:deleteSuccess,formErrors:formErrors,initialData:initialData,layout:currentContentTypeLayout,modifiedData:modifiedData,moveComponentDown:moveComponentDown,moveComponentField:moveComponentField,moveComponentUp:moveComponentUp,moveRelation:moveRelation,onChange:handleChange,onRemoveRelation:onRemoveRelation,redirectToPreviousPage:redirectToPreviousPage,removeComponentFromDynamicZone:removeComponentFromDynamicZone,removeComponentFromField:removeComponentFromField,removeRepeatableField:removeRepeatableField,resetData:resetData,setIsSubmitting:setIsSubmitting,shouldShowLoadingState:shouldShowLoadingState,slug:slug,triggerFormValidation:triggerFormValidation}},showLoader?/*#__PURE__*/_react.default.createElement(_strapiHelperPlugin.LoadingIndicatorPage,null):/*#__PURE__*/_react.default.createElement(_react.default.Fragment,null,/*#__PURE__*/_react.default.createElement(_reactRouterDom.Prompt,{when:!(0,_lodash.isEqual)(modifiedData,initialData),message:formatMessage({id:'global.prompt.unsaved'})}),/*#__PURE__*/_react.default.createElement("form",{onSubmit:handleSubmit},children)));};EditViewDataManagerProvider.defaultProps={redirectToPreviousPage:function redirectToPreviousPage(){}};EditViewDataManagerProvider.propTypes={allLayoutData:_propTypes.default.object.isRequired,children:_propTypes.default.node.isRequired,redirectToPreviousPage:_propTypes.default.func,slug:_propTypes.default.string.isRequired};var _default=EditViewDataManagerProvider;exports.default=_default;

/***/ }),

/***/ 2414:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;function init(initialState){return initialState;}var _default=init;exports.default=_default;

/***/ }),

/***/ 2415:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.initialState=exports.default=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__(57));var _toConsumableArray2=_interopRequireDefault(__webpack_require__(58));var _immutable=__webpack_require__(37);var initialState=(0,_immutable.fromJS)({componentsDataStructure:{},contentTypeDataStructure:{},formErrors:{},isLoading:true,initialData:{},modifiedData:{},shouldShowLoadingState:false,shouldCheckErrors:false,modifiedDZName:null});exports.initialState=initialState;var reducer=function reducer(state,action){switch(action.type){case'ADD_NON_REPEATABLE_COMPONENT_TO_FIELD':return state.updateIn(['modifiedData'].concat((0,_toConsumableArray2.default)(action.keys)),function(){var defaultDataStructure=state.getIn(['componentsDataStructure',action.componentUid]);return(0,_immutable.fromJS)(defaultDataStructure);});case'ADD_REPEATABLE_COMPONENT_TO_FIELD':{return state.updateIn(['modifiedData'].concat((0,_toConsumableArray2.default)(action.keys)),function(list){var defaultDataStructure=state.getIn(['componentsDataStructure',action.componentUid]);if(list){return list.push(defaultDataStructure);}return(0,_immutable.fromJS)([defaultDataStructure]);}).update('shouldCheckErrors',function(v){if(action.shouldCheckErrors===true){return!v;}return v;});}case'ADD_COMPONENT_TO_DYNAMIC_ZONE':return state.updateIn(['modifiedData'].concat((0,_toConsumableArray2.default)(action.keys)),function(list){var defaultDataStructure=state.getIn(['componentsDataStructure',action.componentUid]).set('__component',action.componentUid);if(list){return list.push(defaultDataStructure);}return(0,_immutable.fromJS)([defaultDataStructure]);}).update('modifiedDZName',function(){return action.keys[0];}).update('shouldCheckErrors',function(v){if(action.shouldCheckErrors===true){return!v;}return v;});case'ADD_RELATION':return state.updateIn(['modifiedData'].concat((0,_toConsumableArray2.default)(action.keys)),function(list){if(!action.value){return list;}var el=action.value[0].value;if(list){return list.push((0,_immutable.fromJS)(el));}return(0,_immutable.fromJS)([el]);});case'GET_DATA_SUCCEEDED':return state.update('initialData',function(){return(0,_immutable.fromJS)(action.data);}).update('modifiedData',function(){return(0,_immutable.fromJS)(action.data);}).update('isLoading',function(){return false;});case'IS_SUBMITTING':return state.update('shouldShowLoadingState',function(){return action.value;});case'MOVE_COMPONENT_FIELD':return state.updateIn(['modifiedData'].concat((0,_toConsumableArray2.default)(action.pathToComponent)),function(list){return list.delete(action.dragIndex).insert(action.hoverIndex,state.getIn(['modifiedData'].concat((0,_toConsumableArray2.default)(action.pathToComponent),[action.dragIndex])));});case'MOVE_COMPONENT_UP':return state.update('shouldCheckErrors',function(v){if(action.shouldCheckErrors){return!v;}return v;}).updateIn(['modifiedData',action.dynamicZoneName],function(list){return list.delete(action.currentIndex).insert(action.currentIndex-1,state.getIn(['modifiedData',action.dynamicZoneName,action.currentIndex]));});case'MOVE_COMPONENT_DOWN':return state.update('shouldCheckErrors',function(v){if(action.shouldCheckErrors){return!v;}return v;}).updateIn(['modifiedData',action.dynamicZoneName],function(list){return list.delete(action.currentIndex).insert(action.currentIndex+1,state.getIn(['modifiedData',action.dynamicZoneName,action.currentIndex]));});case'MOVE_FIELD':return state.updateIn(['modifiedData'].concat((0,_toConsumableArray2.default)(action.keys)),function(list){return list.delete(action.dragIndex).insert(action.overIndex,list.get(action.dragIndex));});case'ON_CHANGE':{var newState=state;var _action$keys=(0,_slicedToArray2.default)(action.keys,1),nonRepeatableComponentKey=_action$keys[0];if(action.keys.length===2&&state.getIn(['modifiedData',nonRepeatableComponentKey])===null){newState=state.updateIn(['modifiedData',nonRepeatableComponentKey],function(){return(0,_immutable.fromJS)({});});}return newState.updateIn(['modifiedData'].concat((0,_toConsumableArray2.default)(action.keys)),function(){return action.value;});}case'REMOVE_COMPONENT_FROM_DYNAMIC_ZONE':return state.update('shouldCheckErrors',function(v){if(action.shouldCheckErrors){return!v;}return v;}).deleteIn(['modifiedData',action.dynamicZoneName,action.index]);case'REMOVE_COMPONENT_FROM_FIELD':{var componentPathToRemove=['modifiedData'].concat((0,_toConsumableArray2.default)(action.keys));return state.updateIn(componentPathToRemove,function(){return null;});}case'REMOVE_PASSWORD_FIELD':{return state.removeIn(['modifiedData'].concat((0,_toConsumableArray2.default)(action.keys)));}case'REMOVE_REPEATABLE_FIELD':{var _componentPathToRemove=['modifiedData'].concat((0,_toConsumableArray2.default)(action.keys));return state.update('shouldCheckErrors',function(v){var hasErrors=state.get('formErrors').keySeq().size>0;if(hasErrors){return!v;}return v;}).deleteIn(_componentPathToRemove);}case'REMOVE_RELATION':return state.removeIn(['modifiedData'].concat((0,_toConsumableArray2.default)(action.keys.split('.'))));case'RESET_DATA':return state.update('modifiedData',function(){return state.get('initialData');}).update('formErrors',function(){return(0,_immutable.fromJS)({});});case'RESET_PROPS':return initialState;case'SET_DEFAULT_DATA_STRUCTURES':return state.update('componentsDataStructure',function(){return(0,_immutable.fromJS)(action.componentsDataStructure);}).update('contentTypeDataStructure',function(){return(0,_immutable.fromJS)(action.contentTypeDataStructure);});case'SET_DEFAULT_MODIFIED_DATA_STRUCTURE':return state.update('isLoading',function(){return false;}).update('initialData',function(){return(0,_immutable.fromJS)(action.contentTypeDataStructure);}).update('modifiedData',function(){return(0,_immutable.fromJS)(action.contentTypeDataStructure);});case'SET_ERRORS':return state.update('modifiedDZName',function(){return null;}).update('formErrors',function(){return(0,_immutable.fromJS)(action.errors);});case'SUBMIT_ERRORS':return state.update('formErrors',function(){return(0,_immutable.fromJS)(action.errors);}).update('shouldShowLoadingState',function(){return false;});case'SUBMIT_SUCCESS':case'DELETE_SUCCEEDED':return state.update('isLoading',function(){return false;}).update('initialData',function(){return state.get('modifiedData');});case'TRIGGER_FORM_VALIDATION':return state.update('shouldCheckErrors',function(v){var hasErrors=state.get('formErrors').keySeq().size>0;if(hasErrors){return!v;}return v;});default:return state;}};var _default=reducer;exports.default=_default;

/***/ }),

/***/ 2416:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"cleanData",{enumerable:true,get:function get(){return _cleanData.default;}});Object.defineProperty(exports,"createDefaultForm",{enumerable:true,get:function get(){return _createDefaultForm.default;}});Object.defineProperty(exports,"getFilesToUpload",{enumerable:true,get:function get(){return _getFilesToUpload.default;}});Object.defineProperty(exports,"getYupInnerErrors",{enumerable:true,get:function get(){return _getYupInnerErrors.default;}});Object.defineProperty(exports,"createYupSchema",{enumerable:true,get:function get(){return _schema.default;}});var _cleanData=_interopRequireDefault(__webpack_require__(2417));var _createDefaultForm=_interopRequireDefault(__webpack_require__(2418));var _getFilesToUpload=_interopRequireDefault(__webpack_require__(2419));var _getYupInnerErrors=_interopRequireDefault(__webpack_require__(2420));var _schema=_interopRequireDefault(__webpack_require__(2421));

/***/ }),

/***/ 2417:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=exports.helperCleanData=void 0;var _toConsumableArray2=_interopRequireDefault(__webpack_require__(58));var _lodash=__webpack_require__(7);/* eslint-disable indent */var cleanData=function cleanData(retrievedData,currentSchema,componentsSchema){var getType=function getType(schema,attrName){return(0,_lodash.get)(schema,['attributes',attrName,'type'],'');};var getOtherInfos=function getOtherInfos(schema,arr){return(0,_lodash.get)(schema,['attributes'].concat((0,_toConsumableArray2.default)(arr)),'');};var recursiveCleanData=function recursiveCleanData(data,schema){return Object.keys(data).reduce(function(acc,current){var attrType=getType(schema.schema,current);var value=(0,_lodash.get)(data,current);var component=getOtherInfos(schema.schema,[current,'component']);var isRepeatable=getOtherInfos(schema.schema,[current,'repeatable']);var cleanedData;switch(attrType){case'json':try{cleanedData=JSON.parse(value);}catch(err){cleanedData=value;}break;case'date':case'datetime':cleanedData=value&&value._isAMomentObject===true?value.toISOString():value;break;case'media':if(getOtherInfos(schema.schema,[current,'multiple'])===true){cleanedData=value?helperCleanData(value.filter(function(file){return!(file instanceof File);}),'id'):null;}else{cleanedData=(0,_lodash.get)(value,0)instanceof File?null:(0,_lodash.get)(value,'id',null);}break;case'component':if(isRepeatable){cleanedData=value?value.map(function(data){var subCleanedData=recursiveCleanData(data,componentsSchema[component]);return subCleanedData;}):value;}else{cleanedData=value?recursiveCleanData(value,componentsSchema[component]):value;}break;case'dynamiczone':cleanedData=value.map(function(componentData){var subCleanedData=recursiveCleanData(componentData,componentsSchema[componentData.__component]);return subCleanedData;});break;default:cleanedData=helperCleanData(value,'id');}acc[current]=cleanedData;return acc;},{});};return recursiveCleanData(retrievedData,currentSchema);};var helperCleanData=function helperCleanData(value,key){if((0,_lodash.isArray)(value)){return value.map(function(obj){return obj[key]?obj[key]:obj;});}if((0,_lodash.isObject)(value)){return value[key];}return value;};exports.helperCleanData=helperCleanData;var _default=cleanData;exports.default=_default;

/***/ }),

/***/ 2418:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _lodash=__webpack_require__(7);var createDefaultForm=function createDefaultForm(attributes,allComponentsSchema){return Object.keys(attributes).reduce(function(acc,current){var attribute=(0,_lodash.get)(attributes,[current],{});var defaultValue=attribute.default,component=attribute.component,type=attribute.type,required=attribute.required,min=attribute.min,repeatable=attribute.repeatable;if(type==='json'){acc[current]=null;}if(type==='json'&&required===true){acc[current]={};}if(defaultValue!==undefined){acc[current]=defaultValue;}if(type==='component'){var currentComponentSchema=(0,_lodash.get)(allComponentsSchema,[component,'schema','attributes'],{});var currentComponentDefaultForm=createDefaultForm(currentComponentSchema,allComponentsSchema);if(required===true){acc[current]=repeatable===true?[]:{};}if(min&&repeatable===true&&required){acc[current]=[];for(var i=0;i<min;i+=1){acc[current].push(currentComponentDefaultForm);}}}if(type==='dynamiczone'){if(required===true){acc[current]=[];}}return acc;},{});};var _default=createDefaultForm;exports.default=_default;

/***/ }),

/***/ 2419:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _defineProperty2=_interopRequireDefault(__webpack_require__(16));var _lodash=__webpack_require__(7);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2.default)(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var getFilesToUpload=function getFilesToUpload(data){var prefix=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;return Object.keys(data).reduce(function(acc,current){var currentData=data[current];var path=prefix?"".concat(prefix,".").concat(current):current;var filterFiles=function filterFiles(files){return files.filter(function(file){return file instanceof File;});};var hasFiles=function hasFiles(data){return data.some(function(file){return file instanceof File;});};var hasFile=function hasFile(data){return(0,_lodash.get)(data,0,null)instanceof File;};if((0,_lodash.isArray)(currentData)&&hasFiles(currentData)){acc[path]=filterFiles(currentData);}if((0,_lodash.isObject)(currentData)&&!(0,_lodash.isArray)(currentData)&&hasFile(currentData)){var currentFile=(0,_lodash.get)(currentData,0);acc[path]=[currentFile];}if((0,_lodash.isArray)(currentData)&&!hasFiles(currentData)){return _objectSpread(_objectSpread({},acc),getFilesToUpload(currentData,path));}if((0,_lodash.isObject)(currentData)&&!(0,_lodash.isArray)(currentData)&&!hasFile(currentData)){return _objectSpread(_objectSpread({},acc),getFilesToUpload(currentData,path));}return acc;},{});};var _default=getFilesToUpload;exports.default=_default;

/***/ }),

/***/ 2420:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _lodash=__webpack_require__(7);var getYupInnerErrors=function getYupInnerErrors(error){return(0,_lodash.get)(error,'inner',[]).reduce(function(acc,curr){acc[curr.path.split('[').join('.').split(']').join('')]={id:curr.message};return acc;},{});};var _default=getYupInnerErrors;exports.default=_default;

/***/ }),

/***/ 2421:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireWildcard=__webpack_require__(12);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _lodash=__webpack_require__(7);var yup=_interopRequireWildcard(__webpack_require__(198));var _strapiHelperPlugin=__webpack_require__(6);yup.addMethod(yup.mixed,'defined',function(){return this.test('defined',_strapiHelperPlugin.translatedErrors.required,function(value){return value!==undefined;});});yup.addMethod(yup.array,'notEmptyMin',function(min){return this.test('notEmptyMin',_strapiHelperPlugin.translatedErrors.min,function(value){if((0,_lodash.isEmpty)(value)){return true;}return value.length>=min;});});yup.addMethod(yup.string,'isInferior',function(message,max){return this.test('isInferior',message,function(value){if(!value){return true;}if(Number.isNaN((0,_lodash.toNumber)(value))){return true;}return(0,_lodash.toNumber)(max)>=(0,_lodash.toNumber)(value);});});yup.addMethod(yup.string,'isSuperior',function(message,min){return this.test('isSuperior',message,function(value){if(!value){return true;}if(Number.isNaN((0,_lodash.toNumber)(value))){return true;}return(0,_lodash.toNumber)(value)>=(0,_lodash.toNumber)(min);});});var getAttributes=function getAttributes(data){return(0,_lodash.get)(data,['schema','attributes'],{});};var createYupSchema=function createYupSchema(model,_ref){var components=_ref.components;var isCreatingEntry=arguments.length>2&&arguments[2]!==undefined?arguments[2]:true;var attributes=getAttributes(model);return yup.object().shape(Object.keys(attributes).reduce(function(acc,current){var attribute=attributes[current];if(attribute.type!=='relation'&&attribute.type!=='component'&&attribute.type!=='dynamiczone'){var formatted=createYupSchemaAttribute(attribute.type,attribute,isCreatingEntry);acc[current]=formatted;}if(attribute.type==='relation'){acc[current]=['oneWay','oneToOne','manyToOne','oneToManyMorph','oneToOneMorph'].includes(attribute.relationType)?yup.object().nullable():yup.array().nullable();}if(attribute.type==='component'){var componentFieldSchema=createYupSchema(components[attribute.component],{components:components});if(attribute.repeatable===true){var min=attribute.min,max=attribute.max,required=attribute.required;var _componentSchema=yup.lazy(function(value){var baseSchema=yup.array().of(componentFieldSchema);if(min){if(required){baseSchema=baseSchema.min(min,_strapiHelperPlugin.translatedErrors.min);}else if(required!==true&&(0,_lodash.isEmpty)(value)){baseSchema=baseSchema.nullable();}else{baseSchema=baseSchema.min(min,_strapiHelperPlugin.translatedErrors.min);}}if(max){baseSchema=baseSchema.max(max,_strapiHelperPlugin.translatedErrors.max);}return baseSchema;});acc[current]=_componentSchema;return acc;}var componentSchema=yup.lazy(function(obj){if(obj!==undefined){return attribute.required===true?componentFieldSchema.defined():componentFieldSchema.nullable();}return attribute.required===true?yup.object().defined():yup.object().nullable();});acc[current]=componentSchema;return acc;}if(attribute.type==='dynamiczone'){var dynamicZoneSchema=yup.array().of(yup.lazy(function(_ref2){var __component=_ref2.__component;return createYupSchema(components[__component],{components:components});}));var _max=attribute.max,_min=attribute.min;if(attribute.required){dynamicZoneSchema=dynamicZoneSchema.required();if(_min){dynamicZoneSchema=dynamicZoneSchema.min(_min,_strapiHelperPlugin.translatedErrors.min).required(_strapiHelperPlugin.translatedErrors.required);}}else{// eslint-disable-next-line no-lonely-if
if(_min){dynamicZoneSchema=dynamicZoneSchema.notEmptyMin(_min);}}if(_max){dynamicZoneSchema=dynamicZoneSchema.max(_max,_strapiHelperPlugin.translatedErrors.max);}acc[current]=dynamicZoneSchema;}return acc;},{}));};var createYupSchemaAttribute=function createYupSchemaAttribute(type,validations,isCreatingEntry){var schema=yup.mixed();var regex=(0,_lodash.get)(validations,'regex',null);delete validations.regex;if(regex){validations.regex=new RegExp(regex);}if(['string','uid','text','richtext','email','password','enumeration'].includes(type)){schema=yup.string();}if(type==='json'){schema=yup.mixed(_strapiHelperPlugin.translatedErrors.json).test('isJSON',_strapiHelperPlugin.translatedErrors.json,function(value){if(value===undefined){return true;}if((0,_lodash.isNumber)(value)||(0,_lodash.isNull)(value)||(0,_lodash.isObject)(value)||(0,_lodash.isArray)(value)){return true;}try{JSON.parse(value);return true;}catch(err){return false;}}).nullable();}if(type==='email'){schema=schema.email(_strapiHelperPlugin.translatedErrors.email);}if(['number','integer','biginteger','float','decimal'].includes(type)){schema=yup.number().transform(function(cv){return(0,_lodash.isNaN)(cv)?undefined:cv;}).typeError();}if(['date','datetime'].includes(type)){schema=yup.date();}if(type==='biginteger'){schema=yup.string().matches(/^\d*$/);}Object.keys(validations).forEach(function(validation){var validationValue=validations[validation];if(!!validationValue||!(0,_lodash.isBoolean)(validationValue)&&Number.isInteger(Math.floor(validationValue))||validationValue===0){switch(validation){case'required':{if(type==='password'&&isCreatingEntry){schema=schema.required(_strapiHelperPlugin.translatedErrors.required);}if(type!=='password'){schema=schema.required(_strapiHelperPlugin.translatedErrors.required);}break;}case'max':{if(type==='biginteger'){schema=schema.isInferior(_strapiHelperPlugin.translatedErrors.max,validationValue);}else{schema=schema.max(validationValue,_strapiHelperPlugin.translatedErrors.max);}break;}case'maxLength':schema=schema.max(validationValue,_strapiHelperPlugin.translatedErrors.maxLength);break;case'min':{if(type==='biginteger'){schema=schema.isSuperior(_strapiHelperPlugin.translatedErrors.min,validationValue);}else{schema=schema.min(validationValue,_strapiHelperPlugin.translatedErrors.min);}break;}case'minLength':schema=schema.min(validationValue,_strapiHelperPlugin.translatedErrors.minLength);break;case'regex':schema=schema.matches(validationValue,_strapiHelperPlugin.translatedErrors.regex);break;case'lowercase':if(['text','textarea','email','string'].includes(type)){schema=schema.strict().lowercase();}break;case'uppercase':if(['text','textarea','email','string'].includes(type)){schema=schema.strict().uppercase();}break;case'positive':if(['number','integer','bigint','float','decimal'].includes(type)){schema=schema.positive();}break;case'negative':if(['number','integer','bigint','float','decimal'].includes(type)){schema=schema.negative();}break;default:schema=schema.nullable();}}});return schema;};var _default=createYupSchema;exports.default=_default;

/***/ }),

/***/ 2422:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__(132));var _react=_interopRequireDefault(__webpack_require__(0));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _EditView=_interopRequireDefault(__webpack_require__(2157));function EditViewProvider(_ref){var children=_ref.children,rest=(0,_objectWithoutProperties2.default)(_ref,["children"]);return/*#__PURE__*/_react.default.createElement(_EditView.default.Provider,{value:rest},children);}EditViewProvider.propTypes={children:_propTypes.default.node.isRequired};var _default=EditViewProvider;exports.default=_default;

/***/ }),

/***/ 2423:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireWildcard=__webpack_require__(12);var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _regenerator=_interopRequireDefault(__webpack_require__(85));var _asyncToGenerator2=_interopRequireDefault(__webpack_require__(108));var _slicedToArray2=_interopRequireDefault(__webpack_require__(57));var _react=_interopRequireWildcard(__webpack_require__(0));var _reactRouterDom=__webpack_require__(35);var _custom=__webpack_require__(63);var _strapiHelperPlugin=__webpack_require__(6);var _lodash=__webpack_require__(7);var _pluginId=_interopRequireDefault(__webpack_require__(119));var _useDataManager2=_interopRequireDefault(__webpack_require__(2097));var getRequestUrl=function getRequestUrl(path){return"/".concat(_pluginId.default,"/explorer/").concat(path);};var Header=function Header(){var _useState=(0,_react.useState)(false),_useState2=(0,_slicedToArray2.default)(_useState,2),showWarningCancel=_useState2[0],setWarningCancel=_useState2[1];var _useState3=(0,_react.useState)(false),_useState4=(0,_slicedToArray2.default)(_useState3,2),showWarningDelete=_useState4[0],setWarningDelete=_useState4[1];var _useGlobalContext=(0,_strapiHelperPlugin.useGlobalContext)(),formatMessage=_useGlobalContext.formatMessage,emitEvent=_useGlobalContext.emitEvent;var _useParams=(0,_reactRouterDom.useParams)(),id=_useParams.id;var _useDataManager=(0,_useDataManager2.default)(),deleteSuccess=_useDataManager.deleteSuccess,initialData=_useDataManager.initialData,layout=_useDataManager.layout,redirectToPreviousPage=_useDataManager.redirectToPreviousPage,resetData=_useDataManager.resetData,setIsSubmitting=_useDataManager.setIsSubmitting,slug=_useDataManager.slug,clearData=_useDataManager.clearData;var _useRouteMatch=(0,_reactRouterDom.useRouteMatch)('/plugins/content-manager/:contentType'),contentType=_useRouteMatch.params.contentType;var isSingleType=contentType==='singleType';var currentContentTypeMainField=(0,_lodash.get)(layout,['settings','mainField'],'id');var currentContentTypeName=(0,_lodash.get)(layout,['schema','info','name']);var isCreatingEntry=id==='create'||isSingleType&&!initialData.created_at;/* eslint-disable indent */var entryHeaderTitle=isCreatingEntry?formatMessage({id:"".concat(_pluginId.default,".containers.Edit.pluginHeader.title.new")}):(0,_strapiHelperPlugin.templateObject)({mainField:currentContentTypeMainField},initialData).mainField;/* eslint-enable indent */var headerTitle=isSingleType?currentContentTypeName:entryHeaderTitle;var getHeaderActions=function getHeaderActions(){var headerActions=[{onClick:function onClick(){toggleWarningCancel();},color:'cancel',label:formatMessage({id:"".concat(_pluginId.default,".containers.Edit.reset")}),type:'button',style:{paddingLeft:15,paddingRight:15,fontWeight:600}},{color:'success',label:formatMessage({id:"".concat(_pluginId.default,".containers.Edit.submit")}),type:'submit',style:{minWidth:150,fontWeight:600}}];if(!isCreatingEntry){headerActions.unshift({label:formatMessage({id:'app.utils.delete'}),color:'delete',onClick:function onClick(){toggleWarningDelete();},type:'button',style:{paddingLeft:15,paddingRight:15,fontWeight:600}});}return headerActions;};var headerProps={title:{label:headerTitle&&headerTitle.toString()},content:isSingleType?"".concat(formatMessage({id:"".concat(_pluginId.default,".api.id")})," : ").concat(layout.apiID):'',actions:getHeaderActions()};var toggleWarningCancel=function toggleWarningCancel(){return setWarningCancel(function(prevState){return!prevState;});};var toggleWarningDelete=function toggleWarningDelete(){return setWarningDelete(function(prevState){return!prevState;});};var handleConfirmReset=function handleConfirmReset(){toggleWarningCancel();resetData();};var handleConfirmDelete=/*#__PURE__*/function(){var _ref=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee(){return _regenerator.default.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:toggleWarningDelete();setIsSubmitting();_context.prev=2;emitEvent('willDeleteEntry');_context.next=6;return(0,_strapiHelperPlugin.request)(getRequestUrl("".concat(slug,"/").concat(initialData.id)),{method:'DELETE'});case 6:strapi.notification.success("".concat(_pluginId.default,".success.record.delete"));deleteSuccess();emitEvent('didDeleteEntry');if(!isSingleType){redirectToPreviousPage();}else{clearData();}_context.next=17;break;case 12:_context.prev=12;_context.t0=_context["catch"](2);setIsSubmitting(false);emitEvent('didNotDeleteEntry',{error:_context.t0});strapi.notification.error("".concat(_pluginId.default,".error.record.delete"));case 17:case"end":return _context.stop();}}},_callee,null,[[2,12]]);}));return function handleConfirmDelete(){return _ref.apply(this,arguments);};}();return/*#__PURE__*/_react.default.createElement(_react.default.Fragment,null,/*#__PURE__*/_react.default.createElement(_custom.Header,headerProps),/*#__PURE__*/_react.default.createElement(_strapiHelperPlugin.PopUpWarning,{isOpen:showWarningCancel,toggleModal:toggleWarningCancel,content:{title:"".concat(_pluginId.default,".popUpWarning.title"),message:"".concat(_pluginId.default,".popUpWarning.warning.cancelAllSettings"),cancel:"".concat(_pluginId.default,".popUpWarning.button.cancel"),confirm:"".concat(_pluginId.default,".popUpWarning.button.confirm")},popUpWarningType:"danger",onConfirm:handleConfirmReset}),/*#__PURE__*/_react.default.createElement(_strapiHelperPlugin.PopUpWarning,{isOpen:showWarningDelete,toggleModal:toggleWarningDelete,content:{title:"".concat(_pluginId.default,".popUpWarning.title"),message:"".concat(_pluginId.default,".popUpWarning.bodyMessage.contentType.delete"),cancel:"".concat(_pluginId.default,".popUpWarning.button.cancel"),confirm:"".concat(_pluginId.default,".popUpWarning.button.confirm")},popUpWarningType:"danger",onConfirm:handleConfirmDelete}));};var _default=Header;exports.default=_default;

/***/ }),

/***/ 2424:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _lodash=__webpack_require__(7);function _createForOfIteratorHelper(o){if(typeof Symbol==="undefined"||o[Symbol.iterator]==null){if(Array.isArray(o)||(o=_unsupportedIterableToArray(o))){var i=0;var F=function F(){};return{s:F,n:function n(){if(i>=o.length)return{done:true};return{done:false,value:o[i++]};},e:function e(_e){throw _e;},f:F};}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var it,normalCompletion=true,didErr=false,err;return{s:function s(){it=o[Symbol.iterator]();},n:function n(){var step=it.next();normalCompletion=step.done;return step;},e:function e(_e2){didErr=true;err=_e2;},f:function f(){try{if(!normalCompletion&&it.return!=null)it.return();}finally{if(didErr)throw err;}}};}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}/* eslint-disable no-restricted-syntax */var createAttributesLayout=function createAttributesLayout(currentLayout,attributes){var getType=function getType(name){return(0,_lodash.get)(attributes,[name,'type'],'');};var currentRowIndex=0;var newLayout=[];var _iterator=_createForOfIteratorHelper(currentLayout),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var row=_step.value;var hasDynamicZone=row.some(function(_ref){var name=_ref.name;return getType(name)==='dynamiczone';});if(!newLayout[currentRowIndex]){newLayout[currentRowIndex]=[];}if(hasDynamicZone){currentRowIndex=currentRowIndex===0&&(0,_lodash.isEmpty)(newLayout[0])?0:currentRowIndex+1;if(!newLayout[currentRowIndex]){newLayout[currentRowIndex]=[];}newLayout[currentRowIndex].push(row);currentRowIndex+=1;}else{newLayout[currentRowIndex].push(row);}}}catch(err){_iterator.e(err);}finally{_iterator.f();}return newLayout.filter(function(arr){return arr.length>0;});};var _default=createAttributesLayout;exports.default=_default;

/***/ }),

/***/ 2425:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.SubWrapper=exports.MainWrapper=exports.LinkWrapper=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(11));var _styledComponents=_interopRequireDefault(__webpack_require__(3));function _templateObject3(){var data=(0,_taggedTemplateLiteral2.default)(["\n  background: #ffffff;\n  border-radius: 2px;\n  box-shadow: 0 2px 4px #e3e9f3;\n  ul {\n    list-style: none;\n    padding: 0;\n  }\n  li {\n    padding: 7px 20px;\n    border-top: 1px solid #f6f6f6;\n    &:first-of-type {\n      border-color: transparent;\n    }\n    &:not(:first-of-type) {\n      margin-top: 0;\n    }\n  }\n"]);_templateObject3=function _templateObject3(){return data;};return data;}function _templateObject2(){var data=(0,_taggedTemplateLiteral2.default)(["\n  > div {\n    margin-right: 0;\n    margin-left: 0;\n  }\n  padding: 22px 10px;\n"]);_templateObject2=function _templateObject2(){return data;};return data;}function _templateObject(){var data=(0,_taggedTemplateLiteral2.default)(["\n  background: #ffffff;\n  border-radius: 2px;\n  box-shadow: 0 2px 4px #e3e9f3;\n"]);_templateObject=function _templateObject(){return data;};return data;}var SubWrapper=_styledComponents.default.div(_templateObject());exports.SubWrapper=SubWrapper;var MainWrapper=(0,_styledComponents.default)(SubWrapper)(_templateObject2());exports.MainWrapper=MainWrapper;var LinkWrapper=(0,_styledComponents.default)(SubWrapper)(_templateObject3());exports.LinkWrapper=LinkWrapper;

/***/ }),

/***/ 2426:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;function init(initialState){return initialState;}var _default=init;exports.default=_default;

/***/ }),

/***/ 2427:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.initialState=exports.default=void 0;var _immutable=__webpack_require__(37);var initialState=(0,_immutable.fromJS)({formattedContentTypeLayout:[],isDraggingComponent:false});exports.initialState=initialState;var reducer=function reducer(state,action){switch(action.type){case'SET_IS_DRAGGING_COMPONENT':return state.update('isDraggingComponent',function(){return true;});case'SET_LAYOUT_DATA':return state.update('formattedContentTypeLayout',function(){return(0,_immutable.fromJS)(action.formattedContentTypeLayout);});case'RESET_PROPS':return initialState;case'UNSET_IS_DRAGGING_COMPONENT':return state.update('isDraggingComponent',function(){return false;});default:return state;}};var _default=reducer;exports.default=_default;

/***/ })

}]);