(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 2149:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=__webpack_require__(0);var ListViewContext=(0,_react.createContext)();var _default=ListViewContext;exports.default=_default;

/***/ }),

/***/ 2150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _defineProperty2=_interopRequireDefault(__webpack_require__(16));function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2.default)(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var convertAttrObjToArray=function convertAttrObjToArray(attributes){return Object.keys(attributes).map(function(key,index){return _objectSpread(_objectSpread({},attributes[key]),{},{name:key,index:index});});};var _default=convertAttrObjToArray;exports.default=_default;

/***/ }),

/***/ 2151:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var getAttributeDisplayedType=function getAttributeDisplayedType(type){var displayedType;switch(type){case'date':case'datetime':case'time':case'timestamp':displayedType='date';break;case'integer':case'biginteger':case'decimal':case'float':displayedType='number';break;case'string':case'text':displayedType='text';break;case'':displayedType='relation';break;default:displayedType=type;}return displayedType;};var _default=getAttributeDisplayedType;exports.default=_default;

/***/ }),

/***/ 2152:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__(13));var _defineProperty2=_interopRequireDefault(__webpack_require__(16));var _react=_interopRequireDefault(__webpack_require__(0));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _lodash=__webpack_require__(7);var _strapiHelperPlugin=__webpack_require__(6);var _core=__webpack_require__(25);var _icons=__webpack_require__(86);var _pluginId=_interopRequireDefault(__webpack_require__(109));var _useListView2=_interopRequireDefault(__webpack_require__(2216));var _useDataManager2=_interopRequireDefault(__webpack_require__(120));var _DynamicZoneList=_interopRequireDefault(__webpack_require__(2217));var _ComponentList=_interopRequireDefault(__webpack_require__(2153));var _List=_interopRequireDefault(__webpack_require__(2222));function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2.default)(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}/* eslint-disable jsx-a11y/no-static-element-interactions */function List(_ref){var className=_ref.className,customRowComponent=_ref.customRowComponent,items=_ref.items,addComponentToDZ=_ref.addComponentToDZ,targetUid=_ref.targetUid,mainTypeName=_ref.mainTypeName,editTarget=_ref.editTarget,isFromDynamicZone=_ref.isFromDynamicZone,isNestedInDZComponent=_ref.isNestedInDZComponent,isMain=_ref.isMain,firstLoopComponentName=_ref.firstLoopComponentName,firstLoopComponentUid=_ref.firstLoopComponentUid,secondLoopComponentName=_ref.secondLoopComponentName,secondLoopComponentUid=_ref.secondLoopComponentUid,isSub=_ref.isSub,dzName=_ref.dzName;var _useGlobalContext=(0,_strapiHelperPlugin.useGlobalContext)(),formatMessage=_useGlobalContext.formatMessage;var _useDataManager=(0,_useDataManager2.default)(),isInDevelopmentMode=_useDataManager.isInDevelopmentMode,modifiedData=_useDataManager.modifiedData;var _useListView=(0,_useListView2.default)(),openModalAddField=_useListView.openModalAddField;var onClickAddField=function onClickAddField(){var firstComponentIcon=(0,_lodash.get)(modifiedData,['components',firstLoopComponentUid,'schema','icon'],'');var firstComponentCategory=(0,_lodash.get)(modifiedData,['components',firstLoopComponentUid,'category'],null);var firstComponentFriendlyName=(0,_lodash.get)(modifiedData,['components',firstLoopComponentUid,'schema','name'],null);var secondComponentCategory=(0,_lodash.get)(modifiedData,['components',secondLoopComponentUid,'category'],null);var secondComponentFriendlyName=(0,_lodash.get)(modifiedData,['components',secondLoopComponentUid,'schema','name'],null);var secondComponentIcon=(0,_lodash.get)(modifiedData,['components',secondLoopComponentUid,'schema','icon'],'');var headerIconName1=editTarget==='contentType'?(0,_lodash.get)(modifiedData,['contentType','schema','kind'],null):editTarget;var firstHeaderObject={header_label_1:mainTypeName,header_icon_name_1:headerIconName1,header_icon_isCustom_1:false,header_info_category_1:null,header_info_name_1:null};var secondHeaderObject={header_label_2:firstLoopComponentName,header_icon_name_2:'component',header_icon_isCustom_2:false,header_info_category_2:firstComponentCategory,header_info_name_2:firstComponentFriendlyName};var thirdHeaderObject={header_icon_name_3:'component',header_icon_isCustom_3:false,header_info_category_3:secondComponentCategory,header_info_name_3:secondComponentFriendlyName};var fourthHeaderObject={header_icon_name_4:null,header_icon_isCustom_4:false,header_info_category_4:secondComponentCategory,header_info_name_4:secondComponentFriendlyName};if(firstLoopComponentName){firstHeaderObject=_objectSpread(_objectSpread({},firstHeaderObject),{},{header_icon_name_1:firstComponentIcon,header_icon_isCustom_1:true});}if(secondLoopComponentUid){firstHeaderObject=_objectSpread(_objectSpread({},firstHeaderObject),{},{header_icon_name_1:secondComponentIcon,header_icon_isCustom_1:true});thirdHeaderObject=_objectSpread(_objectSpread({},thirdHeaderObject),{},{header_label_3:secondLoopComponentName});}if(isFromDynamicZone||isNestedInDZComponent){secondHeaderObject=_objectSpread(_objectSpread({},secondHeaderObject),{},{header_label_2:dzName,header_icon_name_2:'dynamiczone',header_icon_isCustom_2:false,header_info_category_2:null,header_info_name_2:null});thirdHeaderObject=_objectSpread(_objectSpread({},thirdHeaderObject),{},{header_icon_name_3:isNestedInDZComponent?'component':null,header_label_3:firstLoopComponentName,header_info_category_3:firstComponentCategory,header_info_name_3:firstComponentFriendlyName});fourthHeaderObject=_objectSpread(_objectSpread({},fourthHeaderObject),{},{header_label_4:secondLoopComponentName});}openModalAddField(editTarget,targetUid,firstHeaderObject,secondHeaderObject,thirdHeaderObject,fourthHeaderObject);};/* eslint-disable indent */var addButtonProps={icon:!isSub?/*#__PURE__*/_react.default.createElement(_icons.Plus,{fill:"#007eff",width:"11px",height:"11px"}):false,color:'primary',label:isInDevelopmentMode?formatMessage({id:!isSub?"".concat(_pluginId.default,".form.button.add.field.to.").concat(modifiedData.contentType?modifiedData.contentType.schema.kind:editTarget):"".concat(_pluginId.default,".form.button.add.field.to.component"),defaultMessage:'Add another field'}):null,onClick:onClickAddField};/* eslint-enable indent */if(!targetUid){return null;}return/*#__PURE__*/_react.default.createElement(_react.default.Fragment,null,/*#__PURE__*/_react.default.createElement(_List.default,{className:className,isFromDynamicZone:isFromDynamicZone},/*#__PURE__*/_react.default.createElement("table",null,/*#__PURE__*/_react.default.createElement("tbody",null,items.map(function(item){var type=item.type;var CustomRow=customRowComponent;return/*#__PURE__*/_react.default.createElement(_react.default.Fragment,{key:item.name},/*#__PURE__*/_react.default.createElement(CustomRow,(0,_extends2.default)({},item,{dzName:dzName,isNestedInDZComponent:isNestedInDZComponent,targetUid:targetUid,mainTypeName:mainTypeName,editTarget:editTarget,firstLoopComponentName:firstLoopComponentName,firstLoopComponentUid:firstLoopComponentUid,isFromDynamicZone:isFromDynamicZone,secondLoopComponentName:secondLoopComponentName,secondLoopComponentUid:secondLoopComponentUid})),type==='component'&&/*#__PURE__*/_react.default.createElement(_ComponentList.default,(0,_extends2.default)({},item,{customRowComponent:customRowComponent,targetUid:targetUid,dzName:dzName,isNestedInDZComponent:isFromDynamicZone,mainTypeName:mainTypeName,editTarget:editTarget,firstLoopComponentName:firstLoopComponentName,firstLoopComponentUid:firstLoopComponentUid})),type==='dynamiczone'&&/*#__PURE__*/_react.default.createElement(_DynamicZoneList.default,(0,_extends2.default)({},item,{customRowComponent:customRowComponent,addComponent:addComponentToDZ,targetUid:targetUid,mainTypeName:mainTypeName})));}))),isMain&&isInDevelopmentMode&&/*#__PURE__*/_react.default.createElement(_strapiHelperPlugin.ListButton,null,/*#__PURE__*/_react.default.createElement(_core.Button,addButtonProps)),!isMain&&/*#__PURE__*/_react.default.createElement(_strapiHelperPlugin.ListButton,null,/*#__PURE__*/_react.default.createElement(_core.Button,addButtonProps))),isSub&&/*#__PURE__*/_react.default.createElement("div",{className:"plus-icon",onClick:onClickAddField},isInDevelopmentMode&&/*#__PURE__*/_react.default.createElement(_icons.Plus,{fill:isFromDynamicZone?'#007EFF':'#b4b6ba'})));}List.defaultProps={addComponentToDZ:function addComponentToDZ(){},className:null,customRowComponent:null,dzName:null,firstLoopComponentName:null,firstLoopComponentUid:null,isFromDynamicZone:false,isNestedInDZComponent:false,isMain:false,isSub:false,items:[],secondLoopComponentName:null,secondLoopComponentUid:null,targetUid:null};List.propTypes={addComponentToDZ:_propTypes.default.func,className:_propTypes.default.string,customRowComponent:_propTypes.default.func,dzName:_propTypes.default.string,editTarget:_propTypes.default.string.isRequired,firstLoopComponentName:_propTypes.default.string,firstLoopComponentUid:_propTypes.default.string,isFromDynamicZone:_propTypes.default.bool,isNestedInDZComponent:_propTypes.default.bool,isMain:_propTypes.default.bool,items:_propTypes.default.instanceOf(Array),mainTypeName:_propTypes.default.string.isRequired,secondLoopComponentName:_propTypes.default.string,secondLoopComponentUid:_propTypes.default.string,targetUid:_propTypes.default.string,isSub:_propTypes.default.bool};var _default=List;exports.default=_default;

