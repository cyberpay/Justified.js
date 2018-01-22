<?
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$photos = [];

$directory = "images/";
$dirs = scandir($directory);

foreach ($dirs as $dir) {
  if (substr($dir, 0, 1) === ".") continue;

  $files = scandir($directory . $dir);

  foreach ($files as $photo) {
    if (substr($photo, 0, 1) === ".") continue;
    $path = $directory . $dir . '/' . $photo;
    list($width, $height, $type, $attr) = getimagesize($path);
    $photos[$dir][] = array(
      'url' => $path,
      'width' => $width,
      'height' => $height
    );
  }

}

echo json_encode(['photos' => $photos]);
