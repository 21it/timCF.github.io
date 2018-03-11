"use strict";
$(document).ready(function(){
  $(window).on("load", function() {

    var animation_duration = 150;
    var fadeDuration = 300;

    window.toggleCheckbox = function(checkbox, block_id) {
      if (checkbox.checked) {
        $("#"+block_id).show(animation_duration);
      } else {
        $("#"+block_id).hide(animation_duration);
      }
    };

    $.modal.defaults.fadeDuration = fadeDuration;

    $('#pdf_popup').on($.modal.BEFORE_CLOSE, function(event, modal) {
      $("input:checkbox").prop('checked', 'checked').trigger("change");
    });

  });
});