/***/ }),

/***/ 2153:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(0));var _lodash=__webpack_require__(7);var _propTypes=_interopRequireDefault(__webpack_require__(2));var _List=_interopRequireDefault(__webpack_require__(2152));var _useDataManager2=_interopRequireDefault(__webpack_require__(120));var _convertAttrObjToArray=_interopRequireDefault(__webpack_require__(2150));var _Td=_interopRequireDefault(__webpack_require__(2154));/**
 *
 * ComponentList
 *
 */ /* eslint-disable import/no-cycle */function ComponentList(_ref){var customRowComponent=_ref.customRowComponent,component=_ref.component,dzName=_ref.dzName,mainTypeName=_ref.mainTypeName,isFromDynamicZone=_ref.isFromDynamicZone,isNestedInDZComponent=_ref.isNestedInDZComponent,firstLoopComponentName=_ref.firstLoopComponentName,firstLoopComponentUid=_ref.firstLoopComponentUid;var _useDataManager=(0,_useDataManager2.default)(),modifiedData=_useDataManager.modifiedData;var _get=(0,_lodash.get)(modifiedData,['components',component],{schema:{attributes:{}}}),_get$schema=_get.schema,componentName=_get$schema.name,attributes=_get$schema.attributes;return/*#__PURE__*/_react.default.createElement("tr",{className:"component-row"},/*#__PURE__*/_react.default.createElement(_Td.default,{colSpan:12,isChildOfDynamicZone:isFromDynamicZone},/*#__PURE__*/_react.default.createElement(_List.default,{customRowComponent:customRowComponent,dzName:dzName,items:(0,_convertAttrObjToArray.default)(attributes),targetUid:component,mainTypeName:mainTypeName,firstLoopComponentName:firstLoopComponentName||componentName,firstLoopComponentUid:firstLoopComponentUid||component,editTarget:"components",isFromDynamicZone:isFromDynamicZone,isNestedInDZComponent:isNestedInDZComponent,isSub:true,secondLoopComponentName:firstLoopComponentName?componentName:null,secondLoopComponentUid:firstLoopComponentUid?component:null})));}ComponentList.defaultProps={component:null,customRowComponent:null,dzName:null,firstLoopComponentName:null,firstLoopComponentUid:null,isFromDynamicZone:false,isNestedInDZComponent:false};ComponentList.propTypes={component:_propTypes.default.string,customRowComponent:_propTypes.default.func,dzName:_propTypes.default.string,firstLoopComponentName:_propTypes.default.string,firstLoopComponentUid:_propTypes.default.string,isFromDynamicZone:_propTypes.default.bool,isNestedInDZComponent:_propTypes.default.bool,mainTypeName:_propTypes.default.string.isRequired};var _default=ComponentList;exports.default=_default;

/***/ }),

/***/ 2154:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__(3));/* eslint-disable indent */const Td=_styledComponents.default.td`
  &::before {
    content: '&';
    width: 5px;
    height: calc(100% - 15px);
    position: absolute;
    top: -7px;
    left: 45px;
    color: transparent;

    ${({isFromDynamicZone,isChildOfDynamicZone})=>{if(isChildOfDynamicZone){return`
          z-index: -1;
          background-color: transparent !important;
        `;}if(isFromDynamicZone){return`
          background-color: #AED4FB !important;
        `;}return`
        background-color: #f3f4f4 !important;
      `;}}

    border-radius: 3px;
  }
`;var _default=Td;exports.default=_default;

/***/ }),

