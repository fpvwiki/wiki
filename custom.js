function processExternalAnchors() {
  var anchors = $('a[href^="http"]').filter(function() {
    var $a = $(this);

    // don't apply to links that have youtube images
    if ($a.find('img[src^="http"]').length) {
      return false;
    }

    if ($a.attr('data-no-external')) {
      return false;
    }

    return true;
  });

  anchors.addClass('external');
}

$(function() {
  processExternalAnchors();
});
