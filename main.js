var photos = [];
/* Download images from flickr */
$(document).ready(function(){
    $.ajax({
        url : 'http://wizjemalarskie.pl/photos.php',
        method: 'get',
        dataType: 'json',
        success : function(data){
            photos = data.photos.kopie;
            showPhotos();
        }
    })
});
var showPhotos = function(){
    $('.image-container').empty().justifiedImages({
        images : photos,
        rowHeight: 200,
        maxRowHeight: 500,
        thumbnailPath: function(photo, width, height){
            var purl = photo.url;
            return purl;
        },
        getSize: function(photo){
            return {width: photo.width, height: photo.height};
        },
        margin: $('#margin').val()
    });
};
$( window ).resize(function() {
    showPhotos();
});