/***/ 2213:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireWildcard=__webpack_require__(12);var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.ListRow=ListRow;exports.default=void 0;var _defineProperty2=_interopRequireDefault(__webpack_require__(16));var _react=_interopRequireWildcard(__webpack_require__(0));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _lodash=__webpack_require__(7);var _reactIntl=__webpack_require__(15);var _core=__webpack_require__(25);var _reactFontawesome=__webpack_require__(41);var _pluginId=_interopRequireDefault(__webpack_require__(109));var _useDataManager2=_interopRequireDefault(__webpack_require__(120));var _getAttributeDisplayedType=_interopRequireDefault(__webpack_require__(2151));var _getTrad=_interopRequireDefault(__webpack_require__(68));var _Curve=_interopRequireDefault(__webpack_require__(2214));var _UpperFirst=_interopRequireDefault(__webpack_require__(133));var _Wrapper=_interopRequireDefault(__webpack_require__(2215));function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2.default)(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function ListRow(_ref){var configurable=_ref.configurable,name=_ref.name,dzName=_ref.dzName,nature=_ref.nature,onClick=_ref.onClick,plugin=_ref.plugin,target=_ref.target,targetUid=_ref.targetUid,type=_ref.type,mainTypeName=_ref.mainTypeName,editTarget=_ref.editTarget,firstLoopComponentName=_ref.firstLoopComponentName,firstLoopComponentUid=_ref.firstLoopComponentUid,isFromDynamicZone=_ref.isFromDynamicZone,repeatable=_ref.repeatable,secondLoopComponentName=_ref.secondLoopComponentName,secondLoopComponentUid=_ref.secondLoopComponentUid,isNestedInDZComponent=_ref.isNestedInDZComponent;var _useDataManager=(0,_useDataManager2.default)(),contentTypes=_useDataManager.contentTypes,isInDevelopmentMode=_useDataManager.isInDevelopmentMode,modifiedData=_useDataManager.modifiedData,removeAttribute=_useDataManager.removeAttribute;var isMorph=target==='*';var ico=['integer','biginteger','float','decimal'].includes(type)?'number':type;var readableType=type;if(['integer','biginteger','float','decimal'].includes(type)){readableType='number';}else if(['string'].includes(type)){readableType='text';}var contentTypeFriendlyName=(0,_lodash.get)(contentTypes,[target,'schema','name'],'');var src=target?'relation':ico;var handleClick=function handleClick(){if(isMorph){return;}if(configurable!==false){var firstComponentCategory=(0,_lodash.get)(modifiedData,['components',firstLoopComponentUid,'category'],null);var secondComponentCategory=(0,_lodash.get)(modifiedData,['components',secondLoopComponentUid,'category'],null);var attrType=nature?'relation':type;var icoType=(0,_getAttributeDisplayedType.default)(attrType);var firstHeaderObject={header_label_1:mainTypeName,header_icon_name_1:icoType,header_icon_isCustom_1:false,header_info_category_1:null,header_info_name_1:null};var secondHeaderObject={header_label_2:name,header_icon_name_2:null,header_icon_isCustom_2:false,header_info_category_2:null,header_info_name_2:null};var thirdHeaderObject={header_icon_name_3:'component',header_icon_isCustom_3:false,header_info_category_3:null,header_info_name_3:null};var fourthHeaderObject={header_icon_name_4:null,header_icon_isCustom_4:false,header_info_category_4:null,header_info_name_4:null};var fifthHeaderObject={header_icon_name_5:null,header_icon_isCustom_5:false,header_info_category_5:null,header_info_name_5:null};if(firstLoopComponentName){secondHeaderObject={header_label_2:firstLoopComponentName,header_icon_name_2:'component',header_icon_isCustom_2:false,header_info_category_2:firstComponentCategory,header_info_name_2:firstLoopComponentName};thirdHeaderObject=_objectSpread(_objectSpread({},thirdHeaderObject),{},{header_label_3:name,header_icon_name_3:null});}if(secondLoopComponentUid){thirdHeaderObject=_objectSpread(_objectSpread({},thirdHeaderObject),{},{header_label_3:secondLoopComponentName,header_icon_name_3:'component',header_info_category_3:secondComponentCategory,header_info_name_3:secondLoopComponentName});fourthHeaderObject=_objectSpread(_objectSpread({},fourthHeaderObject),{},{header_label_4:name,header_icon_name_4:null});}if(isFromDynamicZone||isNestedInDZComponent){secondHeaderObject={header_label_2:dzName,header_icon_name_2:'dynamiczone',header_icon_isCustom_2:false,header_info_name_2:null,header_info_category_2:null};thirdHeaderObject={header_icon_name_3:'component',header_label_3:firstLoopComponentName,header_info_name_3:firstComponentCategory,header_info_category_3:firstComponentCategory};if(!isNestedInDZComponent){fourthHeaderObject={header_icon_name_4:null,header_icon_isCustom_4:false,header_info_category_4:null,header_label_4:name};}else{fourthHeaderObject={header_icon_name_4:'components',header_icon_isCustom_4:false,header_info_category_4:secondComponentCategory,header_info_name_4:secondLoopComponentName,header_label_4:secondLoopComponentName};fifthHeaderObject=_objectSpread(_objectSpread({},fifthHeaderObject),{},{header_label_5:name});}}onClick(// Tells where the attribute is located in the main modifiedData object : contentType, component or components
editTarget,// main data type uid
secondLoopComponentUid||firstLoopComponentUid||targetUid,// Name of the attribute
name,// Type of the attribute
attrType,firstHeaderObject,secondHeaderObject,thirdHeaderObject,fourthHeaderObject,fifthHeaderObject);}};var loopNumber;if(secondLoopComponentUid&&firstLoopComponentUid){loopNumber=2;}else if(firstLoopComponentUid){loopNumber=1;}else{loopNumber=0;}return/*#__PURE__*/_react.default.createElement(_Wrapper.default,{onClick:handleClick,className:[target?'relation-row':'',configurable?'clickable':''],loopNumber:loopNumber},/*#__PURE__*/_react.default.createElement("td",null,/*#__PURE__*/_react.default.createElement(_core.AttributeIcon,{key:src,type:src}),/*#__PURE__*/_react.default.createElement(_Curve.default,{fill:isFromDynamicZone?'#AED4FB':'#f3f4f4'})),/*#__PURE__*/_react.default.createElement("td",{style:{fontWeight:600}},/*#__PURE__*/_react.default.createElement("p",null,name)),/*#__PURE__*/_react.default.createElement("td",null,target?/*#__PURE__*/_react.default.createElement("div",null,/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:"".concat(_pluginId.default,".modelPage.attribute.").concat(isMorph?'relation-polymorphic':'relationWith')}),"\xA0",/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:"".concat(_pluginId.default,".from")},function(msg){return/*#__PURE__*/_react.default.createElement("span",{style:{fontStyle:'italic'}},/*#__PURE__*/_react.default.createElement(_UpperFirst.default,{content:contentTypeFriendlyName}),"\xA0",plugin&&"(".concat(msg,": ").concat(plugin,")"));})):/*#__PURE__*/_react.default.createElement(_react.default.Fragment,null,/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:"".concat(_pluginId.default,".attribute.").concat(readableType)}),"\xA0",repeatable&&/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:(0,_getTrad.default)('component.repeatable')}))),/*#__PURE__*/_react.default.createElement("td",{className:"button-container"},isInDevelopmentMode&&/*#__PURE__*/_react.default.createElement(_react.default.Fragment,null,configurable?/*#__PURE__*/_react.default.createElement(_react.default.Fragment,null,!isMorph&&/*#__PURE__*/_react.default.createElement("button",{type:"button",onClick:handleClick},/*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon,{className:"link-icon",icon:"pencil-alt"})),/*#__PURE__*/_react.default.createElement("button",{type:"button",onClick:function onClick(e){e.stopPropagation();removeAttribute(editTarget,name,secondLoopComponentUid||firstLoopComponentUid||'');}},/*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon,{className:"link-icon",icon:"trash"}))):/*#__PURE__*/_react.default.createElement("button",{type:"button"},/*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon,{icon:"lock"})))));}ListRow.defaultProps={configurable:true,dzName:null,firstLoopComponentName:null,firstLoopComponentUid:null,isFromDynamicZone:false,isNestedInDZComponent:false,nature:null,onClick:function onClick(){},plugin:null,repeatable:false,secondLoopComponentName:null,secondLoopComponentUid:null,target:null,targetUid:null,type:null};ListRow.propTypes={configurable:_propTypes.default.bool,dzName:_propTypes.default.string,editTarget:_propTypes.default.string.isRequired,firstLoopComponentName:_propTypes.default.string,firstLoopComponentUid:_propTypes.default.string,isFromDynamicZone:_propTypes.default.bool,isNestedInDZComponent:_propTypes.default.bool,mainTypeName:_propTypes.default.string.isRequired,name:_propTypes.default.string.isRequired,nature:_propTypes.default.string,onClick:_propTypes.default.func,plugin:_propTypes.default.string,repeatable:_propTypes.default.bool,secondLoopComponentName:_propTypes.default.string,secondLoopComponentUid:_propTypes.default.string,target:_propTypes.default.string,targetUid:_propTypes.default.string,type:_propTypes.default.string};var _default=(0,_react.memo)(ListRow);exports.default=_default;

/***/ }),

/***/ 2214:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__(13));var _react=_interopRequireDefault(__webpack_require__(0));var _propTypes=_interopRequireDefault(__webpack_require__(2));var Curve=function Curve(props){return/*#__PURE__*/_react.default.createElement("svg",(0,_extends2.default)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 21.08 21"},props),/*#__PURE__*/_react.default.createElement("g",null,/*#__PURE__*/_react.default.createElement("path",{d:"M2.58 2.5q-1.2 16 16 16",fill:"none",stroke:props.fill,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"5"})));};Curve.defaultProps={fill:'#f3f4f4'};Curve.propTypes={fill:_propTypes.default.string};var _default=Curve;exports.default=_default;

/***/ }),

/***/ 2215:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(11));var _styledComponents=_interopRequireDefault(__webpack_require__(3));var _strapiHelperPlugin=__webpack_require__(6);function _templateObject(){var data=(0,_taggedTemplateLiteral2.default)(["\n  background-color: transparent;\n  p {\n    margin-bottom: 0;\n  }\n  img {\n    width: 35px;\n  }\n  button {\n    cursor: pointer;\n  }\n  td:first-of-type {\n    padding-left: 3rem;\n    position: relative;\n    img {\n      width: 35px;\n      height: 20px;\n      position: absolute;\n      top: calc(50% - 10px);\n      left: 3rem;\n    }\n    img + p {\n      width: 237px;\n      padding-left: calc(3rem + 35px);\n    }\n  }\n  td:nth-child(2) {\n    ","\n    p {\n      font-weight: 500;\n    }\n  }\n  td:last-child {\n    text-align: right;\n    &:not(:first-of-type) {\n      font-size: 10px;\n    }\n  }\n  &.relation-row {\n    background: linear-gradient(135deg, rgba(28, 93, 231, 0.05), rgba(239, 243, 253, 0));\n  }\n  &.clickable {\n    &:hover {\n      cursor: pointer;\n      background-color: ",";\n      & + tr {\n        &::before {\n          background-color: transparent;\n        }\n      }\n    }\n  }\n  .button-container {\n    svg {\n      color: #333740;\n    }\n  }\n"]);_templateObject=function _templateObject(){return data;};return data;}/* eslint-disable indent */var Wrapper=_styledComponents.default.tr(_templateObject(),function(_ref){var loopNumber=_ref.loopNumber;return"\n        width: calc(25rem - ".concat(5*loopNumber,"rem);\n      ");},_strapiHelperPlugin.colors.grey);var _default=Wrapper;exports.default=_default;

/***/ }),

