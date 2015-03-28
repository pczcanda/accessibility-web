window.ACCESSIBILITY = (function (module, $) {
  "use strict";

  if (!window.console) {
    window.console = {
      log: function () {
      },
      info: function () {
      },
      debug: function () {
      }
    }
  }

  if (typeof module.config === 'undefined') {
    module.config = {};
  }

  module.access = (function (module, $) {
    var submodule = {};

    submodule.init = function () {
    };

    $(document).ready(function () {
      submodule.init();
    });

    return submodule;
  }(module, $));

  return module;

}(window.ACCESSIBILITY || {}, window.jQuery));
