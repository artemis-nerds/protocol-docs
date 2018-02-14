$(function() {
  var INTERNAL_NAMES = {
    '0351a5ac': 'valueFloat',
    '077e9f3c': 'shipSystemSync',
    '19c6e2d4': 'clientConsoles',
    '26faacb9': 'gmButton',
    '3de66711': 'startGame',
    '4c821d3c': 'valueInt',
    '574c4c4b': 'commsMessage',
    '69cc01d9': 'valueFourInts',
    '6aadc57f': 'controlMessage',
    '6d04b3da': 'plainTextGreeting',
    '80803df9': 'objectBitStream',
    '809305a7': 'gmText',
    '902f0b1a': 'bigMess',
    '9ad1f23b': 'carrierRecord',
    'ae88e058': 'incomingMessage',
    'b83fd2c4': 'attack',
    'c2bee72e': 'beamRequest',
    'cc5a3e30': 'objectDelete',
    'd672c35f': 'commText',
    'e548e74a': 'connected',
    'ee665279': 'objectText',
    'f5821226': 'heartbeat',
    'f754c8fe': 'simpleEvent'
  };
  var PACKET_SORTS = {
    type: function(a, b) {
      var text_a = a[0].cells[1].innerText + a[0].cells[2].innerText + a[0].cells[4].innerText;
      var text_b = b[0].cells[1].innerText + b[0].cells[2].innerText + b[0].cells[4].innerText;
      return text_a.localeCompare(text_b);
    },
    name: function(a, b) {
      return a[0].cells[0].innerText.localeCompare(b[0].cells[0].innerText);
    }
  };

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

  // build packet table of contents
  var rows = [];
  $('#packet-types section > section').each(function(i, $el) {
    if ($el.id) {
      var $titleEl = $('h3', $el).eq(0);
      var $props = $('.pkt-props', $el);
      var $types = $props.children('code');
      var whoFrom = $props.children('span').text();
      var mainType = $types.eq(0).text();

      var $link = $('<a />').attr('href', '#' + $el.id).text($titleEl.text());
      if ($titleEl.hasClass('removed')) $link.addClass('removed');

      var $row = $('<tr />').append(
        $('<td />').append($link),
        $('<td />').text(whoFrom),
        $('<td />').append(
          $('<code />').text(mainType)
        ),
        $('<td />').append(
          $('<code />').text(INTERNAL_NAMES[mainType.substr(2)])
        ),
      );

      if ($types.length > 1) {
        var $subTypeCode = $('<code />').text($types.eq(1).text());
        $row.append(
          $('<td />').append($subTypeCode)
        );

        if ($types.length > 2) {
          $subTypeCode.after('-',
            $('<code />').text($types.eq(2).text())
          );
        }
      } else $row.append('<td />');

      rows.push($row);
    }
  });

  sortPacketTable();
  $('#packet-sort input').click(sortPacketTable);

  function sortPacketTable() {
    var key = $('#packet-sort input:checked').val();
    rows.sort(PACKET_SORTS[key]);
    var $packetTable = $('#packet-table tbody').empty();
    $(rows).each(function(i, el) {
      $packetTable.append(el);
    });
  }
});