/***/ 2216:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=__webpack_require__(0);var _ListViewContext=_interopRequireDefault(__webpack_require__(2149));var useListView=function useListView(){return(0,_react.useContext)(_ListViewContext.default);};var _default=useListView;exports.default=_default;

/***/ }),

/***/ 2217:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireWildcard=__webpack_require__(12);var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__(13));var _slicedToArray2=_interopRequireDefault(__webpack_require__(57));var _react=_interopRequireWildcard(__webpack_require__(0));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _reactIntl=__webpack_require__(15);var _reactstrap=__webpack_require__(62);var _icons=__webpack_require__(86);var _useDataManager2=_interopRequireDefault(__webpack_require__(120));var _getTrad=_interopRequireDefault(__webpack_require__(68));var _ComponentList=_interopRequireDefault(__webpack_require__(2153));var _ComponentCard=_interopRequireDefault(__webpack_require__(2218));var _Td=_interopRequireDefault(__webpack_require__(2154));var _ComponentButton=_interopRequireDefault(__webpack_require__(2221));/**
 *
 * DynamicZoneList
 *
 */ /* eslint-disable import/no-cycle */function DynamicZoneList(_ref){var customRowComponent=_ref.customRowComponent,components=_ref.components,addComponent=_ref.addComponent,mainTypeName=_ref.mainTypeName,name=_ref.name,targetUid=_ref.targetUid;var _useDataManager=(0,_useDataManager2.default)(),isInDevelopmentMode=_useDataManager.isInDevelopmentMode;var _useState=(0,_react.useState)('0'),_useState2=(0,_slicedToArray2.default)(_useState,2),activeTab=_useState2[0],setActiveTab=_useState2[1];var toggle=function toggle(tab){if(activeTab!==tab){setActiveTab(tab);}};var handleClickAdd=function handleClickAdd(){addComponent(name);};return/*#__PURE__*/_react.default.createElement("tr",{className:"dynamiczone-row"},/*#__PURE__*/_react.default.createElement(_Td.default,{colSpan:12,isFromDynamicZone:true},/*#__PURE__*/_react.default.createElement("div",null,/*#__PURE__*/_react.default.createElement("div",{className:"tabs-wrapper"},/*#__PURE__*/_react.default.createElement(_reactstrap.Nav,{tabs:true},isInDevelopmentMode&&/*#__PURE__*/_react.default.createElement("li",null,/*#__PURE__*/_react.default.createElement(_ComponentButton.default,{onClick:handleClickAdd},/*#__PURE__*/_react.default.createElement("div",null,/*#__PURE__*/_react.default.createElement(_icons.Plus,{style:{height:15,width:15}})),/*#__PURE__*/_react.default.createElement("p",null,/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:(0,_getTrad.default)('button.component.add')})))),components.map(function(component,index){return/*#__PURE__*/_react.default.createElement("li",{key:component},/*#__PURE__*/_react.default.createElement(_ComponentCard.default,{dzName:name,index:index,component:component,isActive:activeTab==="".concat(index),isInDevelopmentMode:isInDevelopmentMode,onClick:function onClick(){toggle("".concat(index));}}));}))),/*#__PURE__*/_react.default.createElement(_reactstrap.TabContent,{activeTab:activeTab},components.map(function(component,index){var props={customRowComponent:customRowComponent,component:component};return/*#__PURE__*/_react.default.createElement(_reactstrap.TabPane,{tabId:"".concat(index),key:component},/*#__PURE__*/_react.default.createElement("table",null,/*#__PURE__*/_react.default.createElement("tbody",null,/*#__PURE__*/_react.default.createElement(_ComponentList.default,(0,_extends2.default)({},props,{isFromDynamicZone:true,dzName:name,mainTypeName:mainTypeName,targetUid:targetUid,key:component})))));})))));}DynamicZoneList.defaultProps={addComponent:function addComponent(){},components:[],customRowComponent:null,name:null};DynamicZoneList.propTypes={addComponent:_propTypes.default.func,components:_propTypes.default.instanceOf(Array),customRowComponent:_propTypes.default.func,mainTypeName:_propTypes.default.string.isRequired,name:_propTypes.default.string,targetUid:_propTypes.default.string.isRequired};var _default=DynamicZoneList;exports.default=_default;

/***/ }),

/***/ 2218:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(0));var _lodash=__webpack_require__(7);var _propTypes=_interopRequireDefault(__webpack_require__(2));var _reactFontawesome=__webpack_require__(41);var _useDataManager=_interopRequireDefault(__webpack_require__(120));var _Wrapper=_interopRequireDefault(__webpack_require__(2219));var _Close=_interopRequireDefault(__webpack_require__(2220));/**
 *
 * ComponentCard
 *
 */ /* eslint-disable jsx-a11y/no-static-element-interactions */function ComponentCard({component,dzName,index,isActive,isInDevelopmentMode,onClick}){const{modifiedData,removeComponentFromDynamicZone}=(0,_useDataManager.default)();const{schema:{icon,name}}=(0,_lodash.get)(modifiedData,['components',component],{schema:{icon:null}});return/*#__PURE__*/_react.default.createElement(_Wrapper.default,{onClick:onClick,className:isActive?'active':''},/*#__PURE__*/_react.default.createElement("div",null,/*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon,{icon:icon})),/*#__PURE__*/_react.default.createElement("p",null,name),/*#__PURE__*/_react.default.createElement("div",{className:"close-btn",onClick:e=>{e.stopPropagation();removeComponentFromDynamicZone(dzName,index);}},isInDevelopmentMode&&/*#__PURE__*/_react.default.createElement(_Close.default,{width:"7px",height:"7px"})));}ComponentCard.defaultProps={component:null,isActive:false,isInDevelopmentMode:false,onClick:()=>{}};ComponentCard.propTypes={component:_propTypes.default.string,dzName:_propTypes.default.string.isRequired,index:_propTypes.default.number.isRequired,isActive:_propTypes.default.bool,isInDevelopmentMode:_propTypes.default.bool,onClick:_propTypes.default.func};var _default=ComponentCard;exports.default=_default;

/***/ }),

