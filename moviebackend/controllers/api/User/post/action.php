<?php

include_once '../../../../models/post.php';
include_once '../../../../config/header.php';

define('SITE_ROOT', "../upload/"); 

function handleResponse($statusCode, $message)
{
    http_response_code($statusCode);
    echo json_encode(['error' => $message]);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_FILES['file'])) {
        $file = $_FILES["file"];
        if ($file["error"] > 0) {
            handleResponse(400, 'Error during file upload: ' . $file["error"]);
        }

        $allowedTypes = ['image/webp', 'image/png', 'image/jpeg', 'image/jpg'];
        $fileType = mime_content_type($file["tmp_name"]);
        if (!in_array($fileType, $allowedTypes)) {
            handleResponse(400, 'Invalid file type. Supported types are: webp, png, jpeg, jpg.');
        }

        $maxFileSize = 300 * 1024;
        if ($file["size"] > $maxFileSize) {
            handleResponse(400, 'File size exceeds the maximum allowed size (300 KB).');
        }

        if (!is_dir(SITE_ROOT) && !mkdir(SITE_ROOT, 0777, true)) {
            handleResponse(500, 'Failed to create the upload directory.');
        }

        $fileName = pathinfo($file["name"], PATHINFO_FILENAME);
        $fileExtension = pathinfo($file["name"], PATHINFO_EXTENSION);
        $randomName = uniqid() . '-' . preg_replace('/[^a-zA-Z0-9_-]/', '_', $fileName) . '.' . $fileExtension;
        $uploadPath = SITE_ROOT . strtolower($randomName);

        if (!move_uploaded_file($file["tmp_name"], $uploadPath)) {
            handleResponse(400, 'Error moving the file.');
        }

        $name = $_POST['name'] ?? '';
        $price = $_POST['price'] ?? '';
        $brand = $_POST['ceats'] ?? ''; // Corrected name variable

        if (empty($name) || empty($price) || empty($brand)) { // Corrected variable usage
            handleResponse(400, 'Invalid input. Please provide name, price, and brand.');
        }

        $obj = new Post();
        $result = $obj->action($name, $price, $brand, $uploadPath); // Updated to use $brand

        echo json_encode(["message" => $result]);
    } else {
        handleResponse(400, 'No file uploaded.');
    }
} else {
    handleResponse(405, 'Invalid request method. Only POST is allowed.');
}

