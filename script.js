$(function() {
  // build navigation
  var $navRoot = $('#sidebar'), $navParent = null;
  $('content > section, content > section > section').each(function(i, $el) {
    if ($el.id) {
      var $titleEl = $('h2,h3', $el).eq(0);
      var $li = $('<li />').append(
        $('<a />').attr('href', '#' + $el.id).text($titleEl.text())
      );
      var $parent;

      if ($titleEl.is('h2')) {
        $parent = $navRoot;
        $navParent = $li;
      } else {
        if ($navParent.is('li')) {
          var $ul = $('<ul />').attr('class', 'nav nav-stacked');
          $navParent.append($ul);
          $navParent = $ul;
        }

        $parent = $navParent;
      }

      $parent.append($li);
    }
  });
  $('body').scrollspy({
    target: '.navsidebar',
    offset: 40
  });
});