/***/ 2219:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__(3));/**
 *
 * Wrapper
 *
 */const Wrapper=_styledComponents.default.button`
  width: 139px;
  height: 90px;
  position: relative;
  padding: 0;
  padding-top: 5px;
  border-radius: 2px;
  border: 0;
  text-align: center;
  border: solid 1px #fafafb;
  background-color: #fafafb;

  &:focus {
    outline: 0;
  }


  div:first-of-type {
    display: flex;
    width: 35px;
    height: 35px;
    margin: auto;
    border-radius: 18px;
    background-color: #e9eaeb;
    color: #919bae;
    font-size: 12px;

    svg {
      margin auto;
    }
  }

  div:last-of-type {
    position: absolute;
    padding: 0 7px;
    top: 0;
    right: 0;
    display: none;
  }

  p {
    margin-top: 5px;
    padding-left: 5px;
    padding-right: 5px;
    line-height: normal;
    font-size: 13px;
    font-weight: bold;
    color: #919bae;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &.active {
    cursor: initial;
  }

  &:hover, &.active {
    border-color: #aed4fb;
    background-color: #e6f0fb;

    div:first-of-type  {
      background-color: #aed4fb;
      color: #007eff;
    }

    div:last-of-type {
      display: block;
    }

    p {
      color: #007eff;
    }
  }
`;var _default=Wrapper;exports.default=_default;

/***/ }),

/***/ 2220:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__(3));var _icons=__webpack_require__(86);const Close=(0,_styledComponents.default)(_icons.Remove)`
  > g {
    > path {
      fill: #007eff;
    }
  }
`;var _default=Close;exports.default=_default;

/***/ }),

/***/ 2221:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__(3));/**
 *
 * ComponentButton
 *
 */const ComponentButton=_styledComponents.default.button`
  width: 139px;
  height: 90px;
  padding-top: 7px;
  &:focus {
    outline: 0;
  }

  div {
    width: 35px;
    height: 35px;
    border-radius: 18px;
    background-color: #2c3138;
    display: flex;
    margin: auto;
    svg {
      margin auto;
      width: 11px;
      height: 11px;
    }
  }
  p {
    margin-top: 5px;
    font-size: 13px;
    font-weight: bold;
    color: #2c3138;
    line-height: normal;
  }
`;var _default=ComponentButton;exports.default=_default;

/***/ }),

/***/ 2222:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(11));var _styledComponents=_interopRequireDefault(__webpack_require__(3));var _styles=__webpack_require__(18);function _templateObject(){var data=(0,_taggedTemplateLiteral2.default)(["\n  table-layout: fixed;\n\n  tbody {\n    td:first-of-type:not(:last-of-type) {\n      width: 73px;\n      padding-left: 30px;\n      > svg {\n        width: auto;\n        height: 16px;\n        position: absolute;\n        left: -4px;\n        top: 16px;\n        display: none;\n      }\n    }\n    td[colspan='12'] {\n      position: relative;\n      padding: 0 0 0 50px;\n      > div {\n        box-shadow: none;\n      }\n    }\n    tr.component-row {\n      &:not(:first-of-type) {\n        &::before {\n          background-color: transparent;\n        }\n      }\n      table tr td:first-of-type:not(:last-of-type) {\n        width: 79px;\n        padding-left: 36px;\n        svg {\n          display: block;\n        }\n      }\n    }\n    table + div button {\n      position: relative;\n      background-color: transparent;\n      text-transform: initial;\n      color: #9ea7b8;\n      text-align: left;\n      padding-left: 35px;\n      border-color: transparent;\n      svg {\n        position: absolute;\n        top: 0;\n        left: 0;\n      }\n    }\n    tr.dynamiczone-row {\n      &:not(:first-of-type) {\n        &::before {\n          background-color: transparent;\n        }\n      }\n      > td[colspan='12'] {\n        padding-left: 0;\n        padding-right: 0;\n      }\n\n      .tabs-wrapper {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 100%;\n        // height: 90px;\n        position: absolute;\n        top: 0;\n        left: 0;\n        z-index: 2;\n        padding-top: 18px;\n        padding-left: 86px;\n        padding-right: 30px;\n        .nav-tabs {\n          border-bottom: 0;\n        }\n        ul.nav {\n          width: 100%;\n          // height: 90px;\n          display: flex;\n          flex-wrap: nowrap;\n          overflow-x: auto;\n          overflow-y: hidden;\n          li {\n            margin-right: 9px;\n          }\n        }\n        & + .tab-content {\n          padding-top: 126px;\n          position: relative;\n          z-index: 1;\n        }\n      }\n    }\n  }\n  & + .plus-icon {\n    width: 27px;\n    height: 27px;\n    border-radius: 18px;\n    position: absolute;\n    bottom: 14px;\n    left: 34px;\n    background-color: ",";\n\n    color: transparent;\n    text-align: center;\n    line-height: 27px;\n    display: flex;\n    cursor: pointer;\n    svg {\n      margin: auto;\n      width: 11px;\n      height: 11px;\n    }\n  }\n"]);_templateObject=function _templateObject(){return data;};return data;}var Wrapper=(0,_styledComponents.default)(_styles.List)(_templateObject(),function(_ref){var isFromDynamicZone=_ref.isFromDynamicZone;return isFromDynamicZone?'#AED4FB':'#f3f4f4';});Wrapper.defaultProps={isFromDynamicZone:false};var _default=Wrapper;exports.default=_default;

/***/ }),

/***/ 2223:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__(13));var _react=_interopRequireDefault(__webpack_require__(0));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _ListButton=__webpack_require__(2224);var _Title=_interopRequireDefault(__webpack_require__(2225));var _Wrapper=_interopRequireDefault(__webpack_require__(2226));/* eslint-disable react/jsx-one-expression-per-line */function ListHeader(_ref){var actions=_ref.actions,title=_ref.title;return/*#__PURE__*/_react.default.createElement(_Wrapper.default,null,/*#__PURE__*/_react.default.createElement("div",{className:"list-header-actions"},actions.map(function(action){var disabled=action.disabled,label=action.label,onClick=action.onClick;return/*#__PURE__*/_react.default.createElement(_ListButton.ListHeaderButton,(0,_extends2.default)({key:label,onClick:onClick,disabled:disabled||false},action),label);})),/*#__PURE__*/_react.default.createElement("div",{className:"list-header-title"},title.map(function(item){return/*#__PURE__*/_react.default.createElement(_Title.default,{key:item},item,"\xA0");})));}ListHeader.defaultProps={actions:[],title:[]};ListHeader.propTypes={actions:_propTypes.default.arrayOf(_propTypes.default.shape({disabled:_propTypes.default.bool,onClick:_propTypes.default.func,title:_propTypes.default.string})),title:_propTypes.default.arrayOf(_propTypes.default.string)};var _default=ListHeader;exports.default=_default;

/***/ }),

/***/ 2224:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.ListHeaderButton=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(11));var _styledComponents=_interopRequireDefault(__webpack_require__(3));var _core=__webpack_require__(25);function _templateObject(){var data=(0,_taggedTemplateLiteral2.default)(["\n  padding-left: 15px;\n  padding-right: 15px;\n"]);_templateObject=function _templateObject(){return data;};return data;}/* eslint-disable */var ListHeaderButton=(0,_styledComponents.default)(_core.Button)(_templateObject());exports.ListHeaderButton=ListHeaderButton;

/***/ }),

