<?php

// Define paths to required files
$modelsPath = '../../../../models/get.php';
$headersPath = '../../../../config/header.php';

// Check if required files exist
if (!file_exists($modelsPath) || !file_exists($headersPath)) {
    respondWithError(500, 'Required files are missing');
}

// Require the necessary files
require_once $modelsPath;
require_once $headersPath;

// Decode the incoming JSON data
$data = json_decode(file_get_contents('php://input'));

// Validate the incoming data
if (!isset($data->mtype)) {
    respondWithError(400, 'Missing mtype parameter');
}

$mtype = $data->mtype;

// Create an instance of the Get class
$obj = new Get();

// Call the ticket method with the mtype argument
$result = $obj->ticket($mtype);

// Handle errors
if (isset($result['error'])) {
    respondWithError(500, 'Internal server error');
}

// Send the result
echo json_encode($result);

/**
 * Function to handle errors and send response.
 *
 * @param int    $statusCode HTTP status code
 * @param string $message    Error message
 */
function respondWithError($statusCode, $message) {
    http_response_code($statusCode);
    echo json_encode(['error' => $message]);
    exit();
}
?>
