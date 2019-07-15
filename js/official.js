'use strict'
var savePDF = function() {
  var pdf = new jsPDF('p', 'pt', 'letter');

  // source can be HTML-formatted string, or a reference
  // to an actual DOM element from which the text will be scraped.
  var source = $('#cv')[0];

  // we support special element handlers. Register them with jQuery-style
  // ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
  // There is no support for any other type of selectors
  // (class, of compound) at this time.
  var specialElementHandlers = {
    // element with id of "bypass" - jQuery style selector
    '#bypassme': function(element, renderer) {
      // true = "handled elsewhere, bypass text extraction"
      return true
    },
    '.bypassme': function(element, renderer) {
      // true = "handled elsewhere, bypass text extraction"
      return true
    }
  };

  var margins = {
    top: 80,
    bottom: 60,
    left: 40,
    width: 522
  };

  // all coords and widths are in jsPDF instance's declared units
  // 'inches' in this case
  pdf.fromHTML(
    source // HTML string or DOM elem ref.
    , margins.left // x coord
    , margins.top // y coord
    , {
      'width': margins.width, // max width of content on PDF
      'elementHandlers': specialElementHandlers
    },
    function(dispose) {
      // dispose: object with X, Y of the last line add to the PDF
      //          this allow the insertion of new lines after html
      pdf.save('Ilja-Tkachuk-CV.pdf')
    },
    margins
  );
};

$(document).ready(function() {
  $(window).on('load', function() {
    var animation_duration = 150;
    var fadeDuration = 300;

    window.toggleCheckbox = function(checkbox, block_id) {
      if (checkbox.checked) {
        $('#' + block_id).show(animation_duration).removeClass("bypassme");
      } else {
        $('#' + block_id).hide(animation_duration).addClass("bypassme");
      }
    }

    $.modal.defaults.fadeDuration = fadeDuration;

    $('#pdf_popup').on($.modal.BEFORE_CLOSE, function(event, modal) {
      $('input:checkbox').prop('checked', 'checked').trigger('change');
    })
  })
})