/***/ 2225:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(11));var _styledComponents=_interopRequireDefault(__webpack_require__(3));var _strapiHelperPlugin=__webpack_require__(6);function _templateObject(){var data=(0,_taggedTemplateLiteral2.default)(["\n  margin-bottom: 0;\n  color: ",";\n  font-family: 'Lato';\n  font-size: 1.8rem;\n  font-weight: bold;\n  line-height: 2.2rem;\n"]);_templateObject=function _templateObject(){return data;};return data;}var Title=_styledComponents.default.p(_templateObject(),_strapiHelperPlugin.colors.blueTxt);var _default=Title;exports.default=_default;

/***/ }),

/***/ 2226:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(11));var _styledComponents=_interopRequireDefault(__webpack_require__(3));function _templateObject(){var data=(0,_taggedTemplateLiteral2.default)(["\n  position: relative;\n  padding: 2.1rem 6rem 1.7rem 3rem;\n  background-color: white;\n  .list-header-actions {\n    position: absolute;\n    top: 1.8rem;\n    right: 3rem;\n    button {\n      outline: 0;\n      margin-left: 10px;\n    }\n  }\n"]);_templateObject=function _templateObject(){return data;};return data;}var Wrapper=_styledComponents.default.div(_templateObject());var _default=Wrapper;exports.default=_default;

/***/ }),

/***/ 2227:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__(13));var _regenerator=_interopRequireDefault(__webpack_require__(85));var _asyncToGenerator2=_interopRequireDefault(__webpack_require__(108));var _react=_interopRequireDefault(__webpack_require__(0));var _propTypes=_interopRequireDefault(__webpack_require__(2));var _lodash=__webpack_require__(7);var _reactRouterDom=__webpack_require__(35);var _strapiHelperPlugin=__webpack_require__(6);var _pluginId=_interopRequireDefault(__webpack_require__(109));var _getTrad=_interopRequireDefault(__webpack_require__(68));var _CustomLink=_interopRequireDefault(__webpack_require__(2228));var _useDataManager2=_interopRequireDefault(__webpack_require__(120));var _makeSearch=_interopRequireDefault(__webpack_require__(386));var _Wrapper=_interopRequireDefault(__webpack_require__(2231));/**
 *
 * LeftMenu
 *
 */ /* eslint-disable indent */var displayNotificationCTNotSaved=function displayNotificationCTNotSaved(){strapi.notification.info("".concat(_pluginId.default,".notification.info.creating.notSaved"));};function LeftMenu(_ref){var wait=_ref.wait;var _useDataManager=(0,_useDataManager2.default)(),components=_useDataManager.components,componentsGroupedByCategory=_useDataManager.componentsGroupedByCategory,contentTypes=_useDataManager.contentTypes,isInDevelopmentMode=_useDataManager.isInDevelopmentMode,sortedContentTypesList=_useDataManager.sortedContentTypesList;var _useGlobalContext=(0,_strapiHelperPlugin.useGlobalContext)(),emitEvent=_useGlobalContext.emitEvent,formatMessage=_useGlobalContext.formatMessage;var _useHistory=(0,_reactRouterDom.useHistory)(),push=_useHistory.push;var componentsData=(0,_lodash.sortBy)(Object.keys(componentsGroupedByCategory).map(function(category){return{name:category,title:category,isEditable:isInDevelopmentMode,onClickEdit:function onClickEdit(e,data){e.stopPropagation();var search=(0,_makeSearch.default)({actionType:'edit',modalType:'editCategory',categoryName:data.name,header_label_1:formatMessage({id:(0,_getTrad.default)('modalForm.header.categories')}),header_icon_name_1:'component',header_icon_isCustom_1:false,header_info_category_1:null,header_info_name_1:null,header_label_2:data.name,header_icon_name_2:null,header_icon_isCustom_2:false,header_info_category_2:null,header_info_name_2:null,settingType:'base'});push({search:search});},links:(0,_lodash.sortBy)(componentsGroupedByCategory[category].map(function(compo){return{name:compo.uid,to:"/plugins/".concat(_pluginId.default,"/component-categories/").concat(category,"/").concat(compo.uid),title:compo.schema.name};}),function(obj){return obj.title;})};}),function(obj){return obj.title;});var canOpenModalCreateCTorComponent=function canOpenModalCreateCTorComponent(){return!Object.keys(contentTypes).some(function(ct){return contentTypes[ct].isTemporary===true;})&&!Object.keys(components).some(function(component){return components[component].isTemporary===true;});};var handleClickOpenModal=/*#__PURE__*/function(){var _ref2=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee(modalType){var kind,type,search,_args=arguments;return _regenerator.default.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:kind=_args.length>1&&_args[1]!==undefined?_args[1]:'';type=kind==='singleType'?kind:modalType;if(!canOpenModalCreateCTorComponent()){_context.next=10;break;}emitEvent("willCreate".concat((0,_lodash.upperFirst)((0,_lodash.camelCase)(type))));_context.next=6;return wait();case 6:search=(0,_makeSearch.default)({modalType:modalType,kind:kind,actionType:'create',settingType:'base',forTarget:modalType,headerId:(0,_getTrad.default)("modalForm.".concat(type,".header-create")),header_icon_isCustom_1:'false',header_icon_name_1:type,header_label_1:'null'});push({search:search});_context.next=11;break;case 10:displayNotificationCTNotSaved();case 11:case"end":return _context.stop();}}},_callee);}));return function handleClickOpenModal(_x){return _ref2.apply(this,arguments);};}();var data=[{name:'models',title:{id:"".concat(_pluginId.default,".menu.section.models.name.")},searchable:true,customLink:isInDevelopmentMode?{Component:_CustomLink.default,componentProps:{id:"".concat(_pluginId.default,".button.model.create"),onClick:function onClick(){handleClickOpenModal('contentType','collectionType');}}}:null,links:sortedContentTypesList.filter(function(contentType){return contentType.kind==='collectionType';})},{name:'singleTypes',title:{id:"".concat(_pluginId.default,".menu.section.single-types.name.")},searchable:true,customLink:isInDevelopmentMode?{Component:_CustomLink.default,componentProps:{id:"".concat(_pluginId.default,".button.single-types.create"),onClick:function onClick(){handleClickOpenModal('contentType','singleType');}}}:null,links:sortedContentTypesList.filter(function(singleType){return singleType.kind==='singleType';})},{name:'components',title:{id:"".concat(_pluginId.default,".menu.section.components.name.")},searchable:true,customLink:isInDevelopmentMode?{Component:_CustomLink.default,componentProps:{id:"".concat(_pluginId.default,".button.component.create"),onClick:function onClick(){handleClickOpenModal('component');}}}:null,links:componentsData}];return/*#__PURE__*/_react.default.createElement(_Wrapper.default,{className:"col-md-3"},data.map(function(list){return/*#__PURE__*/_react.default.createElement(_strapiHelperPlugin.LeftMenuList,(0,_extends2.default)({},list,{key:list.name}));}));}LeftMenu.defaultProps={wait:function wait(){}};LeftMenu.propTypes={wait:_propTypes.default.func};var _default=LeftMenu;exports.default=_default;

/***/ }),

