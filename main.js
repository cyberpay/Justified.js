var photos = [];
var category = 'kopie';

$(document).ready(function() {
  $('.nav li').each(function(d, v) {
    var $li = $(v);
    var id = $li.attr('id');
    $li.on('click', function() {
      category = id;
      $('.nav li a').removeClass('active');
      $li.find('a').addClass('active');
      showPhotos();
    });
  })

  $.ajax({
    url: 'http://wizjemalarskie.pl/photos.php',
    method: 'get',
    dataType: 'json',
    success: function(data) {
      photos = data.photos;
      showPhotos();
    }
  })
});

var showPhotos = function() {
  $('.image-container').empty().justifiedImages({
    images: photos[category],
    rowHeight: 300,
    maxRowHeight: 1000,
    thumbnailPath: function(photo, width, height) {
      var purl = photo.url;
      return purl;
    },
    getSize: function(photo) {
      return {
        width: photo.width,
        height: photo.height
      };
    },
    margin: $('#margin').val()
  });
};

$(window).resize(function() {
  showPhotos();
});
