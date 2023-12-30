<?php
echo "s";
$data = $_FILES["file"];
$err = $data["error"];
$path = $_GET["path"];
$pathWithFile = $path . '/' . $data["name"];

if($err !== UPLOAD_ERR_OK | file_exists($pathWithFile)) {
    exit("Error");
}

move_uploaded_file($data["tmp_name"], $pathWithFile);