/***/ 2228:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);var _interopRequireWildcard=__webpack_require__(12);Object.defineProperty(exports,"__esModule",{value:true});exports.CustomLink=exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(0));var _reactIntl=__webpack_require__(15);var _propTypes=_interopRequireDefault(__webpack_require__(2));var _icons=__webpack_require__(86);var _P=_interopRequireDefault(__webpack_require__(2229));var _StyledCustomLink=_interopRequireDefault(__webpack_require__(2230));var CustomLink=function CustomLink(_ref){var disabled=_ref.disabled,id=_ref.id,onClick=_ref.onClick;return/*#__PURE__*/_react.default.createElement(_StyledCustomLink.default,{disabled:disabled},/*#__PURE__*/_react.default.createElement("button",{onClick:onClick,disabled:disabled,type:"button"},/*#__PURE__*/_react.default.createElement(_P.default,null,/*#__PURE__*/_react.default.createElement(_icons.Plus,{fill:"#007EFF",width:"11px",height:"11px"}),id&&/*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage,{id:id}))));};exports.CustomLink=CustomLink;CustomLink.defaultProps={disabled:false,id:null};CustomLink.propTypes={disabled:_propTypes.default.bool,id:_propTypes.default.string,onClick:_propTypes.default.func.isRequired};var _default=(0,_react.memo)(CustomLink);exports.default=_default;

/***/ }),

/***/ 2229:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__(3));var _strapiHelperPlugin=__webpack_require__(6);const P=_styledComponents.default.p`
  color: ${_strapiHelperPlugin.colors.blue};
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  > svg {
    margin-right: 7px;
    vertical-align: initial;
    -webkit-font-smoothing: subpixel-antialiased;
  }
`;var _default=P;exports.default=_default;

/***/ }),

/***/ 2230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(11));var _styledComponents=_interopRequireDefault(__webpack_require__(3));function _templateObject(){var data=(0,_taggedTemplateLiteral2.default)(["\n  padding-left: 15px;\n  padding-top: 10px;\n  line-height: 0;\n  margin-left: -3px;\n\n  button {\n    cursor: ",";\n    padding: 0;\n    line-height: 16px;\n  }\n"]);_templateObject=function _templateObject(){return data;};return data;}var StyledCustomLink=_styledComponents.default.div(_templateObject(),function(_ref){var disabled=_ref.disabled;return disabled?'not-allowed':'pointer';});var _default=StyledCustomLink;exports.default=_default;

/***/ }),

/***/ 2231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(11));var _styledComponents=_interopRequireDefault(__webpack_require__(3));var _strapiHelperPlugin=__webpack_require__(6);function _templateObject(){var data=(0,_taggedTemplateLiteral2.default)(["\n  width: 100%;\n  min-height: calc(100vh - ",");\n  background-color: ",";\n  padding-top: 3.1rem;\n  padding-left: 2rem;\n  padding-right: 2rem;\n"]);_templateObject=function _templateObject(){return data;};return data;}var Wrapper=_styledComponents.default.div(_templateObject(),_strapiHelperPlugin.sizes.header.height,_strapiHelperPlugin.colors.leftMenu.mediumGrey);var _default=Wrapper;exports.default=_default;

/***/ }),

/***/ 2232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _taggedTemplateLiteral2=_interopRequireDefault(__webpack_require__(11));var _styledComponents=_interopRequireDefault(__webpack_require__(3));var _strapiHelperPlugin=__webpack_require__(6);function _templateObject(){var data=(0,_taggedTemplateLiteral2.default)(["\n  .button-secondary {\n    &:hover {\n      background-color: #ffffff !important;\n      box-shadow: 0 0 0 #fff;\n    }\n  }\n  .button-submit {\n    min-width: 140px;\n  }\n  .add-button {\n    line-height: 30px;\n    svg {\n      height: 11px;\n      width: 11px;\n      vertical-align: initial;\n    }\n  }\n"]);_templateObject=function _templateObject(){return data;};return data;}var Wrapper=(0,_styledComponents.default)(_strapiHelperPlugin.ViewContainer)(_templateObject());var _default=Wrapper;exports.default=_default;

/***/ }),

