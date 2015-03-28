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

    submodule.tooltips = function(){

      //ACTIVATE TOOLTIP ON FOCUS
      $('[aria-describedby]').on('focus', function(){
        //find its tooltip and show it
        var tooltipMessage = $(this).attr("aria-describedby");

        $('#' + tooltipMessage).closest('.tooltip').addClass('showing');

      })
      .on('blur', function(){
        //find its tooltip and hide it
        var tooltipMessage = $(this).attr("aria-describedby");

        $('#' + tooltipMessage).closest('.tooltip').removeClass('showing');
      });

      $('.tooltip').on('focus', function(){
        $(this).addClass('showing');

      })
      .on('blur', function(){
        $(this).removeClass('showing');
      });


    };

    submodule.init = function () {

      submodule.tooltips();
    };

    $(document).ready(function () {
      submodule.init();
    });

    return submodule;
  }(module, $));

  return module;

}(window.ACCESSIBILITY || {}, window.jQuery));
