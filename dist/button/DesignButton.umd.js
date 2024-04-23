(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["DesignButton"] = factory();
	else
		root["DesignButton"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  RedButton: function() { return /* reexport */ RedButton; },
  VueElegentButton: function() { return /* reexport */ VueElegentButton; },
  install: function() { return /* reexport */ install; }
});

// NAMESPACE OBJECT: ./src/components/Button/index.js
var Button_namespaceObject = {};
__webpack_require__.r(Button_namespaceObject);
__webpack_require__.d(Button_namespaceObject, {
  RedButton: function() { return RedButton; },
  VueElegentButton: function() { return VueElegentButton; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Button/RedButton.vue?vue&type=template&id=7e134728
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('button', {
    style: {
      padding: '15px',
      fontSize: '20px',
      background: _vm.background,
      color: _vm.color
    }
  }, [_vm._v(" " + _vm._s(_vm.text) + " ")]);
};
var staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Button/RedButton.vue?vue&type=script&lang=js
/* harmony default export */ var RedButtonvue_type_script_lang_js = ({
  name: "RedButton",
  props: {
    background: {
      default: "#FF0000"
    },
    color: {
      default: "#fff"
    },
    text: {
      default: "My github Red Button"
    }
  }
});
;// CONCATENATED MODULE: ./src/components/Button/RedButton.vue?vue&type=script&lang=js
 /* harmony default export */ var Button_RedButtonvue_type_script_lang_js = (RedButtonvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./src/components/Button/RedButton.vue





/* normalize component */
;
var component = normalizeComponent(
  Button_RedButtonvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RedButton = (component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Button/VueElegentButton.vue?vue&type=template&id=405721f2
var VueElegentButtonvue_type_template_id_405721f2_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('button', {
    style: {
      padding: '15px',
      fontSize: '20px',
      background: _vm.background,
      color: _vm.color
    }
  }, [_vm._v(" " + _vm._s(_vm.text) + " ")]);
};
var VueElegentButtonvue_type_template_id_405721f2_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Button/VueElegentButton.vue?vue&type=script&lang=js
/* harmony default export */ var VueElegentButtonvue_type_script_lang_js = ({
  name: "VueElegantButton",
  props: {
    background: {
      default: "#456099"
    },
    color: {
      default: "#fff"
    },
    text: {
      default: "My  github testing Button"
    }
  }
});
;// CONCATENATED MODULE: ./src/components/Button/VueElegentButton.vue?vue&type=script&lang=js
 /* harmony default export */ var Button_VueElegentButtonvue_type_script_lang_js = (VueElegentButtonvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/components/Button/VueElegentButton.vue





/* normalize component */
;
var VueElegentButton_component = normalizeComponent(
  Button_VueElegentButtonvue_type_script_lang_js,
  VueElegentButtonvue_type_template_id_405721f2_render,
  VueElegentButtonvue_type_template_id_405721f2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VueElegentButton = (VueElegentButton_component.exports);
;// CONCATENATED MODULE: ./src/components/Button/index.js



;// CONCATENATED MODULE: ./src/components/button.js

const install = Vue => {
  Object.values(Button_namespaceObject).filter(component => component.name).forEach(component => {
    Vue.component(component.name, component);
  });
};

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js



/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=DesignButton.umd.js.map