/***/ 716:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireWildcard=__webpack_require__(12);var _interopRequireDefault=__webpack_require__(1);Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__(13));var _regenerator=_interopRequireDefault(__webpack_require__(85));var _defineProperty2=_interopRequireDefault(__webpack_require__(16));var _asyncToGenerator2=_interopRequireDefault(__webpack_require__(108));var _slicedToArray2=_interopRequireDefault(__webpack_require__(57));var _react=_interopRequireWildcard(__webpack_require__(0));var _reactRouterDom=__webpack_require__(35);var _propTypes=_interopRequireDefault(__webpack_require__(2));var _lodash=__webpack_require__(7);var _strapiHelperPlugin=__webpack_require__(6);var _custom=__webpack_require__(63);var _ListViewContext=_interopRequireDefault(__webpack_require__(2149));var _convertAttrObjToArray=_interopRequireDefault(__webpack_require__(2150));var _getAttributeDisplayedType=_interopRequireDefault(__webpack_require__(2151));var _getTrad=_interopRequireDefault(__webpack_require__(68));var _makeSearch=_interopRequireDefault(__webpack_require__(386));var _ListRow=_interopRequireDefault(__webpack_require__(2213));var _List=_interopRequireDefault(__webpack_require__(2152));var _useDataManager2=_interopRequireDefault(__webpack_require__(120));var _pluginId=_interopRequireDefault(__webpack_require__(109));var _ListHeader=_interopRequireDefault(__webpack_require__(2223));var _LeftMenu=_interopRequireDefault(__webpack_require__(2227));var _Wrapper=_interopRequireDefault(__webpack_require__(2232));function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2.default)(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}/* eslint-disable indent */var ListView=function ListView(){var _useDataManager=(0,_useDataManager2.default)(),initialData=_useDataManager.initialData,modifiedData=_useDataManager.modifiedData,isInDevelopmentMode=_useDataManager.isInDevelopmentMode,isInContentTypeView=_useDataManager.isInContentTypeView,submitData=_useDataManager.submitData,toggleModalCancel=_useDataManager.toggleModalCancel;var _useGlobalContext=(0,_strapiHelperPlugin.useGlobalContext)(),emitEvent=_useGlobalContext.emitEvent,formatMessage=_useGlobalContext.formatMessage;var _useHistory=(0,_reactRouterDom.useHistory)(),push=_useHistory.push,goBack=_useHistory.goBack;var _useLocation=(0,_reactRouterDom.useLocation)(),search=_useLocation.search;var _useState=(0,_react.useState)(true),_useState2=(0,_slicedToArray2.default)(_useState,2),enablePrompt=_useState2[0],togglePrompt=_useState2[1];(0,_react.useEffect)(function(){if(search===''){togglePrompt(true);}},[search]);// Disabling the prompt on the first render if one of the modal is open
(0,_react.useEffect)(function(){if(search!==''){togglePrompt(false);}// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);var firstMainDataPath=isInContentTypeView?'contentType':'component';var mainDataTypeAttributesPath=[firstMainDataPath,'schema','attributes'];var targetUid=(0,_lodash.get)(modifiedData,[firstMainDataPath,'uid']);var contentTypeKind=(0,_lodash.get)(modifiedData,[firstMainDataPath,'schema','kind'],null);var attributes=(0,_lodash.get)(modifiedData,mainDataTypeAttributesPath,{});var attributesLength=Object.keys(attributes).length;var currentDataName=(0,_lodash.get)(initialData,[firstMainDataPath,'schema','name'],'');var isFromPlugin=(0,_lodash.has)(initialData,[firstMainDataPath,'plugin']);var hasModelBeenModified=!(0,_lodash.isEqual)(modifiedData,initialData);var forTarget=isInContentTypeView?'contentType':'component';var handleClickAddField=/*#__PURE__*/function(){var _ref=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee(forTarget,targetUid,firstHeaderObj,secondHeaderObj,thirdHeaderObj,fourthHeaderObj){var searchObj;return _regenerator.default.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return wait();case 2:searchObj=_objectSpread(_objectSpread(_objectSpread(_objectSpread({modalType:'chooseAttribute',forTarget:forTarget,targetUid:targetUid},firstHeaderObj),secondHeaderObj),thirdHeaderObj),fourthHeaderObj);push({search:(0,_makeSearch.default)(searchObj)});case 4:case"end":return _context.stop();}}},_callee);}));return function handleClickAddField(_x,_x2,_x3,_x4,_x5,_x6){return _ref.apply(this,arguments);};}();var handleClickAddComponentToDZ=/*#__PURE__*/function(){var _ref2=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee2(dzName){var firstHeaderObject,secondHeaderObj,search;return _regenerator.default.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:firstHeaderObject={header_label_1:currentDataName,header_icon_name_1:'dynamiczone',header_icon_isCustom_1:false};secondHeaderObj={header_label_2:dzName};search=_objectSpread(_objectSpread({modalType:'addComponentToDynamicZone',forTarget:'contentType',targetUid:targetUid,dynamicZoneTarget:dzName,settingType:'base',step:'1',actionType:'edit'},firstHeaderObject),secondHeaderObj);_context2.next=5;return wait();case 5:push({search:(0,_makeSearch.default)(search,true)});case 6:case"end":return _context2.stop();}}},_callee2);}));return function handleClickAddComponentToDZ(_x7){return _ref2.apply(this,arguments);};}();var handleClickEditField=/*#__PURE__*/function(){var _ref3=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee3(forTarget,targetUid,attributeName,type,firstHeaderObj,secondHeaderObj,thirdHeaderObj,fourthHeaderObj,fifthHeaderObj){var attributeType,search;return _regenerator.default.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:attributeType=(0,_getAttributeDisplayedType.default)(type);_context3.next=3;return wait();case 3:search=_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({modalType:'attribute',actionType:'edit',settingType:'base',forTarget:forTarget,targetUid:targetUid,attributeName:attributeName,attributeType:attributeType,step:type==='component'?'2':null},firstHeaderObj),secondHeaderObj),thirdHeaderObj),fourthHeaderObj),fifthHeaderObj);_context3.next=6;return wait();case 6:push({search:(0,_makeSearch.default)(search,true)});case 7:case"end":return _context3.stop();}}},_callee3);}));return function handleClickEditField(_x8,_x9,_x10,_x11,_x12,_x13,_x14,_x15,_x16){return _ref3.apply(this,arguments);};}();var getDescription=function getDescription(){var description=(0,_lodash.get)(modifiedData,[firstMainDataPath,'schema','description'],null);return description||formatMessage({id:"".concat(_pluginId.default,".modelPage.contentHeader.emptyDescription.description")});};var wait=/*#__PURE__*/function(){var _ref4=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee4(){return _regenerator.default.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:togglePrompt(false);return _context4.abrupt("return",new Promise(function(resolve){return setTimeout(resolve,100);}));case 2:case"end":return _context4.stop();}}},_callee4);}));return function wait(){return _ref4.apply(this,arguments);};}();var label=(0,_lodash.get)(modifiedData,[firstMainDataPath,'schema','name'],'');var kind=(0,_lodash.get)(modifiedData,[firstMainDataPath,'schema','kind'],'');var headerProps={actions:isInDevelopmentMode?[{color:'cancel',onClick:function onClick(){toggleModalCancel();},label:formatMessage({id:"".concat(_pluginId.default,".form.button.cancel")}),type:'button',disabled:(0,_lodash.isEqual)(modifiedData,initialData)},{className:'button-submit',color:'success',onClick:function onClick(){return submitData();},label:formatMessage({id:"".concat(_pluginId.default,".form.button.save")}),type:'submit',disabled:(0,_lodash.isEqual)(modifiedData,initialData)}]:[],title:{label:label,cta:isInDevelopmentMode&&!isFromPlugin?{icon:'pencil-alt',onClick:function(){var _onClick=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee5(){var contentType;return _regenerator.default.wrap(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:_context5.next=2;return wait();case 2:contentType=kind||firstMainDataPath;if(contentType==='collectionType'){emitEvent('willEditNameOfContentType');}if(contentType==='singleType'){emitEvent('willEditNameOfSingleType');}push({search:(0,_makeSearch.default)({modalType:firstMainDataPath,actionType:'edit',settingType:'base',forTarget:firstMainDataPath,targetUid:targetUid,header_label_1:label,header_icon_isCustom_1:false,header_icon_name_1:contentType==='singleType'?contentType:firstMainDataPath,headerId:(0,_getTrad.default)('modalForm.header-edit')})});case 6:case"end":return _context5.stop();}}},_callee5);}));function onClick(){return _onClick.apply(this,arguments);}return onClick;}()}:null},content:getDescription()};var listTitle=[formatMessage({id:"".concat(_pluginId.default,".table.attributes.title.").concat(attributesLength>1?'plural':'singular')},{number:attributesLength})];var addButtonProps={icon:true,className:'add-button',color:'primary',label:formatMessage({id:"".concat(_pluginId.default,".button.attributes.add.another")}),onClick:function onClick(){var headerDisplayObject={header_label_1:currentDataName,header_icon_name_1:forTarget==='contentType'?contentTypeKind:forTarget,header_icon_isCustom_1:false};handleClickAddField(forTarget,targetUid,headerDisplayObject);}};var goToCMSettingsPage=function goToCMSettingsPage(){var endPoint=isInContentTypeView?"/plugins/content-manager/".concat(contentTypeKind,"/").concat(targetUid,"/ctm-configurations/edit-settings/content-types"):"/plugins/content-manager/ctm-configurations/edit-settings/components/".concat(targetUid,"/");push(endPoint);};var configureButtonProps={icon:/*#__PURE__*/_react.default.createElement(_strapiHelperPlugin.LayoutIcon,{className:"colored",fill:"#007eff"}),color:'secondary',label:formatMessage({id:"".concat(_pluginId.default,".form.button.configure-view")}),onClick:goToCMSettingsPage,style:{height:'30px',marginTop:'1px'},className:'button-secondary'};var listActions=isInDevelopmentMode?[_objectSpread({},configureButtonProps),_objectSpread({},addButtonProps)]:[configureButtonProps];var CustomRow=function CustomRow(props){var name=props.name;return/*#__PURE__*/_react.default.createElement(_ListRow.default,(0,_extends2.default)({},props,{attributeName:name,name:name,onClick:handleClickEditField}));};CustomRow.defaultProps={name:null};CustomRow.propTypes={name:_propTypes.default.string};return/*#__PURE__*/_react.default.createElement(_ListViewContext.default.Provider,{value:{openModalAddField:handleClickAddField}},/*#__PURE__*/_react.default.createElement(_Wrapper.default,null,/*#__PURE__*/_react.default.createElement(_strapiHelperPlugin.BackHeader,{onClick:goBack}),/*#__PURE__*/_react.default.createElement(_reactRouterDom.Prompt,{message:formatMessage({id:(0,_getTrad.default)('prompt.unsaved')}),when:hasModelBeenModified&&enablePrompt}),/*#__PURE__*/_react.default.createElement("div",{className:"container-fluid"},/*#__PURE__*/_react.default.createElement("div",{className:"row"},/*#__PURE__*/_react.default.createElement(_LeftMenu.default,{wait:wait}),/*#__PURE__*/_react.default.createElement("div",{className:"col-md-9 content",style:{paddingLeft:'30px',paddingRight:'30px'}},/*#__PURE__*/_react.default.createElement(_custom.Header,headerProps),/*#__PURE__*/_react.default.createElement(_strapiHelperPlugin.ListWrapper,{style:{marginBottom:80}},/*#__PURE__*/_react.default.createElement(_ListHeader.default,{actions:listActions,title:listTitle}),/*#__PURE__*/_react.default.createElement(_List.default,{items:(0,_convertAttrObjToArray.default)(attributes),customRowComponent:function customRowComponent(props){return/*#__PURE__*/_react.default.createElement(CustomRow,props);},addComponentToDZ:handleClickAddComponentToDZ,targetUid:targetUid,dataType:forTarget,dataTypeName:currentDataName,mainTypeName:currentDataName,editTarget:forTarget,isMain:true})))))));};var _default=ListView;exports.default=_default;

/***/ })

}]);