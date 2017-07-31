(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("ShaderShims", [], factory);
	else if(typeof exports === 'object')
		exports["ShaderShims"] = factory();
	else
		root["ShaderShims"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.all = all;
exports.instancing = instancing;
exports.matcap = matcap;
function all(THREE) {
  instancing(THREE);
  matcap(THREE);
}

function instancing(THREE) {
  shim(THREE, 'instancing');
}

function matcap(THREE) {
  shim(THREE, 'matcap');
}

function isShimmed(THREE, type) {
  if (!THREE._shims_) return false;
  return !!THREE._shims_[type];
}

function setShimmed(THREE, type) {
  if (!THREE._shims_) THREE._shims_ = {};
  THREE._shims_[type] = true;
}

function shim(THREE, type, shaders) {
  if (isShimmed(THREE, type)) return;

  if (!shaders) shaders = Object.keys(THREE.ShaderChunk);

  shaders.forEach(function (shader) {
    try {
      THREE.ShaderChunk[shader] = __webpack_require__(1)("./" + type + '/' + shader + '.glsl').replace('{shader}', THREE.ShaderChunk[shader]);
    } catch (e) {}
  });

  setShimmed(THREE, type);
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./instancing/begin_vertex.glsl": 2,
	"./instancing/beginnormal_vertex.glsl": 3,
	"./instancing/color_fragment.glsl": 4,
	"./instancing/color_pars_fragment.glsl": 5,
	"./instancing/color_vertex.glsl": 6,
	"./instancing/common/pars_fragment.glsl": 7,
	"./instancing/common/pars_vertex.glsl": 8,
	"./instancing/common/pass_color.glsl": 9,
	"./instancing/common/transform_normal.glsl": 10,
	"./instancing/common/transform_position.glsl": 11,
	"./instancing/shadowmap_pars_vertex.glsl": 12,
	"./instancing/uv_pars_vertex.glsl": 13,
	"./matcap/begin_vertex.glsl": 14,
	"./matcap/common/normal_eye_vertex.glsl": 15,
	"./matcap/common/pars_fragment.glsl": 16,
	"./matcap/common/pars_vertex.glsl": 17,
	"./matcap/map_fragment.glsl": 18,
	"./matcap/map_pars_fragment.glsl": 19,
	"./matcap/uv_pars_vertex.glsl": 20
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "{shader}\n\n#if defined(INSTANCING) && !defined(INSTANCING_TRANSFORMED_POSITION)\n  #define INSTANCING_TRANSFORMED_POSITION\n  transformed = vertex_instance_position(transformed);\n#endif\n\n"

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "{shader}\n\n#if defined(INSTANCING) && !defined(INSTANCING_TRANSFORMED_NORMAL)\n  #define INSTANCING_TRANSFORMED_NORMAL\n  objectNormal = vertex_instance_normal(objectNormal);\n#endif\n\n"

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "{shader}\n\n#ifdef INSTANCING\n  #ifdef INSTANCING_USE_COLOR\n    diffuseColor.rgb *= vInstanceColor;\n  #endif\n#endif\n"

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "{shader}\n\n#if defined(INSTANCING) && !defined(INSTANCING_PARS_FRAGMENT)\n  #define INSTANCING_PARS_FRAGMENT\n\n  #ifdef INSTANCING_USE_COLOR\n    varying vec3 vInstanceColor;\n  #endif\n\n#endif\n\n"

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "{shader}\n\n#if defined(INSTANCING) && defined(INSTANCING_USE_COLOR)\n  vInstanceColor = instanceColor;\n#endif\n\n"

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "#if defined(INSTANCING) && !defined(INSTANCING_PARS_FRAGMENT)\n  #define INSTANCING_PARS_FRAGMENT\n\n  #ifdef INSTANCING_USE_COLOR\n    varying vec3 vInstanceColor;\n  #endif\n\n#endif\n"

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "#if defined(INSTANCING) && !defined(INSTANCING_PARS_VERTEX)\n  #define INSTANCING_PARS_VERTEX\n\n  #ifdef INSTANCING_USE_POSITION\n    attribute vec3 instancePosition;\n  #endif\n\n  #ifdef INSTANCING_USE_QUATERNION\n    attribute vec4 instanceQuaternion;\n  #endif\n\n  #ifdef INSTANCING_USE_SCALING\n    #ifdef INSTANCING_SCALING_IS_UNIFORM\n      attribute float instanceScale;\n    #else\n      attribute vec3 instanceScale;\n    #endif\n  #endif\n\n  #ifdef INSTANCING_USE_COLOR\n    attribute vec3 instanceColor;\n    varying vec3 vInstanceColor;\n  #endif\n\n  vec3 vertex_instance_position(vec3 position){\n    vec3 p = position;\n\n    #ifdef  INSTANCING_USE_SCALING\n      p *= vec3(instanceScale);\n    #endif\n\n    #ifdef INSTANCING_USE_QUATERNION\n      p = p + 2.0 * cross(instanceQuaternion.xyz, cross(instanceQuaternion.xyz, p) + instanceQuaternion.w * p);\n    #endif\n\n    #ifdef INSTANCING_USE_POSITION\n        p += instancePosition;\n    #endif\n    return p;\n  }\n\n  vec3 vertex_instance_normal(vec3 normal){\n    vec3 n = normal;\n\n    #ifdef  INSTANCING_USE_SCALING\n      n /= normalize(vec3(instanceScale));\n    #endif\n\n    #ifdef INSTANCING_USE_QUATERNION\n      n = n + 2.0 * cross(instanceQuaternion.xyz, cross(instanceQuaternion.xyz, n) + instanceQuaternion.w * n);\n    #endif\n\n    return n;\n  }\n\n#endif\n"

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "#if defined(INSTANCING) && defined(INSTANCING_USE_COLOR)\n  vInstanceColor = instanceColor;\n#endif\n"

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "#if defined(INSTANCING) && !defined(INSTANCING_TRANSFORMED_NORMAL)\n  #define INSTANCING_TRANSFORMED_NORMAL\n  objectNormal = vertex_instance_normal(objectNormal);\n#endif\n"

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "#if defined(INSTANCING) && !defined(INSTANCING_TRANSFORMED_POSITION)\n  #define INSTANCING_TRANSFORMED_POSITION\n  transformed = vertex_instance_position(transformed);\n#endif\n"

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "{shader}\n\n#if defined(INSTANCING) && !defined(INSTANCING_PARS_VERTEX)\n  #define INSTANCING_PARS_VERTEX\n\n  #ifdef INSTANCING_USE_POSITION\n    attribute vec3 instancePosition;\n  #endif\n\n  #ifdef INSTANCING_USE_QUATERNION\n    attribute vec4 instanceQuaternion;\n  #endif\n\n  #ifdef INSTANCING_USE_SCALING\n    #ifdef INSTANCING_SCALING_IS_UNIFORM\n      attribute float instanceScale;\n    #else\n      attribute vec3 instanceScale;\n    #endif\n  #endif\n\n  #ifdef INSTANCING_USE_COLOR\n    attribute vec3 instanceColor;\n    varying vec3 vInstanceColor;\n  #endif\n\n  vec3 vertex_instance_position(vec3 position){\n    vec3 p = position;\n\n    #ifdef  INSTANCING_USE_SCALING\n      p *= vec3(instanceScale);\n    #endif\n\n    #ifdef INSTANCING_USE_QUATERNION\n      p = p + 2.0 * cross(instanceQuaternion.xyz, cross(instanceQuaternion.xyz, p) + instanceQuaternion.w * p);\n    #endif\n\n    #ifdef INSTANCING_USE_POSITION\n        p += instancePosition;\n    #endif\n    return p;\n  }\n\n  vec3 vertex_instance_normal(vec3 normal){\n    vec3 n = normal;\n\n    #ifdef  INSTANCING_USE_SCALING\n      n /= normalize(vec3(instanceScale));\n    #endif\n\n    #ifdef INSTANCING_USE_QUATERNION\n      n = n + 2.0 * cross(instanceQuaternion.xyz, cross(instanceQuaternion.xyz, n) + instanceQuaternion.w * n);\n    #endif\n\n    return n;\n  }\n\n#endif\n\n"

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "{shader}\n\n#if defined(INSTANCING) && !defined(INSTANCING_PARS_VERTEX)\n  #define INSTANCING_PARS_VERTEX\n\n  #ifdef INSTANCING_USE_POSITION\n    attribute vec3 instancePosition;\n  #endif\n\n  #ifdef INSTANCING_USE_QUATERNION\n    attribute vec4 instanceQuaternion;\n  #endif\n\n  #ifdef INSTANCING_USE_SCALING\n    #ifdef INSTANCING_SCALING_IS_UNIFORM\n      attribute float instanceScale;\n    #else\n      attribute vec3 instanceScale;\n    #endif\n  #endif\n\n  #ifdef INSTANCING_USE_COLOR\n    attribute vec3 instanceColor;\n    varying vec3 vInstanceColor;\n  #endif\n\n  vec3 vertex_instance_position(vec3 position){\n    vec3 p = position;\n\n    #ifdef  INSTANCING_USE_SCALING\n      p *= vec3(instanceScale);\n    #endif\n\n    #ifdef INSTANCING_USE_QUATERNION\n      p = p + 2.0 * cross(instanceQuaternion.xyz, cross(instanceQuaternion.xyz, p) + instanceQuaternion.w * p);\n    #endif\n\n    #ifdef INSTANCING_USE_POSITION\n        p += instancePosition;\n    #endif\n    return p;\n  }\n\n  vec3 vertex_instance_normal(vec3 normal){\n    vec3 n = normal;\n\n    #ifdef  INSTANCING_USE_SCALING\n      n /= normalize(vec3(instanceScale));\n    #endif\n\n    #ifdef INSTANCING_USE_QUATERNION\n      n = n + 2.0 * cross(instanceQuaternion.xyz, cross(instanceQuaternion.xyz, n) + instanceQuaternion.w * n);\n    #endif\n\n    return n;\n  }\n\n#endif\n\n"

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "{shader}\n#if defined( MATCAP ) && defined ( USE_MAP )\n  calculateMatCapNormalEye(transformed, modelViewMatrix, objectNormal, normalMatrix);\n#endif\n"

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "#ifdef MATCAP\n\n  #if defined( USE_MAP )\n    // calculateMatCapNormalEye();\n\n  vMatCapEye = normalize( vec3( modelViewMatrix * vec4( position, 1. ) ) );\n  vMatCapNormal = normalize( normalMatrix * normal );\n\n  vec3 r = reflect( vMatCapEye, vMatCapNormal );\n  float m = 2. * sqrt(\n    pow( r.x, 2. ) +\n    pow( r.y, 2. ) +\n    pow( r.z + 1., 2. )\n  );\n  vMatCapUv = r.xy / m + .5;\n\n  #endif\n\n#endif\n"

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "#if defined(MATCAP) && !defined(MATCAP_PARS_FRAGMENT)\n  #define MATCAP_PARS_FRAGMENT\n\n  #ifdef MATCAP_USE_PHONG\n    varying vec3 vMatCapEye;\n    varying vec3 vMatCapNormal;\n  #else\n    varying vec2 vMatCapUv;\n  #endif\n\n  vec4 matcapSampleColor(sampler2D map){\n    #ifdef MATCAP_USE_PHONG\n      vec3 r = reflect( vMatCapEye, vMatCapNormal );\n      float m = 2. * sqrt( pow( r.x, 2. ) + pow( r.y, 2. ) + pow( r.z + 1., 2. ) );\n      vec2 matcapUv = r.xy / m + .5;\n    #else\n      vec2 matcapUv = vMatCapUv;\n    #endif\n\n    return texture2D( map, matcapUv );\n  }\n\n#endif\n"

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "#if defined(MATCAP) && !defined(MATCAP_PARS_VERTEX)\n  #define MATCAP_PARS_VERTEX\n\n  #ifdef MATCAP_USE_PHONG\n    varying vec3 vMatCapEye;\n    varying vec3 vMatCapNormal;\n  #else\n    varying vec2 vMatCapUv;\n  #endif\n\n  void calculateMatCapNormalEye(vec3 position, mat4 modelViewMatrix, vec3 normal, mat3 normalMatrix){\n    vec3 e = normalize( vec3( modelViewMatrix * vec4( position, 1. ) ) );\n    vec3 n = normalize( normalMatrix * normal );\n\n    #ifdef MATCAP_USE_PHONG\n      vMatCapEye = e;\n      vMatCapNormal = n;\n    #else\n      vec3 r = reflect( e, n );\n      float m = 2. * sqrt(\n        pow( r.x, 2. ) +\n        pow( r.y, 2. ) +\n        pow( r.z + 1., 2. )\n      );\n      vMatCapUv = r.xy / m + .5;\n    #endif\n  }\n#endif\n"

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "#if defined(MATCAP)\n  #ifdef USE_MAP\n    vec4 texelColor = vec4(vUv, 1., 1.); //added to prevent warning\n    texelColor = matcapSampleColor(map);\n    texelColor = mapTexelToLinear( texelColor );\n  \tdiffuseColor *= texelColor;\n\n  #endif\n\n#else\n\n  {shader}\n\n#endif\n"

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "{shader}\n\n#if defined(MATCAP) && !defined(MATCAP_PARS_FRAGMENT)\n  #define MATCAP_PARS_FRAGMENT\n\n  #ifdef MATCAP_USE_PHONG\n    varying vec3 vMatCapEye;\n    varying vec3 vMatCapNormal;\n  #else\n    varying vec2 vMatCapUv;\n  #endif\n\n  vec4 matcapSampleColor(sampler2D map){\n    #ifdef MATCAP_USE_PHONG\n      vec3 r = reflect( vMatCapEye, vMatCapNormal );\n      float m = 2. * sqrt( pow( r.x, 2. ) + pow( r.y, 2. ) + pow( r.z + 1., 2. ) );\n      vec2 matcapUv = r.xy / m + .5;\n    #else\n      vec2 matcapUv = vMatCapUv;\n    #endif\n\n    return texture2D( map, matcapUv );\n  }\n\n#endif\n\n"

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "{shader}\n\n#if defined(MATCAP) && !defined(MATCAP_PARS_VERTEX)\n  #define MATCAP_PARS_VERTEX\n\n  #ifdef MATCAP_USE_PHONG\n    varying vec3 vMatCapEye;\n    varying vec3 vMatCapNormal;\n  #else\n    varying vec2 vMatCapUv;\n  #endif\n\n  void calculateMatCapNormalEye(vec3 position, mat4 modelViewMatrix, vec3 normal, mat3 normalMatrix){\n    vec3 e = normalize( vec3( modelViewMatrix * vec4( position, 1. ) ) );\n    vec3 n = normalize( normalMatrix * normal );\n\n    #ifdef MATCAP_USE_PHONG\n      vMatCapEye = e;\n      vMatCapNormal = n;\n    #else\n      vec3 r = reflect( e, n );\n      float m = 2. * sqrt(\n        pow( r.x, 2. ) +\n        pow( r.y, 2. ) +\n        pow( r.z + 1., 2. )\n      );\n      vMatCapUv = r.xy / m + .5;\n    #endif\n  }\n#endif\n\n"

/***/ })
/******/ ]);
});